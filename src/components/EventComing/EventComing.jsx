import React from "react";

export default function EventComing({ events }) {
  return (
    <section id="event_coming" className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Sắp diễn ra
        </h2>

        {events.length === 0 ? (
          <h1 className="text-center text-gray-600">
            Hiện chưa có sự kiện nào sắp diễn ra!
          </h1>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {events.map((event) => (
              <div
                key={event.id}
                className="bg-gray-50 rounded-xl shadow hover:shadow-lg transition p-4"
              >
                <img
                  src={event.image}
                  alt={event.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <h3 className="mt-4 text-lg font-semibold text-gray-800 line-clamp-2">
                  {event.title}
                </h3>
                <p className="text-sm text-gray-500 mt-2">
                  {new Date(event.date).toLocaleDateString("vi-VN")}
                </p>
                <a
                  href={event.link}
                  className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
                >
                  Xem chi tiết
                </a>
              </div>
            ))}
          </div>
        )}

        {/* Load more button (nếu cần sau này) */}
        {/* <div className="flex justify-center mt-8">
          <button className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700">
            Xem thêm &gt;
          </button>
        </div> */}
      </div>
    </section>
  );
}
