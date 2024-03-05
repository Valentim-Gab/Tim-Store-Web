import React from 'react'

export default function CardAdBannerRoot() {
  return (
    <>
      <div className="flex items-center justify-center gap-4 w-[280px] px-6 py-4 bg-card-ad-banner text-black rounded shadow">
        <span className="flex items-center justify-center">
          <i className="icon-[solar--dumbbell-large-bold-duotone] w-12 h-12"></i>
        </span>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium">Precisando de roupas de treino?</p>
          <p className="text-xs font-bold">Clique aqui!</p>
        </div>
      </div>
      <div className="flex items-center justify-center gap-4 w-[280px] px-6 py-4 bg-card-ad-banner-second text-white rounded shadow">
        <span className="flex items-center justify-center">
          <i className="icon-[solar--earth-bold] w-12 h-12"></i>
        </span>
        <div className="flex flex-col gap-1">
          <p className="text-xs font-medium">Precisando roupas para o verão?</p>
          <p className="text-xs font-bold">Clique aqui!</p>
        </div>
      </div>
    </>
  )
}
