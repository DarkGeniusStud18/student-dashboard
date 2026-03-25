/* ========================================
   DASHBOARD PAGE - JAVASCRIPT
   Affichage des statistiques, progression et données dynamiques
   ======================================== */

/**
 * Gestionnaire des données du tableau de bord
 * Gère l'affichage des statistiques, cours et notes
 */
class GestionnaireTableauDeBord {
  constructor() {
    this.donneesCours = this.initialiserDonneesCours();
    this.donneesNotes = this.initialiserDonneesNotes();
    this.donneesEmploiDuTemps = this.initialiserDonneesEmploiDuTemps();
    
    this.initialiserAffichage();
  }
  
  /**
   * Initialise les données des cours avec progression
   * @returns {Array} Liste des cours avec progression
   */
  initialiserDonneesCours() {
    return [
      { nomCours: 'Mathématiques Avancées', pourcentageProgression: 85, statut: 'success' },
      { nomCours: 'Physique Quantique', pourcentageProgression: 72, statut: 'success' },
      { nomCours: 'Programmation Web', pourcentageProgression: 90, statut: 'success' },
      { nomCours: 'Base de Données', pourcentageProgression: 65, statut: 'warning' },
      { nomCours: 'Algorithmes Complexes', pourcentageProgression: 58, statut: 'warning' },
      { nomCours: 'Réseaux Informatiques', pourcentageProgression: 45, statut: 'warning' }
    ];
  }
  
  /**
   * Initialise les données des dernières notes
   * @returns {Array} Liste des notes récentes
   */
  initialiserDonneesNotes() {
    return [
      { matiere: 'Mathématiques', devoir: 'Devoir Surveillé 3', date: '20 Mars 2026', note: 17, noteMax: 20, coefficient: 3 },
      { matiere: 'Programmation Web', devoir: 'Projet React', date: '18 Mars 2026', note: 18, noteMax: 20, coefficient: 4 },
      { matiere: 'Physique Quantique', devoir: 'TP Laboratoire', date: '15 Mars 2026', note: 14, noteMax: 20, coefficient: 2 },
      { matiere: 'Base de Données', devoir: 'Examen Pratique', date: '12 Mars 2026', note: 15, noteMax: 20, coefficient: 3 },
      { matiere: 'Algorithmes', devoir: 'Devoir Maison 2', date: '10 Mars 2026', note: 12, noteMax: 20, coefficient: 2 }
    ];
  }
  
  /**
   * Initialise les données des prochains cours
   * @returns {Array} Liste des cours à venir
   */
  initialiserDonneesEmploiDuTemps() {
    return [
      { heure: '08:00', matiere: 'Mathématiques Avancées', salle: 'Amphi A', type: 'Cours Magistral' },
      { heure: '10:00', matiere: 'Programmation Web', salle: 'Salle B12', type: 'TP' },
      { heure: '14:00', matiere: 'Physique Quantique', salle: 'Labo 3', type: 'Travaux Pratiques' },
      { heure: '16:00', matiere: 'Base de Données', salle: 'Salle C24', type: 'Cours' }
    ];
  }
  
  /**
   * Initialise l'affichage de toutes les sections du dashboard
   */
  initialiserAffichage() {
    this.afficherProgressionCours();
    this.afficherProchainsCours();
    this.afficherDernieresNotes();
    this.mettreAJourStatistiques();
    
    console.log('Tableau de bord initialisé');
  }
  
  /**
   * Affiche la progression de chaque cours sous forme de barres
   */
  afficherProgressionCours() {
    const conteneurGrilleProgression = document.getElementById('dashboardProgressChartGridContainer');
    
    if (!conteneurGrilleProgression) return;
    
    const elementsCartesProgression = this.donneesCours.map((cours) => `
      <div class="dashboard-page-progress-item-card-container">
        <div class="dashboard-page-progress-item-header">
          <span class="dashboard-page-progress-item-name">${cours.nomCours}</span>
          <span class="dashboard-page-progress-item-percentage">${cours.pourcentageProgression}%</span>
        </div>
        <div class="dashboard-page-progress-bar-container">
          <div 
            class="dashboard-page-progress-bar-fill ${cours.statut}" 
            style="width: ${cours.pourcentageProgression}%"
          ></div>
        </div>
      </div>
    `).join('');
    
    conteneurGrilleProgression.innerHTML = elementsCartesProgression;
  }
  
