
# Use Nginx to serve the static portfolio website
FROM nginx:stable-alpine

# Copy portfolio files to the Nginx web directory
COPY index.html /usr/share/nginx/html/
COPY dashboard.html /usr/share/nginx/html/
COPY auth.js /usr/share/nginx/html/
COPY dashboard.js /usr/share/nginx/html/
COPY auth-config.js /usr/share/nginx/html/

# Nginx serves HTTP on container port 80
EXPOSE 80

# Start Nginx in the foreground
CMD ["nginx", "-g", "daemon off;"]
