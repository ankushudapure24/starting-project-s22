// Challenge / Exercise

// 1. Add five new (dummy) page components (content can be simple <h1> elements)
//    - HomePage
//    - EventsPage
//    - EventDetailPage
//    - NewEventPage
//    - EditEventPage
//DONE

// 2. Add routing & route definitions for these five pages
//    - / => HomePage
//    - /events => EventsPage
//    - /events/<some-id> => EventDetailPage
//    - /events/new => NewEventPage
//    - /events/<some-id>/edit => EditEventPage
//DONE
// 3. Add a root layout that adds the <MainNavigation> component above all page components
//DONE
// 4. Add properly working links to the MainNavigation
//DONE
// 5. Ensure that the links in MainNavigation receive an "active" class when active
//DONE
// 6. Output a list of dummy events to the EventsPage
//    Every list item should include a link to the respective EventDetailPage
//DONE
// 7. Output the ID of the selected event on the EventDetailPage
//DONE
// BONUS: Add another (nested) layout route that adds the <EventNavigation> component above all /events... page components
//Done
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import HomePage from "./pages/Home.js";
import EventsPage from "./pages/Events.js";
import EventsDetailPage, {
  loader as eventDetailsLoader,
} from "./pages/EventDetail.js";
import NewEventPage from "./pages/NewEvent.js";
import EditEventPage from "./pages/EditEvent.js";
import RootLayout from "./pages/Root.js";
import EventsRootLayout from "./pages/eventsRoot.js";
import ErrorPage from "./pages/Error.js";
import { loader as eventsLoader } from "./pages/Events.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: "events",
        element: <EventsRootLayout />,
        errorElement: <ErrorPage />,
        children: [
          { index: true, element: <EventsPage />, loader: eventsLoader },
          {
            path: ":eventId",
            id: "event-details",
            loader: eventDetailsLoader,
            children: [
              {
                index: true,
                element: <EventsDetailPage />,
              },
              { path: "edit", element: <EditEventPage /> },
            ],
          },
          { path: "new", element: <NewEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
