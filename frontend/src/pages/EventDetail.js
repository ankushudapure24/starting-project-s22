import { useLoaderData, useRouteLoaderData } from "react-router-dom";

import EventItem from '../components/EventItem';
// import { loader } from "./Events";

function EventsDetailPage() {
const data = useRouteLoaderData('event-details');
  return (
    <EventItem event={data.event} />
  );
}

export default EventsDetailPage;

export async function loader({request, params}) {
  const id = params.eventId
  const response = await fetch('http://localhost:8080/events/' + id);
  
  if(!response.ok) {
    throw JSON.stringify({ message: "Could  not fetch details for selected events."}, {
      status: 500
    })
  } else {
    return response;
  }
}
