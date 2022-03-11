import { MovieStar } from "components/MovieStar";
import "./style.css";

type Props ={
    moviescore: number;
    moviecount: number;
}

function MovieScore( {moviescore , moviecount}: Props ) {
    return (

        <div className="dsmovie-score-container">
            <p>{moviescore === 0 ? "-" : moviescore.toFixed(1)}</p>
            <MovieStar 
                score={moviescore}
            />
            <p>{moviecount} Avaliações</p>
        </div>
    );

}

export { MovieScore };