"use client";

import CategoryTabs from '@/components/CategoryTabs';
import PatternCard from '@/components/PatternCard';
import SearchBar from '@/components/SearchBar';
import Test from '@/components/test';
import { Button } from '@/components/ui/button';
import patterns from '@/data/patterns';
import { ArrowDownIcon, AudioWaveform, CopyIcon, EyeIcon, GithubIcon, LinkedinIcon, Palette } from 'lucide-react';
import { useEffect, useMemo, useRef, useState } from 'react';

interface Pattern {
  id: number;
  name: string;
  category: string;
  styleObj: React.CSSProperties;
  jsxCode: string;
  tsxCode: string;
}

export default function Home() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('all');
  const [favorites, setFavorites] = useState<number[]>(() => {
    if (typeof window !== 'undefined') {
      const saved = localStorage.getItem('patternplay-favorites');
      return saved ? JSON.parse(saved) : [];
    }
    return [];
  });
  const [selectedPatternId, setSelectedPatternId] = useState<number | null>(null);
  const [codeType, setCodeType] = useState<'jsx' | 'tsx'>('jsx');
  const [currentBackground, setCurrentBackground] = useState<React.CSSProperties>({
    backgroundColor: '#ffffff',
  });
  const [isSelected, setIsSelected] = useState<boolean>(false);
  const [toast, setToast] = useState<{ message: string; color: string } | null>(null);
  const patternRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  // Save favorites to localStorage
  useEffect(() => {
    localStorage.setItem('patternplay-favorites', JSON.stringify(favorites));
  }, [favorites]);

  // Get unique categories
  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(patterns.map(p => p.category)));
    return ['all', ...uniqueCategories, 'favourites'];
  }, []);

  // Get pattern counts for each category
  const patternCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    counts.all = patterns.length;
    counts.favourites = favorites.length;

    patterns.forEach(pattern => {
      counts[pattern.category] = (counts[pattern.category] || 0) + 1;
    });

    return counts;
  }, [favorites]);

  // Filter patterns based on search and category
  const filteredPatterns = useMemo(() => {
    return patterns.filter(pattern => {
      const matchesSearch = pattern.name.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory =
        activeCategory === 'all' ||
        pattern.category === activeCategory ||
        (activeCategory === 'favourites' && favorites.includes(pattern.id));
      return matchesSearch && matchesCategory;
    });
  }, [searchTerm, activeCategory, favorites]);

  const [selectedElement, setSelectedElement] = useState<HTMLDivElement | null>(null);

  const handlePreview = (pattern: Pattern, el?: HTMLDivElement | null) => {
    setCurrentBackground(pattern.styleObj);
    setSelectedPatternId(pattern.id);
    window.scrollTo({ top: 0, behavior: 'smooth' });

    if (el) {
      // you can store it somewhere for scroll-back feature
      setSelectedElement(el || null);
    }
  };


  const handleToggleFavorite = (patternId: number) => {
    setFavorites(prev => {
      const isFav = prev.includes(patternId);
      if (isFav) {
        setToast({ message: "Removed from favorites", color: "bg-white text-black border border-gray-300" });
        setTimeout(() => setToast(null), 2000);
        return prev.filter(id => id !== patternId);
      } else {
        setToast({ message: "Added to favorites!", color: "bg-green-600 text-white" });
        setTimeout(() => setToast(null), 2000);
        return [...prev, patternId];
      }
    });
  };

  // Determine if current background is dark
  const isDark = useMemo(() => {
    const bgColor = currentBackground.backgroundColor;
    if (bgColor && typeof bgColor === 'string') {
      // Check if background color is dark
      if (bgColor.includes('#')) {
        const hex = bgColor.replace('#', '');
        const r = parseInt(hex.substr(0, 2), 16);
        const g = parseInt(hex.substr(2, 2), 16);
        const b = parseInt(hex.substr(4, 2), 16);
        const brightness = (r * 299 + g * 587 + b * 114) / 1000;
        return brightness < 128;
      }
    }
    // Check for dark gradient patterns
    const bgImage = currentBackground.backgroundImage || currentBackground.background;
    if (bgImage && typeof bgImage === 'string') {
      return bgImage.includes('#0') || bgImage.includes('0c0c0c') || bgImage.includes('111111');
    }
    return false;
  }, [currentBackground]);

  return (
    <div
      className="min-h-screen transition-all duration-500 ease-in-out bg-fixed"
      style={{
        ...currentBackground,
        backgroundAttachment: "fixed"
      }}
    >
      {/* Toast Notification */}
      {toast && (
        <div
          className={`
          fixed z-50
          flex items-center gap-3
          w-[90%] md:w-auto
          rounded-md border shadow-lg
          px-4 py-3 text-sm font-medium
          ${toast.color || 'bg-background text-foreground border-border'}
          transition-all duration-300 ease-in-out
          md:bottom-6 md:right-6
          md:left-auto md:top-auto
          top-4 left-1/2 -translate-x-1/2 md:translate-x-0
          animate-toast-in
        `}
        >
          <span>{toast.message}</span>
        </div>
      )}

      <div className="min-h-screen">
        <div className="container mx-auto px-4 py-6 max-w-7xl">
          {/* Header */}
          <div className="text-center mb-8">
            {/* Navbar  */}
            <div className='flex justify-between items-center mb-4 max-w-5xl mx-auto'>
              <div className="flex items-center justify-center gap-2 mb-2">
                <AudioWaveform className={`w-6 h-6 ${isDark ? 'text-white' : 'text-black'}`} />
                <h1 className={`text-2xl cursor-pointer font-bold ${isDark ? 'text-white' : 'text-black'}`}>
                  PatternPlay
                </h1>
              </div>
              <div className='flex items-center gap-2'>
                <div>
                  <Button variant='outline' className='rounded-full shadow-sm p-2'>
                    <GithubIcon size={20} />
                  </Button>
                </div>
                <div>
                  <Button variant='outline' className='rounded-full shadow-sm p-2'>
                    <LinkedinIcon size={20} />
                  </Button>
                </div>
              </div>
            </div>
            {/* Header  */}
            <div className='py-10'>
              <h6 className={`text-6xl font-semibold py-5 text-center ${isDark ? 'text-gray-200' : 'text-gray-700'}`}>
                From Boring to Beautiful!
              </h6>
              <p className={`text-xl ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                Tailwind CSS patterns that transform plain backgrounds into design moments.
              </p>
            </div>
            {/* Explaination  */}
            <div className="flex justify-center mb-6 flex-wrap gap-4">
              {/* Card 1 */}
              <div className="w-56 h-20 px-4 py-2 rounded-2xl shadow-md bg-white flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 rounded-xl bg-purple-100 text-purple-600">
                  <CopyIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Copy Snippet</p>
                  <p className="text-xs text-gray-500">Ready-to-use code</p>
                </div>
              </div>

              {/* Card 2 */}
              <div className="w-56 h-20 px-4 py-2 rounded-2xl shadow-md bg-white flex items-center gap-4 hover:shadow-lg transition-shadow duration-300">
                <div className="p-3 rounded-xl bg-pink-100 text-pink-600">
                  <EyeIcon className="w-5 h-5" />
                </div>
                <div>
                  <p className="font-medium text-gray-800">Live Preview</p>
                  <p className="text-xs text-gray-500">See patterns in action</p>
                </div>
              </div>
            </div>

            <p className={`text-sm max-w-lg mx-auto ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
              Browse, preview, and copy minimal background patterns
            </p>
          </div>

          {/* Controls */}
          <div className="mb-6 space-y-4">
            <CategoryTabs
              categories={categories}
              activeCategory={activeCategory}
              onChange={setActiveCategory}
              patternCounts={patternCounts}
              isDark={isDark}
            />
            <SearchBar
              value={searchTerm}
              onChange={setSearchTerm}
              isDark={isDark}
            />
          </div>

          {/* Pattern Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-4 mb-8 animate-in fade-in duration-500">
            {filteredPatterns.map((pattern) => (
              <div
                key={pattern.id}
                ref={(el) => { patternRefs.current[pattern.id] = el; }}
              >
                <PatternCard
                  pattern={pattern}
                  onPreview={() => handlePreview(pattern, patternRefs.current[pattern.id])}
                  onToggleFavorite={handleToggleFavorite}
                  isFavorite={favorites.includes(pattern.id)}
                  codeType={codeType}
                  isDark={isDark}
                  isSelected={selectedPatternId === pattern.id}
                />
              </div>
            ))}
          </div>

          {/* No Results */}
          {filteredPatterns.length === 0 && (
            <div className="text-center py-12 animate-in fade-in duration-500">
              <div className="max-w-sm mx-auto">
                <Palette className={`w-12 h-12 mx-auto mb-3 ${isDark ? 'text-gray-600' : 'text-gray-400'}`} />
                <h3 className={`text-lg font-medium mb-1 ${isDark ? 'text-white' : 'text-black'}`}>
                  No patterns found
                </h3>
                <p className={`text-sm ${isDark ? 'text-gray-400' : 'text-gray-600'}`}>
                  Try a different search term or category
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
      {selectedPatternId && selectedElement && (
        <Button
          onClick={() => {
            selectedElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
          }}
          variant='outline'
          className={`
            fixed z-50 rounded-full shadow-lg p-3 transition-colors
            ${isDark ? 'bg-white text-black hover:bg-gray-200' : 'bg-black text-white hover:bg-gray-800'}
            bottom-6 right-6 
            sm:bottom-6 sm:right-6 
            xs:bottom-6 xs:left-1/2 xs:-translate-x-1/2
          `}
          style={{
            // on mobile, center the button
            position: 'fixed',
            ...(window.innerWidth < 640 && {
              left: '50%',
              transform: 'translateX(-50%)',
            })
          }}
        >
          <ArrowDownIcon size={20}/>
        </Button>
      )}
      {/* <Test /> */}
    </div>
  );
}