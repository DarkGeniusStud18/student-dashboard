/* ========================================
   GRADES PAGE - JAVASCRIPT
   Affichage et gestion des notes
   ======================================== */

/**
 * Gestionnaire des notes
 * Gère l'affichage, la recherche et le filtrage des notes
 */
class GestionnaireNotes {
  constructor() {
    this.listeNotes = this.initialiserDonneesNotes();
    this.rechercheInput = document.getElementById('gradesPageSearchInput');
    this.filtreMatiereSelect = document.getElementById('gradesPageFilterMatiereSelect');
    this.filtreNoteSelect = document.getElementById('gradesPageFilterNoteSelect');
    this.tableContainer = document.getElementById('gradesPageTableContainer');
    this.cardsContainer = document.getElementById('gradesPageCardsContainer');
    this.boutonExporter = document.getElementById('gradesPageExportButton');
    this.boutonsViewOption = document.querySelectorAll('.grades-page-view-option-button');
    
    this.initialiserEcouteurs();
    this.afficherNotesTableau(this.listeNotes);
    this.afficherNotesCartes(this.listeNotes);
    this.mettreAJourResume();
  }
  
  /**
   * Initialise les données des notes
   * @returns {Array} Liste des notes avec toutes les propriétés
   */
  initialiserDonneesNotes() {
    return [
      {
        identifiantNote: 1,
        matiere: 'Mathématiques Avancées',
        categorie: 'math',
        devoir: 'Devoir Surveillé 3 - Équations Différentielles',
        date: '20 Mars 2026',
        note: 17,
        noteMax: 20,
        coefficient: 3,
        commentaire: 'Excellent travail'
      },
      {
        identifiantNote: 2,
        matiere: 'Programmation Web',
        categorie: 'info',
        devoir: 'Projet React - Application Todo',
        date: '18 Mars 2026',
        note: 19,
        noteMax: 20,
        coefficient: 4,
        commentaire: 'Projet exceptionnel'
      },
      {
        identifiantNote: 3,
        matiere: 'Physique Quantique',
        categorie: 'physique',
        devoir: 'TP Laboratoire - Intrication',
        date: '15 Mars 2026',
        note: 14,
        noteMax: 20,
        coefficient: 2,
        commentaire: 'Bon résultat'
      },
      {
        identifiantNote: 4,
        matiere: 'Base de Données',
        categorie: 'info',
        devoir: 'Examen Pratique - SQL',
        date: '12 Mars 2026',
        note: 15,
        noteMax: 20,
        coefficient: 3,
        commentaire: 'Très bien'
      },
      {
        identifiantNote: 5,
        matiere: 'Algorithmes Complexes',
        categorie: 'info',
        devoir: 'Devoir Maison 2 - Graphes',
        date: '10 Mars 2026',
        note: 12,
        noteMax: 20,
        coefficient: 2,
        commentaire: 'Peut mieux faire'
      },
      {
        identifiantNote: 6,
        matiere: 'Mathématiques Avancées',
        categorie: 'math',
        devoir: 'Devoir Surveillé 2 - Analyse Complexe',
        date: '08 Mars 2026',
        note: 16,
        noteMax: 20,
        coefficient: 3,
        commentaire: 'Excellent'
      },
      {
        identifiantNote: 7,
        matiere: 'Physique Quantique',
        categorie: 'physique',
        devoir: 'Examen Partiel - Ondes',
        date: '05 Mars 2026',
        note: 13,
        noteMax: 20,
        coefficient: 4,
        commentaire: 'Assez bien'
      },
      {
        identifiantNote: 8,
        matiere: 'Réseaux Informatiques',
        categorie: 'info',
        devoir: 'Projet - Configuration Réseau',
        date: '03 Mars 2026',
        note: 18,
        noteMax: 20,
        coefficient: 3,
        commentaire: 'Très bon travail'
      },
      {
        identifiantNote: 9,
        matiere: 'Anglais Technique',
        categorie: 'language',
        devoir: 'Présentation Orale',
        date: '01 Mars 2026',
        note: 17,
        noteMax: 20,
        coefficient: 2,
        commentaire: 'Excellent oral'
      },
      {
        identifiantNote: 10,
        matiere: 'Base de Données',
        categorie: 'info',
        devoir: 'Devoir Maison - NoSQL',
        date: '28 Février 2026',
        note: 14,
        noteMax: 20,
        coefficient: 2,
        commentaire: 'Bien'
      },
      {
        identifiantNote: 11,
        matiere: 'Algorithmes Complexes',
        categorie: 'info',
        devoir: 'Examen - Arbres et Tas',
        date: '25 Février 2026',
        note: 11,
        noteMax: 20,
        coefficient: 3,
        commentaire: 'À renforcer'
      },
      {
        identifiantNote: 12,
        matiere: 'Mathématiques Avancées',
        categorie: 'math',
        devoir: 'Devoir Surveillé 1 - Suites',
        date: '20 Février 2026',
        note: 15,
        noteMax: 20,
        coefficient: 3,
        commentaire: 'Très bien'
      }
    ];
  }
  
