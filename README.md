# Strapi CMS avec personnalisation back-end

Ce projet est une application CMS (Content Management System) construite avec Strapi, un framework open-source basé sur Node.js, combiné avec un développement back-end personnalisé. Strapi permet de créer, gérer et distribuer du contenu via une API RESTful ou GraphQL de manière flexible. Cependant, pour répondre aux exigences spécifiques du projet, j’ai ajouté et développé des fonctionnalités supplémentaires au niveau du back-end.

Backoffice de Strapi et développement personnalisé

Le backoffice de Strapi offre une interface d’administration qui permet de gérer le contenu (concerts, partenaires, alertes). J’ai utilisé cette interface pour définir les types de contenu, mais j’ai également développé des fonctionnalités supplémentaires en back-end pour répondre à des besoins spécifiques non couverts par Strapi.

Développement personnalisé :

    •	API et logique métier : Bien que Strapi génère des API par défaut, j’ai codé des endpoints et des logiques métier supplémentaires pour gérer des cas d’utilisation spécifiques, comme la gestion avancée des partenaires ou la personnalisation des alertes.
    •	Sécurisation des données : J’ai intégré des mesures de sécurité supplémentaires pour assurer la conformité avec le RGPD et les bonnes pratiques de sécurisation des API (par exemple, la gestion des rôles et permissions utilisateurs avancée, l’authentification renforcée).

Fonctionnalités du CMS

    •	Gestion des concerts : Création, modification et suppression des informations sur les concerts via le backoffice, avec une logique métier codée pour valider et organiser ces données de manière optimisée.
    •	Gestion des partenaires : Développement de composants back-end spécifiques pour gérer les partenaires, en plus de la gestion via le backoffice.
    •	Gestion des alertes : Système d’alerte personnalisé, où les administrateurs peuvent gérer des notifications urgentes pour les utilisateurs.
    •	API Backend : En plus de l’API générée par Strapi, j’ai développé des endpoints supplémentaires pour des besoins spécifiques en matière de performances et de sécurité.

Avantages de l’approche hybride Strapi + code personnalisé

    •	Flexibilité : L’utilisation de Strapi permet de bénéficier d’un CMS robuste, mais le développement personnalisé permet d’ajouter des fonctionnalités spécifiques et sur-mesure.
    •	Performance : J’ai optimisé certaines parties du back-end pour mieux répondre aux besoins de performance du projet, en ajustant les requêtes vers la base de données et en optimisant certaines API.
    •	Sécurité : Au-delà des fonctionnalités de sécurité intégrées à Strapi, j’ai ajouté des protections supplémentaires pour répondre aux exigences du projet (RGPD, sécurisation des accès au backoffice, gestion des utilisateurs).

Technologies utilisées

    •	Node.js : Environnement d’exécution JavaScript côté serveur.
    •	Strapi : Framework CMS basé sur Node.js.
    •	MySQL : Base de données relationnelle utilisée pour stocker les données.
    •	Docker : Conteneurisation pour faciliter le déploiement et la gestion de l’application.
    •	TypeScript : Langage de programmation utilisé pour améliorer la qualité et la maintenabilité du code.
    •	Développement personnalisé : En plus de l’utilisation de Strapi, des fonctionnalités et des API supplémentaires ont été codées pour répondre aux exigences spécifiques du projet.

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
