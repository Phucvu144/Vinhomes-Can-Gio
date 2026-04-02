import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle, Copy, QrCode } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [transactionCode, setTransactionCode] = useState('');
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    product: 'Chọn loại hình sản phẩm',
    message: ''
  });

  const generateTransactionCode = () => {
    const randomNum = Math.floor(100000 + Math.random() * 900000);
    return `BDS${randomNum}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    const code = generateTransactionCode();
    setTransactionCode(code);

    // THAY URL MỚI NHẤT CỦA BẠN VÀO ĐÂY SAU KHI DEPLOY LẠI
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbz69cdQb8zH7S5Fv6bLeBWptIz4JpwkHWbuJfDdjXMJt7mGbxRALTtAmIkSmH77LGUQ7Q/exec";

    try {
      // Chuyển data sang URLSearchParams để Apps Script đọc được e.parameter
      const searchParams = new URLSearchParams();
      searchParams.append('name', formData.fullName);
      searchParams.append('phone', formData.phone);
      searchParams.append('email', formData.email);
      searchParams.append('interest', formData.product);
      searchParams.append('message', formData.message);
      searchParams.append('transactionCode', code); // Gửi kèm mã giao dịch để đối soát

      await fetch(WEB_APP_URL, {
        method: 'POST',
        mode: 'no-cors', // Cần thiết cho Apps Script
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: searchParams.toString()
      });
      
      setIsSuccess(true);
      setFormData({ fullName: '', phone: '', email: '', product: 'Chọn loại hình sản phẩm', message: '' });
    } catch (error) {
      console.error("Lỗi gửi form:", error);
      alert("Có lỗi xảy ra, vui lòng thử lại sau.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    alert('Đã sao chép mã giao dịch!');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const qrUrl = `https://qr.sepay.vn/img?bank=MB&acc=0399182294&template=compact&amount=19000&des=${transactionCode}`;

  return (
    <section id="contact" className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left: Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-12"
          >
            <div className="space-y-4">
              <span className="text-orange-600 font-bold tracking-widest uppercase text-xs">Liên hệ tư vấn</span>
              <h2 className="text-4xl md:text-5xl font-serif text-slate-900">
                Đăng ký nhận thông tin <br />
                <span className="italic font-normal">Sớm nhất từ Chủ đầu tư</span>
              </h2>
              <p className="text-gray-600 leading-relaxed max-w-lg">
                Để lại thông tin để nhận trọn bộ tài liệu dự án, bảng giá chi tiết và các chính sách ưu đãi đặc quyền.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-orange-50 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Hotline 24/7</p>
                  <p className="text-xl font-sans text-slate-900">0399 182 294</p>
                </div>
              </div>
              <div className="flex items-center gap-6 group">
                <div className="p-4 bg-orange-50 rounded-2xl text-orange-600 group-hover:bg-orange-600 group-hover:text-white transition-all duration-500">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-xs text-gray-400 uppercase tracking-widest font-bold">Email hỗ trợ</p>
                  <p className="text-xl font-sans text-slate-900">vuquangphuc.it@gmail.com</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Form / Payment */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="p-10 rounded-[40px] bg-orange-50/50 border border-orange-200/20 shadow-2xl relative"
          >
            {isSuccess ? (
              <motion.div 
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="text-center space-y-6"
              >
                <div className="flex justify-center">
                  <div className="bg-green-100 p-3 rounded-full">
                    <CheckCircle size={48} className="text-green-600" />
                  </div>
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-serif text-slate-900">Đăng ký thành công!</h3>
                  <p className="text-gray-600 text-sm">Vui lòng hoàn tất thanh toán để nhận bộ tài liệu.</p>
                </div>

                <div className="bg-white p-6 rounded-3xl shadow-inner space-y-4 border border-orange-100">
                  <div className="flex flex-col items-center gap-4">
                    <div className="relative group">
                      <img 
                        src={qrUrl} 
                        alt="QR Thanh Toán" 
                        className="w-48 h-48 rounded-xl shadow-md border-4 border-white"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute -bottom-2 -right-2 bg-primary text-white p-2 rounded-lg shadow-lg">
                        <QrCode size={16} />
                      </div>
                    </div>
                    
                    <div className="space-y-1 text-center">
                      <p className="text-xs text-gray-400 uppercase font-bold tracking-widest">Số tiền cần thanh toán</p>
                      <p className="text-3xl font-sans font-bold text-orange-600">19.000đ</p>
                    </div>

                    <div className="w-full pt-4 border-t border-gray-100 space-y-3">
                      <div className="flex items-center justify-between bg-orange-50 p-3 rounded-xl">
                        <div className="text-left">
                          <p className="text-[10px] text-gray-400 uppercase font-bold">Nội dung chuyển khoản</p>
                          <p className="text-lg font-mono font-bold text-slate-900">{transactionCode}</p>
                        </div>
                        <button 
                          onClick={() => copyToClipboard(transactionCode)}
                          className="p-2 hover:bg-orange-200 rounded-lg transition-colors text-orange-600"
                          title="Sao chép mã"
                        >
                          <Copy size={20} />
                        </button>
                      </div>
                      <p className="text-[10px] text-gray-400 italic">
                        * Hệ thống sẽ tự động xác nhận sau khi nhận được thanh toán.
                      </p>
                    </div>
                  </div>
                </div>

                <button 
                  onClick={() => setIsSuccess(false)} 
                  className="text-orange-600 font-bold uppercase text-xs hover:underline tracking-widest"
                >
                  Quay lại trang chủ
                </button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Họ và tên</label>
                    <input required type="text" name="fullName" value={formData.fullName} onChange={handleChange} placeholder="Nguyễn Văn A" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 outline-none focus:border-orange-400" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Số điện thoại</label>
                    <input required type="tel" name="phone" value={formData.phone} onChange={handleChange} placeholder="0399 182 294" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 outline-none focus:border-orange-400" />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Email</label>
                  <input required type="email" name="email" value={formData.email} onChange={handleChange} placeholder="email@example.com" className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 outline-none focus:border-orange-400" />
                </div>
                <div className="space-y-2">
                  <label className="text-xs font-bold text-gray-500 uppercase tracking-widest ml-1">Nhu cầu quan tâm</label>
                  <select name="product" value={formData.product} onChange={handleChange} className="w-full px-6 py-4 rounded-2xl bg-white border border-gray-100 outline-none focus:border-orange-400">
                    <option disabled>Chọn loại hình sản phẩm</option>
                    <option>Biệt thự đơn lập</option>
                    <option>Biệt thự song lập</option>
                    <option>Shophouse</option>
                    <option>Căn hộ cao cấp</option>
                  </select>
                </div>
                <div className="pt-2">
                  <p className="text-xs text-gray-400 mb-4 italic">
                    Phí đăng ký tài liệu: <span className="text-orange-600 font-bold">19.000đ</span> (Thanh toán qua QR sau khi gửi thông tin)
                  </p>
                  <button disabled={isSubmitting} type="submit" className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm disabled:opacity-70">
                    {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                    {isSubmitting ? 'Đang xử lý...' : 'Gửi & Thanh Toán'}
                  </button>
                </div>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
