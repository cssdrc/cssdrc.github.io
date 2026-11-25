// ============================================================
//  CSS - Cartes de visite digitales
//  Seul fichier a modifier : infos de l'entreprise + equipe
// ============================================================

const ENTREPRISE = {
  nom: "Congo Supply & All Services",
  forme: "SARLU",
  sigle: "CSS",
  site: "https://www.css-drc.com",
  siteAffiche: "www.css-drc.com",
  email: "info@css-drc.com",
  telephone: "+243 896 969 175",
  siege: "Immeuble Future Tower, Bd du 30 Juin, Gombe, Kinshasa",
  carte: "https://maps.google.com/?q=Future+Tower+Boulevard+du+30+Juin+Gombe+Kinshasa",
  logo: "logo-horizontal.svg",                       // logo horizontal blanc, fond transparent
  adresseCartes: "https://cssdrc.github.io/carte/"   // adresse ou la plateforme est en ligne
};

// Une personne = un bloc. "id" = fin du lien (minuscules, sans espace ni accent).
// photo : lien direct d'une image (Drive : https://lh3.googleusercontent.com/d/ID_DU_FICHIER)
// whatsapp : numero sans + ni espaces. Laisser "" pour masquer un champ.
const EQUIPE = [
  {
    id: "baampire",
    nom: "Balibuno Ampire Baampire",
    poste: "Brand Designer",
    bureau: "Kampala, Ouganda",
    telephone: "+243 896 969 175",
    whatsapp: "243896969175",
    email: "info@css-drc.com",
    photo: ""
  },
  {
    id: "exemple",
    nom: "Prénom Nom",
    poste: "Responsable Logistique",
    bureau: "Lubumbashi, RDC",
    telephone: "+243 000 000 000",
    whatsapp: "243000000000",
    email: "info@css-drc.com",
    photo: ""
  }
];
