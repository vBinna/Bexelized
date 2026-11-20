document.addEventListener("DOMContentLoaded", () => {
  const category = document.body.dataset.category || "car-hanging";

  const titles = {
    home: "Home",
    "car-hanging": "Car Hanging",
    bag: "Bag",
    hanging: "Hanging",
    earrings: "Earrings",
    customized: "Customized"
  };

  const title = titles[category] || "Collection";
  document.title = `Bexelized | ${title}`;
  const pageTitle = document.getElementById("page-title");
  if (pageTitle) pageTitle.textContent = title;

  document.querySelectorAll("[data-nav]").forEach(link => {
    if (link.dataset.nav === category) {
      link.classList.add("active");
      link.setAttribute("aria-current", "page");
    }
  });

  const grid = document.getElementById("product-grid");
  const count = document.getElementById("result-count");
  const empty = document.getElementById("empty-state");
  const buttons = document.querySelectorAll(".filter-button");

  function render(filter = "all") {
    const shown = products.filter(product =>
      (category === "home"
        ? (filter === "all" || product.category === filter)
        : product.category === category && (filter === "all" || product.style === filter))
    );

    grid.innerHTML = "";

    shown.forEach(product => {
      const card = document.createElement("article");
      card.className = "product-card";

      const photo = document.createElement("div");
      photo.className = "product-photo";

      const img = document.createElement("img");

      img.src = product.variants
        ? product.variants[0].image
        : product.image;

      img.alt = product.name;
      img.loading = "lazy";

      img.onerror = () => {
        photo.innerHTML =
          '<div class="photo-placeholder">Add product photo</div>';
      };

      photo.appendChild(img);

      // Color selector
      let swatches = null;

      if (product.variants && product.variants.length > 0) {
        swatches = document.createElement("div");
        swatches.className = "product-swatches";

        product.variants.forEach((variant, index) => {
          const circle = document.createElement("button");

          circle.type = "button";
          circle.className = "color-swatch";
          circle.style.backgroundColor = variant.color;
          circle.title = variant.name;
          circle.setAttribute("aria-label", variant.name);

          if (index === 0) {
            circle.classList.add("active");
          }

          circle.addEventListener("click", () => {
            img.src = variant.image;
            img.alt = `${product.name} - ${variant.name}`;

            swatches.querySelectorAll(".color-swatch")
              .forEach(btn => btn.classList.remove("active"));

            circle.classList.add("active");
          });

          swatches.appendChild(circle);
        });
      }

      // Product information
      const info = document.createElement("div");
      info.className = "product-info";

      const name = document.createElement("h3");
      name.textContent = product.name;

      const tag = document.createElement("span");
      tag.className = "product-tag";
      tag.textContent = product.style;

      info.append(name, tag);

      // Add product elements
      if (swatches) {
        card.append(photo, swatches, info);
      } else {
        card.append(photo, info);
      }

      grid.appendChild(card);
    });

    count.textContent =
      `${shown.length} ${shown.length === 1 ? "design" : "designs"}`;

    empty.hidden = shown.length !== 0;
  }

  // Filters
  buttons.forEach(button => {
    button.addEventListener("click", () => {
      buttons.forEach(item =>
        item.classList.toggle("active", item === button)
      );

      render(button.dataset.filter);
    });
  });

  // Mobile navigation
  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".main-nav");

  menuButton.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");

    menuButton.setAttribute("aria-expanded", String(isOpen));
    menuButton.setAttribute(
      "aria-label",
      isOpen ? "Close navigation" : "Open navigation"
    );
  });

  render();
});


document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("latest-categories");

  if (!container || typeof products === "undefined") return;

  const categories = [
    { id: "car-hanging", name: "Car Hanging", link: "car-hanging.html" },
    { id: "bag", name: "Bag", link: "bag.html" },
    { id: "hanging", name: "Hanging", link: "hanging.html" },
    { id: "earrings", name: "Earrings", link: "earrings.html" },
    { id: "customized", name: "Customized", link: "customized.html" }
  ];

  categories.forEach(category => {
    const latest = products
      .filter(product => product.category === category.id)
      .slice(0, 3);

    if (!latest.length) return;

    const section = document.createElement("section");
    section.className = "latest-category";

    section.innerHTML = `
      <div class="latest-category-heading">
        <h3>${category.name}</h3>
        <a href="${category.link}">View all ↗</a>
      </div>

      <div class="latest-carousel">
        ${latest.map(product => {
          const image = product.variants?.[0]?.image || product.image;

          return `
            <article class="latest-card">
              <img src="${image}" alt="${product.name}" loading="lazy">
              <h4>${product.name}</h4>
            </article>
          `;
        }).join("")}
      </div>
    `;

    container.appendChild(section);
  });
});
