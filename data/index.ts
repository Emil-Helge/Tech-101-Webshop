export interface Product {
  id: string;
  image: string;
  secondImage: string;
  title: string;
  description: string;
  summary: string[];
  price: number;
  rating: number;
  usersRated: number;
}

export interface CartItem extends Product {
  quantity: number;
}

export const products: Product[] = [
  {
    id: '1',
    image:
      'https://cdn.pixabay.com/photo/2016/11/19/15/32/laptop-1839876_960_720.jpg',
    title: 'UltraBook X9',
    description:
      'The UltraBook X9 is the ultimate productivity machine for professionals on-the-go. With its lightweight design and powerful hardware, you can breeze through any task without breaking a sweat. The X9 also features a stunning 15-inch display with 4K resolution, perfect for streaming your favorite shows or editing photos.',
    summary: ['Lightweight design', 'Powerful hardware', '15-inch 4K display'],
    price: 1599,
    rating: 4.5,
    usersRated: 7,
    secondImage:
      'https://img.freepik.com/free-photo/laptop-wooden-table_53876-20635.jpg?w=1800&t=st=1679499181~exp=1679499781~hmac=f6d0d05ebf7737fa45bea4a59eb3554878f724ed68cab8880aa0a2f8423b1064',
  },
  {
    id: '2',
    image:
      'https://images.unsplash.com/photo-1629131726692-1accd0c53ce0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
    title: 'PowerBook 13',
    description:
      'The PowerBook 13 is the perfect laptop for students and creative professionals. With its compact size and powerful performance, you can take your work wherever you go. The 13-inch Retina display delivers crisp and clear visuals, while the powerful processor ensures speedy performance.',
    summary: [
      'Perfect for studying',
      '13-inch Retina display',
      'Powerful processor',
    ],
    price: 3919,
    rating: 3.2,
    usersRated: 5,
    secondImage:
      'https://images.unsplash.com/photo-1555099962-4199c345e5dd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1740&q=80',
  },
  {
    id: '3',
    image:
      'https://images.pexels.com/photos/7974/pexels-photo.jpg?auto=compress&cs=tinysrgb&w=1600',
    title: 'GamingBook Pro',
    description:
      'The GamingBook Pro is the ultimate gaming machine for hardcore gamers. With its powerful graphics card and lightning-fast processor, you can play the latest games at the highest settings. The 17-inch Full HD display delivers immersive visuals, while the backlit keyboard ensures you can keep gaming even in low light.',
    summary: [
      'Ideal for gaming',
      '17-inch Full HD display',
      'Backlit keyboard',
    ],
    price: 2299,
    rating: 3.8,
    usersRated: 3,
    secondImage:
      'https://img.freepik.com/free-photo/desk-arrangement-with-laptop-top-view_23-2149073069.jpg?w=1800&t=st=1679499431~exp=1679500031~hmac=60bd5553efb8ae654fba19919e375c56bf22aad167a7b23b6fedccc4773e9329',
  },
  {
    id: '4',
    image:
      'https://images.pexels.com/photos/129208/pexels-photo-129208.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'BookAir S',
    description:
      'The BookAir S is the perfect laptop for those who value style and portability. With its slim and lightweight design, you can take it with you wherever you go. The 14-inch Full HD display delivers stunning visuals, while the long-lasting battery ensures you can work or play all day.',
    summary: [
      'Slim and lightweight design',
      '14-inch Full HD display',
      'Long-lasting battery',
    ],
    price: 1299,
    rating: 4.2,
    usersRated: 8,
    secondImage:
      'https://images.pexels.com/photos/238118/pexels-photo-238118.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    id: '5',
    image:
      'https://images.pexels.com/photos/669228/pexels-photo-669228.jpeg?auto=compress&cs=tinysrgb&w=1600',
    title: 'WorkBook Plus',
    description:
      'The WorkBook Plus is the ultimate workstation for professionals who need to run demanding applications. With its powerful hardware and spacious 17-inch display, you can work on multiple projects at once without any lag. The workstation also features a backlit keyboard for typing in low light conditions.',
    summary: [
      'Multiple projects at once',
      'Spacious 17-inch display',
      'Backlit keyboard',
    ],
    price: 999,
    rating: 3.5,
    usersRated: 2,
    secondImage:
      'https://img.freepik.com/free-photo/desk-arrangement-with-laptop_23-2148868097.jpg?w=1800&t=st=1679500147~exp=1679500747~hmac=0f4e357fe2db14c7e1593ab096de21f1d6c9c605831fd4614f6af5af84c83577',
  },
  {
    id: '6',
    image:
      'https://img.freepik.com/free-photo/laptop-wooden-table_1252-909.jpg?w=1800&t=st=1679502360~exp=1679502960~hmac=e6bd67b3eea9d09efcce62f2ff5fc23fbe2fcfbd198e55d172b77cc4848391f4',
    title: 'TravelBook Mini',
    description:
      'The TravelBook Mini is the perfect laptop for those who are always on-the-go. With its compact size and long-lasting battery, you can take it with you wherever you go. The 11-inch display delivers crisp visuals, while the lightweight design ensures you can carry it with ease.',
    summary: ['Long-lasting battery', '11-inch display', 'Lightweight design'],
    price: 5499,
    rating: 4.9,
    usersRated: 4,
    secondImage:
      'https://img.freepik.com/free-photo/laptop-kitchen_23-2147772848.jpg?t=st=1679502360~exp=1679502960~hmac=19c1e45280a8553e89358b6dc9bb8d029d3e6d9cae70d083ae857e0b87c1fcf9',
  },
];
