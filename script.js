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
    tag: "R1",
    rating: 5
  },
  {
    name: "Jordan 1 Mocha",
    category: "Shoes",
    price: "$73.65",
    image: "https://si.geilicdn.com/open1733523732-1234478995-573c000001937484b6860a8115b5_889_889.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7565902946&affcode=archivee",
    tag: "LJR",
    rating: 5
  },
  {
    name: "ERD HOODIE",
    category: "Hoodies",
    price: "$30.75",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/7/0bc592b6d131bbd3fa00b5a3ee6612e5.jpg",
    link: "https://ikako.vip/ct5va",
    tag: "TOPHOT",
    rating: 4
  },
  {
    name: "ERD EXPOSED CHRISTINA",
    category: "Hoodies",
    price: "$37",
    image: "https://img.alicdn.com/bao/uploaded/i3/2209401688377/O1CN01nzkhiG2BkixFHPEOI_!!2209401688377.jpg",
    link: "https://ikako.vip/2nz6h",
    tag: "BDSJ MADE",
    rating: 4
  },
  {
    name: "Jordan 3",
    category: "Shoes",
    price: "$67",
    image: "https://si.geilicdn.com/wdseller1800766149-03d500000199ce69b8010a23041a_1004_1004.jpg",
    link: "https://ikako.vip/cuhud",
    tag: "GX",
    rating: 5
  },
  {
    name: "Jordan 4",
    category: "Shoes",
    price: "$68-82",
    image: "https://si.geilicdn.com/wdseller1800766149-751d00000199be1057b40a21146b_1189_1189.jpg",
    link: "https://ikako.vip/88hdn",
    tag: "GX",
    rating: 5
  },
  {
    name: "AF1",
    category: "Shoes",
    price: "$33",
    image: "https://drop-up.pl/cdn/shop/files/air-force-1-low-07-triple-white-drop-up.webp?v=1721894137",
    link: "https://ikako.vip/ssh8w",
    tag: "GX",
    rating: 5
  },
  {
    name: "AF1 X CDG",
    category: "Shoes",
    price: "$44",
    image: "https://si.geilicdn.com/wdseller1745861162-27f50000019ac1319b630a207569_1179_1180.jpg",
    link: "https://ikako.vip/ssh8w",
    tag: "GX",
    rating: 5
  },
  {
    name: "AF1 CPFFM",
    category: "Shoes",
    price: "$57",
    image: "https://si.geilicdn.com/open1733523732-1234478995-01f900000193832a70b50a8133b5_1179_884.jpg",
    link: "https://ikako.vip/e2amc",
    tag: "WWT",
    rating: 5
  },
  {
    name: "AF1 X NOCTA",
    category: "Shoes",
    price: "$44",
    image: "https://si.geilicdn.com/open1733523732-1234478995-7a39000001937dd368d70aa08290_1166_874.jpg?w=640&h=640",
    link: "https://ikako.vip/3nrke",
    tag: "X",
    rating: 5
  },
  {
    name: "AF1 X SUPREME",
    category: "Shoes",
    price: "$38",
    image: "https://si.geilicdn.com/pcitem1845163825-537600000190c026304e0a210349_1080_816.jpg",
    link: "https://ikako.vip/fszb3",
    tag: "OWF",
    rating: 5
  },
  {
    name: "KOBE 6",
    category: "Shoes",
    price: "$70",
    image: "https://si.geilicdn.com/wdseller1800766149-2794000001953e97c7b60a2305d8_2560_2560.jpg",
    link: "https://ikako.vip/9hmbf",
    tag: "GX",
    rating: 5
  },
  {
    name: "AIR MAX 95 X CORTEIZ",
    category: "Shoes",
    price: "$32-37",
    image: "https://si.geilicdn.com/pcitem1743028401-3a130000019330171c080a20e2c5_800_800.jpg",
    link: "https://ikako.vip/gj2j3",
    tag: "ST",
    rating: 5
  },
  {
    name: "AIR MAX 95",
    category: "Shoes",
    price: "$49-53",
    image: "https://si.geilicdn.com/wdseller1800766149-690900000199c3e75fae0a8133cc_1280_1708.jpg",
    link: "https://ikako.vip/bvejm",
    tag: "GX",
    rating: 5
  },
  {
    name: "AIR MAX 97",
    category: "Shoes",
    price: "$34-71",
    image: "https://si.geilicdn.com/pcitem1854263096-5f2b00000195d8ec7db00a8133cc_1200_1200.jpg",
    link: "https://ikako.vip/zq4ez",
    tag: "G/OWF",
    rating: 5
  },
  {
    name: "NIKE P-6000",
    category: "Shoes",
    price: "$27",
    image: "https://si.geilicdn.com/pcitem901870080011-253b000001955d587db00a23038e_1440_1440.jpg",
    link: "https://ikako.vip/ptjfm",
    tag: "WM",
    rating: 5
  },
  {
    name: "NIKE SHOX",
    category: "Shoes",
    price: "$25-29",
    image: "https://si.geilicdn.com/weidian1558770107-0ee40000019ade43e4b10a21146b_1536_2048.jpg",
    link: "https://ikako.vip/ptjfm",
    tag: "BAYMAX",
    rating: 4
  },
  {
    name: "BOWER ERD MY ROLE IN THE HISTORY OF WAR",
    category: "Tshirts",
    price: "$17",
    image: "http://img.alicdn.com/imgextra/i1/2215800851954/O1CN018QAVxk1QIyyNrFm9j_!!2215800851954.jpg",
    link: "https://ikako.vip/b769n",
    tag: "暗号made",
    rating: 5
  },
  {
    name: "NUMBER NINE NECKLACE TEE",
    category: "Tshirts",
    price: "$14",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN019apdfS1FEtZ2Pj4qE_!!2943390456.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D798219996153&affcode=archivee",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "ERD ZIP UP HOODIE",
    category: "Hoodies",
    price: "$53",
    image: "https://image.goat.com/attachments/product_template_additional_pictures/images/101/162/977/medium/1431481_01.jpg.jpeg",
    link: "https://ikako.vip/6bp8e",
    tag: "TOPHOT",
    rating: 5
  },
  {
    name: "NUMBER NINE  SHIELD HOODIE",
    category: "Hoodies",
    price: "$39",
    image: "https://img.alicdn.com/bao/uploaded/i3/2943390456/O1CN01tC9CQu1FEteE2U0KP_!!2943390456.jpg",
    link: "https://ikako.vip/auvew",
    tag: "LMYER",
    rating: 4.5
  },
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