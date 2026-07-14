// Fully integrated Menu Database (Best Sellers category removed)
const menuData = [
  {
    category: "Appetizers",
    items: [
      { name: "Onion Rings", desc: "Battered and fried rings of onions and served with ranch.", price: 12.99 },
      { name: "Bacon Cheese Fries", desc: "Fresh cut fries topped with cheese, bacon, and served with ranch dressing.", price: 12.99 },
      { name: "Quesadilla", desc: "Cheddar and Jack cheese with chicken or beef between 2 large flour tortillas then topped with jalapeno, tomato, sour cream, and salsa.", price: 17.99 },
      { name: "Fried Zucchini", desc: "Zucchini sliced, breaded, and deep fried.", price: 14.49 },
      { name: "Fried Shrimp", desc: "8 pieces. Golden fried butterfly shrimp hand battered and served with cocktail sauce.", price: 12.49 },
      { name: "Chicken Tenders", desc: "8 pieces. Breaded and deep-fried white breast of chicken.", price: 14.49 },
      { name: "Mini Corn Dogs", desc: "Delicious bite-sized golden corn dogs.", price: 12.99 },
      { name: "Potato Skins", desc: "Crispy potato skins topped with bacon and melted cheese.", price: 12.99 },
      { name: "Breaded Mushrooms", desc: "Crispy breaded mushrooms deep fried to a golden brown.", price: 14.49 }
    ]
  },
  {
    category: "Noodles Korean Menu",
    items: [
      { name: "Japchae Noodles", desc: "Stir-fried sweet potato glass noodles with vegetables and beef in a savory sesame sauce.", price: 18.99 },
      { name: "Spicy Jampong Noodles", desc: "Oriental style noodles with mixed vegetables in a fiery broth.", price: 17.49 },
      { name: "Udon Noodles", desc: "Thicker wheat-flour noodles served in a savory vegetable soup broth.", price: 17.49 },
      { name: "Cold Udong Noodles", desc: "Udon noodles and vegetable stir fry served cold.", price: 15.49 },
      { name: "Seafood Noodle Soup", desc: "Fresh vegetables, and seafood mix in a spicy soup broth.", price: 17.49 }
    ]
  },
  {
    category: "Marinated BBQ Korean Menu",
    items: [
      { name: "Bulgogi", desc: "Thin, tender sliced beef marinated in our sweet and savory special sauce.", price: 19.49 },
      { name: "LA Galbi", desc: "Charcoal grilled cut beef short ribs with sweet soy marinade sauce.", price: 27.49 },
      { name: "Spicy Bulgogi", desc: "Spicy chicken or pork marinated in our house spicy sauce.", price: 17.99 }
    ]
  },
  {
    category: "Appetizer Korean Menu",
    items: [
      { name: "Potstickers", desc: "Fried pork or veggie dumplings, lightly fried and served with soy sauce.", price: 6.99 },
      { name: "Korean Roll", desc: "Gluten-free. Variety of vegetables, egg, and seasoned rice rolled in dried seaweed.", price: 7.49 },
      { name: "Edamame", desc: "Gluten-free. Soybeans in the pod, boiled and lightly salted.", price: 5.99 },
      { name: "Kumbo Roll", desc: "3 giant egg rolls with beef, rice, noodles, and cabbage.", price: 12.49 },
      { name: "Seafood Pancakes", desc: "Savory folded flatbread with mixed seafood.", price: 10.49 },
      { name: "Spring Roll", desc: "Fried spring roll.", price: 2.49 }
    ]
  },
  {
    category: "Soups",
    items: [
      { name: "French Onion Soup", desc: "About as good as it gets! Caramelized onions, deep beef stock, topped with bread and melted Swiss cheese.", price: 7.99 },
      { name: "Chili with Onion Soup", desc: "Gluten-free. Outrageously good! Don't forget the cheese.", price: 7.99 },
      { name: "Chicken Noodle Soup", desc: "Lemony chicken, vegetables, and pasta, simmered in a savory stock. You'll be hearing voices of grandma.", price: 8.99 }
    ]
  },
  {
    category: "Soup and Broth Korean Menu",
    items: [
      { name: "Kimchi Jjigae", desc: "Gluten-free. A spicy casserole with pork, tofu, and kimchi in broth.", price: 15.99 },
      { name: "Seafood Sundubu Jjigae", desc: "Gluten-free. A savory soup with soft tofu, baby clams, and shrimp in spicy broth.", price: 15.99 },
      { name: "Beef Sundubu Jjigae", desc: "Gluten-free. A savory broth with soft tofu and beef in a spicy broth.", price: 15.99 },
      { name: "Ddeokmandoo Kuk", desc: "Rice cake and dumpling soup.", price: 15.99 }
    ]
  },
  {
    category: "Salads",
    items: [
      { name: "Classic Chicken", desc: "Gluten-free. Juicy grilled chicken on top of crisp lettuce with egg, tomatoes, mushrooms, onions, and mixed cheese. Served with your choice of dressing.", price: 17.49 },
      { name: "Herb Chicken", desc: "Juicy herb-seasoned grilled chicken over fresh salad greens with garden toppings.", price: 16.49 }
    ]
  },
  {
    category: "Big Burgers",
    items: [
      { name: "Cheeseburger", desc: "Choose from American, Cheddar, Pepper Jack, Provolone, or Swiss cheese to top this 1/2 lb burger.", price: 14.99 },
      { name: "Bacon Cheeseburger", desc: "Crispy bacon tops this 1/2 lb burger. Served with your choice of cheese.", price: 16.49 },
      { name: "The Works Burger", desc: "1/2 lb of ground beef topped with bacon, grilled mushrooms, onions, and choice of cheese.", price: 16.99 },
      { name: "Vegetarian Burger", desc: "Grilled veggie patty with choice of cheese, lettuce, tomato, pickle, onion, and mayonnaise. Served on a toasted bun.", price: 13.49 },
      { name: "Turkey Burger", desc: "Grilled turkey patty with choice of cheese, lettuce, tomato, pickle, onion, and mayonnaise served on a toasted bun.", price: 13.49 }
    ]
  },
  {
    category: "Wing Burgers",
    items: [
      { name: "AJ's Wing Burger", desc: "1/4 lb burger, four pieces of boneless wings, bacon, grilled mushrooms, onions, topped with Pepper Jack, and Blue cheese dressing.", price: 16.99 },
      { name: "AJ's Jumbo Wing Burger", desc: "1/2 lb burger, 4 pieces of boneless wings, bacon, grilled mushrooms, grilled onions, topped with Pepper Jack cheese, and Blue cheese dressing.", price: 17.49 }
    ]
  },
  {
    category: "Classic Sandwiches",
    items: [
      { name: "Pork Tenderloin Sandwich", desc: "Giant breaded pork tenderloin deep fried and served on a bun.", price: 14.99 },
      { name: "Old Fashioned Reuben Sandwich", desc: "Savory corned beef, sauerkraut, topped with Swiss cheese, 1000 Island dressing and piled high on toasted rye.", price: 15.49 },
      { name: "Grilled Chicken Sandwich", desc: "All white chicken breast, seasoned, grilled to a golden brown, served with lettuce, tomato, pickle, onion, and mayonnaise.", price: 14.99 },
      { name: "Fish Sandwich", desc: "Pollock fish hand breaded on a hoagie style bun. Served with lettuce, tomato, pickle, onion, and tartar sauce.", price: 14.99 }
    ]
  },
  {
    category: "Croissant Specialties",
    items: [
      { name: "BLT", desc: "Classic on a tradition. Bacon, lettuce, tomato, and mayonnaise stacked on a flaky croissant roll.", price: 14.99 },
      { name: "Chicken Salad", desc: "Yummy chicken, the perfect blend of spices, creamy mayonnaise, and all mixed together. Your taste buds will thank you.", price: 14.99 },
      { name: "Tuna Salad", desc: "Homemade favorite recipe tuna salad mixture on a fresh croissant.", price: 14.99 }
    ]
  },
  {
    category: "Mix Rice Korean Menu",
    items: [
      { name: "Bi-Bim-Bab", desc: "Gluten-free. Assortment of lightly sauteed vegetables, beef, fried egg served with steamed rice, and red pepper pasta on the side.", price: 20.49 },
      { name: "Fried Rice", desc: "Gluten-free. Fried rice with chicken and an assortment of vegetables.", price: 17.49 },
      { name: "Shrimp Fried Rice", desc: "Delicious seasoned stir fried rice cooked with fresh shrimp and vegetables.", price: 19.49 },
      { name: "Kimchi Fried Rice", desc: "Gluten-free. Kimchi and chicken fried rice with an assortment of vegetables.", price: 17.49 },
      { name: "Burritos", desc: "Choose from French rice only, ground beef, grilled chicken, or spicy pork topped with cheese all wrapped in a large tortilla.", price: 15.99 }
    ]
  },
  {
    category: "Home-Style Dinners",
    items: [
      { name: "Pork Chops", desc: "Two thin juicy tender pork chops.", price: 15.49 },
      { name: "Grilled Chicken Breast Dinner", desc: "Gluten-free. Two marinated breasts grilled then topped with grilled mushrooms and onions.", price: 16.99 },
      { name: "Fried Fish", desc: "Large pieces of Pollock fish batter battered and fried to a golden brown.", price: 15.99 }
    ]
  },
  {
    category: "Kids' Menu",
    items: [
      { name: "Kids Chicken Tenders", desc: "Chicken tenders served with fries.", price: 7.99 },
      { name: "Kids Cheese Sticks", desc: "Crispy cheese sticks with sauce.", price: 7.99 },
      { name: "Kids Hamburger", desc: "Mini hamburger served with fries.", price: 7.99 },
      { name: "Kids Grilled Cheese", desc: "Classic grilled cheese sandwich.", price: 7.99 },
      { name: "Kids Macaroni and Cheese", desc: "Warm and cheesy macaroni bowl.", price: 7.99 }
    ]
  },
  {
    category: "Side Dishes",
    items: [
      { name: "French Fries", desc: "Crispy salted classic cut fries.", price: 3.75 },
      { name: "Sweet Potato Fries", desc: "Lightly sweet potato fries.", price: 3.75 },
      { name: "Macaroni Salad", desc: "Creamy macaroni salad side.", price: 3.75 },
      { name: "Home Fries", desc: "Seasoned pan fried potato slices.", price: 3.75 },
      { name: "Tater Tots", desc: "Golden fried seasoned potato tots.", price: 3.75 },
      { name: "Side Salad", desc: "Fresh green salad with choice dressing.", price: 3.75 },
      { name: "Applesauce", desc: "Smooth sweet cinnamon applesauce.", price: 3.75 },
      { name: "Steamed Veggies", desc: "Seasoned seasonal garden vegetables.", price: 3.75 },
      { name: "Kimchi", desc: "Traditional spicy fermented Korean cabbage.", price: 3.75 },
      { name: "White Rice", desc: "Perfectly steamed jasmine white rice.", price: 3.75 },
      { name: "Mushrooms and Onions", desc: "Sautéed savory mushrooms and onions.", price: 3.75 },
      { name: "Coleslaw", desc: "Crispy cabbage tossed in dynamic dressing.", price: 3.75 },
      { name: "Side Macaroni and Cheese", desc: "A cozy side of hot macaroni cheese.", price: 3.75 },
      { name: "Korean Potato Fries", desc: "Spicy seasoned crinkle-cut fries.", price: 4.59 },
      { name: "Onion Rings Side", desc: "Battered and fried sweet onion rings.", price: 4.59 }
    ]
  }
];

