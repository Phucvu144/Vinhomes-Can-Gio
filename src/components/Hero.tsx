import { motion } from 'motion/react';
import { ChevronDown } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[700px] w-full overflow-hidden flex items-center justify-center text-center px-6">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://picsum.photos/seed/can-gio-coastal/1920/1080?blur=2"
          alt="Vinhomes Cần Giờ Coastal View"
          className="w-full h-full object-cover scale-105"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/40 backdrop-blur-[2px]" />
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/60" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: 'easeOut' }}
          className="space-y-6"
        >
          <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-gold text-xs font-bold tracking-[0.3em] uppercase">
            Biểu tượng mới của TP. Hồ Chí Minh
          </span>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white leading-[1.1] tracking-tight">
            Vinhomes <br />
            <span className="italic font-normal text-gold">Green Paradise</span>
          </h1>
          
          <p className="text-lg md:text-xl text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Kiệt tác lấn biển quy mô 2.870ha - Nơi tinh hoa hội tụ giữa lòng vịnh biển Cần Giờ xanh ngát.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#contact"
              className="px-10 py-4 bg-gold hover:bg-accent text-white font-bold rounded-full transition-all shadow-xl shadow-gold/20 tracking-wide uppercase text-sm"
            >
              Nhận Bảng Giá & Ưu Đãi
            </motion.a>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              href="#overview"
              className="px-10 py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white/20 transition-all tracking-wide uppercase text-sm"
            >
              Khám Phá Dự Án
            </motion.a>
          </div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 z-10 text-white/50 cursor-pointer"
        onClick={() => document.getElementById('overview')?.scrollIntoView({ behavior: 'smooth' })}
      >
        <ChevronDown size={32} />
      </motion.div>

      {/* Floating Stats (Optional) */}
      <div className="absolute bottom-0 left-0 w-full hidden lg:block">
        <div className="max-w-7xl mx-auto px-12 py-10 grid grid-cols-3 border-t border-white/10 backdrop-blur-sm">
          <div className="text-center border-r border-white/10">
            <p className="text-3xl font-serif text-gold">2.870ha</p>
            <p className="text-xs text-white/60 uppercase tracking-widest mt-1">Quy mô dự án</p>
          </div>
          <div className="text-center border-r border-white/10">
            <p className="text-3xl font-serif text-gold">13km</p>
            <p className="text-xs text-white/60 uppercase tracking-widest mt-1">Đường bờ biển</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-serif text-gold">5 Phân Khu</p>
            <p className="text-xs text-white/60 uppercase tracking-widest mt-1">Đa dạng trải nghiệm</p>
          </div>
        </div>
      </div>
    </section>
  );
}
