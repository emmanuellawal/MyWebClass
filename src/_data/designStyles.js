module.exports = [
  {
    id: 'swiss',
    title: 'Swiss International Style',
    slug: 'swiss',
    era: '1950s–1970s',
    thumbnail: '🇨🇭',
    accentColor: '#E53935',
    description: 'Clean grids, sans-serif typography, and objective photography.',
    origin: `Developed in Switzerland during the 1950s, this style emphasized cleanliness, readability, and objectivity. Designers like Josef Müller-Brockmann, Armin Hofmann, and Emil Ruder pioneered the use of mathematical grids, sans-serif typefaces, and asymmetric layouts. The style became synonymous with clarity and functional beauty, influencing corporate design worldwide.`,
    characteristics: [
      'Grid-based layouts with mathematical precision',
      'Sans-serif typefaces (Helvetica, Univers, Akzidenz-Grotesk)',
      'Asymmetric compositions for dynamic balance',
      'High contrast black and white with color accents',
      'Objective photography and illustration',
      'Generous use of negative space'
    ],
    typography: 'Helvetica Neue, Univers, Akzidenz-Grotesk',
    colorPalette: ['#000000', '#FFFFFF', '#E53935'],
    gridSystem: '12-column grid with 24px gutters',
    demoUrl: '/demos/swiss.html',
    status: 'approved'
  },
  {
    id: 'bauhaus',
    title: 'Bauhaus',
    slug: 'bauhaus',
    era: '1919–1933',
    thumbnail: '🔺',
    accentColor: '#1E88E5',
    description: 'Form follows function. Primary colors, geometric shapes, clean lines.',
    origin: `Founded by Walter Gropius in Weimar, Germany in 1919, the Bauhaus school unified crafts and fine arts. The movement emphasized functionalism, simplicity, and the integration of art with industrial design. Key figures like László Moholy-Nagy, Josef Albers, and Herbert Bayer developed a visual language based on geometric forms and primary colors.`,
    characteristics: [
      'Primary colors (red, blue, yellow) with black and white',
      'Geometric shapes (circle, square, triangle)',
      'Functional design prioritizing utility',
      'Sans-serif typography',
      'Integration of art and industry',
      'Bold, simple forms'
    ],
    typography: 'Futura, Universal, geometric sans-serifs',
    colorPalette: ['#000000', '#FFFFFF', '#1E88E5', '#E53935', '#FBC02D'],
    gridSystem: 'Asymmetric grid based on geometric proportions',
    demoUrl: '/demos/bauhaus.html',
    status: 'approved'
  },
  {
    id: 'brutalist',
    title: 'Brutalism',
    slug: 'brutalist',
    era: '2014–present (web)',
    thumbnail: '▓',
    accentColor: '#212121',
    description: 'Raw, unpolished aesthetics. Exposed structure, monospace fonts, stark contrast.',
    origin: `Inspired by Brutalist architecture of the 1950s–1970s, web brutalism emerged around 2014 as a reaction to the homogeneous, polished aesthetics of modern web design. It embraces raw HTML, exposed structures, and intentional "ugliness" as an authentic expression. The movement values honesty over decoration and substance over style.`,
    characteristics: [
      'Raw HTML aesthetics with minimal styling',
      'Monospace typography',
      'High contrast and harsh color combinations',
      'Intentional lack of polish',
      'Exposed structural elements',
      'Anti-UX patterns as artistic statement'
    ],
    typography: 'Monospace fonts, Courier, system fonts',
    colorPalette: ['#000000', '#FFFFFF', '#212121', '#00FF00', '#FF0000'],
    gridSystem: 'Often eschews grids for chaotic layouts',
    demoUrl: '/demos/brutalist.html',
    status: 'approved'
  }
];
