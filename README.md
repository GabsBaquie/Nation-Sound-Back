# Strapi CMS

Ce projet est une application CMS (Content Management System) construite avec Strapi. Il permet de gérer différents types de contenu tels que des concerts, des partenaires, des alertes, etc.

## Table des matières

- [Structure du projet](#structure-du-projet)
- [Installation](#installation)
- [Configuration](#configuration)
  - [Base de données](#base-de-données)
  - [Plugins](#plugins)
- [Contenu](#contenu)
  - [Types de contenu](#types-de-contenu)
  - [Composants](#composants)
- [Docker](#docker)

## Structure du projet

```

.
├── strapi-CMS/
│   ├── .editorconfig
│   ├── .env
│   ├── .env.example
│   ├── .strapi/
│   │   ├── client/
│   │   │   ├── app.js
│   │   │   └── index.html
│   ├── .strapi-updater.json
│   ├── config/
│   │   ├── admin.ts
│   │   ├── api.ts
│   │   ├── database.ts
│   │   ├── middlewares.ts
│   │   ├── plugins.ts
│   │   └── server.ts
│   ├── database/
│   │   └── migrations/
│   │       └── .gitkeep
│   ├── package.json
│   ├── public/
│   │   └── uploads/
│   │       └── .gitkeep
│   ├── README.md
│   ├── src/
│   │   ├── admin/
│   │   │   └── app.example.tsx
│   │   ├── api/
│   │   │   ├── concerts/
│   │   │   │   ├── controllers/
│   │   │   │   │   └── concerts.ts
│   │   │   │   ├── models/
│   │   │   │   │   └── concerts.settings.json
│   │   │   │   └── services/
│   │   │   │       └── concerts.ts
│   │   │   ├── partenaires/
│   │   │   │   ├── controllers/
│   │   │   │   │   └── partenaires.ts
│   │   │   │   ├── models/
│   │   │   │   │   └── partenaires.settings.json
│   │   │   │   └── services/
│   │   │   │       └── partenaires.ts
│   │   │   ├── alertes/
│   │   │   │   ├── controllers/
│   │   │   │   │   └── alertes.ts
│   │   │   │   ├── models/
│   │   │   │   │   └── alertes.settings.json
│   │   │   │   └── services/
│   │   │   │       └── alertes.ts
│   │   ├── components/
│   │   │   ├── card/
│   │   │   │   └── card.json
│   │   │   ├── programmation-card/
│   │   │   │   └── programmation-card.json
│   │   │   ├── infos/
│   │   │   │   └── infos.json
│   │   │   ├── footer/
│   │   │   │   └── footer.json
│   │   │   ├── reseaux/
│   │   │       └── reseaux.json
│   │   ├── extensions/
│   │   └── index.ts
│   ├── tsconfig.json
│   ├── tsconfig.tsbuildinfo
│   └── types/
│       └── generated/

```

## Installation

1. Clonez le dépôt :

   ```sh
   git clone <URL_DU_DEPOT>
   cd strapi-CMS
   ```

2. Installez les dépendances :

   ```sh
   npm install
   ```

3. Configurez les variables d'environnement en copiant le fichier `.env.example` en `.env` et en remplissant les valeurs nécessaires.

## Configuration

### Base de données

La configuration de la base de données se trouve dans le fichier `config/database.ts`. Par défaut, le projet utilise MySQL. Vous pouvez modifier les paramètres de connexion en fonction de votre environnement.

Exemple de configuration MySQL :

```typescript
module.exports = ({ env }) => ({
  connection: {
    client: "mysql",
    connection: {
      host: env("DATABASE_HOST", "localhost"),
      port: env.int("DATABASE_PORT", 3306),
      database: env("DATABASE_NAME", "strapi"),
      user: env("DATABASE_USERNAME", "root"),
      password: env("DATABASE_PASSWORD", "password"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
```

### Plugins

Les plugins sont configurés dans le fichier `config/plugins.ts`. Voici quelques plugins inclus :

- **wysiwyg-react-md-editor** : Un éditeur WYSIWYG pour les champs de texte.
- **google-maps** : Intégration de Google Maps pour les champs de localisation.
- **entity-relationship-chart** : Visualisation des relations entre les entités.
- **transformer** : Plugin pour transformer les données avant de les sauvegarder.

## Contenu

### Types de contenu

- **Concerts** : Gère les informations sur les concerts.

  - `controllers/concerts.ts`
  - `models/concerts.settings.json`
  - `services/concerts.ts`

- **Partenaires** : Gère les informations sur les partenaires.

  - `controllers/partenaires.ts`
  - `models/partenaires.settings.json`
  - `services/partenaires.ts`

- **Alertes** : Gère les alertes.
  - `controllers/alertes.ts`
  - `models/alertes.settings.json`
  - `services/alertes.ts`

### Composants

- **Card** : Composant pour afficher des cartes d'information.

  - `components/card/card.json`

- **Programmation Card** : Composant pour afficher la programmation des concerts.

  - `components/programmation-card/programmation-card.json`

- **Infos** : Composant pour afficher des informations générales.

  - `components/infos/infos.json`

- **Footer** : Composant pour le pied de page.

  - `components/footer/footer.json`

- **Reseaux** : Composant pour les liens vers les réseaux sociaux.
  - `components/reseaux/reseaux.json`

## Docker

Un fichier Dockerfile est inclus pour faciliter le déploiement de l'application. Pour construire et exécuter le conteneur Docker :

1. Construisez l'image Docker :

   ```sh
   docker build -t strapi-cms .
   ```

2. Exécutez le conteneur :
   ```sh
   docker run -p 1337:1337 strapi-cms
   ```
