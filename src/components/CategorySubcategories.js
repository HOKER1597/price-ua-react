import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './CategorySubcategories.css';

// Дані підкатегорій з очищеними назвами
export const subcategoriesData = {
  makeup: [
    {
      category: 'Обличчя',
      categoryId: 'face-makeup',
      items: [
        { id: 'foundation', name: 'Тональні основи' },
        { id: 'concealer', name: 'Консилери' },
        { id: 'powder', name: 'Пудри' },
        { id: 'blush', name: 'Рум’яна' },
        { id: 'highlighter', name: 'Хайлайтери' },
        { id: 'bronzer', name: 'Бронзери' },
        { id: 'primer', name: 'Бази/праймери' },
      ],
    },
    {
      category: 'Очі',
      categoryId: 'eyes',
      items: [
        { id: 'eyeshadow', name: 'Тіні для повік' },
        { id: 'eyeliner', name: 'Підводки' },
        { id: 'eye-pencil', name: 'Олівці для очей' },
        { id: 'mascara', name: 'Туші' },
        { id: 'eyeshadow-base', name: 'Бази під тіні' },
        { id: 'brow-products', name: 'Засоби для брів' },
      ],
    },
    {
      category: 'Губи',
      categoryId: 'lips',
      items: [
        { id: 'lipstick', name: 'Помади' },
        { id: 'lipgloss', name: 'Блиски' },
        { id: 'lipliner', name: 'Олівці' },
        { id: 'lip-balm', name: 'Бальзами' },
        { id: 'lip-tint', name: 'Тінти' },
      ],
    },
    {
      category: 'Інструменти',
      categoryId: 'makeup-tools',
      items: [
        { id: 'brushes', name: 'Пензлі' },
        { id: 'sponges', name: 'Спонжі' },
        { id: 'brow-brushes', name: 'Щіточки для брів' },
        { id: 'applicators', name: 'Аплікатори' },
        { id: 'mirrors', name: 'Дзеркала' },
        { id: 'organizers', name: 'Органайзери' },
        { id: 'lip-brushes', name: 'Кисті для губ' },
        { id: 'makeup-accessories', name: 'Аксесуари для нанесення макіяжу' },
      ],
    },
  ],
  skincare: [
    {
      category: 'Очищення',
      categoryId: 'cleansing',
      items: [
        { id: 'cleansing-gel', name: 'Гелі' },
        { id: 'cleansing-foam', name: 'Пінки' },
        { id: 'micellar-water', name: 'Міцелярна вода' },
        { id: 'cleansing-cream', name: 'Креми для вмивання' },
        { id: 'hydrophilic-oil', name: 'Гідрофільні олії' },
        { id: 'peeling-pads', name: 'Пілінг-пади' },
      ],
    },
    {
      category: 'Тонізація',
      categoryId: 'toning',
      items: [
        { id: 'toner', name: 'Тоніки' },
        { id: 'essence', name: 'Есенції' },
        { id: 'hydrolate', name: 'Гідролати' },
        { id: 'mist', name: 'Місти' },
      ],
    },
    {
      category: 'Сироватки та активи',
      categoryId: 'serums',
      items: [
        { id: 'vitamin-c-serum', name: 'З вітаміном С' },
        { id: 'niacinamide-serum', name: 'Ніацинамід' },
        { id: 'hyaluronic-acid-serum', name: 'Гіалуронова кислота' },
        { id: 'peptide-serum', name: 'Пептиди' },
        { id: 'retinol-serum', name: 'Ретинол' },
        { id: 'aha-bha-serum', name: 'AHA/BHA кислоти' },
      ],
    },
    {
      category: 'Зволоження',
      categoryId: 'moisturizing',
      items: [
        { id: 'moisturizer', name: 'Креми' },
        { id: 'fluid', name: 'Флюїди' },
        { id: 'gel', name: 'Гелі' },
        { id: 'milk', name: 'Молочко' },
      ],
    },
    {
      category: 'Живлення',
      categoryId: 'nourishing',
      items: [
        { id: 'masks', name: 'Маски' },
        { id: 'face-oils', name: 'Олії для обличчя' },
        { id: 'balms', name: 'Бальзами' },
        { id: 'eye-care', name: 'Зона навколо очей' },
        { id: 'spf', name: 'Захист SPF' },
        { id: 'anti-pollution', name: 'Антиполюшн' },
      ],
    },
    {
      category: 'Лікування',
      categoryId: 'treatment',
      items: [
        { id: 'acne-treatment', name: 'Проти акне' },
        { id: 'anti-aging', name: 'Антивіковий догляд' },
        { id: 'soothing', name: 'Заспокійливі засоби' },
        { id: 'whitening', name: 'Відбілювання' },
        { id: 'cc-bb-cream', name: 'СС/ВВ креми' },
      ],
    },
    {
      category: 'Губи',
      categoryId: 'lip-care',
      items: [
        { id: 'lip-scrub', name: 'Скраби' },
        { id: 'lip-balm', name: 'Бальзами' },
        { id: 'lip-mask', name: 'Маски' },
      ],
    },
    {
      category: 'Тіло',
      categoryId: 'body-care',
      items: [
        { id: 'shower-gel', name: 'Гелі для душу' },
        { id: 'body-scrub', name: 'Скраби' },
        { id: 'body-lotion', name: 'Лосьйони' },
        { id: 'body-oil', name: 'Олії' },
        { id: 'body-butter', name: 'Батери' },
        { id: 'deodorant', name: 'Дезодоранти' },
        { id: 'post-epilation', name: 'Засоби після епіляції' },
        { id: 'anti-cellulite', name: 'Антицелюлітні креми' },
        { id: 'firming-cream', name: 'Креми з ефектом підтягнення' },
        { id: 'body-spf', name: 'SPF для тіла' },
      ],
    },
    {
      category: 'Руки та ноги',
      categoryId: 'hands-feet',
      items: [
        { id: 'hand-cream', name: 'Креми' },
        { id: 'hand-foot-mask', name: 'Маски' },
        { id: 'cuticle-care', name: 'Засоби для кутикули' },
        { id: 'glass-nail-file', name: 'Скляні пилочки' },
        { id: 'cracked-heel-cream', name: 'Креми від тріщин' },
        { id: 'anti-sweat', name: 'Антипітливість' },
      ],
    },
  ],
  haircare: [
    {
      category: 'Очищення',
      categoryId: 'hair-cleansing',
      items: [
        { id: 'shampoos', name: 'Шампуні' },
        { id: 'scalp-scrub', name: 'Скраби для шкіри голови' },
        { id: 'scalp-peeling', name: 'Пілінги' },
      ],
    },
    {
      category: 'Кондиціонування',
      categoryId: 'conditioning',
      items: [
        { id: 'conditioner', name: 'Кондиціонери' },
        { id: 'balm', name: 'Бальзами' },
      ],
    },
    {
      category: 'Інтенсивний догляд',
      categoryId: 'intensive-care',
      items: [
        { id: 'hair-mask', name: 'Маски' },
        { id: 'ampoules', name: 'Ампули' },
      ],
    },
    {
      category: 'Сироватки та олії',
      categoryId: 'hair-serums-oils',
      items: [
        { id: 'serum', name: 'Сироватки' },
        { id: 'oil', name: 'Олії' },
      ],
    },
    {
      category: 'Стайлінг',
      categoryId: 'styling',
      items: [
        { id: 'hair-spray', name: 'Лаки' },
        { id: 'mousse', name: 'Муси' },
        { id: 'gel', name: 'Гелі' },
        { id: 'foam', name: 'Піни' },
        { id: 'powder', name: 'Пудри' },
        { id: 'fixing-spray', name: 'Спреї-фіксатори' },
      ],
    },
    {
      category: 'Термозахист',
      categoryId: 'heat-protection',
      items: [
        { id: 'heat-spray', name: 'Спреї' },
        { id: 'heat-cream', name: 'Креми' },
        { id: 'heat-milk', name: 'Молочко' },
      ],
    },
    {
      category: 'Фарбування',
      categoryId: 'hair-coloring',
      items: [
        { id: 'hair-dye', name: 'Фарби' },
        { id: 'toner', name: 'Тоніки' },
        { id: 'lightener', name: 'Освітлювачі' },
        { id: 'post-color-care', name: 'Засоби після фарбування' },
      ],
    },
    {
      category: 'Обʼєм і укладання',
      categoryId: 'volume-styling',
      items: [
        { id: 'root-volume', name: 'Засоби для прикореневого обʼєму' },
        { id: 'texturizing-spray', name: 'Текстуруючі спреї' },
        { id: 'dry-shampoo', name: 'Сухі шампуні' },
      ],
    },
    {
      category: 'Інструменти',
      categoryId: 'hair-tools',
      items: [
        { id: 'comprzed-brushes', name: 'Гребінці та щітки' },
        { id: 'hair-dryers-stylers', name: 'Фени, плойки, випрямлячі, стайлери' },
      ],
    },
    {
      category: 'Проблемне волосся',
      categoryId: 'problem-hair',
      items: [
        { id: 'hair-loss', name: 'Випадіння' },
        { id: 'psoriasis', name: 'Псоріаз' },
        { id: 'sensitive-scalp', name: 'Чутлива шкіра голови' },
        { id: 'brittle-hair', name: 'Ламкість, посічені кінчики' },
      ],
    },
  ],
  'men-care': [
    {
      category: 'Для гоління',
      categoryId: 'shaving',
      items: [
        { id: 'shaving-foam', name: 'Піна, Гель, Креми' },
        { id: 'aftershave', name: 'Після гоління' },
        { id: 'beard-care', name: 'Догляд за бородою' },
      ],
    },
    {
      category: 'Догляд за шкірою',
      categoryId: 'men-skincare',
      items: [
        { id: 'men-cleansing', name: 'Очищення' },
        { id: 'men-cream', name: 'Креми' },
        { id: 'men-serum', name: 'Сироватки' },
      ],
    },
    {
      category: 'Догляд за тілом',
      categoryId: 'men-body-care',
      items: [
        { id: 'men-deodorant', name: 'Дезодоранти' },
        { id: 'men-shower-gel', name: 'Гелі' },
        { id: 'men-lotion', name: 'Лосьйони' },
      ],
    },
    {
      category: 'Волосся',
      categoryId: 'men-hair',
      items: [
        { id: 'men-styling', name: 'Стайлінг' },
        { id: 'men-shampoo', name: 'Шампуні' },
        { id: 'men-hair-serum', name: 'Сироватки' },
      ],
    },
  ],
  'child-care': [
    {
      category: 'Очищення',
      categoryId: 'child-cleansing',
      items: [
        { id: 'child-shampoo', name: 'Дитячі шампуні' },
        { id: 'child-shower-gel', name: 'Гелі для душу' },
        { id: 'child-soap', name: 'Мило' },
        { id: 'child-wipes', name: 'Вологі серветки' },
      ],
    },
    {
      category: 'Догляд за тілом',
      categoryId: 'child-body-care',
      items: [
        { id: 'child-cream', name: 'Креми' },
        { id: 'child-lotion', name: 'Лосьйони та молочко' },
        { id: 'child-oil', name: 'Олії' },
        { id: 'child-powder', name: 'Пудра для тіла' },
        { id: 'diaper-rash-cream', name: 'Засоби від попрілостей' },
      ],
    },
    {
      category: 'Сонцезахист',
      categoryId: 'child-sun-protection',
      items: [
        { id: 'child-spf-cream', name: 'Сонцезахисні креми SPF' },
        { id: 'child-after-sun', name: 'Післясонячний догляд' },
      ],
    },
    {
      category: 'Волосся',
      categoryId: 'child-hair',
      items: [
        { id: 'child-shampoo', name: 'Шампуні' },
        { id: 'child-detangling-spray', name: 'Спреї для легкого розчісування' },
      ],
    },
    {
      category: 'Підгузки та догляд за зоною підгузка',
      categoryId: 'diaper-care',
      items: [
        { id: 'diapers', name: 'Підгузки' },
        { id: 'diaper-cream', name: 'Креми під підгузок' },
        { id: 'diaper-balm', name: 'Захисні бальзами' },
      ],
    },
    {
      category: 'Догляд за ротовою порожниною',
      categoryId: 'child-oral-care',
      items: [
        { id: 'child-toothpaste', name: 'Дитячі зубні пасти' },
        { id: 'child-toothbrush', name: 'Зубні щітки' },
        { id: 'teething-gel', name: 'Гелі для ясен при прорізуванні' },
      ],
    },
    {
      category: 'Для купання',
      categoryId: 'child-bathing',
      items: [
        { id: 'bath-foam', name: 'Піна для ванни' },
        { id: 'child-sponge', name: 'Дитячі мочалки' },
        { id: 'bath-thermometer', name: 'Термометри для води' },
      ],
    },
    {
      category: 'Аксесуари',
      categoryId: 'child-accessories',
      items: [
        { id: 'child-combs', name: 'Гребінці та щітки для волосся' },
        { id: 'child-manicure-set', name: 'Манікюрні набори для дітей' },
        { id: 'child-scissors', name: 'Ножиці з круглими кінчиками' },
      ],
    },
  ],
  'natural-cosmetics': [
    {
      category: 'Догляд за обличчям',
      categoryId: 'natural-face-care',
      items: [
        { id: 'natural-cream', name: 'Креми' },
        { id: 'natural-cleansing', name: 'Очищення' },
        { id: 'natural-mask', name: 'Маски' },
        { id: 'natural-toner', name: 'Тоніки' },
        { id: 'natural-serum', name: 'Сироватки' },
      ],
    },
    {
      category: 'Догляд за тілом',
      categoryId: 'natural-body-care',
      items: [
        { id: 'natural-scrub', name: 'Скраби' },
        { id: 'natural-body-oil', name: 'Олії для тіла' },
        { id: 'natural-deodorant', name: 'Дезодоранти' },
        { id: 'natural-cream-lotion', name: 'Креми й лосьйони' },
        { id: 'natural-soap', name: 'Мило ручної роботи' },
      ],
    },
    {
      category: 'Догляд за волоссям',
      categoryId: 'natural-hair-care',
      items: [
        { id: 'natural-shampoo', name: 'Шампуні' },
        { id: 'natural-mask-balm', name: 'Маски та бальзами' },
        { id: 'natural-hair-oil', name: 'Олії для зміцнення волосся' },
        { id: 'natural-hydrolate', name: 'Гідролати для шкіри голови' },
      ],
    },
    {
      category: 'Декоративна косметика',
      categoryId: 'natural-makeup',
      items: [
        { id: 'mineral-makeup', name: 'Мінеральна косметика' },
        { id: 'natural-lipstick', name: 'Помади' },
        { id: 'natural-foundation', name: 'Тональні основи' },
        { id: 'natural-mascara', name: 'Туш для вій' },
      ],
    },
    {
      category: 'Догляд за губами',
      categoryId: 'natural-lip-care',
      items: [
        { id: 'natural-lip-balm', name: 'Бальзами' },
        { id: 'natural-lip-scrub', name: 'Скраби для губ' },
      ],
    },
    {
      category: 'Для дітей',
      categoryId: 'natural-child-care',
      items: [
        { id: 'hypoallergenic-cream', name: 'Гіпоалергенні креми' },
        { id: 'organic-shampoo-gel', name: 'Органічні шампуні та гелі' },
      ],
    },
    {
      category: 'Для чоловіків',
      categoryId: 'natural-men-care',
      items: [
        { id: 'natural-aftershave', name: 'Засоби після гоління' },
        { id: 'natural-men-cream-gel', name: 'Креми й гелі для обличчя' },
      ],
    },
    {
      category: 'Ароматерапія',
      categoryId: 'aromatherapy',
      items: [
        { id: 'essential-oils', name: 'Ефірні олії' },
        { id: 'aroma-rollers', name: 'Аромаролики' },
        { id: 'natural-spray', name: 'Спреї для обличчя та тіла' },
      ],
    },
    {
      category: 'Сертифікація та бренди',
      categoryId: 'certification-brands',
      items: [
        { id: 'certifications', name: 'ECOCERT, COSMOS, USDA Organic' },
        { id: 'ukrainian-brands', name: 'Українські виробники' },
      ],
    },
  ],
  perfumery: [
    {
      category: 'Жіноча парфумерія',
      categoryId: 'women-perfume',
      items: [
        { id: 'women-eau-de-parfum', name: 'Парфумована вода' },
        { id: 'women-eau-de-toilette', name: 'Туалетна вода' },
        { id: 'women-perfume', name: 'Парфуми' },
        { id: 'women-deodorant-spray', name: 'Дезодоранти-спреї' },
        { id: 'women-perfume-set', name: 'Набори парфумів' },
        { id: 'women-travel-size', name: 'Мініверсії/тревел-формат' },
      ],
    },
    {
      category: 'Чоловіча парфумерія',
      categoryId: 'men-perfume',
      items: [
        { id: 'men-eau-de-toilette', name: 'Туалетна вода' },
        { id: 'men-eau-de-parfum', name: 'Парфумована вода' },
        { id: 'men-cologne', name: 'Одеколони' },
        { id: 'men-deodorant-spray', name: 'Дезодоранти' },
        { id: 'men-perfume-set', name: 'Набори парфумів' },
        { id: 'men-travel-size', name: 'Мініверсії/тревел-формат' },
      ],
    },
    {
      category: 'Унісекс парфумерія',
      categoryId: 'unisex-perfume',
      items: [
        { id: 'unisex-eau-de-parfum', name: 'Парфумована вода' },
        { id: 'unisex-niche', name: 'Нішеві аромати' },
        { id: 'unisex-perfume', name: 'Парфуми' },
        { id: 'unisex-oil-perfume', name: 'Масляні аромати' },
      ],
    },
    {
      category: 'Нішеві аромати',
      categoryId: 'niche-perfumes',
      items: [
        { id: 'niche-brands', name: 'Авторські бренди' },
        { id: 'limited-editions', name: 'Лімітовані випуски' },
        { id: 'exclusive-compositions', name: 'Ексклюзивні композиції' },
      ],
    },
    {
      category: 'Домашня парфумерія',
      categoryId: 'home-fragrance',
      items: [
        { id: 'diffusers', name: 'Ароматизатори для дому' },
        { id: 'linen-spray', name: 'Спреї для білизни та приміщень' },
      ],
    },
    {
      category: 'Дитяча парфумерія',
      categoryId: 'child-perfume',
      items: [
        { id: 'child-light-perfume', name: 'Легкі парфумовані води' },
        { id: 'child-hypoallergenic', name: 'Гіпоалергенні композиції' },
      ],
    },
    {
      category: 'Аксесуари до парфумерії',
      categoryId: 'perfume-accessories',
      items: [
        { id: 'perfume-rollers', name: 'Ролики, флакони-розпилювачі' },
        { id: 'perfume-cases', name: 'Футляри для мініверсій' },
      ],
    },
  ],
  accessories: [
    {
      category: 'Аксесуари для макіяжу',
      categoryId: 'makeup-accessories',
      items: [
        { id: 'makeup-brushes', name: 'Пензлі' },
        { id: 'sponges-blenders', name: 'Спонжі та блендери' },
        { id: 'shadow-applicators', name: 'Аплікатори для тіней' },
        { id: 'brow-lash-brushes', name: 'Щіточки для брів і вій' },
        { id: 'brush-organizers', name: 'Органайзери для пензлів' },
      ],
    },
    {
      category: 'Аксесуари для манікюру і педикюру',
      categoryId: 'manicure-pedicure',
      items: [
        { id: 'nail-files', name: 'Пилочки для нігтів' },
        { id: 'cuticle-tools', name: 'Кусачки, ножиці' },
        { id: 'nail-stencils', name: 'Шаблони та трафарети' },
        { id: 'manicure-sets', name: 'Набори для манікюру' },
        { id: 'gel-polish-lamps', name: 'Лампи для гель-лаку' },
      ],
    },
    {
      category: 'Аксесуари для волосся',
      categoryId: 'hair-accessories',
      items: [
        { id: 'combs-brushes', name: 'Гребінці та щітки' },
        { id: 'hair-clips', name: 'Заколки, шпильки, резинки' },
        { id: 'headbands', name: 'Обідки, стрічки, банти' },
        { id: 'heat-gloves', name: 'Термозахисні рукавички' },
        { id: 'scalp-massagers', name: 'Масажери для голови' },
      ],
    },
    {
      category: 'Інструменти для догляду',
      categoryId: 'care-tools',
      items: [
        { id: 'gua-sha', name: 'Ролери та скребки гуаша' },
        { id: 'cleansing-brushes', name: 'Щітки для очищення обличчя' },
        { id: 'mask-applicators', name: 'Аплікатори для масок' },
        { id: 'razors-trimmers', name: 'Бритви, тримери' },
        { id: 'tweezers', name: 'Пінцети' },
      ],
    },
    {
      category: 'Гігієнічні аксесуари',
      categoryId: 'hygiene-accessories',
      items: [
        { id: 'cosmetic-mirrors', name: 'Дзеркала косметичні' },
        { id: 'storage-containers', name: 'Контейнери для зберігання' },
        { id: 'face-towels', name: 'Серветки та рушнички для обличчя' },
        { id: 'powder-puffs', name: 'Пуховки для пудри' },
        { id: 'disposable-applicators', name: 'Одноразові аплікатори' },
      ],
    },
    {
      category: 'Дорожні аксесуари',
      categoryId: 'travel-accessories',
      items: [
        { id: 'cosmetic-bags', name: 'Косметички' },
        { id: 'travel-containers', name: 'Дорожні набори ємностей' },
        { id: 'travel-organizers', name: 'Органайзери для подорожей' },
        { id: 'mini-cosmetic-cases', name: 'Футляри для мінікосметики' },
      ],
    },
  ],
  'gift-sets': [
    {
      category: 'Набори косметики',
      categoryId: 'cosmetic-sets',
      items: [
        { id: 'face-care-set', name: 'Догляд за обличчям' },
        { id: 'body-care-set', name: 'Догляд за тілом' },
        { id: 'hair-care-set', name: 'Догляд за волоссям' },
      ],
    },
    {
      category: 'Набори макіяжу',
      categoryId: 'makeup-sets',
      items: [
        { id: 'makeup-palette', name: 'Палетки' },
        { id: 'mini-makeup-set', name: 'Міні-набори декоративної косметики' },
        { id: 'pro-makeup-case', name: 'Професійні кейси для візажистів' },
      ],
    },
    {
      category: 'Парфумерні набори',
      categoryId: 'perfume-sets',
      items: [
        { id: 'women-perfume-set', name: 'Жіночі парфумерні набори' },
        { id: 'men-perfume-set', name: 'Чоловічі парфумерні набори' },
        { id: 'unisex-perfume-set', name: 'Унісекс аромати' },
        { id: 'travel-perfume-set', name: 'Міні-набори або тревел-версії' },
      ],
    },
    {
      category: 'Набори для дітей',
      categoryId: 'child-sets',
      items: [
        { id: 'child-care-set', name: 'Набори догляду' },
        { id: 'child-perfume-toy-set', name: 'Дитячі парфумерні води' },
      ],
    },
    {
      category: 'Подарункові сертифікати',
      categoryId: 'gift-certificates',
      items: [
        { id: 'electronic-certificate', name: 'Електронні сертифікати' },
        { id: 'paper-certificate', name: 'Паперові сертифікати' },
      ],
    },
    {
      category: 'Сезонні та святкові набори',
      categoryId: 'seasonal-sets',
      items: [
        { id: 'holiday-sets', name: 'Різдвяні/новорічні колекції' },
        { id: 'special-occasion-sets', name: 'Святкові набори' },
      ],
    },
  ],
};

