import Image from "next/image";
import {RegisterLink, LoginLink} from "@kinde-oss/kinde-auth-nextjs/components";

export default function Home() {
  return (
   <main className="flex justify-center items-center min-h-screen text-center">
      <div>
      <h1 className="text-3xl font-bold">This is my kinde auth app</h1>
      <div className="flex">
      <LoginLink className="bg-blue-700 p-3 rounded-lg m-4 text-white">Sign in</LoginLink>
      <RegisterLink className="bg-blue-700 p-3 rounded-lg m-4 text-white" >Sign up</RegisterLink>

      </div>
      </div>
   </main>
       
  );
}
