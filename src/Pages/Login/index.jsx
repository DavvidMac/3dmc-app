import React from 'react'
import './Login.css'

import { auth } from '../../Utils/firebase'
import { signInWithEmailAndPassword } from 'firebase/auth'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email,setEmail]=React.useState('')
    const [password,setPassword]=React.useState('')
    const navigate=useNavigate()
   async function handleLogin(e){
    e.preventDefault();
        if(email!==""&& password!==''){
            await signInWithEmailAndPassword(auth,email,password)
            .then(()=>{
                navigate('/produtos',{replace:true})
            })
            .catch(()=>{
                console.log('erro ao fazer login')
            })
        }
        else{
            alert('preencha todos os campos')
        }
        
    }
  return (
    <div className='home-container'>
        <h1>Login</h1>
    <form onSubmit={handleLogin}>
        <input
            type={'text'}
            placeholder='Digite seu email'
            value={email}
            onChange={(e)=>setEmail(e.target.value)}
            />
            <input
            type={'password'}
            placeholder='Digite seu email'
            value={password}
            onChange={(e)=>setPassword(e.target.value)}
            />
            <button type='submit'>acessar</button>
    </form>
    </div>
  )
}

export default Login