function CategorySubcategories() {
  const { groupId } = useParams(); // Отримуємо ID категорії з URL
  const subcategories = subcategoriesData[groupId] || [];

  // Розподіляємо підкатегорії на 3 колонки
  const columns = [[], [], []];
  subcategories.forEach((sub, index) => {
    columns[index % 3].push(sub); // Розподіл по колонках
  });

  return (
    <div className="category-subcategories">
      <h1>
        {groupId === 'makeup' ? 'Макіяж' :
         groupId === 'skincare' ? 'Догляд за шкірою' :
         groupId === 'haircare' ? 'Догляд за волоссям' :
         groupId === 'men-care' ? 'Чоловічий догляд' :
         groupId === 'child-care' ? 'Дитячий догляд' :
         groupId === 'natural-cosmetics' ? 'Натуральна косметика' :
         groupId === 'perfumery' ? 'Парфумерія' :
         groupId === 'accessories' ? 'Аксесуари' :
         groupId === 'gift-sets' ? 'Набори/Подарунки' : 'Категорія'}
      </h1>
      <div className="subcategories-container">
        {columns.map((column, colIndex) => (
          <div key={colIndex} className="subcategory-column">
            {column.map((subcategory, index) => (
              <div key={index} className="subcategory-group">
                <Link
                  to={`/category/${subcategory.categoryId}`}
                  className="subcategory-title animate-subcategory-title"
                >
                  {subcategory.category}
                </Link>
                <ul className="subcategory-list">
                  {subcategory.items.map(item => (
                    <li key={item.id}>
                      <Link
                        to={`/category/${item.id}`}
                        className="subcategory-link"
                      >
                        {item.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default CategorySubcategories;