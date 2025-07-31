let cars = [
  {
    model: "Toyota Prius",
    type: "Hybrid",
    price: 35000000,
    mileage: 120000,
    brand: "Toyota",
    year: 2016,
    isAvailable: true,
    fuelEfficiency: 4.2,
    color: "white",
    supplier: "AutoJapan",
    engineSize: 1.8,
  },
  {
    model: "Honda Civic",
    type: "Sedan",
    price: 32000000,
    mileage: 85000,
    brand: "Honda",
    year: 2018,
    isAvailable: false,
    fuelEfficiency: 5.8,
    color: "blue",
    supplier: "CityMotors",
    engineSize: 2.0,
  },
  {
    model: "Tesla Model 3",
    type: "Electric",
    price: 85000000,
    mileage: 30000,
    brand: "Tesla",
    year: 2021,
    isAvailable: true,
    fuelEfficiency: 0,
    color: "red",
    supplier: "E-Car Dealer",
    engineSize: 0,
  },
  {
    model: "Ford Ranger",
    type: "Truck",
    price: 57000000,
    mileage: 110000,
    brand: "Ford",
    year: 2019,
    isAvailable: true,
    fuelEfficiency: 9.5,
    color: "black",
    supplier: "MongolAuto",
    engineSize: 3.2,
  },
  {
    model: "Hyundai Sonata",
    type: "Sedan",
    price: 29000000,
    mileage: 95000,
    brand: "Hyundai",
    year: 2017,
    isAvailable: false,
    fuelEfficiency: 6.5,
    color: "silver",
    supplier: "AutoJapan",
    engineSize: 2.4,
  },
];

// 1. Нөөцөд байгаа (isAvailable === true) машинуудыг буцаадаг функц бич.
function getAvailableCars(cars) {
  let filtered = cars.filter((cars) => {
    return cars.isAvailable === true;
  });
  return filtered;
}
let result = getAvailableCars(cars);
console.log("bodlogo1=== ", result);

// 2. 2018 оноос хойш үйлдвэрлэгдсэн машинуудыг буцаадаг функц бич.
function getRecentCars(cars) {
  let filtered = cars.filter((cars) => {
    return cars.year > 2018;
  });
  return filtered;
}
let god = getRecentCars(cars);
console.log("bodlogo2=== ", god);

// 3. 5 саяас дээш үнэтэй машинуудыг буцаадаг функц бич.
function getExpensiveCars(cars) {
  let filtered = cars.filter((cars) => {
    return cars.price > 5000000;
  });
  return filtered;
}
let got = getExpensiveCars(cars);
console.log("bodlogo3=== ", got);

// 4. "Sedan" төрөлтэй машинуудыг буцаадаг функц бич.
function getSedans(cars) {
  let filtered = cars.filter((cars, type) => {
    return cars.type === type;
  });
  return filtered;
}
let resultType = getSedans(cars, "SEDAN");
console.log("bodlogo4=== ", resultType);

// 5. Брэндээр шүүж буцаадаг функц бич.
function filterByBrand(cars, brandName) {
  let filtered = cars.filter((car) => {
    return car.brand.toLowerCase() == brandName.toLowerCase();
  });
  return filtered;
}
let resultBrand = filterByBrand(cars, "ford");
console.log("bodlogo5=== ", resultBrand);

// 6. 100,000 км-ээс их явсан машинуудыг буцаадаг функц бич.
function getHighMileageCars(cars) {
  let filtered = cars.filter((cars) => {
    return cars.mileage > 100000;
  });
  return filtered;
}
let gat = getHighMileageCars(cars);
console.log("bodlogo6=== ", gat);

// 7. Машины түлш зарцуулалтаар fuelEfficiency талбарт `efficient: true/false` нэмдэг функц бич (5.0-аас бага бол efficient).
function addEfficiencyFlag(cars) {
  cars.map((car) => {
    if (car.fuelEfficiency > 5) {
      car.fuelEfficiency = true;
    } else {
      car.fuelEfficiency = false;
    }
  });
  return cars;
}
const resultC = addEfficiencyFlag(cars);
console.log("bodlogo7=== ", resultC);

// 8. Бүх машины үнийг 15% нэмдэг функц бич.
function increaseCarPrices(cars) {
  cars.map((cars) => {
    return (cars.price = cars.price * 1.5);
  });
  return cars;
}
let add = increaseCarPrices(cars);
console.log("bodlogo8=== ", add);

// 9. Шинэ талдаа (50,000 км-ээс бага явсан) машинуудыг буцаадаг функц бич.
function getLowMileageCars(cars) {
  let filtered = cars.filter((cars) => {
    return cars.mileage < 50000;
  });
  return filtered;
}
let gar = getHighMileageCars(cars);
console.log("bodlogo9=== ", gar);

