/* ========================================
   COURSES PAGE - JAVASCRIPT
   Affichage et gestion des cours
   ======================================== */

/**
 * Gestionnaire des cours
 * Gère l'affichage, la recherche et le filtrage des cours
 */
class GestionnaireCours {
  constructor() {
    this.listeCours = this.initialiserDonneesCours();
    this.rechercheInput = document.getElementById('coursesPageSearchInput');
    this.filtreSelect = document.getElementById('coursesPageFilterSelect');
    this.grilleCartesCours = document.getElementById('coursesPageCardsGridContainer');
    this.boutonAjouterCours = document.getElementById('coursesPageAddCourseButton');
    
    this.initialiserEcouteurs();
    this.afficherCours(this.listeCours);
  }
  
  /**
   * Initialise les données des cours
   * @returns {Array} Liste des cours avec toutes les propriétés
   */
  initialiserDonneesCours() {
    return [
      {
        identifiantCours: 1,
        nomCours: 'Mathématiques Avancées',
        nomProfesseur: 'Pr. Jean Dupont',
        description: 'Étude des équations différentielles et de l\'analyse complexe.',
        categorie: 'math',
        icone: '📐',
        nombreEtudiants: 120,
        nombreDevoirs: 8,
        pourcentageProgression: 85,
        statut: 'in-progress'
      },
      {
        identifiantCours: 2,
        nomCours: 'Physique Quantique',
        nomProfesseur: 'Dr. Marie Curie',
        description: 'Introduction aux principes fondamentaux de la mécanique quantique.',
        categorie: 'science',
        icone: '⚛️',
        nombreEtudiants: 85,
        nombreDevoirs: 6,
        pourcentageProgression: 72,
        statut: 'in-progress'
      },
      {
        identifiantCours: 3,
        nomCours: 'Programmation Web',
        nomProfesseur: 'M. Alan Turing',
        description: 'Développement web moderne avec React, Node.js et les bases de données.',
        categorie: 'tech',
        icone: '💻',
        nombreEtudiants: 150,
        nombreDevoirs: 12,
        pourcentageProgression: 90,
        statut: 'in-progress'
      },
      {
        identifiantCours: 4,
        nomCours: 'Base de Données',
        nomProfesseur: 'Dr. Grace Hopper',
        description: 'Conception et gestion des bases de données relationnelles et NoSQL.',
        categorie: 'tech',
        icone: '🗄️',
        nombreEtudiants: 95,
        nombreDevoirs: 7,
        pourcentageProgression: 65,
        statut: 'in-progress'
      },
      {
        identifiantCours: 5,
        nomCours: 'Algorithmes Complexes',
        nomProfesseur: 'Pr. Donald Knuth',
        description: 'Analyse et conception d\'algorithmes avancés pour la résolution de problèmes.',
        categorie: 'tech',
        icone: '🔀',
        nombreEtudiants: 75,
        nombreDevoirs: 10,
        pourcentageProgression: 58,
        statut: 'in-progress'
      },
      {
        identifiantCours: 6,
        nomCours: 'Anglais Technique',
        nomProfesseur: 'Ms. Jane Smith',
        description: 'Anglais spécialisé pour les sciences et technologies.',
        categorie: 'language',
        icone: '🌐',
        nombreEtudiants: 200,
        nombreDevoirs: 4,
        pourcentageProgression: 100,
        statut: 'completed'
      },
      {
        identifiantCours: 7,
        nomCours: 'Réseaux Informatiques',
        nomProfesseur: 'Dr. Tim Berners-Lee',
        description: 'Architecture des réseaux, protocoles et sécurité réseau.',
        categorie: 'tech',
        icone: '🌐',
        nombreEtudiants: 110,
        nombreDevoirs: 5,
        pourcentageProgression: 45,
        statut: 'in-progress'
      },
      {
        identifiantCours: 8,
        nomCours: 'Intelligence Artificielle',
        nomProfesseur: 'Pr. Geoffrey Hinton',
        description: 'Introduction au machine learning et aux réseaux de neurones.',
        categorie: 'tech',
        icone: '🤖',
        nombreEtudiants: 180,
        nombreDevoirs: 0,
        pourcentageProgression: 0,
        statut: 'not-started'
      }
    ];
  }
  
  /**
   * Initialise les écouteurs d'événements pour la recherche et le filtrage
   */
  initialiserEcouteurs() {
    if (this.rechercheInput) {
      this.rechercheInput.addEventListener('input', () => this.gererRecherche());
    }
    
    if (this.filtreSelect) {
      this.filtreSelect.addEventListener('change', () => this.gererFiltre());
    }
    
    if (this.boutonAjouterCours) {
      this.boutonAjouterCours.addEventListener('click', () => this.ajouterNouveauCours());
    }
  }
  
  /**
   * Gère la recherche textuelle dans la liste des cours
   */
  gererRecherche() {
    const termeRecherche = this.rechercheInput.value.toLowerCase().trim();
    const coursFiltres = this.filtrerCoursParRecherche(termeRecherche);
    this.afficherCours(coursFiltres);
  }
  
  /**
   * Gère le filtrage par statut de cours
   */
  gererFiltre() {
    const statutFiltre = this.filtreSelect.value;
    const coursFiltres = this.filtrerCoursParStatut(statutFiltre);
    this.afficherCours(coursFiltres);
  }
  
