// J06 — Bilan des dépenses

// Type : number[] ; unité de chaque élément : FCFA.
const depensesSemaine = [1500, 2500, 0, 4000, 1000, 2500, 3000];

function verifierDepenses(depenses) {
  if (!Array.isArray(depenses)) {
    throw new TypeError("Dépense obligatoirement fournie dans un tableau");
  }
  for (let i = 0; i < depenses.length; i++) {
    const montant = depenses[i];
    if (!Number.isInteger(montant) || montant < 0) {
      throw new Error(
        `Le montant n'est pas valide à l'index N° ${i} : ${String(montant)} (${typeof montant}) ` +
          "La valeur attendue est : un nombre entier sup ou égal à 0, sans décimale "
      );
    }
  }
}

// TODO 1 : retourner le total en FCFA avec reduce.
function calculerTotal(depenses) {
  verifierDepenses(depenses);
  return depenses.reduce((somme, montant) => somme + montant, 0);
}

// TODO 2 : retourner la moyenne par jour ; 0 si le tableau est vide.
function calculerMoyenne(depenses) {
  const total = calculerTotal(depenses); 
  return depenses.length === 0 ? 0 : total / depenses.length; 
}

// TODO 3 : retourner les montants strictement supérieurs à 2000 FCFA.
function filtrerGrossesDepenses(depenses) {
   verifierDepenses(depenses);
  return depenses.filter((montant) => montant > 2000); 
}

// TODO 4 : retourner la plus grande dépense ; 0 si le tableau est vide.
function trouverMaximum(depenses) {
    verifierDepenses(depenses);
  if (depenses.length === 0) {
    return 0; 
  }
  return Math.max(...depenses);
}

// TODO 5 : créer une copie triée, puis afficher le rapport demandé.
try {
  verifierDepenses(depensesSemaine); 

  console.log(`Tableau initial avant le tri : [${depensesSemaine.join(", ")}]`);

  const depensesTriees = [...depensesSemaine].sort((a, b) => a - b); // number[] ; FCFA 

  console.log(`Tableau initial (après tri) : [${depensesSemaine.join(", ")}]`);

  const total = calculerTotal(depensesSemaine); // number ; FCFA
  const moyenne = calculerMoyenne(depensesSemaine); // number ; FCFA par jour
  const grossesDepenses = filtrerGrossesDepenses(depensesSemaine); // number[] ; montant au dessus de 2000 FCFA
  const maximum = trouverMaximum(depensesSemaine); // number ; FCFA

 
  console.log("\n=== Bilan des dépenses de la semaine ===");
  console.log(`Total : ${total.toFixed(2)} FCFA`);
  console.log(`Moyenne par jour : ${moyenne.toFixed(2)} FCFA`);
  console.log(`Dépenses au-dessus de 2000 FCFA : [${grossesDepenses.join(", ")}]`);
  console.log(`Maximum : ${maximum.toFixed(2)} FCFA`);
  console.log(`Copie triée (croissant) : [${depensesTriees.join(", ")}]`);
} catch (erreur) {
  console.error(`Erreur : ${erreur.message}`);
}
