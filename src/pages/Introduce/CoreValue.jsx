export default function CoreValue() {
  return (
    <section id="sdsc_core_value" className="py-16">
      {/* Title */}
      <h2 className="text-center text-3xl md:text-4xl font-bold">
        Giá trị <span className="text-[#EF5627]">cốt lõi</span>
      </h2>

      {/* Image */}
      <div className="flex justify-center my-10">
        <img
          src="https://softdreams.vn/wp-content/uploads/2023/11/Group-2609306.png"
          alt="Core Value Banner"
          className="w-full max-w-4xl"
        />
      </div>

      {/* Core Values */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Dễ dùng */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-[#EF5627] mb-4">
              Dễ dùng
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Softdreams đã và đang bằng mọi nỗ lực nghiên cứu chuyên môn nghiệp
              vụ, khoa học công nghệ để triển sản phẩm, mang đến người dùng trải
              nghiệm dễ dàng, thân thiện và tiện ích nhất.
            </p>
          </div>

          {/* Tin tưởng */}
          <div className="flex flex-col items-center text-center mt-10 md:mt-0">
            <h3 className="text-xl font-semibold text-[#EF5627] mb-4">
              Tin tưởng
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Xây dựng niềm tin vững chắc cho khách hàng vào con người, tổ chức
              và những sản phẩm dịch vụ công ty mang lại, tạo tiền đề đảm bảo
              thành công của tổ chức khi sử dụng giải pháp của Softdreams.
            </p>
          </div>

          {/* Lắng nghe */}
          <div className="flex flex-col items-center text-center">
            <h3 className="text-xl font-semibold text-[#EF5627] mb-4">
              Lắng nghe
            </h3>
            <p className="text-gray-700 text-sm md:text-base leading-relaxed">
              Chúng tôi luôn lắng nghe mọi ý kiến đóng góp của khách hàng, nắm
              bắt xu hướng phát triển của khoa học công nghệ cũng như thị trường
              nhằm đưa ra sản phẩm dịch vụ tiên phong, trở thành cánh tay hỗ trợ
              đắc lực cho doanh nghiệp.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
