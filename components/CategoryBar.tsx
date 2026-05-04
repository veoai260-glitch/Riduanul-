/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface CategoryBarProps {
  categories: string[];
  activeCategory: string;
  onSelect: (category: string) => void;
}

const CategoryBar: React.FC<CategoryBarProps> = ({ categories, activeCategory, onSelect }) => {
  return (
    <div className="flex items-center gap-3 overflow-x-auto no-scrollbar scroll-smooth pb-0.5">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`whitespace-nowrap px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
            activeCategory === cat
              ? 'bg-zinc-900 dark:bg-white text-white dark:text-zinc-900'
              : 'bg-zinc-100 dark:bg-zinc-800 hover:bg-zinc-200 dark:hover:bg-zinc-700 text-zinc-900 dark:text-zinc-100'
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
};

export default CategoryBar;