// 10. Хамгийн бага түлш зарцуулалттай машиныг буцаадаг функц бич.
function getMostEfficientCar(cars) {
  let minFuel = cars[0];
  cars.forEach((car) => {
    if (minFuel.price > car.price) {
      minFuel = car;
    }
  });
  return minFuel;
}
const resultU = getMostEfficientCar(cars);
console.log("bodlogo10=== ", resultU);

// 11. Хамгийн өндөр үнэтэй машиныг буцаадаг функц бич.
function getMostExpensiveCar(cars) {
  let maxExpensive = cars[0];
  cars.forEach((car) => {
    if (maxExpensive.rating < car.rating) {
      maxExpensive = car;
    }
  });
  return maxExpensive;
}
const resultW = getMostExpensiveCar(cars);
console.log("bodlogo11=== ", resultW);

// 12. Бүх машины нийлбэр mileage-г буцаадаг функц бич.
function getTotalMileage(cars) {
  let totalMilage = 0;
  cars.map((cars) => {
    return (totalMilage = totalMilage + cars.mileage);
  });
  return cars;
}
let mileage = getTotalMileage(cars);
console.log("bodlogo12=== ", mileage);
// 13. Supplier нэрээр машинуудыг шүүж буцаадаг функц бич.
function filterBySupplier(cars, supplierName) {
  let filtered = cars.filter((car) => {
    return car.supplier == supplierName;
  });
  return filtered;
}
let resultSupplier = filterBySupplier(cars, "AutoJapan");
console.log("bodlogo13=== ", resultSupplier);

// 14. Машины model нэрсийг массив болгож буцаадаг функц бич.
function getCarModels(cars) {
  let carModel = cars.map((cars) => {
    return { name: cars.model };
  });
  return carModel;
}
let resultO = getCarModels(cars);
console.log("bodlogo14=== ", resultO);

// 15. Машинуудыг үнийн өсөхөөр эрэмбэлж буцаадаг функц бич.
function sortByPriceAscending(cars) {
  let byPrice = cars.sort((c, d) => {
    return c.price - d.price;
  });
  return byPrice;
}
let rate = sortByPriceAscending(cars);
console.log("bodlogo15=== ", rate);

// 16. Engine size нь 2.0-аас их машинуудыг буцаадаг функц бич.
function getLargeEngineCars(cars) {
  let engineSize = cars.filter((car) => {
    return car.engineSize <= 2.0;
  });
  return engineSize;
}
let q = getLargeEngineCars(cars);
console.log("bodlogo16=== ", q);

// 17. Давхардалгүй брэндийн нэрсийг массив болгон буцаадаг функц бич.
function getUniqueBrands(cars) {
  let arrBrand = cars.map((car) => {
    return car.brand;
  });
  let uniqueBrand = [];
  arrBrand.forEach((brand) => {
    if (uniqueBrand.includes(brand)) {
    } else {
      uniqueBrand.push(brand);
    }
  });
  return uniqueBrand;
}
const resultUniqueBrands = getUniqueBrands(cars);
console.log("bodlogo17=== ", resultUniqueBrands);

// 18. Зөвхөн model ба year талбартай шинэ массив үүсгэдэг функц бич.
function getModelAndYearList(cars) {
  let modelAndYear = cars.map((cars) => {
    return { model: cars.model, year: cars.year };
  });
  return modelAndYear;
}
let resultL = getModelAndYearList(cars);
console.log("bodlogo18=== ", resultL);

// 19. 4.0-с бага fuel efficiency-тай машинуудыг "super efficient" гэж тэмдэглэдэг функц бич.
function tagSuperEfficientCars(cars) {
  let supercar = cars.map((cars) => {
    if (cars.fuelEfficiency > 4.0) {
      return {
        super: "Super efficent",
      };
    }
    return cars;
  });
  return supercar;
}
let resultZ = tagSuperEfficientCars(cars);
console.log("bodlogo19=== ", resultZ);

// 20. Бүх машинд `id` талбар нэмдэг функц бич (1-с эхэлнэ).
function addIdToCars(cars) {
  let addId = cars.map((cars, id) => {
    id++;
    return {
      id,
      model: cars.model,
      type: cars.type,
      price: cars.price,
      mileage: cars.mileage,
      brand: cars.brand,
      year: cars.year,
      isAvailable: cars.isAvailable,
    };
  });
  return addId;
}
let resultD = addIdToCars(cars);
console.log("bodlogo20=== ", resultD);
