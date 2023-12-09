"use client"
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

export default function RegisterPage() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [creatingUser, setCreatingUser] = useState(false)
  const [userCreated, setUserCreated] = useState(false)
  const [error, setError] = useState(false)
  async function handleFormSubmit(e) {
    e.preventDefault()
    setCreatingUser(true)
    setUserCreated(false)
    setError(false)
    const {ok} = await fetch("/api/register", {
      method: "POST",
      body: JSON.stringify({ email, password }),
      headers: { "Content-Type": "application/json" }
    })
    if (ok) {
      setUserCreated(true)
    } else {
      setError(true)
    }
    setCreatingUser(false)
  }

  return (
    <section className=" mt-8">
      <h1 className="text-center text-primary text-4xl mb-4">Register</h1>
      {userCreated && (
        <div className="my-4 text-center">User created.<br /> Now you can <Link href={"/login"} className="underline">login &raquo;</Link></div>
      )}
      {error && (
        <div className="my-4 text-center">Error.<br /> Please tey again leater</div>
      )}
      <form className="block max-w-xs mx-auto" onSubmit={handleFormSubmit}>
        <input type="email" placeholder="email" disabled={creatingUser} value={email} onChange={e => setEmail(e.target.value)} />
        <input type="password" placeholder="password" disabled={creatingUser} value={password} onChange={e => setPassword(e.target.value)} />
        <button type="submit" disabled={creatingUser}>Register</button>
        <div className="my-4 text-center text-gray-500">or login with provider</div>
        <button className="flex gap-4 justify-center">
          <Image alt="" src="/google.png" width={24} height={24} />
          Login with google
        </button>
        <div className="my-4 text-center text-gray-500 border-t pt-4">Existing account? <Link href={"/login"} className="underline">Login here &raquo;</Link></div>
      </form>
    </section>
  );
}
