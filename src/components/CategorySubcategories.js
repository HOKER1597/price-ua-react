import React from 'react';
import { Link, useParams } from 'react-router-dom';
import './CategorySubcategories.css';

// Дані підкатегорій на основі структури EVA.UA
export const subcategoriesData = {
  makeup: [
    {
      category: 'Очі',
      categoryId: 'eyes',
      items: [
        { id: 'mascara', name: 'Туш для вій' },
        { id: 'eyeliner', name: 'Підводка для очей' },
        { id: 'eyeshadow', name: 'Тіні для повік' },
        { id: 'eyebrow', name: 'Засоби для брів' },
        { id: 'false-lashes', name: 'Накладні вії' },
      ],
    },
    {
      category: 'Обличчя',
      categoryId: 'face',
      items: [
        { id: 'foundation', name: 'Тональний крем' },
        { id: 'bb-cream', name: 'ББ-крем' },
        { id: 'concealer', name: 'Консилер' },
        { id: 'powder', name: 'Пудра' },
        { id: 'blush', name: 'Рум’яна' },
        { id: 'highlighter', name: 'Хайлайтер' },
      ],
    },
    {
      category: 'Губи',
      categoryId: 'lips',
      items: [
        { id: 'lipstick', name: 'Помада' },
        { id: 'lipgloss', name: 'Блиск для губ' },
        { id: 'lipliner', name: 'Олівець для губ' },
      ],
    },
    {
      category: 'Нігті',
      categoryId: 'nails',
      items: [
        { id: 'nail-polish', name: 'Лак для нігтів' },
        { id: 'nail-care', name: 'Догляд за нігтями' },
        { id: 'gel-polish', name: 'Гель-лак' },
      ],
    },
    {
      category: 'Зняття макіяжу',
      categoryId: 'makeup-removal',
      items: [
        { id: 'micellar-water', name: 'Міцелярна вода' },
        { id: 'makeup-remover', name: 'Засоби для зняття макіяжу' },
        { id: 'cleansing-oil', name: 'Гідрофільна олія' },
      ],
    },
  ],
  face: [
    {
      category: 'Очищення',
      categoryId: 'cleansing',
      items: [
        { id: 'cleansing-gel', name: 'Гель для вмивання' },
        { id: 'micellar-water', name: 'Міцелярна вода' },
        { id: 'cleansing-foam', name: 'Пінка для вмивання' },
        { id: 'scrub', name: 'Скраб' },
      ],
    },
    {
      category: 'Зволоження',
      categoryId: 'moisturizing',
      items: [
        { id: 'moisturizer', name: 'Зволожувальний крем' },
        { id: 'serum', name: 'Сироватка' },
        { id: 'face-mask', name: 'Маска для обличчя' },
      ],
    },
    {
      category: 'Антивіковий догляд',
      categoryId: 'anti-aging',
      items: [
        { id: 'anti-aging-cream', name: 'Антивіковий крем' },
        { id: 'eye-cream', name: 'Крем для зони навколо очей' },
        { id: 'night-cream', name: 'Нічний крем' },
      ],
    },
    {
      category: 'Спеціальний догляд',
      categoryId: 'special-care',
      items: [
        { id: 'acne-treatment', name: 'Засоби від акне' },
        { id: 'peeling', name: 'Пілінги' },
        { id: 'sun-protection', name: 'Сонцезахисні засоби' },
      ],
    },
  ],
  hair: [
    {
      category: 'Шампуні',
      categoryId: 'shampoos',
      items: [
        { id: 'shampoo-dry', name: 'Для сухого волосся', type: 'Для сухого волосся' },
        { id: 'shampoo-oily', name: 'Для жирного волосся', type: 'Для жирного волосся' },
        { id: 'shampoo-colored', name: 'Для фарбованого волосся', type: 'Для фарбованого волосся' },
        { id: 'damaged-hair', name: 'Для пошкодженого волосся', type: 'Для пошкодженого волосся' },
        { id: 'fluffy-hair', name: 'Для пухнастого волосся', type: 'Для пухнастого волосся' },
        { id: 'dry-shampoo', name: 'Сухий шампунь', type: 'Сухий шампунь' },
        { id: 'all-hair-types', name: 'Для всіх типів волосся', type: 'Для всіх типів волосся' },
        { id: 'for-volume', name: 'Для об’єму', type: 'Для об’єму' },
        { id: 'anti-dandruff', name: 'Проти лупи', type: 'Проти лупи' },
      ],
    },
    {
      category: 'Кондиціонери',
      categoryId: 'conditioners',
      items: [
        { id: 'conditioner-repair', name: 'Відновлювальний кондиціонер' },
        { id: 'conditioner-volume', name: 'Для об’єму' },
        { id: 'conditioner-moisture', name: 'Зволожувальний' },
      ],
    },
    {
      category: 'Маски',
      categoryId: 'masks',
      items: [
        { id: 'hair-mask-repair', name: 'Відновлювальна маска' },
        { id: 'hair-mask-moisture', name: 'Зволожувальна маска' },
        { id: 'hair-mask-nourish', name: 'Живильна маска' },
      ],
    },
    {
      category: 'Стайлінг',
      categoryId: 'styling',
      items: [
        { id: 'hair-spray', name: 'Лак для волосся' },
        { id: 'hair-mousse', name: 'Мус для укладки' },
        { id: 'heat-protection', name: 'Термозахист' },
      ],
    },
  ],
  body: [
    {
      category: 'Очищення',
      categoryId: 'body-cleansing',
      items: [
        { id: 'shower-gel', name: 'Гель для душу' },
        { id: 'body-scrub', name: 'Скраб для тіла' },
        { id: 'bath-foam', name: 'Піна для ванни' },
      ],
    },
    {
      category: 'Зволоження та живлення',
      categoryId: 'body-moisturizing',
      items: [
        { id: 'body-cream', name: 'Крем для тіла' },
        { id: 'body-lotion', name: 'Лосьйон для тіла' },
        { id: 'body-oil', name: 'Олія для тіла' },
      ],
    },
    {
      category: 'Догляд за руками та ногами',
      categoryId: 'hands-feet',
      items: [
        { id: 'hand-cream', name: 'Крем для рук' },
        { id: 'foot-cream', name: 'Крем для ніг' },
        { id: 'cuticle-care', name: 'Догляд за кутикулою' },
      ],
    },
    {
      category: 'Спеціальний догляд',
      categoryId: 'body-special-care',
      items: [
        { id: 'anti-cellulite', name: 'Антицелюлітні засоби' },
        { id: 'deodorant', name: 'Дезодоранти' },
        { id: 'sun-protection-body', name: 'Сонцезахисні засоби для тіла' },
      ],
    },
  ],
  dermocosmetics: [
    {
      category: 'Очищення шкіри',
      categoryId: 'dermo-cleansing',
      items: [
        { id: 'dermo-cleansing-gel', name: 'Гель для вмивання' },
        { id: 'dermo-micellar-water', name: 'Міцелярна вода' },
        { id: 'dermo-cleansing-foam', name: 'Пінка для вмивання' },
      ],
    },
    {
      category: 'Догляд за проблемною шкірою',
      categoryId: 'problem-skin',
      items: [
        { id: 'acne-treatment-dermo', name: 'Засоби від акне' },
        { id: 'anti-redness', name: 'Засоби проти почервонінь' },
        { id: 'sebum-control', name: 'Засоби для контролю себуму' },
      ],
    },
    {
      category: 'Зволоження та відновлення',
      categoryId: 'dermo-moisturizing',
      items: [
        { id: 'dermo-moisturizer', name: 'Зволожувальний крем' },
        { id: 'dermo-serum', name: 'Сироватка' },
        { id: 'dermo-repair', name: 'Відновлювальний крем' },
      ],
    },
    {
      category: 'Сонцезахист',
      categoryId: 'dermo-sun-protection',
      items: [
        { id: 'dermo-spf-cream', name: 'Сонцезахисний крем' },
        { id: 'dermo-spf-spray', name: 'Сонцезахисний спрей' },
      ],
    },
  ],
  professional: [
    {
      category: 'Професійний догляд за обличчям',
      categoryId: 'pro-face-care',
      items: [
        { id: 'pro-cleansing', name: 'Професійне очищення' },
        { id: 'pro-peeling', name: 'Професійні пілінги' },
        { id: 'pro-mask', name: 'Професійні маски' },
      ],
    },
    {
      category: 'Професійний догляд за волоссям',
      categoryId: 'pro-hair-care',
      items: [
        { id: 'pro-shampoo', name: 'Професійний шампунь' },
        { id: 'pro-conditioner', name: 'Професійний кондиціонер' },
        { id: 'pro-hair-mask', name: 'Професійна маска для волосся' },
      ],
    },
    {
      category: 'Професійний макіяж',
      categoryId: 'pro-makeup',
      items: [
        { id: 'pro-foundation', name: 'Професійний тональний крем' },
        { id: 'pro-eyeshadow', name: 'Професійні тіні' },
        { id: 'pro-lipstick', name: 'Професійна помада' },
      ],
    },
    {
      category: 'Інструменти та аксесуари',
      categoryId: 'pro-tools',
      items: [
        { id: 'pro-brushes', name: 'Професійні пензлі' },
        { id: 'pro-sponges', name: 'Професійні спонжі' },
        { id: 'pro-lash-curlers', name: 'Щипці для вій' },
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
        { id: 'women-perfume-mist', name: 'Парфумований спрей' },
      ],
    },
    {
      category: 'Чоловіча парфумерія',
      categoryId: 'men-perfume',
      items: [
        { id: 'men-eau-de-parfum', name: 'Парфумована вода' },
        { id: 'men-eau-de-toilette', name: 'Туалетна вода' },
        { id: 'men-aftershave', name: 'Лосьйон після гоління' },
      ],
    },
    {
      category: 'Унісекс парфумерія',
      categoryId: 'unisex-perfume',
      items: [
        { id: 'unisex-eau-de-parfum', name: 'Парфумована вода' },
        { id: 'unisex-eau-de-toilette', name: 'Туалетна вода' },
      ],
    },
    {
      category: 'Аромати для дому',
      categoryId: 'home-fragrance',
      items: [
        { id: 'diffuser', name: 'Аромадифузори' },
        { id: 'scented-candles', name: 'Ароматичні свічки' },
        { id: 'room-spray', name: 'Спрей для приміщення' },
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
         groupId === 'face' ? 'Догляд за обличчям' :
         groupId === 'hair' ? 'Догляд за волоссям' :
         groupId === 'body' ? 'Догляд за тілом' :
         groupId === 'dermocosmetics' ? 'Дерматокосметика' :
         groupId === 'professional' ? 'Професійна косметика' :
         groupId === 'perfumery' ? 'Парфумерія' : 'Категорія'}
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