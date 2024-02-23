// import { useEffect, useState } from "react";
// import { Link,useNavigate } from "react-router-dom";
// // import { toast } from "react-toastify";
// const Login = () =>{
//     const[Username,usernameupdate]=useState('');
//     const[password,passwordupdate]=useState('');

//     const navigate = useNavigate()
//     useEffect(()=>{
// sessionStorage.clear()
//     },[]);

//     const proceedLogion =(e) => {
//         e.preventDefault();
//         if(validate()){
            
//             fetch("http://localhost:8000/user/"+Username).then((res)=>{

//                 return res.json();
//             }).then((resp)=>{
//                 // console.log(resp)
//                 if (Object.keys(resp).length=== 0){
//                     toast.error('please enter valid username');
                   
//                 }else{
//                     if(resp.password === password){
//                         toast.success('success');
//                         sessionStorage.setItem('username',Username);
                        
//                         navigate('/')
//                     }
//                 }
//             }).catch((err)=>{
//                 toast.error('Login Failed due to:'+err.message);
//             });
                

//         }
//     }
//     const validate=()=>{
//         let result=true;
//         if(Username ===''|| Username ===null){
//             result=false;
//             toast.warning('please enter username');
//         }
//         if(password ===''|| password ===null){
//             result=false;
//             toast.warning('please enter password');
//         }
//         return result;
//     }

//     return(
//         <div className="row">
//             <div className="offset-lg-3 col-lg-6" style={{marginTop:'100px'}}>
//                 <form onSubmit={proceedLogion} className="container">
//                     <div className="card">
//                         <div className="card-header">
//                             <h2>User Login</h2>
//                         </div>
//                         <div className="card-body">
//                             <div className="form-group">
//                                 <label>User Name <span className="errmsg">*</span></label>
//                                 <input value={Username} onChange={e=>usernameupdate(e.target.value)} className="form-control"></input>
//                             </div>
//                             <div className="form-group">
//                                 <label>Password <span className="errmsg">*</span></label>
//                                 <input type="password" value={password} onChange={e=>passwordupdate(e.target.value)} className="form-control"></input>
//                             </div>
//                         </div>
//                         <div className="card-footer">
//                             <button type="submit" className="btn btn-primary">Login</button> 
//                                 <Link className="btn btn-success"to={'/Register'}>New User</Link>
//                         </div>
//                     </div>
//                 </form>
//             </div>
            
//         </div>
//     );

// }
// export default Login;