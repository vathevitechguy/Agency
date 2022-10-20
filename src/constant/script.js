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

// export const DUMMY_DATA = [
//   {
//     id: 'd1',
//     title: 'Sofa',
//     img: './assets/images/portfolio/sofa.png',
//     type: 'design',
//   },
//   {
//     id: 'd2',
//     title: 'Abstract',
//     img: './assets/images/portfolio/abstract.png',
//     type: 'design',
//   },
//   {
//     id: 'd3',
//     title: 'Calc',
//     img: './assets/images/portfolio/calc.png',
//     type: 'design',
//   },
//   {
//     id: 'b1',
//     title: 'Keyboard',
//     img: './assets/images/portfolio/keyboard.png',
//     type: 'branding',
//   },
//   {
//     id: 'b2',
//     title: 'HandP',
//     img: './assets/images/portfolio/phone.png',
//     type: 'branding',
//   },
//   {
//     id: 'b3',
//     title: 'Sport',
//     img: './assets/images/portfolio/sport',
//     type: 'branding',
//   },
//   {
//     id: 'i1',
//     title: 'Work Media',
//     img: './assets/images/portfolio/media.png',
//     type: 'illustration',
//   },
//   {
//     id: 'm1',
//     title: 'DDDone',
//     img: './assets/images/portfolio/dddone.png',
//     type: 'motion',
//   },
//   {
//     id: 'm2',
//     title: 'Architect',
//     img: './assets/images/portfolio/architect.png',
//     type: 'motion',
//   },
// ];
