import { motion } from 'motion/react';
import { MapPin, Navigation, Clock, Globe } from 'lucide-react';

const locationHighlights = [
  {
    icon: <Navigation className="text-gold" />,
    title: 'Kết nối thuận tiện',
    description: 'Chỉ 45-60 phút di chuyển từ trung tâm Quận 1 qua cầu Cần Giờ (sắp khởi công).',
  },
  {
    icon: <Clock className="text-gold" />,
    title: 'Tiết kiệm thời gian',
    description: 'Tương lai gần với tuyến Metro số 4 kết nối trực tiếp đến khu đô thị.',
  },
  {
    icon: <Globe className="text-gold" />,
    title: 'Tầm vóc quốc tế',
    description: 'Cửa ngõ giao thương đường thủy quốc tế với bến du thuyền đẳng cấp.',
  },
];

export default function Location() {
  return (
    <section id="location" className="section-padding bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16 space-y-4">
          <span className="text-accent font-bold tracking-widest uppercase text-xs">Vị trí chiến lược</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary">
            Tâm điểm kết nối <br />
            <span className="italic font-normal">Giữa lòng vịnh biển</span>
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Tọa lạc tại xã Long Hòa và thị trấn Cần Thạnh, huyện Cần Giờ, TP. HCM. Đây là vị trí "vàng" duy nhất tại TP. HCM sở hữu đường bờ biển dài 13km, mở ra không gian sống nghỉ dưỡng tuyệt vời.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Map Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-2 relative h-[400px] md:h-[500px] rounded-3xl overflow-hidden shadow-2xl group"
          >
            <img
              src="https://picsum.photos/seed/can-gio-map/1200/800"
              alt="Vinhomes Cần Giờ Location Map"
              className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-primary/10 group-hover:bg-transparent transition-colors duration-500" />
            
            {/* Map Pin Overlay */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="bg-white p-4 rounded-full shadow-2xl border-4 border-gold"
              >
                <MapPin className="text-accent" size={32} />
              </motion.div>
            </div>
          </motion.div>

          {/* Highlights */}
          <div className="flex flex-col justify-center space-y-6">
            {locationHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 rounded-2xl bg-sand/50 border border-gold/10 hover:border-gold/30 hover:bg-white hover:shadow-xl transition-all group"
              >
                <div className="mb-4 p-3 bg-white rounded-xl w-fit shadow-sm group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-serif text-primary mb-2">{item.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
