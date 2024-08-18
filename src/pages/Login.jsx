import { useState, useEffect} from "react"
import { useNavigate } from "react-router-dom"
import { useForm } from 'react-hook-form'
import { Button } from "../components/Button"
import { LinkButton } from "../components/LinkButton"

import { Success } from "./Success"

export function Login(){

    const navigate = useNavigate()

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({mode : "onSubmit"})

    async function handleLogin(e){

        console.log(e)

       fetch('http://localhost:3332/users/login', {
        method:'POST',
        headers:{
            'Content-Type':'application/json'
        }, body: JSON.stringify({
            "email": e.email,
            "password": e.password,
        }),
       }).then((resp) => {
        if (!resp.ok){
            throw new Error('Login failed!')
        }
        return resp.json()
        })
       .then((data) =>{
            console.log('Sucesso')
            console.log(data)
            localStorage.setItem('userData', JSON.stringify(data))
            navigate('/Success')
           
       })
       .catch((error) => console.log(error)) 
        
    }
    
    return(
        <div className="w-full flex justify-center flex-col bg-orange_50 h-screen">
            <div className="text-center grid place-items-center">
                <h1 className="p-4 text-orange_800 text-4xl font-bold">CONSEILLER</h1>
                <form onSubmit={handleSubmit(handleLogin)} className="max-w-96 justify-center place-items-center">
                    <div className="flex flex-col justify-center items-center gap-2">
                        <label className="font-bold text-orange_400 text-2xl">E-mail:</label>
                        <input 
                            {...register("email")}
                            className="rounded-xl p-4 w-96 max-w-96" 
                            name="email" 
                            id="user" 
                            type='email' 
                            placeholder="Digite seu E-mail" 
                            required 
                        />
                        {errors.email && (<ErrorMessage errors={errors} name="email"></ErrorMessage>)}


                        <label className="font-bold text-orange_400 text-2xl">Senha:</label>
                        <input 
                            {...register("password")}
                            className="rounded-xl p-4 w-96 max-w-96" 
                            name="password" 
                            id="password" 
                            type="password" 
                            placeholder="Digite sua senha" 
                            required 
                        
                        />
                        {errors.password && (<ErrorMessage errors={errors} name="password"></ErrorMessage>)}

                        <div className="recall-forget p-4 flex justify-between w-full">
                            <LinkButton to='/Register' title={'Criar Usuário'}/>
                            <Button type={'submit'} title={'Login'} />
                        </div>

                    </div>
                    
                   
                </form>
            </div>
        </div>

    )
}