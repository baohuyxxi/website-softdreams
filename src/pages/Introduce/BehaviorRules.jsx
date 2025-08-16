export default function BehaviorRules() {
  return (
    <section id="sdsc_behavior_rules" className="mb-40">
      {/* Banner */}
      <div className="container mx-auto px-4">
        <div className="relative flex flex-col items-center">
          <img
            src="https://softdreams.vn/wp-content/uploads/2023/11/Group-2609279.png"
            alt="Behavior Rules Banner"
            className="w-full max-w-5xl"
          />
          <a
            href="#"
            className="absolute bottom-6 right-6 bg-white shadow-md rounded-full flex items-center px-6 py-2 text-sm font-semibold hover:bg-gray-100 transition"
          >
            Xem thêm
            <img
              src="https://softdreams.vn/wp-content/uploads/2023/11/Group-2609256.png"
              alt="arrow"
              className="ml-2 w-4"
            />
          </a>
        </div>

        {/* Mission */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          <div>
            <h3 className="text-2xl font-bold text-[#EF5627] mb-4">Sứ mệnh</h3>
            <p className="text-gray-700 leading-relaxed text-sm md:text-base">
              <span className="font-semibold">Sứ mệnh của Softdreams</span> là
              giúp <span className="italic">“Nâng tầm quản trị doanh nghiệp”</span>{" "}
              thông qua những giải pháp đơn giản hóa công nghệ thông tin.
              <br />
              <br />
              Mang đến các doanh nghiệp SMEs, cá nhân - hộ kinh doanh giải pháp
              chuẩn hóa toàn bộ hệ thống, tối ưu quản trị; đồng thời giúp các
              doanh nghiệp, tập đoàn lớn sở hữu hệ thống quản lý quản trị tiên
              tiến, thông suốt mang tầm thế giới.
            </p>
          </div>
          <div className="flex justify-center">
            <img
              src="https://softdreams.vn/wp-content/uploads/2023/11/Group-2609257-2.png"
              alt="Mission"
              className="max-w-sm md:max-w-md w-full"
            />
          </div>
        </div>
      </div>

      {/* Vision */}
      <div className="bg-[#FDEEE9] py-20 mt-20">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            <div className="flex justify-center">
              <img
                src="https://softdreams.vn/wp-content/uploads/2023/12/Subtract.png"
                alt="Vision"
                className="max-w-sm md:max-w-md w-full"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-[#EF5627] mb-4">Tầm nhìn</h3>
              <p className="text-gray-700 leading-relaxed text-sm md:text-base">
                Softdreams nuôi trong mình khát vọng trở thành tập đoàn công nghệ
                thông tin hùng mạnh, gây dựng giá trị nội tại cho quê hương, đất
                nước bằng việc đem giá trị trí tuệ nhân loại phục vụ người Việt và
                thế giới. Khi đủ tầm vóc, Softdreams tự tin sánh vai với các tập
                đoàn hàng đầu thế giới để gắn tên mình trên bản đồ CNTT toàn cầu.
                <br />
                <br />
                Chúng tôi đặt mục tiêu trở thành công ty công nghệ thông tin đứng
                đầu tại Việt Nam đến năm 2030 và vươn tầm thế giới năm 2040.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
