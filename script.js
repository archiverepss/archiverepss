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
    price: "$41",
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
  {
    name: "NEW BALANCE 530",
    category: "Shoes",
    price: "$43.88",
    image: "https://si.geilicdn.com/pcitem1854263096-7b1e00000195dd73e3850a20e2c5_1200_1200.jpg",
    link: "https://ikako.vip/5azyb",
    tag: "M",
    rating: 5
  },
  {
    name: "NEW BALANCE 990",
    category: "Shoes",
    price: "$41",
    image: "https://si.geilicdn.com/pcitem901870080011-39bf00000197227e34340a23047e_1440_1440.jpg",
    link: "https://ikako.vip/r2d6r",
    tag: "ZC",
    rating: 5
  },
  {
    name: "NEW BALANCE 990",
    category: "Shoes",
    price: "$41",
    image: "https://si.geilicdn.com/pcitem901870080011-39bf00000197227e34340a23047e_1440_1440.jpg",
    link: "https://ikako.vip/r2d6r",
    tag: "ZC",
    rating: 5
  },
  {
    name: "NEW BALANCE 9060",
    category: "Shoes",
    price: "$29",
    image: "https://si.geilicdn.com/pcitem901870080011-0f5900000197ccd442460a23041a_1440_1440.jpg",
    link: "https://ikako.vip/m75qc",
    tag: "M",
    rating: 5
  },
  {
    name: "NEW BALANCE 1906",
    category: "Shoes",
    price: "$31",
    image: "https://si.geilicdn.com/wdseller1558770107-683f0000018f7d842c330a230417_1742_1739.jpg",
    link: "https://ikako.vip/f2988",
    tag: "RANDOM BATCH",
    rating: 3.5
  },
  {
    name: "NEW BALANCE 2002",
    category: "Shoes",
    price: "$40-43",
    image: "https://si.geilicdn.com/wdseller901559461514-266c00000180deef08dd0a8134f0_1284_1285.jpg",
    link: "https://ikako.vip/89pb2",
    tag: "ZC/M",
    rating: 5
  },
  {
    name: "LANVIN LEATHER CURB",
    category: "Shoes",
    price: "$75",
    image: "https://si.geilicdn.com/wdseller1425026222-4ca70000018909df212e0a231565_2560_2560.jpg",
    link: "https://ikako.vip/8a84f",
    tag: "FOSHAN",
    rating: 5
  },
  {
    name: "LV TRAINER",
    category: "Shoes",
    price: "$76",
    image: "https://si.geilicdn.com/pcitem1710010242-1de500000198412384980a230115_1840_1840.jpg",
    link: "https://ikako.vip/gj47w",
    tag: "FOSHAN",
    rating: 5
  },
  {
    name: "LV SKATE",
    category: "Shoes",
    price: "$72",
    image: "https://si.geilicdn.com/weidian1710010242-62d800000188ac29f0b60a231179_1496_1496.jpg",
    link: "https://ikako.vip/eqwhz",
    tag: "FOSHAN",
    rating: 5
  },
  {
    name: "UGG",
    category: "Shoes",
    price: "$26 - $40 ",
    image: "https://si.geilicdn.com/pcitem901870080011-25c6000001990c6cb29b0a20e7c7_1080_1080.jpg",
    link: "https://ikako.vip/2eqst",
    tag: "TOP",
    rating: 5
  },
  {
    name: "ASICS GEL KAYANO 14",
    category: "Shoes",
    price: "$37.61 ",
    image: "https://si.geilicdn.com/wdseller1845163825-6813000001930325d8200a8134f0_1179_1179.jpg",
    link: "https://ikako.vip/m2avv",
    tag: "ZC",
    rating: 5
  },
  {
    name: "ASICS GEL NYC",
    category: "Shoes",
    price: "$36 ",
    image: "https://si.geilicdn.com/pcitem1845163825-774f000001988d52d82f0a81347d_1440_1440.jpg",
    link: "https://ikako.vip/k99a6",
    tag: "ZC",
    rating: 5
  },
  {
    name: "NUMERIS",
    category: "Shoes",
    price: "$60 ",
    image: "https://si.geilicdn.com/pcitem1809160355-344300000197e7a863740a20e273_4279_4376.jpg",
    link: "https://ikako.vip/7dpc7s",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "BALENCIAGA RUNNER 7.0",
    category: "Shoes",
    price: "$69 ",
    image: "https://si.geilicdn.com/wdseller1268847658-287900000187c2f2271f0a20e273-unadjust_1170_1170.gif",
    link: "https://ikako.vip/5hmve",
    tag: "XA",
    rating: 5
  },
  {
    name: "BALENCIAGA TRACK 2.0",
    category: "Shoes",
    price: "$75 ",
    image: "https://si.geilicdn.com/open1268847658-1234478995-1b7200000196303502cc0a23b4de_769_767.jpg",
    link: "https://ikako.vip/6278e",
    tag: "VG",
    rating: 5
  },
  {
    name: "BALENCIAGA TRACK",
    category: "Shoes",
    price: "$60 ",
    image: "https://si.geilicdn.com/wdseller1268847658-37100000018adde9cc270a20e273-unadjust_1170_1170.gif",
    link: "https://ikako.vip/xqj28",
    tag: "VG",
    rating: 5
  },
  {
    name: "BALENCIAGA TRACK LED",
    category: "Shoes",
    price: "$76 ",
    image: "https://si.geilicdn.com/wdseller1268847658-38100000018adde920f70a23034c_1170_1170.jpg",
    link: "https://ikako.vip/57u8s",
    tag: "VG",
    rating: 4
  },
  {
    name: "HYSTERIC GLAMOUR STRAWBERRY HOODIE",
    category: "Hoodies",
    price: "$58",
    image: "https://img.alicdn.com/bao/uploaded/i2/2126072107/O1CN01fFyu291RR3c2VDKOd~hdr~_!!2126072107.heic",
    link: "https://ikako.vip/24jdd",
    tag: "BDSS",
    rating: 5
  },
  {
    name: "HYSTERIC GLAMOUR REVERSIBLE FUR HOODIE",
    category: "Hoodies",
    price: "$69",
    image: "https://img.alicdn.com/bao/uploaded/i1/2126072107/O1CN01rwzcst1RR3bu8hZy7_!!2126072107.png",
    link: "https://ikako.vip/zjvkm",
    tag: "BDSS",
    rating: 5
  },
  {
    name: "HYSTERIC GLAMOUR HEADACHE HOODIE",
    category: "Hoodies",
    price: "$40",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01z6bJYX1FEti8NG0Fq_!!2943390456.jpg",
    link: "https://ikako.vip/x52n4",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "SP5DER PINK HOODIE",
    category: "Hoodies",
    price: "$42",
    image: "https://img.alicdn.com/bao/uploaded/i1/2219813327674/O1CN01kBCXn826YkT4irGlc_!!2219813327674.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D929834666023&affcode=archivee",
    tag: "PIKA",
    rating: 5
  },
  {
    name: "SP5DER x TRAVIS SCOTT RODERO HOODIE",
    category: "Hoodies",
    price: "$42",
    image: "https://img.alicdn.com/bao/uploaded/i2/2219813327674/O1CN01GVmRBd26YkVqaLfGR_!!2219813327674.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D992371547557&affcode=archivee",
    tag: "PIKA",
    rating: 5
  },
  {
    name: "SP5DER RHINESTONE HOODIE",
    category: "Hoodies",
    price: "$45",
    image: "https://img.alicdn.com/bao/uploaded/i1/2219813327674/O1CN01azRhoa26YkVqZGFgm_!!2219813327674.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D992372979833&affcode=archivee",
    tag: "PIKA",
    rating: 5
  },
  {
    name: "SUPREME SATIN APPLIQUE HOODIE",
    category: "Hoodies",
    price: "$40",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/23/afe7fda8ee5b94ac8692ad51017f5bd1.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D982922629033&affcode=archivee",
    tag: "DRAGONREP",
    rating: 5
  },
  {
    name: "SUPREME SIMON HOODIE",
    category: "Hoodies",
    price: "$55",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJl2QewvbqDauViL0QQqH2nE_J4Yol5VixQ&s",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D982010867316&affcode=archivee",
    tag: "DRAGONREP",
    rating: 5
  },
  {
    name: "CHROME HEARTS USA HOODIE",
    category: "Hoodies",
    price: "$46",
    image: "https://n-hype.com/cdn/shop/files/Chrome_Hearts_USA_Flag_Thermal_Black_Zip-up_Hoodie_Showroom_NHype_Lodz_Polska_1800x1800.png?v=1718778366",
    link: "https://ikako.vip/nmtan",
    tag: "TOPHOT",
    rating: 5
  },
  {
    name: "CHROME HEARTS HOODIE",
    category: "Hoodies",
    price: "$46",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202511/29/fe1c33a49608f3c31f683f10a1dd34cd.jpg",
    link: "https://ikako.vip/dbudg",
    tag: "TOPHOT",
    rating: 5
  },
  {
    name: "CHROME HEARTS DEADLY DOLL HOODIE",
    category: "Hoodies",
    price: "$42",
    image: "https://shengliroadmarket.com/cdn/shop/products/chrome-hearts-deadly-doll-pink-cross-scroll-logo-zip-up-hoodie-433121.jpg?v=1704692844",
    link: "https://ikako.vip/eztq3",
    tag: "TOPHOT",
    rating: 5
  },
  {
    name: "CHROME HEARTS HOODIE",
    category: "Hoodies",
    price: "$43",
    image: "https://media-photos.depop.com/b1/34953571/1405202588_a0646994b5d14e8fa6d6d03bba9c6d9f/P0.jpg",
    link: "https://ikako.vip/2pm5s",
    tag: "TOPHOT",
    rating: 5
  },
  {
    name: "RICK OWENS HOODIE",
    category: "Hoodies",
    price: "$41",
    image: "https://img.alicdn.com/bao/uploaded/i1/62314016/O1CN01e9pAON1fXNjKDiAAl_!!62314016.jpg",
    link: "https://ikako.vip/9nekn",
    tag: "RANDOM",
  
  },
  {
    name: "RICK OWENS WIZARD HOODIE",
    category: "Hoodies",
    price: "$41",
    image: "https://img.alicdn.com/bao/uploaded/i4/62314016/O1CN01acQlrm1fXNTge4elY_!!62314016.jpg",
    link: "https://ikako.vip/7a3v6",
    tag: "RANDOM",
  
  },
  {
    name: "RICK OWENS SUBHUMAN HOODIE",
    category: "Hoodies",
    price: "$39",
    image: "https://img.alicdn.com/bao/uploaded/i3/62314016/O1CN01OVNA0I1fXNf0akPcv_!!62314016.jpg",
    link: "https://ikako.vip/ghbm5",
    tag: "RANDOM",
  
  },

  {
    name: "DIOR HOMME SS07 BRUCE LEE HOODIE",
    category: "Hoodies",
    price: "$34",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/25/987caa4325a3033d07db37d9cdca1547.jpg",
    link: "https://ikako.vip/k9crx",
    tag: "RANDOM",
  
  },
  {
    name: "VETEMENTS SEXUAL FANTASIES",
    category: "Hoodies",
    price: "$58",
    image: "https://img.alicdn.com/bao/uploaded/i4/3822597683/O1CN014fPBij26cs22QmStU_!!3822597683.jpg",
    link: "https://ikako.vip/8c7vs",
    tag: "KJMADE",
    rating: 5
  
  },
  {
    name: "VETEMENTS MTB HOODIE",
    category: "Hoodies",
    price: "$59",
    image: "https://img.alicdn.com/bao/uploaded/i4/3822597683/O1CN01Yhu5J226cs1sovJJR_!!3822597683.jpg",
    link: "https://ikako.vip/xkucr",
    tag: "KJMADE",
    rating: 5
  
  },
  {
    name: "VETEMENTS ELEVEN INCH GUN CLUB GRAY",
    category: "Hoodies",
    price: "$59",
    image: "https://img.alicdn.com/bao/uploaded/i2/3822597683/O1CN01UPBPBu26crxz53r1G_!!3822597683.jpg",
    link: "https://ikako.vip/nsudt",
    tag: "KJMADE",
    rating: 5
  
  },
  {
    name: "VETEMENTS ELEVEN INCH GUN CLUB BLACK",
    category: "Hoodies",
    price: "$59",
    image: "https://img.alicdn.com/bao/uploaded/i2/3822597683/O1CN01pGP7R726cs20IAU16_!!3822597683.jpg",
    link: "https://ikako.vip/nhy34",
    tag: "KJMADE",
    rating: 5
  
  },
  {
    name: "VETEMENTS FREE HUGS",
    category: "Hoodies",
    price: "$59",
    image: "https://img.alicdn.com/bao/uploaded/i2/3822597683/O1CN018aIb1226cs3zM1v6p~hdr~_!!3822597683.heic",
    link: "https://ikako.vip/fgp89",
    tag: "KJMADE",
    rating: 5
  
  },
  {
    name: "VETEMENTS ECTASY HOODIE",
    category: "Hoodies",
    price: "$62",
    image: "https://img.alicdn.com/bao/uploaded/i3/3410334215/O1CN01rlgq9M1h0WOJUe6PP_!!3410334215.jpg",
    link: "https://ikako.vip/ywje3",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "HELLSTAR TOUR HOODIE",
    category: "Hoodies",
    price: "$47",
    image: "https://image.ceneostatic.pl/data/products/165027476/i-hellstar-tour-hoodie-xl.jpg",
    link: "https://ikako.vip/rsvfq",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "HELLSTAR BRAINWASHED PINK HOODIE",
    category: "Hoodies",
    price: "$66",
    image: "https://images.stockx.com/images/Hellstar-Brainwashed-With-Brain-Hoodie-Pink.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&q=60&dpr=1&trim=color&updated_at=1692432898",
    link: "https://ikako.vip/26z7v",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "1000GSM DOUBLE LAYER BLANK HOODIE",
    category: "Hoodies",
    price: "$56",
    image: "https://img.alicdn.com/bao/uploaded/i4/808386976/O1CN01zulWYB21P44MltpmS_!!808386976.jpg",
    link: "https://ikako.vip/b7gtj",
    tag: "UNIONKINGDOM",
    rating: 5
  
  },
  {
    name: "360GSM BLANK HOODIE",
    category: "Hoodies",
    price: "$25",
    image: "https://img.alicdn.com/bao/uploaded/i1/808386976/O1CN01Z31Ese21P44B6wCSa_!!808386976.jpg",
    link: "https://ikako.vip/jdar4",
    tag: "UNIONKINGDOM",
    rating: 5
  
  },
  {
    name: "480GSM BLANK HOODIE",
    category: "Hoodies",
    price: "$34",
    image: "https://img.alicdn.com/bao/uploaded/i4/808386976/O1CN01xJiAAp21P44PkivwB_!!808386976.jpg",
    link: "https://ikako.vip/d65q6",
    tag: "UNIONKINGDOM",
    rating: 5
  
  },
  {
    name: "630GSM BLANK HOODIE",
    category: "Hoodies",
    price: "$37",
    image: "https://img.alicdn.com/bao/uploaded/i3/808386976/O1CN01yn8oxv21P3z1hfHon_!!808386976.jpg",
    link: "https://ikako.vip/v8tnp",
    tag: "UNIONKINGDOM",
    rating: 5
  
  },
  {
    name: "AKIMBO WHITE HOODIE",
    category: "Hoodies",
    price: "$29",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/13/9bb1203a492c88a9272183207842e6ae.jpg",
    link: "https://ikako.vip/ph9jr",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "AKIMBO BLACK HOODIE",
    category: "Hoodies",
    price: "$29",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/1/cc78d72496fef80b9adb516e3b559444.jpg",
    link: "https://ikako.vip/yjdtx",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "RAF SIMONS NEW ORDER HOODIE",
    category: "Hoodies",
    price: "$75",
    image: "https://img.alicdn.com/bao/uploaded/i3/2200736549757/O1CN01fQtofd2LwlX2BV5UF_!!2200736549757.jpg",
    link: "https://ikako.vip/agxty",
    tag: "MADEBYSWAG",
    rating: 5
  
  },
  {
    name: "RAF SIMONS ROOTS HOODIE",
    category: "Hoodies",
    price: "$75",
    image: "http://img.alicdn.com/imgextra/i3/2200736549757/O1CN01C04sop2LwlX7Dmw5p_!!2200736549757.jpg",
    link: "https://ikako.vip/68ntw",
    tag: "MADEBYSWAG",
    rating: 5
  
  },
  {
    name: "RAF SIMONS VIRGINIA CREEPER CREWNECK",
    category: "Hoodies",
    price: "$62",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/18/87db2535902729346f1b20f54751989d.jpg",
    link: "https://ikako.vip/myvhe3",
    tag: "MADEBYSWAG",
    rating: 5
  
  },
  {
    name: "PEACE IN WAR CHERRY BLOSSOM HOODIE",
    category: "Hoodies",
    price: "$31",
    image: "https://si.geilicdn.com/wdseller1995625455-017a0000019b0db3cdb80a2303ea_1290_1720.jpg",
    link: "https://ikako.vip/9ngyc",
    tag: "ALIEN",
    rating: 5
  
  },
  {
    name: "PEACE IN WAR FUCK THE INDUSTRY HOODIE",
    category: "Hoodies",
    price: "$32.76",
    image: "https://si.geilicdn.com/wdseller1995625455-03d40000019b0db7d7b00a2102b1_1290_1720.jpg",
    link: "https://ikako.vip/kassc",
    tag: "ALIEN",
    rating: 5
  
  },
  {
    name: "PEACE IN WAR WINTER WAR HOODIE",
    category: "Hoodies",
    price: "$32.6",
    image: "https://si.geilicdn.com/wdseller1995625455-5b8a0000019b5e45a2bb0a2395e9_1290_1720.jpg",
    link: "https://ikako.vip/pjby8",
    tag: "ALIEN",
    rating: 5
  
  },
  {
    name: "PEACE IN WAR SWEDEN HOODIE",
    category: "Hoodies",
    price: "$31.03",
    image: "https://si.geilicdn.com/wdseller1995625455-4a6200000199b48e9dbe0a2301f1_1290_1720.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7567731360%26wfr%3Dc&affcode=archivee",
    tag: "ALIEN",
    rating: 5
  
  },
  {
    name: "BURBERRY BLACK HOODIE",
    category: "Hoodies",
    price: "$48.27",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202509/13/6be7311acca5546e85446e84396a055b.jpg",
    link: "https://ikako.vip/9znptv",
    tag: "THUNDER",
    rating: 5
  
  },
  {
    name: "BURBERRY GREY HOODIE",
    category: "Hoodies",
    price: "$50.93",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/26/bb6e3a8cb6932b8b81a8bcbfdca839f0.jpg",
    link: "https://ikako.vip/s7kpd",
    tag: "THUNDER",
    rating: 5
  
  },

  {
    name: "SUPREME X BURBERRY",
    category: "Hoodies",
    price: "$48.27",
    image: "https://sneakerman.store/wp-content/uploads/2024/10/supreme-x-burberry-box-logo-hooded-sweatshirt-heather-grey-1200x1321.webp",
    link: "https://ikako.vip/vnfeq",
    tag: "THUNDER",
    rating: 5
  
  },
  {
    name: "BURBERRY ZIP UP HOODIE",
    category: "Hoodies",
    price: "$50.93",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/25/7c0d044a539812b3b2d5eb77a7f0addc.jpg",
    link: "https://ikako.vip/zjmxnf",
    tag: "THUNDER",
    rating: 5
  
  },

  {
    name: "ESSENTIALS X NBA HOODIE",
    category: "Hoodies",
    price: "$24.29",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/11/b02c219556fa4b16065c111d9828b494.jpg",
    link: "https://ikako.vip/tgsvs",
    tag: "YISHAN",
    rating: 3
  
  },
  {
    name: "ESSENTIALS FOG",
    category: "Hoodies",
    price: "$36.24",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/21/e18f98ce66ec33a026096aae8e59cee0.jpg",
    link: "https://ikako.vip/9jecu",
    tag: "TOPHOT",
    rating: 4
  
  },
  {
    name: "ESSENTIALS FOG",
    category: "Hoodies",
    price: "$31",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/11/b7239d9756a065d5d55db2b307947615.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D978371331776&affcode=archivee",
    tag: "TOPHOT",
    rating: 4
  
  },
  {
    name: "ESSENTIALS FOG",
    category: "Hoodies",
    price: "$34.84",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/11/802a6f35780b40baf23b8b6e34068ca0.jpg",
    link: "https://ikako.vip/rqe7wa",
    tag: "TOPHOT",
    rating: 4
  
  },
  {
    name: "RALPH LAUREN ZIPPER HOODIE",
    category: "Hoodies",
    price: "$27.54",
    image: "https://si.geilicdn.com/open1831762514-252808396-13a1000001935930c3280aa08290_1239_1241.jpg",
    link: "https://ikako.vip/rfy5a",
    tag: "NEWDP",
    rating: 4
  
  },
  {
    name: "RALPH LAUREN FLEECE HOODIE",
    category: "Hoodies",
    price: "$23.35",
    image: "https://si.geilicdn.com/wdseller1980586073-3daf00000199cdc9028d0a2304aa_1170_1170.jpg",
    link: "https://ikako.vip/na9y9",
    tag: "NEWDP",
    rating: 4
  
  },
  {
    name: "BROKEN PLANET NOT FROM HERE ",
    category: "Hoodies",
    price: "$32.76",
    image: "https://si.geilicdn.com/wdseller1746487736-7f870000019ae9e68b210a21146b_1179_1179.jpg",
    link: "https://ikako.vip/na9y9",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "BROKEN PLANET MOON PHASE",
    category: "Hoodies",
    price: "$32.76",
    image: "https://si.geilicdn.com/wdseller1746487736-2220000001956987605d0a23041a_1170_1170.jpg",
    link: "https://ikako.vip/9q9e8",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "BROKEN PLANET ZIP UP HOODIE",
    category: "Hoodies",
    price: "$34.32",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/17/0c05c924d34c2c57735613ff7b958e6b.jpg",
    link: "https://ikako.vip/89xdp",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "SYNA HOODIE",
    category: "Hoodies",
    price: "$25.81",
    image: "https://si.geilicdn.com/wdseller1274221412-6c8b0000019170bc30be0a2393d9_1284_1284.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7261685985%26wfr%3Dc&affcode=archivee",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "I LOVE SYNA HOODIE",
    category: "Hoodies",
    price: "$31",
    image: "https://si.geilicdn.com/wdseller1274221412-15d2000001976435d3200a22d58f_1284_1284.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7491890348%26wfr%3Dc&affcode=archivee",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "SYNA X NEM RENTS DUE HOODIE",
    category: "Hoodies",
    price: "$30",
    image: "https://si.geilicdn.com/wdseller1936187346-365c00000198ef2e82950a2301b4_1373_1373.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7656816950&affcode=archivee",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "SUPREME X MM6",
    category: "Hoodies",
    price: "$62.72",
    image: "https://images.stockx.com/images/Supreme-MM6-Maison-Margiela-Zip-Up-Hooded-Sweatshirt-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1744142786",
    link: "https://ikako.vip/t64fj",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "MERTRA HOODIE",
    category: "Hoodies",
    price: "$36",
    image: "https://si.geilicdn.com/wdseller1940384309-770900000199d2b5e7b60a230449_1320_1320.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1739784557.v.weidian.com%2Fitem.html%3FitemID%3D7569423015&affcode=archivee",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "MERTRA X UMBRO HOODIE",
    category: "Hoodies",
    price: "$36",
    image: "https://si.geilicdn.com/wdseller1940384309-15220000019ae55ad4570a230215_1320_1320.jpg",
    link: "https://ikako.vip/faqpu",
    tag: "PENGREPS",
    rating: 5
  
  },
  
  //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE

  {
    name: "ERD MULHOLLAND T-SHIRT",
    category: "Tshirts",
    price: "$25.7",
    image: "https://img.alicdn.com/bao/uploaded/i1/3550899246/O1CN01A49ALr2IAj5LKXF92_!!3550899246.jpg",
    link: "https://ikako.vip/9ene7",
    tag: "APEXMADE",
    rating: 5
  
  },
  {
    name: "ERD MULHOLLAND T-SHIRT",
    category: "Tshirts",
    price: "$20.22",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/5/8fa95a38b94c6c65549b40660032db9b.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7491984689&affcode=archivee",
    tag: "TOPHOT",
    rating: 4
  
  },
  {
    name: "ERD CHRISTINA T-SHIRT",
    category: "Tshirts",
    price: "$19.12",
    image: "https://img.alicdn.com/bao/uploaded/i2/2214656006513/O1CN011G8Otv1xz0blTvUkr_!!2214656006513.jpg",
    link: "https://ikako.vip/xapqq",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "CHROME HEARTS T-SHIRT",
    category: "Tshirts",
    price: "$28",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/18/7614d9903500303cd30469a9e0e7717a.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7506477680&affcode=archivee",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "CHROME HEARTS T-SHIRT",
    category: "Tshirts",
    price: "$28.05",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/14/289102da081ca2571c46a84d1f82aad8.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7504593741&affcode=archivee",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "CHROME HEARTS T-SHIRT",
    category: "Tshirts",
    price: "$28.05",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202509/15/e312e36ff34100469743281690df01d0.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7505571487&affcode=archivee",
    tag: "TOPHOT",
    rating: 5
  
  },


  {
    name: "NUMBER NINE SOVC TEE",
    category: "Tshirts",
    price: "$20.79",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01B0RHgZ1FEtc0ZsHLP_!!2943390456.jpg",
    link: "https://ikako.vip/gujga",
    tag: "LMYER",
    rating: 5
  
  },
  {
    name: "UNDERCOVER TEE",
    category: "Tshirts",
    price: "$10",
    image: "https://img.alicdn.com/bao/uploaded/i2/2217964616975/O1CN01F56UB321ObbEM5ji2~crop,338,0,1899,2532~_!!2217964616975.jpg",
    link: "https://ikako.vip/drx57",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "UNDERCOVER KLAUS TEE",
    category: "Tshirts",
    price: "$20.57",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01FxjFJU1FEtW2R4hRn_!!2943390456.jpg",
    link: "https://ikako.vip/rwawv",
    tag: "LMYER",
    rating: 5
  
  },
  {
    name: "UNDERCOVER GURUGURU",
    category: "Tshirts",
    price: "$15.87",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01bCYjdF1FEtVrAiEHL_!!2943390456.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D645671108769&affcode=archivee",
    tag: "LMYER",
    rating: 5
  
  },
  {
    name: "GOTHAM TEE",
    category: "Tshirts",
    price: "$20.87",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01Mh3Dpd1FEtc2vVoCn_!!2943390456.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D850109331994&affcode=archivee",
    tag: "LMYER",
    rating: 5
  
  },
  {
    name: "NUMBER NINE KURT TEE",
    category: "Tshirts",
    price: "$14.29",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01Fs4sxm1FEtb1nSbQO_!!2943390456.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D834164734264&affcode=archivee",
    tag: "LMYER",
    rating: 5
  
  },
  {
    name: "GIVENCHY T-SHIRT",
    category: "Tshirts",
    price: "$28",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202507/30/d9ad15c50bafde4199670bd8167141c3.jpg",
    link: "https://ikako.vip/rbfcm",
    tag: "BACKSTUDIO",
    rating: 5
  
  },
  {
    name: "ESSENTIALS T-SHIRTS",
    category: "Tshirts",
    price: "$20.63",
    image: "https://img.alicdn.com/bao/uploaded/i4/2219953490549/O1CN01Yvv4p51FvUWKVHMx9_!!2219953490549.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D962636024464&affcode=archivee",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "ESSENTIALS T-SHIRTS",
    category: "Tshirts",
    price: "$20.86",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/21/5000a6f78c898bdf535f4cbcb730065e.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D962039057752&affcode=archivee",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "ESSENTIALS T-SHIRTS (BUDGET BATCH)",
    category: "Tshirts",
    price: "$8.59",
    image: "https://img.alicdn.com/bao/uploaded/i1/2075710764/O1CN01TmCj9b1HVxKvJL8ZN_!!2075710764.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fcnfans.com%2Fproduct%2F%3Fshop_type%3Dtaobao%26id%3D668913880734&affcode=archivee",
    tag: "BUDGET",
    rating: 3
  
  },
  {
    name: "RALPH LAUREN T-SHIRTS",
    category: "Tshirts",
    price: "$12.38",
    image: "https://si.geilicdn.com/open1831762514-252808396-37160000019359434ee50aa0834c_978_1024.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1852083541.v.weidian.com%2Fitem.html%3FitemID%3D7596975464%26spider_token%3D4592&affcode=archivee",
    tag: "NEWDP",
    rating: 5
  
  },
  {
    name: "RALPH LAUREN POLO",
    category: "Tshirts",
    price: "$20.22",
    image: "https://si.geilicdn.com/wdseller1595179932-06af0000019759d8e5370a230115_1170_1170.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1852083541.v.weidian.com%2Fitem.html%3FitemID%3D7595170179&affcode=archivee",
    tag: "NEWDP",
    rating: 5
  
  },
  {
    name: "VETEMENTS INTERPOL TEE",
    category: "Tshirts",
    price: "$32.76",
    image: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3410334215/O1CN01z6vrDX1h0WOiAv5WA_!!3410334215.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D824732030088",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "SYNA WORLD PLAYBOY T-SHIRT",
    category: "Tshirts",
    price: "$12",
    image: "https://img.alicdn.com/bao/uploaded/i2/2200616171702/O1CN018kCAEI1ORZ4zgd6WC_!!2200616171702.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D819278430583&affcode=archivee",
    tag: "BEST",
    rating: 5
  
  },
  {
    name: "SYNA X PSG T-SHIRT",
    category: "Tshirts",
    price: "$12.23",
    image: "https://si.geilicdn.com/wdseller1274221412-3d860000019614d0152a0a2102b1_1284_1284.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1274221412.v.weidian.com%2Fitem.html%3FitemID%3D7443980484&affcode=archivee",
    tag: "BEST",
    rating: 5
  
  },
  {
    name: "SYNA BLACK T-SHIRT",
    category: "Tshirts",
    price: "$12.23",
    image: "https://si.geilicdn.com/wdseller1274221412-6f2900000192fba736a60a230246_1284_1284.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1274221412.v.weidian.com%2Fitem.html%3FitemID%3D7298162199&affcode=archivee",
    tag: "BEST",
    rating: 5
  
  },
  {
    name: "NIKE X STUSSY T-SHIRT",
    category: "Tshirts",
    price: "$14.89",
    image: "https://si.geilicdn.com/open1804138897-1234478995-1839000001900cbb3a7b0a8133b5_800_800.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7243919380&affcode=archivee",
    tag: "RANDOM BATCH",
    rating: 4
  
  },
  {
    name: "STUSSY T-SHIRTS",
    category: "Tshirts",
    price: "$7.06",
    image: "https://si.geilicdn.com/pcitem901870080011-5c1e000001979bb785ea0a8134f0_1180_1572.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fk.youshop10.com%2FKfGo8Zl4&affcode=archivee",
    tag: "YOLO",
    rating: 4
  
  },
  {
    name: "SP5DER OG WEB V2 GRAY TEE",
    category: "Tshirts",
    price: "$16.06",
    image: "https://img.alicdn.com/bao/uploaded/i3/2219813327674/O1CN013L2ggE26YkUE7zWaG_!!2219813327674.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D931241172963&affcode=archivee",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "SP5DER X TRAVIS CACTUS JACK",
    category: "Tshirts",
    price: "$16.73",
    image: "https://img.alicdn.com/bao/uploaded/i2/2219813327674/O1CN01UGy4hV26YkT5zYhNU_!!2219813327674.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D930374774167&affcode=archivee",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "SP5DER TEE",
    category: "Tshirts",
    price: "$9.41",
    image: "https://img.alicdn.com/imgextra/i1/2212715957798/O1CN01WlY4l327TXW9PW7at_!!2212715957798.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D823211569627&affcode=archivee",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "CORTEIZ HEAVYWEIGHT TEE",
    category: "Tshirts",
    price: "$17.27",
    image: "https://img.alicdn.com/bao/uploaded/i4/3105353542/O1CN01f52U491c2Hv6O2aCe_!!3105353542.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D921974523491%26pisk%3Dg&affcode=archivee",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ CAN'T RUSH TEE",
    category: "Tshirts",
    price: "$12.58",
    image: "https://img.alicdn.com/bao/uploaded/i1/3105353542/O1CN01WQKHfq1c2HuCZedyJ_!!3105353542.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D899613948225%26sku_properties%3D1627207%253A37183560801&affcode=archivee",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ ITALIA TEE",
    category: "Tshirts",
    price: "$12.23",
    image: "https://si.geilicdn.com/wdseller1936187346-08d8000001988d7354380a23111a_1288_1288.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1833725707.v.weidian.com%2Fitem.html%3FitemID%3D7653791465&affcode=archivee",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ BBK TEE",
    category: "Tshirts",
    price: "$13.32",
    image: "https://si.geilicdn.com/wdseller1936187346-574f000001991dcde8250a23037f_1290_1290.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1833725707.v.weidian.com%2Fitem.html%3FitemID%3D7656820910&affcode=archivee",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ SANTAN ALCATRAZ TEE",
    category: "Tshirts",
    price: "$13.32",
    image: "https://si.geilicdn.com/wdseller1936187346-0edc0000019aaa7bfd990a231177_1320_1320.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1833725707.v.weidian.com%2Fitem.html%3FitemID%3D7653884243&affcode=archivee",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ RSLM TEE",
    category: "Tshirts",
    price: "$12.23",
    image: "https://si.geilicdn.com/wdseller1936187346-44ad0000019ace2f775f0a210139_1320_1320.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1833725707.v.weidian.com%2Fitem.html%3FitemID%3D7656862294&affcode=archivee",
    tag: "GOAT",
    rating: 5
  
  },
  
  {
    name: "CDG TEE",
    category: "Tshirts",
    price: "$20.62",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01vmC0951FEtQNWRf5j_!!2943390456.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D706505282193&affcode=archivee",
    tag: "LMYER",
    rating: 5
  
  },
  {
    name: "CDG PLAY TEE",
    category: "Tshirts",
    price: "$22.93",
    image: "https://img.alicdn.com/bao/uploaded/i3/2220706226099/O1CN01rAsnnL1uvOh82eklG_!!2220706226099.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D974955606875&affcode=archivee",
    tag: "REPBROS",
    rating: 5
  
  },
  {
    name: "CDG DOUBLE HEARTS",
    category: "Tshirts",
    price: "$22.5",
    image: "https://img.alicdn.com/bao/uploaded/i2/2220706226099/O1CN01e2HvS31uvOh7Cx4Eo_!!2220706226099.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D976288568920&affcode=archivee",
    tag: "REPBROS",
    rating: 5
  
  },
  {
    name: "CDG PLAY TEES",
    category: "Tshirts",
    price: "$19.46",
    image: "https://img.alicdn.com/bao/uploaded/i4/2220706226099/O1CN019YyHZ01uvOh7HyhDp_!!2220706226099.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D974427059839&affcode=archivee",
    tag: "REPBROS",
    rating: 5
  
  },
  {
    name: "CDG PLAY TEE",
    category: "Tshirts",
    price: "$22.52",
    image: "https://img.alicdn.com/bao/uploaded/i1/2220706226099/O1CN01F6vyZ21uvOh7iPfPv_!!2220706226099.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D976313608209&affcode=archivee",
    tag: "REPBROS",
    rating: 5
  
  },
  {
    name: "GALLERY DEPT TSHIRTS (BUDGET)",
    category: "Tshirts",
    price: "$14.15",
    image: "https://img.alicdn.com/bao/uploaded/i2/2217139011106/O1CN01rLyBXN1K2b1ufD22p_!!2217139011106.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D771007293616&affcode=archivee",
    tag: "BUDGET",
    rating: 4
  
  },
  {
    name: "PALM ANGELS TSHIRTS (BUDGET)",
    category: "Tshirts",
    price: "$14.15",
    image: "https://img.alicdn.com/bao/uploaded/i4/2217139011106/O1CN01ImpDF51K2azrRaWIl_!!2217139011106.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D770939300665&affcode=archivee",
    tag: "BUDGET",
    rating: 4
  
  },
  
  {
    name: "FORTNITE X BALENCIAGA (RANDOM/BUDGET)",
    category: "Tshirts",
    price: "$31.19",
    image: "https://si.geilicdn.com/wdseller1024195542-7f15000001814d53603a0a22b3e4_1124_1500.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D4980473884&affcode=archivee",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "BALENCIAGA PULL UP PANTS",
    category: "Shorts",
    price: "$69.07",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/25/54ed7f4ebe9c6436bf64b82e1a493b6b.jpg",
    link: "https://ikako.vip/yg962",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "BALENCIAGA BLUE FLARED LOST TAPES",
    category: "Shorts",
    price: "$62.96",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/2e1e9a448e834633f20451e8996d735a.jpg",
    link: "https://ikako.vip/7zk79",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "BALENCIAGA FITTED GEORGE V LOW WAIST PANTS",
    category: "Shorts",
    price: "$65.76",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/21/53fd709cf6ccc48d1922844fd88800dd.jpg",
    link: "https://ikako.vip/u2csv",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "BUDGET BALENCIAGA BAGGY JEANS",
    category: "Shorts",
    price: "$21.42",
    image: "https://img.alicdn.com/bao/uploaded/i4/402758480/O1CN010zXoKN2CVtV2JeZT1_!!402758480.jpg",
    link: "https://ikako.vip/an9zs",
    tag: "BUDGET",
    rating: 4
  
  },
  {
    name: "BALENCIAGA DOUBLE WAIST SWEATPANTS",
    category: "Shorts",
    price: "$56.14",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/a34e2928fe9e5b409c2cd43551fb0d14.jpg",
    link: "https://ikako.vip/zc3nz",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "BALENCIAGA FLARED JEANS (BUDGET)",
    category: "Shorts",
    price: "$25",
    image: "https://img.alicdn.com/bao/uploaded/i1/2214514093/O1CN01iiHQSF1g6dzXIV2Gj_!!2214514093.jpg",
    link: "https://ikako.vip/z6naf",
    tag: "BUDGET",
    rating: 4
  
  },
  {
    name: "BALENCIAGA CUT UP JEANS",
    category: "Shorts",
    price: "$82",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/26/0fb129ef5dc14a4f903db78713952641.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fe.tb.cn%2Fh.SJOZrGOcmZOEBIX%3Ftk%3Dwi7xf7YnCzH&affcode=archivee",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "PURPLE BRAND JEANS (WM179)",
    category: "Shorts",
    price: "$40.75",
    image: "https://si.geilicdn.com/pcitem453299265-22dd0000019afa3b95f30a23111a_500_500.jpg",
    link: "https://ikako.vip/2cb9f",
    tag: "HENGYU",
    rating: 5
  
  },
  {
    name: "PURPLE BRAND JEANS (WM178)",
    category: "Shorts",
    price: "$41",
    image: "https://si.geilicdn.com/pcitem453299265-20050000019afa3b80360a2303ee_500_500.jpg",
    link: "https://ikako.vip/2cb9f",
    tag: "HENGYU",
    rating: 5
  
  },
  {
    name: "PURPLE BRAND JEANS(PB141)",
    category: "Shorts",
    price: "$41",
    image: "https://si.geilicdn.com/pcitem453299265-417500000198053f14a20a23111a_1200_1200.jpg",
    link: "https://ikako.vip/7dh9b",
    tag: "HENGYU",
    rating: 5
  
  },
  {
    name: "PURPLE BRAND JEANS (WM131)",
    category: "Shorts",
    price: "$41",
    image: "https://si.geilicdn.com/pcitem453299265-4c9d000001996672c29e0a2303ee_4168_4168.jpg",
    link: "https://ikako.vip/2cb9f",
    tag: "HENGYU",
    rating: 5
  
  },
  {
    name: "MIJKO PATCH JEANS",
    category: "Shorts",
    price: "$22",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/15/140d728f36b7fa7716cc73b1bfdecf47.jpg",
    link: "https://ikako.vip/pdyhvd",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "ACNE 1981M VINTAGE BLACK",
    category: "Shorts",
    price: "$53",
    image: "https://preview.redd.it/rep-topacney-vs-retail-comparison-acne-studios-1981m-v0-2e3k8p3tz1de1.jpg?width=640&crop=smart&auto=webp&s=0aa242d0926cb170c02200f94939f8e03fa789f4",
    link: "https://ikako.vip/byp9n",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "ACNE 2010M BLACK",
    category: "Shorts",
    price: "$53",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/18/ef2e323b80ef60a1376681f3da89032e.jpg",
    link: "https://ikako.vip/bp8nd",
    tag: "MVT",
    rating: 5
  
  },
  ,
  {
    name: "ACNE 1981 PAINT SPLATTER",
    category: "Shorts",
    price: "$53",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/13/39dbf5ea52bed1b15138a5bd0a7d6359.jpg",
    link: "https://ikako.vip/sguec",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "ACNE STUDIOS 1989 ASH BLACK",
    category: "Shorts",
    price: "$49.35",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/21/c2bd75caab75d5b830465224b0d69bda.jpg",
    link: "https://ikako.vip/2qjzzy",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "ESSENTIALS PANTS (BUDGET)",
    category: "Shorts",
    price: "$18.81",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/3ff28cfd0ce1bdc77444552311e3ed6d.jpg",
    link: "https://ikako.vip/gqh67",
    tag: "BUDGET",
    rating: 3
  
  },
  {
    name: "ESSENTIALS FOG PANTS",
    category: "Shorts",
    price: "$28.38",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/6/125c4d37e99863a1509cd2ea48d04914.jpg",
    link: "https://ikako.vip/gud2k",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "ESSENTIALS FOG PANTS",
    category: "Shorts",
    price: "$32",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/24/c14bfc2bee51c3135cc38d019d83d4dd.jpg",
    link: "https://ikako.vip/j5fy8",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "ESSENTIALS FOG SWEATPANTS",
    category: "Shorts",
    price: "$34",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/8/ad612033899daad33e1289c3ba8f933a.jpg",
    link: "https://ikako.vip/3xyzy",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "ESSENTIALS X NBA SWEATPANTS",
    category: "Shorts",
    price: "$31.66",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/11/20260c12685cf9313b18d60cce827bd5.jpg",
    link: "https://ikako.vip/n77sp",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "RICK OWENS SUBHUMAN WAXED PANTS",
    category: "Shorts",
    price: "$34.17",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/8/28b72f710ddd559c7f062da4aae71937.jpg",
    link: "https://ikako.vip/8rb6r",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "RICK OWENS DRKSHDW JEANS",
    category: "Shorts",
    price: "$28",
    image: "https://img.alicdn.com/bao/uploaded/i4/2214514093/O1CN01Mw6ugI1g6e9yzqzbr_!!2214514093.jpg",
    link: "https://ikako.vip/xrfzt",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "RICK OWENS PANTS",
    category: "Shorts",
    price: "$34.48",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/6/ae41f484f522f921f4f6434444778709.jpg",
    link: "https://ikako.vip/8qyny",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "RICK OWENS PANTS",
    category: "Shorts",
    price: "$49.99",
    image: "https://si.geilicdn.com/pcitem1487039158-331200000196a90ffc680a20e7c7_800_800.jpg",
    link: "https://ikako.vip/4vm26",
    tag: "PINK ELEPHANT",
    rating: 4
  
  },
  {
    name: "RICK OWENS PANTS",
    category: "Shorts",
    price: "$58",
    image: "https://img.alicdn.com/bao/uploaded/i1/62314016/O1CN01nLKBFG1fXNMak3ugp_!!62314016.jpg",
    link: "https://ikako.vip/5fgu4",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "GUCCI DEMNA BLACK JEANS",
    category: "Shorts",
    price: "$63.5",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/26/ab1bd2aea8baab67c337ea8110c87103.jpg",
    link: "https://ikako.vip/4na4r",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "GUCCI DEMNA JEANS",
    category: "Shorts",
    price: "$63.5",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/25/41d1bb469c2875b723dd64d5839b48ff.jpg",
    link: "https://ikako.vip/4na4r",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "GALLERY DEPT PANTS",
    category: "Shorts",
    price: "$30.78",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/20/3897ba39e80549745b2d931aad7e38a8.jpg",
    link: "https://ikako.vip/w6nrz",
    tag: "BUDGET",
    rating: 4
  
  },
  {
    name: "GALLERY DEPT PANTS",
    category: "Shorts",
    price: "$48.07",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/19/4ea0ec8e7e5f2b07e8255ca310236cc5.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D821375995617&affcode=archivee",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "HELLSTAR UNIFORM PANTS",
    category: "Shorts",
    price: "$55",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202507/27/697b7b347c5aa8789840344516f33bd5.jpg",
    link: "https://ikako.vip/sjqrn",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "HELLSTAR PANTS",
    category: "Shorts",
    price: "$28.06",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/13/2c6efc36b1fc6bbab51bfddf9ccc3c67.jpg",
    link: "https://ikako.vip/zb326",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "TRUE RELIGION JEANS",
    category: "Shorts",
    price: "$27",
    image: "https://img.alicdn.com/bao/uploaded/i4/2404365569/O1CN01Dd5upM1r0egErRCpf_!!2404365569.jpg",
    link: "https://ikako.vip/yn4wj",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "NIKE X STUSSY SWEATPANTS",
    category: "Shorts",
    price: "$23.55",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/16/0236cfe2a833020b9233c5441ae5f14c.jpg",
    link: "https://ikako.vip/7czwr",
    tag: "NEWDP",
    rating: 4
  
  },
  {
    name: "NIKE X NOCTA",
    category: "Shorts",
    price: "$25.08",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/11/4465525b6a49c60f138d8bee4cfbbfd6.jpg",
    link: "https://ikako.vip/h3w3s",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "CORTEIZ GUERILLAZ CARGO PANTS",
    category: "Shorts",
    price: "$43.88",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/9/05dda5b8928b791df52bc298fa7b1840.jpg",
    link: "https://ikako.vip/b4s9d",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ EMBOSED C-STAR DENIM",
    category: "Shorts",
    price: "$35.89",
    image: "https://si.geilicdn.com/wdseller1936187346-12330000019a674967b40a239846_1320_1320.jpg",
    link: "https://ikako.vip/2y6u86",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ ROAYLE CREST OPEN SWEATPANTS",
    category: "Shorts",
    price: "$27.43",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/22/6795ee0c3d44f905fd543e42ca9cf564.jpg",
    link: "https://ikako.vip/jw4vs",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ DENIM JEANS DARK WASH",
    category: "Shorts",
    price: "$35.89",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/21/1fec263c6b4af69f3a3401f541eb7f10.jpg",
    link: "https://ikako.vip/njcur",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ ISLAND BAGGY JEANS",
    category: "Shorts",
    price: "$33.75",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/13/3d5cdcb2effe9b1c5d235e1285f8d37a.jpg",
    link: "https://ikako.vip/wu8sf",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ ALCATRAZ SWEATPANTS",
    category: "Shorts",
    price: "$27.74",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/15/2eea76dbabf0b1eca9dbdadb941dd325.jpg",
    link: "https://ikako.vip/zejc3",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ 4 STAR CARGOS",
    category: "Shorts",
    price: "44.37",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202508/15/70a0e74fa8004d6c3c3676b910eb7f95.jpg",
    link: "https://ikako.vip/avxp6",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "PALM ANGELS PANTS",
    category: "Shorts",
    price: "20.6",
    image: "https://img.alicdn.com/bao/uploaded/i1/574102188/O1CN010s0FJx1S29g8lHaPK_!!574102188.jpg",
    link: "https://ikako.vip/r57j9",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "THE NORTH FACE 1996 VEST",
    category: "Jackets",
    price: "28.21",
    image: "https://si.geilicdn.com/wdseller901828721618-4d7100000192201ef5a30a239646_1442_1444.jpg",
    link: "https://ikako.vip/6yhwt",
    tag: "TOP",
    rating: 5
  
  },
  {
    name: "TNF 1996 RETRO NUPTSE 700",
    category: "Jackets",
    price: "42.31",
    image: "https://si.geilicdn.com/pcitem1425026222-3ec000000199e4a07d640a20e2c5_1440_1440.jpg",
    link: "https://ikako.vip/y6w24",
    tag: "TOP",
    rating: 5
  
  },
  {
    name: "ARCTERYX BLACK SL",
    category: "Jackets",
    price: "63",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/23/6f83f9e1502b15462c9d8132157c4b6a.jpg",
    link: "https://ikako.vip/mcegm",
    tag: "DREAMREMAKE",
    rating: 5
  
  },
  {
    name: "Derschutze Denim Pants",
    category: "Shorts",
    price: "$32.91",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/99f0e3e1b3574f6ed874f6cba2305bcc.jpg",
    link: "https://ikako.vip/8j95q8",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "Derschutze blue Denim Pants",
    category: "Shorts",
    price: "$32.91",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/31/6d865564526a5a676882dd6cd609facb.jpg",
    link: "https://ikako.vip/fpsdy",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "Derschutze Western Jogger",
    category: "Shorts",
    price: "$32.91",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/ad5cf687195083e02bf18eecb6740cb2.jpg",
    link: "https://ikako.vip/z3g2x",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "Derschutze Denim Pants",
    category: "Shorts",
    price: "$32.91",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/14e6f3fb99a8b11cf8dcf951f7c96f39.jpg",
    link: "https://ikako.vip/f5hec",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "Ralph Lauren Suit Pants",
    category: "Shorts",
    price: "$24.51",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/559e31f4b72c116d181bfd30ef77e851.jpg",
    link: "https://ikako.vip/vxpf4u",
    tag: "NEWDP",
    rating: 5
  
  },
  {
    name: "Ralph Lauren FLeece Pants",
    category: "Shorts",
    price: "$21.79",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/24/adafb0606dea315046027c9d39baeaea.jpg",
    link: "https://ikako.vip/ep3p5",
    tag: "NEWDP",
    rating: 5
  
  },
  {
    name: "Ralph Lauren Pants",
    category: "Shorts",
    price: "$21.79",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/b3b5c401937392c718e40bbd14b5971c.jpg",
    link: "https://ikako.vip/j7dpx",
    tag: "NEWDP",
    rating: 5
  
  },
  {
    name: "BPM RENT'S DUE PANTS",
    category: "Shorts",
    price: "$28.99",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/2/cd56a7fa0e73e86b596b5e69de6d6dc9.jpg",
    link: "https://ikako.vip/f5yw8",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "BPM PANTS ALL THE STARS",
    category: "Shorts",
    price: "$31.19",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202511/30/c2ce72f87d12679b12048bb059796047.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1621342910.v.weidian.com%2Fitem.html%3FitemID%3D7499784900&affcode=archivee",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "HYSTERIC GLAMOUR HAGI JEANS",
    category: "Shorts",
    price: "$64.18",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/21/6611d64c5141dd3bae6bdfb05b5c2c91.jpg",
    link: "https://ikako.vip/zqt64",
    tag: "BDSS",
    rating: 5
  
  },
  {
    name: "BALENCIAGA SHORTS",
    category: "Shorts",
    price: "$18.65",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/14/67ab0f21735bbada4796e8a5723f6d83.jpg",
    link: "https://ikako.vip/e3wcb",
    tag: "SATANMADE",
    rating: 5
  
  },
  {
    name: "BALENCIAGA SHORTS",
    category: "Shorts",
    price: "$34.17",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202508/25/c101b6e35b82ad64eed0589c6ec742a0.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7519004840%26spider_token%3D8dbf&affcode=archivee",
    tag: "THUNDER",
    rating: 5
  
  },
  {
    name: "BALENCIAGA SHORTS",
    category: "Shorts",
    price: "$32.6",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/18/10f059bf1e46c242e52a9784466bd5a3.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7499057490%26spider_token%3Da6ee&affcode=archivee",
    tag: "THUNDER",
    rating: 5
  
  },
  {
    name: "BALENCIAGA SHORTS",
    category: "Shorts",
    price: "$42",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202509/2/c1dfbc22d5b6d0fd9466ab6969479fc7.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7497106511%26spider_token%3Df58f&affcode=archivee",
    tag: "THUNDER",
    rating: 5
  
  },
  {
    name: "BALENCIAGA SHORTS",
    category: "Shorts",
    price: "$34.42",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/24/c7de5443bfae1f2aaa028671d078de7f.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7618065701%26wfr%3Dc&affcode=archivee",
    tag: "THUNDER",
    rating: 5
  
  },
  {
    name: "BALENCIAGA SHORTS",
    category: "Shorts",
    price: "$35.89",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/30/c0bbe2344e541f395d0b5e6c2c1101d3.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7604006524%26wfr%3Dc&affcode=archivee",
    tag: "THUNDER",
    rating: 5
  
  },
  {
    name: "BALENCIAGA DOUBLE WAIST SHORTS",
    category: "Shorts",
    price: "$28.05",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/13/a90014fb24db666980977a8e5a6917b6.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7510584472%26wfr%3Dc&affcode=archivee",
    tag: "TOPHOT",
    rating: 4
  
  },
  {
    name: "ESSENTIALS NBA SHORTS",
    category: "Shorts",
    price: "$14.11",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/26/b5787adaa03393adb57326c6b41d5a6a.jpg",
    link: "https://ikako.vip/apvuy",
    tag: "YISHAN",
    rating: 4
  
  },
  {
    name: "ESSENTIALS FOG SHORTS",
    category: "Shorts",
    price: "$23.95",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/114450d1949c026e2889fc048bbcb7ea.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D962037909233&affcode=archivee",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "ESSENTIALS FOG SHORTS",
    category: "Shorts",
    price: "$27",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/c4b3acab7da80306ff239e225b14fa5f.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D934124406348&affcode=archivee",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "ESSENTIALS FOG SHORTS",
    category: "Shorts",
    price: "$27",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/28/5d81b84ec4734a2de9c94bc0814f42b7.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7254715223%26wfr%3Dc&affcode=archivee",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "GALLERY DEPT SHORTS",
    category: "Shorts",
    price: "$32.76",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202505/24/e69e06249af5084e7e44e981011e1d41.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D923514622610&affcode=archivee",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "BPM WASHED SHORTS",
    category: "Shorts",
    price: "$29",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202507/19/91f12c173cca026989a4ea6afcf5820f.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1621342910.v.weidian.com%2Fitem.html%3FitemID%3D7342141752&affcode=archivee",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "BPM SUN LOGO SHORTS",
    category: "Shorts",
    price: "$21.16",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/16/fbce57d171dc0586f469c928d5baa681.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1621342910.v.weidian.com%2Fitem.html%3FitemID%3D7490154691&affcode=archivee",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "BPM BLACK DENIM SHORTS",
    category: "Shorts",
    price: "$27.43",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/3da68e9be909cb9a633a12e0dba08f67.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1621342910.v.weidian.com%2Fitem.html%3FitemID%3D7342496656&affcode=archivee",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "BPM GRAY SHORTS",
    category: "Shorts",
    price: "$21.16",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/2/05749b43cd3f94f01d387aea9aab0c2c.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1621342910.v.weidian.com%2Fitem.html%3FitemID%3D7341453361&affcode=archivee",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "DERSCHUTZE SHORTS",
    category: "Shorts",
    price: "$25.86",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/21/62e6dddcb36f78163bae1fcb55983694.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1739784557.v.weidian.com%2Fitem.html%3FitemID%3D7632918134&affcode=archivee",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "DERSCHUTZE SHORTS",
    category: "Shorts",
    price: "$25.86",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/26/4bbf8a50d359ec1a30a0619f350790f1.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1739784557.v.weidian.com%2Fitem.html%3FitemID%3D7618310132&affcode=archivee",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "DERSCHUTZE SHORTS",
    category: "Shorts",
    price: "$24.29",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/659cab4a9184888970269896b817b110.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1739784557.v.weidian.com%2Fitem.html%3FitemID%3D7576666451&affcode=archivee",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "ISLAND PUFF PRINT SHORTS",
    category: "Shorts",
    price: "$24.29",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/23/e7f6c5d48640b998df20b480690b274d.jpg",
    link: "https://ikako.vip/8ng37",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ BLACK MESH SHORTS",
    category: "Shorts",
    price: "$22.73",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/25/4c64ce089170c4d5a9c82d5cafa70ad4.jpg",
    link: "https://ikako.vip/aaeeg",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ ISLAND BAGGY SHORTS",
    category: "Shorts",
    price: "$33.7",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/9/5d082decb4d5409a4e4b8a4a34d3462c.jpg",
    link: "https://ikako.vip/aewkm",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ BLACK DENIM SHORTS",
    category: "Shorts",
    price: "$33.7",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/24/6509876c3cb9a058f071e50435beebbf.jpg",
    link: "https://ikako.vip/szbk5",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "EE X WARREN LOTAS",
    category: "Shorts",
    price: "$13.11",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/9/28e8ba7b6df49759ebc80caedd80d1db.jpg",
    link: "https://ikako.vip/43fhs",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "EE SHORTS",
    category: "Shorts",
    price: "$12.96",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/01bdce96a23355117620332f72a225e2.jpg",
    link: "https://ikako.vip/a2vks",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "EE SHORTS",
    category: "Shorts",
    price: "$12.96",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/14/97ba7964e94d9e242c4e365d16c1953a.jpg",
    link: "https://ikako.vip/numeb",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "EE SHORTS",
    category: "Shorts",
    price: "$13.1",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/18/f1ba1d316fa6addab797657d25137b6d.jpg",
    link: "https://ikako.vip/tfdjm",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "STUSSY DENIM SHORTS",
    category: "Shorts",
    price: "$26.08",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/13/bcbbb1ec06131880610df327ef2b5e0e.jpg",
    link: "https://ikako.vip/k3smqt",
    tag: "DRAGONREP",
    rating: 4
  
  },
  {
    name: "STUSSY SHORTS",
    category: "Shorts",
    price: "$11.34",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/9/f71877c8f60fce590a421f242c63e769.jpg",
    link: "https://ikako.vip/hps4z",
    tag: "DRAGONREP",
    rating: 4
  
  },
  {
    name: "STUSSY SHORTS",
    category: "Shorts",
    price: "$17.72",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/24/e64c87aecf04d00955f26da2d09cfa76.jpg",
    link: "https://ikako.vip/chst3",
    tag: "DRAGONREP",
    rating: 4
  
  },
  {
    name: "NIKE/JORDAN SHORTS",
    category: "Shorts",
    price: "$10.12",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/23/be00e61dbce212ec44aef4df4e24fe50.jpg",
    link: "https://ikako.vip/75yyf",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "JORDAN SHORTS",
    category: "Shorts",
    price: "$6.27",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/291088b20efa88c4358653548e605092.jpg",
    link: "https://ikako.vip/55xmv",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "CARHARTT SHORTS",
    category: "Shorts",
    price: "$26.63",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/15/e7881787353d393c62d2d66edc425982.jpg",
    link: "https://ikako.vip/fh3yp",
    tag: "HUSKY",
    rating: 4
  
  },
  {
    name: "ARCTERYX MACAI REMOVABLE HOOD",
    category: "Jackets",
    price: "$94.03",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/20/a6a922185e74f1b6f3facda4e86fda30.jpg",
    link: "https://ikako.vip/fs6gt",
    tag: "DREAMREMAKE",
    rating: 5
  
  },
  {
    name: "ARCTERYX MACAI",
    category: "Jackets",
    price: "$94.03",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/10/c70355efaf91825e34c6e383a58280b0.jpg",
    link: "https://ikako.vip/dn9k2",
    tag: "DREAMREMAKE",
    rating: 5
  
  },
  {
    name: "MONCLER VEST BUDGET",
    category: "Jackets",
    price: "$68.17",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/5/78ac8e7f607b21da8b89a3b27967897e.jpg",
    link: "https://ikako.vip/2zwqd",
    tag: "BUDGET BATCH",
    rating: 5
  
  },
  {
    name: "MONCLER MAYA BEST BATCH",
    category: "Jackets",
    price: "$204.18",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/8/7f2ba002068ecdfe1d72796567584c56.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fh5.m.taobao.com%2Fawp%2Fcore%2Fdetail.htm%3Fft%3Dt%26id%3D903368724429&affcode=archivee",
    tag: "JIEYI",
    rating: 5
  
  },
  {
    name: "MONCLER TBELIARD BEST BATCH",
    category: "Jackets",
    price: "$221.73",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202511/26/ff8f17f63ff47b9585f44fc60e5228f4.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D699573998420%26spm%3Da213gs.v2success.result.1.61584831mOrh1a&affcode=archivee",
    tag: "JIEYI",
    rating: 5
  
  },
  {
    name: "RICK OWENS SECRET PARKA JACKET",
    category: "Jackets",
    price: "$208",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/9/4ab182e98917ca976d54543797db3b23.jpg",
    link: "https://ikako.vip/wdg8b",
    tag: "APEXMADE",
    rating: 5
  
  },
  {
    name: "JORDAN SOCKS 2 PAIR (42-46)",
    category: "Underwear",
    price: "$7.21",
    image: "https://si.geilicdn.com/pcitem1944479080-13890000019abefe66f00a2103bd_1276_1276.jpg",
    link: "https://ikako.vip/add9k",
    tag: "BAYMAXSOCKS",
    rating: 5
  
  },
  {
    name: "NIKE SOCKS 6 PAIR (42-46)",
    category: "Underwear",
    price: "$9.25",
    image: "https://si.geilicdn.com/open1847561709-1234478995-59c70000019638db296d0a22d249_1276_1276.jpg",
    link: "https://ikako.vip/97wg9",
    tag: "BAYMAXSOCKS",
    rating: 5
  
  },
  {
    name: "NIKE SOCKS 3 PAIR",
    category: "Underwear",
    price: "$5.49",
    image: "https://si.geilicdn.com/open1847561709-1234478995-571d000001978909a5ee0a22d249_2560_1920.jpg",
    link: "https://ikako.vip/nvxcm",
    tag: "BAYMAXSOCKS",
    rating: 5
  
  },
  {
    name: "VETEMENTS SOCKS (36-42)",
    category: "Underwear",
    price: "$2.2",
    image: "https://si.geilicdn.com/pcitem1234071531-7e440000019a66c3da5e0a23111a_1276_1276.jpg",
    link: "https://ikako.vip/mbvwk",
    tag: "BAYMAXSOCKS",
    rating: 5
  
  },
  {
    name: "ERIC EMANUEL SOCKS (3 PACK)",
    category: "Underwear",
    price: "$7.06",
    image: "https://si.geilicdn.com/pcitem2005654965-0c360000019aafb796620a207569_1702_1276.jpg",
    link: "https://ikako.vip/559eq",
    tag: "BAYMAXSOCKS",
    rating: 5
  
  },
  {
    name: "CALVIN KLEIN BOXERS (5 PACK)",
    category: "Underwear",
    price: "$15.52",
    image: "https://si.geilicdn.com/open1847561709-1234478995-608c0000019638dab1650a8115c2_2560_2560.jpg",
    link: "https://ikako.vip/bgsjc",
    tag: "BAYMAXSOCKS",
    rating: 5
  
  },
  {
    name: "FOG BOXERS (2 PACK)",
    category: "Underwear",
    price: "$15.52",
    image: "https://si.geilicdn.com/open1847561709-1234478995-65070000019639728abe0a8133b0_1155_1280.jpg",
    link: "https://ikako.vip/gj93u",
    tag: "BAYMAXSOCKS",
    rating: 5
  
  },
  {
    name: "BALENCIAGA HAMPTONS",
    category: "Shoes",
    price: "$67",
    image: "https://si.geilicdn.com/wdseller1268847658-3dc60000019c2dd97f0d0a21146b_1320_1320.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1268847658.v.weidian.com%2Fitem.html%3FitemID%3D7509083332&affcode=archivee",
    tag: "XA/VG",
    rating: 4
  
  },
  {
    name: "BALENCIAGA 3XL",
    category: "Shoes",
    price: "$63",
    image: "https://si.geilicdn.com/pcitem1710010242-5ba400000198b83c96f30a2304aa_2832_2832.jpg",
    link: "https://ikako.vip/mk6w3",
    tag: "VG",
    rating: 4
  
  },
  {
    name: "BALENCIAGA X-PANDER",
    category: "Shoes",
    price: "$82",
    image: "https://si.geilicdn.com/pcitem1425026222-7955000001964561a7a90a811411_1440_1920.jpg",
    link: "https://ikako.vip/9wev4",
    tag: "OK",
    rating: 4
  
  },
  {
    name: "CP COMPANY BEANIE",
    category: "Belts",
    price: "$13",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/1/c51e13567bf2ae0bd3a592b1bb8b6a7c.jpg",
    link: "https://ikako.vip/vf5qn",
    tag: "CPREPS",
    rating: 5
  
  },
  {
    name: "ARCTERYX BEANIE",
    category: "Belts",
    price: "$13",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/21/bca95dec778712dff8b754137e7a2f29.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7549993727&affcode=archivee",
    tag: "OGWAVE",
    rating: 5
  
  },
  {
    name: "MONCLER BEANIE",
    category: "Belts",
    price: "$12.38",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/25/45a977f803b950c4ad385b797e5d4dde.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7549993727&affcode=archivee",
    tag: "OGWAVE",
    rating: 5
  
  },
  {
    name: "SUPREME BEANIE",
    category: "Belts",
    price: "$16",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/24/aced86b8315f485a17dc22155631726f.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7617676948%26spider_token%3D9792&affcode=archivee",
    tag: "OGWAVE",
    rating: 5
  
  },
  {
    name: "CORTEIZ BEANIE",
    category: "Belts",
    price: "$16",
    image: "https://img.alicdn.com/bao/uploaded/i2/2214278784178/O1CN01l1Zlul1gjZlcOdbql_!!2214278784178.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D694456604440&affcode=archivee",
    tag: "OGWAVE",
    rating: 5
  
  },
  {
    name: "LV BELT",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/weidian1860614617-151d00000197960f4fc70a23038e_1440_1920.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7496492536&affcode=archivee",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "LV BELTS",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/open1621840505-1234478995-0ccd0000018f589a161f0a210559_1080_1080.jpg",
    link: "https://ikako.vip/gezpn",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "YSL BELTS",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/open1621840505-1234478995-51870000018f58aba4550a239631_1080_1080.jpg",
    link: "https://ikako.vip/cs28e",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "YSL BELTS",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/weidian1860614617-4f5c000001977b43220c0a2395e5_1440_1920.jpg",
    link: "https://ikako.vip/nvanfy",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "HERMES BELTS",
    category: "Belts",
    price: "$39",
    image: "https://si.geilicdn.com/weidian1860614617-409a000001990f45f4b30a231316_1512_2016.jpg",
    link: "https://ikako.vip/sfn7a",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "GUCCI BELTS",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/weidian1854818118-2fb60000019a70bdcd000a23041a_1279_1706.jpg",
    link: "https://ikako.vip/khkw5",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "GUCCI BELTS",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/open1621840505-1234478995-17220000018f588c067d0a8115b5_1440_1920.jpg",
    link: "https://ikako.vip/retz6",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "FERRAGAMO BELTS",
    category: "Belts",
    price: "$36",
    image: "https://si.geilicdn.com/weidian1860614617-0a6a00000199460a11c90a23047e_1440_1920.jpg",
    link: "https://ikako.vip/vny7g",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "FERRAGAMO BELTS",
    category: "Belts",
    price: "$36",
    image: "https://si.geilicdn.com/weidian1860614617-7f580000019889a6820b0a230115_1440_1920.jpg",
    link: "https://ikako.vip/348by",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "FERRAGAMO BELTS",
    category: "Belts",
    price: "$36",
    image: "https://si.geilicdn.com/weidian1860614617-7827000001910c0052160a23057e_1440_1920.jpg",
    link: "https://ikako.vip/b6jygq",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "CHROME HEARTS BELT",
    category: "Belts",
    price: "$41",
    image: "https://si.geilicdn.com/weidian1860614617-57d100000197981ca68a0a23111a_1080_1080.jpg",
    link: "https://ikako.vip/bkbm9",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "CHROME HEARTS BELT",
    category: "Belts",
    price: "$45",
    image: "https://si.geilicdn.com/weidian1860614617-5f1a0000019798181d4a0a2395a3_1080_1080.jpg",
    link: "https://ikako.vip/ckzgq",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "SLP T-SHIRTS (100 CW)",
    category: "Tshirts",
    price: "$15.5",
    image: "https://img.alicdn.com/bao/uploaded/i4/2214183518581/O1CN01zvzBmf2DG9jbN9HCS_!!2214183518581.png",
    link: "https://ikako.vip/sv2y8",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "KETAMINE T-SHIRT",
    category: "Tshirts",
    price: "$26.6",
    image: "https://img.alicdn.com/bao/uploaded/i4/2215791284194/O1CN01sjBPY41gquCafTLof_!!2215791284194.png",
    link: "https://ikako.vip/ecqqy",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "NETTSPEND INVERT T-SHIRT",
    category: "Tshirts",
    price: "$11.25",
    image: "https://img.alicdn.com/bao/uploaded/i4/2212643669335/O1CN01xWayyE2IpUKYRcAgu_!!2212643669335.png",
    link: "https://ikako.vip/3ne6e",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "NETTSPEND EARLY LIFE CRISIS T-SHIRT",
    category: "Tshirts",
    price: "$20.59",
    image: "https://img.alicdn.com/bao/uploaded/i1/2215791284194/O1CN01WNOvQf1gqu9vhs1qX_!!2215791284194.png",
    link: "https://ikako.vip/jsy98",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "NETTSPEND REHAB T-SHIRT",
    category: "Tshirts",
    price: "$20.59",
    image: "https://img.alicdn.com/bao/uploaded/i2/2215791284194/O1CN01CBZsge1gquBBxFzdl_!!2215791284194.png",
    link: "https://ikako.vip/jjvrj",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "HYSTERIC GLAMOUR STRAWBERRY T-SHIRT",
    category: "Tshirts",
    price: "$22.13",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/16/4699cea934b2176cbbf843445a475a75.jpg",
    link: "https://ikako.vip/p34fw",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "HYSTERIC GLAMOUR T-SHIRT",
    category: "Tshirts",
    price: "$19.04",
    image: "https://img.alicdn.com/bao/uploaded/i3/2126072107/O1CN01jJ8hET1RR3ZKEXxxg_!!2126072107.png",
    link: "https://ikako.vip/8z3nm",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "Jordan 4 (LJR BATCH)",
    category: "Shoes",
    price: "$75.22",
    image: "https://si.geilicdn.com/open1773336045-1234478995-53ce00000195f0f1a5820a23b4de_960_962.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7436802531%26spider_token%3D6edf&affcode=archivee",
    tag: "LJR",
    rating: 5
  
  },
  {
    name: "Jordan 5 (Y3/LJR)",
    category: "Shoes",
    price: "$70",
    image: "https://si.geilicdn.com/wdseller1505219366-388a00000198fd3b8e8b0a20e2c5_1184_666.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7564001027&affcode=archivee",
    tag: "Y3/LJR",
    rating: 5
  
  },
  {
    name: "Nike Mind 001",
    category: "Shoes",
    price: "$25.08",
    image: "https://si.geilicdn.com/pcitem902012511577-61820000019bd02b3acc0a207569_1179_1070.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1789988531.v.weidian.com%2Fitem.html%3FitemID%3D7665676161&affcode=archivee",
    tag: "S2",
    rating: 5
  
  },
  {
    name: "HYSTERIC GLAMOUR MEDICINE T-SHIRT",
    category: "Tshirts",
    price: "$22.23",
    image: "https://img.alicdn.com/bao/uploaded/i4/2126072107/O1CN01St4jiG1RR3bSE8ugM~crop,156,0,858,1144~_!!2126072107.jpg",
    link: "https://ikako.vip/a6r8y",
    tag: "BDSS",
    rating: 5
  
  },
  {
    name: "HYSTERIC GLAMOUR T-SHIRT",
    category: "Tshirts",
    price: "$15.83",
    image: "https://img.alicdn.com/bao/uploaded/i1/2126072107/O1CN018ydGoN1RR3bBHQ0VV_!!2126072107.jpg",
    link: "https://ikako.vip/wvszt",
    tag: "BDSS",
    rating: 5
  
  },
  {
    name: "RANDOM T-SHIRT",
    category: "Tshirts",
    price: "$8",
    image: "https://img.alicdn.com/bao/uploaded/i4/3043413681/O1CN014K74s61d3x01hzmT4_!!3043413681.jpg",
    link: "https://ikako.vip/rzmpc",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "SHIBU T-SHIRT",
    category: "Tshirts",
    price: "$11.08",
    image: "https://img.alicdn.com/bao/uploaded/i2/2217023441945/O1CN01jwviZQ1QErOaZ7YP8_!!2217023441945.jpg",
    link: "https://ikako.vip/ykfau",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "ANN D LOCTUS T-SHIRT",
    category: "Tshirts",
    price: "$20.89",
    image: "https://img.alicdn.com/bao/uploaded/i3/4169169639/O1CN01EB8QXG2L4ik5ZHuQp_!!4169169639.jpg",
    link: "https://ikako.vip/8j6ap",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "CARTI WLR T-SHIRT",
    category: "Tshirts",
    price: "$11.33",
    image: "https://img.alicdn.com/bao/uploaded/i1/2212643669335/O1CN01Ps8PHy2IpUEzjtIYL_!!2212643669335.jpg",
    link: "https://ikako.vip/x3sbe",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "AKIRA T-SHIRT",
    category: "Tshirts",
    price: "$11.4",
    image: "https://img.alicdn.com/bao/uploaded/i1/2212643669335/O1CN01QnSHXd2IpUHMH8zZ9_!!2212643669335.jpg",
    link: "https://ikako.vip/k8bhm",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "UNDERCOVER 10SS T-SHIRT",
    category: "Tshirts",
    price: "$15.36",
    image: "https://si.geilicdn.com/pcitem901965113164-7ddb00000197c01360500a20e284_2796_2796.jpg",
    link: "https://ikako.vip/ej45a",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "VUJADE T-SHIRT",
    category: "Tshirts",
    price: "$15.78",
    image: "https://img.alicdn.com/bao/uploaded/i4/3954478424/O1CN01UiQ4y52C6FGCRraDv_!!3954478424.jpg",
    link: "https://ikako.vip/bf8de",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "KANYE X GOSHA T-SHIRT",
    category: "Tshirts",
    price: "$16.93",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/21/2bf41571d198c15fa1cf1017c6e0ec77.jpg",
    link: "https://ikako.vip/q7gsm",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "I'M FINE BLOOD STAIN SHIRT",
    category: "Tshirts",
    price: "$11.26",
    image: "https://img.alicdn.com/bao/uploaded/i1/2218252751209/O1CN019PGXtm1KnlrjXlurh_!!2218252751209.jpg",
    link: "https://ikako.vip/n2rha",
    tag: "RANDOM",
    rating: 5
  
  },
  
  {
    name: "SUPREME ARABIC SHIRT",
    category: "Tshirts",
    price: "$16",
    image: "https://si.geilicdn.com/open1624782517-1624782517-2b2300000198f1c6ba720aa043f9_1350_1350.jpg",
    link: "https://ikako.vip/zdj9p",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "APHEX TWIN TEE",
    category: "Tshirts",
    price: "$11.36",
    image: "https://img.alicdn.com/bao/uploaded/i3/2212643669335/O1CN01DD6m0g2IpUExmmB9h_!!2212643669335.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D809631048361&affcode=archivee",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "2HOLLIS TEE",
    category: "Tshirts",
    price: "$11.23",
    image: "https://img.alicdn.com/bao/uploaded/i2/2212643669335/O1CN01fOFFsO2IpUKN3AGJI_!!2212643669335.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D921199812955&affcode=archivee",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "2HOLLIS TEE",
    category: "Tshirts",
    price: "$11.39",
    image: "https://img.alicdn.com/bao/uploaded/i2/2212643669335/O1CN01REr0ZU2IpUMpVaF3f_!!2212643669335.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D981183457748&affcode=archivee",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "NUMBER NINE MICKEY TEE",
    category: "Tshirts",
    price: "$11.18",
    image: "https://img.alicdn.com/bao/uploaded/i1/2212643669335/O1CN01fRcB0T2IpUKCsPfL2_!!2212643669335.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D916936678572&affcode=archivee",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "RANDOM OPIUM TEE",
    category: "Tshirts",
    price: "$12.88",
    image: "https://img.alicdn.com/bao/uploaded/i4/2212643669335/O1CN01FMzCwD2IpUHgIwuUr_!!2212643669335.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D808924265747&affcode=archivee",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "SUPREME THIRTS",
    category: "Tshirts",
    price: "$8.62",
    image: "https://si.geilicdn.com/wdseller1947147904-63130000019735ab59920a2315ef_1288_1288.jpg",
    link: "https://ikako.vip/bvck7",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "NIKE X NOCTA HOODIES",
    category: "Hoodies",
    price: "$32",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/14/e0d7afed2005d6bde1003ba80a38791b.jpg",
    link: "https://ikako.vip/87fzm",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "Derschutze Ariza Hoodie",
    category: "Hoodies",
    price: "$35.06",
    image: "https://img.alicdn.com/bao/uploaded/i4/1854157063/O1CN01hOdpUV222uVxtFpJC~hdr~_!!1854157063.heic",
    link: "https://ikako.vip/c6c39",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "Derschutze Gallery Hoodie",
    category: "Hoodies",
    price: "$38",
    image: "https://img.alicdn.com/bao/uploaded/i1/1854157063/O1CN01QyqjQx222uUMVbfRC_!!1854157063.jpg",
    link: "https://ikako.vip/wks7m",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "Derschutze Hoodie",
    category: "Hoodies",
    price: "$36",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/27/877099cfac8f23bb9f89f10d4a7561a9.jpg",
    link: "https://ikako.vip/jfr3x",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "Derschutze awakening V2 BLOSSOM Hoodie",
    category: "Hoodies",
    price: "$33",
    image: "https://img.alicdn.com/bao/uploaded/i1/1854157063/O1CN01w8zgPc222uSmzxiKS_!!1854157063.jpg",
    link: "https://ikako.vip/jadt8",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "CDG HOODIE BIG HEART",
    category: "Hoodies",
    price: "$42",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202511/28/01c50d2925f56d4836c9bd496afc6501.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D975518273866&affcode=archivee",
    tag: "REPBROS",
    rating: 5
  
  },
  {
    name: "CDG HOODIE",
    category: "Hoodies",
    price: "$39",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202511/28/35262d6361a5fdfd130146e16d92089f.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D974299403094&affcode=archivee",
    tag: "REPBROS",
    rating: 5
  
  },
  {
    name: "CDG ZIP UP HOODIE",
    category: "Hoodies",
    price: "$40",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/20/08e16a9401ebe00c2643f5d1e4150eff.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D975522325315&affcode=archivee",
    tag: "REPBROS",
    rating: 5
  
  },
  {
    name: "CDG PLAY ZIP UP HOODIE",
    category: "Hoodies",
    price: "$42",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/25/8f30df14c597686ba901499db9dc7cce.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D974788342665&affcode=archivee",
    tag: "REPBROS",
    rating: 5
  
  },
  {
    name: "CORTEIZ X BBK ROYALE ZIP UP HOODIE",
    category: "Hoodies",
    price: "$39",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/29/9ba1aab474da34577ab50582277951da.jpg",
    link: "https://ikako.vip/3hu3p",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ ALCATRAZ YELLOW HOODIE",
    category: "Hoodies",
    price: "$33",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/12/06ef6f109e7297a40f61ff3bb510d442.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1833725707.v.weidian.com%2Fitem.html%3FitemID%3D7656856394&affcode=archivee",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: " CORTEIZ BLACK ALCATRAZ HOODIE",
    category: "Hoodies",
    price: "$32",
    image: "https://si.geilicdn.com/wdseller1781632402-291f00000189b9c04af50a2102d0_750_750.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1760986891.v.weidian.com%2Fitem.html%3FitemID%3D7653811325&affcode=archivee",
    tag: "GOAT",
    rating: 5
  
  },
  
  {
    name: "CP COMPANY GOGGLE HOODIE",
    category: "Hoodies",
    price: "$46.84",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/23/23278811efe0b2969fe481bf0e3fe675.jpg",
    link: "https://ikako.vip/ep73a",
    tag: "CPREPSCN",
    rating: 5
  
  },
  {
    name: "CP COMPANY GREY ZIPPER HOODIE",
    category: "Hoodies",
    price: "$45.5",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/5/8de0efcaae81f8e25272328226518ea6.jpg",
    link: "https://ikako.vip/94jpb",
    tag: "CPREPSCN",
    rating: 5
  
  },
  {
    name: "CP COMPANY NAVY HOODIE",
    category: "Hoodies",
    price: "$40.45",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/28/2122f6d3e742885e37f085223b460f59.jpg",
    link: "https://ikako.vip/686d8",
    tag: "CPREPSCN",
    rating: 5
  
  },
  {
    name: "PAIKI FUR ZIP UP HOODIE",
    category: "Hoodies",
    price: "$41",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/26/336f42209aa9b110214507fcadaef5bc.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D841606251822&affcode=archivee",
    tag: "PAIKI",
    rating: 5
  
  },
  {
    name: "PLAYBOI CARTI CAT HOODIE",
    category: "Hoodies",
    price: "$25.19",
    image: "https://img.alicdn.com/bao/uploaded/i4/2212643669335/O1CN01VhYQHf2IpUFI208vJ_!!2212643669335.png",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D817686026285&affcode=archivee",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "808VISION HOODIE",
    category: "Hoodies",
    price: "$38.65",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/29/c5508179bbb9b4dbd5f652cb78666e98.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D1006072606020&affcode=archivee",
    tag: "DRAGONREP",
    rating: 5
  
  },
  {
    name: "ARTIEMASTER BLANK HOODIE'S (A LOT OF CW)",
    category: "Hoodies",
    price: "$11.45",
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01GD1BYr1rFljOsRngl_!!2631375602-0-cib.jpg",
    link: "https://ikako.vip/9vufw",
    tag: "ARTIEMASTER",
    rating: 5
  
  },
  {
    name: "YEEZY X GOSHA RUBCHINSKIYE",
    category: "Hoodies",
    price: "$25",
    image: "https://si.geilicdn.com/pcitem1375395368-115e000001913862f2820a8133cc_845_845.jpg",
    link: "https://ikako.vip/4b9av",
    tag: "CCHAOS",
    rating: 4
  
  },
  {
    name: "UNDERCOVER 06SS HOODIE",
    category: "Hoodies",
    price: "$16",
    image: "https://img.alicdn.com/bao/uploaded/i1/2217964616975/O1CN01c4f4jN21ObaS8Vpwo_!!2217964616975.jpg",
    link: "https://ikako.vip/dng5f3",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "SAINT ALEXANDER HOODIE",
    category: "Hoodies",
    price: "$26.35",
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01SBEtji1riALGKiIdY_!!2217847465664-0-cib.jpg",
    link: "https://ikako.vip/8zmvb",
    tag: "RANDOM (BUDGET)",
    rating: 3
  
  },
  {
    name: "PLAYBOI CARTI WLR HOODIE",
    category: "Hoodies",
    price: "$25.50",
    image: "https://img.alicdn.com/bao/uploaded/i4/2212643669335/O1CN01X2kFIu2IpUFUNdM2m_!!2212643669335.png",
    link: "https://ikako.vip/gweh5",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "6PM X TRUE RELIGION HOODIE",
    category: "Hoodies",
    price: "$34.5",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/16/224a509609ddef3f69f4bceadbb48eb6.jpg",
    link: "https://ikako.vip/dwk5g",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "LOEWE ZIP UP HOODIE",
    category: "Hoodies",
    price: "$17.57",
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01NLBNhc1WvLg0B31CC_!!2216716812850-0-cib.jpg",
    link: "https://ikako.vip/7mu8w",
    tag: "RANDOM",
    rating: 3
  
  },
  {
    name: "6PM HOODIE",
    category: "Hoodies",
    price: "$36",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/13/de578be16a2583a01b2abc2675e77b9b.jpg",
    link: "https://ikako.vip/zjqxk",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "PEACEINWAR PATRIOT HOODIE",
    category: "Hoodies",
    price: "$32.17",
    image: "https://img.alicdn.com/bao/uploaded/i4/2687803572/O1CN01FhgslU1cG1sGFeTNn_!!2687803572.jpg",
    link: "https://ikako.vip/s5ej2",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR YIN YANG HOODIE",
    category: "Hoodies",
    price: "$31.21",
    image: "https://si.geilicdn.com/wdseller1995625455-75300000019ada5206720a2102b1_1290_1720.jpg",
    link: "https://ikako.vip/ap9c4",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR HOODIE",
    category: "Hoodies",
    price: "$32.79",
    image: "https://si.geilicdn.com/wdseller1995625455-37e50000019b21f71ac80a2395e9_1290_1720.jpg",
    link: "https://ikako.vip/xtndr",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR SOLIDER HOODIE",
    category: "Hoodies",
    price: "$33.5",
    image: "https://img.alicdn.com/bao/uploaded/i2/2687803572/O1CN014myot71cG1sFmRZBR_!!2687803572.jpg",
    link: "https://ikako.vip/cawfg",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR EU T-SHIRT",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-6b190000019d1a09ad3d0a23c286_1320_1760.jpg",
    link: "https://ikako.vip/7mmaw",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR NATIONAL FLAG T-SHIRT",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-3f300000019d19ee36ce0a23c1e0_1320_1760.jpg",
    link: "https://ikako.vip/gekdf",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR ANTI-WAR SKULL TSHIRT",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-53a30000019d19e9c52e0a239839_1320_1760.jpg",
    link: "https://ikako.vip/qnk8t",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR COLLABORATION SKULL",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-196b0000019d24d6ddee0a20e672_1320_1760.jpg",
    link: "https://ikako.vip/q62s7",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR BATTLEFIELD PHOTO",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-7e7a0000019d245e199e0a239646_1320_1760.jpg",
    link: "https://ikako.vip/gwyqy",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR CAMOUFLAGE SKULL ",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-020a0000019d2458154e0a2303ea_1320_1760.jpg",
    link: "https://ikako.vip/fyhge",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR BRAIDED NATIONAL FLAG",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-07260000019d244eb7920a2305d8_1320_1760.jpg",
    link: "https://ikako.vip/u3tp2",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR FEDERAL POLO",
    category: "Tshirts",
    price: "$21.28",
    image: "https://si.geilicdn.com/wdseller1995625455-02c30000019d244b12460a240147_1320_1760.jpg",
    link: "https://ikako.vip/q9j4k",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR SKULL SWEATPANTS",
    category: "Shorts",
    price: "$34.52",
    image: "https://si.geilicdn.com/wdseller1995625455-5ccb0000019b21edc7d70a23b5fa_1290_1720.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7635947538&affcode=archivee",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR SKULL SWEATPANTS",
    category: "Shorts",
    price: "$36.1",
    image: "https://si.geilicdn.com/wdseller1995625455-7f440000019b0db144a60a2304a0_1290_1720.jpg",
    link: "https://ikako.vip/vukad",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR EU SWEATPANTS",
    category: "Shorts",
    price: "$34",
    image: "https://si.geilicdn.com/wdseller1995625455-1ad70000019b8d082bd60a230417_1290_1720.jpg",
    link: "https://ikako.vip/f6s9w",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "CHROME HEARTS MORO LONGSLEEVE",
    category: "Hoodies",
    price: "$31.37",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202509/6/cb50d32e7616cd79c15d4e855f2a7b61.jpg",
    link: "https://ikako.vip/buhj4",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "CHROME HEARTS LONGSLEEVE",
    category: "Hoodies",
    price: "$26.64",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/2/3e84c625460f0f2751299a169f5d7af0.jpg",
    link: "https://ikako.vip/by29w",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "CDG LONGSLEEVE",
    category: "Hoodies",
    price: "$19",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202604/1/1f0873b020b72d07495626288df5e5d2.jpg",
    link: "https://ikako.vip/ubd6c",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "HYSTERIC GLAMOUR SUE RYNSKI LONGSLEEVE",
    category: "Hoodies",
    price: "$25",
    image: "https://img.alicdn.com/bao/uploaded/i1/2126072107/O1CN01gWT2HW1RR3afrvxpb_!!2126072107.jpg",
    link: "https://ikako.vip/65udt",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "HYSTERIC GLAMOUR LONGSLEEVE",
    category: "Hoodies",
    price: "$17.5",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/25/4d3ff2a9c2d42750e25ac0869365b6af.jpg",
    link: "https://ikako.vip/typeg",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "UNDERCOVER LONGSLEEVE",
    category: "Hoodies",
    price: "$20.78",
    image: "https://img.alicdn.com/bao/uploaded/i1/2214916689299/O1CN014S01jV2IZ04zhEr6o_!!2214916689299.jpg",
    link: "https://ikako.vip/tt8hz",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "ERD LONGSLEEVE",
    category: "Hoodies",
    price: "$40",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202510/12/020e3d1b4f980b0bc2087f8e2292af57.jpg",
    link: "https://ikako.vip/yjb6t",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "ERD CREWNECK",
    category: "Hoodies",
    price: "$17.42",
    image: "https://img.alicdn.com/bao/uploaded/i2/2075710764/O1CN01J9qQW51HVxdjUi5Yc_!!2075710764.jpg",
    link: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D906486784153&affcode=archivee",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "ERD CREWNECK",
    category: "Hoodies",
    price: "$45",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/11/dcc2f9e77b00e9509c66c55e770f7d33.jpg",
    link: "https://ikako.vip/x6fpu",
    tag: "BDSJ",
    rating: 5
  
  },
  {
    name: "MM KNIT ZIP UP",
    category: "Hoodies",
    price: "$22.38",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/11/dd80e2246adf1ccbb16ea8dadd758a26.jpg",
    link: "https://ikako.vip/42939",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "MM KNIT",
    category: "Hoodies",
    price: "$13.87",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/30/9305cdee6827484dbe11dbe4e38ed260.jpg",
    link: "https://ikako.vip/5evbs",
    tag: "BUDGET",
    rating: 4
  
  },
  {
    name: "UNDERCOVER CREWNECK",
    category: "Hoodies",
    price: "$22.24",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/2/d198911674bc2f0414fd477145dc6a54.jpg",
    link: "https://ikako.vip/mzute",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "UNDERCOVER GIZ SAWTOOTH CREWNECK",
    category: "Hoodies",
    price: "$18.76",
    image: "http://img.alicdn.com/imgextra/i4/2217964616975/O1CN01KzYlGH21ObetuoSGL_!!2217964616975.jpg",
    link: "https://ikako.vip/65v9v",
    tag: "RANDOM",
    rating: 4
  
  },
  




  
  
  
  
  
  
  
  


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  

  
  
];

