'use client'

import React from 'react'

export default function Product() {
  const cart = {
    cart_list: [
      {
        name: 'Produto 1',
        price: 5,
        quantity: 1,
        '--v': 0,
        _id: '',
      },
    ],
  }

  function checkout() {
    fetch('http://localhost:3001/stripe/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(cart),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data)
      })
  }

  return (
    <div className="flex flex-col items-center p-4 b">
      <h1>Produto 1</h1>
      <h2>R$ 5,00</h2>
      <button type="button" onClick={checkout}>
        Comprar
      </button>
    </div>
  )
}
