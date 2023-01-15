import { Link } from "react-router-dom";

const EventsList = ({ events, title }) => {
  return (
    <div className="event-list">
      <h2>{title}</h2>
      {events.map((event) => (
        <div className="event-preview" key={event.id}>
          <Link to={`/events/${event.id}`}>
            <h2>{event.title}</h2>
            <p>Created by {event.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
};

export default EventsList;
