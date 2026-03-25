# Student Dashboard SaaS - Tableau de Bord Étudiant

Un tableau de bord étudiant moderne et minimaliste pour gérer vos cours, notes, emploi du temps et profil.

## 🎯 Fonctionnalités

- **Connexion sécurisée** - Page de connexion avec validation de formulaire
- **Tableau de bord** - Vue d'ensemble des statistiques et progression
- **Gestion des cours** - Liste des cours avec barres de progression
- **Relevé de notes** - Tableau des notes avec filtrage et recherche
- **Emploi du temps** - Grille hebdomadaire des cours
- **Profil utilisateur** - Gestion des informations personnelles

## 🚀 Démarrage rapide

### Prérequis

- Un navigateur web moderne (Chrome, Firefox, Edge, Safari)
- Aucun serveur backend nécessaire - application 100% front-end

### Installation

1. **Ouvrir le projet**
   ```bash
   cd student-dashboard
   ```

2. **Ouvrir dans le navigateur**
   - Double-cliquez sur `login.html`
   - Ou ouvrez le fichier directement dans votre navigateur

3. **Navigation**
   - Email: n'importe quelle adresse email valide
   - Mot de passe: minimum 6 caractères

## 📁 Structure du projet

```
student-dashboard/
├── css/
│   ├── global-styles.css      # Variables CSS et styles globaux
│   ├── style-login.css        # Styles de la page de connexion
│   ├── style-dashboard.css    # Styles du tableau de bord
│   ├── style-courses.css      # Styles de la page des cours
│   ├── style-grades.css       # Styles de la page des notes
│   ├── style-schedule.css     # Styles de l'emploi du temps
│   └── style-profile.css      # Styles du profil
├── js/
│   ├── script-login.js        # Validation connexion
│   ├── script-dashboard.js    # Gestion du tableau de bord
│   ├── script-courses.js      # Gestion des cours
│   ├── script-grades.js       # Gestion des notes
│   ├── script-schedule.js     # Gestion emploi du temps
│   └── script-profile.js      # Gestion du profil
├── assets/
│   └── images/                # Images et icônes
├── login.html                 # Page de connexion
├── dashboard.html             # Tableau de bord
├── courses.html               # Page des cours
├── grades.html                # Page des notes
├── schedule.html              # Emploi du temps
├── profile.html               # Profil utilisateur
└── README.md                  # Ce fichier
```

## 🎨 Conventions de nommage (OBLIGATOIRE)

### CSS

| Élément | CORRECT (à utiliser) | INTERDIT (ne jamais faire) |
|---------|---------------------|---------------------------|
| Class | `course-card-progress-bar-container` | `progress` ou `bar` |
| Class | `grade-row-average-value-cell` | `average` ou `cell` |
| Class | `login-form-input-email-field` | `input` ou `field` |
| ID | `id-schedule-weekly-grid-container` | `grid` ou `schedule` |

### JavaScript

| Élément | CORRECT (à utiliser) | INTERDIT (ne jamais faire) |
|---------|---------------------|---------------------------|
| Variable | `studentAverageGrade` | `x`, `val`, `data` |
| Variable | `courseProgressPercent` | `tmp`, `foo` |
| Fichier | `script-dashboard.js` | `script.js` (trop générique) |

## 🌿 Workflow Git (GitFlow)

### Structure des branches

```
main (production - code validé)
└── develop (intégration - brouillon principal)
    ├── feature-auth (connexion)
    ├── feature-dashboard (tableau de bord)
    ├── feature-courses (cours)
    ├── feature-grades (notes)
    ├── feature-schedule (emploi du temps)
    └── feature-profile (profil)
```

### Commandes Git de base

**Initialiser le dépôt**
```bash
git init
git add .
git commit -m "Initial commit: Student Dashboard SaaS"
git branch -M main
```

**Créer une branche de fonctionnalité**
```bash
git checkout -b feature-nom-fonctionnalite
```

**Travailler sur la branche**
```bash
# Faire des modifications
git add .
git commit -m "feat: description claire des changements"
```

**Fusionner vers develop**
```bash
git checkout develop
git merge feature-nom-fonctionnalite
```

**Préparer la production**
```bash
git checkout main
git merge develop
git push origin main
```

### Messages de commit (Conventional Commits)

- `feat:` Nouvelle fonctionnalité
- `fix:` Correction de bug
- `docs:` Documentation
- `style:` Formatage, style
- `refactor:` Refactoring
- `test:` Tests
- `chore:` Maintenance

Exemple:
```bash
git commit -m "feat: ajout validation formulaire connexion"
git commit -m "fix: correction affichage notes dashboard"
```

## 🎨 Design System

### Couleurs

```css
--color-background-gray-light: #F8FAFC;    /* Fond principal */
--color-text-blue-almost-black: #0F172A;   /* Texte principal */
--color-accent-blue-sky: #0EA5E9;          /* Boutons, liens */
--color-success-green: #22C55E;            /* Succès, validé */
--color-error-red: #EF4444;                /* Erreurs */
--color-warning-orange: #F59E0B;           /* Avertissements */
```

### Typographie

- **Titres**: Manrope (Google Fonts)
- **Corps de texte**: Inter (Google Fonts)

### Polices

```html
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Manrope:wght@700;800&display=swap" rel="stylesheet">
```

## 📱 Pages

### 1. Login (`login.html`)
- Formulaire de connexion
- Validation email et mot de passe
- Lien "Mot de passe oublié"
- Lien d'inscription

### 2. Dashboard (`dashboard.html`)
- Cartes de statistiques
- Progression par matière
- Prochains cours
- Dernières notes

### 3. Courses (`courses.html`)
- Grille des cartes de cours
- Recherche et filtrage
- Barres de progression
- Statuts des cours

### 4. Grades (`grades.html`)
- Résumé des statistiques
- Tableau des notes
- Filtrage par matière et note
- Vue cartes/tableau

### 5. Schedule (`schedule.html`)
- Grille hebdomadaire
- Navigation entre semaines
- Événements à venir
- Vue jour/semaine

### 6. Profile (`profile.html`)
- Informations personnelles
- Sécurité du compte
- Préférences
- Statistiques académiques

## 🔧 Personnalisation

### Modifier les couleurs

Éditez `css/global-styles.css`:

```css
:root {
  --color-accent-blue-sky: #VOTRE_COULEUR;
  /* ... autres variables */
}
```

### Ajouter un cours

Dans `js/script-courses.js`, ajoutez un objet à `initialiserDonneesCours()`:

```javascript
{
  identifiantCours: 9,
  nomCours: 'Nouveau Cours',
  nomProfesseur: 'Pr. Professeur',
  description: 'Description du cours',
  categorie: 'tech',
  icone: '🚀',
  nombreEtudiants: 100,
  nombreDevoirs: 5,
  pourcentageProgression: 50,
  statut: 'in-progress'
}
```

## 🎯 Bonnes pratiques

1. **Une page = un fichier HTML + un fichier CSS dédié**
2. **Noms de classes descriptifs et longs**
3. **Variables JavaScript explicites**
4. **Commentaires utiles dans le code**
5. **Tests avant commit**
6. **Commits atomiques et descriptifs**

## 📝 Licence

Projet étudiant - Usage éducatif uniquement

## 👥 Contributeurs

Développé dans le cadre d'un projet pédagogique étudiant.

---

**Astuce**: Pour une expérience de développement optimale, utilisez l'extension "Live Server" de VS Code.
