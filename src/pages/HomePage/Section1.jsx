import { ArrowRight } from "lucide-react";
import Counter from "~/components/Counter/Counter";
export default function Section1() {
  const stats = [
    {
      img: "https://softdreams.vn/wp-content/themes/softdreams/assets/img/header-box-icon1.png",
      number: 13,
      suffix: "+",
      text: <>Năm kinh nghiệm <br /> trong lĩnh vực CNTT</>,
    },
    {
      img: "https://softdreams.vn/wp-content/themes/softdreams/assets/img/header-box-icon2.png",
      number: 400,
      suffix: "+",
      text: <>Nhân sự làm việc <br /> tại Hà Nội và Hồ Chí Minh</>,
    },
    {
      img: "https://softdreams.vn/wp-content/themes/softdreams/assets/img/header-box-icon3.png",
      number: 6000,
      suffix: "+",
      text: <>Đại lý &amp; CTV <br /> trên toàn quốc</>,
    },
    {
      img: "https://softdreams.vn/wp-content/themes/softdreams/assets/img/header-box-icon4.png",
      number: 350000,
      suffix: "+",
      text: <>Doanh nghiệp &amp; Hộ kinh doanh <br /> tin dùng sản phẩm</>,
    },
  ];

  return (
    <section
      id="sec1"
      className="section-gap relative bg-cover bg-center bg-no-repeat text-white"
      style={{
        backgroundImage:
          "url('https://softdreams.vn/wp-content/themes/softdreams/assets/img/banner.png')",
      }}
    >
      <div className="container mx-auto px-4 relative z-10">
        <div data-aos="fade-right" className="text-3xl md:text-5xl font-bold mb-4">
          Chuyển đổi số <br /> QUẢN TRỊ DOANH NGHIỆP
        </div>

        <div data-aos="fade-left" className="text-base md:text-lg mb-8">
          Chúng tôi cung cấp hệ sinh thái phần mềm giúp doanh nghiệp <br />
          dễ dàng chuyển đổi số quản trị và vận hành
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12" data-aos="fade-up">
          {stats.map((item, i) => (
            <div
              key={i}
              className="flex flex-col items-center text-center bg-black/30 p-4 rounded-xl"
            >
              <img src={item.img} alt="" className="w-12 h-12 mb-3" />
              <div className="text-2xl font-bold">
                <Counter target={item.number} />
                {item.suffix}
              </div>
              <div className="text-sm">{item.text}</div>
            </div>
          ))}
        </div>

        {/* Slogan */}
        <div data-aos="zoom-in" className="bg-black/40 p-6 rounded-xl">
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <div className="text-2xl font-bold">
                SOFTDREAMS
                <hr className="border-t border-white my-2" />
                Nâng tầm quản trị doanh nghiệp
              </div>
            </div>
            <div className="text-base leading-relaxed">
              Softdreams là công ty công nghệ chuyên cung cấp các phần mềm thông minh giúp
              tự động hóa trong quản trị doanh nghiệp. Với hơn 11 năm kinh nghiệm, công ty
              đã phát triển thành công 12+ sản phẩm trong hệ sinh thái gồm: EasyInvoice,
              EasyCA, EasyBooks, EasyHRM, EasyPos, EasyDocs, EasyTransport, EasyPIT,
              EasyTicket, EasyKYC,...
              <a
                href="https://softdreams.vn/cong-ty"
                className="mt-4 inline-flex items-center gap-2 text-blue-400 hover:underline"
              >
                Đọc thêm <i className="fa-solid fa-arrow-right"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
      {/* overlay để dễ đọc chữ trên ảnh */}
      <div className="absolute inset-0 bg-black/40"></div>
    </section>
  );
}