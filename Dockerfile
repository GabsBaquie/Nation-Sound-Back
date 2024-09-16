# Utiliser une image de base Node.js compatible avec Strapi
FROM node:22.7-bookworm-slim

# Définir le répertoire de travail dans le conteneur
WORKDIR /app

# Copier les fichiers package.json et package-lock.json
COPY strapi-CMS/package*.json ./

# Installer les dépendances
RUN npm install --production && npm cache clean --force

# Copier tout le contenu du répertoire strapi-CMS dans le répertoire de travail
COPY strapi-CMS ./

# Construire l'application Strapi
RUN npm run build

# Ajouter un utilisateur non-root pour des raisons de sécurité
RUN useradd -ms /bin/bash strapiuser
RUN chown -R strapiuser:strapiuser /app
USER strapiuser

# Exposer le port utilisé par Strapi
EXPOSE 1337

# Définir les variables d'environnement (optionnelles, pour être ajustées si nécessaire)
ENV NODE_ENV=production
ENV PORT=1337

# Démarrer l'application en mode production
CMD ["npm", "start"]