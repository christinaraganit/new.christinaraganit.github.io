"use client";
import React from "react";

type HighlightItem = {
  elementId: string;
  label: string;
}
const StickyHighlightNav: React.FC<{highlightItems: HighlightItem[], navbarHeight: number, gapHeight: number}> = ({highlightItems, navbarHeight, gapHeight}) => {
  const [activeSection, setActiveSection] = React.useState<string | null>(null);

  const handleScroll = React.useCallback(() => {
    const currentSection = highlightItems.find((item) => {
      const element = document.getElementById(item.elementId);
      if (!element) return false;

      const elementTop = element.offsetTop - gapHeight - navbarHeight;
      const elementBottom = elementTop + element.offsetHeight + gapHeight-1;
      return window.scrollY >= elementTop && window.scrollY < elementBottom;
    });
    setActiveSection(currentSection?.elementId ?? null);
  }, [highlightItems]);

  React.useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="sticky top-0 z-50 w-full">
      <nav className="flex">
        <ol className="flex flex-row justify-center items-center max-w-6xl mx-auto px-6 py-4 gap-4">
          {highlightItems.map((item) => (
            <li key={item.elementId}>
              <a href={`#${item.elementId}`} className={`flex w-full flex-col items-center justify-center ${item.elementId === activeSection ? 'bg-sky-400' : ''}`}>
                {item.label}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}

export default StickyHighlightNav;