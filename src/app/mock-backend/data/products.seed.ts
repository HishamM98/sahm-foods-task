import { ProductDto } from '../../core/models/api.types';

const CATEGORIES = [
  'Burgers',
  'Pizza',
  'Sandwiches',
  'Sides',
  'Drinks',
  'Desserts',
  'Salads',
  'Combos',
] as const;

const EN_BASE = [
  'Classic',
  'Spicy',
  'Grilled',
  'Crispy',
  'Smoky',
  'Loaded',
  'House',
  'Chef',
  'Family',
  'Mini',
];

const EN_ITEMS = [
  'Burger',
  'Pizza',
  'Shawarma',
  'Wrap',
  'Fries',
  'Salad',
  'Cola',
  'Juice',
  'Cake',
  'Soup',
  'Pasta',
  'Steak',
  'Nuggets',
  'Falafel',
  'Rice Bowl',
];

const AR_BASE = [
  'كلاسيك',
  'حار',
  'مشوي',
  'مقرمش',
  'مدخن',
  'محمّل',
  'البيت',
  'الشيف',
  'عائلي',
  'صغير',
];

const AR_ITEMS = [
  'برجر',
  'بيتزا',
  'شاورما',
  'راب',
  'بطاطس',
  'سلطة',
  'كولا',
  'عصير',
  'كيك',
  'شوربة',
  'باستا',
  'ستيك',
  'ناجتس',
  'فلافل',
  'طبق أرز',
];

/** ~240 products for search performance demos. */
export const PRODUCTS_SEED: ProductDto[] = (() => {
  const products: ProductDto[] = [
    {
      id: 'p-burger-classic',
      name: 'Classic Burger',
      nameAr: 'برجر كلاسيك',
      category: 'Burgers',
      price: 85,
      sku: 'BRG-001',
      tags: ['beef', 'popular'],
      available: true,
    },
    {
      id: 'p-shawarma',
      name: 'Chicken Shawarma',
      nameAr: 'شاورما دجاج',
      category: 'Sandwiches',
      price: 70,
      sku: 'SHW-001',
      tags: ['chicken', 'popular'],
      available: true,
    },
    {
      id: 'p-pizza-marg',
      name: 'Margherita Pizza',
      nameAr: 'بيتزا مارجريتا',
      category: 'Pizza',
      price: 120,
      sku: 'PZA-001',
      tags: ['veg', 'popular'],
      available: true,
    },
    {
      id: 'p-fries-reg',
      name: 'Fries',
      nameAr: 'بطاطس',
      category: 'Sides',
      price: 35,
      sku: 'SID-001',
      tags: ['side'],
      available: true,
    },
    {
      id: 'p-cola',
      name: 'Cola',
      nameAr: 'كولا',
      category: 'Drinks',
      price: 20,
      sku: 'DRK-001',
      tags: ['drink'],
      available: true,
    },
    {
      id: 'p-water',
      name: 'Water',
      nameAr: 'مياه',
      category: 'Drinks',
      price: 10,
      sku: 'DRK-002',
      tags: ['drink'],
      available: true,
    },
    {
      id: 'p-salad-greek',
      name: 'Greek Salad',
      nameAr: 'سلطة يوناني',
      category: 'Salads',
      price: 55,
      sku: 'SLD-001',
      tags: ['veg'],
      available: true,
    },
    {
      id: 'p-garlic-bread',
      name: 'Garlic Bread',
      nameAr: 'خبز بالثوم',
      category: 'Sides',
      price: 40,
      sku: 'SID-002',
      tags: ['side'],
      available: true,
    },
  ];

  let seq = 100;
  for (const category of CATEGORIES) {
    for (let i = 0; i < 29; i++) {
      const baseIdx = i % EN_BASE.length;
      const itemIdx = (i + CATEGORIES.indexOf(category)) % EN_ITEMS.length;
      const id = `p-gen-${seq}`;
      products.push({
        id,
        name: `${EN_BASE[baseIdx]} ${EN_ITEMS[itemIdx]} ${seq}`,
        nameAr: `${AR_BASE[baseIdx]} ${AR_ITEMS[itemIdx]} ${seq}`,
        category,
        price: 15 + ((seq * 7) % 180),
        sku: `${category.slice(0, 3).toUpperCase()}-${seq}`,
        tags: [category.toLowerCase(), i % 5 === 0 ? 'popular' : 'standard'],
        available: i % 11 !== 0,
      });
      seq += 1;
    }
  }

  return products;
})();

export const PRODUCT_CATEGORIES = [...CATEGORIES];
