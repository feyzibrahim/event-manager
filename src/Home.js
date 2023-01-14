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
        <h1>Welcome To</h1>
        <h2>Event Mangement</h2>
        <div className="loginSign">
            
                <a href="/">login</a>
    &nbsp;&nbsp;&nbsp;&nbsp;
            
                <a href="/">Signup</a>
            
        </div>
        <div className="about">
          <a href="/">about us</a>
          
        </div>
      </div>
    </div>
  );
};

export default Home;
