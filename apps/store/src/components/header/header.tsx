import React from 'react'

export default function Header() {
  return (
    <header className="hidden flex-col items-center self-stretch bg-primary text-background shadow-md lg:flex">
      <div className="flex justify-between items-center self-stretch h-20 px-16">
        <div className="logo text-2xl font-black">TIM-BRECHO</div>
        <input
          id="search"
          placeholder="O que você procura?"
          type="text"
          className=""
        />
        <div className="flex justify-end items-center gap-4 self-stretch">
          <button className="flex justify-center items-center">
            <i className="icon-[solar--bag-4-bold] text-3xl"></i>
          </button>
          <button className="flex justify-center items-center gap-2 py-4 px-8 font-bold">
            <i className="icon-[solar--login-3-bold] text-2xl"></i>
            Entrar
          </button>
        </div>
      </div>

      <div className="flex items-end self-stretch px-16">
        <ul className="flex">
          <li>Teste</li><li>Teste</li><li>Teste</li><li>Teste</li><li>Teste</li>
        </ul>
      </div>
    </header>
  )
}
