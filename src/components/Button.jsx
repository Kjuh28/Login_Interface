export function Button({title, type}){
    return(
        <button type={type} className="p-4 rounded-xl hover:scale-105 hover:bg-black/50 m-2 bg-orange_400 hover:bg-orange_800 w-full">{title}</button>
    )
   
}