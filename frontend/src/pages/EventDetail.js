import { useLoaderData, useRouteLoaderData, redirect } from "react-router-dom";

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

export async function action({params, request}) {
  const eventId = params.eventId
  const response = await fetch('http://localhost:8080/events/' +eventId, {
    method: request.method,
  });

  if (!response.ok) {
    throw JSON.stringify(
      { message: "Could  not delete events." },
      {
        status: 500,
      }
    );
  }
  return redirect("/events");
}
