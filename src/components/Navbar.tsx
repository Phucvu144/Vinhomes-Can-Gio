import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { cn } from '@/lib/utils';

const navLinks = [
  { name: 'Tổng Quan', href: '#overview' },
  { name: 'Vị Trí', href: '#location' },
  { name: 'Tiện Ích', href: '#amenities' },
  { name: 'Sản Phẩm', href: '#products' },
  { name: 'Liên Hệ', href: '#contact' },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 w-full z-50 transition-all duration-500 px-6 md:px-12 py-4',
        isScrolled ? 'bg-white/95 backdrop-blur-md shadow-md py-3' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="flex flex-col">
          <span className={cn(
            "text-2xl font-serif font-bold tracking-tighter leading-none",
            isScrolled ? "text-primary" : "text-white"
          )}>
            VINHOMES
          </span>
          <span className={cn(
            "text-[10px] tracking-[0.2em] font-sans font-medium uppercase",
            isScrolled ? "text-accent" : "text-gold"
          )}>
            Green Paradise Cần Giờ
          </span>
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className={cn(
                "text-sm font-medium tracking-wide uppercase transition-colors hover:text-accent",
                isScrolled ? "text-gray-700" : "text-white/90"
              )}
            >
              {link.name}
            </a>
          ))}
          <a
            href="tel:0399182294"
            className={cn(
              "flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-sans font-bold transition-all",
              isScrolled 
                ? "bg-primary text-white hover:bg-primary-light shadow-lg" 
                : "bg-white/20 backdrop-blur-md text-white border border-white/30 hover:bg-white/30"
            )}
          >
            <Phone size={16} />
            0399 182 294
          </a>
        </div>

        {/* Mobile Toggle */}
        <button
          className={cn("md:hidden p-2", isScrolled ? "text-primary" : "text-white")}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white absolute top-full left-0 w-full shadow-xl overflow-hidden"
          >
            <div className="flex flex-col p-6 space-y-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="text-lg font-medium text-gray-800 hover:text-accent py-2 border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  {link.name}
                </a>
              ))}
              <a
                href="tel:0399182294"
                className="flex items-center justify-center gap-2 bg-primary text-white py-4 rounded-xl font-sans font-bold"
              >
                <Phone size={18} />
                Hotline: 0399 182 294
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
