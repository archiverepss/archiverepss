// ============================================
// 🛍️ MIEJSCE NA PRODUKTY - DODAWAJ TUTAJ!
// ============================================
// Kategorie: "Shoes", "Tshirts", "Hoodies", "Shorts", "Jackets", "Underwear", "Belts"

let category = "All";

let products = [
  {
    name: "Jordan 4 Frozen Moments",
    category: "Shoes",
    price: "$63",
    image: "https://si.geilicdn.com/pcitem1764521644-621f0000018c4aa1f7c00a20e672_1111_1111.jpg",
    link: "https://ikako.vip/caj2t",
    tag: "BATCH R1",
    rating: 4
  },
  {
    name: "Jordan 1 Mocha",
    category: "Shoes",
    price: "$73.65",
    image: "https://si.geilicdn.com/open1733523732-1234478995-573c000001937484b6860a8115b5_889_889.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7565902946&affcode=archivee",
    tag: "BATCH LJR",
    rating: 5
  },
  {
    name: "ERD HOODIE",
    category: "Hoodies",
    price: "$30.75",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/7/0bc592b6d131bbd3fa00b5a3ee6612e5.jpg",
    link: "https://ikako.vip/ct5va",
    tag: "TOPHOT",
    rating: 5
  },
  {
    name: "ERD HOODIE",
    category: "Hoodies",
    price: "$37",
    image: "https://img.alicdn.com/bao/uploaded/i3/2209401688377/O1CN01nzkhiG2BkixFHPEOI_!!2209401688377.jpg",
    link: "https://ikako.vip/2nz6h",
    tag: "BDSJ MADE",
    rating: 4
  },
  {
    name: "Nike Sport Shorts",
    category: "Shorts",
    price: "$45",
    image: "https://images.unsplash.com/photo-1591195853828-11db59a44f6b?w=400",
    link: "https://example.com",
    tag: "SALE",
    rating: 4
  },
  {
    name: "Calvin Klein Boxers",
    category: "Underwear",
    price: "$35",
    image: "https://images.unsplash.com/photo-1589310243389-96a5483213a8?w=400",
    link: "https://example.com",
    tag: "NEW",
    rating: 4
  },
  {
    name: "Gucci Belt",
    category: "Belts",
    price: "$89",
    image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=400",
    link: "https://example.com",
    tag: "PREMIUM",
    rating: 5
  },
  {
    name: "Oversized T-Shirt",
    category: "Tshirts",
    price: "$35",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400",
    link: "https://example.com",
    tag: "",
    rating: 4
  }
];

// ============================================
// ⚠️ NIE EDYTUJ KODU PONIŻEJ (chyba że wiesz co robisz)
// ============================================

function setCategory(cat) {
  category = cat;
  
  document.querySelectorAll('.cat-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`[onclick="setCategory('${cat}')"]`);
  if (activeBtn) activeBtn.classList.add('active');
  
  renderProducts();
}

function renderProducts() {
  const grid = document.getElementById("grid");
  const search = document.getElementById("search").value.toLowerCase();

  if (!grid) return;

  const filtered = products.filter(p => 
    (category === "All" || p.category === category) &&
    p.name.toLowerCase().includes(search)
  );

  const productCountSpan = document.getElementById("productCount");
  if (productCountSpan) {
    productCountSpan.textContent = filtered.length;
  }

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="loading">
        ✨ Brak produktów w tej kategorii<br>
        <span style="font-size: 12px; color: #444;">Spróbuj zmienić filtry</span>
      </div>
    `;
    return;
  }

  grid.innerHTML = "";

  filtered.forEach(p => {
    const el = document.createElement("div");
    el.className = "card";

    let stars = "★".repeat(p.rating) + "☆".repeat(5 - p.rating);
    const tagHtml = p.tag ? `<div class="tag">${p.tag}</div>` : '';

    el.innerHTML = `
      <img src="${p.image}" alt="${p.name}" onerror="this.src='https://via.placeholder.com/300?text=No+Image'">
      ${tagHtml}
      <h3>${escapeHtml(p.name)}</h3>
      <p>${p.price}</p>
      <div class="rating">${stars}</div>
      <a href="${p.link}" target="_blank" rel="noopener noreferrer">
        <button class="link">✨ Zobacz produkt</button>
      </a>
    `;

    grid.appendChild(el);
  });
}

function escapeHtml(str) {
  if (!str) return '';
  return str.replace(/[&<>]/g, function(m) {
    if (m === '&') return '&amp;';
    if (m === '<') return '&lt;';
    if (m === '>') return '&gt;';
    return m;
  });
}

// 🟣 OBSŁUGA PŁYWAJĄCEGO KOŁA
document.addEventListener('DOMContentLoaded', () => {
  const trigger = document.getElementById('circleTrigger');
  const links = document.getElementById('circleLinks');
  
  if (trigger && links) {
    trigger.addEventListener('click', () => {
      trigger.classList.toggle('open');
      links.classList.toggle('open');
    });
    
    const linkItems = document.querySelectorAll('.link-item');
    linkItems.forEach(link => {
      link.addEventListener('click', () => {
        trigger.classList.remove('open');
        links.classList.remove('open');
      });
    });
  }
});

renderProducts();