import { useEffect, useState } from "react";
import {useAuth} from "../Context/Auth"
import axios from "axios";
import {Spinner}  from "../Components/Spinner"
import { Outlet } from "react-router-dom";

export default function StudentRoute(){
    const [ok,setOk] = useState(false);
    const {auth} = useAuth();

    useEffect(()=>{
        const authcheck = async ()=>{
            const response = await axios.get("api/v1/auth/student-auth",{
                headers:{
                    Authorization:auth?.token,
                },
            });
            if(response.data.ok){
                setOk(true);
            }
            else{
                setOk(false);
            }
        }
        if(auth?.token)authcheck();
    },[auth?.token])

    return ok? <Outlet/>:<Spinner/>
}