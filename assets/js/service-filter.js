// Script pour gérer le filtrage dynamique des services
// Récupère l'ID du service sélectionné et l'utilise pour afficher les détails correspondants

// Données des services
const servicesData = [
  {
    id: 'web-dev',
    title: 'Développement Web',
    icon: 'bi-code',
    shortDescription: 'Conception et développement de sites web modernes et réactifs adaptés à vos besoins.',
    description: 'Je propose des services de développement web complets, allant de la conception à la mise en production. Créer des sites web modernes, responsifs et performants qui répondent exactement à vos besoins est ma spécialité. Qu\'il s\'agisse d\'un site vitrine, d\'un e-commerce ou d\'une application web complexe, je mets en œuvre les dernières technologies et les meilleures pratiques de développement.',
    fullDescription: 'En tant que développeur web expérimenté, je crée des solutions web innovantes et scalables. Je travaille avec les technologies les plus récentes pour garantir que votre site web est non seulement beau et convivial, mais aussi sécurisé, rapide et optimisé pour les moteurs de recherche. De la planification initiale à la maintenance continue, je m\'assure que votre site web offre une expérience utilisateur exceptionnelle.',
    image: 'assets/img/services.jpg',
    features: [
      'Sites web responsifs et modernes',
      'Optimisation SEO intégrée',
      'Sécurité et performance optimisées',
      'Intégration d\'outils et API externes',
      'Maintenance et support continu'
    ]
  },
  {
    id: 'mobile-dev',
    title: 'Développement Mobile',
    icon: 'bi-card-checklist',
    shortDescription: 'Conception et développement d\'applications mobiles pour iOS et Android.',
    description: 'Je crée des applications mobiles natives et hybrides qui offrent une expérience utilisateur exceptionnelle. Que vous ayez besoin d\'une application pour iOS, Android ou les deux, je peux transformer votre idée en une application fonctionnelle et attrayante qui répond aux attentes de vos utilisateurs.',
    fullDescription: 'Le développement d\'applications mobiles nécessite une approche différente du développement web. Je maîtrise les frameworks modernes et les meilleures pratiques pour créer des applications mobiles performantes, sécurisées et faciles à utiliser. De l\'architecture initiale à la publication sur les app stores, je gère l\'ensemble du processus de développement.',
    image: 'assets/img/services.jpg',
    features: [
      'Applications iOS natives',
      'Applications Android natives',
      'Applications hybrides cross-platform',
      'Intégration des fonctionnalités mobiles',
      'Publication sur app stores'
    ]
  },
  {
    id: 'graphic-design',
    title: 'Design Graphique',
    icon: 'bi-bar-chart',
    shortDescription: 'Conception et réalisation de designs graphiques percutants pour renforcer votre identité visuelle.',
    description: 'Le design graphique est bien plus qu\'une simple esthétique, c\'est un moyen puissant de communiquer votre message et de renforcer votre identité de marque. Je crée des designs graphiques percutants qui captent l\'attention et communiquent efficacement votre proposition de valeur.',
    fullDescription: 'Avec une compréhension approfondie des principes de design et des tendances actuelles, je crée des designs graphiques qui non seulement sont visuellement attrayants, mais qui servent également vos objectifs commerciaux. De la création de logos à la conception de matériel marketing complet, je m\'assure que votre marque se démarque.',
    image: 'assets/img/services.jpg',
    features: [
      'Création de logos et identité visuelle',
      'Design de matériel marketing',
      'Affiches et bannières publicitaires',
      'Branding et charte graphique',
      'Illustrations et infographies'
    ]
  },
  {
    id: 'document-design',
    title: 'Mise au Point de Documents',
    icon: 'bi-binoculars',
    shortDescription: 'Nous mettons vos documents au point pour les diverses occasions.',
    description: 'La présentation de vos documents est tout aussi importante que leur contenu. Je vous aide à mettre au point vos documents professionnels, les rendant plus attrayants, clairs et efficaces. Qu\'il s\'agisse de rapports, de propositions, de brochures ou de présentations, je m\'assure que vos documents font bonne impression.',
    fullDescription: 'Chaque document mérite une présentation professionnelle. Je travaille avec vous pour améliorer la mise en page, la typographie, les images et l\'organisation globale de vos documents. Mon objectif est de rendre vos documents non seulement visuellement attrayants, mais aussi plus faciles à lire et à comprendre. Cela améliore l\'impact global et l\'efficacité de votre communication.',
    image: 'assets/img/services.jpg',
    features: [
      'Mise en page professionnelle',
      'Correction et édition',
      'Amélioration typographique',
      'Intégration d\'images et graphiques',
      'Préparation pour impression ou PDF'
    ]
  },
  {
    id: 'cv-portfolio',
    title: 'Réalisation de CV Professionnels et Portfolios',
    icon: 'bi-brightness-high',
    shortDescription: 'Conception et réalisation de CV professionnels et de portfolios adaptés à vos besoins.',
    description: 'Votre CV et votre portfolio sont vos outils de marketing personnel les plus importants. Je crée des CV et des portfolios professionnels et percutants qui mettent en valeur vos compétences, votre expérience et votre potentiel de la meilleure manière possible.',
    fullDescription: 'En combinant le design et la stratégie de contenu, je crée des CV et des portfolios qui se démarquent et qui impressionnent les recruteurs et les clients potentiels. Que vous postuliez à un emploi ou que vous cherchiez à attirer des clients, un CV et un portfolio bien conçus peuvent faire toute la différence. Je travaille avec vous pour raconter votre histoire de manière efficace et attrayante.',
    image: 'assets/img/services.jpg',
    features: [
      'CV professionnel et moderne',
      'Portfolio en ligne (site web)',
      'Portfolio PDF imprimable',
      'Mise en valeur de vos projets',
      'Optimisation pour les recruteurs'
    ]
  },
  {
    id: 'web-hosting',
    title: 'Hébergement de Vos Sites Web',
    icon: 'bi-calendar4-week',
    shortDescription: 'Nous vous aidons à mettre en ligne vos sites web de manière fiable et sécurisée.',
    description: 'L\'hébergement de votre site web est crucial pour son succès. Je vous aide à sélectionner et à configurer un hébergement fiable, sécurisé et performant pour votre site web, garantissant que votre site est accessible 24/7.',
    fullDescription: 'Au-delà simplement de louer un espace serveur, je vous conseille sur les meilleures options d\'hébergement en fonction de vos besoins spécifiques, je configure votre environnement d\'hébergement, je configure les domaines et les certificats SSL, et je mets en place les sauvegards et la sécurité. Mon objectif est de vous permettre de vous concentrer sur votre entreprise pendant que je m\'assure que votre présence en ligne est toujours en ligne et sécurisée.',
    image: 'assets/img/services.jpg',
    features: [
      'Sélection d\'hébergement adapté',
      'Configuration serveur optimisée',
      'Gestion de domaine et DNS',
      'Certificats SSL (HTTPS)',
      'Sauvegarde et restauration'
    ]
  }
];

