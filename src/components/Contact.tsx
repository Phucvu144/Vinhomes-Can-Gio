import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin, Send, Loader2, CheckCircle } from 'lucide-react';

export default function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    fullName: '',
    phone: '',
    email: '',
    product: 'Chọn loại hình sản phẩm',
    message: ''
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // THAY URL MỚI NHẤT CỦA BẠN VÀO ĐÂY SAU KHI DEPLOY LẠI
    const WEB_APP_URL = "https://script.google.com/macros/s/AKfycbynWO7jlhkLDf5CAcZjH459tKfTvqzfedlPKVOEDueu3-ghK2WOFRv_zjlh3yBSysFU-g/exec";

    try {
      // Chuyển data sang URLSearchParams để Apps Script đọc được e.parameter
      const searchParams = new URLSearchParams();
      searchParams.append('name', formData.fullName);
      searchParams.append('phone', formData.phone);
      searchParams.append('email', formData.email);
      searchParams.append('interest', formData.product);
      searchParams.append('message', formData.message);

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

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

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

          {/* Right: Form */}
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
                className="text-center py-12 space-y-6"
              >
                <div className="flex justify-center">
                  <CheckCircle size={80} className="text-green-600" />
                </div>
                <h3 className="text-3xl font-serif text-slate-900">Gửi thành công!</h3>
                <p className="text-gray-600">Chúng tôi sẽ liên hệ với bạn trong thời gian sớm nhất.</p>
                <button onClick={() => setIsSuccess(false)} className="text-orange-600 font-bold uppercase text-sm hover:underline">
                  Gửi yêu cầu khác
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
                <button disabled={isSubmitting} type="submit" className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-slate-800 transition-all flex items-center justify-center gap-3 uppercase tracking-widest text-sm disabled:opacity-70">
                  {isSubmitting ? <Loader2 className="animate-spin" size={18} /> : <Send size={18} />}
                  {isSubmitting ? 'Đang gửi...' : 'Gửi Yêu Cầu Tư Vấn'}
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}