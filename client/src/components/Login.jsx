import { useEffect } from 'react'
import { Form, useActionData, useNavigate } from 'react-router-dom'
import { setToken } from "../../utils/helpers/common"


import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'




export default function Login() {
  const res = useActionData()
  const navigate = useNavigate()


  useEffect(() => {
    if (res?.status === 200) {
      setToken(res.data.access)
      navigate('/')

    } else if (res?.status === 401) {

      toast.error('Password or Username is incorrect!')
    }
  }, [res, navigate])
  return (



    <>
      <div className="form-container">
        <h1 className="text-center bold display-3 mb-4">Login</h1>
        <Form className='form' method="POST">
          
          <div className="input-container">
            <input type="text" name="username" placeholder='Username' autoComplete='username' />
            <input type="password" name="password" placeholder="Password" autoComplete='current-password' />
            <button type="submit">Login</button>
          </div>

          {res && <p className='danger'>{res.data.message}</p>}
        </Form>
      </div>

      <ToastContainer />
    </>
  )
}