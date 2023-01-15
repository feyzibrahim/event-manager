import bazi from "./images/img2.jpg";
const Aboutpage = () => {
    return ( 
        <div
        className="about1"
        style={{
          backgroundImage: `url(${bazi})`,
          backgroundSize: "100%",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="about2">about us </div>
        <div>
           
            <div className="about3" >
                This website is to manage the creation and development of small and/or large-scale personal. It involves analysis of the events thorougly, identifying its target audience, devising the event concept, and coordinating the technical aspects before actually launching the event.The hoster of that perticular event can divide the event into multiple modules and assign them to each individual of the group 
                Each event is different in its nature so process of planning and execution of each event differs on basis of the type of event.
                The event manager is the person who plans and executes the event, taking responsibility for the creative, technical, and logistical elements.
                Thank you for choosing us through this website and we are looking for support ad care for further.             
            
            </div>
        </div>
      </div>
     );


}
 
export default Aboutpage;