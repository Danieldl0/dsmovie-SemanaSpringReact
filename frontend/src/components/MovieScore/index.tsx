import { MovieStar } from "components/MovieStar";
import "./style.css";

function MovieScore() {
    return (

        <div className="dsmovie-score-container">
            <p>3.8</p>
            <MovieStar />
            <p>13 avaliações</p>
        </div>
    );

}

export { MovieScore };