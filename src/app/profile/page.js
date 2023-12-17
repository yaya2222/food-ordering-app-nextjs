"use client"
import { useSession } from 'next-auth/react'
import Image from 'next/image';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react'

export default function PrifilePage() {
  const session = useSession()
  const { status } = session
  const [userName, setUserName] = useState(" ")
  const [image, setImage] = useState("")
  const [isSaveing, setIsSaveing] = useState(false)
  const [saved, setSaved] = useState(false)
  const [errorSave, setErrorSave] = useState(false)

  useEffect(() => {
    if (status === "authenticated") {
      setUserName(session.data.user.name)
      setImage(session.data.user.image)
    }
  }, [session, status])

  if (status === "loading") {
    return "Loading..."
  }

  if (status === "unauthenticated") {
    redirect("/login")
    // return redirect("/login")
  }

  async function handleProfileInfoUpdate(e) {
    e.preventDefault()
    setIsSaveing(true)
    setSaved(false)
    const response = await fetch("/api/profile", {
      method: 'PUT',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name: userName,image })
    })
    setIsSaveing(false)
    if (response.ok) {
      setSaved(true)
    } else {
      setErrorSave(true)
    }
  }



  async function handleFileChange(e) {
    const files = e.target.files
    if (files?.length === 1) {
      const file = files[0]
      const reader = new FileReader();
      reader.onload = async (e) => {
        const base64DataUri = e.target.result;
        const data = new FormData()
        data.set("file", base64DataUri)
        const response = await fetch("/api/upload", {
          method: 'POST',
          body: data
        })
        const link = await response.json()
        setImage(link)
      };
      reader.readAsDataURL(file);

    }
  }

  return (
    <section className='mt-8'>
      <h1 className="text-center text-primary text-4xl mb-4">Profile</h1>
      <div className='max-w-md mx-auto' >
        {saved && <h2 className='text-center bg-green-100 p-4 rounded-lg border border-green-300'>Profile saved!</h2>}
        {isSaveing && <h2 className='text-center bg-blue-100 p-4 rounded-lg border border-blue-300'>Saveing...</h2>}
        {errorSave && <h2 className='text-center bg-red-100 p-4 rounded-lg border border-red-300'>Error save!</h2>}
        <div className='flex gap-4 items-center'>
          <div>
            <div className='p-2 rounded-lg relative max-w-[120px]'>
              {image && <Image src={image} alt='Avatar' height={250} width={250} className='rounded-lg w-full h-full mb-1' />}
              <label>
                <input type='file' className='hidden' onChange={handleFileChange} />
                <span className='block border border-gray-300 rounded-lg p-2 text-center cursor-pointer'>Edit</span>
              </label>
            </div>
          </div>
          <form className='grow' onSubmit={handleProfileInfoUpdate}>
            <input type='text' placeholder='First and last name' value={userName} onChange={(e) => { setUserName(e.target.value) }} />
            <input type='email' disabled={true} value={session.data.user.email} />
            <button type='submit'>Save</button>
          </form>
        </div>
      </div>
    </section>
  )
}
