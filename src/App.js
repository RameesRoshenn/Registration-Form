import { TextField , Box ,FormControl ,Input , InputLabel ,InputAdornment , FilledInput ,IconButton, MenuItem ,Button} from '@mui/material';
import { AccountCircle ,AlternateEmail ,LocalPhone ,VisibilityOff , Visibility ,AppRegistration} from '@mui/icons-material';
import React, { useState } from 'react';
import './App.css';

function App() {




  // password
  

  const [showPassword, setShowPassword] = React.useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };
 
  // const [userData , setUserData]=useState({
  //   uname:"",
  //   email:"",
  //   // phone:"",
  //   password:""
  // })

  const [Name ,setName] =useState(0)
  const [Email , setEmail] =useState(0)
  // const [Phone , setPhone] =useState(0)
  const [Password,setPassword] =useState(0)
  const [ConformPass , setConformPass]=useState(0)



  // validate
  const[isName,setIsName]=useState(true)
  const [isEmail , setIsEmail] =useState(true)
  // const [isPhone , setIsPhone] =useState(true)
  const [isPassword,setIsPassword] =useState(true)
  const [isConformPass,setIsConformPass] =useState(true)

    // validate name in the  form
    const validateName = (e) => {
      const { value } = e.target;
      if (!!value.match(/^([a-zA-Z ]){2,30}$/)) {
        setName(value);
        setIsName(true);
      } else {
        setName(value);
        setIsName(false);
      }
    };
  

    // validate mail 
    const validateEmail = (e) => {
      const { value } = e.target;
      if(!!value.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        setEmail(value);
        setIsEmail(true);
      } else {
        setEmail(value);
        setIsEmail(false);
      }
    };

    // validate phone
  //   const validatePhone =(e)=>{
  //   const {value} =e.target;
  //   if(!!value.match(/^(\()?\d{3}(\))?(-|\s)?\d{3}(-|\s)\d{4}$/)) {
  //     setPhone(value);
  //     setIsPhone(true);
  //   } else {
  //     setPhone(value);
  //     setIsPhone(false);
  //   }
  // };


    // validate passsword  in the from 
    const validatepassword =(e)=>{
      const { value } = e.target;
      if(value.length>=8){
        setPassword(value);
        setIsPassword(true);
      }else{
        setPassword(value);
        setIsPassword(false);
      }
    }
    const validateconformpassword=(e)=>{
      const { value } = e.target;
      if (value==Password){
        setConformPass(value);
        setIsConformPass(true);
      }
      else{
        setConformPass(value);
        setIsConformPass(false);
      }
    }






 
  // const getUserData =(e)=>{

  //   const{name , value} =e.target
  //   console.log(name.value);
  //   setUserData({...userData,[name]:value})
  // }
  // console.log(userData);

  const handleSubmit =(e) =>{
    e.preventDefault()
    if(!Name || !Email || !Password || !ConformPass){
      alert("fill the form properily")
    }else{
      if(isName && isEmail  && isPassword && isConformPass){
        alert(`
        NAME: ${Name}
        Email Id: ${Email}
        PASSWORD: ${Password}`)
      }else{
        alert("fill the form completly")
      }
    }
    

  }


  return (
    <div style={{ height: '100vh',background: 'linear-gradient(179.4deg, rgb(253, 240, 233) 2.2%, rgb(255, 194, 203) 96.2%)'
  }} className='d-flex justify-content-center align-items-center  w-100' >

  
  <div style={{ width: '400px' , height:'500px' ,backgroundColor:'#80d0c7'}} className=' ps-5 pe-5 pt-5  mt-4 pb-5 mb-5 rounded '>
  
    <h1 className='d-flex justify-content-center align-items-center  ' style={{color:'white'}}><i class="fa-solid fa-id-card me-2 "></i>REGISTRATION</h1>
  <div >
  
  
        <FormControl fullWidth sx={{ m: 1 }} variant="filled">
            <InputLabel htmlFor="outlined-adornment-amount"> FULL NAME</InputLabel>
            <FilledInput name='uname' onChange={(e)=>validateName(e)} value={Name || ''} 
              id="outlined-adornment-amount"
              startAdornment={<InputAdornment position="start"><AccountCircle /></InputAdornment>}
            />
          </FormControl>
          {
              !isName && 
            (
              <div className="mb-3 text-danger fw-bolder">
                *Invalid  Input
              </div>
            )
            }
  
         
  
    
    
            <FormControl fullWidth sx={{ m: 1 }} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">EMAIL ADDRESS</InputLabel>
              <FilledInput name='email' onChange={(e)=>validateEmail(e)} value={Email || ''}
                id="filled-adornment-amount"
                startAdornment={<InputAdornment position="start"><AlternateEmail/></InputAdornment>}
              />
            </FormControl>
    
            {
                !isEmail && 
              (
                <div className="mb-3 text-danger fw-bolder">
                  *Invalid  Input
                </div>
              )
              }
    
            {/* <FormControl fullWidth sx={{ m: 1 }} variant="filled">
              <InputLabel htmlFor="filled-adornment-amount">PHONE</InputLabel>
              <FilledInput name='phone' onChange={(e)=>validatePhone(e)} value={Phone || ''}
                id="filled-adornment-amount"
                startAdornment={<InputAdornment position="start"><LocalPhone/>+91</InputAdornment>}
              />
            </FormControl>
            {
                !isPhone && 
              (
                <div className="mb-3 text-danger fw-bolder">
                  *Invalid Phone Number 
                </div>
              )
              }
     */}
    
           
              <FormControl fullWidth sx={{ m: 1 }} variant="filled">
                <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
                <FilledInput name='password' onChange={(e)=>validatepassword(e)} value={Password || ''}
                  id="filled-adornment-password"
                  type={showPassword ? 'text' : 'password'}
                  endAdornment={
                    <InputAdornment position="end">
                      <IconButton
                        aria-label="toggle password visibility"
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        edge="end"
                      >
                        {showPassword ? <VisibilityOff /> : <Visibility />}
                      </IconButton>
                    </InputAdornment>
                  }
                />
              </FormControl>
    
              {
                !isPassword && 
              (
                <div className="mb-3 text-danger fw-bolder">
                  *Invalid  Input
                </div>
              )
              }
    
              <FormControl fullWidth sx={{ m: 1 }} variant="filled">
              <InputLabel htmlFor="filled-adornment-password">Conform Password</InputLabel>
              <FilledInput name='password' onChange={(e)=>validateconformpassword(e)}
                id="filled-adornment-password"
                type={showPassword ? 'text' : 'password'}
                endAdornment={
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword}
                      onMouseDown={handleMouseDownPassword}
                      edge="end"
                    >
                      {showPassword ? <VisibilityOff /> : <Visibility />}
                    </IconButton>
                  </InputAdornment>
                }
              />
            </FormControl>
  
            {
                !isConformPass && 
              (
                <div className="mb-3 text-danger fw-bolder">
                  *Invalid  Input
                </div>
              )
              }
  
  
    
    <div className='d-flex justify-content-center mt-2 '>
      
              <Button component="label"  onClick={handleSubmit} variant="contained" startIcon={<AppRegistration />}>
       REGISTER
       
      </Button>
    </div>
          
    
        
  
      
  
  
   
  
          
        
       
         
        
     
        
  </div>
      
    </div>
</div>

    
  );
}

export default App;
