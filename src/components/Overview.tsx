import { motion } from 'motion/react';
import { CheckCircle2 } from 'lucide-react';

const projectDetails = [
  { label: 'Tên dự án', value: 'Vinhomes Green Paradise Cần Giờ' },
  { label: 'Vị trí', value: 'Xã Long Hòa & Thị trấn Cần Thạnh, H. Cần Giờ, TP. HCM' },
  { label: 'Chủ đầu tư', value: 'Tập đoàn Vingroup (Vinhomes)' },
  { label: 'Quy mô', value: '2.870 ha (Lấn biển)' },
  { label: 'Tổng mức đầu tư', value: 'Hơn 217.000 tỷ đồng' },
  { label: 'Loại hình sản phẩm', value: 'Biệt thự, Shophouse, Căn hộ, Condotel, Khách sạn' },
  { label: 'Pháp lý', value: 'Sở hữu lâu dài' },
  { label: 'Khởi công', value: 'Dự kiến 2024 - 2025' },
];

export default function Overview() {
  return (
    <section id="overview" className="section-padding bg-sand/30 overflow-hidden">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        {/* Left: Image Grid */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative grid grid-cols-2 gap-4"
        >
          <div className="space-y-4 pt-12">
            <img
              src="https://picsum.photos/seed/can-gio-1/600/800"
              alt="Vinhomes Cần Giờ Overview 1"
              className="w-full h-[300px] object-cover rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <img
              src="https://picsum.photos/seed/can-gio-2/600/400"
              alt="Vinhomes Cần Giờ Overview 2"
              className="w-full h-[200px] object-cover rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="space-y-4">
            <img
              src="https://picsum.photos/seed/can-gio-3/600/400"
              alt="Vinhomes Cần Giờ Overview 3"
              className="w-full h-[200px] object-cover rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
            <img
              src="https://picsum.photos/seed/can-gio-4/600/800"
              alt="Vinhomes Cần Giờ Overview 4"
              className="w-full h-[300px] object-cover rounded-2xl shadow-2xl"
              referrerPolicy="no-referrer"
            />
          </div>
          
          {/* Decorative Element */}
          <div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gold/5 rounded-full blur-3xl" />
        </motion.div>

        {/* Right: Content */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          <div className="space-y-4">
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Tổng quan dự án</span>
            <h2 className="text-4xl md:text-5xl font-serif leading-tight text-primary">
              Thiên đường nghỉ dưỡng <br />
              <span className="italic font-normal">Xanh & Đẳng cấp</span>
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg">
              Vinhomes Green Paradise Cần Giờ không chỉ là một dự án bất động sản, mà là một biểu tượng mới của sự thịnh vượng. Với quy mô lấn biển khổng lồ, dự án hứa hẹn mang đến một không gian sống hoàn mỹ, kết hợp hài hòa giữa thiên nhiên hoang sơ và tiện ích hiện đại bậc nhất thế giới.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4 border-t border-gold/20 pt-8">
            {projectDetails.map((item) => (
              <div key={item.label} className="flex items-start gap-3">
                <CheckCircle2 className="text-gold mt-1 shrink-0" size={18} />
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-wider font-bold">{item.label}</p>
                  <p className="text-gray-800 font-medium">{item.value}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-4">
            <button className="px-8 py-4 bg-primary text-white font-bold rounded-full hover:bg-primary-light transition-all shadow-xl shadow-primary/20 tracking-wide uppercase text-sm">
              Tải Brochure Chi Tiết
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
