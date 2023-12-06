import React from 'react'

export default function RegisterPage() {
  return (
    <section className='text-center text-primary text-4xl mt-8'>
        <h1>Register</h1>
        <form>
            <input type='email' placeholder='email' />
            <input type='password' placeholder='password' />
            <button type='submit'>Register</button>
        </form>
    </section>
  )
}
