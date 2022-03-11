import axios from "axios";
import { MovieCard } from "components/MovieCard";
import { Pagination } from "components/Pagination"
import { useEffect, useState } from "react";
import { MoviePage } from "types/typesmovies";
import { BASE_URL } from "utils/requests";


export function Listing() {

    const [page, setPage] = useState<MoviePage>({
        content: [],
        last: true,
        totalPages: 0,
        totalElements: 0,
        size: 12,
        number: 0,
        first: true,
        numberOfElements: 0,
        empty: true,
    });

    const [numberPage, setNumberPage] = useState(0);


    useEffect(() => {
        axios.get(`${BASE_URL}/movies?size=12&page=${numberPage}`)
            .then(response => {
                const data = response.data as MoviePage
                console.log(response.data);
                setPage(data);
                })
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