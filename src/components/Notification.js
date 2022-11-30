import React, { useEffect } from 'react'
import { useNavigate, NavLink } from 'react-router-dom'
import { IoIosArrowForward } from 'react-icons/io'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

function Test1() {
  const Navigate = useNavigate()
  // const [toggle, setToggle] = useState(true);

  // useEffect(() => {
  //   const timer = setTimeout(() => setToggle(!toggle), 10000);
  //   return () => clearTimeout(timer);
  // }, []);

  const notify = () => {
    toast('You just activated a notification!')
  }

  return (
    <>
      <ToastContainer />
      <div className="notification">
        <button onClick={notify}>Notify!</button>
        <NavLink to={'/upload'}>
          ImageUpload <IoIosArrowForward className="foward" />
        </NavLink>
      </div>
    </>
  )
}
export default Test1