  /**
   * Initialise les écouteurs d'événements
   */
  initialiserEcouteurs() {
    if (this.rechercheInput) {
      this.rechercheInput.addEventListener('input', () => this.gererRecherche());
    }
    
    if (this.filtreMatiereSelect) {
      this.filtreMatiereSelect.addEventListener('change', () => this.gererFiltrage());
    }
    
    if (this.filtreNoteSelect) {
      this.filtreNoteSelect.addEventListener('change', () => this.gererFiltrage());
    }
    
    if (this.boutonExporter) {
      this.boutonExporter.addEventListener('click', () => this.exporterNotes());
    }
    
    this.boutonsViewOption.forEach((bouton) => {
      bouton.addEventListener('click', (event) => this.changerModeAffichage(event));
    });
  }
  
  /**
   * Gère la recherche textuelle
   */
  gererRecherche() {
    const notesFiltrees = this.filtrerNotes();
    this.afficherNotesTableau(notesFiltrees);
    this.afficherNotesCartes(notesFiltrees);
  }
  
  /**
   * Gère le filtrage par matière et note
   */
  gererFiltrage() {
    const notesFiltrees = this.filtrerNotes();
    this.afficherNotesTableau(notesFiltrees);
    this.afficherNotesCartes(notesFiltrees);
  }
  
  /**
   * Filtre les notes selon les critères
   * @returns {Array} Notes filtrées
   */
  filtrerNotes() {
    const termeRecherche = this.rechercheInput.value.toLowerCase().trim();
    const matiereFiltre = this.filtreMatiereSelect.value;
    const noteFiltre = this.filtreNoteSelect.value;
    
    return this.listeNotes.filter((note) => {
      // Filtre par recherche
      const correspondanceRecherche = termeRecherche === '' || 
        note.matiere.toLowerCase().includes(termeRecherche) ||
        note.devoir.toLowerCase().includes(termeRecherche);
      
      // Filtre par matière
      const correspondanceMatiere = matiereFiltre === 'all' || note.categorie === matiereFiltre;
      
      // Filtre par note
      const pourcentageNote = (note.note / note.noteMax) * 100;
      let correspondanceNote = true;
      
      if (noteFiltre === 'excellent') {
        correspondanceNote = pourcentageNote >= 80;
      } else if (noteFiltre === 'good') {
        correspondanceNote = pourcentageNote >= 60 && pourcentageNote < 80;
      } else if (noteFiltre === 'average') {
        correspondanceNote = pourcentageNote >= 50 && pourcentageNote < 60;
      } else if (noteFiltre === 'poor') {
        correspondanceNote = pourcentageNote < 50;
      }
      
      return correspondanceRecherche && correspondanceMatiere && correspondanceNote;
    });
  }
  