// ============================================
// ⚠️ NIE EDYTUJ KODU PONIŻEJ (chyba że wiesz co robisz)
// ============================================

// Kurs USD do PLN
const USD_TO_PLN = 3.72;

function parsePrice(priceStr) {
  if (!priceStr) return 0;
  let clean = priceStr.replace('$', '').trim();
  if (clean.includes('-')) {
    const parts = clean.split('-');
    const min = parseFloat(parts[0]);
    const max = parseFloat(parts[1]);
    return (min + max) / 2;
  }
  return parseFloat(clean);
}

function usdToPln(priceStr) {
  const usd = parsePrice(priceStr);
  if (isNaN(usd)) return 0;
  return Math.round(usd * USD_TO_PLN);
}

function formatPrice(priceStr) {
  if (priceStr.includes('-')) {
    const parts = priceStr.replace('$', '').split('-');
    const minPln = Math.round(parseFloat(parts[0]) * USD_TO_PLN);
    const maxPln = Math.round(parseFloat(parts[1]) * USD_TO_PLN);
    return `
      <div class="card-price-wrapper">
        <span class="card-price-usd">${priceStr}</span>
        <span class="card-price-pln">≈ ${minPln} - ${maxPln} PLN</span>
      </div>
    `;
  }
  const pln = usdToPln(priceStr);
  return `
    <div class="card-price-wrapper">
      <span class="card-price-usd">${priceStr}</span>
      <span class="card-price-pln">≈ ${pln} PLN</span>
    </div>
  `;
}

