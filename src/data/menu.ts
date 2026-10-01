export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  badge?: string;
};

export type MenuCategory = {
  id: string;
  label: string;
  items: MenuItem[];
};

export const houseSpecials: MenuItem[] = [
  {
    name: "Spanish Bocadillo",
    price: "House favourite",
    description:
      "Chorizo, fresh tomato, Monterey cheese, and plenty of our in-house chimichurri on focaccia.",
    badge: "In-house",
  },
  {
    name: "Bella Mortadella",
    price: "Summer menu",
    description:
      "Italian flatbread, mortadella, pesto, mozzarella, crushed pistachios. Built for vino in the sun.",
    badge: "In-house",
  },
  {
    name: "Carmencita Iced Tea",
    price: "Ask us",
    description: "Super fruit tea, agave, fresh lemon, ice and fruit — named after Carmen.",
    badge: "Team special",
  },
  {
    name: "Sophia Iced Coffee",
    price: "Ask us",
    description: "Double espresso, condensed milk, cinnamon — shaken and served.",
    badge: "Team special",
  },
  {
    name: "Matcha Lab Flavours",
    price: "Ask us",
    description: "Strawberry, white peach, pistachio, white chocolate — trained with Matcha Lab MCR.",
    badge: "In-house",
  },
  {
    name: "Affogatos",
    price: "Ask us",
    description: "Pistachio or Nutella. Or go naughty with Amaretto / Frangelico.",
    badge: "In-house",
  },
];

export const menuCategories: MenuCategory[] = [
  {
    id: "counter",
    label: "From the Counter",
    items: [
      {
        name: "Pastries & more",
        price: "£2.50",
        description:
          "Fluffy buttery croissant finished with fillings of your choice. The perfect breakfast move.",
        badge: "#1 most liked",
      },
      {
        name: "2 × Empanadas",
        price: "£8.00",
        description:
          "Oven-baked authentic Argentinian empanadas with multiple fillings. Hometown flavours.",
        badge: "#2 most liked",
      },
      {
        name: "Sorrentina",
        price: "£5.50",
        description: "Pizza bread stick filled with marinara sauce & mozzarella.",
      },
    ],
  },
  {
    id: "paninis",
    label: "Focaccia Paninis",
    items: [
      {
        name: "Paninis",
        price: "£7.50",
        description:
          "Freshly baked Italian-style bread filled with various ingredients. Ask for today's lineup.",
      },
    ],
  },
  {
    id: "sweet",
    label: "Something Sweet",
    items: [
      {
        name: "Bomboloni",
        price: "£5.25",
        description:
          "Italian doughnut filled with warm Nutella or pistachio cream. A house favourite.",
        badge: "#3 most liked",
      },
      {
        name: "Cornetto",
        price: "£5.00",
        description: "Vanilla ice cream in a wafer cone with chocolate coating and sauce.",
      },
      {
        name: "4 × Mini Cannoli",
        price: "£7.25",
        description:
          "Sicilian tube-shaped fried pastry shells filled with Nutella or pistachio.",
      },
      {
        name: "3 × Pastel de Natas",
        price: "£8.00",
        description: "Portuguese egg custard tart pastry. Suns out, natas out.",
      },
    ],
  },
  {
    id: "coffee",
    label: "Coffee Hot & Cold",
    items: [
      {
        name: "Coffees",
        price: "from £1.00",
        description: "Espresso classics done right. Ask for oat or alternative milk.",
      },
      {
        name: "Iced Flavored Latte",
        price: "£4.00",
        description: "Cold, sweet, and exactly what a Manchester afternoon needs.",
      },
      {
        name: "Iced Vietnamese Coffee",
        price: "£6.00",
        description: "Condensed milk over ice and double espresso.",
      },
    ],
  },
  {
    id: "drinks",
    label: "Cold Soft Drinks",
    items: [
      {
        name: "Fresh Orange Juice",
        price: "£5.00",
        description: "12 oz. Fresh squeezed.",
      },
      {
        name: "Guaraná Antarctica",
        price: "£2.95",
        description: "Brazilian soft drink from Amazon guaraná. Refreshing and full of energy.",
      },
      {
        name: "San Pellegrino Blood Orange",
        price: "£2.95",
      },
      {
        name: "San Pellegrino Limonata",
        price: "£2.95",
      },
      {
        name: "Frutea Passion Fruit & Mango",
        price: "£2.25",
      },
      {
        name: "Frutea Lemon",
        price: "£2.25",
      },
      {
        name: "Sumol Passion Fruit",
        price: "£2.25",
        description: "Portugal's most-known fruit soda. Slightly sparkling.",
      },
      {
        name: "Sumol Pineapple",
        price: "£2.25",
      },
    ],
  },
  {
    id: "shelves",
    label: "From Our Shelves",
    items: [
      {
        name: "Harina Pan",
        price: "£3.25",
        description:
          "Non-GMO pre-cooked white corn flour from Venezuela — for arepas and empanadas at home.",
      },
    ],
  },
];
