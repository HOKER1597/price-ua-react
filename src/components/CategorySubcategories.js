import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './CategorySubcategories.css';

// Дані підкатегорій на основі структури з docx файлу
export const subcategoriesData = {
  makeup: [
    {
      category: 'Обличчя',
      categoryId: 'face',
      items: [
        { id: 'foundation', name: 'Тональні основи (рідкі, компактні, стіки)' },
        { id: 'concealer', name: 'Консилери (під очі, точкові)' },
        { id: 'powder', name: 'Пудри (розсипчасті, компактні)' },
        { id: 'blush', name: 'Рум’яна (кремові, сухі)' },
        { id: 'highlighter', name: 'Хайлайтери (пудрові, рідкі)' },
        { id: 'bronzer', name: 'Бронзери' },
        { id: 'primer', name: 'Бази/праймери (матуючі, зволожуючі, з ефектом сяяння)' },
      ],
    },
    {
      category: 'Очі',
      categoryId: 'eyes',
      items: [
        { id: 'eyeshadow', name: 'Тіні для повік (одиночні, палітри, кремові)' },
        { id: 'eyeliner', name: 'Підводки (рідкі, гелеві, фломастери)' },
        { id: 'eyepencil', name: 'Олівці для очей' },
        { id: 'mascara', name: 'Туші (обʼєм, подовження, водостійкі)' },
        { id: 'eyeshadow-base', name: 'Бази під тіні' },
        { id: 'eyebrow', name: 'Засоби для брів (олівці, гелі, тіні, фіксатори, маркери, сироватки)' },
      ],
    },
    {
      category: 'Губи',
      categoryId: 'lips',
      items: [
        { id: 'lipstick', name: 'Помади (матові, глянцеві, сатинові)' },
        { id: 'lipgloss', name: 'Блиски' },
        { id: 'lipliner', name: 'Олівці (контурні, моделюючі)' },
        { id: 'lipbalm', name: 'Бальзами (з SPF, кольорові)' },
        { id: 'tint', name: 'Тінти (гель, крем)' },
      ],
    },
    {
      category: 'Інструменти',
      categoryId: 'tools',
      items: [
        { id: 'brushes', name: 'Пензлі (для тону, пудри, очей)' },
        { id: 'sponges', name: 'Спонжі' },
        { id: 'brow-brushes', name: 'Щіточки для брів' },
        { id: 'applicators', name: 'Аплікатори' },
        { id: 'mirrors', name: 'Дзеркала' },
        { id: 'organizers', name: 'Органайзери' },
        { id: 'lip-brushes', name: 'Кисті для губ' },
        { id: 'accessories', name: 'Аксесуари для нанесення макіяжу' },
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
        { id: 'hydrolat', name: 'Гідролати' },
        { id: 'mist', name: 'Місти' },
      ],
    },
    {
      category: 'Сироватки та активи',
      categoryId: 'serums',
      items: [
        { id: 'vitamin-c', name: 'З вітаміном С' },
        { id: 'niacinamide', name: 'Ніацинамідом' },
        { id: 'hyaluronic-acid', name: 'Гіалуроновою кислотою' },
        { id: 'peptides', name: 'Пептидами' },
        { id: 'retinol', name: 'Ретинолом' },
        { id: 'aha-bha', name: 'AHA/BHA кислотами' },
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
      categoryId: 'nourishment',
      items: [
        { id: 'masks', name: 'Маски (тканинні, кремові, нічні)' },
        { id: 'face-oil', name: 'Олії для обличчя' },
        { id: 'balm', name: 'Бальзами' },
        { id: 'eye-care', name: 'Зона навколо очей: Креми, Гелі, Патчі' },
        { id: 'spf', name: 'Захист: SPF (креми, спреї, флюїди)' },
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
      categoryId: 'body',
      items: [
        { id: 'shower-gel', name: 'Гелі для душу' },
        { id: 'body-scrub', name: 'Скраби' },
        { id: 'body-lotion', name: 'Лосьйони' },
        { id: 'body-oil', name: 'Олії' },
        { id: 'body-butter', name: 'Батери' },
        { id: 'deodorant', name: 'Дезодоранти (антиперспіранти, натуральні)' },
        { id: 'post-epilation', name: 'Засоби після епіляції' },
        { id: 'anti-cellulite', name: 'Антицелюлітні креми' },
        { id: 'tightening-cream', name: 'Креми з ефектом підтягнення' },
        { id: 'body-spf', name: 'SPF для тіла' },
      ],
    },
    {
      category: 'Руки та ноги',
      categoryId: 'hands-feet',
      items: [
        { id: 'hand-foot-cream', name: 'Креми (зволожуючі, живильні)' },
        { id: 'hand-foot-mask', name: 'Маски' },
        { id: 'cuticle-care', name: 'Засоби для кутикули' },
        { id: 'glass-file', name: 'Скляні пилочки' },
        { id: 'crack-cream', name: 'Креми від тріщин' },
        { id: 'anti-sweat', name: 'Антипітливість' },
      ],
    },
  ],
  haircare: [
    {
      category: 'Шампуні (для обʼєму, проти лупи, для фарбованого волосся)',
      categoryId: 'shampoos',
      items: [],
    },
    {
      category: 'Кондиціонери',
      categoryId: 'conditioners',
      items: [],
    },
    {
      category: 'Бальзами',
      categoryId: 'balms',
      items: [],
    },
    {
      category: 'Маски (зволожуючі, відновлюючі)',
      categoryId: 'hair-masks',
      items: [],
    },
    {
      category: 'Сироватки (термозахист, зміцнення)',
      categoryId: 'hair-serums',
      items: [],
    },
    {
      category: 'Олії (арганова, кокосова, рицинова)',
      categoryId: 'hair-oils',
      items: [],
    },
    {
      category: 'Термозахист',
      categoryId: 'heat-protection',
      items: [],
    },
    {
      category: 'Сухі шампуні',
      categoryId: 'dry-shampoos',
      items: [],
    },
    {
      category: 'Спреї для блиску',
      categoryId: 'shine-sprays',
      items: [],
    },
    {
      category: 'Стайлінг (муси, лаки, гелі, віски)',
      categoryId: 'styling',
      items: [],
    },
    {
      category: 'Засоби для фарбування',
      categoryId: 'hair-dyes',
      items: [],
    },
    {
      category: 'Тоніки',
      categoryId: 'tonics',
      items: [],
    },
    {
      category: 'Гребінці (антистатичні, масажні)',
      categoryId: 'combs',
      items: [],
    },
    {
      category: 'Плойки',
      categoryId: 'curling-irons',
      items: [],
    },
    {
      category: 'Фени',
      categoryId: 'hair-dryers',
      items: [],
    },
    {
      category: 'Випрямлячі',
      categoryId: 'straighteners',
      items: [],
    },
  ],
  menscare: [
    {
      category: 'Для гоління',
      categoryId: 'shaving',
      items: [
        { id: 'shaving-foam', name: 'Піна, Гель, Креми' },
        { id: 'aftershave', name: 'Після гоління: Лосьйони, Бальзами' },
        { id: 'beard-care', name: 'Догляд за бородою: Масло, Бальзам, Віск, Шампуні для бороди' },
      ],
    },
    {
      category: 'Догляд за шкірою',
      categoryId: 'mens-skincare',
      items: [
        { id: 'mens-cleansing', name: 'Очищення' },
        { id: 'mens-cream', name: 'Креми' },
        { id: 'mens-serum', name: 'Сироватки' },
      ],
    },
    {
      category: 'Догляд за тілом',
      categoryId: 'mens-bodycare',
      items: [
        { id: 'mens-deodorant', name: 'Дезодоранти' },
        { id: 'mens-shower-gel', name: 'Гелі' },
        { id: 'mens-lotion', name: 'Лосьйони' },
      ],
    },
    {
      category: 'Волосся',
      categoryId: 'mens-haircare',
      items: [
        { id: 'mens-styling', name: 'Стайлінг' },
        { id: 'mens-shampoo', name: 'Шампуні' },
        { id: 'mens-serum', name: 'Сироватки' },
      ],
    },
  ],
  childcare: [
    {
      category: 'Шампуні',
      categoryId: 'child-shampoos',
      items: [],
    },
    {
      category: 'Гелі',
      categoryId: 'child-gels',
      items: [],
    },
    {
      category: 'Креми',
      categoryId: 'child-creams',
      items: [],
    },
    {
      category: 'Сонцезахист',
      categoryId: 'child-spf',
      items: [],
    },
    {
      category: 'Засоби для підмивання',
      categoryId: 'child-washes',
      items: [],
    },
    {
      category: 'Дитячі масла',
      categoryId: 'child-oils',
      items: [],
    },
    {
      category: 'Заспокійливі креми',
      categoryId: 'child-soothing-creams',
      items: [],
    },
    {
      category: 'Засоби при попрілостях',
      categoryId: 'child-diaper-creams',
      items: [],
    },
    {
      category: 'Підгузки',
      categoryId: 'diapers',
      items: [],
    },
    {
      category: 'Вологі серветки',
      categoryId: 'child-wipes',
      items: [],
    },
  ],
  naturalcosmetics: [
    {
      category: 'Натуральний макіяж',
      categoryId: 'natural-makeup',
      items: [],
    },
    {
      category: 'Органічний догляд за шкірою',
      categoryId: 'organic-skincare',
      items: [],
    },
    {
      category: 'Волосся без сульфатів/парабенів',
      categoryId: 'sulfate-free-haircare',
      items: [],
    },
    {
      category: 'Еко-догляд для тіла',
      categoryId: 'eco-bodycare',
      items: [],
    },
  ],
  perfumery: [
    {
      category: 'Жіночі парфуми (парфумована вода, туалетна вода, тверді духи)',
      categoryId: 'women-perfumes',
      items: [],
    },
    {
      category: 'Чоловічі парфуми',
      categoryId: 'men-perfumes',
      items: [],
    },
    {
      category: 'Унісекс',
      categoryId: 'unisex-perfumes',
      items: [],
    },
    {
      category: 'Парфумовані міні версії',
      categoryId: 'mini-perfumes',
      items: [],
    },
    {
      category: 'Дезодоранти',
      categoryId: 'perfumed-deodorants',
      items: [],
    },
    {
      category: 'Аромаспреї',
      categoryId: 'fragrance-sprays',
      items: [],
    },
    {
      category: 'Парфумовані лосьйони',
      categoryId: 'perfumed-lotions',
      items: [],
    },
  ],
  accessories: [
    {
      category: 'Косметички',
      categoryId: 'cosmetic-bags',
      items: [],
    },
    {
      category: 'Дзеркала',
      categoryId: 'mirrors',
      items: [],
    },
    {
      category: 'Гребінці',
      categoryId: 'combs',
      items: [],
    },
    {
      category: 'Пов’язки',
      categoryId: 'headbands',
      items: [],
    },
    {
      category: 'Щипчики',
      categoryId: 'tweezers',
      items: [],
    },
    {
      category: 'Інструменти для чищення пензлів',
      categoryId: 'brush-cleaners',
      items: [],
    },
    {
      category: 'Аплікатори',
      categoryId: 'applicators',
      items: [],
    },
    {
      category: 'Пінцети',
      categoryId: 'pincers',
      items: [],
    },
    {
      category: 'Дозатори',
      categoryId: 'dispensers',
      items: [],
    },
    {
      category: 'Палітри для міксування засобів',
      categoryId: 'mixing-palettes',
      items: [],
    },
  ],
  giftsets: [
    {
      category: 'Подарункові бокси (мейкап, догляд)',
      categoryId: 'gift-boxes',
      items: [],
    },
    {
      category: 'Святкові колекції',
      categoryId: 'holiday-collections',
      items: [],
    },
    {
      category: 'Міні-набори для подорожей',
      categoryId: 'travel-sets',
      items: [],
    },
    {
      category: 'Набори для чоловіків',
      categoryId: 'mens-sets',
      items: [],
    },
    {
      category: 'Дитячі набори',
      categoryId: 'child-sets',
      items: [],
    },
    {
      category: 'Бʼюті-календарі',
      categoryId: 'beauty-calendars',
      items: [],
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
         groupId === 'menscare' ? 'Чоловічий догляд' :
         groupId === 'childcare' ? 'Дитячий догляд' :
         groupId === 'naturalcosmetics' ? 'Натуральна косметика' :
         groupId === 'perfumery' ? 'Парфумерія' :
         groupId === 'accessories' ? 'Аксесуари' :
         groupId === 'giftsets' ? 'Набори/Подарунки' : 'Категорія'}
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
                        to={`/category/${subcategory.categoryId}${item.type ? `?type=${encodeURIComponent(item.type)}` : ''}`}
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