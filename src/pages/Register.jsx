import { Button } from "../components/Button"

import * as yup from "yup"
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { ErrorMessage } from "@hookform/error-message"

import { useNavigate } from "react-router-dom"


const formDataSchema = yup.object().shape({
    email: yup.string().email().required("Insira um e-mail!"),
    username: yup.string().required('Insira um nome de Usuário'),
    password: yup
        .string()
        .required('Digite uma senha!')
        .matches(
            /^.{8,}$/,
            "A senha deve conter pelo menos 8 caracteres"
        ),
    passwordConfirmation: yup
        .string()
        .required("Por favor confirme sua senha")
        .oneOf([yup.ref("password")], "As senhas precisam ser iguais!"),
})

export function Register(){

    const navigate = useNavigate()

    const {
        handleSubmit,
        register,
        formState: { errors },
    } = useForm({mode : "onSubmit", resolver: yupResolver(formDataSchema) })

    function handleSubmitCreateUser(e){
        console.log(e)

        fetch( 'http://localhost:3332/users' ,{
            method:'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                'username': e.username,
                'email': e.email,
                'password':e.password,
                'gender':e.gender,
            }),
        }).then((data) =>{
            console.log('Usuario criado com sucesso!')
            navigate('/')
        })
        .catch((err) => console.log(err))
    }

    return(
    <div className="w-full flex justify-center bg-orange_50 h-screen place-items-center">
        <div className="text-center">
            <h1 className="p-8 text-orange_800 text-4xl font-bold">CONSEILLER</h1>

            <form onSubmit={handleSubmit(handleSubmitCreateUser)}>
                <div className="flex flex-col gap-4">
                    <label className="font-bold text-orange_400 text-2xl">Novo Usuário:</label>
                    <input 
                        {...register("username")}
                        className="rounded-xl p-4 w-96 max-w-96" 
                        name="username" 
                        id="username" 
                    />
                    {errors.username && (<ErrorMessage errors={errors} name="username"></ErrorMessage>)}
                    
                    <label className="font-bold text-orange_400 text-2xl">Novo Email:</label>
                    <input 
                        {...register("email")}
                        className="rounded-xl p-4 w-96 max-w-96"  
                        errors={errors} 
                        name="email" 
                        id="email" 
                        type='email' 
                    />
                    {errors.email && (<ErrorMessage errors={errors} name="email"></ErrorMessage>)}

                    <label className="font-bold text-orange_400 text-2xl">Nova Senha:</label>
                    <input 
                        {...register("password") }
                        className="rounded-xl p-4 w-96 max-w-96"  
                        name="password" 
                        id="password" 
                        type="password" 
                    />
                    {errors.password && (<ErrorMessage errors={errors} name="password"></ErrorMessage>)}

                    <label className="font-bold text-orange_400 text-2xl">Confirmar Senha:</label>
                    <input 
                        {...register("passwordConfirmation") }
                        className="rounded-xl p-4 w-96 max-w-96"  
                        name="passwordConfirmation" 
                        id="passwordConfirmation" 
                        type="password" 
                    />
                    <ErrorMessage errors={errors} name="passwordConfirmation"></ErrorMessage>

                    <label className="font-bold text-orange_400 text-2xl">Informe seu Genero:</label>
                    <select  className="rounded-xl p-4 w-96 max-w-96"  {...register("gender") } name="gender" id="gender">
                        <option value="Masculino">Masculino</option>
                        <option value="Feminino">Feminino</option>
                    </select>
                </div>
                <div className="flex justify-between gap-4 pt-4">
                    <a href="#" className="w-full"><Button type={'submit'} title={'Criar'} /></a>
                    <a href="/" className="w-full"><Button type={'button'} title={'Voltar'} /> </a>
                </div>
               
            </form>
        </div>
    </div>
    )
}