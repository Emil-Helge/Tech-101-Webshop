export interface Product {
  id: number;
  image: string;
  title: string;
  description: string;
  price: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  {
    image:
      'https://images.pexels.com/photos/2047905/pexels-photo-2047905.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'UltraBook X9',
    description:
      'The UltraBook X9 is the ultimate productivity machine for professionals on-the-go. With its lightweight design and powerful hardware, you can breeze through any task without breaking a sweat. The X9 also features a stunning 15-inch display with 4K resolution, perfect for streaming your favorite shows or editing photos.',
    price: 1599,
    id: 1,
  },
  {
    image:
      'https://images.pexels.com/photos/2148216/pexels-photo-2148216.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'PowerBook 13',
    description:
      'The PowerBook 13 is the perfect laptop for students and creative professionals. With its compact size and powerful performance, you can take your work wherever you go. The 13-inch Retina display delivers crisp and clear visuals, while the powerful processor ensures speedy performance.',
    price: 3919,
    id: 2,
  },
  {
    image:
      'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600',
    title: 'GamingBook Pro',
    description:
      'The GamingBook Pro is the ultimate gaming machine for hardcore gamers. With its powerful graphics card and lightning-fast processor, you can play the latest games at the highest settings. The 17-inch Full HD display delivers immersive visuals, while the backlit keyboard ensures you can keep gaming even in low light.',
    price: 2299,
    id: 3,
  },
  {
    image:
      'https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'BookAir S',
    description:
      'The BookAir S is the perfect laptop for those who value style and portability. With its slim and lightweight design, you can take it with you wherever you go. The 14-inch Full HD display delivers stunning visuals, while the long-lasting battery ensures you can work or play all day.',
    price: 1299,
    id: 4,
  },
  {
    image:
      'https://images.pexels.com/photos/669228/pexels-photo-669228.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'WorkBook Plus',
    description:
      'The WorkBook Plus is the ultimate workstation for professionals who need to run demanding applications. With its powerful hardware and spacious 17-inch display, you can work on multiple projects at once without any lag. The workstation also features a backlit keyboard for typing in low light conditions.',
    price: 999,
    id: 5,
  },
  {
    image:
      'https://images.pexels.com/photos/159394/pc-computer-android-android-pc-159394.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'TravelBook Mini',
    description:
      'The TravelBook Mini is the perfect laptop for those who are always on-the-go. With its compact size and long-lasting battery, you can take it with you wherever you go. The 11-inch display delivers crisp visuals, while the lightweight design ensures you can carry it with ease.',
    price: 5499,
    id: 6,
  },
];