// Rich generation arrays to construct highly varied user reviews
const namesList = [
  "Michael S.", "Sarah J.", "David K.", "Jessica M.", "Chris B.", "Amanda W.", "Jason D.", "Emily H.", 
  "James P.", "Robert C.", "Lisa M.", "Ryan T.", "Megan G.", "Kevin L.", "Rachel O.", "John D.", 
  "Tyler R.", "Ashley B.", "Kyle W.", "Hannah F.", "Brian N.", "Tom H.", "Courtney A.", "Brandon E.", 
  "Justin P.", "Samantha T.", "Eric W.", "Lauren C.", "Alex M.", "Nicole G.", "Derek Y.", "Taylor F."
];

const foodItems = [
  "the AJ's Wing Burger", "the Japchae Noodles", "the Old Fashioned Reuben Sandwich", "the Kumbo Roll", 
  "the Seafood Pancakes", "the Beef Sundubu Jjigae", "the beef bulgogi", "the Kimchi Fried Rice", 
  "the French Onion Soup"
];

// Explicit sentiment responses mapped perfectly to their Star Ratings
const reviewTemplates = {
  5: [
    "Absolutely loved [item]! It was packed with flavor and tasted incredibly fresh.",
    "A&J is a total hidden gem in Pickerington. [item] is completely unmatched around here.",
    "Outstanding service and even better food. [item] was simply amazing!",
    "Can't get enough of this place. [item] is literally the best thing I've eaten all week.",
    "Hands down the best fusion spot in Ohio. Highly recommend [item]!",
    "Perfect 10/10. Quick pickup service, amazing staff, and [item] was cooked to absolute perfection."
  ],
  4: [
    "[item] was delicious and cooked perfectly. Service was a bit busy, but totally worth the wait.",
    "Great fusion concept. Tried [item] and really enjoyed it. Will definitely order again.",
    "Really solid food. [item] had great flavor, just wished the portion was slightly bigger.",
    "Super tasty! [item] was very satisfying, though the parking lot can get pretty packed during dinner rush.",
    "Excellent flavor profile on [item]. Just a tiny bit too salty for my taste, but still highly recommended.",
    "Good food, friendly staff, and [item] was great. A solid local choice."
  ],
  3: [
    "[item] was decent, but nothing to write home about. Just an average experience overall.",
    "Food tasted okay, but [item] was a little cold when I finally got it.",
    "Decent food, but they forgot one of my sides. [item] itself was pretty good though.",
    "The concept is cool but [item] was just okay. Might give it another try sometime.",
    "Average spot. [item] was fine, but service was incredibly slow during dinner rush today."
  ],
  2: [
    "Disappointed. [item] was super greasy and took almost an hour to be ready.",
    "Service was friendly, but the food just wasn't for me. [item] lacked seasoning entirely.",
    "Maybe an off night, but [item] was dry and tasteless. Probably won't return.",
    "Underwhelming. [item] didn't taste fresh at all and the price is too high for what you get."
  ],
  1: [
    "Terrible experience. [item] was completely burnt and they got my entire order wrong.",
    "Absolutely avoid. Took forever to get our food and [item] was practically inedible.",
    "Worst [item] I've ever had. Cold, bland, and overpriced. Save your money.",
    "The service was incredibly rude and [item] tasted like it was sitting under a heat lamp for hours."
  ]
};

