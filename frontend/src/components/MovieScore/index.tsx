import { MovieStar } from "components/MovieStar";
import "./style.css";

type Props ={
    moviescore: number;
    moviecount: number;
}

function MovieScore( {moviescore , moviecount}: Props ) {
    return (

        <div className="dsmovie-score-container">
            <p>{moviescore}</p>
            <MovieStar 
                score={moviescore}
            />
            <p>{moviecount} Avaliações</p>
        </div>
    );

}

export { MovieScore };