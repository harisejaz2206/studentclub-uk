import { Resource } from '../types';

export const resources: Resource[] = [
  {
    id: 'trainline',
    name: 'Trainline',
    description: 'Book train and coach tickets across the UK with student discounts.',
    category: 'transport',
    logo: 'train',
    url: 'https://www.thetrainline.com',
    studentDiscount: '16-25 Railcard - 1/3 off rail fares',
    features: ['Live train times', 'Mobile tickets', 'Price alerts', 'Student discounts'],
    rating: 4.5
  },
  {
    id: 'monzo',
    name: 'Monzo',
    description: 'Digital bank with easy UK account opening for international students.',
    category: 'banking',
    logo: 'credit-card',
    url: 'https://www.monzo.com',
    features: ['Free UK account', 'No foreign transaction fees', 'Instant notifications', 'Budgeting tools'],
    rating: 4.8
  },
  {
    id: 'tesco-clubcard',
    name: 'Tesco Clubcard',
    description: 'Save money on groceries and earn points for rewards.',
    category: 'groceries',
    logo: 'shopping-cart',
    url: 'https://www.tesco.com/clubcard',
    studentDiscount: 'Extra points for students',
    features: ['Points on shopping', 'Exclusive deals', 'Partner rewards', 'Digital card'],
    rating: 4.3
  }
];