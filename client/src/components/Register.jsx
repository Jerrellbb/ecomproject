import {Form, useActionData, useNavigate} from 'react-router-dom'
import { useEffect } from 'react'

export default function Register(){
  const res = useActionData()
  const navigate = useNavigate()
  
  useEffect(() => {
    if (res?.status === 201) {
      navigate('/auth/login/')
    }
  }, [res, navigate])
  return (
    <div className="form-container">
      
      <h1 className="text-center bold display-3 mb-4">Register</h1>
      <Form  className='form' method="POST">
        
        <input type="text" name="username" placeholder='Username' autoComplete='username' />
        
        
        <input type="email" name="email" placeholder='Email' autoComplete='email'/>
        
        
        <input type="password" name="password" placeholder='Password' autoComplete='new-password' />
        
        
        <input type="password" name="password_confirmation" placeholder='Confirm password' autoComplete='new-password' />
        
        <button   type="submit">Register</button>
        {res && <p className='danger'>{res.data.message}</p>}
      </Form>
    </div>
  )
}