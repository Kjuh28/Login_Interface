import { useState, useEffect } from "react"

export function Success(){
    
    const [data, setData] = useState({})

    useEffect(() => {
        
        const userData = JSON.parse(localStorage.getItem('userData'))
        if(userData){
            setData(userData)
        }
    }, [])

    return(
        <div className="w-full flex justify-center flex-col place-items-center bg-orange_50 h-screen text-orange_400 font-bold text-4xl">
            {(data.gender == "Masculino") ? <h1>Seja bem vindo, {data.username}!</h1> : <h1>Seja bem vinda, {data.username}!</h1>}
        </div>
        
    )
}