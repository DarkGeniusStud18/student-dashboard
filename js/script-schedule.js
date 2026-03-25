/* ========================================
   SCHEDULE PAGE - JAVASCRIPT
   Affichage et gestion de l'emploi du temps
   ======================================== */

/**
 * Gestionnaire de l'emploi du temps
 * Gère l'affichage hebdomadaire et les événements
 */
class GestionnaireEmploiDuTemps {
  constructor() {
    this.donneesCours = this.initialiserDonneesCours();
    this.donneesEvenements = this.initialiserDonneesEvenements();
    this.semaineActuelle = this.obtenirSemaineActuelle();
    
    this.grilleHoraire = document.getElementById('schedulePageWeeklyGridContainer');
    this.listeEvenements = document.getElementById('schedulePageUpcomingEventsListContainer');
    this.affichageSemaine = document.getElementById('schedulePageWeekTitleDisplay');
    
    this.boutonSemainePrecedente = document.getElementById('schedulePagePreviousWeekButton');
    this.boutonSemaineSuivante = document.getElementById('schedulePageNextWeekButton');
    this.boutonAujourdhui = document.getElementById('schedulePageTodayButton');
    this.boutonsNavigation = document.querySelectorAll('.schedule-page-view-toggle-button');
    
    this.initialiserEcouteurs();
    this.afficherGrilleHoraire();
    this.afficherEvenements();
    this.mettreAJourAffichageSemaine();
  }
  
  /**
   * Initialise les données des cours pour l'emploi du temps
   * @returns {Array} Liste des cours programmés
   */
  initialiserDonneesCours() {
    return [
      // Lundi
      { jour: 1, heure: 8, matiere: 'Mathématiques Avancées', salle: 'Amphi A', professeur: 'Pr. Dupont', type: 'CM', categorie: 'math' },
      { jour: 1, heure: 10, matiere: 'Programmation Web', salle: 'Salle B12', professeur: 'M. Turing', type: 'TP', categorie: 'tech' },
      { jour: 1, heure: 14, matiere: 'Physique Quantique', salle: 'Labo 3', professeur: 'Dr. Curie', type: 'TP', categorie: 'science' },
      { jour: 1, heure: 16, matiere: 'Base de Données', salle: 'Salle C24', professeur: 'Dr. Hopper', type: 'Cours', categorie: 'tech' },
      
      // Mardi
      { jour: 2, heure: 8, matiere: 'Algorithmes Complexes', salle: 'Amphi B', professeur: 'Pr. Knuth', type: 'CM', categorie: 'tech' },
      { jour: 2, heure: 10, matiere: 'Mathématiques Avancées', salle: 'Salle A15', professeur: 'Pr. Dupont', type: 'TD', categorie: 'math' },
      { jour: 2, heure: 14, matiere: 'Réseaux Informatiques', salle: 'Labo Réseau', professeur: 'Dr. Berners-Lee', type: 'TP', categorie: 'tech' },
      
      // Mercredi
      { jour: 3, heure: 8, matiere: 'Physique Quantique', salle: 'Amphi C', professeur: 'Dr. Curie', type: 'CM', categorie: 'science' },
      { jour: 3, heure: 10, matiere: 'Anglais Technique', salle: 'Salle D10', professeur: 'Ms. Smith', type: 'Cours', categorie: 'language' },
      { jour: 3, heure: 14, matiere: 'Programmation Web', salle: 'Salle B12', professeur: 'M. Turing', type: 'TD', categorie: 'tech' },
      
      // Jeudi
      { jour: 4, heure: 8, matiere: 'Base de Données', salle: 'Amphi A', professeur: 'Dr. Hopper', type: 'CM', categorie: 'tech' },
      { jour: 4, heure: 10, matiere: 'Algorithmes Complexes', salle: 'Salle A20', professeur: 'Pr. Knuth', type: 'TD', categorie: 'tech' },
      { jour: 4, heure: 14, matiere: 'Mathématiques Avancées', salle: 'Salle A15', professeur: 'Pr. Dupont', type: 'TD', categorie: 'math' },
      
      // Vendredi
      { jour: 5, heure: 8, matiere: 'Intelligence Artificielle', salle: 'Amphi B', professeur: 'Pr. Hinton', type: 'CM', categorie: 'tech' },
      { jour: 5, heure: 10, matiere: 'Physique Quantique', salle: 'Labo 2', professeur: 'Dr. Curie', type: 'TP', categorie: 'science' },
      { jour: 5, heure: 14, matiere: 'Réseaux Informatiques', salle: 'Salle C30', professeur: 'Dr. Berners-Lee', type: 'TD', categorie: 'tech' }
    ];
  }
  
