// Menu Database parsed directly from user's store options
const menuData = [
  {
    category: "Best Sellers",
    items: [
      { id: "bs-1", name: "Chicken Tenders", desc: "4 pieces. Breaded and deep-fried white breast of chicken.", price: 14.49, badge: "Best Seller" },
      { id: "bs-2", name: "Bi-Bim-Bab", desc: "Gluten-free. Assortment of lightly sauteed vegetables, beef, fried egg served with steamed rice, and red pepper pasta on the side.", price: 20.49 },
      { id: "bs-3", name: "Fried Rice", desc: "Gluten-free. Fried rice with chicken and an assortment of vegetables.", price: 17.49 },
      { id: "bs-4", name: "Kids Grilled Cheese", desc: "", price: 11.99 },
      { id: "bs-5", name: "Pork Tenderloin Sandwich", desc: "Giant breaded pork tenderloin deep fried and served on a bun.", price: 14.99 },
      { id: "bs-6", name: "Vegetarian Burger", desc: "Grilled veggie patty with choice of cheese, lettuce, tomato, pickle, onion, and mayonnaise. Served on a toasted bun.", price: 13.49 }
    ]
  },
  {
    category: "Appetizers",
    items: [
      { id: "ap-1", name: "Onion Rings", desc: "Battered and fried rings of onions and served with ranch.", price: 12.99 },
      { id: "ap-2", name: "Fried Zucchini", desc: "Zucchini sliced, breaded, and deep fried.", price: 14.49 },
      { id: "ap-3", name: "Bacon Cheese Fries", desc: "Fresh cut fries topped with cheese, bacon, and served with ranch dressing.", price: 12.99 },
      { id: "ap-4", name: "Fried Shrimp", desc: "6 pieces. Golden-fried butterfly shrimp hand-battered and served with cocktail sauce.", price: 13.49 },
      { id: "ap-5", name: "Quesadilla", desc: "Cheddar and Jack cheese with chicken or beef between 2 large flour tortillas then topped with jalapeno, tomato, sour cream, and salsa.", price: 17.99 },
      { id: "ap-6", name: "Mini Corn Dogs", desc: "", price: 12.99 },
      { id: "ap-7", name: "Potato Skins", desc: "", price: 12.99 },
      { id: "ap-8", name: "Breaded Mushrooms", desc: "", price: 14.49 }
    ]
  },
  {
    category: "Soups",
    items: [
      { id: "sp-1", name: "French Onion Soup", desc: "About as good as it gets! Caramelized onions and beef stock, topped with bread, and melted Swiss cheese.", price: 7.99 },
      { id: "sp-2", name: "Chili with Beans Soup", desc: "Gluten-free. Outrageously good! Don’t forget the cheese.", price: 7.99 },
      { id: "sp-3", name: "Chicken Noodle Soup", desc: "Tasty chicken, vegetables, and pasta, simmered in a savory stock. You'll be having visions of grandma.", price: 6.99 }
    ]
  },
  {
    category: "Salads",
    items: [
      { id: "sd-1", name: "Classic Chicken", desc: "Gluten-free. Juicy grilled chicken on top of crisp lettuce with egg, tomatoes, mushrooms, onions, and mixed cheese. Served with dressing.", price: 17.59 },
      { id: "sd-2", name: "Herb Chicken", desc: "", price: 16.49 }
    ]
  },
  {
    category: "Big Burgers",
    items: [
      { id: "bb-1", name: "Cheeseburger", desc: "Choose from American, Cheddar, Pepper Jack, Provolone, or Swiss cheese to top this 1/2 lb burger.", price: 14.99 },
      { id: "bb-2", name: "Bacon Cheeseburger", desc: "Crispy bacon tops this l/2 lb burger. Served with your choice of cheese.", price: 16.49 },
      { id: "bb-3", name: "The Works Burger", desc: "1/2 lb of ground beef topped with bacon, grilled mushrooms, onions, and choice of cheese.", price: 16.99 },
      { id: "bb-4", name: "Turkey Burger", desc: "Grilled turkey patty with choice of cheese, lettuce, tomato, pickle, onion, and mayo served on a toasted bun.", price: 13.49 }
    ]
  },
  {
    category: "Wing Burgers",
    items: [
      { id: "wb-1", name: "AJ's Wing Burger", desc: "1/4 lb burger, four pieces of boneless wings, bacon, grilled mushrooms, onions, topped with pepper Jack, and blue cheese dressing.", price: 16.99 },
      { id: "wb-2", name: "AJ's Jumbo Wing Burger", desc: "1/2 lb burger, 4 pieces of boneless wings, bacon, grilled mushrooms, grilled onions, topped with pepper jack cheese, and blue cheese dressing.", price: 17.49 }
    ]
  },
  {
    category: "Classic Sandwiches",
    items: [
      { id: "cs-2", name: "Old Fashioned Reuben Sandwich", desc: "Savory corned beef, sauerkraut, topped with Swiss cheese, 1000 Island dressing and piled high on toasted rye.", price: 13.49 },
      { id: "cs-3", name: "Grilled Chicken Sandwich", desc: "All-white chicken breast, seasoned, grilled to a golden brown, served with lettuce, tomato, pickle, onion, and mayonnaise.", price: 14.99 },
      { id: "cs-4", name: "Fishtail Sandwich", desc: "Pollock fish hand breaded on a hoagie style bun. Served with lettuce, tomato, pickle, onion, and tarter sauce.", price: 14.99 }
    ]
  },
  {
    category: "Croissant Specialties",
    items: [
      { id: "cr-1", name: "BLT", desc: "A twist on a tradition. Bacon, lettuce, tomato, and mayonnaise stacked on a flaky croissant roll.", price: 14.99 },
      { id: "cr-2", name: "Chicken Salad", desc: "Yummy chicken, the perfect blend of spices, creamy mayonnaise, and all mixed together.", price: 14.99 }
    ]
  }
];

