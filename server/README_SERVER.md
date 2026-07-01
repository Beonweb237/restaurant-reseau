# Restaurant Reseau — Backend

Ce dossier contient le squelette backend pour le MVP (Express + TypeScript).

Run (local dev):

1. Copier l'exemple d'env:
   cp .env.example .env
2. Installer les dépendances:
   npm install
3. Lancer en dev:
   npm run dev

Endpoints initiaux:
- GET /health
- GET /restaurants
- GET /restaurants/:id

Notes:
- Prisma est inclus dans les dépendances; la base de données n'est pas requise pour les endpoints stubbed fournis ici.
