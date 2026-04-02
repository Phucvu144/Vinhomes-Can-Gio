import { motion } from 'motion/react';
import { Waves, Trees, Anchor, ShoppingBag, Utensils, HeartPulse } from 'lucide-react';

const amenities = [
  {
    icon: <Waves size={32} />,
    title: 'Biển hồ nước mặn',
    description: 'Trải nghiệm biển xanh cát trắng ngay trước thềm nhà với quy mô hàng chục hecta.',
  },
  {
    icon: <Trees size={32} />,
    title: 'Công viên ven biển',
    description: 'Hệ thống công viên chủ đề, khu vui chơi giải trí VinWonders quy mô quốc tế.',
  },
  {
    icon: <Anchor size={32} />,
    title: 'Bến du thuyền',
    description: 'Nơi neo đậu của những du thuyền sang trọng, khẳng định đẳng cấp chủ nhân.',
  },
  {
    icon: <ShoppingBag size={32} />,
    title: 'TTTM Vincom Mega Mall',
    description: 'Thiên đường mua sắm với hàng ngàn thương hiệu cao cấp từ khắp thế giới.',
  },
  {
    icon: <Utensils size={32} />,
    title: 'Ẩm thực 5 sao',
    description: 'Chuỗi nhà hàng cao cấp với tinh hoa ẩm thực Á - Âu đa dạng và phong phú.',
  },
  {
    icon: <HeartPulse size={32} />,
    title: 'Bệnh viện Vinmec',
    description: 'Dịch vụ chăm sóc sức khỏe tiêu chuẩn quốc tế, an tâm tận hưởng cuộc sống.',
  },
];

export default function Amenities() {
  return (
    <section id="amenities" className="section-padding luxury-gradient relative overflow-hidden">
      {/* Decorative Background */}
      <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-gold rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold rounded-full blur-[120px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
          <span className="text-gold font-bold tracking-widest uppercase text-xs">Tiện ích đặc quyền</span>
          <h2 className="text-4xl md:text-5xl font-serif text-white">
            Sống trọn từng khoảnh khắc <br />
            <span className="italic font-normal text-gold">Giữa thiên đường nghỉ dưỡng</span>
          </h2>
          <p className="text-white/70 leading-relaxed">
            Hệ sinh thái tiện ích "All-in-one" tiêu chuẩn quốc tế, đáp ứng mọi nhu cầu từ nghỉ dưỡng, vui chơi giải trí đến chăm sóc sức khỏe và giáo dục.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {amenities.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group p-8 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-md hover:bg-white/10 hover:border-gold/30 transition-all duration-500"
            >
              <div className="mb-6 text-gold group-hover:scale-110 transition-transform duration-500">
                {item.icon}
              </div>
              <h3 className="text-2xl font-serif text-white mb-4 group-hover:text-gold transition-colors">
                {item.title}
              </h3>
              <p className="text-white/60 leading-relaxed text-sm">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>

        {/* Featured Amenity Image */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="mt-20 rounded-3xl overflow-hidden shadow-2xl relative h-[400px] md:h-[500px]"
        >
          <img
            src="https://picsum.photos/seed/can-gio-amenity/1600/900"
            alt="Vinhomes Cần Giờ Amenity"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex items-end p-12">
            <div className="max-w-2xl">
              <h4 className="text-3xl font-serif text-white mb-2">VinWonders Cần Giờ</h4>
              <p className="text-white/80">Công viên chủ đề quy mô hàng đầu khu vực, điểm đến của những niềm vui bất tận.</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
