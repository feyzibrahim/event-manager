import bazi from "./images/img1.jpg";
const Home = () => {
  return (
    <div className="Home">
      <div
        className="homeDiv"
        style={{
          backgroundImage: `url(${bazi})`,
          backgroundSize: "130%",
          backgroundRepeat: "no-repeat",
        }}
        
      >
        <h1>Event Mangement</h1>
        <a href="/">login</a>
        <a href="/">Signup</a>
        <a href="/">about us</a>
      </div>
    </div>
  );
};

export default Home;
