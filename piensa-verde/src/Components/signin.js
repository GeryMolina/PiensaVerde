import React, {useState} from 'react';
import {useDispatch} from 'react-redux';

//accion
//import {createUser} from '../actions/signin'

const SignIn = () =>{
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const signin = (e)=>{
        e.preventDefault();
        console.log('usuario creado')
    }

    return(
        <React.Fragment>
            <form onSubmit={signin}>
                <p>Crear una cuenta</p>
                <label htmlFor='email'>Email</label>
                <input type='email' name='email' onChange={(e) => setEmail(e.target.value)}/>

                <label htmlFor='password'>Contraseña</label>
                <input type='password' name='password' onChange={(e) => setPassword(e.target.value)}/>

                <input type='submit' value='Registrarse'/>

            

            </form>
        </React.Fragment>
    )
}

export default SignIn;