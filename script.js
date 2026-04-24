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
    linkKakobuy: "https://ikako.vip/caj2t",
    linkUsfans: "https://usfans.com/product/3/6337195972?ref=TX9V9N",
    tag: "R1",
    rating: 5
  },
  {
    name: "Jordan 1 (A LOT OF CW)",
    category: "Shoes",
    price: "$73.65",
    image: "https://si.geilicdn.com/open1733523732-1234478995-573c000001937484b6860a8115b5_889_889.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7565902946&affcode=archivee",
    linkUsfans: "https://www.usfans.com/product/3/7565902946?ref=TX9V9N",
    tag: "LJR",
    rating: 5
  },
  {
    name: "ERD BLACK HOODIE",
    category: "Hoodies",
    price: "$30.75",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/19/181b5cf0ee0737cc3fce4a23f84a7eda.jpg",
    linkKakobuy: "https://ikako.vip/ct5va",
    linkUsfans: "https://www.usfans.com/product/3/7491911039?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 4
  },
  {
    name: "ERD EXPOSED CHRISTINA",
    category: "Hoodies",
    price: "$37",
    image: "https://img.alicdn.com/bao/uploaded/i3/2209401688377/O1CN01nzkhiG2BkixFHPEOI_!!2209401688377.jpg",
    linkKakobuy: "https://ikako.vip/2nz6h",
    linkUsfans: "https://www.usfans.com/product/2/1003002370207?ref=TX9V9N",
    tag: "BDSJ MADE",
    rating: 4
  },
  {
    name: "Jordan 3 (A LOT OF CW)",
    category: "Shoes",
    price: "$67",
    image: "https://si.geilicdn.com/wdseller1800766149-03d500000199ce69b8010a23041a_1004_1004.jpg",
    linkKakobuy: "https://ikako.vip/cuhud",
    linkUsfans: "https://www.usfans.com/product/3/7233181350?ref=TX9V9N",
    tag: "GX",
    rating: 5
  },
  {
    name: "Jordan 4 (A LOT OF CW)",
    category: "Shoes",
    price: "$68-82",
    image: "https://si.geilicdn.com/wdseller1800766149-751d00000199be1057b40a21146b_1189_1189.jpg",
    linkKakobuy: "https://ikako.vip/88hdn",
    linkUsfans: "https://www.usfans.com/product/3/6656410659?ref=TX9V9N",
    tag: "GX",
    rating: 5
  },
  {
    name: "AF1",
    category: "Shoes",
    price: "$33",
    image: "https://drop-up.pl/cdn/shop/files/air-force-1-low-07-triple-white-drop-up.webp?v=1721894137",
    linkKakobuy: "https://ikako.vip/ssh8w",
    linkUsfans: "https://www.usfans.com/product/3/7565952748?ref=TX9V9N",
    tag: "GX",
    rating: 5
  },
  {
    name: "AF1 X CDG",
    category: "Shoes",
    price: "$44",
    image: "https://si.geilicdn.com/wdseller1745861162-27f50000019ac1319b630a207569_1179_1180.jpg",
    linkKakobuy: "https://ikako.vip/ssh8w",
    linkUsfans: "https://www.usfans.com/product/3/7565952748?ref=TX9V9N",
    tag: "GX",
    rating: 5
  },
  {
    name: "AF1 CPFFM",
    category: "Shoes",
    price: "$57",
    image: "https://si.geilicdn.com/open1733523732-1234478995-01f900000193832a70b50a8133b5_1179_884.jpg",
    linkKakobuy: "https://ikako.vip/e2amc",
    linkUsfans: "https://www.usfans.com/product/3/7565944808?ref=TX9V9N",
    tag: "WWT",
    rating: 5
  },
  {
    name: "AF1 X NOCTA",
    category: "Shoes",
    price: "$41",
    image: "https://si.geilicdn.com/open1733523732-1234478995-7a39000001937dd368d70aa08290_1166_874.jpg?w=640&h=640",
    linkKakobuy: "https://ikako.vip/3nrke",
    linkUsfans: "https://www.usfans.com/product/3/7565928908?ref=TX9V9N",
    tag: "X",
    rating: 5
  },
  {
    name: "AF1 X SUPREME",
    category: "Shoes",
    price: "$38",
    image: "https://si.geilicdn.com/pcitem1845163825-537600000190c026304e0a210349_1080_816.jpg",
    linkKakobuy: "https://ikako.vip/fszb3",
    linkUsfans: "https://www.usfans.com/product/3/7611437475?ref=TX9V9N",
    tag: "OWF",
    rating: 5
  },
  {
    name: "KOBE 6",
    category: "Shoes",
    price: "$70",
    image: "https://si.geilicdn.com/wdseller1800766149-2794000001953e97c7b60a2305d8_2560_2560.jpg",
    linkKakobuy: "https://ikako.vip/9hmbf",
    linkUsfans: "https://www.usfans.com/product/3/7080344125?ref=TX9V9N",
    tag: "GX",
    rating: 5
  },
  {
    name: "AIR MAX 95 X CORTEIZ",
    category: "Shoes",
    price: "$32-37",
    image: "https://si.geilicdn.com/pcitem1743028401-3a130000019330171c080a20e2c5_800_800.jpg",
    linkKakobuy: "https://ikako.vip/gj2j3",
    linkUsfans: "https://www.usfans.com/product/3/7237972520?ref=TX9V9N",
    tag: "ST",
    rating: 5
  },
  {
    name: "AIR MAX 95",
    category: "Shoes",
    price: "$49-53",
    image: "https://si.geilicdn.com/wdseller1800766149-690900000199c3e75fae0a8133cc_1280_1708.jpg",
    linkKakobuy: "https://ikako.vip/bvejm",
    linkUsfans: "https://www.usfans.com/product/3/7228123603?ref=TX9V9N",
    tag: "GX",
    rating: 5
  },
  {
    name: "AIR MAX 97",
    category: "Shoes",
    price: "$34-71",
    image: "https://si.geilicdn.com/pcitem1854263096-5f2b00000195d8ec7db00a8133cc_1200_1200.jpg",
    linkKakobuy: "https://ikako.vip/zq4ez",
    linkUsfans: "https://www.usfans.com/product/3/7436015958?ref=TX9V9N",
    tag: "G/OWF",
    rating: 5
  },
  {
    name: "NIKE P-6000",
    category: "Shoes",
    price: "$27",
    image: "https://si.geilicdn.com/pcitem901870080011-253b000001955d587db00a23038e_1440_1440.jpg",
    linkKakobuy: "https://ikako.vip/ptjfm",
    linkUsfans: "https://www.usfans.com/product/3/7615088496?ref=TX9V9N",
    tag: "WM",
    rating: 5
  },
  {
    name: "NIKE SHOX",
    category: "Shoes",
    price: "$25-29",
    image: "https://si.geilicdn.com/weidian1558770107-0ee40000019ade43e4b10a21146b_1536_2048.jpg",
    linkKakobuy: "https://ikako.vip/gguwx",
    linkUsfans: "https://usfans.com/product/3/7242663953?ref=TX9V9N",
    tag: "BAYMAX",
    rating: 4
  },
  {
    name: "BOWER ERD MY ROLE IN THE HISTORY OF WAR",
    category: "Tshirts",
    price: "$17",
    image: "http://img.alicdn.com/imgextra/i1/2215800851954/O1CN018QAVxk1QIyyNrFm9j_!!2215800851954.jpg",
    linkKakobuy: "https://ikako.vip/b769n",
    linkUsfans: "https://usfans.com/product/2/904207049022?ref=TX9V9N",
    tag: "暗号made",
    rating: 5
  },
  {
    name: "NUMBER NINE NECKLACE TEE",
    category: "Tshirts",
    price: "$14",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN019apdfS1FEtZ2Pj4qE_!!2943390456.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D798219996153&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/798219996153?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "ERD ZIP UP HOODIE",
    category: "Hoodies",
    price: "$53",
    image: "https://image.goat.com/attachments/product_template_additional_pictures/images/101/162/977/medium/1431481_01.jpg.jpeg",
    linkKakobuy: "https://ikako.vip/6bp8e",
    linkUsfans: "https://usfans.com/product/2/968460730439?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  },
  {
    name: "NUMBER NINE  SHIELD HOODIE",
    category: "Hoodies",
    price: "$39",
    image: "https://img.alicdn.com/bao/uploaded/i3/2943390456/O1CN01tC9CQu1FEteE2U0KP_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/auvew",
    linkUsfans: "https://usfans.com/product/2/900434795081?ref=TX9V9N",
    tag: "LMYER",
    rating: 4.5
  },
  {
    name: "RICK OWENS SHOES",
    category: "Shoes",
    price: "$69.26 - $93",
    image: "https://si.geilicdn.com/open1268847658-1234478995-509a000001898d9e69790a230227_1080_1080.jpg",
    linkKakobuy: "https://ikako.vip/k7fpd",
    linkUsfans: "https://usfans.com/product/3/6502982488?ref=TX9V9N",
    tag: "GZ (EVGA)",
    rating: 4.5
  },
  {
    name: "PRADA CUPS",
    category: "Shoes",
    price: "$102",
    image: "https://si.geilicdn.com/wdseller1747999085-006a00000198db97d7040a20e273_1800_1800.jpg",
    linkKakobuy: "https://ikako.vip/2qazp",
    linkUsfans: "https://usfans.com/product/3/7512669491?ref=TX9V9N",
    tag: "BEST (ZZZTOP)",
    rating: 5
  },
  {
    name: "ERD PINK HOODIE",
    category: "Hoodies",
    price: "$31",
    image: "https://cdna.lystit.com/photos/sugar/92680392/enfants-riches-deprimes-Red-Logo-Hoodie.jpeg",
    linkKakobuy: "https://ikako.vip/g47ay",
    linkUsfans: "https://usfans.com/product/3/7493854628?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 4
  },
  {
    name: "NUMBER NINE SOVC HOODIE",
    category: "Hoodies",
    price: "$40",
    image: "https://img.alicdn.com/bao/uploaded/i2/2025450085/O1CN01eh7nHv1CUymor3p8e_!!2025450085.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D1017388726264&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/1017388726264?ref=TX9V9N",
    tag: "HONGSHENG",
    rating: 4
  },
  {
    name: "NUMBER NINE KNIGHT HOODIE",
    category: "Hoodies",
    price: "$40",
    image: "https://img.alicdn.com/bao/uploaded/i4/2943390456/O1CN01GsdOc11FEteLPRn3Z_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/jt96u",
    linkUsfans: "https://usfans.com/product/2/903317040153?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NUMBER NINE LION HOODIE",
    category: "Hoodies",
    price: "$40",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01aWiY7m1FEthKJs5lq~crop,0,125,768,768~_!!2943390456.jpg_400x400q85.jpg_.webp",
    linkKakobuy: "https://ikako.vip/8qtac",
    linkUsfans: "https://usfans.com/product/2/978531290245?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NUMBER NINE SOVC HOODIE",
    category: "Hoodies",
    price: "$38",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN018SyP5i1FEtZiTM8qt_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/mct72",
    linkUsfans: "https://usfans.com/product/2/811553641339?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NUMBER NINE SKULL HODIE",
    category: "Hoodies",
    price: "$62",
    image: "https://img.alicdn.com/bao/uploaded/i1/2200736549757/O1CN01RuSeJ72LwlWUhFC7U_!!2200736549757.jpg",
    linkKakobuy: "https://ikako.vip/usgae",
    linkUsfans: "https://usfans.com/product/2/999562619880?ref=TX9V9N",
    tag: "MADEBYSWAG",
    rating: 5
  },
  {
    name: "NUMBER NINE SKULL HODIE",
    category: "Hoodies",
    price: "$72",
    image: "https://img.alicdn.com/bao/uploaded/i3/2200736549757/O1CN01ZZcv0c2LwlVdmMKRt_!!2200736549757.jpg",
    linkKakobuy: "https://ikako.vip/hpcxu",
    linkUsfans: "https://usfans.com/product/2/983029238996?ref=TX9V9N",
    tag: "MADEBYSWAG",
    rating: 5
  },
  {
    name: "SUPREME X HYSTERIC GLAMOUR",
    category: "Hoodies",
    price: "$68",
    image: "https://www.theillest.pl/wp-content/uploads/2024/11/Supreme-HYSTERIC-GLAMOUR-Fall-Winter-2024-8.jpg",
    linkKakobuy: "https://ikako.vip/zmcw3",
    linkUsfans: "https://usfans.com/product/2/991484051490?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  },
  {
    name: "BALENCIAGA LIBERTY HOODIE",
    category: "Hoodies",
    price: "$59",
    image: "https://www.mytheresa.com/image/1094/1238/100/e4/P00948300.jpg",
    linkKakobuy: "https://ikako.vip/675xdy",
    linkUsfans: "https://usfans.com/product/3/7615282689?ref=TX9V9N",
    tag: "THUNDER",
    rating: 5
  },
  {
    name: "BALENCIAGA SOCCER HOODIE",
    category: "Hoodies",
    price: "$45",
    image: "https://img.alicdn.com/imgextra/i2/3550899246/O1CN01kSVru42IAiyacd2nn_!!3550899246.jpg",
    linkKakobuy: "https://ikako.vip/tu6eq",
    linkUsfans: "https://usfans.com/product/2/763706333392?ref=TX9V9N",
    tag: "APEXMADE",
    rating: 5
  },
  {
    name: "BALENCIAGA EBAY ZIP UP",
    category: "Hoodies",
    price: "$37",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/6/30c953eedcac829eb63ec806991c7705.jpg",
    linkKakobuy: "https://ikako.vip/ejmmu",
    linkUsfans: "https://usfans.com/product/2/895618734663?ref=TX9V9N",
    tag: "APEXMADE",
    rating: 5
  },
  {
    name: "BALENCIAGA FUR ZIP UP ",
    category: "Hoodies",
    price: "$56",
    image: "https://assets.allchinabuysheets.com/665f4b5bc53ebfd135d04b40/69273032577f2ab88a1b263b_6925d65b0f585962b0b359df_561506090_2228718664283514_9131020294079013372_n-removebg-preview.webp",
    linkKakobuy: "https://ikako.vip/dzwbm",
    linkUsfans: "https://usfans.com/product/2/917689868501?ref=TX9V9N",
    tag: "APEXMADE",
    rating: 5
  },
  {
    name: "BALENCIAGA X UNDER ARMOUR HOODIE",
    category: "Hoodies",
    price: "$36",
    image: "https://si.geilicdn.com/wdseller1258568610-00c80000019abd91f8330a2102c5_1080_1080.jpg",
    linkKakobuy: "https://ikako.vip/7wdhxf",
    linkUsfans: "https://usfans.com/product/3/7619183000?ref=TX9V9N",
    tag: "SATANMADE",
    rating: 5
  },
  {
    name: "BUDGET HELLSTAR HOODIES",
    category: "Hoodies",
    price: "$29",
    image: "https://img.alicdn.com/bao/uploaded/i4/2217139011106/O1CN01Nj651l1K2b1lhXqjp_!!2217139011106.jpg",
    linkKakobuy: "https://ikako.vip/zb326",
    linkUsfans: "https://usfans.com/product/2/770997590604?ref=TX9V9N",
    tag: "RANDOM BATCH",

  },
  {
    name: "JORDAN 11 (A LOT OF CW)",
    category: "Shoes",
    price: "$71 - $77",
    image: "https://si.geilicdn.com/wdseller1505219366-3bf100000194c160da770a210349_960_961.jpg",
    linkKakobuy: "https://ikako.vip/ba8ym",
    linkUsfans: "https://usfans.com/product/3/7564030699?ref=TX9V9N",
    tag: "LJR",
    rating: 5
  },
  {
    name: "DUNK'S",
    category: "Shoes",
    price: "$37 - $55",
    image: "https://si.geilicdn.com/wdseller1845163825-66b8000001903fab445a0a2303ee_1080_1080.jpg",
    linkKakobuy: "https://ikako.vip/my7mt",
    linkUsfans: "https://usfans.com/product/3/7614451240?ref=TX9V9N",
    tag: "M",
    rating: 5
  },
  {
    name: "DUNK'S",
    category: "Shoes",
    price: "$26 - $56",
    image: "https://si.geilicdn.com/open1850717273-1234478995-35c90000018f485757ce0a210298_1268_1268.jpg",
    linkKakobuy: "https://ikako.vip/cyv6p",
    linkUsfans: "https://usfans.com/product/3/7611445385?ref=TX9V9N",
    tag: "M",
    rating: 5
  },
  {
    name: "DUNK'S",
    category: "Shoes",
    price: "$41 - $56",
    image: "https://si.geilicdn.com/pcitem901759954358-72e3000001880535e0400a20e2c5_1170_1161.jpg",
    linkKakobuy: "https://ikako.vip/d9bkx",
    linkUsfans: "https://usfans.com/product/3/7614131537?ref=TX9V9N",
    tag: "M",
    rating: 5
  },
  {
    name: "Off-White Out Of Office",
    category: "Shoes",
    price: "$49.2",
    image: "https://si.geilicdn.com/wdseller2007014970-79a70000019c0b1721340a2304aa_800_800.jpg",
    linkKakobuy: "https://ikako.vip/465v6",
    linkUsfans: "https://usfans.com/product/3/7614176437?ref=TX9V9N",
    tag: "BEST",
    rating: 5
  },
  {
    name: "Off-White Be Right Back",
    category: "Shoes",
    price: "$47.67",
    image: "https://si.geilicdn.com/pcitem901805158979-0def00000190cd230fec0a239646_1080_1080.jpg",
    linkKakobuy: "https://ikako.vip/82zya",
    linkUsfans: "https://usfans.com/product/3/7614234423?ref=TX9V9N",
    tag: "BEST",
    rating: 5
  },
  {
    name: "Off - White Sneakers",
    category: "Shoes",
    price: "$54-57$",
    image: "https://si.geilicdn.com/open338847680-1234478995-594a00000183665a29f20a22d58f_2560_2560.jpg",
    linkKakobuy: "https://ikako.vip/uq5q5",
    linkUsfans: "https://usfans.com/product/3/5566288946?ref=TX9V9N",
    tag: "TOP/OWF",
    rating: 5
  },
  {
    name: "YEEZY SLIDE",
    category: "Shoes",
    price: "$18.63",
    image: "https://si.geilicdn.com/open1733523732-1234478995-3ea90000019379c005df0a8133b5_960_961.jpg",
    linkKakobuy: "https://ikako.vip/rhzsz",
    linkUsfans: "https://usfans.com/product/3/7565930820?ref=TX9V9N",
    tag: "GX",
    rating: 5
  },
  {
    name: "YEEZY FOAM RUNNER",
    category: "Shoes",
    price: "$21.73",
    image: "https://si.geilicdn.com/open1733523732-1234478995-06e9000001937481b6330a8133b5_2560_2504.jpg",
    linkKakobuy: "https://ikako.vip/vbznk",
    linkUsfans: "https://usfans.com/product/3/7565932674?ref=TX9V9N",
    tag: "LW",
    rating: 5
  },
  {
    name: "YEEZY 350",
    category: "Shoes",
    price: "$63",
    image: "https://si.geilicdn.com/wdseller1553163813-27780000018f2301c4040a2303ee_1290_1290.jpg",
    linkKakobuy: "https://ikako.vip/7w3ym",
    linkUsfans: "https://usfans.com/product/3/4480389146?ref=TX9V9N",
    tag: "LW/OG",
    rating: 5
  },
  {
    name: "YEEZY 500",
    category: "Shoes",
    price: "$59",
    image: "https://si.geilicdn.com/pcitem1437660918-07cf00000178b8495aca0a217216_4032_4030.jpg",
    linkKakobuy: "https://ikako.vip/avv4n",
    linkUsfans: "https://usfans.com/product/3/4345115341?ref=TX9V9N",
    tag: "LW",
    rating: 5
  },
  {
    name: "YEEZY 700 V2",
    category: "Shoes",
    price: "$59",
    image: "https://si.geilicdn.com/open1773336045-1234478995-552800000195f0f5d5c30aa0834c_1122_1122.jpg",
    linkKakobuy: "https://ikako.vip/xzgyc",
    linkUsfans: "https://usfans.com/product/3/7438739618?ref=TX9V9N",
    tag: "LW",
    rating: 5
  },
  {
    name: "RICK OWENS MEGA BUMPERS",
    category: "Shoes",
    price: "$119.09",
    image: "https://img.alicdn.com/bao/uploaded/i4/2073165527/O1CN01npjSp81qhQ9eM137S_!!2073165527.heic",
    linkKakobuy: "https://ikako.vip/r8y44",
    linkUsfans: "https://usfans.com/product/2/989070127428?ref=TX9V9N",
    tag: "ROK (BEST)",
    rating: 5
  },
  {
    name: "RICK OWENS GEOBASKETS",
    category: "Shoes",
    price: "$102",
    image: "https://img.alicdn.com/bao/uploaded/i3/2073165527/O1CN01gjVVAR1qhPwO82u0k_!!2073165527.jpg",
    linkKakobuy: "https://ikako.vip/2fn59",
    linkUsfans: "https://usfans.com/product/2/742989586219?ref=TX9V9N",
    tag: "ROK (BEST)",
    rating: 5
  },
  {
    name: "CHANEL RUNNER",
    category: "Shoes",
    price: "$86.35",
    image: "https://si.geilicdn.com/wdseller1913061311-2f7f00000195e1026f190a240147_2560_2560.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7435415609&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7435415609?ref=TX9V9N",
    tag: "BEST (ZZZTOP)",
    rating: 5
  },
  {
    name: "PHILIP PLEIN THUNDER HI-TOP RANDOM BATCH",
    category: "Shoes",
    price: "$76.55",
    image: "https://img.alicdn.com/bao/uploaded/i2/2212485637805/O1CN01MuaF1d27WkCqD1x3H_!!2212485637805.jpg",
    linkKakobuy: "https://ikako.vip/exqp5",
    linkUsfans: "https://usfans.com/product/2/758883089071?ref=TX9V9N",
    tag: "RANDOM BATCH",
    rating: 5
  },
  {
    name: "MARGIELA FUTURE",
    category: "Shoes",
    price: "$98.73",
    image: "https://si.geilicdn.com/wdseller901910887734-29320000019b653808960a23038e_1290_1290.jpg",
    linkKakobuy: "https://ikako.vip/fkxmb",
    linkUsfans: "https://usfans.com/product/3/7337653369?ref=TX9V9N",
    tag: "ANON",
    rating: 5
  },
  {
    name: "MAISON MIHARA",
    category: "Shoes",
    price: "$30",
    image: "https://si.geilicdn.com/pcitem1845163825-26ec00000195499ce70d0a20e273_1440_1440.jpg?w=400&h=400",
    linkKakobuy: "https://ikako.vip/qnv7v",
    linkUsfans: "https://usfans.com/product/3/7614479136?ref=TX9V9N",
    tag: "Z",
    rating: 5
  },
  {
    name: "MARGIELA GATS",
    category: "Shoes",
    price: "$64.13",
    image: "https://images.stockx.com/images/Maison-Margiela-Replica-Dark-Wash-Product.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1738193358",
    linkKakobuy: "https://ikako.vip/4jdjd",
    linkUsfans: "https://usfans.com/product/2/1027814116602?ref=TX9V9N",
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
    linkKakobuy: "https://ikako.vip/m988f",
    linkUsfans: "https://usfans.com/product/3/6230413247?ref=TX9V9N",
    tag: "GZ(EVGA)",
    rating: 5
  },
  {
    name: "ADIDAS SAMBA/GAZELLE/SPEZIAL",
    category: "Shoes",
    price: "$26.66",
    image: "https://si.geilicdn.com/wdseller1268847658-130d0000019c1e813cbb0a210256_1320_1320.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1268847658.v.weidian.com%2Fitem.html%3FitemID%3D7684300655&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7684300655?ref=TX9V9N",
    tag: "S2",
    rating: 5
  },
  {
    name: "ADIDAS SAMBA",
    category: "Shoes",
    price: "$20.06",
    image: "https://si.geilicdn.com/weidian1744790155-01e80000018b473df5600a231273_1080_810.jpg",
    linkKakobuy: "https://ikako.vip/cfec3",
    linkUsfans: "https://usfans.com/product/3/6735844511?ref=TX9V9N",
    tag: "VT",
    rating: 5
  },
  {
    name: "ADIDAS CAMPUS",
    category: "Shoes",
    price: "$25.08",
    image: "https://si.geilicdn.com/wdseller1541848429-5fdb000001869d59ac360a22d246_1284_1284.jpg",
    linkKakobuy: "https://ikako.vip/ydzgh",
    linkUsfans: "https://usfans.com/product/3/6104895106?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "NEW BALANCE 530",
    category: "Shoes",
    price: "$43.88",
    image: "https://si.geilicdn.com/pcitem1854263096-7b1e00000195dd73e3850a20e2c5_1200_1200.jpg",
    linkKakobuy: "https://ikako.vip/5azyb",
    linkUsfans: "https://usfans.com/product/3/7435542236?ref=TX9V9N",
    tag: "M",
    rating: 5
  },
  {
    name: "NEW BALANCE 990",
    category: "Shoes",
    price: "$41",
    image: "https://si.geilicdn.com/pcitem901870080011-39bf00000197227e34340a23047e_1440_1440.jpg",
    linkKakobuy: "https://ikako.vip/r2d6r",
    linkUsfans: "https://usfans.com/product/3/7611411555?ref=TX9V9N",
    tag: "ZC",
    rating: 5
  },
  {
    name: "NEW BALANCE 990",
    category: "Shoes",
    price: "$41",
    image: "https://si.geilicdn.com/pcitem901870080011-39bf00000197227e34340a23047e_1440_1440.jpg",
    link: "https://ikako.vip/r2d6r",
    linkUsfans: "https://usfans.com/product/3/7611411555?ref=TX9V9N",
    tag: "ZC",
    rating: 5
  },
  {
    name: "NEW BALANCE 9060",
    category: "Shoes",
    price: "$29",
    image: "https://si.geilicdn.com/pcitem901870080011-0f5900000197ccd442460a23041a_1440_1440.jpg",
    linkKakobuy: "https://ikako.vip/m75qc",
    linkUsfans: "https://usfans.com/product/3/7611481057?ref=TX9V9N",
    tag: "M",
    rating: 5
  },
  {
    name: "NEW BALANCE 1906",
    category: "Shoes",
    price: "$31",
    image: "https://si.geilicdn.com/wdseller1558770107-683f0000018f7d842c330a230417_1742_1739.jpg",
    linkKakobuy: "https://ikako.vip/f2988",
    linkUsfans: "https://usfans.com/product/3/7239672992?ref=TX9V9N",
    tag: "RANDOM BATCH",
    rating: 3.5
  },
  {
    name: "NEW BALANCE 2002",
    category: "Shoes",
    price: "$40-43",
    image: "https://si.geilicdn.com/wdseller901559461514-266c00000180deef08dd0a8134f0_1284_1285.jpg",
    linkKakobuy: "https://ikako.vip/89pb2",
    linkUsfans: "https://usfans.com/product/3/7616064965?ref=TX9V9N",
    tag: "ZC/M",
    rating: 5
  },
  {
    name: "LANVIN LEATHER CURB",
    category: "Shoes",
    price: "$75",
    image: "https://si.geilicdn.com/wdseller1425026222-4ca70000018909df212e0a231565_2560_2560.jpg",
    linkKakobuy: "https://ikako.vip/8a84f",
    linkUsfans: "https://usfans.com/product/3/7617138156?ref=TX9V9N",
    tag: "FOSHAN",
    rating: 5
  },
  {
    name: "LV TRAINER",
    category: "Shoes",
    price: "$76",
    image: "https://si.geilicdn.com/pcitem1710010242-1de500000198412384980a230115_1840_1840.jpg",
    linkKakobuy: "https://ikako.vip/gj47w",
    linkUsfans: "https://usfans.com/product/3/5925479942?ref=TX9V9N",
    tag: "FOSHAN",
    rating: 5
  },
  {
    name: "LV SKATE",
    category: "Shoes",
    price: "$72",
    image: "https://si.geilicdn.com/weidian1710010242-62d800000188ac29f0b60a231179_1496_1496.jpg",
    linkKakobuy: "https://ikako.vip/eqwhz",
    linkUsfans: "https://usfans.com/product/3/6386513161?ref=TX9V9N",
    tag: "FOSHAN",
    rating: 5
  },
  {
    name: "UGG",
    category: "Shoes",
    price: "$26 - $40 ",
    image: "https://si.geilicdn.com/pcitem901870080011-25c6000001990c6cb29b0a20e7c7_1080_1080.jpg",
    linkKakobuy: "https://ikako.vip/2eqst",
    linkUsfans: "https://usfans.com/product/3/7615231442?ref=TX9V9N",
    tag: "TOP",
    rating: 5
  },
  {
    name: "ASICS GEL KAYANO 14",
    category: "Shoes",
    price: "$37.61 ",
    image: "https://si.geilicdn.com/wdseller1845163825-6813000001930325d8200a8134f0_1179_1179.jpg",
    linkKakobuy: "https://ikako.vip/m2avv",
    linkUsfans: "https://usfans.com/product/3/7614280923?ref=TX9V9N",
    tag: "ZC",
    rating: 5
  },
  {
    name: "ASICS GEL NYC",
    category: "Shoes",
    price: "$36 ",
    image: "https://si.geilicdn.com/pcitem1845163825-774f000001988d52d82f0a81347d_1440_1440.jpg",
    linkKakobuy: "https://ikako.vip/k99a6",
    linkUsfans: "https://usfans.com/product/3/7614453260?ref=TX9V9N",
    tag: "ZC",
    rating: 5
  },
  {
    name: "NUMERIS",
    category: "Shoes",
    price: "$60 ",
    image: "https://si.geilicdn.com/pcitem1809160355-344300000197e7a863740a20e273_4279_4376.jpg",
    linkKakobuy: "https://ikako.vip/7dpc7s",
    linkUsfans: "https://usfans.com/product/3/7550731290?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "BALENCIAGA RUNNER 7.0",
    category: "Shoes",
    price: "$69 ",
    image: "https://si.geilicdn.com/wdseller1268847658-287900000187c2f2271f0a20e273-unadjust_1170_1170.gif",
    linkKakobuy: "https://ikako.vip/5hmve",
    linkUsfans: "https://usfans.com/product/3/6223355835?ref=TX9V9N",
    tag: "XA",
    rating: 5
  },
  {
    name: "BALENCIAGA TRACK 2.0",
    category: "Shoes",
    price: "$75 ",
    image: "https://si.geilicdn.com/open1268847658-1234478995-1b7200000196303502cc0a23b4de_769_767.jpg",
    linkKakobuy: "https://ikako.vip/6278e",
    linkUsfans: "https://usfans.com/product/3/7447859512?ref=TX9V9N",
    tag: "VG",
    rating: 5
  },
  {
    name: "BALENCIAGA TRACK",
    category: "Shoes",
    price: "$60 ",
    image: "https://si.geilicdn.com/wdseller1268847658-37100000018adde9cc270a20e273-unadjust_1170_1170.gif",
    linkKakobuy: "https://ikako.vip/xqj28",
    linkUsfans: "https://usfans.com/product/3/6665205608?ref=TX9V9N",
    tag: "VG",
    rating: 5
  },
  {
    name: "BALENCIAGA TRACK LED",
    category: "Shoes",
    price: "$76 ",
    image: "https://si.geilicdn.com/wdseller1268847658-38100000018adde920f70a23034c_1170_1170.jpg",
    linkKakobuy: "https://ikako.vip/57u8s",
    linkUsfans: "https://usfans.com/product/3/6664103067?ref=TX9V9N",
    tag: "VG",
    rating: 4
  },
  {
    name: "HYSTERIC GLAMOUR STRAWBERRY HOODIE",
    category: "Hoodies",
    price: "$58",
    image: "https://img.alicdn.com/bao/uploaded/i2/2126072107/O1CN01fFyu291RR3c2VDKOd~hdr~_!!2126072107.heic",
    linkKakobuy: "https://ikako.vip/24jdd",
    linkUsfans: "https://usfans.com/product/2/962214060243?ref=TX9V9N",
    tag: "BDSS",
    rating: 5
  },
  {
    name: "HYSTERIC GLAMOUR REVERSIBLE FUR HOODIE",
    category: "Hoodies",
    price: "$69",
    image: "https://img.alicdn.com/bao/uploaded/i1/2126072107/O1CN01rwzcst1RR3bu8hZy7_!!2126072107.png",
    linkKakobuy: "https://ikako.vip/zjvkm",
    linkUsfans: "https://usfans.com/product/2/989002046259?ref=TX9V9N",
    tag: "BDSS",
    rating: 5
  },
  {
    name: "HYSTERIC GLAMOUR HEADACHE HOODIE",
    category: "Hoodies",
    price: "$40",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01z6bJYX1FEti8NG0Fq_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/x52n4",
    linkUsfans: "https://usfans.com/product/2/994038198668?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "SP5DER PINK HOODIE",
    category: "Hoodies",
    price: "$42",
    image: "https://img.alicdn.com/bao/uploaded/i1/2219813327674/O1CN01kBCXn826YkT4irGlc_!!2219813327674.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D929834666023&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/929834666023?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  },
  {
    name: "SP5DER x TRAVIS SCOTT RODERO HOODIE",
    category: "Hoodies",
    price: "$42",
    image: "https://img.alicdn.com/bao/uploaded/i2/2219813327674/O1CN01GVmRBd26YkVqaLfGR_!!2219813327674.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D992371547557&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/992371547557?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  },
  {
    name: "SP5DER RHINESTONE HOODIE",
    category: "Hoodies",
    price: "$45",
    image: "https://img.alicdn.com/bao/uploaded/i1/2219813327674/O1CN01azRhoa26YkVqZGFgm_!!2219813327674.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D992372979833&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/992372979833?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  },
  {
    name: "SUPREME SATIN APPLIQUE HOODIE",
    category: "Hoodies",
    price: "$40",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/23/afe7fda8ee5b94ac8692ad51017f5bd1.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D982922629033&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/1037213558758?ref=TX9V9N",
    tag: "DRAGONREP",
    rating: 5
  },
  {
    name: "SUPREME SIMON HOODIE",
    category: "Hoodies",
    price: "$55",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTvJl2QewvbqDauViL0QQqH2nE_J4Yol5VixQ&s",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D982010867316&affcode=archivee",
    linkUsfans: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D982010867316&affcode=archivee",
    tag: "DRAGONREP",
    rating: 5
  },
  {
    name: "CHROME HEARTS USA HOODIE",
    category: "Hoodies",
    price: "$46",
    image: "https://n-hype.com/cdn/shop/files/Chrome_Hearts_USA_Flag_Thermal_Black_Zip-up_Hoodie_Showroom_NHype_Lodz_Polska_1800x1800.png?v=1718778366",
    linkKakobuy: "https://ikako.vip/nmtan",
    linkUsfans: "https://usfans.com/product/3/7644624191?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  },
  {
    name: "CHROME HEARTS HOODIE",
    category: "Hoodies",
    price: "$46",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202511/29/fe1c33a49608f3c31f683f10a1dd34cd.jpg",
    linkKakobuy: "https://ikako.vip/dbudg",
    linkUsfans: "https://usfans.com/product/3/7619790982?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  },
  {
    name: "CHROME HEARTS DEADLY DOLL HOODIE",
    category: "Hoodies",
    price: "$42",
    image: "https://shengliroadmarket.com/cdn/shop/products/chrome-hearts-deadly-doll-pink-cross-scroll-logo-zip-up-hoodie-433121.jpg?v=1704692844",
    linkKakobuy: "https://ikako.vip/eztq3",
    linkUsfans: "",
    tag: "TOPHOT",
    rating: 5
  },
  {
    name: "CHROME HEARTS HOODIE",
    category: "Hoodies",
    price: "$43",
    image: "https://media-photos.depop.com/b1/34953571/1405202588_a0646994b5d14e8fa6d6d03bba9c6d9f/P0.jpg",
    linkKakobuy: "https://ikako.vip/2pm5s",
    linkUsfans: "https://usfans.com/product/3/7577183147?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  },
  {
    name: "RICK OWENS HOODIE",
    category: "Hoodies",
    price: "$41",
    image: "https://img.alicdn.com/bao/uploaded/i1/62314016/O1CN01e9pAON1fXNjKDiAAl_!!62314016.jpg",
    linkKakobuy: "https://ikako.vip/9nekn",
    linkUsfans: "https://usfans.com/product/2/719090541518?ref=TX9V9N",
    tag: "RANDOM",
  
  },
  {
    name: "RICK OWENS WIZARD HOODIE",
    category: "Hoodies",
    price: "$41",
    image: "https://img.alicdn.com/bao/uploaded/i4/62314016/O1CN01acQlrm1fXNTge4elY_!!62314016.jpg",
    linkKakobuy: "https://ikako.vip/7a3v6",
    linkUsfans: "https://usfans.com/product/2/575200851719?ref=TX9V9N",
    tag: "RANDOM",
  
  },
  {
    name: "RICK OWENS SUBHUMAN HOODIE",
    category: "Hoodies",
    price: "$39",
    image: "https://img.alicdn.com/bao/uploaded/i3/62314016/O1CN01OVNA0I1fXNf0akPcv_!!62314016.jpg",
    linkKakobuy: "https://ikako.vip/ghbm5",
    linkUsfans: "https://usfans.com/product/2/622741344038?ref=TX9V9N",
    tag: "RANDOM",
  
  },

  {
    name: "DIOR HOMME SS07 BRUCE LEE HOODIE",
    category: "Hoodies",
    price: "$34",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/25/987caa4325a3033d07db37d9cdca1547.jpg",
    linkKakobuy: "https://ikako.vip/k9crx",
    linkUsfans: "https://usfans.com/product/2/1005968004844?ref=TX9V9N",
    tag: "RANDOM",
  
  },
  {
    name: "VETEMENTS SEXUAL FANTASIES",
    category: "Hoodies",
    price: "$58",
    image: "https://img.alicdn.com/bao/uploaded/i4/3822597683/O1CN014fPBij26cs22QmStU_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/8c7vs",
    linkUsfans: "https://usfans.com/product/2/757296152278?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  
  },
  {
    name: "VETEMENTS MTB HOODIE",
    category: "Hoodies",
    price: "$59",
    image: "https://img.alicdn.com/bao/uploaded/i4/3822597683/O1CN01Yhu5J226cs1sovJJR_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/xkucr",
    linkUsfans: "https://usfans.com/product/2/851411609247?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  
  },
  {
    name: "VETEMENTS ELEVEN INCH GUN CLUB GRAY",
    category: "Hoodies",
    price: "$59",
    image: "https://img.alicdn.com/bao/uploaded/i2/3822597683/O1CN01UPBPBu26crxz53r1G_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/nsudt",
    linkUsfans: "https://usfans.com/product/2/757458682100?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  
  },
  {
    name: "VETEMENTS ELEVEN INCH GUN CLUB BLACK",
    category: "Hoodies",
    price: "$59",
    image: "https://img.alicdn.com/bao/uploaded/i2/3822597683/O1CN01pGP7R726cs20IAU16_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/nhy34",
    linkUsfans: "https://usfans.com/product/2/847058966068?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  
  },
  {
    name: "VETEMENTS FREE HUGS",
    category: "Hoodies",
    price: "$59",
    image: "https://img.alicdn.com/bao/uploaded/i2/3822597683/O1CN018aIb1226cs3zM1v6p~hdr~_!!3822597683.heic",
    linkKakobuy: "https://ikako.vip/fgp89",
    linkUsfans: "https://usfans.com/product/2/975859231733?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  
  },
  {
    name: "VETEMENTS ECTASY HOODIE",
    category: "Hoodies",
    price: "$62",
    image: "https://img.alicdn.com/bao/uploaded/i3/3410334215/O1CN01rlgq9M1h0WOJUe6PP_!!3410334215.jpg",
    linkKakobuy: "https://ikako.vip/ywje3",
    linkUsfans: "https://usfans.com/product/2/818847955308?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "HELLSTAR TOUR HOODIE",
    category: "Hoodies",
    price: "$47",
    image: "https://image.ceneostatic.pl/data/products/165027476/i-hellstar-tour-hoodie-xl.jpg",
    linkKakobuy: "https://ikako.vip/rsvfq",
    linkUsfans: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D805788377027&affcode=archivee",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "HELLSTAR BRAINWASHED PINK HOODIE",
    category: "Hoodies",
    price: "$66",
    image: "https://images.stockx.com/images/Hellstar-Brainwashed-With-Brain-Hoodie-Pink.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&q=60&dpr=1&trim=color&updated_at=1692432898",
    linkKakobuy: "https://ikako.vip/26z7v",
    linkUsfans: "https://usfans.com/product/2/848047282943?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "1000GSM DOUBLE LAYER BLANK HOODIE",
    category: "Hoodies",
    price: "$56",
    image: "https://img.alicdn.com/bao/uploaded/i4/808386976/O1CN01zulWYB21P44MltpmS_!!808386976.jpg",
    linkKakobuy: "https://ikako.vip/b7gtj",
    linkUsfans: "https://usfans.com/product/2/873123071835?ref=TX9V9N",
    tag: "UNIONKINGDOM",
    rating: 5
  
  },
  {
    name: "360GSM BLANK HOODIE",
    category: "Hoodies",
    price: "$25",
    image: "https://img.alicdn.com/bao/uploaded/i1/808386976/O1CN01Z31Ese21P44B6wCSa_!!808386976.jpg",
    linkKakobuy: "https://ikako.vip/jdar4",
    linkUsfans: "https://usfans.com/product/2/1004825376861?ref=TX9V9N",
    tag: "UNIONKINGDOM",
    rating: 5
  
  },
  {
    name: "480GSM BLANK HOODIE",
    category: "Hoodies",
    price: "$34",
    image: "https://img.alicdn.com/bao/uploaded/i4/808386976/O1CN01xJiAAp21P44PkivwB_!!808386976.jpg",
    linkKakobuy: "https://ikako.vip/d65q6",
    linkUsfans: "https://usfans.com/product/2/1010660774172?ref=TX9V9N",
    tag: "UNIONKINGDOM",
    rating: 5
  
  },
  {
    name: "630GSM BLANK HOODIE",
    category: "Hoodies",
    price: "$37",
    image: "https://img.alicdn.com/bao/uploaded/i3/808386976/O1CN01yn8oxv21P3z1hfHon_!!808386976.jpg",
    linkKakobuy: "https://ikako.vip/v8tnp",
    linkUsfans: "https://usfans.com/product/2/852400435273?ref=TX9V9N",
    tag: "UNIONKINGDOM",
    rating: 5
  
  },
  {
    name: "AKIMBO WHITE HOODIE",
    category: "Hoodies",
    price: "$29",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/13/9bb1203a492c88a9272183207842e6ae.jpg",
    linkKakobuy: "https://ikako.vip/ph9jr",
    linkUsfans: "https://usfans.com/product/3/7573186226?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "AKIMBO BLACK HOODIE",
    category: "Hoodies",
    price: "$29",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/1/cc78d72496fef80b9adb516e3b559444.jpg",
    linkKakobuy: "https://ikako.vip/yjdtx",
    linkUsfans: "https://usfans.com/product/2/989184075287?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "RAF SIMONS NEW ORDER HOODIE",
    category: "Hoodies",
    price: "$75",
    image: "https://img.alicdn.com/bao/uploaded/i3/2200736549757/O1CN01fQtofd2LwlX2BV5UF_!!2200736549757.jpg",
    linkKakobuy: "https://ikako.vip/agxty",
    linkUsfans: "https://usfans.com/product/2/1013935249594?ref=TX9V9N",
    tag: "MADEBYSWAG",
    rating: 5
  
  },
  {
    name: "RAF SIMONS ROOTS HOODIE",
    category: "Hoodies",
    price: "$75",
    image: "http://img.alicdn.com/imgextra/i3/2200736549757/O1CN01C04sop2LwlX7Dmw5p_!!2200736549757.jpg",
    linkKakobuy: "https://ikako.vip/68ntw",
    linkUsfans: "https://usfans.com/product/2/1016842344982?ref=TX9V9N",
    tag: "MADEBYSWAG",
    rating: 5
  
  },
  {
    name: "RAF SIMONS VIRGINIA CREEPER CREWNECK",
    category: "Hoodies",
    price: "$62",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/18/87db2535902729346f1b20f54751989d.jpg",
    linkKakobuy: "https://ikako.vip/myvhe3",
    linkUsfans: "https://usfans.com/product/2/994217483421?ref=TX9V9N",
    tag: "MADEBYSWAG",
    rating: 5
  
  },
  {
    name: "PEACE IN WAR CHERRY BLOSSOM HOODIE",
    category: "Hoodies",
    price: "$31",
    image: "https://si.geilicdn.com/wdseller1995625455-017a0000019b0db3cdb80a2303ea_1290_1720.jpg",
    linkKakobuy: "https://ikako.vip/9ngyc",
    linkUsfans: "https://usfans.com/product/3/7630589589?ref=TX9V9N",
    tag: "ALIEN",
    rating: 5
  
  },
  {
    name: "PEACE IN WAR FUCK THE INDUSTRY HOODIE",
    category: "Hoodies",
    price: "$32.76",
    image: "https://si.geilicdn.com/wdseller1995625455-03d40000019b0db7d7b00a2102b1_1290_1720.jpg",
    linkKakobuy: "https://ikako.vip/kassc",
    linkUsfans: "https://usfans.com/product/3/7633602044?ref=TX9V9N",
    tag: "ALIEN",
    rating: 5
  
  },
  {
    name: "PEACE IN WAR WINTER WAR HOODIE",
    category: "Hoodies",
    price: "$32.6",
    image: "https://si.geilicdn.com/wdseller1995625455-5b8a0000019b5e45a2bb0a2395e9_1290_1720.jpg",
    linkKakobuy: "https://ikako.vip/pjby8",
    linkUsfans: "https://usfans.com/product/3/7644491945?ref=TX9V9N",
    tag: "ALIEN",
    rating: 5
  
  },
  {
    name: "PEACE IN WAR SWEDEN HOODIE",
    category: "Hoodies",
    price: "$31.03",
    image: "https://si.geilicdn.com/wdseller1995625455-4a6200000199b48e9dbe0a2301f1_1290_1720.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7567731360%26wfr%3Dc&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7567731360?ref=TX9V9N",
    tag: "ALIEN",
    rating: 5
  
  },
  {
    name: "BURBERRY BLACK HOODIE",
    category: "Hoodies",
    price: "$48.27",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202509/13/6be7311acca5546e85446e84396a055b.jpg",
    linkKakobuy: "https://ikako.vip/9znptv",
    linkUsfans: "https://usfans.com/product/3/7524095139?ref=TX9V9N",
    tag: "THUNDER",
    rating: 5
  
  },
  {
    name: "BURBERRY GREY HOODIE",
    category: "Hoodies",
    price: "$50.93",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/26/bb6e3a8cb6932b8b81a8bcbfdca839f0.jpg",
    linkKakobuy: "https://ikako.vip/s7kpd",
    linkUsfans: "https://usfans.com/product/3/7638068345?ref=TX9V9N",
    tag: "THUNDER",
    rating: 5
  
  },

  {
    name: "SUPREME X BURBERRY",
    category: "Hoodies",
    price: "$48.27",
    image: "https://sneakerman.store/wp-content/uploads/2024/10/supreme-x-burberry-box-logo-hooded-sweatshirt-heather-grey-1200x1321.webp",
    linkKakobuy: "https://ikako.vip/vnfeq",
    linkUsfans: "https://usfans.com/product/3/7638048551?ref=TX9V9N",
    tag: "THUNDER",
    rating: 5
  
  },
  {
    name: "BURBERRY ZIP UP HOODIE",
    category: "Hoodies",
    price: "$50.93",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/25/7c0d044a539812b3b2d5eb77a7f0addc.jpg",
    linkKakobuy: "https://ikako.vip/zjmxnf",
    linkUsfans: "https://usfans.com/product/3/7578098348?ref=TX9V9N",
    tag: "THUNDER",
    rating: 5
  
  },

  {
    name: "ESSENTIALS X NBA HOODIE",
    category: "Hoodies",
    price: "$24.29",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/11/b02c219556fa4b16065c111d9828b494.jpg",
    linkKakobuy: "https://ikako.vip/tgsvs",
    linkUsfans: "https://usfans.com/product/1/983505698307?ref=TX9V9N",
    tag: "YISHAN",
    rating: 3
  
  },
  {
    name: "ESSENTIALS FOG",
    category: "Hoodies",
    price: "$36.24",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/21/e18f98ce66ec33a026096aae8e59cee0.jpg",
    linkKakobuy: "https://ikako.vip/9jecu",
    linkUsfans: "https://usfans.com/product/2/997580740112?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 4
  
  },
  {
    name: "ESSENTIALS FOG",
    category: "Hoodies",
    price: "$31",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/11/b7239d9756a065d5d55db2b307947615.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D978371331776&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/978371331776?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 4
  
  },
  {
    name: "ESSENTIALS FOG",
    category: "Hoodies",
    price: "$34.84",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/11/802a6f35780b40baf23b8b6e34068ca0.jpg",
    linkKakobuy: "https://ikako.vip/rqe7wa",
    linkUsfans: "https://usfans.com/product/2/962642256864?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 4
  
  },
  {
    name: "RALPH LAUREN ZIPPER HOODIE",
    category: "Hoodies",
    price: "$27.54",
    image: "https://si.geilicdn.com/open1831762514-252808396-13a1000001935930c3280aa08290_1239_1241.jpg",
    linkKakobuy: "https://ikako.vip/rfy5a",
    linkUsfans: "https://usfans.com/product/3/7597038790?ref=TX9V9N",
    tag: "NEWDP",
    rating: 4
  
  },
  {
    name: "RALPH LAUREN FLEECE HOODIE",
    category: "Hoodies",
    price: "$23.35",
    image: "https://si.geilicdn.com/wdseller1980586073-3daf00000199cdc9028d0a2304aa_1170_1170.jpg",
    linkKakobuy: "https://ikako.vip/na9y9",
    linkUsfans: "https://usfans.com/product/3/7567964285?ref=TX9V9N",
    tag: "NEWDP",
    rating: 4
  
  },
  {
    name: "BROKEN PLANET NOT FROM HERE ",
    category: "Hoodies",
    price: "$32.76",
    image: "https://si.geilicdn.com/wdseller1746487736-7f870000019ae9e68b210a21146b_1179_1179.jpg",
    linkKakobuy: "https://ikako.vip/sprp4",
    linkUsfans: "https://usfans.com/product/3/7627920146?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "BROKEN PLANET MOON PHASE",
    category: "Hoodies",
    price: "$32.76",
    image: "https://si.geilicdn.com/wdseller1746487736-2220000001956987605d0a23041a_1170_1170.jpg",
    linkKakobuy: "https://ikako.vip/9q9e8",
    linkUsfans: "https://usfans.com/product/3/7409966155?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "BROKEN PLANET ZIP UP HOODIE",
    category: "Hoodies",
    price: "$34.32",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/17/0c05c924d34c2c57735613ff7b958e6b.jpg",
    linkKakobuy: "https://ikako.vip/89xdp",
    linkUsfans: "https://usfans.com/product/3/7342492758?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "SYNA HOODIE",
    category: "Hoodies",
    price: "$25.81",
    image: "https://si.geilicdn.com/wdseller1274221412-6c8b0000019170bc30be0a2393d9_1284_1284.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7261685985%26wfr%3Dc&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7261685985?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "I LOVE SYNA HOODIE",
    category: "Hoodies",
    price: "$31",
    image: "https://si.geilicdn.com/wdseller1274221412-15d2000001976435d3200a22d58f_1284_1284.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7491890348%26wfr%3Dc&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7491890348?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "SYNA X NEM RENTS DUE HOODIE",
    category: "Hoodies",
    price: "$30",
    image: "https://si.geilicdn.com/wdseller1936187346-365c00000198ef2e82950a2301b4_1373_1373.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7656816950&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7656816950?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "SUPREME X MM6",
    category: "Hoodies",
    price: "$62.72",
    image: "https://images.stockx.com/images/Supreme-MM6-Maison-Margiela-Zip-Up-Hooded-Sweatshirt-Black.jpg?fit=fill&bg=FFFFFF&w=700&h=500&fm=webp&auto=compress&q=90&dpr=2&trim=color&updated_at=1744142786",
    linkKakobuy: "https://ikako.vip/t64fj",
    linkUsfans: "https://usfans.com/product/2/992804497721?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "MERTRA HOODIE",
    category: "Hoodies",
    price: "$36",
    image: "https://si.geilicdn.com/wdseller1940384309-770900000199d2b5e7b60a230449_1320_1320.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1739784557.v.weidian.com%2Fitem.html%3FitemID%3D7569423015&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7569423015?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "MERTRA X UMBRO HOODIE",
    category: "Hoodies",
    price: "$36",
    image: "https://si.geilicdn.com/wdseller1940384309-15220000019ae55ad4570a230215_1320_1320.jpg",
    linkKakobuy: "https://ikako.vip/faqpu",
    linkUsfans: "https://usfans.com/product/3/7626932092?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  
  },
  
  //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE //NIKE//NIKE

  {
    name: "ERD MULHOLLAND T-SHIRT",
    category: "Tshirts",
    price: "$25.7",
    image: "https://img.alicdn.com/bao/uploaded/i1/3550899246/O1CN01A49ALr2IAj5LKXF92_!!3550899246.jpg",
    linkKakobuy: "https://ikako.vip/9ene7",
    linkUsfans: "https://usfans.com/product/2/933818787049?ref=TX9V9N",
    tag: "APEXMADE",
    rating: 5
  
  },
  {
    name: "ERD T-SHIRT",
    category: "Tshirts",
    price: "$20.22",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/5/8fa95a38b94c6c65549b40660032db9b.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7491984689&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7491984689?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 4
  
  },
  {
    name: "ERD CHRISTINA T-SHIRT",
    category: "Tshirts",
    price: "$19.12",
    image: "https://img.alicdn.com/bao/uploaded/i2/2214656006513/O1CN011G8Otv1xz0blTvUkr_!!2214656006513.jpg",
    link: "https://ikako.vip/xapqq",
    linkUsfans: "https://usfans.com/product/2/887414307607?ref=TX9V9N",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "CHROME HEARTS T-SHIRT",
    category: "Tshirts",
    price: "$28",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/18/7614d9903500303cd30469a9e0e7717a.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7506477680&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7506477680?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "CHROME HEARTS T-SHIRT",
    category: "Tshirts",
    price: "$28.05",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/14/289102da081ca2571c46a84d1f82aad8.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7504593741&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7504593741?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "CHROME HEARTS T-SHIRT",
    category: "Tshirts",
    price: "$28.05",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202509/15/e312e36ff34100469743281690df01d0.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7505571487&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7505571487?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  
  },


  {
    name: "NUMBER NINE SOVC TEE",
    category: "Tshirts",
    price: "$20.79",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01B0RHgZ1FEtc0ZsHLP_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/gujga",
    linkUsfans: "https://usfans.com/product/2/850232694076?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  
  },
  {
    name: "UNDERCOVER TEE",
    category: "Tshirts",
    price: "$10",
    image: "https://img.alicdn.com/bao/uploaded/i2/2217964616975/O1CN01F56UB321ObbEM5ji2~crop,338,0,1899,2532~_!!2217964616975.jpg",
    linkKakobuy: "https://ikako.vip/drx57",
    linkUsfans: "https://usfans.com/product/2/895661620416?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "UNDERCOVER KLAUS TEE",
    category: "Tshirts",
    price: "$20.57",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01FxjFJU1FEtW2R4hRn_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/rwawv",
    linkUsfans: "https://usfans.com/product/2/675214000065?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  
  },
  {
    name: "UNDERCOVER GURUGURU",
    category: "Tshirts",
    price: "$15.87",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01bCYjdF1FEtVrAiEHL_!!2943390456.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D645671108769&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/645671108769?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  
  },
  {
    name: "GOTHAM TEE",
    category: "Tshirts",
    price: "$20.87",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01Mh3Dpd1FEtc2vVoCn_!!2943390456.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D850109331994&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/850109331994?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  
  },
  {
    name: "NUMBER NINE KURT TEE",
    category: "Tshirts",
    price: "$14.29",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01Fs4sxm1FEtb1nSbQO_!!2943390456.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D834164734264&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/834164734264?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  
  },
  {
    name: "GIVENCHY T-SHIRT",
    category: "Tshirts",
    price: "$28",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202507/30/d9ad15c50bafde4199670bd8167141c3.jpg",
    linkKakobuy: "https://ikako.vip/rbfcm",
    linkUsfans: "https://usfans.com/product/3/7400847823?ref=TX9V9N",
    tag: "BACKSTUDIO",
    rating: 5
  
  },
  {
    name: "ESSENTIALS T-SHIRTS",
    category: "Tshirts",
    price: "$20.63",
    image: "https://img.alicdn.com/bao/uploaded/i4/2219953490549/O1CN01Yvv4p51FvUWKVHMx9_!!2219953490549.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D962636024464&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/962636024464?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "ESSENTIALS T-SHIRTS",
    category: "Tshirts",
    price: "$20.86",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/21/5000a6f78c898bdf535f4cbcb730065e.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D962039057752&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/962039057752?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "ESSENTIALS T-SHIRTS (BUDGET BATCH)",
    category: "Tshirts",
    price: "$8.59",
    image: "https://img.alicdn.com/bao/uploaded/i1/2075710764/O1CN01TmCj9b1HVxKvJL8ZN_!!2075710764.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fcnfans.com%2Fproduct%2F%3Fshop_type%3Dtaobao%26id%3D668913880734&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/668913880734?ref=TX9V9N",
    tag: "BUDGET",
    rating: 3
  
  },
  {
    name: "RALPH LAUREN T-SHIRTS",
    category: "Tshirts",
    price: "$12.38",
    image: "https://si.geilicdn.com/open1831762514-252808396-37160000019359434ee50aa0834c_978_1024.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1852083541.v.weidian.com%2Fitem.html%3FitemID%3D7596975464%26spider_token%3D4592&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7596975464?ref=TX9V9N",
    tag: "NEWDP",
    rating: 5
  
  },
  {
    name: "RALPH LAUREN POLO",
    category: "Tshirts",
    price: "$20.22",
    image: "https://si.geilicdn.com/wdseller1595179932-06af0000019759d8e5370a230115_1170_1170.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1852083541.v.weidian.com%2Fitem.html%3FitemID%3D7595170179&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7595170179?ref=TX9V9N",
    tag: "NEWDP",
    rating: 5
  
  },
  {
    name: "VETEMENTS INTERPOL TEE",
    category: "Tshirts",
    price: "$32.76",
    image: "https://img.alicdn.com/imgextra/https://img.alicdn.com/imgextra/i4/3410334215/O1CN01z6vrDX1h0WOiAv5WA_!!3410334215.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D824732030088",
    linkUsfans: "",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "SYNA WORLD PLAYBOY T-SHIRT",
    category: "Tshirts",
    price: "$12",
    image: "https://img.alicdn.com/bao/uploaded/i2/2200616171702/O1CN018kCAEI1ORZ4zgd6WC_!!2200616171702.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D819278430583&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/819278430583?ref=TX9V9N",
    tag: "BEST",
    rating: 5
  
  },
  {
    name: "SYNA X PSG T-SHIRT",
    category: "Tshirts",
    price: "$12.23",
    image: "https://si.geilicdn.com/wdseller1274221412-3d860000019614d0152a0a2102b1_1284_1284.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1274221412.v.weidian.com%2Fitem.html%3FitemID%3D7443980484&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7443980484?ref=TX9V9N",
    tag: "BEST",
    rating: 5
  
  },
  {
    name: "SYNA BLACK T-SHIRT",
    category: "Tshirts",
    price: "$12.23",
    image: "https://si.geilicdn.com/wdseller1274221412-6f2900000192fba736a60a230246_1284_1284.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1274221412.v.weidian.com%2Fitem.html%3FitemID%3D7298162199&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7298162199?ref=TX9V9N",
    tag: "BEST",
    rating: 5
  
  },
  {
    name: "NIKE X STUSSY T-SHIRT",
    category: "Tshirts",
    price: "$14.89",
    image: "https://si.geilicdn.com/open1804138897-1234478995-1839000001900cbb3a7b0a8133b5_800_800.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7243919380&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7243919380?ref=TX9V9N",
    tag: "RANDOM BATCH",
    rating: 4
  
  },
  {
    name: "STUSSY T-SHIRTS",
    category: "Tshirts",
    price: "$7.06",
    image: "https://si.geilicdn.com/pcitem901870080011-5c1e000001979bb785ea0a8134f0_1180_1572.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fk.youshop10.com%2FKfGo8Zl4&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7614423490?ref=TX9V9N",
    tag: "YOLO",
    rating: 4
  
  },
  {
    name: "SP5DER OG WEB V2 GRAY TEE",
    category: "Tshirts",
    price: "$16.06",
    image: "https://img.alicdn.com/bao/uploaded/i3/2219813327674/O1CN013L2ggE26YkUE7zWaG_!!2219813327674.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D931241172963&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/931241172963?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "SP5DER X TRAVIS CACTUS JACK",
    category: "Tshirts",
    price: "$16.73",
    image: "https://img.alicdn.com/bao/uploaded/i2/2219813327674/O1CN01UGy4hV26YkT5zYhNU_!!2219813327674.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D930374774167&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/930374774167?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "SP5DER TEE",
    category: "Tshirts",
    price: "$9.41",
    image: "https://img.alicdn.com/imgextra/i1/2212715957798/O1CN01WlY4l327TXW9PW7at_!!2212715957798.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D823211569627&affcode=archivee",
    linkUsfans: "",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "CORTEIZ HEAVYWEIGHT TEE",
    category: "Tshirts",
    price: "$17.27",
    image: "https://img.alicdn.com/bao/uploaded/i4/3105353542/O1CN01f52U491c2Hv6O2aCe_!!3105353542.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D921974523491%26pisk%3Dg&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/921974523491?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ CAN'T RUSH TEE",
    category: "Tshirts",
    price: "$12.58",
    image: "https://img.alicdn.com/bao/uploaded/i1/3105353542/O1CN01WQKHfq1c2HuCZedyJ_!!3105353542.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D899613948225%26sku_properties%3D1627207%253A37183560801&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/899613948225?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ ITALIA TEE",
    category: "Tshirts",
    price: "$12.23",
    image: "https://si.geilicdn.com/wdseller1936187346-08d8000001988d7354380a23111a_1288_1288.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1833725707.v.weidian.com%2Fitem.html%3FitemID%3D7653791465&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7653791465?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ BBK TEE",
    category: "Tshirts",
    price: "$13.32",
    image: "https://si.geilicdn.com/wdseller1936187346-574f000001991dcde8250a23037f_1290_1290.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1833725707.v.weidian.com%2Fitem.html%3FitemID%3D7656820910&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7656820910?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ SANTAN ALCATRAZ TEE",
    category: "Tshirts",
    price: "$13.32",
    image: "https://si.geilicdn.com/wdseller1936187346-0edc0000019aaa7bfd990a231177_1320_1320.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1833725707.v.weidian.com%2Fitem.html%3FitemID%3D7653884243&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7653884243?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ RSLM TEE",
    category: "Tshirts",
    price: "$12.23",
    image: "https://si.geilicdn.com/wdseller1936187346-44ad0000019ace2f775f0a210139_1320_1320.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1833725707.v.weidian.com%2Fitem.html%3FitemID%3D7656862294&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7656862294?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  
  {
    name: "CDG TEE",
    category: "Tshirts",
    price: "$20.62",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01vmC0951FEtQNWRf5j_!!2943390456.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D706505282193&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/706505282193?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  
  },
  {
    name: "CDG PLAY TEE",
    category: "Tshirts",
    price: "$22.93",
    image: "https://img.alicdn.com/bao/uploaded/i3/2220706226099/O1CN01rAsnnL1uvOh82eklG_!!2220706226099.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D974955606875&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/974955606875?ref=TX9V9N",
    tag: "REPBROS",
    rating: 5
  
  },
  {
    name: "CDG DOUBLE HEARTS",
    category: "Tshirts",
    price: "$22.5",
    image: "https://img.alicdn.com/bao/uploaded/i2/2220706226099/O1CN01e2HvS31uvOh7Cx4Eo_!!2220706226099.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D976288568920&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/976288568920?ref=TX9V9N",
    tag: "REPBROS",
    rating: 5
  
  },
  {
    name: "CDG PLAY TEES",
    category: "Tshirts",
    price: "$19.46",
    image: "https://img.alicdn.com/bao/uploaded/i4/2220706226099/O1CN019YyHZ01uvOh7HyhDp_!!2220706226099.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D974427059839&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/974427059839?ref=TX9V9N",
    tag: "REPBROS",
    rating: 5
  
  },
  {
    name: "CDG PLAY TEE",
    category: "Tshirts",
    price: "$22.52",
    image: "https://img.alicdn.com/bao/uploaded/i1/2220706226099/O1CN01F6vyZ21uvOh7iPfPv_!!2220706226099.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D976313608209&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/976313608209?ref=TX9V9N",
    tag: "REPBROS",
    rating: 5
  
  },
  {
    name: "GALLERY DEPT TSHIRTS (BUDGET)",
    category: "Tshirts",
    price: "$14.15",
    image: "https://img.alicdn.com/bao/uploaded/i2/2217139011106/O1CN01rLyBXN1K2b1ufD22p_!!2217139011106.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D771007293616&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/771007293616?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  
  },
  {
    name: "PALM ANGELS TSHIRTS (BUDGET)",
    category: "Tshirts",
    price: "$14.15",
    image: "https://img.alicdn.com/bao/uploaded/i4/2217139011106/O1CN01ImpDF51K2azrRaWIl_!!2217139011106.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D770939300665&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/770939300665?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  
  },
  
  {
    name: "FORTNITE X BALENCIAGA (RANDOM/BUDGET)",
    category: "Tshirts",
    price: "$31.19",
    image: "https://si.geilicdn.com/wdseller1024195542-7f15000001814d53603a0a22b3e4_1124_1500.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D4980473884&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/4980473884?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "BALENCIAGA PULL UP PANTS",
    category: "Shorts",
    price: "$69.07",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/25/54ed7f4ebe9c6436bf64b82e1a493b6b.jpg",
    linkKakobuy: "https://ikako.vip/yg962",
    linkUsfans: "https://usfans.com/product/2/929721448972?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "BALENCIAGA BLUE FLARED LOST TAPES",
    category: "Shorts",
    price: "$62.96",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/2e1e9a448e834633f20451e8996d735a.jpg",
    linkKakobuy: "https://ikako.vip/7zk79",
    linkUsfans: "https://usfans.com/product/2/992032162249?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "BALENCIAGA FITTED GEORGE V LOW WAIST PANTS",
    category: "Shorts",
    price: "$65.76",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/21/53fd709cf6ccc48d1922844fd88800dd.jpg",
    linkKakobuy: "https://ikako.vip/u2csv",
    linkUsfans: "https://usfans.com/product/2/982782878822?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "BUDGET BALENCIAGA BAGGY JEANS",
    category: "Shorts",
    price: "$21.42",
    image: "https://img.alicdn.com/bao/uploaded/i4/402758480/O1CN010zXoKN2CVtV2JeZT1_!!402758480.jpg",
    linkKakobuy: "https://ikako.vip/an9zs",
    linkUsfans: "https://usfans.com/product/2/731719229196?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  
  },
  {
    name: "BALENCIAGA DOUBLE WAIST SWEATPANTS",
    category: "Shorts",
    price: "$56.14",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/a34e2928fe9e5b409c2cd43551fb0d14.jpg",
    linkKakobuy: "https://ikako.vip/zc3nz",
    linkUsfans: "https://usfans.com/product/2/1009307628825?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "BALENCIAGA FLARED JEANS (BUDGET)",
    category: "Shorts",
    price: "$25",
    image: "https://img.alicdn.com/bao/uploaded/i1/2214514093/O1CN01iiHQSF1g6dzXIV2Gj_!!2214514093.jpg",
    linkKakobuy: "https://ikako.vip/z6naf",
    linkUsfans: "https://usfans.com/product/2/746738710664?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  
  },
  {
    name: "BALENCIAGA CUT UP JEANS",
    category: "Shorts",
    price: "$82",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/26/0fb129ef5dc14a4f903db78713952641.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fe.tb.cn%2Fh.SJOZrGOcmZOEBIX%3Ftk%3Dwi7xf7YnCzH&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/991471795146?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "PURPLE BRAND JEANS (WM179)",
    category: "Shorts",
    price: "$40.75",
    image: "https://si.geilicdn.com/pcitem453299265-22dd0000019afa3b95f30a23111a_500_500.jpg",
    linkKakobuy: "https://ikako.vip/2cb9f",
    linkUsfans: "https://usfans.com/product/3/7553919705?ref=TX9V9N",
    tag: "HENGYU",
    rating: 5
  
  },
  {
    name: "PURPLE BRAND JEANS (WM178)",
    category: "Shorts",
    price: "$41",
    image: "https://si.geilicdn.com/pcitem453299265-20050000019afa3b80360a2303ee_500_500.jpg",
    linkKakobuy: "https://ikako.vip/2cb9f",
    linkUsfans: "https://usfans.com/product/3/7553919705?ref=TX9V9N",
    tag: "HENGYU",
    rating: 5
  
  },
  {
    name: "PURPLE BRAND JEANS(PB141)",
    category: "Shorts",
    price: "$41",
    image: "https://si.geilicdn.com/pcitem453299265-417500000198053f14a20a23111a_1200_1200.jpg",
    linkKakobuy: "https://ikako.vip/7dh9b",
    linkUsfans: "https://usfans.com/product/3/7491274425?ref=TX9V9N",
    tag: "HENGYU",
    rating: 5
  
  },
  {
    name: "PURPLE BRAND JEANS (WM131)",
    category: "Shorts",
    price: "$41",
    image: "https://si.geilicdn.com/pcitem453299265-4c9d000001996672c29e0a2303ee_4168_4168.jpg",
    linkKakobuy: "https://ikako.vip/2cb9f",
    linkUsfans: "https://usfans.com/product/3/7553919705?ref=TX9V9N",
    tag: "HENGYU",
    rating: 5
  
  },
  {
    name: "MIJKO PATCH JEANS",
    category: "Shorts",
    price: "$22",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/15/140d728f36b7fa7716cc73b1bfdecf47.jpg",
    linkKakobuy: "https://ikako.vip/pdyhvd",
    linkUsfans: "https://usfans.com/product/1/948138886155?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "ACNE 1981M VINTAGE BLACK",
    category: "Shorts",
    price: "$53",
    image: "https://preview.redd.it/rep-topacney-vs-retail-comparison-acne-studios-1981m-v0-2e3k8p3tz1de1.jpg?width=640&crop=smart&auto=webp&s=0aa242d0926cb170c02200f94939f8e03fa789f4",
    linkKakobuy: "https://ikako.vip/byp9n",
    linkUsfans: "https://usfans.com/product/2/992822993831?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "ACNE 2010M BLACK",
    category: "Shorts",
    price: "$53",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/18/ef2e323b80ef60a1376681f3da89032e.jpg",
    linkKakobuy: "https://ikako.vip/bp8nd",
    linkUsfans: "https://usfans.com/product/2/990470996019?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  
  },
  ,
  {
    name: "ACNE 1981 PAINT SPLATTER",
    category: "Shorts",
    price: "$53",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/13/39dbf5ea52bed1b15138a5bd0a7d6359.jpg",
    linkKakobuy: "https://ikako.vip/sguec",
    linkUsfans: "",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "ACNE STUDIOS 1989 ASH BLACK",
    category: "Shorts",
    price: "$49.35",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/21/c2bd75caab75d5b830465224b0d69bda.jpg",
    linkKakobuy: "https://ikako.vip/2qjzzy",
    linkUsfans: "https://usfans.com/product/2/988425102964?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "ESSENTIALS PANTS (BUDGET)",
    category: "Shorts",
    price: "$18.81",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/3ff28cfd0ce1bdc77444552311e3ed6d.jpg",
    linkKakobuy: "https://ikako.vip/gqh67",
    linkUsfans: "https://usfans.com/product/1/863899956013?ref=TX9V9N",
    tag: "BUDGET",
    rating: 3
  
  },
  {
    name: "ESSENTIALS FOG PANTS",
    category: "Shorts",
    price: "$28.38",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/6/125c4d37e99863a1509cd2ea48d04914.jpg",
    linkKakobuy: "https://ikako.vip/gud2k",
    linkUsfans: "https://usfans.com/product/2/982345933138?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "ESSENTIALS FOG PANTS",
    category: "Shorts",
    price: "$32",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/24/c14bfc2bee51c3135cc38d019d83d4dd.jpg",
    linkKakobuy: "https://ikako.vip/j5fy8",
    linkUsfans: "https://usfans.com/product/2/961424550932?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "ESSENTIALS FOG SWEATPANTS",
    category: "Shorts",
    price: "$34",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/8/ad612033899daad33e1289c3ba8f933a.jpg",
    linkKakobuy: "https://ikako.vip/3xyzy",
    linkUsfans: "https://usfans.com/product/2/997582040779?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "ESSENTIALS X NBA SWEATPANTS",
    category: "Shorts",
    price: "$31.66",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/11/20260c12685cf9313b18d60cce827bd5.jpg",
    linkKakobuy: "https://ikako.vip/n77sp",
    linkUsfans: "https://usfans.com/product/2/934691849861?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "RICK OWENS SUBHUMAN WAXED PANTS",
    category: "Shorts",
    price: "$34.17",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/8/28b72f710ddd559c7f062da4aae71937.jpg",
    linkKakobuy: "https://ikako.vip/8rb6r",
    linkUsfans: "https://usfans.com/product/1/582710282139?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "RICK OWENS DRKSHDW JEANS",
    category: "Shorts",
    price: "$28",
    image: "https://img.alicdn.com/bao/uploaded/i4/2214514093/O1CN01Mw6ugI1g6e9yzqzbr_!!2214514093.jpg",
    linkKakobuy: "https://ikako.vip/xrfzt",
    linkUsfans: "https://usfans.com/product/2/936846585403?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "RICK OWENS PANTS",
    category: "Shorts",
    price: "$34.48",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/6/ae41f484f522f921f4f6434444778709.jpg",
    linkKakobuy: "https://ikako.vip/8qyny",
    linkUsfans: "https://usfans.com/product/1/736006892046?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "RICK OWENS PANTS",
    category: "Shorts",
    price: "$49.99",
    image: "https://si.geilicdn.com/pcitem1487039158-331200000196a90ffc680a20e7c7_800_800.jpg",
    linkKakobuy: "https://ikako.vip/4vm26",
    linkUsfans: "https://usfans.com/product/3/6602507923?ref=TX9V9N",
    tag: "PINK ELEPHANT",
    rating: 4
  
  },
  {
    name: "RICK OWENS PANTS",
    category: "Shorts",
    price: "$58",
    image: "https://img.alicdn.com/bao/uploaded/i1/62314016/O1CN01nLKBFG1fXNMak3ugp_!!62314016.jpg",
    linkKakobuy: "https://ikako.vip/5fgu4",
    linkUsfans: "https://usfans.com/product/2/613071908927?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "GUCCI DEMNA BLACK JEANS",
    category: "Shorts",
    price: "$63.5",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/26/ab1bd2aea8baab67c337ea8110c87103.jpg",
    linkKakobuy: "https://ikako.vip/4na4r",
    linkUsfans: "https://usfans.com/product/2/1000766846017?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "GUCCI DEMNA JEANS",
    category: "Shorts",
    price: "$63.5",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/25/41d1bb469c2875b723dd64d5839b48ff.jpg",
    linkKakobuy: "https://ikako.vip/4na4r",
    linkUsfans: "https://usfans.com/product/2/1000766846017?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  
  },
  {
    name: "GALLERY DEPT SWEATPANTS (BUDGET)",
    category: "Shorts",
    price: "$30.78",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/20/3897ba39e80549745b2d931aad7e38a8.jpg",
    linkKakobuy: "https://ikako.vip/w6nrz",
    linkUsfans: "https://usfans.com/product/2/756275697322?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  
  },
  {
    name: "GALLERY DEPT PANTS",
    category: "Shorts",
    price: "$48.07",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/19/4ea0ec8e7e5f2b07e8255ca310236cc5.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D821375995617&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/821375995617?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "HELLSTAR UNIFORM PANTS",
    category: "Shorts",
    price: "$55",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202507/27/697b7b347c5aa8789840344516f33bd5.jpg",
    linkKakobuy: "https://ikako.vip/sjqrn",
    linkUsfans: "https://usfans.com/product/2/835085163698?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "HELLSTAR PANTS",
    category: "Shorts",
    price: "$28.06",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/13/2c6efc36b1fc6bbab51bfddf9ccc3c67.jpg",
    linkKakobuy: "https://ikako.vip/zb326",
    linkUsfans: "https://usfans.com/product/2/770997590604?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "TRUE RELIGION JEANS",
    category: "Shorts",
    price: "$27",
    image: "https://img.alicdn.com/bao/uploaded/i4/2404365569/O1CN01Dd5upM1r0egErRCpf_!!2404365569.jpg",
    linkKakobuy: "https://ikako.vip/yn4wj",
    linkUsfans: "https://usfans.com/product/2/593013405795?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "NIKE X STUSSY SWEATPANTS",
    category: "Shorts",
    price: "$23.55",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/16/0236cfe2a833020b9233c5441ae5f14c.jpg",
    linkKakobuy: "https://ikako.vip/7czwr",
    linkUsfans: "https://usfans.com/product/3/7595061507?ref=TX9V9N",
    tag: "NEWDP",
    rating: 4
  
  },
  {
    name: "NIKE X NOCTA",
    category: "Shorts",
    price: "$25.08",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/11/4465525b6a49c60f138d8bee4cfbbfd6.jpg",
    linkKakobuy: "https://ikako.vip/h3w3s",
    linkUsfans: "https://usfans.com/product/1/837019488337?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "CORTEIZ GUERILLAZ CARGO PANTS",
    category: "Shorts",
    price: "$43.88",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/9/05dda5b8928b791df52bc298fa7b1840.jpg",
    linkKakobuy: "https://ikako.vip/b4s9d",
    linkUsfans: "https://usfans.com/product/3/7656781400?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ EMBOSED C-STAR DENIM",
    category: "Shorts",
    price: "$35.89",
    image: "https://si.geilicdn.com/wdseller1936187346-12330000019a674967b40a239846_1320_1320.jpg",
    linkKakobuy: "https://ikako.vip/2y6u86",
    linkUsfans: "https://usfans.com/product/3/7656858326?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ ROAYLE CREST OPEN SWEATPANTS",
    category: "Shorts",
    price: "$27.43",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/22/6795ee0c3d44f905fd543e42ca9cf564.jpg",
    linkKakobuy: "https://ikako.vip/jw4vs",
    linkUsfans: "https://usfans.com/product/3/7653903977?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ DENIM JEANS DARK WASH",
    category: "Shorts",
    price: "$35.89",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/21/1fec263c6b4af69f3a3401f541eb7f10.jpg",
    linkKakobuy: "https://ikako.vip/njcur",
    linkUsfans: "https://usfans.com/product/3/7656848442?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ ISLAND BAGGY JEANS",
    category: "Shorts",
    price: "$33.75",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/13/3d5cdcb2effe9b1c5d235e1285f8d37a.jpg",
    linkKakobuy: "https://ikako.vip/wu8sf",
    linkUsfans: "https://usfans.com/product/3/7656903616?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ ALCATRAZ SWEATPANTS",
    category: "Shorts",
    price: "$27.74",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/15/2eea76dbabf0b1eca9dbdadb941dd325.jpg",
    linkKakobuy: "https://ikako.vip/zejc3",
    linkUsfans: "https://usfans.com/product/2/811879541348?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ 4 STAR CARGOS",
    category: "Shorts",
    price: "44.37",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202508/15/70a0e74fa8004d6c3c3676b910eb7f95.jpg",
    linkKakobuy: "https://ikako.vip/avxp6",
    linkUsfans: "https://usfans.com/product/2/811602863567?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "PALM ANGELS PANTS",
    category: "Shorts",
    price: "20.6",
    image: "https://img.alicdn.com/bao/uploaded/i1/574102188/O1CN010s0FJx1S29g8lHaPK_!!574102188.jpg",
    linkKakobuy: "https://ikako.vip/r57j9",
    linkUsfans: "https://usfans.com/product/2/773739418622?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "THE NORTH FACE 1996 VEST",
    category: "Jackets",
    price: "28.21",
    image: "https://si.geilicdn.com/wdseller901828721618-4d7100000192201ef5a30a239646_1442_1444.jpg",
    linkKakobuy: "https://ikako.vip/6yhwt",
    linkUsfans: "https://usfans.com/product/3/7614207799?ref=TX9V9N",
    tag: "TOP",
    rating: 5
  
  },
  {
    name: "TNF 1996 RETRO NUPTSE 700",
    category: "Jackets",
    price: "42.31",
    image: "https://si.geilicdn.com/pcitem1425026222-3ec000000199e4a07d640a20e2c5_1440_1440.jpg",
    linkKakobuy: "https://ikako.vip/y6w24",
    linkUsfans: "https://usfans.com/product/3/7617186136?ref=TX9V9N",
    tag: "TOP",
    rating: 5
  
  },
  {
    name: "ARCTERYX BLACK SL",
    category: "Jackets",
    price: "63",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/23/6f83f9e1502b15462c9d8132157c4b6a.jpg",
    linkKakobuy: "https://ikako.vip/mcegm",
    linkUsfans: "https://usfans.com/product/3/7639314314?ref=TX9V9N",
    tag: "DREAMREMAKE",
    rating: 5
  
  },
  {
    name: "Derschutze Denim Pants",
    category: "Shorts",
    price: "$32.91",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/99f0e3e1b3574f6ed874f6cba2305bcc.jpg",
    linkKakobuy: "https://ikako.vip/8j95q8",
    linkUsfans: "https://usfans.com/product/3/7627220799?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "Derschutze blue Denim Pants",
    category: "Shorts",
    price: "$32.91",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/31/6d865564526a5a676882dd6cd609facb.jpg",
    linkKakobuy: "https://ikako.vip/fpsdy",
    linkUsfans: "https://usfans.com/product/3/7619232142?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "Derschutze Western Jogger",
    category: "Shorts",
    price: "$32.91",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/ad5cf687195083e02bf18eecb6740cb2.jpg",
    linkKakobuy: "https://ikako.vip/z3g2x",
    linkUsfans: "https://usfans.com/product/3/7428893156?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "Derschutze Denim Pants",
    category: "Shorts",
    price: "$32.91",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/14e6f3fb99a8b11cf8dcf951f7c96f39.jpg",
    linkKakobuy: "https://ikako.vip/f5hec",
    linkUsfans: "https://usfans.com/product/3/7526934664?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "Ralph Lauren Suit Pants",
    category: "Shorts",
    price: "$24.51",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/559e31f4b72c116d181bfd30ef77e851.jpg",
    linkKakobuy: "https://ikako.vip/vxpf4u",
    linkUsfans: "https://usfans.com/product/3/7595166141?ref=TX9V9N",
    tag: "NEWDP",
    rating: 5
  
  },
  {
    name: "Ralph Lauren FLeece Pants",
    category: "Shorts",
    price: "$21.79",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/24/adafb0606dea315046027c9d39baeaea.jpg",
    linkKakobuy: "https://ikako.vip/ep3p5",
    linkUsfans: "https://usfans.com/product/3/7570327918?ref=TX9V9N",
    tag: "NEWDP",
    rating: 5
  
  },
  {
    name: "Ralph Lauren Pants",
    category: "Shorts",
    price: "$21.79",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/b3b5c401937392c718e40bbd14b5971c.jpg",
    linkKakobuy: "https://ikako.vip/j7dpx",
    linkUsfans: "https://usfans.com/product/3/7558813458?ref=TX9V9N",
    tag: "NEWDP",
    rating: 5
  
  },
  {
    name: "BPM RENT'S DUE PANTS",
    category: "Shorts",
    price: "$28.99",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/2/cd56a7fa0e73e86b596b5e69de6d6dc9.jpg",
    linkKakobuy: "https://ikako.vip/f5yw8",
    linkUsfans: "https://usfans.com/product/3/7409905283?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "BPM PANTS ALL THE STARS",
    category: "Shorts",
    price: "$31.19",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202511/30/c2ce72f87d12679b12048bb059796047.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1621342910.v.weidian.com%2Fitem.html%3FitemID%3D7499784900&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7499784900?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "HYSTERIC GLAMOUR HAGI JEANS",
    category: "Shorts",
    price: "$64.18",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/21/6611d64c5141dd3bae6bdfb05b5c2c91.jpg",
    linkKakobuy: "https://ikako.vip/zqt64",
    linkUsfans: "https://usfans.com/product/2/988104391140?ref=TX9V9N",
    tag: "BDSS",
    rating: 5
  
  },
  {
    name: "BALENCIAGA SHORTS",
    category: "Shorts",
    price: "$18.65",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/14/67ab0f21735bbada4796e8a5723f6d83.jpg",
    linkKakobuy: "https://ikako.vip/e3wcb",
    linkUsfans: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7242666854&affcode=archivee",
    tag: "SATANMADE",
    rating: 5
  
  },
  {
    name: "BALENCIAGA SHORTS",
    category: "Shorts",
    price: "$34.17",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202508/25/c101b6e35b82ad64eed0589c6ec742a0.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7519004840%26spider_token%3D8dbf&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7519004840?ref=TX9V9N",
    tag: "THUNDER",
    rating: 5
  
  },
  {
    name: "BALENCIAGA SHORTS",
    category: "Shorts",
    price: "$32.6",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/18/10f059bf1e46c242e52a9784466bd5a3.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7499057490%26spider_token%3Da6ee&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7499057490?ref=TX9V9N",
    tag: "THUNDER",
    rating: 5
  
  },
  {
    name: "BALENCIAGA SHORTS",
    category: "Shorts",
    price: "$42",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202509/2/c1dfbc22d5b6d0fd9466ab6969479fc7.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7497106511%26spider_token%3Df58f&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7497106511?ref=TX9V9N",
    tag: "THUNDER",
    rating: 5
  
  },
  {
    name: "BALENCIAGA SHORTS",
    category: "Shorts",
    price: "$34.42",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/24/c7de5443bfae1f2aaa028671d078de7f.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7618065701%26wfr%3Dc&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7618065701?ref=TX9V9N",
    tag: "THUNDER",
    rating: 5
  
  },
  {
    name: "BALENCIAGA SHORTS",
    category: "Shorts",
    price: "$35.89",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/30/c0bbe2344e541f395d0b5e6c2c1101d3.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7604006524%26wfr%3Dc&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7604006524?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "BALENCIAGA DOUBLE WAIST SHORTS",
    category: "Shorts",
    price: "$28.05",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/13/a90014fb24db666980977a8e5a6917b6.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7510584472%26wfr%3Dc&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7510584472?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 4
  
  },
  {
    name: "ESSENTIALS NBA SHORTS",
    category: "Shorts",
    price: "$14.11",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/26/b5787adaa03393adb57326c6b41d5a6a.jpg",
    linkKakobuy: "https://ikako.vip/apvuy",
    linkUsfans: "https://usfans.com/product/1/983502446561?ref=TX9V9N",
    tag: "YISHAN",
    rating: 4
  
  },
  {
    name: "ESSENTIALS FOG SHORTS",
    category: "Shorts",
    price: "$23.95",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/114450d1949c026e2889fc048bbcb7ea.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D962037909233&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/962037909233?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "ESSENTIALS FOG SHORTS",
    category: "Shorts",
    price: "$27",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/c4b3acab7da80306ff239e225b14fa5f.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D934124406348&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/934124406348?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "ESSENTIALS FOG SHORTS",
    category: "Shorts",
    price: "$27",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/28/5d81b84ec4734a2de9c94bc0814f42b7.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7254715223%26wfr%3Dc&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7254715223?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "GALLERY DEPT SHORTS",
    category: "Shorts",
    price: "$32.76",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202505/24/e69e06249af5084e7e44e981011e1d41.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D923514622610&affcode=archivee",
    linkUsfans: "",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "BPM WASHED SHORTS",
    category: "Shorts",
    price: "$29",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202507/19/91f12c173cca026989a4ea6afcf5820f.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1621342910.v.weidian.com%2Fitem.html%3FitemID%3D7342141752&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7342141752?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "BPM SUN LOGO SHORTS",
    category: "Shorts",
    price: "$21.16",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/16/fbce57d171dc0586f469c928d5baa681.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1621342910.v.weidian.com%2Fitem.html%3FitemID%3D7490154691&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7490154691?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "BPM BLACK DENIM SHORTS",
    category: "Shorts",
    price: "$27.43",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/3da68e9be909cb9a633a12e0dba08f67.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1621342910.v.weidian.com%2Fitem.html%3FitemID%3D7342496656&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7342496656?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "BPM GRAY SHORTS",
    category: "Shorts",
    price: "$21.16",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/2/05749b43cd3f94f01d387aea9aab0c2c.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1621342910.v.weidian.com%2Fitem.html%3FitemID%3D7341453361&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7341453361?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "DERSCHUTZE SHORTS",
    category: "Shorts",
    price: "$25.86",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/21/62e6dddcb36f78163bae1fcb55983694.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1739784557.v.weidian.com%2Fitem.html%3FitemID%3D7632918134&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7632918134?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "DERSCHUTZE SHORTS",
    category: "Shorts",
    price: "$25.86",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/26/4bbf8a50d359ec1a30a0619f350790f1.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1739784557.v.weidian.com%2Fitem.html%3FitemID%3D7618310132&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7618310132?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "DERSCHUTZE SHORTS",
    category: "Shorts",
    price: "$24.29",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/659cab4a9184888970269896b817b110.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1739784557.v.weidian.com%2Fitem.html%3FitemID%3D7576666451&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7576666451?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "ISLAND PUFF PRINT SHORTS",
    category: "Shorts",
    price: "$24.29",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/23/e7f6c5d48640b998df20b480690b274d.jpg",
    linkKakobuy: "https://ikako.vip/8ng37",
    linkUsfans: "https://usfans.com/product/3/7656862298?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ BLACK MESH SHORTS",
    category: "Shorts",
    price: "$22.73",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/25/4c64ce089170c4d5a9c82d5cafa70ad4.jpg",
    linkKakobuy: "https://ikako.vip/aaeeg",
    linkUsfans: "https://usfans.com/product/3/7653850723?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ ISLAND BAGGY SHORTS",
    category: "Shorts",
    price: "$33.7",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/9/5d082decb4d5409a4e4b8a4a34d3462c.jpg",
    linkKakobuy: "https://ikako.vip/aewkm",
    linkUsfans: "https://usfans.com/product/3/7656868300?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ BLACK DENIM SHORTS",
    category: "Shorts",
    price: "$33.7",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/24/6509876c3cb9a058f071e50435beebbf.jpg",
    linkKakobuy: "https://ikako.vip/szbk5",
    linkUsfans: "https://usfans.com/product/3/7656885992?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "EE X WARREN LOTAS",
    category: "Shorts",
    price: "$13.11",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/9/28e8ba7b6df49759ebc80caedd80d1db.jpg",
    linkKakobuy: "https://ikako.vip/43fhs",
    linkUsfans: "https://usfans.com/product/2/931510237309?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "EE SHORTS",
    category: "Shorts",
    price: "$12.96",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/01bdce96a23355117620332f72a225e2.jpg",
    linkKakobuy: "https://ikako.vip/a2vks",
    linkUsfans: "https://usfans.com/product/2/923285722493?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "EE SHORTS",
    category: "Shorts",
    price: "$12.96",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/14/97ba7964e94d9e242c4e365d16c1953a.jpg",
    linkKakobuy: "https://ikako.vip/numeb",
    linkUsfans: "https://usfans.com/product/2/938607895496?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "EE SHORTS",
    category: "Shorts",
    price: "$13.1",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/18/f1ba1d316fa6addab797657d25137b6d.jpg",
    linkKakobuy: "https://ikako.vip/tfdjm",
    linkUsfans: "https://usfans.com/product/2/923145544750?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  
  },
  {
    name: "STUSSY DENIM SHORTS",
    category: "Shorts",
    price: "$26.08",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/13/bcbbb1ec06131880610df327ef2b5e0e.jpg",
    linkKakobuy: "https://ikako.vip/k3smqt",
    linkUsfans: "",
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
    linkKakobuy: "https://ikako.vip/75yyf",
    linkUsfans: "https://usfans.com/product/3/2738528543?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "JORDAN SHORTS",
    category: "Shorts",
    price: "$6.27",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/291088b20efa88c4358653548e605092.jpg",
    linkKakobuy: "https://ikako.vip/55xmv",
    linkUsfans: "https://usfans.com/product/1/774249365947?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "CARHARTT SHORTS",
    category: "Shorts",
    price: "$26.63",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/15/e7881787353d393c62d2d66edc425982.jpg",
    linkKakobuy: "https://ikako.vip/fh3yp",
    linkUsfans: "https://usfans.com/product/2/1003338779710?ref=TX9V9N",
    tag: "HUSKY",
    rating: 4
  
  },
  {
    name: "ARCTERYX MACAI REMOVABLE HOOD",
    category: "Jackets",
    price: "$94.03",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/20/a6a922185e74f1b6f3facda4e86fda30.jpg",
    linkKakobuy: "https://ikako.vip/fs6gt",
    linkUsfans: "https://usfans.com/product/3/7636254967?ref=TX9V9N",
    tag: "DREAMREMAKE",
    rating: 5
  
  },
  {
    name: "ARCTERYX MACAI",
    category: "Jackets",
    price: "$94.03",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/10/c70355efaf91825e34c6e383a58280b0.jpg",
    linkKakobuy: "https://ikako.vip/dn9k2",
    linkUsfans: "https://usfans.com/product/3/7636378281?ref=TX9V9N",
    tag: "DREAMREMAKE",
    rating: 5
  
  },
  {
    name: "MONCLER VEST BUDGET",
    category: "Jackets",
    price: "$68.17",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/5/78ac8e7f607b21da8b89a3b27967897e.jpg",
    linkKakobuy: "https://ikako.vip/2zwqd",
    linkUsfans: "",
    tag: "BUDGET BATCH",
    rating: 5
  
  },
  {
    name: "MONCLER MAYA BEST BATCH",
    category: "Jackets",
    price: "$204.18",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/8/7f2ba002068ecdfe1d72796567584c56.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fh5.m.taobao.com%2Fawp%2Fcore%2Fdetail.htm%3Fft%3Dt%26id%3D903368724429&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/903368724429?ref=TX9V9N",
    tag: "JIEYI",
    rating: 5
  
  },
  {
    name: "MONCLER TBELIARD BEST BATCH",
    category: "Jackets",
    price: "$221.73",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202511/26/ff8f17f63ff47b9585f44fc60e5228f4.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D699573998420%26spm%3Da213gs.v2success.result.1.61584831mOrh1a&affcode=archivee",
    linkUsfans:"https://usfans.com/product/2/699573998420?ref=TX9V9N",
    tag: "JIEYI",
    rating: 5
  
  },
  {
    name: "RICK OWENS SECRET PARKA JACKET",
    category: "Jackets",
    price: "$208",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/9/4ab182e98917ca976d54543797db3b23.jpg",
    linkKakobuy: "https://ikako.vip/wdg8b",
    linkUsfans: "https://usfans.com/product/2/1018167906778?ref=TX9V9N",
    tag: "APEXMADE",
    rating: 5
  
  },
  {
    name: "JORDAN SOCKS 2 PAIR (42-46)",
    category: "Underwear",
    price: "$7.21",
    image: "https://si.geilicdn.com/pcitem1944479080-13890000019abefe66f00a2103bd_1276_1276.jpg",
    linkKakobuy: "https://ikako.vip/add9k",
    linkUsfans: "https://usfans.com/product/3/7619706700?ref=TX9V9N",
    tag: "BAYMAXSOCKS",
    rating: 5
  
  },
  {
    name: "NIKE SOCKS 6 PAIR (42-46)",
    category: "Underwear",
    price: "$9.25",
    image: "https://si.geilicdn.com/open1847561709-1234478995-59c70000019638db296d0a22d249_1276_1276.jpg",
    linkKakobuy: "https://ikako.vip/97wg9",
    linkUsfans: "https://usfans.com/product/3/7448825972?ref=TX9V9N",
    tag: "BAYMAXSOCKS",
    rating: 5
  
  },
  {
    name: "NIKE SOCKS 3 PAIR",
    category: "Underwear",
    price: "$5.49",
    image: "https://si.geilicdn.com/open1847561709-1234478995-571d000001978909a5ee0a22d249_2560_1920.jpg",
    linkKakobuy: "https://ikako.vip/nvxcm",
    linkUsfans: "https://usfans.com/product/3/7495699974?ref=TX9V9N",
    tag: "BAYMAXSOCKS",
    rating: 5
  
  },
  {
    name: "VETEMENTS SOCKS (36-42)",
    category: "Underwear",
    price: "$2.2",
    image: "https://si.geilicdn.com/pcitem1234071531-7e440000019a66c3da5e0a23111a_1276_1276.jpg",
    linkKakobuy: "https://ikako.vip/mbvwk",
    linkUsfans: "https://usfans.com/product/3/7598191449?ref=TX9V9N",
    tag: "BAYMAXSOCKS",
    rating: 5
  
  },
  {
    name: "ERIC EMANUEL SOCKS (3 PACK)",
    category: "Underwear",
    price: "$7.06",
    image: "https://si.geilicdn.com/pcitem2005654965-0c360000019aafb796620a207569_1702_1276.jpg",
    linkKakobuy: "https://ikako.vip/559eq",
    linkUsfans: "https://usfans.com/product/3/7602105957?ref=TX9V9N",
    tag: "BAYMAXSOCKS",
    rating: 5
  
  },
  {
    name: "CALVIN KLEIN BOXERS (5 PACK)",
    category: "Underwear",
    price: "$15.52",
    image: "https://si.geilicdn.com/open1847561709-1234478995-608c0000019638dab1650a8115c2_2560_2560.jpg",
    linkKakobuy: "https://ikako.vip/bgsjc",
    linkUsfans: "https://usfans.com/product/3/7516896626?ref=TX9V9N",
    tag: "BAYMAXSOCKS",
    rating: 5
  
  },
  {
    name: "FOG BOXERS (2 PACK)",
    category: "Underwear",
    price: "$15.52",
    image: "https://si.geilicdn.com/open1847561709-1234478995-65070000019639728abe0a8133b0_1155_1280.jpg",
    linkKakobuy: "https://ikako.vip/gj93u",
    linkUsfans: "https://usfans.com/product/3/7449086190?ref=TX9V9N",
    tag: "BAYMAXSOCKS",
    rating: 5
  
  },
  {
    name: "BALENCIAGA HAMPTONS",
    category: "Shoes",
    price: "$67",
    image: "https://si.geilicdn.com/wdseller1268847658-3dc60000019c2dd97f0d0a21146b_1320_1320.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1268847658.v.weidian.com%2Fitem.html%3FitemID%3D7509083332&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7509083332?ref=TX9V9N",
    tag: "XA/VG",
    rating: 4
  
  },
  {
    name: "BALENCIAGA 3XL",
    category: "Shoes",
    price: "$63",
    image: "https://si.geilicdn.com/pcitem1710010242-5ba400000198b83c96f30a2304aa_2832_2832.jpg",
    linkKakobuy: "https://ikako.vip/mk6w3",
    linkUsfans: "https://usfans.com/product/3/6531422617?ref=TX9V9N",
    tag: "VG",
    rating: 4
  
  },
  {
    name: "BALENCIAGA X-PANDER",
    category: "Shoes",
    price: "$82",
    image: "https://si.geilicdn.com/pcitem1425026222-7955000001964561a7a90a811411_1440_1920.jpg",
    linkKakobuy: "https://ikako.vip/9wev4",
    linkUsfans: "https://usfans.com/product/3/7613676745?ref=TX9V9N",
    tag: "OK",
    rating: 4
  
  },
  {
    name: "CP COMPANY BEANIE",
    category: "Belts",
    price: "$13",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/1/c51e13567bf2ae0bd3a592b1bb8b6a7c.jpg",
    linkKakobuy: "https://ikako.vip/vf5qn",
    linkUsfans: "",
    tag: "CPREPS",
    rating: 5
  
  },
  {
    name: "ARCTERYX BEANIE",
    category: "Belts",
    price: "$13",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/21/bca95dec778712dff8b754137e7a2f29.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7549993727&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7549993727?ref=TX9V9N",
    tag: "OGWAVE",
    rating: 5
  
  },
  {
    name: "MONCLER BEANIE",
    category: "Belts",
    price: "$12.38",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/25/45a977f803b950c4ad385b797e5d4dde.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7549993727&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7549993727?ref=TX9V9N",
    tag: "OGWAVE",
    rating: 5
  
  },
  {
    name: "SUPREME BEANIE",
    category: "Belts",
    price: "$16",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/24/aced86b8315f485a17dc22155631726f.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7617676948%26spider_token%3D9792&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7617676948?ref=TX9V9N",
    tag: "OGWAVE",
    rating: 5
  
  },
  {
    name: "CORTEIZ BEANIE",
    category: "Belts",
    price: "$16",
    image: "https://img.alicdn.com/bao/uploaded/i2/2214278784178/O1CN01l1Zlul1gjZlcOdbql_!!2214278784178.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D694456604440&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/694456604440?ref=TX9V9N",
    tag: "OGWAVE",
    rating: 5
  
  },
  {
    name: "LV BELT",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/weidian1860614617-151d00000197960f4fc70a23038e_1440_1920.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7496492536&affcode=archivee",
    linkUsfans: "",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "LV BELTS",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/open1621840505-1234478995-0ccd0000018f589a161f0a210559_1080_1080.jpg",
    linkKakobuy: "https://ikako.vip/gezpn",
    linkUsfans: "https://usfans.com/product/3/7564619134?ref=TX9V9N",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "YSL BELTS",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/open1621840505-1234478995-51870000018f58aba4550a239631_1080_1080.jpg",
    linkKakobuy: "https://ikako.vip/cs28e",
    linkUsfans: "https://usfans.com/product/3/7238620088?ref=TX9V9N",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "YSL BELTS",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/weidian1860614617-4f5c000001977b43220c0a2395e5_1440_1920.jpg",
    linkKakobuy: "https://ikako.vip/nvanfy",
    linkUsfans: "https://usfans.com/product/3/7491976825?ref=TX9V9N",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "HERMES BELTS",
    category: "Belts",
    price: "$39",
    image: "https://si.geilicdn.com/weidian1860614617-409a000001990f45f4b30a231316_1512_2016.jpg",
    linkKakobuy: "https://ikako.vip/sfn7a",
    linkUsfans: "https://usfans.com/product/3/7540305005?ref=TX9V9N",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "GUCCI BELTS",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/weidian1854818118-2fb60000019a70bdcd000a23041a_1279_1706.jpg",
    linkKakobuy: "https://ikako.vip/khkw5",
    linkUsfans: "https://usfans.com/product/3/7595122173?ref=TX9V9N",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "GUCCI BELTS",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/open1621840505-1234478995-17220000018f588c067d0a8115b5_1440_1920.jpg",
    linkKakobuy: "https://ikako.vip/retz6",
    linkUsfans: "https://usfans.com/product/3/7237657869?ref=TX9V9N",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "FERRAGAMO BELTS",
    category: "Belts",
    price: "$36",
    image: "https://si.geilicdn.com/weidian1860614617-0a6a00000199460a11c90a23047e_1440_1920.jpg",
    linkKakobuy: "https://ikako.vip/vny7g",
    linkUsfans: "https://usfans.com/product/3/7551041964?ref=TX9V9N",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "FERRAGAMO BELTS",
    category: "Belts",
    price: "$36",
    image: "https://si.geilicdn.com/weidian1860614617-7f580000019889a6820b0a230115_1440_1920.jpg",
    linkKakobuy: "https://ikako.vip/348by",
    linkUsfans: "https://usfans.com/product/3/7521850089?ref=TX9V9N",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "FERRAGAMO BELTS",
    category: "Belts",
    price: "$36",
    image: "https://si.geilicdn.com/weidian1860614617-7827000001910c0052160a23057e_1440_1920.jpg",
    linkKakobuy: "https://ikako.vip/b6jygq",
    linkUsfans: "https://usfans.com/product/3/7237693869?ref=TX9V9N",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "CHROME HEARTS BELT",
    category: "Belts",
    price: "$41",
    image: "https://si.geilicdn.com/weidian1860614617-57d100000197981ca68a0a23111a_1080_1080.jpg",
    linkKakobuy: "https://ikako.vip/bkbm9",
    linkUsfans: "https://usfans.com/product/3/7496597430?ref=TX9V9N",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "CHROME HEARTS BELT",
    category: "Belts",
    price: "$45",
    image: "https://si.geilicdn.com/weidian1860614617-5f1a0000019798181d4a0a2395a3_1080_1080.jpg",
    linkKakobuy: "https://ikako.vip/ckzgq",
    linkUsfans: "https://usfans.com/product/3/7494781775?ref=TX9V9N",
    tag: "K8",
    rating: 5
  
  },
  {
    name: "SLP T-SHIRTS (100 CW)",
    category: "Tshirts",
    price: "$15.5",
    image: "https://img.alicdn.com/bao/uploaded/i4/2214183518581/O1CN01zvzBmf2DG9jbN9HCS_!!2214183518581.png",
    linkKakobuy: "https://ikako.vip/sv2y8",
    linkUsfans: "https://usfans.com/product/2/975385164276?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "KETAMINE T-SHIRT",
    category: "Tshirts",
    price: "$26.6",
    image: "https://img.alicdn.com/bao/uploaded/i4/2215791284194/O1CN01sjBPY41gquCafTLof_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/ecqqy",
    linkUsfans: "https://usfans.com/product/2/991905213307?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "NETTSPEND INVERT T-SHIRT",
    category: "Tshirts",
    price: "$11.25",
    image: "https://img.alicdn.com/bao/uploaded/i4/2212643669335/O1CN01xWayyE2IpUKYRcAgu_!!2212643669335.png",
    linkKakobuy: "https://ikako.vip/3ne6e",
    linkUsfans: "https://usfans.com/product/2/924627845937?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "NETTSPEND EARLY LIFE CRISIS T-SHIRT",
    category: "Tshirts",
    price: "$20.59",
    image: "https://img.alicdn.com/bao/uploaded/i1/2215791284194/O1CN01WNOvQf1gqu9vhs1qX_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/jsy98",
    linkUsfans: "https://usfans.com/product/2/929461367636?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "NETTSPEND REHAB T-SHIRT",
    category: "Tshirts",
    price: "$20.59",
    image: "https://img.alicdn.com/bao/uploaded/i2/2215791284194/O1CN01CBZsge1gquBBxFzdl_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/jjvrj",
    linkUsfans: "https://usfans.com/product/2/959891279366?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "HYSTERIC GLAMOUR STRAWBERRY T-SHIRT",
    category: "Tshirts",
    price: "$22.13",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/16/4699cea934b2176cbbf843445a475a75.jpg",
    linkKakobuy: "https://ikako.vip/p34fw",
    linkUsfans: "https://usfans.com/product/2/980533061035?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "HYSTERIC GLAMOUR T-SHIRT",
    category: "Tshirts",
    price: "$19.04",
    image: "https://img.alicdn.com/bao/uploaded/i3/2126072107/O1CN01jJ8hET1RR3ZKEXxxg_!!2126072107.png",
    linkKakobuy: "https://ikako.vip/8z3nm",
    linkUsfans: "https://usfans.com/product/2/914645926529?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "Jordan 4 (LJR BATCH)",
    category: "Shoes",
    price: "$75.22",
    image: "https://si.geilicdn.com/open1773336045-1234478995-53ce00000195f0f1a5820a23b4de_960_962.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7436802531%26spider_token%3D6edf&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7436802531?ref=TX9V9N",
    tag: "LJR",
    rating: 5
  
  },
  {
    name: "Jordan 5 (Y3/LJR)",
    category: "Shoes",
    price: "$70",
    image: "https://si.geilicdn.com/wdseller1505219366-388a00000198fd3b8e8b0a20e2c5_1184_666.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7564001027&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7564001027?ref=TX9V9N",
    tag: "Y3/LJR",
    rating: 5
  
  },
  {
    name: "Nike Mind 001",
    category: "Shoes",
    price: "$25.08",
    image: "https://si.geilicdn.com/pcitem902012511577-61820000019bd02b3acc0a207569_1179_1070.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1789988531.v.weidian.com%2Fitem.html%3FitemID%3D7665676161&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7665676161?ref=TX9V9N",
    tag: "S2",
    rating: 5
  
  },
  {
    name: "HYSTERIC GLAMOUR MEDICINE T-SHIRT",
    category: "Tshirts",
    price: "$22.23",
    image: "https://img.alicdn.com/bao/uploaded/i4/2126072107/O1CN01St4jiG1RR3bSE8ugM~crop,156,0,858,1144~_!!2126072107.jpg",
    linkKakobuy: "https://ikako.vip/a6r8y",
    linkUsfans: "https://usfans.com/product/2/979272611838?ref=TX9V9N",
    tag: "BDSS",
    rating: 5
  
  },
  {
    name: "HYSTERIC GLAMOUR T-SHIRT",
    category: "Tshirts",
    price: "$15.83",
    image: "https://img.alicdn.com/bao/uploaded/i1/2126072107/O1CN018ydGoN1RR3bBHQ0VV_!!2126072107.jpg",
    linkKakobuy: "https://ikako.vip/wvszt",
    linkUsfans: "https://usfans.com/product/2/972904238090?ref=TX9V9N",
    tag: "BDSS",
    rating: 5
  
  },
  {
    name: "RANDOM T-SHIRT",
    category: "Tshirts",
    price: "$8",
    image: "https://img.alicdn.com/bao/uploaded/i4/3043413681/O1CN014K74s61d3x01hzmT4_!!3043413681.jpg",
    linkKakobuy: "https://ikako.vip/rzmpc",
    linkUsfans: "https://usfans.com/product/2/963251434104?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "SHIBU T-SHIRT",
    category: "Tshirts",
    price: "$11.08",
    image: "https://img.alicdn.com/bao/uploaded/i2/2217023441945/O1CN01jwviZQ1QErOaZ7YP8_!!2217023441945.jpg",
    linkKakobuy: "https://ikako.vip/ykfau",
    linkUsfans: "https://usfans.com/product/2/909739019073?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "ANN D LOCTUS T-SHIRT",
    category: "Tshirts",
    price: "$20.89",
    image: "https://img.alicdn.com/bao/uploaded/i3/4169169639/O1CN01EB8QXG2L4ik5ZHuQp_!!4169169639.jpg",
    linkKakobuy: "https://ikako.vip/8j6ap",
    linkUsfans: "https://usfans.com/product/2/926436516645?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "CARTI WLR T-SHIRT",
    category: "Tshirts",
    price: "$11.33",
    image: "https://img.alicdn.com/bao/uploaded/i1/2212643669335/O1CN01Ps8PHy2IpUEzjtIYL_!!2212643669335.jpg",
    linkKakobuy: "https://ikako.vip/x3sbe",
    linkUsfans: "https://usfans.com/product/2/809731021003?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "AKIRA T-SHIRT",
    category: "Tshirts",
    price: "$11.4",
    image: "https://img.alicdn.com/bao/uploaded/i1/2212643669335/O1CN01QnSHXd2IpUHMH8zZ9_!!2212643669335.jpg",
    linkKakobuy: "https://ikako.vip/k8bhm",
    linkUsfans: "https://usfans.com/product/2/848614907682?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "UNDERCOVER 10SS T-SHIRT",
    category: "Tshirts",
    price: "$15.36",
    image: "https://si.geilicdn.com/pcitem901965113164-7ddb00000197c01360500a20e284_2796_2796.jpg",
    linkKakobuy: "https://ikako.vip/ej45a",
    linkUsfans: "https://usfans.com/product/3/7500755236?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "VUJADE T-SHIRT",
    category: "Tshirts",
    price: "$15.78",
    image: "https://img.alicdn.com/bao/uploaded/i4/3954478424/O1CN01UiQ4y52C6FGCRraDv_!!3954478424.jpg",
    linkKakobuy: "https://ikako.vip/bf8de",
    linkUsfans: "https://usfans.com/product/2/694918332693?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "KANYE X GOSHA T-SHIRT",
    category: "Tshirts",
    price: "$16.93",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/21/2bf41571d198c15fa1cf1017c6e0ec77.jpg",
    linkKakobuy: "https://ikako.vip/q7gsm",
    linkUsfans: "https://usfans.com/product/3/7238881155?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "I'M FINE BLOOD STAIN SHIRT",
    category: "Tshirts",
    price: "$11.26",
    image: "https://img.alicdn.com/bao/uploaded/i1/2218252751209/O1CN019PGXtm1KnlrjXlurh_!!2218252751209.jpg",
    linkKakobuy: "https://ikako.vip/n2rha",
    linkUsfans: "https://usfans.com/product/2/867615196966?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  
  {
    name: "SUPREME ARABIC SHIRT",
    category: "Tshirts",
    price: "$16",
    image: "https://si.geilicdn.com/open1624782517-1624782517-2b2300000198f1c6ba720aa043f9_1350_1350.jpg",
    linkKakobuy: "https://ikako.vip/zdj9p",
    linkUsfans: "https://usfans.com/product/3/7570371276?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "APHEX TWIN TEE",
    category: "Tshirts",
    price: "$11.36",
    image: "https://img.alicdn.com/bao/uploaded/i3/2212643669335/O1CN01DD6m0g2IpUExmmB9h_!!2212643669335.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D809631048361&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/809631048361?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "2HOLLIS TEE",
    category: "Tshirts",
    price: "$11.23",
    image: "https://img.alicdn.com/bao/uploaded/i2/2212643669335/O1CN01fOFFsO2IpUKN3AGJI_!!2212643669335.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D921199812955&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/921199812955?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "2HOLLIS TEE",
    category: "Tshirts",
    price: "$11.39",
    image: "https://img.alicdn.com/bao/uploaded/i2/2212643669335/O1CN01REr0ZU2IpUMpVaF3f_!!2212643669335.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D981183457748&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/981183457748?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "NUMBER NINE MICKEY TEE",
    category: "Tshirts",
    price: "$11.18",
    image: "https://img.alicdn.com/bao/uploaded/i1/2212643669335/O1CN01fRcB0T2IpUKCsPfL2_!!2212643669335.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D916936678572&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/916936678572?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "RANDOM OPIUM TEE",
    category: "Tshirts",
    price: "$12.88",
    image: "https://img.alicdn.com/bao/uploaded/i4/2212643669335/O1CN01FMzCwD2IpUHgIwuUr_!!2212643669335.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D808924265747&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/808924265747?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "SUPREME THIRTS",
    category: "Tshirts",
    price: "$8.62",
    image: "https://si.geilicdn.com/wdseller1947147904-63130000019735ab59920a2315ef_1288_1288.jpg",
    linkKakobuy: "https://ikako.vip/bvck7",
    linkUsfans: "https://usfans.com/product/3/7484527107?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "NIKE X NOCTA HOODIES",
    category: "Hoodies",
    price: "$32",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/14/e0d7afed2005d6bde1003ba80a38791b.jpg",
    linkKakobuy: "https://ikako.vip/87fzm",
    linkUsfans: "https://usfans.com/product/3/7633774866?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "Derschutze Ariza Hoodie",
    category: "Hoodies",
    price: "$35.06",
    image: "https://img.alicdn.com/bao/uploaded/i4/1854157063/O1CN01hOdpUV222uVxtFpJC~hdr~_!!1854157063.heic",
    linkKakobuy: "https://ikako.vip/c6c39",
    linkUsfans: "https://usfans.com/product/2/992257028851?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "Derschutze Gallery Hoodie",
    category: "Hoodies",
    price: "$38",
    image: "https://img.alicdn.com/bao/uploaded/i1/1854157063/O1CN01QyqjQx222uUMVbfRC_!!1854157063.jpg",
    linkKakobuy: "https://ikako.vip/wks7m",
    linkUsfans: "https://usfans.com/product/2/981337313553?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "Derschutze Hoodie",
    category: "Hoodies",
    price: "$36",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/27/877099cfac8f23bb9f89f10d4a7561a9.jpg",
    linkKakobuy: "https://ikako.vip/jfr3x",
    linkUsfans: "https://usfans.com/product/2/920680193778?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "Derschutze awakening V2 BLOSSOM Hoodie",
    category: "Hoodies",
    price: "$33",
    image: "https://img.alicdn.com/bao/uploaded/i1/1854157063/O1CN01w8zgPc222uSmzxiKS_!!1854157063.jpg",
    linkKakobuy: "https://ikako.vip/jadt8",
    linkUsfans: "https://usfans.com/product/2/915474343233?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "CDG HOODIE BIG HEART",
    category: "Hoodies",
    price: "$42",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202511/28/01c50d2925f56d4836c9bd496afc6501.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D975518273866&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/975518273866?ref=TX9V9N",
    tag: "REPBROS",
    rating: 5
  
  },
  {
    name: "CDG HOODIE",
    category: "Hoodies",
    price: "$39",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202511/28/35262d6361a5fdfd130146e16d92089f.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D974299403094&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/974299403094?ref=TX9V9N",
    tag: "REPBROS",
    rating: 5
  
  },
  {
    name: "CDG ZIP UP HOODIE",
    category: "Hoodies",
    price: "$40",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/20/08e16a9401ebe00c2643f5d1e4150eff.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D975522325315&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/975522325315?ref=TX9V9N",
    tag: "REPBROS",
    rating: 5
  
  },
  {
    name: "CDG PLAY ZIP UP HOODIE",
    category: "Hoodies",
    price: "$42",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/25/8f30df14c597686ba901499db9dc7cce.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D974788342665&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/974788342665?ref=TX9V9N",
    tag: "REPBROS",
    rating: 5
  
  },
  {
    name: "CORTEIZ X BBK ROYALE ZIP UP HOODIE",
    category: "Hoodies",
    price: "$39",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/29/9ba1aab474da34577ab50582277951da.jpg",
    linkKakobuy: "https://ikako.vip/3hu3p",
    linkUsfans: "https://usfans.com/product/3/7653809265?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: "CORTEIZ ALCATRAZ YELLOW HOODIE",
    category: "Hoodies",
    price: "$33",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/12/06ef6f109e7297a40f61ff3bb510d442.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1833725707.v.weidian.com%2Fitem.html%3FitemID%3D7656856394&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7656856394?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  {
    name: " CORTEIZ BLACK ALCATRAZ HOODIE",
    category: "Hoodies",
    price: "$32",
    image: "https://si.geilicdn.com/wdseller1781632402-291f00000189b9c04af50a2102d0_750_750.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1760986891.v.weidian.com%2Fitem.html%3FitemID%3D7653811325&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7653811325?ref=TX9V9N",
    tag: "GOAT",
    rating: 5
  
  },
  
  {
    name: "CP COMPANY GOGGLE HOODIE",
    category: "Hoodies",
    price: "$46.84",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/23/23278811efe0b2969fe481bf0e3fe675.jpg",
    linkKakobuy: "https://ikako.vip/ep73a",
    linkUsfans: "https://ikako.vip/ep73a",
    tag: "CPREPSCN",
    rating: 5
  
  },
  {
    name: "CP COMPANY GREY ZIPPER HOODIE",
    category: "Hoodies",
    price: "$45.5",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/5/8de0efcaae81f8e25272328226518ea6.jpg",
    linkKakobuy: "https://ikako.vip/94jpb",
    linkUsfans: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D981146467993&affcode=archivee",
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
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D841606251822&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/841606251822?ref=TX9V9N",
    tag: "PAIKI",
    rating: 5
  
  },
  {
    name: "PLAYBOI CARTI CAT HOODIE",
    category: "Hoodies",
    price: "$25.19",
    image: "https://img.alicdn.com/bao/uploaded/i4/2212643669335/O1CN01VhYQHf2IpUFI208vJ_!!2212643669335.png",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D817686026285&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/817686026285?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "808VISION HOODIE",
    category: "Hoodies",
    price: "$38.65",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/29/c5508179bbb9b4dbd5f652cb78666e98.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D1006072606020&affcode=archivee",
    linkUsfans: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D1006072606020&affcode=archivee",
    tag: "DRAGONREP",
    rating: 5
  
  },
  {
    name: "ARTIEMASTER BLANK HOODIE'S (A LOT OF CW)",
    category: "Hoodies",
    price: "$11.45",
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01GD1BYr1rFljOsRngl_!!2631375602-0-cib.jpg",
    linkKakobuy: "https://ikako.vip/9vufw",
    linkUsfans: "https://usfans.com/product/1/724736914040?ref=TX9V9N",
    tag: "ARTIEMASTER",
    rating: 5
  
  },
  {
    name: "YEEZY X GOSHA RUBCHINSKIYE",
    category: "Hoodies",
    price: "$25",
    image: "https://si.geilicdn.com/pcitem1375395368-115e000001913862f2820a8133cc_845_845.jpg",
    linkKakobuy: "https://ikako.vip/4b9av",
    linkUsfans: "https://usfans.com/product/3/7258395815?ref=TX9V9N",
    tag: "CCHAOS",
    rating: 4
  
  },
  {
    name: "UNDERCOVER 06SS HOODIE",
    category: "Hoodies",
    price: "$16",
    image: "https://img.alicdn.com/bao/uploaded/i1/2217964616975/O1CN01c4f4jN21ObaS8Vpwo_!!2217964616975.jpg",
    linkKakobuy: "https://ikako.vip/dng5f3",
    linkUsfans: "https://usfans.com/product/2/865858886069?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "SAINT ALEXANDER HOODIE",
    category: "Hoodies",
    price: "$26.35",
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01SBEtji1riALGKiIdY_!!2217847465664-0-cib.jpg",
    linkKakobuy: "https://ikako.vip/8zmvb",
    linkUsfans: "https://usfans.com/product/1/862852791296?ref=TX9V9N",
    tag: "RANDOM (BUDGET)",
    rating: 3
  
  },
  {
    name: "PLAYBOI CARTI WLR HOODIE",
    category: "Hoodies",
    price: "$25.50",
    image: "https://img.alicdn.com/bao/uploaded/i4/2212643669335/O1CN01X2kFIu2IpUFUNdM2m_!!2212643669335.png",
    linkKakobuy: "https://ikako.vip/gweh5",
    linkUsfans: "https://usfans.com/product/2/818702710082?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "6PM X TRUE RELIGION HOODIE",
    category: "Hoodies",
    price: "$34.5",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/16/224a509609ddef3f69f4bceadbb48eb6.jpg",
    linkKakobuy: "https://ikako.vip/dwk5g",
    linkUsfans: "https://usfans.com/product/3/7342451364?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "LOEWE ZIP UP HOODIE",
    category: "Hoodies",
    price: "$17.57",
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01NLBNhc1WvLg0B31CC_!!2216716812850-0-cib.jpg",
    linkKakobuy: "https://ikako.vip/7mu8w",
    linkUsfans: "https://usfans.com/product/1/744492467426?ref=TX9V9N",
    tag: "RANDOM",
    rating: 3
  
  },
  {
    name: "6PM HOODIE",
    category: "Hoodies",
    price: "$36",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/13/de578be16a2583a01b2abc2675e77b9b.jpg",
    linkKakobuy: "https://ikako.vip/zjqxk",
    linkUsfans: "https://usfans.com/product/3/7341580621?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  
  },
  {
    name: "PEACEINWAR PATRIOT HOODIE",
    category: "Hoodies",
    price: "$32.17",
    image: "https://img.alicdn.com/bao/uploaded/i4/2687803572/O1CN01FhgslU1cG1sGFeTNn_!!2687803572.jpg",
    linkKakobuy: "https://ikako.vip/s5ej2",
    linkUsfans: "https://usfans.com/product/2/1031594048572?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR YIN YANG HOODIE",
    category: "Hoodies",
    price: "$31.21",
    image: "https://si.geilicdn.com/wdseller1995625455-75300000019ada5206720a2102b1_1290_1720.jpg",
    linkKakobuy: "https://ikako.vip/ap9c4",
    linkUsfans: "https://usfans.com/product/3/7621923643?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR HOODIE",
    category: "Hoodies",
    price: "$32.79",
    image: "https://si.geilicdn.com/wdseller1995625455-37e50000019b21f71ac80a2395e9_1290_1720.jpg",
    linkKakobuy: "https://ikako.vip/xtndr",
    linkUsfans: "https://usfans.com/product/3/7633091801?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR SOLIDER HOODIE",
    category: "Hoodies",
    price: "$33.5",
    image: "https://img.alicdn.com/bao/uploaded/i2/2687803572/O1CN014myot71cG1sFmRZBR_!!2687803572.jpg",
    linkKakobuy: "https://ikako.vip/cawfg",
    linkUsfans: "https://usfans.com/product/2/1030780349209?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR EU T-SHIRT",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-6b190000019d1a09ad3d0a23c286_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/7mmaw",
    linkUsfans: "https://usfans.com/product/3/7717974314?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR NATIONAL FLAG T-SHIRT",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-3f300000019d19ee36ce0a23c1e0_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/gekdf",
    linkUsfans: "https://usfans.com/product/3/7718010924?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR ANTI-WAR SKULL TSHIRT",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-53a30000019d19e9c52e0a239839_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/qnk8t",
    linkUsfans: "https://usfans.com/product/3/7715026173?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR COLLABORATION SKULL",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-196b0000019d24d6ddee0a20e672_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/q62s7",
    linkUsfans: "https://usfans.com/product/3/7717371961?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR BATTLEFIELD PHOTO",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-7e7a0000019d245e199e0a239646_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/gwyqy",
    linkUsfans: "https://usfans.com/product/3/7716979189?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR CAMOUFLAGE SKULL ",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-020a0000019d2458154e0a2303ea_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/fyhge",
    linkUsfans: "https://usfans.com/product/3/7717224681?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR BRAIDED NATIONAL FLAG",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-07260000019d244eb7920a2305d8_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/u3tp2",
    linkUsfans : "https://usfans.com/product/3/7717242349?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR FEDERAL POLO",
    category: "Tshirts",
    price: "$21.28",
    image: "https://si.geilicdn.com/wdseller1995625455-02c30000019d244b12460a240147_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/q9j4k",
    linkUsfans: "https://usfans.com/product/3/7717228491?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR SKULL SWEATPANTS",
    category: "Shorts",
    price: "$34.52",
    image: "https://si.geilicdn.com/wdseller1995625455-5ccb0000019b21edc7d70a23b5fa_1290_1720.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7635947538&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7635947538?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR SKULL SWEATPANTS",
    category: "Shorts",
    price: "$36.1",
    image: "https://si.geilicdn.com/wdseller1995625455-7f440000019b0db144a60a2304a0_1290_1720.jpg",
    linkKakobuy: "https://ikako.vip/vukad",
    linkUsfans: "https://usfans.com/product/3/7630649741?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "PEACEINWAR EU SWEATPANTS",
    category: "Shorts",
    price: "$34",
    image: "https://si.geilicdn.com/wdseller1995625455-1ad70000019b8d082bd60a230417_1290_1720.jpg",
    linkKakobuy: "https://ikako.vip/f6s9w",
    linkUsfans: "https://usfans.com/product/3/7653929908?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  
  },
  {
    name: "CHROME HEARTS MORO LONGSLEEVE",
    category: "Hoodies",
    price: "$31.37",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202509/6/cb50d32e7616cd79c15d4e855f2a7b61.jpg",
    linkKakobuy: "https://ikako.vip/buhj4",
    linkUsfans: "https://usfans.com/product/3/7507441990?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "CHROME HEARTS LONGSLEEVE",
    category: "Hoodies",
    price: "$26.64",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/2/3e84c625460f0f2751299a169f5d7af0.jpg",
    linkKakobuy: "https://ikako.vip/by29w",
    linkUsfans: "https://usfans.com/product/3/7570120561?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  
  },
  {
    name: "CDG LONGSLEEVE",
    category: "Hoodies",
    price: "$19",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202604/1/1f0873b020b72d07495626288df5e5d2.jpg",
    linkKakobuy: "https://ikako.vip/ubd6c",
    linkUsfans: "",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "HYSTERIC GLAMOUR SUE RYNSKI LONGSLEEVE",
    category: "Hoodies",
    price: "$25",
    image: "https://img.alicdn.com/bao/uploaded/i1/2126072107/O1CN01gWT2HW1RR3afrvxpb_!!2126072107.jpg",
    linkKakobuy: "https://ikako.vip/65udt",
    linkUsfans: "https://usfans.com/product/2/962213368084?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "HYSTERIC GLAMOUR LONGSLEEVE",
    category: "Hoodies",
    price: "$17.5",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/25/4d3ff2a9c2d42750e25ac0869365b6af.jpg",
    linkKakobuy: "https://ikako.vip/typeg",
    linkUsfans: "https://usfans.com/product/2/735147769437?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "UNDERCOVER LONGSLEEVE",
    category: "Hoodies",
    price: "$20.78",
    image: "https://img.alicdn.com/bao/uploaded/i1/2214916689299/O1CN014S01jV2IZ04zhEr6o_!!2214916689299.jpg",
    linkKakobuy: "https://ikako.vip/tt8hz",
    linkUsfans: "https://usfans.com/product/2/941166330233?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "ERD LONGSLEEVE",
    category: "Hoodies",
    price: "$40",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202510/12/020e3d1b4f980b0bc2087f8e2292af57.jpg",
    linkKakobuy: "https://ikako.vip/yjb6t",
    linkUsfans: "https://usfans.com/product/2/943139379074?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "ERD CREWNECK",
    category: "Hoodies",
    price: "$17.42",
    image: "https://img.alicdn.com/bao/uploaded/i2/2075710764/O1CN01J9qQW51HVxdjUi5Yc_!!2075710764.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D906486784153&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/906486784153?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "ERD CREWNECK",
    category: "Hoodies",
    price: "$45",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/11/dcc2f9e77b00e9509c66c55e770f7d33.jpg",
    linkKakobuy: "https://ikako.vip/x6fpu",
    linkUsfans: "https://ikako.vip/x6fpu",
    tag: "BDSJ",
    rating: 5
  
  },
  {
    name: "MM KNIT ZIP UP",
    category: "Hoodies",
    price: "$22.38",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/11/dd80e2246adf1ccbb16ea8dadd758a26.jpg",
    linkKakobuy: "https://ikako.vip/42939",
    linkUsfans: "https://usfans.com/product/2/752666734936?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "MM KNIT",
    category: "Hoodies",
    price: "$13.87",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/30/9305cdee6827484dbe11dbe4e38ed260.jpg",
    linkKakobuy: "https://ikako.vip/5evbs",
    linkUsfans: "https://usfans.com/product/1/746801458197?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  
  },
  {
    name: "UNDERCOVER CREWNECK",
    category: "Hoodies",
    price: "$22.24",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/2/d198911674bc2f0414fd477145dc6a54.jpg",
    linkKakobuy: "https://ikako.vip/mzute",
    linkUsfans: "https://usfans.com/product/2/868149506390?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "UNDERCOVER GIZ SAWTOOTH CREWNECK",
    category: "Hoodies",
    price: "$18.76",
    image: "http://img.alicdn.com/imgextra/i4/2217964616975/O1CN01KzYlGH21ObetuoSGL_!!2217964616975.jpg",
    linkKakobuy: "https://ikako.vip/65v9v",
    linkUsfans: "https://ikako.vip/65v9v",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "NUMBER NINE BYE BYE GOOD NIGHT",
    category: "Tshirts",
    price: "$14.23",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/7/0e851edaa511445340d2cc680634c12d.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D910677881280&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/910677881280?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  
  },
  {
    name: "SUPREME X HYSTERIC GLAMOUR TEE",
    category: "Tshirts",
    price: "$14.27",
    image: "https://img.alicdn.com/bao/uploaded/i1/3421444534/O1CN01CRPV8S1jMcmmySngs_!!3421444534.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D871616414168&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/871616414168?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "NUMBER NINE KICK YOUR ASS TEE",
    category: "Tshirts",
    price: "$14.31",
    image: "https://img.alicdn.com/bao/uploaded/i3/2943390456/O1CN01SSGrRX1FEtYp8DuZk_!!2943390456.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D793393698046&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/793393698046?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  
  },
  {
    name: "MASTERMIND RHINESTONE TEE",
    category: "Tshirts",
    price: "$16",
    image: "https://img.alicdn.com/bao/uploaded/i4/3483485472/O1CN01YJgxSZ1qIEAuPPmwl_!!3483485472.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D752233274681&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/752233274681?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "AKIMBO CLUB HOODIE",
    category: "Hoodies",
    price: "$22.53",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/30/96f7605dd9e294245bb0b2dc6e89acd9.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D902000743084&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/902000743084?ref=TX9V9N",
    tag: "MadMan",
    rating: 4
  
  },
  {
    name: "WLNEXT ZIP UP HOODIE",
    category: "Hoodies",
    price: "$32.38",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/16/f559eea0e0c0d63617688c5672e4b297.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D749224137219&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/749224137219?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "UVU TOSCANA HOODIE",
    category: "Hoodies",
    price: "$31.44",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202511/10/ba00e9190330410d93402aad33c67de1.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7508712321&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7508712321?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "UVU INSIGNA ZIP UP HOODIE",
    category: "Hoodies",
    price: "$31.44",
    image: "https://si.geilicdn.com/wdseller1940384309-11f4000001982dab0b4d0a22d58f_1320_1320.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7513593962&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7513593962?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  
  },
  {
    name: "ARTE HOODIE",
    category: "Hoodies",
    price: "$25.16",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202510/23/5c3d05cf5d2238ca7afc52233acc681a.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D962640498751&affcode=archivee",
    linkUsfans: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D962640498751&affcode=archivee",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "BASIC NIKE PANTS",
    category: "Shorts",
    price: "$13.37",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/10/fd5cfb59281b8cb55b947a6c9f9b2568.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7535370671&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7535370671?ref=TX9V9N",
    tag: "RANDOM",
    rating: 3
  
  },
  {
    name: "Survet Flared joggers",
    category: "Shorts",
    price: "$12",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/9/f11639e00eb8d5d83b77f538a66b85c9.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7536809461&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7536809461?ref=TX9V9N",
    tag: "RANDOM",
    rating: 3
  
  },
  {
    name: "(BUDGET) ACNE STUDIOS JEANS",
    category: "Shorts",
    price: "$28.16",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/31/37b4f42c2cfe7c74c4ae63dd565aa82c.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D896534806883&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/896534806883?ref=TX9V9N",
    tag: "BUDGET",
    rating: 3
  
  },
  {
    name: "NO FAITH STUDIOS JEANS",
    category: "Shorts",
    price: "$40.15",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/26/bf6a07eeb00ca9b39ddceb49721aa468.jpg",
    linkKakobuy: "https://ikako.vip/fj85r",
    linkUsfans: "https://usfans.com/product/2/863520488114?ref=TX9V9N",
    tag: "INFINITE",
    rating: 5
  
  },
  {
    name: "(BUDGET) GALLERY DEPT JEANS",
    category: "Shorts",
    price: "$20.01",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202604/1/6bf9a3c39e99d20e8624b1d2f4ecafeb.jpg",
    linkKakobuy: "https://ikako.vip/uhsqa",
    linkUsfans: "https://usfans.com/product/2/700551477968?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  
  },
  {
    name: "GOLDEN GOOSE SUPER STAR",
    category: "Shoes",
    price: "$59.82",
    image: "https://si.geilicdn.com/wdseller1505219366-1c1d00000198eceeca7b0a210139_1174_1566.jpg",
    linkKakobuy: "https://ikako.vip/cqubs",
    linkUsfans: "https://usfans.com/product/3/7564078351?ref=TX9V9N",
    tag: "WWTOP",
    rating: 5
  
  },
  {
    name: "(BUDGET) HELLSTAR SHORTS",
    category: "Shorts",
    price: "$20.58",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/8/169e9be0be6b46be346a0746b27c7dd2.jpg",
    linkKakobuy: "https://ikako.vip/qka4w",
    linkUsfans: "https://usfans.com/product/2/1019327460761?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  
  },
  {
    name: "HYSTERIC GLAMOUR LONGSLEEVE",
    category: "Hoodies",
    price: "$23.9",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01CfgW5P1FEtiXMb5Wz~crop,0,128,768,768~_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/dh5zs",
    linkUsfans: "https://usfans.com/product/2/995510864704?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  
  },
  {
    name: "(BUDGET) CORTEIZ HOODIE",
    category: "Hoodies",
    price: "$21.73",
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01f4ly7T1riAK96tsRu_!!2217847465664-0-cib.jpg",
    linkKakobuy: "https://ikako.vip/h9m3h",
    linkUsfans: "https://usfans.com/product/1/849048451034?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "(BUDGET) CORTEIZ SWEATPANTS",
    category: "Shorts",
    price: "$17.32",
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01f2JUcJ1riALCl70fW_!!2217847465664-0-cib.jpg",
    linkKakobuy: "https://ikako.vip/h9m3h",
    linkUsfans: "https://usfans.com/product/1/849048451034?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "MOWALOLA TEE",
    category: "Tshirts",
    price: "$12.69",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/21/fa33bb85cfccf1a1301c1f1dcfba1fc5.jpg",
    linkKakobuy: "https://ikako.vip/j88ww",
    linkUsfans: "https://usfans.com/product/2/937854635977?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
   {
    name: "DERSCHUTZE SHORTS",
    category: "Shorts",
    price: "$18.89",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/22/0a449d60950d93f378222cdb347052c7.jpg",
    linkKakobuy: "https://ikako.vip/ykm3x",
    linkUsfans: "https://usfans.com/product/1/1031401531331?ref=TX9V9N",
    tag: "RANDOM BATCH",
    rating: 5
  
  },
  {
    name: "DROLAND MILLER MISA TEE",
    category: "Tshirts",
    price: "$11.33",
    image: "https://img.alicdn.com/bao/uploaded/i1/2212643669335/O1CN01y9hoP42IpUIVFF2Tl_!!2212643669335.jpg",
    linkKakobuy: "https://ikako.vip/zsztp",
    linkUsfans: "https://usfans.com/product/2/867979068621?ref=TX9V9N",
    tag: "RANDOM BATCH",
    rating: 4
  
  },
   {
    name: "RANDOM WASHED TEE",
    category: "Tshirts",
    price: "$11.18",
    image: "https://img.alicdn.com/bao/uploaded/i1/1857205236/O1CN01Vd2GjE1oY8bwXxAzq_!!1857205236.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D699698744900&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/699698744900?ref=TX9V9N",
    tag: "RANDOM BATCH",
    rating: 4
  
  },
  {
    name: "UNDERCOVER EVANGELION CREWNECK",
    category: "Hoodies",
    price: "$21.73",
    image: "https://img.alicdn.com/imgextra/i2/2219806430381/O1CN01bP0Cfh1EgXznL0xTI_!!2219806430381.jpg",
    linkKakobuy: "https://ikako.vip/b6p3y",
    linkUsfans: "https://usfans.com/product/2/1037334046765?ref=TX9V9N",
    tag: "RANDOM BATCH",
    rating: 4
  
  },
  {
    name: "BALENCIAGA BRITNEY T-SHIRT",
    category: "Tshirts",
    price: "$14.17",
    image: "https://cbu01.alicdn.com/img/ibank/O1CN016yeiKX28s6RROTpLC_!!2215450777987-0-cib.jpg",
    linkKakobuy: "https://ikako.vip/a4svt",
    linkUsfans: "https://usfans.com/product/1/939227571473?ref=TX9V9N",
    tag: "RANDOM BATCH",
    rating: 4
  
  },
  {
    name: "AJ1 X TRAVIS",
    category: "Shoes",
    price: "$63 - 72",
    image: "https://si.geilicdn.com/wdseller1505219366-0c5a00000198343b658f0a2396f4_960_961.jpg",
    linkKakobuy: "https://ikako.vip/zn5kr",
    linkUsfans: "https://usfans.com/product/3/7564030719?ref=TX9V9N",
    tag: "PK 4.0/LJR",
    rating: 5
  
  },

  {
    name: "VETEMENTS ZURICH",
    category: "Hoodies",
    price: "$56.83",
    image: "https://img.alicdn.com/bao/uploaded/i4/2210299185015/O1CN01ZfxYcp1muvO3pGJrk_!!2210299185015.jpg",
    linkKakobuy: "https://ikako.vip/vuqaj",
    linkUsfans: "https://usfans.com/product/2/809389387349?ref=TX9V9N",
    tag: "VOGUE",
    rating: 5
  
  },
  {
    name: "HOMIXIDE GANG TOUR TEE",
    category: "Tshirts",
    price: "$11.52",
    image: "https://img.alicdn.com/bao/uploaded/i1/2212643669335/O1CN01JsaxDn2IpUF05WMXl_!!2212643669335.jpg",
    linkKakobuy: "https://ikako.vip/ed8kr",
    linkUsfans: "https://usfans.com/product/2/811257266296?ref=TX9V9N",
    tag: "RANDOM",
    rating: 3
  
  },
  {
    name: "NO E MOSEN LONGSLEEVE",
    category: "Tshirts",
    price: "$32.19",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202509/30/58fb6d15c4033af0b330e43ab210efb8.jpg",
    linkKakobuy: "https://ikako.vip/xdmpq",
    linkUsfans: "https://usfans.com/product/2/764799778569?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "Air Max Plus Tn",
    category: "Shoes",
    price: "$23.63 - 32",
    image: "https://si.geilicdn.com/weidian1744790155-524b0000018cdbccae590a231418_1536_2048.jpg",
    linkKakobuy: "https://ikako.vip/8fa4d",
    linkUsfans: "https://www.usfans.com/product/3/6565730165?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 3
  
  },
  {
    name: "(BUDGET) RANDOM FLARED PANTS",
    category: "Shorts",
    price: "$24.13",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/5/db25d86d05522290e161b280a055f232.jpg",
    linkKakobuy: "https://ikako.vip/et2g3",
    linkUsfans: "https://www.usfans.com/product/2/945274664699?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 3
  
  },
   {
    name: "BUDGET MAISON MARGIELA T-SHIRT",
    category: "Tshirts",
    price: "$15.31",
    image: "https://media.usfans.com/PDA/674b546c-8c5e-43ba-8205-cb1503335d57.jpg",
    linkKakobuy: "https://ikako.vip/yxnu2",
    linkUsfans: "https://usfans.com/product/2/1003882569724?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  
  },
  {
    name: "CARHARTT JACKETS [A LOT OF CW]",
    category: "Jackets",
    price: "$31.73 - 41.27",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/23/597513f4fa29c1ecaa8c336bde5ec22c.jpg",
    linkKakobuy: "https://ikako.vip/gr5ma",
    linkUsfans: "https://usfans.com/product/1/743062544600?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  
  },
  {
    name: "WEST COAST CHOPPERS HOODIE",
    category: "Hoodies",
    price: "$24.72",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202604/10/a8562c23796229200c464ad487cf96ed.jpg",
    linkKakobuy: "https://ikako.vip/5tbt5",
    linkUsfans: "https://usfans.com/product/3/7542163380?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  
  },
  {
    name: "WEST COAST CHOPPERS T-SHIRTS",
    category: "Tshirt",
    price: "$10.31 - 12.27",
    image: "https://img.alicdn.com/bao/uploaded/i2/2210749411287/O1CN01QbLK5c1LNUqryJwck_!!2210749411287.jpg",
    linkKakobuy: "https://ikako.vip/m489a",
    linkUsfans: "https://usfans.com/product/2/885178756710?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  
  },
  {
    name: "RICK OWENS BIAS BOOTCUT JEANS",
    category: "Shorts",
    price: "$27.89",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/29/99a5dfd17759aea546184e92b8b1fdf7.jpg",
    linkKakobuy: "https://ikako.vip/u94wn",
    linkUsfans: "https://usfans.com/product/2/909290620880?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  
  },
  {
    name: "UNDERCOVER 03 TEE",
    category: "Tshirts",
    price: "$16.24",
    image: "https://img.alicdn.com/bao/uploaded/i4/2652892586/O1CN01laq0eg1UyRHYWO6Ib_!!2652892586.jpg",
    linkKakobuy: "https://ikako.vip/p52x4",
    linkUsfans: "https://usfans.com/product/2/927709845234?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  
  },
  {
    name: "UNDERCOVER 10SS TEE",
    category: "Tshirts",
    price: "$11.16",
    image: "https://img.alicdn.com/bao/uploaded/i4/2652892586/O1CN016H5Gte1UyRGxJlwq7_!!2652892586.jpg",
    linkKakobuy: "https://ikako.vip/uar5d",
    linkUsfans: "https://usfans.com/product/2/907865244699?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "UNDERCOVER 10SS TEE",
    category: "Tshirts",
    price: "$12.91",
    image: "https://img.alicdn.com/bao/uploaded/i1/2652892586/O1CN01u9yYnP1UyRHDoVhtW_!!2652892586.jpg",
    linkKakobuy: "https://ikako.vip/8knn9",
    linkUsfans: "https://usfans.com/product/2/915690722743?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
   {
    name: "UNDERCOVER 18SS TEE",
    category: "Tshirts",
    price: "$16.25",
    image: "https://img.alicdn.com/bao/uploaded/i1/2652892586/O1CN01k4BIlw1UyRIKCmCx1_!!2652892586.jpg",
    linkKakobuy: "https://ikako.vip/ujp77",
    linkUsfans: "https://usfans.com/product/2/946392353863?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  
  },
  {
    name: "NUMBER NINE GUITAR TEE",
    category: "Tshirts",
    price: "$23.93",
    image: "https://img.alicdn.com/bao/uploaded/i3/2943390456/O1CN01WijceZ1FEtRAGUuUY_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/2a4p9",
    linkUsfans: "https://usfans.com/product/2/713152360154?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  
  },
  {
    name: "NUMBER NINE TEE",
    category: "Tshirts",
    price: "$14.38",
    image: "https://img.alicdn.com/bao/uploaded/i3/2943390456/O1CN01aQostt1FEtZm3P9Gg_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/8ja72",
    linkUsfans: "https://usfans.com/product/2/811258955442?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  
  },
  {
    name: "NUMBER NINE SOVC TEE",
    category: "Tshirts",
    price: "$14.64",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01QNMsQZ1FEtZfvbVku_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/p6br4",
    linkUsfans: "https://usfans.com/product/2/811533361881?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  
  },
  {
    name: "NOCTA HOTSTEP 2",
    category: "Shoes",
    price: "$60.39",
    image: "https://si.geilicdn.com/wdseller1745861162-202a0000019ad93b99780a20e672_1179_884.jpg",
    linkKakobuy: "https://ikako.vip/raddj",
    linkUsfans: "https://usfans.com/product/3/7621101817?ref=TX9V9N",
    tag: "GX (WWTOP)",
    rating: 5
  
  },
  {
    name: "UNDERCOVER 10AW LONGSLEEVE",
    category: "Tshirts",
    price: "$24.63",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01X0CYbH1FEtWMvrjxb_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/jbrdq",
    linkUsfans: "https://usfans.com/product/2/745757648215?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  
  },

  {
    name: "RICK OWENS FLARED PANTS",
    category: "Shorts",
    price: "$28.39",
    image: "https://img.alicdn.com/bao/uploaded/i3/2214514093/O1CN01Q8Rq121g6e8wZQQMe_!!2214514093.jpg",
    linkKakobuy: "https://ikako.vip/v9kge",
    linkUsfans: "https://usfans.com/product/2/908704092173?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  
  },
  {
    name: "RANDOM SUPREME T-SHIRTS",
    category: "Tshirts",
    price: "$10.79",
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01IWOXUi29Zc4ai2fGD_!!2220073568082-0-cib.jpg",
    linkKakobuy: "https://ikako.vip/mbdr3",
    linkUsfans: "https://usfans.com/product/1/944517412239?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  
  },
  {
    name: "HYSTERIC GLAMOUR BOB DYLAN TSHIRT",
    category: "Tshirts",
    price: "$12.66",
    image: "https://img.alicdn.com/bao/uploaded/i1/3926619803/O1CN01DwSH112MHpkO87CMD_!!3926619803.jpg",
    linkKakobuy: "https://ikako.vip/v4myt",
    linkUsfans: "https://usfans.com/product/2/922348545861?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  
  },
  {
    name: "XAVIERSOBASED ANIME T-SHIRT",
    category: "Tshirts",
    price: "$20.86",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202604/17/c9cfbcbfefa773cb12dfa40b852f158f.jpg",
    linkKakobuy: "https://ikako.vip/gpy3w",
    linkUsfans: "https://usfans.com/product/2/1032859742347?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  
  },
  {
    name: "GOTH MONEY RECORD TEE",
    category: "Tshirts",
    price: "$19.34",
    image: "https://img.alicdn.com/bao/uploaded/i1/2215791284194/O1CN015G4fNA1gquA1olip3_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/jqpje",
    linkUsfans: "https://usfans.com/product/2/934889424661?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  
  },
  {
    name: "SALEM X BLADEE SILKROAD T-SHIRT",
    category: "Tshirts",
    price: "$20.83",
    image: "https://img.alicdn.com/bao/uploaded/i4/2215791284194/O1CN01r1Tptf1gqu7WVDzgP_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/u8suf",
    linkUsfans: "https://usfans.com/product/2/864034495080?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  
  },
  {
    name: "HAUNTED MOUND T-SHIRT",
    category: "Tshirts",
    price: "$21.03",
    image: "https://img.alicdn.com/bao/uploaded/i3/2215791284194/O1CN01uKtX2J1gquAhsa2jk_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/jya2g",
    linkUsfans: "https://usfans.com/product/2/949940321064?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  
  },
   {
    name: "I LOVE HAUNTED MOUND T-SHIRT",
    category: "Tshirts",
    price: "$15.51",
    image: "https://img.alicdn.com/bao/uploaded/i1/2215791284194/O1CN01koPi4m1gqu4Hv35xv_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/jbc6n",
    linkUsfans: "https://usfans.com/product/2/810238559904?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  
  },
  {
    name: "CPFFM X SAINT MICHAEL T-SHIRT",
    category: "Tshirts",
    price: "$12.37",
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01iKK7G7206uZu9ZDam_!!2837346801-0-cib.jpg",
    linkKakobuy: "https://ikako.vip/ssdam",
    linkUsfans: "https://usfans.com/product/1/774276403487?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  
  },
  
  




  
  
  
  
  
  
  
  


  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  

  
  
];



// ============================================
// 🏪 LISTA SPRZEDAWCÓW
// ============================================

let sellers = [
  {
    name: "Tophotfashion",
    category: "clothing",
    rating: 9.0,
    description: "Chrome hearts,Gallery dept, Essentials, luxury items",
    link: "https://tophotfashion.x.yupoo.com/albums",
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png",
    tag: "BEST"
  },
  {
    name: "UMKAO",
    category: "shoes",
    rating: 7.0,
    description: "ok and cheap seller for  Nike TN and similar shoes",
    link: "https://umkao.x.yupoo.com/albums",
    image: "https://m.media-amazon.com/images/I/615d34h0UiL._AC_UY900_.jpg",
    tag: "OK"
  },
  {
    name: "REPBROS",
    category: "clothing",
    rating: 9.0,
    description: "BEST SELLER FOR CDG, AMI",
    link: "https://repbros.x.yupoo.com/albums",
    image: "https://img.alicdn.com/bao/uploaded/i4/2221369795952/O1CN01TiMfk61tq4UrKL0kC_!!2221369795952.jpg",
    tag: "BEST"
  },
  {
    name: "SHARKBREEDER",
    category: "clothing",
    rating: 9.0,
    description: "BEST SELLER FOR TNF JACKET [TOP BATCH]",
    link: "https://shark-breeder.x.yupoo.com/collections/4994709",
    image: "https://si.geilicdn.com/pcitem1425026222-3ec000000199e4a07d640a20e2c5_1440_1440.jpg",
    tag: "BEST FOR TNF"
  },
  {
    name: "WWTOP",
    category: "shoes",
    rating: 9.0,
    description: "BEST SELLER FOR SHOES (CHECK WHICH IS BEST  BATCH BEFORE BUY)",
    link: "https://wwfake100.x.yupoo.com/albums?tab=gallery",
    image: "https://si.geilicdn.com/wdseller1745861162-7b0d0000019d4d329a530a8132bd_250_250.jpg?w=250&h=250&cp=1",
    tag: "BEST"
  },
  
  {
    name: "THETHUNDER",
    category: "clothing",
    rating: 10,
    description: "BEST SELLER FOR BURBERRY,BALENCIAGA (LUXURY ITEMS)",
    link: "https://thethunder.x.yupoo.com/albums",
    image: "https://si.geilicdn.com/pcitem2020241165-3ae60000019b4130bfc40a23041a-unadjust_731_728.png?w=400&h=400",
    tag: "BEST"
  },
  

  {
    name: "BAYMAXSOCKS",
    category: "clothing",
    rating: 10,
    description: "GOOD QUALITY SELLER FOR UNDERWEAR/SOCKS ETC.",
    link: "https://baymaxsocks.x.yupoo.com",
    image: "https://si.geilicdn.com/open1847561709-1234478995-571d000001978909a5ee0a22d249_2560_1920.jpg.webp?w=750&h=750&cp=1",
    tag: "UNDERWEAR"
  },
  {
    name: "GOAT222",
    category: "clothing",
    rating: 10,
    description: "BEST BATCH FOR SYNA",
    link: "https://goat-official222.x.yupoo.com/categories/4215138",
    image: "https://si.geilicdn.com/wdseller1936187346-365c00000198ef2e82950a2301b4_1373_1373.jpg",
    tag: "BEST"
  },
  {
    name: "GOAT",
    category: "clothing",
    rating: 10,
    description: "BEST BATCH FOR CORTEIZ",
    link: "https://goat-official.x.yupoo.com/",
    image: "https://si.geilicdn.com/wdseller1781632402-291f00000189b9c04af50a2102d0_750_750.jpg",
    tag: "BEST"
  },
  {
    name: "HOTDOG",
    category: "clothing",
    rating: 10,
    description: "BEST BATCH FOR Broken Planet & Akimbo",
    link: "https://hotdog-official.x.yupoo.com/categories/4098105",
    image: "https://si.geilicdn.com/wdseller1746487736-2220000001956987605d0a23041a_1170_1170.jpg",
    tag: "BEST"
  },
  {
    name: "PENGREPS",
    category: "clothing",
    rating: 10,
    description: "BEST BATCH FOR DERSCHUTZE,MERTRA",
    link: "https://pengreps.x.yupoo.com/albums",
    image: "https://img.alicdn.com/bao/uploaded/i4/1854157063/O1CN01hOdpUV222uVxtFpJC~hdr~_!!1854157063.heic",
    tag: "BEST"
  },
  {
    name: "OGWAVE",
    category: "clothing",
    rating: 10,
    description: "BEST SELLER FOR BEANIE/HATS",
    link: "https://ogwave.x.yupoo.com/",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/25/45a977f803b950c4ad385b797e5d4dde.jpg",
    tag: "BEST"
  },
  {
    name: "GODMALL (BUDGET)",
    category: "luxury",
    rating: 9,
    description: "BAGS (BUDGET) WE RECOMMEND TAKE  ITEMS WITH LETTER A E.G  P580A",
    link: "https://godmall.x.yupoo.com/",
    image: "https://si.geilicdn.com/pcitem902006663336-62d80000019ca80262160a20e284_529_686.jpg",
    tag: "BEST BUDGET"
  },
  {
    name: "SCARLETTLUXURY",
    category: "luxury",
    rating: 10,
    description: "(BEST BATCH) FOR LUXURY BAGS ETC.",
    link: "https://scarlettluxury.x.yupoo.com/",
    image: "https://si.geilicdn.com/pcitem902006663336-62d80000019ca80262160a20e284_529_686.jpg",
    tag: "BEST"
  },
  {
    name: "YOLO66",
    category: "shoes",
    rating: 10,
    description: "BEST SELLER FOR SHOES (CHECK WHICH IS BEST  BATCH BEFORE BUY)",
    link: "https://yolo66.x.yupoo.com/categories",
    image: "https://i.redd.it/yolo66-p6000s-v0-j0acjk5ivaig1.jpg?width=3024&format=pjpg&auto=webp&s=3eac553c523ab217429321abbd15c5d5bb0c6faa",
    tag: "BEST"
  },
  {
    name: "EVGA",
    category: "shoes",
    rating: 10,
    description: "BEST SELLER FOR SHOES (BALENCIAGA) (CHECK WHICH IS BEST  BATCH BEFORE BUY)",
    link: "https://shop1268847658.v.weidian.com/?userid=1268847658&wfr=c&source=home_shop&ifr=itemdetail&sfr=app",
    image: "https://si.geilicdn.com/pcdecorate1268847658-671200000187cb5ba81f0a2313c4-unadjust_750_750.gif?w=250&h=250&cp=1",
    tag: "BEST"
  }
  
  



  
];





// Widok: 'products' lub 'sellers'
let currentView = 'products';
let sellerCategory = 'all';

function switchView(view) {
  currentView = view;
  
  const productsBtn = document.getElementById('viewProductsBtn');
  const sellersBtn = document.getElementById('viewSellersBtn');
  const categoriesSection = document.getElementById('categoriesSection');
  const sellersCategories = document.getElementById('sellersCategories');
  const filterSection = document.getElementById('filterSection');
  const subtitle = document.getElementById('subtitle');
  const searchInput = document.getElementById('search');
  
  if (view === 'products') {
    productsBtn.classList.add('active');
    sellersBtn.classList.remove('active');
    categoriesSection.style.display = 'block';
    sellersCategories.style.display = 'none';
    filterSection.style.display = 'block';
    subtitle.textContent = 'Najlepszy Spreadsheet';
    if (searchInput) searchInput.placeholder = 'Szukaj produktu...';
    renderProducts();
  } else {
    productsBtn.classList.remove('active');
    sellersBtn.classList.add('active');
    categoriesSection.style.display = 'none';
    sellersCategories.style.display = 'block';
    filterSection.style.display = 'none';
    subtitle.textContent = 'Najlepsi Sprzedawcy';
    if (searchInput) {
      searchInput.placeholder = 'Szukaj sprzedawcy...';
      searchInput.value = '';
    }
    renderSellers();
  }
}

function filterSellers(cat) {
  sellerCategory = cat;
  
  document.querySelectorAll('.seller-cat-btn').forEach(btn => {
    btn.classList.remove('active');
  });
  const activeBtn = document.querySelector(`[onclick="filterSellers('${cat}')"]`);
  if (activeBtn) activeBtn.classList.add('active');
  
  renderSellers();
}

function renderSellers() {
  const grid = document.getElementById("grid");
  const search = document.getElementById("search")?.value.toLowerCase() || "";
  
  if (!grid) return;
  
  let filtered = sellers.filter(s => 
    (sellerCategory === "all" || s.category === sellerCategory) &&
    s.name.toLowerCase().includes(search)
  );
  
  const productCountSpan = document.getElementById("productCount");
  if (productCountSpan) productCountSpan.textContent = filtered.length;
  
  if (filtered.length === 0) {
    grid.innerHTML = `<div class="loading">✨ Brak sprzedawców w tej kategorii<br><span style="font-size: 12px; color: #444;">Spróbuj zmienić filtry</span></div>`;
    return;
  }
  
  grid.innerHTML = "";
  filtered.forEach(s => {
    const el = document.createElement("div");
    el.className = "card seller-card";
    
    // Generuj gwiazdki na podstawie oceny (9.2 -> 4.5 gwiazdki)
    const ratingStars = "★".repeat(Math.floor(s.rating / 2)) + "☆".repeat(5 - Math.floor(s.rating / 2));
    
    el.innerHTML = `
      <div class="card-img-wrapper">
        <img src="${s.image}" alt="${s.name}" onerror="this.src='https://via.placeholder.com/300x200?text=No+Image'">
      </div>
      <div class="tag seller-tag">${s.tag}</div>
      <h3>${escapeHtml(s.name)}</h3>
      <div class="seller-rating">
        <span class="rating-stars">${ratingStars}</span>
        <span class="rating-score">${s.rating}/10</span>
      </div>
      <p class="seller-description">${escapeHtml(s.description)}</p>
      <a href="${s.link}" target="_blank" rel="noopener noreferrer">
        <button class="link">🏪 Zobacz produkty →</button>
      </a>
    `;
    grid.appendChild(el);
  });
}

function handleSearch() {
  if (currentView === 'products') {
    applyFiltersAndSort();
  } else {
    renderSellers();
  }
}
// ============================================
// ⚠️ NIE EDYTUJ KODU PONIŻEJ (chyba że wiesz co robisz)
// ============================================

// Kurs USD do PLN
const USD_TO_PLN = 3.62;

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
  console.log("✅ renderProducts został wywołany");
console.log("Ilość produktów:", products.length);
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
    
    // 🔧 POPRAWIONY WYBÓR LINKU (bez productLink)
    let productUrl = "#";
    if (currentAgent === 'kakobuy') {
      productUrl = p.linkKakobuy || p.link || "#";
    } else {
      productUrl = p.linkUsfans || p.link || "#";
    }

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
      <a href="${productUrl}" target="_blank" rel="noopener noreferrer">
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

// ============================================
// 🤖 WYBÓR AGENTA (Kakobuy / USFans)
// ============================================

let currentAgent = localStorage.getItem('selectedAgent') || 'kakobuy';

// ============================================
// 🤖 KONFIGURACJA AGENTÓW (bez automatycznego generowania linków)
// ============================================

const agents = {
  kakobuy: {
    name: 'Kakobuy',
    registerUrl: 'https://www.kakobuy.com/register/?affcode=archivee',
    icon: 'https://kakobuy.com/favicon.ico'
  },
  usfans: {
    name: 'USFans',
    registerUrl: 'https://usfans.com/register?ref=TX9V9N',
    icon: 'https://usfans.com/favicon.ico'
  }
};

function showAgentPopup() {
  const popup = document.getElementById('agentPopupOverlay');
  if (popup) popup.classList.add('active');
}

function hideAgentPopup() {
  const popup = document.getElementById('agentPopupOverlay');
  if (popup) popup.classList.remove('active');
}

function setAgent(agentKey) {
  currentAgent = agentKey;
  localStorage.setItem('selectedAgent', agentKey);
    updateRegisterPopup();

  
  // Aktualizuj aktywny przycisk w popupie
  document.querySelectorAll('.agent-btn').forEach(btn => {
    if (btn.dataset.agent === agentKey) {
      btn.classList.add('active');
    } else {
      btn.classList.remove('active');
    }
  });
  
  // Aktualizuj tekst przycisku potwierdzenia
  const selectedSpan = document.getElementById('selectedAgentName');
  if (selectedSpan) selectedSpan.textContent = agents[agentKey].name;
}

function changeAgent() {
  showAgentPopup();
}

function initializeAgent() {
  // Ustaw aktywny przycisk w popupie
  setAgent(currentAgent);
  updateRegisterPopup();
  
  // Zmień link w popupie rejestracyjnym
  const popupBtn = document.querySelector('.popup-btn');
  if (popupBtn) {
    popupBtn.href = agents[currentAgent].registerUrl;
  }
  
  // Zmień linki w produktach (przy następnym renderowaniu)
  renderProducts();
}

// Obsługa kliknięć w przyciski agentów
document.addEventListener('DOMContentLoaded', () => {
  const kakobuyBtn = document.getElementById('agentKakobuy');
  const usfansBtn = document.getElementById('agentUsfans');
  const confirmBtn = document.getElementById('confirmAgentBtn');
  const changeBtn = document.getElementById('changeAgentBtn');
  
  if (kakobuyBtn) {
    kakobuyBtn.addEventListener('click', () => setAgent('kakobuy'));
  }
  if (usfansBtn) {
    usfansBtn.addEventListener('click', () => setAgent('usfans'));
  }
  if (confirmBtn) {
    confirmBtn.addEventListener('click', () => {
      hideAgentPopup();
      initializeAgent();
    });
  }
  if (changeBtn) {
    changeBtn.addEventListener('click', () => showAgentPopup());
  }
  
  // Pokaż popup tylko jeśli agent nie był wybrany
  const hasSelectedAgent = localStorage.getItem('selectedAgent');
  if (!hasSelectedAgent) {
    setTimeout(() => showAgentPopup(), 500);
  } else {
    initializeAgent();
  }
});

// Nadpisz funkcję renderProducts żeby używała linków z agenta
const originalRenderProducts = renderProducts;
renderProducts = function() {
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
    
    // Generuj link w zależności od wybranego agenta
    let productUrl = "#";
if (currentAgent === 'kakobuy') {
  productUrl = p.linkKakobuy || p.link || "#";
} else {
  productUrl = p.linkUsfans || p.link || "#";
}

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
      <a href="${productUrl}" target="_blank" rel="noopener noreferrer">
        <button class="link"> Zobacz item</button>
      </a>
    `;
    grid.appendChild(el);
  });
};


// ============================================
// 🔄 AKTUALIZACJA POPUPU REJESTRACYJNEGO
// ============================================

function updateRegisterPopup() {
  const popupTitle = document.querySelector('#popupOverlay h3');
  const popupDesc = document.querySelector('#popupOverlay p');
  const popupBtn = document.querySelector('#popupOverlay .popup-btn');
  const popupCodeLabel = document.querySelector('#popupOverlay .code-label');
  const popupCodeValue = document.querySelector('#popupOverlay .code-value');
  const popupDiscount = document.querySelector('#popupOverlay .popup-discount');
  
  if (currentAgent === 'kakobuy') {
    if (popupTitle) popupTitle.textContent = 'Dołącz do Kakobuy!';
    if (popupDesc) popupDesc.innerHTML = 'Zarejestruj się przez nasz link i otrzymaj <strong>bonus powitalny</strong> na pierwsze zakupy!';
    if (popupBtn) popupBtn.href = 'https://www.kakobuy.com/register/?affcode=archivee';
    if (popupCodeLabel) popupCodeLabel.textContent = 'Kod rabatowy:';
    if (popupCodeValue) popupCodeValue.textContent = 'archiverepss';
    if (popupDiscount) popupDiscount.innerHTML = '🎉 Otrzymujesz <strong>-15$</strong> na shipping!';
  } else {
    if (popupTitle) popupTitle.textContent = 'Dołącz do USFans!';
    if (popupDesc) popupDesc.innerHTML = 'Zarejestruj się przez nasz link i otrzymaj <strong>bonus powitalny</strong> na pierwsze zakupy!';
    if (popupBtn) popupBtn.href = 'https://usfans.com/register?ref=TX9V9N';
    if (popupCodeLabel) popupCodeLabel.textContent = 'Kod referencyjny:';
    if (popupCodeValue) popupCodeValue.textContent = 'TX9V9N';
    if (popupDiscount) popupDiscount.innerHTML = '🎉 Otrzymujesz <strong>specjalne zniżki</strong> na shipping!';
  }
}


// ============================================
// ⬆️ PRZYCISK SCROLL TO TOP
// ============================================

const scrollToTopBtn = document.getElementById('scrollToTopBtn');

window.addEventListener('scroll', () => {
  if (window.scrollY > 300) {
    scrollToTopBtn.classList.add('show');
  } else {
    scrollToTopBtn.classList.remove('show');
  }
});

scrollToTopBtn.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});