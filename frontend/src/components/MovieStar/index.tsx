import {ReactComponent as StarFull} from "assets/img/star-full.svg";
import {ReactComponent as StarHalf} from "assets/img/star-half.svg";
import {ReactComponent as StarEmpty} from "assets/img/star-empty.svg";
import "./style.css";

function getFills(numb: number){

    const fills = [0,0,0,0,0];
    let num = Math.floor(numb);

    for(let i = 0; i < num; i++){
        fills[i] = 1;
    }

    if(numb - num > 0){
        fills[num] = 0.5;
    }

    return fills;
}

export function Star( {score} : Props ){
    if (score === 0){
        return <StarEmpty/>;
    }else if(score === 1){
        return <StarFull/>
    }else{
        return <StarHalf/>
    }
}

type Props={
    score: number;
}



function MovieStar({score} : Props){

    const fills = getFills(score);

    return (

        <div className="dsmovie-star-container">
            <Star  score={fills[0]}/>
            <Star score={fills[1]} />
            <Star score= {fills[2]}/>
            <Star score= {fills[3]}/>
            <Star score= {fills[4]}/>
        </div>
    );
}

export {MovieStar};