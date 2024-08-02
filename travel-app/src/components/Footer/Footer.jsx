import './footer.css'
import video2 from "../../assets/video2.mp4";

const Footer =()=>{
    return(
       <section className="footer">
      <div className="video">
        <video src={video2} video autoPlay muted type='video/mp4'></video>
      </div>
       </section>
    )
}

export default Footer