export default function AddUser(){
    const handleRegister=(event)=>{
        event.preventDefault();
        const form = event.target;
        const email= form.email.value;
        const password= form.password.value
        const user = {email,password}
        console.log(user)
      
        fetch('http://localhost:5000/users',{
          method: 'POST',
          headers: {
            'content-type': 'application/json'
          },
          body: JSON.stringify(user)
        })
        .then(res=>res.json())
        .then(data=>{
          console.log(data);
          if(data.insertId){
            alert('Users Added Successfully')
            form.reset();
          }
            
          
        })
    }
    return(<>
     <h1>Registration From</h1>
      <form onSubmit={handleRegister}>
        <input type='email' name='email'></input>
        <br></br>
        <input type='password' name='password'></input>
      <br></br>
      <br></br>
      <button>Submit</button>
      </form>

    </>)

} 