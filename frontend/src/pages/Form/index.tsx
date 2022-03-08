import "./style.css";

export function Form(){
    
    const movie1 = {
        id:1,
        imagem: "https://image.tmdb.org/t/p/w533_and_h300_bestv2/jBJWaqoSCiARWtfV0GlqHrcdidd.jpg",
        title: "The witcher",
        count: 2,
        score: 4.5
    };

    
    return (
        <div className="dsmovie-form-container">
            <img src={movie1.imagem} alt={movie1.title} />
            <div className="dsmovie-form-container-bottom">
                <h3>{movie1.title}</h3>
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
                        <button className="btn btn-primary dsmovie-btn">Salvar</button>
                    </div>
                </form>

                <div className="dsmovie-btn-container">
                    <button className="btn btn-primary dsmovie-btn"> Cancelar</button>
                </div>
            </div>
        </div>

    );
}