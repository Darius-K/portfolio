// Script pour gérer le filtrage dynamique des projets de portfolio
// Stocke l'ID du projet sélectionné et l'utilise pour afficher les détails correspondants

// Données des projets de portfolio
const portfolioProjects = [
  {
    id: 'site-1',
    title: 'Site 1',
    category: 'Site Web',
    client: 'ASU Company',
    date: '01 Avril, 2026',
    url: 'http://localhost/bidding/CLIENT/login.html',
    description: 'Ce site web de vente aux enchères a été développé pour permettre aux utilisateurs de participer à des enchères en ligne pour divers produits. Les utilisateurs peuvent créer des comptes, parcourir les catégories de produits, placer des enchères et suivre l\'historique de leurs enchères. Le site offre une interface conviviale et sécurisée pour garantir une expérience d\'enchères fluide et agréable.',
    images: ['assets/img/portfolio/app-1.jpg']
  },
  {
    id: 'site-2',
    title: 'Site 2',
    category: 'Site Web',
    client: 'Client 2',
    date: '15 Mars, 2026',
    url: '#',
    description: 'Site web de suivi des bacs à ordure pour une gestion efficace des déchets.',
    images: ['assets/img/portfolio/app-2.jpg']
  },
  {
    id: 'site-3',
    title: 'Site 3',
    category: 'Site Web de gestion',
    client: 'Magasin XYZ',
    date: '10 Février, 2026',
    url: '#',
    description: 'Site web de gestion de commandes et livraisons pour un magasin. Permet aux clients de passer des commandes en ligne et de suivre leurs livraisons en temps réel.',
    images: ['assets/img/portfolio/app-3.jpg']
  },
  {
    id: 'site-4',
    title: 'Site 4',
    category: 'Site Vitrine',
    client: 'Entreprise ABC',
    date: '05 Janvier, 2026',
    url: '#',
    description: 'Site web vitrine pour entreprise présentant les services et produits proposés.',
    images: ['assets/img/portfolio/app-3.jpg']
  },
  {
    id: 'app-1',
    title: 'App 1',
    category: 'Application Mobile',
    client: 'Ferme Connect',
    date: '20 Décembre, 2025',
    url: '#',
    description: 'Application de suivi d\'une ferme connectée permettant la gestion et le monitoring des ressources agricoles.',
    images: ['assets/img/portfolio/product-1.jpg', 'assets/img/portfolio/product-1.jpg']
  },
  {
    id: 'app-2',
    title: 'App 2',
    category: 'Application Mobile',
    client: 'Gestion Ordures',
    date: '15 Décembre, 2025',
    url: '#',
    description: 'Application de suivi des bacs à ordure pour optimiser la collecte des déchets et leur traitement.',
    images: ['assets/img/portfolio/product-2.jpg', 'assets/img/portfolio/product-2.jpg']
  },
  {
    id: 'design-1',
    title: 'Branding 1',
    category: 'Design Graphique',
    client: 'Client Design 1',
    date: '01 Décembre, 2025',
    url: '#',
    description: 'Conception et réalisation d\'une identité visuelle complète avec logo, charte graphique et supports marketing.',
    images: ['assets/img/portfolio/branding-1.jpg']
  },
  {
    id: 'design-2',
    title: 'Branding 2',
    category: 'Design Graphique',
    client: 'Client Design 2',
    date: '20 Novembre, 2025',
    url: '#',
    description: 'Création d\'une identité de marque cohérente et impactante pour une entreprise en croissance.',
    images: ['assets/img/portfolio/branding-2.jpg']
  },
  {
    id: 'design-3',
    title: 'Branding 3',
    category: 'Design Graphique',
    client: 'Client Design 3',
    date: '10 Novembre, 2025',
    url: '#',
    description: 'Design d\'une campagne publicitaire multicanal avec supports print et digital.',
    images: ['assets/img/portfolio/branding-3.jpg']
  },
  {
    id: 'books-1',
    title: 'Books 1',
    category: 'Publication',
    client: 'Éditeur 1',
    date: '01 Novembre, 2025',
    url: '#',
    description: 'Conception et mise en page d\'une publication professionnelle.',
    images: ['assets/img/portfolio/books-1.jpg']
  },
  {
    id: 'books-2',
    title: 'Books 2',
    category: 'Publication',
    client: 'Éditeur 2',
    date: '15 Octobre, 2025',
    url: '#',
    description: 'Réalisation d\'un catalogue produit avec design moderne et fonctionnel.',
    images: ['assets/img/portfolio/books-2.jpg']
  },
  {
    id: 'books-3',
    title: 'Books 3',
    category: 'Publication',
    client: 'Éditeur 3',
    date: '01 Octobre, 2025',
    url: '#',
    description: 'Design et mise en page d\'une brochure promotionnelle attrayante.',
    images: ['assets/img/portfolio/books-3.jpg']
  }
];

// Fonction pour obtenir l'ID du projet depuis l'URL
function getProjectIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('project');
}

// Fonction pour stocker l'ID du projet dans localStorage
function setSelectedProject(projectId) {
  localStorage.setItem('selectedProject', projectId);
}

// Fonction pour récupérer l'ID du projet depuis localStorage
function getSelectedProject() {
  return localStorage.getItem('selectedProject');
}

// Fonction pour trouver un projet par son ID
function findProject(projectId) {
  return portfolioProjects.find(p => p.id === projectId);
}

// Fonction pour afficher les détails du projet sélectionné
function displayProjectDetails(projectId) {
  const project = findProject(projectId);
  
  if (!project) {
    console.warn('Projet non trouvé:', projectId);
    return;
  }

  // Mettre à jour le slider d'images
  const swiperWrapper = document.querySelector('.swiper-wrapper');
  if (swiperWrapper) {
    swiperWrapper.innerHTML = '';
    project.images.forEach(image => {
      const slide = document.createElement('div');
      slide.className = 'swiper-slide';
      slide.innerHTML = `<img src="${image}" alt="">`;
      swiperWrapper.appendChild(slide);
    });
  }

  // Mettre à jour les informations du projet
  const portfolioInfo = document.querySelector('.portfolio-info ul');
  if (portfolioInfo) {
    portfolioInfo.innerHTML = `
      <li><strong>Catégorie</strong>: ${project.category}</li>
      <li><strong>Client</strong>: ${project.client}</li>
      <li><strong>Date du projet</strong>: ${project.date}</li>
      <li><strong>URL du site</strong>: <a href="${project.url}">${project.title}</a></li>
    `;
  }

  // Mettre à jour le titre et la description
  const titleElement = document.querySelector('.portfolio-description h2');
  if (titleElement) {
    titleElement.textContent = project.title;
  }

  const descriptionElement = document.querySelector('.portfolio-description p');
  if (descriptionElement) {
    descriptionElement.textContent = project.description;
  }
}

// Initialiser le filtrage au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  const projectIdFromURL = getProjectIdFromURL();
  const projectIdFromStorage = getSelectedProject();
  
  const projectToDisplay = projectIdFromURL || projectIdFromStorage || 'site-1';
  
  displayProjectDetails(projectToDisplay);
  setSelectedProject(projectToDisplay);
  
  // Réinitialiser le localStorage après affichage
  localStorage.removeItem('selectedProject');
});
