import { useEffect, useState } from "react";
import { OneUser } from "../UrlList";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
function OneDetail()
{ const {id} = useParams();
    const [list,setList] = useState([]);
    async function Download()
    {  
        
        const res =await fetch(OneUser+id,{
        method:'GET',
        headers:{
            'Content-type':"application/json"
        }
        
    })
     const data=(await res.json());
     setList(data.data)
    
     }
      useEffect(()=>{Download()},[]);
    return (<>
           {list.map((data)=>
      
          <div className="card" key={data.id}>
          <img src={data.avatar}/>
          <h3 className="">{(data.available? <>Availiable:</>:<></>)}</h3>
          <h3>Avatar:{data.avatar}</h3>
          <h3>Domain:{data.domain}</h3>
          <h3>Email:{data.email}</h3>
          <h3>first_name:{data.first_name}</h3>
          <h3>Gender:{data.gender}</h3>
          <h3>Last_name:{data.last_name}</h3>
          
          <Link to={'http:localhost:5173/updateUser/'+data.id}>
          <button>
            UpdateUser
            </button></Link>
      </div>
  
  ) }    
            
    </>)
}

export default OneDetail;