  /**
   * Affiche la liste des prochains cours de la journée
   */
  afficherProchainsCours() {
    const conteneurListeCours = document.getElementById('dashboardUpcomingClassesListContainer');
    
    if (!conteneurListeCours) return;
    
    const elementsListeCours = this.donneesEmploiDuTemps.map((cours) => `
      <div class="dashboard-page-upcoming-class-item-container">
        <span class="dashboard-page-upcoming-class-time">${cours.heure}</span>
        <div class="dashboard-page-upcoming-class-info">
          <div class="dashboard-page-upcoming-class-name">${cours.matiere}</div>
          <div class="dashboard-page-upcoming-class-room">${cours.salle}</div>
        </div>
        <span class="dashboard-page-upcoming-class-type-badge">${cours.type}</span>
      </div>
    `).join('');
    
    conteneurListeCours.innerHTML = elementsListeCours;
  }
  
  /**
   * Affiche le tableau des dernières notes obtenues
   */
  afficherDernieresNotes() {
    const conteneurTableNotes = document.getElementById('dashboardRecentGradesTableContainer');
    
    if (!conteneurTableNotes) return;
    
    const tableauHTML = `
      <table class="dashboard-page-recent-grades-table">
        <thead>
          <tr class="dashboard-page-recent-grades-table-header-row">
            <th class="dashboard-page-recent-grades-table-header-cell">Matière</th>
            <th class="dashboard-page-recent-grades-table-header-cell">Devoir</th>
            <th class="dashboard-page-recent-grades-table-header-cell">Date</th>
            <th class="dashboard-page-recent-grades-table-header-cell">Note</th>
          </tr>
        </thead>
        <tbody>
          ${this.donneesNotes.map((note) => `
            <tr class="dashboard-page-recent-grades-table-row">
              <td class="dashboard-page-recent-grades-table-cell dashboard-page-recent-grades-table-cell-subject">${note.matiere}</td>
              <td class="dashboard-page-recent-grades-table-cell dashboard-page-recent-grades-table-cell-assignment">${note.devoir}</td>
              <td class="dashboard-page-recent-grades-table-cell dashboard-page-recent-grades-table-cell-date">${note.date}</td>
              <td class="dashboard-page-recent-grades-table-cell dashboard-page-recent-grades-table-cell-grade ${this.obtenirClasseNote(note.note / note.noteMax * 100)}">
                ${note.note}/${note.noteMax}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    
    conteneurTableNotes.innerHTML = tableauHTML;
  }
  
  /**
   * Détermine la classe CSS à appliquer selon la note
   * @param {number} pourcentageNote - Note en pourcentage
   * @returns {string} Classe CSS correspondante
   */
  obtenirClasseNote(pourcentageNote) {
    if (pourcentageNote >= 80) return 'dashboard-page-recent-grades-table-cell-grade-excellent';
    if (pourcentageNote >= 60) return 'dashboard-page-recent-grades-table-cell-grade-good';
    if (pourcentageNote >= 50) return 'dashboard-page-recent-grades-table-cell-grade-average';
    return 'dashboard-page-recent-grades-table-cell-grade-poor';
  }
  
  /**
   * Met à jour les statistiques générales avec animation
   */
  mettreAJourStatistiques() {
    // Calcul de la moyenne générale
    const sommeNotes = this.donneesNotes.reduce((accumulateur, note) => accumulateur + (note.note / note.noteMax * 20), 0);
    const moyenneGenerale = (sommeNotes / this.donneesNotes.length).toFixed(1);
    
    const elementValeurMoyenne = document.getElementById('dashboardStatisticsAverageGradeValue');
    if (elementValeurMoyenne) {
      elementValeurMoyenne.textContent = `${moyenneGenerale}/20`;
    }
    
    // Animation des compteurs
    this.animerCompteur('dashboardStatisticsTotalCoursesValue', 0, 8, 1000);
    this.animerCompteur('dashboardStatisticsCompletedAssignmentsValue', 0, 24, 1000, '/32');
  }
  
  /**
   * Anime un compteur numérique de 0 à la valeur cible
   * @param {string} identifiantElement - ID de l'élément à animer
   * @param {number} valeurDepart - Valeur de départ
   * @param {number} valeurCible - Valeur cible à atteindre
   * @param {number} duree - Durée de l'animation en ms
   * @param {string} suffixe - Suffixe à ajouter (ex: '/32')
   */
  animerCompteur(identifiantElement, valeurDepart, valeurCible, duree, suffixe = '') {
    const element = document.getElementById(identifiantElement);
    if (!element) return;
    
    const dureeIncrement = duree / (valeurCible - valeurDepart);
    let valeurActuelle = valeurDepart;
    
    const compteurInterval = setInterval(() => {
      valeurActuelle++;
      element.textContent = valeurActuelle + suffixe;
      
      if (valeurActuelle >= valeurCible) {
        clearInterval(compteurInterval);
      }
    }, dureeIncrement);
  }
}

/**
 * Initialisation du gestionnaire du tableau de bord quand le DOM est chargé
 */
document.addEventListener('DOMContentLoaded', () => {
  const gestionnaireTableauDeBord = new GestionnaireTableauDeBord();
});
