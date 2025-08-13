"use client";

import dataPatterns from "@/data/patterns";
import { Check, Copy, Eye, Heart } from "lucide-react";
import { useState } from "react";

interface Pattern {
  id: number;
  name: string;
  category: string;
  styleObj: React.CSSProperties;
  jsxCode: string;
  tsxCode: string;
}

interface PatternCardProps {
  pattern: Pattern;
  onPreview: (pattern: Pattern) => void;
  onToggleFavorite: (patternId: number) => void;
  isFavorite: boolean;
  codeType: 'jsx' | 'tsx';
  isDark: boolean;
  isSelected: boolean;
}

export default function PatternCard({
  pattern,
  onPreview,
  onToggleFavorite,
  isFavorite,
  codeType,
  isDark,
  isSelected,
}: PatternCardProps) {
  const [copied, setCopied] = useState(false);

  // State for editing modal
  const originalCode = codeType === 'jsx' ? pattern.jsxCode : pattern.tsxCode;
  const [editCode, setEditCode] = useState(originalCode);
  const [patterns, setPatterns] = useState<Pattern[]>(dataPatterns);
  const [backgroundStyle, setBackgroundStyle] = useState(patterns[0].styleObj);

  const handleCopy = async () => {
    try {
      const code = codeType === 'jsx' ? pattern.jsxCode : pattern.tsxCode;
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error('Failed to copy:', err);
    }
  };

  const handleReset = () => {
    setEditCode(originalCode);
  };

  return (
    <div className={`group rounded-lg cursor-pointer border transition-all duration-300 hover:shadow-lg hover:-translate-y-1 overflow-hidden ${isDark
      ? 'bg-gray-900 border-gray-800 hover:border-gray-700'
      : 'bg-white border-gray-200 hover:border-gray-300'
      } ${isSelected ? (isDark ? "border-2 border-white" : "border-2 border-black") : ""}`}>
      {/* Pattern Preview */}
      <div
        className={`h-44 w-full relative overflow-hidden border-b transition-transform duration-300 group-hover:scale-x-105 ${isDark ? 'border-gray-800' : 'border-gray-200'
          }`}
        style={pattern.styleObj}
      >
        <div className="absolute top-2 left-2 shadow-lg rounded-full ml-1">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onToggleFavorite(pattern.id);
            }}
            className={`transition-colors duration-200 shadow-lg rounded-full border-2 p-1
              ${isDark
                ? 'border-gray-300 bg-gray-300'
                : 'border-gray-400 bg-gray-400'
              }
              shadow-sm
            `}
            style={{ lineHeight: 0 }}
          >
            <Heart
              className={`w-4 h-4 transition-colors ${isFavorite
                ? 'text-red-500 fill-red-500'
                : isDark ? 'text-white hover:text-red-400' : 'text-white hover:text-red-500'
                }`}
            />
          </button>
        </div>
      </div>

      {/* Card Content */}
      <div className="p-3">
        <h3 className={`font-medium mb-2 text-sm ${isDark ? 'text-white' : 'text-gray-900'
          }`}>
          {pattern.name}
        </h3>

        {/* Action Buttons */}
        <div className="flex gap-1.5">
          {/* Copy */}
          <button
            onClick={handleCopy}
            className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs font-medium rounded transition-all duration-200 hover:scale-105 ${copied
              ? isDark
                ? "bg-green-900 text-green-300"
                : "bg-green-100 text-green-700"
              : isDark
                ? "bg-gray-800 text-gray-300 hover:bg-gray-700"
                : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            {copied ? (
              <>
                <Check className="w-3 h-3" />
                Copied!
              </>
            ) : (
              <>
                <Copy className="w-3 h-3" />
                Copy
              </>
            )}
          </button>

          {/* Preview */}
          <button
            onClick={() => onPreview(pattern)}
            className={`flex-1 flex items-center justify-center gap-1.5 px-2 py-1.5 text-xs font-medium rounded transition-all duration-200 hover:scale-105 ${isDark
              ? "bg-white text-black hover:bg-gray-200"
              : "bg-black text-white hover:bg-gray-800"
              }`}
          >
            <Eye className="w-3 h-3" />
            Preview
          </button>
        </div>
      </div>
    </div>
  );
}
