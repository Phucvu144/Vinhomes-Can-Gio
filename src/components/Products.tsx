import { motion } from 'motion/react';
import { Home, Building2, Building, Hotel } from 'lucide-react';

const products = [
  {
    icon: <Home className="text-gold" size={24} />,
    title: 'Biệt thự đơn lập',
    description: 'Không gian sống riêng tư tuyệt đối, tầm nhìn trực diện biển xanh.',
    image: 'https://picsum.photos/seed/can-gio-villa-1/600/400',
    price: 'Từ 30 tỷ VNĐ',
  },
  {
    icon: <Home className="text-gold" size={24} />,
    title: 'Biệt thự song lập',
    description: 'Thiết kế hiện đại, tối ưu không gian sống cho gia đình trẻ.',
    image: 'https://picsum.photos/seed/can-gio-villa-2/600/400',
    price: 'Từ 20 tỷ VNĐ',
  },
  {
    icon: <Building2 className="text-gold" size={24} />,
    title: 'Shophouse thương mại',
    description: 'Vị trí đắc địa trên các trục đường chính, tiềm năng kinh doanh vượt trội.',
    image: 'https://picsum.photos/seed/can-gio-shophouse/600/400',
    price: 'Từ 15 tỷ VNĐ',
  },
  {
    icon: <Building className="text-gold" size={24} />,
    title: 'Căn hộ cao cấp',
    description: 'Căn hộ thông minh với tầm nhìn panorama ôm trọn vịnh biển.',
    image: 'https://picsum.photos/seed/can-gio-apartment/600/400',
    price: 'Từ 3 tỷ VNĐ',
  },
  {
    icon: <Hotel className="text-gold" size={24} />,
    title: 'Condotel & Khách sạn',
    description: 'Giải pháp đầu tư sinh lời bền vững tại thiên đường du lịch.',
    image: 'https://picsum.photos/seed/can-gio-hotel/600/400',
    price: 'Liên hệ',
  },
];

export default function Products() {
  return (
    <section id="products" className="section-padding bg-sand/30">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-8">
          <div className="max-w-2xl space-y-4">
            <span className="text-accent font-bold tracking-widest uppercase text-xs">Sản phẩm tinh hoa</span>
            <h2 className="text-4xl md:text-5xl font-serif text-primary">
              Đa dạng loại hình <br />
              <span className="italic font-normal">Xứng tầm vị thế chủ nhân</span>
            </h2>
          </div>
          <div className="flex gap-4">
            <button className="px-6 py-3 border border-primary text-primary font-bold rounded-full hover:bg-primary hover:text-white transition-all text-sm uppercase tracking-wide">
              Xem Mặt Bằng
            </button>
            <button className="px-6 py-3 bg-primary text-white font-bold rounded-full hover:bg-primary-light transition-all text-sm uppercase tracking-wide shadow-lg shadow-primary/20">
              Tải Bảng Giá
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={product.title}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-500 border border-gold/10"
            >
              <div className="relative h-64 overflow-hidden">
                <img
                  src={product.image}
                  alt={product.title}
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute top-4 left-4 px-4 py-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg flex items-center gap-2">
                  {product.icon}
                  <span className="text-xs font-bold text-primary uppercase tracking-wider">{product.title}</span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <h3 className="text-2xl font-serif text-primary">{product.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{product.description}</p>
                <div className="pt-4 flex items-center justify-between border-t border-gray-100">
                  <span className="text-accent font-sans font-bold text-lg">{product.price}</span>
                  <button className="text-primary font-bold text-sm uppercase tracking-widest hover:text-accent transition-colors">
                    Chi Tiết →
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
