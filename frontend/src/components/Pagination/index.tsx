import { ReactComponent as Arrow } from "assets/img/arrow.svg";
import "./style.css";


type Props = {
    first: boolean;
    last: boolean;
    number: number;
    totalPages: number;
    changeNumberPage: Function;
}

function Pagination({ first, last, number, totalPages, changeNumberPage }: Props) {
    return (

        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-div-btn">
                <button onClick={() => changeNumberPage(number-1)} className="dsmovie-pagination-btn" disabled={first}>
                    <Arrow />
                </button>

                <p>{`${number+1} de ${totalPages}`}</p>

                <button onClick={() => changeNumberPage(number+1)} className="dsmovie-pagination-btn" disabled={last}>
                    <Arrow className="dsmovie-btn-flip-horizontal" />
                </button>
            </div>
        </div>
    );
}


export { Pagination };