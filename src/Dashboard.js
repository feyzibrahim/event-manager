import { Link } from "react-router-dom";
import EventsList from "./EventsList";
import useFetch from "./Hook/useFetch";

const Dashboard = () => {
  const {
    data: events,
    isPending,
    error,
  } = useFetch("http://localhost:8000/events");

  return (
    <div className="dashHome">
      <div className="home">
        {error && <div>{error}</div>}
        {isPending && <div className="loading">Loading....</div>}
        <Link to="/create">Create a new Event</Link>
        {events && <EventsList events={events} title="Event List" />}
      </div>
    </div>
  );
};

export default Dashboard;
