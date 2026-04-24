document.addEventListener("DOMContentLoaded", () => {
  const catalogGrid = document.getElementById("catalog-products-grid");
  const searchInput = document.getElementById("catalog-search-input");
  const categorySelect = document.getElementById("category-select");
  const sortSelect = document.getElementById("sort-select");
  const filterPills = document.querySelectorAll(".filter-pill");
  const resultsCount = document.getElementById("catalog-results-count");

  let currentCategory = "all";
  let currentSearchTerm = "";
  let currentSort = "default";

  function renderCatalog() {
    if (!catalogGrid) return;

    let filteredProducts = products.filter(product => {
      const matchesCategory = currentCategory === "all" || product.category === currentCategory;
      const matchesSearch = product.name.toLowerCase().includes(currentSearchTerm.toLowerCase());
      return matchesCategory && matchesSearch;
    });

    if (currentSort === "price-asc") {
      filteredProducts.sort((a, b) => a.price - b.price);
    } else if (currentSort === "price-desc") {
      filteredProducts.sort((a, b) => b.price - a.price);
    }

    resultsCount.textContent = `${filteredProducts.length} productos encontrados`;

    catalogGrid.innerHTML = filteredProducts.map(product => `
      <article class="product-card catalog-card">
        <div class="product-media catalog-media">
          ${product.name.split(" ")[0]}
        </div>
        <div class="product-tags">
          <span class="tag tag-discount">${product.discount}</span>
          ${product.isNew ? '<span class="tag tag-new">Nuevo</span>' : ""}
        </div>
        <div class="catalog-card-body">
          <span class="catalog-category-label">${product.category}</span>
          <h3>${product.name}</h3>
          <div class="catalog-card-footer">
            <div class="product-price">
              <strong>${formatCurrency(product.price)}</strong>
              <span class="original-price">${formatCurrency(product.originalPrice)}</span>
            </div>
            <button class="btn btn-primary add-to-cart btn-block" type="button" data-product-id="${product.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              Agregar
            </button>
          </div>
        </div>
      </article>
    `).join("");

    // Attach cart event listeners (reusing logic from app.js)
    catalogGrid.querySelectorAll(".add-to-cart").forEach((btn) => {
      btn.addEventListener("click", () => {
        const productId = parseInt(btn.getAttribute("data-product-id"));
        const existing = cart.find((item) => item.id === productId);
        if (existing) {
          existing.quantity += 1;
        } else {
          const product = products.find((p) => p.id === productId);
          if (product) cart.push({ ...product, quantity: 1 });
        }
        if (typeof renderCart === 'function') renderCart();
        if (typeof cartDrawer !== 'undefined') cartDrawer.setAttribute("aria-hidden", "false");
      });
    });
  }

  // Event Listeners
  if (searchInput) {
    searchInput.addEventListener("input", (e) => {
      currentSearchTerm = e.target.value;
      renderCatalog();
    });
  }

  if (categorySelect) {
    categorySelect.addEventListener("change", (e) => {
      currentCategory = e.target.value;
      updatePills(currentCategory);
      renderCatalog();
    });
  }

  if (sortSelect) {
    sortSelect.addEventListener("change", (e) => {
      currentSort = e.target.value;
      renderCatalog();
    });
  }

  filterPills.forEach(pill => {
    pill.addEventListener("click", () => {
      currentCategory = pill.getAttribute("data-category");
      if (categorySelect) categorySelect.value = currentCategory;
      updatePills(currentCategory);
      renderCatalog();
    });
  });

  function updatePills(category) {
    filterPills.forEach(pill => {
      if (pill.getAttribute("data-category") === category) {
        pill.classList.add("active");
      } else {
        pill.classList.remove("active");
      }
    });
  }

  // Initial render
  renderCatalog();
});
