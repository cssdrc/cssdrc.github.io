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
  siege: "602, 6ème niveau, Immeuble Future Tower, Bd du 30 Juin, Gombe, Kinshasa",
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
    id: "serge",
    nom: "Serge Mudogo Lwanga",
    poste: "Directeur Gérant",
    bureau: "Kinshasa, RDC",
    telephone: "+243 896 969 175",
    telephone2: "+27 68 815 7465",
    whatsapp: "243896969175",
    email: "sergemudogo@css-drc.com",
    photo: "photos/serge.jpg"
  },
  {
    id: "jobed",
    nom: "Jobed Buhumu Kalongu",
    poste: "Assistant Principal du DG",
    bureau: "Kinshasa, RDC",
    telephone: "+243 996 793 994",
    whatsapp: "243996793994",
    email: "jobedkalongu@css-drc.com",
    photo: "photos/jobed.jpg"
  },
  {
    id: "henri",
    nom: "Henri Mukulu",
    poste: "Responsable Logistique",
    bureau: "Johannesburg, Afrique du Sud",
    adresse: "8 Homestead Rd, Oriel, Bedfordview, Johannesburg",
    telephone: "+27 60 468 4373",
    telephone2: "+256 766 524 589",
    whatsapp: "27604684373",
    email: "henrimukulu@css-drc.com",
    photo: "photos/henri.jpg"
  }
];
