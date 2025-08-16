import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

export default function ClientsTestimonials() {
  const logos = [
    "https://softdreams.vn/wp-content/uploads/2023/11/TAL-HOSPITALITY-1.png",
    "https://softdreams.vn/wp-content/uploads/2023/11/lawforlife.png",
    "https://softdreams.vn/wp-content/uploads/2023/11/go-duc-thanh-1.png",
    "https://softdreams.vn/wp-content/uploads/2023/11/3.png",
    "https://softdreams.vn/wp-content/uploads/2023/11/tynama.png",
    "https://softdreams.vn/wp-content/uploads/2023/11/ha-co.png",
  ];

  const testimonials = [
    {
      img: "https://softdreams.vn/wp-content/uploads/2023/11/TAL-HOSPITALITY-1.png",
      text: "Chúng tôi khách giá cao về phong cách làm việc tận tình, nhanh chóng và kịp thời của đội ngũ Softdreams.",
      author: "Phan Thị Vân Anh",
      position: "Kế toán tổng hợp - Tal Hospitality",
    },
    {
      img: "https://softdreams.vn/wp-content/uploads/2023/11/lawforlife.png",
      text: "Softdreams là đơn vị uy tín hàng đầu về phần mềm và dịch vụ hỗ trợ DN hiệu quả. Nhân viên thân thiện, nhiệt tình.",
      author: "Lê Hoa",
      position: "Quản lý - Law for Life",
    },
    {
      img: "https://softdreams.vn/wp-content/uploads/2023/11/go-duc-thanh-1.png",
      text: "Chúng tôi đánh giá cao sự hỗ trợ chăm sóc khách hàng tận tình và chi phí hợp lý, phần mềm dễ dùng.",
      author: "Bùi Phương Thảo",
      position: "Giám đốc tài chính - Gỗ Đức Thành",
    },
  ];

  return (
    <section id="clients-testimonials" className="py-16 bg-white">
      {/* Logo đối tác */}
     
      

      {/* Testimonials */}
      <div className="text-center mb-10">
        <h2 className="text-2xl md:text-3xl font-bold">
          Khách hàng nói gì về <span className="text-blue-600">Softdreams</span>
        </h2>
      </div>
      <div className="px-6 md:px-16">
        <Swiper
          modules={[Autoplay, Pagination]}
          spaceBetween={30}
          slidesPerView={1}
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((item, idx) => (
            <SwiperSlide key={idx}>
              <div className="bg-gray-50 rounded-2xl p-6 shadow hover:shadow-md transition h-full flex flex-col">
                <div className="flex items-center gap-4 mb-4">
                  <img
                    src={item.img}
                    alt={item.author}
                    className="w-12 h-12 object-contain"
                  />
                  <div>
                    <p className="font-semibold">{item.author}</p>
                    <p className="text-sm text-gray-500">{item.position}</p>
                  </div>
                </div>
                <p className="text-gray-700 text-sm leading-relaxed flex-1">
                  “{item.text}”
                </p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
