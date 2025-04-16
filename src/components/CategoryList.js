import React from 'react';
import { Link } from 'react-router-dom';

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './CategoryList.css';

import shampoosImg from '../img/shampoo.jpg';
import creamsImg from '../img/creams.jpg';
import masksImg from '../img/masks.webp';
import soapsImg from '../img/soap.jpg';
import scrubsImg from '../img/scrubs.jpg';

const categories = [
  // Макіяж
  { id: 'tonal', name: 'Тональні засоби', image: masksImg, size: 'default' },
  { id: 'powder', name: 'Пудра', image: masksImg, size: 'default' },
  { id: 'blush', name: 'Рум’яна', image: masksImg, size: 'default' },
  { id: 'highlighter', name: 'Хайлайтери', image: masksImg, size: 'default' },
  { id: 'concealer', name: 'Консилери', image: masksImg, size: 'default' },
  { id: 'lipstick', name: 'Помада', image: masksImg, size: 'default' },
  { id: 'lipgloss', name: 'Блиск для губ', image: scrubsImg, size: 'default' },
  { id: 'lipliner', name: 'Олівці для губ', image: masksImg, size: 'default' },
  { id: 'eyeshadow', name: 'Тіні для повік', image: soapsImg, size: 'default' },
  { id: 'eyeliner', name: 'Підводки', image: masksImg, size: 'default' },
  { id: 'mascara', name: 'Туш для вій', image: scrubsImg, size: 'default' },
  { id: 'browpencil', name: 'Олівці для брів', image: masksImg, size: 'default' },
  { id: 'browshadow', name: 'Тіні для брів', image: soapsImg, size: 'default' },
  { id: 'browgel', name: 'Гель для брів', image: masksImg, size: 'default' },
  { id: 'nailpolish', name: 'Лак для нігтів', image: scrubsImg, size: 'default' },
  { id: 'makeupremover', name: 'Засоби для зняття макіяжу', image: masksImg, size: 'default' },
  { id: 'brushes', name: 'Пензлі та аплікатори', image: masksImg, size: 'default' },
  // Обличчя
  { id: 'facecream', name: 'Креми для обличчя', image: creamsImg, size: 'default' },
  { id: 'serum', name: 'Сироватки', image: creamsImg, size: 'default' },
  { id: 'facemask', name: 'Маски для обличчя', image: soapsImg, size: 'default' },
  { id: 'scrub', name: 'Скраби та пілінги', image: creamsImg, size: 'default' },
  { id: 'cleanser', name: 'Очищення', image: scrubsImg, size: 'default' },
  { id: 'tonic', name: 'Тоніки', image: creamsImg, size: 'default' },
  { id: 'micellar', name: 'Міцелярна вода', image: creamsImg, size: 'default' },
  { id: 'eyecream', name: 'Засоби для очей', image: scrubsImg, size: 'default' },
  { id: 'lipbalm', name: 'Бальзами для губ', image: creamsImg, size: 'default' },
  { id: 'antiaging', name: 'Антивікові засоби', image: soapsImg, size: 'default' },
  { id: 'sunscreen', name: 'Сонцезахисні засоби', image: creamsImg, size: 'default' },
  // Волосся
  { id: 'shampoos', name: 'Шампуні', image: shampoosImg, size: 'default' },
  { id: 'conditioner', name: 'Кондиціонери', image: shampoosImg, size: 'default' },
  { id: 'hairmask', name: 'Маски для волосся', image: soapsImg, size: 'default' },
  { id: 'hairoil', name: 'Олії для волосся', image: shampoosImg, size: 'default' },
  { id: 'hairserum', name: 'Сироватки для волосся', image: soapsImg, size: 'default' },
  { id: 'hairspray', name: 'Спреї для волосся', image: soapsImg, size: 'default' },
  { id: 'hairdye', name: 'Фарби для волосся', image: shampoosImg, size: 'default' },
  { id: 'styling', name: 'Засоби для укладки', image: shampoosImg, size: 'default' },
  { id: 'dryshampoo', name: 'Сухі шампуні', image: scrubsImg, size: 'default' },
  { id: 'hairloss', name: 'Засоби проти випадіння', image: scrubsImg, size: 'default' },
];