// Fonction pour obtenir l'ID du service depuis l'URL
function getServiceIdFromURL() {
  const params = new URLSearchParams(window.location.search);
  return params.get('service');
}

// Fonction pour trouver un service par son ID
function findService(serviceId) {
  return servicesData.find(s => s.id === serviceId);
}

// Fonction pour afficher les détails du service sélectionné
function displayServiceDetails(serviceId) {
  const service = findService(serviceId);
  
  if (!service) {
    console.warn('Service non trouvé:', serviceId);
    return;
  }

  // Mettre à jour le titre de la page (breadcrumb)
  const breadcrumbCurrent = document.querySelector('.breadcrumbs .current');
  if (breadcrumbCurrent) {
    breadcrumbCurrent.textContent = service.title;
  }

  // Mettre à jour le titre principal de la page
  const pageTitle = document.querySelector('.page-title h1');
  if (pageTitle) {
    pageTitle.textContent = service.title;
  }

  // Mettre à jour la liste des services (barre latérale) - ajouter les liens
  const servicesList = document.querySelector('.services-list');
  if (servicesList) {
    servicesList.innerHTML = '';
    servicesData.forEach(svc => {
      const link = document.createElement('a');
      link.href = `service-details.html?service=${svc.id}`;
      link.textContent = svc.title;
      if (svc.id === serviceId) {
        link.classList.add('active');
      }
      servicesList.appendChild(link);
    });
  }

  // Mettre à jour l'image du service
  const serviceImg = document.querySelector('.services-img');
  if (serviceImg) {
    serviceImg.src = service.image;
    serviceImg.alt = service.title;
  }

  // Mettre à jour le titre et la description
  const serviceTitle = document.querySelector('.service-details h3');
  if (serviceTitle) {
    serviceTitle.textContent = service.description;
  }

  // Mettre à jour la liste des fonctionnalités
  const featuresList = document.querySelector('.service-details ul');
  if (featuresList) {
    featuresList.innerHTML = '';
    service.features.forEach(feature => {
      const li = document.createElement('li');
      li.innerHTML = `<i class="bi bi-check-circle"></i> <span>${feature}</span>`;
      featuresList.appendChild(li);
    });
  }

  // Mettre à jour les paragraphes de contenu
  const detailsSection = document.querySelector('.col-lg-8');
  if (detailsSection) {
    const paragraphs = detailsSection.querySelectorAll('p');
    if (paragraphs.length > 0) {
      paragraphs[0].textContent = service.fullDescription;
    }
    if (paragraphs.length > 2) {
      paragraphs[2].textContent = 'Avec mon expertise et ma passion pour ce domaine, je peux vous aider à atteindre vos objectifs. N\'hésitez pas à me contacter pour discuter de vos projets et de la façon dont je peux vous aider.';
    }
  }
}

// Initialiser le filtrage au chargement de la page
document.addEventListener('DOMContentLoaded', function() {
  const serviceIdFromURL = getServiceIdFromURL();
  const serviceToDisplay = serviceIdFromURL || 'web-dev';
  
  displayServiceDetails(serviceToDisplay);
});
