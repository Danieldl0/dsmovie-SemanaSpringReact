import { MovieScore } from "components/MovieScore";
import "./script.css";
import { Link } from "react-router-dom";

function MovieCard(){
    
    const movie1 = {
        id:7,
        imagem: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The witcher",
        count: 2,
        score: 4.5
    };
    
    return(

        <div className="dsmovie-card-container">
            <img className="dsmovie-card-img" src={movie1.imagem} alt="" />
            <h3>{movie1.title}</h3>
            <MovieScore/>
            <Link to={`/form/${movie1.id}`}><button className="btn btn-primary dsmovie-btn">Avaliar</button></Link>
            
        </div>
    );


}


export {MovieCard};