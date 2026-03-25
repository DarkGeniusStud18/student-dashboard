/* ========================================
   PROFILE PAGE - JAVASCRIPT
   Gestion des informations utilisateur et préférences
   ======================================== */

/**
 * Gestionnaire du profil utilisateur
 * Gère les informations personnelles, la sécurité et les préférences
 */
class GestionnaireProfil {
  constructor() {
    this.donneesUtilisateur = this.initialiserDonneesUtilisateur();
    
    this.formulaireInfosPerso = document.getElementById('profilePagePersonalInfoFormElement');
    this.formulaireSecurite = document.getElementById('profilePageSecurityFormElement');
    this.boutonChangerAvatar = document.getElementById('profilePageChangeAvatarButton');
    
    this.affichageNomUtilisateur = document.getElementById('profilePageUserNameDisplay');
    this.affichageEmailUtilisateur = document.getElementById('profilePageUserEmailDisplay');
    
    this.initialiserEcouteurs();
    this.afficherDonneesUtilisateur();
    this.afficherStatistiques();
  }
  
  /**
   * Initialise les données de l'utilisateur
   * @returns {Object} Données utilisateur
   */
  initialiserDonneesUtilisateur() {
    return {
      prenom: 'Jean',
      nom: 'Étudiant',
      email: 'jean.etudiant@exemple.com',
      telephone: '+33 6 12 34 56 78',
      dateNaissance: '2000-05-15',
      genre: 'male',
      adresse: '123 Rue de l\'Université',
      ville: 'Paris',
      codePostal: '75001',
      statistiques: {
        coursInscrits: 8,
        moyenneGenerale: 15.2,
        devoirsRendus: 32,
        tauxPresence: 92
      }
    };
  }
  
  /**
   * Initialise les écouteurs d'événements
   */
  initialiserEcouteurs() {
    if (this.formulaireInfosPerso) {
      this.formulaireInfosPerso.addEventListener('submit', (event) => this.gererSauvegardeInfosPerso(event));
    }
    
    if (this.formulaireSecurite) {
      this.formulaireSecurite.addEventListener('submit', (event) => this.gererChangementMotDePasse(event));
    }
    
    if (this.boutonChangerAvatar) {
      this.boutonChangerAvatar.addEventListener('click', () => this.changerAvatar());
    }
  }
  
  /**
   * Affiche les données de l'utilisateur dans l'en-tête
   */
  afficherDonneesUtilisateur() {
    if (this.affichageNomUtilisateur) {
      this.affichageNomUtilisateur.textContent = `${this.donneesUtilisateur.prenom} ${this.donneesUtilisateur.nom}`;
    }
    
    if (this.affichageEmailUtilisateur) {
      this.affichageEmailUtilisateur.textContent = this.donneesUtilisateur.email;
    }
  }
  
  /**
   * Affiche les statistiques académiques
   */
  afficherStatistiques() {
    const elementCours = document.getElementById('profilePageStatsCoursesValue');
    const elementMoyenne = document.getElementById('profilePageStatsAverageValue');
    const elementDevoirs = document.getElementById('profilePageStatsAssignmentsValue');
    const elementPresence = document.getElementById('profilePageStatsAttendanceValue');
    
    if (elementCours) {
      elementCours.textContent = this.donneesUtilisateur.statistiques.coursInscrits;
    }
    
    if (elementMoyenne) {
      elementMoyenne.textContent = this.donneesUtilisateur.statistiques.moyenneGenerale.toFixed(1);
    }
    
    if (elementDevoirs) {
      elementDevoirs.textContent = this.donneesUtilisateur.statistiques.devoirsRendus;
    }
    
    if (elementPresence) {
      elementPresence.textContent = `${this.donneesUtilisateur.statistiques.tauxPresence}%`;
    }
  }
  
  /**
   * Gère la sauvegarde des informations personnelles
   * @param {Event} event - Événement de soumission
   */
  gererSauvegardeInfosPerso(evenement) {
    evenement.preventDefault();
    
    // Récupérer les valeurs du formulaire
    const nouveauPrenom = document.getElementById('profilePageFormFirstNameInput').value;
    const nouveauNom = document.getElementById('profilePageFormLastNameInput').value;
    const nouvelEmail = document.getElementById('profilePageFormEmailInput').value;
    const nouveauTelephone = document.getElementById('profilePageFormPhoneInput').value;
    const nouvelleDateNaissance = document.getElementById('profilePageFormBirthDateInput').value;
    const nouveauGenre = document.getElementById('profilePageFormGenderSelect').value;
    const nouvelleAdresse = document.getElementById('profilePageFormAddressInput').value;
    const nouvelleVille = document.getElementById('profilePageFormCityInput').value;
    const nouveauCodePostal = document.getElementById('profilePageFormPostalCodeInput').value;
    
    // Valider les données
    if (!this.validerEmail(nouvelEmail)) {
      alert('Veuillez entrer une adresse email valide');
      return;
    }
    
    // Mettre à jour les données
    this.donneesUtilisateur = {
      ...this.donneesUtilisateur,
      prenom: nouveauPrenom,
      nom: nouveauNom,
      email: nouvelEmail,
      telephone: nouveauTelephone,
      dateNaissance: nouvelleDateNaissance,
      genre: nouveauGenre,
      adresse: nouvelleAdresse,
      ville: nouvelleVille,
      codePostal: nouveauCodePostal
    };
    
    // Mettre à jour l'affichage
    this.afficherDonneesUtilisateur();
    
    // Simulation de sauvegarde
    console.log('Données utilisateur mises à jour:', this.donneesUtilisateur);
    alert('Informations personnelles enregistrees avec succes !');
  }
  
  /**
   * Gère le changement de mot de passe
   * @param {Event} event - Événement de soumission
   */
  gererChangementMotDePasse(evenement) {
    evenement.preventDefault();
    
    const motDePasseActuel = document.getElementById('profilePageFormCurrentPasswordInput').value;
    const nouveauMotDePasse = document.getElementById('profilePageFormNewPasswordInput').value;
    const confirmationMotDePasse = document.getElementById('profilePageFormConfirmPasswordInput').value;
    
    // Valider les champs
    if (motDePasseActuel.length === 0) {
      alert('Veuillez entrer votre mot de passe actuel');
      return;
    }
    
    if (nouveauMotDePasse.length < 6) {
      alert('Le nouveau mot de passe doit contenir au moins 6 caractères');
      return;
    }
    
    if (nouveauMotDePasse !== confirmationMotDePasse) {
      alert('Les nouveaux mots de passe ne correspondent pas');
      return;
    }
    
    // Simulation de changement de mot de passe
    console.log('Changement de mot de passe demandé');
    alert('Mot de passe change avec succes !');
    
    // Réinitialiser le formulaire
    this.formulaireSecurite.reset();
  }
  
  /**
   * Gère le changement d'avatar
   */
  changerAvatar() {
    alert('Fonctionnalité de changement d\'avatar à implémenter (upload de fichier)');
    console.log('Bouton Changer la photo cliqué');
  }
  
  /**
   * Valide une adresse email
   * @param {string} email - Email à valider
   * @returns {boolean} True si valide
   */
  validerEmail(email) {
    const expressionReguliere = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expressionReguliere.test(email);
  }
}

/**
 * Initialisation du gestionnaire de profil quand le DOM est chargé
 */
document.addEventListener('DOMContentLoaded', () => {
  const gestionnaireProfil = new GestionnaireProfil();
  console.log('Page de profil initialisée');
});
