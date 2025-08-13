"use client";

interface CategoryTabsProps {
  categories: string[];
  activeCategory: string;
  onChange: (category: string) => void;
  patternCounts: Record<string, number>;
  isDark: boolean;
}

export default function CategoryTabs({ 
  categories, 
  activeCategory, 
  onChange, 
  patternCounts, 
  isDark 
}: CategoryTabsProps) {
  return (
    <div className="flex flex-wrap gap-1 justify-center">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onChange(category)}
          className={`px-4 py-1.5 rounded-md text-sm font-medium transition-all duration-200 capitalize hover:scale-105 ${
            activeCategory === category
              ? isDark 
                ? "bg-white text-black" 
                : "bg-black text-white"
              : isDark
                ? "text-gray-400 hover:text-white hover:bg-gray-800"
                : "text-gray-600 hover:text-black hover:bg-gray-100"
          }`}
        >
          {category} {patternCounts[category] && `(${patternCounts[category]})`}
        </button>
      ))}
    </div>
  );
}