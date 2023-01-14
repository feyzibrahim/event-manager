import { useState } from "react";

const Create = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [author, setAuthor] = useState("Faiz");
  const [isPending, setIsPending] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const event = { title, body, author };
    setIsPending(true);
    fetch("http://localhost:8000/events", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(event),
    }).then(() => {
      console.log("New blog Added");
      setIsPending(false);
    });
  };

  return (
    <div className="createHome">
      <h1>Create a new event</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="title">Event title:</label>
        <input
          type="text"
          required
          name="title"
          value={title}
          onChange={(e) => {
            setTitle(e.target.value);
          }}
        />

        <label htmlFor="eventbody">Event Body:</label>
        <textarea
          required
          name="eventbody"
          value={body}
          onChange={(e) => {
            setBody(e.target.value);
          }}
        />

        <select
          value={author}
          onChange={(e) => {
            setAuthor(e.target.value);
          }}
        >
          <option value="faiz">Faiz</option>
          <option value="Some">Some</option>
        </select>
        {!isPending && <button>Add a Event</button>}
        {isPending && <button disabled>Creating the Event...</button>}
      </form>
      <p>{title}</p>
      <p>{body}</p>
      <p>{author}</p>
    </div>
  );
};

export default Create;
