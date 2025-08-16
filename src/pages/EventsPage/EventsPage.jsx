import React from "react";
import FramePage from "~/components/FramePage/FramePage";
import EventHeader from "~/components/EventHeader/EventHeader";
import EventSearch from "~/components/EventSearch/EventSearch";
import EventComing from "~/components/EventComing/EventComing";
import EventFinish from "~/components/EventFinish/EventFinish";
import EventForm from "~/components/EventForm/EventForm";

export default function EventsPage({ events = [] }) {
  return (
    <FramePage>
      <EventHeader events={events} />
      <EventSearch />
      <EventComing events={events} />
      <EventFinish events={events} />
      <EventForm />
    </FramePage>
  );
}
