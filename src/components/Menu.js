import React, { useState } from 'react';
import menuData from '../data/menuData';

const Menu = () => {
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = [
    { id: 'all', name: 'All Menu' },
    { id: 'food', name: 'Food Items' },
    { id: 'beverages', name: 'Beverages' },
    { id: 'desserts', name: 'Desserts' },
    { id: 'combos', name: 'Combos' }
  ];

  // Categorize menu items
  const foodCategories = ['Sandwich', 'Burger', 'Pizza (4 Pieces / 6 Pieces)', 'Fries', 'Hot Bytes', 'Nuggets'];
  const beverageCategories = ['Mojito', 'Healthy Juice', 'Juices', 'Bottle Smoothie', 'Thick Shakes', 'Lassi', 'Falooda', 'Protein', 'Cold Coffee', 'Shakes'];
  const dessertCategories = ['Monsters', 'Sundaes', 'Ice Creams', 'Special Icecream'];

  const getFilteredMenu = () => {
    switch (selectedCategory) {
      case 'food':
        return menuData.filter(category => foodCategories.includes(category.name));
      case 'beverages':
        return menuData.filter(category => beverageCategories.includes(category.name));
      case 'desserts':
        return menuData.filter(category => dessertCategories.includes(category.name));
      case 'combos':
        return menuData.filter(category => category.name === 'Combos');
      default:
        return menuData;
    }
  };

  const formatPrice = (price) => {
    if (typeof price === 'string') {
      return `₹${price}`;
    }
    return `₹${price}`;
  };

  return (
    <section id="menu" className="menu">
      <div className="container">
        <h2 className="section-title">Our Menu</h2>
        
        {/* Category Filter Tabs */}
        <div className="menu-tabs">
          {categories.map(category => (
            <button
              key={category.id}
              className={`tab-button ${selectedCategory === category.id ? 'active' : ''}`}
              onClick={() => setSelectedCategory(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <div className="menu-content">
          <div className="menu-categories-grid">
            {getFilteredMenu().map((category, categoryIndex) => (
              <div key={categoryIndex} className="menu-category-card">
                <div className="category-header">
                  <h3 className="category-title">{category.name}</h3>
                </div>
                <div className="category-items">
                  {category.items.map((item, itemIndex) => (
                    <div key={itemIndex} className="menu-item-card">
                      <div className="item-info">
                        <h4 className="item-name">{item.name}</h4>
                      </div>
                      <div className="item-price">
                        <span className="price">{formatPrice(item.price)}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Menu; 