import { ReactNode, useState } from 'react'
import classNames from 'classnames'

import OptionButton from '../../../General/OptionButton'
import { BsArrowLeft, BsArrowRight, BsSearch, BsUpload } from 'react-icons/bs'
import { RiVipFill } from 'react-icons/ri'
import { FiTrendingUp } from 'react-icons/fi'
import { IoSettingsOutline } from "react-icons/io5"

const iconTooltip = [
  {
    icon: (
      <svg width="20" height="20" viewBox="0 0 20 20">
        <defs>
          <linearGradient id="j32lhg93hd" x1="62.206%" x2="18.689%" y1="70.45%" y2="39.245%">
            <stop offset="0%" stopColor="#F81212"></stop>
            <stop offset="100%" stopColor="red"></stop>
          </linearGradient>
          <linearGradient id="hjoavsus6g" x1="50%" x2="11.419%" y1="23.598%" y2="71.417%">
            <stop offset="0%" stopColor="#00F"></stop>
            <stop offset="100%" stopColor="#0031FF"></stop>
          </linearGradient>
          <linearGradient id="la1y5u3dvi" x1="65.655%" x2="25.873%" y1="18.825%" y2="56.944%">
            <stop offset="0%" stopColor="#FFA600"></stop>
            <stop offset="100%" stopColor="orange"></stop>
          </linearGradient>
          <linearGradient id="2dsmrlvdik" x1="24.964%" x2="63.407%" y1="8.849%" y2="55.625%">
            <stop offset="0%" stopColor="#13EFEC"></stop>
            <stop offset="100%" stopColor="#00E8DF"></stop>
          </linearGradient>
          <filter
            id="4a7imk8mze"
            width="230%"
            height="230%"
            x="-65%"
            y="-65%"
            filterUnits="objectBoundingBox"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
          </filter>
          <filter
            id="301mo6jeah"
            width="312.7%"
            height="312.7%"
            x="-106.4%"
            y="-106.4%"
            filterUnits="objectBoundingBox"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
          </filter>
          <filter
            id="b2zvzgq7fj"
            width="295%"
            height="295%"
            x="-97.5%"
            y="-97.5%"
            filterUnits="objectBoundingBox"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
          </filter>
          <filter
            id="a1wq161tvl"
            width="256%"
            height="256%"
            x="-78%"
            y="-78%"
            filterUnits="objectBoundingBox"
          >
            <feGaussianBlur in="SourceGraphic" stdDeviation="3.9"></feGaussianBlur>
          </filter>
          <path
            id="qtpqrj1oda"
            d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
          ></path>
          <path id="jggzvnjgfc" d="M0 0H20V20H0z"></path>
          <path
            id="2eiwxjmc7m"
            d="M3.333 14.167V5.833l-1.666.834L0 3.333 3.333 0h3.334c.04 1.57.548 2.4 1.524 2.492l.142.008C9.403 2.478 9.958 1.645 10 0h3.333l3.334 3.333L15 6.667l-1.667-.834v8.334h-10z"
          ></path>
        </defs>
        <g fill="none" fillRule="evenodd" transform="translate(2 3)">
          <mask id="tinejqaasb" fill="#fff">
            <use xlinkHref="#qtpqrj1oda"></use>
          </mask>
          <use fill="#FFF" fillOpacity="0" xlinkHref="#qtpqrj1oda"></use>
          <g mask="url(#tinejqaasb)">
            <g transform="translate(-2 -3)">
              <mask id="uf3ckvfvpf" fill="#fff">
                <use xlinkHref="#jggzvnjgfc"></use>
              </mask>
              <use fill="#D8D8D8" xlinkHref="#jggzvnjgfc"></use>
              <circle
                cx="8.9"
                cy="6.8"
                r="9"
                fill="url(#j32lhg93hd)"
                filter="url(#4a7imk8mze)"
                mask="url(#uf3ckvfvpf)"
              ></circle>
              <circle
                cx="9.3"
                cy="13.7"
                r="5.5"
                fill="url(#hjoavsus6g)"
                filter="url(#301mo6jeah)"
                mask="url(#uf3ckvfvpf)"
              ></circle>
              <circle
                cx="15.9"
                cy="6.9"
                r="6"
                fill="url(#la1y5u3dvi)"
                filter="url(#b2zvzgq7fj)"
                mask="url(#uf3ckvfvpf)"
              ></circle>
              <circle
                cx="16.4"
                cy="17.7"
                r="7.5"
                fill="url(#2dsmrlvdik)"
                filter="url(#a1wq161tvl)"
                mask="url(#uf3ckvfvpf)"
              ></circle>
            </g>
          </g>
          <use fill="#FFF" fillOpacity="0.05" xlinkHref="#2eiwxjmc7m"></use>
        </g>
      </svg>
    ),
    describe: 'Chủ đề',
  },
  {
    icon: <RiVipFill />,
    describe: 'Nâng cấp VIP',
  },
  {
    icon: <BsUpload />,
    describe: 'Tải lên',
  },
  {
    icon: <IoSettingsOutline />,
    describe: 'Cài đặt',
  },
]

