# Vitrine Express AI — MVP scaffold

Application Next.js en français pour aider les petits commerçants à créer un kit de communication produit.

## Inclus dans cette première version
- Landing page responsive.
- Studio de création avec formulaire produit.
- Route serveur de génération de contenu avec validation Zod.
- Mode `demo` sans clé API, pour tester le parcours.
- Adaptateur Hugging Face Router facultatif.
- Variables d'environnement documentées et exclues de Git.

## Prérequis
Node.js 20.9+ recommandé et npm.

## Lancer localement
1. Décompresser l'archive.
2. Ouvrir le dossier dans VS Code.
3. Copier `.env.example` vers `.env.local`.
4. Dans un terminal, exécuter `npm install`, puis `npm run dev`.
5. Ouvrir `http://localhost:3000`.

Le mode démo est activé par défaut et ne nécessite pas d'API.

## Activer Hugging Face (facultatif)
Dans `.env.local`, définir `AI_PROVIDER=huggingface`, ajouter `HUGGINGFACE_API_TOKEN` et vérifier que le modèle choisi est disponible pour ton compte. Le nom de modèle par défaut est un exemple, pas une garantie de disponibilité. Le fournisseur peut facturer ou limiter certains modèles : vérifier ses conditions et tarifs avant usage commercial. Ne jamais préfixer le jeton par `NEXT_PUBLIC_`.

## Limites connues
- L'authentification Supabase, les profils et la persistance ne sont pas encore branchés.
- L'import de photo est seulement une sélection locale d'interface ; il n'est pas encore incorporé dans une image exportable.
- Les visuels téléchargeables, la facturation, les limites de quota, les tests automatisés et les pages légales restent à implémenter.
- Ne pas déployer comme service commercial avant d'ajouter ces protections et de tester le coût par génération.

## Prochaines étapes
1. Installer les dépendances et lancer le build.
2. Tester le mode démo et ajuster les visuels.
3. Brancher Supabase Auth/DB/Storage.
4. Valider le fournisseur IA et les limites d'usage.
5. Ajouter le générateur graphique/export PNG.
6. Ajouter les tests, les pages de confidentialité/conditions, puis préparer GitHub et Vercel.

## Dépôt GitHub et déploiement Vercel

### Avant de publier
- Faire passer le workflow GitHub Actions « Vérification du projet ».
- Tester le parcours de génération en mode démo sur ordinateur et téléphone.
- Ne pas ajouter de jetons, mots de passe ni fichiers `.env.local` au dépôt.
- Configurer les variables serveur dans les paramètres du projet Vercel uniquement si un fournisseur IA est activé.
- Garder `AI_PROVIDER=demo` pour le premier déploiement de prévisualisation.

### Préparer GitHub
1. Créer un dépôt privé nommé `vitrine-express-ai` sur GitHub.
2. Depuis ce dossier, exécuter `git init`, `git add .`, puis `git commit -m "Préparer Vitrine Express AI"`.
3. Ajouter l'URL du dépôt comme remote `origin`, puis pousser la branche `main`.
4. Vérifier l'onglet Actions et attendre le résultat du workflow avant le déploiement.

### Préparer Vercel
1. Importer le dépôt GitHub dans Vercel et choisir le framework Next.js (détection automatique).
2. Pour une première prévisualisation, laisser `AI_PROVIDER=demo` ; aucune clé IA n'est nécessaire.
3. Déployer en prévisualisation et tester la page d'accueil ainsi que `/studio`.
4. Ne pas annoncer un lancement commercial tant que l'authentification, le stockage, les quotas, les exports graphiques, les pages légales et les tests de sécurité ne sont pas terminés.

> L'accès à GitHub ou Vercel dans le navigateur ne signifie pas automatiquement que ChatGPT dispose d'une connexion autorisée à ces comptes. Le dépôt et le déploiement doivent être vérifiés dans leurs interfaces respectives.