let currentSort = "default";
let currentMinPrice = null;
let currentMaxPrice = null;

function applyFiltersAndSort() {
  currentSort = document.getElementById("sortSelect")?.value || "default";
  const minInput = document.getElementById("minPrice");
  const maxInput = document.getElementById("maxPrice");
  currentMinPrice = minInput && minInput.value ? parseFloat(minInput.value) : null;
  currentMaxPrice = maxInput && maxInput.value ? parseFloat(maxInput.value) : null;
  renderProducts();
}

function clearPriceFilter() {
  const minInput = document.getElementById("minPrice");
  const maxInput = document.getElementById("maxPrice");
  const sortSelect = document.getElementById("sortSelect");
  
  if (minInput) minInput.value = "";
  if (maxInput) maxInput.value = "";
  
  currentMinPrice = null;
  currentMaxPrice = null;
  
  if (sortSelect) {
    sortSelect.value = "default";
    currentSort = "default";
  }
  
  renderProducts();
}

function setCategory(cat) {
  category = cat;
  document.querySelectorAll('.cat-btn').forEach(btn => btn.classList.remove('active'));
  const activeBtn = document.querySelector(`[onclick="setCategory('${cat}')"]`);
  if (activeBtn) activeBtn.classList.add('active');
  renderProducts();
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

// ============================================
// 🔍 LIGHTBOX - POWIĘKSZANIE ZDJĘĆ
// ============================================

function initLightbox() {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const closeBtn = document.querySelector('.lightbox-close');
  
  if (!lightbox) return;
  
  window.openLightbox = function(imgSrc) {
    lightboxImg.src = imgSrc;
    lightbox.classList.add('active');
    document.body.style.overflow = 'hidden';
  };
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    });
  }
  
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
  
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      lightbox.classList.remove('active');
      document.body.style.overflow = '';
    }
  });
}

