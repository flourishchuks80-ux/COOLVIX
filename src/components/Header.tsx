import { Menu, X, ChevronDown, Fan, MessageCircleCode } from 'lucide-react';
import { useState } from 'react';

interface HeaderProps {
  onQuoteClick: () => void;
  onAboutClick: () => void;
  onServicesClick: () => void;
}

export default function Header({ onQuoteClick, onAboutClick, onServicesClick }: HeaderProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [activeItem, setActiveItem] = useState('Home');

  const menuItems = [
    { name: 'Home', href: '#home', hasDropdown: false },
    { name: 'About', href: '#about', hasDropdown: false, action: onAboutClick },
    { name: 'Service', href: '#services', hasDropdown: true, action: onServicesClick },
    { name: 'Blog', href: '#blog', hasDropdown: false },
    { name: 'Project', href: '#projects', hasDropdown: true },
    { name: 'Pages', href: '#pages', hasDropdown: true },
    { name: 'Contact', href: '#contact', hasDropdown: false },
  ];

  const handleItemClick = (item: typeof menuItems[0]) => {
    setActiveItem(item.name);
    setIsOpen(false);
    if (item.action) {
      item.action();
    }
  };

  return (
    <header className="absolute top-0 inset-x-0 z-40 bg-black/35 backdrop-blur-xs border-b border-white/10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-20 items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center gap-2.5">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-brand-primary text-brand-dark shadow-md animate-spin-slow">
              <Fan className="h-5.5 w-5.5" strokeWidth={2.5} />
            </div>
            <span className="font-sans font-black text-xl tracking-wider text-white">
              COOLVIX
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-8">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.action) e.preventDefault();
                  handleItemClick(item);
                }}
                className={`group flex items-center gap-1 font-sans text-[13px] font-bold tracking-wide uppercase transition duration-150 ${
                  activeItem === item.name
                    ? 'text-brand-primary'
                    : 'text-gray-200 hover:text-brand-primary'
                }`}
              >
                {item.name}
                {item.hasDropdown && (
                  <ChevronDown className="h-3.5 w-3.5 text-gray-400 group-hover:text-brand-primary transition-colors" />
                )}
              </a>
            ))}
          </nav>

          {/* Call-to-Action button */}
          <div className="hidden lg:flex items-center">
            <button
              onClick={onQuoteClick}
              className="flex items-center gap-2 rounded-sm bg-[#FFC107] px-6 py-3 font-sans text-xs font-extrabold tracking-widest uppercase text-brand-dark transition hover:bg-yellow-500 hover:shadow-lg hover:shadow-brand-primary/10 active:scale-97 cursor-pointer"
            >
              Get A Quote ↗
            </button>
          </div>

          {/* Mobile menu trigger */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-gray-300 hover:bg-white/10 hover:text-white transition"
            >
              {isOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Menu Panel */}
      {isOpen && (
        <div className="lg:hidden bg-[#1A1D20]/95 border-b border-white/10 backdrop-blur-md animate-fade-in">
          <div className="space-y-1.5 px-4 pt-3 pb-6 sm:px-6">
            {menuItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={(e) => {
                  if (item.action) e.preventDefault();
                  handleItemClick(item);
                }}
                className={`block rounded-md px-3 py-2.5 font-sans text-sm font-bold tracking-wider uppercase transition ${
                  activeItem === item.name
                    ? 'bg-brand-primary text-brand-dark'
                    : 'text-gray-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                <div className="flex items-center justify-between">
                  <span>{item.name}</span>
                  {item.hasDropdown && <ChevronDown className="h-4 w-4 opacity-50" />}
                </div>
              </a>
            ))}
            <div className="border-t border-white/5 pt-4 mt-4">
              <button
                onClick={() => {
                  setIsOpen(false);
                  onQuoteClick();
                }}
                className="flex w-full items-center justify-center gap-2 rounded bg-[#FFC107] py-3 font-sans text-xs font-extrabold tracking-widest uppercase text-brand-dark shadow transition hover:bg-yellow-500"
              >
                Get A Quote ↗
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
