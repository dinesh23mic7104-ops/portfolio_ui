// Session-only account page (MFA intentionally removed).
(async () => {
  const cfg = window.PORTFOLIO_AUTH_CONFIG;
  const loading = document.getElementById("loading");
  const content = document.getElementById("account-content");
  const errorLabel = document.getElementById("account-error");
  const goLogin = () => window.location.replace(new URL("index.html?login=1", window.location.href));

  if (!window.supabase?.createClient || !cfg?.supabaseUrl || !cfg?.supabasePublishableKey) {
    loading.textContent = "Authentication configuration is missing. Check auth-config.js.";
    return;
  }

  const client = window.supabase.createClient(cfg.supabaseUrl, cfg.supabasePublishableKey);
  try {
    const { data: { user }, error } = await client.auth.getUser();
    if (error || !user) return goLogin();
    document.getElementById("user-email").textContent = user.email || "Signed-in user";
    loading.hidden = true;
    content.hidden = false;
    document.getElementById("account-logout").addEventListener("click", async () => {
      const { error: signOutError } = await client.auth.signOut();
      if (signOutError) { errorLabel.textContent = signOutError.message; return; }
      goLogin();
    });
    client.auth.onAuthStateChange(event => { if (event === "SIGNED_OUT") goLogin(); });
  } catch (error) {
    loading.textContent = "Unable to verify your session.";
    errorLabel.textContent = error?.message || "Unknown error.";
  }
})();
