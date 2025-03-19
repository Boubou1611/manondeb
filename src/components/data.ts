interface PortfolioItem {
    id: number;
    project: string;
    comment: string;
    date: string;
    description: string;
    source: string;
    gif: string;
    images: string[];
  }
  
  export const data: PortfolioItem[] = [
    {
      id: 1,
      project: "fanzine",
      comment: "fanzine.comment",
      date: "2022",
      description:
        "fanzine.description",
      source: "fanzine.source",
      gif: 
        "/assets/images/FANZINE/fanz.gif",
      images: [
        "/assets/images/FANZINE/fanzine_2.png",
        "/assets/images/FANZINE/fanzine_3.png",
        "/assets/images/FANZINE/fanzine_4.png",
        "/assets/images/FANZINE/fanzine_1.png",
        "/assets/images/FANZINE/fanzine_5.png",
        "/assets/images/FANZINE/fanzine_6.png",
        "/assets/images/FANZINE/fanzine_7.png",
        "/assets/images/FANZINE/fanzine_8.png",
        "/assets/images/FANZINE/fanzine_9.png",
        "/assets/images/FANZINE/fanzine_10.png",
        "/assets/images/FANZINE/fanzine_11.png",
        "/assets/images/FANZINE/fanzine_12.png",
        "/assets/images/FANZINE/fanzine_13.png",
        "/assets/images/FANZINE/fanzine_14.png",
      ],    
    },
    {
      id: 2,
      project: "Enquête colorimétrique",
      comment: "couleurs",
      date: "2022",
      description:
        "Quelle est la couleur de la décomposition ? Création de la palette de la décomposition. Pendant deux semaines, j’ai observé la décomposition de divers fruits. J’ai créé un objet graphique qui témoigne de cette recherche, où chaque jour je procédais à un relevé colorimétrique et réalisais des aplats de couleur.",
      source: "Projet plastique",
      gif: "/assets/images/FANZINE/fanz.gif",
      images: [
        "/assets/images/Couleur/db_page_1.png",
        "/assets/images/Couleur/cover_page.png",
        "/assets/images/Couleur/J1.JPEG",
        "/assets/images/Couleur/J2.JPEG",
        "/assets/images/Couleur/J3.JPEG",
        "/assets/images/Couleur/J4.JPEG",
        "/assets/images/Couleur/J5.JPEG",
        "/assets/images/Couleur/J6.JPEG",
        "/assets/images/Couleur/J7.JPEG",
        "/assets/images/Couleur/manon_6.jpg",
        "/assets/images/Couleur/dégradé.png",
        "/assets/images/Couleur/db_page_2.png",
      ],    
    },
    {
      id: 3,
      project: "Magazine de Saint-Privat",
      comment: "édition",
      date: "2023",
      description:
        "Réaliser l’édition juin 2023 du bulletin de Saint-Privat, village ardéchois. S’appuie sur la charte graphique déjà existante et précédemment réalisée par le studio G&L. S’adressant à tous, le parti-pris a été une approche simple de mise en page. Objet pensé comme la récolte des actualités à des fins de mise en commun et de partage, la matière photographique s’uniformise par l’idée d’un collage..",
      source: "édition",
      gif: "/assets/images/FANZINE/fanz.gif",
      images: [
        "/assets/images/SP/SP2.png",
        "/assets/images/SP/SP1.png",
        "/assets/images/SP/sommaire.png",
        "/assets/images/SP/page1.png",
      ],    
    },
    {
      id: 4,
      project: "Merry Christmas",
      comment: "papeterie",
      date: "2024",
      description:
        "Carte réalisée à la linogravure",
      source: "linogravure sans presse",
      gif: "",
      images: [
        "/assets/images/CN/carte_de_noel 1.png",
        "/assets/images/CN/carte_de_noel 2.png",
        "/assets/images/CN/carte_de_noel 3.png",
        "/assets/images/CN/carte_de_noel 4.png",
        "/assets/images/CN/carte_de_noel 4_2.png",
        "/assets/images/CN/carte_de_noel 5_2.png",
        "/assets/images/CN/carte_de_noel 5.png",
        "/assets/images/CN/carte_de_noel 6_2.png",
        "/assets/images/CN/carte_de_noel 6.png",
        "/assets/images/CN/carte_de_noel 7_2.png",
        "/assets/images/CN/carte_de_noel 8_2.png",
        "/assets/images/CN/carte_de_noel 9_2.png",
        "/assets/images/CN/carte_de_noel 7.png",
        "/assets/images/CN/carte_de_noel 8.png",
        "/assets/images/CN/carte_de_noel 9.png",
        "/assets/images/CN/carte_de_noel 10.png",
        "/assets/images/CN/carte_de_noel 10_2.png",
        "/assets/images/CN/carte_de_noel 11_2.png",
      ],    
    },
    {
      id: 5,
      project: "Oguibari",
      comment: "visual identity",
      date: "2023",
      description:
        "Évoquant une arche telle une fenêtre sur le voyage et la nature, le logo fait aussi référence aux positions de yoga. Ici peut-on voir celle du chien tête en bas. Il symbolise une ouverture au monde et une harmonieuse ascension spirituelle. Réalisation du logo du studio Oguibari, studio de Yoga et d’Art à Vogué, village ardéchois.",
      source: "identity",
      gif: "",
      images: [
        "/assets/images/Oguibari/logo1.jpg",
        "/assets/images/Oguibari/tel1.jpg",
        "/assets/images/Oguibari/démo.jpg",
        "/assets/images/Oguibari/carte visite.png"
      ],    
    },
    {
      id: 6,
      project: "La Grande Matériauthèque des Gobelins",
      comment: "visual identity",
      date: "2023",
      description:
        "Projet finaliste. En collaboration avec les DNMADE Architecture. Habitat de 2ème année de l’école ENSAAMA. L’identité visuelle offre une palette d’éléments modulaires inspirés des différentes catégories de matériaux. Jouant sur une approche micro et macro, elle met en avant le rôle technique et scientifique des créateurs. Un clin d’oeil au patrimoine se fait en échos aux tapisseries du XVIIe siècle et leurs motifs ornementaux. Une touche mystique s’ajoute à notre projet et exprime notre vision selon laquelle la magie émane aussi de la création.",
      source: "Projet collectif avec Alix Bélière. En collaboration avec les DNMADE Architecture Habitat de 2ème année de l’école ENSAAMA.",
      gif: "",
      images: [
        "/assets/images/mat/tote_bag.png",
        "/assets/images/mat/afficherue.png",
        "/assets/images/mat/affiche1.png",
        "/assets/images/mat/décli_appli.png",
        "/assets/images/mat/décli_appli-1.png",
        "/assets/images/mat/iphone_3.png",
        "/assets/images/mat/eee.png",
        "/assets/images/mat/oui.png",
        "/assets/images/mat/ouii.png",
        "/assets/images/mat/plan.png",
        "/assets/images/mat/livre_gob.png"
      ],    
    },
    {
      id: 7,
      project: "La balade",
      comment: "visual identity",
      date: "2023",
      description:
        "Alors que la biodiversité se fragilise, le Muséum national d’Histoire Naturelle souhaite lancer une collection de coffret-kits afin de reconsidérer notre rapport aux insectes. Mot d’ordre : s’émerveiller pour s’instruire. La collection invite à une balade onirique. L’objet est pensé comme une balade visuelle où une manipulation délicate est préconisée et tend à susciter la curiosité. C’est un arrêt dans le temps pour prendre le temps d’observer.",
      source: "Projet collectif avec Alix Bélière. En collaboration avec les DNMADE Architecture Habitat de 2ème année de l’école ENSAAMA.",
      gif: "",
      images: [
        "/assets/images/Balade/3couvfond.jpg",
        "/assets/images/Balade/pagef1.jpg",
        "/assets/images/Balade/test.png",
        "/assets/images/Balade/pagef2.jpg",
        "/assets/images/Balade/page.png",
        "/assets/images/Balade/test2.png",
        "/assets/images/Balade/3couv.png",
        "/assets/images/Balade/B1.png",
        "/assets/images/Balade/B2.png",
        "/assets/images/Balade/B3.png",
        "/assets/images/Balade/affiche.png",
        "/assets/images/Balade/cartepostale.png",
        "/assets/images/Balade/carte verso.png",
        "/assets/images/Balade/card psot.png",
        "/assets/images/Balade/marque_page.png",
        "/assets/images/Balade/planche.png",
        "/assets/images/Balade/tranches.jpg"
      ],    
    },
    {
      id: 8,
      project: "Métamorphose",
      comment: "visual identity",
      date: "2022",
      description:
        "Explorer la reliure et le livre à travers la notion de la métamorphose. Ici, inspiration de Narcisses des métamorphoses dOvide.",
      source: "reliure japonaise",
      gif: "",
      images: [
        "/assets/images/reliure/book_reliure 1.jpeg",
        "/assets/images/photos/image1.png",
        "/assets/images/reliure/book_reliure.jpeg",
        "/assets/images/reliure/book_reliure 2.jpeg",
        "/assets/images/reliure/book_reliure 3.jpeg",
        "/assets/images/reliure/book_reliure 4.jpeg",
        "/assets/images/reliure/book_reliure 5.jpeg",
        "/assets/images/reliure/book_reliure 6.jpeg",
        "/assets/images/reliure/book_reliure 7.jpeg",
        "/assets/images/reliure/book_reliure 8.jpeg",
        "/assets/images/reliure/book_reliure 9.jpeg",
        "/assets/images/reliure/book_reliure 10.jpeg",
        "/assets/images/reliure/book_reliure 11.jpeg"
      ],    
    },
    {
      id: 9,
      project: "Letter Painting",
      comment: "visual identity",
      date: "2023",
      description:
        "Trois banderoles réalisées (verbe + nom + adjectif). Des formats aléatoires et des inspirations typographiques issues de la récolte dans le cimetière de Montmartre. Réfléchir à la construction des lettres sans dénaturer la typographie originale. Vers une interprétation des lettres et de ses formes pensées à grande échelle. Travail plastique de la lettre, travailler le geste souple et la précision du pinceau.",
      source: "Workshop par Hélène Marian",
      gif: "",
      images: [
        "/assets/images/LP/compo1.jpg",
        "/assets/images/LP/compo.jpg",
        "/assets/images/LP/compo2.jpg",
        "/assets/images/LP/recrute.png",
        "/assets/images/LP/sorc.png",
        "/assets/images/LP/ière.png",
        "/assets/images/LP/sorcière.png",
        "/assets/images/LP/aguerrie.png",
        "/assets/images/LP/workshop.png"
      ],    
    },
    {
      id: 10,
      project: "Ticket dérivé",
      comment: "visual identity",
      date: "2021",
      description:
        "Projet finaliste. En collaboration avec les DNMADE Architecture. Habitat de 2ème année de l’école ENSAAMA. L’identité visuelle offre une palette d’éléments modulaires inspirés des différentes catégories de matériaux. Jouant sur une approche micro et macro, elle met en avant le rôle technique et scientifique des créateurs. Un clin d’oeil au patrimoine se fait en échos aux tapisseries du XVIIe siècle et leurs motifs ornementaux. Une touche mystique s’ajoute à notre projet et exprime notre vision selon laquelle la magie émane aussi de la création.",
      source: "Projet collectif avec Alix Bélière. En collaboration avec les DNMADE Architecture Habitat de 2ème année de l’école ENSAAMA.",
      gif: "",
      images: [
        "/assets/images/ticket/ticket.png"
      ],    
    },
    {
      id: 11,
      project: "truc mignon",
      comment: "visual identity",
      date: "2023",
      description:
        "District d Hakone Japon Le lac Ashinoko et le Mont Fuji au loin",
      source: "A56393",
      gif: "",
      images: [
        "/assets/images/mont/fusionne.mp4",
        "/assets/images/mont/man.png"
      ],    
    },
    {
      id: 12,
      project: "Les 24 forces",
      comment: "event",
      date: "2023",
      description:
        "Projet finaliste. En collaboration avec les DNMADE Architecture. Habitat de 2ème année de l’école ENSAAMA. L’identité visuelle offre une palette d’éléments modulaires inspirés des différentes catégories de matériaux. Jouant sur une approche micro et macro, elle met en avant le rôle technique et scientifique des créateurs. Un clin d’oeil au patrimoine se fait en échos aux tapisseries du XVIIe siècle et leurs motifs ornementaux. Une touche mystique s’ajoute à notre projet et exprime notre vision selon laquelle la magie émane aussi de la création.",
      source: "Projet collectif avec Alix Bélière. En collaboration avec les DNMADE Architecture Habitat de 2ème année de l’école ENSAAMA.",
      gif: "",
      images: [
        "/assets/images/ticket/brace.png"
      ],    
    },
  ];