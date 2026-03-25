# Git Branch Structure - Student Dashboard SaaS

## Overview

This project uses a GitFlow-inspired workflow with separate feature branches for each page of the application.

## Branch Hierarchy

```
main (production-ready code)
└── develop (integration branch - all features merged)
    ├── feature-auth (login page - PRIORITY)
    ├── feature-dashboard (dashboard page)
    ├── feature-courses (courses page)
    ├── feature-grades (grades page)
    ├── feature-schedule (schedule page)
    └── feature-profile (profile page)
```

## Branch Content

### main / develop
Contains the complete application with all pages:
- `login.html`, `dashboard.html`, `courses.html`, `grades.html`, `schedule.html`, `profile.html`
- `css/global-styles.css`, `css/style-login.css`, `css/style-dashboard.css`, etc.
- `js/script-login.js`, `js/script-dashboard.js`, `js/script-courses.js`, etc.
- `README.md`, `.gitignore`

### feature-auth (Priority - Start Here)
Login page only:
- `login.html`
- `css/style-login.css`
- `css/global-styles.css`
- `js/script-login.js`
- `.gitignore`

### feature-dashboard
Dashboard page only:
- `dashboard.html`
- `css/style-dashboard.css`
- `css/global-styles.css`
- `js/script-dashboard.js`
- `README.md`
- `.gitignore`

### feature-courses
Courses page only:
- `courses.html`
- `css/style-courses.css`
- `css/global-styles.css`
- `js/script-courses.js`
- `README.md`
- `.gitignore`

### feature-grades
Grades page only:
- `grades.html`
- `css/style-grades.css`
- `css/global-styles.css`
- `js/script-grades.js`
- `README.md`
- `.gitignore`

### feature-schedule
Schedule page only:
- `schedule.html`
- `css/style-schedule.css`
- `css/global-styles.css`
- `js/script-schedule.js`
- `README.md`
- `.gitignore`

### feature-profile
Profile page only:
- `profile.html`
- `css/style-profile.css`
- `css/global-styles.css`
- `js/script-profile.js`
- `README.md`
- `.gitignore`

## Workflow

### 1. Start with feature-auth (Priority)
```bash
git checkout feature-auth
# Work on login page
git add .
git commit -m "feat(auth): add login form validation"
```

### 2. Merge to develop when complete
```bash
git checkout develop
git merge feature-auth
```

### 3. Work on other features in parallel
```bash
git checkout feature-dashboard
# Work on dashboard
git add .
git commit -m "feat(dashboard): add statistics cards"

git checkout feature-courses
# Work on courses
git add .
git commit -m "feat(courses): add course filtering"
```

### 4. Merge completed features to develop
```bash
git checkout develop
git merge feature-dashboard
git merge feature-courses
```

### 5. Deploy to production (main)
```bash
git checkout main
git merge develop
```

## Commit Message Format

Follow Conventional Commits:

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Test additions/changes
- `chore:` Build process or auxiliary tool changes

Examples:
```bash
git commit -m "feat(auth): add email validation"
git commit -m "fix(login): correct password error message"
git commit -m "docs: update README with setup instructions"
```

## Important Notes

1. **feature-auth is the priority** - It's the entry point to the application
2. **One page per branch** - Each feature branch contains only its specific page files
3. **Global styles shared** - `css/global-styles.css` is included in all branches
4. **Naming conventions are MANDATORY** - Follow the CSS and JavaScript naming rules strictly

## CSS Naming Convention

CORRECT: `login-form-input-email-field`
INCORRECT: `input` or `field`

CORRECT: `course-card-progress-bar-container`
INCORRECT: `progress` or `bar`

## JavaScript Naming Convention

CORRECT: `studentAverageGrade`, `courseProgressPercent`
INCORRECT: `x`, `val`, `data`

CORRECT: `script-dashboard.js`
INCORRECT: `script.js` (too generic)
