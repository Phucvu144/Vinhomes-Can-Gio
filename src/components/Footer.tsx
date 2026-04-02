import { Facebook, Instagram, Youtube, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-primary pt-20 pb-10 px-6 md:px-12 lg:px-24 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <div className="flex flex-col">
              <span className="text-3xl font-serif font-bold tracking-tighter leading-none text-white">
                VINHOMES
              </span>
              <span className="text-[10px] tracking-[0.2em] font-sans font-medium uppercase text-gold">
                Green Paradise Cần Giờ
              </span>
            </div>
            <p className="text-white/60 text-sm leading-relaxed">
              Dự án lấn biển quy mô 2.870ha, biểu tượng mới của sự thịnh vượng và đẳng cấp sống nghỉ dưỡng tại TP. Hồ Chí Minh.
            </p>
            <div className="flex items-center gap-4">
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-gold transition-all text-white">
                <Facebook size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-gold transition-all text-white">
                <Instagram size={20} />
              </a>
              <a href="#" className="p-2 rounded-full bg-white/10 hover:bg-gold transition-all text-white">
                <Youtube size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif text-gold border-b border-white/10 pb-2">Khám Phá</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#overview" className="hover:text-gold transition-colors">Tổng quan dự án</a></li>
              <li><a href="#location" className="hover:text-gold transition-colors">Vị trí chiến lược</a></li>
              <li><a href="#amenities" className="hover:text-gold transition-colors">Tiện ích đặc quyền</a></li>
              <li><a href="#products" className="hover:text-gold transition-colors">Sản phẩm tinh hoa</a></li>
              <li><a href="#contact" className="hover:text-gold transition-colors">Liên hệ tư vấn</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif text-gold border-b border-white/10 pb-2">Pháp Lý</h4>
            <ul className="space-y-3 text-sm text-white/60">
              <li><a href="#" className="hover:text-gold transition-colors">Chính sách bảo mật</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Điều khoản sử dụng</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Quy định giao dịch</a></li>
              <li><a href="#" className="hover:text-gold transition-colors">Câu hỏi thường gặp</a></li>
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="text-lg font-serif text-gold border-b border-white/10 pb-2">Liên Hệ</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li className="flex items-start gap-3">
                <Phone size={18} className="text-gold shrink-0" />
                <span className="font-sans">0399 182 294</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail size={18} className="text-gold shrink-0" />
                <span className="font-sans">vuquangphuc.it@gmail.com</span>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={18} className="text-gold shrink-0" />
                <span>Tầng 1, Vincom Mega Mall, Thảo Điền, Quận 2, TP. HCM</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-white/40 uppercase tracking-widest">
          <p>© 2026 Vinhomes Green Paradise Cần Giờ. All rights reserved.</p>
          <p>Phát triển bởi Đại lý TOP 1 Vinhomes miền Nam</p>
        </div>
      </div>
    </footer>
  );
}
