 import { useEffect, useState } from "react";
import { userList } from "../UrlList";
import userCard from "../userCard";
import { useSelector } from "react-redux/es/hooks/useSelector";
import "./style.css"
import { Link } from "react-router-dom";
 function AllUsers(){
    const [list,setList] = useState([]);
    const [page,setPage]=useState( useSelector((state)=>state.pager.page))
    async function Download()
    {   

        const res =await fetch(userList,{
        method:'POST',
        headers:{
            'Content-type':"application/json"
        },
        body:JSON.stringify({
            page:page
           })
        
    })
     const data=(await res.json());
     setList(data.data)
     }
      useEffect(()=>{Download()},[page]);
 return(<>

 <div className="createUSer"><Link to={"http://localhost:5173/createUser"}><button >Create new user</button></Link></div>
 <div className="mainDiv">
    {list.map((data)=>
      
        <div className="card" key={data.id}>
             <Link to={`/${data.id}`}>
            <img src={data.avatar}/></Link>
            <h3 className="">{(data.available? <>Availiable:</>:<></>)}</h3>
            <h3>Avatar:{data.avatar}</h3>
            <h3>Domain:{data.domain}</h3>
            <h3>Email:{data.email}</h3>
            <h3>first_name:{data.first_name}</h3>
            <h3>Gender:{data.gender}</h3>
            <h3>Last_name:{data.last_name}</h3>
            
        </div>
    
    )}</div>

  <div className="flex-space"> 
     <button onClick={()=>setPage((page==1)? page:page-1)}>Prev</button>
    <button onClick={()=>setPage(page+1)}>Next</button>
    </div>
  
 </>)
}
export default  AllUsers;