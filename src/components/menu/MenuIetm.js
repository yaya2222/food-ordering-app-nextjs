import React from 'react'

export default function MenuIetm() {
 return (
    <div className="bg-gray-200 py-4 rounded-lg text-center hover:bg-red-700">
    <img src="/pizza.png" alt="pizza" />
    <h4 className="font-semibold text-xl my-3">Pepperoni Pizza</h4>
    <p className="text-gray-500 text-sm">
      orem Ipsum is simply dummy text of the printing and typesetting y text of 
    </p>
    <button className="bg-primary text-white rounded-full mt-4 px-8 py-2">Add to cart 12$</button>
  </div>
  )
}
