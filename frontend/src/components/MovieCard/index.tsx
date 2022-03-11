import { MovieScore } from "components/MovieScore";
import "./style.css";
import { Link } from "react-router-dom";
import { Movie } from "types/typesmovies";

type Props ={
    movie: Movie
}

function MovieCard({ movie }: Props) {

    return (

        <div className="dsmovie-card-container">
            <img className="dsmovie-card-img" src={movie.image} alt="" />
            <h3>{movie.title}</h3>
            <MovieScore />
            <Link to={`/form/${movie.id}`}><button className="btn btn-primary dsmovie-btn">Avaliar</button></Link>

        </div>
    );


}


export { MovieCard };