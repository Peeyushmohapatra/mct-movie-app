import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

 

export const Protected = ({children}) => {
    const login = useSelector((state) => {
        return state.login
    })
    // console.log(login);

    if(login === true){
            return children
    }else{
        return <Navigate to="/" />
    }
}