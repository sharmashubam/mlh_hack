import { useContext } from "react"
import { MyContext } from "../../contexts/MyContextProvider"
function Navbar() {
  const {clickonprofile,
    clickprofile} = useContext(MyContext)
  return (
    <div className='bg-white flex border-2 border-black px-7 py-2 justify-between items-center fixed w-full mb-2 h-16'>
      <h1>Name</h1>
      {/* <input type='text' className='border-2 border-black rounded-2xl px-3 py-1'/> */}
      <button onClick={clickprofile}>
        <img className="h-12 m-12 rounded-full ring" src="profile.png" alt="Profile" />
        </button>
    </div>
  )
}

export default Navbar
