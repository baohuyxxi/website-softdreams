export default function SomethingAbout() {
  return (
    <section id="sdsc_something_about_sds" className="py-8 bg-gray-50 px-12">
      <div className="text-center mb-6 px-4">
        <h2 className="text-lg md:text-xl font-bold">
          Đôi nét về <span className="text-blue-600">Softdreams</span>
        </h2>
      </div>

      <div className="container mx-auto max-w-5xl px-12 md:px-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2 items-center">
          {/* Text */}
          <div className="text-gray-700 leading-relaxed text-xs md:text-sm">
            <span className="font-semibold text-blue-600">Softdreams</span> là
            công ty công nghệ chuyên cung cấp các phần mềm thông minh giúp tự
            động hóa trong quản trị doanh nghiệp. <br />
            <br />
            Với hơn <span className="font-semibold">11 năm kinh nghiệm</span>,
            công ty đã phát triển thành công{" "}
            <span className="font-semibold">12+ sản phẩm</span> trong hệ sinh
            thái gồm:{" "}
            <span className="text-blue-600">
              EasyInvoice, EasyCA, EasyBooks, EasyHRM, EasyPos, EasyDocs,
              EasyTransport, EasyPIT, EasyTicket, EasyKYC,...
            </span>
            <br />
            <br />
            Với phương châm đặt khách hàng làm trung tâm,{" "}
            <span className="font-semibold text-blue-600">Softdreams</span> hướng
            đến xây dựng sự tin tưởng của khách hàng vào sản phẩm tiện ích, dễ
            dùng cùng sự phục vụ chu đáo, luôn lắng nghe, thấu hiểu.
          </div>

          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://softdreams.vn/wp-content/uploads/2024/07/Group-2609320.png"
              alt="Softdreams"
              className="max-w-[70%] rounded-md shadow-sm"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
