// import shampoosImg from '../img/shampoo.jpg';
// // import creamsImg from '../img/creams.jpg';
// // import masksImg from '../img/masks.webp';
// import soapsImg from '../img/soap.jpg';
// import scrubsImg from '../img/scrubs.jpg';
// import evaLogo from '../img/logo_eva.svg';
// import prostorLogo from '../img/logo_prostor.png';
// import watsonsLogo from '../img/logo_watsons.jpg';
// import rozetkaLogo from '../img/logo_rozetka.png';
// import makeupLogo from '../img/logo_makeup.png';
// import parfumsLogo from '../img/logo_parfums.png';
// import auchanLogo from '../img/logo_auchan.png';
// import silpoLogo from '../img/logo_silpo.svg';
// import product1_1 from '../img/product1_1.webp';
// import product1_2 from '../img/product1_2.webp';
// import product1_3 from '../img/product1_3.webp';
// import product1_4 from '../img/product1_4.webp';
// import product1_5 from '../img/product1_5.webp';
// import product1_6 from '../img/product1_6.webp';
// import product1_7 from '../img/product1_7.webp';

// const products = [
//   {
//     id: 1,
//     category: 'shampoos',
//     name: "L'Oréal Paris Elseve Extraordinary Oil",
//     price: 259,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволожувальний шампунь для сухого волосся.',
//     specs: { volume: '250 мл', type: 'Для сухого волосся', brand: "L'Oréal" },
//     rating: 4.5,
//     views: 150,
//     code: 'ABC123',
//     composition: 'Aqua / Water, Quaternium-87, Cocos Nucifera Oil / Coconut Oil, Tocopherol, Sodium Benzoate, Stearyl Alcohol, Ppg-1 Trideceth-6, Behentrimonium Chloride, Anise Alcohol, Polyquaternium-37, Polysorbate 20, Polyquaternium-11, Sclerocarya Birrea Seed Oil, Camellia Japonica Seed Oil, Limonene, Candelilla Cera / Candelilla Wax, Linalool, Propylene Glycol Dicaprylate/dicaprate, Propylene Glycol, Isopropyl Alcohol, Caprylyl Glycol, Caprylic/capric Glycerides, Sorbitan Oleate, Gardenia Taitensis Flower, Rosa Canina Flower Extract, Citric Acid, Coumarin, Hexyl Cinnamal, Glycine Soja Oil / Soybean Oil, Parfum / Fragrance.',
//     usage: 'Нанесіть на вологе або сухе волосся. Розчешіть волосся щіткою.',
//     features: {
//       description: `
// Багатофункціональний спрей Elseve Extraordinary Oil 10 в 1 Miracle Treatment розроблений для забезпечення комплексного догляду, інтенсивного живлення волосся та захисту від руйнівного впливу зовнішніх чинників. Засіб діє без обтяження та не потребує змивання.

// **Як діє?**

// Спрей збагачений цінними оліями, які глибоко проникають у структуру волосся, забезпечують інтенсивне живлення та відновлення. Засіб справляє пом’якшувальну дію, усуває ламкість та посіченість. Він робить волосся блискучим та слухняним, спрощуючи стайлінгові процедури. Спрей забезпечує термозахист до 230°C, зменшує пухнастість до 24 годин та захищає від щоденного негативного впливу чинників довкілля.

// **Б’юті-поради**

// Для комплексного догляду за сухим, неслухняним волоссям користуйтеся спреєм у поєднанні із шампунем, бальзамом-кондиціонером, маскою живильної лінійки Extraordinary Oil цього самого бренду.
//       `.trim(),
//       brand: 'L\'Oréal',
//       country: 'Італія',
//       type: 'Спрей для волосся',
//       class: 'Мідл-маркет',
//       hairType: 'Для неслухняного волосся, Для сухого волосся',
//       features: 'Спеціальний догляд за волоссям',
//       category: 'Засоби для миття волосся',
//       purpose: 'Для блиску Живлення Розгладження Пом\'якшення Термозахист Для полегшення розчісування Проти ламкості',
//       gender: 'Унісекс',
//       activeIngredients: 'Кокосова олія Олія камелії Гарденія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 259, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 280, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 300, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 321, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 299, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 289, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 252, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 239, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 2,
//     category: 'shampoos',
//     name: "Head & Shoulders Classic Clean Dandruff",
//     price: 120,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Ефективний шампунь проти лупи.',
//     specs: { volume: '400 мл', type: 'Проти лупи', brand: 'Head & Shoulders' },
//     rating: 4.5,
//     views: 150,
//     code: 'ABC123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Sodium Lauryl Sulfate, Dimethicone, Cocamide MEA, Zinc Pyrithione, Sodium Xylenesulfonate, Sodium Chloride, Sodium Benzoate, Guar Hydroxypropyltrimonium Chloride, Magnesium Carbonate Hydroxide, Parfum / Fragrance, Linalool, Hexyl Cinnamal, Benzyl Salicylate, Citric Acid.',
//     usage: 'Нанесіть на вологе волосся, спіньте, ретельно змийте. Використовуйте регулярно для найкращих результатів.',
//     features: {
//       description: `
// Шампунь Head & Shoulders Classic Clean Dandruff розроблений для ефективної боротьби з лупою та забезпечення чистоти шкіри голови. Формула з піритионом цинку зменшує подразнення та лущення, залишаючи волосся м’яким і здоровим.

// **Як діє?**

// Активний інгредієнт піритион цинку бореться з причинами лупи, забезпечуючи тривалий захист. Шампунь м’яко очищає волосся та шкіру голови, усуваючи надлишки себуму та забруднення. Підходить для щоденного використання, не пересушує волосся.

// **Б’юті-поради**

// Для максимального ефекту використовуйте разом із кондиціонером Head & Shoulders для додаткового зволоження.
//       `.trim(),
//       brand: 'Head & Shoulders',
//       country: 'США',
//       type: 'Шампунь проти лупи',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Боротьба з лупою',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Проти лупи Заспокоєння шкіри голови',
//       gender: 'Унісекс',
//       activeIngredients: 'Піритион цинку',
//     },
//     storePrices: [
//       { name: 'Eva', price: 120, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 130, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 140, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 150, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 135, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 128, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 115, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 110, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 3,
//     category: 'shampoos',
//     name: "Garnier Fructis Hydra Fresh",
//     price: 130,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволожує та освіжає сухе волосся.',
//     specs: { volume: '300 мл', type: 'Для сухого волосся', brand: 'Garnier' },
//     rating: 4.5,
//     views: 150,
//     code: 'ABC123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Chloride, Sodium Benzoate, Salicylic Acid, Linalool, Hexyl Cinnamal, Hydroxypropyl Guar, Aloe Barbadensis Leaf Juice, Citrus Limon Fruit Extract / Lemon Fruit Extract, Sodium Hydroxide, Citric Acid, Parfum / Fragrance.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого ефекту використовуйте з кондиціонером Garnier Fructis.',
//     features: {
//       description: `
// Шампунь Garnier Fructis Hydra Fresh збагачений екстрактом алое та лимона для інтенсивного зволоження сухого волосся. Легка формула освіжає шкіру голови, надаючи волоссю м’якість і блиск.

// **Як діє?**

// Екстракт алое зволожує волосся, а лимонний екстракт додає свіжості та легкості. Шампунь м’яко очищає, не обтяжуючи волосся, і підходить для щоденного використання. Формула допомагає боротися з сухістю та тьмяністю.

// **Б’юті-поради**

// Поєднуйте з маскою Garnier Fructis Hydra Fresh для глибокого живлення волосся.
//       `.trim(),
//       brand: 'Garnier',
//       country: 'Франція',
//       type: 'Зволожуючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Зволоження та освіження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт алое Лимон',
//     },
//     storePrices: [
//       { name: 'Eva', price: 130, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 140, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 150, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 160, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 145, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 138, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 125, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 120, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 4,
//     category: 'shampoos',
//     name: "Dove Intensive Repair",
//     price: 140,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлює пошкоджене волосся.',
//     specs: { volume: '250 мл', type: 'Для пошкодженого волосся', brand: 'Dove' },
//     rating: 4.4,
//     views: 140,
//     code: 'DOV456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Chloride, Dimethiconol, Hydroxypropyl Guar, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Salicylic Acid, Lactic Acid, Linalool, Hexyl Cinnamal, Benzyl Salicylate, Parfum / Fragrance.',
//     usage: 'Нанесіть на вологе волосся, спіньте, ретельно промийте. Для кращого результату використовуйте з кондиціонером Dove Intensive Repair.',
//     features: {
//       description: `
// Шампунь Dove Intensive Repair з технологією Nutri-Keratin Repair Actives допомагає відновлювати пошкоджене волосся, зменшуючи ламкість і посічені кінчики. Формула живить волосся, роблячи його міцнішим і здоровішим.

// **Як діє?**

// Активні компоненти проникають у структуру волосся, відновлюючи її зсередини. Шампунь м’яко очищає, забезпечуючи зволоження та захист від подальших пошкоджень. Підходить для щоденного догляду за ослабленим волоссям.

// **Б’юті-поради**

// Використовуйте разом із маскою Dove Intensive Repair для глибокого відновлення.
//       `.trim(),
//       brand: 'Dove',
//       country: 'Велика Британія',
//       type: 'Відновлюючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та захист',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Проти ламкості Зволоження',
//       gender: 'Унісекс',
//       activeIngredients: 'Кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 140, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 150, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 160, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 170, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 155, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 148, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 135, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 130, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 5,
//     category: 'shampoos',
//     name: "Pantene Pro-V Miracles Hydration",
//     price: 160,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Інтенсивне зволоження для сухого волосся.',
//     specs: { volume: '400 мл', type: 'Для сухого волосся', brand: 'Pantene' },
//     rating: 4.6,
//     views: 160,
//     code: 'PAN789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Chloride, Sodium Benzoate, Polyquaternium-10, Panthenol, Hydroxypropyl Guar, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте до утворення піни, змийте. Повторіть за необхідності.',
//     features: {
//       description: `
// Шампунь Pantene Pro-V Miracles Hydration збагачений пантенолом і біотином для глибокого зволоження сухого та тьмяного волосся. Формула допомагає відновити природний баланс вологи, надаючи волоссю м’якість і блиск.

// **Як діє?**

// Пантенол проникає у волосся, забезпечуючи зволоження та захист від сухості. Шампунь м’яко очищає, не пересушуючи шкіру голови, і підходить для регулярного використання. Волосся стає більш слухняним і здоровим на вигляд.

// **Б’юті-поради**

// Для оптимального результату комбінуйте з кондиціонером Pantene Pro-V Miracles Hydration.
//       `.trim(),
//       brand: 'Pantene',
//       country: 'Швейцарія',
//       type: 'Зволожуючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Інтенсивне зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Пантенол Біотин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 160, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 170, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 180, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 190, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 175, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 168, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 155, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 150, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 6,
//     category: 'shampoos',
//     name: "Schwarzkopf Gliss Kur Ultimate Repair",
//     price: 150,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь із кератином для відновлення.',
//     specs: { volume: '250 мл', type: 'Для пошкодженого волосся', brand: 'Schwarzkopf' },
//     rating: 4.5,
//     views: 145,
//     code: 'SCH123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Chloride, Hydrolyzed Keratin, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Salicylic Acid, Linalool, Hexyl Cinnamal, Parfum / Fragrance.',
//     usage: 'Нанесіть на вологе волосся, спіньте, залиште на 1-2 хвилини, змийте. Використовуйте регулярно.',
//     features: {
//       description: `
// Шампунь Schwarzkopf Gliss Kur Ultimate Repair з рідким кератином розроблений для відновлення сильно пошкодженого волосся. Формула зміцнює структуру волосся, зменшуючи ламкість і надаючи йому гладкість.

// **Як діє?**

// Рідкий кератин заповнює пошкоджені ділянки волосся, відновлюючи його міцність і еластичність. Шампунь м’яко очищає, живить і захищає волосся від подальших ушкоджень. Ідеально підходить для волосся, що піддається частому фарбуванню або термообробці.

// **Б’юті-поради**

// Для комплексного догляду використовуйте разом із бальзамом і маскою Gliss Kur Ultimate Repair.
//       `.trim(),
//       brand: 'Schwarzkopf',
//       country: 'Німеччина',
//       type: 'Відновлюючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення структури',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Проти ламкості Розгладження',
//       gender: 'Унісекс',
//       activeIngredients: 'Рідкий кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 150, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 160, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 170, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 180, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 165, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 158, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 145, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 140, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 7,
//     category: 'shampoos',
//     name: "Nivea Hairmilk Natural Shine",
//     price: 110,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Додає блиск сухому волоссю.',
//     specs: { volume: '400 мл', type: 'Для сухого волосся', brand: 'Nivea' },
//     rating: 4.3,
//     views: 130,
//     code: 'NIV456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Chloride, Milk Protein, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Nivea Hairmilk Natural Shine з молочними протеїнами забезпечує інтенсивне зволоження та природний блиск сухому волоссю. Формула доглядає за волоссям, роблячи його м’яким і сяючим.

// **Як діє?**

// Молочні протеїни живлять і зволожують волосся, відновлюючи його природну гладкість. Шампунь м’яко очищає, не обтяжуючи волосся, і допомагає підтримувати здоровий вигляд. Ідеально підходить для сухого та тьмяного волосся.

// **Б’юті-поради**

// Використовуйте разом із кондиціонером Nivea Hairmilk для посилення ефекту блиску.
//       `.trim(),
//       brand: 'Nivea',
//       country: 'Німеччина',
//       type: 'Зволожуючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Догляд за сухим волоссям',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Молочні протеїни',
//     },
//     storePrices: [
//       { name: 'Eva', price: 110, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 120, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 130, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 140, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 125, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 118, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 105, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 100, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 8,
//     category: 'shampoos',
//     name: "Herbal Essences Bio:Renew Argan Oil",
//     price: 180,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь з аргановою олією.',
//     specs: { volume: '400 мл', type: 'Для сухого волосся', brand: 'Herbal Essences' },
//     rating: 4.6,
//     views: 170,
//     code: 'HER789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Chloride, Argania Spinosa Kernel Oil, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, спіньте, ретельно змийте. Для найкращих результатів використовуйте з кондиціонером Herbal Essences.',
//     features: {
//       description: `
// Шампунь Herbal Essences Bio:Renew Argan Oil збагачений натуральною аргановою олією для живлення та відновлення сухого волосся. Формула без парабенів забезпечує м’яке очищення та природний блиск.

// **Як діє?**

// Арганова олія глибоко живить волосся, відновлюючи його м’якість і еластичність. Шампунь допомагає боротися з сухістю та тьмяністю, надаючи волоссю здоровий вигляд. Аромат із нотками цитрусу та ванілі дарує відчуття свіжості.

// **Б’юті-поради**

// Поєднуйте з маскою Herbal Essences Bio:Renew для інтенсивного догляду.
//       `.trim(),
//       brand: 'Herbal Essences',
//       country: 'США',
//       type: 'Живильний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Живлення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Живлення Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Арганова олія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 180, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 190, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 200, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 210, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 195, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 188, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 175, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 170, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 9,
//     category: 'shampoos',
//     name: "TRESemmé Botanique Nourish & Replenish",
//     price: 170,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Живильний шампунь із кокосовою олією.',
//     specs: { volume: '500 мл', type: 'Для сухого волосся', brand: 'TRESemmé' },
//     rating: 4.5,
//     views: 165,
//     code: 'TRE456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Chloride, Cocos Nucifera Oil / Coconut Oil, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого ефекту використовуйте з кондиціонером TRESemmé Botanique.',
//     features: {
//       description: `
// Шампунь TRESemmé Botanique Nourish & Replenish з кокосовою олією та алое вера живить сухе волосся, надаючи йому м’якість і природний блиск. Без сульфатів і парабенів, формула підходить для щоденного догляду.

// **Як діє?**

// Кокосова олія зволожує та живить волосся, а алое вера заспокоює шкіру голови. Шампунь м’яко очищає, не пересушуючи волосся, і допомагає відновити його природну гладкість. Аромат із нотками тропічних фруктів освіжає.

// **Б’юті-поради**

// Використовуйте разом із маскою TRESemmé Botanique для глибокого живлення.
//       `.trim(),
//       brand: 'TRESemmé',
//       country: 'США',
//       type: 'Живильний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Живлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Живлення Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Кокосова олія Алое вера',
//     },
//     storePrices: [
//       { name: 'Eva', price: 170, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 180, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 190, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 200, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 185, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 178, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 165, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 160, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 10,
//     category: 'shampoos',
//     name: "Moroccanoil Moisture Repair",
//     price: 300,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення з аргановою олією.',
//     specs: { volume: '250 мл', type: 'Для пошкодженого волосся', brand: 'Moroccanoil' },
//     rating: 4.8,
//     views: 200,
//     code: 'MOR123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Argania Spinosa Kernel Oil, Hydrolyzed Keratin, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, залиште на 1-2 хвилини, змийте. Використовуйте 1-2 рази на тиждень.',
//     features: {
//       description: `
// Шампунь Moroccanoil Moisture Repair з аргановою олією та кератином призначений для відновлення пошкодженого волосся. Формула без сульфатів м’яко очищає, живить і зміцнює волосся, повертаючи йому здоров’я та блиск.

// **Як діє?**

// Арганова олія зволожує та живить, а кератин відновлює пошкоджені ділянки волосся. Шампунь допомагає боротися з ламкістю та посіченими кінчиками, надаючи волоссю гладкість і еластичність. Ідеально для хімічно обробленого волосся.

// **Б’юті-поради**

// Для максимального ефекту використовуйте разом із кондиціонером і маскою Moroccanoil Moisture Repair.
//       `.trim(),
//       brand: 'Moroccanoil',
//       country: 'Ізраїль',
//       type: 'Відновлюючий шампунь',
//       class: 'Преміум',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Глибоке відновлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Живлення Проти ламкості',
//       gender: 'Унісекс',
//       activeIngredients: 'Арганова олія Кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 300, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 320, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 340, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 360, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 330, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 315, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 295, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 290, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 11,
//     category: 'shampoos',
//     name: "OGX Renewing + Argan Oil of Morocco",
//     price: 200,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь із марокканською олією.',
//     specs: { volume: '385 мл', type: 'Для сухого волосся', brand: 'OGX' },
//     rating: 4.7,
//     views: 180,
//     code: 'OGX456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Argania Spinosa Kernel Oil, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, спіньте, ретельно змийте. Використовуйте разом із кондиціонером OGX.',
//     features: {
//       description: `
// Шампунь OGX Renewing + Argan Oil of Morocco з марокканською аргановою олією живить і зволожує сухе волосся, надаючи йому блиск і м’якість. Формула без сульфатів підходить для щоденного догляду.

// **Як діє?**

// Арганова олія проникає у волосся, відновлюючи його структуру та захищаючи від сухості. Шампунь м’яко очищає, зберігаючи природну вологу волосся. Аромат із нотками ванілі та спецій створює приємне відчуття.

// **Б’юті-поради**

// Для інтенсивного догляду використовуйте разом із маскою OGX Renewing + Argan Oil.
//       `.trim(),
//       brand: 'OGX',
//       country: 'США',
//       type: 'Живильний шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Живлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Живлення Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Арганова олія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 200, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 210, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 220, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 230, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 215, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 208, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 195, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 190, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 12,
//     category: 'shampoos',
//     name: "Aussie Miracle Moist",
//     price: 150,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження з олією макадамії.',
//     specs: { volume: '300 мл', type: 'Для сухого волосся', brand: 'Aussie' },
//     rating: 4.4,
//     views: 155,
//     code: 'AUS789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Macadamia Ternifolia Seed Oil, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого ефекту використовуйте з кондиціонером Aussie.',
//     features: {
//       description: `
// Шампунь Aussie Miracle Moist з олією макадамії глибоко зволожує сухе та пошкоджене волосся, повертаючи йому м’якість і блиск. Формула з австралійськими інгредієнтами забезпечує інтенсивний догляд.

// **Як діє?**

// Олія макадамії живить волосся, відновлюючи його природну вологу. Шампунь м’яко очищає, не обтяжуючи волосся, і допомагає боротися з тьмяністю. Аромат із нотками фруктів і квітів додає свіжості.

// **Б’юті-поради**

// Поєднуйте з маскою Aussie Miracle Moist для глибокого зволоження.
//       `.trim(),
//       brand: 'Aussie',
//       country: 'Австралія',
//       type: 'Зволожуючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Глибоке зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія макадамії',
//     },
//     storePrices: [
//       { name: 'Eva', price: 150, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 160, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 170, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 180, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 165, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 158, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 145, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 140, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 13,
//     category: 'shampoos',
//     name: "Kérastase Nutritive Bain Satin",
//     price: 400,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Преміум шампунь для сухого волосся.',
//     specs: { volume: '250 мл', type: 'Для сухого волосся', brand: 'Kérastase' },
//     rating: 4.9,
//     views: 220,
//     code: 'KER123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Iris Florentina Root Extract, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Повторіть для глибшого очищення.',
//     features: {
//       description: `
// Шампунь Kérastase Nutritive Bain Satin призначений для інтенсивного живлення сухого волосся. Формула з екстрактом ірису забезпечує м’яке очищення, зволоження та захист від сухості.

// **Як діє?**

// Екстракт ірису живить волосся, відновлюючи його природну м’якість і блиск. Шампунь м’яко очищає, не пересушуючи шкіру голови, і допомагає підтримувати здоровий вигляд волосся. Підходить для регулярного використання.

// **Б’юті-поради**

// Для комплексного догляду використовуйте разом із маскою Kérastase Nutritive.
//       `.trim(),
//       brand: 'Kérastase',
//       country: 'Франція',
//       type: 'Живильний шампунь',
//       class: 'Преміум',
//       hairType: 'Для сухого волосся',
//       features: 'Інтенсивне живлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Живлення Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт ірису',
//     },
//     storePrices: [
//       { name: 'Eva', price: 400, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 420, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 440, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 460, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 430, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 415, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 395, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 390, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 14,
//     category: 'shampoos',
//     name: "Matrix Biolage Hydrasource",
//     price: 180,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження з алое вера.',
//     specs: { volume: '400 мл', type: 'Для сухого волосся', brand: 'Matrix' },
//     rating: 4.6,
//     views: 170,
//     code: 'MAT456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Aloe Barbadensis Leaf Juice, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Matrix Biolage.',
//     features: {
//       description: `
// Шампунь Matrix Biolage Hydrasource з екстрактом алое вера забезпечує глибоке зволоження сухого волосся, повертаючи йому м’якість і блиск. Формула без парабенів підходить для щоденного використання.

// **Як діє?**

// Алое вера зволожує волосся, допомагаючи зберегти природну вологу. Шампунь м’яко очищає, не пересушуючи шкіру голови, і робить волосся більш слухняним. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Matrix Biolage Hydrasource для інтенсивного догляду.
//       `.trim(),
//       brand: 'Matrix',
//       country: 'США',
//       type: 'Зволожуючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Глибоке зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Алое вера',
//     },
//     storePrices: [
//       { name: 'Eva', price: 180, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 190, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 200, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 210, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 195, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 188, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 175, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 170, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 15,
//     category: 'shampoos',
//     name: "Lush Rehab",
//     price: 250,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення з оливковою олією.',
//     specs: { volume: '250 мл', type: 'Для пошкодженого волосся', brand: 'Lush' },
//     rating: 4.7,
//     views: 190,
//     code: 'LUS123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Olea Europaea Fruit Oil, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, ретельно змийте. Використовуйте 1-2 рази на тиждень.',
//     features: {
//       description: `
// Шампунь Lush Rehab з оливковою олією та натуральними екстрактами відновлює пошкоджене волосся, надаючи йому силу та блиск. Формула без силіконів ідеально підходить для екологічного догляду.

// **Як діє?**

// Оливкова олія живить і зволожує волосся, допомагаючи відновити його структуру. Шампунь м’яко очищає, заспокоюючи шкіру голови, і робить волосся більш еластичним. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Для глибокого відновлення використовуйте разом із маскою Lush Rehab.
//       `.trim(),
//       brand: 'Lush',
//       country: 'Велика Британія',
//       type: 'Відновлюючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Екологічний догляд',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Живлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Оливкова олія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 250, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 260, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 270, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 280, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 265, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 258, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 245, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 240, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 16,
//     category: 'shampoos',
//     name: "Vichy Dercos Nutri-Repair",
//     price: 220,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь із кератиновим комплексом.',
//     specs: { volume: '200 мл', type: 'Для пошкодженого волосся', brand: 'Vichy' },
//     rating: 4.8,
//     views: 200,
//     code: 'VIC456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, залиште на 1-2 хвилини, змийте. Використовуйте регулярно.',
//     features: {
//       description: `
// Шампунь Vichy Dercos Nutri-Repair з кератиновим комплексом призначений для відновлення пошкодженого та ослабленого волосся. Формула без парабенів зміцнює волосся, надаючи йому блиск і силу.

// **Як діє?**

// Кератиновий комплекс відновлює структуру волосся, заповнюючи пошкоджені ділянки. Шампунь м’яко очищає, живить і захищає волосся від ламкості. Підходить для чутливої шкіри голови.

// **Б’юті-поради**

// Для оптимального результату використовуйте разом із бальзамом Vichy Dercos Nutri-Repair.
//       `.trim(),
//       brand: 'Vichy',
//       country: 'Франція',
//       type: 'Відновлюючий шампунь',
//       class: 'Преміум',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та зміцнення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Проти ламкості Живлення',
//       gender: 'Унісекс',
//       activeIngredients: 'Кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 220, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 230, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 240, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 250, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 235, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 228, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 215, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 210, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 17,
//     category: 'shampoos',
//     name: "John Frieda Frizz Ease Miraculous Recovery",
//     price: 190,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для пухнастого волосся.',
//     specs: { volume: '250 мл', type: 'Для пухнастого волосся', brand: 'John Frieda' },
//     rating: 4.5,
//     views: 175,
//     code: 'JOH789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Dimethicone, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером John Frieda Frizz Ease.',
//     features: {
//       description: `
// Шампунь John Frieda Frizz Ease Miraculous Recovery розроблений для контролю пухнастого волосся, надаючи йому гладкість і блиск. Формула зволожує та розгладжує волосся, зменшуючи пухнастість навіть у вологу погоду.

// **Як діє?**

// Активні компоненти, включаючи диметикон, створюють захисний шар, який утримує вологу та зменшує пухнастість. Шампунь м’яко очищає, не пересушуючи волосся, і допомагає полегшити укладання. Підходить для щоденного використання.

// **Б’юті-поради**

// Для максимального ефекту використовуйте разом із сироваткою John Frieda Frizz Ease для додаткового захисту від пухнастості.
//       `.trim(),
//       brand: 'John Frieda',
//       country: 'Велика Британія',
//       type: 'Розгладжуючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для пухнастого волосся',
//       features: 'Контроль пухнастості',
//       category: 'Засоби для миття волосся',
//       purpose: 'Розгладження Для блиску Зволоження',
//       gender: 'Унісекс',
//       activeIngredients: 'Диметикон',
//     },
//     storePrices: [
//       { name: 'Eva', price: 190, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 200, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 210, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 220, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 205, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 198, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 185, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 180, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 18,
//     category: 'shampoos',
//     name: "Redken All Soft",
//     price: 350,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для м’якості сухого волосся.',
//     specs: { volume: '300 мл', type: 'Для сухого волосся', brand: 'Redken' },
//     rating: 4.8,
//     views: 210,
//     code: 'RED123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Argania Spinosa Kernel Oil, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Redken All Soft.',
//     features: {
//       description: `
// Шампунь Redken All Soft з аргановою олією забезпечує інтенсивне зволоження та м’якість сухого та ламкого волосся. Формула робить волосся шовковистим і слухняним, полегшуючи розчісування.

// **Як діє?**

// Арганова олія глибоко живить волосся, відновлюючи його природну м’якість. Шампунь м’яко очищає, не пересушуючи шкіру голови, і допомагає боротися з тьмяністю. Підходить для регулярного використання.

// **Б’юті-поради**

// Поєднуйте з маскою Redken All Soft для глибокого зволоження та відновлення.
//       `.trim(),
//       brand: 'Redken',
//       country: 'США',
//       type: 'Зволожуючий шампунь',
//       class: 'Преміум',
//       hairType: 'Для сухого волосся',
//       features: 'Інтенсивне зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Арганова олія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 350, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 370, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 390, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 410, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 380, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 365, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 345, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 340, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 19,
//     category: 'shampoos',
//     name: "Paul Mitchell Awapuhi Wild Ginger Moisturizing Lather",
//     price: 300,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження з екстрактом авапухі.',
//     specs: { volume: '250 мл', type: 'Для пошкодженого волосся', brand: 'Paul Mitchell' },
//     rating: 4.7,
//     views: 200,
//     code: 'PAU789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hedychium Coronarium Root Extract, Hydrolyzed Keratin, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Paul Mitchell Awapuhi.',
//     features: {
//       description: `
// Шампунь Paul Mitchell Awapuhi Wild Ginger Moisturizing Lather з екстрактом авапухі та кератином зволожує та відновлює пошкоджене волосся. Формула забезпечує м’яке очищення, що не пересушує волосся.

// **Як діє?**

// Екстракт авапухі зволожує, а кератин зміцнює структуру волосся, зменшуючи ламкість. Шампунь м’яко очищає, надаючи волоссю блиск і м’якість. Аромат із нотками імбиру та тропічних квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Paul Mitchell Awapuhi Wild Ginger для інтенсивного відновлення.
//       `.trim(),
//       brand: 'Paul Mitchell',
//       country: 'США',
//       type: 'Відновлюючий шампунь',
//       class: 'Преміум',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт авапухі Кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 300, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 320, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 340, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 360, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 330, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 315, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 295, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 290, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 20,
//     category: 'shampoos',
//     name: "Bumble and Bumble Thickening Shampoo",
//     price: 320,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для об’єму тонкого волосся.',
//     specs: { volume: '250 мл', type: 'Для тонкого волосся', brand: 'Bumble and Bumble' },
//     rating: 4.7,
//     views: 195,
//     code: 'BUM456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Panthenol, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Bumble and Bumble.',
//     features: {
//       description: `
// Шампунь Bumble and Bumble Thickening Shampoo додає об’єм тонкому волоссю, роблячи його більш густим і пишним. Формула з пантенолом забезпечує легке очищення та зволоження.

// **Як діє?**

// Пантенол зміцнює волосся, додаючи йому об’єм без обтяження. Шампунь м’яко очищає, піднімаючи волосся від коренів, і робить його більш слухняним. Ідеально для створення об’ємних зачісок.

// **Б’юті-поради**

// Для максимального об’єму використовуйте разом із спреєм Bumble and Bumble Thickening Spray.
//       `.trim(),
//       brand: 'Bumble and Bumble',
//       country: 'США',
//       type: 'Шампунь для об’єму',
//       class: 'Преміум',
//       hairType: 'Для тонкого волосся',
//       features: 'Додавання об’єму',
//       category: 'Засоби для миття волосся',
//       purpose: 'Об’єм Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 320, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 340, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 360, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 380, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 350, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 335, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 315, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 310, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 21,
//     category: 'shampoos',
//     name: 'Evo Ritual Salvation',
//     price: 280,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення пошкодженого волосся.',
//     specs: { volume: '300 мл', type: 'Для пошкодженого волосся', brand: 'Evo' },
//     rating: 4.4,
//     views: 160,
//     code: 'EVO021',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Panthenol, Phenoxyethanol, Parfum / Fragrance.',
//     usage: 'Нанесіть на вологе волосся, спіньте, залиште на 1-2 хвилини, ретельно змийте. Використовуйте 2-3 рази на тиждень.',
//     features: {
//       description: `
// Шампунь Evo Ritual Salvation з гідролізованим кератином відновлює пошкоджене волосся, зміцнюючи його структуру. Легка формула не обтяжує волосся.

// **Як діє?**

// Гідролізований кератин проникає в структуру волосся, відновлюючи пошкоджені ділянки, а пантенол зволожує і додає блиску. Шампунь м’яко очищає, залишаючи волосся гладким. Аромат свіжий, з нотами цитрусу.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Evo Ritual Salvation для посиленого відновлення.
//       `.trim(),
//       brand: 'Evo',
//       country: 'Австралія',
//       type: 'Відновлюючий шампунь',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри голови',
//       features: 'Відновлення та зволоження',
//       category: 'Засоби для догляду за волоссям',
//       purpose: 'Відновлення Зволоження Зміцнення',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований кератин Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 280, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 290, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 300, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 310, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 295, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 285, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 275, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 270, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 22,
//     category: 'shampoos',
//     name: "Pureology Hydrate Shampoo",
//     price: 340,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження для фарбованого волосся.',
//     specs: { volume: '266 мл', type: 'Для фарбованого волосся', brand: 'Pureology' },
//     rating: 4.8,
//     views: 205,
//     code: 'PUR456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Jojoba Seed Oil, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Pureology Hydrate.',
//     features: {
//       description: `
// Шампунь Pureology Hydrate Shampoo з олією жожоба призначений для зволоження фарбованого волосся, зберігаючи яскравість кольору. Формула без сульфатів забезпечує м’яке очищення та захист кольору.

// **Як діє?**

// Олія жожоба зволожує волосся, запобігаючи сухості та тьмяності. Шампунь м’яко очищає, подовжуючи стійкість кольору фарбованого волосся. Аромат із нотками лаванди та м’яти освіжає.

// **Б’юті-поради**

// Для максимального захисту кольору використовуйте разом із маскою Pureology Hydrate.
//       `.trim(),
//       brand: 'Pureology',
//       country: 'США',
//       type: 'Зволожуючий шампунь',
//       class: 'Преміум',
//       hairType: 'Для фарбованого волосся',
//       features: 'Зволоження та захист кольору',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Захист кольору Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія жожоба',
//     },
//     storePrices: [
//       { name: 'Eva', price: 340, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 360, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 380, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 400, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 370, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 355, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 335, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 330, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 23,
//     category: 'shampoos',
//     name: "Briogeo Don’t Despair, Repair!",
//     price: 260,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення з аргановою олією.',
//     specs: { volume: '236 мл', type: 'Для пошкодженого волосся', brand: 'Briogeo' },
//     rating: 4.7,
//     views: 190,
//     code: 'BRI789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Argania Spinosa Kernel Oil, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, ретельно змийте. Використовуйте 1-2 рази на тиждень.',
//     features: {
//       description: `
// Шампунь Briogeo Don’t Despair, Repair! з аргановою олією та біотином відновлює пошкоджене волосся, надаючи йому силу та блиск. Формула без сульфатів і силіконів ідеально підходить для екологічного догляду.

// **Як діє?**

// Арганова олія та біотин живлять і зміцнюють волосся, зменшуючи ламкість і посічені кінчики. Шампунь м’яко очищає, заспокоюючи шкіру голови, і робить волосся більш еластичним. Аромат із нотками цитрусу освіжає.

// **Б’юті-поради**

// Для глибокого відновлення використовуйте разом із маскою Briogeo Don’t Despair, Repair!.
//       `.trim(),
//       brand: 'Briogeo',
//       country: 'США',
//       type: 'Відновлюючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Екологічний догляд',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Живлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Арганова олія Біотин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 260, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 280, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 300, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 320, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 290, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 275, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 255, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 250, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 24,
//     category: 'shampoos',
//     name: "Living Proof Restore Shampoo",
//     price: 280,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення для пошкодженого волосся.',
//     specs: { volume: '236 мл', type: 'Для пошкодженого волосся', brand: 'Living Proof' },
//     rating: 4.6,
//     views: 185,
//     code: 'LIV123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Living Proof Restore.',
//     features: {
//       description: `
// Шампунь Living Proof Restore Shampoo призначений для відновлення пошкодженого волосся, надаючи йому м’якість і силу. Формула з молекулою OFPMA допомагає захистити волосся від подальших ушкоджень.

// **Як діє?**

// Молекула OFPMA створює захисний бар’єр, який зменшує ламкість і посічені кінчики. Шампунь м’яко очищає, живить і відновлює волосся, роблячи його більш здоровим на вигляд. Аромат із нотками цитрусу освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Living Proof Restore для інтенсивного відновлення.
//       `.trim(),
//       brand: 'Living Proof',
//       country: 'США',
//       type: 'Відновлюючий шампунь',
//       class: 'Преміум',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та захист',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Живлення Проти ламкості',
//       gender: 'Унісекс',
//       activeIngredients: 'Молекула OFPMA',
//     },
//     storePrices: [
//       { name: 'Eva', price: 280, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 300, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 320, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 340, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 310, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 295, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 275, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 270, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 25,
//     category: 'shampoos',
//     name: "Amika Hydro Rush Intense Moisture Shampoo",
//     price: 270,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Інтенсивне зволоження для сухого волосся.',
//     specs: { volume: '275 мл', type: 'Для сухого волосся', brand: 'Amika' },
//     rating: 4.7,
//     views: 190,
//     code: 'AMI456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hyaluronic Acid, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Amika Hydro Rush.',
//     features: {
//       description: `
// Шампунь Amika Hydro Rush Intense Moisture Shampoo з гіалуроновою кислотою забезпечує глибоке зволоження сухого волосся, повертаючи йому м’якість і блиск. Формула без сульфатів підходить для щоденного використання.

// **Як діє?**

// Гіалуронова кислота утримує вологу в структурі волосся, запобігаючи сухості. Шампунь м’яко очищає, живить і робить волосся більш слухняним. Аромат із нотками ванілі та ягід освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Amika Hydro Rush для інтенсивного зволоження.
//       `.trim(),
//       brand: 'Amika',
//       country: 'США',
//       type: 'Зволожуючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Глибоке зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Гіалуронова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 270, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 290, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 310, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 330, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 300, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 285, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 265, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 260, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 26,
//     category: 'shampoos',
//     name: "Verb Hydrating Shampoo",
//     price: 240,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження для всіх типів волосся.',
//     specs: { volume: '295 мл', type: 'Для всіх типів волосся', brand: 'Verb' },
//     rating: 4.5,
//     views: 180,
//     code: 'VER789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Panthenol, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Verb Hydrating Shampoo з пантенолом забезпечує легке зволоження для всіх типів волосся, надаючи їм м’якість і блиск. Формула без сульфатів і парабенів ідеально підходить для щоденного догляду.

// **Як діє?**

// Пантенол зволожує волосся, допомагаючи зберегти природну вологу. Шампунь м’яко очищає, не пересушуючи шкіру голови, і робить волосся більш слухняним. Аромат із нотками грейпфрута освіжає.

// **Б’юті-поради**

// Для додаткового зволоження використовуйте разом із кондиціонером Verb Hydrating.
//       `.trim(),
//       brand: 'Verb',
//       country: 'США',
//       type: 'Зволожуючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Легке зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 240, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 260, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 280, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 300, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 270, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 255, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 235, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 230, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 27,
//     category: 'shampoos',
//     name: "R+Co Dallas Thickening Shampoo",
//     price: 290,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для об’єму тонкого волосся.',
//     specs: { volume: '241 мл', type: 'Для тонкого волосся', brand: 'R+Co' },
//     rating: 4.6,
//     views: 185,
//     code: 'RCO123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Biotin, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером R+Co Dallas.',
//     features: {
//       description: `
// Шампунь R+Co Dallas Thickening Shampoo з біотином додає об’єм тонкому волоссю, роблячи його більш густим і пишним. Формула без парабенів забезпечує легке очищення та зволоження.

// **Як діє?**

// Біотин зміцнює волосся, додаючи йому об’єм і силу. Шампунь м’яко очищає, піднімаючи волосся від коренів, і робить його більш слухняним. Аромат із нотками ананаса та зелені освіжає.

// **Б’юті-поради**

// Для максимального об’єму використовуйте разом із спреєм R+Co Dallas Thickening Spray.
//       `.trim(),
//       brand: 'R+Co',
//       country: 'США',
//       type: 'Шампунь для об’єму',
//       class: 'Преміум',
//       hairType: 'Для тонкого волосся',
//       features: 'Додавання об’єму',
//       category: 'Засоби для миття волосся',
//       purpose: 'Об’єм Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Біотин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 290, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 310, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 330, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 350, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 320, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 305, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 285, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 280, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 28,
//     category: 'shampoos',
//     name: "Sachajuan Normal Hair Shampoo",
//     price: 250,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для нормального волосся.',
//     specs: { volume: '250 мл', type: 'Для нормального волосся', brand: 'Sachajuan' },
//     rating: 4.5,
//     views: 180,
//     code: 'SAC456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Wheat Protein, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Sachajuan Normal Hair Shampoo з гідролізованим пшеничним протеїном призначений для догляду за нормальним волоссям, надаючи йому блиск і силу. Формула без парабенів забезпечує м’яке очищення.

// **Як діє?**

// Гідролізований пшеничний протеїн зміцнює волосся, додаючи йому природний блиск. Шампунь м’яко очищає, зберігаючи природний баланс вологи, і робить волосся більш слухняним. Аромат із нотками фруктів освіжає.

// **Б’юті-поради**

// Для оптимального догляду використовуйте разом із кондиціонером Sachajuan Normal Hair.
//       `.trim(),
//       brand: 'Sachajuan',
//       country: 'Швеція',
//       type: 'Шампунь для нормального волосся',
//       class: 'Преміум',
//       hairType: 'Для нормального волосся',
//       features: 'Догляд та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований пшеничний протеїн',
//     },
//     storePrices: [
//       { name: 'Eva', price: 250, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 270, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 290, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 310, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 280, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 265, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 245, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 240, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 29,
//     category: 'shampoos',
//     name: "Davines OI Shampoo",
//     price: 320,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Живлення для всіх типів волосся.',
//     specs: { volume: '280 мл', type: 'Для всіх типів волосся', brand: 'Davines' },
//     rating: 4.8,
//     views: 200,
//     code: 'DAV789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Annatto Seed Oil, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Davines OI.',
//     features: {
//       description: `
// Шампунь Davines OI Shampoo з олією аннато забезпечує живлення та блиск для всіх типів волосся. Формула збагачена натуральними інгредієнтами, які роблять волосся м’яким і шовковистим.

// **Як діє?**

// Олія аннато живить волосся, надаючи йому природний блиск і м’якість. Шампунь м’яко очищає, не пересушуючи шкіру голови, і допомагає підтримувати здоровий вигляд волосся. Аромат із нотками ванілі та цитрусу освіжає.

// **Б’юті-поради**

// Для інтенсивного догляду використовуйте разом із маскою Davines OI.
//       `.trim(),
//       brand: 'Davines',
//       country: 'Італія',
//       type: 'Живильний шампунь',
//       class: 'Преміум',
//       hairType: 'Для всіх типів волосся',
//       features: 'Живлення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Живлення Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія аннато',
//     },
//     storePrices: [
//       { name: 'Eva', price: 320, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 340, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 360, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 380, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 350, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 335, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 315, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 310, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 30,
//     category: 'shampoos',
//     name: "Oribe Gold Lust Repair & Restore Shampoo",
//     price: 400,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення та живлення для всіх типів волосся.',
//     specs: { volume: '250 мл', type: 'Для всіх типів волосся', brand: 'Oribe' },
//     rating: 4.9,
//     views: 220,
//     code: 'ORI123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Argania Spinosa Kernel Oil, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Oribe Gold Lust.',
//     features: {
//       description: `
// Шампунь Oribe Gold Lust Repair & Restore Shampoo з аргановою олією та біо-відновлювальним комплексом призначений для відновлення та живлення всіх типів волосся. Формула забезпечує розкішний догляд, надаючи волоссю блиск і силу.

// **Як діє?**

// Арганова олія та біо-відновлювальний комплекс живлять і відновлюють волосся, зменшуючи ламкість і посічені кінчики. Шампунь м’яко очищає, роблячи волосся шовковистим і слухняним. Аромат із нотками жасмину та сандалу створює відчуття розкоші.

// **Б’юті-поради**

// Для максимального догляду використовуйте разом із маскою Oribe Gold Lust.
//       `.trim(),
//       brand: 'Oribe',
//       country: 'США',
//       type: 'Відновлюючий шампунь',
//       class: 'Преміум',
//       hairType: 'Для всіх типів волосся',
//       features: 'Відновлення та живлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Живлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Арганова олія Біо-відновлювальний комплекс',
//     },
//     storePrices: [
//       { name: 'Eva', price: 400, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 420, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 440, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 460, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 430, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 415, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 395, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 390, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },

//   {
//     id: 31,
//     category: 'shampoos',
//     name: "Kérastase Nutritive Bain Satin",
//     price: 380,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Живлення для сухого волосся.',
//     specs: { volume: '250 мл', type: 'Для сухого волосся', brand: 'Kérastase' },
//     rating: 4.8,
//     views: 230,
//     code: 'KER123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Iris Root Extract, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Kérastase Nutritive.',
//     features: {
//       description: `
// Шампунь Kérastase Nutritive Bain Satin з екстрактом кореня ірису забезпечує глибоке живлення сухого волосся, надаючи йому м’якість і блиск. Формула м’яко очищає, не пересушуючи шкіру голови.

// **Як діє?**

// Екстракт кореня ірису зволожує і живить волосся, відновлюючи його природну еластичність. Шампунь робить волосся більш слухняним і полегшує розчісування. Аромат із нотками ірису та мускусу додає відчуття розкоші.

// **Б’юті-поради**

// Поєднуйте з маскою Kérastase Nutritive Masquintense для інтенсивного живлення.
//       `.trim(),
//       brand: 'Kérastase',
//       country: 'Франція',
//       type: 'Живильний шампунь',
//       class: 'Преміум',
//       hairType: 'Для сухого волосся',
//       features: 'Глибоке живлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Живлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт кореня ірису',
//     },
//     storePrices: [
//       { name: 'Eva', price: 380, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 400, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 420, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 440, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 410, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 395, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 375, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 370, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 32,
//     category: 'shampoos',
//     name: "Moroccanoil Moisture Repair Shampoo",
//     price: 360,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення для пошкодженого волосся.',
//     specs: { volume: '250 мл', type: 'Для пошкодженого волосся', brand: 'Moroccanoil' },
//     rating: 4.7,
//     views: 225,
//     code: 'MOR456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Argania Spinosa Kernel Oil, Hydrolyzed Keratin, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, ретельно змийте. Для кращого результату використовуйте з кондиціонером Moroccanoil.',
//     features: {
//       description: `
// Шампунь Moroccanoil Moisture Repair Shampoo з аргановою олією та кератином відновлює пошкоджене волосся, надаючи йому силу та блиск. Формула без сульфатів ніжно очищає і зволожує.

// **Як діє?**

// Арганова олія живить, а кератин зміцнює структуру волосся, зменшуючи ламкість і посічені кінчики. Шампунь м’яко очищає, роблячи волосся більш еластичним і здоровим. Аромат із нотками амбри та ванілі освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Moroccanoil Intense Hydrating Mask для глибокого відновлення.
//       `.trim(),
//       brand: 'Moroccanoil',
//       country: 'Ізраїль',
//       type: 'Відновлюючий шампунь',
//       class: 'Преміум',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Арганова олія Кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 360, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 380, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 400, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 420, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 390, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 375, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 355, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 350, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 33,
//     category: 'shampoos',
//     name: "L'Oréal Professionnel Vitamino Color",
//     price: 290,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Захист кольору фарбованого волосся.',
//     specs: { volume: '300 мл', type: 'Для фарбованого волосся', brand: "L'Oréal Professionnel" },
//     rating: 4.6,
//     views: 215,
//     code: 'LOR789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Resveratrol, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Vitamino Color.',
//     features: {
//       description: `
// Шампунь L'Oréal Professionnel Vitamino Color з ресвератролом захищає колір фарбованого волосся, зберігаючи його яскравість і блиск. Формула м’яко очищає і подовжує стійкість кольору.

// **Як діє?**

// Ресвератрол, потужний антиоксидант, захищає волосся від вицвітання і зовнішніх впливів. Шампунь зволожує, роблячи волосся м’яким і слухняним. Аромат із нотками ягід і квітів освіжає.

// **Б’юті-поради**

// Для максимального захисту кольору використовуйте разом із маскою Vitamino Color.
//       `.trim(),
//       brand: "L'Oréal Professionnel",
//       country: 'Франція',
//       type: 'Шампунь для захисту кольору',
//       class: 'Преміум',
//       hairType: 'Для фарбованого волосся',
//       features: 'Захист кольору',
//       category: 'Засоби для миття волосся',
//       purpose: 'Захист кольору Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Ресвератрол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 290, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 310, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 330, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 350, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 320, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 305, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 285, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 280, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 34,
//     category: 'shampoos',
//     name: "Joico K-Pak Color Therapy",
//     price: 320,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення для фарбованого волосся.',
//     specs: { volume: '300 мл', type: 'Для фарбованого волосся', brand: 'Joico' },
//     rating: 4.7,
//     views: 220,
//     code: 'JOI123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Joico K-Pak.',
//     features: {
//       description: `
// Шампунь Joico K-Pak Color Therapy з кератином захищає колір фарбованого волосся і відновлює його структуру. Формула зволожує і робить волосся більш міцним і блискучим.

// **Як діє?**

// Гідролізований кератин зміцнює волосся, зменшуючи ламкість, а спеціальна технологія Quadramine Complex захищає колір від вицвітання. Шампунь м’яко очищає, зберігаючи яскравість кольору. Аромат із нотками тропічних фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Joico K-Pak Color Therapy для посиленого захисту кольору.
//       `.trim(),
//       brand: 'Joico',
//       country: 'США',
//       type: 'Відновлюючий шампунь',
//       class: 'Преміум',
//       hairType: 'Для фарбованого волосся',
//       features: 'Захист кольору та відновлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Захист кольору Відновлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 320, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 340, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 360, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 380, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 350, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 335, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 315, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 310, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 35,
//     category: 'shampoos',
//     name: "Matrix Total Results Moisture Me Rich",
//     price: 250,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження для сухого волосся.',
//     specs: { volume: '300 мл', type: 'Для сухого волосся', brand: 'Matrix' },
//     rating: 4.5,
//     views: 200,
//     code: 'MAT456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Glycerin, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Matrix Moisture Me Rich.',
//     features: {
//       description: `
// Шампунь Matrix Total Results Moisture Me Rich з гліцерином забезпечує інтенсивне зволоження сухого волосся, надаючи йому м’якість і блиск. Формула м’яко очищає і робить волосся слухняним.

// **Як діє?**

// Гліцерин утримує вологу в структурі волосся, запобігаючи сухості та тьмяності. Шампунь ніжно очищає, не пересушуючи шкіру голови, і полегшує укладання. Аромат із нотками квітів і фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Matrix Moisture Me Rich для глибокого зволоження.
//       `.trim(),
//       brand: 'Matrix',
//       country: 'США',
//       type: 'Зволожуючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Інтенсивне зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Гліцерин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 250, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 270, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 290, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 310, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 280, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 265, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 245, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 240, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 36,
//     category: 'shampoos',
//     name: "Schwarzkopf Professional BC Bonacure Moisture Kick",
//     price: 270,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження для нормального та сухого волосся.',
//     specs: { volume: '250 мл', type: 'Для сухого волосся', brand: 'Schwarzkopf Professional' },
//     rating: 4.6,
//     views: 205,
//     code: 'SCH789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hyaluronic Acid, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером BC Moisture Kick.',
//     features: {
//       description: `
// Шампунь Schwarzkopf Professional BC Bonacure Moisture Kick з гіалуроновою кислотою забезпечує глибоке зволоження нормального та сухого волосся. Формула без силіконів робить волосся легким і блискучим.

// **Як діє?**

// Гіалуронова кислота утримує вологу, відновлюючи баланс зволоження волосся. Шампунь м’яко очищає, надаючи волоссю еластичність і м’якість. Аромат із нотками цитрусу та квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з спреєм BC Moisture Kick для додаткового зволоження протягом дня.
//       `.trim(),
//       brand: 'Schwarzkopf Professional',
//       country: 'Німеччина',
//       type: 'Зволожуючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для нормального та сухого волосся',
//       features: 'Глибоке зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Гіалуронова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 270, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 290, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 310, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 330, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 300, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 285, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 265, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 260, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 37,
//     category: 'shampoos',
//     name: "TIGI Bed Head Urban Antidotes Recovery",
//     price: 240,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження для сухого та пошкодженого волосся.',
//     specs: { volume: '250 мл', type: 'Для сухого волосся', brand: 'TIGI' },
//     rating: 4.5,
//     views: 195,
//     code: 'TIG123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Dimethiconol, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером TIGI Recovery.',
//     features: {
//       description: `
// Шампунь TIGI Bed Head Urban Antidotes Recovery з диметиконолом зволожує сухе та пошкоджене волосся, повертаючи йому м’якість і блиск. Формула захищає волосся від зовнішніх впливів.

// **Як діє?**

// Диметиконол зволожує і розгладжує волосся, зменшуючи посічені кінчики. Шампунь м’яко очищає, надаючи волоссю еластичність і здоровий вигляд. Аромат із нотками ягід і ванілі освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою TIGI Urban Antidotes Recovery для інтенсивного відновлення.
//       `.trim(),
//       brand: 'TIGI',
//       country: 'Велика Британія',
//       type: 'Зволожуючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для сухого та пошкодженого волосся',
//       features: 'Зволоження та відновлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Відновлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Диметиконол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 240, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 260, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 280, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 300, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 270, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 255, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 235, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 230, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 38,
//     category: 'shampoos',
//     name: "Garnier Fructis Hair Food Banana",
//     price: 200,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Живлення для сухого волосся.',
//     specs: { volume: '350 мл', type: 'Для сухого волосся', brand: 'Garnier' },
//     rating: 4.4,
//     views: 190,
//     code: 'GAR456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Banana Fruit Extract, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Garnier Fructis Hair Food Banana з екстрактом банана живить сухе волосся, надаючи йому м’якість і блиск. Формула на 98% складається з натуральних інгредієнтів і не містить парабенів.

// **Як діє?**

// Екстракт банана зволожує і живить волосся, роблячи його більш еластичним і слухняним. Шампунь м’яко очищає, не пересушуючи шкіру голови. Аромат із нотками банана та ванілі освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Garnier Fructis Hair Food Banana для глибокого живлення.
//       `.trim(),
//       brand: 'Garnier',
//       country: 'Франція',
//       type: 'Живильний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Живлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Живлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт банана',
//     },
//     storePrices: [
//       { name: 'Eva', price: 200, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 220, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 240, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 260, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 230, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 215, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 195, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 190, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 39,
//     category: 'shampoos',
//     name: "Herbal Essences Bio:Renew Argan Oil",
//     price: 210,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення з аргановою олією.',
//     specs: { volume: '400 мл', type: 'Для пошкодженого волосся', brand: 'Herbal Essences' },
//     rating: 4.4,
//     views: 185,
//     code: 'HER789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Argania Spinosa Kernel Oil, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Herbal Essences Bio:Renew Argan Oil з аргановою олією відновлює пошкоджене волосся, надаючи йому м’якість і блиск. Формула без парабенів і барвників ніжно очищає волосся.

// **Як діє?**

// Арганова олія живить і зволожує волосся, зменшуючи ламкість і посічені кінчики. Шампунь м’яко очищає, роблячи волосся більш еластичним і здоровим. Аромат із нотками кокоса та квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Herbal Essences Bio:Renew для посиленого відновлення.
//       `.trim(),
//       brand: 'Herbal Essences',
//       country: 'США',
//       type: 'Відновлюючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Арганова олія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 210, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 230, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 250, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 270, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 240, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 225, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 205, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 200, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 40,
//     category: 'shampoos',
//     name: "Nexxus Keraphix Damage Healing",
//     price: 280,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення для сильно пошкодженого волосся.',
//     specs: { volume: '400 мл', type: 'Для пошкодженого волосся', brand: 'Nexxus' },
//     rating: 4.6,
//     views: 200,
//     code: 'NEX123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Nexxus Keraphix.',
//     features: {
//       description: `
// Шампунь Nexxus Keraphix Damage Healing з кератином і протеїновим комплексом відновлює сильно пошкоджене волосся, надаючи йому силу та блиск. Формула м’яко очищає і зміцнює волосся.

// **Як діє?**

// Гідролізований кератин і протеїновий комплекс проникають у структуру волосся, відновлюючи пошкоджені ділянки. Шампунь зменшує ламкість і робить волосся більш еластичним. Аромат із нотками троянди та мускусу освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Nexxus Keraphix для інтенсивного відновлення.
//       `.trim(),
//       brand: 'Nexxus',
//       country: 'США',
//       type: 'Відновлюючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та зміцнення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 280, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 300, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 320, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 340, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 310, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 295, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 275, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 270, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 41,
//     category: 'shampoos',
//     name: "Ouai Fine Hair Shampoo",
//     price: 310,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Об’єм для тонкого волосся.',
//     specs: { volume: '300 мл', type: 'Для тонкого волосся', brand: 'Ouai' },
//     rating: 4.7,
//     views: 210,
//     code: 'OUA456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Ouai Fine Hair.',
//     features: {
//       description: `
// Шампунь Ouai Fine Hair Shampoo з кератином додає об’єм тонкому волоссю, роблячи його більш густим і пишним. Формула без сульфатів м’яко очищає, не обтяжуючи волосся.

// **Як діє?**

// Гідролізований кератин зміцнює волосся, додаючи йому об’єм і силу. Шампунь м’яко очищає, піднімаючи волосся від коренів, і робить його більш слухняним. Аромат із нотками цитрусу та мускусу освіжає.

// **Б’юті-поради**

// Поєднуйте з сухим шампунем Ouai для додаткового об’єму між миттям.
//       `.trim(),
//       brand: 'Ouai',
//       country: 'США',
//       type: 'Шампунь для об’єму',
//       class: 'Преміум',
//       hairType: 'Для тонкого волосся',
//       features: 'Додавання об’єму',
//       category: 'Засоби для миття волосся',
//       purpose: 'Об’єм Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 310, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 330, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 350, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 370, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 340, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 325, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 305, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 300, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 42,
//     category: 'shampoos',
//     name: "Biolage Hydrasource Shampoo",
//     price: 260,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження для сухого волосся.',
//     specs: { volume: '250 мл', type: 'Для сухого волосся', brand: 'Biolage' },
//     rating: 4.5,
//     views: 195,
//     code: 'BIO789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Aloe Barbadensis Leaf Juice, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Biolage Hydrasource.',
//     features: {
//       description: `
// Шампунь Biolage Hydrasource Shampoo з екстрактом алое вера зволожує сухе волосся, надаючи йому м’якість і блиск. Формула без парабенів ніжно очищає і відновлює баланс вологи.

// **Як діє?**

// Екстракт алое вера зволожує волосся, запобігаючи сухості та тьмяності. Шампунь м’яко очищає, роблячи волосся більш еластичним і слухняним. Аромат із нотками трав і цитрусу освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Biolage Hydrasource для глибокого зволоження.
//       `.trim(),
//       brand: 'Biolage',
//       country: 'США',
//       type: 'Зволожуючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Зволоження та відновлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт алое вера',
//     },
//     storePrices: [
//       { name: 'Eva', price: 260, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 280, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 300, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 320, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 290, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 275, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 255, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 250, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 43,
//     category: 'shampoos',
//     name: "Aussie Miracle Moist Shampoo",
//     price: 220,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження для сухого волосся.',
//     specs: { volume: '300 мл', type: 'Для сухого волосся', brand: 'Aussie' },
//     rating: 4.4,
//     views: 190,
//     code: 'AUS123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Macadamia Ternifolia Seed Oil, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Aussie Miracle Moist Shampoo з олією макадамії зволожує сухе волосся, надаючи йому м’якість і блиск. Формула м’яко очищає і робить волосся більш слухняним.

// **Як діє?**

// Олія макадамії живить і зволожує волосся, відновлюючи його природну еластичність. Шампунь ніжно очищає, не пересушуючи шкіру голови, і полегшує розчісування. Аромат із нотками фруктів і квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Aussie Miracle Moist для посиленого зволоження.
//       `.trim(),
//       brand: 'Aussie',
//       country: 'Австралія',
//       type: 'Зволожуючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Зволоження та живлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія макадамії',
//     },
//     storePrices: [
//       { name: 'Eva', price: 220, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 240, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 260, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 280, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 250, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 235, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 215, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 210, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 44,
//     category: 'shampoos',
//     name: "Tresemmé Repair & Protect 7",
//     price: 230,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення для пошкодженого волосся.',
//     specs: { volume: '400 мл', type: 'Для пошкодженого волосся', brand: 'Tresemmé' },
//     rating: 4.4,
//     views: 185,
//     code: 'TRE456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Biotin, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Tresemmé Repair & Protect 7 з біотином відновлює пошкоджене волосся, зменшуючи до 7 видів ушкоджень, таких як ламкість і посічені кінчики. Формула зміцнює волосся і додає блиск.

// **Як діє?**

// Біотин зміцнює структуру волосся, роблячи його більш стійким до зовнішніх впливів. Шампунь м’яко очищає, надаючи волоссю гладкість і здоровий вигляд. Аромат із нотками квітів і фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Tresemmé Repair & Protect 7 для посиленого відновлення.
//       `.trim(),
//       brand: 'Tresemmé',
//       country: 'США',
//       type: 'Відновлюючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та захист',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Біотин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 230, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 250, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 270, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 290, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 260, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 245, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 225, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 220, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 45,
//     category: 'shampoos',
//     name: "Head & Shoulders Supreme Moisture",
//     price: 190,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження та захист від лупи.',
//     specs: { volume: '400 мл', type: 'Проти лупи', brand: 'Head & Shoulders' },
//     rating: 4.3,
//     views: 180,
//     code: 'HNS789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Piroctone Olamine, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Head & Shoulders Supreme Moisture з піроктон оламіном бореться з лупою, одночасно зволожуючи сухе волосся і шкіру голови. Формула забезпечує чистоту і комфорт.

// **Як діє?**

// Піроктон оламін ефективно усуває лупу, а зволожуючі компоненти підтримують баланс вологи шкіри голови і волосся. Шампунь м’яко очищає, надаючи волоссю блиск і м’якість. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Для оптимального догляду використовуйте разом із кондиціонером Head & Shoulders Supreme Moisture.
//       `.trim(),
//       brand: 'Head & Shoulders',
//       country: 'США',
//       type: 'Шампунь проти лупи',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зволоження та захист від лупи',
//       category: 'Засоби для миття волосся',
//       purpose: 'Проти лупи Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Піроктон оламін',
//     },
//     storePrices: [
//       { name: 'Eva', price: 190, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 210, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 230, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 250, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 220, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 205, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 185, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 180, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 46,
//     category: 'shampoos',
//     name: "Shea Moisture Coconut & Hibiscus Curl & Shine",
//     price: 260,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для кучерявого волосся.',
//     specs: { volume: '384 мл', type: 'Для кучерявого волосся', brand: 'Shea Moisture' },
//     rating: 4.6,
//     views: 195,
//     code: 'SHE123',
//     composition: 'Aqua / Water, Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Betaine, Shea Butter, Hibiscus Sabdariffa Flower Extract, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Shea Moisture Curl & Shine.',
//     features: {
//       description: `
// Шампунь Shea Moisture Coconut & Hibiscus Curl & Shine з олією ши та екстрактом гібіскуса призначений для кучерявого волосся, надаючи йому зволоження, блиск і чіткість локонів. Формула без сульфатів м’яко очищає.

// **Як діє?**

// Олія ши зволожує і живить волосся, а екстракт гібіскуса додає блиск і зміцнює локони. Шампунь допомагає зменшити пухнастість і підкреслює природну текстуру кучерів. Аромат із нотками кокоса та квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з кремом для укладання Shea Moisture Curl Enhancing Smoothie для ідеальних локонів.
//       `.trim(),
//       brand: 'Shea Moisture',
//       country: 'США',
//       type: 'Шампунь для кучерявого волосся',
//       class: 'Мідл-маркет',
//       hairType: 'Для кучерявого волосся',
//       features: 'Зволоження та підкреслення локонів',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія ши Екстракт гібіскуса',
//     },
//     storePrices: [
//       { name: 'Eva', price: 260, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 280, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 300, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 320, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 290, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 275, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 255, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 250, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 47,
//     category: 'shampoos',
//     name: "OGX Renewing + Argan Oil of Morocco",
//     price: 240,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення для сухого волосся.',
//     specs: { volume: '385 мл', type: 'Для сухого волосся', brand: 'OGX' },
//     rating: 4.5,
//     views: 190,
//     code: 'OGX456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Argania Spinosa Kernel Oil, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером OGX Argan Oil.',
//     features: {
//       description: `
// Шампунь OGX Renewing + Argan Oil of Morocco з аргановою олією відновлює сухе та пошкоджене волосся, надаючи йому м’якість і блиск. Формула без сульфатів ніжно очищає і зволожує.

// **Як діє?**

// Арганова олія живить і зволожує волосся, зменшуючи ламкість і посічені кінчики. Шампунь робить волосся більш еластичним і слухняним, захищаючи від зовнішніх впливів. Аромат із нотками ванілі та спецій освіжає.

// **Б’юті-поради**

// Поєднуйте з олією OGX Argan Oil для додаткового живлення і блиску.
//       `.trim(),
//       brand: 'OGX',
//       country: 'США',
//       type: 'Відновлюючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Відновлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Відновлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Арганова олія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 240, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 260, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 280, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 300, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 270, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 255, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 235, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 230, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 48,
//     category: 'shampoos',
//     name: "Pantene Pro-V Miracles Hydration",
//     price: 200,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження для сухого волосся.',
//     specs: { volume: '400 мл', type: 'Для сухого волосся', brand: 'Pantene' },
//     rating: 4.4,
//     views: 185,
//     code: 'PAN789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Panthenol, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Pantene Pro-V Miracles Hydration з пантенолом зволожує сухе волосся, надаючи йому м’якість і блиск. Формула збагачена поживними компонентами для здорового вигляду волосся.

// **Як діє?**

// Пантенол проникає в структуру волосся, зволожуючи його зсередини. Шампунь м’яко очищає, не пересушуючи шкіру голови, і робить волосся більш еластичним. Аромат із нотками квітів і фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Pantene Pro-V Miracles для посиленого зволоження.
//       `.trim(),
//       brand: 'Pantene',
//       country: 'США',
//       type: 'Зволожуючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Зволоження та живлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 200, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 220, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 240, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 260, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 230, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 215, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 195, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 190, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 49,
//     category: 'shampoos',
//     name: "Dove Nutritive Solutions Intensive Repair",
//     price: 190,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення для пошкодженого волосся.',
//     specs: { volume: '400 мл', type: 'Для пошкодженого волосся', brand: 'Dove' },
//     rating: 4.3,
//     views: 180,
//     code: 'DOV123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Dove Nutritive Solutions Intensive Repair з кератином відновлює пошкоджене волосся, зменшуючи ламкість і посічені кінчики. Формула зволожує і робить волосся більш міцним.

// **Як діє?**

// Гідролізований кератин проникає в структуру волосся, відновлюючи пошкоджені ділянки. Шампунь м’яко очищає, надаючи волоссю гладкість і блиск. Аромат із нотками ванілі та квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Dove Intensive Repair для посиленого відновлення.
//       `.trim(),
//       brand: 'Dove',
//       country: 'США',
//       type: 'Відновлюючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 190, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 210, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 230, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 250, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 220, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 205, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 185, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 180, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 50,
//     category: 'shampoos',
//     name: "Klorane Nourishing Shampoo with Mango Butter",
//     price: 270,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Живлення для сухого волосся.',
//     specs: { volume: '200 мл', type: 'Для сухого волосся', brand: 'Klorane' },
//     rating: 4.6,
//     views: 200,
//     code: 'KLO456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Mangifera Indica Seed Butter, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Klorane Mango Butter.',
//     features: {
//       description: `
// Шампунь Klorane Nourishing Shampoo з маслом манго живить сухе волосся, надаючи йому м’якість і блиск. Формула без силіконів ніжно очищає і відновлює природний баланс вологи.

// **Як діє?**

// Масло манго зволожує і живить волосся, роблячи його більш еластичним і слухняним. Шампунь м’яко очищає, не пересушуючи шкіру голови. Аромат із нотками манго та квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Klorane Mango Butter для глибокого живлення.
//       `.trim(),
//       brand: 'Klorane',
//       country: 'Франція',
//       type: 'Живильний шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Живлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Живлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Масло манго',
//     },
//     storePrices: [
//       { name: 'Eva', price: 270, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 290, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 310, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 330, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 300, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 285, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 265, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 260, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 51,
//     category: 'shampoos',
//     name: "Vichy Dercos Anti-Dandruff",
//     price: 320,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Проти лупи для чутливої шкіри голови.',
//     specs: { volume: '200 мл', type: 'Проти лупи', brand: 'Vichy' },
//     rating: 4.7,
//     views: 205,
//     code: 'VIC789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Selenium Sulfide, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, залиште на 2 хвилини, змийте. Використовуйте 2-3 рази на тиждень.',
//     features: {
//       description: `
// Шампунь Vichy Dercos Anti-Dandruff з селеніум сульфідом ефективно бореться з лупою, заспокоюючи чутливу шкіру голови. Формула без парабенів забезпечує м’яке очищення і комфорт.

// **Як діє?**

// Селеніум сульфід усуває лупу і запобігає її повторній появі. Шампунь заспокоює подразнення шкіри голови, надаючи волоссю блиск і м’якість. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Для тривалого ефекту використовуйте разом із бальзамом Vichy Dercos для чутливої шкіри.
//       `.trim(),
//       brand: 'Vichy',
//       country: 'Франція',
//       type: 'Шампунь проти лупи',
//       class: 'Преміум',
//       hairType: 'Для всіх типів волосся',
//       features: 'Проти лупи та заспокоєння шкіри',
//       category: 'Засоби для миття волосся',
//       purpose: 'Проти лупи Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Селеніум сульфід',
//     },
//     storePrices: [
//       { name: 'Eva', price: 320, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 340, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 360, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 380, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 350, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 335, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 315, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 310, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 52,
//     category: 'shampoos',
//     name: "Alfaparf Milano Semi Di Lino Moisture",
//     price: 290,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження для сухого волосся.',
//     specs: { volume: '250 мл', type: 'Для сухого волосся', brand: 'Alfaparf Milano' },
//     rating: 4.6,
//     views: 200,
//     code: 'ALF123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Honey Extract, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Alfaparf Semi Di Lino.',
//     features: {
//       description: `
// Шампунь Alfaparf Milano Semi Di Lino Moisture з екстрактом меду зволожує сухе волосся, надаючи йому м’якість і блиск. Формула без сульфатів ніжно очищає і відновлює природну еластичність.

// **Як діє?**

// Екстракт меду живить і зволожує волосся, роблячи його більш слухняним і шовковистим. Шампунь м’яко очищає, не пересушуючи шкіру голови. Аромат із нотками меду та квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Alfaparf Semi Di Lino Moisture для глибокого зволоження.
//       `.trim(),
//       brand: 'Alfaparf Milano',
//       country: 'Італія',
//       type: 'Зволожуючий шампунь',
//       class: 'Преміум',
//       hairType: 'Для сухого волосся',
//       features: 'Зволоження та живлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Живлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт меду',
//     },
//     storePrices: [
//       { name: 'Eva', price: 290, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 310, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 330, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 350, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 320, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 305, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 285, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 280, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 53,
//     category: 'shampoos',
//     name: "Wella Professionals Invigo Nutri-Enrich",
//     price: 280,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Живлення для сухого та пошкодженого волосся.',
//     specs: { volume: '250 мл', type: 'Для сухого волосся', brand: 'Wella Professionals' },
//     rating: 4.6,
//     views: 195,
//     code: 'WEL456',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Goji Berry Extract, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Wella Nutri-Enrich.',
//     features: {
//       description: `
// Шампунь Wella Professionals Invigo Nutri-Enrich з екстрактом ягід годжі живить сухе та пошкоджене волосся, надаючи йому м’якість і блиск. Формула зволожує і захищає волосся від зовнішніх впливів.

// **Як діє?**

// Екстракт ягід годжі багатий антиоксидантами, які живлять і зміцнюють волосся. Шампунь м’яко очищає, роблячи волосся більш еластичним і слухняним. Аромат із нотками ягід і ванілі освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Wella Nutri-Enrich для інтенсивного живлення.
//       `.trim(),
//       brand: 'Wella Professionals',
//       country: 'Німеччина',
//       type: 'Живильний шампунь',
//       class: 'Преміум',
//       hairType: 'Для сухого та пошкодженого волосся',
//       features: 'Живлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Живлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт ягід годжі',
//     },
//     storePrices: [
//       { name: 'Eva', price: 280, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 300, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 320, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 340, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 310, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 295, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 275, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 270, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 54,
//     category: 'shampoos',
//     name: "Lush Big Shampoo",
//     price: 350,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Об’єм для тонкого волосся.',
//     specs: { volume: '310 г', type: 'Для тонкого волосся', brand: 'Lush' },
//     rating: 4.7,
//     views: 210,
//     code: 'LUS123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sea Salt, Citrus Limon Peel Oil, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Lush American Cream.',
//     features: {
//       description: `
// Шампунь Lush Big Shampoo з морською сіллю та олією лимона додає об’єм тонкому волоссю, надаючи йому пишність і блиск. Формула без силіконів м’яко очищає і піднімає волосся від коренів.

// **Як діє?**

// Морська сіль додає текстуру і об’єм, а олія лимона забезпечує блиск і свіжість. Шампунь робить волосся більш густим і слухняним, не обтяжуючи його. Аромат із нотками цитрусу та ванілі освіжає.

// **Б’юті-поради**

// Для максимального об’єму використовуйте разом із сухим шампунем Lush No Drought.
//       `.trim(),
//       brand: 'Lush',
//       country: 'Велика Британія',
//       type: 'Шампунь для об’єму',
//       class: 'Преміум',
//       hairType: 'Для тонкого волосся',
//       features: 'Додавання об’єму',
//       category: 'Засоби для миття волосся',
//       purpose: 'Об’єм Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Морська сіль Олія лимона',
//     },
//     storePrices: [
//       { name: 'Eva', price: 350, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 370, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 390, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 410, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 380, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 365, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 345, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 340, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 55,
//     category: 'shampoos',
//     name: "Christophe Robin Purifying Shampoo",
//     price: 360,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Очищення для жирної шкіри голови.',
//     specs: { volume: '250 мл', type: 'Для жирного волосся', brand: 'Christophe Robin' },
//     rating: 4.8,
//     views: 215,
//     code: 'CHR789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Jujube Bark Extract, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте 2-3 рази на тиждень.',
//     features: {
//       description: `
// Шампунь Christophe Robin Purifying Shampoo з екстрактом кори ююби очищає жирну шкіру голови, регулюючи вироблення себуму. Формула без силіконів забезпечує легкість і свіжість волосся.

// **Як діє?**

// Екстракт кори ююби заспокоює шкіру голови і зменшує жирність, зберігаючи природний баланс вологи. Шампунь м’яко очищає, надаючи волоссю об’єм і блиск. Аромат із нотками трав і цитрусу освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Christophe Robin Purifying для глибокого очищення.
//       `.trim(),
//       brand: 'Christophe Robin',
//       country: 'Франція',
//       type: 'Очищаючий шампунь',
//       class: 'Преміум',
//       hairType: 'Для жирного волосся',
//       features: 'Очищення та регуляція себуму',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Об’єм Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт кори ююби',
//     },
//     storePrices: [
//       { name: 'Eva', price: 360, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 380, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 400, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 420, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 390, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 375, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 355, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 350, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 56,
//     category: 'shampoos',
//     name: "Sachajuan Ocean Mist Volume Shampoo",
//     price: 300,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Об’єм для тонкого волосся.',
//     specs: { volume: '250 мл', type: 'Для тонкого волосся', brand: 'Sachajuan' },
//     rating: 4.7,
//     views: 205,
//     code: 'SAC123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Wheat Protein, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Sachajuan Ocean Mist.',
//     features: {
//       description: `
// Шампунь Sachajuan Ocean Mist Volume Shampoo з гідролізованим пшеничним протеїном додає об’єм тонкому волоссю, надаючи йому легкість і текстуру. Формула без парабенів м’яко очищає.

// **Як діє?**

// Гідролізований пшеничний протеїн зміцнює волосся, додаючи об’єм від коренів. Шампунь робить волосся більш пишним і слухняним, створюючи ефект морської свіжості. Аромат із нотками моря та цитрусу освіжає.

// **Б’юті-поради**

// Поєднуйте з спреєм Sachajuan Ocean Mist для посилення об’єму та текстури.
//       `.trim(),
//       brand: 'Sachajuan',
//       country: 'Швеція',
//       type: 'Шампунь для об’єму',
//       class: 'Преміум',
//       hairType: 'Для тонкого волосся',
//       features: 'Додавання об’єму',
//       category: 'Засоби для миття волосся',
//       purpose: 'Об’єм Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований пшеничний протеїн',
//     },
//     storePrices: [
//       { name: 'Eva', price: 300, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 320, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 340, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 360, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 330, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 315, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 295, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 290, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 57,
//     category: 'shampoos',
//     name: "Aveda Invati Advanced Exfoliating Shampoo",
//     price: 380,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для зміцнення тонкого волосся.',
//     specs: { volume: '200 мл', type: 'Для тонкого волосся', brand: 'Aveda' },
//     rating: 4.8,
//     views: 220,
//     code: 'AVE123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Salicylic Acid, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Aveda Invati Advanced.',
//     features: {
//       description: `
// Шампунь Aveda Invati Advanced Exfoliating Shampoo з саліциловою кислотою очищає шкіру голови і зміцнює тонке волосся, зменшуючи його випадіння. Формула на 97% складається з натуральних інгредієнтів.

// **Як діє?**

// Саліцилова кислота відлущує шкіру голови, видаляючи забруднення і надлишки себуму, а натуральні екстракти зміцнюють волосся від коренів. Шампунь додає об’єм і блиск. Аромат із нотками лаванди та розмарину освіжає.

// **Б’юті-поради**

// Поєднуйте з сироваткою Aveda Invati Advanced для зменшення випадіння волосся.
//       `.trim(),
//       brand: 'Aveda',
//       country: 'США',
//       type: 'Зміцнюючий шампунь',
//       class: 'Преміум',
//       hairType: 'Для тонкого волосся',
//       features: 'Зміцнення та очищення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Об’єм Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Саліцилова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 380, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 400, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 420, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 440, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 410, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 395, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 375, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 370, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 58,
//     category: 'shampoos',
//     name: "Briogeo Be Gentle, Be Kind Aloe + Oat Milk",
//     price: 280,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'М’яке очищення для чутливої шкіри голови.',
//     specs: { volume: '355 мл', type: 'Для всіх типів волосся', brand: 'Briogeo' },
//     rating: 4.6,
//     views: 200,
//     code: 'BRI123',
//     composition: 'Aqua / Water, Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Betaine, Aloe Barbadensis Leaf Juice, Avena Sativa Kernel Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Briogeo Be Gentle, Be Kind з алое вера та вівсяним молоком м’яко очищає волосся і заспокоює чутливу шкіру голови. Формула без сульфатів і силіконів ідеально підходить для щоденного догляду.

// **Як діє?**

// Алое вера зволожує і заспокоює шкіру, а вівсяне молоко зменшує подразнення. Шампунь ніжно очищає, надаючи волоссю м’якість і блиск. Аромат із нотками трав і цитрусу освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Briogeo Be Gentle, Be Kind для додаткового зволоження.
//       `.trim(),
//       brand: 'Briogeo',
//       country: 'США',
//       type: 'М’який шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'М’яке очищення та заспокоєння',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Алое вера Вівсяне молоко',
//     },
//     storePrices: [
//       { name: 'Eva', price: 280, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 300, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 320, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 340, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 310, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 295, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 275, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 270, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 59,
//     category: 'shampoos',
//     name: "Moroccanoil Extra Volume Shampoo",
//     price: 340,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Об’єм для тонкого волосся.',
//     specs: { volume: '250 мл', type: 'Для тонкого волосся', brand: 'Moroccanoil' },
//     rating: 4.7,
//     views: 210,
//     code: 'MOR789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Argania Spinosa Kernel Oil, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Moroccanoil Extra Volume.',
//     features: {
//       description: `
// Шампунь Moroccanoil Extra Volume Shampoo з аргановою олією додає об’єм тонкому волоссю, роблячи його більш густим і пишним. Формула без сульфатів м’яко очищає, не обтяжуючи волосся.

// **Як діє?**

// Арганова олія зволожує і живить волосся, а спеціальні компоненти додають об’єм від коренів. Шампунь робить волосся більш слухняним і блискучим. Аромат із нотками амбри та ванілі освіжає.

// **Б’юті-поради**

// Поєднуйте з спреєм Moroccanoil Root Boost для максимального об’єму.
//       `.trim(),
//       brand: 'Moroccanoil',
//       country: 'Ізраїль',
//       type: 'Шампунь для об’єму',
//       class: 'Преміум',
//       hairType: 'Для тонкого волосся',
//       features: 'Додавання об’єму',
//       category: 'Засоби для миття волосся',
//       purpose: 'Об’єм Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Арганова олія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 340, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 360, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 380, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 400, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 370, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 355, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 335, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 330, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 60,
//     category: 'shampoos',
//     name: "Kérastase Discipline Bain Fluidealiste",
//     price: 390,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Розгладження для неслухняного волосся.',
//     specs: { volume: '250 мл', type: 'Для неслухняного волосся', brand: 'Kérastase' },
//     rating: 4.8,
//     views: 225,
//     code: 'KER789',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Morpho-Keratine Complex, Sodium Benzoate, Polyquaternium-10, Sodium Hydroxide, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Kérastase Discipline.',
//     features: {
//       description: `
// Шампунь Kérastase Discipline Bain Fluidealiste з комплексом Morpho-Keratine розгладжує неслухняне волосся, надаючи йому гладкість і блиск. Формула без сульфатів забезпечує м’яке очищення.

// **Як діє?**

// Комплекс Morpho-Keratine дисциплінує волосся, зменшуючи пухнастість і полегшуючи укладання. Шампунь робить волосся більш слухняним і захищає від вологості. Аромат із нотками квітів і мускусу освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Kérastase Discipline Maskeratine для максимального розгладження.
//       `.trim(),
//       brand: 'Kérastase',
//       country: 'Франція',
//       type: 'Розгладжуючий шампунь',
//       class: 'Преміум',
//       hairType: 'Для неслухняного волосся',
//       features: 'Розгладження та контроль пухнастості',
//       category: 'Засоби для миття волосся',
//       purpose: 'Розгладження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Morpho-Keratine Complex',
//     },
//     storePrices: [
//       { name: 'Eva', price: 390, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 410, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 430, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 450, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 420, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 405, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 385, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 380, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 61,
//     category: 'conditioner',
//     name: 'Pantene Pro-V Smooth Conditioner',
//     price: 120,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для гладкості.',
//     specs: { volume: '250 мл', brand: 'Pantene', type: 'Для всіх типів волосся' },
//     rating: 4.4,
//     views: 150,
//     code: 'PAN061',
//     composition: 'Aqua / Water, Cetyl Alcohol, Stearyl Alcohol, Panthenol, Dimethicone, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на чисте вологе волосся після шампуню, розподіліть по довжині, залиште на 1-2 хвилини, змийте.',
//     features: {
//       description: `
// Кондиціонер Pantene Pro-V Smooth з пантенолом розгладжує волосся, надаючи йому шовковистість і блиск. Формула зволожує і полегшує розчісування.

// **Як діє?**

// Пантенол проникає в структуру волосся, зволожуючи і відновлюючи його. Кондиціонер зменшує пухнастість, роблячи волосся слухняним і гладким. Аромат із нотками квітів і фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з шампунем Pantene Pro-V Smooth для максимальної гладкості та блиску.
//       `.trim(),
//       brand: 'Pantene',
//       country: 'США',
//       type: 'Кондиціонер',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Розгладження та зволоження',
//       category: 'Засоби для догляду за волоссям',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 120, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 130, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 140, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 150, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 135, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 125, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 115, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 110, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 62,
//     category: 'hairmask',
//     name: 'Moroccanoil Intense Hydrating Mask',
//     price: 500,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для відновлення.',
//     specs: { volume: '250 мл', brand: 'Moroccanoil', type: 'Для сухого та пошкодженого волосся' },
//     rating: 4.8,
//     views: 180,
//     code: 'MOR062',
//     composition: 'Aqua / Water, Cetearyl Alcohol, Argania Spinosa Kernel Oil, Behentrimonium Chloride, Dimethicone, Sodium Benzoate, Polyquaternium-37, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на чисте вологе волосся, розподіліть по довжині, залиште на 5-7 хвилин, змийте.',
//     features: {
//       description: `
// Маска Moroccanoil Intense Hydrating з аргановою олією інтенсивно зволожує і відновлює сухе та пошкоджене волосся, надаючи йому м’якість і блиск.

// **Як діє?**

// Арганова олія живить і відновлює структуру волосся, зменшуючи посічені кінчики. Маска робить волосся еластичним і слухняним, захищаючи від зовнішніх впливів. Аромат із нотками амбри та ванілі освіжає.

// **Б’юті-поради**

// Використовуйте разом із шампунем Moroccanoil Hydrating для глибокого зволоження.
//       `.trim(),
//       brand: 'Moroccanoil',
//       country: 'Ізраїль',
//       type: 'Маска для волосся',
//       class: 'Преміум',
//       hairType: 'Для сухого та пошкодженого волосся',
//       features: 'Відновлення та зволоження',
//       category: 'Засоби для догляду за волоссям',
//       purpose: 'Зволоження Відновлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Арганова олія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 500, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 520, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 540, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 560, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 530, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 510, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 490, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 480, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 63,
//     category: 'hairoil',
//     name: "L'Oréal Mythic Oil",
//     price: 300,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для блиску.',
//     specs: { volume: '100 мл', brand: "L'Oréal", type: 'Для всіх типів волосся' },
//     rating: 4.6,
//     views: 170,
//     code: 'LOR063',
//     composition: 'Cyclopentasiloxane, Dimethiconol, Argania Spinosa Kernel Oil, Persea Gratissima Oil, Sodium Benzoate, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть 1-2 краплі на вологе або сухе волосся, розподіліть по довжині, не змивайте.',
//     features: {
//       description: `
// Олія L'Oréal Mythic Oil з аргановою та авокадовою оліями додає волоссю блиск і м’якість, не обтяжуючи його. Формула підходить для всіх типів волосся.

// **Як діє?**

// Арганова олія зволожує і живить, а авокадова олія додає блиск і захищає від ламкості. Олія полегшує укладання і зменшує пухнастість. Аромат із нотками ванілі та спецій освіжає.

// **Б’юті-поради**

// Використовуйте перед сушкою феном для додаткового захисту від високих температур.
//       `.trim(),
//       brand: "L'Oréal",
//       country: 'Франція',
//       type: 'Олія для волосся',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Додавання блиску та зволоження',
//       category: 'Засоби для догляду за волоссям',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Арганова олія Авокадова олія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 300, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 320, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 340, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 360, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 330, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 310, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 290, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 280, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 64,
//     category: 'hairserum',
//     name: 'Kerastase Elixir Ultime',
//     price: 800,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для кінчиків.',
//     specs: { volume: '50 мл', brand: 'Kerastase', type: 'Для всіх типів волосся' },
//     rating: 4.9,
//     views: 190,
//     code: 'KER064',
//     composition: 'Cyclopentasiloxane, Dimethiconol, Camellia Sinensis Seed Oil, Marula Oil, Sodium Benzoate, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть 1-2 краплі на сухі або вологі кінчики волосся, не змивайте.',
//     features: {
//       description: `
// Сироватка Kerastase Elixir Ultime з оліями камелії та марули відновлює посічені кінчики, надаючи волоссю блиск і гладкість. Формула захищає від зовнішніх впливів.

// **Як діє?**

// Олія камелії зволожує і додає блиск, а олія марули живить і відновлює кінчики. Сироватка полегшує укладання і захищає від вологості. Аромат із нотками квітів і мускусу освіжає.

// **Б’юті-поради**

// Використовуйте після укладання для завершення образу і додаткового блиску.
//       `.trim(),
//       brand: 'Kerastase',
//       country: 'Франція',
//       type: 'Сироватка для волосся',
//       class: 'Преміум',
//       hairType: 'Для всіх типів волосся',
//       features: 'Відновлення кінчиків та блиск',
//       category: 'Засоби для догляду за волоссям',
//       purpose: 'Відновлення Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія камелії Олія марули',
//     },
//     storePrices: [
//       { name: 'Eva', price: 800, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 820, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 840, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 860, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 830, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 810, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 790, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 780, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 65,
//     category: 'hairspray',
//     name: 'TRESemme Freeze Hold Hairspray',
//     price: 150,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для фіксації.',
//     specs: { volume: '300 мл', brand: 'TRESemme', type: 'Для всіх типів волосся' },
//     rating: 4.5,
//     views: 160,
//     code: 'TRE065',
//     composition: 'Alcohol Denat., Hydrofluorocarbon 152A, VA/Crotonates/Vinyl Neodecanoate Copolymer, Octylacrylamide/Acrylates/Butylaminoethyl Methacrylate Copolymer, Aminomethyl Propanol, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Розпиліть на сухе укладене волосся з відстані 20-30 см, тримайте балон вертикально.',
//     features: {
//       description: `
// Лак для волосся TRESemme Freeze Hold забезпечує сильну фіксацію зачіски, зберігаючи її природний вигляд. Формула стійка до вологості.

// **Як діє?**

// Полімери в складі надійно фіксують зачіску, не склеюючи волосся. Лак швидко висихає, залишаючи волосся рухливим і блискучим. Аромат із нотками фруктів і квітів освіжає.

// **Б’юті-поради**

// Для додаткового об’єму розпиліть лак біля коренів перед укладанням.
//       `.trim(),
//       brand: 'TRESemme',
//       country: 'США',
//       type: 'Лак для волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Сильна фіксація',
//       category: 'Засоби для укладання',
//       purpose: 'Фіксація Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Полімери для фіксації',
//     },
//     storePrices: [
//       { name: 'Eva', price: 150, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 160, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 170, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 180, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 165, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 155, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 145, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 140, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 66,
//     category: 'hairdye',
//     name: 'Garnier Color Naturals',
//     price: 100,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Стійка фарба.',
//     specs: { volume: '100 мл', brand: 'Garnier', type: 'Для всіх типів волосся' },
//     rating: 4.3,
//     views: 200,
//     code: 'GAR066',
//     composition: 'Aqua / Water, Cetearyl Alcohol, Ammonium Hydroxide, Oleic Acid, Sodium Benzoate, Parfum / Fragrance, Linalool, Hexyl Cinnamal, P-Phenylenediamine, Resorcinol.',
//     usage: 'Змішайте фарбу з окислювачем, нанесіть на сухе волосся, залиште на 25-35 хвилин, змийте теплою водою.',
//     features: {
//       description: `
// Фарба Garnier Color Naturals забезпечує стійкий колір і 100% зафарбовування сивини. Формула з оліями живить волосся під час фарбування.

// **Як діє?**

// Аміачна основа забезпечує глибоке проникнення пігменту, а олії зволожують і додають блиск. Фарба зберігає колір до 8 тижнів. Аромат із нотками фруктів освіжає.

// **Б’юті-поради**

// Використовуйте бальзам із набору після фарбування для закріплення кольору.
//       `.trim(),
//       brand: 'Garnier',
//       country: 'Франція',
//       type: 'Фарба для волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Стійке фарбування',
//       category: 'Засоби для фарбування',
//       purpose: 'Фарбування Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Олії для живлення',
//     },
//     storePrices: [
//       { name: 'Eva', price: 100, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 110, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 120, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 130, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 115, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 105, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 95, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 90, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 67,
//     category: 'styling',
//     name: 'Got2b Glued Styling Gel',
//     price: 120,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для укладки.',
//     specs: { volume: '150 мл', brand: 'Got2b', type: 'Для всіх типів волосся' },
//     rating: 4.4,
//     views: 175,
//     code: 'GOT067',
//     composition: 'Aqua / Water, PVP, Acrylates/Hydroxyesters Acrylates Copolymer, Aminomethyl Propanol, Sodium Benzoate, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть невелику кількість на вологе або сухе волосся, сформуйте укладку, дайте висохнути.',
//     features: {
//       description: `
// Гель Got2b Glued Styling Gel забезпечує екстремальну фіксацію для створення стійких укладок. Формула не залишає липкості і легко змивається.

// **Як діє?**

// Полімери в складі фіксують волосся, зберігаючи форму зачіски навіть за високої вологості. Гель додає текстуру і блиск. Аромат із нотками цитрусу освіжає.

// **Б’юті-поради**

// Для максимальної фіксації нанесіть гель на вологе волосся і висушіть феном.
//       `.trim(),
//       brand: 'Got2b',
//       country: 'Німеччина',
//       type: 'Гель для укладки',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Екстремальна фіксація',
//       category: 'Засоби для укладання',
//       purpose: 'Фіксація Для текстури',
//       gender: 'Унісекс',
//       activeIngredients: 'Полімери для фіксації',
//     },
//     storePrices: [
//       { name: 'Eva', price: 120, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 130, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 140, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 150, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 135, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 125, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 115, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 110, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 68,
//     category: 'dryshampoo',
//     name: 'Batiste Dry Shampoo Original',
//     price: 200,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для об’єму.',
//     specs: { volume: '200 мл', brand: 'Batiste', type: 'Для всіх типів волосся' },
//     rating: 4.6,
//     views: 185,
//     code: 'BAT068',
//     composition: 'Butane, Isobutane, Propane, Oryza Sativa Starch, Alcohol Denat., Parfum / Fragrance, Linalool, Hexyl Cinnamal, Distearyldimonium Chloride.',
//     usage: 'Струсіть балон, розпиліть на корені сухого волосся з відстані 30 см, помасажуйте, розчешіть.',
//     features: {
//       description: `
// Сухий шампунь Batiste Dry Shampoo Original освіжає волосся, додаючи об’єм і текстуру без миття. Формула вбирає надлишки себуму.

// **Як діє?**

// Крохмаль рису абсорбує жир, освіжаючи волосся і додаючи об’єм від коренів. Шампунь не залишає білих слідів при правильному нанесенні. Аромат із нотками цитрусу і квітів освіжає.

// **Б’юті-поради**

// Використовуйте перед укладанням для додаткового об’єму і текстури.
//       `.trim(),
//       brand: 'Batiste',
//       country: 'Велика Британія',
//       type: 'Сухий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Освіження та об’єм',
//       category: 'Засоби для догляду за волоссям',
//       purpose: 'Очищення Об’єм',
//       gender: 'Унісекс',
//       activeIngredients: 'Крохмаль рису',
//     },
//     storePrices: [
//       { name: 'Eva', price: 200, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 210, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 220, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 230, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 215, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 205, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 195, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 190, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 69,
//     category: 'hairloss',
//     name: 'Vichy Dercos Anti-Hair Loss',
//     price: 600,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Проти випадіння.',
//     specs: { volume: '200 мл', brand: 'Vichy', type: 'Для всіх типів волосся' },
//     rating: 4.7,
//     views: 195,
//     code: 'VIC069',
//     composition: 'Aqua / Water, Alcohol Denat., Aminexil, Niacinamide, Sodium Benzoate, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на суху або вологу шкіру голови, помасажуйте, не змивайте. Використовуйте щодня протягом 6 тижнів.',
//     features: {
//       description: `
// Засіб Vichy Dercos Anti-Hair Loss з амінексилом зміцнює корені волосся, зменшуючи випадіння. Формула без парабенів підходить для чутливої шкіри.

// **Як діє?**

// Амінексил зміцнює волосяні фолікули, а ніацинамід покращує кровообіг шкіри голови. Засіб стимулює ріст волосся і додає густину. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з шампунем Vichy Dercos Energising для посилення ефекту.
//       `.trim(),
//       brand: 'Vichy',
//       country: 'Франція',
//       type: 'Засіб проти випадіння волосся',
//       class: 'Преміум',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зміцнення коренів',
//       category: 'Засоби для догляду за волоссям',
//       purpose: 'Зміцнення Проти випадіння',
//       gender: 'Унісекс',
//       activeIngredients: 'Амінексил Ніацинамід',
//     },
//     storePrices: [
//       { name: 'Eva', price: 600, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 620, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 640, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 660, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 630, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 610, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 590, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 580, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 70,
//     category: 'shampoos',
//     name: 'Head & Shoulders Citrus Fresh',
//     price: 125,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Проти лупи та для свіжості волосся.',
//     specs: { volume: '400 мл', type: 'Проти лупи', brand: 'Head & Shoulders' },
//     rating: 4.5,
//     views: 210,
//     code: 'HNS070',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Piroctone Olamine, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Head & Shoulders Citrus Fresh з піроктоном оламіном ефективно усуває лупу, залишаючи волосся свіжим і чистим. Формула забезпечує тривалу свіжість.

// **Як діє?**

// Піроктон оламін бореться з лупою, заспокоюючи шкіру голови. Шампунь м’яко очищає, надаючи волоссю блиск і свіжий цитрусовий аромат. Формула підходить для всіх типів волосся.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Head & Shoulders для додаткового зволоження.
//       `.trim(),
//       brand: 'Head & Shoulders',
//       country: 'США',
//       type: 'Шампунь проти лупи',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Проти лупи та очищення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Проти лупи Очищення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Піроктон оламін',
//     },
//     storePrices: [
//       { name: 'Eva', price: 125, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 135, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 145, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 155, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 140, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 130, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 120, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 115, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 71,
//     category: 'shampoos',
//     name: 'Clear Vita Abe Men Cool Sport Menthol',
//     price: 135,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Охолоджуючий ефект для чоловіків.',
//     specs: { volume: '400 мл', type: 'Чоловічий', brand: 'Clear' },
//     rating: 4.4,
//     views: 200,
//     code: 'CLR071',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Menthol, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Clear Vita Abe Men Cool Sport Menthol з ментолом забезпечує охолоджуючий ефект і тривалу свіжість для чоловіків. Формула ефективно очищає і освіжає.

// **Як діє?**

// Ментол освіжає шкіру голови, зменшуючи відчуття жирності. Шампунь м’яко очищає, надаючи волоссю блиск і легкість. Аромат із нотками м’яти та цитрусу освіжає.

// **Б’юті-поради**

// Використовуйте після тренувань для максимального відчуття свіжості.
//       `.trim(),
//       brand: 'Clear',
//       country: 'США',
//       type: 'Чоловічий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Очищення та освіження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Для свіжості',
//       gender: 'Чоловічий',
//       activeIngredients: 'Ментол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 135, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 145, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 155, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 165, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 150, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 140, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 130, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 125, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 72,
//     category: 'shampoos',
//     name: 'Pantene Pro-V Classic Clean',
//     price: 145,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Очищення і живлення волосся.',
//     specs: { volume: '400 мл', type: 'Універсальний', brand: 'Pantene' },
//     rating: 4.5,
//     views: 205,
//     code: 'PAN072',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Panthenol, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Pantene Pro-V Classic Clean з пантенолом забезпечує глибоке очищення і живлення, залишаючи волосся м’яким і блискучим. Формула підходить для всіх типів волосся.

// **Як діє?**

// Пантенол зволожує і зміцнює волосся, а очищаючі компоненти видаляють забруднення і надлишки себуму. Шампунь робить волосся слухняним і здоровим. Аромат із нотками квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Pantene Pro-V Classic Clean для повноцінного догляду.
//       `.trim(),
//       brand: 'Pantene',
//       country: 'США',
//       type: 'Універсальний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Очищення та живлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 145, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 155, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 165, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 175, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 160, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 150, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 140, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 135, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 73,
//     category: 'shampoos',
//     name: 'Herbal Essences Hello Hydration',
//     price: 170,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Інтенсивне зволоження з кокосом.',
//     specs: { volume: '400 мл', type: 'Для сухого волосся', brand: 'Herbal Essences' },
//     rating: 4.6,
//     views: 215,
//     code: 'HER073',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Cocos Nucifera Fruit Extract, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Herbal Essences Hello Hydration.',
//     features: {
//       description: `
// Шампунь Herbal Essences Hello Hydration з екстрактом кокоса інтенсивно зволожує сухе волосся, надаючи йому м’якість і блиск. Формула без парабенів ніжно очищає.

// **Як діє?**

// Екстракт кокоса зволожує і живить волосся, роблячи його більш еластичним і слухняним. Шампунь м’яко очищає, не пересушуючи шкіру голови. Аромат із нотками кокоса та ванілі освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Herbal Essences Hello Hydration для глибокого зволоження.
//       `.trim(),
//       brand: 'Herbal Essences',
//       country: 'США',
//       type: 'Зволожуючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Зволоження та живлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт кокоса',
//     },
//     storePrices: [
//       { name: 'Eva', price: 170, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 180, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 190, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 200, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 185, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 175, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 165, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 160, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 74,
//     category: 'shampoos',
//     name: 'Gliss Kur Oil Nutritive',
//     price: 160,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для довгого і посіченого волосся.',
//     specs: { volume: '250 мл', type: 'Для довгого волосся', brand: 'Schwarzkopf' },
//     rating: 4.5,
//     views: 200,
//     code: 'GLS074',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Argania Spinosa Kernel Oil, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з кондиціонером Gliss Kur Oil Nutritive.',
//     features: {
//       description: `
// Шампунь Gliss Kur Oil Nutritive з аргановою олією живить довге і посічене волосся, зменшуючи ламкість і надаючи блиск. Формула полегшує розчісування.

// **Як діє?**

// Арганова олія відновлює структуру волосся, зволожуючи і зміцнюючи кінчики. Шампунь м’яко очищає, роблячи волосся гладким і слухняним. Аромат із нотками ванілі освіжає.

// **Б’юті-поради**

// Поєднуйте з олією Gliss Kur Oil Elixir для додаткового живлення кінчиків.
//       `.trim(),
//       brand: 'Schwarzkopf',
//       country: 'Німеччина',
//       type: 'Живильний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для довгого та посіченого волосся',
//       features: 'Відновлення та живлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Відновлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Арганова олія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 160, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 170, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 180, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 190, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 175, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 165, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 155, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 150, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 75,
//     category: 'shampoos',
//     name: 'Natura Siberica Oblepikha',
//     price: 190,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Живлення з обліпихою.',
//     specs: { volume: '400 мл', type: 'Для всіх типів волосся', brand: 'Natura Siberica' },
//     rating: 4.6,
//     views: 220,
//     code: 'NAT075',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hippophae Rhamnoides Fruit Oil, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Для кращого результату використовуйте з бальзамом Natura Siberica Oblepikha.',
//     features: {
//       description: `
// Шампунь Natura Siberica Oblepikha з олією обліпихи живить і зміцнює волосся, надаючи йому блиск і силу. Формула з натуральними компонентами м’яко очищає.

// **Як діє?**

// Олія обліпихи багата вітамінами, які живлять волосся і шкіру голови. Шампунь відновлює пошкоджене волосся, роблячи його м’яким і еластичним. Аромат із нотками ягід освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Natura Siberica Oblepikha для інтенсивного відновлення.
//       `.trim(),
//       brand: 'Natura Siberica',
//       country: 'Росія',
//       type: 'Живильний шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Живлення та зміцнення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Живлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія обліпихи',
//     },
//     storePrices: [
//       { name: 'Eva', price: 190, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 200, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 210, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 220, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 205, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 195, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 185, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 180, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 76,
//     category: 'shampoos',
//     name: 'Yves Rocher Repair Shampoo',
//     price: 220,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зміцнення волосся з жожоба.',
//     specs: { volume: '300 мл', type: 'Для пошкодженого волосся', brand: 'Yves Rocher' },
//     rating: 4.6,
//     views: 180,
//     code: 'YVR076',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Simmondsia Chinensis Seed Oil, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте з кондиціонером Yves Rocher Repair для кращого результату.',
//     features: {
//       description: `
// Шампунь Yves Rocher Repair з олією жожоба відновлює пошкоджене волосся, зміцнюючи його структуру та надаючи блиск. Формула з натуральними компонентами ніжно очищає.

// **Як діє?**

// Олія жожоба живить і зволожує волосся, зменшуючи ламкість і посічені кінчики. Шампунь робить волосся м’яким і слухняним. Аромат із нотками трав і квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Yves Rocher Repair для інтенсивного відновлення.
//       `.trim(),
//       brand: 'Yves Rocher',
//       country: 'Франція',
//       type: 'Відновлюючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та зміцнення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія жожоба',
//     },
//     storePrices: [
//       { name: 'Eva', price: 220, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 230, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 240, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 250, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 235, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 225, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 215, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 210, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 77,
//     category: 'shampoos',
//     name: 'Oriflame Love Nature Wheat & Coconut',
//     price: 130,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для нормального волосся.',
//     specs: { volume: '250 мл', type: 'Універсальний', brand: 'Oriflame' },
//     rating: 4.3,
//     views: 160,
//     code: 'ORI077',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Cocos Nucifera Oil, Triticum Vulgare Germ Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Oriflame Love Nature Wheat & Coconut з оліями пшениці та кокоса ніжно очищає нормальне волосся, надаючи йому м’якість і блиск. Формула з натуральними компонентами.

// **Як діє?**

// Олія кокоса зволожує, а олія пшениці зміцнює волосся, роблячи його гладким. Шампунь не пересушує шкіру голови. Аромат із нотками кокоса та ванілі освіжає.

// **Б’юті-поради**

// Використовуйте з кондиціонером Oriflame Love Nature для додаткового живлення.
//       `.trim(),
//       brand: 'Oriflame',
//       country: 'Швеція',
//       type: 'Універсальний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для нормального волосся',
//       features: 'Очищення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія кокоса Олія пшениці',
//     },
//     storePrices: [
//       { name: 'Eva', price: 130, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 140, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 150, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 160, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 145, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 135, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 125, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 120, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 78,
//     category: 'shampoos',
//     name: 'CHI Infra Shampoo',
//     price: 310,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Професійний догляд за волоссям.',
//     specs: { volume: '355 мл', type: 'Професійний', brand: 'CHI' },
//     rating: 4.8,
//     views: 200,
//     code: 'CHI078',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Silk, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте з кондиціонером CHI Infra для професійного догляду.',
//     features: {
//       description: `
// Шампунь CHI Infra Shampoo з гідролізованим шовком забезпечує професійний догляд, зволожуючи і зміцнюючи волосся. Формула підходить для всіх типів волосся.

// **Як діє?**

// Гідролізований шовк відновлює структуру волосся, надаючи йому гладкість і блиск. Шампунь ніжно очищає, не порушуючи природний баланс. Аромат із нотками квітів і фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою CHI Infra Treatment для глибокого відновлення.
//       `.trim(),
//       brand: 'CHI',
//       country: 'США',
//       type: 'Професійний шампунь',
//       class: 'Преміум',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зволоження та відновлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Відновлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований шовк',
//     },
//     storePrices: [
//       { name: 'Eva', price: 310, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 320, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 330, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 340, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 325, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 315, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 305, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 300, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 79,
//     category: 'shampoos',
//     name: 'Revlon Flex Keratin',
//     price: 140,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь із кератином.',
//     specs: { volume: '400 мл', type: 'Для всіх типів волосся', brand: 'Revlon' },
//     rating: 4.4,
//     views: 170,
//     code: 'REV079',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Revlon Flex Keratin з гідролізованим кератином зміцнює волосся, надаючи йому гладкість і блиск. Формула полегшує розчісування.

// **Як діє?**

// Кератин відновлює пошкоджену структуру волосся, заповнюючи пористі ділянки. Шампунь м’яко очищає, роблячи волосся слухняним. Аромат із нотками фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Revlon Flex Keratin для посилення ефекту.
//       `.trim(),
//       brand: 'Revlon',
//       country: 'США',
//       type: 'Шампунь з кератином',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зміцнення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 140, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 150, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 160, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 170, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 155, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 145, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 135, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 130, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 80,
//     category: 'shampoos',
//     name: 'Londa Deep Moisture',
//     price: 250,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Глибоке зволоження волосся.',
//     specs: { volume: '250 мл', type: 'Для сухого волосся', brand: 'Londa' },
//     rating: 4.5,
//     views: 185,
//     code: 'LON080',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Honey Extract, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте з кондиціонером Londa Deep Moisture для кращого результату.',
//     features: {
//       description: `
// Шампунь Londa Deep Moisture з екстрактом меду інтенсивно зволожує сухе волосся, надаючи йому м’якість і еластичність. Формула ніжно очищає.

// **Як діє?**

// Екстракт меду живить і зволожує волосся, зменшуючи сухість і ламкість. Шампунь робить волосся гладким і блискучим. Аромат із нотками меду та квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Londa Deep Moisture для глибокого зволоження.
//       `.trim(),
//       brand: 'Londa',
//       country: 'Німеччина',
//       type: 'Зволожуючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Зволоження та живлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт меду',
//     },
//     storePrices: [
//       { name: 'Eva', price: 250, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 260, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 270, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 280, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 265, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 255, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 245, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 240, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 81,
//     category: 'shampoos',
//     name: 'Estel Curex Classic',
//     price: 170,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Щоденний догляд.',
//     specs: { volume: '300 мл', type: 'Універсальний', brand: 'Estel' },
//     rating: 4.4,
//     views: 175,
//     code: 'EST081',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Panthenol, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Estel Curex Classic з пантенолом забезпечує м’яке очищення і догляд за всіма типами волосся. Формула зволожує і додає блиск.

// **Як діє?**

// Пантенол зволожує і зміцнює волосся, роблячи його більш еластичним. Шампунь ніжно очищає, не пересушуючи шкіру голови. Аромат із нотками фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з бальзамом Estel Curex Classic для повноцінного догляду.
//       `.trim(),
//       brand: 'Estel',
//       country: 'Росія',
//       type: 'Універсальний шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Очищення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 170, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 180, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 190, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 200, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 185, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 175, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 165, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 160, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 82,
//     category: 'shampoos',
//     name: 'Kapous Studio Professional Daily',
//     price: 190,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для щоденного використання.',
//     specs: { volume: '350 мл', type: 'Щоденний', brand: 'Kapous' },
//     rating: 4.5,
//     views: 180,
//     code: 'KAP082',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Kapous Studio Professional Daily забезпечує м’яке очищення для щоденного догляду за всіма типами волосся. Формула зберігає природний баланс вологи.

// **Як діє?**

// Шампунь ніжно очищає, не пересушуючи волосся і шкіру голови. Формула додає блиск і полегшує розчісування. Аромат із нотками квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Kapous Studio для додаткового зволоження.
//       `.trim(),
//       brand: 'Kapous',
//       country: 'Італія',
//       type: 'Щоденний шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Очищення та догляд',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'М’які очищаючі компоненти',
//     },
//     storePrices: [
//       { name: 'Eva', price: 190, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 200, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 210, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 220, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 205, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 195, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 185, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 180, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 83,
//     category: 'shampoos',
//     name: 'Dercos Anti-Dandruff DS',
//     price: 280,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Медичний шампунь від лупи.',
//     specs: { volume: '200 мл', type: 'Проти лупи', brand: 'Vichy' },
//     rating: 4.7,
//     views: 190,
//     code: 'VIC083',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Selenium Sulfide, Sodium Benzoate, Salicylic Acid, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, залиште на 2 хвилини, змийте. Використовуйте 2-3 рази на тиждень.',
//     features: {
//       description: `
// Шампунь Vichy Dercos Anti-Dandruff DS з селеном і саліциловою кислотою ефективно усуває лупу і заспокоює шкіру голови. Формула медичного призначення.

// **Як діє?**

// Селен бореться з лупою, а саліцилова кислота відлущує ороговілу шкіру. Шампунь зменшує свербіж і відновлює баланс шкіри голови. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Для підтримання ефекту використовуйте шампунь регулярно протягом 4 тижнів.
//       `.trim(),
//       brand: 'Vichy',
//       country: 'Франція',
//       type: 'Медичний шампунь проти лупи',
//       class: 'Преміум',
//       hairType: 'Для всіх типів волосся',
//       features: 'Проти лупи та заспокоєння',
//       category: 'Засоби для миття волосся',
//       purpose: 'Проти лупи Очищення Заспокоєння',
//       gender: 'Унісекс',
//       activeIngredients: 'Селен Саліцилова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 280, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 290, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 300, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 310, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 295, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 285, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 275, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 270, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 84,
//     category: 'shampoos',
//     name: 'BioSilk Silk Therapy',
//     price: 270,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь з шовком.',
//     specs: { volume: '207 мл', type: 'Для блиску', brand: 'BioSilk' },
//     rating: 4.6,
//     views: 195,
//     code: 'BIO084',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Silk, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте з кондиціонером BioSilk Silk Therapy для кращого результату.',
//     features: {
//       description: `
// Шампунь BioSilk Silk Therapy з гідролізованим шовком додає волоссю блиск і гладкість, відновлюючи його структуру. Формула ніжно очищає.

// **Як діє?**

// Гідролізований шовк зволожує і зміцнює волосся, роблячи його шовковистим. Шампунь полегшує розчісування і захищає від зовнішніх впливів. Аромат із нотками ванілі освіжає.

// **Б’юті-поради**

// Поєднуйте з сироваткою BioSilk Silk Therapy для додаткового блиску.
//       `.trim(),
//       brand: 'BioSilk',
//       country: 'США',
//       type: 'Шампунь для блиску',
//       class: 'Преміум',
//       hairType: 'Для всіх типів волосся',
//       features: 'Блиск та відновлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Відновлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований шовк',
//     },
//     storePrices: [
//       { name: 'Eva', price: 270, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 280, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 290, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 300, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 285, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 275, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 265, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 260, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 85,
//     category: 'shampoos',
//     name: 'Tigi Bed Head Urban Antidotes',
//     price: 260,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення та живлення волосся.',
//     specs: { volume: '250 мл', type: 'Для пошкодженого волосся', brand: 'Tigi' },
//     rating: 4.6,
//     views: 185,
//     code: 'TIG085',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте з кондиціонером Tigi Bed Head Urban Antidotes.',
//     features: {
//       description: `
// Шампунь Tigi Bed Head Urban Antidotes з гідролізованим кератином відновлює пошкоджене волосся, надаючи йому силу і блиск. Формула живить і зволожує.

// **Як діє?**

// Кератин заповнює пошкоджені ділянки волосся, а зволожуючі компоненти роблять його м’яким і еластичним. Шампунь захищає від зовнішніх впливів. Аромат із нотками фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Tigi Bed Head Urban Antidotes для інтенсивного відновлення.
//       `.trim(),
//       brand: 'Tigi',
//       country: 'США',
//       type: 'Відновлюючий шампунь',
//       class: 'Преміум',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та живлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 260, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 270, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 280, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 290, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 275, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 265, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 255, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 250, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 86,
//     category: 'shampoos',
//     name: 'Dr. Sante Macadamia Hair',
//     price: 120,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'З олією макадамії.',
//     specs: { volume: '250 мл', type: 'Для сухого волосся', brand: 'Dr. Sante' },
//     rating: 4.3,
//     views: 165,
//     code: 'DRS086',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Macadamia Integrifolia Seed Oil, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте з бальзамом Dr. Sante Macadamia Hair.',
//     features: {
//       description: `
// Шампунь Dr. Sante Macadamia Hair з олією макадамії зволожує сухе волосся, надаючи йому м’якість і блиск. Формула ніжно очищає.

// **Як діє?**

// Олія макадамії живить і відновлює сухе волосся, зменшуючи ламкість. Шампунь робить волосся гладким і еластичним. Аромат із нотками горіхів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Dr. Sante Macadamia Hair для глибокого зволоження.
//       `.trim(),
//       brand: 'Dr. Sante',
//       country: 'Україна',
//       type: 'Зволожуючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Зволоження та відновлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія макадамії',
//     },
//     storePrices: [
//       { name: 'Eva', price: 120, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 130, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 140, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 150, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 135, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 125, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 115, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 110, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 87,
//     category: 'shampoos',
//     name: 'Farmona Herbal Care Burdock',
//     price: 100,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для зміцнення коренів волосся.',
//     specs: { volume: '330 мл', type: 'Зміцнюючий', brand: 'Farmona' },
//     rating: 4.2,
//     views: 160,
//     code: 'FAR087',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Arctium Lappa Root Extract, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для зміцнення волосся.',
//     features: {
//       description: `
// Шампунь Farmona Herbal Care Burdock з екстрактом лопуха зміцнює корені волосся, зменшуючи випадіння. Формула з натуральними компонентами.

// **Як діє?**

// Екстракт лопуха стимулює кровообіг шкіри голови, зміцнюючи волосяні фолікули. Шампунь очищає і додає блиск. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з бальзамом Farmona Herbal Care Burdock для посилення ефекту.
//       `.trim(),
//       brand: 'Farmona',
//       country: 'Польща',
//       type: 'Зміцнюючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зміцнення коренів',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Очищення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт лопуха',
//     },
//     storePrices: [
//       { name: 'Eva', price: 100, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 110, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 120, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 130, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 115, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 105, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 95, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 90, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 88,
//     category: 'shampoos',
//     name: 'Green Pharmacy Chamomile',
//     price: 90,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для світлого волосся.',
//     specs: { volume: '350 мл', type: 'Для світлого волосся', brand: 'Green Pharmacy' },
//     rating: 4.2,
//     views: 155,
//     code: 'GRP088',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Chamomilla Recutita Flower Extract, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Green Pharmacy Chamomile з екстрактом ромашки ніжно очищає світле волосся, підкреслюючи його природний блиск. Формула з натуральними компонентами.

// **Як діє?**

// Екстракт ромашки додає блиск і м’якість, заспокоюючи шкіру голови. Шампунь підтримує яскравість світлого волосся. Аромат із нотками ромашки освіжає.

// **Б’юті-поради**

// Поєднуйте з бальзамом Green Pharmacy Chamomile для додаткового догляду.
//       `.trim(),
//       brand: 'Green Pharmacy',
//       country: 'Україна',
//       type: 'Шампунь для світлого волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для світлого волосся',
//       features: 'Очищення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Для блиску Заспокоєння',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт ромашки',
//     },
//     storePrices: [
//       { name: 'Eva', price: 90, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 100, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 110, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 120, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 105, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 95, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 85, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 80, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 89,
//     category: 'shampoos',
//     name: 'Balea Feuchtigkeit Shampoo',
//     price: 80,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження з алое вера.',
//     specs: { volume: '300 мл', type: 'Для сухого волосся', brand: 'Balea' },
//     rating: 4.1,
//     views: 150,
//     code: 'BAL089',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Aloe Barbadensis Leaf Juice, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Balea Feuchtigkeit Shampoo з алое вера зволожує сухе волосся, надаючи йому м’якість і блиск. Формула ніжно очищає.

// **Як діє?**

// Сік алое вера зволожує і заспокоює шкіру голови, зменшуючи сухість. Шампунь робить волосся гладким і слухняним. Аромат із нотками алое освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Balea Feuchtigkeit для посилення зволоження.
//       `.trim(),
//       brand: 'Balea',
//       country: 'Німеччина',
//       type: 'Зволожуючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Зволоження та догляд',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Сік алое вера',
//     },
//     storePrices: [
//       { name: 'Eva', price: 80, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 90, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 100, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 110, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 95, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 85, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 75, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 70, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 90,
//     category: 'shampoos',
//     name: 'Palmolive Naturals Anti-Dandruff',
//     price: 110,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь проти лупи з екстрактами трав.',
//     specs: { volume: '400 мл', type: 'Проти лупи', brand: 'Palmolive' },
//     rating: 4.3,
//     views: 165,
//     code: 'PAL090',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Zinc Pyrithione, Chamomilla Recutita Flower Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, залиште на 1-2 хвилини, змийте. Використовуйте 2-3 рази на тиждень.',
//     features: {
//       description: `
// Шампунь Palmolive Naturals Anti-Dandruff з екстрактами трав і цинком піритіоном ефективно бореться з лупою, заспокоюючи шкіру голови. Формула м’яко очищає.

// **Як діє?**

// Цинк піритіон усуває лупу, а екстракт ромашки заспокоює шкіру. Шампунь залишає волосся чистим і свіжим. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Для найкращого результату використовуйте разом з кондиціонером Palmolive Naturals.
//       `.trim(),
//       brand: 'Palmolive',
//       country: 'США',
//       type: 'Шампунь проти лупи',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Проти лупи та очищення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Проти лупи Очищення Заспокоєння',
//       gender: 'Унісекс',
//       activeIngredients: 'Цинк піритіон Екстракт ромашки',
//     },
//     storePrices: [
//       { name: 'Eva', price: 110, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 120, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 130, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 140, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 125, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 115, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 105, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 100, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 91,
//     category: 'shampoos',
//     name: 'Fa Men Sport',
//     price: 95,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Свіжість і очищення після тренувань.',
//     specs: { volume: '250 мл', type: 'Чоловічий', brand: 'Fa' },
//     rating: 4.2,
//     views: 150,
//     code: 'FAM091',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Benzoate, Polyquaternium-10, Menthol, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Fa Men Sport з ментолом забезпечує свіжість і глибоке очищення після тренувань. Формула освіжає і тонізує шкіру голови.

// **Як діє?**

// Ментол дарує відчуття прохолоди, а очищаючі компоненти видаляють забруднення і піт. Шампунь залишає волосся чистим і свіжим. Аромат із нотками цитрусів і ментолу бадьорить.

// **Б’юті-поради**

// Використовуйте після занять спортом для максимальної свіжості.
//       `.trim(),
//       brand: 'Fa',
//       country: 'Німеччина',
//       type: 'Чоловічий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Очищення та свіжість',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Освіження',
//       gender: 'Чоловічий',
//       activeIngredients: 'Ментол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 95, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 105, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 115, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 125, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 110, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 100, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 90, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 85, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 92,
//     category: 'shampoos',
//     name: 'Head & Shoulders Men Ultra',
//     price: 140,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Інтенсивне очищення для чоловіків.',
//     specs: { volume: '450 мл', type: 'Чоловічий', brand: 'Head & Shoulders' },
//     rating: 4.5,
//     views: 180,
//     code: 'HNS092',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Zinc Pyrithione, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Head & Shoulders Men Ultra з цинком піритіоном забезпечує інтенсивне очищення і захист від лупи для чоловіків. Формула освіжає шкіру голови.

// **Як діє?**

// Цинк піритіон бореться з лупою і свербінням, а очищаючі компоненти видаляють надлишки жиру. Шампунь залишає волосся чистим і здоровим. Аромат із нотками ментолу бадьорить.

// **Б’юті-поради**

// Використовуйте регулярно для підтримання здоров’я шкіри голови.
//       `.trim(),
//       brand: 'Head & Shoulders',
//       country: 'США',
//       type: 'Чоловічий шампунь проти лупи',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Проти лупи та очищення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Проти лупи Очищення Освіження',
//       gender: 'Чоловічий',
//       activeIngredients: 'Цинк піритіон',
//     },
//     storePrices: [
//       { name: 'Eva', price: 140, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 150, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 160, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 170, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 155, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 145, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 135, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 130, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 93,
//     category: 'shampoos',
//     name: 'Timotei Pure',
//     price: 100,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зелений чай для легкості волосся.',
//     specs: { volume: '400 мл', type: 'Для нормального волосся', brand: 'Timotei' },
//     rating: 4.3,
//     views: 160,
//     code: 'TIM093',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Camellia Sinensis Leaf Extract, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Timotei Pure з екстрактом зеленого чаю м’яко очищає нормальне волосся, надаючи йому легкість і свіжість. Формула без силіконів.

// **Як діє?**

// Екстракт зеленого чаю освіжає і тонізує шкіру голови, зберігаючи природний баланс вологи. Шампунь робить волосся легким і блискучим. Аромат із нотками зеленого чаю освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Timotei Pure для додаткового догляду.
//       `.trim(),
//       brand: 'Timotei',
//       country: 'Велика Британія',
//       type: 'Шампунь для нормального волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для нормального волосся',
//       features: 'Очищення та легкість',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Для блиску Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт зеленого чаю',
//     },
//     storePrices: [
//       { name: 'Eva', price: 100, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 110, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 120, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 130, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 115, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 105, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 95, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 90, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 94,
//     category: 'shampoos',
//     name: 'Ziaja Olive Shampoo',
//     price: 85,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Делікатне очищення з оливковою олією.',
//     specs: { volume: '400 мл', type: 'Універсальний', brand: 'Ziaja' },
//     rating: 4.2,
//     views: 155,
//     code: 'ZIA094',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Olea Europaea Fruit Oil, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Ziaja Olive Shampoo з оливковою олією м’яко очищає і зволожує волосся, надаючи йому м’якість і блиск. Формула підходить для всіх типів волосся.

// **Як діє?**

// Оливкова олія живить і зволожує волосся, роблячи його гладким і слухняним. Шампунь ніжно очищає, не пересушуючи шкіру голови. Аромат із нотками оливок освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Ziaja Olive для додаткового зволоження.
//       `.trim(),
//       brand: 'Ziaja',
//       country: 'Польща',
//       type: 'Універсальний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зволоження та очищення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Очищення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Оливкова олія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 85, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 95, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 105, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 115, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 100, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 90, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 80, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 75, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 95,
//     category: 'shampoos',
//     name: 'Sylveco Birch Shampoo',
//     price: 180,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Натуральний шампунь з екстрактом берези.',
//     specs: { volume: '300 мл', type: 'Натуральний', brand: 'Sylveco' },
//     rating: 4.4,
//     views: 170,
//     code: 'SYL095',
//     composition: 'Aqua / Water, Lauryl Glucoside, Betula Alba Leaf Extract, Cocamidopropyl Betaine, Sodium Benzoate, Panthenol, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для зміцнення волосся.',
//     features: {
//       description: `
// Шампунь Sylveco Birch Shampoo з екстрактом берези зміцнює волосся і заспокоює шкіру голови. Натуральна формула без сульфатів.

// **Як діє?**

// Екстракт берези стимулює ріст волосся і зменшує випадіння, а пантенол зволожує. Шампунь м’яко очищає, зберігаючи природний баланс. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з бальзамом Sylveco Birch для комплексного догляду.
//       `.trim(),
//       brand: 'Sylveco',
//       country: 'Польща',
//       type: 'Натуральний шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зміцнення та очищення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Очищення Заспокоєння',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт берези Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 180, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 190, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 200, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 210, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 195, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 185, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 175, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 170, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 96,
//     category: 'shampoos',
//     name: 'Johnson’s Baby Shampoo',
//     price: 75,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'М’який шампунь для дітей.',
//     specs: { volume: '500 мл', type: 'Дитячий', brand: 'Johnson’s' },
//     rating: 4.6,
//     views: 200,
//     code: 'JOH096',
//     composition: 'Aqua / Water, Cocamidopropyl Betaine, Sodium Laureth Sulfate, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для дітей і дорослих.',
//     features: {
//       description: `
// Шампунь Johnson’s Baby Shampoo з м’якою формулою ніжно очищає дитяче волосся, не викликаючи подразнень. Формула "без сліз" протестована дерматологами.

// **Як діє?**

// М’які очищаючі компоненти дбайливо очищають волосся і шкіру голови, зберігаючи природний баланс вологи. Шампунь залишає волосся м’яким і чистим. Аромат ніжний і ненав’язливий.

// **Б’юті-поради**

// Використовуйте для дітей від 1 року або як делікатний шампунь для дорослих.
//       `.trim(),
//       brand: 'Johnson’s',
//       country: 'США',
//       type: 'Дитячий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'М’яке очищення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Заспокоєння',
//       gender: 'Дитячий Унісекс',
//       activeIngredients: 'М’які очищаючі компоненти',
//     },
//     storePrices: [
//       { name: 'Eva', price: 75, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 85, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 95, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 105, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 90, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 80, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 70, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 65, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 97,
//     category: 'shampoos',
//     name: 'Batiste Cherry Dry Shampoo',
//     price: 160,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Сухий шампунь з ароматом вишні.',
//     specs: { volume: '200 мл', type: 'Сухий шампунь', brand: 'Batiste' },
//     rating: 4.5,
//     views: 190,
//     code: 'BAT097',
//     composition: 'Butane, Isobutane, Propane, Oryza Sativa Starch, Alcohol Denat., Parfum / Fragrance, Distearyldimonium Chloride, Cetrimonium Chloride, Linalool, Hexyl Cinnamal.',
//     usage: 'Струсіть балон, розпиліть на корені волосся з відстані 30 см, помасажуйте, розчешіть. Не змивати.',
//     features: {
//       description: `
// Сухий шампунь Batiste Cherry Dry Shampoo освіжає волосся, додаючи об’єм і аромат вишні. Формула поглинає надлишки жиру.

// **Як діє?**

// Рисовий крохмаль абсорбує жир, надаючи волоссю свіжість і об’єм. Шампунь ідеально підходить для швидкого оновлення зачіски. Аромат вишні освіжає і бадьорить.

// **Б’юті-поради**

// Використовуйте між миттям волосся для підтримання свіжості.
//       `.trim(),
//       brand: 'Batiste',
//       country: 'Велика Британія',
//       type: 'Сухий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Освіження та об’єм',
//       category: 'Засоби для миття волосся',
//       purpose: 'Освіження Для об’єму',
//       gender: 'Унісекс',
//       activeIngredients: 'Рисовий крохмаль',
//     },
//     storePrices: [
//       { name: 'Eva', price: 160, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 170, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 180, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 190, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 175, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 165, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 155, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 150, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 98,
//     category: 'shampoos',
//     name: 'Himalaya Herbals Protein Shampoo',
//     price: 120,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь з протеїнами.',
//     specs: { volume: '400 мл', type: 'Для всіх типів волосся', brand: 'Himalaya' },
//     rating: 4.3,
//     views: 165,
//     code: 'HIM098',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Cicer Arietinum Seed Extract, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Himalaya Herbals Protein Shampoo з екстрактом нуту зміцнює волосся, надаючи йому силу і блиск. Формула з натуральними компонентами.

// **Як діє?**

// Протеїни нуту живлять волосяні фолікули, зменшуючи ламкість. Шампунь м’яко очищає, роблячи волосся здоровим. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Himalaya Herbals для комплексного догляду.
//       `.trim(),
//       brand: 'Himalaya',
//       country: 'Індія',
//       type: 'Шампунь з протеїнами',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зміцнення та очищення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Очищення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт нуту',
//     },
//     storePrices: [
//       { name: 'Eva', price: 120, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 130, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 140, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 150, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 135, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 125, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 115, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 110, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 99,
//     category: 'shampoos',
//     name: 'Aveeno Scalp Soothing Shampoo',
//     price: 230,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Заспокоює шкіру голови.',
//     specs: { volume: '354 мл', type: 'Для чутливої шкіри', brand: 'Aveeno' },
//     rating: 4.6,
//     views: 185,
//     code: 'AVE099',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Avena Sativa Kernel Extract, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для заспокоєння шкіри голови.',
//     features: {
//       description: `
// Шампунь Aveeno Scalp Soothing Shampoo з екстрактом вівса заспокоює чутливу шкіру голови, зволожуючи волосся. Формула протестована дерматологами.

// **Як діє?**

// Екстракт вівса зменшує подразнення і свербіж, а зволожуючі компоненти роблять волосся м’яким. Шампунь ніжно очищає, не викликаючи сухості. Аромат ніжний і ненав’язливий.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Aveeno для комплексного догляду.
//       `.trim(),
//       brand: 'Aveeno',
//       country: 'США',
//       type: 'Шампунь для чутливої шкіри',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Заспокоєння та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Заспокоєння Зволоження Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт вівса',
//     },
//     storePrices: [
//       { name: 'Eva', price: 230, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 240, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 250, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 260, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 245, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 235, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 225, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 220, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 100,
//     category: 'shampoos',
//     name: 'OGX Coconut Milk',
//     price: 200,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Живлення з кокосовим молоком.',
//     specs: { volume: '385 мл', type: 'Для сухого волосся', brand: 'OGX' },
//     rating: 4.5,
//     views: 180,
//     code: 'OGX100',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Cocos Nucifera Milk, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте з кондиціонером OGX Coconut Milk.',
//     features: {
//       description: `
// Шампунь OGX Coconut Milk з кокосовим молоком живить сухе волосся, надаючи йому м’якість і блиск. Формула без сульфатів ніжно очищає.

// **Як діє?**

// Кокосове молоко зволожує і відновлює сухе волосся, роблячи його гладким. Шампунь зменшує ламкість і додає еластичність. Аромат із нотками кокоса освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою OGX Coconut Milk для глибокого живлення.
//       `.trim(),
//       brand: 'OGX',
//       country: 'США',
//       type: 'Зволожуючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Живлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Пом’якшення',
//       gender: 'Унісекс',
//       activeIngredients: 'Кокосове молоко',
//     },
//     storePrices: [
//       { name: 'Eva', price: 200, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 210, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 220, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 230, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 215, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 205, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 195, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 190, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 101,
//     category: 'shampoos',
//     name: 'Tresemme Keratin Smooth',
//     price: 180,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Згладжує волосся з кератином.',
//     specs: { volume: '400 мл', type: 'Для неслухняного волосся', brand: 'TRESemmé' },
//     rating: 4.4,
//     views: 175,
//     code: 'TRE101',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте з кондиціонером TRESemmé Keratin Smooth.',
//     features: {
//       description: `
// Шампунь TRESemmé Keratin Smooth з гідролізованим кератином згладжує неслухняне волосся, надаючи йому блиск і слухняність. Формула контролює пухнастість.

// **Як діє?**

// Кератин заповнює пористі ділянки волосся, роблячи його гладким і шовковистим. Шампунь полегшує укладання. Аромат із нотками квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з сироваткою TRESemmé Keratin Smooth для тривалого ефекту.
//       `.trim(),
//       brand: 'TRESemmé',
//       country: 'США',
//       type: 'Шампунь для неслухняного волосся',
//       class: 'Мідл-маркет',
//       hairType: 'Для неслухняного волосся',
//       features: 'Згладжування та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Згладжування Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 180, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 190, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 200, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 210, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 195, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 185, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 175, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 170, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 102,
//     category: 'shampoos',
//     name: "L'Oréal Elvive Dream Lengths",
//     price: 150,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зміцнення довгого волосся.',
//     specs: { volume: '400 мл', type: 'Для довгого волосся', brand: "L'Oréal" },
//     rating: 4.4,
//     views: 170,
//     code: 'LOR102',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте з кондиціонером L’Oréal Elvive Dream Lengths.',
//     features: {
//       description: `
// Шампунь L’Oréal Elvive Dream Lengths з кератином зміцнює довге волосся, зменшуючи посічені кінчики. Формула допомагає зберегти довжину.

// **Як діє?**

// Кератин відновлює структуру волосся, роблячи його міцнішим і блискучим. Шампунь полегшує розчісування довгого волосся. Аромат із нотками фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою L’Oréal Elvive Dream Lengths для інтенсивного догляду.
//       `.trim(),
//       brand: "L'Oréal",
//       country: 'Франція',
//       type: 'Шампунь для довгого волосся',
//       class: 'Мідл-маркет',
//       hairType: 'Для довгого волосся',
//       features: 'Зміцнення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 150, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 160, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 170, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 180, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 165, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 155, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 145, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 140, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 103,
//     category: 'shampoos',
//     name: 'Natura Siberica Neutral',
//     price: 160,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Гіпоалергенний шампунь без ароматів.',
//     specs: { volume: '400 мл', type: 'Натуральний', brand: 'Natura Siberica' },
//     rating: 4.5,
//     views: 175,
//     code: 'NAT103',
//     composition: 'Aqua / Water, Lauryl Glucoside, Cocamidopropyl Betaine, Hydrolyzed Wheat Protein, Sodium Benzoate, Panthenol, Citric Acid.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Natura Siberica Neutral з гідролізованим пшеничним протеїном м’яко очищає чутливу шкіру голови. Гіпоалергенна формула без ароматів.

// **Як діє?**

// Пшеничний протеїн зволожує і зміцнює волосся, а пантенол заспокоює шкіру. Шампунь ідеально підходить для чутливої шкіри. Без аромату для максимального комфорту.

// **Б’юті-поради**

// Поєднуйте з бальзамом Natura Siberica Neutral для делікатного догляду.
//       `.trim(),
//       brand: 'Natura Siberica',
//       country: 'Росія',
//       type: 'Гіпоалергенний шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Заспокоєння та очищення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Заспокоєння Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований пшеничний протеїн Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 160, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 170, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 180, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 190, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 175, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 165, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 155, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 150, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 104,
//     category: 'shampoos',
//     name: 'Head & Shoulders Apple Fresh',
//     price: 125,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Проти лупи з ароматом яблука.',
//     specs: { volume: '400 мл', type: 'Проти лупи', brand: 'Head & Shoulders' },
//     rating: 4.4,
//     views: 170,
//     code: 'HNS104',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Zinc Pyrithione, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно.',
//     features: {
//       description: `
// Шампунь Head & Shoulders Apple Fresh з цинком піритіоном ефективно усуває лупу, залишаючи свіжий аромат яблука. Формула освіжає шкіру голови.

// **Як діє?**

// Цинк піритіон бореться з лупою і свербінням, а очищаючі компоненти забезпечують чистоту. Шампунь залишає волосся м’яким і блискучим. Аромат зеленого яблука освіжає.

// **Б’юті-поради**

// Використовуйте 2-3 рази на тиждень для підтримання здоров’я шкіри голови.
//       `.trim(),
//       brand: 'Head & Shoulders',
//       country: 'США',
//       type: 'Шампунь проти лупи',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Проти лупи та очищення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Проти лупи Очищення Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Цинк піритіон',
//     },
//     storePrices: [
//       { name: 'Eva', price: 125, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 135, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 145, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 155, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 140, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 130, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 120, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 115, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 105,
//     category: 'shampoos',
//     name: 'Klorane Dry Shampoo with Oat Milk',
//     price: 240,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Сухий шампунь з вівсяним молоком.',
//     specs: { volume: '150 мл', type: 'Сухий шампунь', brand: 'Klorane' },
//     rating: 4.6,
//     views: 190,
//     code: 'KLO105',
//     composition: 'Butane, Isobutane, Propane, Oryza Sativa Starch, Avena Sativa Kernel Extract, Alcohol Denat., Distearyldimonium Chloride, Cetrimonium Chloride.',
//     usage: 'Струсіть балон, розпиліть на корені волосся з відстані 30 см, залиште на 2 хвилини, розчешіть. Не змивати.',
//     features: {
//       description: `
// Сухий шампунь Klorane Dry Shampoo з вівсяним молоком освіжає волосся і додає об’єм. Формула з натуральними компонентами ніжно очищає.

// **Як діє?**

// Вівсяне молоко заспокоює шкіру голови, а рисовий крохмаль поглинає жир. Шампунь ідеально підходить для швидкого оновлення зачіски. Ніжний аромат освіжає.

// **Б’юті-поради**

// Використовуйте між миттям для підтримання свіжості і об’єму.
//       `.trim(),
//       brand: 'Klorane',
//       country: 'Франція',
//       type: 'Сухий шампунь',
//       class: 'Преміум',
//       hairType: 'Для всіх типів волосся',
//       features: 'Освіження та об’єм',
//       category: 'Засоби для миття волосся',
//       purpose: 'Освіження Для об’єму Заспокоєння',
//       gender: 'Унісекс',
//       activeIngredients: 'Вівсяне молоко Рисовий крохмаль',
//     },
//     storePrices: [
//       { name: 'Eva', price: 240, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 250, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 260, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 270, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 255, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 245, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 235, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 230, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 106,
//     category: 'shampoos',
//     name: 'Faith in Nature Lavender & Geranium',
//     price: 170,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Органічний шампунь.',
//     specs: { volume: '400 мл', type: 'Натуральний', brand: 'Faith in Nature' },
//     rating: 4.5,
//     views: 175,
//     code: 'FAI106',
//     composition: 'Aqua / Water, Ammonium Laureth Sulfate, Cocamidopropyl Betaine, Lavandula Angustifolia Oil, Pelargonium Graveolens Oil, Sodium Benzoate, Citric Acid, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Faith in Nature Lavender & Geranium з органічними оліями лаванди і герані ніжно очищає і заспокоює волосся. Натуральна формула без парабенів.

// **Як діє?**

// Олія лаванди заспокоює шкіру голови, а олія герані додає блиск. Шампунь робить волосся м’яким і здоровим. Аромат лаванди і герані розслабляє.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Faith in Nature Lavender & Geranium для повного догляду.
//       `.trim(),
//       brand: 'Faith in Nature',
//       country: 'Велика Британія',
//       type: 'Органічний шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Заспокоєння та очищення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Заспокоєння Очищення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія лаванди Олія герані',
//     },
//     storePrices: [
//       { name: 'Eva', price: 170, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 180, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 190, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 200, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 185, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 175, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 165, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 160, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 107,
//     category: 'shampoos',
//     name: 'Avalon Organics Biotin B-Complex',
//     price: 260,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зміцнення з біотином.',
//     specs: { volume: '414 мл', type: 'Натуральний', brand: 'Avalon Organics' },
//     rating: 4.6,
//     views: 185,
//     code: 'AVA107',
//     composition: 'Aqua / Water, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Biotin, Panthenol, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для зміцнення.',
//     features: {
//       description: `
// Шампунь Avalon Organics Biotin B-Complex з біотином і пантенолом зміцнює тонке волосся, додаючи об’єм. Натуральна формула без сульфатів.

// **Як діє?**

// Біотин зміцнює волосяні фолікули, а пантенол зволожує і додає блиск. Шампунь стимулює ріст волосся. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Avalon Organics Biotin B-Complex для кращого результату.
//       `.trim(),
//       brand: 'Avalon Organics',
//       country: 'США',
//       type: 'Натуральний шампунь',
//       class: 'Преміум',
//       hairType: 'Для тонкого волосся',
//       features: 'Зміцнення та об’єм',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Для об’єму Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Біотин Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 260, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 270, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 280, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 290, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 275, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 265, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 255, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 250, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 108,
//     category: 'shampoos',
//     name: 'Jason Restorative Biotin',
//     price: 250,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення з біотином і женьшенем.',
//     specs: { volume: '473 мл', type: 'Для ослабленого волосся', brand: 'Jason' },
//     rating: 4.5,
//     views: 180,
//     code: 'JAS108',
//     composition: 'Aqua / Water, Sodium Cocoyl Isethionate, Cocamidopropyl Betaine, Biotin, Panax Ginseng Root Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для відновлення.',
//     features: {
//       description: `
// Шампунь Jason Restorative Biotin з біотином і екстрактом женьшеню відновлює ослаблене волосся, надаючи йому силу і блиск. Натуральна формула без парабенів.

// **Як діє?**

// Біотин зміцнює волосся, а женьшень стимулює кровообіг у шкірі голови, сприяючи росту. Шампунь робить волосся здоровим і еластичним. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Jason Restorative Biotin для інтенсивного догляду.
//       `.trim(),
//       brand: 'Jason',
//       country: 'США',
//       type: 'Шампунь для ослабленого волосся',
//       class: 'Преміум',
//       hairType: 'Для ослабленого волосся',
//       features: 'Відновлення та зміцнення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зміцнення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Біотин Екстракт женьшеню',
//     },
//     storePrices: [
//       { name: 'Eva', price: 250, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 260, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 270, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 280, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 265, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 255, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 245, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 240, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 109,
//     category: 'shampoos',
//     name: 'Desert Essence Lemon Tea Tree',
//     price: 190,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Очищення з чайним деревом.',
//     specs: { volume: '237 мл', type: 'Для жирної шкіри голови', brand: 'Desert Essence' },
//     rating: 4.4,
//     views: 170,
//     code: 'DES109',
//     composition: 'Aqua / Water, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Melaleuca Alternifolia Leaf Oil, Citrus Limon Peel Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте 2-3 рази на тиждень.',
//     features: {
//       description: `
// Шампунь Desert Essence Lemon Tea Tree з олією чайного дерева і лимона ефективно очищає жирну шкіру голови, надаючи свіжість. Натуральна формула без сульфатів.

// **Як діє?**

// Олія чайного дерева балансує вироблення себуму, а лимон освіжає і додає блиск. Шампунь залишає волосся чистим і легким. Аромат цитрусових бадьорить.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Desert Essence Lemon Tea Tree для збалансованого догляду.
//       `.trim(),
//       brand: 'Desert Essence',
//       country: 'США',
//       type: 'Шампунь для жирної шкіри',
//       class: 'Мідл-маркет',
//       hairType: 'Для жирного волосся',
//       features: 'Очищення та свіжість',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Освіження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія чайного дерева Олія лимона',
//     },
//     storePrices: [
//       { name: 'Eva', price: 190, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 200, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 210, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 220, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 205, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 195, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 185, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 180, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 110,
//     category: 'shampoos',
//     name: 'Bielenda Vegan Muesli Shampoo',
//     price: 130,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Ніжний догляд для волосся і шкіри голови.',
//     specs: { volume: '300 мл', type: 'Натуральний', brand: 'Bielenda' },
//     rating: 4.3,
//     views: 165,
//     code: 'BIE110',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Avena Sativa Kernel Extract, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Bielenda Vegan Muesli Shampoo з екстрактом вівса м’яко очищає і зволожує волосся, заспокоюючи шкіру голови. Веганська формула без парабенів.

// **Як діє?**

// Екстракт вівса живить і пом’якшує волосся, роблячи його гладким. Шампунь ніжно очищає, не викликаючи подразнень. Аромат із нотками злаків освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Bielenda Vegan Muesli для додаткового зволоження.
//       `.trim(),
//       brand: 'Bielenda',
//       country: 'Польща',
//       type: 'Натуральний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зволоження та очищення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Очищення Заспокоєння',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт вівса',
//     },
//     storePrices: [
//       { name: 'Eva', price: 130, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 140, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 150, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 160, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 145, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 135, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 125, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 120, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 111,
//     category: 'shampoos',
//     name: 'Weleda Oat Replenishing Shampoo',
//     price: 210,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення структури волосся.',
//     specs: { volume: '190 мл', type: 'Для пошкодженого волосся', brand: 'Weleda' },
//     rating: 4.5,
//     views: 175,
//     code: 'WEL111',
//     composition: 'Aqua / Water, Disodium Cocoyl Glutamate, Cocamidopropyl Betaine, Avena Sativa Kernel Extract, Sodium Benzoate, Panthenol, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для відновлення.',
//     features: {
//       description: `
// Шампунь Weleda Oat Replenishing Shampoo з екстрактом вівса відновлює пошкоджене волосся, надаючи йому м’якість і силу. Натуральна формула без силіконів.

// **Як діє?**

// Екстракт вівса зволожує і зміцнює структуру волосся, а пантенол зменшує ламкість. Шампунь робить волосся гладким і блискучим. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Weleda Oat для комплексного догляду.
//       `.trim(),
//       brand: 'Weleda',
//       country: 'Швейцарія',
//       type: 'Шампунь для пошкодженого волосся',
//       class: 'Преміум',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт вівса Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 210, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 220, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 230, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 240, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 225, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 215, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 205, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 200, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 112,
//     category: 'shampoos',
//     name: 'Lush Big Volumizing Shampoo',
//     price: 290,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для об’єму з морською сіллю.',
//     specs: { volume: '330 мл', type: 'Для об’єму', brand: 'Lush' },
//     rating: 4.6,
//     views: 190,
//     code: 'LUS112',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Sea Salt, Cocamidopropyl Betaine, Citrus Limon Peel Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте для додання об’єму.',
//     features: {
//       description: `
// Шампунь Lush Big Volumizing Shampoo з морською сіллю і олією лимона додає волоссю об’єм і блиск. Натуральна формула без парабенів.

// **Як діє?**

// Морська сіль текстурує волосся, надаючи об’єм, а олія лимона освіжає і додає блиск. Шампунь робить зачіску пишною. Аромат цитрусових бадьорить.

// **Б’юті-поради**

// Використовуйте перед укладкою для максимального об’єму.
//       `.trim(),
//       brand: 'Lush',
//       country: 'Велика Британія',
//       type: 'Шампунь для об’єму',
//       class: 'Преміум',
//       hairType: 'Для всіх типів волосся',
//       features: 'Об’єм та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Для об’єму Для блиску Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Морська сіль Олія лимона',
//     },
//     storePrices: [
//       { name: 'Eva', price: 290, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 300, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 310, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 320, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 305, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 295, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 285, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 280, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 113,
//     category: 'shampoos',
//     name: 'Kevin Murphy Angel Wash',
//     price: 410,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для тонкого фарбованого волосся.',
//     specs: { volume: '250 мл', type: 'Для фарбованого волосся', brand: 'Kevin Murphy' },
//     rating: 4.7,
//     views: 200,
//     code: 'KEV113',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Oat Protein, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте з кондиціонером Kevin Murphy Angel Rinse.',
//     features: {
//       description: `
// Шампунь Kevin Murphy Angel Wash м’яко очищає тонке фарбоване волосся, зберігаючи колір і додаючи об’єм. Професійна формула без сульфатів.

// **Як діє?**

// Гідролізований овес живить волосся, а антиоксиданти захищають колір від вигорання. Шампунь додає легкість і блиск. Аромат із нотками квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Kevin Murphy Angel Masque для глибокого догляду.
//       `.trim(),
//       brand: 'Kevin Murphy',
//       country: 'Австралія',
//       type: 'Шампунь для фарбованого волосся',
//       class: 'Преміум',
//       hairType: 'Для тонкого фарбованого волосся',
//       features: 'Захист кольору та об’єм',
//       category: 'Засоби для миття волосся',
//       purpose: 'Захист кольору Для об’єму Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований овес',
//     },
//     storePrices: [
//       { name: 'Eva', price: 410, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 420, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 430, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 440, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 425, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 415, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 405, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 400, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 114,
//     category: 'shampoos',
//     name: 'Sachajuan Scalp Shampoo',
//     price: 430,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Проти подразнень і лупи.',
//     specs: { volume: '250 мл', type: 'Для чутливої шкіри голови', brand: 'Sachajuan' },
//     rating: 4.7,
//     views: 195,
//     code: 'SAC114',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Piroctone Olamine, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, залиште на 1-2 хвилини, змийте. Використовуйте регулярно.',
//     features: {
//       description: `
// Шампунь Sachajuan Scalp Shampoo з піроктоном оламіном усуває лупу і заспокоює чутливу шкіру голови. Професійна формула для здоров’я волосся.

// **Як діє?**

// Піроктон оламін бореться з лупою і подразненнями, а м’які очищаючі компоненти зберігають баланс шкіри. Шампунь залишає волосся чистим і свіжим. Аромат ніжний і ненав’язливий.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Sachajuan Scalp для комплексного догляду.
//       `.trim(),
//       brand: 'Sachajuan',
//       country: 'Швеція',
//       type: 'Шампунь для чутливої шкіри',
//       class: 'Преміум',
//       hairType: 'Для всіх типів волосся',
//       features: 'Проти лупи та заспокоєння',
//       category: 'Засоби для миття волосся',
//       purpose: 'Проти лупи Заспокоєння Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Піроктон оламін',
//     },
//     storePrices: [
//       { name: 'Eva', price: 430, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 440, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 450, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 460, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 445, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 435, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 425, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 420, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 115,
//     category: 'shampoos',
//     name: 'Balea Men Power Effect',
//     price: 95,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь-гель для чоловіків.',
//     specs: { volume: '300 мл', type: 'Чоловічий', brand: 'Balea' },
//     rating: 4.2,
//     views: 160,
//     code: 'BAL115',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Menthol, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь-гель Balea Men Power Effect з ментолом забезпечує свіжість і очищення для чоловіків. Формула тонізує шкіру голови.

// **Як діє?**

// Ментол освіжає і бадьорить, а очищаючі компоненти видаляють забруднення. Шампунь залишає волосся чистим і легким. Аромат із нотками ментолу освіжає.

// **Б’юті-поради**

// Використовуйте після тренувань для максимальної свіжості.
//       `.trim(),
//       brand: 'Balea',
//       country: 'Німеччина',
//       type: 'Чоловічий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Очищення та свіжість',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Освіження',
//       gender: 'Чоловічий',
//       activeIngredients: 'Ментол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 95, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 105, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 115, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 125, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 110, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 100, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 90, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 85, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 116,
//     category: 'shampoos',
//     name: 'Lebel Proedit Soft Fit',
//     price: 450,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Професійний догляд з Японії.',
//     specs: { volume: '300 мл', type: 'Професійний', brand: 'Lebel' },
//     rating: 4.8,
//     views: 205,
//     code: 'LEB116',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте з кондиціонером Lebel Proedit.',
//     features: {
//       description: `
// Шампунь Lebel Proedit Soft Fit з гідролізованим кератином забезпечує професійний догляд, відновлюючи волосся. Формула м’яко очищає і зволожує.

// **Як діє?**

// Кератин відновлює структуру волосся, роблячи його гладким і блискучим. Шампунь підходить для всіх типів волосся. Аромат із нотками квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Lebel Proedit для інтенсивного відновлення.
//       `.trim(),
//       brand: 'Lebel',
//       country: 'Японія',
//       type: 'Професійний шампунь',
//       class: 'Преміум',
//       hairType: 'Для всіх типів волосся',
//       features: 'Відновлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 450, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 460, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 470, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 480, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 465, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 455, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 445, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 440, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 117,
//     category: 'shampoos',
//     name: 'Kallos Keratin Shampoo',
//     price: 110,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'З кератином для відновлення.',
//     specs: { volume: '1000 мл', type: 'Для пошкодженого волосся', brand: 'Kallos' },
//     rating: 4.3,
//     views: 165,
//     code: 'KAL117',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Kallos Keratin Shampoo з гідролізованим кератином відновлює пошкоджене волосся, надаючи йому гладкість і блиск. Формула економічна у використанні.

// **Як діє?**

// Кератин заповнює пористі ділянки волосся, зменшуючи ламкість. Шампунь робить волосся м’яким і слухняним. Аромат із нотками квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Kallos Keratin для глибокого відновлення.
//       `.trim(),
//       brand: 'Kallos',
//       country: 'Угорщина',
//       type: 'Шампунь для пошкодженого волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 110, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 120, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 130, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 140, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 125, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 115, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 105, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 100, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 118,
//     category: 'shampoos',
//     name: 'CHI Tea Tree Oil Shampoo',
//     price: 270,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Освіжає і очищує шкіру голови.',
//     specs: { volume: '355 мл', type: 'Очищаючий', brand: 'CHI' },
//     rating: 4.5,
//     views: 180,
//     code: 'CHI118',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Melaleuca Alternifolia Leaf Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте 2-3 рази на тиждень.',
//     features: {
//       description: `
// Шампунь CHI Tea Tree Oil Shampoo з олією чайного дерева глибоко очищає шкіру голови, освіжаючи волосся. Професійна формула без сульфатів.

// **Як діє?**

// Олія чайного дерева балансує шкіру голови, зменшуючи жирність і подразнення. Шампунь залишає волосся чистим і легким. Аромат із нотками трав бадьорить.

// **Б’юті-поради**

// Поєднуйте з кондиціонером CHI Tea Tree Oil для збалансованого догляду.
//       `.trim(),
//       brand: 'CHI',
//       country: 'США',
//       type: 'Очищаючий шампунь',
//       class: 'Преміум',
//       hairType: 'Для всіх типів волосся',
//       features: 'Очищення та свіжість',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Освіження Заспокоєння',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія чайного дерева',
//     },
//     storePrices: [
//       { name: 'Eva', price: 270, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 280, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 290, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 300, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 285, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 275, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 265, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 260, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 119,
//     category: 'shampoos',
//     name: 'Wella Fusion Intense Repair',
//     price: 310,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Інтенсивне відновлення волосся.',
//     specs: { volume: '250 мл', type: 'Для пошкодженого волосся', brand: 'Wella' },
//     rating: 4.6,
//     views: 185,
//     code: 'WEL119',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте з кондиціонером Wella Fusion.',
//     features: {
//       description: `
// Шампунь Wella Fusion Intense Repair з гідролізованим кератином інтенсивно відновлює пошкоджене волосся, надаючи йому силу і блиск. Професійна формула.

// **Як діє?**

// Кератин заповнює пористі ділянки, зміцнюючи структуру волосся. Шампунь зменшує ламкість і полегшує розчісування. Аромат із нотками квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Wella Fusion для глибокого відновлення.
//       `.trim(),
//       brand: 'Wella',
//       country: 'Німеччина',
//       type: 'Шампунь для пошкодженого волосся',
//       class: 'Преміум',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 310, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 320, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 330, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 340, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 325, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 315, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 305, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 300, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 120,
//     category: 'shampoos',
//     name: 'Matrix Total Results So Silver',
//     price: 290,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для нейтралізації жовтизни у світлому волоссі.',
//     specs: { volume: '300 мл', type: 'Для блондинок', brand: 'Matrix' },
//     rating: 4.5,
//     views: 180,
//     code: 'MAT120',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Benzoate, CI 60730 / Acid Violet 43, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, залиште на 3-5 хвилин, змийте. Використовуйте 1-2 рази на тиждень.',
//     features: {
//       description: `
// Шампунь Matrix Total Results So Silver з фіолетовими пігментами нейтралізує жовтизну у світлому і сивому волоссі, надаючи холодний відтінок. Професійна формула.

// **Як діє?**

// Фіолетові пігменти усувають теплі тони, зберігаючи чистий блонд. Шампунь м’яко очищає і додає блиск. Аромат із нотками квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Matrix So Silver для тривалого ефекту.
//       `.trim(),
//       brand: 'Matrix',
//       country: 'США',
//       type: 'Шампунь для блондинок',
//       class: 'Преміум',
//       hairType: 'Для освітленого волосся',
//       features: 'Нейтралізація жовтизни та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Нейтралізація жовтизни Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Фіолетові пігменти',
//     },
//     storePrices: [
//       { name: 'Eva', price: 290, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 300, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 310, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 320, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 305, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 295, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 285, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 280, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 121,
//     category: 'shampoos',
//     name: 'Fanola No Yellow',
//     price: 320,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Фіолетовий шампунь проти жовтизни.',
//     specs: { volume: '350 мл', type: 'Для освітленого волосся', brand: 'Fanola' },
//     rating: 4.6,
//     views: 190,
//     code: 'FAN121',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, CI 60730 / Acid Violet 43, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, залиште на 1-5 хвилин, змийте. Використовуйте 1-2 рази на тиждень.',
//     features: {
//       description: `
// Шампунь Fanola No Yellow з фіолетовими пігментами нейтралізує жовтизну у світлому і сивому волоссі, надаючи холодний відтінок. Професійна формула.

// **Як діє?**

// Фіолетові пігменти усувають теплі тони, зберігаючи чистий блонд або сріблястий відтінок. Шампунь додає блиск і м’якість. Аромат із нотками фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Fanola No Yellow для посиленого ефекту.
//       `.trim(),
//       brand: 'Fanola',
//       country: 'Італія',
//       type: 'Шампунь для освітленого волосся',
//       class: 'Преміум',
//       hairType: 'Для освітленого волосся',
//       features: 'Нейтралізація жовтизни та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Нейтралізація жовтизни Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Фіолетові пігменти',
//     },
//     storePrices: [
//       { name: 'Eva', price: 320, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 330, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 340, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 350, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 335, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 325, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 315, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 310, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 122,
//     category: 'shampoos',
//     name: 'Alpecin Caffeine Shampoo',
//     price: 230,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зміцнює корені волосся.',
//     specs: { volume: '250 мл', type: 'Проти випадіння', brand: 'Alpecin' },
//     rating: 4.4,
//     views: 175,
//     code: 'ALP122',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Caffeine, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, залиште на 2 хвилини, змийте. Використовуйте щоденно.',
//     features: {
//       description: `
// Шампунь Alpecin Caffeine Shampoo з кофеїном зміцнює корені волосся, зменшуючи випадіння. Формула стимулює ріст волосся.

// **Як діє?**

// Кофеїн проникає у волосяні фолікули, активізуючи їх ріст і зміцнення. Шампунь освіжає і очищає шкіру голови. Аромат із нотками трав бадьорить.

// **Б’юті-поради**

// Поєднуйте з тоніком Alpecin для посиленого ефекту.
//       `.trim(),
//       brand: 'Alpecin',
//       country: 'Німеччина',
//       type: 'Шампунь проти випадіння',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зміцнення та очищення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Проти випадіння Очищення',
//       gender: 'Чоловічий Унісекс',
//       activeIngredients: 'Кофеїн',
//     },
//     storePrices: [
//       { name: 'Eva', price: 230, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 240, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 250, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 260, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 245, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 235, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 225, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 220, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 123,
//     category: 'shampoos',
//     name: 'Horse Force Horse Power',
//     price: 180,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для зміцнення і блиску волосся.',
//     specs: { volume: '500 мл', type: 'Зміцнюючий', brand: 'Horse Force' },
//     rating: 4.3,
//     views: 170,
//     code: 'HOR123',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Horse Force Horse Power з гідролізованим кератином зміцнює волосся, надаючи йому блиск і силу. Формула м’яко очищає.

// **Як діє?**

// Кератин відновлює структуру волосся, зменшуючи ламкість. Шампунь робить волосся гладким і блискучим. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з бальзамом Horse Force для комплексного догляду.
//       `.trim(),
//       brand: 'Horse Force',
//       country: 'Росія',
//       type: 'Зміцнюючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зміцнення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Для блиску Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 180, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 190, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 200, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 210, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 195, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 185, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 175, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 170, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 124,
//     category: 'shampoos',
//     name: 'Dove Daily Moisture',
//     price: 145,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для щоденного зволоження.',
//     specs: { volume: '400 мл', type: 'Універсальний', brand: 'Dove' },
//     rating: 4.4,
//     views: 170,
//     code: 'DOV124',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Dove Daily Moisture зволожує волосся, надаючи йому м’якість і блиск. Формула підходить для всіх типів волосся.

// **Як діє?**

// Зволожуючі компоненти живлять волосся, запобігаючи сухості. Шампунь робить волосся гладким і слухняним. Аромат із нотками квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Dove Daily Moisture для додаткового зволоження.
//       `.trim(),
//       brand: 'Dove',
//       country: 'Велика Британія',
//       type: 'Універсальний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зволоження та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Зволожуючі компоненти',
//     },
//     storePrices: [
//       { name: 'Eva', price: 145, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 155, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 165, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 175, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 160, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 150, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 140, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 135, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },

//   {
//     id: 125,
//     category: 'shampoos',
//     name: 'The Body Shop Ginger Scalp Care',
//     price: 260,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Проти лупи та подразнення.',
//     specs: { volume: '250 мл', type: 'Проти лупи', brand: 'The Body Shop' },
//     rating: 4.5,
//     views: 180,
//     code: 'TBS125',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Zingiber Officinale Root Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте 2-3 рази на тиждень.',
//     features: {
//       description: `
// Шампунь The Body Shop Ginger Scalp Care з олією імбиру ефективно бореться з лупою і заспокоює подразнену шкіру голови. Натуральна формула без парабенів.

// **Як діє?**

// Олія імбиру зменшує подразнення і лупу, а м’які очищаючі компоненти освіжають шкіру голови. Шампунь залишає волосся чистим і здоровим. Аромат із нотками імбиру бадьорить.

// **Б’юті-поради**

// Поєднуйте з кондиціонером The Body Shop Ginger для комплексного догляду.
//       `.trim(),
//       brand: 'The Body Shop',
//       country: 'Велика Британія',
//       type: 'Шампунь проти лупи',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Проти лупи та заспокоєння',
//       category: 'Засоби для миття волосся',
//       purpose: 'Проти лупи Заспокоєння Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія імбиру',
//     },
//     storePrices: [
//       { name: 'Eva', price: 260, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 270, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 280, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 290, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 275, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 265, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 255, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 250, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 126,
//     category: 'shampoos',
//     name: 'OGX Biotin & Collagen',
//     price: 215,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для густоти і об’єму.',
//     specs: { volume: '385 мл', type: 'Для тонкого волосся', brand: 'OGX' },
//     rating: 4.4,
//     views: 175,
//     code: 'OGX126',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Biotin, Hydrolyzed Collagen, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для об’єму.',
//     features: {
//       description: `
// Шампунь OGX Biotin & Collagen з біотином і колагеном додає густоти і об’єму тонкому волоссю. Формула без сульфатів.

// **Як діє?**

// Біотин зміцнює волосяні фолікули, а колаген додає об’єм і еластичність. Шампунь робить волосся пишним і блискучим. Аромат із нотками квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером OGX Biotin & Collagen для кращого результату.
//       `.trim(),
//       brand: 'OGX',
//       country: 'США',
//       type: 'Шампунь для об’єму',
//       class: 'Мідл-маркет',
//       hairType: 'Для тонкого волосся',
//       features: 'Густота та об’єм',
//       category: 'Засоби для миття волосся',
//       purpose: 'Для об’єму Зміцнення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Біотин Колаген',
//     },
//     storePrices: [
//       { name: 'Eva', price: 215, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 225, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 235, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 245, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 230, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 220, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 210, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 205, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 127,
//     category: 'shampoos',
//     name: 'Shea Moisture Raw Shea Butter',
//     price: 350,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження та живлення з маслом ши.',
//     specs: { volume: '384 мл', type: 'Для сухого волосся', brand: 'Shea Moisture' },
//     rating: 4.6,
//     views: 190,
//     code: 'SHE127',
//     composition: 'Aqua / Water, Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Betaine, Butyrospermum Parkii Butter, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте для зволоження сухого волосся.',
//     features: {
//       description: `
// Шампунь Shea Moisture Raw Shea Butter з маслом ши глибоко зволожує і живить сухе волосся, надаючи йому м’якість. Натуральна формула без сульфатів.

// **Як діє?**

// Масло ши інтенсивно зволожує, а природні компоненти відновлюють сухе волосся. Шампунь робить волосся гладким і блискучим. Аромат із нотками ванілі освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Shea Moisture Raw Shea Butter для інтенсивного догляду.
//       `.trim(),
//       brand: 'Shea Moisture',
//       country: 'США',
//       type: 'Шампунь для сухого волосся',
//       class: 'Преміум',
//       hairType: 'Для сухого волосся',
//       features: 'Зволоження та живлення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Живлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Масло ши',
//     },
//     storePrices: [
//       { name: 'Eva', price: 350, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 360, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 370, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 380, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 365, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 355, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 345, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 340, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 128,
//     category: 'shampoos',
//     name: 'Nature Box Avocado Oil',
//     price: 180,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження з авокадо.',
//     specs: { volume: '385 мл', type: 'Для сухого волосся', brand: 'Nature Box' },
//     rating: 4.3,
//     views: 165,
//     code: 'NAT128',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Persea Gratissima Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Nature Box Avocado Oil з олією авокадо зволожує сухе волосся, надаючи йому м’якість і блиск. Веганська формула без парабенів.

// **Як діє?**

// Олія авокадо живить і зволожує волосся, зменшуючи сухість і ламкість. Шампунь робить волосся гладким і слухняним. Аромат із нотками фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Nature Box Avocado Oil для додаткового зволоження.
//       `.trim(),
//       brand: 'Nature Box',
//       country: 'Німеччина',
//       type: 'Шампунь для сухого волосся',
//       class: 'Мідл-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Зволоження та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія авокадо',
//     },
//     storePrices: [
//       { name: 'Eva', price: 180, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 190, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 200, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 210, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 195, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 185, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 175, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 170, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 129,
//     category: 'shampoos',
//     name: 'Pantene Micellar Detox & Hydrate',
//     price: 170,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Делікатне очищення та зволоження.',
//     specs: { volume: '400 мл', type: 'Для нормального волосся', brand: 'Pantene' },
//     rating: 4.4,
//     views: 170,
//     code: 'PAN129',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Pantene Micellar Detox & Hydrate з міцелярною технологією делікатно очищає і зволожує нормальне волосся. Формула без парабенів.

// **Як діє?**

// Міцели м’яко видаляють забруднення, а зволожуючі компоненти живлять волосся. Шампунь залишає волосся чистим і легким. Аромат із нотками квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Pantene Micellar для додаткового зволоження.
//       `.trim(),
//       brand: 'Pantene',
//       country: 'США',
//       type: 'Шампунь для нормального волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для нормального волосся',
//       features: 'Очищення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Міцели',
//     },
//     storePrices: [
//       { name: 'Eva', price: 170, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 180, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 190, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 200, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 185, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 175, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 165, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 160, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 130,
//     category: 'shampoos',
//     name: 'Tresemme Botanique Damage Recovery',
//     price: 190,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення з кокосом і алое.',
//     specs: { volume: '400 мл', type: 'Для пошкодженого волосся', brand: 'TRESemmé' },
//     rating: 4.4,
//     views: 170,
//     code: 'TRE130',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Cocos Nucifera Oil, Aloe Barbadensis Leaf Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для відновлення.',
//     features: {
//       description: `
// Шампунь Tresemme Botanique Damage Recovery з кокосовою олією і алое відновлює пошкоджене волосся, надаючи йому м’якість і блиск. Формула без парабенів.

// **Як діє?**

// Кокосова олія живить, а алое зволожує і заспокоює волосся. Шампунь зменшує ламкість і полегшує розчісування. Аромат із нотками кокоса освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Tresemme Botanique для інтенсивного догляду.
//       `.trim(),
//       brand: 'TRESemmé',
//       country: 'США',
//       type: 'Шампунь для пошкодженого волосся',
//       class: 'Мідл-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Кокосова олія Алое',
//     },
//     storePrices: [
//       { name: 'Eva', price: 190, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 200, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 210, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 220, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 205, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 195, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 185, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 180, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 131,
//     category: 'shampoos',
//     name: "L'Oréal Men Expert Barber Club",
//     price: 165,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь для бороди і волосся.',
//     specs: { volume: '300 мл', type: 'Чоловічий', brand: "L'Oréal" },
//     rating: 4.3,
//     views: 165,
//     code: 'LOR131',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Cedrus Atlantica Bark Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся і бороду, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь L'Oréal Men Expert Barber Club з олією кедра очищає і доглядає за волоссям і бородою, надаючи їм м’якість. Формула для чоловіків.

// **Як діє?**

// Олія кедра зволожує і освіжає, а очищаючі компоненти видаляють забруднення. Шампунь робить бороду м’якою і слухняною. Аромат із нотками кедра бадьорить.

// **Б’юті-поради**

// Поєднуйте з олією для бороди L'Oréal Barber Club для додаткового догляду.
//       `.trim(),
//       brand: "L'Oréal",
//       country: 'Франція',
//       type: 'Чоловічий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Очищення та догляд за бородою',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Зволоження',
//       gender: 'Чоловічий',
//       activeIngredients: 'Олія кедра',
//     },
//     storePrices: [
//       { name: 'Eva', price: 165, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 175, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 185, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 195, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 180, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 170, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 160, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 155, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 132,
//     category: 'shampoos',
//     name: 'Londa Professional Color Radiance',
//     price: 240,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Захист кольору фарбованого волосся.',
//     specs: { volume: '250 мл', type: 'Для фарбованого волосся', brand: 'Londa' },
//     rating: 4.5,
//     views: 175,
//     code: 'LON132',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Silk, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для захисту кольору.',
//     features: {
//       description: `
// Шампунь Londa Professional Color Radiance з гідролізованим шовком захищає колір фарбованого волосся, надаючи йому блиск. Професійна формула.

// **Як діє?**

// Гідролізований шовк утримує пігменти, запобігаючи вимиванню кольору. Шампунь робить волосся гладким і блискучим. Аромат із нотками квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Londa Color Radiance для тривалого захисту.
//       `.trim(),
//       brand: 'Londa',
//       country: 'Німеччина',
//       type: 'Шампунь для фарбованого волосся',
//       class: 'Мідл-маркет',
//       hairType: 'Для фарбованого волосся',
//       features: 'Захист кольору та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Захист кольору Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований шовк',
//     },
//     storePrices: [
//       { name: 'Eva', price: 240, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 250, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 260, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 270, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 255, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 245, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 235, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 230, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 133,
//     category: 'shampoos',
//     name: 'Wella Invigo Balance Senso Calm',
//     price: 260,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для чутливої шкіри голови.',
//     specs: { volume: '250 мл', type: 'Гіпоалергенний', brand: 'Wella' },
//     rating: 4.5,
//     views: 180,
//     code: 'WEL133',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Allantoin, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для заспокоєння шкіри.',
//     features: {
//       description: `
// Шампунь Wella Invigo Balance Senso Calm з алантоїном заспокоює чутливу шкіру голови, м’яко очищаючи волосся. Гіпоалергенна формула без барвників.

// **Як діє?**

// Алантоїн зменшує подразнення і свербіж, а м’які компоненти забезпечують делікатне очищення. Шампунь залишає волосся чистим і свіжим. Аромат ніжний і ненав’язливий.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Wella Invigo Balance для комплексного догляду.
//       `.trim(),
//       brand: 'Wella',
//       country: 'Німеччина',
//       type: 'Гіпоалергенний шампунь',
//       class: 'Преміум',
//       hairType: 'Для всіх типів волосся',
//       features: 'Заспокоєння та очищення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Заспокоєння Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Алантоїн',
//     },
//     storePrices: [
//       { name: 'Eva', price: 260, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 270, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 280, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 290, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 275, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 265, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 255, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 250, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 134,
//     category: 'shampoos',
//     name: 'TRESemmé Volume & Body',
//     price: 180,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Додає об’єм та легкість.',
//     specs: { volume: '400 мл', type: 'Для тонкого волосся', brand: 'TRESemmé' },
//     rating: 4.3,
//     views: 165,
//     code: 'TRE134',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Collagen, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте для додання об’єму.',
//     features: {
//       description: `
// Шампунь TRESemmé Volume & Body з колагеном додає об’єм і легкість тонкому волоссю. Формула без силіконів.

// **Як діє?**

// Колаген зміцнює і текстурує волосся, надаючи йому пишність. Шампунь робить зачіску об’ємною і легкою. Аромат із нотками фруктів освіжає.

// **Б’юті-поради**

// Використовуйте перед укладкою для максимального об’єму.
//       `.trim(),
//       brand: 'TRESemmé',
//       country: 'США',
//       type: 'Шампунь для об’єму',
//       class: 'Мідл-маркет',
//       hairType: 'Для тонкого волосся',
//       features: 'Об’єм та легкість',
//       category: 'Засоби для миття волосся',
//       purpose: 'Для об’єму Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Колаген',
//     },
//     storePrices: [
//       { name: 'Eva', price: 180, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 190, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 200, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 210, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 195, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 185, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 175, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 170, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 135,
//     category: 'shampoos',
//     name: 'Nivea Men Power',
//     price: 120,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь для чоловіків із ментолом.',
//     specs: { volume: '400 мл', type: 'Чоловічий', brand: 'Nivea' },
//     rating: 4.2,
//     views: 160,
//     code: 'NIV135',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Menthol, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Nivea Men Power з ментолом освіжає і очищає волосся, надаючи відчуття прохолоди. Формула для чоловіків.

// **Як діє?**

// Ментол бадьорить і освіжає шкіру голови, а очищаючі компоненти видаляють забруднення. Шампунь залишає волосся чистим і легким. Аромат із нотками ментолу освіжає.

// **Б’юті-поради**

// Використовуйте після тренувань для максимальної свіжості.
//       `.trim(),
//       brand: 'Nivea',
//       country: 'Німеччина',
//       type: 'Чоловічий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Очищення та свіжість',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Освіження',
//       gender: 'Чоловічий',
//       activeIngredients: 'Ментол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 120, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 130, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 140, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 150, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 135, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 125, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 115, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 110, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 136,
//     category: 'shampoos',
//     name: 'Garnier Botanic Therapy Olive',
//     price: 160,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Поживний шампунь з оливковою олією.',
//     specs: { volume: '400 мл', type: 'Для сухого волосся', brand: 'Garnier' },
//     rating: 4.3,
//     views: 165,
//     code: 'GAR136',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Olea Europaea Fruit Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Garnier Botanic Therapy Olive з оливковою олією живить і зволожує сухе волосся, надаючи йому м’якість і блиск. Формула без парабенів.

// **Як діє?**

// Оливкова олія глибоко живить, зменшуючи сухість і ламкість. Шампунь робить волосся гладким і слухняним. Аромат із нотками оливи освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Garnier Botanic Therapy Olive для додаткового живлення.
//       `.trim(),
//       brand: 'Garnier',
//       country: 'Франція',
//       type: 'Шампунь для сухого волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Живлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Живлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Оливкова олія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 160, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 170, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 180, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 190, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 175, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 165, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 155, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 150, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 137,
//     category: 'shampoos',
//     name: 'Elseve Color-Vive',
//     price: 150,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Захист кольору для фарбованого волосся.',
//     specs: { volume: '400 мл', type: 'Для фарбованого волосся', brand: "L'Oréal" },
//     rating: 4.4,
//     views: 170,
//     code: 'LOR137',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Sodium Benzoate, Polyquaternium-10, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для захисту кольору.',
//     features: {
//       description: `
// Шампунь Elseve Color-Vive від L'Oréal захищає колір фарбованого волосся, надаючи йому блиск і м’якість. Формула з УФ-фільтрами.

// **Як діє?**

// УФ-фільтри і поживні компоненти запобігають вимиванню кольору, зберігаючи його яскравість. Шампунь робить волосся гладким. Аромат із нотками ягід освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Elseve Color-Vive для тривалого захисту.
//       `.trim(),
//       brand: "L'Oréal",
//       country: 'Франція',
//       type: 'Шампунь для фарбованого волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для фарбованого волосся',
//       features: 'Захист кольору та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Захист кольору Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'УФ-фільтри',
//     },
//     storePrices: [
//       { name: 'Eva', price: 150, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 160, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 170, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 180, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 165, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 155, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 145, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 140, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 138,
//     category: 'shampoos',
//     name: 'Dr. Konopka’s Repair Shampoo',
//     price: 140,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Органічний шампунь для пошкодженого волосся.',
//     specs: { volume: '500 мл', type: 'Натуральний', brand: 'Dr. Konopka’s' },
//     rating: 4.3,
//     views: 160,
//     code: 'DRK138',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Olea Europaea Fruit Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Dr. Konopka’s Repair Shampoo з органічною оливковою олією відновлює пошкоджене волосся, надаючи йому силу і блиск. Натуральна формула.

// **Як діє?**

// Оливкова олія живить і зволожує, зменшуючи ламкість. Шампунь робить волосся м’яким і гладким. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з бальзамом Dr. Konopka’s Repair для інтенсивного відновлення.
//       `.trim(),
//       brand: 'Dr. Konopka’s',
//       country: 'Естонія',
//       type: 'Натуральний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Оливкова олія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 140, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 150, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 160, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 170, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 155, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 145, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 135, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 130, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 139,
//     category: 'shampoos',
//     name: 'Organic Shop Coconut & Shea',
//     price: 100,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'М’яке зволоження з кокосом.',
//     specs: { volume: '280 мл', type: 'Натуральний', brand: 'Organic Shop' },
//     rating: 4.2,
//     views: 155,
//     code: 'ORG139',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Cocos Nucifera Oil, Butyrospermum Parkii Butter, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Organic Shop Coconut & Shea з кокосовою олією і маслом ши м’яко зволожує волосся, надаючи йому блиск. Натуральна формула без парабенів.

// **Як діє?**

// Кокосова олія і масло ши живлять і зволожують, роблячи волосся м’яким і гладким. Шампунь освіжає і додає блиск. Аромат із нотками кокоса освіжає.

// **Б’юті-поради**

// Поєднуйте з бальзамом Organic Shop Coconut & Shea для додаткового зволоження.
//       `.trim(),
//       brand: 'Organic Shop',
//       country: 'Росія',
//       type: 'Натуральний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зволоження та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Кокосова олія Масло ши',
//     },
//     storePrices: [
//       { name: 'Eva', price: 100, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 110, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 120, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 130, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 115, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 105, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 95, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 90, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 140,
//     category: 'shampoos',
//     name: 'Syoss Pure Smooth',
//     price: 150,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Без силіконів, парабенів і барвників.',
//     specs: { volume: '440 мл', type: 'Безсульфатний', brand: 'Syoss' },
//     rating: 4.3,
//     views: 160,
//     code: 'SYO140',
//     composition: 'Aqua / Water, Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Betaine, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Syoss Pure Smooth без силіконів, парабенів і барвників м’яко очищає волосся, надаючи йому природний вигляд. Безсульфатна формула.

// **Як діє?**

// М’які очищаючі компоненти зберігають природний баланс волосся, роблячи його гладким і легким. Шампунь підходить для чутливої шкіри. Аромат ніжний і ненав’язливий.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Syoss Pure для натурального догляду.
//       `.trim(),
//       brand: 'Syoss',
//       country: 'Німеччина',
//       type: 'Безсульфатний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Очищення та легкість',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'М’які очищаючі компоненти',
//     },
//     storePrices: [
//       { name: 'Eva', price: 150, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 160, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 170, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 180, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 165, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 155, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 145, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 140, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 141,
//     category: 'shampoos',
//     name: 'Gliss Kur Bio-Tech Restore',
//     price: 170,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення з рослинним стовбуровими клітинами.',
//     specs: { volume: '250 мл', type: 'Для пошкодженого волосся', brand: 'Schwarzkopf' },
//     rating: 4.4,
//     views: 170,
//     code: 'GLI141',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Malus Domestica Fruit Cell Culture Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для відновлення.',
//     features: {
//       description: `
// Шампунь Gliss Kur Bio-Tech Restore з рослинними стовбуровими клітинами відновлює пошкоджене волосся, надаючи йому силу і блиск. Формула без силіконів.

// **Як діє?**

// Рослинні стовбурові клітини зміцнюють структуру волосся, зменшуючи ламкість. Шампунь робить волосся гладким і здоровим. Аромат із нотками фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Gliss Kur Bio-Tech для інтенсивного догляду.
//       `.trim(),
//       brand: 'Schwarzkopf',
//       country: 'Німеччина',
//       type: 'Шампунь для пошкодженого волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Рослинні стовбурові клітини',
//     },
//     storePrices: [
//       { name: 'Eva', price: 170, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 180, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 190, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 200, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 185, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 175, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 165, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 160, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 142,
//     category: 'shampoos',
//     name: 'Elseve Full Resist',
//     price: 160,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Проти ламкості та випадіння волосся.',
//     specs: { volume: '400 мл', type: 'Зміцнюючий', brand: "L'Oréal" },
//     rating: 4.4,
//     views: 170,
//     code: 'LOR142',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Biotin, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для зміцнення.',
//     features: {
//       description: `
// Шампунь Elseve Full Resist від L'Oréal з біотином зміцнює волосся, зменшуючи ламкість і випадіння. Формула для слабкого волосся.

// **Як діє?**

// Біотин зміцнює волосяні фолікули, а поживні компоненти відновлюють структуру. Шампунь робить волосся сильним і блискучим. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з бальзамом Elseve Full Resist для посиленого ефекту.
//       `.trim(),
//       brand: "L'Oréal",
//       country: 'Франція',
//       type: 'Зміцнюючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для слабкого волосся',
//       features: 'Зміцнення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Проти випадіння Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Біотин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 160, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 170, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 180, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 190, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 175, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 165, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 155, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 150, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 143,
//     category: 'shampoos',
//     name: 'Yope Verbena Shampoo',
//     price: 210,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Натуральний шампунь з вербеною.',
//     specs: { volume: '300 мл', type: 'Натуральний', brand: 'Yope' },
//     rating: 4.5,
//     views: 175,
//     code: 'YOP143',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Lippia Citriodora Leaf Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Yope Verbena Shampoo з екстрактом вербени м’яко очищає і освіжає волосся, надаючи йому природний блиск. Натуральна формула без парабенів.

// **Як діє?**

// Екстракт вербени тонізує шкіру голови, а м’які компоненти забезпечують делікатне очищення. Шампунь залишає волосся легким і свіжим. Аромат із нотками вербени бадьорить.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Yope Verbena для комплексного догляду.
//       `.trim(),
//       brand: 'Yope',
//       country: 'Польща',
//       type: 'Натуральний шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Очищення та свіжість',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Для блиску Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт вербени',
//     },
//     storePrices: [
//       { name: 'Eva', price: 210, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 220, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 230, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 240, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 225, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 215, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 205, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 200, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 144,
//     category: 'shampoos',
//     name: 'Farmasi Reviving Shampoo',
//     price: 130,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення і блиск.',
//     specs: { volume: '375 мл', type: 'Для тьмяного волосся', brand: 'Farmasi' },
//     rating: 4.2,
//     views: 160,
//     code: 'FAR144',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Argania Spinosa Kernel Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для блиску.',
//     features: {
//       description: `
// Шампунь Farmasi Reviving Shampoo з олією аргани відновлює тьмяне волосся, надаючи йому блиск і м’якість. Формула без парабенів.

// **Як діє?**

// Олія аргани живить і зволожує, повертаючи волоссю природний блиск. Шампунь робить волосся гладким і слухняним. Аромат із нотками квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Farmasi Reviving для посиленого ефекту.
//       `.trim(),
//       brand: 'Farmasi',
//       country: 'Туреччина',
//       type: 'Шампунь для тьмяного волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для тьмяного волосся',
//       features: 'Відновлення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Для блиску Зволоження',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія аргани',
//     },
//     storePrices: [
//       { name: 'Eva', price: 130, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 140, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 150, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 160, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 145, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 135, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 125, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 120, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 145,
//     category: 'shampoos',
//     name: 'Biobaza Natural Energy',
//     price: 155,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Енергетичний заряд для волосся.',
//     specs: { volume: '200 мл', type: 'Натуральний', brand: 'Biobaza' },
//     rating: 4.3,
//     views: 165,
//     code: 'BIO145',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Rosmarinus Officinalis Leaf Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Biobaza Natural Energy з екстрактом розмарину тонізує і освіжає волосся, надаючи йому енергію і блиск. Натуральна формула без парабенів.

// **Як діє?**

// Екстракт розмарину стимулює шкіру голови, а м’які компоненти очищають волосся. Шампунь залишає волосся бадьорим і легким. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Biobaza Natural Energy для додаткової свіжості.
//       `.trim(),
//       brand: 'Biobaza',
//       country: 'Хорватія',
//       type: 'Натуральний шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Тонізування та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Освіження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт розмарину',
//     },
//     storePrices: [
//       { name: 'Eva', price: 155, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 165, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 175, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 185, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 170, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 160, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 150, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 145, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 146,
//     category: 'shampoos',
//     name: 'Ziaja Goat’s Milk Shampoo',
//     price: 115,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження з козячим молоком.',
//     specs: { volume: '400 мл', type: 'Для сухого волосся', brand: 'Ziaja' },
//     rating: 4.2,
//     views: 155,
//     code: 'ZIA146',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Goat Milk Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Ziaja Goat’s Milk Shampoo з екстрактом козячого молока зволожує сухе волосся, надаючи йому м’якість і блиск. Формула без парабенів.

// **Як діє?**

// Козяче молоко живить і зволожує, зменшуючи сухість і ламкість. Шампунь робить волосся гладким і слухняним. Аромат із нотками молока ніжний і ненав’язливий.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Ziaja Goat’s Milk для додаткового зволоження.
//       `.trim(),
//       brand: 'Ziaja',
//       country: 'Польща',
//       type: 'Шампунь для сухого волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Зволоження та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Козяче молоко',
//     },
//     storePrices: [
//       { name: 'Eva', price: 115, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 125, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 135, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 145, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 130, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 120, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 110, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 105, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 147,
//     category: 'shampoos',
//     name: 'Apis Hair Care Rebuilding Shampoo',
//     price: 190,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлюючий шампунь з пантенолом.',
//     specs: { volume: '300 мл', type: 'Для пошкодженого волосся', brand: 'Apis' },
//     rating: 4.4,
//     views: 170,
//     code: 'API147',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Panthenol, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для відновлення.',
//     features: {
//       description: `
// Шампунь Apis Hair Care Rebuilding Shampoo з пантенолом відновлює пошкоджене волосся, надаючи йому силу і блиск. Формула без силіконів.

// **Як діє?**

// Пантенол зволожує і зміцнює структуру волосся, зменшуючи ламкість. Шампунь робить волосся гладким і здоровим. Аромат із нотками фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Apis Hair Care для інтенсивного догляду.
//       `.trim(),
//       brand: 'Apis',
//       country: 'Польща',
//       type: 'Шампунь для пошкодженого волосся',
//       class: 'Мідл-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та зволоження',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 190, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 200, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 210, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 220, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 205, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 195, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 185, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 180, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 148,
//     category: 'shampoos',
//     name: 'O’Herbal Volume Shampoo',
//     price: 130,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Додає об’єм і блиск.',
//     specs: { volume: '500 мл', type: 'Для тонкого волосся', brand: 'O’Herbal' },
//     rating: 4.2,
//     views: 160,
//     code: 'OHE148',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Wheat Protein, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте для додання об’єму.',
//     features: {
//       description: `
// Шампунь O’Herbal Volume Shampoo з гідролізованим протеїном пшениці додає об’єм і блиск тонкому волоссю. Формула без силіконів.

// **Як діє?**

// Протеїн пшениці зміцнює і текстурує волосся, надаючи йому пишність. Шампунь робить зачіску об’ємною і легкою. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Використовуйте перед укладкою для максимального об’єму.
//       `.trim(),
//       brand: 'O’Herbal',
//       country: 'Україна',
//       type: 'Шампунь для об’єму',
//       class: 'Мас-маркет',
//       hairType: 'Для тонкого волосся',
//       features: 'Об’єм та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Для об’єму Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований протеїн пшениці',
//     },
//     storePrices: [
//       { name: 'Eva', price: 130, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 140, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 150, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 160, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 145, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 135, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 125, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 120, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 149,
//     category: 'shampoos',
//     name: 'Marion Nature Therapy',
//     price: 120,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Натуральний догляд з травами.',
//     specs: { volume: '300 мл', type: 'Натуральний', brand: 'Marion' },
//     rating: 4.2,
//     views: 155,
//     code: 'MAR149',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Urtica Dioica Leaf Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Marion Nature Therapy з екстрактом кропиви м’яко очищає і доглядає за волоссям, надаючи йому силу і блиск. Натуральна формула без парабенів.

// **Як діє?**

// Екстракт кропиви зміцнює волосся і тонізує шкіру голови. Шампунь залишає волосся свіжим і легким. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з бальзамом Marion Nature Therapy для комплексного догляду.
//       `.trim(),
//       brand: 'Marion',
//       country: 'Польща',
//       type: 'Натуральний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зміцнення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Зміцнення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт кропиви',
//     },
//     storePrices: [
//       { name: 'Eva', price: 120, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 130, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 140, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 150, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 135, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 125, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 115, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 110, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 150,
//     category: 'shampoos',
//     name: 'Eveline Cosmetics Hair 2 Love',
//     price: 160,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення і блиск з маслами.',
//     specs: { volume: '400 мл', type: 'Для всіх типів волосся', brand: 'Eveline' },
//     rating: 4.3,
//     views: 165,
//     code: 'EVE150',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Argania Spinosa Kernel Oil, Macadamia Ternifolia Seed Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Eveline Cosmetics Hair 2 Love з оліями аргани і макадамії відновлює волосся, надаючи йому блиск і м’якість. Формула без парабенів.

// **Як діє?**

// Олії аргани і макадамії живлять і зволожують, зменшуючи ламкість. Шампунь робить волосся гладким і блискучим. Аромат із нотками горіхів освіжає.

// **Б’юті-поради**

// Поєднуйте з бальзамом Eveline Hair 2 Love для інтенсивного догляду.
//       `.trim(),
//       brand: 'Eveline',
//       country: 'Польща',
//       type: 'Шампунь для всіх типів волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Відновлення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія аргани Олія макадамії',
//     },
//     storePrices: [
//       { name: 'Eva', price: 160, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 170, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 180, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 190, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 175, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 165, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 155, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 150, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 151,
//     category: 'shampoos',
//     name: 'Tresemme Botanique Detox',
//     price: 160,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Очищення з імбиром і зеленим чаєм.',
//     specs: { volume: '400 мл', type: 'Очищаючий', brand: 'TRESemmé' },
//     rating: 4.3,
//     views: 165,
//     code: 'TRE151',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Zingiber Officinale Root Extract, Camellia Sinensis Leaf Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Tresemme Botanique Detox з екстрактами імбиру і зеленого чаю глибоко очищає волосся, видаляючи забруднення і надаючи свіжість. Формула без силіконів.

// **Як діє?**

// Імбир тонізує шкіру голови, а зелений чай освіжає і додає легкість. Шампунь залишає волосся чистим і блискучим. Аромат із нотками зеленого чаю бадьорить.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Tresemme Botanique Detox для максимального очищення.
//       `.trim(),
//       brand: 'TRESemmé',
//       country: 'США',
//       type: 'Очищаючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Очищення та свіжість',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Освіження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт імбиру Екстракт зеленого чаю',
//     },
//     storePrices: [
//       { name: 'Eva', price: 160, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 170, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 180, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 190, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 175, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 165, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 155, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 150, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 152,
//     category: 'shampoos',
//     name: "L'Oréal Elvive Full Resist",
//     price: 170,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зміцнення проти ламкості волосся.',
//     specs: { volume: '400 мл', type: 'Зміцнюючий', brand: "L'Oréal" },
//     rating: 4.4,
//     views: 170,
//     code: 'LOR152',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Biotin, Arginine, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для зміцнення.',
//     features: {
//       description: `
// Шампунь L'Oréal Elvive Full Resist з біотином і аргініном зміцнює слабке волосся, зменшуючи ламкість і випадіння. Формула для тонкого волосся.

// **Як діє?**

// Біотин зміцнює волосяні фолікули, а аргінін живить корені. Шампунь робить волосся сильним і блискучим. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з бальзамом L'Oréal Elvive Full Resist для посиленого ефекту.
//       `.trim(),
//       brand: "L'Oréal",
//       country: 'Франція',
//       type: 'Зміцнюючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для слабкого волосся',
//       features: 'Зміцнення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Проти випадіння Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Біотин Аргінін',
//     },
//     storePrices: [
//       { name: 'Eva', price: 170, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 180, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 190, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 200, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 185, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 175, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 165, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 160, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 153,
//     category: 'shampoos',
//     name: 'Pantene Pro-V Aqua Light',
//     price: 145,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Легкість без обтяження.',
//     specs: { volume: '400 мл', type: 'Універсальний', brand: 'Pantene' },
//     rating: 4.3,
//     views: 160,
//     code: 'PAN153',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Panthenol, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Pantene Pro-V Aqua Light з пантенолом м’яко очищає волосся, надаючи йому легкість і блиск без обтяження. Формула без силіконів.

// **Як діє?**

// Пантенол зволожує і зміцнює волосся, а легка формула забезпечує чистоту і свіжість. Шампунь ідеальний для нормального і жирного волосся. Аромат із нотками цитрусів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Pantene Aqua Light для легкості зачіски.
//       `.trim(),
//       brand: 'Pantene',
//       country: 'США',
//       type: 'Універсальний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для нормального і жирного волосся',
//       features: 'Очищення та легкість',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 145, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 155, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 165, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 175, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 160, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 150, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 140, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 135, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 154,
//     category: 'shampoos',
//     name: 'Garnier Botanic Therapy Argan & Camelia',
//     price: 130,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Живлення та м’якість.',
//     specs: { volume: '400 мл', type: 'Для сухого волосся', brand: 'Garnier' },
//     rating: 4.3,
//     views: 160,
//     code: 'GAR154',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Argania Spinosa Kernel Oil, Camellia Sinensis Seed Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Garnier Botanic Therapy Argan & Camelia з оліями аргани і камелії живить сухе волосся, надаючи йому м’якість і блиск. Формула без парабенів.

// **Як діє?**

// Олія аргани зволожує, а олія камелії додає гладкість і блиск. Шампунь робить волосся слухняним і здоровим. Аромат із нотками квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з бальзамом Garnier Botanic Therapy Argan & Camelia для інтенсивного догляду.
//       `.trim(),
//       brand: 'Garnier',
//       country: 'Франція',
//       type: 'Шампунь для сухого волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Живлення та м’якість',
//       category: 'Засоби для миття волосся',
//       purpose: 'Живлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія аргани Олія камелії',
//     },
//     storePrices: [
//       { name: 'Eva', price: 130, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 140, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 150, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 160, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 145, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 135, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 125, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 120, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 155,
//     category: 'shampoos',
//     name: 'Gliss Kur Fiber Therapy',
//     price: 155,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення фібри волосся.',
//     specs: { volume: '250 мл', type: 'Для пошкодженого волосся', brand: 'Schwarzkopf' },
//     rating: 4.4,
//     views: 165,
//     code: 'GLI155',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для відновлення.',
//     features: {
//       description: `
// Шампунь Gliss Kur Fiber Therapy з гідролізованим кератином відновлює пошкоджене волосся, зміцнюючи його структуру. Формула без парабенів.

// **Як діє?**

// Гідролізований кератин проникає у фібру волосся, відновлюючи її зсередини. Шампунь робить волосся гладким і блискучим. Аромат із нотками фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з маскою Gliss Kur Fiber Therapy для інтенсивного догляду.
//       `.trim(),
//       brand: 'Schwarzkopf',
//       country: 'Німеччина',
//       type: 'Шампунь для пошкодженого волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 155, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 165, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 175, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 185, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 170, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 160, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 150, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 145, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 156,
//     category: 'shampoos',
//     name: 'Nature Box Avocado Oil',
//     price: 160,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Натуральний догляд з авокадо.',
//     specs: { volume: '385 мл', type: 'Натуральний', brand: 'Nature Box' },
//     rating: 4.3,
//     views: 160,
//     code: 'NAT156',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Persea Gratissima Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Nature Box Avocado Oil з олією авокадо зволожує і живить волосся, надаючи йому м’якість і блиск. Веганська формула без парабенів.

// **Як діє?**

// Олія авокадо зволожує і зменшує ламкість, роблячи волосся гладким і слухняним. Шампунь освіжає і додає блиск. Аромат із нотками фруктів приємний.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Nature Box Avocado Oil для додаткового зволоження.
//       `.trim(),
//       brand: 'Nature Box',
//       country: 'Німеччина',
//       type: 'Натуральний шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зволоження та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія авокадо',
//     },
//     storePrices: [
//       { name: 'Eva', price: 160, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 170, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 180, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 190, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 175, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 165, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 155, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 150, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 157,
//     category: 'shampoos',
//     name: 'Head & Shoulders Eucalyptus',
//     price: 135,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Свіжість та проти лупи.',
//     specs: { volume: '400 мл', type: 'Проти лупи', brand: 'Head & Shoulders' },
//     rating: 4.5,
//     views: 175,
//     code: 'HNS157',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Pyrithione Zinc, Eucalyptus Globulus Leaf Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте 2-3 рази на тиждень.',
//     features: {
//       description: `
// Шампунь Head & Shoulders Eucalyptus з піритионом цинку і екстрактом евкаліпта ефективно бореться з лупою, надаючи свіжість. Формула для всіх типів волосся.

// **Як діє?**

// Піритион цинку зменшує лупу, а евкаліпт освіжає шкіру голови. Шампунь залишає волосся чистим і здоровим. Аромат із нотками евкаліпта бадьорить.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Head & Shoulders для комплексного догляду.
//       `.trim(),
//       brand: 'Head & Shoulders',
//       country: 'США',
//       type: 'Шампунь проти лупи',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Проти лупи та свіжість',
//       category: 'Засоби для миття волосся',
//       purpose: 'Проти лупи Очищення Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Піритион цинку Екстракт евкаліпта',
//     },
//     storePrices: [
//       { name: 'Eva', price: 135, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 145, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 155, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 165, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 150, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 140, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 130, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 125, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 158,
//     category: 'shampoos',
//     name: 'Bioblas Garlic Shampoo',
//     price: 110,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Проти випадіння волосся.',
//     specs: { volume: '360 мл', type: 'Проти випадіння', brand: 'Bioblas' },
//     rating: 4.2,
//     views: 155,
//     code: 'BIO158',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Allium Sativum Bulb Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для зміцнення.',
//     features: {
//       description: `
// Шампунь Bioblas Garlic Shampoo з екстрактом часнику зміцнює волосся, зменшуючи випадіння. Формула без різкого запаху часнику.

// **Як діє?**

// Екстракт часнику стимулює кровообіг у шкірі голови, зміцнюючи фолікули. Шампунь робить волосся сильним і здоровим. Аромат нейтральний і приємний.

// **Б’юті-поради**

// Поєднуйте з сироваткою Bioblas для посиленого ефекту проти випадіння.
//       `.trim(),
//       brand: 'Bioblas',
//       country: 'Туреччина',
//       type: 'Шампунь проти випадіння',
//       class: 'Мас-маркет',
//       hairType: 'Для слабкого волосся',
//       features: 'Зміцнення та проти випадіння',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Проти випадіння',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт часнику',
//     },
//     storePrices: [
//       { name: 'Eva', price: 110, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 120, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 130, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 140, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 125, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 115, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 105, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 100, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 159,
//     category: 'shampoos',
//     name: 'Polny Aptekar Strengthening',
//     price: 95,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зміцнення з ромашкою.',
//     specs: { volume: '300 мл', type: 'Зміцнюючий', brand: 'Polny Aptekar' },
//     rating: 4.1,
//     views: 150,
//     code: 'POL159',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Chamomilla Recutita Flower Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для зміцнення.',
//     features: {
//       description: `
// Шампунь Polny Aptekar Strengthening з екстрактом ромашки зміцнює волосся, надаючи йому блиск і м’якість. Натуральна формула без парабенів.

// **Як діє?**

// Екстракт ромашки заспокоює шкіру голови і зміцнює волосся. Шампунь робить волосся здоровим і блискучим. Аромат із нотками ромашки ніжний і ненав’язливий.

// **Б’юті-поради**

// Поєднуйте з бальзамом Polny Aptekar для комплексного догляду.
//       `.trim(),
//       brand: 'Polny Aptekar',
//       country: 'Україна',
//       type: 'Зміцнюючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зміцнення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт ромашки',
//     },
//     storePrices: [
//       { name: 'Eva', price: 95, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 105, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 115, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 125, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 110, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 100, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 90, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 85, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 160,
//     category: 'shampoos',
//     name: 'Nivea Anti-Schuppen Classic',
//     price: 125,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Проти лупи з ментолом.',
//     specs: { volume: '250 мл', type: 'Проти лупи', brand: 'Nivea' },
//     rating: 4.3,
//     views: 160,
//     code: 'NIV160',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Menthol, Piroctone Olamine, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте 2-3 рази на тиждень.',
//     features: {
//       description: `
// Шампунь Nivea Anti-Schuppen Classic з ментолом і піроктоном оламіну ефективно бореться з лупою, надаючи свіжість. Формула для всіх типів волосся.

// **Як діє?**

// Піроктон оламін зменшує лупу, а ментол освіжає шкіру голови. Шампунь залишає волосся чистим і здоровим. Аромат із нотками ментолу бадьорить.

// **Б’юті-поради**

// Поєднуйте з бальзамом Nivea для додаткового догляду.
//       `.trim(),
//       brand: 'Nivea',
//       country: 'Німеччина',
//       type: 'Шампунь проти лупи',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Проти лупи та свіжість',
//       category: 'Засоби для миття волосся',
//       purpose: 'Проти лупи Очищення Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Піроктон оламін Ментол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 125, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 135, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 145, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 155, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 140, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 130, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 120, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 115, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 161,
//     category: 'shampoos',
//     name: 'Alterra Organic Caffeine',
//     price: 135,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'З кофеїном для тонкого волосся.',
//     specs: { volume: '200 мл', type: 'Органічний', brand: 'Alterra' },
//     rating: 4.2,
//     views: 155,
//     code: 'ALT161',
//     composition: 'Aqua / Water, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Caffeine, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для зміцнення.',
//     features: {
//       description: `
// Шампунь Alterra Organic Caffeine з органічним кофеїном зміцнює тонке волосся, надаючи йому об’єм і блиск. Веганська формула без силіконів.

// **Як діє?**

// Кофеїн стимулює волосяні фолікули, зміцнюючи волосся від коренів. Шампунь робить зачіску пишною і легкою. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з бальзамом Alterra Organic для додаткового об’єму.
//       `.trim(),
//       brand: 'Alterra',
//       country: 'Німеччина',
//       type: 'Органічний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для тонкого волосся',
//       features: 'Зміцнення та об’єм',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Для об’єму Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Кофеїн',
//     },
//     storePrices: [
//       { name: 'Eva', price: 135, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 145, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 155, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 165, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 150, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 140, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 130, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 125, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 162,
//     category: 'shampoos',
//     name: 'Dr. Konopka’s Strengthening Shampoo',
//     price: 150,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зміцнення з вітаміном F.',
//     specs: { volume: '500 мл', type: 'Органічний', brand: 'Dr. Konopka’s' },
//     rating: 4.3,
//     views: 160,
//     code: 'DRK162',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Linseed Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Dr. Konopka’s Strengthening Shampoo з вітаміном F зміцнює слабке волосся, надаючи йому блиск і силу. Органічна формула без парабенів.

// **Як діє?**

// Вітамін F (з лляної олії) живить і зміцнює волосся, зменшуючи ламкість. Шампунь робить волосся здоровим і блискучим. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з бальзамом Dr. Konopka’s Strengthening для посиленого ефекту.
//       `.trim(),
//       brand: 'Dr. Konopka’s',
//       country: 'Естонія',
//       type: 'Органічний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для слабкого волосся',
//       features: 'Зміцнення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Вітамін F Лляна олія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 150, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 160, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 170, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 180, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 165, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 155, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 145, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 140, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 163,
//     category: 'shampoos',
//     name: 'EO Laboratorie Macadamia',
//     price: 140,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Живлення з макадамією.',
//     specs: { volume: '350 мл', type: 'Органічний', brand: 'EO Laboratorie' },
//     rating: 4.3,
//     views: 160,
//     code: 'EOL163',
//     composition: 'Aqua / Water, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Macadamia Ternifolia Seed Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь EO Laboratorie Macadamia з олією макадамії живить і зволожує волосся, надаючи йому м’якість і блиск. Органічна формула без парабенів.

// **Як діє?**

// Олія макадамії відновлює сухе волосся, зменшуючи ламкість. Шампунь робить волосся гладким і слухняним. Аромат із нотками горіхів приємний.

// **Б’юті-поради**

// Поєднуйте з бальзамом EO Laboratorie Macadamia для інтенсивного догляду.
//       `.trim(),
//       brand: 'EO Laboratorie',
//       country: 'Росія',
//       type: 'Органічний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Живлення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Живлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія макадамії',
//     },
//     storePrices: [
//       { name: 'Eva', price: 140, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 150, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 160, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 170, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 155, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 145, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 135, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 130, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 164,
//     category: 'shampoos',
//     name: 'Organic Shop Banana & Jasmine',
//     price: 100,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Фруктовий догляд.',
//     specs: { volume: '280 мл', type: 'Натуральний', brand: 'Organic Shop' },
//     rating: 4.2,
//     views: 155,
//     code: 'ORG164',
//     composition: 'Aqua / Water, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Musa Paradisiaca Fruit Extract, Jasminum Officinale Flower Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Organic Shop Banana & Jasmine з екстрактами банана і жасмину м’яко очищає і зволожує волосся, надаючи йому блиск. Натуральна формула без парабенів.

// **Як діє?**

// Екстракт банана зволожує, а жасмин додає м’якість і блиск. Шампунь робить волосся гладким і свіжим. Аромат із нотками фруктів і квітів освіжає.

// **Б’юті-поради**

// Поєднуйте з бальзамом Organic Shop Banana & Jasmine для додаткового догляду.
//       `.trim(),
//       brand: 'Organic Shop',
//       country: 'Росія',
//       type: 'Натуральний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зволоження та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт банана Екстракт жасмину',
//     },
//     storePrices: [
//       { name: 'Eva', price: 100, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 110, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 120, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 130, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 115, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 105, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 95, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 90, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 165,
//     category: 'shampoos',
//     name: 'Le Petit Marseillais Honey',
//     price: 150,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Живлення з медом і каріте.',
//     specs: { volume: '250 мл', type: 'Для сухого волосся', brand: 'Le Petit Marseillais' },
//     rating: 4.3,
//     views: 160,
//     code: 'LPM165',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Honey Extract, Butyrospermum Parkii Butter, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Le Petit Marseillais Honey з медом і маслом каріте живить сухе волосся, надаючи йому м’якість і блиск. Формула без парабенів.

// **Як діє?**

// Мед зволожує, а масло каріте живить і відновлює сухе волосся. Шампунь робить волосся гладким і слухняним. Аромат із нотками меду теплий і приємний.

// **Б’юті-поради**

// Поєднуйте з бальзамом Le Petit Marseillais Honey для інтенсивного догляду.
//       `.trim(),
//       brand: 'Le Petit Marseillais',
//       country: 'Франція',
//       type: 'Шампунь для сухого волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Живлення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Живлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Мед Масло каріте',
//     },
//     storePrices: [
//       { name: 'Eva', price: 150, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 160, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 170, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 180, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 165, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 155, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 145, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 140, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 166,
//     category: 'shampoos',
//     name: 'Yope Fresh Grass',
//     price: 160,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Натуральний шампунь з травами для ніжного очищення.',
//     specs: { volume: '300 мл', type: 'Органічний', brand: 'Yope' },
//     rating: 4.5,
//     views: 150,
//     code: 'SH166',
//     composition: 'Aqua, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Glycerin, Sodium Chloride, Panthenol, Verbena Officinalis Leaf Extract, Chamomilla Recutita Flower Extract, Citric Acid, Sodium Benzoate, Potassium Sorbate, Parfum, Limonene, Linalool.',
//     usage: 'Нанесіть на вологе волосся, спіньте, ретельно змийте водою.',
//     features: {
//       description: `
// Натуральний шампунь Yope Fresh Grass створений для ніжного догляду за волоссям. Засіб містить екстракти трав, які заспокоюють шкіру голови та надають волоссю природний блиск. Шампунь не містить сульфатів і парабенів, що робить його ідеальним для щоденного використання.

// **Як діє?**

// Формула шампуню збагачена екстрактами вербени та ромашки, які зміцнюють волосся, зменшують подразнення шкіри та надають відчуття свіжості. Засіб делікатно очищає, не пересушуючи волосся, та сприяє легкому розчісуванню.

// **Б’юті-поради**

// Для найкращого ефекту використовуйте разом із кондиціонером або маскою Yope Fresh Grass для додаткового зволоження та живлення.
//       `.trim(),
//       brand: 'Yope',
//       country: 'Польща',
//       type: 'Шампунь',
//       class: 'Натуральна косметика',
//       hairType: 'Для всіх типів волосся',
//       features: 'Органічний догляд',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Зволоження Зміцнення',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт вербени Екстракт ромашки',
//     },
//     storePrices: [
//       { name: 'Eva', price: 160, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 175, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 180, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 190, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 170, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 165, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 155, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 150, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 167,
//     category: 'shampoos',
//     name: 'HASK Argan Oil',
//     price: 180,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлюючий шампунь з аргановою олією.',
//     specs: { volume: '355 мл', type: 'Для сухого волосся', brand: 'HASK' },
//     rating: 4.6,
//     views: 180,
//     code: 'SH167',
//     composition: 'Aqua, Sodium C14-16 Olefin Sulfonate, Cocamidopropyl Betaine, Argania Spinosa Kernel Oil, Hydrolyzed Keratin, Panthenol, Sodium Chloride, Citric Acid, Sodium Benzoate, Potassium Sorbate, Parfum, Hexyl Cinnamal, Linalool.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте до утворення піни, змийте.',
//     features: {
//       description: `
// Шампунь HASK Argan Oil спеціально розроблений для відновлення сухого та пошкодженого волосся. Завдяки аргановій олії засіб глибоко зволожує та живить волосся, повертаючи йому м’якість і блиск.

// **Як діє?**

// Арганова олія, багата на антиоксиданти та жирні кислоти, відновлює структуру волосся, зменшує ламкість і захищає від зовнішніх впливів. Шампунь м’яко очищає, не пересушуючи шкіру голови, та сприяє легкому розчісуванню.

// **Б’юті-поради**

// Для комплексного догляду використовуйте разом із кондиціонером HASK Argan Oil для максимального зволоження.
//       `.trim(),
//       brand: 'HASK',
//       country: 'США',
//       type: 'Шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для сухого волосся Для пошкодженого волосся',
//       features: 'Відновлення волосся',
//       category: 'Засоби для миття волосся',
//       purpose: 'Живлення Відновлення Зволоження',
//       gender: 'Унісекс',
//       activeIngredients: 'Арганова олія Кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 180, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 195, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 200, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 210, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 190, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 185, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 175, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 170, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 168,
//     category: 'shampoos',
//     name: 'Petal Fresh Aloe & Citrus',
//     price: 140,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Органічний шампунь для свіжості та очищення.',
//     specs: { volume: '475 мл', type: 'Органічний', brand: 'Petal Fresh' },
//     rating: 4.4,
//     views: 130,
//     code: 'SH168',
//     composition: 'Aqua, Sodium Lauroyl Methyl Isethionate, Cocamidopropyl Betaine, Aloe Barbadensis Leaf Juice, Citrus Limon Fruit Extract, Sodium Chloride, Panthenol, Citric Acid, Sodium Benzoate, Potassium Sorbate, Parfum, Limonene.',
//     usage: 'Нанесіть на вологе волосся, спіньте, ретельно промийте.',
//     features: {
//       description: `
// Petal Fresh Aloe & Citrus — це органічний шампунь, який забезпечує свіжість і чистоту волосся. Завдяки натуральним компонентам, таким як алое вера та екстракт цитрусових, засіб освіжає шкіру голови та додає волоссю легкість.

// **Як діє?**

// Алое вера зволожує та заспокоює шкіру, а цитрусові екстракти надають волоссю природного блиску та легкості. Шампунь ніжно очищає, не містить сульфатів і підходить для щоденного використання.

// **Б’юті-поради**

// Використовуйте разом із кондиціонером Petal Fresh Aloe & Citrus для додаткового зволоження та захисту.
//       `.trim(),
//       brand: 'Petal Fresh',
//       country: 'США',
//       type: 'Шампунь',
//       class: 'Натуральна косметика',
//       hairType: 'Для всіх типів волосся',
//       features: 'Органічний догляд',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Зволоження Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Алое вера Екстракт цитрусових',
//     },
//     storePrices: [
//       { name: 'Eva', price: 140, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 155, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 160, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 170, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 150, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 145, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 135, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 130, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 169,
//     category: 'shampoos',
//     name: 'Bione Cosmetics Keratin',
//     price: 120,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь із кератином для відновлення волосся.',
//     specs: { volume: '260 мл', type: 'Для відновлення', brand: 'Bione Cosmetics' },
//     rating: 4.3,
//     views: 120,
//     code: 'SH169',
//     composition: 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Panthenol, Glycerin, Sodium Chloride, Citric Acid, Sodium Benzoate, Parfum, Linalool.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте водою.',
//     features: {
//       description: `
// Bione Cosmetics Keratin — шампунь із кератином, який відновлює пошкоджене волосся та повертає йому силу. Засіб ідеально підходить для тих, хто прагне здорового вигляду волосся.

// **Як діє?**

// Кератин заповнює пошкоджені ділянки волосся, зміцнює його структуру та зменшує ламкість. Шампунь ніжно очищає, надаючи волоссю гладкість і блиск.

// **Б’юті-поради**

// Для найкращого результату комбінуйте з маскою або кондиціонером Bione Cosmetics Keratin.
//       `.trim(),
//       brand: 'Bione Cosmetics',
//       country: 'Чехія',
//       type: 'Шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення волосся',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Зміцнення Гладкість',
//       gender: 'Унісекс',
//       activeIngredients: 'Кератин Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 120, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 135, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 140, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 150, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 130, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 125, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 115, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 110, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 170,
//     category: 'shampoos',
//     name: 'Ziaja Goat’s Milk Shampoo',
//     price: 90,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь із козячим молоком для делікатного живлення.',
//     specs: { volume: '400 мл', type: 'Для сухого волосся', brand: 'Ziaja' },
//     rating: 4.2,
//     views: 110,
//     code: 'SH170',
//     composition: 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Goat Milk Extract, Glycerin, Sodium Chloride, Panthenol, Citric Acid, Sodium Benzoate, Parfum, Linalool.',
//     usage: 'Нанесіть на вологе волосся, спіньте, змийте водою.',
//     features: {
//       description: `
// Ziaja Goat’s Milk Shampoo — це ніжний шампунь із козячим молоком, який живить сухе волосся та повертає йому м’якість. Засіб ідеально підходить для чутливої шкіри голови.

// **Як діє?**

// Екстракт козячого молока зволожує та живить волосся, зменшує сухість і ламкість. Шампунь м’яко очищає, не викликаючи подразнень, та сприяє здоровому вигляду волосся.

// **Б’юті-поради**

// Використовуйте разом із кондиціонером Ziaja Goat’s Milk для максимального живлення.
//       `.trim(),
//       brand: 'Ziaja',
//       country: 'Польща',
//       type: 'Шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Живлення волосся',
//       category: 'Засоби для миття волосся',
//       purpose: 'Живлення Зволоження',
//       gender: 'Унісекс',
//       activeIngredients: 'Козяче молоко Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 90, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 100, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 110, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 120, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 95, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 90, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 85, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 80, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 171,
//     category: 'shampoos',
//     name: 'Cosnature Caffeine Shampoo',
//     price: 130,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Органічний шампунь із кофеїном для зміцнення волосся.',
//     specs: { volume: '250 мл', type: 'Органічний', brand: 'Cosnature' },
//     rating: 4.4,
//     views: 140,
//     code: 'SH171',
//     composition: 'Aqua, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Caffeine, Glycerin, Panthenol, Hydrolyzed Wheat Protein, Sodium Chloride, Citric Acid, Sodium Benzoate, Parfum, Limonene.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте.',
//     features: {
//       description: `
// Cosnature Caffeine Shampoo — органічний шампунь із кофеїном, який зміцнює корені волосся та сприяє їх росту. Засіб ідеально підходить для тонкого та ослабленого волосся.

// **Як діє?**

// Кофеїн стимулює кровообіг у шкірі голови, зміцнюючи волосяні фолікули. Шампунь м’яко очищає, додаючи волоссю об’єм і силу, без використання сульфатів.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Cosnature для додаткового догляду та зміцнення.
//       `.trim(),
//       brand: 'Cosnature',
//       country: 'Німеччина',
//       type: 'Шампунь',
//       class: 'Натуральна косметика',
//       hairType: 'Для тонкого волосся Для ослабленого волосся',
//       features: 'Зміцнення волосся',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Об’єм',
//       gender: 'Унісекс',
//       activeIngredients: 'Кофеїн Пшеничний протеїн',
//     },
//     storePrices: [
//       { name: 'Eva', price: 130, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 145, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 150, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 160, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 140, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 135, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 125, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 120, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 172,
//     category: 'shampoos',
//     name: 'Botavikos Basil & Orange',
//     price: 150,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Натуральний шампунь з ароматом базиліку та апельсину.',
//     specs: { volume: '300 мл', type: 'Натуральний', brand: 'Botavikos' },
//     rating: 4.5,
//     views: 150,
//     code: 'SH172',
//     composition: 'Aqua, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Ocimum Basilicum Leaf Extract, Citrus Aurantium Dulcis Peel Oil, Glycerin, Sodium Chloride, Citric Acid, Sodium Benzoate, Parfum, Limonene, Linalool.',
//     usage: 'Нанесіть на вологе волосся, спіньте, змийте водою.',
//     features: {
//       description: `
// Botavikos Basil & Orange — натуральний шампунь із ароматом базиліку та апельсину, який освіжає та тонізує. Засіб ідеально підходить для всіх типів волосся, надаючи їм блиск і легкість.

// **Як діє?**

// Екстракт базиліку зміцнює волосся, а апельсинова олія додає блиску та свіжості. Шампунь ніжно очищає, не пересушуючи шкіру, та залишає приємний аромат.

// **Б’юті-поради**

// Для повного догляду використовуйте разом із кондиціонером Botavikos для додаткового зволоження.
//       `.trim(),
//       brand: 'Botavikos',
//       country: 'Росія',
//       type: 'Шампунь',
//       class: 'Натуральна косметика',
//       hairType: 'Для всіх типів волосся',
//       features: 'Ароматерапія',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Освіження Блиск',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт базиліку Апельсинова олія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 150, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 165, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 170, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 180, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 160, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 155, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 145, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 140, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 173,
//     category: 'shampoos',
//     name: 'Fresh Juice Coconut & Milk',
//     price: 110,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь із кокосом для м’якості та зволоження.',
//     specs: { volume: '500 мл', type: 'Для сухого волосся', brand: 'Fresh Juice' },
//     rating: 4.3,
//     views: 120,
//     code: 'SH173',
//     composition: 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Cocos Nucifera Oil, Milk Protein, Glycerin, Sodium Chloride, Citric Acid, Sodium Benzoate, Parfum, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, спіньте, змийте.',
//     features: {
//       description: `
// Fresh Juice Coconut & Milk — шампунь із кокосовою олією та молочними протеїнами, який забезпечує м’якість і зволоження сухого волосся. Засіб ідеально підходить для щоденного догляду.

// **Як діє?**

// Кокосова олія живить і зволожує волосся, а молочні протеїни зміцнюють його структуру. Шампунь ніжно очищає, надаючи волоссю гладкість і блиск.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Fresh Juice Coconut & Milk для максимального ефекту.
//       `.trim(),
//       brand: 'Fresh Juice',
//       country: 'Україна',
//       type: 'Шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Живлення волосся',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Живлення Гладкість',
//       gender: 'Унісекс',
//       activeIngredients: 'Кокосова олія Молочні протеїни',
//     },
//     storePrices: [
//       { name: 'Eva', price: 110, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 125, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 130, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 140, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 120, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 115, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 105, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 100, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 174,
//     category: 'shampoos',
//     name: 'Babaria Aloe Vera',
//     price: 100,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь з алое вера для заспокоєння та зволоження.',
//     specs: { volume: '400 мл', type: 'Для всіх типів волосся', brand: 'Babaria' },
//     rating: 4.2,
//     views: 110,
//     code: 'SH174',
//     composition: 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Aloe Barbadensis Leaf Juice, Glycerin, Sodium Chloride, Panthenol, Citric Acid, Sodium Benzoate, Parfum, Limonene.',
//     usage: 'Нанесіть на вологе волосся, спіньте, змийте водою.',
//     features: {
//       description: `
// Babaria Aloe Vera — шампунь із алое вера, який заспокоює шкіру голови та зволожує волосся. Засіб підходить для всіх типів волосся, забезпечуючи ніжний догляд.

// **Як діє?**

// Алое вера зволожує та заспокоює шкіру, зменшуючи подразнення. Шампунь м’яко очищає, надаючи волоссю блиск і легкість.

// **Б’юті-поради**

// Використовуйте разом із кондиціонером Babaria Aloe Vera для комплексного догляду.
//       `.trim(),
//       brand: 'Babaria',
//       country: 'Іспанія',
//       type: 'Шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зволоження волосся',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Алое вера Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 100, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 115, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 120, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 130, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 110, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 105, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 95, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 90, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 175,
//     category: 'shampoos',
//     name: 'Balea Professional Oil Repair',
//     price: 130,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь для інтенсивного відновлення пошкодженого волосся.',
//     specs: { volume: '250 мл', type: 'Для пошкодженого волосся', brand: 'Balea' },
//     rating: 4.4,
//     views: 140,
//     code: 'SH175',
//     composition: 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Argania Spinosa Kernel Oil, Hydrolyzed Keratin, Glycerin, Sodium Chloride, Citric Acid, Sodium Benzoate, Parfum, Linalool.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте.',
//     features: {
//       description: `
// Balea Professional Oil Repair — шампунь для інтенсивного відновлення пошкодженого волосся. Засіб із аргановою олією та кератином повертає волоссю силу та блиск.

// **Як діє?**

// Арганова олія живить і зволожує, а кератин відновлює пошкоджену структуру волосся. Шампунь м’яко очищає, зменшуючи ламкість і посіченість кінчиків.

// **Б’юті-поради**

// Для найкращого результату використовуйте разом із маскою Balea Professional Oil Repair.
//       `.trim(),
//       brand: 'Balea',
//       country: 'Німеччина',
//       type: 'Шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення волосся',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Живлення Зміцнення',
//       gender: 'Унісекс',
//       activeIngredients: 'Арганова олія Кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 130, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 145, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 150, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 160, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 140, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 135, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 125, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 120, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 176,
//     category: 'shampoos',
//     name: 'Insight Daily Use',
//     price: 170,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь для щоденного використання.',
//     specs: { volume: '400 мл', type: 'Універсальний', brand: 'Insight' },
//     rating: 4.5,
//     views: 150,
//     code: 'SH176',
//     composition: 'Aqua, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Glycerin, Panthenol, Hydrolyzed Rice Protein, Sodium Chloride, Citric Acid, Sodium Benzoate, Parfum, Limonene.',
//     usage: 'Нанесіть на вологе волосся, спіньте, змийте водою.',
//     features: {
//       description: `
// Insight Daily Use — шампунь для щоденного догляду за всіма типами волосся. Засіб забезпечує ніжне очищення та підтримку здоров’я волосся.

// **Як діє?**

// Формула з пантенолом і рисовим протеїном зволожує та зміцнює волосся, надаючи йому природний блиск. Шампунь м’яко очищає, не пересушуючи шкіру голови.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Insight Daily Use для комплексного догляду.
//       `.trim(),
//       brand: 'Insight',
//       country: 'Італія',
//       type: 'Шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Щоденний догляд',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Зволоження Зміцнення',
//       gender: 'Унісекс',
//       activeIngredients: 'Пантенол Рисовий протеїн',
//     },
//     storePrices: [
//       { name: 'Eva', price: 170, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 185, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 190, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 200, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 180, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 175, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 165, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 160, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 177,
//     category: 'shampoos',
//     name: 'Apivita Holistic Hair Care',
//     price: 250,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Органічний шампунь із лавром для здоров’я волосся.',
//     specs: { volume: '250 мл', type: 'Органічний', brand: 'Apivita' },
//     rating: 4.7,
//     views: 170,
//     code: 'SH177',
//     composition: 'Aqua, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Laurus Nobilis Leaf Extract, Propolis Extract, Glycerin, Panthenol, Sodium Chloride, Citric Acid, Sodium Benzoate, Parfum, Limonene.',
//     usage: 'Нанесіть на вологе волосся, спіньте, змийте водою.',
//     features: {
//       description: `
// Apivita Holistic Hair Care — органічний шампунь із екстрактом лавра та прополісу, який забезпечує комплексний догляд за волоссям. Засіб зміцнює та живить волосся.

// **Як діє?**

// Екстракт лавра зміцнює корені, а прополіс має антиоксидантну дію, захищаючи волосся від зовнішніх впливів. Шампунь ніжно очищає, надаючи волоссю блиск і силу.

// **Б’юті-поради**

// Для максимального ефекту використовуйте разом із маскою Apivita Holistic Hair Care.
//       `.trim(),
//       brand: 'Apivita',
//       country: 'Греція',
//       type: 'Шампунь',
//       class: 'Натуральна косметика',
//       hairType: 'Для всіх типів волосся',
//       features: 'Органічний догляд',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Живлення Блиск',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт лавра Прополіс',
//     },
//     storePrices: [
//       { name: 'Eva', price: 250, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 265, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 270, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 280, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 260, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 255, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 245, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 240, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 178,
//     category: 'shampoos',
//     name: 'Desert Essence Coconut Shampoo',
//     price: 190,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь із кокосом для глибокого зволоження.',
//     specs: { volume: '237 мл', type: 'Для сухого волосся', brand: 'Desert Essence' },
//     rating: 4.6,
//     views: 160,
//     code: 'SH178',
//     composition: 'Aqua, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Cocos Nucifera Oil, Hydrolyzed Jojoba Esters, Glycerin, Sodium Chloride, Citric Acid, Sodium Benzoate, Parfum, Limonene.',
//     usage: 'Нанесіть на вологе волосся, спіньте, змийте.',
//     features: {
//       description: `
// Desert Essence Coconut Shampoo — шампунь із кокосовою олією для глибокого зволоження сухого волосся. Засіб повертає волоссю м’якість і блиск.

// **Як діє?**

// Кокосова олія живить і зволожує волосся, а гідролізовані ефіри жожоба зміцнюють його структуру. Шампунь ніжно очищає, не пересушуючи шкіру.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Desert Essence Coconut для максимального зволоження.
//       `.trim(),
//       brand: 'Desert Essence',
//       country: 'США',
//       type: 'Шампунь',
//       class: 'Натуральна косметика',
//       hairType: 'Для сухого волосся',
//       features: 'Зволоження волосся',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Живлення Блиск',
//       gender: 'Унісекс',
//       activeIngredients: 'Кокосова олія Ефіри жожоба',
//     },
//     storePrices: [
//       { name: 'Eva', price: 190, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 205, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 210, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 220, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 200, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 195, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 185, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 180, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 179,
//     category: 'shampoos',
//     name: 'Natura Estonica Ginseng & Acai',
//     price: 100,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Шампунь із женьшенем для зміцнення волосся.',
//     specs: { volume: '400 мл', type: 'Зміцнюючий', brand: 'Natura Estonica' },
//     rating: 4.3,
//     views: 120,
//     code: 'SH179',
//     composition: 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Panax Ginseng Root Extract, Euterpe Oleracea Fruit Extract, Glycerin, Sodium Chloride, Citric Acid, Sodium Benzoate, Parfum, Linalool.',
//     usage: 'Нанесіть на вологе волосся, спіньте, змийте.',
//     features: {
//       description: `
// Natura Estonica Ginseng & Acai — шампунь із женьшенем і ягодами асаї, який зміцнює волосся та стимулює його ріст. Засіб додає волоссю силу та блиск.

// **Як діє?**

// Екстракт женьшеню зміцнює корені, а ягоди асаї живлять і захищають волосся від зовнішніх впливів. Шампунь м’яко очищає, надаючи волоссю здорового вигляду.

// **Б’юті-поради**

// Використовуйте разом із кондиціонером Natura Estonica для комплексного догляду.
//       `.trim(),
//       brand: 'Natura Estonica',
//       country: 'Естонія',
//       type: 'Шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для ослабленого волосся',
//       features: 'Зміцнення волосся',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Живлення Блиск',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт женьшеню Ягоди асаї',
//     },
//     storePrices: [
//       { name: 'Eva', price: 100, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 115, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 120, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 130, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 110, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 105, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 95, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 90, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 180,
//     category: 'shampoos',
//     name: 'EcoLab Argan & Jojoba',
//     price: 160,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Органічний шампунь із арганом і жожоба.',
//     specs: { volume: '250 мл', type: 'Натуральний', brand: 'EcoLab' },
//     rating: 4.5,
//     views: 150,
//     code: 'SH180',
//     composition: 'Aqua, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Argania Spinosa Kernel Oil, Simmondsia Chinensis Seed Oil, Glycerin, Sodium Chloride, Citric Acid, Sodium Benzoate, Parfum, Limonene.',
//     usage: 'Нанесіть на вологе волосся, спіньте, змийте водою.',
//     features: {
//       description: `
// EcoLab Argan & Jojoba — органічний шампунь із аргановою олією та олією жожоба для інтенсивного живлення та зволоження волосся. Засіб повертає волоссю блиск і силу.

// **Як діє?**

// Арганова олія живить і відновлює, а олія жожоба зволожує та захищає волосся від зовнішніх впливів. Шампунь ніжно очищає, не містить сульфатів і парабенів.

// **Б’юті-поради**

// Для комплексного догляду використовуйте разом із кондиціонером EcoLab Argan & Jojoba.
//       `.trim(),
//       brand: 'EcoLab',
//       country: 'Росія',
//       type: 'Шампунь',
//       class: 'Натуральна косметика',
//       hairType: 'Для сухого волосся Для пошкодженого волосся',
//       features: 'Органічний догляд',
//       category: 'Засоби для миття волосся',
//       purpose: 'Живлення Зволоження Відновлення',
//       gender: 'Унісекс',
//       activeIngredients: 'Арганова олія Олія жожоба',
//     },
//     storePrices: [
//       { name: 'Eva', price: 160, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 175, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 180, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 190, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 170, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 165, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 155, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 150, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 181,
//     category: 'shampoos',
//     name: 'Botanic Therapy Olive & Mythic Oil',
//     price: 135,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для неслухняного волосся.',
//     specs: { volume: '400 мл', type: 'Для гладкості', brand: 'Garnier' },
//     rating: 4.3,
//     views: 160,
//     code: 'GAR181',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Olea Europaea Fruit Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Garnier Botanic Therapy Olive & Mythic Oil з олією оливи розгладжує неслухняне волосся, надаючи йому м’якість і блиск. Формула без парабенів.

// **Як діє?**

// Олія оливи зволожує і дисциплінує волосся, зменшуючи пухнастість. Шампунь робить зачіску гладкою і слухняною. Аромат із нотками оливи ніжний і приємний.

// **Б’юті-поради**

// Поєднуйте з бальзамом Botanic Therapy Olive & Mythic Oil для максимальної гладкості.
//       `.trim(),
//       brand: 'Garnier',
//       country: 'Франція',
//       type: 'Шампунь для гладкості',
//       class: 'Мас-маркет',
//       hairType: 'Для неслухняного волосся',
//       features: 'Гладкість та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Для гладкості Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Олія оливи',
//     },
//     storePrices: [
//       { name: 'Eva', price: 135, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 145, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 155, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 165, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 150, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 140, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 130, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 125, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 182,
//     category: 'shampoos',
//     name: 'Green Pharmacy Tar Shampoo',
//     price: 90,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Проти лупи з дьогтем.',
//     specs: { volume: '350 мл', type: 'Проти лупи', brand: 'Green Pharmacy' },
//     rating: 4.2,
//     views: 150,
//     code: 'GRE182',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Betula Alba Bark Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте 2-3 рази на тиждень.',
//     features: {
//       description: `
// Шампунь Green Pharmacy Tar Shampoo з дьогтем берези ефективно бореться з лупою і заспокоює шкіру голови. Натуральна формула без парабенів.

// **Як діє?**

// Дьоготь берези зменшує лупу і подразнення, нормалізуючи стан шкіри голови. Шампунь очищає і освіжає волосся. Аромат нейтральний, без сильного запаху дьогтю.

// **Б’юті-поради**

// Поєднуйте з бальзамом Green Pharmacy для комплексного догляду.
//       `.trim(),
//       brand: 'Green Pharmacy',
//       country: 'Україна',
//       type: 'Шампунь проти лупи',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Проти лупи та очищення',
//       category: 'Засоби для миття волосся',
//       purpose: 'Проти лупи Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Дьоготь берези',
//     },
//     storePrices: [
//       { name: 'Eva', price: 90, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 100, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 110, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 120, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 105, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 95, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 85, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 80, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 183,
//     category: 'shampoos',
//     name: 'Organic Kitchen Banana Milkshake',
//     price: 95,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Фруктовий аромат.',
//     specs: { volume: '250 мл', type: 'Для всіх типів волосся', brand: 'Organic Kitchen' },
//     rating: 4.2,
//     views: 155,
//     code: 'ORG183',
//     composition: 'Aqua / Water, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Musa Paradisiaca Fruit Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Organic Kitchen Banana Milkshake з екстрактом банана м’яко очищає і зволожує волосся, надаючи йому блиск і фруктовий аромат. Натуральна формула.

// **Як діє?**

// Екстракт банана зволожує і живить волосся, роблячи його м’яким і блискучим. Шампунь освіжає і додає легкість. Аромат із нотками банана солодкий і приємний.

// **Б’юті-поради**

// Поєднуйте з бальзамом Organic Kitchen для посиленого догляду.
//       `.trim(),
//       brand: 'Organic Kitchen',
//       country: 'Росія',
//       type: 'Натуральний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зволоження та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт банана',
//     },
//     storePrices: [
//       { name: 'Eva', price: 95, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 105, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 115, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 125, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 110, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 100, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 90, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 85, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 184,
//     category: 'shampoos',
//     name: 'Timotei Radiance',
//     price: 120,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Блиск для фарбованого волосся.',
//     specs: { volume: '400 мл', type: 'Для фарбованого волосся', brand: 'Timotei' },
//     rating: 4.3,
//     views: 160,
//     code: 'TIM184',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Camellia Sinensis Leaf Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Timotei Radiance з екстрактом зеленого чаю захищає колір фарбованого волосся, надаючи йому блиск і яскравість. Формула без парабенів.

// **Як діє?**

// Екстракт зеленого чаю живить і захищає колір, запобігаючи вимиванню. Шампунь робить волосся блискучим і здоровим. Аромат із нотками чаю освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Timotei Radiance для тривалого захисту кольору.
//       `.trim(),
//       brand: 'Timotei',
//       country: 'Велика Британія',
//       type: 'Шампунь для фарбованого волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для фарбованого волосся',
//       features: 'Захист кольору та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Захист кольору Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт зеленого чаю',
//     },
//     storePrices: [
//       { name: 'Eva', price: 120, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 130, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 140, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 150, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 135, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 125, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 115, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 110, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 185,
//     category: 'shampoos',
//     name: 'Dove Nourishing Secrets',
//     price: 135,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'З кокосом і куркумою.',
//     specs: { volume: '400 мл', type: 'Живильний', brand: 'Dove' },
//     rating: 4.4,
//     views: 165,
//     code: 'DOV185',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Cocos Nucifera Oil, Curcuma Longa Root Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Dove Nourishing Secrets з кокосовою олією і куркумою живить сухе волосся, надаючи йому м’якість і блиск. Формула без парабенів.

// **Як діє?**

// Кокосова олія зволожує, а екстракт куркуми додає блиск і силу. Шампунь робить волосся гладким і здоровим. Аромат із нотками кокоса теплий і приємний.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Dove Nourishing Secrets для інтенсивного живлення.
//       `.trim(),
//       brand: 'Dove',
//       country: 'США',
//       type: 'Живильний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для сухого волосся',
//       features: 'Живлення та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Живлення Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Кокосова олія Екстракт куркуми',
//     },
//     storePrices: [
//       { name: 'Eva', price: 135, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 145, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 155, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 165, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 150, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 140, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 130, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 125, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 186,
//     category: 'shampoos',
//     name: 'Fructis Pure Clean',
//     price: 130,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Без силіконів та парабенів.',
//     specs: { volume: '370 мл', type: 'Очищаючий', brand: 'Garnier' },
//     rating: 4.3,
//     views: 160,
//     code: 'GAR186',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Citrus Limon Fruit Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Garnier Fructis Pure Clean з екстрактом лимона глибоко очищає волосся, не обтяжуючи його. Формула без силіконів і парабенів.

// **Як діє?**

// Екстракт лимона освіжає і видаляє надлишки жиру, надаючи волоссю чистоту і легкість. Шампунь ідеальний для нормального і жирного волосся. Аромат із нотками цитрусів бадьорить.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Fructis Pure Clean для легкості зачіски.
//       `.trim(),
//       brand: 'Garnier',
//       country: 'Франція',
//       type: 'Очищаючий шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для нормального і жирного волосся',
//       features: 'Очищення та легкість',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт лимона',
//     },
//     storePrices: [
//       { name: 'Eva', price: 130, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 140, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 150, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 160, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 145, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 135, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 125, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 120, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 187,
//     category: 'shampoos',
//     name: 'Matrix Total Results So Silver',
//     price: 220,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для блондинок і сивини.',
//     specs: { volume: '300 мл', type: 'Фіолетовий шампунь', brand: 'Matrix' },
//     rating: 4.5,
//     views: 175,
//     code: 'MAT187',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, CI 60730 / Acid Violet 43, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, залиште на 3-5 хвилин, змийте. Використовуйте 1-2 рази на тиждень.',
//     features: {
//       description: `
// Шампунь Matrix Total Results So Silver нейтралізує жовтизну на світлому і сивому волоссі, надаючи йому холодний відтінок. Професійна формула.

// **Як діє?**

// Фіолетові пігменти нейтралізують теплі тони, зберігаючи чистий блонд або сивину. Шампунь додає блиск і м’якість. Аромат нейтральний і ненав’язливий.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Matrix So Silver для посиленого ефекту.
//       `.trim(),
//       brand: 'Matrix',
//       country: 'США',
//       type: 'Фіолетовий шампунь',
//       class: 'Професійна косметика',
//       hairType: 'Для світлого і сивого волосся',
//       features: 'Нейтралізація жовтизни та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Нейтралізація тону Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Фіолетові пігменти',
//     },
//     storePrices: [
//       { name: 'Eva', price: 220, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 230, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 240, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 250, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 235, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 225, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 215, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 210, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 188,
//     category: 'shampoos',
//     name: 'Londa Color Radiance',
//     price: 190,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Захист кольору.',
//     specs: { volume: '250 мл', type: 'Для фарбованого волосся', brand: 'Londa' },
//     rating: 4.4,
//     views: 170,
//     code: 'LON188',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Passiflora Incarnata Fruit Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Londa Color Radiance з екстрактом маракуї захищає колір фарбованого волосся, надаючи йому блиск і яскравість. Професійна формула.

// **Як діє?**

// Екстракт маракуї запобігає вимиванню кольору і додає блиск. Шампунь робить волосся м’яким і здоровим. Аромат із нотками фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Londa Color Radiance для тривалого захисту кольору.
//       `.trim(),
//       brand: 'Londa',
//       country: 'Німеччина',
//       type: 'Шампунь для фарбованого волосся',
//       class: 'Професійна косметика',
//       hairType: 'Для фарбованого волосся',
//       features: 'Захист кольору та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Захист кольору Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт маракуї',
//     },
//     storePrices: [
//       { name: 'Eva', price: 190, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 200, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 210, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 220, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 205, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 195, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 185, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 180, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 189,
//     category: 'shampoos',
//     name: 'Kallos Color Shampoo',
//     price: 110,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для фарбованого волосся.',
//     specs: { volume: '1000 мл', type: 'Для фарбованого волосся', brand: 'Kallos' },
//     rating: 4.2,
//     views: 155,
//     code: 'KAL189',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Linum Usitatissimum Seed Oil, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Kallos Color Shampoo з лляною олією захищає колір фарбованого волосся, надаючи йому блиск і м’якість. Формула для економічного використання.

// **Як діє?**

// Лляна олія живить і захищає колір, запобігаючи вимиванню. Шампунь робить волосся гладким і блискучим. Аромат нейтральний і ненав’язливий.

// **Б’юті-поради**

// Поєднуйте з маскою Kallos Color для тривалого захисту кольору.
//       `.trim(),
//       brand: 'Kallos',
//       country: 'Угорщина',
//       type: 'Шампунь для фарбованого волосся',
//       class: 'Мас-маркет',
//       hairType: 'Для фарбованого волосся',
//       features: 'Захист кольору та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Захист кольору Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Лляна олія',
//     },
//     storePrices: [
//       { name: 'Eva', price: 110, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 120, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 130, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 140, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 125, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 115, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 105, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 100, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 190,
//     category: 'shampoos',
//     name: 'Revlon Equave Hydro',
//     price: 180,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження і легкість.',
//     specs: { volume: '250 мл', type: 'Для сухого волосся', brand: 'Revlon' },
//     rating: 4.4,
//     views: 170,
//     code: 'REV190',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Revlon Equave Hydro з гідролізованим кератином зволожує сухе волосся, надаючи йому легкість і блиск. Професійна формула.

// **Як діє?**

// Гідролізований кератин зволожує і відновлює структуру волосся, зменшуючи сухість. Шампунь робить волосся гладким і слухняним. Аромат із нотками фруктів освіжає.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Revlon Equave Hydro для інтенсивного зволоження.
//       `.trim(),
//       brand: 'Revlon',
//       country: 'США',
//       type: 'Шампунь для сухого волосся',
//       class: 'Професійна косметика',
//       hairType: 'Для сухого волосся',
//       features: 'Зволоження та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Гідролізований кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 180, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 190, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 200, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 210, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 195, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 185, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 175, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 170, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 191,
//     category: 'shampoos',
//     name: 'CHI Infra Moisture Therapy',
//     price: 300,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження та блиск.',
//     specs: { volume: '355 мл', type: 'Професійний', brand: 'CHI' },
//     rating: 4.6,
//     views: 180,
//     code: 'CHI191',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Silk Amino Acids, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь CHI Infra Moisture Therapy з амінокислотами шовку глибоко зволожує волосся, надаючи йому блиск і м’якість. Професійна формула.

// **Як діє?**

// Амінокислоти шовку зволожують і відновлюють структуру волосся, роблячи його гладким і блискучим. Шампунь ідеальний для всіх типів волосся. Аромат із нотками квітів ніжний.

// **Б’юті-поради**

// Поєднуйте з кондиціонером CHI Infra для комплексного догляду.
//       `.trim(),
//       brand: 'CHI',
//       country: 'США',
//       type: 'Професійний шампунь',
//       class: 'Професійна косметика',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зволоження та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Амінокислоти шовку',
//     },
//     storePrices: [
//       { name: 'Eva', price: 300, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 310, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 320, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 330, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 315, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 305, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 295, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 290, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 192,
//     category: 'shampoos',
//     name: 'Eveline Bio Burdock Shampoo',
//     price: 105,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Проти випадіння волосся.',
//     specs: { volume: '400 мл', type: 'Проти випадіння', brand: 'Eveline' },
//     rating: 4.2,
//     views: 155,
//     code: 'EVE192',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Arctium Lappa Root Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте регулярно для зміцнення.',
//     features: {
//       description: `
// Шампунь Eveline Bio Burdock Shampoo з екстрактом лопуха зміцнює волосся, зменшуючи випадіння і стимулюючи ріст. Натуральна формула.

// **Як діє?**

// Екстракт лопуха зміцнює волосяні фолікули і живить шкіру голови. Шампунь робить волосся сильним і здоровим. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з сироваткою Eveline Bio Burdock для посиленого ефекту.
//       `.trim(),
//       brand: 'Eveline',
//       country: 'Польща',
//       type: 'Шампунь проти випадіння',
//       class: 'Мас-маркет',
//       hairType: 'Для слабкого волосся',
//       features: 'Зміцнення та проти випадіння',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Проти випадіння',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт лопуха',
//     },
//     storePrices: [
//       { name: 'Eva', price: 105, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 115, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 125, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 135, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 120, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 110, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 100, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 95, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 193,
//     category: 'shampoos',
//     name: 'Apis Natural Solution',
//     price: 150,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Натуральний шампунь з вівсом.',
//     specs: { volume: '300 мл', type: 'Натуральний', brand: 'Apis' },
//     rating: 4.3,
//     views: 160,
//     code: 'API193',
//     composition: 'Aqua / Water, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Avena Sativa Kernel Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Apis Natural Solution з екстрактом вівса м’яко очищає і зволожує волосся, надаючи йому м’якість і блиск. Натуральна формула без парабенів.

// **Як діє?**

// Екстракт вівса заспокоює шкіру голови і зволожує волосся, роблячи його гладким і здоровим. Шампунь освіжає і додає блиск. Аромат із нотками трав ніжний.

// **Б’юті-поради**

// Поєднуйте з бальзамом Apis Natural Solution для комплексного догляду.
//       `.trim(),
//       brand: 'Apis',
//       country: 'Польща',
//       type: 'Натуральний шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Зволоження та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зволоження Для блиску Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт вівса',
//     },
//     storePrices: [
//       { name: 'Eva', price: 150, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 160, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 170, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 180, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 165, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 155, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 145, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 140, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 194,
//     category: 'shampoos',
//     name: 'Yves Rocher Pure Detox',
//     price: 160,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Глибоке очищення.',
//     specs: { volume: '300 мл', type: 'Очищаючий', brand: 'Yves Rocher' },
//     rating: 4.3,
//     views: 165,
//     code: 'YVE194',
//     composition: 'Aqua / Water, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Moringa Oleifera Seed Extract, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Використовуйте 1-2 рази на тиждень.',
//     features: {
//       description: `
// Шампунь Yves Rocher Pure Detox з екстрактом морінги глибоко очищає волосся, видаляючи забруднення і надлишки жиру. Натуральна формула.

// **Як діє?**

// Екстракт морінги очищає і освіжає, надаючи волоссю легкість і блиск. Шампунь ідеальний для жирного і нормального волосся. Аромат із нотками трав бадьорить.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Yves Rocher для комплексного догляду.
//       `.trim(),
//       brand: 'Yves Rocher',
//       country: 'Франція',
//       type: 'Очищаючий шампунь',
//       class: 'Мідл-маркет',
//       hairType: 'Для жирного і нормального волосся',
//       features: 'Очищення та легкість',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт морінги',
//     },
//     storePrices: [
//       { name: 'Eva', price: 160, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 170, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 180, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 190, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 175, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 165, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 155, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 150, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 195,
//     category: 'shampoos',
//     name: 'Natura Kamchatka Volcanic Shampoo',
//     price: 120,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Мінерали та енергія.',
//     specs: { volume: '400 мл', type: 'Натуральний', brand: 'Natura Kamchatka' },
//     rating: 4.2,
//     views: 155,
//     code: 'NAT195',
//     composition: 'Aqua / Water, Sodium Coco-Sulfate, Cocamidopropyl Betaine, Volcanic Ash, Sodium Benzoate, Citric Acid, Parfum / Fragrance, Linalool, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте. Підходить для щоденного використання.',
//     features: {
//       description: `
// Шампунь Natura Kamchatka Volcanic Shampoo з вулканічним попелом тонізує і живить волосся, надаючи йому енергію і блиск. Натуральна формула.

// **Як діє?**

// Вулканічний попіл насичує волосся мінералами, зміцнюючи і освіжаючи його. Шампунь робить волосся бадьорим і блискучим. Аромат із нотками трав освіжає.

// **Б’юті-поради**

// Поєднуйте з бальзамом Natura Kamchatka для додаткової енергії.
//       `.trim(),
//       brand: 'Natura Kamchatka',
//       country: 'Росія',
//       type: 'Натуральний шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для всіх типів волосся',
//       features: 'Тонізування та блиск',
//       category: 'Засоби для миття волосся',
//       purpose: 'Очищення Для блиску',
//       gender: 'Унісекс',
//       activeIngredients: 'Вулканічний попіл',
//     },
//     storePrices: [
//       { name: 'Eva', price: 120, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 130, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 140, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 150, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 135, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 125, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 115, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 110, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 196,
//     category: 'shampoos',
//     name: 'Bielita Revivor Shampoo',
//     price: 100,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлення і блиск.',
//     specs: { volume: '450 мл', type: 'Для ослабленого волосся', brand: 'Bielita' },
//     rating: 4.2,
//     views: 110,
//     code: 'SH196',
//     composition: 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Panthenol, Glycerin, Sodium Chloride, Citric Acid, Sodium Benzoate, Parfum, Linalool.',
//     usage: 'Нанесіть на вологе волосся, спіньте, змийте водою.',
//     features: {
//       description: `
// Шампунь Bielita Revivor призначений для відновлення ослабленого волосся, надаючи йому блиск і силу. Засіб м’яко очищає та живить волосся.

// **Як діє?**

// Кератин і пантенол у складі відновлюють структуру волосся, зменшують ламкість і додають природного блиску. Шампунь підходить для щоденного використання.

// **Б’юті-поради**

// Для кращого ефекту використовуйте разом із кондиціонером Bielita Revivor.
//       `.trim(),
//       brand: 'Bielita',
//       country: 'Білорусь',
//       type: 'Шампунь',
//       class: 'Мас-маркет',
//       hairType: 'Для ослабленого волосся',
//       features: 'Відновлення волосся',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Блиск Зміцнення',
//       gender: 'Унісекс',
//       activeIngredients: 'Кератин Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 100, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 110, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 115, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 120, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 105, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 100, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 95, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 90, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 197,
//     category: 'shampoos',
//     name: 'Esthetic House CP-1',
//     price: 270,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відновлює кератин.',
//     specs: { volume: '500 мл', type: 'Кератиновий', brand: 'Esthetic House' },
//     rating: 4.6,
//     views: 180,
//     code: 'SH197',
//     composition: 'Aqua, Sodium C14-16 Olefin Sulfonate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Hydrolyzed Silk, Panthenol, Sodium Chloride, Citric Acid, Sodium Benzoate, Parfum, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте до утворення піни, змийте.',
//     features: {
//       description: `
// Esthetic House CP-1 — професійний кератиновий шампунь для відновлення пошкодженого волосся. Засіб повертає волоссю гладкість і блиск.

// **Як діє?**

// Гідролізований кератин і шовк заповнюють пошкоджені ділянки волосся, зміцнюють його структуру та зменшують ламкість. Шампунь ніжно очищає, надаючи волоссю здоровий вигляд.

// **Б’юті-поради**

// Для комплексного догляду використовуйте разом із кондиціонером Esthetic House CP-1.
//       `.trim(),
//       brand: 'Esthetic House',
//       country: 'Південна Корея',
//       type: 'Шампунь',
//       class: 'Професійна косметика',
//       hairType: 'Для пошкодженого волосся',
//       features: 'Відновлення волосся',
//       category: 'Засоби для миття волосся',
//       purpose: 'Відновлення Гладкість Блиск',
//       gender: 'Унісекс',
//       activeIngredients: 'Кератин Шовк',
//     },
//     storePrices: [
//       { name: 'Eva', price: 270, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 285, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 290, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 300, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 280, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 275, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 265, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 260, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 198,
//     category: 'shampoos',
//     name: 'Lador Triplex 3',
//     price: 320,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Професійне зміцнення волосся.',
//     specs: { volume: '250 мл', type: 'Професійний', brand: 'Lador' },
//     rating: 4.7,
//     views: 200,
//     code: 'SH198',
//     composition: 'Aqua, Sodium C14-16 Olefin Sulfonate, Cocamidopropyl Betaine, Hydrolyzed Keratin, Camellia Sinensis Leaf Extract, Glycerin, Sodium Chloride, Citric Acid, Sodium Benzoate, Parfum, Limonene.',
//     usage: 'Нанесіть на вологе волосся, помасажуйте, змийте.',
//     features: {
//       description: `
// Lador Triplex 3 — професійний шампунь для зміцнення волосся. Засіб ідеально підходить для ослабленого волосся, надаючи йому силу та об’єм.

// **Як діє?**

// Екстракт зеленого чаю та кератин зміцнюють волосяні фолікули, зменшують випадіння та додають волоссю здорового вигляду. Шампунь ніжно очищає, не пересушуючи шкіру.

// **Б’юті-поради**

// Поєднуйте з кондиціонером Lador Triplex для максимального ефекту.
//       `.trim(),
//       brand: 'Lador',
//       country: 'Південна Корея',
//       type: 'Шампунь',
//       class: 'Професійна косметика',
//       hairType: 'Для ослабленого волосся',
//       features: 'Зміцнення волосся',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Об’єм Блиск',
//       gender: 'Унісекс',
//       activeIngredients: 'Кератин Екстракт зеленого чаю',
//     },
//     storePrices: [
//       { name: 'Eva', price: 320, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 335, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 340, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 350, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 330, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 325, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 315, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 310, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 199,
//     category: 'shampoos',
//     name: 'Daeng Gi Meo Ri Vitalizing',
//     price: 350,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Корейський трав’яний догляд.',
//     specs: { volume: '500 мл', type: 'Традиційний', brand: 'Daeng Gi Meo Ri' },
//     rating: 4.8,
//     views: 220,
//     code: 'SH199',
//     composition: 'Aqua, Sodium Laureth Sulfate, Cocamidopropyl Betaine, Chrysanthemum Sibiricum Extract, Rehmannia Glutinosa Root Extract, Glycerin, Sodium Chloride, Citric Acid, Sodium Benzoate, Parfum, Linalool.',
//     usage: 'Нанесіть на вологе волосся, спіньте, змийте водою.',
//     features: {
//       description: `
// Daeng Gi Meo Ri Vitalizing — корейський шампунь із трав’яними екстрактами для оздоровлення волосся. Засіб зміцнює корені та додає блиску.

// **Як діє?**

// Екстракти хризантеми та реманії живлять волосяні фолікули, стимулюють ріст і зменшують випадіння волосся. Шампунь ніжно очищає, залишаючи відчуття свіжості.

// **Б’юті-поради**

// Використовуйте разом із кондиціонером Daeng Gi Meo Ri для комплексного догляду.
//       `.trim(),
//       brand: 'Daeng Gi Meo Ri',
//       country: 'Південна Корея',
//       type: 'Шампунь',
//       class: 'Професійна косметика',
//       hairType: 'Для всіх типів волосся',
//       features: 'Оздоровлення волосся',
//       category: 'Засоби для миття волосся',
//       purpose: 'Зміцнення Живлення Блиск',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт хризантеми Екстракт реманії',
//     },
//     storePrices: [
//       { name: 'Eva', price: 350, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 365, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 370, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 380, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 360, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 355, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 345, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 340, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 200,
//     category: 'shampoos',
//     name: 'CP-1 Bright Complex Intense',
//     price: 290,
//     image: shampoosImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Живлення і блиск.',
//     specs: { volume: '500 мл', type: 'Професійний', brand: 'CP-1' },
//     rating: 4.6,
//     views: 190,
//     code: 'SH200',
//     composition: 'Aqua, Sodium C14-16 Olefin Sulfonate, Cocamidopropyl Betaine, Hydrolyzed Collagen, Hydrolyzed Keratin, Glycerin, Sodium Chloride, Citric Acid, Sodium Benzoate, Parfum, Hexyl Cinnamal.',
//     usage: 'Нанесіть на вологе волосся, спіньте, змийте.',
//     features: {
//       description: `
// CP-1 Bright Complex Intense — професійний шампунь для живлення та блиску волосся. Засіб ідеально підходить для тьмяного та пошкодженого волосся.

// **Як діє?**

// Гідролізований колаген і кератин відновлюють структуру волосся, надаючи йому гладкість і блиск. Шампунь ніжно очищає, не пересушуючи шкіру.

// **Б’юті-поради**

// Поєднуйте з кондиціонером CP-1 Bright Complex для максимального живлення.
//       `.trim(),
//       brand: 'CP-1',
//       country: 'Південна Корея',
//       type: 'Шампунь',
//       class: 'Професійна косметика',
//       hairType: 'Для тьмяного волосся Для пошкодженого волосся',
//       features: 'Живлення волосся',
//       category: 'Засоби для миття волосся',
//       purpose: 'Живлення Блиск Відновлення',
//       gender: 'Унісекс',
//       activeIngredients: 'Колаген Кератин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 290, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 305, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 310, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 320, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 300, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 295, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 285, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 280, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 201,
//     category: 'tonic',
//     name: "L'Oréal Hydra Fresh Tonic",
//     price: 320,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволожуючий тонік.',
//     specs: { volume: '200 мл', brand: "L'Oréal" },
//     rating: 4.5,
//     views: 160,
//     code: 'TO201',
//     composition: 'Aqua, Glycerin, Butylene Glycol, Sodium Hyaluronate, Panthenol, Citric Acid, Sodium Benzoate, Parfum, Linalool.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру обличчя.',
//     features: {
//       description: `
// L'Oréal Hydra Fresh Tonic — зволожуючий тонік для всіх типів шкіри. Засіб освіжає та готує шкіру до подальшого догляду.

// **Як діє?**

// Гіалуронова кислота та пантенол зволожують і заспокоюють шкіру, зменшуючи відчуття стягнутості. Тонік м’яко очищає, видаляючи залишки макіяжу.

// **Б’юті-поради**

// Використовуйте після очищення шкіри та перед нанесенням крему L'Oréal для максимального зволоження.
//       `.trim(),
//       brand: "L'Oréal",
//       country: 'Франція',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Зволоження шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Очищення Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 320, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 335, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 340, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 350, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 330, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 325, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 315, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 310, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 202,
//     category: 'tonic',
//     name: 'The Ordinary Glycolic Acid 7% Toning Solution',
//     price: 420,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Ексфоліюючий тонік.',
//     specs: { volume: '240 мл', brand: 'The Ordinary' },
//     rating: 4.7,
//     views: 200,
//     code: 'TO202',
//     composition: 'Aqua, Glycolic Acid, Rosa Damascena Flower Water, Centella Asiatica Extract, Aloe Barbadensis Leaf Water, Sodium Hydroxide, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру ввечері, уникаючи зони навколо очей.',
//     features: {
//       description: `
// The Ordinary Glycolic Acid 7% Toning Solution — ексфоліюючий тонік із гліколевою кислотою для оновлення шкіри. Засіб покращує текстуру шкіри та зменшує недоліки.

// **Як діє?**

// Гліколева кислота відлущує ороговілий шар шкіри, сприяючи оновленню клітин. Екстракт центели заспокоює, а алое зволожує шкіру.

// **Б’юті-поради**

// Використовуйте сонцезахисний крем після застосування тоніка, оскільки гліколева кислота підвищує чутливість до сонця.
//       `.trim(),
//       brand: 'The Ordinary',
//       country: 'Канада',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для комбінованої шкіри Для жирної шкіри',
//       features: 'Ексфоліація шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Оновлення Текстура',
//       gender: 'Унісекс',
//       activeIngredients: 'Гліколева кислота Екстракт центели',
//     },
//     storePrices: [
//       { name: 'Eva', price: 420, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 435, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 440, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 450, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 430, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 425, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 415, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 410, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 203,
//     category: 'tonic',
//     name: 'Clinique Clarifying Lotion 2',
//     price: 410,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Очищення та балансування.',
//     specs: { volume: '200 мл', brand: 'Clinique' },
//     rating: 4.6,
//     views: 180,
//     code: 'TO203',
//     composition: 'Aqua, Alcohol Denat., Glycerin, Salicylic Acid, Hamamelis Virginiana Water, Trehalose, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру після очищення.',
//     features: {
//       description: `
// Clinique Clarifying Lotion 2 — тонік для очищення та балансування комбінованої шкіри. Засіб видаляє ороговілу шкіру та готує її до зволоження.

// **Як діє?**

// Саліцилова кислота м’яко ексфоліює, а екстракт гамамелісу звужує пори та заспокоює шкіру. Тонік зменшує жирний блиск і покращує текстуру.

// **Б’юті-поради**

// Використовуйте після очищення гелем Clinique та перед зволожуючим кремом.
//       `.trim(),
//       brand: 'Clinique',
//       country: 'США',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для комбінованої шкіри',
//       features: 'Очищення шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Балансування Ексфоліація',
//       gender: 'Унісекс',
//       activeIngredients: 'Саліцилова кислота Гамамеліс',
//     },
//     storePrices: [
//       { name: 'Eva', price: 410, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 425, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 430, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 440, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 420, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 415, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 405, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 400, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 204,
//     category: 'tonic',
//     name: 'Nivea Refreshing Toner',
//     price: 190,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Освіжає і тонізує.',
//     specs: { volume: '200 мл', brand: 'Nivea' },
//     rating: 4.3,
//     views: 140,
//     code: 'TO204',
//     composition: 'Aqua, Glycerin, PEG-40 Hydrogenated Castor Oil, Panthenol, Sodium Hyaluronate, Citric Acid, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Nivea Refreshing Toner — освіжаючий тонік для всіх типів шкіри. Засіб тонізує та зволожує, надаючи шкірі свіжості.

// **Як діє?**

// Гіалуронова кислота та пантенол зволожують шкіру, а легка формула видаляє залишки забруднень. Тонік ідеально підходить для щоденного догляду.

// **Б’юті-поради**

// Використовуйте після очищення шкіри гелем Nivea та перед нанесенням крему.
//       `.trim(),
//       brand: 'Nivea',
//       country: 'Німеччина',
//       type: 'Тонік',
//       class: 'Мас-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Освіження шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Освіження Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 190, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 200, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 205, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 210, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 195, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 190, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 185, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 180, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 205,
//     category: 'tonic',
//     name: 'Garnier Pure Active Tonic',
//     price: 170,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Проти недоліків шкіри.',
//     specs: { volume: '200 мл', brand: 'Garnier' },
//     rating: 4.2,
//     views: 130,
//     code: 'TO205',
//     composition: 'Aqua, Alcohol Denat., Salicylic Acid, Glycerin, Sodium Hydroxide, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру, уникаючи зони навколо очей.',
//     features: {
//       description: `
// Garnier Pure Active Tonic — тонік для жирної та проблемної шкіри. Засіб зменшує недоліки та звужує пори.

// **Як діє?**

// Саліцилова кислота очищає пори та зменшує запалення, а легка формула освіжає шкіру. Тонік ідеально підходить для щоденного догляду за проблемною шкірою.

// **Б’юті-поради**

// Використовуйте після очищення гелем Garnier Pure Active та перед нанесенням крему.
//       `.trim(),
//       brand: 'Garnier',
//       country: 'Франція',
//       type: 'Тонік',
//       class: 'Мас-маркет',
//       skinType: 'Для жирної шкіри Для проблемної шкіри',
//       features: 'Очищення шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Проти недоліків Звуження пор',
//       gender: 'Унісекс',
//       activeIngredients: 'Саліцилова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 170, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 180, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 185, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 190, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 175, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 170, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 165, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 160, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 206,
//     category: 'tonic',
//     name: 'Vichy Pureté Thermale Tonic',
//     price: 380,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для чутливої шкіри.',
//     specs: { volume: '200 мл', brand: 'Vichy' },
//     rating: 4.6,
//     views: 170,
//     code: 'TO206',
//     composition: 'Aqua, Glycerin, PEG-60 Hydrogenated Castor Oil, Panthenol, Centella Asiatica Extract, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Vichy Pureté Thermale Tonic — тонік для чутливої шкіри, який м’яко очищає та заспокоює. Засіб готує шкіру до подальшого догляду.

// **Як діє?**

// Екстракт центели заспокоює подразнення, а пантенол зволожує шкіру. Тонік видаляє залишки макіяжу та забруднень, не викликаючи сухості.

// **Б’юті-поради**

// Використовуйте після очищення засобом Vichy Pureté Thermale та перед нанесенням крему.
//       `.trim(),
//       brand: 'Vichy',
//       country: 'Франція',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для чутливої шкіри',
//       features: 'Заспокоєння шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Очищення Заспокоєння',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт центели Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 380, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 395, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 400, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 410, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 390, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 385, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 375, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 370, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 207,
//     category: 'tonic',
//     name: 'Balea Gesichtswasser Classic',
//     price: 110,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Ніжне очищення.',
//     specs: { volume: '200 мл', brand: 'Balea' },
//     rating: 4.2,
//     views: 120,
//     code: 'TO207',
//     composition: 'Aqua, Glycerin, Panthenol, Sodium Hyaluronate, Citric Acid, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Balea Gesichtswasser Classic — тонік для ніжного очищення всіх типів шкіри. Засіб освіжає та готує шкіру до нанесення крему.

// **Як діє?**

// Гіалуронова кислота зволожує, а пантенол заспокоює шкіру. Тонік м’яко видаляє залишки забруднень, не викликаючи подразнень.

// **Б’юті-поради**

// Використовуйте після очищення гелем Balea та перед нанесенням зволожуючого крему.
//       `.trim(),
//       brand: 'Balea',
//       country: 'Німеччина',
//       type: 'Тонік',
//       class: 'Мас-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Очищення шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Очищення Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 110, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 120, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 125, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 130, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 115, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 110, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 105, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 100, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 208,
//     category: 'tonic',
//     name: 'La Roche-Posay Effaclar Toner',
//     price: 460,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зменшує пори.',
//     specs: { volume: '200 мл', brand: 'La Roche-Posay' },
//     rating: 4.7,
//     views: 190,
//     code: 'TO208',
//     composition: 'Aqua, Alcohol Denat., Glycerin, Salicylic Acid, Sodium Hydroxide, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру, уникаючи зони навколо очей.',
//     features: {
//       description: `
// La Roche-Posay Effaclar Toner — тонік для жирної та проблемної шкіри, який звужує пори та зменшує жирний блиск. Засіб ідеально підходить для щоденного догляду.

// **Як діє?**

// Саліцилова кислота очищає пори та зменшує запалення, а легка формула освіжає шкіру. Тонік допомагає підтримувати матовість шкіри.

// **Б’юті-поради**

// Використовуйте після очищення гелем La Roche-Posay Effaclar та перед нанесенням крему.
//       `.trim(),
//       brand: 'La Roche-Posay',
//       country: 'Франція',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для жирної шкіри Для проблемної шкіри',
//       features: 'Звуження пор',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Звуження пор Матовість',
//       gender: 'Унісекс',
//       activeIngredients: 'Саліцилова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 460, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 475, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 480, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 490, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 470, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 465, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 455, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 450, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 209,
//     category: 'tonic',
//     name: 'Ziaja Manuka Tree Toner',
//     price: 145,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Антибактеріальний ефект.',
//     specs: { volume: '200 мл', brand: 'Ziaja' },
//     rating: 4.3,
//     views: 130,
//     code: 'TO209',
//     composition: 'Aqua, Glycerin, Panthenol, Leptospermum Scoparium Leaf Extract, Sodium Benzoate, Citric Acid, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Ziaja Manuka Tree Toner — тонік із антибактеріальним ефектом для проблемної шкіри. Засіб очищає та зменшує недоліки.

// **Як діє?**

// Екстракт мануки має антибактеріальну дію, зменшуючи запалення та очищаючи пори. Пантенол заспокоює шкіру, запобігаючи подразненням.

// **Б’юті-поради**

// Використовуйте після очищення гелем Ziaja Manuka та перед нанесенням крему.
//       `.trim(),
//       brand: 'Ziaja',
//       country: 'Польща',
//       type: 'Тонік',
//       class: 'Мас-маркет',
//       skinType: 'Для проблемної шкіри',
//       features: 'Антибактеріальний ефект',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Проти недоліків Заспокоєння',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт мануки Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 145, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 155, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 160, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 165, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 150, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 145, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 140, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 135, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 210,
//     category: 'tonic',
//     name: 'Thayers Rose Petal Witch Hazel',
//     price: 390,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Тонік без спирту.',
//     specs: { volume: '355 мл', brand: 'Thayers' },
//     rating: 4.6,
//     views: 170,
//     code: 'TO210',
//     composition: 'Aqua, Glycerin, Hamamelis Virginiana Water, Aloe Barbadensis Leaf Extract, Rosa Damascena Flower Water, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Thayers Rose Petal Witch Hazel — тонік без спирту з екстрактом гамамелісу та трояндовою водою. Засіб заспокоює та зволожує шкіру.

// **Як діє?**

// Гамамеліс звужує пори та заспокоює шкіру, а трояндова вода додає свіжості та зволоження. Тонік ідеально підходить для всіх типів шкіри.

// **Б’юті-поради**

// Використовуйте після очищення шкіри та перед нанесенням зволожуючого крему для максимального ефекту.
//       `.trim(),
//       brand: 'Thayers',
//       country: 'США',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Заспокоєння шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Заспокоєння Звуження пор',
//       gender: 'Унісекс',
//       activeIngredients: 'Гамамеліс Трояндова вода',
//     },
//     storePrices: [
//       { name: 'Eva', price: 390, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 405, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 410, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 420, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 400, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 395, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 385, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 380, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 211,
//     category: 'tonic',
//     name: 'Missha Time Revolution Clear Toner',
//     price: 540,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Антивіковий догляд.',
//     specs: { volume: '250 мл', brand: 'Missha' },
//     rating: 4.5,
//     views: 180,
//     code: 'MIS211',
//     composition: 'Aqua / Water, Glycerin, Butylene Glycol, Niacinamide, Saccharomyces Ferment Filtrate, Sodium Hyaluronate, Phenoxyethanol, Parfum / Fragrance.',
//     usage: 'Нанесіть на очищену шкіру за допомогою ватного диска або рук, уникаючи зони навколо очей. Використовуйте двічі на день.',
//     features: {
//       description: `
// Тонер Missha Time Revolution Clear Toner з ферментованими інгредієнтами забезпечує антивіковий догляд, зволожуючи і вирівнюючи текстуру шкіри. Легка формула.

// **Як діє?**

// Ферментовані екстракти та ніацинамід освітлюють і зміцнюють шкіру, зменшуючи ознаки старіння. Тонер готує шкіру до подальшого догляду. Аромат легкий і ненав’язливий.

// **Б’юті-поради**

// Поєднуйте з есенцією Missha Time Revolution для посиленого антивікового ефекту.
//       `.trim(),
//       brand: 'Missha',
//       country: 'Південна Корея',
//       type: 'Антивіковий тонер',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Зволоження та антивіковий догляд',
//       category: 'Засоби для догляду за шкірою',
//       purpose: 'Зволоження Освітлення Вирівнювання текстури',
//       gender: 'Унісекс',
//       activeIngredients: 'Ферментовані екстракти Ніацинамід Гіалуронат натрію',
//     },
//     storePrices: [
//       { name: 'Eva', price: 540, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 550, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 560, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 570, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 555, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 545, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 535, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 530, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 212,
//     category: 'tonic',
//     name: 'Cosrx AHA/BHA Clarifying Treatment Toner',
//     price: 410,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Вирівнює текстуру.',
//     specs: { volume: '150 мл', brand: 'Cosrx' },
//     rating: 4.4,
//     views: 175,
//     code: 'COS212',
//     composition: 'Aqua / Water, Salix Alba Bark Water, Glycolic Acid, Betaine Salicylate, Panthenol, Sodium Hyaluronate, Phenoxyethanol, Parfum / Fragrance.',
//     usage: 'Нанесіть на очищену шкіру за допомогою ватного диска, уникаючи зони навколо очей. Використовуйте ввечері, 2-3 рази на тиждень.',
//     features: {
//       description: `
// Тонер Cosrx AHA/BHA Clarifying Treatment Toner з AHA і BHA кислотами м’яко відлущує шкіру, вирівнюючи текстуру і зменшуючи пори. Легка формула.

// **Як діє?**

// Гліколева кислота (AHA) видаляє ороговілі клітини, а бетаїн саліцилат (BHA) очищає пори. Тонер освіжає і готує шкіру до догляду. Аромат відсутній.

// **Б’юті-поради**

// Поєднуйте з зволожуючим кремом Cosrx для балансу шкіри.
//       `.trim(),
//       brand: 'Cosrx',
//       country: 'Південна Корея',
//       type: 'Ексфоліючий тонер',
//       class: 'Мідл-маркет',
//       skinType: 'Для комбінованої та жирної шкіри',
//       features: 'Вирівнювання текстури та очищення пір',
//       category: 'Засоби для догляду за шкірою',
//       purpose: 'Ексфоліація Очищення пір Вирівнювання текстури',
//       gender: 'Унісекс',
//       activeIngredients: 'Гліколева кислота Бетаїн саліцилат Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 410, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 420, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 430, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 440, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 425, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 415, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 405, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 400, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 213,
//     category: 'tonic',
//     name: 'Etude House SoonJung pH 5.5 Relief Toner',
//     price: 370,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Заспокоює шкіру.',
//     specs: { volume: '180 мл', brand: 'Etude House' },
//     rating: 4.4,
//     views: 170,
//     code: 'ETU213',
//     composition: 'Aqua / Water, Glycerin, Panthenol, Madecassoside, Camellia Sinensis Leaf Extract, Phenoxyethanol, Parfum / Fragrance.',
//     usage: 'Нанесіть на очищену шкіру за допомогою ватного диска або рук, уникаючи зони навколо очей. Використовуйте двічі на день.',
//     features: {
//       description: `
// Тонер Etude House SoonJung pH 5.5 Relief Toner з пантенолом і мадекасосидом заспокоює чутливу шкіру, відновлюючи її бар’єр. Ніжна формула.

// **Як діє?**

// Пантенол зволожує, а мадекасосид зменшує подразнення. Тонер підтримує оптимальний pH шкіри, роблячи її м’якою. Аромат відсутній.

// **Б’юті-поради**

// Поєднуйте з кремом SoonJung для максимального заспокоєння шкіри.
//       `.trim(),
//       brand: 'Etude House',
//       country: 'Південна Корея',
//       type: 'Заспокійливий тонер',
//       class: 'Мідл-маркет',
//       skinType: 'Для чутливої шкіри',
//       features: 'Заспокоєння та зволоження',
//       category: 'Засоби для догляду за шкірою',
//       purpose: 'Заспокоєння Зволоження Відновлення',
//       gender: 'Унісекс',
//       activeIngredients: 'Пантенол Мадекасосид Екстракт зеленого чаю',
//     },
//     storePrices: [
//       { name: 'Eva', price: 370, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 380, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 390, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 400, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 385, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 375, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 365, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 360, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 214,
//     category: 'tonic',
//     name: 'Some By Mi AHA-BHA-PHA Miracle Toner',
//     price: 430,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для проблемної шкіри.',
//     specs: { volume: '150 мл', brand: 'Some By Mi' },
//     rating: 4.5,
//     views: 175,
//     code: 'SOM214',
//     composition: 'Aqua / Water, Niacinamide, Melaleuca Alternifolia Leaf Extract, Glycolic Acid, Lactic Acid, Sodium Lactate, Phenoxyethanol, Parfum / Fragrance.',
//     usage: 'Нанесіть на очищену шкіру за допомогою ватного диска, уникаючи зони навколо очей. Використовуйте ввечері, 2-3 рази на тиждень.',
//     features: {
//       description: `
// Тонер Some By Mi AHA-BHA-PHA Miracle Toner з кислотами і екстрактом чайного дерева очищає пори і зменшує акне. Формула для проблемної шкіри.

// **Як діє?**

// AHA, BHA і PHA кислоти відлущують і очищають пори, а екстракт чайного дерева зменшує запалення. Тонер вирівнює текстуру шкіри. Аромат трав’яний.

// **Б’юті-поради**

// Поєднуйте з сироваткою Some By Mi для боротьби з акне.
//       `.trim(),
//       brand: 'Some By Mi',
//       country: 'Південна Корея',
//       type: 'Ексфоліючий тонер',
//       class: 'Мідл-маркет',
//       skinType: 'Для проблемної шкіри',
//       features: 'Очищення пір та зменшення акне',
//       category: 'Засоби для догляду за шкірою',
//       purpose: 'Ексфоліація Очищення пір Проти акне',
//       gender: 'Унісекс',
//       activeIngredients: 'AHA BHA PHA Екстракт чайного дерева',
//     },
//     storePrices: [
//       { name: 'Eva', price: 430, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 440, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 450, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 460, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 445, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 435, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 425, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 420, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 215,
//     category: 'tonic',
//     name: 'Holika Holika Aloe Soothing Essence 98%',
//     price: 290,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Охолоджує і зволожує.',
//     specs: { volume: '200 мл', brand: 'Holika Holika' },
//     rating: 4.3,
//     views: 165,
//     code: 'HOL215',
//     composition: 'Aqua / Water, Aloe Barbadensis Leaf Juice, Glycerin, Sodium Hyaluronate, Centella Asiatica Extract, Phenoxyethanol, Parfum / Fragrance.',
//     usage: 'Нанесіть на очищену шкіру за допомогою ватного диска або рук, уникаючи зони навколо очей. Використовуйте двічі на день.',
//     features: {
//       description: `
// Тонер Holika Holika Aloe Soothing Essence 98% з алое вера зволожує і заспокоює шкіру, надаючи їй свіжість і комфорт. Легка формула.

// **Як діє?**

// Сік алое вера зволожує і заспокоює подразнення, а центела азіатська відновлює шкіру. Тонер освіжає і охолоджує. Аромат легкий, трав’яний.

// **Б’юті-поради**

// Поєднуйте з гелем Holika Holika Aloe для посиленого зволоження.
//       `.trim(),
//       brand: 'Holika Holika',
//       country: 'Південна Корея',
//       type: 'Зволожуючий тонер',
//       class: 'Мас-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Зволоження та заспокоєння',
//       category: 'Засоби для догляду за шкірою',
//       purpose: 'Зволоження Заспокоєння Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Сік алое вера Центела азіатська Гіалуронат натрію',
//     },
//     storePrices: [
//       { name: 'Eva', price: 290, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 300, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 310, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 320, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 305, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 295, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 285, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 280, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 216,
//     category: 'tonic',
//     name: 'Bioderma Sébium Lotion',
//     price: 440,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Регуляція себуму.',
//     specs: { volume: '200 мл', brand: 'Bioderma' },
//     rating: 4.4,
//     views: 170,
//     code: 'BIO216',
//     composition: 'Aqua / Water, Glycerin, Salicylic Acid, Sodium Polyacrylate, Zinc Gluconate, Phenoxyethanol, Parfum / Fragrance.',
//     usage: 'Нанесіть на очищену шкіру за допомогою ватного диска, уникаючи зони навколо очей. Використовуйте двічі на день.',
//     features: {
//       description: `
// Тонер Bioderma Sébium Lotion з саліциловою кислотою регулює вироблення себуму і зменшує пори. Формула для жирної шкіри.

// **Як діє?**

// Саліцилова кислота очищає пори, а цинк регулює жирність. Тонер матує шкіру і готує її до догляду. Аромат легкий і ненав’язливий.

// **Б’юті-поради**

// Поєднуйте з гелем Bioderma Sébium для очищення жирної шкіри.
//       `.trim(),
//       brand: 'Bioderma',
//       country: 'Франція',
//       type: 'Тонер для жирної шкіри',
//       class: 'Мідл-маркет',
//       skinType: 'Для жирної та комбінованої шкіри',
//       features: 'Регуляція себуму та очищення пір',
//       category: 'Засоби для догляду за шкірою',
//       purpose: 'Регуляція себуму Очищення пір Матування',
//       gender: 'Унісекс',
//       activeIngredients: 'Саліцилова кислота Глюконат цинку',
//     },
//     storePrices: [
//       { name: 'Eva', price: 440, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 450, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 460, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 470, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 455, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 445, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 435, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 430, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 217,
//     category: 'tonic',
//     name: 'Dr. Jart+ Cicapair Toner',
//     price: 520,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Проти почервоніння.',
//     specs: { volume: '150 мл', brand: 'Dr. Jart+' },
//     rating: 4.5,
//     views: 175,
//     code: 'DRJ217',
//     composition: 'Aqua / Water, Glycerin, Centella Asiatica Extract, Madecassoside, Niacinamide, Phenoxyethanol, Parfum / Fragrance.',
//     usage: 'Нанесіть на очищену шкіру за допомогою ватного диска або рук, уникаючи зони навколо очей. Використовуйте двічі на день.',
//     features: {
//       description: `
// Тонер Dr. Jart+ Cicapair Toner з центелою азіатською зменшує почервоніння і заспокоює чутливу шкіру. Формула для подразненої шкіри.

// **Як діє?**

// Центела азіатська і мадекасосид відновлюють і заспокоюють шкіру, зменшуючи запалення. Тонер зволожує і вирівнює тон. Аромат відсутній.

// **Б’юті-поради**

// Поєднуйте з кремом Dr. Jart+ Cicapair для посиленого заспокоєння.
//       `.trim(),
//       brand: 'Dr. Jart+',
//       country: 'Південна Корея',
//       type: 'Заспокійливий тонер',
//       class: 'Мідл-маркет',
//       skinType: 'Для чутливої та подразненої шкіри',
//       features: 'Зменшення почервоніння та заспокоєння',
//       category: 'Засоби для догляду за шкірою',
//       purpose: 'Заспокоєння Зволоження Вирівнювання тону',
//       gender: 'Унісекс',
//       activeIngredients: 'Центела азіатська Мадекасосид Ніацинамід',
//     },
//     storePrices: [
//       { name: 'Eva', price: 520, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 530, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 540, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 550, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 535, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 525, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 515, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 510, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 218,
//     category: 'tonic',
//     name: 'Kiehl’s Calendula Herbal Extract Toner',
//     price: 650,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження та очищення.',
//     specs: { volume: '250 мл', brand: 'Kiehl’s' },
//     rating: 4.6,
//     views: 180,
//     code: 'KIE218',
//     composition: 'Aqua / Water, Glycerin, Calendula Officinalis Flower Extract, Allantoin, Phenoxyethanol, Parfum / Fragrance.',
//     usage: 'Нанесіть на очищену шкіру за допомогою ватного диска, уникаючи зони навколо очей. Використовуйте двічі на день.',
//     features: {
//       description: `
// Тонер Kiehl’s Calendula Herbal Extract Toner з екстрактом календули зволожує і очищає шкіру, зменшуючи подразнення. Безспиртова формула.

// **Як діє?**

// Екстракт календули заспокоює, а алантоїн зволожує шкіру. Тонер освіжає і готує шкіру до догляду. Аромат трав’яний, приємний.

// **Б’юті-поради**

// Поєднуйте з кремом Kiehl’s для комплексного догляду.
//       `.trim(),
//       brand: 'Kiehl’s',
//       country: 'США',
//       type: 'Зволожуючий тонер',
//       class: 'Преміум',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Зволоження та заспокоєння',
//       category: 'Засоби для догляду за шкірою',
//       purpose: 'Зволоження Очищення Заспокоєння',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт календули Алантоїн',
//     },
//     storePrices: [
//       { name: 'Eva', price: 650, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 660, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 670, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 680, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 665, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 655, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 645, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 640, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 219,
//     category: 'tonic',
//     name: 'Simple Soothing Facial Toner',
//     price: 210,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Без спирту, для чутливої шкіри.',
//     specs: { volume: '200 мл', brand: 'Simple' },
//     rating: 4.2,
//     views: 160,
//     code: 'SIM219',
//     composition: 'Aqua / Water, Glycerin, Chamomilla Recutita Flower Extract, Panthenol, Sodium Benzoate, Citric Acid, Parfum / Fragrance.',
//     usage: 'Нанесіть на очищену шкіру за допомогою ватного диска, уникаючи зони навколо очей. Використовуйте двічі на день.',
//     features: {
//       description: `
// Тонер Simple Soothing Facial Toner з екстрактом ромашки м’яко очищає і заспокоює чутливу шкіру. Безспиртова формула без ароматизаторів.

// **Як діє?**

// Екстракт ромашки заспокоює, а пантенол зволожує шкіру. Тонер освіжає і готує шкіру до догляду. Аромат відсутній.

// **Б’юті-поради**

// Поєднуйте з кремом Simple для чутливої шкіри для максимального комфорту.
//       `.trim(),
//       brand: 'Simple',
//       country: 'Велика Британія',
//       type: 'Заспокійливий toner',
//       class: 'Мас-маркет',
//       skinType: 'Для чутливої шкіри',
//       features: 'Заспокоєння та зволоження',
//       category: 'Засоби для догляду за шкірою',
//       purpose: 'Заспокоєння Зволоження Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт ромашки Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 210, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 220, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 230, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 240, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 225, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 215, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 205, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 200, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 220,
//     category: 'tonic',
//     name: 'Alba Botanica Acnedote Deep Clean Astringent',
//     price: 330,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Глибоке очищення.',
//     specs: { volume: '177 мл', brand: 'Alba Botanica' },
//     rating: 4.3,
//     views: 165,
//     code: 'ALB220',
//     composition: 'Aqua / Water, Salicylic Acid, Aloe Barbadensis Leaf Juice, Hamamelis Virginiana Water, Phenoxyethanol, Parfum / Fragrance.',
//     usage: 'Нанесіть на очищену шкіру за допомогою ватного диска, уникаючи зони навколо очей. Використовуйте двічі на день.',
//     features: {
//       description: `
// Тонер Alba Botanica Acnedote Deep Clean Astringent з саліциловою кислотою глибоко очищає пори і зменшує акне. Веганська формула.

// **Як діє?**

// Саліцилова кислота очищає пори, а гамамеліс звужує їх. Тонер освіжає і матує шкіру. Аромат трав’яний, освіжаючий.

// **Б’юті-поради**

// Поєднуйте з гелем Alba Botanica Acnedote для боротьби з акне.
//       `.trim(),
//       brand: 'Alba Botanica',
//       country: 'США',
//       type: 'Очищаючий тонер',
//       class: 'Мас-маркет',
//       skinType: 'Для жирної та проблемної шкіри',
//       features: 'Очищення пір та зменшення акне',
//       category: 'Засоби для догляду за шкірою',
//       purpose: 'Очищення пір Проти акне Матування',
//       gender: 'Унісекс',
//       activeIngredients: 'Саліцилова кислота Гамамеліс Сік алое вера',
//     },
//     storePrices: [
//       { name: 'Eva', price: 330, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 340, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 350, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 360, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 345, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 335, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 325, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 320, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 221,
//     category: 'tonic',
//     name: 'Evoluderm Lotion Tonique',
//     price: 180,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Очищення і тонізація.',
//     specs: { volume: '250 мл', brand: 'Evoluderm' },
//     rating: 4.1,
//     views: 155,
//     code: 'EVO221',
//     composition: 'Aqua / Water, Glycerin, Rosa Damascena Flower Water, Sodium Benzoate, Citric Acid, Parfum / Fragrance.',
//     usage: 'Нанесіть на очищену шкіру за допомогою ватного диска, уникаючи зони навколо очей. Використовуйте двічі на день.',
//     features: {
//       description: `
// Тонер Evoluderm Lotion Tonique з трояндовою водою м’яко очищає і тонізує шкіру, надаючи їй свіжість. Формула для всіх типів шкіри.

// **Як діє?**

// Трояндова вода освіжає і зволожує, готуючи шкіру до догляду. Тонер залишає шкіру м’якою і чистою. Аромат трояндовий, ніжний.

// **Б’юті-поради**

// Поєднуйте з кремом Evoluderm для зволоження шкіри.
//       `.trim(),
//       brand: 'Evoluderm',
//       country: 'Франція',
//       type: 'Тонізуючий тонер',
//       class: 'Мас-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Очищення та тонізація',
//       category: 'Засоби для догляду за шкірою',
//       purpose: 'Очищення Зволоження Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Трояндова вода',
//     },
//     storePrices: [
//       { name: 'Eva', price: 180, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 190, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 200, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 210, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 195, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 185, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 175, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 170, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 222,
//     category: 'tonic',
//     name: 'Lotion Yon-Ka PS',
//     price: 710,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Балансування pH.',
//     specs: { volume: '200 мл', brand: 'Yon-Ka' },
//     rating: 4.6,
//     views: 180,
//     code: 'YON222',
//     composition: 'Aqua / Water, Lavandula Angustifolia Flower Water, Rosmarinus Officinalis Leaf Water, Sodium Benzoate, Citric Acid, Parfum / Fragrance.',
//     usage: 'Розпиліть на очищену шкіру, уникаючи зони навколо очей, і м’яко втирайте. Використовуйте двічі на день.',
//     features: {
//       description: `
// Тонер Lotion Yon-Ka PS з лавандовою і розмариновою водою балансує pH шкіри, освіжаючи і тонізуючи її. Професійна формула.

// **Як діє?**

// Лавандова вода заспокоює, а розмаринова тонізує шкіру, готуючи її до догляду. Тонер освіжає і зволожує. Аромат трав’яний, розслабляючий.

// **Б’юті-поради**

// Поєднуйте з кремом Yon-Ka для оптимального догляду.
//       `.trim(),
//       brand: 'Yon-Ka',
//       country: 'Франція',
//       type: 'Тонізуючий тонер',
//       class: 'Преміум',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Балансування pH та тонізація',
//       category: 'Засоби для догляду за шкірою',
//       purpose: 'Тонізація Зволоження Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Лавандова вода Розмаринова вода',
//     },
//     storePrices: [
//       { name: 'Eva', price: 710, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 720, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 730, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 740, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 725, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 715, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 705, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 700, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 223,
//     category: 'tonic',
//     name: 'Acure Radically Rejuvenating Witch Hazel Toner',
//     price: 350,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Антиоксидантна формула.',
//     specs: { volume: '118 мл', brand: 'Acure' },
//     rating: 4.3,
//     views: 165,
//     code: 'ACU223',
//     composition: 'Aqua / Water, Hamamelis Virginiana Water, Aloe Barbadensis Leaf Juice, Rosa Canina Fruit Extract, Phenoxyethanol, Parfum / Fragrance.',
//     usage: 'Нанесіть на очищену шкіру за допомогою ватного диска, уникаючи зони навколо очей. Використовуйте двічі на день.',
//     features: {
//       description: `
// Тонер Acure Radically Rejuvenating Witch Hazel Toner з гамамелісом і екстрактом шипшини тонізує і захищає шкіру завдяки антиоксидантам. Веганська формула.

// **Як діє?**

// Гамамеліс звужує пори, а шипшина бореться з вільними радикалами. Тонер освіжає і зволожує шкіру. Аромат легкий, трав’яний.

// **Б’юті-поради**

// Поєднуйте з сироваткою Acure для антиоксидантного догляду.
//       `.trim(),
//       brand: 'Acure',
//       country: 'США',
//       type: 'Антиоксидантний тонер',
//       class: 'Мас-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Тонізація та антиоксидантний захист',
//       category: 'Засоби для догляду за шкірою',
//       purpose: 'Тонізація Зволоження Антиоксидантний захист',
//       gender: 'Унісекс',
//       activeIngredients: 'Гамамеліс Екстракт шипшини Сік алое вера',
//     },
//     storePrices: [
//       { name: 'Eva', price: 350, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 360, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 370, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 380, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 365, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 355, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 345, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 340, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 224,
//     category: 'tonic',
//     name: 'Mario Badescu Glycolic Acid Toner',
//     price: 390,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Вирівнює тон шкіри.',
//     specs: { volume: '236 мл', brand: 'Mario Badescu' },
//     rating: 4.4,
//     views: 170,
//     code: 'MAR224',
//     composition: 'Aqua / Water, Glycolic Acid, Aloe Barbadensis Leaf Juice, Sodium Benzoate, Citric Acid, Parfum / Fragrance.',
//     usage: 'Нанесіть на очищену шкіру за допомогою ватного диска, уникаючи зони навколо очей. Використовуйте ввечері, 2-3 рази на тиждень.',
//     features: {
//       description: `
// Тонер Mario Badescu Glycolic Acid Toner з гліколевою кислотою відлущує і вирівнює тон шкіри, зменшуючи пігментацію. Формула для тьмяної шкіри.

// **Як діє?**

// Гліколева кислота видаляє ороговілі клітини, а алое вера зволожує. Тонер освітлює і освіжає шкіру. Аромат легкий, нейтральний.

// **Б’юті-поради**

// Поєднуйте з кремом Mario Badescu для зволоження після ексфоліації.
//       `.trim(),
//       brand: 'Mario Badescu',
//       country: 'США',
//       type: 'Ексфоліючий тонер',
//       class: 'Мідл-маркет',
//       skinType: 'Для тьмяної шкіри',
//       features: 'Вирівнювання тону та ексфоліація',
//       category: 'Засоби для догляду за шкірою',
//       purpose: 'Ексфоліація Освітлення Вирівнювання тону',
//       gender: 'Унісекс',
//       activeIngredients: 'Гліколева кислота Сік алое вера',
//     },
//     storePrices: [
//       { name: 'Eva', price: 390, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 400, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 410, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 420, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 405, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 395, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 385, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 380, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 225,
//     category: 'tonic',
//     name: 'Eucerin DermatoCLEAN Toner',
//     price: 360,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Без спирту, для сухої шкіри.',
//     specs: { volume: '200 мл', brand: 'Eucerin' },
//     rating: 4.3,
//     views: 165,
//     code: 'EUC225',
//     composition: 'Aqua / Water, Glycerin, Sodium Hyaluronate, Sodium Benzoate, Citric Acid, Parfum / Fragrance.',
//     usage: 'Нанесіть на очищену шкіру за допомогою ватного диска, уникаючи зони навколо очей. Використовуйте двічі на день.',
//     features: {
//       description: `
// Тонер Eucerin DermatoCLEAN Toner з гіалуронатом натрію зволожує і м’яко очищає суху шкіру. Безспиртова формула.

// **Як діє?**

// Гіалуронат натрію зволожує, а гліцерин утримує вологу в шкірі. Тонер освіжає і готує шкіру до догляду. Аромат відсутній.

// **Б’юті-поради**

// Поєднуйте з кремом Eucerin DermatoCLEAN для зволоження сухої шкіри.
//       `.trim(),
//       brand: 'Eucerin',
//       country: 'Німеччина',
//       type: 'Зволожуючий тонер',
//       class: 'Мідл-маркет',
//       skinType: 'Для сухої шкіри',
//       features: 'Зволоження та очищення',
//       category: 'Засоби для догляду за шкірою',
//       purpose: 'Зволоження Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Гіалуронат натрію Гліцерин',
//     },
//     storePrices: [
//       { name: 'Eva', price: 360, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 370, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 380, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 390, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 375, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 365, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 355, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 350, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 226,
//     category: 'tonic',
//     name: 'Glow Lab Toning Mist',
//     price: 300,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Тонізуючий спрей.',
//     specs: { volume: '120 мл', brand: 'Glow Lab' },
//     rating: 4.4,
//     views: 150,
//     code: 'TO226',
//     composition: 'Aqua, Glycerin, Niacinamide, Rosa Damascena Flower Water, Sodium Hyaluronate, Citric Acid, Sodium Benzoate, Parfum.',
//     usage: 'Розпиліть на очищену шкіру обличчя, уникаючи зони навколо очей.',
//     features: {
//       description: `
// Glow Lab Toning Mist — тонізуючий спрей для всіх типів шкіри. Засіб освіжає та зволожує, надаючи шкірі сяйва.

// **Як діє?**

// Ніацинамід вирівнює тон шкіри, а трояндова вода та гіалуронова кислота зволожують і заспокоюють. Спрей ідеально підходить для використання протягом дня.

// **Б’юті-поради**

// Використовуйте після очищення або для освіження шкіри протягом дня.
//       `.trim(),
//       brand: 'Glow Lab',
//       country: 'Нова Зеландія',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Тонізація шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Освіження Сяйво',
//       gender: 'Унісекс',
//       activeIngredients: 'Ніацинамід Трояндова вода Гіалуронова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 300, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 315, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 320, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 330, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 310, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 305, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 295, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 290, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 227,
//     category: 'tonic',
//     name: 'Belif Aqua Bomb Toner',
//     price: 470,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Інтенсивне зволоження.',
//     specs: { volume: '200 мл', brand: 'Belif' },
//     rating: 4.6,
//     views: 180,
//     code: 'TO227',
//     composition: 'Aqua, Glycerin, Butylene Glycol, Althaea Officinalis Root Extract, Sodium Hyaluronate, Panthenol, Citric Acid, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру або нанесіть руками.',
//     features: {
//       description: `
// Belif Aqua Bomb Toner — тонік для інтенсивного зволоження сухої та нормальної шкіри. Засіб готує шкіру до подальшого догляду.

// **Як діє?**

// Екстракт алтеї зволожує та заспокоює, а гіалуронова кислота утримує вологу. Тонік забезпечує відчуття свіжості та комфорту.

// **Б’юті-поради**

// Використовуйте перед нанесенням крему Belif Aqua Bomb для максимального зволоження.
//       `.trim(),
//       brand: 'Belif',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для сухої шкіри Для нормальної шкіри',
//       features: 'Зволоження шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Заспокоєння Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт алтеї Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 470, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 485, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 490, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 500, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 480, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 475, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 465, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 460, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 228,
//     category: 'tonic',
//     name: 'Skinfood Peach Sake Toner',
//     price: 350,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Матування та очищення.',
//     specs: { volume: '135 мл', brand: 'Skinfood' },
//     rating: 4.5,
//     views: 160,
//     code: 'TO228',
//     composition: 'Aqua, Alcohol Denat., Prunus Persica Fruit Extract, Saccharomyces Ferment, Glycerin, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру, уникаючи зони навколо очей.',
//     features: {
//       description: `
// Skinfood Peach Sake Toner — тонік для матування та очищення жирної та комбінованої шкіри. Засіб звужує пори та зменшує жирний блиск.

// **Як діє?**

// Екстракт персика освіжає шкіру, а ферменти саке очищають пори та контролюють виділення себуму. Тонік залишає шкіру матовою та гладкою.

// **Б’юті-поради**

// Використовуйте після очищення гелем Skinfood та перед нанесенням зволожуючого крему.
//       `.trim(),
//       brand: 'Skinfood',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для жирної шкіри Для комбінованої шкіри',
//       features: 'Матування шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Матовість Звуження пор',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт персика Ферменти саке',
//     },
//     storePrices: [
//       { name: 'Eva', price: 350, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 365, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 370, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 380, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 360, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 355, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 345, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 340, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 229,
//     category: 'tonic',
//     name: 'Glow Recipe Watermelon Glow PHA+BHA Toner',
//     price: 590,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для сяйва шкіри.',
//     specs: { volume: '150 мл', brand: 'Glow Recipe' },
//     rating: 4.8,
//     views: 200,
//     code: 'TO229',
//     composition: 'Aqua, Citrullus Lanatus Fruit Extract, Polyhydroxy Acid, Salicylic Acid, Sodium Hyaluronate, Glycerin, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру ввечері, уникаючи зони навколо очей.',
//     features: {
//       description: `
// Glow Recipe Watermelon Glow PHA+BHA Toner — тонік для сяйва шкіри з ексфоліюючими кислотами. Засіб вирівнює текстуру та додає шкірі здорового вигляду.

// **Як діє?**

// PHA та BHA кислоти м’яко відлущують ороговілу шкіру, а екстракт кавуна зволожує та заспокоює. Тонік зменшує пори та додає сяйва.

// **Б’юті-поради**

// Використовуйте ввечері та обов’язково наносьте сонцезахисний крем вдень.
//       `.trim(),
//       brand: 'Glow Recipe',
//       country: 'США',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Ексфоліація шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Сяйво Очищення Ексфоліація',
//       gender: 'Унісекс',
//       activeIngredients: 'PHA кислота Саліцилова кислота Екстракт кавуна',
//     },
//     storePrices: [
//       { name: 'Eva', price: 590, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 605, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 610, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 620, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 600, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 595, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 585, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 580, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 230,
//     category: 'tonic',
//     name: 'Fresh Rose Deep Hydration Facial Toner',
//     price: 680,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволожуючий ефект.',
//     specs: { volume: '250 мл', brand: 'Fresh' },
//     rating: 4.7,
//     views: 190,
//     code: 'TO230',
//     composition: 'Aqua, Glycerin, Rosa Damascena Flower Water, Sodium Hyaluronate, Angelica Archangelica Root Extract, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Fresh Rose Deep Hydration Facial Toner — зволожуючий тонік із трояндовою водою для всіх типів шкіри. Засіб освіжає та готує шкіру до догляду.

// **Як діє?**

// Трояндова вода та гіалуронова кислота інтенсивно зволожують, а екстракт дягелю заспокоює шкіру. Тонік залишає шкіру м’якою та сяючою.

// **Б’юті-поради**

// Використовуйте перед нанесенням крему Fresh Rose для посилення зволоження.
//       `.trim(),
//       brand: 'Fresh',
//       country: 'США',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Зволоження шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Освіження Заспокоєння',
//       gender: 'Унісекс',
//       activeIngredients: 'Трояндова вода Гіалуронова кислота Екстракт дягелю',
//     },
//     storePrices: [
//       { name: 'Eva', price: 680, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 695, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 700, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 710, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 690, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 685, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 675, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 670, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 231,
//     category: 'tonic',
//     name: 'Lotion Florale Tonique',
//     price: 470,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'З квітковими екстрактами.',
//     specs: { volume: '200 мл', brand: 'Florale' },
//     rating: 4.5,
//     views: 170,
//     code: 'TO231',
//     composition: 'Aqua, Glycerin, Rosa Damascena Flower Extract, Chamomilla Recutita Flower Extract, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Lotion Florale Tonique — тонік із квітковими екстрактами для ніжного догляду за шкірою. Засіб освіжає та заспокоює шкіру.

// **Як діє?**

// Екстракти троянди та ромашки зволожують і заспокоюють шкіру, зменшуючи подразнення. Тонік ідеально підходить для щоденного використання.

// **Б’юті-поради**

// Використовуйте після очищення та перед нанесенням зволожуючого крему для посилення ефекту.
//       `.trim(),
//       brand: 'Florale',
//       country: 'Франція',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Заспокоєння шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Заспокоєння Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт троянди Екстракт ромашки',
//     },
//     storePrices: [
//       { name: 'Eva', price: 470, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 485, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 490, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 500, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 480, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 475, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 465, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 460, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 232,
//     category: 'tonic',
//     name: 'Elemis Soothing Apricot Toner',
//     price: 620,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Без спирту, заспокоює.',
//     specs: { volume: '200 мл', brand: 'Elemis' },
//     rating: 4.7,
//     views: 190,
//     code: 'TO232',
//     composition: 'Aqua, Glycerin, Prunus Armeniaca Fruit Extract, Chamomilla Recutita Flower Extract, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Elemis Soothing Apricot Toner — тонік без спирту для чутливої шкіри. Засіб заспокоює та зволожує, зменшуючи подразнення.

// **Як діє?**

// Екстракт абрикоса та ромашки заспокоюють шкіру, а легка формула освіжає та готує шкіру до догляду. Тонік ідеально підходить для чутливої шкіри.

// **Б’юті-поради**

// Використовуйте після очищення засобом Elemis та перед нанесенням крему для максимального комфорту.
//       `.trim(),
//       brand: 'Elemis',
//       country: 'Велика Британія',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для чутливої шкіри',
//       features: 'Заспокоєння шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Заспокоєння Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт абрикоса Екстракт ромашки',
//     },
//     storePrices: [
//       { name: 'Eva', price: 620, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 635, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 640, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 650, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 630, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 625, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 615, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 610, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 233,
//     category: 'tonic',
//     name: 'Botanic Therapy Rose Water Toner',
//     price: 260,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Освіжає шкіру.',
//     specs: { volume: '200 мл', brand: 'Botanic Therapy' },
//     rating: 4.3,
//     views: 140,
//     code: 'TO233',
//     composition: 'Aqua, Glycerin, Rosa Damascena Flower Water, Panthenol, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Botanic Therapy Rose Water Toner — тонік із трояндовою водою для освіження шкіри. Засіб зволожує та готує шкіру до догляду.

// **Як діє?**

// Трояндова вода освіжає та зволожує, а пантенол заспокоює шкіру. Тонік підходить для всіх типів шкіри та щоденного використання.

// **Б’юті-поради**

// Використовуйте після очищення та перед нанесенням зволожуючого крему Botanic Therapy.
//       `.trim(),
//       brand: 'Botanic Therapy',
//       country: 'Україна',
//       type: 'Тонік',
//       class: 'Мас-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Освіження шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Освіження Заспокоєння',
//       gender: 'Унісекс',
//       activeIngredients: 'Трояндова вода Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 260, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 270, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 275, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 280, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 265, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 260, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 255, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 250, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 234,
//     category: 'tonic',
//     name: 'Origins United State Balancing Tonic',
//     price: 480,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Балансування жирної шкіри.',
//     specs: { volume: '150 мл', brand: 'Origins' },
//     rating: 4.6,
//     views: 170,
//     code: 'TO234',
//     composition: 'Aqua, Alcohol Denat., Hamamelis Virginiana Water, Laminaria Saccharina Extract, Glycerin, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру, уникаючи зони навколо очей.',
//     features: {
//       description: `
// Origins United State Balancing Tonic — тонік для балансування жирної та комбінованої шкіри. Засіб зменшує жирний блиск і звужує пори.

// **Як діє?**

// Гамамеліс і екстракт ламінарії очищають і матують шкіру, зменшуючи надлишок себуму. Тонік освіжає та готує шкіру до догляду.

// **Б’юті-поради**

// Використовуйте після очищення гелем Origins та перед нанесенням крему.
//       `.trim(),
//       brand: 'Origins',
//       country: 'США',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для жирної шкіри Для комбінованої шкіри',
//       features: 'Балансування шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Матовість Звуження пор',
//       gender: 'Унісекс',
//       activeIngredients: 'Гамамеліс Екстракт ламінарії',
//     },
//     storePrices: [
//       { name: 'Eva', price: 480, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 495, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 500, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 510, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 490, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 485, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 475, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 470, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 235,
//     category: 'tonic',
//     name: 'Glow On Hydration Toner',
//     price: 390,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для сяйва та зволоження.',
//     specs: { volume: '200 мл', brand: 'Glow On' },
//     rating: 4.4,
//     views: 160,
//     code: 'TO235',
//     composition: 'Aqua, Glycerin, Niacinamide, Sodium Hyaluronate, Panthenol, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Glow On Hydration Toner — тонік для зволоження та сяйва шкіри. Засіб освіжає та готує шкіру до подальшого догляду.

// **Як діє?**

// Ніацинамід вирівнює тон шкіри, а гіалуронова кислота та пантенол зволожують і заспокоюють. Тонік додає шкірі здорового сяйва.

// **Б’юті-поради**

// Використовуйте після очищення та перед нанесенням зволожуючого крему Glow On.
//       `.trim(),
//       brand: 'Glow On',
//       country: 'США',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Зволоження шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Сяйво Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Ніацинамід Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 390, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 405, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 410, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 420, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 400, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 395, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 385, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 380, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 236,
//     category: 'tonic',
//     name: 'Laneige Essential Power Skin Refiner',
//     price: 510,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Живлення та тонізація.',
//     specs: { volume: '200 мл', brand: 'Laneige' },
//     rating: 4.6,
//     views: 180,
//     code: 'TO236',
//     composition: 'Aqua, Glycerin, Butylene Glycol, Sodium Hyaluronate, Beta-Glucan, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру або нанесіть руками.',
//     features: {
//       description: `
// Laneige Essential Power Skin Refiner — тонік для живлення та тонізації шкіри. Засіб зволожує та готує шкіру до догляду.

// **Як діє?**

// Гіалуронова кислота та бета-глюкан зволожують і зміцнюють шкірний бар’єр, надаючи шкірі м’якості та сяйва. Тонік підходить для всіх типів шкіри.

// **Б’юті-поради**

// Використовуйте перед нанесенням крему Laneige для посилення зволоження.
//       `.trim(),
//       brand: 'Laneige',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Живлення шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Тонізація Живлення',
//       gender: 'Унісекс',
//       activeIngredients: 'Гіалуронова кислота Бета-глюкан',
//     },
//     storePrices: [
//       { name: 'Eva', price: 510, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 525, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 530, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 540, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 520, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 515, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 505, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 500, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//     {
//       id: 237,
//       category: 'tonic',
//       name: 'Isntree Green Tea Fresh Toner',
//       price: 370,
//       image: scrubsImg,
//       images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//       description: 'Антиоксидантна дія.',
//       specs: { volume: '200 мл', brand: 'Isntree' },
//       rating: 4.4,
//       views: 165,
//       code: 'ISN237',
//       composition: 'Aqua / Water, Camellia Sinensis Leaf Extract, Glycerin, Centella Asiatica Extract, Sodium Hyaluronate, Phenoxyethanol, Parfum / Fragrance.',
//       usage: 'Нанесіть на очищену шкіру за допомогою ватного диска або рук, уникаючи зони навколо очей. Використовуйте двічі на день.',
//       features: {
//         description: `
//   Тонер Isntree Green Tea Fresh Toner з екстрактом зеленого чаю забезпечує антиоксидантний захист і освіжає шкіру. Легка формула для жирної та комбінованої шкіри.
  
//   **Як діє?**
  
//   Екстракт зеленого чаю бореться з вільними радикалами, а центела азіатська заспокоює шкіру. Тонер регулює себум і зволожує. Аромат легкий, трав’яний.
  
//   **Б’юті-поради**
  
//   Поєднуйте з кремом Isntree Green Tea для посиленого зволоження і захисту.
//         `.trim(),
//         brand: 'Isntree',
//         country: 'Південна Корея',
//         type: 'Антиоксидантний тонер',
//         class: 'Мідл-маркет',
//         skinType: 'Для жирної та комбінованої шкіри',
//         features: 'Антиоксидантний захист та зволоження',
//         category: 'Засоби для догляду за шкірою',
//         purpose: 'Антиоксидантний захист Зволоження Регуляція себуму',
//         gender: 'Унісекс',
//         activeIngredients: 'Екстракт зеленого чаю Центела азіатська Гіалуронат натрію',
//       },
//       storePrices: [
//         { name: 'Eva', price: 370, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//         { name: 'Prostor', price: 380, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//         { name: 'Watsons', price: 390, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//         { name: 'Rozetka', price: 400, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//         { name: 'Makeup', price: 385, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//         { name: 'Parfums', price: 375, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//         { name: 'Auchan', price: 365, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//         { name: 'Silpo', price: 360, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       ],
//     },
//   {
//     id: 238,
//     category: 'tonic',
//     name: 'TonyMoly Wonder Ceramide Mochi Toner',
//     price: 340,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволожує і пом’якшує.',
//     specs: { volume: '500 мл', brand: 'TonyMoly' },
//     rating: 4.4,
//     views: 150,
//     code: 'TO238',
//     composition: 'Aqua, Glycerin, Ceramide NP, Sodium Hyaluronate, Panthenol, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру або нанесіть руками.',
//     features: {
//       description: `
// TonyMoly Wonder Ceramide Mochi Toner — тонік для зволоження та пом’якшення шкіри. Засіб зміцнює шкірний бар’єр і додає сяйва.

// **Як діє?**

// Кераміди та гіалуронова кислота зволожують і відновлюють шкіру, а пантенол заспокоює. Тонік має легку текстуру, що швидко вбирається.

// **Б’юті-поради**

// Використовуйте перед нанесенням крему TonyMoly для посилення зволоження.
//       `.trim(),
//       brand: 'TonyMoly',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Зволоження шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Пом’якшення Відновлення',
//       gender: 'Унісекс',
//       activeIngredients: 'Кераміди Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 340, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 355, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 360, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 370, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 350, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 345, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 335, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 330, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 239,
//     category: 'tonic',
//     name: 'Innisfree Green Tea Balancing Toner',
//     price: 390,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Баланс pH та зволоження.',
//     specs: { volume: '200 мл', brand: 'Innisfree' },
//     rating: 4.5,
//     views: 160,
//     code: 'TO239',
//     composition: 'Aqua, Camellia Sinensis Leaf Extract, Glycerin, Sodium Hyaluronate, Panthenol, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Innisfree Green Tea Balancing Toner — тонік для балансування pH та зволоження шкіри. Засіб освіжає та готує шкіру до догляду.

// **Як діє?**

// Екстракт зеленого чаю зволожує та заспокоює, а гіалуронова кислота утримує вологу. Тонік відновлює природний баланс шкіри.

// **Б’юті-поради**

// Використовуйте після очищення засобом Innisfree та перед нанесенням крему.
//       `.trim(),
//       brand: 'Innisfree',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Балансування шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Балансування Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт зеленого чаю Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 390, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 405, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 410, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 420, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 400, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 395, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 385, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 380, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 240,
//     category: 'tonic',
//     name: 'Florance Toner with Hyaluronic Acid',
//     price: 360,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Інтенсивне зволоження.',
//     specs: { volume: '200 мл', brand: 'Florance' },
//     rating: 4.4,
//     views: 150,
//     code: 'TO240',
//     composition: 'Aqua, Glycerin, Sodium Hyaluronate, Panthenol, Aloe Barbadensis Leaf Extract, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Florance Toner with Hyaluronic Acid — тонік для інтенсивного зволоження шкіри. Засіб освіжає та готує шкіру до догляду.

// **Як діє?**

// Гіалуронова кислота та екстракт алое зволожують і заспокоюють шкіру, а пантенол сприяє відновленню. Тонік підходить для всіх типів шкіри.

// **Б’юті-поради**

// Використовуйте після очищення та перед нанесенням зволожуючого крему Florance.
//       `.trim(),
//       brand: 'Florance',
//       country: 'Польща',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Зволоження шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Заспокоєння Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Гіалуронова кислота Екстракт алое Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 360, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 375, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 380, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 390, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 370, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 365, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 355, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 350, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 241,
//     category: 'tonic',
//     name: "L'Oreal Hydra Fresh Tonic",
//     price: 280,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження та свіжість.',
//     specs: { volume: '200 мл', brand: "L'Oreal" },
//     rating: 4.4,
//     views: 155,
//     code: 'TO241',
//     composition: 'Aqua, Glycerin, Sodium Hyaluronate, Panthenol, Citric Acid, Sodium Benzoate, Parfum, Linalool.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру обличчя.',
//     features: {
//       description: `
// L'Oreal Hydra Fresh Tonic — зволожуючий тонік для всіх типів шкіри. Засіб освіжає та готує шкіру до подальшого догляду.

// **Як діє?**

// Гіалуронова кислота та пантенол зволожують і заспокоюють шкіру, зменшуючи відчуття стягнутості. Тонік м’яко очищає, видаляючи залишки макіяжу.

// **Б’юті-поради**

// Використовуйте після очищення шкіри гелем L'Oreal та перед нанесенням крему для максимального зволоження.
//       `.trim(),
//       brand: "L'Oreal",
//       country: 'Франція',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Зволоження шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Очищення Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 280, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 295, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 300, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 310, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 290, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 285, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 275, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 270, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 242,
//     category: 'tonic',
//     name: 'Garnier Pure Active Tonic',
//     price: 190,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Проти прищів.',
//     specs: { volume: '150 мл', brand: 'Garnier' },
//     rating: 4.2,
//     views: 140,
//     code: 'TO242',
//     composition: 'Aqua, Alcohol Denat., Salicylic Acid, Glycerin, Sodium Hydroxide, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру, уникаючи зони навколо очей.',
//     features: {
//       description: `
// Garnier Pure Active Tonic — тонік для жирної та проблемної шкіри. Засіб зменшує прищі та звужує пори.

// **Як діє?**

// Саліцилова кислота очищає пори та зменшує запалення, а легка формула освіжає шкіру. Тонік ідеально підходить для щоденного догляду за проблемною шкірою.

// **Б’юті-поради**

// Використовуйте після очищення гелем Garnier Pure Active та перед нанесенням крему.
//       `.trim(),
//       brand: 'Garnier',
//       country: 'Франція',
//       type: 'Тонік',
//       class: 'Мас-маркет',
//       skinType: 'Для жирної шкіри Для проблемної шкіри',
//       features: 'Очищення шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Проти прищів Звуження пор',
//       gender: 'Унісекс',
//       activeIngredients: 'Саліцилова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 190, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 200, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 205, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 210, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 195, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 190, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 185, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 180, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 243,
//     category: 'tonic',
//     name: 'Nivea Mattifying Toner',
//     price: 210,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Матування шкіри.',
//     specs: { volume: '200 мл', brand: 'Nivea' },
//     rating: 4.3,
//     views: 145,
//     code: 'TO243',
//     composition: 'Aqua, Glycerin, Alcohol Denat., Sodium Hyaluronate, Panthenol, Citric Acid, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Nivea Mattifying Toner — тонік для жирної та комбінованої шкіри. Засіб зменшує жирний блиск і матує шкіру.

// **Як діє?**

// Гіалуронова кислота зволожує, а легка формула контролює виділення себуму. Тонік освіжає та готує шкіру до нанесення крему.

// **Б’юті-поради**

// Використовуйте після очищення гелем Nivea та перед нанесенням матуючого крему.
//       `.trim(),
//       brand: 'Nivea',
//       country: 'Німеччина',
//       type: 'Тонік',
//       class: 'Мас-маркет',
//       skinType: 'Для жирної шкіри Для комбінованої шкіри',
//       features: 'Матування шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Матовість Зволоження Очищення',
//       gender: 'Унісекс',
//       activeIngredients: 'Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 210, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 220, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 225, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 230, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 215, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 210, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 205, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 200, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 244,
//     category: 'tonic',
//     name: 'La Roche-Posay Effaclar Toner',
//     price: 460,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для жирної шкіри.',
//     specs: { volume: '200 мл', brand: 'La Roche-Posay' },
//     rating: 4.7,
//     views: 190,
//     code: 'TO244',
//     composition: 'Aqua, Alcohol Denat., Glycerin, Salicylic Acid, Sodium Hydroxide, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру, уникаючи зони навколо очей.',
//     features: {
//       description: `
// La Roche-Posay Effaclar Toner — тонік для жирної та проблемної шкіри. Засіб звужує пори та зменшує жирний блиск.

// **Як діє?**

// Саліцилова кислота очищає пори та зменшує запалення, а легка формула освіжає шкіру. Тонік допомагає підтримувати матовість шкіри.

// **Б’юті-поради**

// Використовуйте після очищення гелем La Roche-Posay Effaclar та перед нанесенням крему.
//       `.trim(),
//       brand: 'La Roche-Posay',
//       country: 'Франція',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для жирної шкіри Для проблемної шкіри',
//       features: 'Звуження пор',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Звуження пор Матовість',
//       gender: 'Унісекс',
//       activeIngredients: 'Саліцилова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 460, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 475, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 480, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 490, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 470, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 465, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 455, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 450, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 245,
//     category: 'tonic',
//     name: 'Lotion P50',
//     price: 980,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Професійне відлущення.',
//     specs: { volume: '150 мл', brand: 'Biologique Recherche' },
//     rating: 4.9,
//     views: 210,
//     code: 'TO245',
//     composition: 'Aqua, Glycerin, Lactic Acid, Salicylic Acid, Niacinamide, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру ввечері, уникаючи зони навколо очей.',
//     features: {
//       description: `
// Lotion P50 — професійний тонік для відлущення та оновлення шкіри. Засіб вирівнює текстуру та покращує колір обличчя.

// **Як діє?**

// Молочна та саліцилова кислоти відлущують ороговілу шкіру, а ніацинамід зменшує пори та вирівнює тон. Тонік підходить для всіх типів шкіри.

// **Б’юті-поради**

// Починайте з використання 2-3 рази на тиждень, поступово збільшуючи частоту. Обов’язково використовуйте сонцезахисний крем.
//       `.trim(),
//       brand: 'Biologique Recherche',
//       country: 'Франція',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Ексфоліація шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Ексфоліація Оновлення Вирівнювання тону',
//       gender: 'Унісекс',
//       activeIngredients: 'Молочна кислота Саліцилова кислота Ніацинамід',
//     },
//     storePrices: [
//       { name: 'Eva', price: 980, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 995, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 1000, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 1010, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 990, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 985, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 975, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 970, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 246,
//     category: 'tonic',
//     name: 'Bioderma Sébium Lotion',
//     price: 400,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Регуляція себуму.',
//     specs: { volume: '200 мл', brand: 'Bioderma' },
//     rating: 4.6,
//     views: 175,
//     code: 'TO246',
//     composition: 'Aqua, Glycerin, Salicylic Acid, Sodium Hyaluronate, Zinc Gluconate, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Bioderma Sébium Lotion — тонік для жирної та комбінованої шкіри. Засіб регулює виділення себуму та звужує пори.

// **Як діє?**

// Саліцилова кислота очищає пори, а цинк зменшує жирний блиск. Гіалуронова кислота зволожує, запобігаючи сухості.

// **Б’юті-поради**

// Використовуйте після очищення гелем Bioderma Sébium та перед нанесенням крему.
//       `.trim(),
//       brand: 'Bioderma',
//       country: 'Франція',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для жирної шкіри Для комбінованої шкіри',
//       features: 'Регуляція себуму',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Звуження пор Матовість',
//       gender: 'Унісекс',
//       activeIngredients: 'Саліцилова кислота Цинк Гіалуронова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 400, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 415, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 420, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 430, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 410, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 405, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 395, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 390, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 247,
//     category: 'tonic',
//     name: 'Clinique Clarifying Lotion 2',
//     price: 550,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Очищення та тонізація.',
//     specs: { volume: '200 мл', brand: 'Clinique' },
//     rating: 4.6,
//     views: 180,
//     code: 'TO247',
//     composition: 'Aqua, Alcohol Denat., Glycerin, Salicylic Acid, Hamamelis Virginiana Water, Trehalose, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру після очищення.',
//     features: {
//       description: `
// Clinique Clarifying Lotion 2 — тонік для очищення та тонізації комбінованої шкіри. Засіб видаляє ороговілу шкіру та готує її до зволоження.

// **Як діє?**

// Саліцилова кислота м’яко ексфоліює, а екстракт гамамелісу звужує пори та заспокоює шкіру. Тонік зменшує жирний блиск і покращує текстуру.

// **Б’юті-поради**

// Використовуйте після очищення гелем Clinique та перед зволожуючим кремом.
//       `.trim(),
//       brand: 'Clinique',
//       country: 'США',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для комбінованої шкіри',
//       features: 'Очищення шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Тонізація Ексфоліація',
//       gender: 'Унісекс',
//       activeIngredients: 'Саліцилова кислота Гамамеліс',
//     },
//     storePrices: [
//       { name: 'Eva', price: 550, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 565, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 570, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 580, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 560, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 555, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 545, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 540, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 248,
//     category: 'tonic',
//     name: 'The Ordinary Glycolic Acid 7% Toning Solution',
//     price: 380,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'З кислотами для сяйва.',
//     specs: { volume: '240 мл', brand: 'The Ordinary' },
//     rating: 4.7,
//     views: 200,
//     code: 'TO248',
//     composition: 'Aqua, Glycolic Acid, Rosa Damascena Flower Water, Centella Asiatica Extract, Aloe Barbadensis Leaf Water, Sodium Hydroxide, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру ввечері, уникаючи зони навколо очей.',
//     features: {
//       description: `
// The Ordinary Glycolic Acid 7% Toning Solution — тонік із гліколевою кислотою для сяйва шкіри. Засіб покращує текстуру та зменшує недоліки.

// **Як діє?**

// Гліколева кислота відлущує ороговілий шар шкіри, сприяючи оновленню клітин. Екстракт центели заспокоює, а алое зволожує шкіру.

// **Б’юті-поради**

// Використовуйте сонцезахисний крем після застосування тоніка, оскільки гліколева кислота підвищує чутливість до сонця.
//       `.trim(),
//       brand: 'The Ordinary',
//       country: 'Канада',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для комбінованої шкіри Для жирної шкіри',
//       features: 'Ексфоліація шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Оновлення Сяйво',
//       gender: 'Унісекс',
//       activeIngredients: 'Гліколева кислота Екстракт центели Алое',
//     },
//     storePrices: [
//       { name: 'Eva', price: 380, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 395, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 400, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 410, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 390, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 385, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 375, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 370, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 249,
//     category: 'tonic',
//     name: 'Holika Holika Aloe Toner',
//     price: 230,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Заспокійливий алое-тонік.',
//     specs: { volume: '250 мл', brand: 'Holika Holika' },
//     rating: 4.4,
//     views: 150,
//     code: 'TO249',
//     composition: 'Aqua, Aloe Barbadensis Leaf Extract, Glycerin, Sodium Hyaluronate, Panthenol, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Holika Holika Aloe Toner — заспокійливий тонік із екстрактом алое для всіх типів шкіри. Засіб зволожує та зменшує подразнення.

// **Як діє?**

// Екстракт алое заспокоює шкіру, а гіалуронова кислота зволожує. Тонік освіжає та готує шкіру до нанесення крему.

// **Б’юті-поради**

// Використовуйте після очищення гелем Holika Holika Aloe та перед нанесенням зволожуючого крему.
//       `.trim(),
//       brand: 'Holika Holika',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Заспокоєння шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Заспокоєння Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт алое Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 230, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 240, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 245, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 250, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 235, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 230, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 225, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 220, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 250,
//     category: 'tonic',
//     name: 'Some By Mi AHA BHA PHA Toner',
//     price: 360,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для проблемної шкіри.',
//     specs: { volume: '150 мл', brand: 'Some By Mi' },
//     rating: 4.5,
//     views: 165,
//     code: 'TO250',
//     composition: 'Aqua, Salicylic Acid, Lactic Acid, Polyhydroxy Acid, Melaleuca Alternifolia Leaf Extract, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру ввечері, уникаючи зони навколо очей.',
//     features: {
//       description: `
// Some By Mi AHA BHA PHA Toner — тонік для проблемної шкіри з кислотами. Засіб очищає пори та зменшує недоліки.

// **Як діє?**

// AHA, BHA та PHA кислоти відлущують ороговілу шкіру, а екстракт чайного дерева зменшує запалення. Тонік вирівнює текстуру шкіри.

// **Б’юті-поради**

// Використовуйте ввечері та наносьте сонцезахисний крем вдень для захисту шкіри.
//       `.trim(),
//       brand: 'Some By Mi',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для проблемної шкіри',
//       features: 'Ексфоліація шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Ексфоліація Проти недоліків',
//       gender: 'Унісекс',
//       activeIngredients: 'AHA BHA PHA Екстракт чайного дерева',
//     },
//     storePrices: [
//       { name: 'Eva', price: 360, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 375, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 380, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 390, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 370, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 365, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 355, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 350, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 251,
//     category: 'tonic',
//     name: 'COSRX AHA/BHA Clarifying Treatment Toner',
//     price: 320,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Відлущує та освіжає.',
//     specs: { volume: '150 мл', brand: 'COSRX' },
//     rating: 4.5,
//     views: 160,
//     code: 'TO251',
//     composition: 'Aqua, Salicylic Acid, Glycolic Acid, Panthenol, Sodium Hyaluronate, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру ввечері, уникаючи зони навколо очей.',
//     features: {
//       description: `
// COSRX AHA/BHA Clarifying Treatment Toner — тонік для відлущення та очищення шкіри. Засіб освіжає та зменшує пори.

// **Як діє?**

// AHA та BHA кислоти відлущують ороговілу шкіру, а пантенол і гіалуронова кислота зволожують і заспокоюють. Тонік підходить для проблемної шкіри.

// **Б’юті-поради**

// Використовуйте ввечері та наносьте сонцезахисний крем вдень для захисту шкіри.
//       `.trim(),
//       brand: 'COSRX',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для проблемної шкіри Для комбінованої шкіри',
//       features: 'Ексфоліація шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Ексфоліація Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'AHA BHA Пантенол Гіалуронова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 320, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 335, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 340, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 350, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 330, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 325, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 315, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 310, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 252,
//     category: 'tonic',
//     name: 'Missha Time Revolution Toner',
//     price: 490,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Антивіковий догляд.',
//     specs: { volume: '150 мл', brand: 'Missha' },
//     rating: 4.6,
//     views: 170,
//     code: 'TO252',
//     composition: 'Aqua, Glycerin, Niacinamide, Sodium Hyaluronate, Saccharomyces Ferment, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру або нанесіть руками.',
//     features: {
//       description: `
// Missha Time Revolution Toner — тонік для антивікового догляду. Засіб зволожує та покращує еластичність шкіри.

// **Як діє?**

// Ніацинамід вирівнює тон шкіри, а ферменти дріжджів сприяють оновленню клітин. Гіалуронова кислота зволожує, зменшуючи видимість зморшок.

// **Б’юті-поради**

// Використовуйте перед нанесенням сироватки або крему Missha Time Revolution для посилення ефекту.
//       `.trim(),
//       brand: 'Missha',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для зрілої шкіри',
//       features: 'Антивіковий догляд',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Вирівнювання тону Антивіковий ефект',
//       gender: 'Унісекс',
//       activeIngredients: 'Ніацинамід Ферменти дріжджів Гіалуронова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 490, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 505, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 510, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 520, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 500, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 495, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 485, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 480, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 253,
//     category: 'tonic',
//     name: 'Eveline Facemed+ Tonic',
//     price: 170,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для щоденного очищення.',
//     specs: { volume: '200 мл', brand: 'Eveline' },
//     rating: 4.2,
//     views: 135,
//     code: 'TO253',
//     composition: 'Aqua, Glycerin, Panthenol, Sodium Hyaluronate, Citric Acid, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Eveline Facemed+ Tonic — тонік для щоденного очищення всіх типів шкіри. Засіб освіжає та зволожує шкіру.

// **Як діє?**

// Гіалуронова кислота зволожує, а пантенол заспокоює шкіру. Тонік м’яко видаляє залишки забруднень, не викликаючи подразнень.

// **Б’юті-поради**

// Використовуйте після очищення гелем Eveline Facemed+ та перед нанесенням крему.
//       `.trim(),
//       brand: 'Eveline',
//       country: 'Польща',
//       type: 'Тонік',
//       class: 'Мас-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Очищення шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Очищення Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 170, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 180, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 185, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 190, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 175, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 170, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 165, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 160, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 254,
//     category: 'tonic',
//     name: 'Ziaja Cucumber Face Toner',
//     price: 120,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Огіркова свіжість.',
//     specs: { volume: '200 мл', brand: 'Ziaja' },
//     rating: 4.2,
//     views: 130,
//     code: 'TO254',
//     composition: 'Aqua, Glycerin, Cucumis Sativus Fruit Extract, Panthenol, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Ziaja Cucumber Face Toner — тонік із екстрактом огірка для освіження шкіри. Засіб зволожує та заспокоює шкіру.

// **Як діє?**

// Екстракт огірка освіжає та тонізує, а пантенол заспокоює шкіру. Тонік ідеально підходить для щоденного догляду за всіма типами шкіри.

// **Б’юті-поради**

// Використовуйте після очищення гелем Ziaja Cucumber та перед нанесенням крему.
//       `.trim(),
//       brand: 'Ziaja',
//       country: 'Польща',
//       type: 'Тонік',
//       class: 'Мас-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Освіження шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Освіження Заспокоєння',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт огірка Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 120, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 130, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 135, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 140, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 125, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 120, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 115, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 110, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 255,
//     category: 'tonic',
//     name: 'Vichy Normaderm Purifying Lotion',
//     price: 440,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для очищення пор.',
//     specs: { volume: '200 мл', brand: 'Vichy' },
//     rating: 4.6,
//     views: 175,
//     code: 'TO255',
//     composition: 'Aqua, Alcohol Denat., Glycerin, Salicylic Acid, Sodium Hydroxide, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру, уникаючи зони навколо очей.',
//     features: {
//       description: `
// Vichy Normaderm Purifying Lotion — тонік для жирної та проблемної шкіри. Засіб очищає пори та зменшує недоліки.

// **Як діє?**

// Саліцилова кислота очищає пори та зменшує запалення, а легка формула освіжає шкіру. Тонік допомагає підтримувати чистоту шкіри.

// **Б’юті-поради**

// Використовуйте після очищення гелем Vichy Normaderm та перед нанесенням крему.
//       `.trim(),
//       brand: 'Vichy',
//       country: 'Франція',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для жирної шкіри Для проблемної шкіри',
//       features: 'Очищення пор',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Звуження пор Проти недоліків',
//       gender: 'Унісекс',
//       activeIngredients: 'Саліцилова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 440, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 455, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 460, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 470, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 450, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 445, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 435, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 430, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 256,
//     category: 'tonic',
//     name: 'Dr. Jart+ Cicapair Toner',
//     price: 540,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Заспокоює подразнення.',
//     specs: { volume: '150 мл', brand: 'Dr. Jart+' },
//     rating: 4.7,
//     views: 180,
//     code: 'TO256',
//     composition: 'Aqua, Glycerin, Centella Asiatica Extract, Sodium Hyaluronate, Panthenol, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру або нанесіть руками.',
//     features: {
//       description: `
// Dr. Jart+ Cicapair Toner — заспокійливий тонік для чутливої та подразненої шкіри. Засіб відновлює та зволожує шкіру.

// **Як діє?**

// Екстракт центели заспокоює подразнення, а гіалуронова кислота та пантенол зволожують і відновлюють шкірний бар’єр. Тонік ідеально підходить для чутливої шкіри.

// **Б’юті-поради**

// Використовуйте після очищення гелем Dr. Jart+ Cicapair та перед нанесенням крему для посилення заспокійливого ефекту.
//       `.trim(),
//       brand: 'Dr. Jart+',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для чутливої шкіри Для подразненої шкіри',
//       features: 'Заспокоєння шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Заспокоєння Зволоження Відновлення',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт центели Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 540, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 555, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 560, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 570, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 550, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 545, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 535, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 530, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 257,
//     category: 'tonic',
//     name: 'Neutrogena Pore Refining Toner',
//     price: 280,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зменшення пор.',
//     specs: { volume: '200 мл', brand: 'Neutrogena' },
//     rating: 4.3,
//     views: 145,
//     code: 'TO257',
//     composition: 'Aqua, Alcohol Denat., Salicylic Acid, Hamamelis Virginiana Water, Glycerin, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру, уникаючи зони навколо очей.',
//     features: {
//       description: `
// Neutrogena Pore Refining Toner — тонік для жирної та комбінованої шкіри. Засіб зменшує видимість пор і матує шкіру.

// **Як діє?**

// Саліцилова кислота очищає пори, а екстракт гамамелісу звужує їх і зменшує жирний блиск. Тонік освіжає та готує шкіру до догляду.

// **Б’юті-поради**

// Використовуйте після очищення гелем Neutrogena та перед нанесенням зволожуючого крему.
//       `.trim(),
//       brand: 'Neutrogena',
//       country: 'США',
//       type: 'Тонік',
//       class: 'Мас-маркет',
//       skinType: 'Для жирної шкіри Для комбінованої шкіри',
//       features: 'Звуження пор',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Звуження пор Матовість',
//       gender: 'Унісекс',
//       activeIngredients: 'Саліцилова кислота Екстракт гамамелісу',
//     },
//     storePrices: [
//       { name: 'Eva', price: 280, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 295, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 300, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 310, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 290, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 285, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 275, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 270, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 258,
//     category: 'tonic',
//     name: 'Caudalie Vinopure Toner',
//     price: 450,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для комбінованої шкіри.',
//     specs: { volume: '200 мл', brand: 'Caudalie' },
//     rating: 4.6,
//     views: 170,
//     code: 'TO258',
//     composition: 'Aqua, Alcohol Denat., Salicylic Acid, Vitis Vinifera Fruit Water, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру, уникаючи зони навколо очей.',
//     features: {
//       description: `
// Caudalie Vinopure Toner — тонік для комбінованої та жирної шкіри. Засіб очищає пори та зменшує жирний блиск.

// **Як діє?**

// Саліцилова кислота очищає пори, а виноградна вода зволожує та освіжає шкіру. Тонік допомагає вирівняти текстуру шкіри та зменшити недоліки.

// **Б’юті-поради**

// Використовуйте після очищення гелем Caudalie Vinopure та перед нанесенням сироватки.
//       `.trim(),
//       brand: 'Caudalie',
//       country: 'Франція',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для комбінованої шкіри Для жирної шкіри',
//       features: 'Очищення шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Звуження пор Матовість',
//       gender: 'Унісекс',
//       activeIngredients: 'Саліцилова кислота Виноградна вода',
//     },
//     storePrices: [
//       { name: 'Eva', price: 450, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 465, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 470, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 480, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 460, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 455, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 445, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 440, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 259,
//     category: 'tonic',
//     name: 'The Inkey List Glycolic Acid Toner',
//     price: 310,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Очищення з кислотами.',
//     specs: { volume: '200 мл', brand: 'The Inkey List' },
//     rating: 4.5,
//     views: 160,
//     code: 'TO259',
//     composition: 'Aqua, Glycolic Acid, Glycerin, Sodium Hydroxide, Hamamelis Virginiana Water, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру ввечері, уникаючи зони навколо очей.',
//     features: {
//       description: `
// The Inkey List Glycolic Acid Toner — тонік із гліколевою кислотою для очищення та сяйва шкіри. Засіб вирівнює текстуру та зменшує недоліки.

// **Як діє?**

// Гліколева кислота відлущує ороговілу шкіру, а екстракт гамамелісу звужує пори та заспокоює. Тонік підходить для комбінованої та жирної шкіри.

// **Б’юті-поради**

// Використовуйте ввечері та обов’язково наносьте сонцезахисний крем вдень.
//       `.trim(),
//       brand: 'The Inkey List',
//       country: 'Велика Британія',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для комбінованої шкіри Для жирної шкіри',
//       features: 'Ексфоліація шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Ексфоліація Сяйво',
//       gender: 'Унісекс',
//       activeIngredients: 'Гліколева кислота Екстракт гамамелісу',
//     },
//     storePrices: [
//       { name: 'Eva', price: 310, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 325, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 330, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 340, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 320, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 315, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 305, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 300, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 260,
//     category: 'tonic',
//     name: 'Lumene Nordic Hydra Tonic',
//     price: 370,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження та догляд.',
//     specs: { volume: '200 мл', brand: 'Lumene' },
//     rating: 4.4,
//     views: 155,
//     code: 'TO260',
//     composition: 'Aqua, Glycerin, Betula Alba Juice, Sodium Hyaluronate, Panthenol, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Lumene Nordic Hydra Tonic — зволожуючий тонік для всіх типів шкіри. Засіб освіжає та готує шкіру до подальшого догляду.

// **Як діє?**

// Сік берези та гіалуронова кислота зволожують шкіру, а пантенол заспокоює. Тонік додає шкірі м’якості та здорового сяйва.

// **Б’юті-поради**

// Використовуйте після очищення гелем Lumene та перед нанесенням зволожуючого крему.
//       `.trim(),
//       brand: 'Lumene',
//       country: 'Фінляндія',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Зволоження шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Освіження Заспокоєння',
//       gender: 'Унісекс',
//       activeIngredients: 'Сік берези Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 370, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 385, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 390, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 400, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 380, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 375, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 365, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 360, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 261,
//     category: 'tonic',
//     name: 'Avène Gentle Toner',
//     price: 330,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для чутливої шкіри.',
//     specs: { volume: '200 мл', brand: 'Avène' },
//     rating: 4.6,
//     views: 165,
//     code: 'TO261',
//     composition: 'Aqua, Avène Thermal Spring Water, Glycerin, Sodium Hyaluronate, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Avène Gentle Toner — м’який тонік для чутливої шкіри. Засіб зволожує та заспокоює, не викликаючи подразнень.

// **Як діє?**

// Термальна вода Avène заспокоює шкіру, а гіалуронова кислота зволожує. Тонік відновлює комфорт і готує шкіру до догляду.

// **Б’юті-поради**

// Використовуйте після очищення гелем Avène та перед нанесенням крему для чутливої шкіри.
//       `.trim(),
//       brand: 'Avène',
//       country: 'Франція',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для чутливої шкіри',
//       features: 'Заспокоєння шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Заспокоєння Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Термальна вода Гіалуронова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 330, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 345, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 350, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 360, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 340, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 335, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 325, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 320, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 262,
//     category: 'tonic',
//     name: 'Purito Centella Green Level Toner',
//     price: 400,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Заспокійливий тонік.',
//     specs: { volume: '200 мл', brand: 'Purito' },
//     rating: 4.5,
//     views: 160,
//     code: 'TO262',
//     composition: 'Aqua, Centella Asiatica Extract, Sodium Hyaluronate, Panthenol, Camellia Sinensis Leaf Extract, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру або нанесіть руками.',
//     features: {
//       description: `
// Purito Centella Green Level Toner — заспокійливий тонік для всіх типів шкіри, особливо для чутливої. Засіб зволожує та відновлює шкіру.

// **Як діє?**

// Екстракт центели заспокоює подразнення, а екстракт зеленого чаю має антиоксидантну дію. Гіалуронова кислота зволожує, надаючи шкірі м’якості.

// **Б’юті-поради**

// Використовуйте після очищення та перед нанесенням сироватки Purito для посилення ефекту.
//       `.trim(),
//       brand: 'Purito',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри Для чутливої шкіри',
//       features: 'Заспокоєння шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Заспокоєння Антиоксидантна дія',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт центели Екстракт зеленого чаю Гіалуронова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 400, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 415, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 420, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 430, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 410, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 405, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 395, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 390, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 263,
//     category: 'tonic',
//     name: 'Floralis Bio Tonic',
//     price: 150,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Біо-догляд щодня.',
//     specs: { volume: '200 мл', brand: 'Floralis' },
//     rating: 4.2,
//     views: 135,
//     code: 'TO263',
//     composition: 'Aqua, Glycerin, Chamomilla Recutita Flower Extract, Panthenol, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Floralis Bio Tonic — тонік для щоденного догляду за всіма типами шкіри. Засіб освіжає та зволожує, надаючи шкірі м’якості.

// **Як діє?**

// Екстракт ромашки заспокоює шкіру, а пантенол сприяє її відновленню. Тонік м’яко очищає, не викликаючи подразнень.

// **Б’юті-поради**

// Використовуйте після очищення та перед нанесенням зволожуючого крему Floralis.
//       `.trim(),
//       brand: 'Floralis',
//       country: 'Україна',
//       type: 'Тонік',
//       class: 'Мас-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Зволоження шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Заспокоєння Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт ромашки Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 150, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 160, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 165, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 170, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 155, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 150, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 145, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 140, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 264,
//     category: 'tonic',
//     name: 'Thayers Rose Petal Toner',
//     price: 390,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Трояндова свіжість.',
//     specs: { volume: '355 мл', brand: 'Thayers' },
//     rating: 4.5,
//     views: 160,
//     code: 'TO264',
//     composition: 'Aqua, Glycerin, Rosa Damascena Flower Water, Hamamelis Virginiana Water, Aloe Barbadensis Leaf Extract, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Thayers Rose Petal Toner — тонік із трояндовою водою для всіх типів шкіри. Засіб освіжає та зволожує, надаючи шкірі сяйва.

// **Як діє?**

// Трояндова вода та екстракт гамамелісу заспокоюють і тонізують шкіру, а алое зволожує. Тонік не містить спирту, що робить його м’яким для шкіри.

// **Б’юті-поради**

// Використовуйте після очищення та перед нанесенням зволожуючого крему для посилення ефекту.
//       `.trim(),
//       brand: 'Thayers',
//       country: 'США',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Освіження шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Освіження Заспокоєння',
//       gender: 'Унісекс',
//       activeIngredients: 'Трояндова вода Екстракт гамамелісу Алое',
//     },
//     storePrices: [
//       { name: 'Eva', price: 390, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 405, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 410, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 420, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 400, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 395, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 385, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 380, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 265,
//     category: 'tonic',
//     name: 'Erborian Yuza Double Lotion',
//     price: 580,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зміцнюючий догляд.',
//     specs: { volume: '190 мл', brand: 'Erborian' },
//     rating: 4.7,
//     views: 175,
//     code: 'TO265',
//     composition: 'Aqua, Glycerin, Citrus Junos Fruit Extract, Sodium Hyaluronate, Niacinamide, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру або нанесіть руками.',
//     features: {
//       description: `
// Erborian Yuza Double Lotion — зміцнюючий тонік для тьмяної та втомленої шкіри. Засіб додає сяйва та зволожує.

// **Як діє?**

// Екстракт юзу багатий на вітамін С, який освітлює шкіру, а ніацинамід вирівнює тон. Гіалуронова кислота зволожує, надаючи шкірі пружності.

// **Б’юті-поради**

// Використовуйте перед нанесенням крему Erborian Yuza для посилення ефекту сяйва.
//       `.trim(),
//       brand: 'Erborian',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для всіх типів шкіри Для тьмяної шкіри',
//       features: 'Освітлення шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Освітлення Зміцнення',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт юзу Ніацинамід Гіалуронова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 580, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 595, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 600, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 610, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 590, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 585, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 575, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 570, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 266,
//     category: 'tonic',
//     name: 'Etude House SoonJung pH 5.5 Toner',
//     price: 300,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Збалансований рівень pH.',
//     specs: { volume: '200 мл', brand: 'Etude House' },
//     rating: 4.4,
//     views: 150,
//     code: 'TO266',
//     composition: 'Aqua, Glycerin, Panthenol, Centella Asiatica Extract, Sodium Hyaluronate, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру або нанесіть руками.',
//     features: {
//       description: `
// Etude House SoonJung pH 5.5 Toner — тонік із низьким pH для чутливої шкіри. Засіб зволожує та заспокоює шкіру.

// **Як діє?**

// Екстракт центели та пантенол заспокоюють подразнення, а гіалуронова кислота зволожує. Тонік відновлює природний баланс pH шкіри.

// **Б’юті-поради**

// Використовуйте після очищення та перед нанесенням крему SoonJung для чутливої шкіри.
//       `.trim(),
//       brand: 'Etude House',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для чутливої шкіри',
//       features: 'Заспокоєння шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Заспокоєння Балансування pH',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт центели Пантенол Гіалуронова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 300, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 315, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 320, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 330, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 310, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 305, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 295, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 290, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 267,
//     category: 'tonic',
//     name: 'Isntree Green Tea Fresh Toner',
//     price: 350,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Очищення та тонізація.',
//     specs: { volume: '200 мл', brand: 'Isntree' },
//     rating: 4.5,
//     views: 155,
//     code: 'TO267',
//     composition: 'Aqua, Camellia Sinensis Leaf Extract, Glycerin, Centella Asiatica Extract, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Isntree Green Tea Fresh Toner — тонік для очищення та тонізації жирної та комбінованої шкіри. Засіб освіжає та зменшує жирний блиск.

// **Як діє?**

// Екстракт зеленого чаю має антиоксидантну дію та очищає пори, а екстракт центели заспокоює шкіру. Тонік допомагає підтримувати матовість.

// **Б’юті-поради**

// Використовуйте після очищення та перед нанесенням зволожуючого крему Isntree.
//       `.trim(),
//       brand: 'Isntree',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для жирної шкіри Для комбінованої шкіри',
//       features: 'Очищення шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Тонізація Антиоксидантна дія',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт зеленого чаю Екстракт центели',
//     },
//     storePrices: [
//       { name: 'Eva', price: 350, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 365, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 370, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 380, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 360, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 355, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 345, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 340, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 268,
//     category: 'tonic',
//     name: 'Mixa Anti-Imperfection Tonic',
//     price: 180,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Проти недоліків шкіри.',
//     specs: { volume: '200 мл', brand: 'Mixa' },
//     rating: 4.3,
//     views: 140,
//     code: 'TO268',
//     composition: 'Aqua, Glycerin, Salicylic Acid, Sodium Hydroxide, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру, уникаючи зони навколо очей.',
//     features: {
//       description: `
// Mixa Anti-Imperfection Tonic — тонік для жирної та проблемної шкіри. Засіб зменшує недоліки та очищає пори.

// **Як діє?**

// Саліцилова кислота очищає пори та зменшує запалення, а легка формула освіжає шкіру. Тонік допомагає підтримувати чистоту шкіри.

// **Б’юті-поради**

// Використовуйте після очищення гелем Mixa та перед нанесенням зволожуючого крему.
//       `.trim(),
//       brand: 'Mixa',
//       country: 'Франція',
//       type: 'Тонік',
//       class: 'Мас-маркет',
//       skinType: 'Для жирної шкіри Для проблемної шкіри',
//       features: 'Очищення шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Проти недоліків Звуження пор',
//       gender: 'Унісекс',
//       activeIngredients: 'Саліцилова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 180, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 190, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 195, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 200, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 185, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 180, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 175, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 170, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 269,
//     category: 'tonic',
//     name: 'Farmstay Tea Tree Biome Toner',
//     price: 270,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Антисептичний ефект.',
//     specs: { volume: '200 мл', brand: 'Farmstay' },
//     rating: 4.4,
//     views: 150,
//     code: 'TO269',
//     composition: 'Aqua, Glycerin, Melaleuca Alternifolia Leaf Extract, Sodium Hyaluronate, Panthenol, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Farmstay Tea Tree Biome Toner — тонік із антисептичною дією для жирної та проблемної шкіри. Засіб очищає та заспокоює шкіру.

// **Як діє?**

// Екстракт чайного дерева має антибактеріальну дію, зменшуючи запалення. Гіалуронова кислота та пантенол зволожують і заспокоюють шкіру.

// **Б’юті-поради**

// Використовуйте після очищення та перед нанесенням крему Farmstay для проблемної шкіри.
//       `.trim(),
//       brand: 'Farmstay',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для жирної шкіри Для проблемної шкіри',
//       features: 'Антисептична дія',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Заспокоєння Антибактеріальний ефект',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт чайного дерева Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 270, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 285, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 290, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 300, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 280, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 275, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 265, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 260, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 270,
//     category: 'tonic',
//     name: 'Elizavecca Witch Piggy Hell Pore Toner',
//     price: 260,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Глибоке очищення.',
//     specs: { volume: '200 мл', brand: 'Elizavecca' },
//     rating: 4.4,
//     views: 145,
//     code: 'TO270',
//     composition: 'Aqua, Glycerin, Salicylic Acid, Hamamelis Virginiana Water, Sodium Hyaluronate, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру, уникаючи зони навколо очей.',
//     features: {
//       description: `
// Elizavecca Witch Piggy Hell Pore Toner — тонік для глибокого очищення жирної та комбінованої шкіри. Засіб звужує пори та зменшує жирний блиск.

// **Як діє?**

// Саліцилова кислота очищає пори, а екстракт гамамелісу звужує їх і заспокоює шкіру. Гіалуронова кислота зволожує, запобігаючи сухості.

// **Б’юті-поради**

// Використовуйте після очищення гелем Elizavecca та перед нанесенням зволожуючого крему.
//       `.trim(),
//       brand: 'Elizavecca',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для жирної шкіри Для комбінованої шкіри',
//       features: 'Глибоке очищення',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Звуження пор Матовість',
//       gender: 'Унісекс',
//       activeIngredients: 'Саліцилова кислота Екстракт гамамелісу Гіалуронова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 260, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 275, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 280, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 290, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 270, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 265, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 255, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 250, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 271,
//     category: 'tonic',
//     name: 'Nature Republic Aloe Vera Toner',
//     price: 230,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження та охолодження.',
//     specs: { volume: '160 мл', brand: 'Nature Republic' },
//     rating: 4.4,
//     views: 150,
//     code: 'TO271',
//     composition: 'Aqua, Aloe Barbadensis Leaf Extract, Glycerin, Sodium Hyaluronate, Panthenol, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Nature Republic Aloe Vera Toner — зволожуючий тонік із охолоджуючим ефектом для всіх типів шкіри. Засіб освіжає та заспокоює шкіру.

// **Як діє?**

// Екстракт алое зволожує та заспокоює шкіру, а гіалуронова кислота утримує вологу. Тонік ідеально підходить для використання після очищення.

// **Б’юті-поради**

// Використовуйте після очищення гелем Nature Republic Aloe Vera та перед нанесенням зволожуючого крему.
//       `.trim(),
//       brand: 'Nature Republic',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Зволоження шкіри Охолодження',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Заспокоєння Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт алое Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 230, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 245, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 250, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 260, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 240, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 235, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 225, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 220, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 272,
//     category: 'tonic',
//     name: 'Florence by Mills Get That Grime Toner',
//     price: 410,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Видалення забруднень.',
//     specs: { volume: '100 мл', brand: 'Florence by Mills' },
//     rating: 4.5,
//     views: 165,
//     code: 'TO272',
//     composition: 'Aqua, Glycerin, Salicylic Acid, Hamamelis Virginiana Water, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру, уникаючи зони навколо очей.',
//     features: {
//       description: `
// Florence by Mills Get That Grime Toner — тонік для очищення шкіри від забруднень. Підходить для молодої та комбінованої шкіри.

// **Як діє?**

// Саліцилова кислота очищає пори, а екстракт гамамелісу звужує їх і заспокоює шкіру. Тонік освіжає та готує шкіру до догляду.

// **Б’юті-поради**

// Використовуйте після очищення гелем Florence by Mills та перед нанесенням зволожуючого крему.
//       `.trim(),
//       brand: 'Florence by Mills',
//       country: 'США',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для комбінованої шкіри Для молодої шкіри',
//       features: 'Очищення шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Звуження пор Освіження',
//       gender: 'Унісекс',
//       activeIngredients: 'Саліцилова кислота Екстракт гамамелісу',
//     },
//     storePrices: [
//       { name: 'Eva', price: 410, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 425, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 430, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 440, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 420, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 415, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 405, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 400, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 273,
//     category: 'tonic',
//     name: 'Secret Key Witch Hazel Toner',
//     price: 270,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Проти почервоніння.',
//     specs: { volume: '250 мл', brand: 'Secret Key' },
//     rating: 4.4,
//     views: 145,
//     code: 'TO273',
//     composition: 'Aqua, Hamamelis Virginiana Water, Glycerin, Sodium Hyaluronate, Centella Asiatica Extract, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Secret Key Witch Hazel Toner — тонік для зменшення почервоніння та заспокоєння шкіри. Підходить для чутливої та комбінованої шкіри.

// **Як діє?**

// Екстракт гамамелісу заспокоює шкіру та зменшує почервоніння, а екстракт центели сприяє відновленню. Гіалуронова кислота зволожує.

// **Б’юті-поради**

// Використовуйте після очищення та перед нанесенням зволожуючого крему Secret Key.
//       `.trim(),
//       brand: 'Secret Key',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для чутливої шкіри Для комбінованої шкіри',
//       features: 'Заспокоєння шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Заспокоєння Зволоження Проти почервоніння',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт гамамелісу Екстракт центели Гіалуронова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 270, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 285, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 290, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 300, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 280, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 275, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 265, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 260, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 274,
//     category: 'tonic',
//     name: 'Tony Moly Wonder Toner',
//     price: 290,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Щоденне зволоження.',
//     specs: { volume: '500 мл', brand: 'Tony Moly' },
//     rating: 4.3,
//     views: 155,
//     code: 'TO274',
//     composition: 'Aqua, Glycerin, Sodium Hyaluronate, Panthenol, Camellia Sinensis Leaf Extract, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру або нанесіть руками.',
//     features: {
//       description: `
// Tony Moly Wonder Toner — зволожуючий тонік для щоденного догляду за всіма типами шкіри. Засіб освіжає та готує шкіру до подальшого догляду.

// **Як діє?**

// Гіалуронова кислота зволожує шкіру, а екстракт зеленого чаю має антиоксидантну дію. Тонік додає шкірі м’якості та сяйва.

// **Б’юті-поради**

// Використовуйте після очищення гелем Tony Moly та перед нанесенням зволожуючого крему.
//       `.trim(),
//       brand: 'Tony Moly',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Зволоження шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Освіження Антиоксидантна дія',
//       gender: 'Унісекс',
//       activeIngredients: 'Гіалуронова кислота Екстракт зеленого чаю Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 290, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 305, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 310, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 320, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 300, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 295, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 285, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 280, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 275,
//     category: 'tonic',
//     name: 'Glow Lab Hydrating Toner',
//     price: 320,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Глибоке зволоження.',
//     specs: { volume: '200 мл', brand: 'Glow Lab' },
//     rating: 4.4,
//     views: 160,
//     code: 'TO275',
//     composition: 'Aqua, Glycerin, Sodium Hyaluronate, Aloe Barbadensis Leaf Extract, Panthenol, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Glow Lab Hydrating Toner — тонік для глибокого зволоження всіх типів шкіри. Засіб освіжає та додає шкірі сяйва.

// **Як діє?**

// Гіалуронова кислота та екстракт алое зволожують шкіру, а пантенол заспокоює. Тонік ідеально підходить для щоденного догляду.

// **Б’юті-поради**

// Використовуйте після очищення та перед нанесенням зволожуючого крему Glow Lab.
//       `.trim(),
//       brand: 'Glow Lab',
//       country: 'Нова Зеландія',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Зволоження шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Освіження Заспокоєння',
//       gender: 'Унісекс',
//       activeIngredients: 'Гіалуронова кислота Екстракт алое Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 320, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 335, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 340, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 350, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 330, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 325, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 315, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 310, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 276,
//     category: 'tonic',
//     name: 'Yves Rocher Pure Menthe Toner',
//     price: 280,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Очищення м’ятою.',
//     specs: { volume: '200 мл', brand: 'Yves Rocher' },
//     rating: 4.3,
//     views: 150,
//     code: 'TO276',
//     composition: 'Aqua, Glycerin, Mentha Piperita Leaf Extract, Sodium Hyaluronate, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Yves Rocher Pure Menthe Toner — тонік із м’ятним екстрактом для очищення жирної та комбінованої шкіри. Засіб освіжає та матує.

// **Як діє?**

// Екстракт м’яти очищає та освіжає шкіру, а гіалуронова кислота зволожує. Тонік допомагає зменшити жирний блиск.

// **Б’юті-поради**

// Використовуйте після очищення гелем Yves Rocher Pure Menthe та перед нанесенням крему.
//       `.trim(),
//       brand: 'Yves Rocher',
//       country: 'Франція',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для жирної шкіри Для комбінованої шкіри',
//       features: 'Очищення шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Освіження Матовість',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт м’яти Гіалуронова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 280, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 295, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 300, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 310, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 290, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 285, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 275, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 270, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 277,
//     category: 'tonic',
//     name: 'Lumina Natural Balancing Tonic',
//     price: 290,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Баланс для шкіри.',
//     specs: { volume: '150 мл', brand: 'Lumina' },
//     rating: 4.4,
//     views: 145,
//     code: 'TO277',
//     composition: 'Aqua, Glycerin, Chamomilla Recutita Flower Extract, Sodium Hyaluronate, Panthenol, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Lumina Natural Balancing Tonic — тонік для балансування всіх типів шкіри. Засіб зволожує та заспокоює шкіру.

// **Як діє?**

// Екстракт ромашки заспокоює шкіру, а гіалуронова кислота та пантенол зволожують і відновлюють. Тонік підтримує природний баланс шкіри.

// **Б’юті-поради**

// Використовуйте після очищення та перед нанесенням зволожуючого крему Lumina.
//       `.trim(),
//       brand: 'Lumina',
//       country: 'Україна',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Заспокоєння шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Заспокоєння Балансування',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт ромашки Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 290, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 305, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 310, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 320, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 300, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 295, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 285, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 280, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 278,
//     category: 'tonic',
//     name: 'Balea Med Ultra Sensitive Tonic',
//     price: 150,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Без ароматизаторів.',
//     specs: { volume: '200 мл', brand: 'Balea' },
//     rating: 4.3,
//     views: 140,
//     code: 'TO278',
//     composition: 'Aqua, Glycerin, Panthenol, Sodium Hyaluronate, Sodium Benzoate.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Balea Med Ultra Sensitive Tonic — м’який тонік без ароматизаторів для чутливої шкіри. Засіб зволожує та заспокоює шкіру.

// **Як діє?**

// Гіалуронова кислота зволожує, а пантенол заспокоює шкіру, не викликаючи подразнень. Тонік ідеально підходить для щоденного догляду.

// **Б’юті-поради**

// Використовуйте після очищення гелем Balea Med та перед нанесенням крему для чутливої шкіри.
//       `.trim(),
//       brand: 'Balea',
//       country: 'Німеччина',
//       type: 'Тонік',
//       class: 'Мас-маркет',
//       skinType: 'Для чутливої шкіри',
//       features: 'Заспокоєння шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Заспокоєння Без ароматизаторів',
//       gender: 'Унісекс',
//       activeIngredients: 'Гіалуронова кислота Пантенол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 150, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 160, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 165, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 170, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 155, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 150, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 145, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 140, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 279,
//     category: 'tonic',
//     name: 'Glow Recipe Watermelon Glow Toner',
//     price: 520,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження з ароматом кавуна.',
//     specs: { volume: '150 мл', brand: 'Glow Recipe' },
//     rating: 4.7,
//     views: 180,
//     code: 'TO279',
//     composition: 'Aqua, Citrullus Lanatus Fruit Extract, Sodium Hyaluronate, Glycerin, Salicylic Acid, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть очищену шкіру.',
//     features: {
//       description: `
// Glow Recipe Watermelon Glow Toner — зволожуючий тонік із ароматом кавуна для всіх типів шкіри. Засіб додає сяйва та очищає пори.

// **Як діє?**

// Екстракт кавуна зволожує та освіжає, а саліцилова кислота м’яко очищає пори. Гіалуронова кислота утримує вологу, надаючи шкірі сяйва.

// **Б’юті-поради**

// Використовуйте після очищення та перед нанесенням сироватки Glow Recipe для посилення ефекту.
//       `.trim(),
//       brand: 'Glow Recipe',
//       country: 'США',
//       type: 'Тонік',
//       class: 'Преміум',
//       skinType: 'Для всіх типів шкіри',
//       features: 'Зволоження шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Зволоження Очищення Сяйво',
//       gender: 'Унісекс',
//       activeIngredients: 'Екстракт кавуна Саліцилова кислота Гіалуронова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 520, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 535, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 540, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 550, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 530, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 525, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 515, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 510, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 280,
//     category: 'tonic',
//     name: 'Tiam AC Fighting AHA/BHA Toner',
//     price: 310,
//     image: scrubsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Боротьба з акне.',
//     specs: { volume: '180 мл', brand: 'Tiam' },
//     rating: 4.5,
//     views: 160,
//     code: 'TO280',
//     composition: 'Aqua, Salicylic Acid, Glycolic Acid, Glycerin, Sodium Hyaluronate, Sodium Benzoate, Parfum.',
//     usage: 'Нанесіть на ватний диск і протріть шкіру ввечері, уникаючи зони навколо очей.',
//     features: {
//       description: `
// Tiam AC Fighting AHA/BHA Toner — тонік для боротьби з акне для жирної та проблемної шкіри. Засіб очищає пори та зменшує недоліки.

// **Як діє?**

// AHA та BHA кислоти відлущують ороговілу шкіру, а саліцилова кислота очищає пори та зменшує запалення. Гіалуронова кислота зволожує.

// **Б’юті-поради**

// Використовуйте ввечері та наносьте сонцезахисний крем вдень для захисту шкіри.
//       `.trim(),
//       brand: 'Tiam',
//       country: 'Південна Корея',
//       type: 'Тонік',
//       class: 'Мідл-маркет',
//       skinType: 'Для жирної шкіри Для проблемної шкіри',
//       features: 'Очищення шкіри',
//       category: 'Засоби для догляду за обличчям',
//       purpose: 'Очищення Ексфоліація Проти акне',
//       gender: 'Унісекс',
//       activeIngredients: 'AHA BHA Саліцилова кислота Гіалуронова кислота',
//     },
//     storePrices: [
//       { name: 'Eva', price: 310, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 325, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 330, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 340, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 320, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 315, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 305, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 300, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 281,
//     category: 'lipgloss',
//     name: 'NoUBA Plumping Gloss',
//     price: 370,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'З ефектом збільшення.',
//     specs: { volume: '5 мл', brand: 'NoUBA' },
//     rating: 4.5,
//     views: 160,
//     code: 'LIP030',
//     composition: 'Polybutene, Octyldodecanol, Menthol, Capsicum Frutescens Fruit Extract, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи або поверх помади для додаткового блиску.',
//     features: {
//       description: `
// NoUBA Plumping Gloss — блиск для губ із ефектом збільшення. Засіб додає об’єму та блиску губам.

// **Як діє?**

// Ментол і екстракт перцю створюють легке поколювання, що стимулює кровообіг, надаючи губам об’єму. Формула зволожує та забезпечує стійкий блиск.

// **Б’юті-поради**

// Для максимального ефекту наносьте поверх матової помади NoUBA.
//       `.trim(),
//       brand: 'NoUBA',
//       country: 'Італія',
//       type: 'Блиск для губ',
//       class: 'Мідл-маркет',
//       features: 'Ефект збільшення губ',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження Об’єм губ',
//       gender: 'Жіночий',
//       activeIngredients: 'Ментол Екстракт перцю Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 370, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 385, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 390, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 400, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 380, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 375, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 365, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 360, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 282,
//     category: 'lipgloss',
//     name: 'Maybelline Lifter Gloss',
//     price: 220,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'З гіалуроновою кислотою.',
//     specs: { volume: '5.4 мл', brand: 'Maybelline' },
//     rating: 4.4,
//     views: 180,
//     code: 'LIP001',
//     composition: 'Polybutene, Octyldodecanol, Sodium Hyaluronate, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи або поверх помади для глянцевого ефекту.',
//     features: {
//       description: `
// Maybelline Lifter Gloss — блиск для губ із гіалуроновою кислотою. Засіб зволожує губи та додає їм природного блиску.

// **Як діє?**

// Гіалуронова кислота зволожує губи, роблячи їх більш гладкими та пружними. Легка текстура забезпечує комфортне нанесення.

// **Б’юті-поради**

// Наносьте поверх помади Maybelline для створення об’ємного ефекту.
//       `.trim(),
//       brand: 'Maybelline',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Мас-маркет',
//       features: 'Зволоження губ',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Гіалуронова кислота Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 220, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 235, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 240, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 250, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 230, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 225, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 215, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 210, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 283,
//     category: 'lipgloss',
//     name: 'NYX Butter Gloss',
//     price: 190,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Ніжна текстура.',
//     specs: { volume: '8 мл', brand: 'NYX' },
//     rating: 4.3,
//     views: 240,
//     code: 'LIP002',
//     composition: 'Polybutene, Octyldodecanol, Butyrospermum Parkii Butter, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи або поверх помади для ніжного блиску.',
//     features: {
//       description: `
// NYX Butter Gloss — блиск для губ із ніжною кремовою текстурою. Засіб додає губам блиску та зволожує їх.

// **Як діє?**

// Масло ши зволожує губи, а легка текстура забезпечує комфортне нанесення. Блиск створює природний глянцевий ефект.

// **Б’юті-поради**

// Використовуйте поверх помади NYX для створення ніжного образу.
//       `.trim(),
//       brand: 'NYX',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Мас-маркет',
//       features: 'Зволоження губ',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Масло ши Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 190, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 205, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 210, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 220, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 200, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 195, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 185, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 180, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 284,
//     category: 'lipgloss',
//     name: "L'Oréal Infallible Pro Gloss",
//     price: 230,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Стійкий блиск.',
//     specs: { volume: '8 мл', brand: "L'Oréal" },
//     rating: 4.6,
//     views: 200,
//     code: 'LIP003',
//     composition: 'Polybutene, Octyldodecanol, Dimethicone, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи або поверх помади для стійкого блиску.',
//     features: {
//       description: `
// L'Oréal Infallible Pro Gloss — стійкий блиск для губ із глянцевим фінішем. Засіб забезпечує довготривалий блиск і комфорт.

// **Як діє?**

// Диметикон створює гладке покриття, а формула забезпечує стійкість до 8 годин. Блиск зволожує губи та додає їм об’єму.

// **Б’юті-поради**

// Наносьте поверх помади L'Oréal для створення ефектного образу.
//       `.trim(),
//       brand: "L'Oréal",
//       country: 'Франція',
//       type: 'Блиск для губ',
//       class: 'Мас-маркет',
//       features: 'Стійкий блиск',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження Стійкість',
//       gender: 'Жіночий',
//       activeIngredients: 'Диметикон Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 230, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 245, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 250, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 260, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 240, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 235, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 225, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 220, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 285,
//     category: 'lipgloss',
//     name: 'Essence Shine Shine Shine',
//     price: 110,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Ефект вологих губ.',
//     specs: { volume: '5 мл', brand: 'Essence' },
//     rating: 4.2,
//     views: 130,
//     code: 'LIP004',
//     composition: 'Polybutene, Octyldodecanol, Ricinus Communis Seed Oil, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи або поверх помади для ефекту вологих губ.',
//     features: {
//       description: `
// Essence Shine Shine Shine — блиск для губ із ефектом вологих губ. Засіб додає губам глянцевого сяйва.

// **Як діє?**

// Касторова олія зволожує губи, а легка текстура забезпечує комфортне нанесення. Блиск створює ефект вологих губ без липкості.

// **Б’юті-поради**

// Наносьте поверх помади Essence для створення трендового вологого фінішу.
//       `.trim(),
//       brand: 'Essence',
//       country: 'Німеччина',
//       type: 'Блиск для губ',
//       class: 'Мас-маркет',
//       features: 'Ефект вологих губ',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Касторова олія Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 110, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 120, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 125, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 130, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 115, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 110, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 105, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 100, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 286,
//     category: 'lipgloss',
//     name: 'Dior Addict Lip Maximizer',
//     price: 750,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Об’єм та сяйво.',
//     specs: { volume: '6 мл', brand: 'Dior' },
//     rating: 4.8,
//     views: 310,
//     code: 'LIP005',
//     composition: 'Polybutene, Octyldodecanol, Sodium Hyaluronate, Menthol, Capsicum Frutescens Fruit Extract, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи або поверх помади для ефекту об’єму.',
//     features: {
//       description: `
// Dior Addict Lip Maximizer — культовий блиск для губ із ефектом об’єму та сяйва. Засіб підкреслює природну красу губ.

// **Як діє?**

// Гіалуронова кислота зволожує, а ментол і екстракт перцю створюють ефект об’єму за рахунок легкого поколювання. Формула забезпечує тривалий блиск.

// **Б’юті-поради**

// Наносьте поверх помади Dior для створення розкішного образу.
//       `.trim(),
//       brand: 'Dior',
//       country: 'Франція',
//       type: 'Блиск для губ',
//       class: 'Преміум',
//       features: 'Ефект об’єму Сяйво',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження Об’єм губ',
//       gender: 'Жіночий',
//       activeIngredients: 'Гіалуронова кислота Ментол Екстракт перцю Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 750, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 765, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 770, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 780, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 760, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 755, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 745, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 740, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 287,
//     category: 'lipgloss',
//     name: 'Clarins Lip Comfort Oil',
//     price: 560,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Живлення і блиск.',
//     specs: { volume: '7 мл', brand: 'Clarins' },
//     rating: 4.7,
//     views: 220,
//     code: 'LIP006',
//     composition: 'Polybutene, Simmondsia Chinensis Seed Oil, Rosa Canina Fruit Oil, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи для живлення або поверх помади для блиску.',
//     features: {
//       description: `
// Clarins Lip Comfort Oil — живильна олія для губ із глянцевим фінішем. Засіб зволожує та доглядає за губами.

// **Як діє?**

// Олія жожоба та шипшини живлять і зволожують губи, запобігаючи сухості. Легка текстура забезпечує комфорт і блиск без липкості.

// **Б’юті-поради**

// Використовуйте як самостійний засіб або поверх помади Clarins для додаткового сяйва.
//       `.trim(),
//       brand: 'Clarins',
//       country: 'Франція',
//       type: 'Олія для губ',
//       class: 'Преміум',
//       features: 'Живлення губ Блиск',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Живлення Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Олія жожоба Олія шипшини Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 560, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 575, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 580, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 590, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 570, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 565, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 555, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 550, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 288,
//     category: 'lipgloss',
//     name: 'Revlon Super Lustrous',
//     price: 210,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Класичний блиск.',
//     specs: { volume: '8.5 мл', brand: 'Revlon' },
//     rating: 4.4,
//     views: 175,
//     code: 'LIP007',
//     composition: 'Polybutene, Octyldodecanol, Butyrospermum Parkii Butter, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи або поверх помади для класичного блиску.',
//     features: {
//       description: `
// Revlon Super Lustrous — класичний блиск для губ із кремовою текстурою. Засіб додає губам сяйва та зволожує їх.

// **Як діє?**

// Масло ши зволожує губи, а формула забезпечує комфортне нанесення та природний блиск. Підходить для щоденного використання.

// **Б’юті-поради**

// Наносьте поверх помади Revlon для створення елегантного образу.
//       `.trim(),
//       brand: 'Revlon',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Мас-маркет',
//       features: 'Блиск губ',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Масло ши Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 210, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 225, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 230, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 240, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 220, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 215, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 205, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 200, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 289,
//     category: 'lipgloss',
//     name: 'Urban Decay Hi-Fi Shine',
//     price: 390,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'М’ятна свіжість.',
//     specs: { volume: '7 мл', brand: 'Urban Decay' },
//     rating: 4.6,
//     views: 198,
//     code: 'LIP008',
//     composition: 'Polybutene, Octyldodecanol, Menthol, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи для освіжаючого блиску.',
//     features: {
//       description: `
// Urban Decay Hi-Fi Shine — блиск для губ із м’ятним ароматом і освіжаючим ефектом. Засіб додає губам сяйва та об’єму.

// **Як діє?**

// Ментол створює відчуття свіжості, а формула забезпечує тривалий блиск і комфорт. Блиск зволожує губи без липкості.

// **Б’юті-поради**

// Використовуйте поверх помади Urban Decay для створення яскравого образу.
//       `.trim(),
//       brand: 'Urban Decay',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Мідл-маркет',
//       features: 'Освіжаючий ефект Блиск',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження Освіження',
//       gender: 'Жіночий',
//       activeIngredients: 'Ментол Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 390, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 405, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 410, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 420, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 400, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 395, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 385, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 380, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 290,
//     category: 'lipgloss',
//     name: 'Milani Ludicrous Lip Gloss',
//     price: 240,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Інтенсивний блиск.',
//     specs: { volume: '7 мл', brand: 'Milani' },
//     rating: 4.5,
//     views: 150,
//     code: 'LIP009',
//     composition: 'Polybutene, Octyldodecanol, Sodium Hyaluronate, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи або поверх помади для інтенсивного блиску.',
//     features: {
//       description: `
// Milani Ludicrous Lip Gloss — блиск для губ із насиченим глянцевим фінішем. Засіб додає губам блиску та зволожує їх.

// **Як діє?**

// Гіалуронова кислота зволожує губи, а формула забезпечує стійкий блиск без липкості. Підходить для створення яскравих образів.

// **Б’юті-поради**

// Наносьте поверх помади Milani для створення гламурного ефекту.
//       `.trim(),
//       brand: 'Milani',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Мас-маркет',
//       features: 'Інтенсивний блиск',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Гіалуронова кислота Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 240, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 255, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 260, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 270, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 250, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 245, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 235, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 230, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 291,
//     category: 'lipgloss',
//     name: 'Kiko 3D Hydra Lipgloss',
//     price: 260,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження та сяйво.',
//     specs: { volume: '6.5 мл', brand: 'Kiko' },
//     rating: 4.3,
//     views: 140,
//     code: 'LIP010',
//     composition: 'Polybutene, Octyldodecanol, Sodium Hyaluronate, Butyrospermum Parkii Butter, Parfum.',
//     usage: 'Нанесіть на чисті губи або поверх помади для ефекту сяйва.',
//     features: {
//       description: `
// Kiko 3D Hydra Lipgloss — блиск для губ із зволожуючим ефектом. Засіб додає губам об’єму та сяйва.

// **Як діє?**

// Гіалуронова кислота та масло ши зволожують губи, а формула створює 3D-ефект блиску. Легка текстура забезпечує комфорт.

// **Б’юті-поради**

// Наносьте поверх помади Kiko для створення об’ємного ефекту.
//       `.trim(),
//       brand: 'Kiko',
//       country: 'Італія',
//       type: 'Блиск для губ',
//       class: 'Мідл-маркет',
//       features: 'Зволоження Сяйво',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження Об’єм губ',
//       gender: 'Жіночий',
//       activeIngredients: 'Гіалуронова кислота Масло ши',
//     },
//     storePrices: [
//       { name: 'Eva', price: 260, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 275, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 280, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 290, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 270, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 265, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 255, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 250, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 292,
//     category: 'lipgloss',
//     name: 'MAC Lipglass',
//     price: 420,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Суперблиск.',
//     specs: { volume: '7 мл', brand: 'MAC' },
//     rating: 4.6,
//     views: 250,
//     code: 'LIP011',
//     composition: 'Polybutene, Octyldodecanol, Simmondsia Chinensis Seed Oil, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи або поверх помади для суперблиску.',
//     features: {
//       description: `
// MAC Lipglass — культовий блиск для губ із високим глянцем. Засіб створює ефект скляного блиску.

// **Як діє?**

// Олія жожоба зволожує губи, а формула забезпечує стійкий блиск і насичений фініш. Блиск ідеально підходить для вечірнього макіяжу.

// **Б’юті-поради**

// Наносьте поверх помади MAC для створення драматичного образу.
//       `.trim(),
//       brand: 'MAC',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Преміум',
//       features: 'Суперблиск',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Олія жожоба Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 420, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 435, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 440, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 450, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 430, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 425, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 415, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 410, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 293,
//     category: 'lipgloss',
//     name: 'Rimmel Oh My Gloss!',
//     price: 180,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Яскравий блиск.',
//     specs: { volume: '6.5 мл', brand: 'Rimmel' },
//     rating: 4.1,
//     views: 120,
//     code: 'LIP012',
//     composition: 'Polybutene, Octyldodecanol, Argania Spinosa Kernel Oil, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи або поверх помади для яскравого блиску.',
//     features: {
//       description: `
// Rimmel Oh My Gloss! — блиск для губ із яскравим глянцевим ефектом. Засіб додає губам сяйва та зволожує їх.

// **Як діє?**

// Олія аргани зволожує губи, а легка текстура забезпечує комфортне нанесення. Блиск створює насичений глянцевий фініш.

// **Б’юті-поради**

// Наносьте поверх помади Rimmel для створення яскравого образу.
//       `.trim(),
//       brand: 'Rimmel',
//       country: 'Велика Британія',
//       type: 'Блиск для губ',
//       class: 'Мас-маркет',
//       features: 'Яскравий блиск',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Олія аргани Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 180, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 195, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 200, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 210, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 190, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 185, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 175, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 170, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 294,
//     category: 'lipgloss',
//     name: 'Too Faced Lip Injection',
//     price: 580,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Плампінг-ефект.',
//     specs: { volume: '4 мл', brand: 'Too Faced' },
//     rating: 4.7,
//     views: 300,
//     code: 'LIP013',
//     composition: 'Polybutene, Octyldodecanol, Capsicum Frutescens Fruit Extract, Menthol, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи для ефекту об’єму.',
//     features: {
//       description: `
// Too Faced Lip Injection — блиск для губ із потужним плампінг-ефектом. Засіб збільшує об’єм губ і додає блиску.

// **Як діє?**

// Екстракт перцю та ментол стимулюють кровообіг, створюючи ефект повніших губ. Формула зволожує та забезпечує глянцевий фініш.

// **Б’юті-поради**

// Наносьте поверх помади Too Faced для створення драматичного образу.
//       `.trim(),
//       brand: 'Too Faced',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Преміум',
//       features: 'Плампінг-ефект',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Об’єм губ Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Екстракт перцю Ментол Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 580, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 595, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 600, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 610, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 590, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 585, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 575, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 570, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 295,
//     category: 'lipgloss',
//     name: 'Huda Beauty Silk Balm',
//     price: 620,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Ніжність шовку.',
//     specs: { volume: '5 мл', brand: 'Huda Beauty' },
//     rating: 4.5,
//     views: 180,
//     code: 'LIP014',
//     composition: 'Polybutene, Octyldodecanol, Sodium Hyaluronate, Butyrospermum Parkii Butter, Parfum.',
//     usage: 'Нанесіть на чисті губи для зволоження та блиску.',
//     features: {
//       description: `
// Huda Beauty Silk Balm — блиск для губ із шовковистою текстурою. Засіб зволожує губи та додає їм ніжного сяйва.

// **Як діє?**

// Гіалуронова кислота та масло ши зволожують і живлять губи, створюючи гладкий і глянцевий фініш. Формула комфортна для щоденного використання.

// **Б’юті-поради**

// Наносьте поверх помади Huda Beauty для створення розкішного образу.
//       `.trim(),
//       brand: 'Huda Beauty',
//       country: 'ОАЕ',
//       type: 'Блиск для губ',
//       class: 'Преміум',
//       features: 'Зволоження Сяйво',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження Живлення',
//       gender: 'Жіночий',
//       activeIngredients: 'Гіалуронова кислота Масло ши',
//     },
//     storePrices: [
//       { name: 'Eva', price: 620, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 635, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 640, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 650, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 630, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 625, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 615, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 610, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 296,
//     category: 'lipgloss',
//     name: 'Sephora Glossed Lip Gloss',
//     price: 250,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Глянцевий ефект.',
//     specs: { volume: '10 мл', brand: 'Sephora' },
//     rating: 4.2,
//     views: 160,
//     code: 'LIP015',
//     composition: 'Polybutene, Octyldodecanol, Ricinus Communis Seed Oil, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи або поверх помади для глянцевого ефекту.',
//     features: {
//       description: `
// Sephora Glossed Lip Gloss — блиск для губ із глянцевим фінішем. Засіб додає губам сяйва та зволожує їх.

// **Як діє?**

// Касторова олія зволожує губи, а формула створює насичений глянцевий ефект. Блиск комфортний для щоденного використання.

// **Б’юті-поради**

// Наносьте поверх помади Sephora для створення трендового образу.
//       `.trim(),
//       brand: 'Sephora',
//       country: 'Франція',
//       type: 'Блиск для губ',
//       class: 'Мідл-маркет',
//       features: 'Глянцевий ефект',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Касторова олія Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 250, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 265, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 270, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 280, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 260, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 255, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 245, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 240, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 297,
//     category: 'lipgloss',
//     name: 'Elf Lip Lacquer',
//     price: 130,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Бюджетний блиск.',
//     specs: { volume: '6 мл', brand: 'e.l.f.' },
//     rating: 4.0,
//     views: 90,
//     code: 'LIP016',
//     composition: 'Polybutene, Octyldodecanol, Ricinus Communis Seed Oil, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи для легкого блиску.',
//     features: {
//       description: `
// Elf Lip Lacquer — бюджетний блиск для губ із легким глянцевим фінішем. Засіб додає губам сяйва за доступною ціною.

// **Як діє?**

// Касторова олія зволожує губи, а формула забезпечує комфортне нанесення. Блиск ідеально підходить для щоденного макіяжу.

// **Б’юті-поради**

// Наносьте поверх помади Elf для створення ніжного образу.
//       `.trim(),
//       brand: 'e.l.f.',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Мас-маркет',
//       features: 'Легкий блиск',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Касторова олія Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 130, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 140, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 145, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 150, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 135, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 130, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 125, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 120, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 298,
//     category: 'lipgloss',
//     name: 'Buxom Full-On Plumping Lip Polish',
//     price: 480,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Об’єм та сяйво.',
//     specs: { volume: '4.5 мл', brand: 'Buxom' },
//     rating: 4.7,
//     views: 260,
//     code: 'LIP017',
//     composition: 'Polybutene, Octyldodecanol, Menthol, Capsicum Frutescens Fruit Extract, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи для ефекту об’єму та блиску.',
//     features: {
//       description: `
// Buxom Full-On Plumping Lip Polish — блиск для губ із ефектом об’єму. Засіб створює глянцевий фініш і повніші губи.

// **Як діє?**

// Ментол і екстракт перцю стимулюють кровообіг, надаючи губам об’єму. Формула зволожує та забезпечує тривалий блиск.

// **Б’юті-поради**

// Наносьте поверх помади Buxom для створення гламурного образу.
//       `.trim(),
//       brand: 'Buxom',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Преміум',
//       features: 'Об’єм губ Сяйво',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Об’єм губ Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Ментол Екстракт перцю Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 480, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 495, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 500, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 510, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 490, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 485, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 475, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 470, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 299,
//     category: 'lipgloss',
//     name: 'Victoria’s Secret Beauty Rush',
//     price: 290,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Солодкий аромат.',
//     specs: { volume: '13 мл', brand: 'Victoria’s Secret' },
//     rating: 4.4,
//     views: 210,
//     code: 'LIP018',
//     composition: 'Polybutene, Octyldodecanol, Butyrospermum Parkii Butter, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи для блиску із солодким ароматом.',
//     features: {
//       description: `
// Victoria’s Secret Beauty Rush — блиск для губ із солодким ароматом. Засіб додає губам глянцевого сяйва та зволожує їх.

// **Як діє?**

// Масло ши зволожує губи, а формула з приємним ароматом створює комфортний глянцевий фініш. Блиск ідеально підходить для щоденного використання.

// **Б’юті-поради**

// Наносьте поверх помади для створення ніжного образу з солодким ароматом.
//       `.trim(),
//       brand: 'Victoria’s Secret',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Мідл-маркет',
//       features: 'Солодкий аромат Блиск',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Масло ши Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 290, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 305, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 310, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 320, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 300, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 295, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 285, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 280, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 300,
//     category: 'lipgloss',
//     name: 'Tarte Maracuja Juicy Lip',
//     price: 530,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Живлення та колір.',
//     specs: { volume: '6 мл', brand: 'Tarte' },
//     rating: 4.6,
//     views: 190,
//     code: 'LIP019',
//     composition: 'Polybutene, Octyldodecanol, Passiflora Edulis Seed Oil, Sodium Hyaluronate, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи для живлення, кольору та блиску.',
//     features: {
//       description: `
// Tarte Maracuja Juicy Lip — блиск для губ із живильною дією та легким кольором. Засіб додає губам сяйва та зволожує їх.

// **Як діє?**

// Олія маракуї живить губи, а гіалуронова кислота зволожує, створюючи соковитий ефект. Формула забезпечує блиск і легкий відтінок.

// **Б’юті-поради**

// Використовуйте як самостійний засіб або поверх помади Tarte для створення яскравого образу.
//       `.trim(),
//       brand: 'Tarte',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Преміум',
//       features: 'Живлення Колір Блиск',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження Живлення',
//       gender: 'Жіночий',
//       activeIngredients: 'Олія маракуї Гіалуронова кислота Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 530, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 545, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 550, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 560, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 540, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 535, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 525, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 520, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 301,
//     category: 'lipgloss',
//     name: 'Anastasia Beverly Hills Lip Gloss',
//     price: 460,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Професійний блиск.',
//     specs: { volume: '4.5 мл', brand: 'ABH' },
//     rating: 4.5,
//     views: 230,
//     code: 'LIP020',
//     composition: 'Polybutene, Octyldodecanol, Sodium Hyaluronate, Butyrospermum Parkii Butter, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи або поверх помади для професійного блиску.',
//     features: {
//       description: `
// Anastasia Beverly Hills Lip Gloss — професійний блиск для губ із глянцевим фінішем. Засіб додає губам сяйва та зволожує їх.

// **Як діє?**

// Гіалуронова кислота та масло ши зволожують губи, створюючи гладкий і блискучий ефект. Формула комфортна для щоденного використання.

// **Б’юті-поради**

// Наносьте поверх помади ABH для створення вишуканого образу.
//       `.trim(),
//       brand: 'Anastasia Beverly Hills',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Преміум',
//       features: 'Професійний блиск Зволоження',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Гіалуронова кислота Масло ши Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 460, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 475, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 480, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 490, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 470, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 465, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 455, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 450, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 302,
//     category: 'lipgloss',
//     name: 'ColourPop So Juicy Gloss',
//     price: 210,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Сяйво + об’єм.',
//     specs: { volume: '10 мл', brand: 'ColourPop' },
//     rating: 4.3,
//     views: 145,
//     code: 'LIP021',
//     composition: 'Polybutene, Octyldodecanol, Sodium Hyaluronate, Menthol, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи для сяйва та ефекту об’єму.',
//     features: {
//       description: `
// ColourPop So Juicy Gloss — блиск для губ із ефектом об’єму та сяйва. Засіб додає губам глянцевого фінішу.

// **Як діє?**

// Гіалуронова кислота зволожує, а ментол створює легкий ефект об’єму. Формула забезпечує комфортне нанесення та яскравий блиск.

// **Б’юті-поради**

// Наносьте поверх помади ColourPop для створення соковитого образу.
//       `.trim(),
//       brand: 'ColourPop',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Мас-маркет',
//       features: 'Сяйво Об’єм',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження Об’єм губ',
//       gender: 'Жіночий',
//       activeIngredients: 'Гіалуронова кислота Ментол Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 210, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 225, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 230, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 240, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 220, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 215, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 205, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 200, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 303,
//     category: 'lipgloss',
//     name: 'Pat McGrath Labs Lust Gloss',
//     price: 680,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Розкішний блиск.',
//     specs: { volume: '4.5 мл', brand: 'Pat McGrath' },
//     rating: 4.8,
//     views: 270,
//     code: 'LIP022',
//     composition: 'Polybutene, Octyldodecanol, Simmondsia Chinensis Seed Oil, Sodium Hyaluronate, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи або поверх помади для розкішного блиску.',
//     features: {
//       description: `
// Pat McGrath Labs Lust Gloss — розкішний блиск для губ із глянцевим фінішем. Засіб створює ефектний образ і зволожує губи.

// **Як діє?**

// Олія жожоба та гіалуронова кислота зволожують губи, а формула забезпечує насичений блиск. Ідеально для вечірнього макіяжу.

// **Б’юті-поради**

// Наносьте поверх помади Pat McGrath для створення гламурного образу.
//       `.trim(),
//       brand: 'Pat McGrath',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Преміум',
//       features: 'Розкішний блиск Зволоження',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Олія жожоба Гіалуронова кислота Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 680, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 695, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 700, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 710, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 690, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 685, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 675, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 670, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 304,
//     category: 'lipgloss',
//     name: 'Bobbi Brown Crushed Oil-Infused Gloss',
//     price: 590,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Зволоження і блиск.',
//     specs: { volume: '6 мл', brand: 'Bobbi Brown' },
//     rating: 4.7,
//     views: 225,
//     code: 'LIP023',
//     composition: 'Polybutene, Octyldodecanol, Persea Gratissima Oil, Sodium Hyaluronate, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи для зволоження та блиску.',
//     features: {
//       description: `
// Bobbi Brown Crushed Oil-Infused Gloss — блиск для губ із живильними оліями. Засіб додає губам сяйва та зволожує їх.

// **Як діє?**

// Олія авокадо та гіалуронова кислота живлять і зволожують губи, створюючи комфортний глянцевий фініш. Формула не липка.

// **Б’юті-поради**

// Наносьте поверх помади Bobbi Brown для створення природного образу.
//       `.trim(),
//       brand: 'Bobbi Brown',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Преміум',
//       features: 'Зволоження Блиск',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження Живлення',
//       gender: 'Жіночий',
//       activeIngredients: 'Олія авокадо Гіалуронова кислота Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 590, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 605, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 610, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 620, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 600, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 595, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 585, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 580, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 305,
//     category: 'lipgloss',
//     name: 'Charlotte Tilbury Collagen Lip Bath',
//     price: 720,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Для об’єму.',
//     specs: { volume: '7 мл', brand: 'Charlotte Tilbury' },
//     rating: 4.6,
//     views: 285,
//     code: 'LIP024',
//     composition: 'Polybutene, Octyldodecanol, Hydrolyzed Collagen, Menthol, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи для ефекту об’єму та блиску.',
//     features: {
//       description: `
// Charlotte Tilbury Collagen Lip Bath — блиск для губ із ефектом об’єму. Засіб робить губи повнішими та додає сяйва.

// **Як діє?**

// Гідролізований колаген і ментол створюють ефект об’єму, а формула зволожує губи, надаючи їм глянцевого фінішу.

// **Б’юті-поради**

// Наносьте поверх помади Charlotte Tilbury для створення розкішного образу.
//       `.trim(),
//       brand: 'Charlotte Tilbury',
//       country: 'Велика Британія',
//       type: 'Блиск для губ',
//       class: 'Преміум',
//       features: 'Об’єм губ Блиск',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження Об’єм губ',
//       gender: 'Жіночий',
//       activeIngredients: 'Гідролізований колаген Ментол Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 720, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 735, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 740, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 750, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 730, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 725, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 715, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 710, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 306,
//     category: 'lipgloss',
//     name: 'Glossier Lip Gloss',
//     price: 390,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Кристальна прозорість.',
//     specs: { volume: '4.2 мл', brand: 'Glossier' },
//     rating: 4.4,
//     views: 210,
//     code: 'LIP025',
//     composition: 'Polybutene, Octyldodecanol, Sodium Hyaluronate, Butyrospermum Parkii Butter, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи для прозорого блиску.',
//     features: {
//       description: `
// Glossier Lip Gloss — блиск для губ із кристально прозорим фінішем. Засіб додає губам сяйва та зволожує їх.

// **Як діє?**

// Гіалуронова кислота та масло ши зволожують губи, створюючи природний глянцевий ефект. Формула легка та не липка.

// **Б’юті-поради**

// Наносьте поверх помади Glossier для створення ніжного образу.
//       `.trim(),
//       brand: 'Glossier',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Мідл-маркет',
//       features: 'Прозорий блиск Зволоження',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Гіалуронова кислота Масло ши Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 390, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 405, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 410, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 420, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 400, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 395, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 385, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 380, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 307,
//     category: 'lipgloss',
//     name: 'Flower Beauty Glossy Balm',
//     price: 230,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Блиск + бальзам.',
//     specs: { volume: '7 мл', brand: 'Flower Beauty' },
//     rating: 4.3,
//     views: 160,
//     code: 'LIP026',
//     composition: 'Polybutene, Octyldodecanol, Butyrospermum Parkii Butter, Ricinus Communis Seed Oil, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи для зволоження та легкого блиску.',
//     features: {
//       description: `
// Flower Beauty Glossy Balm — гібрид блиску та бальзаму для губ. Засіб зволожує губи та додає їм легкого сяйва.

// **Як діє?**

// Масло ши та касторова олія живлять і зволожують губи, створюючи комфортний глянцевий фініш. Формула ідеальна для щоденного догляду.

// **Б’юті-поради**

// Використовуйте як самостійний засіб або поверх помади Flower Beauty.
//       `.trim(),
//       brand: 'Flower Beauty',
//       country: 'США',
//       type: 'Блиск-бальзам для губ',
//       class: 'Мас-маркет',
//       features: 'Зволоження Легкий блиск',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження Живлення',
//       gender: 'Жіночий',
//       activeIngredients: 'Масло ши Касторова олія Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 230, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 245, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 250, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 260, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 240, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 235, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 225, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 220, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 308,
//     category: 'lipgloss',
//     name: 'Juvia’s Place Glass Gloss',
//     price: 270,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Скляний фініш.',
//     specs: { volume: '5 мл', brand: 'Juvia’s Place' },
//     rating: 4.4,
//     views: 170,
//     code: 'LIP027',
//     composition: 'Polybutene, Octyldodecanol, Sodium Hyaluronate, Simmondsia Chinensis Seed Oil, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи для ефекту скляного блиску.',
//     features: {
//       description: `
// Juvia’s Place Glass Gloss — блиск для губ із ефектом скляного фінішу. Засіб додає губам сяйва та зволожує їх.

// **Як діє?**

// Гіалуронова кислота та олія жожоба зволожують губи, створюючи насичений глянцевий ефект. Формула комфортна та не липка.

// **Б’юті-поради**

// Наносьте поверх помади Juvia’s Place для створення яскравого образу.
//       `.trim(),
//       brand: 'Juvia’s Place',
//       country: 'США',
//       type: 'Блиск для губ',
//       class: 'Мідл-маркет',
//       features: 'Скляний фініш Зволоження',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Гіалуронова кислота Олія жожоба Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 270, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 285, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 290, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 300, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 280, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 275, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 265, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 260, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 309,
//     category: 'lipgloss',
//     name: 'Pupa Miss Pupa Gloss',
//     price: 310,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Мерехтіння і блиск.',
//     specs: { volume: '5 мл', brand: 'Pupa' },
//     rating: 4.5,
//     views: 190,
//     code: 'LIP028',
//     composition: 'Polybutene, Octyldodecanol, Sodium Hyaluronate, Butyrospermum Parkii Butter, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи для мерехтливого блиску.',
//     features: {
//       description: `
// Pupa Miss Pupa Gloss — блиск для губ із мерехтливим ефектом. Засіб додає губам сяйва та зволожує їх.

// **Як діє?**

// Гіалуронова кислота та масло ши зволожують губи, а формула створює ефект мерехтіння. Блиск ідеально підходить для вечірнього макіяжу.

// **Б’юті-поради**

// Наносьте поверх помади Pupa для створення ефектного образу.
//       `.trim(),
//       brand: 'Pupa',
//       country: 'Італія',
//       type: 'Блиск для губ',
//       class: 'Мідл-маркет',
//       features: 'Мерехтіння Блиск',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження',
//       gender: 'Жіночий',
//       activeIngredients: 'Гіалуронова кислота Масло ши Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 310, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 325, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 330, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 340, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 320, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 315, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 305, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 300, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },
//   {
//     id: 310,
//     category: 'lipgloss',
//     name: 'Catrice Volumizing Lip Booster',
//     price: 180,
//     image: soapsImg,
//     images: [product1_1, product1_2, product1_3, product1_4, product1_5, product1_6, product1_7],
//     description: 'Ментоловий ефект.',
//     specs: { volume: '5 мл', brand: 'Catrice' },
//     rating: 4.2,
//     views: 140,
//     code: 'LIP029',
//     composition: 'Polybutene, Octyldodecanol, Menthol, Sodium Hyaluronate, Tocopherol, Parfum.',
//     usage: 'Нанесіть на чисті губи для ефекту об’єму та блиску.',
//     features: {
//       description: `
// Catrice Volumizing Lip Booster — блиск для губ із ментоловим ефектом для об’єму. Засіб додає губам сяйва та зволожує їх.

// **Як діє?**

// Ментол створює легке поколювання, що візуально збільшує губи, а гіалуронова кислота зволожує. Формула забезпечує глянцевий фініш.

// **Б’юті-поради**

// Наносьте поверх помади Catrice для створення об’ємного образу.
//       `.trim(),
//       brand: 'Catrice',
//       country: 'Німеччина',
//       type: 'Блиск для губ',
//       class: 'Мас-маркет',
//       features: 'Ментоловий ефект Об’єм',
//       category: 'Декоративна косметика',
//       purpose: 'Блиск Зволоження Об’єм губ',
//       gender: 'Жіночий',
//       activeIngredients: 'Ментол Гіалуронова кислота Токоферол',
//     },
//     storePrices: [
//       { name: 'Eva', price: 180, logo: evaLogo, yearsWithUs: 15, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Prostor', price: 195, logo: prostorLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Watsons', price: 200, logo: watsonsLogo, yearsWithUs: 10, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Rozetka', price: 210, logo: rozetkaLogo, yearsWithUs: 11, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Makeup', price: 190, logo: makeupLogo, yearsWithUs: 12, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Parfums', price: 185, logo: parfumsLogo, yearsWithUs: 7, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Auchan', price: 175, logo: auchanLogo, yearsWithUs: 14, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//       { name: 'Silpo', price: 170, logo: silpoLogo, yearsWithUs: 16, delivery: 'по Києву', link: 'https://eva.ua/ua/pr1354183/' },
//     ],
//   },



// ];

// export default products;