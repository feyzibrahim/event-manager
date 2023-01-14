import { useParams } from "react-router";
import useFetch from "./Hook/useFetch";

const EventDetails = () => {
  const { id } = useParams();
  const {
    data: events,
    isPending,
    error,
  } = useFetch("http://localhost:8000/events/" + id);

  return (
    <div className="eventDetails">
      {error && <div>{error}</div>}
      {isPending && <div className="loading">Loading....</div>}
      {events && (
        <article>
          <h2>{events.title}</h2>
          <p>Created by {events.author}</p>
          <div>{events.body}</div>
        </article>
      )}
    </div>
  );
};

export default EventDetails;
