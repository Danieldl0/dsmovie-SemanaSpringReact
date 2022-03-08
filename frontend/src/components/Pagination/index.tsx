import {ReactComponent as Arrow} from "assets/img/arrow.svg";
import "./style.css";


function Pagination(){
    return (

        <div className="dsmovie-pagination-container">
            <div className="dsmovie-pagination-div-btn">
                <button className="dsmovie-pagination-btn" disabled={true}>
                    <Arrow/>
                </button>

                <p>{`${1} de ${3}`}</p>

                <button className="dsmovie-pagination-btn">
                    <Arrow className="dsmovie-btn-flip-horizontal"/>
                </button>
            </div>
        </div>
    );   
}


export {Pagination};