import React, { useState } from 'react';
import 'firebase/firebase-auth';
import { useFirebaseApp, useUser } from 'reactfire';


export default (props) => {
    //con el hook useState, mantenemos sincronizadas las variables con los valores de los imputs email y password
    const [email, setEmail] = useState(' ');
    const [password, setPassword] = useState(' ');

    const firebase = useFirebaseApp();
    //con el hook useUser declaramos la variable para obtener los datos del usuario
    const user = useUser();

    //creación de cuenta de usuario
    const submit = async () => {
        await firebase.auth().createUserWithEmailAndPassword(email, password)
    }

    //inicio de sesión para usuarios ya registrados
    const login = async () => {
        await firebase.auth().signInWithEmailAndPassword(email,password);
    }

    //cerrar sesión cuando hay usuarios activos
    const logout = async () => {
        await firebase.auth().signOut();
    }

    return (
        <div>
            {
                //si user no existe
                !user &&
                <div>
                    <input type="email" id="email" placeholder="correo electrónico" onChange={(event) => setEmail(event.target.value)} />
                    <input type="password" id="password" placeholder="contraseña" onChange={(event) => setPassword(event.target.value)} />
                    <button onClick={submit}>Crear cuenta</button>
                    <button onClick={login}>Iniciar sesión</button>
                </div>
            }
            {
                //si hay un usuario activo
                user && <button onClick={logout}>Cerrar sesión</button>
            }
        </div>
    )
} 
