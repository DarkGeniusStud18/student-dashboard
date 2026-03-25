/* ========================================
   LOGIN PAGE - JAVASCRIPT
   Validation et gestion du formulaire de connexion
   ======================================== */

/**
 * Gestionnaire de validation du formulaire de connexion
 * Vérifie les emails et mots de passe avant soumission
 */
class GestionnaireValidationConnexion {
  constructor() {
    this.formulaireElement = document.getElementById('loginPageLoginFormElement');
    this.emailInput = document.getElementById('loginPageFormEmailInput');
    this.passwordInput = document.getElementById('loginPageFormPasswordInput');
    this.emailErrorMessage = document.getElementById('loginPageFormEmailErrorMessage');
    this.passwordErrorMessage = document.getElementById('loginPageFormPasswordErrorMessage');
    this.generalErrorMessage = document.getElementById('loginPageFormGeneralErrorMessage');
    this.submitButton = document.getElementById('loginPageFormSubmitButton');
    
    this.initialiserEcouteurs();
  }
  
  /**
   * Initialise les écouteurs d'événements pour le formulaire
   */
  initialiserEcouteurs() {
    if (this.formulaireElement) {
      this.formulaireElement.addEventListener('submit', (event) => this.gererSoumissionFormulaire(event));
    }
    
    if (this.emailInput) {
      this.emailInput.addEventListener('input', () => this.validerChampEnTempsReel('email'));
      this.emailInput.addEventListener('blur', () => this.validerChampEnTempsReel('email'));
    }
    
    if (this.passwordInput) {
      this.passwordInput.addEventListener('input', () => this.validerChampEnTempsReel('password'));
    }
  }
  
  /**
   * Valide un champ spécifique en temps réel
   * @param {string} typeChamp - 'email' ou 'password'
   */
  validerChampEnTempsReel(typeChamp) {
    if (typeChamp === 'email' && this.emailInput) {
      const emailValue = this.emailInput.value.trim();
      
      if (emailValue === '') {
        this.afficherErreur(this.emailInput, this.emailErrorMessage, 'L\'adresse email est requise');
      } else if (!this.estEmailValide(emailValue)) {
        this.afficherErreur(this.emailInput, this.emailErrorMessage, 'Veuillez entrer une adresse email valide');
      } else {
        this.masquerErreur(this.emailInput, this.emailErrorMessage);
      }
    }
    
    if (typeChamp === 'password' && this.passwordInput) {
      const passwordValue = this.passwordInput.value;
      
      if (passwordValue.length === 0) {
        this.afficherErreur(this.passwordInput, this.passwordErrorMessage, 'Le mot de passe est requis');
      } else if (passwordValue.length < 6) {
        this.afficherErreur(this.passwordInput, this.passwordErrorMessage, 'Le mot de passe doit contenir au moins 6 caractères');
      } else {
        this.masquerErreur(this.passwordInput, this.passwordErrorMessage);
      }
    }
  }
  
  /**
   * Gère la soumission du formulaire
   * @param {Event} evenement - Événement de soumission
   */
  gererSoumissionFormulaire(evenement) {
    evenement.preventDefault();
    
    // Réinitialiser les messages d'erreur
    this.reinitialiserErreurs();
    
    // Valider tous les champs
    const estEmailValide = this.validerEmail();
    const estPasswordValide = this.validerPassword();
    
    if (estEmailValide && estPasswordValide) {
      // Simulation de connexion
      this.simulerConnexion();
    } else {
      this.afficherMessageErreurGeneral();
    }
  }
  
  /**
   * Valide le champ email
   * @returns {boolean} - true si valide
   */
  validerEmail() {
    const emailValue = this.emailInput.value.trim();
    
    if (emailValue === '') {
      this.afficherErreur(this.emailInput, this.emailErrorMessage, 'L\'adresse email est requise');
      return false;
    }
    
    if (!this.estEmailValide(emailValue)) {
      this.afficherErreur(this.emailInput, this.emailErrorMessage, 'Veuillez entrer une adresse email valide');
      return false;
    }
    
    return true;
  }
  
  /**
   * Valide le champ mot de passe
   * @returns {boolean} - true si valide
   */
  validerPassword() {
    const passwordValue = this.passwordInput.value;
    
    if (passwordValue.length === 0) {
      this.afficherErreur(this.passwordInput, this.passwordErrorMessage, 'Le mot de passe est requis');
      return false;
    }
    
    if (passwordValue.length < 6) {
      this.afficherErreur(this.passwordInput, this.passwordErrorMessage, 'Le mot de passe doit contenir au moins 6 caractères');
      return false;
    }
    
    return true;
  }
  
  /**
   * Vérifie si un email est valide avec une expression régulière
   * @param {string} email - Email à valider
   * @returns {boolean} - true si valide
   */
  estEmailValide(email) {
    const expressionReguliereEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return expressionReguliereEmail.test(email);
  }
  
  /**
   * Affiche une erreur pour un champ spécifique
   * @param {HTMLElement} champ - Champ input
   * @param {HTMLElement} messageElement - Élément de message d'erreur
   * @param {string} message - Message à afficher
   */
  afficherErreur(champ, messageElement, message) {
    champ.classList.add('error');
    messageElement.textContent = message;
    messageElement.classList.remove('hidden');
  }
  
  /**
   * Masque une erreur pour un champ spécifique
   * @param {HTMLElement} champ - Champ input
   * @param {HTMLElement} messageElement - Élément de message d'erreur
   */
  masquerErreur(champ, messageElement) {
    champ.classList.remove('error');
    messageElement.classList.add('hidden');
  }
  
  /**
   * Réinitialise tous les messages d'erreur
   */
  reinitialiserErreurs() {
    if (this.emailInput) {
      this.emailInput.classList.remove('error');
    }
    if (this.passwordInput) {
      this.passwordInput.classList.remove('error');
    }
    if (this.emailErrorMessage) {
      this.emailErrorMessage.classList.add('hidden');
    }
    if (this.passwordErrorMessage) {
      this.passwordErrorMessage.classList.add('hidden');
    }
    if (this.generalErrorMessage) {
      this.generalErrorMessage.classList.add('hidden');
    }
  }
  
  /**
   * Affiche un message d'erreur général
   */
  afficherMessageErreurGeneral() {
    if (this.generalErrorMessage) {
      this.generalErrorMessage.classList.remove('hidden');
    }
  }
  
  /**
   * Simule une connexion utilisateur
   * Redirige vers le dashboard après succès
   */
  simulerConnexion() {
    const emailValue = this.emailInput.value.trim();
    const passwordValue = this.passwordInput.value;
    
    // Désactiver le bouton pendant la simulation
    this.submitButton.disabled = true;
    this.submitButton.textContent = 'Connexion en cours...';
    
    // Simulation d'un délai réseau (1.5 secondes)
    setTimeout(() => {
      // Pour la démo, on accepte toutes les connexions
      // Dans un vrai projet, on ferait un appel API ici
      console.log('Tentative de connexion avec:', { email: emailValue, passwordLength: passwordValue.length });
      
      // Réactiver le bouton
      this.submitButton.disabled = false;
      this.submitButton.textContent = 'Se connecter';
      
      // Redirection vers le dashboard (page d'accueil)
      window.location.href = 'dashboard.html';
    }, 1500);
  }
}

/**
 * Initialisation du gestionnaire quand le DOM est chargé
 */
document.addEventListener('DOMContentLoaded', () => {
  const gestionnaireConnexion = new GestionnaireValidationConnexion();
  console.log('✅ Page de login initialisée');
});
