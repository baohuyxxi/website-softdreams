import { useState } from "react";
import { Menu, X } from "lucide-react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="w-full bg-white shadow fixed top-0 z-50">
      <div className="container mx-auto flex justify-between items-center p-4">
        {/* Logo */}
        <div className="text-xl font-bold">Softdreams</div>

        {/* Desktop Menu */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-blue-600">Trang chủ</a>
          <a href="/gioi-thieu" className="hover:text-blue-600">Giới thiệu</a>
          
          {/* Mega Menu */}
          <div className="group relative">
            <button className="hover:text-blue-600">Sản phẩm</button>
            <div className="absolute left-0 hidden group-hover:grid grid-cols-3 gap-6 bg-white shadow-lg p-6 w-[600px]">
              <div>
                <h4 className="font-bold">Máy tính văn phòng</h4>
                <ul className="space-y-1 text-sm">
                  <li><a href="#">Máy tính bàn</a></li>
                  <li><a href="#">Máy in</a></li>
                  <li><a href="#">Bộ máy tính build</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold">Thiết bị POS</h4>
                <ul className="space-y-1 text-sm">
                  <li><a href="#">POS bán hàng</a></li>
                  <li><a href="#">POS cầm tay</a></li>
                  <li><a href="#">Máy in bill</a></li>
                </ul>
              </div>
              <div>
                <h4 className="font-bold">Phần mềm</h4>
                <ul className="space-y-1 text-sm">
                  <li><a href="#">Quản lý bán hàng</a></li>
                  <li><a href="#">Quản trị nhân lực</a></li>
                  <li><a href="#">Kế toán</a></li>
                </ul>
              </div>
            </div>
          </div>

          <a href="/dich-vu" className="hover:text-blue-600">Dịch vụ</a>
          <a href="/tin-tuc" className="hover:text-blue-600">Tin tức</a>
          <a href="/tuyen-dung" className="hover:text-blue-600">Tuyển dụng</a>
          <a href="/su-kien" className="hover:text-blue-600">Sự kiện</a>
        </nav>

        {/* Mobile Menu Button */}
        <button onClick={() => setOpen(!open)} className="md:hidden">
          {open ? <X size={28}/> : <Menu size={28}/>}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      {open && (
        <div className="md:hidden bg-white shadow p-4 space-y-3">
          <a href="/">Trang chủ</a>
          <a href="/gioi-thieu">Giới thiệu</a>
          <details>
            <summary className="cursor-pointer">Sản phẩm</summary>
            <ul className="pl-4 space-y-1 text-sm">
              <li><a href="#">Máy tính văn phòng</a></li>
              <li><a href="#">Thiết bị POS</a></li>
              <li><a href="#">Phần mềm</a></li>
            </ul>
          </details>
          <a href="/dich-vu">Dịch vụ</a>
          <a href="/tin-tuc">Tin tức</a>
          <a href="/tuyen-dung">Tuyển dụng</a>
          <a href="/su-kien">Sự kiện</a>
        </div>
      )}
    </header>
  );
}
