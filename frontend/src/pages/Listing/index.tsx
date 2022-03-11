import axios from "axios";
import { MovieCard } from "components/MovieCard";
import { Pagination } from "components/Pagination"
import { useEffect } from "react";
import { BASE_URL } from "utils/requests";


export function Listing() {

    


    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=0`)
            .then(response => console.log(response.data))
            .catch(erro => console.log("erro" + erro));
    }, []);

    return (
        <>
            <Pagination />
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                    <div className="col-sm-6 col-md-4 col-xl-3 mb-3" >
                        <MovieCard />
                    </div>
                </div>

            </div>
        </>

    );
}