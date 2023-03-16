export interface Product {
  id: string;
  image: string;
  title: string;
  description: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

/**
 * function that returns a unique Id, both numbers and letters
 */
export const generateId = () => {
  const newId = Math.floor(1 + Math.random() * 0x1000)
    .toString(16)
    .substring(1);
  return newId;
};

export const products: Product[] = [
  {
    image:
      'https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1032228-02_Fm_M0013527&mw=1500&fmt=webp',
    title: 'Jolly',
    description:
      'Stool with comfortable, shaped seat. Made of solid wood, in the Toon Wood type. Height 61 cm. Seat 40x32 cm. Seat height: 61 cm Width at the bottom 47 cm. Mounted.',
    price: 1599,
    id: 'e1',
  },
  {
    image:
      'https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1595558-01_Fm_M0037129&mw=1500&fmt=webp',
    title: 'Chardonne',
    description:
      'Armchair with pine and plywood frame with nozag suspension and foam filling. Brushed metal legs. Dimensions: Width 89 cm, height 77 cm, depth 83 cm. Seat height 43 cm, seat depth 62 cm, seat width 54 cm.',
    price: 3919,
    id: 'd2',
  },
  {
    image:
      'https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=hom_1663846-02_Fs&mw=1500&fmt=webp',
    title: 'Xander',
    description:
      'Lounge armchair with upholstery in bouquet fabric and passpoalk edge along the top edge. Legs and frame in powder-coated metal. Foam filling. Easier installation.',
    price: 2299,
    id: 'c1',
  },
  {
    image:
      'https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1615855-02_Fm_M0044073&mw=1500&fmt=webp',
    title: 'Magnolia',
    description:
      'Rattan bedside table with shelf underneath. The top is reinforced with a plywood board under the rattan. Dimensions: Width 41 cm, height 71 cm, depth 31 cm. Leg height 22 cm. Height to the upper edge of the lower shelf 25 cm. Dimensions between the shelves 42.5 cm.',
    price: 1299,
    id: 'f4',
  },
  {
    image:
      'https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1503126-03_Fm_M0037108&mw=1500&fmt=webp',
    title: 'Bella',
    description:
      'Upholstered headboard attached to the wall (two hooks on the back). Wooden frame (pine). Upholstery in velvet of polyester and filling of polyether. Width 95 cm. Height 61.5 cm. Depth 7.5 cm.',
    price: 999,
    id: 'e6',
  },
  {
    image:
      'https://assets.ellosgroup.com/i/ellos/b?$eg$&$em$&$ep$&$ed$&n=ell_1664039-01_Fm_M0059479&mw=1500&fmt=webp',
    title: 'Essentials',
    description:
      'Side table / cabinet in solid mango wood with wax-treated surface. Two doors with wooden handles and soft closing. The cabinet is divided inside and has a fixed shelf. Dimensions between shelves approx. 27 cm. Clear height under furniture 14 cm. Delivered assembled.',
    price: 5499,
    id: 'a3',
  },
];
