document.addEventListener("DOMContentLoaded", () => {
  const catalogGrid = document.getElementById("catalog-products-grid");
  const searchInput = document.getElementById("catalog-search-input");
  const categorySelect = document.getElementById("category-select");
  const sortSelect = document.getElementById("sort-select");
  const filterPills = document.querySelectorAll(".filter-pill");
  const resultsCount = document.getElementById("catalog-results-count");

  let currentCategory = "all";
  let currentSubcategory = "all";
  let currentSearchTerm = "";
  let currentSort = "default";

  const menuSubcategorias = {
    'Laboratorio': ['Equipos', 'Material e Insumos', 'Reactivos'],
    'Equipos Médicos': ['Monitoreo y Diagnóstico', 'Pesaje y Medición', 'Descartables'],
    'Ortopedia': ['Sillas de Ruedas', 'Camas Clínicas', 'Productos y Accesorios'],
    'Mobiliario': ['Emergencia (Trauma)', 'Mobiliario Médico', 'Otros']
  };

  // Crear contenedor de subcategorías dinámicamente
  const subcategoryContainer = document.createElement("div");
  subcategoryContainer.classnombre = "catalog-pills subcategorias-container";
  subcategoryContainer.style.display = "none";
  subcategoryContainer.style.marginTop = "16px";
  
  const mainPillsContainer = document.getElementById("catalog-pills");
  if (mainPillsContainer) {
    mainPillsContainer.parentNode.insertBefore(subcategoryContainer, mainPillsContainer.nextSibling);
  }

  function mostrarSubcategorias(categoriaSeleccionada) {
    subcategoryContainer.innerHTML = "";
    
    if (!menuSubcategorias[categoriaSeleccionada]) {
      subcategoryContainer.style.display = "none";
      currentSubcategory = "all";
      return;
    }

    subcategoryContainer.style.display = "flex";
    subcategoryContainer.style.flexWrap = "wrap";
    subcategoryContainer.style.gap = "10px";
    
    // Botón "Todas"
    const btnAll = document.createElement("button");
    btnAll.classnombre = "filter-pill sub-pill btn-filtro-sub active";
    btnAll.setAttribute("data-subcategory", "all");
    btnAll.textContent = "Todas las subcategorías";
    subcategoryContainer.appendChild(btnAll);

    // Botones dinámicos
    menuSubcategorias[categoriaSeleccionada].forEach(subcat => {
      const btn = document.createElement("button");
      btn.classnombre = "filter-pill sub-pill btn-filtro-sub";
      btn.setAttribute("data-subcategory", subcat);
      btn.textContent = subcat;
      subcategoryContainer.appendChild(btn);
    });

    // Agregar eventos a los nuevos botones
    const subPills = subcategoryContainer.querySelectorAll(".sub-pill");
    subPills.forEach(pill => {
      pill.addEventListener("click", () => {
        filtrarPorSubcategoria(pill.getAttribute("data-subcategory"));
        subPills.forEach(p => p.classList.toggle("active", p === pill));
      });
    });
    
    currentSubcategory = "all";
  }

  function filtrarPorSubcategoria(subcat) {
    currentSubcategory = subcat;
    renderCatalog();
  }

  function renderCatalog() {
    if (!catalogGrid) return;

    let filteredProducts = todosLosProductos.filter(product => {
      // Compatibilidad con la nueva estructura y la anterior (app.js)
      const pnombre = product.nombre || product.nombre || "";
      const pCat = product.categoria || product.category || "";
      const pSubcat = product.subcategoria || "all";

      const matchesCategory = currentCategory === "all" || pCat === currentCategory;
      const matchesSubcategory = menuSubcategorias[currentCategory]
        ? (currentSubcategory === "all" || pSubcat === currentSubcategory)
        : true;
      const matchesSearch = pnombre.toLowerCase().includes(currentSearchTerm.toLowerCase());
      
      return matchesCategory && matchesSubcategory && matchesSearch;
    });

    if (currentSort === "precio-asc") {
      filteredProducts.sort((a, b) => (a.precio || a.precio) - (b.precio || b.precio));
    } else if (currentSort === "precio-desc") {
      filteredProducts.sort((a, b) => (b.precio || b.precio) - (a.precio || a.precio));
    }

    resultsCount.textContent = `${filteredProducts.length} productos encontrados`;

    catalogGrid.innerHTML = filteredProducts.map(product => {
      const pnombre = product.nombre || product.nombre || "";
      const pCat = product.categoria || product.category || "";
      const pprecio = product.precio || product.precio || 0;
      
      // Mostrar imagen real si existe (desde imagenes[] o imagen fallback), sino el texto
      const pImage = (product.imagenes && product.imagenes.length > 0) ? product.imagenes[0] : (product.imagen || null);
      
      const mediaContent = pImage 
        ? `<img src="${pImage}" alt="${pnombre}" style="width:100%; height:100%; object-fit:cover; border-radius:inherit;">`
        : (pnombre.split(" ")[0]);

      return `
      <article class="product-card catalog-card">
        <div class="product-media catalog-media" style="padding: ${pImage ? '0' : '24px'}; overflow: hidden;">
          ${mediaContent}
        </div>
        <div class="product-tags">
          ${product.discount ? `<span class="tag tag-discount">${product.discount}</span>` : ""}
          ${product.isNew ? '<span class="tag tag-new">Nuevo</span>' : ""}
        </div>
        <div class="catalog-card-body">
          <span class="catalog-category-label">${pCat}${product.subcategoria ? ` > ${product.subcategoria}` : ""}</span>
          <h3>${pnombre}</h3>
          <div class="catalog-card-footer">
            <div class="product-precio">
              <strong>${pprecio ? formatCurrency(pprecio) : 'Consultar'}</strong>
              ${product.originalprecio ? `<span class="original-precio">${formatCurrency(product.originalprecio)}</span>` : ""}
            </div>
            <button class="btn btn-primary add-to-cart btn-block" type="button" data-product-id="${product.id}">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              Agregar
            </button>
          </div>
        </div>
      </article>
      `;
    }).join("");

    // Attach cart event listeners (reusing logic from app.js)
    catalogGrid.querySelectorAll(".add-to-cart").forEach((btn) => {
      btn.addEventListener("click", () => {
        const productId = parseInt(btn.getAttribute("data-product-id"));
        const existing = cart.find((item) => item.id === productId);
        if (existing) {
          existing.quantity += 1;
        } else {
          const product = todosLosProductos.find((p) => p.id === productId);
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

    mostrarSubcategorias(category);
  }

  // Initial render
  renderCatalog();
});
