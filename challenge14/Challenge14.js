import React,{useState} from 'react'



export const Challenge14 = () => {
    const users = [
        {
            id : 1,
            nombre : 'pablo'
        },
        {
            id : 2,
            nombre : 'juan'
        },
        {
            id : 3,
            nombre : 'pedro'
        },
        {
            id : 4,
            nombre : 'javier'
        },
    ];
    
    let [resultado, setResultado]= useState();
    
    let sumar = () =>{
        let numero1=parseInt(document.querySelector('#num1').value);
        let numero2=parseInt(document.querySelector('#num2').value);
        resultado=numero1+numero2;
        console.log(numero1)
        setResultado(resultado);
    }

  return (
    <div>
        {/* -Mostrar en el navegador “Hola JSX”*/}
        <p>Hola JSX</p>


        {/* -Mostrar en el navegador un array de usuarios on user id.*/}
        
            <h3>Usuarios</h3>
            <ul>
                {
                    users.map( us =>{
                        return (<li key={us.toString()}>
                                    <p>Id: {us.id} nombre: {us.nombre}</p>
                                </li>)
                    })
                }
            </ul>  
        
        {
            // -Realizar un programa en el que se puedan sumar dos 
            // números a través de 2 inputs. Que haya un botón que 
            // una vez clickeado haga que se muestra el resultado. 
            // Se tiene que mostrar todo en el navegador.

        }
        <p>-----------------------------------------------------------</p>
        <label>num1 </label>
        <input id='num1' type='number'></input>
        <label> + num2 </label>
        <input id='num2' type='number'></input>
        <label>= </label>
        <input name='resultado' value={resultado}></input>
        <button onClick={sumar}>SUMAR</button>
        
    </div>
  )
}
