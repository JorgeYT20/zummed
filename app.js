const products = [
  {
    id: 1,
    name: "Estetoscopio Littmann Classic III",
    price: 420,
    originalPrice: 519,
    discount: "-19%",
    isNew: true,
    description: "Precisión acústica y ergonomía para evaluación clínica diaria."
  },
  {
    id: 2,
    name: "Monitor de Signos Vitales Mindray MEC-1200",
    price: 3850,
    originalPrice: 4590,
    discount: "-16%",
    isNew: false,
    description: "Monitoreo confiable para áreas críticas, hospitalización y consulta."
  },
  {
    id: 3,
    name: "Tensiómetro Digital Omron HEM-7156",
    price: 185,
    originalPrice: 219,
    discount: "-15%",
    isNew: true,
    description: "Medición rápida y precisa con lectura intuitiva para uso profesional."
  }
];

const cart = [];

const productsGrid = document.getElementById("products-grid");
const cartDrawer = document.getElementById("cart-drawer");
const cartItems = document.getElementById("cart-items");
const cartCount = document.getElementById("cart-count");
const cartTotal = document.getElementById("cart-total");
const checkoutWhatsApp = document.getElementById("checkout-whatsapp");

function formatCurrency(amount) {
  return new Intl.NumberFormat("es-PE", {
    style: "currency",
    currency: "PEN",
    minimumFractionDigits: 2
  }).format(amount);
}

function renderProducts() {
  productsGrid.innerHTML = products
    .map((product) => `
      <article class="product-card">
        <div class="product-media">${product.name.split(" ")[0]}</div>
        <div class="product-tags">
          <span class="tag tag-discount">${product.discount}</span>
          ${product.isNew ? '<span class="tag tag-new">Nuevo</span>' : ""}
        </div>
        <h3>${product.name}</h3>
        <p>${product.description}</p>
        <div class="product-footer">
          <div class="product-price">
            <small>${formatCurrency(product.originalPrice)}</small>
            ${formatCurrency(product.price)}
          </div>
          <button class="add-to-cart" type="button" data-product-id="${product.id}">Agregar</button>
        </div>
      </article>
    `)
    .join("");

  document.querySelectorAll(".add-to-cart").forEach((button) => {
    button.addEventListener("click", () => {
      addToCart(Number(button.dataset.productId));
      openCart();
    });
  });
}

function addToCart(productId) {
  const product = products.find((item) => item.id === productId);
  const existing = cart.find((item) => item.id === productId);

  if (existing) {
    existing.quantity += 1;
  } else {
    cart.push({ ...product, quantity: 1 });
  }

  renderCart();
}

function updateQuantity(productId, delta) {
  const item = cart.find((product) => product.id === productId);
  if (!item) return;

  item.quantity += delta;

  if (item.quantity <= 0) {
    const index = cart.findIndex((product) => product.id === productId);
    cart.splice(index, 1);
  }

  renderCart();
}

function renderCart() {
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const totalAmount = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  cartCount.textContent = totalItems;
  cartTotal.textContent = formatCurrency(totalAmount);

  if (!cart.length) {
    cartItems.innerHTML = '<p class="empty-state">Aún no agregaste productos. Empieza con uno de los destacados.</p>';
    checkoutWhatsApp.href = "https://wa.me/51943625365?text=Hola%2C%20quiero%20asesor%C3%ADa%20sobre%20equipos%20m%C3%A9dicos.";
    return;
  }

  cartItems.innerHTML = cart
    .map((item) => `
      <article class="cart-item">
        <div>
          <p class="cart-item-title">${item.name}</p>
          <p class="cart-item-meta">${formatCurrency(item.price)} c/u</p>
        </div>
        <div>
          <div class="qty-controls">
            <button type="button" data-qty-id="${item.id}" data-action="decrease">-</button>
            <strong>${item.quantity}</strong>
            <button type="button" data-qty-id="${item.id}" data-action="increase">+</button>
          </div>
        </div>
      </article>
    `)
    .join("");

  document.querySelectorAll("[data-qty-id]").forEach((button) => {
    button.addEventListener("click", () => {
      const productId = Number(button.dataset.qtyId);
      const delta = button.dataset.action === "increase" ? 1 : -1;
      updateQuantity(productId, delta);
    });
  });

  const message = encodeURIComponent(
    `Hola, quiero asesoría sobre este carrito:\n${cart
      .map((item) => `• ${item.name} x${item.quantity}`)
      .join("\n")}\nTotal estimado: ${formatCurrency(totalAmount)}`
  );

  checkoutWhatsApp.href = `https://wa.me/51943625365?text=${message}`;
}

function openCart() {
  cartDrawer.classList.add("is-open");
  cartDrawer.setAttribute("aria-hidden", "false");
}

function closeCart() {
  cartDrawer.classList.remove("is-open");
  cartDrawer.setAttribute("aria-hidden", "true");
}

document.getElementById("cart-toggle").addEventListener("click", openCart);
document.getElementById("cart-close").addEventListener("click", closeCart);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closeCart();
  }
});

renderProducts();
renderCart();