// Programmatically generate a realistic, randomized distribution of reviews
let reviewsData = [];
const totalReviewsToGen = 105;

for (let i = 0; i < totalReviewsToGen; i++) {
  const name = namesList[i % namesList.length];
  const item = foodItems[Math.floor(Math.random() * foodItems.length)];
  
  // Determine star distribution
  let stars = 5;
  const roll = Math.random();
  if (roll < 0.45) {
    stars = 5;
  } else if (roll < 0.80) {
    stars = 4;
  } else if (roll < 0.90) {
    stars = 3;
  } else if (roll < 0.96) {
    stars = 2;
  } else {
    stars = 1;
  }

  const templatesGroup = reviewTemplates[stars];
  const rawTemplate = templatesGroup[Math.floor(Math.random() * templatesGroup.length)];
  const customizedText = rawTemplate.replace("[item]", item);

  reviewsData.push({
    author: name,
    stars: stars,
    text: customizedText
  });
}

// Tab Switching System
function switchTab(tabId, btn) {
  document.querySelectorAll('.content-section').forEach(section => {
    section.classList.remove('active');
  });
  document.querySelectorAll('.tab-btn').forEach(button => {
    button.classList.remove('active');
  });
  document.getElementById(tabId).classList.add('active');
  btn.classList.add('active');
}

