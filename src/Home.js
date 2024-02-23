import { useEffect } from "react";
import { useNavigate,Link } from "react-router-dom";

const Home = () =>{
    const navigate = useNavigate();
    
    useEffect(()=>{
        let username=sessionStorage.getItem('username');
        
        if(username===''|| username ===null){
            navigate("/Login")
        }

    },);
        
    return(
        <div>
            <div className="header">
                <Link to='/'>Home</Link>
                <Link style={{float:'right'}} to='/Login'>Logout</Link>
                
            </div>
            <h1 className="text-center">welcome to home</h1>
        </div>

    );

}
export default Home;