import {LogoutLink} from "@kinde-oss/kinde-auth-nextjs/components";

const DashBoard = async() => {
  
  return (
    <div className="flex justify-center items-center min-h-screen">
        <h1 className="text-4xl font-bold">DashBoard</h1>
        <LogoutLink className="bg-blue-700 p-3 rounded-lg m-4 text-white" >Log out</LogoutLink>

    </div>
  )
}

export default DashBoard