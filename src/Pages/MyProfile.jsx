import { useState } from "react"
import { assets } from '../assets/assets_frontend/assets'
const MyProfile = () => {
  const [userData, setUserData] = useState({
    name: "Edward Vincent",
    Image: assets.profile_pic,
    email: "richardjameswap@gmail.com",
    phone: "+1  123 456 7890",
    Address: {
      line1: "57th Cross, Richmond ",
      line2: "Circle, Church Road, London"
    },
    Gender: "Male",
    dob: '2003-8-15'

  })
  const [isEdited, setIsEdited] = useState(false)
  return (
    <div className=" max-w-lg flex flex-col gap-2 text-sm">

      <img className="w-36 rounded" src={userData.Image} alt='' />
      {
        isEdited ? <input className="bg-gray-50 text-3xl font-medium max-w-60 mt-4" type='text' value={userData.name} onChange={(e) => setUserData(prev => ({ ...prev, name: e.target.value }))} />
          : <p className="font-medium text-3xl text-neutral-800 mt-4">{userData.name}</p>
      }
      <hr className="bg-zinc-400 h-[1px] border-none" />
      <div >
        <p className="text-neutral-500 underline mt-3">CONTACT INFORMATION</p>
        <div className=" grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Email id:</p>
          {<p className="text-blue-500">{userData.email}</p>}
          <p className="font-medium">Phone:</p>
          {
            isEdited ? <input className="bg-gray-100 max-w-52" value={userData.phone} type='text' onChange={(e) => setUserData(prev => ({ ...prev, phone: e.target.value }))} /> : <p className="text-blue-500">{userData.phone}</p>
          }
          <p className="font-medium">Address</p>
          {
            isEdited ? <p><input className="bg-gray-100 max-w-52" onChange={(e) => setUserData(prev => ({ ...prev, Address: { ...prev.Address, line1: e.target.value } }))} value={userData.Address.line1} type='text' /> <br /><input onChange={(e) => setUserData(prev => ({ ...prev, Address: { ...prev.Address, line2: e.target.value } }))} value={userData.Address.line2} type='text' /></p>
             : <p className="text-blue-500">{userData.Address.line1}<br />{userData.Address.line2}</p>
          }
        </div>
      </div>
      <div>
        <p className="text-neutral-500 underline mt-3">BASIC INFORMATION</p>
        <div className=" grid grid-cols-[1fr_3fr] gap-y-2.5 mt-3 text-neutral-700">
          <p className="font-medium">Gender:</p>
          {
            isEdited ? <select className="bg-gray-100 max-w-20" onChange={(e) => setUserData(prev => ({ ...prev, Gender: e.target.value }))}><option value="Male">Male</option><option value="Female">Female</option></select> : <p  className="text-blue-500">{userData.Gender}</p>
          }
          <p className="font-medium">Birthday:</p>
          {
            isEdited ? <input className="bg-gray-100 max-w-28" type='date' onChange={(e) => setUserData(prev => ({ ...prev, dob: e.target.value }))} value={userData.dob} /> : <p  className="text-blue-500">{userData.dob}</p>
          }
        </div>
      </div>
      <div className="mt-10">
        {
          isEdited ? <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer" onClick={() => setIsEdited(false)}>Save information</button> :
            <button className="border border-primary px-8 py-2 rounded-full hover:bg-primary hover:text-white transition-all duration-300 cursor-pointer" onClick={() => setIsEdited(true)}>Edit</button>
        }
      </div>
    </div>
  )
}

export default MyProfile