  /**
   * Initialise les données des événements à venir
   * @returns {Array} Liste des événements
   */
  initialiserDonneesEvenements() {
    return [
      {
        titre: 'Examen Mathématiques',
        date: '2026-03-27',
        jour: 27,
        mois: 'Mars',
        matiere: 'Mathématiques Avancées',
        type: 'exam',
        salle: 'Amphi A',
        heure: '08:00'
      },
      {
        titre: 'Rendu Projet Web',
        date: '2026-03-30',
        jour: 30,
        mois: 'Mars',
        matiere: 'Programmation Web',
        type: 'assignment',
        salle: 'En ligne',
        heure: '23:59'
      },
      {
        titre: 'Examen Physique',
        date: '2026-04-02',
        jour: 2,
        mois: 'Avr',
        matiere: 'Physique Quantique',
        type: 'exam',
        salle: 'Amphi C',
        heure: '14:00'
      },
      {
        titre: 'Présentation Oral Anglais',
        date: '2026-04-05',
        jour: 5,
        mois: 'Avr',
        matiere: 'Anglais Technique',
        type: 'assignment',
        salle: 'Salle D10',
        heure: '10:00'
      }
    ];
  }
  
  /**
   * Initialise les écouteurs d'événements
   */
  initialiserEcouteurs() {
    if (this.boutonSemainePrecedente) {
      this.boutonSemainePrecedente.addEventListener('click', () => this.navigationSemaine(-1));
    }
    
    if (this.boutonSemaineSuivante) {
      this.boutonSemaineSuivante.addEventListener('click', () => this.navigationSemaine(1));
    }
    
    if (this.boutonAujourdhui) {
      this.boutonAujourdhui.addEventListener('click', () => this.retourSemaineActuelle());
    }
    
    this.boutonsNavigation.forEach((bouton) => {
      bouton.addEventListener('click', (event) => this.changerModeAffichage(event));
    });
  }
  
  /**
   * Obtient les informations de la semaine actuelle
   * @returns {Object} Date de début et fin de semaine
   */
  obtenirSemaineActuelle() {
    const maintenant = new Date();
    const jourActuel = maintenant.getDay();
    const diffVersLundi = maintenant.getDate() - (jourActuel === 0 ? 6 : jourActuel - 1);
    
    const lundi = new Date(maintenant);
    lundi.setDate(diffVersLundi);
    lundi.setHours(0, 0, 0, 0);
    
    const vendredi = new Date(lundi);
    vendredi.setDate(lundi.getDate() + 4);
    
    return { debut: lundi, fin: vendredi };
  }
  
  /**
   * Affiche la grille horaire hebdomadaire
   */
  afficherGrilleHoraire() {
    if (!this.grilleHoraire) return;
    
    const joursSemaine = ['Lundi', 'Mardi', 'Mercredi', 'Jeudi', 'Vendredi'];
    const tranchesHoraires = [8, 10, 14, 16];
    
    let grilleHTML = `
      <div class="schedule-page-timetable-grid">
        <!-- Header Row -->
        <div class="schedule-page-time-slot-header"></div>
        ${joursSemaine.map((jour, index) => {
          const dateJour = new Date(this.semaineActuelle.debut);
          dateJour.setDate(this.semaineActuelle.debut.getDate() + index);
          const estAujourdhui = this.estAujourdhui(dateJour);
          
          return `
            <div class="schedule-page-day-header ${estAujourdhui ? 'today' : ''}">
              ${jour}<br>
              <span style="font-weight: 400; font-size: 0.75rem;">
                ${dateJour.getDate()} ${this.obtenirNomMois(dateJour.getMonth())}
              </span>
            </div>
          `;
        }).join('')}
        
        <!-- Time Slots and Classes -->
        ${tranchesHoraires.map((heure) => `
          <div class="schedule-page-time-slot-cell">${heure}:00</div>
          ${joursSemaine.map((jour, indexJour) => {
            const coursTrouve = this.donneesCours.find(
              (cours) => cours.jour === indexJour + 1 && cours.heure === heure
            );
            
            if (coursTrouve) {
              return `
                <div class="schedule-page-class-cell">
                  <div class="schedule-page-class-card ${coursTrouve.categorie}">
                    <div class="schedule-page-class-card-title">${coursTrouve.matiere}</div>
                    <div class="schedule-page-class-card-room">${coursTrouve.salle}</div>
                    <div class="schedule-page-class-card-professor">${coursTrouve.professeur}</div>
                    <div class="schedule-page-class-card-type">${coursTrouve.type}</div>
                  </div>
                </div>
              `;
            } else {
              return `<div class="schedule-page-class-cell"></div>`;
            }
          }).join('')}
        `).join('')}
      </div>
    `;
    
    this.grilleHoraire.innerHTML = grilleHTML;
  }
  
