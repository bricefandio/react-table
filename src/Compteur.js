import { useState } from "react";


function Compteur(props) {
    const [ valeur, setValeur ] = useState(0);

    const btnClickHandler = (ajout) => {
        setValeur(valeur + ajout);

    }

    return (
        <div className="compteur">
            <p>{valeur}</p>
            <button onClick={() => btnClickHandler(-1)}>-1</button>
            <button onClick={() => btnClickHandler(1)}>+ 1</button>
        </div>
    )
}

export default Compteur;