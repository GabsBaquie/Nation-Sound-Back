# Utiliser une image de base Node.js compatible avec Strapi
FROM node:18

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json depuis strapi-CMS
COPY strapi-CMS/package*.json ./

# Installer les dépendances
RUN npm install --production

# Copier tout le contenu du répertoire strapi-CMS dans le répertoire de travail
COPY strapi-CMS .

# Construire l'application Strapi
RUN npm run build

# Exposer le port utilisé par Strapi
EXPOSE 1337

# Définir les variables d'environnement (optionnelles, pour être ajustées si nécessaire)
ENV NODE_ENV=production
ENV PORT=1337

# Démarrer l'application en mode développement
CMD ["npm", "run", "develop"]