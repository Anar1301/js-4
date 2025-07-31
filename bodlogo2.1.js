// Нэг л products массив дээр ажиллана
let data = [
  {
    name: "iPhone 13",
    category: "Electronics",
    price: 1200000,
    stock: 10,
    brand: "Apple",
    rating: 4.8,
    isDiscounted: true,
    discountPercent: 10,
    supplier: "MobiCom",
    weight: 0.3,
  },
  {
    name: "Samsung Galaxy S22",
    category: "Electronics",
    price: 950000,
    stock: 5,
    brand: "Samsung",
    rating: 4.5,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "Unitel",
    weight: 0.28,
  },
  {
    name: "Dell XPS 13",
    category: "Computers",
    price: 2800000,
    stock: 3,
    brand: "Dell",
    rating: 4.7,
    isDiscounted: true,
    discountPercent: 15,
    supplier: "PCMall",
    weight: 1.2,
  },
  {
    name: "Mouse Logitech M590",
    category: "Accessories",
    price: 85000,
    stock: 20,
    brand: "Logitech",
    rating: 4.3,
    isDiscounted: true,
    discountPercent: 5,
    supplier: "PCMall",
    weight: 0.1,
  },
  {
    name: "MacBook Air M2",
    category: "Computers",
    price: 3200000,
    stock: 0,
    brand: "Apple",
    rating: 4.9,
    isDiscounted: false,
    discountPercent: 0,
    supplier: "MobiCom",
    weight: 1.1,
  },
];

// 1. Хямдралтай бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.

function getDiscountedProducts(products) {
  let filtered = products.filter((products) => {
    return products.isDiscounted === true;
  });
  return filtered;
}
let result = getDiscountedProducts(data);
console.log("bodlogo1=== ", result);

// 2. Нөөц дууссан (stock === 0) бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getOutOfStockProducts(products) {
  let filtered = products.filter((products) => {
    return products.stock === 0;
  });
  return filtered;
}
let gap = getOutOfStockProducts(data);
console.log("bodlogo2=== ", gap);

// 3. Үнэ нь 1 сая төгрөгөөс дээш бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getExpensiveProducts(products) {
  let filtered = products.filter((products) => {
    return products.price > 1000000;
  });
  return filtered;
}
let god = getExpensiveProducts(data);
console.log("bodlogo3=== ", god);

// 4. "Computers" категорийн бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getComputers(products, category) {
  let filtered = products.filter((product) => {
    return product.category.toLowerCase() == category.toLowerCase();
  });
  return filtered;
}
let resultCategory = getComputers(data, "COMPUTERS");
console.log("bodlogo4=== ", resultCategory);

// 5. Тухайн брэндийн нэрээр бүтээгдэхүүнүүдийг шүүдэг функц бич.
function filterByBrand(products, brandName) {
  let filtered = products.filter((product) => {
    return product.brand.toLowerCase() == brandName.toLowerCase();
  });
  return filtered;
}
let resultBrand = filterByBrand(data, "apple");
console.log("bodlogo5=== ", resultBrand);
// 6. Бүх бүтээгдэхүүн дээр `isHeavy: true/false` гэсэн талбар нэмдэг функц бич (жин 1 кг-аас их бол).
function addIsHeavyFlag(products) {
  products.map((product) => {
    if (product.weight > 1) {
      product.isHeavy = true;
    } else {
      product.isHeavy = false;
    }
  });
  return products;
}
const result23 = addIsHeavyFlag(data);
console.log("bodlogo6=== ", result23);

// 7. Бүх бүтээгдэхүүний үнэд 10% нэмдэг функц бич.
function increasePriceByTenPercent(products) {
  products.map((products) => {
    return (products.price = products.price * 1.1);
  });
  return products;
}
let add = increasePriceByTenPercent(data);
console.log("bodlogo7=== ", add);

// 8. Хямдралын дараах үнэтэй `finalPrice` талбарыг тооцож нэмдэг функц бич.
function addFinalPrice(products) {
  products.map((products) => {
    return (products.price * products.discountPercent) / 100;
  });
  return products;
}
let final = addFinalPrice(data);
console.log("bodlogo8=== ", final);

// 9. Үнэлгээ хамгийн өндөртэй бүтээгдэхүүнийг буцаадаг функц бич.
function getTopRatedProduct(products) {
  let maxProduct = products[0];
  products.forEach((product) => {
    if (maxProduct.rating < product.rating) {
      maxProduct = product;
    }
  });
  return maxProduct;
}
const result34 = getTopRatedProduct(data);
console.log("bodlogo9=== ", result34);

