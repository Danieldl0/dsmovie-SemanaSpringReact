import { useParams } from "react-router-dom";
import { FormCard } from "components/FormCard/FormCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { BASE_URL } from "utils/requests";
import { Movie } from "types/typesmovies";



export function Form() {

    const params = useParams();

    const [movie, setMovie] = useState<Movie>({
        id: 0,
        title: "",
        score: 0,
        count: 0,
        image: "",
    });


    useEffect(() => {
        axios.get(`${BASE_URL}/movies/${params.idmovie}`)
            .then(resp => {
                setMovie(resp.data)
            });
    }, [params.idmovie]);

    return (
        <FormCard movie={movie} />

    );
}