  /**
   * Affiche les notes sous forme de tableau
   * @param {Array} notesALister - Notes à afficher
   */
  afficherNotesTableau(notesALister) {
    if (!this.tableContainer) return;
    
    if (notesALister.length === 0) {
      this.tableContainer.innerHTML = `
        <div class="grades-page-no-results-message" style="text-align: center; padding: var(--spacing-xl); color: var(--color-text-gray);">
          <p style="font-size: 1.25rem;">Aucune note trouvée</p>
          <p style="font-size: 0.875rem; margin-top: var(--spacing-sm);">Essayez de modifier vos critères de recherche</p>
        </div>
      `;
      return;
    }
    
    const tableauHTML = `
      <table class="grades-page-grades-table">
        <thead>
          <tr class="grades-page-grades-table-header-row">
            <th class="grades-page-grades-table-header-cell">Matière</th>
            <th class="grades-page-grades-table-header-cell">Devoir</th>
            <th class="grades-page-grades-table-header-cell">Date</th>
            <th class="grades-page-grades-table-header-cell">Coefficient</th>
            <th class="grades-page-grades-table-header-cell">Note</th>
          </tr>
        </thead>
        <tbody>
          ${notesALister.map((note) => `
            <tr class="grades-page-grades-table-row">
              <td class="grades-page-grades-table-cell grades-page-grades-table-cell-subject">${note.matiere}</td>
              <td class="grades-page-grades-table-cell grades-page-grades-table-cell-assignment">${note.devoir}</td>
              <td class="grades-page-grades-table-cell grades-page-grades-table-cell-date">${note.date}</td>
              <td class="grades-page-grades-table-cell grades-page-grades-table-cell-coefficient">×${note.coefficient}</td>
              <td class="grades-page-grades-table-cell grades-page-grades-table-cell-grade ${this.obtenirClasseNote(note.note / note.noteMax * 100)}">
                ${note.note}/${note.noteMax}
              </td>
            </tr>
          `).join('')}
        </tbody>
      </table>
    `;
    
    this.tableContainer.innerHTML = tableauHTML;
  }
  
  /**
   * Affiche les notes sous forme de cartes
   * @param {Array} notesALister - Notes à afficher
   */
  afficherNotesCartes(notesALister) {
    if (!this.cardsContainer) return;
    
    if (notesALister.length === 0) {
      this.cardsContainer.innerHTML = `
        <div class="grades-page-no-results-message" style="grid-column: 1 / -1; text-align: center; padding: var(--spacing-xl); color: var(--color-text-gray);">
          <p style="font-size: 1.25rem;">Aucune note trouvée</p>
          <p style="font-size: 0.875rem; margin-top: var(--spacing-sm);">Essayez de modifier vos critères de recherche</p>
        </div>
      `;
      return;
    }
    
    const cartesHTML = notesALister.map((note) => `
      <div class="grades-page-grade-card-container">
        <div class="grades-page-grade-card-header">
          <span class="grades-page-grade-card-subject">${note.matiere}</span>
          <span class="grades-page-grade-card-grade-badge ${this.obtenirClasseBadgeNote(note.note / note.noteMax * 100)}">
            ${note.note}/${note.noteMax}
          </span>
        </div>
        <div class="grades-page-grade-card-body">
          <div class="grades-page-grade-card-assignment-name">${note.devoir}</div>
          <div class="grades-page-grade-card-meta-info">
            <div class="grades-page-grade-card-meta-item">
              <span>${note.date}</span>
            </div>
            <div class="grades-page-grade-card-meta-item">
              <span>×${note.coefficient}</span>
              <span>Coefficient</span>
            </div>
          </div>
        </div>
        <div class="grades-page-grade-card-footer">
          <span class="grades-page-grade-card-date">${note.date}</span>
          <span class="grades-page-grade-card-coefficient">Coeff: ${note.coefficient}</span>
        </div>
      </div>
    `).join('');
    
    this.cardsContainer.innerHTML = cartesHTML;
  }
  