// ============================================
// 🟢 GŁÓWNA FUNKCJA RENDERPRODUCTS (z lightboxem)
// ============================================

function renderProducts() {
  const grid = document.getElementById("grid");
  const search = document.getElementById("search")?.value.toLowerCase() || "";
  if (!grid) return;

  let filtered = products.filter(p => 
    (category === "All" || p.category === category) &&
    p.name.toLowerCase().includes(search)
  );
  
  if (currentMinPrice !== null || currentMaxPrice !== null) {
    filtered = filtered.filter(p => {
      const pricePLN = usdToPln(p.price);
      if (currentMinPrice !== null && pricePLN < currentMinPrice) return false;
      if (currentMaxPrice !== null && pricePLN > currentMaxPrice) return false;
      return true;
    });
  }
  
  if (currentSort === "price_asc") {
    filtered.sort((a, b) => parsePrice(a.price) - parsePrice(b.price));
  } else if (currentSort === "price_desc") {
    filtered.sort((a, b) => parsePrice(b.price) - parsePrice(a.price));
  }

  const productCountSpan = document.getElementById("productCount");
  if (productCountSpan) productCountSpan.textContent = filtered.length;

  if (filtered.length === 0) {
    grid.innerHTML = `<div class="loading">✨ Brak produktów w tej kategorii<br><span style="font-size: 12px; color: #444;">Spróbuj zmienić filtry</span></div>`;
    return;
  }

  grid.innerHTML = "";
  filtered.forEach(p => {
    const el = document.createElement("div");
    el.className = "card";
    let stars = "★".repeat(p.rating) + "☆".repeat(5 - p.rating);
    const tagHtml = p.tag ? `<div class="tag">${p.tag}</div>` : '';
    const priceHtml = formatPrice(p.price);
    const imgSrc = p.image && p.image !== "" ? p.image : "https://via.placeholder.com/300?text=No+Image";

    el.innerHTML = `
      <div class="card-img-wrapper" onclick="openLightbox('${imgSrc}')">
        <img src="${imgSrc}" alt="${escapeHtml(p.name)}" onerror="this.src='https://via.placeholder.com/300?text=No+Image'" loading="lazy">
        <div class="zoom-icon">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <circle cx="11" cy="11" r="8"/>
            <path d="m21 21-4.35-4.35"/>
            <path d="M11 8v6M8 11h6"/>
          </svg>
        </div>
      </div>
      ${tagHtml}
      <h3>${escapeHtml(p.name)}</h3>
      ${priceHtml}
      <div class="rating">${stars}</div>
      <a href="${p.link}" target="_blank" rel="noopener noreferrer">
        <button class="link"> Zobacz item</button>
      </a>
    `;
    grid.appendChild(el);
  });
}

