const data = [
  {
    name: "Orfanato Santa Rita de Cássia",
    about: "O Orfanato Santa Rita de Cássia é um lugar que vive de carinho e amor doado pelas Irmãs Franciscanas, por voluntários, por doadores, por amigos e amigas e pela comunidade, para as meninas e adolescentes em situação de vulnerabilidade social em dois programas: Acolhimento institucional na faixa etária de 04 a 10 anos (abrigo) e Casa Dia faixa etária de 04 a 12 anos (externato).",
    address: "R. Florianópolis, 1305 - Praça Seca, Rio de Janeiro",
    image_url: "https://orfanatosantaritadecassia.com.br/wp-content/uploads/2020/08/FOTO-5-2-768x528.jpg",
    links: [
      "https://orfanatosantaritadecassia.com.br/",
      "98351-8677",
      "Santaritadecassia1932@gmail.com"
    ]
  },
  {
    name: "Adote um Gatinho",
    about: "O Adote um Gatinho é uma organização sem fins lucrativos, fundada em 2003 por Susan Yamamoto e Juliana Bussab, com o objetivo de resgatar e encontrar lares para gatos abandonados em São Paulo. A ONG começou de forma simples, com as fundadoras cuidando dos gatos em suas próprias casas e buscando doações para sustentá-los. Em 2006, o grupo se formalizou como a maior ONG de resgate de gatos no Brasil.",
    address: "São Paulo",
    image_url: "https://adoteumgatinho.org.br/media/uploads/cats/de38485fb9fdc4a9df7a453e2f7065ef.jpg",
    links: [
      "https://adoteumgatinho.org.br/",
      "",
      "informacoes@adoteumgatinho.org.br"
    ]
  },
  {
    name: "Abrigo Frei Otto",
    about: "O Abrigo Frei Otto da Sociedade de São Vicente de Paulo tem como objetivo, a prestação de Serviços de Proteção Social Especial de Alta Complexidade na forma de Acolhimento Institucional a idosos de ambos os sexos com idade superior a 60 anos, com vínculo familiar fragilizado ou ausente, de forma gratuita, continuada e planejada, que é prestada a usuários em situação de vulnerabilidade e risco social da cidade de Belo Horizonte.",
    address: "Rua Rui Barbosa, 299 - Santa Mônica, Belo Horizonte",
    image_url: "https://i1.wp.com/ssvpcmbh.org.br/wp-content/uploads/2016/01/FREI-OTON-ABRIGO.png?resize=768%2C429&ssl=1",
    links: [
      "https://adoteumgatinho.org.br/",
      "",
      "freiotto@gmail.com"
    ],
  },
  {
    name: "Abrigo Jesus",
    about: "O Abrigo Jesus, fundado em 1937, é uma organização filantrópica sem fins lucrativos dedicada à educação e proteção de crianças e adolescentes em Belo Horizonte. Inicialmente, a instituição acolhia meninas em regime de internato, mas, a partir de 1990, passou a atender crianças de ambos os sexos em regime de semi-internato. Com o tempo, expandiu suas atividades, criando um berçário e o programa 'Sementes do Amanhã' para crianças de 6 a 14 anos, oferecendo suporte socioassistencial e garantindo um ambiente seguro para o desenvolvimento infantil.",
    address: "Rua Costa Sena, 959 - Bairro Padre Eustáquio, Belo Horizonte",
    image_url: "https://static.wixstatic.com/media/0c0063_876f8434421b4dcbaa3fdf66a6a4ea52~mv2.jpg/v1/crop/x_1,y_0,w_2999,h_2000/fill/w_978,h_652,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/0c0063_876f8434421b4dcbaa3fdf66a6a4ea52~mv2.jpg",
    links: [
      "https://www.abrigojesus.org.br/",
      "553134629035",
      "secretaria@abrigojesus.org.br"
    ],
  },
  {
    name: "AFECC",
    about: "A Associação Feminina de Educação e Combate ao Câncer (Afecc) foi fundada em 1952 pelo Dr. Afonso Bianco e sua esposa, Ylza Bianco, com o objetivo de melhorar o atendimento aos pacientes com câncer no Espírito Santo. O sonho de construir um hospital para oferecer tratamento de qualidade tornou-se realidade em 1970, com a inauguração do Hospital Santa Rita de Cássia, que hoje é o maior complexo oncológico do estado",
    address: "Av. Mal. Campos, 1579 - Santa Cecilia, Vitória",
    image_url: "https://afecc.org.br/wp-content/uploads/2022/04/foto-de-fundo.jpg",
    links: [
      "https://afecc.org.br/",
      "(27) 3334-8058",
      "afecc@santarita.org.br"
    ],
  },
  {
    name: "ACRIDAS",
    about: "A ACRIDAS atua há mais de 40 anos na proteção de crianças e adolescentes em situação de vulnerabilidade social, garantindo seus direitos fundamentais por meio de serviços de acolhimento institucional e familiar. Com o compromisso de transformar a vida desses jovens, a ACRIDAS desenvolve projetos e serviços complexos e de grande impacto social, oferecendo novas oportunidades e perspectivas de futuro. A organização depende do apoio de doadores e parceiros para continuar promovendo mudanças significativas na realidade dessas crianças e adolescentes.",
    address: "R. Eduardo Geronasso, 1782 - Bacacheri, Curitiba",
    image_url: "https://www.acridas.org.br/wp-content/uploads/2020/05/24895158.jpg",
    links: [
      "https://www.acridas.org.br/",
      "(41) 3523-5610",
      "comunicacao@acridas.org.br"
    ],
  },
  {
    name: "Casa Lar Emaús",
    about: "Fundada em 1993 por jovens do Movimento de Emaús, com o objetivo de apoiar crianças e adolescentes sem vínculo familiar em Florianópolis (SC). Desde sua criação, mais de 150 crianças já foram acolhidas, graças ao esforço voluntário e à união da comunidade. A instituição é mantida por voluntários, empresas parceiras e convênios com o poder público. Suas atividades são financiadas por meio de doações, eventos beneficentes e ações de arrecadação, garantindo o acolhimento e cuidado contínuo das crianças atendidas. A Ação Social Missão depende da generosidade de doadores para continuar transformando vidas.",
    address: "Rua Eurico Hosterno, 321 - Santa Mônica, Florianópolis",
    image_url: "	https://casalaremaus.org.br/wp-content/uploads/2022/02/WhatsApp-Image-2022-02-03-at-19.25.05.jpeg",
    links: [
      "https://casalaremaus.org.br/",
      "(48) 99116-9699",
      "contato@casalaremaus.org.br"
    ],
  }
];

function listData(page, searchParams) {
  const pageIndex = page ?? 1;
  let result = [];

  searchParams = searchParams.toLowerCase();

  if (searchParams) {
    result = data.filter(item => {
      const address = item.address.toLowerCase();
      const about = item.about.toLowerCase();
      const name = item.name.toLowerCase();

      if (address.includes(searchParams) || about.includes(searchParams) || name.includes(searchParams)) {
        return item
      }
    }).slice((pageIndex - 1) * 5, pageIndex * 5)
  } else {
    result = data.slice((pageIndex - 1) * 5, pageIndex * 5)
  }

  return result
}