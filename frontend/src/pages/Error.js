import { useRouteError } from "react-router-dom";
import PageContent from "../components/PageContent";

function ErrorPage() {
  const error = useRouteError();
  
  let title = 'An error occured!';
  let message = 'Something went wrong!';

  if(error.status === 500) {
    message = JSON.parse(error.data).message;
  }

  if(error.status === 404) {
    title = 'Not found!'
    message = 'Could not find the resources or pages..'
  }

  return (
    <PageContent title={title}>
      <p>{message}</p>
    </PageContent>
  );
}

export default ErrorPage;;