function Header() {
  const [inputSearchFocus, setInputSearchFocus] = useState<boolean>(false)

  return (
    <div className="h-[70px] w-full px-[60px] bg-theme-layout flex items-center justify-between">
      <div className="flex justify-center items-center">
        <div>sdflkjasd <div>sdfjahsjkdfhajshdfjahsdfhjkashdfhasjkdhfasjkdfhahsdjkfhkasdhfkashdfhaskdhfkasdhfkjahsdkfhaskdfh</div></div>
        <div className="flex justify-center">
          <BsArrowLeft className="text-[#ffffff] text-2xl mr-5 cursor-pointer" />
          <BsArrowRight className="text-[#897975] text-2xl mr-5" />
        </div>
        <div
          className={classNames(
            'h-10 w-[540px] rounded-[20px] bg-theme-alpha flex items-center px-3 relative',
            { 'rounded-b-none bg-theme-primary': inputSearchFocus },
          )}
        >
          <BsSearch className="text-theme-navigation text-xl" />
          <input
            onFocus={() => setInputSearchFocus(true)}
            onBlur={() => setInputSearchFocus(false)}
            className="placeholder:text-theme-navigation placeholder:text- caret-[#fff] bg-transparent h-9 w-full ml-2 outline-none"
            type="text"
            placeholder="Tìm kiếm bài hát, nghệ sĩ, lời bài hát..."
          />

          {inputSearchFocus && (
            <div className="bg-theme-primary absolute left-0 top-[calc(100%)] w-full px-[10px] py-[13px] shadow-[0_4px_6px_0_rgba(32,33,36,0.28)] rounded-b-[20px]">
              <div className="text-theme-primary px-[10px] pb-2 text-sm font-semibold opacity-90">
                Đề suất cho bạn
              </div>
              <div>
                <a
                  className="flex items-center px-[10px] py-2 hover:bg-theme-alpha rounded"
                  href=""
                >
                  <FiTrendingUp className="text-theme-navigation text-base mr-[10px] opacity-70" />
                  <p className="text-theme-primary text-sm opacity-90">ngôi sao</p>
                </a>
                <a
                  className="flex items-center px-[10px] py-2 hover:bg-theme-alpha rounded"
                  href=""
                >
                  <FiTrendingUp className="text-theme-navigation text-base mr-[10px] opacity-70" />
                  <p className="text-theme-primary text-sm opacity-90">ngôi sao</p>
                </a>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="flex">
        {
          iconTooltip.map((tooltip, index) => {
            return <OptionButton key={index} describe={tooltip.describe} icon={tooltip.icon} />
          }) as ReactNode
        }
      </div>
    </div>
  )
}

export default Header
