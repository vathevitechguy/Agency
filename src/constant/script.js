export const DUMMY_DATA = [
  {
    type: 'Design',
    data: [
      {
        id: 'd1',
        title: 'Sofa',
        img: './assets/images/portfolio/sofa.png',
        type: 'design',
      },
      {
        id: 'd2',
        title: 'Abstract',
        img: './assets/images/portfolio/abstract.png',
        type: 'design',
      },
      {
        id: 'd3',
        title: 'Calc',
        img: './assets/images/portfolio/calc.png',
        type: 'design',
      },
    ],
  },
  {
    type: 'Branding',
    data: [
      {
        id: 'b1',
        title: 'Keyboard',
        img: './assets/images/portfolio/keyboard.png',
        type: 'branding',
      },
      {
        id: 'b2',
        title: 'HandP',
        img: './assets/images/portfolio/phone.png',
        type: 'branding',
      },
      {
        id: 'b3',
        title: 'Sport',
        img: './assets/images/portfolio/sport.png',
        type: 'branding',
      },
    ],
  },
  {
    type: 'Media',
    data: [
      {
        id: 'i1',
        title: 'Work Media',
        img: './assets/images/portfolio/media.png',
        type: 'illustration',
      },
    ],
  },
  {
    type: 'Motion',
    data: [
      {
        id: 'm1',
        title: 'DDDone',
        img: './assets/images/portfolio/dddone.png',
        type: 'motion',
      },
      {
        id: 'm2',
        title: 'Architect',
        img: './assets/images/portfolio/architect.png',
        type: 'motion',
      },
    ],
  },
];

export const TOTAL_PRODUCT = DUMMY_DATA.map((card) => {
  const { data } = card;
  return data.length;
}).reduce((prev, curr) => prev + curr, 0);

export const gallery = [
  { type: 'video', src: './assets/images/About/video.png' },
  { type: 'image', src: './assets/images/About/img1.png' },
  { type: 'image', src: './assets/images/About/img2.png' },
  { type: 'image', src: './assets/images/About/img3.png' },
  { type: 'image', src: './assets/images/About/img4.png' },
];

export const analytics = [
  { id: 'a1', figure: '47%', description: 'Years of experience' },
  { id: 'a2', figure: '73 +', description: 'Agency members' },
  { id: 'a3', figure: '5.000', description: 'Projects complete' },
];

export const Profiles = [
  {
    fullName: 'Azah Anyeni',
    jobTitle: 'Designer',
    imgSrc: './assets/images/team/azah.png',
  },
  {
    fullName: 'Roelof Bekkenenks',
    jobTitle: 'React Developer',
    imgSrc: './assets/images/team/roelof.png',
  },
  {
    fullName: 'Leonardo Oliveira',
    jobTitle: 'Illustrator',
    imgSrc: './assets/images/team/leonardo.png',
  },
  {
    fullName: 'Izabella Tabakova',
    jobTitle: 'Product Designer',
    imgSrc: './assets/images/team/izabella.png',
  },
  {
    fullName: 'Roelof Bekkenenks',
    jobTitle: 'React Developer',
    imgSrc: './assets/images/team/roelof.png',
  },
  {
    fullName: 'Leonardo Oliveira',
    jobTitle: 'Illustrator',
    imgSrc: './assets/images/team/leonardo.png',
  },
];

export const FAQS = [
  {
    id: 'faq1',
    title: 'A digital agency is a business',
    content:
      'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business. Digital marketing efforts, instead of handling in-house.',
  },
  {
    id: 'faq2',
    title: 'Hire to outsource your digital',
    content:
      'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business. Digital marketing efforts, instead of handling in-house.',
  },
  {
    id: 'faq3',
    title: 'Marketing efforts',
    content:
      'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business. Digital marketing efforts, instead of handling in-house.',
  },
  {
    id: 'faq4',
    title: 'Can provide your business',
    content:
      'Digital marketing efforts, instead of handling in-house. They can provide your business with a variety of digital solutions to promote your product or service online and help you hit your marketing goals and grow your business. Digital marketing efforts, instead of handling in-house.',
  },
];

export const BrandPartners = [
  {
    id: 'p1',
    logoSrc: './assets/images/Partners/digitalside.png',
    companyName: 'Digital Side',
  },
  {
    id: 'p2',
    logoSrc: './assets/images/Partners/vortex.png',
    companyName: 'Vortex',
  },
  {
    id: 'p3',
    logoSrc: './assets/images/Partners/travelexp.png',
    companyName: 'Travel Explorer',
  },
  {
    id: 'p4',
    logoSrc: './assets/images/Partners/fuzion.png',
    companyName: 'Fuzion',
  },
  {
    id: 'p5',
    logoSrc: './assets/images/Partners/mediafury.png',
    companyName: 'Media Fury',
  },
];
