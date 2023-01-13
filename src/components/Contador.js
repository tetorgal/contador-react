import { useState } from 'react';
import Button from 'react-bootstrap/Button';
function Contador() {
    const [contador, setContador] = useState(0);
    const sumar = () => {
        let sumarContador = contador; //Contador es INMUTABLE
        sumarContador++;

        setContador(sumarContador);
    }
    function restar(){
        let restarContador = contador;
        restarContador--;

        setContador(restarContador);
    }
    const reiniciar = () =>{
        let reiniciarContador = contador;
        reiniciarContador = 0;

        setContador(reiniciarContador);
    }
    return (
        <>
            <p>Contador:{ contador }</p>
            <p>
                <Button variant="outline-success" size="lg" onClick={sumar}>+</Button>{' '}
                <Button variant="outline-danger" size="lg" onClick={restar}>-</Button>{' '}
               
            </p>
            <p>
            <Button variant="outline-primary" onClick={reiniciar}>Reiniciar</Button>{' '}
            </p>

        </>

    );
}
export default Contador;