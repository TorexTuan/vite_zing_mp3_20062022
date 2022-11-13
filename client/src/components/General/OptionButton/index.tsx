import { ReactNode, useState, useEffect } from 'react'
import ReactTooltip from 'react-tooltip'

interface TooltipButtonDto {
  icon?: ReactNode
  describe?: string
}

function OptionButton({ icon, describe }: TooltipButtonDto) {
  return (
    <div className="relative flex justify-center">
      <button
        className="bg-theme-alpha hover:brightness-90 text-xl h-10 w-10 rounded-[50%] 
        ml-[10px] flex justify-center items-center text-theme-navigation"
        data-tip
        data-for={describe}
      >
        {icon}
      </button>
      <ReactTooltip id={describe} className="tooltip-customize" place="bottom" effect="solid">
        {describe}
      </ReactTooltip>
    </div>
  )
}

export default OptionButton
