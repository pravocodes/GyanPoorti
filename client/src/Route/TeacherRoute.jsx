import { useEffect, useState } from "react";
import { useAuth } from "../Context/Auth";
import { Outlet } from "react-router-dom";
import {Spinner} from "../Components/Spinner"
import axios from "axios";

export default function TeacherRoute(){
    const [ok,setOK] = useState(false);

    const {auth} = useAuth();

    useEffect(()=>{
        const authcheck = async () =>{
            const response = await axios.get("api/v1/auth/teacher-auth",{
                headers:{
                    Authorization:auth?.token,
                },
            })
            if(response.data.ok){
                setOK(true);
            }
            else{
                setOK(false);
            }

        }
        if(auth?.token)authcheck();
    },[auth?.token]);

    return ok?<Outlet/>:<Spinner/>
}
