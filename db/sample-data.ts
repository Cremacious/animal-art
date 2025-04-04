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
      name: 'Dog 1',
      slug: 'dog-1',
      animalType: 'dog',
      images: ['/images/art/dog1.jpg'],
      size: '8x11',
      description: 'Put description here',
      stock: 5,
      price: 59.99,
      isFeatured: false,
    },
    {
      name: 'dog 2',
      slug: 'dog-2',
      animalType: 'dog',
      images: ['/images/art/dog2.jpg'],
      size: '8x11',
      description: 'Put description here',
      stock: 5,
      price: 49.99,
      isFeatured: false,
    },
    {
      name: 'dog 3',
      slug: 'dog-3',
      animalType: 'dog',
      images: ['/images/art/dog3.jpg'],
      size: '8x11',
      description: 'Put description here',
      stock: 5,
      price: 89.99,
      isFeatured: false,
    },
    {
      name: 'dog 4',
      slug: 'dog-4',
      animalType: 'dog',
      images: ['/images/art/dog4.jpg'],
      size: '8x11',
      description: 'Put description here',
      stock: 5,
      price: 49.99,
      isFeatured: false,
    },
    {
      name: 'hippo',
      slug: 'hippo-1',
      animalType: 'hippo',
      images: ['/images/art/hippo.jpg'],
      size: '14x11',
      description: 'Put description here',
      stock: 5,
      price: 69.99,
      isFeatured: false,
    },
    {
      name: 'raccoon',
      slug: 'raccoon-1',
      animalType: 'raccoon',
      images: ['/images/art/raccoon.jpg'],
      size: '20x30',
      description: 'Put description here',
      stock: 5,
      price: 79.99,
    },
    {
      name: 'seahorse',
      slug: 'seahorse-1',
      animalType: 'seahorse',
      images: ['/images/art/seahorse.jpg'],
      size: '20x30',
      description: 'Put description here',
      stock: 5,
      price: 99.99,
    },
  ],
};

export default sampleData;

// npx tsx ./db/seed