// 10. Үнэ хамгийн бага бүтээгдэхүүнийг буцаадаг функц бич.
function getCheapestProduct(products) {
  let minProduct = products[0];
  products.forEach((product) => {
    if (minProduct.price > product.price) {
      minProduct = product;
    }
  });
  return minProduct;
}
const result44 = getCheapestProduct(data);
console.log("bodlogo10=== ", result44);

// 11. Бүх бүтээгдэхүүний нийт нөөц (stock)-ийг тооцдог функц бич.
function getTotalStock(products) {
  let totalStock = 0;
  products.map((products) => {
    return (totalStock = totalStock + products.stock);
  });
  return products;
}
let prize = getTotalStock(data);
console.log("bodlogo11=== ", prize);
// 12. Бүх бүтээгдэхүүний нийлбэр үнийг тооцдог функц бич.
function getTotalPrice(products) {
  let totalPrice = 0;
  products.map((products) => {
    return (totalPrice = totalPrice + products.price);
  });
  return products;
}
let price = getTotalPrice(data);
console.log("bodlogo12=== ", price);

// 13. Тухайн supplier-аар шүүж бүтээгдэхүүнүүдийг буцаадаг функц бич.
function filterBySupplier(products, supplierName) {
  let filtered = products.filter((product) => {
    return product.supplier.toLowerCase() == supplierName.toLowerCase();
  });
  return filtered;
}
let resultSupplier = filterBySupplier(data, " ");
console.log("bodlogo13=== ", resultSupplier);

// 14. Бүх бүтээгдэхүүний нэрсийг массив болгон буцаадаг функц бич.
function getProductNames(products) {
  let productname = products.map((products) => {
    return { name: products.name };
  });
  return productname;
}
let result55 = getProductNames(data);
console.log("bodlogo14=== ", result55);

// 15. Бүтээгдэхүүнүүдийг үнээр нь өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(products) {
  let byPrice = products.sort((a, b) => {
    return a.price - b.price;
  });
  return byPrice;
}
let rate = sortByPriceAscending(data);
console.log("bodlogo15=== ", rate);

// 16. Нөөц багатай (≤ 5) бүтээгдэхүүнүүдийг шүүж буцаадаг функц бич.
function getLowStockProducts(products) {
  let low = products.filter((product) => {
    return product.stock <= 5;
  });
  return low;
}
let v = getLowStockProducts(data);
console.log("bodlogo16=== ", v);
// 17. Давхардалгүй нийлүүлэгчийн нэрсийн массив буцаадаг функц бич.
function getUniqueSuppliers(products) {
  let arrSuppliers = products.map((product) => {
    return product.supplier;
  });
  let uniqueSuppliers = [];
  arrSuppliers.forEach((supplier) => {
    if (uniqueSuppliers.includes(supplier)) {
    } else {
      uniqueSuppliers.push(supplier);
    }
  });
  return uniqueSuppliers;
}
const resultUniqueSuppliers = getUniqueSuppliers(data);
console.log("Array Of Unique Suppliers", resultUniqueSuppliers);

// 18. Зөвхөн name ба price талбартай шинэ массив үүсгэдэг функц бич.
function getNameAndPriceList(products) {
  let nameAndPrice = products.map((products) => {
    return { name: products.name, price: products.price };
  });
  return nameAndPrice;
}
result88 = getNameAndPriceList(data);
console.log(result88);

// 19. Үнэлгээ нь 4.5-аас их бүх бүтээгдэхүүнүүдийг буцаадаг функц бич.
function getHighlyRatedProducts(products) {
  let mid = products.filter((products) => {
    return products.stock <= 4.5;
  });
  return mid;
}
let t = getHighlyRatedProducts(data);
console.log("bodlogo19=== ", t);
// 20. Бүх бүтээгдэхүүнд `id` талбар нэмж өгдөг функц бич (жишээ нь 1, 2, 3...).
function addIdToProducts(products) {
  let addId = products.map((products, id) => {
    id++;
    return {
      id,
      name: products.name,
      category: products.category,
      finalprice: products.price,
      stock: products.stock,
      brand: products.brand,
      rating: products.rating,
      isDiscounted: products.isDiscounted,
    };
  });
  return addId;
}
resultF = addIdToProducts(data);
console.log(resultF);
