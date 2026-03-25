# Student Dashboard SaaS

## Projet

Créer l'interface front-end d'un tableau de bord étudiant pour gérer :
- Ses cours
- Ses notes
- Son emploi du temps

## Style

Minimaliste, professionnel et direct.

## Technologies

- **Polices** : Manrope (titres) et Inter (texte) via Google Fonts
- **Couleurs** :
  - Fond : `#F8FAFC` (gris très clair)
  - Texte : `#0F172A` (bleu presque noir)
  - Accent : `#0EA5E9` (bleu ciel)
  - Succès : `#22C55E` (vert)

## Structure

- 1 page = 1 fichier HTML + 1 fichier CSS dédié
- 1 script JavaScript par page
- Variables CSS globales dans `css/global-styles.css`

## Conventions de Nommage

### CSS
- Noms de classes descriptifs et longs
- Exemple : `login-form-input-email-field` (CORRECT)
- Pas de noms génériques : `input`, `field` (INTERDIT)

### JavaScript
- Variables explicites
- Exemple : `studentAverageGrade`, `courseProgressPercent` (CORRECT)
- Pas de `x`, `val`, `data` (INTERDIT)
- Fichiers : `script-dashboard.js` (CORRECT), `script.js` (INTERDIT)

## Branches Git

- `main` : Code de production
- `develop` : Intégration de toutes les fonctionnalités
- `feature-auth` : Page de connexion (priorité)
- `feature-dashboard` : Tableau de bord
- `feature-courses` : Page des cours
- `feature-grades` : Page des notes
- `feature-schedule` : Emploi du temps
- `feature-profile` : Profil utilisateur

## Démarrage

Ouvrir `login.html` dans un navigateur.