  /**
   * Obtient la classe CSS pour la note
   * @param {number} pourcentage - Note en pourcentage
   * @returns {string} Classe CSS
   */
  obtenirClasseNote(pourcentage) {
    if (pourcentage >= 80) return 'grades-page-grades-table-cell-grade-excellent';
    if (pourcentage >= 60) return 'grades-page-grades-table-cell-grade-good';
    if (pourcentage >= 50) return 'grades-page-grades-table-cell-grade-average';
    return 'grades-page-grades-table-cell-grade-poor';
  }
  
  /**
   * Obtient la classe CSS pour le badge de note
   * @param {number} pourcentage - Note en pourcentage
   * @returns {string} Classe CSS
   */
  obtenirClasseBadgeNote(pourcentage) {
    if (pourcentage >= 80) return 'grades-page-grade-card-grade-badge-excellent';
    if (pourcentage >= 60) return 'grades-page-grade-card-grade-badge-good';
    if (pourcentage >= 50) return 'grades-page-grade-card-grade-badge-average';
    return 'grades-page-grade-card-grade-badge-poor';
  }
  
  /**
   * Change le mode d'affichage (tableau/cartes)
   * @param {Event} event - Événement click
   */
  changerModeAffichage(event) {
    const boutonCible = event.currentTarget;
    const modeAffichage = boutonCible.dataset.view;
    
    // Mettre à jour les boutons actifs
    this.boutonsViewOption.forEach((btn) => btn.classList.remove('grades-page-view-option-button-active'));
    boutonCible.classList.add('grades-page-view-option-button-active');
    
    // Basculer l'affichage
    if (modeAffichage === 'table') {
      this.tableContainer.classList.remove('hidden');
      this.cardsContainer.classList.add('hidden');
    } else {
      this.tableContainer.classList.add('hidden');
      this.cardsContainer.classList.remove('hidden');
    }
  }
  
  /**
   * Met à jour les cartes de résumé
   */
  mettreAJourResume() {
    // Calcul de la moyenne générale
    const sommeNotes = this.listeNotes.reduce((accumulateur, note) => {
      return accumulateur + (note.note / note.noteMax * 20 * note.coefficient);
    }, 0);
    
    const sommeCoefficients = this.listeNotes.reduce((accumulateur, note) => accumulateur + note.coefficient, 0);
    const moyenneGenerale = (sommeNotes / sommeCoefficients).toFixed(1);
    
    const elementValeurMoyenne = document.getElementById('gradesPageSummaryAverageValue');
    if (elementValeurMoyenne) {
      elementValeurMoyenne.textContent = `${moyenneGenerale}/20`;
    }
    
    // Total devoirs
    const elementTotalDevoirs = document.getElementById('gradesPageSummaryTotalAssignmentsValue');
    if (elementTotalDevoirs) {
      elementTotalDevoirs.textContent = this.listeNotes.length;
    }
    
    // Meilleure note
    const meilleureNote = this.listeNotes.reduce((max, note) => {
      const pourcentageNote = note.note / note.noteMax;
      const pourcentageMax = max.note / max.noteMax;
      return pourcentageNote > pourcentageMax ? note : max;
    }, this.listeNotes[0]);
    
    const elementMeilleureNote = document.getElementById('gradesPageSummaryBestGradeValue');
    if (elementMeilleureNote) {
      elementMeilleureNote.textContent = `${meilleureNote.note}/${meilleureNote.noteMax}`;
    }
  }
  
  /**
   * Exporte les notes (simulation)
   */
  exporterNotes() {
    alert('Fonctionnalité d\'export à implémenter (PDF, CSV, Excel)');
    console.log('Bouton Exporter cliqué');
  }
}

/**
 * Initialisation du gestionnaire des notes quand le DOM est chargé
 */
document.addEventListener('DOMContentLoaded', () => {
  const gestionnaireNotes = new GestionnaireNotes();
  console.log('Page des notes initialisée');
});