  /**
   * Affiche la liste des événements à venir
   */
  afficherEvenements() {
    if (!this.listeEvenements) return;
    
    const evenementsTries = [...this.donneesEvenements].sort((a, b) => {
      return new Date(a.date) - new Date(b.date);
    });
    
    const evenementsHTML = evenementsTries.map((evenement) => `
      <div class="schedule-page-upcoming-event-item-container">
        <div class="schedule-page-upcoming-event-date-badge">
          <span class="schedule-page-upcoming-event-day">${evenement.jour}</span>
          <span class="schedule-page-upcoming-event-month">${evenement.mois}</span>
        </div>
        <div class="schedule-page-upcoming-event-info">
          <div class="schedule-page-upcoming-event-title">${evenement.titre}</div>
          <div class="schedule-page-upcoming-event-details">
            <div class="schedule-page-upcoming-event-detail-item">
              <span>${evenement.matiere}</span>
            </div>
            <div class="schedule-page-upcoming-event-detail-item">
              <span>${evenement.heure}</span>
            </div>
            <div class="schedule-page-upcoming-event-detail-item">
              <span>${evenement.salle}</span>
            </div>
          </div>
        </div>
        <span class="schedule-page-upcoming-event-type-badge ${evenement.type}">
          ${this.obtenirLibelleTypeEvenement(evenement.type)}
        </span>
      </div>
    `).join('');
    
    this.listeEvenements.innerHTML = evenementsHTML;
  }
  
  /**
   * Met à jour l'affichage du titre de la semaine
   */
  mettreAJourAffichageSemaine() {
    if (!this.affichageSemaine) return;
    
    const jourDebut = this.semaineActuelle.debut.getDate();
    const moisDebut = this.obtenirNomMois(this.semaineActuelle.debut.getMonth());
    const annee = this.semaineActuelle.debut.getFullYear();
    
    this.affichageSemaine.textContent = `Semaine du ${jourDebut} ${moisDebut} ${annee}`;
  }
  
  /**
   * Navigue vers la semaine précédente ou suivante
   * @param {number} direction - -1 pour précédente, 1 pour suivante
   */
  navigationSemaine(direction) {
    const nouveauDebut = new Date(this.semaineActuelle.debut);
    nouveauDebut.setDate(nouveauDebut.getDate() + (direction * 7));
    
    const nouvelleFin = new Date(nouveauDebut);
    nouvelleFin.setDate(nouveauDebut.getDate() + 4);
    
    this.semaineActuelle = { debut: nouveauDebut, fin: nouvelleFin };
    
    this.afficherGrilleHoraire();
    this.mettreAJourAffichageSemaine();
  }
  
  /**
   * Retourne à la semaine actuelle
   */
  retourSemaineActuelle() {
    this.semaineActuelle = this.obtenirSemaineActuelle();
    this.afficherGrilleHoraire();
    this.mettreAJourAffichageSemaine();
  }
  
  /**
   * Change le mode d'affichage (semaine/jour)
   * @param {Event} event - Événement click
   */
  changerModeAffichage(event) {
    const boutonCible = event.currentTarget;
    const modeAffichage = boutonCible.dataset.view;
    
    console.log('Changement de mode d\'affichage:', modeAffichage);
    
    // Mettre à jour les boutons actifs
    document.querySelectorAll('.schedule-page-view-toggle-button').forEach((btn) => {
      btn.classList.remove('schedule-page-view-toggle-button-active');
    });
    boutonCible.classList.add('schedule-page-view-toggle-button-active');
  }
  
  /**
   * Vérifie si une date correspond à aujourd'hui
   * @param {Date} date - Date à vérifier
   * @returns {boolean} True si c'est aujourd'hui
   */
  estAujourdhui(date) {
    const aujourdhui = new Date();
    return date.getDate() === aujourd'hui.getDate() &&
           date.getMonth() === aujourdhui.getMonth() &&
           date.getFullYear() === aujourdhui.getFullYear();
  }
  
  /**
   * Obtient le nom du mois en français
   * @param {number} indexMois - Index du mois (0-11)
   * @returns {string} Nom du mois
   */
  obtenirNomMois(indexMois) {
    const nomsMois = [
      'Janvier', 'Février', 'Mars', 'Avril', 'Mai', 'Juin',
      'Juillet', 'Août', 'Septembre', 'Octobre', 'Novembre', 'Décembre'
    ];
    return nomsMois[indexMois];
  }
  
  /**
   * Obtient le libellé du type d'événement
   * @param {string} type - Type d'événement
   * @returns {string} Libellé
   */
  obtenirLibelleTypeEvenement(type) {
    const correspondance = {
      'exam': 'Examen',
      'assignment': 'Devoir',
      'class': 'Cours'
    };
    return correspondance[type] || type;
  }
}

/**
 * Initialisation du gestionnaire de l'emploi du temps quand le DOM est chargé
 */
document.addEventListener('DOMContentLoaded', () => {
  const gestionnaireEmploiDuTemps = new GestionnaireEmploiDuTemps();
  console.log('Page de l\'emploi du temps initialisée');
});
