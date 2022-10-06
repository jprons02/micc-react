//Our little shack (The Village)
//CLOSED

export const ourLittleShackMenu = [
  {
    name: 'Breakfast',
    subMenu: [
      {
        name: 'Main',
        items: [
          { name: 'Pancakes with bacon or sausage', price: '$6.00' },
          { name: 'Bacon & Eggs', price: '$6.00' },
          { name: 'Sausage & Eggs', price: '$6.00' },
          { name: 'Spam & Eggs', price: '$6.00' },
          { name: 'Smoked Sausage with fries', price: '$4.00' },
          { name: 'Custom Omelette', price: '$6.00' },
          { name: 'French Toast with bacon', price: '$6.00' },
          { name: 'Grits', price: '$3.00' },
          { name: 'Home Fries', price: '$3.00' },
          { name: 'Hash Browns', price: '$3.00' },
          { name: 'Bagel', price: '$2.00' },
          { name: 'Corn Beef Hash', price: '$3.00' },
        ],
      },
    ],
  },
  {
    name: 'Lunch',
    subMenu: [
      {
        name: 'Main',
        items: [
          { name: 'Cheeseburger', price: '$7.00' },
          { name: 'Bacon Cheeseburger', price: '$8.00' },
          { name: 'Buffalo Burger', price: '$10.00' },
          { name: 'Gator Bites', price: '$15.00' },
          { name: 'Frog Legs', price: '$20.00' },
          { name: 'Shrimp', price: '$10.00' },
          { name: 'Grilled Chicken Sandwich', price: '$7.00' },
          { name: 'Chicken or Steak Quesadilla', price: '$7.00' },
          { name: 'Chicken Tenders (5 pc)', price: '$11.50' },
          { name: 'Chicken Wings (7 pc)', price: '$8.00' },
          { name: 'Grilled Cheese Sandwich', price: '$5.00' },
          { name: 'Chili Dog', price: '$5.00' },
          { name: 'Chicken nuggets (5pc)', price: '$5.00' },
          { name: 'Club Sandwich (Sandwich only, $5)', price: '$9.00' },
          { name: 'BLT Sandwich (Sandwich only, $4)', price: '$8.00' },
          { name: 'Steak Sandwich', price: '$7.00' },
          { name: 'Chicken Wrap', price: '$7.00' },
          { name: 'Steak Wrap', price: '$8.00' },
        ],
      },
      {
        name: 'Sides',
        items: [
          { name: 'French Fries', price: '$3.00' },
          { name: 'Mozarella Sticks', price: '$3.00' },
          { name: 'Sweet Potato Fries', price: '$4.00' },
          { name: 'Onion Rings', price: '$3.00' },
        ],
      },
      {
        name: 'Salads',
        items: [
          { name: 'Salad with chicken', price: '$7.00' },
          { name: 'Salad with shrimp', price: '$8.00' },
          { name: 'Salad with steak', price: '$9.00' },
        ],
      },
    ],
  },
  {
    name: "Kid's Menu",
    items: [
      { name: 'Mac & Cheese', price: '$3.00' },
      { name: 'Hotdog', price: '$4.00' },
      { name: 'Pizza', price: '$5.00' },
    ],
  },
  {
    name: 'Drinks',
    items: [
      { name: 'Red Bull', price: '$3.00' },
      { name: 'Milkshakes (Vanilla/Chocolate)', price: '$4.00' },
      { name: 'Coffee', price: '$2.00' },
      { name: 'Cuban Coffee', price: '$1.50' },
      { name: 'Water', price: '$1.00' },
      { name: 'Soda', price: '$1.00' },
    ],
  },
];

