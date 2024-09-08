# Etape 1 : Construction de l'application
FROM node:18 AS builder

# Définir le répertoire de travail
WORKDIR /app

# Copier les fichiers package.json et package-lock.json depuis strapi-CMS
COPY strapi-CMS/package*.json ./

# Installer toutes les dépendances (production + développement)
RUN npm ci

# Copier tout le contenu du projet strapi-CMS
COPY strapi-CMS .

# Construire l'application Strapi
RUN npm run build

# Etape 2 : Image finale (exécutable)
FROM node:18-alpine AS runtime

# Définir le répertoire de travail
WORKDIR /app

# Copier uniquement les fichiers nécessaires depuis l'étape de construction
COPY --from=builder /app/package*.json ./
COPY --from=builder /app/node_modules ./node_modules
COPY --from=builder /app/build ./build
COPY --from=builder /app/.cache ./.cache
COPY --from=builder /app/public ./public
COPY --from=builder /app/config ./config
COPY --from=builder /app/src ./src

# Installer uniquement les dépendances de production
RUN npm ci --production

# Exposer le port utilisé par Strapi
EXPOSE 1337

# Définir les variables d'environnement (à ajuster si nécessaire)
ENV NODE_ENV=production
ENV PORT=1337

# Démarrer l'application en mode production
CMD ["npm", "start"]