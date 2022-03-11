import { Link, useNavigate, useParams } from "react-router-dom";
import { FormCard } from "components/FormCard/FormCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { Movie } from "types/typesmovies";
import { validateEmail } from "utils/validateEmail";



export function Form() {

    const params = useParams();
    const navigate = useNavigate();

    

    const [movie, setMovie] = useState<Movie>({
        id: 0,
        title: "",
        score: 0,
        count: 0,
        image: "",
    });

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {

        event.preventDefault();

        const email = (event.target as any).email.value;
        const score = (event.target as any).score.value;

        if(!validateEmail(email)){
            return;
        }

        axios.put(`${BASE_URL}/scores/`, {
            email: email,
            score: score,
            movieId: movie.id
        }).then(resp => {
            navigate("/");
        }).catch(err => {
            console.log("Erro ao cadastrar nota");
        })
    }


    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${params.idmovie}`)
            .then(resp => {
                setMovie(resp.data)
            }).catch(() => {
                alert("Filme não cadastrado")
                navigate("/");
            });
    }, [params.idmovie, navigate]);

    return (
        <div className="dsmovie-form-container">
            <img className="dsmovie-card-img" src={movie.image} alt={movie.title} />
            <div className="dsmovie-form-container-bottom">
                <h3>{movie.title}</h3>
                <form onSubmit={handleSubmit} className="dsmovie-form-inputs">
                    <FormCard />
                    <div className="dsmovie-form-btn-container">
                        <button className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form>
                <div className="dsmovie-form-btn-container">
                    <Link to="/">
                        <button className="btn btn-primary dsmovie-btn"> Cancelar</button>
                    </Link>
                </div>
            </div>
        </div>

    );
}