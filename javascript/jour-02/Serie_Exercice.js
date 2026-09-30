// EXERCICE 1: Système de connexion
const nom = "Madassa";
const motDePasse = "1234";

if (nom === "Madassa" && motDePasse === "1234") {
    console.log("Connexion réussie");
} else {
    console.log("Nom ou mot de passe incorrect");
}

// EXERCICE 2: Tarif selon l'âge

const age = 25;

if (age < 12) {
    console.log("Tarif enfant");
} else if (age >= 12 && age <= 17) {
    console.log("Tarif adolescent");
} else if (age >= 18 && age <= 59) {
    console.log("Tarif adulte ");
} else if (age >= 60) {
    console.log("Tarif senior");
}

// EXERCICE 3: Note d'un étudiant

const note = 14;

if (note <= 20 && note >= 16) {
    console.log("Excellent");
} else if (note <= 15 && note >= 14) {
    console.log("Très bien");
} else if (note <= 13 && note >= 12) {
    console.log("Bien");
} else if (note <= 11 && note >= 10) {
    console.log("Passable");
} else {
    console.log("Echec");
}

// EXERCICE 4: Accès administrateur

const nom_admin = "admin";
const motdepasse = "1234";
const actif = true;

if (nom_admin === "admin" && motdepasse === "1234" && actif === true) {
    console.log("Accès autorisé");
} else {
    console.log("Accès refusé");
}

// EXERCICE 5: Livraison

const montant = 15000;
const ville = "Bamako";

if (montant >= 10000 && ville === "Bamako") {
    console.log("Livraison gratuite");
} else {
    console.log("Frais de livraison applicables");
}

// EXERCICE 6: Petit système de connexion

const nomUtilisateur = "madassa";
const mot_passe = "1234";
const compteBloque = false;

if (compteBloque === true) {
    console.log(" Compte bloqué ");
} else if (nomUtilisateur === "madassa" && mot_passe === "1234") {
    console.log("Connexion réussie");
} else {
    console.log("Identifiants incorrects");
}

// EXERCICE 7: Vérification d'un compte

const âge = 20;
const compteVeririe = true;
const solde = 5000;

if (âge >= 18 && compteVeririe === true && solde >= 1000) {
    console.log("Opération réussie");
} else {
    console.log("Opération refusée");
}

// EXERCICE 8: Challenge

const agée = 22;
const nationalité = "malienne";
const document = true;

if (agée >= 18 && (nationalité === "malienne" || document === true)) {
    console.log("Accès au service");
} else {
    console.log("Non accès au service");
}