// App State
let cart = {};

// DOM Elements
const sidebarUl = document.getElementById('category-list');
const menuSections = document.getElementById('menu-sections');
const cartItemsContainer = document.getElementById('cart-items-container');
const cartBtn = document.getElementById('cart-btn');
const closeCartBtn = document.getElementById('close-cart-btn');
const cartSidebar = document.getElementById('cart-sidebar');
const subtotalVal = document.getElementById('subtotal-val');
const deliveryVal = document.getElementById('delivery-val');
const serviceVal = document.getElementById('service-val');
const totalVal = document.getElementById('total-val');
const promoMsg = document.getElementById('promo-msg');
const promoLeft = document.getElementById('promo-left');
const checkoutActionBtn = document.getElementById('checkout-action-btn');
const cartCount = document.getElementById('cart-count');
const searchInput = document.getElementById('menu-search');

// Modals
const checkoutModal = document.getElementById('checkout-modal');
const closeModalBtn = document.getElementById('close-modal-btn');
const modalOkBtn = document.getElementById('modal-ok-btn');

// Start Up Sequence
window.addEventListener('DOMContentLoaded', () => {
  renderNavigation();
  renderMenu(menuData);
  setupSearch();
  setupInteractivity();
});

// Build Left Category Menu Bar
function renderNavigation() {
  sidebarUl.innerHTML = '';
  menuData.forEach((cat, index) => {
    const li = document.createElement('li');
    li.textContent = cat.category;
    if (index === 0) li.classList.add('active');
    
    li.addEventListener('click', () => {
      document.querySelectorAll('#category-list li').forEach(el => el.classList.remove('active'));
      li.classList.add('active');
      const targetElement = document.getElementById(`sec-${cat.category.replace(/\s+/g, '-').toLowerCase()}`);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: 'smooth' });
      }
    });
    sidebarUl.appendChild(li);
  });
}

// Build Main Feed Menu Items
function renderMenu(dataToRender) {
  menuSections.innerHTML = '';
  
  if (dataToRender.length === 0) {
    menuSections.innerHTML = `<div class="empty-cart-msg">No items found matching your search.</div>`;
    return;
  }

  dataToRender.forEach(cat => {
    if (cat.items.length === 0) return;

    const catSection = document.createElement('section');
    catSection.className = 'category-section';
    catSection.id = `sec-${cat.category.replace(/\s+/g, '-').toLowerCase()}`;

    const title = document.createElement('h3');
    title.className = 'category-title';
    title.textContent = cat.category;
    catSection.appendChild(title);

    const grid = document.createElement('div');
    grid.className = 'item-grid';

    cat.items.forEach(item => {
      const card = document.createElement('div');
      card.className = 'menu-card';
      
      let badgeHTML = item.badge ? `<span class="badge">${item.badge}</span>` : '';
      
      card.innerHTML = `
        ${badgeHTML}
        <div>
          <h4>${item.name}</h4>
          <p class="desc">${item.desc || 'No description available.'}</p>
        </div>
        <div class="card-footer">
          <span class="price">$${item.price.toFixed(2)}</span>
          <button class="add-btn" onclick="addToCart('${item.id}', '${item.name.replace(/'/g, "\\'")}', ${item.price})">
            <i class="fa-solid fa-plus"></i>
          </button>
        </div>
      `;
      grid.appendChild(card);
    });

    catSection.appendChild(grid);
    menuSections.appendChild(catSection);
  });
}

