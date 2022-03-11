import { Link } from "react-router-dom";
import { Movie } from "types/typesmovies";
import "./style.css";

type Props = {
    movie: Movie;
}

function FormCard({movie}: Props) {

    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-card-img" src={movie?.image} alt={movie.title} />
            <div className="dsmovie-form-container-bottom">
                <h3>{movie.title}</h3>
                <form className="dsmovie-form-inputs">
                    <div className="form-group dsmovie-div-input">
                        <label>Informe seu Email</label>
                        <input type="email" className="form-control" id="email" />
                    </div>
                    <div className="form-group dsmovie-div-input">
                        <label> Informe sua pontuação</label>
                        <select className="form-control">
                            <option>1</option>
                            <option>2</option>
                            <option>3</option>
                            <option>4</option>
                            <option>5</option>
                        </select>
                    </div>
                    <div className="dsmovie-btn-container">
                        <Link to="/">
                            <button className="btn btn-primary dsmovie-btn">Salvar</button>
                        </Link>
                    </div>
                </form>

                <div className="dsmovie-btn-container">
                    <Link to="/">
                        <button className="btn btn-primary dsmovie-btn"> Cancelar</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export {FormCard};