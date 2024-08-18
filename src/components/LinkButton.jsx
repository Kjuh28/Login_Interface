import { Link } from "react-router-dom";

export function LinkButton({title, to}){
    return(
       <Link to={to} className="w-full p-4 rounded-xl hover:scale-105 hover:bg-black/50 m-2 bg-orange_400 hover:bg-orange_800"> {title} </Link>
    )
}