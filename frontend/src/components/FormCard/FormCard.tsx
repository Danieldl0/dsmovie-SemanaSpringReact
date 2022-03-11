import "./style.css";



function FormCard() {

    return (
        <>
            <div className="form-group dsmovie-form-div-input">
                <label>Informe seu Email</label>
                <input type="email" className="form-control" id="email" name="email" />
            </div>
            <div className="form-group dsmovie-form-div-input">
                <label> Informe sua pontuação</label>
                <select className="form-control" id="score">
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
            </div>
        </>
    )
}
export { FormCard };