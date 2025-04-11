# Step 1: User Node to build the React App
FROM node:18 as build

WORKDIR /app
COPY . .
RUN npm install
RUN npm run build

# Step 2: Use Nginx to serve the app
FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]