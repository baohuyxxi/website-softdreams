import React from "react";
import EventCard from "../EventCard/EventCard";
import events from "~/mock/Events";

export default function EventFinish() {
  // Lọc ra những sự kiện đã qua
  const finishedEvents = events.filter(
    (event) => new Date(event.date) < new Date()
  );

  return (
    <section id="event_finish" className="py-12 bg-gray-100">
      <div className="container mx-auto px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-8">
          Sự kiện đã diễn ra
        </h2>

        {finishedEvents.length === 0 ? (
          <p className="text-gray-600">Chưa có sự kiện nào đã diễn ra.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {finishedEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
