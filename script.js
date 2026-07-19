// ============================================
// 🛍️ BAZA DANYCH PRODUKTÓW - DODAWAJ TUTAJ NOWE PRODUKTY!
// ============================================
const products = [
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
    linkUsfans: "https://usfans.com/product/3/7565902946?ref=TX9V9N",
    tag: "LJR",
    rating: 5
  },
  {
    name: "ERD BLACK HOODIE",
    category: "Hoodies",
    price: "$30.75",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/19/181b5cf0ee0737cc3fce4a23f84a7eda.jpg",
    linkKakobuy: "https://ikako.vip/ct5va",
    linkUsfans: "https://usfans.com/product/3/7491911039?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 4
  },
  {
    name: "ERD EXPOSED CHRISTINA",
    category: "Hoodies",
    price: "$37",
    image: "https://img.alicdn.com/bao/uploaded/i3/2209401688377/O1CN01nzkhiG2BkixFHPEOI_!!2209401688377.jpg",
    linkKakobuy: "https://ikako.vip/2nz6h",
    linkUsfans: "https://usfans.com/product/2/aVYpa0olpkWMteuHv2r5KLxbsJnyYGBL0-eQnqZ4t6aJoE1O7Ats0jg?ref=TX9V9N",
    tag: "BDSJ MADE",
    rating: 4
  },
  {
    name: "Jordan 3 (A LOT OF CW)",
    category: "Shoes",
    price: "$67",
    image: "https://si.geilicdn.com/wdseller1800766149-03d500000199ce69b8010a23041a_1004_1004.jpg",
    linkKakobuy: "https://ikako.vip/cuhud",
    linkUsfans: "https://usfans.com/product/3/7233181350?ref=TX9V9N",
    tag: "GX",
    rating: 5
  },
  {
    name: "Jordan 4 (A LOT OF CW)",
    category: "Shoes",
    price: "$68-82",
    image: "https://si.geilicdn.com/wdseller1800766149-751d00000199be1057b40a21146b_1189_1189.jpg",
    linkKakobuy: "https://ikako.vip/88hdn",
    linkUsfans: "https://usfans.com/product/3/6656410659?ref=TX9V9N",
    tag: "GX",
    rating: 5
  },
  {
    name: "AF1",
    category: "Shoes",
    price: "$33",
    image: "https://drop-up.pl/cdn/shop/files/air-force-1-low-07-triple-white-drop-up.webp?v=1721894137",
    linkKakobuy: "https://ikako.vip/mug7s",
    linkUsfans: "https://usfans.com/product/3/7783109456?ref=TX9V9N",
    tag: "GX",
    rating: 5
  },
  {
    name: "AF1 X CDG",
    category: "Shoes",
    price: "$44",
    image: "https://si.geilicdn.com/wdseller1745861162-27f50000019ac1319b630a207569_1179_1180.jpg",
    linkKakobuy: "https://ikako.vip/mug7s",
    linkUsfans: "https://usfans.com/product/3/7783109456?ref=TX9V9N",
    tag: "GX",
    rating: 5
  },
  {
    name: "AF1 CPFFM",
    category: "Shoes",
    price: "$57",
    image: "https://si.geilicdn.com/open1733523732-1234478995-01f900000193832a70b50a8133b5_1179_884.jpg",
    linkKakobuy: "https://ikako.vip/33vjb",
    linkUsfans: "https://usfans.com/product/3/7780116095?ref=TX9V9N",
    tag: "WWT",
    rating: 5
  },
  {
    name: "AF1 X NOCTA",
    category: "Shoes",
    price: "$41",
    image: "https://si.geilicdn.com/open1733523732-1234478995-7a39000001937dd368d70aa08290_1166_874.jpg?w=640&h=640",
    linkKakobuy: "https://ikako.vip/wntsf",
    linkUsfans: "https://usfans.com/product/3/7783614004?ref=TX9V9N",
    tag: "X",
    rating: 5
  },
  {
    name: "AF1 X SUPREME",
    category: "Shoes",
    price: "$38",
    image: "https://si.geilicdn.com/pcitem1845163825-537600000190c026304e0a210349_1080_816.jpg",
    linkKakobuy: "https://ikako.vip/fszb3",
    linkUsfans: "https://usfans.com/product/3/7611437475?ref=TX9V9N",
    tag: "OWF",
    rating: 5
  },
  {
    name: "KOBE 6",
    category: "Shoes",
    price: "$70",
    image: "https://si.geilicdn.com/wdseller1800766149-2794000001953e97c7b60a2305d8_2560_2560.jpg",
    linkKakobuy: "https://ikako.vip/9hmbf",
    linkUsfans: "https://usfans.com/product/3/7080344125?ref=TX9V9N",
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
    linkUsfans: "https://usfans.com/product/3/7228123603?ref=TX9V9N",
    tag: "GX",
    rating: 5
  },
  {
    name: "AIR MAX 97",
    category: "Shoes",
    price: "$34-71",
    image: "https://si.geilicdn.com/pcitem1854263096-5f2b00000195d8ec7db00a8133cc_1200_1200.jpg",
    linkKakobuy: "https://ikako.vip/zq4ez",
    linkUsfans: "https://usfans.com/product/3/7436015958?ref=TX9V9N",
    tag: "G/OWF",
    rating: 5
  },
  {
    name: "NIKE P-6000",
    category: "Shoes",
    price: "$27",
    image: "https://si.geilicdn.com/pcitem901870080011-253b000001955d587db00a23038e_1440_1440.jpg",
    linkKakobuy: "https://ikako.vip/ptjfm",
    linkUsfans: "https://usfans.com/product/3/7615088496?ref=TX9V9N",
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
    linkUsfans: "https://usfans.com/product/2/JLEwRqOs3BNxirWEiThc2T8Ii_VHFO2nSO7nm-GN1xBerKB4Zi3OGw?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NUMBER NINE  SHIELD HOODIE",
    category: "Hoodies",
    price: "$39",
    image: "https://img.alicdn.com/bao/uploaded/i3/2943390456/O1CN01tC9CQu1FEteE2U0KP_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/auvew",
    linkUsfans: "https://usfans.com/product/2/rprJgsbJC4teCLl0JKq3fO0VLpCdlqtRhR9rC72n8xtMXy5QpU12hg?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
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
    linkUsfans: "https://usfans.com/product/2/1-HSm_zvI49-6k3Cy9MOI41qKD3tSQ7An0KwzdI5xE-zWLmQBFi1Tg?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NUMBER NINE LION HOODIE",
    category: "Hoodies",
    price: "$40",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01aWiY7m1FEthKJs5lq~crop,0,125,768,768~_!!2943390456.jpg_400x400q85.jpg_.webp",
    linkKakobuy: "https://ikako.vip/8qtac",
    linkUsfans: "https://usfans.com/product/2/h0KemRfLLFhQ0gZfL5r49XRTbSBPuVVtJd6e0vEfUNm1oeNG8qZALg?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NUMBER NINE SOVC HOODIE",
    category: "Hoodies",
    price: "$38",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN018SyP5i1FEtZiTM8qt_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/mct72",
    linkUsfans: "https://usfans.com/product/2/lvf4rY9CBk29C1pt30f0uSxY4YxLX7XRsbIx2fnCFgA75BGkeYCOVg?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NUMBER NINE SKULL HODIE",
    category: "Hoodies",
    price: "$62",
    image: "https://img.alicdn.com/bao/uploaded/i1/2200736549757/O1CN01RuSeJ72LwlWUhFC7U_!!2200736549757.jpg",
    linkKakobuy: "https://ikako.vip/usgae",
    linkUsfans: "https://usfans.com/product/2/dgZc3OgLVYN9fIcia7KZtgPvVowCUFntNPXcC97xhp7_ovA5HwkYQA?ref=TX9V9N",
    tag: "MADEBYSWAG",
    rating: 5
  },
  {
    name: "NUMBER NINE SKULL HODIE",
    category: "Hoodies",
    price: "$72",
    image: "https://img.alicdn.com/bao/uploaded/i3/2200736549757/O1CN01ZZcv0c2LwlVdmMKRt_!!2200736549757.jpg",
    linkKakobuy: "https://ikako.vip/hpcxu",
    linkUsfans: "https://usfans.com/product/2/aQhZNudnPCiAP4mXjNe791wyS-XILy3Ub5nDudCfagEmypmUSOoHAA?ref=TX9V9N",
    tag: "MADEBYSWAG",
    rating: 5
  },
  {
    name: "SUPREME X HYSTERIC GLAMOUR",
    category: "Hoodies",
    price: "$68",
    image: "https://www.theillest.pl/wp-content/uploads/2024/11/Supreme-HYSTERIC-GLAMOUR-Fall-Winter-2024-8.jpg",
    linkKakobuy: "https://ikako.vip/zmcw3",
    linkUsfans: "https://usfans.com/product/2/c5pZvbVv-sNzPrQMxmktCZ10PHkBcm4jjtBjrHB2rCHg12Wj_e3jRw?ref=TX9V9N",
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
    linkUsfans: "https://usfans.com/product/2/qbMjJeaDNbFB7tGNrx75uqNAzxNdXs6CojYRNk0uggRLiHlSf1e5lw?ref=TX9V9N",
    tag: "APEXMADE",
    rating: 5
  },
  {
    name: "BALENCIAGA EBAY ZIP UP",
    category: "Hoodies",
    price: "$37",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/6/30c953eedcac829eb63ec806991c7705.jpg",
    linkKakobuy: "https://ikako.vip/ejmmu",
    linkUsfans: "https://usfans.com/product/2/98e7jDvByldnigDZWRifWCoNTU8zirmQHsLeeRNAJ_hyTRAKL7H1bQ?ref=TX9V9N",
    tag: "APEXMADE",
    rating: 5
  },
  {
    name: "BALENCIAGA FUR ZIP UP",
    category: "Hoodies",
    price: "$56",
    image: "https://assets.allchinabuysheets.com/665f4b5bc53ebfd135d04b40/69273032577f2ab88a1b263b_6925d65b0f585962b0b359df_561506090_2228718664283514_9131020294079013372_n-removebg-preview.webp",
    linkKakobuy: "https://ikako.vip/dzwbm",
    linkUsfans: "https://usfans.com/product/2/mhTCFDtTJv55cjynKTiQWnkSNMha_By5yquxORkrWS3hxYtlQdolig?ref=TX9V9N",
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
    linkUsfans: "https://usfans.com/product/2/elamzV5ZEd0LqbNK3QWDzL6OOrXJgzW9tHilzj0Fj22uyCCOrPjo0A?ref=TX9V9N",
    tag: "RANDOM BATCH",
    rating: 5
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
    linkKakobuy: "https://ikako.vip/mqtj6",
    linkUsfans: "https://usfans.com/product/3/7780610003?ref=TX9V9N",
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
    linkKakobuy: "https://ikako.vip/gjsvt",
    linkUsfans: "https://usfans.com/product/3/7436863807?ref=TX9V9N",
    tag: "LW/OG",
    rating: 5
  },
  {
    name: "YEEZY 500",
    category: "Shoes",
    price: "$62",
    image: "https://si.geilicdn.com/pcitem1437660918-07cf00000178b8495aca0a217216_4032_4030.jpg",
    linkKakobuy: "https://ikako.vip/quc5s",
    linkUsfans: "https://usfans.com/product/3/7363285902?ref=TX9V9N",
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
    linkKakobuy: "",
    linkUsfans: "",
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
    linkKakobuy: "",
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
    linkUsfans: "https://usfans.com/product/2/Ibb3iXqTkOjNghc0fpeSPfsFA569ipONBDz2h4zcqadkUyHMYnKK9w?ref=TX9V9N",
    tag: "BDSS",
    rating: 5
  },
  {
    name: "HYSTERIC GLAMOUR REVERSIBLE FUR HOODIE",
    category: "Hoodies",
    price: "$69",
    image: "https://img.alicdn.com/bao/uploaded/i1/2126072107/O1CN01rwzcst1RR3bu8hZy7_!!2126072107.png",
    linkKakobuy: "https://ikako.vip/zjvkm",
    linkUsfans: "https://usfans.com/product/2/otzCJrdrhucaA0CYRTY-GIBtsGq006LbIWdiUy8p--3cC21C_a-ZLw?ref=TX9V9N",
    tag: "BDSS",
    rating: 5
  },
  {
    name: "HYSTERIC GLAMOUR HEADACHE HOODIE",
    category: "Hoodies",
    price: "$40",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01z6bJYX1FEti8NG0Fq_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/x52n4",
    linkUsfans: "https://usfans.com/product/2/DHA_kAYvmBQ0v9MpFko_G7Ze5Mz6LdFN4SbTB3XQnZnM0IkHdrBOEA?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "SP5DER PINK HOODIE",
    category: "Hoodies",
    price: "$42",
    image: "https://img.alicdn.com/bao/uploaded/i1/2219813327674/O1CN01kBCXn826YkT4irGlc_!!2219813327674.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D929834666023&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/ki1YiW7SZrSejX9nMWVoHLFh5AKIsa4MFTbiR7aILHe1yHrOU3KFOQ?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  },
  {
    name: "SP5DER x TRAVIS SCOTT RODERO HOODIE",
    category: "Hoodies",
    price: "$42",
    image: "https://img.alicdn.com/bao/uploaded/i2/2219813327674/O1CN01GVmRBd26YkVqaLfGR_!!2219813327674.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D992371547557&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/9n1qjhbOKtolL8FWhmBO4UG4bLnqMrxCJ3WLNbnj9WcqEWChoJ4Png?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  },
  {
    name: "SP5DER RHINESTONE HOODIE",
    category: "Hoodies",
    price: "$45",
    image: "https://img.alicdn.com/bao/uploaded/i1/2219813327674/O1CN01azRhoa26YkVqZGFgm_!!2219813327674.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D992372979833&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/e953fpsJiJAyUNHIBHgpWkanrFYg-pFRewkt_FqoAjNnl6V-iO1AsA?ref=TX9V9N",
    tag: "PIKA",
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
    linkUsfans: "https://usfans.com/product/2/wZmxRzbyBtKvSOlC675RAnH51wwsKO4NrJhzw4KeP3AG2ZTz1EK8hQ?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "RICK OWENS WIZARD HOODIE",
    category: "Hoodies",
    price: "$41",
    image: "https://img.alicdn.com/bao/uploaded/i4/62314016/O1CN01acQlrm1fXNTge4elY_!!62314016.jpg",
    linkKakobuy: "https://ikako.vip/7a3v6",
    linkUsfans: "https://usfans.com/product/2/JeG1kP8TjnRhYASM6S7qJ_38h03289uo1_AHO7dvTwMwFYjXYSqEkw?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "RICK OWENS SUBHUMAN HOODIE",
    category: "Hoodies",
    price: "$39",
    image: "https://img.alicdn.com/bao/uploaded/i3/62314016/O1CN01OVNA0I1fXNf0akPcv_!!62314016.jpg",
    linkKakobuy: "https://ikako.vip/ghbm5",
    linkUsfans: "https://usfans.com/product/2/622741344038?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "DIOR HOMME SS07 BRUCE LEE HOODIE",
    category: "Hoodies",
    price: "$34",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/25/987caa4325a3033d07db37d9cdca1547.jpg",
    linkKakobuy: "https://ikako.vip/k9crx",
    linkUsfans: "https://usfans.com/product/2/qnb-XXW4cK3El4BuCLwzKvJ-l59UBJNu45efToR-GxxA1G_c0cMU_a8?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "VETEMENTS SEXUAL FANTASIES",
    category: "Hoodies",
    price: "$58",
    image: "https://img.alicdn.com/bao/uploaded/i4/3822597683/O1CN014fPBij26cs22QmStU_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/8c7vs",
    linkUsfans: "https://usfans.com/product/2/iG4WsrA86V3C53gym-OjKjuzItHnpyWxKc805Q-gpLUWKHoOupWGFA?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  },
  {
    name: "VETEMENTS MTB HOODIE",
    category: "Hoodies",
    price: "$59",
    image: "https://img.alicdn.com/bao/uploaded/i4/3822597683/O1CN01Yhu5J226cs1sovJJR_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/xkucr",
    linkUsfans: "https://usfans.com/product/2/FXvESTvpGm9IMNmcsRoypaOPzSjUot6EoIa7rsBP2xJ3BFm1CTjG7A?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  },
  {
    name: "VETEMENTS ELEVEN INCH GUN CLUB GRAY",
    category: "Hoodies",
    price: "$59",
    image: "https://img.alicdn.com/bao/uploaded/i2/3822597683/O1CN01UPBPBu26crxz53r1G_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/nsudt",
    linkUsfans: "https://usfans.com/product/2/2Gp7vnFOQqc8Ej4m71cYkEAB_UiSTOgxQELYQZ7WPRpDeUmr6q__ng?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  },
  {
    name: "VETEMENTS ELEVEN INCH GUN CLUB BLACK",
    category: "Hoodies",
    price: "$59",
    image: "https://img.alicdn.com/bao/uploaded/i2/3822597683/O1CN01pGP7R726cs20IAU16_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/nhy34",
    linkUsfans: "https://usfans.com/product/2/cm-xLq4zkEsdgBfvm3IxZ4_ZzMzRLoIctjduXBuoDWvFtErpJlUpkw?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  },
  {
    name: "HELLSTAR BRAINWASHED PINK HOODIE",
    category: "Hoodies",
    price: "$66",
    image: "https://images.stockx.com/images/Hellstar-Brainwashed-With-Brain-Hoodie-Pink.jpg?fit=fill&bg=FFFFFF&w=1200&h=857&q=60&dpr=1&trim=color&updated_at=1692432898",
    linkKakobuy: "https://ikako.vip/26z7v",
    linkUsfans: "https://usfans.com/product/2/uTkMno85btBviEHpdAKEu1Jfn4gKB8Ysg3r7lNs568oiyhs8vczk8A?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  },
  {
    name: "360GSM BLANK HOODIE",
    category: "Hoodies",
    price: "$25",
    image: "https://img.alicdn.com/bao/uploaded/i1/808386976/O1CN01Z31Ese21P44B6wCSa_!!808386976.jpg",
    linkKakobuy: "https://ikako.vip/jdar4",
    linkUsfans: "https://usfans.com/product/2/4t2FJOCsLhUl62wkx9KHeF0FjjCLu8rAd0GzXAez4YV28cwgW8KNFV8?ref=TX9V9N",
    tag: "UNIONKINGDOM",
    rating: 5
  },
  {
    name: "480GSM BLANK HOODIE",
    category: "Hoodies",
    price: "$34",
    image: "https://img.alicdn.com/bao/uploaded/i4/808386976/O1CN01xJiAAp21P44PkivwB_!!808386976.jpg",
    linkKakobuy: "https://ikako.vip/d65q6",
    linkUsfans: "https://usfans.com/product/2/Lpg8uBi7gtEebCyH4ZgwPkvsSE6gTMq1qNcQ6LJQnQZ5GE450iSntBk?ref=TX9V9N",
    tag: "UNIONKINGDOM",
    rating: 5
  },
  {
    name: "630GSM BLANK HOODIE",
    category: "Hoodies",
    price: "$37",
    image: "https://img.alicdn.com/bao/uploaded/i3/808386976/O1CN01yn8oxv21P3z1hfHon_!!808386976.jpg",
    linkKakobuy: "https://ikako.vip/v8tnp",
    linkUsfans: "https://usfans.com/product/2/6k3b37ZxSnLsWV0xmVZAKLMjaHGeoSDO9UYUefsJA96OJY1QyiRrrA?ref=TX9V9N",
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
    linkUsfans: "https://usfans.com/product/2/7YapqXXzAeCZqYZ7fs6nc7h2472DLJOTFHPODkRUqbstlT7Kn-zANg?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  },
  {
    name: "RAF SIMONS NEW ORDER HOODIE",
    category: "Hoodies",
    price: "$75",
    image: "https://img.alicdn.com/bao/uploaded/i3/2200736549757/O1CN01fQtofd2LwlX2BV5UF_!!2200736549757.jpg",
    linkKakobuy: "https://ikako.vip/agxty",
    linkUsfans: "https://usfans.com/product/2/9XYHhb5BezRggnGza6yJw1Q1Pslbpm362Y9-xXrtac4s6YnjviDLlFE?ref=TX9V9N",
    tag: "MADEBYSWAG",
    rating: 5
  },
  {
    name: "RAF SIMONS ROOTS HOODIE",
    category: "Hoodies",
    price: "$75",
    image: "http://img.alicdn.com/imgextra/i3/2200736549757/O1CN01C04sop2LwlX7Dmw5p_!!2200736549757.jpg",
    linkKakobuy: "https://ikako.vip/68ntw",
    linkUsfans: "https://usfans.com/product/2/GE-TxggWXoR8E9R-oIkmjnOt6RtMOkygO5k1ij8Zruj4_0VKGsUj3b4?ref=TX9V9N",
    tag: "MADEBYSWAG",
    rating: 5
  },
  {
    name: "RAF SIMONS VIRGINIA CREEPER CREWNECK",
    category: "Hoodies",
    price: "$62",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/18/87db2535902729346f1b20f54751989d.jpg",
    linkKakobuy: "https://ikako.vip/myvhe3",
    linkUsfans: "https://usfans.com/product/2/84PPKhN2NDcDKsSshVBxICjqEfu0sWfLDhHoV6EPIWDGmTleEyrK1A?ref=TX9V9N",
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
    image: "https://kk-oss-wh-hk.kakobuy.com/whg/202606/05/afdd86611ab8748f7cfc8a5a07733af0.jpg",
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
    linkUsfans: "https://usfans.com/product/2/yMzdVnRQix_eP2a6EEq8DcRBxUuswkKIxVqiKM3IKV7lR14jIXw_Rw?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 4
  },
  {
    name: "ESSENTIALS FOG",
    category: "Hoodies",
    price: "$31",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/11/b7239d9756a065d5d55db2b307947615.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D978371331776&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/LOifYg3a69p5Kc6A3bUU51ytJB85Z-2l-IMDzPkYsgbGCEUGzjLGQw?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 4
  },
  {
    name: "ESSENTIALS FOG",
    category: "Hoodies",
    price: "$34.84",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/11/802a6f35780b40baf23b8b6e34068ca0.jpg",
    linkKakobuy: "https://ikako.vip/rqe7wa",
    linkUsfans: "https://usfans.com/product/2/wm3PPS1v3OYyAYJnLSznq-o7yFpAapR4I2L9j2qFSAU9a5PfYw6oKg?ref=TX9V9N",
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
    linkUsfans: "https://usfans.com/product/2/QmEPaczHxIeZ8HJl2u8O3C7gfONkHYFE1jJJxOS2UOPR8iXIUI3wMg?ref=TX9V9N",
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
  {
    name: "ERD MULHOLLAND T-SHIRT",
    category: "Tshirts",
    price: "$25.7",
    image: "https://img.alicdn.com/bao/uploaded/i1/3550899246/O1CN01A49ALr2IAj5LKXF92_!!3550899246.jpg",
    linkKakobuy: "https://ikako.vip/9ene7",
    linkUsfans: "https://usfans.com/product/2/YN13otSw9mwwlldeYFW1yPAfYjn04dFTNdLRBA-LcVlcWVI-o5t53Q?ref=TX9V9N",
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
    linkKakobuy: "",
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
    linkUsfans: "https://usfans.com/product/2/CA0Fv5F1bCHSG1vd_YrV_W5ABfwbevmPQNPHL85L4PdZqVpq3NzOMQ?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  },
  {
    name: "UNDERCOVER TEE",
    category: "Tshirts",
    price: "$10",
    image: "https://img.alicdn.com/bao/uploaded/i2/2217964616975/O1CN01F56UB321ObbEM5ji2~crop,338,0,1899,2532~_!!2217964616975.jpg",
    linkKakobuy: "https://ikako.vip/drx57",
    linkUsfans: "https://usfans.com/product/2/gOIcF5l50TMPV6IZvZd1jgCf3jRvyrt-5yDOMACkDr4uXYo7Mfd14g?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "UNDERCOVER KLAUS TEE",
    category: "Tshirts",
    price: "$20.57",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01FxjFJU1FEtW2R4hRn_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/rwawv",
    linkUsfans: "https://usfans.com/product/2/AkG283hve_CA7SYXcoWjUq1oXj5XPO5sMTfQNdvnmqHTg_dN-hsttw?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  },
  {
    name: "UNDERCOVER GURUGURU",
    category: "Tshirts",
    price: "$15.87",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01bCYjdF1FEtVrAiEHL_!!2943390456.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D645671108769&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/nsBFyYzhRuI2EGOv5U7rMoK-0YivXjIlSSqUm_LOwUTMZL7MrtPshA?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  },
  {
    name: "GOTHAM TEE",
    category: "Tshirts",
    price: "$20.87",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01Mh3Dpd1FEtc2vVoCn_!!2943390456.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D850109331994&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/qxtn_X79Jp3XRP1swR1jV5B19QzQ-mCUkn24w8YucqPuSBFQXCkMuQ?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  },
  {
    name: "NUMBER NINE KURT TEE",
    category: "Tshirts",
    price: "$14.29",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01Fs4sxm1FEtb1nSbQO_!!2943390456.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D834164734264&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/vABRrAAFL5qr-TI6uPmLyUJ-qqX1ggtAT27mqr_NNQIJcCaeAMTK7w?ref=TX9V9N",
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
    linkUsfans: "https://usfans.com/product/2/pmpBYenK9Yyjw1aJZ-JHETrhAceVfyJnQD_HP33FmPoTTCodxt398Q?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  },
  {
    name: "ESSENTIALS T-SHIRTS",
    category: "Tshirts",
    price: "$20.86",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/21/5000a6f78c898bdf535f4cbcb730065e.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D962039057752&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/6dqnmp_tRUBxF3tIGS7H15oBqXVsq42ptbIAMIdGMp6SIQ70o4ShHg?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  },
  {
    name: "ESSENTIALS T-SHIRTS (BUDGET BATCH)",
    category: "Tshirts",
    price: "$8.59",
    image: "https://img.alicdn.com/bao/uploaded/i1/2075710764/O1CN01TmCj9b1HVxKvJL8ZN_!!2075710764.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fcnfans.com%2Fproduct%2F%3Fshop_type%3Dtaobao%26id%3D668913880734&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/z-xIj5PvXuDKQiNkqGciLvtibUiIbl9LdM65K71uZ4vjZmt5veOFqQ?ref=TX9V9N",
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
    linkUsfans: "https://usfans.com/product/2/m47Aij_jo4Ee_5qWkcA8GgrOn_7TKzbV1x7VIkHfAVkDnHgyRBmY5w?ref=TX9V9N",
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
    name: "SP5DER OG WEB V2 GRAY TEE",
    category: "Tshirts",
    price: "$16.06",
    image: "https://img.alicdn.com/bao/uploaded/i3/2219813327674/O1CN013L2ggE26YkUE7zWaG_!!2219813327674.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D931241172963&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/rm8tSTIZiDKwCevWAZ78V8MrPHmaVzmKMYhObPqYWHpU3tywyvQbgw?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  },
  {
    name: "SP5DER X TRAVIS CACTUS JACK",
    category: "Tshirts",
    price: "$16.73",
    image: "https://img.alicdn.com/bao/uploaded/i2/2219813327674/O1CN01UGy4hV26YkT5zYhNU_!!2219813327674.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D930374774167&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/yZRuXHA3o5-L7ObpECJUd8ayJu8mpP-y8pei2iU8I6ka58TZVA-phg?ref=TX9V9N",
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
    name: "CDG TEE",
    category: "Tshirts",
    price: "$20.62",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01vmC0951FEtQNWRf5j_!!2943390456.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D706505282193&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/7_PKj6EHG5XM4vdvxrl0m3DtZVtqYg-hL8DBzg-upfgRBaVON0nz2g?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  },
  {
    name: "CDG PLAY TEE",
    category: "Tshirts",
    price: "$22.93",
    image: "https://img.alicdn.com/bao/uploaded/i3/2220706226099/O1CN01rAsnnL1uvOh82eklG_!!2220706226099.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D974955606875&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/zod8cs298vx0PdfBIVzqXpNntRkZgh2J3YEa8d1AbT2qJO8t7rHWmw?ref=TX9V9N",
    tag: "REPBROS",
    rating: 5
  },
  {
    name: "CDG DOUBLE HEARTS",
    category: "Tshirts",
    price: "$22.5",
    image: "https://img.alicdn.com/bao/uploaded/i2/2220706226099/O1CN01e2HvS31uvOh7Cx4Eo_!!2220706226099.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D976288568920&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/I649BiV8VLosnwor_JLQkap-YYjR4Mxw6kDJgpj0H-i5ZziW0baldA?ref=TX9V9N",
    tag: "REPBROS",
    rating: 5
  },
  {
    name: "CDG PLAY TEES",
    category: "Tshirts",
    price: "$19.46",
    image: "https://img.alicdn.com/bao/uploaded/i4/2220706226099/O1CN019YyHZ01uvOh7HyhDp_!!2220706226099.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D974427059839&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/UlNEe_7V1jUYYMABxfdOo5I_CXzoJsVu54dRgCJaN1f7-mHGhWHcQA?ref=TX9V9N",
    tag: "REPBROS",
    rating: 5
  },
  {
    name: "CDG PLAY TEE",
    category: "Tshirts",
    price: "$22.52",
    image: "https://img.alicdn.com/bao/uploaded/i1/2220706226099/O1CN01F6vyZ21uvOh7iPfPv_!!2220706226099.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D976313608209&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/_ZcMY5C0F-DEfk6SOeQCLi6Da2RR2S_1cSRhINwy7G8ntpSFrtyV0Q?ref=TX9V9N",
    tag: "REPBROS",
    rating: 5
  },
  {
    name: "GALLERY DEPT TSHIRTS (BUDGET)",
    category: "Tshirts",
    price: "$14.15",
    image: "https://img.alicdn.com/bao/uploaded/i2/2217139011106/O1CN01rLyBXN1K2b1ufD22p_!!2217139011106.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D771007293616&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/muYHoVd3zrLlsYwQ2PFGcEFQhxG_M9ky9IIZ9QWnPyERz5xF7Q7Sfw?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  },
  {
    name: "PALM ANGELS TSHIRTS (BUDGET)",
    category: "Tshirts",
    price: "$14.15",
    image: "https://img.alicdn.com/bao/uploaded/i4/2217139011106/O1CN01ImpDF51K2azrRaWIl_!!2217139011106.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D770939300665&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/2a4VDrv-bYLiLPwEdu4c7olb80FNrDkAfb9KlCy9lWIIeFeDkmcBTA?ref=TX9V9N",
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
    name: "BALENCIAGA BLUE FLARED LOST TAPES",
    category: "Pants",
    price: "$62.96",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/2e1e9a448e834633f20451e8996d735a.jpg",
    linkKakobuy: "https://ikako.vip/7zk79",
    linkUsfans: "https://usfans.com/product/2/88PSRyBg_XwtMO34v2n5484j06fqLm92V4FdAufREq5pGiZ4WTwwyA?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  },
  {
    name: "BUDGET BALENCIAGA BAGGY JEANS",
    category: "Pants",
    price: "$21.42",
    image: "https://img.alicdn.com/bao/uploaded/i4/402758480/O1CN010zXoKN2CVtV2JeZT1_!!402758480.jpg",
    linkKakobuy: "https://ikako.vip/an9zs",
    linkUsfans: "https://usfans.com/product/2/IcH3zu11IfAbQFUaYAew0LQ2gCYRKXCblaBow_9NaX0wLMjaxUNw1w?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  },
  {
    name: "BALENCIAGA FLARED JEANS (BUDGET)",
    category: "Pants",
    price: "$25",
    image: "https://img.alicdn.com/bao/uploaded/i1/2214514093/O1CN01iiHQSF1g6dzXIV2Gj_!!2214514093.jpg",
    linkKakobuy: "https://ikako.vip/z6naf",
    linkUsfans: "https://usfans.com/product/2/VLW0kyHNh2w69vShHTH2njS5Bp0fo_AUqpm0w4LjBjsLSE6IU7yu_g?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  },
  {
    name: "BALENCIAGA CUT UP JEANS",
    category: "Pants",
    price: "$82",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/26/0fb129ef5dc14a4f903db78713952641.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fe.tb.cn%2Fh.SJOZrGOcmZOEBIX%3Ftk%3Dwi7xf7YnCzH&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/3xqipBPXPm6NnHjHoeMIbOXjEQFQy_sUV6-YxelomaQsX1CEOKygUg?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  },
  {
    name: "PURPLE BRAND JEANS (WM179)",
    category: "Pants",
    price: "$40.75",
    image: "https://si.geilicdn.com/pcitem453299265-22dd0000019afa3b95f30a23111a_500_500.jpg",
    linkKakobuy: "https://ikako.vip/2cb9f",
    linkUsfans: "https://usfans.com/product/3/7553919705?ref=TX9V9N",
    tag: "HENGYU",
    rating: 5
  },
  {
    name: "PURPLE BRAND JEANS (WM178)",
    category: "Pants",
    price: "$41",
    image: "https://si.geilicdn.com/pcitem453299265-20050000019afa3b80360a2303ee_500_500.jpg",
    linkKakobuy: "https://ikako.vip/2cb9f",
    linkUsfans: "https://usfans.com/product/3/7553919705?ref=TX9V9N",
    tag: "HENGYU",
    rating: 5
  },
  {
    name: "PURPLE BRAND JEANS(PB141)",
    category: "Pants",
    price: "$41",
    image: "https://si.geilicdn.com/pcitem453299265-417500000198053f14a20a23111a_1200_1200.jpg",
    linkKakobuy: "https://ikako.vip/7dh9b",
    linkUsfans: "https://usfans.com/product/3/7491274425?ref=TX9V9N",
    tag: "HENGYU",
    rating: 5
  },
  {
    name: "PURPLE BRAND JEANS (WM131)",
    category: "Pants",
    price: "$41",
    image: "https://si.geilicdn.com/pcitem453299265-4c9d000001996672c29e0a2303ee_4168_4168.jpg",
    linkKakobuy: "https://ikako.vip/2cb9f",
    linkUsfans: "https://usfans.com/product/3/7553919705?ref=TX9V9N",
    tag: "HENGYU",
    rating: 5
  },
  {
    name: "MIJKO PATCH JEANS",
    category: "Pants",
    price: "$22",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/15/140d728f36b7fa7716cc73b1bfdecf47.jpg",
    linkKakobuy: "https://ikako.vip/pdyhvd",
    linkUsfans: "https://usfans.com/product/1/948138886155?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "ACNE 1981M VINTAGE BLACK",
    category: "Pants",
    price: "$53",
    image: "https://preview.redd.it/rep-topacney-vs-retail-comparison-acne-studios-1981m-v0-2e3k8p3tz1de1.jpg?width=640&crop=smart&auto=webp&s=0aa242d0926cb170c02200f94939f8e03fa789f4",
    linkKakobuy: "https://ikako.vip/byp9n",
    linkUsfans: "https://usfans.com/product/2/ji9FsYgvFxlmQ1PSqbb5M86KoybRVv57O-4zpb5aFwSUmXwqG4pnkA?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  },
  {
    name: "ESSENTIALS PANTS (BUDGET)",
    category: "Pants",
    price: "$18.81",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/3ff28cfd0ce1bdc77444552311e3ed6d.jpg",
    linkKakobuy: "https://ikako.vip/gqh67",
    linkUsfans: "https://usfans.com/product/1/863899956013?ref=TX9V9N",
    tag: "BUDGET",
    rating: 3
  },
  {
    name: "ESSENTIALS FOG PANTS",
    category: "Pants",
    price: "$28.38",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/6/125c4d37e99863a1509cd2ea48d04914.jpg",
    linkKakobuy: "https://ikako.vip/gud2k",
    linkUsfans: "https://usfans.com/product/2/iW_-6Rmyx3dLSmP-l1CknOFRD8_8XcxIhMZMvpMOYwfRkyiScY3l1w?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  },
  {
    name: "RICK OWENS SUBHUMAN WAXED PANTS",
    category: "Pants",
    price: "$34.17",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/8/28b72f710ddd559c7f062da4aae71937.jpg",
    linkKakobuy: "https://ikako.vip/8rb6r",
    linkUsfans: "https://usfans.com/product/1/582710282139?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "RICK OWENS DRKSHDW JEANS",
    category: "Pants",
    price: "$28",
    image: "https://img.alicdn.com/bao/uploaded/i4/2214514093/O1CN01Mw6ugI1g6e9yzqzbr_!!2214514093.jpg",
    linkKakobuy: "https://ikako.vip/xrfzt",
    linkUsfans: "https://usfans.com/product/2/936846585403?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "RICK OWENS PANTS",
    category: "Pants",
    price: "$34.48",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/6/ae41f484f522f921f4f6434444778709.jpg",
    linkKakobuy: "https://ikako.vip/8qyny",
    linkUsfans: "https://usfans.com/product/1/736006892046?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "RICK OWENS PANTS",
    category: "Pants",
    price: "$49.99",
    image: "https://si.geilicdn.com/pcitem1487039158-331200000196a90ffc680a20e7c7_800_800.jpg",
    linkKakobuy: "https://ikako.vip/4vm26",
    linkUsfans: "https://usfans.com/product/3/6602507923?ref=TX9V9N",
    tag: "PINK ELEPHANT",
    rating: 4
  },
  {
    name: "RICK OWENS PANTS",
    category: "Pants",
    price: "$58",
    image: "https://img.alicdn.com/bao/uploaded/i1/62314016/O1CN01nLKBFG1fXNMak3ugp_!!62314016.jpg",
    linkKakobuy: "https://ikako.vip/5fgu4",
    linkUsfans: "https://usfans.com/product/2/613071908927?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "GUCCI DEMNA BLACK JEANS",
    category: "Pants",
    price: "$63.5",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/26/ab1bd2aea8baab67c337ea8110c87103.jpg",
    linkKakobuy: "https://ikako.vip/4na4r",
    linkUsfans: "https://usfans.com/product/2/1000766846017?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  },
  {
    name: "GUCCI DEMNA JEANS",
    category: "Pants",
    price: "$63.5",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/25/41d1bb469c2875b723dd64d5839b48ff.jpg",
    linkKakobuy: "https://ikako.vip/4na4r",
    linkUsfans: "https://usfans.com/product/2/1000766846017?ref=TX9V9N",
    tag: "MVT",
    rating: 5
  },
  {
    name: "GALLERY DEPT SWEATPANTS (BUDGET)",
    category: "Pants",
    price: "$30.78",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/20/3897ba39e80549745b2d931aad7e38a8.jpg",
    linkKakobuy: "https://ikako.vip/w6nrz",
    linkUsfans: "https://usfans.com/product/2/756275697322?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  },
  {
    name: "GALLERY DEPT PANTS",
    category: "Pants",
    price: "$48.07",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/19/4ea0ec8e7e5f2b07e8255ca310236cc5.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D821375995617&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/821375995617?ref=TX9V9N",
    tag: "TOPHOT",
    rating: 5
  },
  {
    name: "HELLSTAR UNIFORM PANTS",
    category: "Pants",
    price: "$55",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202507/27/697b7b347c5aa8789840344516f33bd5.jpg",
    linkKakobuy: "https://ikako.vip/sjqrn",
    linkUsfans: "https://usfans.com/product/2/835085163698?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  },
  {
    name: "HELLSTAR PANTS",
    category: "Pants",
    price: "$28.06",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/13/2c6efc36b1fc6bbab51bfddf9ccc3c67.jpg",
    linkKakobuy: "https://ikako.vip/zb326",
    linkUsfans: "https://usfans.com/product/2/770997590604?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "TRUE RELIGION JEANS",
    category: "Pants",
    price: "$27",
    image: "https://img.alicdn.com/bao/uploaded/i4/2404365569/O1CN01Dd5upM1r0egErRCpf_!!2404365569.jpg",
    linkKakobuy: "https://ikako.vip/yn4wj",
    linkUsfans: "https://usfans.com/product/2/593013405795?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "NIKE X STUSSY SWEATPANTS",
    category: "Pants",
    price: "$23.55",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/16/0236cfe2a833020b9233c5441ae5f14c.jpg",
    linkKakobuy: "https://ikako.vip/7czwr",
    linkUsfans: "https://usfans.com/product/3/7595061507?ref=TX9V9N",
    tag: "NEWDP",
    rating: 4
  },
  {
    name: "NIKE X NOCTA",
    category: "Pants",
    price: "$25.08",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/11/4465525b6a49c60f138d8bee4cfbbfd6.jpg",
    linkKakobuy: "https://ikako.vip/h3w3s",
    linkUsfans: "https://usfans.com/product/1/837019488337?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "PALM ANGELS PANTS",
    category: "Pants",
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
    category: "Pants",
    price: "$32.91",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/99f0e3e1b3574f6ed874f6cba2305bcc.jpg",
    linkKakobuy: "https://ikako.vip/8j95q8",
    linkUsfans: "https://usfans.com/product/3/7627220799?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  },
  {
    name: "Derschutze blue Denim Pants",
    category: "Pants",
    price: "$32.91",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/31/6d865564526a5a676882dd6cd609facb.jpg",
    linkKakobuy: "https://ikako.vip/fpsdy",
    linkUsfans: "https://usfans.com/product/3/7619232142?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  },
  {
    name: "Derschutze Western Jogger",
    category: "Pants",
    price: "$32.91",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/ad5cf687195083e02bf18eecb6740cb2.jpg",
    linkKakobuy: "https://ikako.vip/z3g2x",
    linkUsfans: "https://usfans.com/product/3/7428893156?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  },
  {
    name: "Derschutze Denim Pants",
    category: "Pants",
    price: "$32.91",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/14e6f3fb99a8b11cf8dcf951f7c96f39.jpg",
    linkKakobuy: "https://ikako.vip/f5hec",
    linkUsfans: "https://usfans.com/product/3/7526934664?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  },
  {
    name: "Ralph Lauren Suit Pants",
    category: "Pants",
    price: "$24.51",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/559e31f4b72c116d181bfd30ef77e851.jpg",
    linkKakobuy: "https://ikako.vip/vxpf4u",
    linkUsfans: "https://usfans.com/product/3/7595166141?ref=TX9V9N",
    tag: "NEWDP",
    rating: 5
  },
  {
    name: "Ralph Lauren FLeece Pants",
    category: "Pants",
    price: "$21.79",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/24/adafb0606dea315046027c9d39baeaea.jpg",
    linkKakobuy: "https://ikako.vip/ep3p5",
    linkUsfans: "https://usfans.com/product/3/7570327918?ref=TX9V9N",
    tag: "NEWDP",
    rating: 5
  },
  {
    name: "Ralph Lauren Pants",
    category: "Pants",
    price: "$21.79",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/27/b3b5c401937392c718e40bbd14b5971c.jpg",
    linkKakobuy: "https://ikako.vip/j7dpx",
    linkUsfans: "https://usfans.com/product/3/7558813458?ref=TX9V9N",
    tag: "NEWDP",
    rating: 5
  },
  {
    name: "BPM RENT'S DUE PANTS",
    category: "Pants",
    price: "$28.99",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/2/cd56a7fa0e73e86b596b5e69de6d6dc9.jpg",
    linkKakobuy: "https://ikako.vip/f5yw8",
    linkUsfans: "https://usfans.com/product/3/7409905283?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  },
  {
    name: "BPM PANTS ALL THE STARS",
    category: "Pants",
    price: "$31.19",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202511/30/c2ce72f87d12679b12048bb059796047.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1621342910.v.weidian.com%2Fitem.html%3FitemID%3D7499784900&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7499784900?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 5
  },
  {
    name: "HYSTERIC GLAMOUR HAGI JEANS",
    category: "Pants",
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
    name: "EE X WARREN LOTAS",
    category: "Shorts",
    price: "$13.11",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/9/28e8ba7b6df49759ebc80caedd80d1db.jpg",
    linkKakobuy: "https://ikako.vip/43fhs",
    linkUsfans: "https://usfans.com/product/2/rJRV_4sIjIRRZcMDKUmOPbYpuCIyZ6UJVTFQ_Fyh-diZStnhtEVOWQ?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  },
  {
    name: "EE SHORTS",
    category: "Shorts",
    price: "$12.96",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/28/01bdce96a23355117620332f72a225e2.jpg",
    linkKakobuy: "https://ikako.vip/a2vks",
    linkUsfans: "https://usfans.com/product/2/sMhfJDxuZ2WaIh5-fAmhkUmzd2iemm5qN2sPexl0PNlc6fZpTCxicA?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  },
  {
    name: "EE SHORTS",
    category: "Shorts",
    price: "$12.96",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/14/97ba7964e94d9e242c4e365d16c1953a.jpg",
    linkKakobuy: "https://ikako.vip/numeb",
    linkUsfans: "https://usfans.com/product/2/JlAxUQMzDBDJ5T-zWqSil4htWqBWl-OKyB0lHFqdI97Anq8L7wEhhg?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  },
  {
    name: "EE SHORTS",
    category: "Shorts",
    price: "$13.1",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/18/f1ba1d316fa6addab797657d25137b6d.jpg",
    linkKakobuy: "https://ikako.vip/tfdjm",
    linkUsfans: "https://usfans.com/product/2/OJxpAwxhKPPof77Ijs8s_aWZdh3HLfJqqi0zMv0U2f8TeSqhdrCL5Q?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
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
    linkUsfans: "https://usfans.com/product/2/F2AFc2K7jRjudHcdlR1obZGPO83A_9SOpDqSvoT-rtg4ubgPLSVeDDU?ref=TX9V9N",
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
    tag: "DREAMREMAKE / BEST",
    rating: 5
  },
  {
    name: "ARCTERYX MACAI",
    category: "Jackets",
    price: "$94.03",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/10/c70355efaf91825e34c6e383a58280b0.jpg",
    linkKakobuy: "https://ikako.vip/dn9k2",
    linkUsfans: "https://usfans.com/product/3/7636378281?ref=TX9V9N",
    tag: "DREAMREMAKE / BEST",
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
    tag: "JIEYI / BEST",
    rating: 5
  },
  {
    name: "MONCLER TBELIARD BEST BATCH",
    category: "Jackets",
    price: "$221.73",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202511/26/ff8f17f63ff47b9585f44fc60e5228f4.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D699573998420%26spm%3Da213gs.v2success.result.1.61584831mOrh1a&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/699573998420?ref=TX9V9N",
    tag: "JIEYI / BEST",
    rating: 5
  },
  {
    name: "RICK OWENS SECRET PARKA JACKET",
    category: "Jackets",
    price: "$208",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/9/4ab182e98917ca976d54543797db3b23.jpg",
    linkKakobuy: "https://ikako.vip/wdg8b",
    linkUsfans: "https://usfans.com/product/2/1018167906778?ref=TX9V9N",
    tag: "APEXMADE / BEST",
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
    tag: "CPREPS / BEST",
    rating: 5
  },
  {
    name: "ARCTERYX BEANIE",
    category: "Belts",
    price: "$13",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/21/bca95dec778712dff8b754137e7a2f29.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7549993727&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7549993727?ref=TX9V9N",
    tag: "OGWAVE / BEST",
    rating: 5
  },
  {
    name: "MONCLER BEANIE",
    category: "Belts",
    price: "$12.38",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/25/45a977f803b950c4ad385b797e5d4dde.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7549993727&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7549993727?ref=TX9V9N",
    tag: "OGWAVE / BEST",
    rating: 5
  },
  {
    name: "SUPREME BEANIE",
    category: "Belts",
    price: "$16",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/24/aced86b8315f485a17dc22155631726f.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7617676948%26spider_token%3D9792&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7617676948?ref=TX9V9N",
    tag: "OGWAVE / BEST",
    rating: 5
  },
  {
    name: "CORTEIZ BEANIE",
    category: "Belts",
    price: "$16",
    image: "https://img.alicdn.com/bao/uploaded/i2/2214278784178/O1CN01l1Zlul1gjZlcOdbql_!!2214278784178.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D694456604440&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/694456604440?ref=TX9V9N",
    tag: "OGWAVE / BEST",
    rating: 5
  },
  {
    name: "LV BELT",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/weidian1860614617-151d00000197960f4fc70a23038e_1440_1920.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7496492536&affcode=archivee",
    linkUsfans: "",
    tag: "K8 / BEST",
    rating: 5
  },
  {
    name: "LV BELTS",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/open1621840505-1234478995-0ccd0000018f589a161f0a210559_1080_1080.jpg",
    linkKakobuy: "https://ikako.vip/gezpn",
    linkUsfans: "https://usfans.com/product/3/7564619134?ref=TX9V9N",
    tag: "K8 / BEST",
    rating: 5
  },
  {
    name: "YSL BELTS",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/open1621840505-1234478995-51870000018f58aba4550a239631_1080_1080.jpg",
    linkKakobuy: "https://ikako.vip/cs28e",
    linkUsfans: "https://usfans.com/product/3/7238620088?ref=TX9V9N",
    tag: "K8 / BEST",
    rating: 5
  },
  {
    name: "YSL BELTS",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/weidian1860614617-4f5c000001977b43220c0a2395e5_1440_1920.jpg",
    linkKakobuy: "https://ikako.vip/nvanfy",
    linkUsfans: "https://usfans.com/product/3/7491976825?ref=TX9V9N",
    tag: "K8 / BEST",
    rating: 5
  },
  {
    name: "HERMES BELTS",
    category: "Belts",
    price: "$39",
    image: "https://si.geilicdn.com/weidian1860614617-409a000001990f45f4b30a231316_1512_2016.jpg",
    linkKakobuy: "https://ikako.vip/sfn7a",
    linkUsfans: "https://usfans.com/product/3/7540305005?ref=TX9V9N",
    tag: "K8 / BEST",
    rating: 5
  },
  {
    name: "GUCCI BELTS",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/weidian1854818118-2fb60000019a70bdcd000a23041a_1279_1706.jpg",
    linkKakobuy: "https://ikako.vip/khkw5",
    linkUsfans: "https://usfans.com/product/3/7595122173?ref=TX9V9N",
    tag: "K8 / BEST",
    rating: 5
  },
  {
    name: "GUCCI BELTS",
    category: "Belts",
    price: "$35",
    image: "https://si.geilicdn.com/open1621840505-1234478995-17220000018f588c067d0a8115b5_1440_1920.jpg",
    linkKakobuy: "https://ikako.vip/retz6",
    linkUsfans: "https://usfans.com/product/3/7237657869?ref=TX9V9N",
    tag: "K8 / BEST",
    rating: 5
  },
  {
    name: "FERRAGAMO BELTS",
    category: "Belts",
    price: "$36",
    image: "https://si.geilicdn.com/weidian1860614617-0a6a00000199460a11c90a23047e_1440_1920.jpg",
    linkKakobuy: "https://ikako.vip/vny7g",
    linkUsfans: "https://usfans.com/product/3/7551041964?ref=TX9V9N",
    tag: "K8 / BEST",
    rating: 5
  },
  {
    name: "FERRAGAMO BELTS",
    category: "Belts",
    price: "$36",
    image: "https://si.geilicdn.com/weidian1860614617-7f580000019889a6820b0a230115_1440_1920.jpg",
    linkKakobuy: "https://ikako.vip/348by",
    linkUsfans: "https://usfans.com/product/3/7521850089?ref=TX9V9N",
    tag: "K8 / BEST",
    rating: 5
  },
  {
    name: "FERRAGAMO BELTS",
    category: "Belts",
    price: "$36",
    image: "https://si.geilicdn.com/weidian1860614617-7827000001910c0052160a23057e_1440_1920.jpg",
    linkKakobuy: "https://ikako.vip/b6jygq",
    linkUsfans: "https://usfans.com/product/3/7237693869?ref=TX9V9N",
    tag: "K8 / BEST",
    rating: 5
  },
  {
    name: "CHROME HEARTS BELT",
    category: "Belts",
    price: "$41",
    image: "https://si.geilicdn.com/weidian1860614617-57d100000197981ca68a0a23111a_1080_1080.jpg",
    linkKakobuy: "https://ikako.vip/bkbm9",
    linkUsfans: "https://usfans.com/product/3/7496597430?ref=TX9V9N",
    tag: "K8 / BEST",
    rating: 5
  },
  {
    name: "CHROME HEARTS BELT",
    category: "Belts",
    price: "$45",
    image: "https://si.geilicdn.com/weidian1860614617-5f1a0000019798181d4a0a2395a3_1080_1080.jpg",
    linkKakobuy: "https://ikako.vip/ckzgq",
    linkUsfans: "https://usfans.com/product/3/7494781775?ref=TX9V9N",
    tag: "K8 / BEST",
    rating: 5
  },
  {
    name: "SLP T-SHIRTS (100 CW)",
    category: "Tshirts",
    price: "$15.5",
    image: "https://img.alicdn.com/bao/uploaded/i4/2214183518581/O1CN01zvzBmf2DG9jbN9HCS_!!2214183518581.png",
    linkKakobuy: "https://ikako.vip/sv2y8",
    linkUsfans: "https://usfans.com/product/2/gw2AaywBp-5eNwqFtvrLfD0zrsDyWWfjzJ-_K32HMpJBgbvLv_WuLA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "KETAMINE T-SHIRT",
    category: "Tshirts",
    price: "$26.6",
    image: "https://img.alicdn.com/bao/uploaded/i4/2215791284194/O1CN01sjBPY41gquCafTLof_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/ecqqy",
    linkUsfans: "https://usfans.com/product/2/IJ33uD6icBmlws5M6kVmKVJDQ2802SOh9yoQeB_QO6FDl0kWL42Hcw?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "NETTSPEND INVERT T-SHIRT",
    category: "Tshirts",
    price: "$11.25",
    image: "https://img.alicdn.com/bao/uploaded/i4/2212643669335/O1CN01xWayyE2IpUKYRcAgu_!!2212643669335.png",
    linkKakobuy: "https://ikako.vip/3ne6e",
    linkUsfans: "https://usfans.com/product/2/z-aYQFM6LABJddLOqF8RtlN1p1NYNM9XAr0Gkg7gr_vcEiQUItoscA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "NETTSPEND EARLY LIFE CRISIS T-SHIRT",
    category: "Tshirts",
    price: "$20.59",
    image: "https://img.alicdn.com/bao/uploaded/i1/2215791284194/O1CN01WNOvQf1gqu9vhs1qX_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/jsy98",
    linkUsfans: "https://usfans.com/product/2/9NovoUFpiOs98SJdmWKFPnh4B04YDXXbmA3qE32djzpSaHWblBvp8A?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "NETTSPEND REHAB T-SHIRT",
    category: "Tshirts",
    price: "$20.59",
    image: "https://img.alicdn.com/bao/uploaded/i2/2215791284194/O1CN01CBZsge1gquBBxFzdl_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/jjvrj",
    linkUsfans: "https://usfans.com/product/2/TDhxe2S621PlrvR6zx66u-hy0Peu76w8ODsHM9vTaOx9CqrKRhWCBw?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "HYSTERIC GLAMOUR STRAWBERRY T-SHIRT",
    category: "Tshirts",
    price: "$22.13",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/16/4699cea934b2176cbbf843445a475a75.jpg",
    linkKakobuy: "https://ikako.vip/p34fw",
    linkUsfans: "https://usfans.com/product/2/kUZ08XrE_cspZOpjhikzV4c1YdpHiGSlKYrearO8dXvKelD3efzCQw?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "HYSTERIC GLAMOUR T-SHIRT",
    category: "Tshirts",
    price: "$19.04",
    image: "https://img.alicdn.com/bao/uploaded/i3/2126072107/O1CN01jJ8hET1RR3ZKEXxxg_!!2126072107.png",
    linkKakobuy: "https://ikako.vip/8z3nm",
    linkUsfans: "https://usfans.com/product/2/gOJqzOGiy1McKxZ3HqIz5H1lKzBppg8cMv0NlgZ6kOMlCM1APUSiMA?ref=TX9V9N",
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
    linkKakobuy: "https://ikako.vip/qf5bu5",
    linkUsfans: "https://usfans.com/product/3/7779704177?ref=TX9V9N",
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
    linkUsfans: "https://usfans.com/product/2/RPbUPCTcOuPsfUkktxVWv_QS1TNh49C_4F6BXthKcVz81qeXaNsBOw?ref=TX9V9N",
    tag: "BDSS / BEST",
    rating: 5
  },
  {
    name: "HYSTERIC GLAMOUR T-SHIRT",
    category: "Tshirts",
    price: "$15.83",
    image: "https://img.alicdn.com/bao/uploaded/i1/2126072107/O1CN018ydGoN1RR3bBHQ0VV_!!2126072107.jpg",
    linkKakobuy: "https://ikako.vip/wvszt",
    linkUsfans: "https://usfans.com/product/2/584MWNGhRnpSx9VpxFX1JBARHE7yP8y5IEmWVEFvW1gTAFpyFbzR0g?ref=TX9V9N",
    tag: "BDSS",
    rating: 5
  },
  {
    name: "RANDOM T-SHIRT",
    category: "Tshirts",
    price: "$8",
    image: "https://img.alicdn.com/bao/uploaded/i4/3043413681/O1CN014K74s61d3x01hzmT4_!!3043413681.jpg",
    linkKakobuy: "https://ikako.vip/rzmpc",
    linkUsfans: "https://usfans.com/product/2/1rd0tqWy3-Rp7qjF_48KjrxkgrSPwjlnYM4YTQlLiU-1JU2irjYphA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "SHIBU T-SHIRT",
    category: "Tshirts",
    price: "$11.08",
    image: "https://img.alicdn.com/bao/uploaded/i2/2217023441945/O1CN01jwviZQ1QErOaZ7YP8_!!2217023441945.jpg",
    linkKakobuy: "https://ikako.vip/ykfau",
    linkUsfans: "https://usfans.com/product/2/tRlPlzsftHHxIfVZBZOSNkuFago_cieVmdud5K46qeo-VumAfl0B1w?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "ANN D LOCTUS T-SHIRT",
    category: "Tshirts",
    price: "$20.89",
    image: "https://img.alicdn.com/bao/uploaded/i3/4169169639/O1CN01EB8QXG2L4ik5ZHuQp_!!4169169639.jpg",
    linkKakobuy: "https://ikako.vip/8j6ap",
    linkUsfans: "https://usfans.com/product/2/jeRFkJjzvz1crpH4WgKiLrka7dUig52d2vT1D-XwiKc0l9ltt4QzIQ?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "CARTI WLR T-SHIRT",
    category: "Tshirts",
    price: "$11.33",
    image: "https://img.alicdn.com/bao/uploaded/i1/2212643669335/O1CN01Ps8PHy2IpUEzjtIYL_!!2212643669335.jpg",
    linkKakobuy: "https://ikako.vip/x3sbe",
    linkUsfans: "https://usfans.com/product/2/UuLBPmgosrTQCNcuRCrgIg7fmViLS7XADaAhehE2ur2rq6hDTbk8GQ?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "AKIRA T-SHIRT",
    category: "Tshirts",
    price: "$11.4",
    image: "https://img.alicdn.com/bao/uploaded/i1/2212643669335/O1CN01QnSHXd2IpUHMH8zZ9_!!2212643669335.jpg",
    linkKakobuy: "https://ikako.vip/k8bhm",
    linkUsfans: "https://usfans.com/product/2/tOgXEwSO8fnUz6rWutjjXQHqHlVNiFZKVG5kHLg8HpwfzKQkdKnluQ?ref=TX9V9N",
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
    linkUsfans: "https://usfans.com/product/2/LLc5MpG-qvhy2q4Nvhmu1fdEHQhuiYtxMlR52pdSPy2VfBxF6LHeDw?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "I'M FINE BLOOD STAIN SHIRT",
    category: "Tshirts",
    price: "$11.26",
    image: "https://img.alicdn.com/bao/uploaded/i1/2218252751209/O1CN019PGXtm1KnlrjXlurh_!!2218252751209.jpg",
    linkKakobuy: "https://ikako.vip/n2rha",
    linkUsfans: "https://usfans.com/product/2/Ljo-CirNy3uJRvuTfCZxB3EV-HY-hZHo9X2umfyInRPihXK4MoKZCg?ref=TX9V9N",
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
    linkUsfans: "https://usfans.com/product/2/bEkqNyRBeBZ0kq14VlzdHP1rbxmPnPf24AxyKBqmlHwqbx_Vx1mhcw?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "2HOLLIS TEE",
    category: "Tshirts",
    price: "$11.23",
    image: "https://img.alicdn.com/bao/uploaded/i2/2212643669335/O1CN01fOFFsO2IpUKN3AGJI_!!2212643669335.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D921199812955&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/etYSUSajmGUGE67bwWtO3Tw9mTNEQw2rj3NNxyaFRNT-VjWQ78rK-g?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "2HOLLIS TEE",
    category: "Tshirts",
    price: "$11.39",
    image: "https://img.alicdn.com/bao/uploaded/i2/2212643669335/O1CN01REr0ZU2IpUMpVaF3f_!!2212643669335.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D981183457748&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/me8LtoySNlVNPSE6swkLSdVp9gL82ojiQHWHBnOjPjBa9aN4Pp73QA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "NUMBER NINE MICKEY TEE",
    category: "Tshirts",
    price: "$11.18",
    image: "https://img.alicdn.com/bao/uploaded/i1/2212643669335/O1CN01fRcB0T2IpUKCsPfL2_!!2212643669335.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D916936678572&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/bBRYszF2wLDd2DpQfm0f5j0YGd1uiHkvl9scDvAi742Sfgl66hqpSA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "RANDOM OPIUM TEE",
    category: "Tshirts",
    price: "$12.88",
    image: "https://img.alicdn.com/bao/uploaded/i4/2212643669335/O1CN01FMzCwD2IpUHgIwuUr_!!2212643669335.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D808924265747&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/e64q9n86XY8WhTcMMIGD7q_ToYr5hqwM5o3KBzIHR_QQJQo5afJQbA?ref=TX9V9N",
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
    linkUsfans: "https://usfans.com/product/2/sSkIuOcbglEU7CLNSnYnxJwF6LJhnh1iFYQ2Db-fRCWPc5nzZ-cx9g?ref=TX9V9N",
    tag: "PENGREPS / BEST",
    rating: 5
  },
  {
    name: "Derschutze Gallery Hoodie",
    category: "Hoodies",
    price: "$38",
    image: "https://img.alicdn.com/bao/uploaded/i1/1854157063/O1CN01QyqjQx222uUMVbfRC_!!1854157063.jpg",
    linkKakobuy: "https://ikako.vip/wks7m",
    linkUsfans: "https://usfans.com/product/2/4VMpfH0IaGB_42wUonjJlGC0tMgWVZA1b1bFLViwLKs4qdbeKuqx5w?ref=TX9V9N",
    tag: "PENGREPS / BEST",
    rating: 5
  },
  {
    name: "Derschutze Hoodie",
    category: "Hoodies",
    price: "$36",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/27/877099cfac8f23bb9f89f10d4a7561a9.jpg",
    linkKakobuy: "https://ikako.vip/jfr3x",
    linkUsfans: "https://usfans.com/product/2/EO_6d43RfJIq4eYBcC0T1zXWj8aGxTodImx_ALnYI5bOh70C913RZw?ref=TX9V9N",
    tag: "PENGREPS / BEST",
    rating: 5
  },
  {
    name: "Derschutze awakening V2 BLOSSOM Hoodie",
    category: "Hoodies",
    price: "$33",
    image: "https://img.alicdn.com/bao/uploaded/i1/1854157063/O1CN01w8zgPc222uSmzxiKS_!!1854157063.jpg",
    linkKakobuy: "https://ikako.vip/jadt8",
    linkUsfans: "https://usfans.com/product/2/gm4AtS-qEmEOaYrLYfS4dgB3hD7f1fvL1GZN0mjwZm1liwfkM-wYOw?ref=TX9V9N",
    tag: "PENGREPS / BEST",
    rating: 5
  },
  {
    name: "CDG HOODIE BIG HEART",
    category: "Hoodies",
    price: "$42",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202511/28/01c50d2925f56d4836c9bd496afc6501.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D975518273866&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/HvDljn5Plh7veC9zjz7Oo1lTiFO7wz0iKhZjwnShdrZqcGCOvZv6Bg?ref=TX9V9N",
    tag: "REPBROS / BEST",
    rating: 5
  },
  {
    name: "CDG HOODIE",
    category: "Hoodies",
    price: "$39",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202511/28/35262d6361a5fdfd130146e16d92089f.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D974299403094&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/82NJkHxSAoUB1AW-IUE4Xm4p6865LdgwfrhhxGhmJ3w54lDqQhk2jQ?ref=TX9V9N",
    tag: "REPBROS / BEST",
    rating: 5
  },
  {
    name: "CDG ZIP UP HOODIE",
    category: "Hoodies",
    price: "$40",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/20/08e16a9401ebe00c2643f5d1e4150eff.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D975522325315&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/zYwZrcxEswIX0bUjy0YyraFg_axOXgfHt362IHequhyaOWBC4FzpPQ?ref=TX9V9N",
    tag: "REPBROS / BEST",
    rating: 5
  },
  {
    name: "CDG PLAY ZIP UP HOODIE",
    category: "Hoodies",
    price: "$42",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/25/8f30df14c597686ba901499db9dc7cce.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fft%3Dt%26id%3D974788342665&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/c5ZfooOLwKlPlGXfS4EAEzG2UgsMqOaeKbIsAVGEtmpmmzF9af1xBg?ref=TX9V9N",
    tag: "REPBROS / BEST",
    rating: 5
  },
  {
    name: "CORTEIZ X BBK ROYALE ZIP UP HOODIE",
    category: "Hoodies",
    price: "$39",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/29/9ba1aab474da34577ab50582277951da.jpg",
    linkKakobuy: "https://ikako.vip/3hu3p",
    linkUsfans: "https://usfans.com/product/3/7653809265?ref=TX9V9N",
    tag: "GOAT / BEST",
    rating: 5
  },
  {
    name: " CORTEIZ BLACK ALCATRAZ HOODIE",
    category: "Hoodies",
    price: "$32",
    image: "https://si.geilicdn.com/wdseller1781632402-291f00000189b9c04af50a2102d0_750_750.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fshop1760986891.v.weidian.com%2Fitem.html%3FitemID%3D7653811325&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7653811325?ref=TX9V9N",
    tag: "GOAT / BEST",
    rating: 5
  },
  {
    name: "PAIKI FUR ZIP UP HOODIE",
    category: "Hoodies",
    price: "$41",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/26/336f42209aa9b110214507fcadaef5bc.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D841606251822&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/Lgx9uX5UtnRZQYoI_5L0n_GHbrwRtSKILMpA9JFeX_ZT5tTWf1SXNA?ref=TX9V9N",
    tag: "PAIKI",
    rating: 5
  },
  {
    name: "PLAYBOI CARTI CAT HOODIE",
    category: "Hoodies",
    price: "$25.19",
    image: "https://img.alicdn.com/bao/uploaded/i4/2212643669335/O1CN01VhYQHf2IpUFI208vJ_!!2212643669335.png",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D817686026285&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/CfPA3nokWYMWSH1uL2cpwXzZAXxgss-fVnfBg9AFbOCr_CoHTwGpFA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "ARTIEMASTER BLANK HOODIE'S (A LOT OF CW)",
    category: "Hoodies",
    price: "$11.45",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202604/29/13ff52c64b0c68e14f7812cd32ac9fec.jpg",
    linkKakobuy: "https://ikako.vip/4hpr6",
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
    linkUsfans: "https://usfans.com/product/2/jMC77I5VnhoqXy_QLTa0arfZsC5610QghIQoccdl2eh0GsSZLjrgVQ?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "SAINT ALEXANDER HOODIE",
    category: "Hoodies",
    price: "$26.35",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202604/23/3f81f5c5aa370380bba478a8b7a06c60.jpg",
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
    linkUsfans: "https://usfans.com/product/2/FnCIceteL_94AZb6pzuTQchFZZ5cZyfkKF44Ys-ugqSE0xLPHHMx2A?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "LOEWE ZIP UP HOODIE",
    category: "Hoodies",
    price: "$17.57",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/23/fac819aff84b92b91f96e4a6a54f6061.jpg",
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
    tag: "HOTDOG / BEST",
    rating: 5
  },
  {
    name: "PEACEINWAR PATRIOT HOODIE",
    category: "Hoodies",
    price: "$32.17",
    image: "https://img.alicdn.com/bao/uploaded/i4/2687803572/O1CN01FhgslU1cG1sGFeTNn_!!2687803572.jpg",
    linkKakobuy: "https://ikako.vip/s5ej2",
    linkUsfans: "https://usfans.com/product/2/El6e0PriPjBkdgw7tCUnpnkoH6yrEKjBhcfQ3P9eJMMpMjtez-QUzPs?ref=TX9V9N",
    tag: "ALIENSTUDIO / BEST",
    rating: 5
  },
  {
    name: "PEACEINWAR YIN YANG HOODIE",
    category: "Hoodies",
    price: "$31.21",
    image: "https://si.geilicdn.com/wdseller1995625455-75300000019ada5206720a2102b1_1290_1720.jpg",
    linkKakobuy: "https://ikako.vip/ap9c4",
    linkUsfans: "https://usfans.com/product/3/7621923643?ref=TX9V9N",
    tag: "ALIENSTUDIO / BEST",
    rating: 5
  },
  {
    name: "PEACEINWAR HOODIE",
    category: "Hoodies",
    price: "$32.79",
    image: "https://si.geilicdn.com/wdseller1995625455-37e50000019b21f71ac80a2395e9_1290_1720.jpg",
    linkKakobuy: "https://ikako.vip/xtndr",
    linkUsfans: "https://usfans.com/product/3/7633091801?ref=TX9V9N",
    tag: "ALIENSTUDIO / BEST",
    rating: 5
  },
  {
    name: "PEACEINWAR SOLIDER HOODIE",
    category: "Hoodies",
    price: "$33.5",
    image: "https://img.alicdn.com/bao/uploaded/i2/2687803572/O1CN014myot71cG1sFmRZBR_!!2687803572.jpg",
    linkKakobuy: "https://ikako.vip/cawfg",
    linkUsfans: "https://usfans.com/product/2/ydBljn5cvxKYWdJLI9fa38tYIBNpv7Jzm9TlbVCe6yTxcCdMIlvAUo8?ref=TX9V9N",
    tag: "ALIENSTUDIO / BEST",
    rating: 5
  },
  {
    name: "PEACEINWAR EU T-SHIRT",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-6b190000019d1a09ad3d0a23c286_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/7mmaw",
    linkUsfans: "https://usfans.com/product/3/7717974314?ref=TX9V9N",
    tag: "ALIENSTUDIO / BEST",
    rating: 5
  },
  {
    name: "PEACEINWAR NATIONAL FLAG T-SHIRT",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-3f300000019d19ee36ce0a23c1e0_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/gekdf",
    linkUsfans: "https://usfans.com/product/3/7718010924?ref=TX9V9N",
    tag: "ALIENSTUDIO / BEST",
    rating: 5
  },
  {
    name: "PEACEINWAR ANTI-WAR SKULL TSHIRT",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-53a30000019d19e9c52e0a239839_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/qnk8t",
    linkUsfans: "https://usfans.com/product/3/7715026173?ref=TX9V9N",
    tag: "ALIENSTUDIO / BEST",
    rating: 5
  },
  {
    name: "PEACEINWAR COLLABORATION SKULL",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-196b0000019d24d6ddee0a20e672_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/q62s7",
    linkUsfans: "https://usfans.com/product/3/7717371961?ref=TX9V9N",
    tag: "ALIENSTUDIO / BEST",
    rating: 5
  },
  {
    name: "PEACEINWAR BATTLEFIELD PHOTO",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-7e7a0000019d245e199e0a239646_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/gwyqy",
    linkUsfans: "https://usfans.com/product/3/7716979189?ref=TX9V9N",
    tag: "ALIENSTUDIO / BEST",
    rating: 5
  },
  {
    name: "PEACEINWAR CAMOUFLAGE SKULL ",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-020a0000019d2458154e0a2303ea_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/fyhge",
    linkUsfans: "https://usfans.com/product/3/7717224681?ref=TX9V9N",
    tag: "ALIENSTUDIO / BEST",
    rating: 5
  },
  {
    name: "PEACEINWAR BRAIDED NATIONAL FLAG",
    category: "Tshirts",
    price: "$13.4",
    image: "https://si.geilicdn.com/wdseller1995625455-07260000019d244eb7920a2305d8_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/u3tp2",
    linkUsfans: "https://usfans.com/product/3/7717242349?ref=TX9V9N",
    tag: "ALIENSTUDIO / BEST",
    rating: 5
  },
  {
    name: "PEACEINWAR FEDERAL POLO",
    category: "Tshirts",
    price: "$21.28",
    image: "https://si.geilicdn.com/wdseller1995625455-02c30000019d244b12460a240147_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/q9j4k",
    linkUsfans: "https://usfans.com/product/3/7717228491?ref=TX9V9N",
    tag: "ALIENSTUDIO / BEST",
    rating: 5
  },
  {
    name: "PEACEINWAR SKULL SWEATPANTS",
    category: "Pants",
    price: "$34.52",
    image: "https://si.geilicdn.com/wdseller1995625455-5ccb0000019b21edc7d70a23b5fa_1290_1720.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7635947538&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7635947538?ref=TX9V9N",
    tag: "ALIENSTUDIO / BEST",
    rating: 5
  },
  {
    name: "PEACEINWAR SKULL SWEATPANTS",
    category: "Pants",
    price: "$36.1",
    image: "https://si.geilicdn.com/wdseller1995625455-7f440000019b0db144a60a2304a0_1290_1720.jpg",
    linkKakobuy: "https://ikako.vip/vukad",
    linkUsfans: "https://usfans.com/product/3/7630649741?ref=TX9V9N",
    tag: "ALIENSTUDIO / BEST",
    rating: 5
  },
  {
    name: "PEACEINWAR EU SWEATPANTS",
    category: "Pants",
    price: "$34",
    image: "https://si.geilicdn.com/wdseller1995625455-1ad70000019b8d082bd60a230417_1290_1720.jpg",
    linkKakobuy: "https://ikako.vip/f6s9w",
    linkUsfans: "https://usfans.com/product/3/7653929908?ref=TX9V9N",
    tag: "ALIENSTUDIO / BEST",
    rating: 5
  },
  {
    name: "CHROME HEARTS MORO LONGSLEEVE",
    category: "Hoodies",
    price: "$31.37",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202509/6/cb50d32e7616cd79c15d4e855f2a7b61.jpg",
    linkKakobuy: "https://ikako.vip/buhj4",
    linkUsfans: "https://usfans.com/product/3/7507441990?ref=TX9V9N",
    tag: "TOPHOT / BEST",
    rating: 5
  },
  {
    name: "CHROME HEARTS LONGSLEEVE",
    category: "Hoodies",
    price: "$26.64",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/2/3e84c625460f0f2751299a169f5d7af0.jpg",
    linkKakobuy: "https://ikako.vip/by29w",
    linkUsfans: "https://usfans.com/product/3/7570120561?ref=TX9V9N",
    tag: "TOPHOT / BEST",
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
    linkUsfans: "https://usfans.com/product/2/eaqwjm9odEgyNErC4q7e7KSae58JG9gHIkZGvu8f6gMGMdkpbF-woA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "HYSTERIC GLAMOUR LONGSLEEVE",
    category: "Hoodies",
    price: "$17.5",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202512/25/4d3ff2a9c2d42750e25ac0869365b6af.jpg",
    linkKakobuy: "https://ikako.vip/typeg",
    linkUsfans: "https://usfans.com/product/2/XCzUrhovyP869Z8vtr25pPBiZckHRWd05uLFVe632vq63QmzB6CQDw?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "UNDERCOVER LONGSLEEVE",
    category: "Hoodies",
    price: "$20.78",
    image: "https://img.alicdn.com/bao/uploaded/i1/2214916689299/O1CN014S01jV2IZ04zhEr6o_!!2214916689299.jpg",
    linkKakobuy: "https://ikako.vip/tt8hz",
    linkUsfans: "https://usfans.com/product/2/AoIMW08rMDQaQLDC2O7LpIEVDyjRw7WolMoZBOpyTJJI8u14J8DMiA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "ERD LONGSLEEVE",
    category: "Hoodies",
    price: "$40",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202510/12/020e3d1b4f980b0bc2087f8e2292af57.jpg",
    linkKakobuy: "https://ikako.vip/yjb6t",
    linkUsfans: "https://usfans.com/product/2/Fr4389oSLSIT1BL7wKWG3jXAuSEOoPygQLZORo4-h3QnuYF686l8EA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "ERD CREWNECK",
    category: "Hoodies",
    price: "$17.42",
    image: "https://img.alicdn.com/bao/uploaded/i2/2075710764/O1CN01J9qQW51HVxdjUi5Yc_!!2075710764.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D906486784153&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/zQNcXnycjDueGvUlpgsP2JvOyx1d5Cs4yofcw1vZZz5OBqNXWV85ug?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "MM KNIT ZIP UP",
    category: "Hoodies",
    price: "$22.38",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/11/dd80e2246adf1ccbb16ea8dadd758a26.jpg",
    linkKakobuy: "https://ikako.vip/42939",
    linkUsfans: "https://usfans.com/product/2/Z0SuCSaweQeALLAFEkuTtXIL4ngh8xaMSZGxV-IJ954f17knHRoLmg?ref=TX9V9N",
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
    linkUsfans: "https://usfans.com/product/2/_Pc1NfEjyCOzZkA3crr18WDrvo1k_rcOIjPTB8zxFVIcrXd3weaANg?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "UNDERCOVER GIZ SAWTOOTH CREWNECK",
    category: "Hoodies",
    price: "$18.76",
    image: "http://img.alicdn.com/imgextra/i4/2217964616975/O1CN01KzYlGH21ObetuoSGL_!!2217964616975.jpg",
    linkKakobuy: "https://ikako.vip/65v9v",
    linkUsfans: "https://usfans.com/product/2/pYh4LVSUD2DITEoQBL1pajaFDfI6Lrw8_as2JrxWxy64Dmi8BrWSPw?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "NUMBER NINE BYE BYE GOOD NIGHT",
    category: "Tshirts",
    price: "$14.23",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202602/7/0e851edaa511445340d2cc680634c12d.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D910677881280&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/dLwS_zV1ZxfPlKap5umsoJi6uDaRp1vK2iXRObAgUKtzNrdTAz6gNQ?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  },
  {
    name: "SUPREME X HYSTERIC GLAMOUR TEE",
    category: "Tshirts",
    price: "$14.27",
    image: "https://img.alicdn.com/bao/uploaded/i1/3421444534/O1CN01CRPV8S1jMcmmySngs_!!3421444534.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D871616414168&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/rvfYSM3LYbbO3al2Nzoy1CmxL1I_PYHRW0m7HC_RNrlX69U1n-WQig?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "NUMBER NINE KICK YOUR ASS TEE",
    category: "Tshirts",
    price: "$14.31",
    image: "https://img.alicdn.com/bao/uploaded/i3/2943390456/O1CN01SSGrRX1FEtYp8DuZk_!!2943390456.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D793393698046&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/yPSQhzoHbrAUI4LjjqKh3J2H8jJXPWEefSP-Y_juk1BSDmt9yGwFdw?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  },
  {
    name: "MASTERMIND RHINESTONE TEE",
    category: "Tshirts",
    price: "$16",
    image: "https://img.alicdn.com/bao/uploaded/i4/3483485472/O1CN01YJgxSZ1qIEAuPPmwl_!!3483485472.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D752233274681&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/tmrkLKCK0Tqr4QD3sYbOsko9iU-70dRutBVb7QWVrYIS7SkEI_2pZQ?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "WLNEXT ZIP UP HOODIE",
    category: "Hoodies",
    price: "$32.38",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/16/f559eea0e0c0d63617688c5672e4b297.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D749224137219&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/UbQ5GUd4d5rbhoKmKiQWXDm9SSwkZkjox6SxFO6nU0rFLvy4x0MNYg?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "UVU INSIGNA ZIP UP HOODIE",
    category: "Hoodies",
    price: "$31.44",
    image: "https://si.geilicdn.com/wdseller1940384309-11f4000001982dab0b4d0a22d58f_1320_1320.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7513593962&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7513593962?ref=TX9V9N",
    tag: "PENGREPS / BEST",
    rating: 5
  },
  {
    name: "BASIC NIKE PANTS",
    category: "Pants",
    price: "$13.37",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/10/fd5cfb59281b8cb55b947a6c9f9b2568.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7535370671&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7535370671?ref=TX9V9N",
    tag: "RANDOM",
    rating: 3
  },
  {
    name: "Survet Flared joggers",
    category: "Pants",
    price: "$12",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/9/f11639e00eb8d5d83b77f538a66b85c9.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fweidian.com%2Fitem.html%3FitemID%3D7536809461&affcode=archivee",
    linkUsfans: "https://usfans.com/product/3/7536809461?ref=TX9V9N",
    tag: "RANDOM",
    rating: 3
  },
  {
    name: "(BUDGET) ACNE STUDIOS JEANS",
    category: "Pants",
    price: "$28.16",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/31/37b4f42c2cfe7c74c4ae63dd565aa82c.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D896534806883&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/896534806883?ref=TX9V9N",
    tag: "BUDGET",
    rating: 3
  },
  {
    name: "NO FAITH STUDIOS JEANS",
    category: "Pants",
    price: "$40.15",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/26/bf6a07eeb00ca9b39ddceb49721aa468.jpg",
    linkKakobuy: "https://ikako.vip/fj85r",
    linkUsfans: "https://usfans.com/product/2/863520488114?ref=TX9V9N",
    tag: "INFINITE / BEST",
    rating: 5
  },
  {
    name: "(BUDGET) GALLERY DEPT JEANS",
    category: "Pants",
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
    tag: "WWTOP / BEST",
    rating: 5
  },
  {
    name: "(BUDGET) HELLSTAR SHORTS",
    category: "Shorts",
    price: "$20.58",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/8/169e9be0be6b46be346a0746b27c7dd2.jpg",
    linkKakobuy: "https://ikako.vip/qka4w",
    linkUsfans: "https://usfans.com/product/2/TunyDTZvdDb1Jb4HjXpUDPSfv7izcTAfZmdzrFTyFHljoTKEJf9YyT8",
    tag: "RANDOM/BUDGET",
    rating: 4
  },
  {
    name: "HYSTERIC GLAMOUR LONGSLEEVE",
    category: "Hoodies",
    price: "$23.9",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01CfgW5P1FEtiXMb5Wz~crop,0,128,768,768~_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/dh5zs",
    linkUsfans: "https://usfans.com/product/2/4xA_HlpywrEHAif4zXPBTQkWCBDvDwoWxzo_NigDbUXjGW0a0I2PQQ?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  },
  {
    name: "(BUDGET) CORTEIZ HOODIE",
    category: "Hoodies",
    price: "$21.73",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202604/26/d2b631b119abbb372b1270e6114cf9ff.jpg",
    linkKakobuy: "https://ikako.vip/h9m3h",
    linkUsfans: "https://usfans.com/product/1/849048451034?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "(BUDGET) CORTEIZ SWEATPANTS",
    category: "Pants",
    price: "$17.32",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202604/21/a52d9de13daf7a79c3828861412c86de.jpg",
    linkKakobuy: "https://ikako.vip/h9m3h",
    linkUsfans: "https://usfans.com/product/1/849048451034?ref=TX9V9N",
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
    linkUsfans: "https://usfans.com/product/2/o6BFskSG7IOPT0gFYcVc-YAnZYYxRRu0EFVVoMVG_ohj1FstorFKXg?ref=TX9V9N",
    tag: "RANDOM BATCH",
    rating: 4
  },
  {
    name: "RANDOM WASHED TEE",
    category: "Tshirts",
    price: "$11.18",
    image: "https://img.alicdn.com/bao/uploaded/i1/1857205236/O1CN01Vd2GjE1oY8bwXxAzq_!!1857205236.jpg",
    linkKakobuy: "https://www.kakobuy.com/item/details?url=https%3A%2F%2Fitem.taobao.com%2Fitem.htm%3Fid%3D699698744900&affcode=archivee",
    linkUsfans: "https://usfans.com/product/2/6o2hByqGppZoGc6MtoknvTGFO35RHY1kBQMQQ2zFABkdHW-7o_0rOA?ref=TX9V9N",
    tag: "RANDOM BATCH",
    rating: 4
  },
  {
    name: "BALENCIAGA BRITNEY T-SHIRT",
    category: "Tshirts",
    price: "$14.17",
    image: "https://media.usfans.com/PDA/ae59dfe1-5e33-4615-8709-90b4c18310e4.jpg",
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
    linkUsfans: "https://usfans.com/product/3/7780606117?ref=TX9V9N",
    tag: "PK 4.0/LJR",
    rating: 5
  },
  {
    name: "VETEMENTS ZURICH",
    category: "Hoodies",
    price: "$56.83",
    image: "https://img.alicdn.com/bao/uploaded/i4/2210299185015/O1CN01ZfxYcp1muvO3pGJrk_!!2210299185015.jpg",
    linkKakobuy: "https://ikako.vip/vuqaj",
    linkUsfans: "https://usfans.com/product/2/8D_kkGCsLwOWp0TwDBSStVS0pWEyCN_RPkERsuihbCNDLUNoq0VIHg?ref=TX9V9N",
    tag: "VOGUE / BEST",
    rating: 5
  },
  {
    name: "HOMIXIDE GANG TOUR TEE",
    category: "Tshirts",
    price: "$11.52",
    image: "https://img.alicdn.com/bao/uploaded/i1/2212643669335/O1CN01JsaxDn2IpUF05WMXl_!!2212643669335.jpg",
    linkKakobuy: "https://ikako.vip/ed8kr",
    linkUsfans: "https://usfans.com/product/2/X4fMpGEB30RTq1PI7lqU2vbgQoLmWT8DKOpZBpsxtcOYcnrwjhZTAw?ref=TX9V9N",
    tag: "RANDOM",
    rating: 3
  },
  {
    name: "NO E MOSEN LONGSLEEVE",
    category: "Tshirts",
    price: "$32.19",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202509/30/58fb6d15c4033af0b330e43ab210efb8.jpg",
    linkKakobuy: "https://ikako.vip/xdmpq",
    linkUsfans: "https://usfans.com/product/2/-vY8TGwE5N-EU-xfcj2MUkaCLn7a0G0bMEnPFugP6VnPAprYYwXjsg?ref=TX9V9N",
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
    category: "Pants",
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
    linkUsfans: "https://usfans.com/product/2/XCaXbPFXlXSRYxw_x-lHzrkcQ_7_vIz4Vj6lGnlb9PvfY59aPnLpiO4?ref=TX9V9N",
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
    linkUsfans: "https://usfans.com/product/2/jwTrkt58SdhQJq7pshNJNAJTfW5LyQEYAZ8N-hkT5S7PijCNN8-Jqg?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  },
  {
    name: "UNDERCOVER 03 TEE",
    category: "Tshirts",
    price: "$16.24",
    image: "https://img.alicdn.com/bao/uploaded/i4/2652892586/O1CN01laq0eg1UyRHYWO6Ib_!!2652892586.jpg",
    linkKakobuy: "https://ikako.vip/p52x4",
    linkUsfans: "https://usfans.com/product/2/VrZxbGQeYynVYYV_zBQXLXFWMZWv_kbzIp4v2gqkO1-0fD31C-rg1w?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "UNDERCOVER 10SS TEE",
    category: "Tshirts",
    price: "$11.16",
    image: "https://img.alicdn.com/bao/uploaded/i4/2652892586/O1CN016H5Gte1UyRGxJlwq7_!!2652892586.jpg",
    linkKakobuy: "https://ikako.vip/uar5d",
    linkUsfans: "https://usfans.com/product/2/iA68jUa7R9WOBT6oQS6PALvWBkp32_0wbsH6LVNqef68VS7741QQFg?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "UNDERCOVER 10SS TEE",
    category: "Tshirts",
    price: "$12.91",
    image: "https://img.alicdn.com/bao/uploaded/i1/2652892586/O1CN01u9yYnP1UyRHDoVhtW_!!2652892586.jpg",
    linkKakobuy: "https://ikako.vip/8knn9",
    linkUsfans: "https://usfans.com/product/2/Ul9eCvIXVWhhN6e6BmIbwsb_LvOzuhpUcGeJNhxIYIBfnfn02CGhNw?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "UNDERCOVER 18SS TEE",
    category: "Tshirts",
    price: "$16.25",
    image: "https://img.alicdn.com/bao/uploaded/i1/2652892586/O1CN01k4BIlw1UyRIKCmCx1_!!2652892586.jpg",
    linkKakobuy: "https://ikako.vip/ujp77",
    linkUsfans: "https://usfans.com/product/2/2uZ1Crd--DhaoIx9Iw678UvvbxFrCRPLcLHVYWNBio88xCDJiTB1qA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "NUMBER NINE GUITAR TEE",
    category: "Tshirts",
    price: "$23.93",
    image: "https://img.alicdn.com/bao/uploaded/i3/2943390456/O1CN01WijceZ1FEtRAGUuUY_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/2a4p9",
    linkUsfans: "https://usfans.com/product/2/9EHiiq9bQl5VOku24dvkbnbCE32179PiTfJyUlk9s1qYenRKbbvTvA?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NUMBER NINE TEE",
    category: "Tshirts",
    price: "$14.38",
    image: "https://img.alicdn.com/bao/uploaded/i3/2943390456/O1CN01aQostt1FEtZm3P9Gg_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/8ja72",
    linkUsfans: "https://usfans.com/product/2/lhiaotaiLbAB9l2mlT3oHecgsygALbqQyzE3LJiHQCOzj3DXxEwj1Q?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NUMBER NINE SOVC TEE",
    category: "Tshirts",
    price: "$14.64",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01QNMsQZ1FEtZfvbVku_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/p6br4",
    linkUsfans: "https://usfans.com/product/2/YyqY0y1p7ER1XVC0W2z640UcD4gcJjbxWH9UkjR7XywdH-hrB99wEA?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NOCTA HOTSTEP 2",
    category: "Shoes",
    price: "$60.39",
    image: "https://si.geilicdn.com/wdseller1745861162-202a0000019ad93b99780a20e672_1179_884.jpg",
    linkKakobuy: "https://ikako.vip/8m2uur",
    linkUsfans: "https://usfans.com/product/3/7783042962?ref=TX9V9N",
    tag: "GX (BEST)",
    rating: 5
  },
  {
    name: "UNDERCOVER 10AW LONGSLEEVE",
    category: "Tshirts",
    price: "$24.63",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01X0CYbH1FEtWMvrjxb_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/jbrdq",
    linkUsfans: "https://usfans.com/product/2/g34xvafJfgiuK9d8_UaaClZhl1l0sHps9WFd38A10NpRgk9SKnVexg?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "RICK OWENS FLARED PANTS",
    category: "Pants",
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
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202604/30/584b7969a6c1717942f2535f6e8e2cfa.jpg",
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
    linkUsfans: "https://usfans.com/product/2/zH2LKzmApg_tt5JuSXqmPxrOBHT4GlS_Q05D8tOLvciaM71ZWRNLrg?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  },
  {
    name: "XAVIERSOBASED ANIME T-SHIRT",
    category: "Tshirts",
    price: "$20.86",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202604/17/c9cfbcbfefa773cb12dfa40b852f158f.jpg",
    linkKakobuy: "https://ikako.vip/gpy3w",
    linkUsfans: "https://usfans.com/product/2/1rIwfSm8DZFcuoaE3C5Uuvd6qzX6de7P6TAV1z3LGTeC2u6IkbT8-zI?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  },
  {
    name: "GOTH MONEY RECORD TEE",
    category: "Tshirts",
    price: "$19.34",
    image: "https://img.alicdn.com/bao/uploaded/i1/2215791284194/O1CN015G4fNA1gquA1olip3_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/jqpje",
    linkUsfans: "https://usfans.com/product/2/jTUJzrWzfd7JyJNJTNmyN35l_Z_z7917Feb8Cz1GIFqZ0Fu7O0p9pA?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  },
  {
    name: "SALEM X BLADEE SILKROAD T-SHIRT",
    category: "Tshirts",
    price: "$20.83",
    image: "https://img.alicdn.com/bao/uploaded/i4/2215791284194/O1CN01r1Tptf1gqu7WVDzgP_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/u8suf",
    linkUsfans: "https://usfans.com/product/2/-xvIMklcCR7ka1B3QTMantQylFpznvXJG9Xoo7_A55FIN-z6aGUx2w?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  },
  {
    name: "HAUNTED MOUND T-SHIRT",
    category: "Tshirts",
    price: "$21.03",
    image: "https://img.alicdn.com/bao/uploaded/i3/2215791284194/O1CN01uKtX2J1gquAhsa2jk_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/jya2g",
    linkUsfans: "https://usfans.com/product/2/IT-9WA9TpXpjfScDuppnxwWonWRtdbt5nswzsFGHAvBovFnB-z-uwg?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  },
  {
    name: "I LOVE HAUNTED MOUND T-SHIRT",
    category: "Tshirts",
    price: "$15.51",
    image: "https://img.alicdn.com/bao/uploaded/i1/2215791284194/O1CN01koPi4m1gqu4Hv35xv_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/jbc6n",
    linkUsfans: "https://usfans.com/product/2/uhu9k1sXwrfNYUpQOBPLikqdwzHb96BQUVx0-TU5Gzi_ea1GbwteCw?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  },
  {
    name: "CPFFM X SAINT MICHAEL T-SHIRT",
    category: "Tshirts",
    price: "$12.37",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202604/29/3442108fb25cb5a24ee6d8f67678e433.jpg",
    linkKakobuy: "https://ikako.vip/ssdam",
    linkUsfans: "https://usfans.com/product/1/774276403487?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  },
  {
    name: "RICK OWENS SHORTS",
    category: "Shorts",
    price: "$23.33",
    image: "https://img.alicdn.com/bao/uploaded/i1/2214514093/O1CN01WRTJl81g6e36HloDN_!!2214514093.jpg",
    linkKakobuy: "https://ikako.vip/wvhkv",
    linkUsfans: "https://usfans.com/product/2/dnav2SN_CO_xpS8RhwkI04a-nZYzFFtaaxktpGa1qnv3vxEFhEtR-g?ref=TX9V9N",
    tag: "BUDGET",
    rating: 3
  },
  {
    name: "DERSCHUTZE TEE JAZZ V2",
    category: "Tshirts",
    price: "$13.82",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202604/17/65e8557ede53771a13c56eafdd94174d.jpg",
    linkKakobuy: "https://ikako.vip/z54nm",
    linkUsfans: "https://usfans.com/product/2/HC66CLhe2ulhzrYiJjHIc6K_xUnzapsIPm-ayEx2GBBwoGtp9YGE7w?ref=TX9V9N",
    tag: "PENGREPS / BEST",
    rating: 5
  },
  {
    name: "DERSCHUTZE AWAKENING V2 TEE",
    category: "Tshirts",
    price: "$15.54",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/12/7379b1fe924ad27dd63b71781b23a537.jpg",
    linkKakobuy: "https://ikako.vip/82xs9",
    linkUsfans: "https://usfans.com/product/2/pxF83CJ-sG75I2P33UC9qLQDR1uM4QimoC6L3wIyNzHU0Giqtq5_yg?ref=TX9V9N",
    tag: "PENGREPS / BEST",
    rating: 5
  },
  {
    name: "THAT'S AWFUL COUGH SYRUP HOODIE",
    category: "Hoodies",
    price: "$41.79",
    image: "https://img.alicdn.com/bao/uploaded/i1/2214138141153/O1CN01Zd7aLN1KO7frE6Zq6_!!2214138141153.jpg",
    linkKakobuy: "https://ikako.vip/k8b78",
    linkUsfans: "https://usfans.com/product/2/YgBKIVtgE0USTIgTN0BP6Ep7p8boPhZvSvUK7vMmn6fpgEGS6SwFdA?ref=TX9V9N",
    tag: "PIKA / BEST",
    rating: 5
  },
  {
    name: "THAT'S AWFUL COUGH SYRUP HOODIE",
    category: "Hoodies",
    price: "$41.64",
    image: "https://img.alicdn.com/bao/uploaded/i3/2214138141153/O1CN01dZSjyu1KO7ftRrtq2_!!2214138141153.jpg",
    linkKakobuy: "https://ikako.vip/wsk2y",
    linkUsfans: "https://usfans.com/product/2/KahhwWWZ_Hpg3KYRujpWnefv6ft09WEfAJBSyunEoXmTzLJT8JPwZw?ref=TX9V9N",
    tag: "PIKA / BEST",
    rating: 5
  },
  {
    name: "VETE BRO ZIP UP HOODIE",
    category: "Hoodies",
    price: "$47.25",
    image: "https://img.alicdn.com/bao/uploaded/i2/2210299185015/O1CN01BGpy2z1muvO3peHpG~crop,62,0,1875,2500~_!!2210299185015.jpg",
    linkKakobuy: "https://ikako.vip/mja3n",
    linkUsfans: "https://usfans.com/product/2/Fd1c8ugdUYJdOqfVJKrDbTpXnCA_WHR7Odv5BjmYJ06sl9NJQL2LEw?ref=TX9V9N",
    tag: "VOGUE",
    rating: 5
  },
  {
    name: "NUMBER NINE SHIELD CREWNECK",
    category: "Hoodies",
    price: "$40.24",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202601/10/a9a1d806eab5088cb01d8e8955a6bbfa.jpg",
    linkKakobuy: "https://ikako.vip/t5b3z",
    linkUsfans: "https://usfans.com/product/2/y17tXzUKK2pGEr587rgLfpNNLumgGW_JaF1JzVqA6OUkEZpl_uha1A?ref=TX9V9N",
    tag: "(RANDOM) HONGSHENG",
    rating: 4
  },
  {
    name: "NUMBER NINE SOLOIST TEE",
    category: "Tshirts",
    price: "$24",
    image: "https://img.alicdn.com/bao/uploaded/i4/2943390456/O1CN01ZhvM7O1FEtREVOl4E_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/4xjhm",
    linkUsfans: "https://usfans.com/product/2/QRRrVE2-YPT52PmOMT0zCn0hhhMV2R3zx1H9jwVO3cKa0t-fXql5ew?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NUMBER NINE I LOVE GOTHAM TEE",
    category: "Tshirts",
    price: "$20.71",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01Mh3Dpd1FEtc2vVoCn_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/ju4bd",
    linkUsfans: "https://usfans.com/product/2/66I3_AArgAl39_xL3kIz__HVOEQljFV5XMg0-9H_XiZE4Cr6pHbGKw?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "UNDERCOVER EVA ELYSION TEE",
    category: "Tshirts",
    price: "$14.34",
    image: "https://img.alicdn.com/bao/uploaded/i3/2943390456/O1CN01hDRBHZ1FEtb1RQkUJ_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/98ygh",
    linkUsfans: "https://usfans.com/product/2/-0eBuqx3PbOZta7u7Yd9lHntISmEUreW8R_axBOX_pWsCaYgXhTKqQ?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "BALENCIAGA 3XL (BEST)",
    category: "Shoes",
    price: "$72",
    image: "https://si.geilicdn.com/pcitem1268847658-3d7e0000019515e5c1fb0a2303ee_1290_1290.jpg",
    linkKakobuy: "https://ikako.vip/fprtr",
    linkUsfans: "https://usfans.com/product/3/6229036205?ref=TX9V9N",
    tag: "ZC / BEST",
    rating: 5
  },
  {
    name: "DERSCHUTZE DENIM SHORTS",
    category: "Shorts",
    price: "$19.04",
    image: "https://kako-alosshk-pic.kakobuy.com/whg/202603/22/0a449d60950d93f378222cdb347052c7.jpg",
    linkKakobuy: "https://ikako.vip/ykm3x",
    linkUsfans: "https://usfans.com/product/1/1031401531331?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "SMOKING BOY HOODIE",
    category: "Hoodies",
    price: "$31.71",
    image: "https://si.geilicdn.com/wdseller1995625455-41b00000019d24da6ee70a23047e_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/w695t",
    linkUsfans: "https://usfans.com/product/3/7717334619?ref=TX9V9N",
    tag: "ALIEN",
    rating: 5
  },
  {
    name: "BALENCIAGA TAPE T-SHIRT",
    category: "Tshirts",
    price: "$13",
    image: "https://si.geilicdn.com/wdseller1730445636-502f00000186ef745c1f0a22d246_1284_1503.jpg",
    linkKakobuy: "https://ikako.vip/j9du3",
    linkUsfans: "https://usfans.com/product/3/6149020617?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "BALENCIAGA STRIKE BOOTS",
    category: "Shoes",
    price: "$84",
    image: "https://si.geilicdn.com/wdseller1268847658-362000000195e2bc23a10a2396f4_1290_1290.jpg",
    linkKakobuy: "https://ikako.vip/6vdc3",
    linkUsfans: "https://usfans.com/product/3/7435510687?ref=TX9V9N",
    tag: "GZ / EVGA",
    rating: 4
  },
  {
    name: "BALENCIAGA MICKEY SHOES",
    category: "Shoes",
    price: "$77",
    image: "https://si.geilicdn.com/wdseller1268847658-38c400000195e2c291610a2304a0_1080_1080.jpg",
    linkKakobuy: "https://ikako.vip/6vdc3",
    linkUsfans: "https://usfans.com/product/3/7435510687?ref=TX9V9N",
    tag: "GZ / EVGA",
    rating: 4
  },
  {
    name: "BALENCIAGA LAMBORGHINI LONGSLEEVE",
    category: "Tshirts",
    price: "$27.45",
    image: "https://img.alicdn.com/bao/uploaded/i4/3550899246/O1CN01RRhMbA2IAj5VkWYgV_!!3550899246.jpg",
    linkKakobuy: "https://ikako.vip/xpbke",
    linkUsfans: "https://usfans.com/product/2/ZeYc0S4kMzBuI6L74ns2N2SPAvwyTEjyhFasQuWYZq2LrmoZjQlCMQ?ref=TX9V9N",
    tag: "APEXMADE",
    rating: 5
  },
  {
    name: "MOWALOLA TANK TOP",
    category: "Tshirts",
    price: "$13",
    image: "https://media.usfans.com/PDA/a84b58c0-4ad9-4fa8-9031-2461bad7e9d1.jpg",
    linkKakobuy: "https://ikako.vip/37c9n",
    linkUsfans: "https://usfans.com/product/2/8oJtum0kjUlxrGeg5yfv0YyPxJ7DVVKG-Qpke1VVtiGex3MWEFZssw?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "COINBASE LARP T-SHIRT",
    category: "Tshirts",
    price: "$16",
    image: "https://si.geilicdn.com/open1831483949-1831483949-1f110000019be4a161fe0a8115c2_3024_4032.jpg",
    linkKakobuy: "https://ikako.vip/xpf32",
    linkUsfans: "https://usfans.com/product/3/7659907941?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "KEN CARSON GREAT CHAOS TEE",
    category: "Tshirts",
    price: "$12",
    image: "https://img.alicdn.com/bao/uploaded/i2/2212643669335/O1CN01NJWVhz2IpUFxQXabh_!!2212643669335.jpg",
    linkKakobuy: "https://ikako.vip/ws4vd",
    linkUsfans: "https://usfans.com/product/2/q4qQFOODchmoacv1m7DiezDWR848jOctltGGc_g7md5nF4GxQQtjCw?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "VETEMENTS INTERPOL TEE",
    category: "Tshirts",
    price: "$17",
    image: "https://img.alicdn.com/bao/uploaded/i2/2217868191481/O1CN014Aglbz1MoLdSpv9RA_!!2217868191481.jpg",
    linkKakobuy: "https://ikako.vip/ttknj",
    linkUsfans: "https://usfans.com/product/2/jsoLYX9nNlAodFkzmWJEN3lQaVuH__Xw86AURTAPVE_4R7lVHUxPdA?ref=TX9V9N",
    tag: "ANGELKING",
    rating: 4
  },
  {
    name: "STUSSY X RICK OWENS T-SHIRT",
    category: "Tshirts",
    price: "$15",
    image: "https://media.usfans.com/PDA/2f1adf51-db55-4821-a5a5-eac8ac238133.jpg",
    linkKakobuy: "https://ikako.vip/d54sn",
    linkUsfans: "https://usfans.com/product/2/Y14iwCWRz_fNsXDRl-XD9fdaepqqVvZuRjke9JiWeDJ-zq2eNjSO9A?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "BUDGET CORTEIZ SHORTS",
    category: "Shorts",
    price: "$11.49",
    image: "https://media.usfans.com/2026/05/12/193416/dd931f11-aa29-4c8d-8f16-07cab2bcac6a.jpg",
    linkKakobuy: "https://ikako.vip/v6wsg",
    linkUsfans: "https://usfans.com/product/1/735102637544?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  },
  {
    name: "BUDGET RHUDE SHORTS",
    category: "Shorts",
    price: "$17.93",
    image: "https://img.alicdn.com/bao/uploaded/i3/2215032114223/O1CN01pQuK1h1h4BYVhoPD4_!!2215032114223.jpg",
    linkKakobuy: "https://ikako.vip/ktb6p",
    linkUsfans: "https://usfans.com/product/2/Zxtft2A94OjX2RjL1MhglF1JTahTBRGJAmviQkK0H7cl2wjGgYp70A?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  },
  {
    name: "UP IN FLAMES SHORTS",
    category: "Shorts",
    price: "$14.53",
    image: "https://kk-oss-wh-sz.oss-cn-shenzhen.aliyuncs.com/whg/202605/12/3945f2d3ab1de19f8baf9cc439ceab15.jpg",
    linkKakobuy: "https://ikako.vip/gh5b9",
    linkUsfans: "https://usfans.com/product/2/PcSS78OIM6cReuXcMwsH4u2fPbt_AxmbFCArKl79JMQE9dclhkWeAGU?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  },
  {
    name: "NEBRASKA LICENSE ZIP UP HOODIE",
    category: "Hoodies",
    price: "$28.20",
    image: "https://media.usfans.com/PDA/933b891c-df44-4061-8435-77dab1696a7b.jpg",
    linkKakobuy: "https://ikako.vip/hmwac",
    linkUsfans: "https://usfans.com/product/2/UBsDSdT1TpBQTHdBylOGrSe96lq4qkJKy9s2jkEl4_6sQUtJad427A?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  },
  {
    name: "NUMBER NINE ZIP UP HOODIE",
    category: "Hoodies",
    price: "$40",
    image: "https://media.usfans.com/images/qc/20250806/2138c20a30e8452f9412aff29b1e7840.png",
    linkKakobuy: "https://ikako.vip/uxf3j",
    linkUsfans: "https://usfans.com/product/2/4AjtRshm9Vl-Y7G77a1FpSDEJeU9DTbLLtkpic65gGNqOgHSMWLYvQ?ref=TX9V9N",
    tag: "LMYER (BUDGET)",
    rating: 4
  },
  {
    name: "NUMBER NINE SHIELD HOODIE",
    category: "Hoodies",
    price: "$41.3",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN013eXWen1FEtiXWjEzR_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/t9by3",
    linkUsfans: "https://usfans.com/product/2/M68_j82DYoMBAJcKMH1EnSqvgQ27ZM_tz4qRz33XczL3qcurkYaLcJA?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NUMBER NINE SHIELD CREWNECK",
    category: "Hoodies",
    price: "$39.70",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01lljFWz1FEti0CWjky_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/d7esy",
    linkUsfans: "https://usfans.com/product/2/ZpzCLwY9lEKc80JohcSnF9QK4JNPdvYbUu8ONJ_Mr2Ck1LfdkyPdSw?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "UNDERCOVER LUNAR T-SHIRT",
    category: "Tshirts",
    price: "$16.21",
    image: "https://img.alicdn.com/bao/uploaded/i3/2943390456/O1CN01kuwrP31FEtVsFRf8A_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/xh3eg",
    linkUsfans: "https://usfans.com/product/2/VO03UMoZTycua-tW0egQhy49a-G9BxTR8PW3keKTzP83-tNxzLqQow?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "UNDERCOVER CANDLE T-SHIRT",
    category: "Tshirts",
    price: "$10",
    image: "https://media.usfans.com/PDA/36ad257c-54b6-4e90-8c45-c83c492b7684.jpg",
    linkKakobuy: "https://ikako.vip/7y5dt",
    linkUsfans: "https://usfans.com/product/2/wSJFxg607RZCo6yI0SlcR1Dde6ACYsnB8LdXha6Ruyq6SOxVuOEH9qs?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "NUMBERNINE HOODIE",
    category: "Hoodies",
    price: "$42",
    image: "https://img.alicdn.com/bao/uploaded/i1/2025450085/O1CN01k7uYHE1CUymOrdtsb_!!2025450085.jpg",
    linkKakobuy: "https://ikako.vip/bpu4z",
    linkUsfans: "https://usfans.com/product/2/XV7z5iKwlW5i42pTr3sHMV0SA960DnCHWd0U-SEVPqh5WE933KlVeQU?ref=TX9V9N",
    tag: "HONGSHENG",
    rating: 4
  },
  {
    name: "GRAILZ MARINES  HOODIE",
    category: "Hoodies",
    price: "$29.30",
    image: "https://img.alicdn.com/bao/uploaded/i1/2201204187410/O1CN019cbovH24bpvivIIMI_!!2201204187410.jpg",
    linkKakobuy: "https://ikako.vip/7hdhp",
    linkUsfans: "https://usfans.com/product/2/_LLqQ6XcSbS_83eCssBmoHf-rd682uSpdtK1t-JJMvfimjd4bKWjvg?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "NEW BALANCE 1906",
    category: "Shoes",
    price: "$36",
    image: "https://si.geilicdn.com/pcitem901870080011-588f00000198a566d6d80a239646_1440_1440.jpg",
    linkKakobuy: "https://ikako.vip/tgpcc",
    linkUsfans: "https://usfans.com/product/3/7611429333?ref=TX9V9N",
    tag: "M",
    rating: 4
  },
  {
    name: "NUMBER NINE HOODIE",
    category: "Hoodies",
    price: "$45",
    image: "https://img.alicdn.com/bao/uploaded/i4/2025450085/O1CN01DGYwMU1CUymk76PsQ_!!2025450085.jpg",
    linkKakobuy: "https://ikako.vip/95je3",
    linkUsfans: "https://usfans.com/product/2/H3iMnCejHNJBnfllgoL4tLBdDeO8M6FnwcyTF7_RT4_3O8_1NquWu7Q?ref=TX9V9N",
    tag: "HONGSHENG",
    rating: 4
  },
  {
    name: "AIME LEON DORE HOODIE",
    category: "Hoodies",
    price: "$33.40",
    image: "https://img.alicdn.com/bao/uploaded/i2/2331597012/O1CN018M7wHr21fXw2nj6k3_!!2331597012.jpg",
    linkKakobuy: "https://ikako.vip/qn8cw",
    linkUsfans: "https://usfans.com/product/2/oyIFJ3FKG7wUuEWiXAZg-qDJ7XL0SsOYBUHXvifHr3JeMR7sBmdVKg?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "ANONYMOUS CLUB SWEATPANTS",
    category: "Pants",
    price: "$45",
    image: "https://img.alicdn.com/bao/uploaded/i4/2210299185015/O1CN01fXkrdQ1muvITGPzeE_!!2210299185015.png",
    linkKakobuy: "https://ikako.vip/uhdza",
    linkUsfans: "https://usfans.com/product/2/828582071498?ref=TX9V9N",
    tag: "VOGUE",
    rating: 4
  },
  {
    name: "ALICE HOLLYWOOD TEE",
    category: "Tshirts",
    price: "$16.5",
    image: "https://img.alicdn.com/imgextra/i3/2214656006513/O1CN01D8rdMg1xz0eRN4DC8_!!2214656006513.jpg",
    linkKakobuy: "https://ikako.vip/mm8se",
    linkUsfans: "https://usfans.com/product/2/Z4rcPKkpNqJeNNXtgrAsDg7awnQ-92qntYmQfDbdsE-A6v9W-Iihog?ref=TX9V9N",
    tag: "K8",
    rating: 4
  },
  {
    name: "VIVIENNE WESTWOOD TEE",
    category: "Tshirts",
    price: "$31.40",
    image: "https://img.alicdn.com/bao/uploaded/i3/1114566/O1CN01Sthit71jbHUqqB8Je_!!1114566.jpg",
    linkKakobuy: "https://ikako.vip/2hppg",
    linkUsfans: "https://usfans.com/product/2/BcyZ6m5Dco6wDYttubAj0OhRi3eHnxlIu6I8mmwCewaePrhPsHS4Lg?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "ERD TEE",
    category: "Tshirts",
    price: "$26.68",
    image: "https://img.alicdn.com/bao/uploaded/i4/2215800851954/O1CN013RGc5P1QIys5jpc6g_!!2215800851954.jpg",
    linkKakobuy: "https://ikako.vip/ehz5z",
    linkUsfans: "https://usfans.com/product/2/iw_K1f9LiQ8FZ0__8Q3lT6yEbmNX-ciR3IvYoWOCyTySVgPqvvCt0g?ref=TX9V9N",
    tag: "暗号made",
    rating: 5
  },
  {
    name: "POLIZEI TEE",
    category: "Tshirts",
    price: "$26.68",
    image: "https://img.alicdn.com/bao/uploaded/i1/2909580396/O1CN01CcCY2i1EnPhFzbBaX_!!2909580396.jpg",
    linkKakobuy: "https://ikako.vip/43cjf",
    linkUsfans: "https://usfans.com/product/2/uoTTGnOyXZipoAIgNuSKhhuGLbyay_uutSYPp64rg3MkOc8hC8RZVQ?ref=TX9V9N",
    tag: "BOUND2",
    rating: 5
  },
  {
    name: "NETTSPEND HOODIE",
    category: "Hoodies",
    price: "$39.80",
    image: "https://img.alicdn.com/bao/uploaded/i1/2215791284194/O1CN01AGOZZK1gquAThWfPH_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/2xrf5",
    linkUsfans: "https://usfans.com/product/2/XKrSQqMgK60C3IAyzs9M-mXhDJuywRGQhy-mGphkzq9woem9cSf9zA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 3
  },
  {
    name: "I WANNA BE FAMOUS HOODIE",
    category: "Hoodies",
    price: "$15",
    image: "https://img.alicdn.com/bao/uploaded/i3/2143400835/O1CN01beGPqa1I2TnO0gceR~crop,0,180,1440,1440~_!!2143400835.jpg",
    linkKakobuy: "https://ikako.vip/753yw",
    linkUsfans: "https://usfans.com/product/2/QJ1Iy4YEzVd2LF-mEbd0-EXqa_JjXl8KfwM69h5tf53HHvNDbeU1uA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 3
  },
  {
    name: "HYSTERIC GLAMOUR BEAR TEE",
    category: "Tshirts",
    price: "$23",
    image: "https://img.alicdn.com/bao/uploaded/i4/2126072107/O1CN01kyNpZL1RR3eC5PGdI_!!2126072107.heic",
    linkKakobuy: "https://ikako.vip/dg9jq",
    linkUsfans: "https://usfans.com/product/2/8RcdSn8Ti-LojhgfnenjwMZfZ_GEjzQNejLg6GDxTpzIIbeVJSMGuts?ref=TX9V9N",
    tag: "BDSS",
    rating: 5
  },
  {
    name: "CSONLINE TEE",
    category: "Tshirts",
    price: "$31.50",
    image: "https://img.alicdn.com/bao/uploaded/i3/728515915/O1CN01MnuhUH1tZ7mOR2vfv_!!728515915.jpg",
    linkKakobuy: "https://ikako.vip/swerj",
    linkUsfans: "https://usfans.com/product/2/58CEeDsL-C4uUzbJ14FIZV55DarEpZCwZIKl4Ma8oqPrz2VChzTVEA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "CB SHORTS",
    category: "Shorts",
    price: "$25.3",
    image: "https://media.usfans.com/2026/05/23/142933/b6d48b2d-de94-404f-a609-acc5b198c793.jpg",
    linkKakobuy: "https://ikako.vip/pzu29",
    linkUsfans: "https://usfans.com/product/2/PM6tiDfbG87SJAwG8ep260ftZsUfuPGU-oh2dp5CdlSE4GHW00L38mE?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "GARMS SHORTS",
    category: "Shorts",
    price: "$27",
    image: "https://media.usfans.com/2026/05/28/140344/a39cd1f4-9137-4d93-be2a-6dc1bc4e89fd.jpg",
    linkKakobuy: "https://ikako.vip/squp3",
    linkUsfans: "https://usfans.com/product/2/HbJnHVw4KIKSd9lNuiSox5_9IWnjSFeYodkPzjBqTCniJdgh-AuwFQ?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "NIKE TECH SHORTS (BUDGET)",
    category: "Shorts",
    price: "$10.6",
    image: "https://kk-oss-wh-hk.kakobuy.com/whg/202605/29/911872b95df894af5101bebb58d994bb.jpg",
    linkKakobuy: "https://ikako.vip/6z86s",
    linkUsfans: "https://usfans.com/product/1/798929144098?ref=TX9V9N",
    tag: "BUDGET",
    rating: 3
  },
  {
    name: "MUAY THAI SHORTS",
    category: "Shorts",
    price: "$9.56",
    image: "https://media.usfans.com/2026/05/26/110339/9151d7b7-0ff3-47bd-98f7-6f5d9f2284eb.jpg",
    linkKakobuy: "https://ikako.vip/x7bnh",
    linkUsfans: "https://usfans.com/product/2/603053819761?ref=TX9V9N",
    tag: "BUDGET",
    rating: 5
  },
  {
    name: "MERTRA SHORTS",
    category: "Shorts",
    price: "$22.01",
    image: "https://media.usfans.com/2026/05/29/170442/f3b051b5-ec0c-4cd3-91ab-a89dab3499f9.jpg",
    linkKakobuy: "https://ikako.vip/rghrs",
    linkUsfans: "https://usfans.com/product/3/7757011512?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  },
  {
    name: "MERTRA SHORTS",
    category: "Shorts",
    price: "$22.01",
    image: "https://media.usfans.com/2026/05/26/111355/d3f7ea55-e960-40a9-9f27-35c4bf22c674.jpg",
    linkKakobuy: "https://ikako.vip/gjvqt",
    linkUsfans: "https://usfans.com/product/3/7542377914?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  },
  {
    name: "MERTRA SHORTS",
    category: "Shorts",
    price: "$24.50",
    image: "https://media.usfans.com/2026/05/21/143548/7dda9e05-7d59-42b4-b741-7be9d8854528.jpg",
    linkKakobuy: "https://ikako.vip/xqgrw",
    linkUsfans: "https://usfans.com/product/3/7542377914?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  },
  {
    name: "MERTRA SHORTS",
    category: "Shorts",
    price: "$22.01",
    image: "https://media.usfans.com/2026/05/24/201343/865e80a3-7c53-400e-82d0-abbedf37093e.jpg",
    linkKakobuy: "https://ikako.vip/qhjx7",
    linkUsfans: "https://usfans.com/product/3/7477715896?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  },
  {
    name: "MERTRA SHORTS",
    category: "Shorts",
    price: "$22.01",
    image: "https://media.usfans.com/2026/05/26/133532/b5a294f4-c28c-42f6-9e3a-0c64aa2c262a.jpg",
    linkKakobuy: "https://ikako.vip/6kdev",
    linkUsfans: "https://usfans.com/product/3/7436855327?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  },
  {
    name: "PEACEINWAR CHAOS HOODIE",
    category: "Hoodies",
    price: "$33.91",
    image: "https://si.geilicdn.com/wdseller1995625455-0a2c0000019d4e14672d0a239839_2560_3413.jpg",
    linkKakobuy: "https://ikako.vip/3p6ccu",
    linkUsfans: "https://usfans.com/product/3/7724592269?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  },
  {
    name: "PEACEINWAR EU HOODIE",
    category: "Hoodies",
    price: "$34.10",
    image: "https://si.geilicdn.com/wdseller1995625455-69720000019e301bed8a0a23b4f4_3025_3026.jpg",
    linkKakobuy: "https://ikako.vip/pnzu3",
    linkUsfans: "https://usfans.com/product/3/7768749330?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  },
  {
    name: "PEACEINWAR AIRBONE ZIP UP HOODIE",
    category: "Hoodies",
    price: "$45.48",
    image: "https://si.geilicdn.com/wdseller1995625455-7eec0000019dd830c1ff0a23c191_3025_3026.jpg",
    linkKakobuy: "https://ikako.vip/x9axd",
    linkUsfans: "https://usfans.com/product/3/7752775014?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  },
  {
    name: "PEACEINWAR RED STAR EMBRO HOODIE",
    category: "Hoodies",
    price: "$37.40",
    image: "https://si.geilicdn.com/wdseller1995625455-525c0000019daa24ef4d0a210247_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/qtkuf",
    linkUsfans: "https://usfans.com/product/3/7740280121?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  },
  {
    name: "420 GSM SHORTS",
    category: "Shorts",
    price: "$18.17",
    image: "https://img.alicdn.com/imgextra/i4/808386976/O1CN01a1OAnh21P42TPyWAS_!!808386976.jpg",
    linkKakobuy: "https://ikako.vip/utghb",
    linkUsfans: "https://usfans.com/product/2/95Gr89py7T-zbc1gCOqeqf2P7M1IflH-jzDEmw9dOtGlfhCBaxwZhQ?ref=TX9V9N",
    tag: "UNIONKINGDOM",
    rating: 5
  },
  {
    name: "360 GSM SHORTS",
    category: "Shorts",
    price: "$16.80",
    image: "https://img.alicdn.com/bao/uploaded/i1/808386976/O1CN01J2lQZG21P3zB4jXlI_!!808386976.jpg",
    linkKakobuy: "https://ikako.vip/jrpkn",
    linkUsfans: "https://usfans.com/product/2/-7bVm2zG9qqtas2gP5SYtEoOc5n4Ua0dtAUDvEAlKMqoYE-l4btvUQ?ref=TX9V9N",
    tag: "UNIONKINGDOM",
    rating: 5
  },
  {
    name: "UNDERCOVER 03 TEE",
    category: "Tshirts",
    price: "$24",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01VND1991FEtVykLiFZ_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/g2869",
    linkUsfans: "https://usfans.com/product/2/uIHLOwpGaVNpLJD6JAzQyfFf516glhgWfeZ6tRJ1sBswOqnLXVzaTQ?ref=TX9V9N",
    tag: "LMYER",
    rating: 5
  },
  {
    name: "PEACEINWAR SHORTS",
    category: "Shorts",
    price: "$15.90",
    image: "https://si.geilicdn.com/wdseller1995625455-5f070000019d19f23cb90a240147_1320_1760.jpg",
    linkKakobuy: "https://ikako.vip/f5vz5q",
    linkUsfans: "https://usfans.com/product/3/7715097759?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  },
  {
    name: "BULLETPROOF TEE",
    category: "Tshirts",
    price: "$15.90",
    image: "https://si.geilicdn.com/wdseller1995625455-66390000019d6c1d93a90a230449_3025_3026.jpg",
    linkKakobuy: "https://ikako.vip/e8uv8",
    linkUsfans: "https://usfans.com/product/3/7731863590?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  },
  {
    name: "HYSTERIC GLAMOUR TEE",
    category: "Tshirts",
    price: "$23.01",
    image: "https://img.alicdn.com/bao/uploaded/i3/2126072107/O1CN01dsprjO1RR3dkOld5A_!!2126072107.jpg",
    linkKakobuy: "https://ikako.vip/wh22d",
    linkUsfans: "https://usfans.com/product/2/cjewHLtz4yGZOc0Jag12acNmrZ47JloAraZISSgwFIrb7hkgOv0oV2A?ref=TX9V9N",
    tag: "BDSS",
    rating: 5
  },
  {
    name: "IDLT BLANK TEE",
    category: "Tshirts",
    price: "$4.80",
    image: "https://img.alicdn.com/bao/uploaded/i4/1566784/O1CN01LvFB0m1zz7ylH08Jw_!!1566784.jpg",
    linkKakobuy: "https://ikako.vip/5ggft",
    linkUsfans: "https://usfans.com/product/2/h2YWAucSNCtJarnPuRkRQ7LFBgADy1y5p4aDGx8ruwkXlMXuuDECQg?ref=TX9V9N",
    tag: "IDLT",
    rating: 5
  },
  {
    name: "NUMBERNINE MIRROR TEE",
    category: "Tshirts",
    price: "$27.28",
    image: "https://img.alicdn.com/bao/uploaded/i3/2025450085/O1CN01LZz4BU1CUyiTEb4FT_!!2025450085.jpg",
    linkKakobuy: "https://ikako.vip/yrp7d",
    linkUsfans: "https://usfans.com/product/2/-hy-xUU8F9t5LAeTHS7oSwWDFmJNVvu31o431eahvGPOcgEoXCqL8g?ref=TX9V9N",
    tag: "HONGSHENG",
    rating: 4
  },
  {
    name: "RYE PORNSTAR TEE",
    category: "Tshirts",
    price: "$23",
    image: "https://img.alicdn.com/bao/uploaded/i3/1955315533/O1CN01zDFQhD1qkATW1vkjR_!!1955315533.jpg",
    linkKakobuy: "https://ikako.vip/j25mc",
    linkUsfans: "https://usfans.com/product/2/WlDiCvO0Wz5X3bv7HYSbDd0IBGvpNknlEZovNHFUBC7cXDDu_KPpSA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "NETTSPEND T-SHIRT",
    category: "Tshirts",
    price: "$22.5",
    image: "https://img.alicdn.com/bao/uploaded/i3/2215791284194/O1CN01tqWTPp1gquAIKTwWo_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/ae52z",
    linkUsfans: "https://usfans.com/product/2/-QScCpLXwsU3vlFeSnJR_FU__09DCzBs3veVA4YwY3nHM5lgwSZVSg?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "RANDOM CAMO SHORTS",
    category: "Shorts",
    price: "$9.03",
    image: "https://img.alicdn.com/bao/uploaded/i4/2730747287/O1CN01ctcimt23hV6YwB1Qo_!!2730747287.jpg",
    linkKakobuy: "https://ikako.vip/ngnws",
    linkUsfans: "https://usfans.com/product/2/Fp-ZLYIPTAh8mdX5ezq9cgx2SW-6WWiGsQJeF3rZfAgsdMlmCo_Avw?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "BAPE X CHROME HEARTS TEE",
    category: "Tshirts",
    price: "$9.3",
    image: "https://si.geilicdn.com/open1831483949-1831483949-25ea0000019c1339d3670a231226_800_800.jpg",
    linkKakobuy: "https://ikako.vip/7ssk9",
    linkUsfans: "https://usfans.com/product/3/7684853494?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  },
  {
    name: "NUMBER NINE T-SHIRT",
    category: "Tshirts",
    price: "$14.67",
    image: "https://img.alicdn.com/bao/uploaded/i1/2943390456/O1CN01Ouqaas1FEtbvGWPN4_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/c3bk6",
    linkUsfans: "https://usfans.com/product/2/OsPphev-_aJgQVSLnwdXijQH5MLGmVW1Xj9veqwY78Xkv3uZs0Atyw?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NUMBER NINE SHIELD T-SHIRT",
    category: "Tshirts",
    price: "$21.01",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01NOrj7B1FEtck373Gt_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/gvwbh",
    linkUsfans: "https://usfans.com/product/2/oYuHWLNHn0Ik-MZguKo27OpWHOLyGT87ksSk-1CSD78LVIyS2GF4-A?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "NUMBER NINE ROLLING STONES T-SHIRT",
    category: "Tshirts",
    price: "$21.26",
    image: "https://img.alicdn.com/bao/uploaded/i4/2943390456/O1CN0177SLaG1FEtg0TnRuv_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/h58xb",
    linkUsfans: "https://usfans.com/product/2/zFqkuFfdKR5CWnNao8jSjzJr0vw0z21V5_OqR9bgJbttxaBWezHuvQ?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "PHILIP PLEIN T-SHIRTS",
    category: "Tshirts",
    price: "$11.23",
    image: "https://media.usfans.com/2026/06/07/102640/91b896c0-61e1-4064-9b12-fb167369206a.jpg",
    linkKakobuy: "https://ikako.vip/puaj3",
    linkUsfans: "https://usfans.com/product/1/709550858740?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  },
  {
    name: "SUPREME T-SHIRT",
    category: "Tshirts",
    price: "$16.47",
    image: "https://media.usfans.com/PDA/b64881bb-ba2c-4aa2-a3d2-20f6e8d89dda.jpg",
    linkKakobuy: "https://ikako.vip/n2gsv",
    linkUsfans: "https://usfans.com/product/2/Rw6Gz0FBzKyJ5MxZu2mxref-NNNMloCfHOx-oE1nzEj98-oy-HU-mg?ref=TX9V9N",
    tag: "BEST/TEENAGECLUB",
    rating: 4
  },
  {
    name: "REVENGE T-SHIRTS",
    category: "Tshirts",
    price: "$11",
    image: "https://img.alicdn.com/bao/uploaded/i4/2196894558/O1CN01w1NYPY1jXbzpSi1vv_!!2196894558.jpg",
    linkKakobuy: "https://ikako.vip/u27xb",
    linkUsfans: "https://usfans.com/product/2/2VKqEnd-QJZ_ohZRi1Q898i4mlXn9ISBdMSsUJetxhlVg19oP4-fsA?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  },
  {
    name: "BAPE T-SHIRTS",
    category: "Tshirts",
    price: "$8",
    image: "https://media.usfans.com/2026/06/16/165402/2c8f4f9d-a015-41ef-8221-04bd721f9f51.jpg",
    linkKakobuy: "https://ikako.vip/cvutw",
    linkUsfans: "https://usfans.com/product/1/965138963696?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  },
  {
    name: "MARLBORO T-SHIRT",
    category: "Tshirts",
    price: "$7.90",
    image: "https://si.geilicdn.com/open1624782517-1624782517-5bf8000001976e158b7a0aa043be_800_800.jpg",
    linkKakobuy: "https://ikako.vip/9uqhq",
    linkUsfans: "https://usfans.com/product/3/7491104385?ref=TX9V9N",
    tag: "BUDGET",
    rating: 2
  },
  {
    name: "CDG BULLETPROOF T-SHIRT",
    category: "Tshirts",
    price: "$16.80",
    image: "https://media.usfans.com/2026/06/13/172007/088688ff-0ac1-4efb-8fbb-c23145d995b6.jpg",
    linkKakobuy: "https://ikako.vip/r9kfx",
    linkUsfans: "https://usfans.com/product/2/L0ywc7taH-UE5Nkn3yAWjwCWNK3bVspAJ8kGLly8pv9HdjrVKNmyNfM?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "MERTRA T-SHIRT",
    category: "Tshirts",
    price: "$15.23",
    image: "https://si.geilicdn.com/wdseller1940384309-67330000019d6c41065a0a230449_2560_2560.jpg",
    linkKakobuy: "https://ikako.vip/rdsvm",
    linkUsfans: "https://usfans.com/product/3/7731952360?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  },
  {
    name: "MERTRA SCORPION T-SHIRT",
    category: "Tshirts",
    price: "$15.23",
    image: "https://si.geilicdn.com/wdseller1940384309-77ea0000019dc7168c660a20e273_1320_1320.jpg",
    linkKakobuy: "https://ikako.vip/jg4df",
    linkUsfans: "https://usfans.com/product/3/7748825466?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  },
  {
    name: "MERTRA T-SHIRT",
    category: "Tshirts",
    price: "$17.40",
    image: "https://si.geilicdn.com/wdseller1940384309-332d0000019d951f63080a239846_1320_1320.jpg",
    linkKakobuy: "https://ikako.vip/2expg",
    linkUsfans: "https://usfans.com/product/3/7740052070?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  },
  {
    name: "MERTRA X UMBRO T-SHIRT",
    category: "Tshirts",
    price: "$15.71",
    image: "https://media.usfans.com/2026/06/11/145439/30ce2dd2-c77a-491a-abbc-1568a73490d7.jpg",
    linkKakobuy: "https://ikako.vip/2jquc",
    linkUsfans: "https://usfans.com/product/3/7626287656?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  },
  {
    name: "MERTRA T-SHIRT",
    category: "Tshirts",
    price: "$12.67",
    image: "https://media.usfans.com/2026/06/15/221937/73845d10-aa7d-4898-a799-d95d0152022e.jpg",
    linkKakobuy: "https://ikako.vip/qztgh6",
    linkUsfans: "https://usfans.com/product/3/7450387265?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  },
  {
    name: "SUPREME X MM6 MONEY T-SHIRT",
    category: "Tshirts",
    price: "$14.3",
    image: "https://cdn.doppel.fit/JTwGxTuF9plYmjYwFoMCQutFGmR2vYa1nETDr2bgeBg/rs:fill:1920/q:85/f:webp/VEFPQkFPLzEwNTQ5NzQzNDY1NTAva2Frb2J1eV8xNDRmbGJ5cHkwZWtwc3J5NmduYzVvL3dhdGVybWFya2VkL2E5YzY2MDA5MzE2MmRlNDkxNmQ2ZTg0OWUzNWIzOWEzLndlYnA",
    linkKakobuy: "https://ikako.vip/6dazr",
    linkUsfans: "https://usfans.com/product/2/YjOzYTCDKMMp9G0G8BSTPgj9vnsqRPQ6dUgdzMe4bNAi-rcxCha7RZ0?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "NETTSPEND EARLY LIFE CRISIS T-SHIRT",
    category: "Tshirts",
    price: "$11.80",
    image: "https://img.alicdn.com/bao/uploaded/i4/2212643669335/O1CN01MNIfUF2IpULm5h0tt_!!2212643669335.jpg",
    linkKakobuy: "https://ikako.vip/fwbxx",
    linkUsfans: "https://usfans.com/product/2/1Za8eutEfgroYoFzGm-PVgR4MT3otBMlB8kjtPsdvsHNqVoge6DxWQ?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "PESO SLIM FIT T-SHIRT",
    category: "Tshirts",
    price: "$13",
    image: "https://media.usfans.com/PDA/2cb79b7f-41a1-4b62-a29f-cd43a6c16f4d.jpg",
    linkKakobuy: "https://ikako.vip/thduq",
    linkUsfans: "https://usfans.com/product/2/GzYrCW3B9V7vunZY_MK33djt88FtLS8aCp5z0t62T6CH5FFYK-C5sA?ref=TX9V9N",
    tag: "ANGELKING",
    rating: 4
  },
  {
    name: "GALLERY DEPT T-SHIRTS",
    category: "Tshirts",
    price: "$16.45",
    image: "https://img.alicdn.com/bao/uploaded/i3/727551888/O1CN012c6ogw1PokrA7yscq_!!727551888.png",
    linkKakobuy: "https://ikako.vip/tdnha",
    linkUsfans: "https://usfans.com/product/2/wSj982vN99_iC65ZkbuxiczGvpwMOtRFjHpMw0MyhSBcTx3HsO-iyg?ref=TX9V9N",
    tag: "ANGELKING",
    rating: 4
  },
  {
    name: "BILLIONAIRE STUDIOS T-SHIRTS",
    category: "Tshirts",
    price: "$12.85",
    image: "https://img.alicdn.com/bao/uploaded/i4/2217868191481/O1CN01IoUrmD1MoLZro24mz_!!2217868191481.jpg",
    linkKakobuy: "https://ikako.vip/8ubbd",
    linkUsfans: "https://usfans.com/product/2/q5kqpnwGOvUcAE7EGbR0DTDi84710NVDA8UG7iAJFAoXmmEmWuiZPg?ref=TX9V9N",
    tag: "ANGELKING",
    rating: 4
  },
  {
    name: "ESSENTIALS NBA T-SHIRTS",
    category: "Tshirts",
    price: "$13.15",
    image: "https://media.usfans.com/2026/06/08/094450/67846d31-f0f9-45c3-afa2-377a09854dc5.jpg",
    linkKakobuy: "https://ikako.vip/9dp3d",
    linkUsfans: "https://usfans.com/product/1/983510390062?ref=TX9V9N",
    tag: "YISHAN",
    rating: 4
  },
  {
    name: "WARREN LOTAS T-SHIRTS",
    category: "Tshirts",
    price: "$12.95",
    image: "https://media.usfans.com/PDA/4117ce5c-7e2a-4e38-8738-6c5f2023b551.jpg",
    linkKakobuy: "https://ikako.vip/6suem",
    linkUsfans: "https://usfans.com/product/2/xpAZ20RZnP-MsvdPcMDDY_lGDajfGdPstPpQoE6w0GFzm7YZdtmKgA?ref=TX9V9N",
    tag: "ANGELKING",
    rating: 4
  },
  {
    name: "JADED LONDON JORTS",
    category: "Shorts",
    price: "$27.70",
    image: "https://img.alicdn.com/bao/uploaded/i1/3482427204/O1CN010PlDE7235UJl6dmGB_!!3482427204.jpg",
    linkKakobuy: "https://ikako.vip/zf5mv",
    linkUsfans: "https://usfans.com/product/2/nZsLXHsHwm0uMBjAgJ2q_HQcZL5Jo7ITxuIRm6SZHw5w0L99ozNzZg?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "WARREN LOTAS CARD SHORTS",
    category: "Shorts",
    price: "$32.80",
    image: "https://media.usfans.com/PDA/d6ca78ea-753c-4dff-ab45-fcf8db5bfc81.jpg",
    linkKakobuy: "https://ikako.vip/zwgu9",
    linkUsfans: "https://usfans.com/product/2/vNxnSmtAtIymfaUIvTyWS5oEGJURhdF8UKy89Y_syrp9ekh7a6sOBw?ref=TX9V9N",
    tag: "ANGELKING",
    rating: 4
  },
  {
    name: "PEACEINWAR BURGUNDY HOODIE",
    category: "Hoodies",
    price: "$31.74",
    image: "https://si.geilicdn.com/wdseller1995625455-41c60000019e982431ef0a23138d_3025_3025.jpg",
    linkKakobuy: "https://ikako.vip/58nuwv",
    linkUsfans: "https://usfans.com/product/3/7783542378?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  },
  {
    name: "UPINFLAMES ZIP UP HOODIE",
    category: "Hoodies",
    price: "$32",
    image: "https://media.usfans.com/2026/05/03/202854/4daa39ab-89bf-4028-8112-156f913716bc.jpg",
    linkKakobuy: "https://ikako.vip/bk6p6",
    linkUsfans: "https://usfans.com/product/3/7618089240?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  },
  {
    name: "DERSCHUTZE CREWNECK",
    category: "Hoodies",
    price: "$26.5",
    image: "https://si.geilicdn.com/wdseller1940384309-4ecb0000019b0944df710a23c191_1320_1320.jpg",
    linkKakobuy: "https://ikako.vip/7r6mf",
    linkUsfans: "https://usfans.com/product/3/7632920062?ref=TX9V9N",
    tag: "PENGREPS",
    rating: 5
  },
  {
    name: "GENESIS HOODIE",
    category: "Hoodies",
    price: "$37.7",
    image: "https://si.geilicdn.com/wdseller1995625455-0ab20000019bd51822e60a23b4f4_1290_1720.jpg",
    linkKakobuy: "https://ikako.vip/r74qz5",
    linkUsfans: "https://usfans.com/product/3/7668640086?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  },
  {
    name: "DERSCHUTZE BLOSSOM HOODIE",
    category: "Hoodies",
    price: "$32",
    image: "https://si.geilicdn.com/wdseller1940384309-0b7a0000019b4fabdf8b0a23c191_1320_1320.jpg",
    linkKakobuy: "https://ikako.vip/m67qn",
    linkUsfans: "https://usfans.com/product/3/7644873700?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  },
  {
    name: "NUMBER NINE HOODIE",
    category: "Hoodies",
    price: "$41.16",
    image: "https://img.alicdn.com/bao/uploaded/i3/2025450085/O1CN01QzFRW91CUyld1P1FC_!!2025450085.jpg",
    linkKakobuy: "https://ikako.vip/r3esd",
    linkUsfans: "https://usfans.com/product/2/9r-4ifn_oLET5l6zKE2muucVHAqEk2ChwrgLdN_sHuiu69tbND-cig?ref=TX9V9N",
    tag: "HONGSHENG",
    rating: 4
  },
  {
    name: "PROTOCOL + HOODIE",
    category: "Hoodies",
    price: "$26.4",
    image: "https://media.usfans.com/2026/06/26/160438/4b8ddc94-a9ac-43d7-b1d2-b6ddf73149be.jpg",
    linkKakobuy: "https://ikako.vip/r8wjw",
    linkUsfans: "https://usfans.com/product/1/1020996583796?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "HOMIXIDE GANG TEE",
    category: "Tshirts",
    price: "$11.6",
    image: "https://img.alicdn.com/bao/uploaded/i4/2212643669335/O1CN01rkgduE2IpUJ7EjSu2_!!2212643669335.png",
    linkKakobuy: "https://ikako.vip/arq76",
    linkUsfans: "https://usfans.com/product/2/c-hNpPBxfolGMXU87HdMkOGhU5gDEnZW4OMaHNLbCurD-LX7mNIvUQ?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "NUMBER NINE  TEE",
    category: "Tshirts",
    price: "$25.88",
    image: "https://img.alicdn.com/bao/uploaded/i3/2025450085/O1CN01t7k9DU1CUyjEInDlP_!!2025450085.jpg",
    linkKakobuy: "https://ikako.vip/rjfxr",
    linkUsfans: "https://usfans.com/product/2/5xNC9MsxSNmCon5VMhaLKvEMPCqT8FqP2IqpUPhWNDeNACzSZU6QYA?ref=TX9V9N",
    tag: "HONGSHENG",
    rating: 4
  },
  {
    name: "NUMBER NINE NECKLACE TEE",
    category: "Tshirts",
    price: "$25.84",
    image: "https://img.alicdn.com/bao/uploaded/i2/2025450085/O1CN01EEQEuf1CUyhur8OOy_!!2025450085.jpg",
    linkKakobuy: "https://ikako.vip/gg24d",
    linkUsfans: "https://usfans.com/product/2/Z0QVFrrB_6qzYozUkeXyEHztJSxtBajs6ieBaQmnEZtKaylN44CVCQ?ref=TX9V9N",
    tag: "HONGSHENG",
    rating: 4
  },
  {
    name: "UNDERCOVER DRACULA TEE",
    category: "Tshirts",
    price: "$31",
    image: "https://img.alicdn.com/bao/uploaded/i3/2210534265651/O1CN01OeElo41rcDE6LbnZ5_!!2210534265651.jpg",
    linkKakobuy: "https://ikako.vip/hqngg",
    linkUsfans: "https://usfans.com/product/2/UtQFmuvdtgIzBpc9GEioN1Xp3u30Do6yYT06E70LNy7jjasRXlV7tA?ref=TX9V9N",
    tag: "SLEEPBOY",
    rating: 4
  },
  {
    name: "TRAVIS SCOTT TSHIRTS",
    category: "Tshirts",
    price: "$7.99",
    image: "https://img.alicdn.com/bao/uploaded/i3/1034922469/O1CN01tTFbJQ1U6qi6Akw6Q_!!1034922469.jpg",
    linkKakobuy: "https://ikako.vip/3hkhy",
    linkUsfans: "https://usfans.com/product/2/0J7-pnT49WNX0_3-iDkfxXThiCi8VBnNwUk8rjqzk-dz1YpkajRiwA?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  },
  {
    name: "NIKE X NOCTA TSHIRTS",
    category: "Tshirts",
    price: "$7.99",
    image: "https://media.usfans.com/2026/07/04/131643/8d6319c3-e7de-4536-8b04-774a9868f8de.jpg",
    linkKakobuy: "https://ikako.vip/rbfng",
    linkUsfans: "https://usfans.com/product/1/934169404988?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  },
  {
    name: "CDG LONGSLEEVE",
    category: "Tshirts",
    price: "$9.30",
    image: "https://media.usfans.com/2026/06/27/135011/4e43d2dd-4d2b-4b64-8dac-c07abe28bbb4.jpg",
    linkKakobuy: "https://ikako.vip/scscx",
    linkUsfans: "https://usfans.com/product/1/776834980271?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  },
  {
    name: "NETTSPEND T-SHIRT",
    category: "Tshirts",
    price: "$11.38",
    image: "https://img.alicdn.com/bao/uploaded/i1/2212643669335/O1CN016NFbEe2IpULGTpUtK_!!2212643669335.jpg",
    linkKakobuy: "https://ikako.vip/htnuq",
    linkUsfans: "https://usfans.com/product/2/pp-TUY48_sAbUtynVamp5i0W0rjUw4wfZzaXOQzDF8jY6VDmXnhkwA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "DESTROY LONELY TEE",
    category: "Tshirts",
    price: "$11.50",
    image: "https://img.alicdn.com/bao/uploaded/i2/2212643669335/O1CN01uT7Jr12IpUO0bx4W2_!!2212643669335.jpg",
    linkKakobuy: "https://ikako.vip/e9fsu",
    linkUsfans: "https://usfans.com/product/2/fOzNkv4-l038d623vKUaE863RRveHN-bd89x-tKQunL1LzeC0J-wItc?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "NETTSPEND SILENCE TEE",
    category: "Tshirts",
    price: "$20.85",
    image: "https://img.alicdn.com/bao/uploaded/i3/2215791284194/O1CN01JNRfFV1gquCVBXXv9_!!2215791284194.png",
    linkKakobuy: "https://ikako.vip/5cuq6",
    linkUsfans: "https://usfans.com/product/2/xxkFFuMKSYmufkf6Im9udb2AdYHHIGeGoJ20PCzwknBQECXSSyppIA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "YEAT 2ALIVE TEE",
    category: "Tshirts",
    price: "$11.4",
    image: "https://img.alicdn.com/bao/uploaded/i3/2212643669335/O1CN01CMlxDH2IpUPNyAZrJ_!!2212643669335.jpg",
    linkKakobuy: "https://ikako.vip/nccsbv",
    linkUsfans: "https://usfans.com/product/2/mOV2Hn_yyuGLvC3S9lTIWo-NeJdGuJ2dovpggpvO0JaZpsy7WhpcakY?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "VETEMENTS BRO TEE",
    category: "Tshirts",
    price: "$27.59",
    image: "https://img.alicdn.com/bao/uploaded/i2/3822597683/O1CN01GUSaPu26cs3NWG2De~crop,714,0,4284,4284~_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/37yfu",
    linkUsfans: "https://usfans.com/product/2/mikkp-wl4B1jvOEHOsJkyrq99a7ZN0aOy-McWpy_lq2Q10Kgi6KmFQ?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  },
  {
    name: "VETEMENTS RAMMSTEIN TEE",
    category: "Tshirts",
    price: "$27.42",
    image: "https://img.alicdn.com/bao/uploaded/i4/3822597683/O1CN01PmKBRn26cs1VH2VRe_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/4vmvm",
    linkUsfans: "https://usfans.com/product/2/vNuQAvMYV902O3rFn4ZPWgPJ7EaT-hasBJKZD4vb3dKq2tdW_PZVhg?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  },
  {
    name: "NUMBER NINE WINGS HOODIE",
    category: "Hoodies",
    price: "$46.14",
    image: "https://img.alicdn.com/bao/uploaded/i3/2025450085/O1CN01SKlsef1CUyn2WjGIx_!!2025450085.jpg",
    linkKakobuy: "https://ikako.vip/tdv4r",
    linkUsfans: "https://usfans.com/product/2/GTv2rVoXrzAH1l9TOiiygVS8PvLG1plR5TDCZJmEJu6Yd1b0sKtgK6A?ref=TX9V9N",
    tag: "HONGSHENG",
    rating: 4
  },
  {
    name: "NUMBER NINE HOODIE",
    category: "Hoodies",
    price: "$40.83",
    image: "https://img.alicdn.com/bao/uploaded/i1/2025450085/O1CN01k7uYHE1CUymOrdtsb_!!2025450085.jpg",
    linkKakobuy: "https://ikako.vip/bpu4z",
    linkUsfans: "https://usfans.com/product/2/1NbxIIwe1wxHmQY_a7X6sKELO2i_WPHAhplPonLz049YSHBT9C8z1jg?ref=TX9V9N",
    tag: "HONGSHENG",
    rating: 4
  },
  {
    name: "NUMBER NINE LAMBRETTA TEE",
    category: "Tshirts",
    price: "$21.1",
    image: "https://img.alicdn.com/bao/uploaded/i4/2025450085/O1CN01Y5EDWB1CUynEf18Yz_!!2025450085.jpg",
    linkKakobuy: "https://ikako.vip/zuch6",
    linkUsfans: "https://usfans.com/product/2/Iib9a-aAxjgfp13CfOMRjGEbdE2xarhaaVwfpUKufp8bE_Cux3bV1fc?ref=TX9V9N",
    tag: "HONGSHENG",
    rating: 4
  },
  {
    name: "RAF SIMONS TEE",
    category: "Tshirts",
    price: "$25.75",
    image: "https://img.alicdn.com/bao/uploaded/i4/2025450085/O1CN01QtjxvW1CUyoAHgBf9_!!2025450085.jpg",
    linkKakobuy: "https://ikako.vip/439nn",
    linkUsfans: "https://usfans.com/product/2/caPocD4BZVjTCRqY776OLsv6R7q3KUYBe4Z-7BKU1qC4MEXt6HDtY9I?ref=TX9V9N",
    tag: "HONGSHENG",
    rating: 4
  },
  {
    name: "BALENCIAGA SWEATPANTS",
    category: "Pants",
    price: "$31.75",
    image: "https://si.geilicdn.com/wdseller1258568610-519000000199d30822420a210139_1170_1462.jpg",
    linkKakobuy: "https://ikako.vip/sdrfan",
    linkUsfans: "https://usfans.com/product/3/7571419818?ref=TX9V9N",
    tag: "SATANMADE",
    rating: 4
  },
  {
    name: "SUPREME X MARTIN ROSE HOODIE",
    category: "Hoodies",
    price: "$42.78",
    image: "https://media.usfans.com/2026/06/26/173550/8319b899-4f16-4249-b16c-52b4fc83cc9c.jpg",
    linkKakobuy: "https://ikako.vip/xj6zj",
    linkUsfans: "https://usfans.com/product/2/tGPRwrnJqwHp_21sNtO6GL09HP8C-ndZqDLqG09RuGFHx37409VBDg?ref=TX9V9N",
    tag: "MADMAN",
    rating: 4
  },
  {
    name: "GIVENCHY TANK TOP",
    category: "Tshirts",
    price: "$15.65",
    image: "https://img.alicdn.com/bao/uploaded/i1/2220863143615/O1CN01gd5ZZR1cZiuW2dAMz_!!2220863143615.jpg",
    linkKakobuy: "https://ikako.vip/aw8vj",
    linkUsfans: "https://usfans.com/product/2/HiTEwtUXTUw6x7bERiIsrU-JhClXx7bLC5uVQook1Io7_dcSbwRXplQ?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "HYSTERIC GLAMOUR LONGSLEEVE",
    category: "Tshirts",
    price: "$23.65",
    image: "https://img.alicdn.com/bao/uploaded/i3/2943390456/O1CN01wE1go41FEtiXfq8dK_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/d94uc",
    linkUsfans: "https://usfans.com/product/2/dD5d_xrSIiERRhOU5chdASP5ktVFu_3y5rjGI7zt7KiJ6vScuIJYaZc?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "AF1",
    category: "Shoes",
    price: "$22.32",
    image: "https://si.geilicdn.com/wdseller1745861162-40b50000019ac0376d200a239846_1280_1296.jpg",
    linkKakobuy: "https://ikako.vip/2xndf",
    linkUsfans: "https://usfans.com/product/3/7780635847?ref=TX9V9N",
    tag: "G",
    rating: 4
  },
  {
    name: "BALENCIAGA DEFENDER",
    category: "Shoes",
    price: "$68.55",
    image: "https://si.geilicdn.com/wdseller1268847658-5b6c00000187c5cc353f0a231447-unadjust_1170_1170.gif",
    linkKakobuy: "https://ikako.vip/j8fr4",
    linkUsfans: "https://usfans.com/product/3/6229942918?ref=TX9V9N",
    tag: "XA",
    rating: 5
  },
  {
    name: "HELLSTAR T-SHIRTS",
    category: "Tshirts",
    price: "$15.63",
    image: "https://img.alicdn.com/bao/uploaded/i1/574102188/O1CN01rUCVnI1S29fWfzLM0_!!574102188.jpg",
    linkKakobuy: "https://ikako.vip/ngp9z",
    linkUsfans: "https://usfans.com/product/2/gBxLHeWXolaDISMCpt68DYbchnfn37VbEfpZK5d_D_nmDOU0p8STYA?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  },
  {
    name: "HELLSTAR T-SHIRTS",
    category: "Tshirts",
    price: "$14.19",
    image: "https://img.alicdn.com/imgextra/i1/2911353512/O1CN01qMfRsp1boXvg7dHy1_!!2911353512.jpg",
    linkKakobuy: "https://ikako.vip/td56d",
    linkUsfans: "https://usfans.com/product/2/MuRTihOTUxCSOQH7ihSPkPDDWqJHaoFUnSKQjPvPdoXtGo6pFkKd_g?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  },
  {
    name: "YVL POLO SHIRT",
    category: "Tshirts",
    price: "$14.17",
    image: "https://img.alicdn.com/bao/uploaded/i3/2212643669335/O1CN01bKkLin2IpUJnpXyYL_!!2212643669335.jpg",
    linkKakobuy: "https://ikako.vip/qpu9av",
    linkUsfans: "https://usfans.com/product/2/cpddZLJ_Q5gzpn8G5TRITypJ_9xt0JP_FZU7TwjPSuisySH2E8IG4g?ref=TX9V9N",
    tag: "BUDGET",
    rating: 3
  },
  {
    name: "ADIDAS SUPERSTAR",
    category: "Shoes",
    price: "$25.51",
    image: "https://si.geilicdn.com/open1733523732-1234478995-7a130000019374833ccb0a232357_1080_818.jpg",
    linkKakobuy: "https://ikako.vip/p4grs",
    linkUsfans: "https://usfans.com/product/3/7780551213?ref=TX9V9N",
    tag: "WWTOP",
    rating: 5
  },
  {
    name: "NIKE MIND 001",
    category: "Shoes",
    price: "$33.48",
    image: "https://si.geilicdn.com/wdseller1745861162-185a0000019cd46b18290a2315ef_1206_1608.jpg",
    linkKakobuy: "https://ikako.vip/8r9r78",
    linkUsfans: "https://usfans.com/product/3/7783613742?ref=TX9V9N",
    tag: "GX / BEST",
    rating: 5
  },
  {
    name: "RANDOM PLAID SHORTS",
    category: "Shorts",
    price: "$15.79",
    image: "https://img.alicdn.com/bao/uploaded/i2/2687803572/O1CN01OR3uLL1cG1ssuR0cX_!!2687803572.jpg",
    linkKakobuy: "https://ikako.vip/35qdm",
    linkUsfans: "https://usfans.com/product/2/x5z5ZfHodxJu37TeWjRxlBFe3xOAe52qWl84aYyMrLA1oSTnh_Yl3W8?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "IHS LOGO TEE",
    category: "Tshirts",
    price: "$11.96",
    image: "https://img.alicdn.com/bao/uploaded/i4/2687803572/O1CN01XVY45Y1cG1t1qGXQf_!!2687803572.jpg",
    linkKakobuy: "https://ikako.vip/hg2d5u",
    linkUsfans: "https://usfans.com/product/2/7lJO5AOE5lehiTf0Z6R-1I_YLPXcQGj5ZZTN3NEAbUlMxZNCvi2quvk?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 4
  },
  {
    name: "TORN STARS TEE",
    category: "Tshirts",
    price: "$13.55",
    image: "https://img.alicdn.com/bao/uploaded/i2/2687803572/O1CN01I66eNJ1cG1tdyvwU7_!!2687803572.jpg",
    linkKakobuy: "https://ikako.vip/5cgmu",
    linkUsfans: "https://usfans.com/product/2/SlCHu3y4EIRKlGH-DB0pkyU_5Z0thV8evhoApkLqQBb9S2gRdNIgkI0?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 4
  },
  {
    name: "ONE CHANCE TEE",
    category: "Tshirts",
    price: "$17.40",
    image: "https://si.geilicdn.com/wdseller1995625455-3e010000019ef3e29db80a23b54f_3025_3026.jpg",
    linkKakobuy: "https://ikako.vip/u79ud",
    linkUsfans: "https://usfans.com/product/3/7790607003?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 4
  },
  {
    name: "IHS JEANS",
    category: "Pants",
    price: "$36.60",
    image: "https://si.geilicdn.com/wdseller1995625455-36930000019daa2bbe990a230246_3019_3021.jpg",
    linkKakobuy: "https://ikako.vip/esazz",
    linkUsfans: "https://usfans.com/product/3/7743253230?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 4
  },
  {
    name: "DRAMA SHORTS",
    category: "Shorts",
    price: "$14.21",
    image: "https://media.usfans.com/2026/06/25/111344/1bc574e4-6556-4128-bd5d-4862c98d3015.jpg",
    linkKakobuy: "https://ikako.vip/u67cg",
    linkUsfans: "https://usfans.com/product/3/7475785394?ref=TX9V9N",
    tag: "HOTDOG",
    rating: 4
  },
  {
    name: "HYSTERIC GLAMOUR LONGSLEEVE",
    category: "Tshirts",
    price: "$23.63",
    image: "https://img.alicdn.com/bao/uploaded/i2/2943390456/O1CN01wpCRZ71FEti7cu5DQ_!!2943390456.jpg",
    linkKakobuy: "https://ikako.vip/83ra9",
    linkUsfans: "https://usfans.com/product/2/N_H0mymUKEHGZPyvH5gXNTJzTs47FFaQ1OInr5pYEf6s05s1ReGefQ?ref=TX9V9N",
    tag: "LMYER",
    rating: 4
  },
  {
    name: "CHROME HEARTS TEE",
    category: "Tshirts",
    price: "$6.71",
    image: "https://si.geilicdn.com/wdseller343709482-78920000016ae2bd57b80a20b7b9_1124_1124.jpg",
    linkKakobuy: "https://ikako.vip/7m9du",
    linkUsfans: "https://usfans.com/product/3/2786979731?ref=TX9V9N",
    tag: "BUDGET",
    rating: 3
  },
  {
    name: "AF1 CH X NOCTA",
    category: "Shoes",
    price: "$44.69",
    image: "https://si.geilicdn.com/wdseller2075148751-39780000019eacd96add0a23b6ac_3025_3029.jpg",
    linkKakobuy: "https://ikako.vip/mug7s",
    linkUsfans: "https://usfans.com/product/3/7783109456?ref=TX9V9N",
    tag: "GX",
    rating: 5
  },
  {
    name: "AJ1 X TRAVIS",
    category: "Shoes",
    price: "$63",
    image: "https://si.geilicdn.com/wdseller1924290571-2cc30000019eacb42f850a2301af_3025_3029.jpg",
    linkKakobuy: "https://ikako.vip/g6ex5",
    linkUsfans: "https://usfans.com/product/3/7783519222?ref=TX9V9N",
    tag: "GX",
    rating: 5
  },
  {
    name: "BAPE SOCKS",
    category: "Underwear",
    price: "$3.04",
    image: "https://si.geilicdn.com/pcitem1944479080-5e680000019df2475e080a20e2c5_640_640.jpg",
    linkKakobuy: "https://ikako.vip/ray2b",
    linkUsfans: "https://usfans.com/product/3/7757117686?ref=TX9V9N",
    tag: "BAYMAXSOCKS",
    rating: 5
  },
  {
    name: "STUSSY SOCKS",
    category: "Underwear",
    price: "$2.88",
    image: "https://si.geilicdn.com/open1847561709-1234478995-5eee0000019639653c5d0a8133b0_1276_1276.jpg",
    linkKakobuy: "https://ikako.vip/zeunj",
    linkUsfans: "https://usfans.com/product/3/7594584360?ref=TX9V9N",
    tag: "BAYMAXSOCKS",
    rating: 5
  },
  {
    name: "NIKE BALACLAVA MASK",
    category: "Belts",
    price: "$5.91",
    image: "https://si.geilicdn.com/pcitem1234071531-67a900000196ce8609650a2303ee_3024_4032.jpg",
    linkKakobuy: "https://ikako.vip/kphat",
    linkUsfans: "https://usfans.com/product/3/7469216286?ref=TX9V9N",
    tag: "BAYMAXSOCKS",
    rating: 5
  },
  {
    name: "CH BOXERS",
    category: "Underwear",
    price: "$8.78",
    image: "https://si.geilicdn.com/pcitem1234071531-2fc50000019abb2cd8460a23057e-unadjust_1183_1090.png",
    linkKakobuy: "https://ikako.vip/yjccvj",
    linkUsfans: "https://usfans.com/product/3/7619095180?ref=TX9V9N",
    tag: "BAYMAXSOCKS",
    rating: 5
  },
  {
    name: "ESSENTIALS BASIC TEE",
    category: "Tshirts",
    price: "$8.78",
    image: "https://media.usfans.com/2026/06/08/113932/c24fb5e5-502b-4aac-8dee-4e9e7e894c46.jpg",
    linkKakobuy: "https://ikako.vip/jsxej",
    linkUsfans: "https://usfans.com/product/1/941480275348?ref=TX9V9N",
    tag: "YISHAN",
    rating: 5
  },
  {
    name: "ESSENTIALS 1977 TEE",
    category: "Tshirts",
    price: "$10.39",
    image: "https://media.usfans.com/2026/06/10/205255/d4ce280d-1fc4-4270-a8a7-b4353e2ffb52.jpg",
    linkKakobuy: "https://ikako.vip/p8v3f",
    linkUsfans: "https://usfans.com/product/1/942421158058?ref=TX9V9N",
    tag: "YISHAN",
    rating: 5
  },
  {
    name: "ESSENTIALS 1977 SHORTS",
    category: "Shorts",
    price: "$11.98",
    image: "https://media.usfans.com/2026/06/26/140012/b3c435c8-5790-435e-8a82-7fa3f925a0ea.jpg",
    linkKakobuy: "https://ikako.vip/3au5g",
    linkUsfans: "https://usfans.com/product/1/945359112630?ref=TX9V9N",
    tag: "YISHAN",
    rating: 5
  },
  {
    name: "ESSENTIALS METALIC SHORTS",
    category: "Shorts",
    price: "$12.78",
    image: "https://media.usfans.com/2026/07/04/175234/e613655d-544c-4342-99b3-7f0319823fcf.jpg",
    linkKakobuy: "https://ikako.vip/7k4pqp",
    linkUsfans: "https://usfans.com/product/1/979674685920?ref=TX9V9N",
    tag: "YISHAN",
    rating: 5
  },
  {
    name: "ESSENTIALS 22SS SHORTS",
    category: "Shorts",
    price: "$11.66",
    image: "https://si.geilicdn.com/pcitem2077227601-113a0000019ea6ce7d670a22d1a4_800_800.jpg",
    linkKakobuy: "https://ikako.vip/97u7w",
    linkUsfans: "https://usfans.com/product/3/7784932792?ref=TX9V9N",
    tag: "YISHAN",
    rating: 5
  },
  {
    name: "ESSENTIALS FW23 SHORTS",
    category: "Shorts",
    price: "$12.78",
    image: "https://media.usfans.com/2026/05/30/095138/f2a5e65d-c0c1-4cd6-8a49-5281c271982f.jpg",
    linkKakobuy: "https://ikako.vip/2t9sb",
    linkUsfans: "https://usfans.com/product/1/944187286551?ref=TX9V9N",
    tag: "YISHAN",
    rating: 5
  },
  {
    name: "ESSENTIALS 1977 HOODIE",
    category: "Hoodies",
    price: "$20.77",
    image: "https://media.usfans.com/2026/06/26/093736/0ada5b27-ea68-4cb3-94d0-f1cd4854bddc.jpg",
    linkKakobuy: "https://ikako.vip/bpdqj",
    linkUsfans: "https://usfans.com/product/1/945366056278?ref=TX9V9N",
    tag: "YISHAN",
    rating: 5
  },
  {
    name: "ESSENTIALS 25AS HOODIE",
    category: "Hoodies",
    price: "$23.16",
    image: "https://media.usfans.com/2026/06/14/134839/a7cb298a-2232-4cf0-bc8f-977dc44af396.jpg",
    linkKakobuy: "https://ikako.vip/ut9d3e",
    linkUsfans: "https://usfans.com/product/1/941905898535?ref=TX9V9N",
    tag: "YISHAN",
    rating: 5
  },
  {
    name: "ESSENTIALS 25SP PANTS",
    category: "Pants",
    price: "$21.60",
    image: "https://media.usfans.com/2026/06/17/205733/d944fc74-1309-4b9d-9c1a-ee40d680aa3a.jpg",
    linkKakobuy: "https://ikako.vip/gez8d",
    linkUsfans: "https://usfans.com/product/1/989878322094?ref=TX9V9N",
    tag: "YISHAN",
    rating: 5
  },
  {
    name: "ESSENTIALS 22SS PANTS",
    category: "Pants",
    price: "$17.10",
    image: "https://si.geilicdn.com/pcitem2077227601-4d510000019ea6ce83120a210256-unadjust_800_800.png",
    linkKakobuy: "https://ikako.vip/23mfufd",
    linkUsfans: "https://usfans.com/product/3/7784894562?ref=TX9V9N",
    tag: "YISHAN",
    rating: 5
  },
  {
    name: "UNDERCOVER 13AW BACKPACK",
    category: "Belts",
    price: "$63.77",
    image: "https://img.alicdn.com/bao/uploaded/i1/2702114446/O1CN01mrcgiR1iiJwfboOsB_!!2702114446.jpg",
    linkKakobuy: "https://ikako.vip/9zhag",
    linkUsfans: "https://usfans.com/product/2/rc-ZM3IvF86JpqxNJjr27A18EDCjDNksqv_YQ4r-_lExO1AT_PyUBw?ref=TX9V9N",
    tag: "LUFU",
    rating: 5
  },
  {
    name: "SUPREME LEOPARD BACKPACK",
    category: "Belts",
    price: "$27.01",
    image: "https://media.usfans.com/2026/06/21/095541/20458839-19d8-4fb7-991a-77d6fa37dbdf.jpg",
    linkKakobuy: "https://ikako.vip/pecmm",
    linkUsfans: "https://usfans.com/product/2/HFOTg0uzbd-H9mtSSofdwKyxrStX2BymygYJe4JqEKOVbp1U7KE1Tg?ref=TX9V9N",
    tag: "LUFU",
    rating: 5
  },
  {
    name: "PRADA CUPS",
    category: "Shoes",
    price: "$55.93",
    image: "https://si.geilicdn.com/wdseller1845163825-7af30000019608ea51530a20e284_1080_1082.jpg",
    linkKakobuy: "https://ikako.vip/g35tw",
    linkUsfans: "https://usfans.com/product/3/7610013503?ref=TX9V9N",
    tag: "GZ / BUDGET",
    rating: 4
  },
  {
    name: "BOTTEGA VENETTA",
    category: "Shoes",
    price: "$49.60",
    image: "https://si.geilicdn.com/pcitem1845163825-2e780000019263f44a4b0a22d172_1080_1080.jpg",
    linkKakobuy: "https://ikako.vip/vebg3",
    linkUsfans: "https://usfans.com/product/3/7611429397?ref=TX9V9N",
    tag: "M",
    rating: 4
  },
  {
    name: "BIRKENSTOCK",
    category: "Shoes",
    price: "$27.20",
    image: "https://si.geilicdn.com/pcitem902046947791-725e0000019d54b43c0f0a231177_1440_1440.jpg",
    linkKakobuy: "https://ikako.vip/ra82v",
    linkUsfans: "https://usfans.com/product/3/7611437571?ref=TX9V9N",
    tag: "GX 2.0",
    rating: 4
  },
  {
    name: "SAUCONY PROGRID",
    category: "Shoes",
    price: "$35.16",
    image: "https://si.geilicdn.com/wdseller2074610362-4cb00000019ed1e2a5510a231177_1440_1440.jpg",
    linkKakobuy: "https://ikako.vip/syadc",
    linkUsfans: "https://usfans.com/product/3/7789738584?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "DIOR B30",
    category: "Shoes",
    price: "$49.60",
    image: "https://si.geilicdn.com/wdseller1845163825-62fa0000019479242a090a22d58f_1440_1440.jpg",
    linkKakobuy: "https://ikako.vip/9qunq",
    linkUsfans: "https://usfans.com/product/3/7617091609?ref=TX9V9N",
    tag: "ZC / BUDGET",
    rating: 4
  },
  {
    name: "DIOR B30",
    category: "Shoes",
    price: "$100.70",
    image: "https://media.usfans.com/2026/06/27/175147/ad20ad7b-39bb-42e7-8db3-2c039f240899.jpg",
    linkKakobuy: "https://ikako.vip/kc7js",
    linkUsfans: "https://usfans.com/product/2/86Q4FF6PICS0EAfeyqkSqboSNCCmN5wt9YtrdfLyOgciJ2A0k8WW9A?ref=TX9V9N",
    tag: "BEST",
    rating: 5
  },
  {
    name: "DIOR B22",
    category: "Shoes",
    price: "$136",
    image: "https://media.usfans.com/2026/06/15/193711/9971b099-1117-4ebb-8661-34e2994ad577.jpg",
    linkKakobuy: "https://ikako.vip/xnudu",
    linkUsfans: "https://usfans.com/product/2/HY8KDuRfsTs1W0SnMpa_OTDR5ubGas90uqrAet_fdwEHEf9h1aQWEg?ref=TX9V9N",
    tag: "BEST",
    rating: 5
  },
  {
    name: "DIOR B9",
    category: "Shoes",
    price: "$95.60",
    image: "https://si.geilicdn.com/wdseller1747999085-779c0000019939c820930a23010f_3024_3029.jpg",
    linkKakobuy: "https://ikako.vip/gn99n",
    linkUsfans: "https://usfans.com/product/3/7263529034?ref=TX9V9N",
    tag: "BEST",
    rating: 5
  },
  {
    name: "DIOR B23",
    category: "Shoes",
    price: "$84.7",
    image: "https://si.geilicdn.com/wdseller500815599-4a4c0000019da9ec089d0a21146b_1170_1172.jpg",
    linkKakobuy: "https://ikako.vip/y7jk6",
    linkUsfans: "https://usfans.com/product/3/7743262410?ref=TX9V9N",
    tag: "BEST",
    rating: 5
  },
  {
    name: "SALOMON XT6",
    category: "Shoes",
    price: "$43.15",
    image: "https://media.usfans.com/2026/07/02/144946/2381d797-b80f-4e1f-919c-018ce9442624.jpg",
    linkKakobuy: "https://ikako.vip/2n9kwh",
    linkUsfans: "https://usfans.com/product/3/7613212605?ref=TX9V9N",
    tag: "GX",
    rating: 5
  },
  {
    name: "RALPH LAUREN SHORTS",
    category: "Shorts",
    price: "$19.02",
    image: "https://media.usfans.com/2026/07/02/132200/9f0d4c6f-aa90-4177-b543-1263c48b8a8c.jpg",
    linkKakobuy: "https://ikako.vip/cbaq4",
    linkUsfans: "https://usfans.com/product/3/7717354619?ref=TX9V9N",
    tag: "NEWDP",
    rating: 4
  },
  {
    name: "RALPH LAUREN BEACH SHORTS",
    category: "Shorts",
    price: "$15.90",
    image: "https://media.usfans.com/2026/06/26/171829/00da2c2d-5aa0-4ae7-902a-7ab05e9efcb7.jpg",
    linkKakobuy: "https://ikako.vip/ft5gx",
    linkUsfans: "https://usfans.com/product/3/7684066645?ref=TX9V9N",
    tag: "NEWDP",
    rating: 4
  },
  {
    name: "RALPH LAUREN SHORTS",
    category: "Shorts",
    price: "$19.02",
    image: "https://media.usfans.com/2026/07/03/143715/0d69b9da-8377-43e8-9538-3409e8ab4453.jpg",
    linkKakobuy: "https://ikako.vip/fy4b4",
    linkUsfans: "https://usfans.com/product/3/7595172109?ref=TX9V9N",
    tag: "NEWDP",
    rating: 4
  },
  {
    name: "STUSSY SHORTS",
    category: "Shorts",
    price: "$12.63",
    image: "https://media.usfans.com/2026/06/13/115251/ca8e8f9c-1b76-4c1b-b4c6-84e5ffc17846.jpg",
    linkKakobuy: "https://ikako.vip/rpabw",
    linkUsfans: "https://usfans.com/product/3/7595162349?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "STUSSY HOODIE",
    category: "Hoodies",
    price: "$27.01",
    image: "https://media.usfans.com/2026/05/17/104231/a1c884a2-597d-473a-9d76-b58759716a53.jpg",
    linkKakobuy: "https://ikako.vip/qm6jw",
    linkUsfans: "https://usfans.com/product/3/7291972127?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "NEW BALANCE 2002",
    category: "Shoes",
    price: "$41.55",
    image: "https://si.geilicdn.com/pcitem1845163825-09610000019726e207370a8133cc_1440_1440.jpg",
    linkKakobuy: "https://ikako.vip/rzqp6",
    linkUsfans: "https://usfans.com/product/3/7614433356?ref=TX9V9N",
    tag: "ZC / BEST",
    rating: 4
  },
  {
    name: "NB 2002 LINK 1",
    category: "Shoes",
    price: "$35.16",
    image: "https://si.geilicdn.com/pcitem901870080011-1d01000001984d7ed7b50a231316_1440_1440.jpg",
    linkKakobuy: "https://ikako.vip/m64kg",
    linkUsfans: "https://usfans.com/product/3/7611477107?ref=TX9V9N",
    tag: "M",
    rating: 5
  },
  {
    name: "NB 2002 LINK 2",
    category: "Shoes",
    price: "$35.16",
    image: "https://si.geilicdn.com/pcitem901870080011-5b85000001923f5858ec0a23038e_1074_1074.jpg",
    linkKakobuy: "https://ikako.vip/4t8w5",
    linkUsfans: "https://usfans.com/product/3/7614453194?ref=TX9V9N",
    tag: "M",
    rating: 5
  },
  {
    name: "VETEMENTS BOMBER",
    category: "Jackets",
    price: "$109.95",
    image: "https://img.alicdn.com/bao/uploaded/i3/3822597683/O1CN01EC7ZOA26cs5MXT5CG_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/yxq2t",
    linkUsfans: "https://usfans.com/product/2/LZ8aGhI-z9vpfl-f884WiLAeP6FGGYbcna7m-F7FtAELDFLb3Xu56Q?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  },
  {
    name: "VETEMENTS COKE HOODIE",
    category: "Hoodies",
    price: "$54.18",
    image: "https://img.alicdn.com/bao/uploaded/i3/3822597683/O1CN01YPkVdh26cs41QfXZV_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/ftdk3",
    linkUsfans: "https://usfans.com/product/2/yyqjGR8H1gGTCEsdnaMZIGzKJXR9KSseyD4cY_JeZ8Vl_8vZY7kUig?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  },
  {
    name: "VETEMENTS VITKAC HOODIE",
    category: "Hoodies",
    price: "$58.65",
    image: "https://img.alicdn.com/bao/uploaded/i1/3822597683/O1CN010hjbvg26cs419JjXR_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/c5dbe",
    linkUsfans: "https://usfans.com/product/2/WVs586X9Y58CYGBM_55MoFSrt8ilor1_DQzD0EzuGSjGVh236V-OAg?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  },
  {
    name: "VETEMENTS RAMMSTEIN HOODIE",
    category: "Hoodies",
    price: "$61.85",
    image: "https://img.alicdn.com/bao/uploaded/i1/3822597683/O1CN01nYyq1r26crzwyLtmP_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/c4j4q",
    linkUsfans: "https://usfans.com/product/2/D6d9smEXBvDVO-Vjh8DaHPLCgmEKrrQGtVO_SIA08zKw909ZwBv4lQ?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  },
  {
    name: "VETEMENTS POLIZEI HOODIE",
    category: "Hoodies",
    price: "$54.18",
    image: "https://img.alicdn.com/bao/uploaded/i4/3822597683/O1CN01cUn2Qh26cs40qaXnm_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/x3p9p",
    linkUsfans: "https://usfans.com/product/2/CtKNJZPTn-nmxd2SLQ_K9evv3C7FX7kd32XljWBadivrcf7wCNiT0g?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  },
  {
    name: "VETEMENTS HOODIE HOODIE",
    category: "Hoodies",
    price: "$63.77",
    image: "https://img.alicdn.com/bao/uploaded/i2/3822597683/O1CN01AJ6x5U26crzeZubBw_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/52de8",
    linkUsfans: "https://usfans.com/product/2/dYoRa62aOEQInlPwtHQWvhO1a27EIZbifVwREIz_nVLLhNSORIiHzA?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  },
  {
    name: "VETEMENTS TARGET TEE",
    category: "Tshirts",
    price: "$25",
    image: "https://img.alicdn.com/bao/uploaded/i1/3822597683/O1CN01B2HLKe26cs1sCmxok_!!3822597683.jpg",
    linkKakobuy: "https://ikako.vip/vzp3hu",
    linkUsfans: "https://usfans.com/product/2/ONWb4XAsnqF1WPAfjTTvRfNPLnOcVAa0jCtfABmVibXxKCO-00mxnQ?ref=TX9V9N",
    tag: "KJMADE",
    rating: 5
  },
  {
    name: "AMIRI T-SHIRTS",
    category: "Tshirts",
    price: "$25",
    image: "https://img.alicdn.com/bao/uploaded/i1/2217139011106/O1CN01iIF3T01K2bBWTdRJp_!!2217139011106.jpg_400x400.jpg",
    linkKakobuy: "https://ikako.vip/are34",
    linkUsfans: "https://usfans.com/product/2/JAXIWiGHxFyHHSmOV-TCPitflMRJYyJHX_CtZOaGjTR_P0JvlMbaAQ?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  },
  {
    name: "NUMBERNINE SKULL TEE",
    category: "Tshirts",
    price: "$14.07",
    image: "https://img.alicdn.com/bao/uploaded/i4/2212643669335/O1CN018N6JOA2IpUKo1WJI6_!!2212643669335.jpg",
    linkKakobuy: "https://ikako.vip/47358",
    linkUsfans: "https://usfans.com/product/2/9uts_WYbPjKBWIhFQq7N8YOxEQi0a6C_CLVPH1Aiw9DJHyUZaL-GLw?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  },
  {
    name: "NB 9060 LINK2",
    category: "Shoes",
    price: "$28.5",
    image: "https://si.geilicdn.com/pcitem901870080011-55f900000197d72db9a40a81347d_1440_1440.jpg",
    linkKakobuy: "https://ikako.vip/ebfnb",
    linkUsfans: "https://usfans.com/product/3/7611465313?ref=TX9V9N",
    tag: "M",
    rating: 4
  },
  {
    name: "NEW BALANCE 240",
    category: "Shoes",
    price: "$28.5",
    image: "https://si.geilicdn.com/pcitem901931162197-04500000019a7f8834af0a231177_1440_1440.jpg",
    linkKakobuy: "https://ikako.vip/bf4j2",
    linkUsfans: "https://usfans.com/product/3/7614589634?ref=TX9V9N",
    tag: "M",
    rating: 4
  },
  {
    name: "STUSSY T-SHIRTS",
    category: "Tshirts",
    price: "$7.80",
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01yl0CZg23pHtnim8pa_!!2219377097304-0-cib.jpg",
    linkKakobuy: "https://ikako.vip/t6m66",
    linkUsfans: "https://usfans.com/product/1/928703611496?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  },
  {
    name: "LOVELAST TEE",
    category: "Tshirts",
    price: "$11.39",
    image: "https://img.alicdn.com/bao/uploaded/i4/2212643669335/O1CN01GqdGYY2IpUH9AlK85_!!2212643669335.jpg",
    linkKakobuy: "https://ikako.vip/sud3k",
    linkUsfans: "https://usfans.com/product/2/Myp3_7QAJc2c-C6y-DGXwQHtXu2ez20QhWy4DIZurl4GK3yAEe-y0A?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 4
  },
  {
    name: "MAYBACH SUNGLASSES",
    category: "Belts",
    price: "$5.29",
    image: "https://kk-oss-wh-hk.kakobuy.com/whg/202607/03/d8287c11c9382fc4fb238ab1600be1f9.jpg",
    linkKakobuy: "https://ikako.vip/frk2vk",
    linkUsfans: "https://usfans.com/product/1/870678623599?ref=TX9V9N",
    tag: "BUDGET",
    rating: 4
  },
  {
    name: "ALEXANDER WANG TEE",
    category: "Tshirts",
    price: "$25.76",
    image: "https://img.alicdn.com/bao/uploaded/i4/2380236052/O1CN01Q49LVu1uZs7R0ALE7_!!2380236052.jpg",
    linkKakobuy: "https://usfans.com/product/2/Tgijc9ANSfG1SRs7Tp0Wy4t6bKUepdTXVXxhpA1r9klwmICEtcpBN_Q?ref=TX9V9N",
    linkUsfans: "https://usfans.com/product/2/Tgijc9ANSfG1SRs7Tp0Wy4t6bKUepdTXVXxhpA1r9klwmICEtcpBN_Q?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "ALEXANDER WANG TEE",
    category: "Tshirts",
    price: "$25.76",
    image: "https://img.alicdn.com/bao/uploaded/i3/2380236052/O1CN01oxQh9y1uZs7lvtjDh_!!2380236052.jpg",
    linkKakobuy: "https://usfans.com/product/2/RvxSNVjCqoBRrBFE66ZZwx-dIRoLF3tnVU4tOBQcXKQCoEJVdhp0_pE?ref=TX9V9N",
    linkUsfans: "https://usfans.com/product/2/RvxSNVjCqoBRrBFE66ZZwx-dIRoLF3tnVU4tOBQcXKQCoEJVdhp0_pE?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "BALENCIAGA BEBE TEE",
    category: "Tshirts",
    price: "$21.03",
    image: "https://media.usfans.com/2026/07/03/135632/09afc5c2-031d-4b96-a9f8-f07ec9765447.jpg",
    linkKakobuy: "https://ikako.vip/vxzdb",
    linkUsfans: "https://usfans.com/product/3/7404452915?ref=TX9V9N",
    tag: "ASHMADE / BEST",
    rating: 4
  },
  {
    name: "RICK OWENS SHORTS",
    category: "Shorts",
    price: "$29.18",
    image: "https://si.geilicdn.com/wdseller1846720803-4641000001900536e4be0a23959c_640_640.jpg",
    linkKakobuy: "https://ikako.vip/smdud",
    linkUsfans: "https://usfans.com/product/3/7243654306?ref=TX9V9N",
    tag: "ASHMADE / BEST",
    rating: 4
  },
  {
    name: "VETEMENTS POLIZEI ZIP UP",
    category: "Hoodies",
    price: "$48.74",
    image: "https://si.geilicdn.com/wdseller1846720803-114100000198a3cb0dfe0a81347d_1179_1959.jpg",
    linkKakobuy: "https://ikako.vip/6td55",
    linkUsfans: "https://usfans.com/product/3/7524607361?ref=TX9V9N",
    tag: "ASHMADE",
    rating: 4
  },
  {
    name: "RL SOCKS (3 PAIR)",
    category: "Underwear",
    price: "$5.71",
    image: "https://si.geilicdn.com/open1847561709-1234478995-63430000019639937a5e0a23b491_1280_1280.jpg",
    linkKakobuy: "https://ikako.vip/fyrwk",
    linkUsfans: "https://usfans.com/product/3/7449109988?ref=TX9V9N",
    tag: "BAYMAXSOCKS",
    rating: 4
  },
  {
    name: "PALACE SOCKS",
    category: "Underwear",
    price: "$1.96",
    image: "https://img.alicdn.com/bao/uploaded/i4/3548429741/O1CN018P1etH2LpQxQff7DG_!!3548429741.jpg",
    linkKakobuy: "https://usfans.com/product/2/d17SSF0QRHb2uNdiUFrNa9pB8nJ36_iCdkXbpamA9bj_IV5DvW9sWg?ref=TX9V9N",
    linkUsfans: "https://usfans.com/product/2/d17SSF0QRHb2uNdiUFrNa9pB8nJ36_iCdkXbpamA9bj_IV5DvW9sWg?ref=TX9V9N",
    tag: "BAYMAXSOCKS",
    rating: 4
  },
  {
    name: "HELLSTAR SOCKS",
    category: "Underwear",
    price: "$3.25",
    image: "https://img.alicdn.com/bao/uploaded/i3/65389438/O1CN013E0TrA2Jaf95kM4G5_!!65389438.jpg",
    linkKakobuy: "",
    linkUsfans: "https://usfans.com/product/2/PyFZ8q0-Nlr2izvuoYcBtYmS6B1B0ageQebsIZ8jdO-qm1N6eZmEZA?ref=TX9V9N",
    tag: "BAYMAXSOCKS",
    rating: 4
  },
  {
    name: "CHROME HEARTS SOCKS",
    category: "Underwear",
    price: "$4.88",
    image: "https://si.geilicdn.com/pcitem901541691039-6a5300000178cf24fbcd0a21c2a7_800_800.jpg",
    linkKakobuy: "",
    linkUsfans: "https://usfans.com/product/3/7615886986?ref=TX9V9N",
    tag: "BAYMAXSOCKS",
    rating: 4
  },
  {
    name: "RICK OWENS ABSTRACT",
    category: "Shoes",
    price: "$79.11",
    image: "https://img.alicdn.com/bao/uploaded/i4/2073165527/O1CN01A4XoJT1qhPxIMyFEf_!!2073165527.jpg",
    linkKakobuy: "",
    linkUsfans: "https://usfans.com/product/2/J4r9uqkNrr2TwK1YkrIBU1dkA_PyeeES4F_spiQB2fNwDQwapGisTw?ref=TX9V9N",
    tag: "ROK / BEST",
    rating: 4
  },
  {
    name: "RICK OWENS VANS",
    category: "Shoes",
    price: "$56.89",
    image: "https://img.alicdn.com/bao/uploaded/i3/2073165527/O1CN01tc3z221qhPwJH7aLk_!!2073165527.jpg",
    linkKakobuy: "",
    linkUsfans: "https://usfans.com/product/2/vyak_E-glKVaGmgCQySUZ79bs49WDuu8waSHlbm2pfXGkUi3bjIOVA?ref=TX9V9N",
    tag: "ROK / BEST",
    rating: 4
  },
  {
    name: "UNDERCOVER TEE",
    category: "Tshirts",
    price: "$11.25",
    image: "https://img.alicdn.com/bao/uploaded/i4/2652892586/O1CN017MSIGW1UyRMjfjrDX_!!2652892586.jpg",
    linkKakobuy: "",
    linkUsfans: "https://usfans.com/product/2/UShfJHH7oAK2rEIE41jM71Ts7Un9k8vwGBK9osv7cjlyWrY8HPYVPQ?ref=TX9V9N",
    tag: "RANDOM",
    rating: 4
  },
  {
    name: "HYSTERIC GLAMOUR TEE",
    category: "Tshirts",
    price: "$26",
    image: "https://img.alicdn.com/bao/uploaded/i2/2126072107/O1CN01lIZ3qs1RR3d7Me3XK~crop,160,0,960,1280~_!!2126072107.jpg",
    linkKakobuy: "",
    linkUsfans: "https://usfans.com/product/2/xpCHkdkav8FLvjubSasmezmROnuH30y3v62h6qGmizMfgQJfWQJZzvY?ref=TX9V9N",
    tag: "BDSS",
    rating: 4
  },
  {
    name: "BALENCIAGA X UA SHORTS",
    category: "Shorts",
    price: "$24.13",
    image: "https://si.geilicdn.com/wdseller1405292126-3a04000001978dce998a0a2102b1_1290_1197.jpg",
    linkKakobuy: "",
    linkUsfans: "https://usfans.com/product/3/7786198628?ref=TX9V9N",
    tag: "SQUIRTLE",
    rating: 5
  },
  {
    name: "CHROME HEARTS LONGSLEEVE",
    category: "Tshirts",
    price: "$25.76",
    image: "https://si.geilicdn.com/wdseller1405292126-4b3c000001985f8089250a23c286_2560_1934.jpg",
    linkKakobuy: "https://ikako.vip/v25g7",
    linkUsfans: "https://usfans.com/product/3/7786208490?ref=TX9V9N",
    tag: "SQUIRTLE",
    rating: 5
  },
  {
    name: "CHROME HEARTS SHORTS",
    category: "Shorts",
    price: "$30.65",
    image: "https://si.geilicdn.com/wdseller1405292126-4219000001992e33a1290a20e273_1290_1223.jpg",
    linkKakobuy: "https://ikako.vip/9paad",
    linkUsfans: "https://usfans.com/product/3/7786239962?ref=TX9V9N",
    tag: "SQUIRTLE",
    rating: 5
  },
  {
    name: "BALENCIAGA SHORTS",
    category: "Shorts",
    price: "$22.50",
    image: "https://si.geilicdn.com/wdseller1405292126-77ba00000193c4d808390a23047e_1290_1219.jpg",
    linkKakobuy: "https://ikako.vip/9nkuj",
    linkUsfans: "https://usfans.com/product/3/7786255704?ref=TX9V9N",
    tag: "SQUIRTLE",
    rating: 5
  },
  {
    name: "CHROME HEARTS LONGSLEEVE",
    category: "Tshirts",
    price: "$27.39",
    image: "https://si.geilicdn.com/wdseller1405292126-64c400000195177b28790a2315ef_1290_1689.jpg",
    linkKakobuy: "https://ikako.vip/f8hzny",
    linkUsfans: "https://usfans.com/product/3/7783183005?ref=TX9V9N",
    tag: "SQUIRTLE",
    rating: 5
  },
  {
    name: "VINTAGE CH HOODIE",
    category: "Hoodies",
    price: "$51",
    image: "https://si.geilicdn.com/pcitem2008188646-21c00000019b738810f80a23057e_1200_1600.jpg",
    linkKakobuy: "https://ikako.vip/eqd7r",
    linkUsfans: "https://usfans.com/product/3/7629374909?ref=TX9V9N",
    tag: "ARCHIVED",
    rating: 5
  },
  {
    name: "VALLEY DREAMS HOODIES",
    category: "Hoodies",
    price: "$24.13",
    image: "https://img.alicdn.com/bao/uploaded/i3/2075710764/O1CN01eqUFCc1HVxgw5RfJz_!!2075710764.jpg",
    linkKakobuy: "https://ikako.vip/5nqwp",
    linkUsfans: "https://usfans.com/product/2/RWGhW_ulBR2_HEOTu7Mhh1bCA4dtODLZ61BiqBdLTvuLzNsBlPByuQ?ref=TX9V9N",
    tag: "RANDOM / BUDGET",
    rating: 5
  },
  {
    name: "KAPITEL SURF HOODIES",
    category: "Hoodies",
    price: "$48.75",
    image: "https://img.alicdn.com/bao/uploaded/i1/2025450085/O1CN01AmRE3y1CUylvX2gwT_!!2025450085.jpg",
    linkKakobuy: "https://ikako.vip/nrzc5",
    linkUsfans: "https://usfans.com/product/2/3wB5k1nr8DDenvB_ewwpdw_TyKF5ies4kVL1wdLWBgshuOkumz3NVA?ref=TX9V9N",
    tag: "HONGSHENG",
    rating: 5
  },
  {
    name: "NUMBER NINE MICKEY HOODIE",
    category: "Hoodies",
    price: "$40.43",
    image: "https://img.alicdn.com/bao/uploaded/i2/2025450085/O1CN01R6ASXf1CUykxlROaZ_!!2025450085.jpg",
    linkKakobuy: "https://ikako.vip/cpkex",
    linkUsfans: "https://usfans.com/product/2/iYcyMLG3POCMBidyqugVMtJAdKo-eHqbAWYGrPrtWuJBu-qfRk1u0A?ref=TX9V9N",
    tag: "HONGSHENG",
    rating: 5
  },
  {
    name: "NE NET HOODIE",
    category: "Hoodies",
    price: "$20",
    image: "https://img.alicdn.com/bao/uploaded/i2/787254007/O1CN01RkRP2Y1fTFuWHMK2I_!!787254007.png",
    linkKakobuy: "https://ikako.vip/742mk",
    linkUsfans: "https://usfans.com/product/2/g5QimVpAX5nwPbUdTkj_JNkyLytYjQE4S6GxShjmACnzAiz3nNy6CA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "NIKE ELITE BACKPACK",
    category: "Belts",
    price: "$8.31",
    image: "https://media.usfans.com/2026/07/17/172004/8419dbbf-4dd6-4b18-a9c9-4d524c5e8350.jpg",
    linkKakobuy: "https://ikako.vip/e9bwm",
    linkUsfans: "https://usfans.com/product/1/773949589656?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "UNDERCOVER 13AW BACKPACK",
    category: "Accesories",
    price: "$65",
    image: "https://img.alicdn.com/bao/uploaded/i1/2702114446/O1CN01mrcgiR1iiJwfboOsB_!!2702114446.jpg",
    linkKakobuy: "",
    linkUsfans: "https://usfans.com/product/2/rc-ZM3IvF86JpqxNJjr27A18EDCjDNksqv_YQ4r-_lExO1AT_PyUBw?ref=TX9V9N",
    tag: "LUFU",
    rating: 5
  },
  {
    name: "SUPREME LEOPARD BACKPACK",
    category: "Accesories",
    price: "$27.60",
    image: "https://media.usfans.com/2026/07/12/174444/c061b271-e2f4-4a38-af4a-77a6c736cbd6.jpg",
    linkKakobuy: "",
    linkUsfans: "https://usfans.com/product/2/HFOTg0uzbd-H9mtSSofdwKyxrStX2BymygYJe4JqEKOVbp1U7KE1Tg?ref=TX9V9N",
    tag: "LUFU",
    rating: 5
  },
  {
    name: "MAYBACK SUNGLASSES",
    category: "Accesories",
    price: "$5.40",
    image: "https://cbu01.alicdn.com/img/ibank/O1CN01CnSQRZ1vHq2QHlEB8_!!2218760966148-0-cib.jpg",
    linkKakobuy: "https://ikako.vip/frk2v",
    linkUsfans: "https://usfans.com/product/1/870678623599?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 5
  },
  {
    name: "COUGH SYRUP TEE",
    category: "Tshirts",
    price: "$15.50",
    image: "https://img.alicdn.com/bao/uploaded/i4/2214138141153/O1CN01yHxiLt1KO7f5Wgt3B_!!2214138141153.jpg",
    linkKakobuy: "https://usfans.com/product/2/T_dLPYyWf6bP4dNUDseZrRaqFr2wuPZZHYVwQ97XIOUowiehu4s0gg?ref=TX9V9N",
    linkUsfans: "https://usfans.com/product/2/T_dLPYyWf6bP4dNUDseZrRaqFr2wuPZZHYVwQ97XIOUowiehu4s0gg?ref=TX9V9N",
    tag: "PIKA",
    rating: 5
  },
  {
    name: "SATOSHI NAKAMOTO T-SHIRTS",
    category: "Tshirts",
    price: "$13",
    image: "https://media.usfans.com/2026/06/23/144556/5c902034-4dd6-4c4a-8e77-4edab8ffdd0e.jpg",
    linkKakobuy: "https://ikako.vip/zctn7",
    linkUsfans: "https://usfans.com/product/1/1049179417188?ref=TX9V9N",
    tag: "RANDOM/BUDGET",
    rating: 5
  },
  {
    name: "BLEOOD MERCH TEE",
    category: "Tshirts",
    price: "$11.91",
    image: "https://img.alicdn.com/bao/uploaded/i1/2212643669335/O1CN01DrxRvd2IpUQDbpEUV_!!2212643669335.jpg",
    linkKakobuy: "https://usfans.com/product/2/KhZHCpXUN9d7Qq2T71fbGEy2D4GqvgjjlvslKjyrkEE7auNcTgKQNIo?ref=TX9V9N",
    linkUsfans: "https://usfans.com/product/2/KhZHCpXUN9d7Qq2T71fbGEy2D4GqvgjjlvslKjyrkEE7auNcTgKQNIo?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "NE NE CAT TEE",
    category: "Tshirts",
    price: "$9.48",
    image: "https://img.alicdn.com/bao/uploaded/i3/3965754257/O1CN01ZhzNMn1hJkjaj2ias_!!3965754257.jpg",
    linkKakobuy: "https://usfans.com/product/2/4f6Cyc9fxtucAMssp9H849AO-X25qcn89SY7zwvOn44vDXDQI-1OSQ?ref=TX9V9N",
    linkUsfans: "https://usfans.com/product/2/4f6Cyc9fxtucAMssp9H849AO-X25qcn89SY7zwvOn44vDXDQI-1OSQ?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "PROJECT GR TEE",
    category: "Tshirts",
    price: "$8.70",
    image: "https://media.usfans.com/2026/06/21/162452/8b311893-847c-4bc5-b7b0-5e9807b359e2.jpg",
    linkKakobuy: "https://ikako.vip/uqkzuz",
    linkUsfans: "https://usfans.com/product/1/950112519813?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "130 BACKPACK",
    category: "Belts",
    price: "$35.75",
    image: "https://media.usfans.com/2026/07/18/170304/010e5364-9a2b-4f8b-bea2-38673d7ad2f9.jpg",
    linkKakobuy: "https://usfans.com/product/3/7737174343?ref=TX9V9N",
    linkUsfans: "https://usfans.com/product/3/7737174343?ref=TX9V9N",
    tag: "ALIENSTUDIO",
    rating: 5
  },
  {
    name: "RANDOM DENIM SHORTS",
    category: "Shorts",
    price: "$14.36",
    image: "https://img.alicdn.com/bao/uploaded/i3/2212336833369/O1CN01A220WO1al3Jl7BKA9_!!2212336833369.jpg",
    linkKakobuy: "https://usfans.com/product/2/MIS25rkHkrMuoFc6tBU9MM3C1e5IIH_wQ249k0lPYU_zK9Nsm-DCpA?ref=TX9V9N",
    linkUsfans: "https://usfans.com/product/2/MIS25rkHkrMuoFc6tBU9MM3C1e5IIH_wQ249k0lPYU_zK9Nsm-DCpA?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "RANDOM FLARED JEANS",
    category: "Pants",
    price: "$19.58",
    image: "https://img.alicdn.com/bao/uploaded/i3/2212336833369/O1CN018q00CO1al3R2ZbvbO_!!2212336833369.jpg",
    linkKakobuy: "https://usfans.com/product/2/UimTYS-yTE7Fekqmxhj-lef-EJw_flpb-9wBw2yLPGE1Gn9iTg0vHQ?ref=TX9V9N",
    linkUsfans: "https://usfans.com/product/2/UimTYS-yTE7Fekqmxhj-lef-EJw_flpb-9wBw2yLPGE1Gn9iTg0vHQ?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "RANDOM LOOSE FIT PANTS",
    category: "Pants",
    price: "$17.13",
    image: "https://img.alicdn.com/bao/uploaded/i2/2212336833369/O1CN01mhltm71al3RCj1l2I_!!2212336833369.jpg",
    linkKakobuy: "https://usfans.com/product/2/91NPilR7T6VYFcRLEkzCvT8Hitl8vW6wUWHLcZ1T53BOF68Ceatl5Q?ref=TX9V9N",
    linkUsfans: "https://usfans.com/product/2/91NPilR7T6VYFcRLEkzCvT8Hitl8vW6wUWHLcZ1T53BOF68Ceatl5Q?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "SAINT HOODIE",
    category: "Hoodies",
    price: "$30.20",
    image: "https://img.alicdn.com/bao/uploaded/i2/2247438892/O1CN01oJw7LL2FYabKfGBk0_!!2247438892.jpg",
    linkKakobuy: "https://usfans.com/product/2/Ymoql3RXWc5_GfdEy5e4oxHxOD6jufaBT2dIoEvFTHejKF12oxKlAg?ref=TX9V9N",
    linkUsfans: "https://usfans.com/product/2/Ymoql3RXWc5_GfdEy5e4oxHxOD6jufaBT2dIoEvFTHejKF12oxKlAg?ref=TX9V9N",
    tag: "RANDOM",
    rating: 5
  },
  {
    name: "NEW ERA HATS",
    category: "Belts",
    price: "$3.23",
    image: "https://kk-oss-wh-hk.kakobuy.com/whg/202607/19/053ce9c5101c6443970ee536a41642b3.jpg",
    linkKakobuy: "https://ikako.vip/6bfmy",
    linkUsfans: "https://usfans.com/product/1/810086892559?ref=TX9V9N",
    tag: "RANDOM / BUDGET",
    rating: 5
  },
  {
    name: "CHROME HEARTS HAT",
    category: "Belts",
    price: "$6.40 - $9",
    image: "https://kk-oss-wh-hk.kakobuy.com/whg/202607/17/4d8b53d4219269209aa7b60c79e444ca.jpg",
    linkKakobuy: "https://ikako.vip/84m6k",
    linkUsfans: "https://usfans.com/product/1/805053010175?ref=TX9V9N",
    tag: "RANDOM / BUDGET",
    rating: 5
  },
];

// ============================================
// 🏪 SPRZEDAWCY - DODAWAJ TUTAJ NOWYCH SPRZEDAWCÓW!
// ============================================
const sellers = [
  // PRZYKŁADOWY SPRZEDAWCA:
  // {
  //   name: "Nazwa",
  //   category: "clothing", // clothing, shoes, luxury
 {
    name: "HotDog",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na broken planet",
    link: "https://hotdog-official.x.yupoo.com/",
    rating: 9.5,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "GOAT666",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy seller na trapstara",
    link: "https://goat-official666.x.yupoo.com/",
    rating: 9.2,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "Pengreps",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na Dershutze i Mertra",
    link: "http://pengreps.x.yupoo.com/",
    rating: 9.2,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "Goat",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na Corteiz",
    link: "https://goat-official.x.yupoo.com/",
    rating: 9.8,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "ScarlettLuxury",
    category: "luxury",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na luksusowe Torebki,Portfele,Plecaki",
    link: "https://scarlettluxury.x.yupoo.com/",
    rating: 8.5,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "TopHot",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na Casablanca , Chrome Hearts",
    link: "https://tophotfashion.x.yupoo.com/categories/4639789",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "Pika",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na Sp5der, Hellstar, Eric Emmanuel",
    link: "https://pikachushop.x.yupoo.com/categories/4695853",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "Husky",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na Tech Fleece",
    link: "https://huskyreps.x.yupoo.com/categories/5071768",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "AlienStudio",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na PeaceInWar",
    link: "https://alienstudio.x.yupoo.com/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "SharkBreeder",
    category: "shoes",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na obuwie Off-White, oraz kurtki TNF (TOP BATCH)",
    link: "https://shark-breeder.x.yupoo.com/categories/4510356",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "MVT",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na Acne Studios, Balenciaga Strike Boots oraz Margiela Gats",
    link: "https://mvt-shop01.x.yupoo.com/search/album?uid=1&sort=&q=acne",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
   {
    name: "NeonRG",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na obuwie Loubutin",
    link: "https://weidian.com/?userid=927881720&p=iphone&wfr=BuyercopyURL&share_relation=abed070e2cc9bf60_927881720_1",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "Thunder",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca odzieży high fashion oraz na marki typu: BURBERRY, BALENCIAGA",
    link: "https://thethunder.x.yupoo.com/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
   {
    name: "CVW",
    category: "shoes",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na sneakersy Travis",
    link: "https://weidian.com/?userid=1801401190",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "Elepant",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na Syna World",
    link: "https://elephant-factory.x.yupoo.com/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "1to1",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Jeden z lepszych sprzedawców na itemy CELINE",
    link: "https://1to1.x.yupoo.com/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "Kevin",
    category: "shoes",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na buty DIOR B23",
    link: "https://13160805690.x.yupoo.com/categories/734649?isSubCate=true",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "SurvivalSource",
    category: "Luxury",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na bransoletki wykonane z naprawde trwałych materiałów.",
    link: "hhttps://www.survivalworld1.top/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "OGWave",
    category: "All",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na czapki oraz szaliki",
    link: "https://ogwave.x.yupoo.com/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "BackStudio",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na Givenchy",
    link: "https://backstudio.x.yupoo.com/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "BaymaxSocks",
    category: "All",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na bielizne",
    link: "https://baymaxsocks.x.yupoo.com/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "Naisan",
    category: "shoes",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na obuwie Lanvin, Hasło: Hinaisan , żeby zakupic przedmiot trzeba napisac do niego na whatsappie",
    link: "https://naisan23.x.yupoo.com/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
   {
    name: "HengyuClub",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na spodnie Purple Brand",
    link: "https://hengyuclub.x.yupoo.com/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
   {
    name: "BigD",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na ciuchy Ksubi",
    link: "https://shop315027087.world.taobao.com/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "Jieyi",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na kurtki MONCLER",
    link: "https://jieyi168.x.yupoo.com/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "AngelKing",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na Denim Tears",
    link: "https://angelking47.x.yupoo.com/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "Koala",
    category: "shoes",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na buty DIOR B22",
    link: "https://item.taobao.com/item.htm?id=765005637664",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "DreamRemake",
    category: "shoes",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na kurtki Arcteryx",
    link: "https://west42.x.yupoo.com/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "K8",
    category: "Luxury",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na paski/belty",
    link: "https://weidian.com/?userid=1621840505",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "Judx",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na Stone Island",
    link: "https://shop1735775997.v.weidian.com/?userid=1735775997&wfr=BuyercopyURL&share_relation=fac77d2b317052fe_1202650183_1&spider_token=8893&tabType=new",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "UnionKingdom",
    category: "Luxury",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na blank ubrania",
    link: "https://unionkingdom.x.yupoo.com/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "KOG",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na kurtki Canada Goose",
    link: "https://kog001.x.yupoo.com/",
    rating: 10,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
   {
    name: "REPBROS",
    category: "clothing",
    badge: "Najwyżej oceniany",
    description: "Najlepszy sprzedawca na CDG,AMI",
    link: "https://repbros.x.yupoo.com/albums",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "YOLO",
    category: "shoes",
    badge: "Najwyżej oceniany",
    description: "Jeden z lepszych sprzedawców na obuwie. Przed zakupem polecam sprawdzic jaki batch na dany item",
    link: "https://yolo66.x.yupoo.com/categories",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "WWTOP",
    category: "shoes",
    badge: "Najwyżej oceniany",
    description: "Jeden z lepszych sprzedawców na obuwie. Przed zakupem polecam sprawdzic jaki batch na dany item",
    link: "https://wwfake100.x.yupoo.com/albums?tab=gallery",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "EVGA",
    category: "shoes",
    badge: "Najwyżej oceniany",
    description: "Jeden z lepszych sprzedawców na obuwie (BALENCIAGA) Przed zakupem polecam sprawdzic jaki batch na dany item",
    link: "https://evga.x.yupoo.com/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  {
    name: "GODMALL",
    category: "Luxury",
    badge: "Najwyżej oceniany",
    description: "BEST BUDGET NA TORBKI, WE RECOMMEND TAKE ITEMS WITH LETTER A E.G P580A",
    link: "https://godmall.x.yupoo.com/",
    rating: 9.0,
    image: "https://cdn-icons-png.freepik.com/512/168/168814.png"
  },
  
];

// ============================================
// 🔥 PRODUKTY KTÓRE CHCESZ WIDZIEĆ W "POPULARNE"
// ============================================
// Jeśli chcesz ręcznie wybrać produkty - wpisz ich nazwy poniżej
// Jeśli zostawisz puste [], to pokaże ostatnio dodane produkty
const featuredProducts = [
  // "Jordan 4 Frozen Moments / Black Canvas",
  // "ERD BLACK HOODIE",
  // "AF1",
];

// ============================================
// 🌐 ZMIENNE STANU (NIE RUSZAJ!)
// ============================================
let currentCategory = "All";
let searchQuery = "";
let currentLanguage = localStorage.getItem('selectedLanguage') || 'pl';
let preferredAgent = localStorage.getItem('preferredAgent') || null;
let isFirstVisit = !localStorage.getItem('hasVisited');
let currentSellerCategory = 'all';
let currentView = 'products';
let currentSellerSearch = '';

// ============================================
// 🌐 TŁUMACZENIA - TU MOŻESZ ZMIENIAĆ NAZWY KATEGORII
// ============================================
const translations = {
  pl: {
    spreadsheet: "📄 Spreadsheet",
    sellers: "🔍 Sprzedawcy",
    changeAgent: "🛒 Zmień agenta",
    heroTitle: "Spreadsheet",
    heroSubtitle: "Przeglądaj naszą kolekcję najlepszych linków.",
    searchPlaceholder: "Szukaj produktów...",
    all: "All",
    shoes: "Buty",
    tshirts: "Koszulki",
    hoodies: "Bluzy",
    shorts: "Spodenki",
    pants: "Spodnie",
    jackets: "Kurtki",
    underwear: "Bielizna",
    belts: "Akcesoria",
    sorting: "Sortowanie",
    defaultSort: "Domyślne",
    priceAsc: "Cena: od najniższej",
    priceDesc: "Cena: od najwyższej",
    priceFilter: "Filtr cenowy (PLN)",
    min: "Min",
    max: "Max",
    clearFilter: "Wyczyść filtr",
    agentPopupTitle: "Wybierz Agenta",
    agentPopupDesc: "Wybierz preferowanego agenta do zakupów przedmiotów.",
    langPopupTitle: "Wybierz język",
    langPopupDesc: "Select your preferred language",
    langConfirm: "Kontynuuj →",
    langPl: "Polski",
    langEn: "English",
    items: "itemów",
    qc: "🔍 Sprawdź QC"
  },
  en: {
    spreadsheet: "📄 Spreadsheet",
    sellers: "🔍 Best Sellers",
    changeAgent: "🛒 Change Agent",
    heroTitle: "Spreadsheet",
    heroSubtitle: "Browse our collection of the best links.",
    searchPlaceholder: "Search products...",
    all: "All",
    shoes: "Shoes",
    tshirts: "T-shirts",
    hoodies: "Hoodies",
    shorts: "Shorts / Pants",
    pants: "Pants",
    jackets: "Jackets",
    underwear: "Underwear",
    belts: "Belts",
    sorting: "Sorting",
    defaultSort: "Default",
    priceAsc: "Price: Low to High",
    priceDesc: "Price: High to Low",
    priceFilter: "Price Filter (PLN)",
    min: "Min",
    max: "Max",
    clearFilter: "Clear Filter",
    agentPopupTitle: "Select Agent",
    agentPopupDesc: "Choose your preferred shipping agent for items.",
    langPopupTitle: "Select Language",
    langPopupDesc: "Wybierz preferowany język",
    langConfirm: "Continue →",
    langPl: "Polish",
    langEn: "English",
    items: "items",
    qc: "🔍 Check QC"
  }
};

// ============================================
// 📋 MAPOWANIE KATEGORII - TU MOŻESZ DODAWAĆ NOWE KATEGORIE
// ============================================
const categoryMapping = [
  { techName: "All", translationKey: "all" },
  { techName: "Shoes", translationKey: "shoes" },
  { techName: "Hoodies", translationKey: "hoodies" },
  { techName: "Underwear", translationKey: "underwear" },
  { techName: "Tshirts", translationKey: "tshirts" },
  { techName: "Shorts", translationKey: "shorts" },
  { techName: "Pants", translationKey: "pants" },
  { techName: "Jackets", translationKey: "jackets" },
  { techName: "Belts", translationKey: "belts" }
  // DODAJ NOWĄ KATEGORIĘ:
  // { techName: "TwojaNowaKategoria", translationKey: "twoja_nowa" }
];

// ============================================
// 📋 KONFIGURACJA AGENTÓW (NIE RUSZAJ!)
// ============================================
const agentConfig = {
  kakobuy: {
    name: 'Kakobuy',
    logo: 'https://kakobuy.com/favicon.ico',
    title: 'Dołącz do Kakobuy!',
    desc: 'Zarejestruj się przez nasz link i otrzymaj <strong>bonus powitalny</strong> na pierwsze zakupy!',
    codeLabel: 'Kod rabatowy:',
    code: 'archiverepss',
    discount: '🎉 Otrzymujesz <strong>-15$</strong> na shipping!',
    btnText: 'Zarejestruj się →',
    btnUrl: 'https://www.kakobuy.com/register/?affcode=archivee',
    footer: 'Kod obowiązuje przy pierwszym zamówieniu'
  },
  usfans: {
    name: 'USFans',
    logo: 'https://usfans.com/favicon.ico',
    title: 'Dołącz do USFans!',
    desc: 'Zarejestruj się przez nasz link i otrzymaj <strong>bonus powitalny</strong> na pierwsze zakupy!',
    codeLabel: 'Kod referencyjny:',
    code: 'TX9V9N',
    discount: '🎉 Otrzymujesz <strong>specjalne zniżki oraz KUPON -30%</strong> na shipping!',
    btnText: 'Zarejestruj się →',
    btnUrl: 'https://usfans.com/register?ref=TX9V9N',
    footer: 'Kod obowiązuje przy pierwszym zamówieniu'
  }
};

// ============================================
// 💰 PRZELICZNIK USD → PLN (NIE RUSZAJ!)
// ============================================
const USD_TO_PLN = 3.62;

function parsePrice(priceStr) {
  if (!priceStr) return 0;
  var clean = priceStr.replace('$', '').trim();
  if (clean.includes('-')) {
    var parts = clean.split('-');
    var min = parseFloat(parts[0]);
    var max = parseFloat(parts[1]);
    return (min + max) / 2;
  }
  return parseFloat(clean);
}

function usdToPln(priceStr) {
  var usd = parsePrice(priceStr);
  if (isNaN(usd)) return 0;
  return Math.round(usd * USD_TO_PLN);
}

function formatPrice(priceStr) {
  if (priceStr.includes('-')) {
    var parts = priceStr.replace('$', '').split('-');
    var minPln = Math.round(parseFloat(parts[0]) * USD_TO_PLN);
    var maxPln = Math.round(parseFloat(parts[1]) * USD_TO_PLN);
    return {
      usd: priceStr,
      pln: minPln + ' - ' + maxPln + ' PLN'
    };
  }
  var pln = usdToPln(priceStr);
  return {
    usd: priceStr,
    pln: '≈ ' + pln + ' PLN'
  };
}

// ============================================
// 🚀 INICJALIZACJA (NIE RUSZAJ!)
// ============================================
document.addEventListener("DOMContentLoaded", function() {
  console.log("🚀 Strona załadowana");
  
  if (isFirstVisit) {
    showLanguagePopup();
  } else {
    setupLanguage();
    setupEventListeners();
    renderCategories();
    renderFeatured();
    applyFiltersAndSort();
    
    if (!preferredAgent) {
      setTimeout(function() { showAgentPopup(); }, 500);
    } else {
      updateRegisterPopup();
      setTimeout(function() { showRegisterPopup(); }, 1500);
    }
  }
});

// ============================================
// 🌐 POPUP JĘZYKA (NIE RUSZAJ!)
// ============================================
function showLanguagePopup() {
  var popup = document.getElementById('languagePopupOverlay');
  if (popup) popup.classList.add('active');
}

function hideLanguagePopup() {
  var popup = document.getElementById('languagePopupOverlay');
  if (popup) popup.classList.remove('active');
}

function selectLanguage(langCode) {
  currentLanguage = langCode;
  localStorage.setItem('selectedLanguage', langCode);
  
  document.querySelectorAll('.language-btn').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.lang === langCode);
  });
}

function confirmLanguage() {
  hideLanguagePopup();
  localStorage.setItem('hasVisited', 'true');
  isFirstVisit = false;
  
  setupLanguage();
  setupEventListeners();
  renderCategories();
  renderFeatured();
  applyFiltersAndSort();
  
  setTimeout(function() { showAgentPopup(); }, 300);
}

// ============================================
// 🤖 POPUP AGENTA (NIE RUSZAJ!)
// ============================================
function showAgentPopup() {
  var popup = document.getElementById('agentPopupOverlay');
  if (popup) popup.classList.add('active');
}

function closeAgentPopup() {
  var popup = document.getElementById('agentPopupOverlay');
  if (popup) popup.classList.remove('active');
}

function selectAgent(agentName) {
  preferredAgent = agentName;
  localStorage.setItem('preferredAgent', agentName);
  
  updateRegisterPopup();
  closeAgentPopup();
  renderFeatured();
  applyFiltersAndSort();
  
  setTimeout(function() { showRegisterPopup(); }, 500);
}

// ============================================
// 📋 POPUP REJESTRACYJNY (NIE RUSZAJ!)
// ============================================
function showRegisterPopup() {
  var popup = document.getElementById('popupOverlay');
  if (popup) popup.classList.add('active');
}

function hideRegisterPopup() {
  var popup = document.getElementById('popupOverlay');
  if (popup) popup.classList.remove('active');
}

function updateRegisterPopup() {
  var agent = preferredAgent || 'kakobuy';
  var config = agentConfig[agent];
  
  if (!config) return;
  
  var logoImg = document.getElementById('popupLogoImg');
  if (logoImg) logoImg.src = config.logo;
  
  var title = document.getElementById('popupTitle');
  if (title) title.textContent = config.title;
  
  var desc = document.getElementById('popupDesc');
  if (desc) desc.innerHTML = config.desc;
  
  var codeLabel = document.getElementById('popupCodeLabel');
  if (codeLabel) codeLabel.textContent = config.codeLabel;
  
  var codeValue = document.getElementById('popupCodeValue');
  if (codeValue) codeValue.textContent = config.code;
  
  var discount = document.getElementById('popupDiscount');
  if (discount) discount.innerHTML = config.discount;
  
  var registerBtn = document.getElementById('popupRegisterBtn');
  if (registerBtn) {
    registerBtn.href = config.btnUrl;
    registerBtn.textContent = config.btnText;
  }
  
  var footer = document.getElementById('popupFooter');
  if (footer) footer.textContent = config.footer;
}

// ============================================
// 📋 KOPIOWANIE KODU (NIE RUSZAJ!)
// ============================================
function copyCode() {
  var codeElement = document.getElementById('popupCodeValue');
  if (!codeElement) return;
  
  var code = codeElement.textContent;
  
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(code).then(function() {
      showCopyFeedback();
    }).catch(function() {
      fallbackCopy(code);
    });
  } else {
    fallbackCopy(code);
  }
}

function showCopyFeedback() {
  var btn = document.querySelector('.copy-code-btn');
  if (btn) {
    var originalText = btn.innerHTML;
    btn.innerHTML = '✅ Skopiowano!';
    setTimeout(function() {
      btn.innerHTML = originalText;
    }, 2000);
  }
}

function fallbackCopy(text) {
  var textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  document.execCommand('copy');
  document.body.removeChild(textarea);
  showCopyFeedback();
}

// ============================================
// 🎨 USTAWIENIA JĘZYKA (NIE RUSZAJ!)
// ============================================
function setupLanguage() {
  var lang = translations[currentLanguage];
  
  var navSpreadsheet = document.getElementById("navSpreadsheet");
  if (navSpreadsheet) navSpreadsheet.querySelector("span").textContent = lang.spreadsheet;
  
  var navSellers = document.getElementById("navSellers");
  if (navSellers) navSellers.querySelector("span").textContent = lang.sellers;
  
  var changeAgentBtn = document.getElementById("changeAgentBtn");
  if (changeAgentBtn) changeAgentBtn.querySelector("span").textContent = lang.changeAgent;
  
  var heroTitle = document.getElementById("heroTitle");
  if (heroTitle) heroTitle.textContent = lang.heroTitle;
  
  var heroSubtitle = document.getElementById("heroSubtitle");
  if (heroSubtitle) heroSubtitle.textContent = lang.heroSubtitle;
  
  var searchInput = document.getElementById("search");
  if (searchInput) searchInput.placeholder = lang.searchPlaceholder;
  
  var lblSorting = document.getElementById("lblSorting");
  if (lblSorting) lblSorting.textContent = lang.sorting;
  
  var optDefault = document.getElementById("optDefault");
  if (optDefault) optDefault.textContent = lang.defaultSort;
  
  var optAsc = document.getElementById("optAsc");
  if (optAsc) optAsc.textContent = lang.priceAsc;
  
  var optDesc = document.getElementById("optDesc");
  if (optDesc) optDesc.textContent = lang.priceDesc;
  
  var lblPriceFilter = document.getElementById("lblPriceFilter");
  if (lblPriceFilter) lblPriceFilter.textContent = lang.priceFilter;
  
  var priceMin = document.getElementById("priceMin");
  if (priceMin) priceMin.placeholder = lang.min;
  
  var priceMax = document.getElementById("priceMax");
  if (priceMax) priceMax.placeholder = lang.max;
  
  var clearFilterBtn = document.getElementById("clearFilterBtn");
  if (clearFilterBtn) clearFilterBtn.textContent = lang.clearFilter;
  
  var agentPopupTitle = document.getElementById("agentPopupTitle");
  if (agentPopupTitle) agentPopupTitle.textContent = lang.agentPopupTitle;
  
  var agentPopupDesc = document.getElementById("agentPopupDesc");
  if (agentPopupDesc) agentPopupDesc.textContent = lang.agentPopupDesc;
  
  var langPopupTitle = document.getElementById("langPopupTitle");
  if (langPopupTitle) langPopupTitle.textContent = lang.langPopupTitle;
  
  var langPopupDesc = document.getElementById("langPopupDesc");
  if (langPopupDesc) langPopupDesc.textContent = lang.langPopupDesc;
  
  var confirmLangBtn = document.getElementById("confirmLangBtn");
  if (confirmLangBtn) confirmLangBtn.textContent = lang.langConfirm;
  
  var qcLink = document.getElementById('navQC');
  if (qcLink) {
    var span = qcLink.querySelector('span');
    if (span) span.textContent = lang.qc;
  }
  
  document.querySelectorAll('.language-btn').forEach(function(btn) {
    var langKey = btn.dataset.lang;
    var nameSpan = btn.querySelector('.lang-name');
    if (nameSpan) {
      nameSpan.textContent = langKey === 'pl' ? lang.langPl : lang.langEn;
    }
  });
}

// ============================================
// 🎯 EVENT LISTENERS (NIE RUSZAJ!)
// ============================================
function setupEventListeners() {
  var lastFindsLink = document.getElementById('navLastFinds');
  if (lastFindsLink){
    lastFindsLink.addEventListener('click', function(e){
      e.preventDefault();
      switchView('lastfinds');
    });
  }
  var filterToggleBtn = document.getElementById("filterToggleBtn");
  var advancedFilters = document.getElementById("advancedFilters");
  if (filterToggleBtn && advancedFilters) {
    filterToggleBtn.addEventListener("click", function() {
      advancedFilters.classList.toggle("active");
    });
  }

  var changeLangBtn = document.getElementById("changeLangBtn");
  if (changeLangBtn) {
    changeLangBtn.addEventListener("click", function() {
      showLanguagePopup();
    });
  }

  var changeAgentBtn = document.getElementById("changeAgentBtn");
  if (changeAgentBtn) {
    changeAgentBtn.addEventListener("click", function() {
      showAgentPopup();
    });
  }

  var sellersLink = document.getElementById('navSellers');
  if (sellersLink) {
    sellersLink.addEventListener('click', function(e) {
      e.preventDefault();
      switchView('sellers');
    });
  }
  
  var spreadsheetLink = document.getElementById('navSpreadsheet');
  if (spreadsheetLink) {
    spreadsheetLink.addEventListener('click', function(e) {
      e.preventDefault();
      switchView('products');
    });
  }

  var qcLink = document.getElementById('navQC');
  if (qcLink) {
    qcLink.addEventListener('click', function(e) {
      e.preventDefault();
      window.open('https://qcitems.com/', '_blank');
    });
  }

  var scrollToTopBtn = document.getElementById("scrollToTopBtn");
  if (scrollToTopBtn) {
    window.addEventListener("scroll", function() {
      if (window.scrollY > 300) {
        scrollToTopBtn.classList.add("show");
      } else {
        scrollToTopBtn.classList.remove("show");
      }
    });
    scrollToTopBtn.addEventListener("click", function() {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  }

  var closeBtn = document.getElementById('popupClose');
  if (closeBtn) {
    closeBtn.addEventListener('click', hideRegisterPopup);
  }
  
  var popup = document.getElementById('popupOverlay');
  if (popup) {
    popup.addEventListener('click', function(e) {
      if (e.target === this) hideRegisterPopup();
    });
  }
}

// ============================================
// 📊 RENDEROWANIE KATEGORII (NIE RUSZAJ!)
// ============================================
function renderCategories() {
  var container = document.getElementById("categoriesContainer");
  if (!container) return;
  container.innerHTML = "";

  categoryMapping.forEach(function(cat) {
    var btn = document.createElement("button");
    btn.className = "category-chip" + (currentCategory === cat.techName ? " active" : "");
    btn.textContent = translations[currentLanguage][cat.translationKey] || cat.techName;
    btn.addEventListener("click", function() {
      currentCategory = cat.techName;
      renderCategories();
      applyFiltersAndSort();
    });
    container.appendChild(btn);
  });
}

// ============================================
// 🔥 RENDEROWANIE POPULARNE (NIE RUSZAJ!)
// ============================================
function renderFeatured() {
  var grid = document.getElementById('featuredGrid');
  if (!grid) return;
  
  var featuredItems = [];
  
  // Jeśli masz zdefiniowane konkretne produkty w featuredProducts
  if (featuredProducts.length > 0) {
    featuredItems = products.filter(function(p) {
      return featuredProducts.includes(p.name);
    });
  } 
  
  // Jeśli nie ma zdefiniowanych, weź ostatnie 6 dodanych produktów
  if (featuredItems.length === 0) {
    var reversed = products.slice().reverse();
    featuredItems = reversed.slice(0, Math.min(6, products.length));
  }
  
  if (featuredItems.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 20px; color: #71717a;">Brak produktów do wyświetlenia.</div>';
    return;
  }
  
  grid.innerHTML = '';
  
  featuredItems.forEach(function(p) {
    var finalLink = preferredAgent === "kakobuy" ? p.linkKakobuy : p.linkUsfans;
    var catMap = categoryMapping.find(function(c) { return c.techName === p.category; });
    var localizedCat = catMap ? translations[currentLanguage][catMap.translationKey] : p.category;
    var priceData = formatPrice(p.price);
    
    var tagClass = 'product-tag';
    if (p.tag && p.tag.toUpperCase().includes('BEST')) {
      tagClass += ' best';
    } else if (p.tag && p.tag.toUpperCase().includes('BUDGET')) {
      tagClass += ' budget';
    }
    
    var safeImage = p.image || 'https://via.placeholder.com/300x200?text=No+Image';
    var safeName = p.name || 'Produkt';
    var randomViews = Math.floor(Math.random() * 500) + 200;
    
    var card = document.createElement('div');
    card.className = 'featured-card';
    
    card.addEventListener('click', function(e) {
      if (e.target.closest('.zoom-icon')) return;
      if (finalLink && finalLink !== '#') {
        window.open(finalLink, '_blank');
      }
    });
    
    card.innerHTML = 
      '<img src="' + safeImage + '" alt="' + safeName + '" class="product-image" loading="lazy" onerror="this.src=\'https://via.placeholder.com/300x200?text=No+Image\'">' +
      '<div class="zoom-icon" onclick="event.stopPropagation(); openLightbox(\'' + safeImage + '\')">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0b0b0c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<circle cx="11" cy="11" r="8"/>' +
          '<path d="m21 21-4.35-4.35"/>' +
          '<path d="M11 8v6M8 11h6"/>' +
        '</svg>' +
      '</div>' +
      (p.tag ? '<div class="' + tagClass + '">' + p.tag + '</div>' : '') +
      '<div class="product-overlay">' +
        '<div class="product-info-bottom">' +
          '<div class="product-meta-left">' +
            '<div class="product-title">' + safeName + '</div>' +
            '<div class="product-category-label">' + localizedCat + '</div>' +
          '</div>' +
          '<div class="product-price-wrapper">' +
            '<span class="product-price-usd">' + priceData.usd + '</span>' +
            '<span class="product-price-pln">' + priceData.pln + '</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="product-views">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>' +
          '<circle cx="12" cy="12" r="3"/>' +
        '</svg>' +
        ' ' + randomViews +
      '</div>';
    
    grid.appendChild(card);
  });
}

// ============================================
// 🔍 WYSZUKIWANIE (NIE RUSZAJ!)
// ============================================
function handleSearch() {
  var mainSearch = document.getElementById("search").value;
  var globalSearch = document.getElementById("globalSearch").value;
  searchQuery = (mainSearch || globalSearch).toLowerCase().trim();
  applyFiltersAndSort();
}

function clearPriceFilters() {
  document.getElementById("priceMin").value = "";
  document.getElementById("priceMax").value = "";
  applyFiltersAndSort();
}

// ============================================
// 📊 FILTROWANIE I SORTOWANIE (NIE RUSZAJ!)
// ============================================
function applyFiltersAndSort() {
  var minPrice = parseFloat(document.getElementById("priceMin").value) || 0;
  var maxPrice = parseFloat(document.getElementById("priceMax").value) || Infinity;
  var sortValue = document.getElementById("sortSelect").value;

  var filtered = products.filter(function(p) {
    var pricePLN = usdToPln(p.price);
    var matchesCategory = (currentCategory === "All" || p.category === currentCategory);
    var matchesSearch = p.name.toLowerCase().includes(searchQuery);
    var matchesPrice = pricePLN >= minPrice && pricePLN <= maxPrice;
    return matchesCategory && matchesSearch && matchesPrice;
  });

  if (sortValue === "asc") {
    filtered.sort(function(a, b) {
      return usdToPln(a.price) - usdToPln(b.price);
    });
  } else if (sortValue === "desc") {
    filtered.sort(function(a, b) {
      return usdToPln(b.price) - usdToPln(a.price);
    });
  }

  renderGrid(filtered);
}

// ============================================
// 📊 RENDEROWANIE PRODUKTÓW (NIE RUSZAJ!)
// ============================================
function renderGrid(items) {
  var grid = document.getElementById("grid");
  if (!grid) return;
  grid.innerHTML = "";

  var itemCount = document.getElementById("itemCount");
  if (itemCount) {
    var lang = translations[currentLanguage];
    itemCount.textContent = items.length + ' ' + (lang.items || 'itemów');
  }

  if (items.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #71717a;">Brak produktów spełniających kryteria.</div>';
    return;
  }

  items.forEach(function(p) {
    var finalLink = preferredAgent === "kakobuy" ? p.linkKakobuy : p.linkUsfans;
    var catMap = categoryMapping.find(function(c) { return c.techName === p.category; });
    var localizedCat = catMap ? translations[currentLanguage][catMap.translationKey] : p.category;
    var priceData = formatPrice(p.price);

    var tagClass = 'product-tag';
    if (p.tag && p.tag.toUpperCase().includes('BEST')) {
      tagClass += ' best';
    } else if (p.tag && p.tag.toUpperCase().includes('BUDGET')) {
      tagClass += ' budget';
    } else if (p.tag && p.tag.toUpperCase().includes('NEW')) {
      tagClass += ' new';
    }

    var safeImage = p.image || 'https://via.placeholder.com/300x200?text=No+Image';
    var safeName = p.name || 'Produkt';

    var card = document.createElement("div");
    card.className = "product-card";

    card.addEventListener("click", function(e) {
      if (e.target.closest('.zoom-icon')) return;
      if (finalLink && finalLink !== '#') {
        window.open(finalLink, "_blank");
      }
    });

    card.innerHTML = 
      '<img src="' + safeImage + '" alt="' + safeName + '" class="product-image" loading="lazy" onerror="this.src=\'https://via.placeholder.com/300x200?text=No+Image\'">' +
      '<div class="zoom-icon" onclick="event.stopPropagation(); openLightbox(\'' + safeImage + '\')">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0b0b0c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<circle cx="11" cy="11" r="8"/>' +
          '<path d="m21 21-4.35-4.35"/>' +
          '<path d="M11 8v6M8 11h6"/>' +
        '</svg>' +
      '</div>' +
      (p.tag ? '<div class="' + tagClass + '">' + p.tag + '</div>' : '') +
      '<div class="product-overlay">' +
        '<div class="product-info-bottom">' +
          '<div class="product-meta-left">' +
            '<div class="product-title">' + safeName + '</div>' +
            '<div class="product-category-label">' + localizedCat + '</div>' +
          '</div>' +
          '<div class="product-price-wrapper">' +
            '<span class="product-price-usd">' + priceData.usd + '</span>' +
            '<span class="product-price-pln">' + priceData.pln + '</span>' +
          '</div>' +
        '</div>' +
      '</div>';

    grid.appendChild(card);
  });
}

// ============================================
// 🔍 LIGHTBOX (NIE RUSZAJ!)
// ============================================
function openLightbox(imgSrc) {
  var overlay = document.getElementById('lightboxOverlay');
  var img = document.getElementById('lightboxImg');
  if (!overlay || !img) return;
  img.src = imgSrc;
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}

function closeLightbox() {
  var overlay = document.getElementById('lightboxOverlay');
  if (!overlay) return;
  overlay.classList.remove('active');
  document.body.style.overflow = '';
}

document.addEventListener('DOMContentLoaded', function() {
  var closeBtn = document.getElementById('lightboxClose');
  if (closeBtn) {
    closeBtn.addEventListener('click', closeLightbox);
  }
  var overlay = document.getElementById('lightboxOverlay');
  if (overlay) {
    overlay.addEventListener('click', function(e) {
      if (e.target === this) closeLightbox();
    });
  }
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') closeLightbox();
  });
});

// ============================================
// 🏪 SPRZEDAWCY - FUNKCJE (NIE RUSZAJ!)
// ============================================
function filterSellers() {
  var searchInput = document.getElementById('sellerSearch');
  if (searchInput) {
    currentSellerSearch = searchInput.value.toLowerCase().trim();
  }
  renderSellers();
}

function filterSellersByCategory(cat) {
  currentSellerCategory = cat;
  document.querySelectorAll('.seller-filter-chip').forEach(function(btn) {
    btn.classList.toggle('active', btn.dataset.cat === cat);
  });
  renderSellers();
}

function renderSellers() {
  var grid = document.getElementById('sellersGrid');
  if (!grid) return;
  
  var searchValue = document.getElementById('sellerSearch')?.value.toLowerCase() || '';
  
  var filtered = sellers.filter(function(s) {
    var matchesCategory = (currentSellerCategory === 'all' || s.category === currentSellerCategory);
    var matchesSearch = s.name.toLowerCase().includes(searchValue) || s.description.toLowerCase().includes(searchValue);
    return matchesCategory && matchesSearch;
  });
  
  if (filtered.length === 0) {
    grid.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #71717a;">Brak sprzedawców spełniających kryteria.</div>';
    return;
  }
  
  grid.innerHTML = '';
  
  filtered.forEach(function(s) {
    var fullStars = Math.floor(s.rating / 2);
    var stars = '';
    for (var i = 0; i < fullStars; i++) stars += '★';
    for (var i = fullStars; i < 5; i++) stars += '☆';
    
    var card = document.createElement('div');
    card.className = 'seller-card';
    
    card.innerHTML = 
      '<div class="seller-card-header">' +
        '<span class="seller-card-name">' + s.name + '</span>' +
        '<span class="seller-card-badge best">⭐ ' + s.badge + '</span>' +
      '</div>' +
      '<p class="seller-card-desc">' + s.description + '</p>' +
      '<div class="seller-card-footer">' +
        '<div class="seller-card-rating">' +
          '<span class="stars">' + stars + '</span>' +
          '<span>' + s.rating + '/10</span>' +
        '</div>' +
        '<a href="' + s.link + '" target="_blank" rel="noopener noreferrer" class="seller-card-btn">Zobacz produkty →</a>' +
      '</div>';
    
    grid.appendChild(card);
  });
}

// ============================================
// 🔄 PRZEŁĄCZANIE WIDOKU (NIE RUSZAJ!)
// ============================================
function switchView(view) {
  currentView = view;
  var productsView = document.getElementById('productsView');
  var sellersView = document.getElementById('sellersView');
  var lastFindsView = document.getElementById('lastFindsView');
  var spreadsheetLink = document.getElementById('navSpreadsheet');
  var sellersLink = document.getElementById('navSellers');
  var lastFindsLink = document.getElementById('navLastFinds');
  var heroTitle = document.getElementById('heroTitle');
  var heroSubtitle = document.getElementById('heroSubtitle');
  var searchInput = document.getElementById('search');
  var globalSearch = document.getElementById('globalSearch');
  
  // Ukryj wszystko
  if (productsView) productsView.style.display = 'none';
  if (sellersView) sellersView.style.display = 'none';
  if (lastFindsView) lastFindsView.style.display = 'none';
  
  if (spreadsheetLink) spreadsheetLink.classList.remove('active');
  if (sellersLink) sellersLink.classList.remove('active');
  if (lastFindsLink) lastFindsLink.classList.remove('active');
  
  if (view === 'products') {
    if (productsView) productsView.style.display = 'block';
    if (spreadsheetLink) spreadsheetLink.classList.add('active');
    if (heroTitle) heroTitle.textContent = translations[currentLanguage].heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = translations[currentLanguage].heroSubtitle;
    if (searchInput) searchInput.placeholder = translations[currentLanguage].searchPlaceholder;
    if (globalSearch) globalSearch.placeholder = 'Szukaj...  ⌘ K';
    applyFiltersAndSort();
  } else if (view === 'lastfinds') {
    if (lastFindsView) lastFindsView.style.display = 'block';
    if (lastFindsLink) lastFindsLink.classList.add('active');
    if (heroTitle) heroTitle.textContent = '🔥 Last Finds';
    if (heroSubtitle) heroSubtitle.textContent = 'Ostatnio dodane produkty.';
    // Renderuj slider
    renderSlider();
    setTimeout(function() {
      updateSlidesPerView();
      updateSlider();
      updateDots();
    }, 100);
  } else {
    if (sellersView) sellersView.style.display = 'block';
    if (sellersLink) sellersLink.classList.add('active');
    if (heroTitle) heroTitle.textContent = '🔍 Sprzedawcy';
    if (heroSubtitle) heroSubtitle.textContent = 'Przeglądaj naszą kolekcję najlepszych sprzedawców.';
    renderSellers();
  }
}

// ============================================
// 🔥 LAST FINDS - SLIDER
// ============================================

let currentSlide = 0;
let slidesPerView = 4;

function renderSlider() {
  var track = document.getElementById('sliderTrack');
  if (!track) return;
  
  // Weź ostatnie 12 produktów (lub mniej jeśli jest mniej)
  var reversed = products.slice().reverse();
  var sliderItems = reversed.slice(0, Math.min(30, products.length));
  
  if (sliderItems.length === 0) {
    track.innerHTML = '<div style="grid-column: 1/-1; text-align: center; padding: 40px; color: #71717a;">Brak produktów do wyświetlenia.</div>';
    return;
  }
  
  track.innerHTML = '';
  
  sliderItems.forEach(function(p) {
    var finalLink = preferredAgent === "kakobuy" ? p.linkKakobuy : p.linkUsfans;
    var catMap = categoryMapping.find(function(c) { return c.techName === p.category; });
    var localizedCat = catMap ? translations[currentLanguage][catMap.translationKey] : p.category;
    var priceData = formatPrice(p.price);
    
    var tagClass = 'product-tag';
    if (p.tag && p.tag.toUpperCase().includes('BEST')) {
      tagClass += ' best';
    } else if (p.tag && p.tag.toUpperCase().includes('BUDGET')) {
      tagClass += ' budget';
    }
    
    var safeImage = p.image || 'https://via.placeholder.com/300x200?text=No+Image';
    var safeName = p.name || 'Produkt';
    var randomViews = Math.floor(Math.random() * 500) + 200;
    
    var item = document.createElement('div');
    item.className = 'slider-item';
    
    item.addEventListener('click', function(e) {
      if (e.target.closest('.zoom-icon')) return;
      if (finalLink && finalLink !== '#') {
        window.open(finalLink, '_blank');
      }
    });
    
    item.innerHTML = 
      '<img src="' + safeImage + '" alt="' + safeName + '" class="product-image" loading="lazy" onerror="this.src=\'https://via.placeholder.com/300x200?text=No+Image\'">' +
      '<div class="zoom-icon" onclick="event.stopPropagation(); openLightbox(\'' + safeImage + '\')">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="#0b0b0c" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<circle cx="11" cy="11" r="8"/>' +
          '<path d="m21 21-4.35-4.35"/>' +
          '<path d="M11 8v6M8 11h6"/>' +
        '</svg>' +
      '</div>' +
      (p.tag ? '<div class="' + tagClass + '">' + p.tag + '</div>' : '') +
      '<div class="product-overlay">' +
        '<div class="product-info-bottom">' +
          '<div class="product-meta-left">' +
            '<div class="product-title">' + safeName + '</div>' +
            '<div class="product-category-label">' + localizedCat + '</div>' +
          '</div>' +
          '<div class="product-price-wrapper">' +
            '<span class="product-price-usd">' + priceData.usd + '</span>' +
            '<span class="product-price-pln">' + priceData.pln + '</span>' +
          '</div>' +
        '</div>' +
      '</div>' +
      '<div class="product-views">' +
        '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">' +
          '<path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>' +
          '<circle cx="12" cy="12" r="3"/>' +
        '</svg>' +
        ' ' + randomViews +
      '</div>';
    
    track.appendChild(item);
  });
  
  // Aktualizuj liczbę widocznych slajdów
  updateSlidesPerView();
  updateSlider();
  updateDots();
}

function updateSlidesPerView() {
  var width = window.innerWidth;
  
  if (width < 480) {
    slidesPerView = 2;
  } else if (width < 768) {
    slidesPerView = 3;
  } else if (width < 992) {
    slidesPerView = 4;
  } else if (width < 1200) {
    slidesPerView = 5;
  } else {
    slidesPerView = 6;
  }
}

function updateSlider() {
  var track = document.getElementById('sliderTrack');
  var totalItems = track ? track.children.length : 0;
  var maxSlide = Math.max(0, totalItems - slidesPerView);
  
  if (currentSlide > maxSlide) {
    currentSlide = maxSlide;
  }
  
  var itemWidth = track ? track.children[0]?.offsetWidth || 0 : 0;
  var gap = 16;
  var offset = currentSlide * (itemWidth + gap);
  
  if (track) {
    track.style.transform = 'translateX(-' + offset + 'px)';
  }
  
  // Aktualizuj przyciski
  var prevBtn = document.getElementById('sliderPrev');
  var nextBtn = document.getElementById('sliderNext');
  
  if (prevBtn) prevBtn.disabled = currentSlide === 0;
  if (nextBtn) nextBtn.disabled = currentSlide >= maxSlide;
  
  updateDots();
}

function updateDots() {
  var dotsContainer = document.getElementById('sliderDots');
  var track = document.getElementById('sliderTrack');
  var totalItems = track ? track.children.length : 0;
  var totalDots = Math.ceil(totalItems / slidesPerView);
  
  if (!dotsContainer) return;
  
  dotsContainer.innerHTML = '';
  
  for (var i = 0; i < totalDots; i++) {
    var dot = document.createElement('button');
    dot.className = 'slider-dot' + (i === currentSlide ? ' active' : '');
    dot.addEventListener('click', function(index) {
      return function() {
        currentSlide = index;
        updateSlider();
      };
    }(i));
    dotsContainer.appendChild(dot);
  }
}

function slidePrev() {
  if (currentSlide > 0) {
    currentSlide--;
    updateSlider();
  }
}

function slideNext() {
  var track = document.getElementById('sliderTrack');
  var totalItems = track ? track.children.length : 0;
  var maxSlide = Math.max(0, totalItems - slidesPerView);
  
  if (currentSlide < maxSlide) {
    currentSlide++;
    updateSlider();
  }
}

// Obsługa strzałek
document.addEventListener('DOMContentLoaded', function() {
  var prevBtn = document.getElementById('sliderPrev');
  var nextBtn = document.getElementById('sliderNext');
  
  if (prevBtn) prevBtn.addEventListener('click', slidePrev);
  if (nextBtn) nextBtn.addEventListener('click', slideNext);
  
  // Obsługa resize
  window.addEventListener('resize', function() {
    updateSlidesPerView();
    updateSlider();
    updateDots();
  });
});

// ============================================
// 🔄 PRZEŁĄCZANIE WIDOKU (zaktualizowane)
// ============================================
function switchView(view) {
  currentView = view;
  var productsView = document.getElementById('productsView');
  var sellersView = document.getElementById('sellersView');
  var lastFindsView = document.getElementById('lastFindsView');
  var spreadsheetLink = document.getElementById('navSpreadsheet');
  var sellersLink = document.getElementById('navSellers');
  var lastFindsLink = document.getElementById('navLastFinds');
  var heroTitle = document.getElementById('heroTitle');
  var heroSubtitle = document.getElementById('heroSubtitle');
  var searchInput = document.getElementById('search');
  var globalSearch = document.getElementById('globalSearch');
  
  // Ukryj wszystko
  if (productsView) productsView.style.display = 'none';
  if (sellersView) sellersView.style.display = 'none';
  if (lastFindsView) lastFindsView.style.display = 'none';
  
  if (spreadsheetLink) spreadsheetLink.classList.remove('active');
  if (sellersLink) sellersLink.classList.remove('active');
  if (lastFindsLink) lastFindsLink.classList.remove('active');
  
  if (view === 'products') {
    if (productsView) productsView.style.display = 'block';
    if (spreadsheetLink) spreadsheetLink.classList.add('active');
    if (heroTitle) heroTitle.textContent = translations[currentLanguage].heroTitle;
    if (heroSubtitle) heroSubtitle.textContent = translations[currentLanguage].heroSubtitle;
    if (searchInput) searchInput.placeholder = translations[currentLanguage].searchPlaceholder;
    if (globalSearch) globalSearch.placeholder = 'Szukaj...  ⌘ K';
    applyFiltersAndSort();
  } else if (view === 'lastfinds') {
    if (lastFindsView) lastFindsView.style.display = 'block';
    if (lastFindsLink) lastFindsLink.classList.add('active');
    if (heroTitle) heroTitle.textContent = '🔥 Last Finds';
    if (heroSubtitle) heroSubtitle.textContent = 'Ostatnio dodane produkty.';
    // Renderuj slider
    renderSlider();
    setTimeout(function() {
      updateSlidesPerView();
      updateSlider();
      updateDots();
    }, 100);
  } else {
    if (sellersView) sellersView.style.display = 'block';
    if (sellersLink) sellersLink.classList.add('active');
    if (heroTitle) heroTitle.textContent = '🏪 Najlepsi sprzedawcy';
    if (heroSubtitle) heroSubtitle.textContent = 'Przeglądaj najlepszych sprzedawców Weidian i Taobao.';
    renderSellers();
  }
}

// ============================================
// ✅ KONIEC
// ============================================
console.log("✅ script.js załadowany poprawnie!");