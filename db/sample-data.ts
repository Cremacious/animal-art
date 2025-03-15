import { hashSync } from 'bcrypt-ts-edge';

const sampleData = {
    users: [
      {
        name: 'John',
        email: 'adminemail@test.com',
        password: hashSync('123456', 10),
        role: 'admin',
      },
      {
        name: 'Jane',
        email: 'useremail@test.com',
        password: hashSync('123456', 10),
        role: 'user',
      },
    ],
  products: [
    {
      name: 'Dog in basket',
      slug: 'dog-in-basket',
      animalType: 'dog',
      images: [
        '/images/sample-products/p1-1.jpg',
        '/images/sample-products/p1-2.jpg',
      ],
      size: '8x11',
      description: 'Classic Polo style with modern comfort',
      stock: 5,
      price: 59.99,
      isFeatured: true,
    },
    {
      name: 'cat in basket',
      slug: 'cat-in-basket',
      animalType: 'cat',
      images: [
        '/images/sample-products/p1-1.jpg',
        '/images/sample-products/p1-2.jpg',
      ],
      size: '8x11',
      description: 'Classic Polo style with modern comfort',
      stock: 5,
      price: 59.99,
      isFeatured: true,
    },
    {
      name: 'rabbit in basket',
      slug: 'rabbit-in-basket',
      animalType: 'rabbit',
      images: [
        '/images/sample-products/p1-1.jpg',
        '/images/sample-products/p1-2.jpg',
      ],
      size: '8x11',
      description: 'Classic Polo style with modern comfort',
      stock: 5,
      price: 59.99,
      isFeatured: true,
    },
  ],
};

export default sampleData;