const groups = [
    {
      id: 'makeup',
      name: 'Макіяж',
      subcategories: [
        { id: 'tonal', name: 'Тональні засоби', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8zm0-14c-3.31 0-6 2.69-6 6s2.69 6 6 6 6-2.69 6-6-2.69-6-6-6z"/></svg>' },
        { id: 'powder', name: 'Пудра', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>' },
        { id: 'blush', name: 'Рум’яна', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M12 4a8 8 0 100 16 8 8 0 000-16zM7 7h10v10H7z"/></svg>' },
        { id: 'lipstick', name: 'Помада', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M4 6h16v2H4zm0 4h16v2H4zm0 4h16v2H4z"/></svg>' },
        { id: 'lipgloss', name: 'Блиск для губ', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M12 2l-8 8h16l-8-8zm0 20l8-8H4l8 8z"/></svg>' },
        { id: 'eyeshadow', name: 'Тіні для повік', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 12a4 4 0 110-8 4 4 0 010 8z"/></svg>' },
        { id: 'eyeliner', name: 'Підводки', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M3 3h18v18H3z"/></svg>' },
        { id: 'mascara', name: 'Туш для вій', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 16a6 6 0 110-12 6 6 0 010 12z"/></svg>' },
        { id: 'browgel', name: 'Гель для брів', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M4 4h16v16H4z"/></svg>' },
      ],
    },
    {
      id: 'face',
      name: 'Обличчя',
      subcategories: [
        { id: 'facecream', name: 'Креми для обличчя', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>' },
        { id: 'serum', name: 'Сироватки', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>' },
        { id: 'facemask', name: 'Маски для обличчя', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M12 4a8 8 0 100 16 8 8 0 000-16zM7 7h10v10H7z"/></svg>' },
        { id: 'scrub', name: 'Скраби та пілінги', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M4 6h16v2H4zm0 4h16v2H4zm0 4h16v2H4z"/></svg>' },
        { id: 'cleanser', name: 'Очищення', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M12 2l-8 8h16l-8-8zm0 20l8-8H4l8 8z"/></svg>' },
        { id: 'tonic', name: 'Тоніки', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 12a4 4 0 110-8 4 4 0 010 8z"/></svg>' },
        { id: 'micellar', name: 'Міцелярна вода', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M3 3h18v18H3z"/></svg>' },
        { id: 'eyecream', name: 'Засоби для шкіри навколо очей', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 16a6 6 0 110-12 6 6 0 010 12z"/></svg>' },
        { id: 'sunscreen', name: 'Сонцезахисні засоби', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M4 4h16v16H4z"/></svg>' },
      ],
    },
    {
      id: 'hair',
      name: 'Волосся',
      subcategories: [
        { id: 'shampoos', name: 'Шампуні', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.42 0-8-3.58-8-8s3.58-8 8-8 8 3.58 8 8-3.58 8-8 8z"/></svg>' },
        { id: 'conditioner', name: 'Кондиціонери', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"/></svg>' },
        { id: 'hairmask', name: 'Маски для волосся', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M12 4a8 8 0 100 16 8 8 0 000-16zM7 7h10v10H7z"/></svg>' },
        { id: 'hairoil', name: 'Олії для волосся', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M4 6h16v2H4zm0 4h16v2H4zm0 4h16v2H4z"/></svg>' },
        { id: 'hairserum', name: 'Сироватки для волосся', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M12 2l-8 8h16l-8-8zm0 20l8-8H4l8 8z"/></svg>' },
        { id: 'hairspray', name: 'Спреї для волосся', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M12 4a8 8 0 100 16 8 8 0 000-16zm0 12a4 4 0 110-8 4 4 0 010 8z"/></svg>' },
        { id: 'hairdye', name: 'Фарби для волосся', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M3 3h18v18H3z"/></svg>' },
        { id: 'styling', name: 'Засоби для укладки', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 16a6 6 0 110-12 6 6 0 010 12z"/></svg>' },
        { id: 'dryshampoo', name: 'Сухі шампуні', icon: '<svg width="24" height="24" viewBox="0 0 24 24" fill="#666"><path d="M4 4h16v16H4z"/></svg>' },
      ],
    },
  ];
  
  function CategoryList() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 6,
      rows: 2,
      arrows: true,
      nextArrow: <NextArrow />,
      prevArrow: <PrevArrow />,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            rows: 2,
          },
        },
      ],
    };
  
    function NextArrow(props) {
      const { className, onClick } = props;
      return (
        <div className={`${className} custom-arrow next-arrow round-arrow`} onClick={onClick}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M8.59 16.59L13.17 12 8.59 7.41 10 6l6 6-6 6-1.41-1.41z"/>
          </svg>
        </div>
      );
    }
  
    function PrevArrow(props) {
      const { className, onClick } = props;
      return (
        <div className={`${className} custom-arrow prev-arrow round-arrow`} onClick={onClick}>
          <svg width="20" height="20" viewBox="0 0 24 24" fill="white">
            <path d="M15.41 16.59L10.83 12l4.58-4.59L14 6l-6 6 6 6 1.41-1.41z"/>
          </svg>
        </div>
      );
    }
  
    return (
      <div className="category-list">
        <div className="category-groups">
          {groups.map(group => (
            <div key={group.id} className="category-group">
              <span className="group-name">{group.name}</span>
              <div className={`dropdown dropdown-${group.id}`}>
                <div className="dropdown-row">
                  {group.subcategories.map(sub => (
                    <Link
                      key={sub.id}
                      to={`/category/${sub.id}`}
                      className="dropdown-item"
                    >
                      <div className="icon-wrapper" dangerouslySetInnerHTML={{ __html: sub.icon }} />
                      <span>{sub.name}</span>
                    </Link>
                  ))}
                  <Link
                  to={`/subcategories/${group.id}`}
                  className="dropdown-item all-categories"
                >
                  <div className="icon-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="#333">
                      <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"/>
                    </svg>
                  </div>
                  <span>Усі категорії</span>
                </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <Slider {...settings}>
          {categories.map((category) => (
            <div key={category.id}>
              <Link to={`/category/${category.id}`} className="category-card">
                <div className="category-image-wrapper">
                  <img src={category.image} alt={category.name} className="category-image" />
                </div>
                <h3>{category.name}</h3>
              </Link>
            </div>
          ))}
        </Slider>
      </div>
    );
  }
  
  export default CategoryList;