// ============================================
// FUNKCJA KOPIOWANIA KODU
// ============================================

function copyCode() {
  const code = "archiverepss";
  navigator.clipboard.writeText(code).then(() => {
    const btn = document.querySelector('.copy-code');
    if (btn) {
      const originalText = btn.innerHTML;
      btn.innerHTML = '✅ Skopiowano!';
      setTimeout(() => {
        btn.innerHTML = originalText;
      }, 2000);
    }
  });
}

// ============================================
// OBSŁUGA PŁYWAJĄCEGO KOŁA
// ============================================

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

// ============================================
// POPUP REJESTRACYJNY
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  const popup = document.getElementById('popupOverlay');
  const closeBtn = document.getElementById('popupClose');
  
  const hasSeenPopup = sessionStorage.getItem('hasSeenKakobuyPopup');
  
  if (!hasSeenPopup && popup) {
    setTimeout(() => {
      popup.classList.add('active');
      sessionStorage.setItem('hasSeenKakobuyPopup', 'true');
    }, 1500);
  }
  
  if (closeBtn) {
    closeBtn.addEventListener('click', () => {
      if (popup) popup.classList.remove('active');
    });
  }
  
  if (popup) {
    popup.addEventListener('click', (e) => {
      if (e.target === popup) {
        popup.classList.remove('active');
      }
    });
  }
});

// ============================================
// OPTYMALIZACJA - DEBOUNCE DLA WYSZUKIWANIA
// ============================================

function debounce(func, wait) {
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

// ============================================
// LENIWE ŁADOWANIE OBRAZKÓW
// ============================================

function lazyLoadImages() {
  const images = document.querySelectorAll('.card-img-wrapper img');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const img = entry.target;
        img.loading = 'lazy';
        observer.unobserve(img);
      }
    });
  });
  images.forEach(img => observer.observe(img));
}

// ============================================
// INICJALIZACJA
// ============================================

document.addEventListener('DOMContentLoaded', () => {
  // Lightbox
  initLightbox();
  
  // Debounce dla wyszukiwania
  const searchInput = document.getElementById('search');
  if (searchInput) {
    const debouncedSearch = debounce(() => applyFiltersAndSort(), 300);
    searchInput.addEventListener('input', debouncedSearch);
  }
  
  // Renderuj produkty
  renderProducts();
  
  // Leniwe ładowanie obrazków po renderowaniu
  setTimeout(lazyLoadImages, 200);
});