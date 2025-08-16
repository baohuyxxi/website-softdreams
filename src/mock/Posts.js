const posts = [
  {
    title:
      "[ƯU ĐÃI ĐẶC BIỆT] Dành Riêng Cho Khách Hàng Mua Phần Mềm SoftDreams & Sử Dụng Dịch Vụ Thu Hộ BIDV",
    link: "https://softdreams.vn/uu-dai-dac-biet-danh-rieng-cho-khach-hang-mua-phan-mem-softdreams-su-dung-dich-vu-thu-ho-bidv/",
    img: "https://softdreams.vn/wp-content/uploads/2025/07/uu-dai-dac-biet-softdreams.jpg",
    desc: "SoftDreams phối hợp cùng Ngân hàng BIDV triển khai chương trình ưu đãi hấp dẫn dành riêng cho doanh nghiệp...",
    date: "21 Tháng 7, 2025",
  },
  {
    title:
      "Thư Mời Hợp Tác Trở Thành Cộng Tác Viên/ Đại Lý Của SoftDreams Trên Toàn Quốc",
    link: "https://softdreams.vn/thu-moi-hop-tac-tro-thanh-cong-tac-vien-dai-ly-cua-softdreams-tren-toan-quoc/",
    img: "https://softdreams.vn/wp-content/uploads/2025/06/sds-3.png",
    desc: "Kính gửi Quý Đối tác, Softdreams trân trọng cảm ơn Quý Đối tác đã đồng hành cùng chúng tôi...",
    date: "12 Tháng 6, 2025",
  },
  {
    title:
      "Lễ Công Bố Hợp Tác Giữa SoftDreams Và Standard Chartered Việt Nam – Bước Tiến Mới Cho Doanh Nghiệp Số",
    link: "https://softdreams.vn/le-cong-bo-hop-tac-giua-softdreams-va-standard-chartered-viet-nam-buoc-tien-moi-cho-doanh-nghiep-so/",
    img: "https://softdreams.vn/wp-content/uploads/2025/07/SC-198-–-Da-sua-–-Da-sua-–-Da-sua-scaled.jpg",
    desc: "Ngày 09/07/2025, SoftDreams chính thức ký kết thỏa thuận hợp tác chiến lược với Ngân hàng Standard Chartered Việt Nam...",
    date: "18 Tháng 7, 2025",
  },
  {
    title:
      "Thư Mời Hợp Tác Trở Thành Cộng Tác Viên/ Đại Lý Của SoftDreams Trên Toàn Quốc",
    link: "https://softdreams.vn/thu-moi-hop-tac-tro-thanh-cong-tac-vien-dai-ly-cua-softdreams-tren-toan-quoc/",
    img: "https://softdreams.vn/wp-content/uploads/2025/06/sds-3.png",
    desc: "Kính gửi Quý Đối tác, Softdreams trân trọng cảm ơn Quý Đối tác đã đồng hành cùng chúng tôi...",
    date: "12 Tháng 6, 2025",
  },
  {
    title: "Teambuilding 2025 SoftDreams: Chung Tầm Nhìn – Vượt Giới Hạn",
    link: "https://softdreams.vn/teambuilding-2025-softdreams-chung-tam-nhin-vuot-gioi-han/",
    img: "https://softdreams.vn/wp-content/uploads/2025/06/HVT04363-scaled.jpg",
    desc: "Từ ngày 23 đến 25/5/2025, tập thể SoftDreams đã cùng nhau chạm đến vùng đất Nghệ An đầy nắng gió...",
    date: "4 Tháng 6, 2025",
  },
  {
    title:
      "SoftDreams – EasyCA Tự Hào Là Nhà Cung Cấp Chữ Ký Số Trên Ứng Dụng VNeID",
    link: "https://softdreams.vn/softdreams-easyca-tu-hao-la-nha-cung-cap-chu-ky-so-tren-ung-dung-vneid/",
    img: "https://softdreams.vn/wp-content/uploads/2025/06/softdreams-easyca-tu-hao-la-nha-cung-cap-chu-ky-so-tren-ung-dung-vneid.png",
    desc: "Chiều ngày 22/5, tại Lễ công bố triển khai thí điểm “Cổng ký số tập trung trên nền tảng định danh và xác thực điện tử VNeID”...",
    date: "3 Tháng 6, 2025",
  },

  {
    title:
      "[ƯU ĐÃI ĐẶC BIỆT] Dành Riêng Cho Khách Hàng Mua Phần Mềm SoftDreams & Sử Dụng Dịch Vụ Thu Hộ BIDV",
    link: "https://softdreams.vn/uu-dai-dac-biet-danh-rieng-cho-khach-hang-mua-phan-mem-softdreams-su-dung-dich-vu-thu-ho-bidv/",
    img: "https://softdreams.vn/wp-content/uploads/2025/07/uu-dai-dac-biet-softdreams.jpg",
    desc: "SoftDreams phối hợp cùng Ngân hàng BIDV triển khai chương trình ưu đãi hấp dẫn dành riêng cho doanh nghiệp...",
    date: "21 Tháng 7, 2025",
  },
  {
    title:
      "Lễ Công Bố Hợp Tác Giữa SoftDreams Và Standard Chartered Việt Nam – Bước Tiến Mới Cho Doanh Nghiệp Số",
    link: "https://softdreams.vn/le-cong-bo-hop-tac-giua-softdreams-va-standard-chartered-viet-nam-buoc-tien-moi-cho-doanh-nghiep-so/",
    img: "https://softdreams.vn/wp-content/uploads/2025/07/SC-198-–-Da-sua-–-Da-sua-–-Da-sua-scaled.jpg",
    desc: "Ngày 09/07/2025, SoftDreams chính thức ký kết thỏa thuận hợp tác chiến lược với Ngân hàng Standard Chartered Việt Nam...",
    date: "18 Tháng 7, 2025",
  },
  {
    title:
      "Thư Mời Hợp Tác Trở Thành Cộng Tác Viên/ Đại Lý Của SoftDreams Trên Toàn Quốc",
    link: "https://softdreams.vn/thu-moi-hop-tac-tro-thanh-cong-tac-vien-dai-ly-cua-softdreams-tren-toan-quoc/",
    img: "https://softdreams.vn/wp-content/uploads/2025/06/sds-3.png",
    desc: "Kính gửi Quý Đối tác, Softdreams trân trọng cảm ơn Quý Đối tác đã đồng hành cùng chúng tôi...",
    date: "12 Tháng 6, 2025",
  },
  {
    title:
      "Softdreams Phối Hợp Cùng Chi Cục Thuế Khu Vực II Triển Khai Hỗ Trợ Hộ Kinh Doanh Áp Dụng Hóa Đơn Điện Tử Khởi Tạo Từ Máy Tính Tiền",
    link: "https://softdreams.vn/softdreams-phoi-hop-cung-chi-cuc-thue-khu-vuc-ii-trien-khai-ho-tro-ho-kinh-doanh-ap-dung-hoa-don-dien-tu-khoi-tao-tu-may-tinh-tien/",
    img: "https://softdreams.vn/wp-content/uploads/2025/05/sds-anh-1.jpg",
    desc: "Nhằm đẩy mạnh chuyển đổi số trong lĩnh vực thuế và hỗ trợ các hộ kinh doanh thực hiện đúng quy định...",
    date: "17 Tháng 5, 2025",
  },
  {
    title: "Teambuilding 2025 SoftDreams: Chung Tầm Nhìn – Vượt Giới Hạn",
    link: "https://softdreams.vn/teambuilding-2025-softdreams-chung-tam-nhin-vuot-gioi-han/",
    img: "https://softdreams.vn/wp-content/uploads/2025/06/HVT04363-scaled.jpg",
    desc: "Từ ngày 23 đến 25/5/2025, tập thể SoftDreams đã cùng nhau chạm đến vùng đất Nghệ An đầy nắng gió...",
    date: "4 Tháng 6, 2025",
  },

  {
    title:
      "SoftDreams – EasyCA Tự Hào Là Nhà Cung Cấp Chữ Ký Số Trên Ứng Dụng VNeID",
    link: "https://softdreams.vn/softdreams-easyca-tu-hao-la-nha-cung-cap-chu-ky-so-tren-ung-dung-vneid/",
    img: "https://softdreams.vn/wp-content/uploads/2025/06/softdreams-easyca-tu-hao-la-nha-cung-cap-chu-ky-so-tren-ung-dung-vneid.png",
    desc: "Chiều ngày 22/5, tại Lễ công bố triển khai thí điểm “Cổng ký số tập trung trên nền tảng định danh và xác thực điện tử VNeID”...",
    date: "3 Tháng 6, 2025",
  },
  {
    title:
      "Lễ Công Bố Hợp Tác Giữa SoftDreams Và Standard Chartered Việt Nam – Bước Tiến Mới Cho Doanh Nghiệp Số",
    link: "https://softdreams.vn/le-cong-bo-hop-tac-giua-softdreams-va-standard-chartered-viet-nam-buoc-tien-moi-cho-doanh-nghiep-so/",
    img: "https://softdreams.vn/wp-content/uploads/2025/07/SC-198-–-Da-sua-–-Da-sua-–-Da-sua-scaled.jpg",
    desc: "Ngày 09/07/2025, SoftDreams chính thức ký kết thỏa thuận hợp tác chiến lược với Ngân hàng Standard Chartered Việt Nam...",
    date: "18 Tháng 7, 2025",
  },

  {
    title: "Teambuilding 2025 SoftDreams: Chung Tầm Nhìn – Vượt Giới Hạn",
    link: "https://softdreams.vn/teambuilding-2025-softdreams-chung-tam-nhin-vuot-gioi-han/",
    img: "https://softdreams.vn/wp-content/uploads/2025/06/HVT04363-scaled.jpg",
    desc: "Từ ngày 23 đến 25/5/2025, tập thể SoftDreams đã cùng nhau chạm đến vùng đất Nghệ An đầy nắng gió...",
    date: "4 Tháng 6, 2025",
  },
  {
    title:
      "SoftDreams – EasyCA Tự Hào Là Nhà Cung Cấp Chữ Ký Số Trên Ứng Dụng VNeID",
    link: "https://softdreams.vn/softdreams-easyca-tu-hao-la-nha-cung-cap-chu-ky-so-tren-ung-dung-vneid/",
    img: "https://softdreams.vn/wp-content/uploads/2025/06/softdreams-easyca-tu-hao-la-nha-cung-cap-chu-ky-so-tren-ung-dung-vneid.png",
    desc: "Chiều ngày 22/5, tại Lễ công bố triển khai thí điểm “Cổng ký số tập trung trên nền tảng định danh và xác thực điện tử VNeID”...",
    date: "3 Tháng 6, 2025",
  },
  {
    title:
      "Softdreams Phối Hợp Cùng Chi Cục Thuế Khu Vực II Triển Khai Hỗ Trợ Hộ Kinh Doanh Áp Dụng Hóa Đơn Điện Tử Khởi Tạo Từ Máy Tính Tiền",
    link: "https://softdreams.vn/softdreams-phoi-hop-cung-chi-cuc-thue-khu-vuc-ii-trien-khai-ho-tro-ho-kinh-doanh-ap-dung-hoa-don-dien-tu-khoi-tao-tu-may-tinh-tien/",
    img: "https://softdreams.vn/wp-content/uploads/2025/05/sds-anh-1.jpg",
    desc: "Nhằm đẩy mạnh chuyển đổi số trong lĩnh vực thuế và hỗ trợ các hộ kinh doanh thực hiện đúng quy định...",
    date: "17 Tháng 5, 2025",
  },
  {
    title:
      "[ƯU ĐÃI ĐẶC BIỆT] Dành Riêng Cho Khách Hàng Mua Phần Mềm SoftDreams & Sử Dụng Dịch Vụ Thu Hộ BIDV",
    link: "https://softdreams.vn/uu-dai-dac-biet-danh-rieng-cho-khach-hang-mua-phan-mem-softdreams-su-dung-dich-vu-thu-ho-bidv/",
    img: "https://softdreams.vn/wp-content/uploads/2025/07/uu-dai-dac-biet-softdreams.jpg",
    desc: "SoftDreams phối hợp cùng Ngân hàng BIDV triển khai chương trình ưu đãi hấp dẫn dành riêng cho doanh nghiệp...",
    date: "21 Tháng 7, 2025",
  },
  {
    title:
      "Lễ Công Bố Hợp Tác Giữa SoftDreams Và Standard Chartered Việt Nam – Bước Tiến Mới Cho Doanh Nghiệp Số",
    link: "https://softdreams.vn/le-cong-bo-hop-tac-giua-softdreams-va-standard-chartered-viet-nam-buoc-tien-moi-cho-doanh-nghiep-so/",
    img: "https://softdreams.vn/wp-content/uploads/2025/07/SC-198-–-Da-sua-–-Da-sua-–-Da-sua-scaled.jpg",
    desc: "Ngày 09/07/2025, SoftDreams chính thức ký kết thỏa thuận hợp tác chiến lược với Ngân hàng Standard Chartered Việt Nam...",
    date: "18 Tháng 7, 2025",
  },
  {
    title:
      "Thư Mời Hợp Tác Trở Thành Cộng Tác Viên/ Đại Lý Của SoftDreams Trên Toàn Quốc",
    link: "https://softdreams.vn/thu-moi-hop-tac-tro-thanh-cong-tac-vien-dai-ly-cua-softdreams-tren-toan-quoc/",
    img: "https://softdreams.vn/wp-content/uploads/2025/06/sds-3.png",
    desc: "Kính gửi Quý Đối tác, Softdreams trân trọng cảm ơn Quý Đối tác đã đồng hành cùng chúng tôi...",
    date: "12 Tháng 6, 2025",
  },
  {
    title: "Teambuilding 2025 SoftDreams: Chung Tầm Nhìn – Vượt Giới Hạn",
    link: "https://softdreams.vn/teambuilding-2025-softdreams-chung-tam-nhin-vuot-gioi-han/",
    img: "https://softdreams.vn/wp-content/uploads/2025/06/HVT04363-scaled.jpg",
    desc: "Từ ngày 23 đến 25/5/2025, tập thể SoftDreams đã cùng nhau chạm đến vùng đất Nghệ An đầy nắng gió...",
    date: "4 Tháng 6, 2025",
  },
  {
    title:
      "Softdreams Phối Hợp Cùng Chi Cục Thuế Khu Vực II Triển Khai Hỗ Trợ Hộ Kinh Doanh Áp Dụng Hóa Đơn Điện Tử Khởi Tạo Từ Máy Tính Tiền",
    link: "https://softdreams.vn/softdreams-phoi-hop-cung-chi-cuc-thue-khu-vuc-ii-trien-khai-ho-tro-ho-kinh-doanh-ap-dung-hoa-don-dien-tu-khoi-tao-tu-may-tinh-tien/",
    img: "https://softdreams.vn/wp-content/uploads/2025/05/sds-anh-1.jpg",
    desc: "Nhằm đẩy mạnh chuyển đổi số trong lĩnh vực thuế và hỗ trợ các hộ kinh doanh thực hiện đúng quy định...",
    date: "17 Tháng 5, 2025",
  },
  {
    title:
      "[ƯU ĐÃI ĐẶC BIỆT] Dành Riêng Cho Khách Hàng Mua Phần Mềm SoftDreams & Sử Dụng Dịch Vụ Thu Hộ BIDV",
    link: "https://softdreams.vn/uu-dai-dac-biet-danh-rieng-cho-khach-hang-mua-phan-mem-softdreams-su-dung-dich-vu-thu-ho-bidv/",
    img: "https://softdreams.vn/wp-content/uploads/2025/07/uu-dai-dac-biet-softdreams.jpg",
    desc: "SoftDreams phối hợp cùng Ngân hàng BIDV triển khai chương trình ưu đãi hấp dẫn dành riêng cho doanh nghiệp...",
    date: "21 Tháng 7, 2025",
  },
  {
    title:
      "SoftDreams – EasyCA Tự Hào Là Nhà Cung Cấp Chữ Ký Số Trên Ứng Dụng VNeID",
    link: "https://softdreams.vn/softdreams-easyca-tu-hao-la-nha-cung-cap-chu-ky-so-tren-ung-dung-vneid/",
    img: "https://softdreams.vn/wp-content/uploads/2025/06/softdreams-easyca-tu-hao-la-nha-cung-cap-chu-ky-so-tren-ung-dung-vneid.png",
    desc: "Chiều ngày 22/5, tại Lễ công bố triển khai thí điểm “Cổng ký số tập trung trên nền tảng định danh và xác thực điện tử VNeID”...",
    date: "3 Tháng 6, 2025",
  },
  {
    title:
      "Softdreams Phối Hợp Cùng Chi Cục Thuế Khu Vực II Triển Khai Hỗ Trợ Hộ Kinh Doanh Áp Dụng Hóa Đơn Điện Tử Khởi Tạo Từ Máy Tính Tiền",
    link: "https://softdreams.vn/softdreams-phoi-hop-cung-chi-cuc-thue-khu-vuc-ii-trien-khai-ho-tro-ho-kinh-doanh-ap-dung-hoa-don-dien-tu-khoi-tao-tu-may-tinh-tien/",
    img: "https://softdreams.vn/wp-content/uploads/2025/05/sds-anh-1.jpg",
    desc: "Nhằm đẩy mạnh chuyển đổi số trong lĩnh vực thuế và hỗ trợ các hộ kinh doanh thực hiện đúng quy định...",
    date: "17 Tháng 5, 2025",
  },
];

export default posts;
