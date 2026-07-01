import { Router } from 'express';

const router = Router();

// Temporary in-memory data — will be replaced by Prisma DB queries
const restaurants = [
  {
    id: 'r_1',
    name: 'La Bonne Fourchette',
    city: 'Paris',
    rating: 4.6,
    menu: [
      { id: 'm_1', name: 'Burger classique', price: 9.5, description: 'Steak, cheddar, salade' },
      { id: 'm_2', name: 'Salade niçoise', price: 8.0, description: "Thon, œuf, olives" }
    ]
  },
  {
    id: 'r_2',
    name: 'Pasta Palace',
    city: 'Lyon',
    rating: 4.4,
    menu: [
      { id: 'm_3', name: 'Spaghetti Carbonara', price: 11.0, description: 'Pancetta, pecorino' },
      { id: 'm_4', name: 'Penne Arrabiata', price: 10.0, description: 'Sauce tomate pimentée' }
    ]
  }
];

router.get('/', (_req, res) => {
  const list = restaurants.map(({ menu, ...rest }) => ({ ...rest }));
  res.json(list);
});

router.get('/:id', (req, res) => {
  const r = restaurants.find((x) => x.id === req.params.id);
  if (!r) return res.status(404).json({ error: 'Restaurant not found' });
  res.json(r);
});

export default router;
