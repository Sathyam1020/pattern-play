"use client";

import { Search } from "lucide-react";

interface SearchBarProps {
  value: string;
  onChange: (value: string) => void;
  isDark: boolean;
}

export default function SearchBar({ value, onChange, isDark }: SearchBarProps) {
  return (
    <div className="relative w-full max-w-lg mx-auto">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className={`h-4 w-4 ${isDark ? 'text-gray-500' : 'text-gray-400'}`} />
      </div>
      <input
        type="text"
        placeholder="Search..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`w-full pl-9 pr-4 py-2 text-sm rounded-lg border transition-colors focus:outline-none focus:ring-1 ${
          isDark 
            ? 'bg-gray-900 border-gray-800 text-white placeholder-gray-500 focus:ring-gray-600 focus:border-gray-600' 
            : 'bg-white border-gray-200 text-gray-900 placeholder-gray-400 focus:ring-gray-300 focus:border-gray-300'
        }`}
      />
    </div>
  );
}