  /**
   * Filtre les cours par terme de recherche
   * @param {string} terme - Terme de recherche
   * @returns {Array} Cours filtrés
   */
  filtrerCoursParRecherche(terme) {
    if (terme === '') {
      return this.listeCours;
    }
    
    return this.listeCours.filter((cours) => {
      const nomCoursNormalise = cours.nomCours.toLowerCase();
      const nomProfesseurNormalise = cours.nomProfesseur.toLowerCase();
      const descriptionNormalisee = cours.description.toLowerCase();
      
      return nomCoursNormalise.includes(terme) || 
             nomProfesseurNormalise.includes(terme) || 
             descriptionNormalisee.includes(terme);
    });
  }
  
  /**
   * Filtre les cours par statut
   * @param {string} statut - Statut à filtrer
   * @returns {Array} Cours filtrés
   */
  filtrerCoursParStatut(statut) {
    if (statut === 'all') {
      return this.listeCours;
    }
    
    return this.listeCours.filter((cours) => cours.statut === statut);
  }
  
  /**
   * Affiche les cours dans la grille
   * @param {Array} coursALister - Liste des cours à afficher
   */
  afficherCours(coursALister) {
    if (!this.grilleCartesCours) return;
    
    if (coursALister.length === 0) {
      this.grilleCartesCours.innerHTML = `
        <div class="courses-page-no-results-message-container" style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xl); color: var(--color-text-gray);">
          <p style="font-size: 1.25rem;">Aucun cours trouvé</p>
          <p style="font-size: 0.875rem; margin-top: var(--spacing-sm);">Essayez de modifier vos critères de recherche</p>
        </div>
      `;
      return;
    }
    
    const elementsCartesCours = coursALister.map((cours) => this.genererCarteCoursHTML(cours)).join('');
    
    this.grilleCartesCours.innerHTML = elementsCartesCours;
  }
  
  /**
   * Génère le HTML pour une carte de cours
   * @param {Object} cours - Données du cours
   * @returns {string} HTML de la carte
   */
  genererCarteCoursHTML(cours) {
    const classeStatutProgression = this.obtenirClasseStatutProgression(cours.pourcentageProgression);
    const libelleStatut = this.obtenirLibelleStatut(cours.statut);
    
    return `
      <div class="courses-page-course-card-container">
        <div class="courses-page-course-card-header-section">
          <div class="courses-page-course-card-icon-container ${cours.categorie}">
            ${cours.icone}
          </div>
          <div>
            <h3 class="courses-page-course-card-title">${cours.nomCours}</h3>
            <p class="courses-page-course-card-professor">${cours.nomProfesseur}</p>
          </div>
        </div>
        
        <div class="courses-page-course-card-body-section">
          <p class="courses-page-course-card-description">${cours.description}</p>
          
          <div class="courses-page-course-card-meta-info">
            <div class="courses-page-course-card-meta-item">
              <span>👥</span>
              <span>${cours.nombreEtudiants} étudiants</span>
            </div>
            <div class="courses-page-course-card-meta-item">
              <span>📝</span>
              <span>${cours.nombreDevoirs} devoirs</span>
            </div>
          </div>
          
          <span class="courses-page-course-card-status-badge ${cours.statut}">${libelleStatut}</span>
        </div>
        
        <div class="courses-page-course-card-progress-section">
          <div class="courses-page-course-card-progress-header">
            <span class="courses-page-course-card-progress-label">Progression</span>
            <span class="courses-page-course-card-progress-value">${cours.pourcentageProgression}%</span>
          </div>
          <div class="courses-page-course-card-progress-bar-container">
            <div 
              class="courses-page-course-card-progress-bar-fill ${classeStatutProgression}" 
              style="width: ${cours.pourcentageProgression}%"
            ></div>
          </div>
        </div>
        
        <div class="courses-page-course-card-footer-section">
          <button class="courses-page-course-card-button courses-page-course-card-button-primary">
            Voir le cours
          </button>
          <button class="courses-page-course-card-button courses-page-course-card-button-secondary">
            Détails
          </button>
        </div>
      </div>
    `;
  }
  
  /**
   * Obtient la classe CSS pour la barre de progression selon le pourcentage
   * @param {number} pourcentage - Pourcentage de progression
   * @returns {string} Classe CSS
   */
  obtenirClasseStatutProgression(pourcentage) {
    if (pourcentage >= 75) return 'success';
    if (pourcentage >= 50) return '';
    return 'warning';
  }
  
  /**
   * Obtient le libelle du statut du cours
   * @param {string} statut - Statut du cours
   * @returns {string} Libelle du statut
   */
  obtenirLibelleStatut(statut) {
    const correspondanceStatuts = {
      'in-progress': 'En cours',
      'completed': 'Terminé',
      'not-started': 'Pas commencé'
    };
    return correspondanceStatuts[statut] || statut;
  }
  
  /**
   * Ajoute un nouveau cours (simulation)
   */
  ajouterNouveauCours() {
    alert('Fonctionnalité d\'ajout de cours à implémenter');
    console.log('Bouton Ajouter un cours cliqué');
  }
}

/**
 * Initialisation du gestionnaire des cours quand le DOM est chargé
 */
document.addEventListener('DOMContentLoaded', () => {
  const gestionnaireCours = new GestionnaireCours();
  console.log('✅ Page des cours initialisée');
});
