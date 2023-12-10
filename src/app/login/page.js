"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import {signIn} from "next-auth/react"
export default function LoginPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [loginInProgress,setLoginInProgress] = useState(false)
  async function handleFormSubmit(e) {
    e.preventDefault()
    setLoginInProgress(true)
    // setUserCreated(false)
  const user = await signIn("credentials",{email,password})   
  console.log(user);
    setLoginInProgress(false)
  }

  return (
    <section className=" mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Login</h1>
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input type="email" placeholder="email" disabled={loginInProgress} value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="password" disabled={loginInProgress} value={password} onChange={e => setPassword(e.target.value)} />
        <button type='submit' disabled={loginInProgress}>Login</button>
        <div className="my-4 text-center text-gray-500">or login with provider</div>
        <button className="flex gap-4 justify-center">
          <Image alt="" src="/google.png" width={24} height={24} />
          Login with google
        </button>
      
      </form>
    </section>
  )
}