// Sawgrass Cafe
export const sawgrassCafeMenu = [
  /*
  {
    name: 'Breakfast',
    subMenu: [
      {
        name:
          'Omelette Combo, includes: two eggs any style (fried or scrambled), two proteins (sausage, bacon, ham), breakfast potatoes, toast and one american coffee',
        items: [
          { name: 'Veggie Omelette Combo', price: '$9.00' },
          { name: 'Ham & Cheese Omelette Combo', price: '$9.50' },
          { name: 'All Meat Omelette Combo', price: '$10.50' },
          {
            name: 'Two Eggs Combo (includes toast & home potatoes)',
            price: '$6.00',
          },
        ],
      },

      {
        name: 'Sides',
        items: [
          { name: 'Oatmeal (6 oz.)', price: '$2.50' },
          { name: 'French Fries (4 oz.)', price: '$2.50' },
          { name: 'Steak Ham (4 oz.)', price: '$3.25' },
          { name: 'Sausage (2 pc.)', price: '$2.25' },
          { name: 'Hash Brown (2 pc.)', price: '$2.00' },
          { name: 'Home Potatoes (4 oz.)', price: '$2.50' },
          { name: 'Bacon (4 pc.)', price: '$3.50' },
          { name: 'Two eggs any style (fried or scrambled)', price: '$2.30' },
        ],
      },
      {
        name: 'Extras',
        items: [
          { name: 'Two Eggs', price: '$2.50' },
          { name: 'Egg White', price: '$2.50' },
          {
            name: 'Choice of American, Mozzarella, Cheddar or Swiss cheese',
            price: '$1.25',
          },
          { name: 'Cheese', price: '$1.50' },
          { name: 'Topping', price: '$1.50' },
          { name: 'Sausage', price: '$2.50' },
          { name: 'Meat', price: '$2.50' },
          { name: 'Steak Ham', price: '$3.50' },
          { name: 'Bacon', price: '$3.50' },
          { name: 'Onions, Peppers, Tomatoes or Mushrooms', price: '$1.50' },
          { name: 'Toast', price: '$2.50' },
          { name: 'Cuban Toast', price: '$3.00' },
        ],
      },
    ],
  },
  */
  {
    name: 'Drinks',
    subMenu: [
      {
        name: 'Cold Beverages',
        items: [
          { name: 'Soda Can (12 oz.)', price: '$2.50' },
          { name: 'Soda Bottle (20 oz.)', price: '$3.00' },
          { name: 'Fountain Soda', price: '$2.00' },
          { name: 'Monster', price: '$4.00' },
          { name: 'Powerade', price: '$3.50' },
          { name: 'Dunkin Donuts Beverages', price: '$3.50' },
          { name: 'Gold Peak Tea', price: '$3.00' },
          { name: 'Water Bottle', price: '$1.50' },
          { name: 'Juice', price: '$3.00' },
        ],
      },
      {
        name: 'Hot Beverages',
        items: [
          { name: 'Hot Tea', price: '$1.50' },
          { name: 'American Coffee', price: '$2.00' },
          { name: 'Colada', price: '$2.50' },
          { name: 'Cortadito', price: '$3.00' },
          { name: 'Café con Leche', price: '$4.00' },
          { name: 'Hot Chocolate', price: '$4.00' },
          { name: 'Cappuccino', price: '$4.50' },
        ],
      },
    ],
  },
  {
    name: 'Appetizers',
    items: [
      {
        name: 'Combo Special Croquetas (3 Croquetas with 2 Saltines)',
        price: '$3.00',
      },
      { name: 'Croquetas', price: '$1.50' },
      { name: 'Yuca Rellenas', price: '$3.00' },
      { name: 'Papa Rellenas', price: '$3.00' },
      { name: 'Toast', price: '$2.50' },
      { name: 'Pan de Bono', price: '$2.50' },
      { name: 'Cuban Toast', price: '$3.00' },
      { name: 'Pastelitos', price: '$2.50' },
      { name: 'Papa Rellena', price: '$3.00' },
      { name: 'Cheese Tequeño', price: '$3.00' },
      { name: 'Guava Cheese Tequeño', price: '$3.00' },
      { name: 'Chorizo Empanada', price: '$3.50' },
      { name: 'Spinach Empanada', price: '$3.50' },
      { name: 'Chicken Empanada', price: '$3.50' },
      { name: 'Meat Empanada', price: '$3.50' },
      { name: 'Jamaican Curry Chicken Pattie', price: '$4.00' },
      { name: 'Jamaican Beef Spicy Pattie', price: '$4.00' },
      { name: 'Jamaican Beef Mild Pattie', price: '$4.00' },
      { name: 'Guava Cheese Pastelito', price: '$3.00' },
      { name: 'Cheese Pastelito', price: '$2.50' },
      { name: 'Guava Pastelito', price: '$2.50' },
      { name: 'Pastelitos Coco', price: '$2.50' },
    ],
  },
  {
    name: 'Combos',
    subMenu: [
      {
        name:
          '$8 Combo includes: 6 oz. Soup & Half Sandwich with a side of 6 oz. Fries and a 16 oz. Drink.',
        items: [
          { name: 'Soup, Ham & Cheese Sandwich', price: '$8.00' },
          { name: 'Soup, BLT Sandwich', price: '$8.00' },
          { name: 'Soup, Turkey & Provolone Sandwich', price: '$8.00' },
          { name: 'Soup, Grilled Cheese Sandwich', price: '$8.00' },
          { name: 'Soup, Tuna Salad Sandwich', price: '$8.00' },
          { name: 'Soup, Chicken Salad Sandwich', price: '$8.00' },
          { name: 'Soup & Salad', price: '$8.00' },
        ],
      },
    ],
  },
  {
    name: 'Hot Stuff',
    items: [
      { name: 'Hot Dog & Fries', price: '$7.00' },
      { name: 'Chicken Tenders', price: '$11.50' },
      { name: 'Chicken Wings', price: '$14.00' },
    ],
  },
  {
    name: 'Salad',
    subMenu: [
      {
        name:
          '$8 Combo includes: 16 oz. Soup and Garden Salad with a 16 oz. Drink (no Fries included)',
        items: [
          { name: 'Mac Salad Scoop', price: '$3.91' },
          { name: 'Chicken Salad Scoop', price: '$5.75' },
          { name: 'Tuna Salad Scoop', price: '$6.21' },
          { name: 'Garden Salad', price: '$7.50' },
        ],
      },
    ],
  },
  {
    name: 'Sandwiches',
    items: [
      { name: 'Grilled Cheese', price: '$7.00' },
      { name: 'Chicken Salad Sandwich', price: '$10.00' },
      { name: 'BLT Sandwich', price: '$9.50' },
      { name: 'Ham & Cheese Sandwich', price: '$9.00' },
      { name: 'Turkey & Provolone Sandwich', price: '$9.50' },
      { name: 'Croqueta Preparada', price: '$9.50' },
      { name: 'Tuna Salad Sandwich', price: '$10.00' },
      { name: 'Hamburger', price: '$10.00' },
      { name: 'Chicken Sandwich', price: '$10.50' },
      { name: 'Cuban Sandwich', price: '$10.50' },
      { name: 'Cheeseburger', price: '$10.50' },
      { name: 'Club Sandwich', price: '$12.00' },
      { name: 'Steak Palomilla Sandwich', price: '$12.00' },
      { name: 'Pork Special Sandwich', price: '$10.00' },
    ],
  },
  {
    name: 'Sides',
    items: [{ name: 'French Fries (8 oz.)', price: '$4.50' }],
  },
  {
    name: 'Soup',
    items: [
      { name: 'Miccosukee Chicken Soup', price: '$6.00' },
      { name: 'Soup of the Day', price: '$5.52' },
    ],
  },
  {
    name: 'Pizza',
    items: [
      { name: 'Cheese Pizza (Slice)', price: '$4.00' },
      { name: 'Pepperoni Pizza (Slice)', price: '$4.50' },
      { name: 'Whole Pizza', price: '$20.00' },
    ],
  },
];