// Search Algorithm
function setupSearch() {
  searchInput.addEventListener('input', (e) => {
    const query = e.target.value.toLowerCase().trim();
    if (!query) {
      renderMenu(menuData);
      return;
    }

    const filteredData = menuData.map(cat => {
      const matchingItems = cat.items.filter(item => 
        item.name.toLowerCase().includes(query) || 
        item.desc.toLowerCase().includes(query)
      );
      return { category: cat.category, items: matchingItems };
    }).filter(cat => cat.items.length > 0);

    renderMenu(filteredData);
  });
}

// Add/Subtract Item Handlers
window.addToCart = function(id, name, price) {
  if (cart[id]) {
    cart[id].qty += 1;
  } else {
    cart[id] = { name, price, qty: 1 };
  }
  updateCart();
};

function changeQty(id, delta) {
  if (!cart[id]) return;
  cart[id].qty += delta;
  if (cart[id].qty <= 0) {
    delete cart[id];
  }
  updateCart();
}

// Global Cart UI Updater & Fee Calculator
function updateCart() {
  cartItemsContainer.innerHTML = '';
  let subtotal = 0;
  let totalItemsCount = 0;

  const entries = Object.entries(cart);

  if (entries.length === 0) {
    cartItemsContainer.innerHTML = `<p class="empty-cart-msg">Your cart is empty. Add delicious items to get started!</p>`;
    subtotalVal.textContent = `$0.00`;
    deliveryVal.textContent = `$1.49`;
    serviceVal.textContent = `$0.00`;
    totalVal.textContent = `$0.00`;
    cartCount.textContent = '0';
    promoMsg.style.display = 'block';
    promoLeft.textContent = `$50.00`;
    checkoutActionBtn.disabled = true;
    return;
  }

  entries.forEach(([id, item]) => {
    subtotal += item.price * item.qty;
    totalItemsCount += item.qty;

    const row = document.createElement('div');
    row.className = 'cart-item-row';
    row.innerHTML = `
      <div class="item-details">
        <h5>${item.name}</h5>
        <span>$${(item.price * item.qty).toFixed(2)}</span>
      </div>
      <div class="quantity-controls">
        <button onclick="changeQty('${id}', -1)">-</button>
        <span>${item.qty}</span>
        <button onclick="changeQty('${id}', 1)">+</button>
      </div>
    `;
    cartItemsContainer.appendChild(row);
  });

  // Calculate pricing tier rule: Free delivery & service fees if total order >= $50
  let deliveryFee = 1.49;
  let serviceFee = subtotal * 0.15;
  if (serviceFee > 7.50) serviceFee = 7.50; // Max cap out rule

  if (subtotal >= 50.00) {
    deliveryFee = 0.00;
    serviceFee = 0.00;
    promoMsg.style.display = 'none';
  } else {
    promoMsg.style.display = 'block';
    promoLeft.textContent = `$${(50.00 - subtotal).toFixed(2)}`;
  }

  const finalTotal = subtotal + deliveryFee + serviceFee;

  // Render variables
  cartCount.textContent = totalItemsCount;
  subtotalVal.textContent = `$${subtotal.toFixed(2)}`;
  deliveryVal.textContent = `$${deliveryFee.toFixed(2)}`;
  serviceVal.textContent = `$${serviceFee.toFixed(2)}`;
  totalVal.textContent = `$${finalTotal.toFixed(2)}`;
  checkoutActionBtn.disabled = false;
}

// Event Bindings
function setupInteractivity() {
  // Mobile drawer slide mechanics
  cartBtn.addEventListener('click', () => {
    cartSidebar.classList.add('open');
  });

  closeCartBtn.addEventListener('click', () => {
    cartSidebar.classList.remove('open');
  });

  // Checkout Success Trigger
  checkoutActionBtn.addEventListener('click', () => {
    checkoutModal.style.display = 'flex';
  });

  // Close modals
  const closeModal = () => {
    checkoutModal.style.display = 'none';
    cart = {}; // Clear cart on success ordering
    updateCart();
    cartSidebar.classList.remove('open');
  };

  closeModalBtn.addEventListener('click', closeModal);
  modalOkBtn.addEventListener('click', closeModal);
  
  window.addEventListener('click', (e) => {
    if (e.target === checkoutModal) {
      closeModal();
    }
  });
}