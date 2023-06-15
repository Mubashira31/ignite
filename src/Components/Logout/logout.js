import React, { useEffect,useContext } from 'react'
import { useNavigate } from 'react-router-dom'
// import StudentContext from "../../App";
const Logout = () => {
    // const {  state,dispatch } = useContext(StudentContext);
    const navigate = useNavigate();
    useEffect(()=>{
        fetch('/logout',{
            method:'GET',
            headers:{
                Accept:"application/json",
                "Content-Type": "application/json"
            },
            credentials:"include"
        }).then((res)=>{
            // dispatch({type:"USER",payload:false})
            navigate("/signin",{replace:true});
            if(res.status!==200){
                const error = new Error(res.error);
                throw error;
            }
        }).catch((err)=>{
            console.log(err);
        })
    })
  return (
    <>
    <div action='GET'>Logout</div>
    </>
  )
}

export default Logout