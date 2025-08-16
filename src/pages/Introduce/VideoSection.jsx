import { useState } from "react";

export default function VideoSection() {
  const [isOpen, setIsOpen] = useState(false);

  const lightbox_open = () => setIsOpen(true);
  const lightbox_close = () => setIsOpen(false);

  return (
    <section id="sdsc_video" className="py-10 bg-gray-50">
      <div className="container mx-auto max-w-5xl px-6 md:px-12 text-center">
        <div className="company-video cursor-pointer" onClick={lightbox_open}>
          <img
            className="max-w-full mx-auto rounded-lg shadow-md hover:opacity-90 transition"
            src="https://softdreams.vn/wp-content/uploads/2023/11/Group-2609213-1.png"
            alt="Softdreams Video"
          />
        </div>

        {/* Lightbox */}
        {isOpen && (
          <>
            <div
              id="fade"
              className="fixed inset-0 bg-black/70 z-40"
              onClick={lightbox_close}
            ></div>
            <div
              id="light"
              className="fixed inset-0 flex items-center justify-center z-50"
            >
              <div className="relative w-[90%] max-w-3xl">
                <button
                  className="absolute -top-10 right-0 text-white text-3xl font-bold hover:text-gray-300"
                  onClick={lightbox_close}
                >
                  &times;
                </button>
                <video
                  id="VisaChipCardVideo"
                  controls
                  autoPlay
                  className="w-full rounded-lg shadow-lg"
                >
                  <source
                    src="https://softdreams.vn/wp-content/uploads/2023/11/y2mate.com-Phim-ngan-gioi-thieu-Softdreams-va-Easybooks_1080p.mp4"
                    type="video/mp4"
                  />
                  Trình duyệt của bạn không hỗ trợ video.
                </video>
              </div>
            </div>
          </>
        )}
      </div>
    </section>
  );
}
