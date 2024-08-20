# Utiliser une image de base Node.js
FROM node:16

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY package*.json ./

# Installer les dépendances
RUN npm install

# Copier tout le contenu du répertoire actuel
COPY . .

# Construire l'application Strapi
RUN npm run build

# Exposer le port utilisé par Strapi
EXPOSE 1337

# Démarrer l'application
CMD ["npm", "run", "develop"]