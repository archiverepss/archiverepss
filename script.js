// ============================================
// 🛍️ MIEJSCE NA PRODUKTY - DODAWAJ TUTAJ!
// ============================================
// Kategorie: "Shoes", "Tshirts", "Hoodies", "Shorts", "Jackets", "Underwear", "Belts"

let category = "All";

let products = [
  {
    name: "Jordan 4 Frozen Moments / Black Canvas",
    category: "Shoes",
    price: "$63",
    image: "https://si.geilicdn.com/pcitem1764521644-621f0000018c4aa1f7c00a20e672_1111_1111.jpg",
    link: "https://ikako.vip/caj2t",
    tag: "R1",
    rating: 5
  },
  {
    name: "Jordan 1 (A LOT OF CW)",
    category: "Shoes",
    price: "$73.65",
    image: "https://si.geilicdn.com/open1733523732-1234478995-573c000001937484b6860a8115b5_889_889.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7565902946&affcode=archivee",
    tag: "LJR",
    rating: 5
  },
  {
    name: "ERD BLACK HOODIE",
    category: "Hoodies",
    price: "$30.75",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/19/181b5cf0ee0737cc3fce4a23f84a7eda.jpg",
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
    name: "Jordan 3 (A LOT OF CW)",
    category: "Shoes",
    price: "$67",
    image: "https://si.geilicdn.com/wdseller1800766149-03d500000199ce69b8010a23041a_1004_1004.jpg",
    link: "https://ikako.vip/cuhud",
    tag: "GX",
    rating: 5
  },
  {
    name: "Jordan 4 (A LOT OF CW)",
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
  {
    name: "RICK OWENS SHOES",
    category: "Shoes",
    price: "$69.26 - $93",
    image: "https://si.geilicdn.com/open1268847658-1234478995-509a000001898d9e69790a230227_1080_1080.jpg",
    link: "https://ikako.vip/k7fpd",
    tag: "GZ (EVGA)",
    rating: 4.5
  },
  {
    name: "PRADA CUPS",
    category: "Shoes",
    price: "$102",
    image: "https://si.geilicdn.com/wdseller1747999085-006a00000198db97d7040a20e273_1800_1800.jpg",
    link: "https://ikako.vip/2qazp",
    tag: "BEST (ZZZTOP)",
    rating: 5
  },
  {
    name: "ERD PINK HOODIE",
    category: "Hoodies",
    price: "$31",
    image: "https://cdna.lystit.com/photos/sugar/92680392/enfants-riches-deprimes-Red-Logo-Hoodie.jpeg",
    link: "https://ikako.vip/g47ay",
    tag: "TOPHOT",
    rating: 4
  },
  {
    name: "NUMBER NINE SOVC HOODIE",
    category: "Hoodies",
    price: "$40",
    image: "https://img.alicdn.com/bao/uploaded/i2/2025450085/O1CN01eh7nHv1CUymor3p8e_!!2025450085.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D1017388726264&affcode=archivee",
    tag: "HONGSHENG",
    rating: 4
  },
  {
    name: "NUMBER NINE KNIGHT HOODIE",
    category: "Hoodies",
    price: "$40",
    image: "https://img.alicdn.com/bao/uploaded/i4/2943390456/O1CN01GsdOc11FEteLPRn3Z_!!2943390456.jpg",
    link: "https://ikako.vip/jt96u",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NUMBER NINE LION HOODIE",
    category: "Hoodies",
    price: "$40",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01aWiY7m1FEthKJs5lq~crop,0,125,768,768~_!!2943390456.jpg_400x400q85.jpg_.webp",
    link: "https://ikako.vip/8qtac",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NUMBER NINE SOVC HOODIE",
    category: "Hoodies",
    price: "$38",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN018SyP5i1FEtZiTM8qt_!!2943390456.jpg",
    link: "https://ikako.vip/mct72",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NUMBER NINE SKULL HODIE",
    category: "Hoodies",
    price: "$62",
    image: "https://img.alicdn.com/bao/uploaded/i1/2200736549757/O1CN01RuSeJ72LwlWUhFC7U_!!2200736549757.jpg",
    link: "https://ikako.vip/usgae",
    tag: "MADEBYSWAG",
    rating: 5
  },
  {
    name: "NUMBER NINE SKULL HODIE",
    category: "Hoodies",
    price: "$72",
    image: "https://img.alicdn.com/bao/uploaded/i3/2200736549757/O1CN01ZZcv0c2LwlVdmMKRt_!!2200736549757.jpg",
    link: "https://ikako.vip/hpcxu",
    tag: "MADEBYSWAG",
    rating: 5
  },
  {
    name: "SUPREME X HYSTERIC GLAMOUR",
    category: "Hoodies",
    price: "$68",
    image: "https://www.theillest.pl/wp-content/uploads/2024/11/Supreme-HYSTERIC-GLAMOUR-Fall-Winter-2024-8.jpg",
    link: "https://ikako.vip/zmcw3",
    tag: "MVT",
    rating: 5
  },
  {
    name: "BALENCIAGA LIBERTY HOODIE",
    category: "Hoodies",
    price: "$59",
    image: "https://www.mytheresa.com/image/1094/1238/100/e4/P00948300.jpg",
    link: "https://ikako.vip/675xdy",
    tag: "THUNDER",
    rating: 5
  },
  {
    name: "BALENCIAGA SOCCER HOODIE",
    category: "Hoodies",
    price: "$45",
    image: "https://img.alicdn.com/imgextra/i2/3550899246/O1CN01kSVru42IAiyacd2nn_!!3550899246.jpg",
    link: "https://ikako.vip/tu6eq",
    tag: "APEXMADE",
    rating: 5
  },
  {
    name: "BALENCIAGA EBAY ZIP UP",
    category: "Hoodies",
    price: "$37",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/6/30c953eedcac829eb63ec806991c7705.jpg",
    link: "https://ikako.vip/ejmmu",
    tag: "APEXMADE",
    rating: 5
  },
  {
    name: "BALENCIAGA FUR ZIP UP ",
    category: "Hoodies",
    price: "$56",
    image: "https://assets.allchinabuysheets.com/665f4b5bc53ebfd135d04b40/69273032577f2ab88a1b263b_6925d65b0f585962b0b359df_561506090_2228718664283514_9131020294079013372_n-removebg-preview.webp",
    link: "https://ikako.vip/dzwbm",
    tag: "APEXMADE",
    rating: 5
  },
  {
    name: "BALENCIAGA X UNDER ARMOUR HOODIE",
    category: "Hoodies",
    price: "$36",
    image: "https://si.geilicdn.com/wdseller1258568610-00c80000019abd91f8330a2102c5_1080_1080.jpg",
    link: "https://ikako.vip/7wdhxf",
    tag: "SATANMADE",
    rating: 5
  },
  {
    name: "BUDGET HELLSTAR HOODIES",
    category: "Hoodies",
    price: "$29",
    image: "https://img.alicdn.com/bao/uploaded/i4/2217139011106/O1CN01Nj651l1K2b1lhXqjp_!!2217139011106.jpg",
    link: "https://ikako.vip/zb326",
    tag: "RANDOM BATCH",

  },
  {
    name: "JORDAN 11 (A LOT OF CW)",
    category: "Shoes",
    price: "$71 - $77",
    image: "https://si.geilicdn.com/wdseller1505219366-3bf100000194c160da770a210349_960_961.jpg",
    link: "https://ikako.vip/ba8ym",
    tag: "LJR",
    rating: 5
  },
  {
    name: "DUNK'S",
    category: "Shoes",
    price: "$37 - $55",
    image: "https://si.geilicdn.com/wdseller1845163825-66b8000001903fab445a0a2303ee_1080_1080.jpg",
    link: "https://ikako.vip/my7mt",
    tag: "M",
    rating: 5
  },
  {
    name: "DUNK'S",
    category: "Shoes",
    price: "$26 - $56",
    image: "https://si.geilicdn.com/open1850717273-1234478995-35c90000018f485757ce0a210298_1268_1268.jpg",
    link: "https://ikako.vip/cyv6p",
    tag: "M",
    rating: 5
  },
  {
    name: "DUNK'S",
    category: "Shoes",
    price: "$41 - $56",
    image: "https://si.geilicdn.com/pcitem901759954358-72e3000001880535e0400a20e2c5_1170_1161.jpg",
    link: "https://ikako.vip/d9bkx",
    tag: "M",
    rating: 5
  },
  {
    name: "Off-White Out Of Office",
    category: "Shoes",
    price: "$49.2",
    image: "https://si.geilicdn.com/wdseller2007014970-79a70000019c0b1721340a2304aa_800_800.jpg",
    link: "https://ikako.vip/465v6",
    tag: "BEST",
    rating: 5
  },
  {
    name: "Off-White Be Right Back",
    category: "Shoes",
    price: "$47.67",
    image: "https://si.geilicdn.com/pcitem901805158979-0def00000190cd230fec0a239646_1080_1080.jpg",
    link: "https://ikako.vip/82zya",
    tag: "BEST",
    rating: 5
  },
  {
    name: "Off - White Sneakers",
    category: "Shoes",
    price: "$54-57$",
    image: "https://si.geilicdn.com/open338847680-1234478995-594a00000183665a29f20a22d58f_2560_2560.jpg",
    link: "https://ikako.vip/uq5q5",
    tag: "TOP/OWF",
    rating: 5
  },
  {
    name: "YEEZY SLIDE",
    category: "Shoes",
    price: "$18.63",
    image: "https://si.geilicdn.com/open1733523732-1234478995-3ea90000019379c005df0a8133b5_960_961.jpg",
    link: "https://ikako.vip/rhzsz",
    tag: "GX",
    rating: 5
  },
  {
    name: "YEEZY FOAM RUNNER",
    category: "Shoes",
    price: "$21.73",
    image: "https://si.geilicdn.com/open1733523732-1234478995-06e9000001937481b6330a8133b5_2560_2504.jpg",
    link: "https://ikako.vip/vbznk",
    tag: "LW",
    rating: 5
  },
  {
    name: "YEEZY 350",
    category: "Shoes",
    price: "$63",
    image: "https://si.geilicdn.com/wdseller1553163813-27780000018f2301c4040a2303ee_1290_1290.jpg",
    link: "https://ikako.vip/7w3ym",
    tag: "LW/OG",
    rating: 5
  },
  {
    name: "YEEZY 500",
    category: "Shoes",
    price: "$59",
    image: "https://si.geilicdn.com/pcitem1437660918-07cf00000178b8495aca0a217216_4032_4030.jpg",
    link: "https://ikako.vip/avv4n",
    tag: "LW",
    rating: 5
  },
  {
    name: "YEEZY 700 V2",
    category: "Shoes",
    price: "$59",
    image: "https://si.geilicdn.com/open1773336045-1234478995-552800000195f0f5d5c30aa0834c_1122_1122.jpg",
    link: "https://ikako.vip/xzgyc",
    tag: "LW",
    rating: 5
  },
  {
    name: "RICK OWENS MEGA BUMPERS",
    category: "Shoes",
    price: "$119.09",
    image: "https://img.alicdn.com/bao/uploaded/i4/2073165527/O1CN01npjSp81qhQ9eM137S_!!2073165527.heic",
    link: "https://ikako.vip/r8y44",
    tag: "ROK (BEST)",
    rating: 5
  },
  {
    name: "RICK OWENS GEOBASKETS",
    category: "Shoes",
    price: "$102",
    image: "https://img.alicdn.com/bao/uploaded/i3/2073165527/O1CN01gjVVAR1qhPwO82u0k_!!2073165527.jpg",
    link: "https://ikako.vip/2fn59",
    tag: "ROK (BEST)",
    rating: 5
  },
  {
    name: "CHANEL RUNNER",
    category: "Shoes",
    price: "$86.35",
    image: "https://si.geilicdn.com/wdseller1913061311-2f7f00000195e1026f190a240147_2560_2560.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7435415609&affcode=archivee",
    tag: "BEST (ZZZTOP)",
    rating: 5
  },
  {
    name: "PHILIP PLEIN THUNDER HI-TOP RANDOM BATCH",
    category: "Shoes",
    price: "$76.55",
    image: "https://img.alicdn.com/bao/uploaded/i2/2212485637805/O1CN01MuaF1d27WkCqD1x3H_!!2212485637805.jpg",
    link: "https://ikako.vip/exqp5",
    tag: "RANDOM BATCH",
    rating: 5
  },
  {
    name: "MARGIELA FUTURE",
    category: "Shoes",
    price: "$98.73",
    image: "https://si.geilicdn.com/wdseller901910887734-29320000019b653808960a23038e_1290_1290.jpg",
    link: "https://ikako.vip/fkxmb",
    tag: "ANON",
    rating: 5
  },
  {
    name: "MAISON MIHARA",
    category: "Shoes",
    price: "$30",
    image: "https://si.geilicdn.com/pcitem1845163825-26ec00000195499ce70d0a20e273_1440_1440.jpg?w=400&h=400",
    link: "https://ikako.vip/qnv7v",
    tag: "Z",
    rating: 5
  },
  {
    name: "MARGIELA GATS",
    category: "Shoes",
    price: "$64.13",
    image: "https://images.stockx.com/images/Maison-Margiela-Replica-Dark-Wash-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358",
    link: "https://ikako.vip/4jdjd",
    tag: "MVT",
    rating: 5
  },
  {
    name: "TIMBERLAND X BAPE",
    category: "Shoes",
    price: "$52",
    image: "https://img.alicdn.com/bao/uploaded/i4/905145255/O1CN01UfZoda1ogq2kKnMwc_!!905145255.jpg",
    link: "https://ikako.vip/b285w",
    tag: "BEST",
    rating: 5
  },
  {
    name: "TIMBERLAND",
    category: "Shoes",
    price: "$58",
    image: "https://si.geilicdn.com/wdseller1268847658-5e0f00000187c5f8dc6a0a20e7c7-unadjust_1170_1170.gif",
    link: "https://ikako.vip/m988f",
    tag: "GZ(EVGA)",
    rating: 5
  },
  {
    name: "ADIDAS SAMBA/GAZELLE/SPEZIAL",
    category: "Shoes",
    price: "$26.66",
    image: "https://si.geilicdn.com/wdseller1268847658-130d0000019c1e813cbb0a210256_1320_1320.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1268847658.v.weidian.com%2Fitem.html%3FitemID%3D7684300655&affcode=archivee",
    tag: "S2",
    rating: 5
  },
  {
    name: "ADIDAS SAMBA",
    category: "Shoes",
    price: "$20.06",
    image: "https://si.geilicdn.com/weidian1744790155-01e80000018b473df5600a231273_1080_810.jpg",
    link: "https://ikako.vip/cfec3",
    tag: "VT",
    rating: 5
  },
  {
    name: "ADIDAS CAMPUS",
    category: "Shoes",
    price: "$25.08",
    image: "https://si.geilicdn.com/wdseller1541848429-5fdb000001869d59ac360a22d246_1284_1284.jpg",
    link: "https://ikako.vip/ydzgh",
    tag: "RANDOM",
    rating: 5
  },
  
  // DODAC BUTY OD NEW BALANCOW // DODAC BUTY OD NEW BALANCOW // DODAC BUTY OD NEW BALANCOW // DODAC BUTY OD NEW BALANCOW

  
  
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