// Dynamic Menu Rendering
function renderMenu() {
  const sidebar = document.getElementById('sidebar-categories');
  const feed = document.getElementById('menu-feed-content');

  sidebar.innerHTML = "";
  feed.innerHTML = "";

  menuData.forEach((cat, index) => {
    // Sidebar tab
    const li = document.createElement('li');
    li.textContent = cat.category;
    if (index === 0) li.classList.add('active');
    li.onclick = () => {
      document.querySelectorAll('.menu-sidebar li').forEach(el => el.classList.remove('active'));
      li.classList.add('active');
      document.getElementById(`category-${index}`).scrollIntoView({ behavior: 'smooth' });
    };
    sidebar.appendChild(li);

    // Menu Sections
    const section = document.createElement('div');
    section.id = `category-${index}`;
    section.innerHTML = `
      <h3 class="category-title">${cat.category}</h3>
      ${cat.subtitle ? `<p class="category-subtitle">${cat.subtitle}</p>` : `<div style="margin-bottom: 16px; border-bottom: 1px solid var(--border-color);"></div>`}
    `;

    const grid = document.createElement('div');
    grid.className = 'item-grid';

    cat.items.forEach(item => {
      grid.innerHTML += `
        <div class="menu-card">
          <div>
            <h4>${item.name}</h4>
            <p class="desc">${item.desc}</p>
          </div>
          <span class="price">$${item.price.toFixed(2)}</span>
        </div>
      `;
    });

    section.appendChild(grid);
    feed.appendChild(section);
  });
}

// Dynamic Reviews Rendering
function renderReviews() {
  const container = document.getElementById('reviews-container');
  container.innerHTML = "";
  
  reviewsData.forEach(rev => {
    let starsHTML = '';
    for (let i = 0; i < 5; i++) {
      starsHTML += `<i class="${i < rev.stars ? 'fa-solid' : 'fa-regular'} fa-star"></i> `;
    }
    container.innerHTML += `
      <div class="review-card">
        <h4 class="review-author">${rev.author}</h4>
        <div class="review-stars">${starsHTML}</div>
        <p class="review-text">"${rev.text}"</p>
      </div>
    `;
  });
}

// Initialize application execution
renderMenu();
renderReviews();
  });
}
