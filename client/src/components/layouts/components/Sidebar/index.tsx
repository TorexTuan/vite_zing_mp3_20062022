import { ReactNode, useState } from 'react'
import classNames from 'classnames'
import ReactTooltip from 'react-tooltip'

import AdvertBox from '../../../General/AdvertBox'
import {
  BsPersonSquare,
  BsDisc,
  BsFillChatQuoteFill,
  BsReverseLayoutTextSidebarReverse,
  BsPlayCircle,
  BsStar,
  BsPen,
  BsPlusLg,
} from 'react-icons/bs'
import { IoRadioOutline } from 'react-icons/io5'
import { FiMusic } from 'react-icons/fi'
import { AiOutlineAppstore } from 'react-icons/ai'

interface navigationSidebarDto {
  id: number
  icon?: ReactNode
  title?: string
  side?: string | null
  playIcon?: boolean
}

const navigationsSidebar: navigationSidebarDto[] = [
  {
    id: 1,
    icon: (
      <BsPersonSquare className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />
    ),
    title: 'Cá nhân',
    side: null,
    playIcon: false,
  },
  {
    id: 2,
    icon: <BsDisc className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />,
    title: 'Khám phá',
    side: null,
    playIcon: false,
  },
  {
    id: 3,
    icon: (
      <BsFillChatQuoteFill className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />
    ),
    title: '#zingchart',
    side: null,
    playIcon: true,
  },
  {
    id: 4,
    icon: (
      <IoRadioOutline className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />
    ),
    title: 'Radio',
    side: 'LIVE',
    playIcon: true,
  },
  {
    id: 5,
    icon: (
      <BsReverseLayoutTextSidebarReverse className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />
    ),
    title: 'Theo Dõi',
    side: null,
    playIcon: false,
  },
]

const belowNavSidebars: navigationSidebarDto[] = [
  {
    id: 6,
    icon: <FiMusic className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />,
    title: 'Nhạc Mới',
    side: null,
    playIcon: true,
  },
  {
    id: 7,
    icon: (
      <AiOutlineAppstore className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />
    ),
    title: 'Thể Loại',
    side: null,
    playIcon: false,
  },
  {
    id: 8,
    icon: <BsStar className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />,
    title: 'Top 100',
    side: null,
    playIcon: false,
  },
  {
    id: 9,
    icon: (
      <IoRadioOutline className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]" />
    ),
    title: 'MV',
    side: null,
    playIcon: false,
  },
]

const libraryNavSidebars: navigationSidebarDto[] = [
  {
    id: 1,
    icon: (
      <img
        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-song.cf0cb0b4.svg"
        className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]"
      />
    ),
    title: 'Bài hát',
    side: null,
    playIcon: true,
  },
  {
    id: 2,
    icon: (
      <img
        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-playlist.7e92a5f0.svg"
        className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]"
      />
    ),
    title: 'Playlist',
    side: null,
    playIcon: false,
  },
  {
    id: 3,
    icon: (
      <img
        src="https://zjs.zmdcdn.me/zmp3-desktop/releases/v1.0.13/static/media/my-history.374cb625.svg"
        className="text-theme-navigation hover:text-theme-primary text-2xl mr-[10px]"
      />
    ),
    title: 'Gần đây',
    side: null,
    playIcon: false,
  },
]

function SideBar() {
  const [navActivationIdex, setNavActivationIndex] = useState<number>(2)
  const [hoverIndex, setHoverIndex] = useState<number | null>(null)
  const [libHoverIndex, setLibHoverIndex] = useState<number | null>(null)
  const [isHoverShowPen, setIsHoverShowPen] = useState<boolean>(false)
  const [blurOnScroll, setBlurOnScroll] = useState<boolean>(false)

  const handleBlurOnScroll = () => {
    const element = document.querySelector('.scrolled-element')

    if (element?.scrollTop === 0) {
      setBlurOnScroll(false)
    } else {
      setBlurOnScroll(true)
    }
  }

  return (
    <aside className="side-bar-width h-full shrink-0">
      <div className="bg-theme-sidebar side-bar-width h-full fixed pt-[70px] pb-14">
        <div className="side-bar-width h-[70px] flex items-center pl-[28px] pr-[25px] fixed top-0">
          <img
            className="w-[120px] cursor-pointer"
            src="https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/backgrounds/logo-dark.svg"
          />
        </div>
        <div className='h-full'>
          <ul>
            {navigationsSidebar.map((navigation: navigationSidebarDto) => {
              return (
                <li
                  className={classNames(
                    'border-l-[3px] text-theme-navigation px-6 flex items-center justify-between cursor-pointer py-2 hover:text-theme-primary border-l-transparent',
                    {
                      'border-l-theme-active bg-theme-active text-theme-primary':
                        navigation.id === navActivationIdex,
                    },
                  )}
                  key={navigation.id}
                  onClick={() => setNavActivationIndex(navigation.id)}
                  onMouseOver={() => setHoverIndex(navigation.id)}
                  onMouseOut={() => setHoverIndex(null)}
                >
                  <div className="flex flex-grow-1 items-center">
                    {navigation.icon}
                    <p className="font-semibold text-sm">{navigation.title}</p>
                    {navigation.side && (
                      <span className="text-theme-primary text-[8px] px-[6px] pt-[2px] pb-[1px] bg-[#ff0a0a] rounded ml-2 font-semibold tracking-widest">
                        {navigation.side}
                      </span>
                    )}
                  </div>
                  {navigation.playIcon && hoverIndex === navigation.id && (
                    <BsPlayCircle className="text-theme-primary text-lg font-semibold hover:opacity-80" />
                  )}
                </li>
              )
            })}
          </ul>
          <div className="border-b-theme-separate border-b-[1px] mx-5 mt-5 mb-2" />
          <nav
            onScroll={handleBlurOnScroll}
            className={classNames(
              'scrolled-element relative overflow-hidden hover:display-scrollbar h-[calc(100%-230px)]',
              { 'mask-image-on-sidebar': blurOnScroll },
            )}
          >
            <ul>
              {belowNavSidebars.map((navigation: navigationSidebarDto) => {
                return (
                  <li
                    className={classNames(
                      'border-l-[3px] text-theme-navigation px-6 flex items-center justify-between cursor-pointer py-2 hover:text-theme-primary border-l-transparent',
                      {
                        'border-l-theme-active bg-theme-active text-theme-primary':
                          navigation.id === navActivationIdex,
                      },
                    )}
                    key={navigation.id}
                    onClick={() => setNavActivationIndex(navigation.id)}
                    onMouseOver={() => setHoverIndex(navigation.id)}
                    onMouseOut={() => setHoverIndex(null)}
                  >
                    <div className="flex flex-grow-1 items-center">
                      {navigation.icon}
                      <p className="font-semibold text-sm">{navigation.title}</p>
                      {navigation.side && (
                        <span className="text-theme-primary text-[8px] px-[6px] pt-[2px] pb-[1px] bg-[#ff0a0a] rounded ml-2 font-semibold tracking-widest">
                          {navigation.side}
                        </span>
                      )}
                    </div>
                    {navigation.playIcon && hoverIndex === navigation.id && (
                      <BsPlayCircle className="text-theme-primary text-lg font-semibold hover:opacity-80" />
                    )}
                  </li>
                )
              })}
              <div className="w-full px-6">
                <AdvertBox
                  backgroundColor="bg-theme-activeBorder"
                  buttonColor="bg-theme-alpha text-theme-primary border-theme-primary"
                  content="Đăng nhập để khám phá playlist riêng dành cho bạn"
                  btnContent="Đăng Nhập"
                />
              </div>
              <div className="w-full px-6">
                <AdvertBox
                  backgroundColor="bg-advert-linear-gradient"
                  buttonColor="bg-[#ffdb00] color-[#32323d] border-[#ffdb00]"
                  content="Nghe nhạc không quảng cáo cùng kho nhạc VIP"
                  btnContent="NÂNG CẤP VIP"
                />
              </div>
            </ul>
            <div
              onMouseOver={() => setIsHoverShowPen(true)}
              onMouseLeave={() => setIsHoverShowPen(false)}
              className="mt-7"
            >
              <div className="px-7 py-2 flex justify-between items-center h-7">
                <h5 className="text-theme-primary text-xs font-bold">THƯ VIỆN</h5>
                <div
                  className={classNames(
                    'cursor-pointer px-2 py-2 rounded-[50%] hover:bg-theme-active hidden',
                    { '!block': isHoverShowPen },
                  )}
                  data-tip
                  data-for="customization"
                >
                  <BsPen className="text-theme-primary text-xs" />
                </div>
                <ReactTooltip
                  className="tooltip-customize"
                  id="customization"
                  place="top"
                  effect="solid"
                >
                  Chỉnh sửa
                </ReactTooltip>
              </div>
              {libraryNavSidebars.map((navigation: navigationSidebarDto) => (
                <div
                  className="'border-l-[3px] text-theme-navigation px-6 flex items-center justify-between cursor-pointer py-2 hover:text-theme-primary border-l-transparent'"
                  key={navigation.id}
                  onMouseOver={() => setLibHoverIndex(navigation.id)}
                >
                  <div className="flex flex-grow-1 items-center">
                    {navigation.icon}
                    <p className="text-sm">{navigation.title}</p>
                    {navigation.side && (
                      <span className="text-theme-primary text-[8px] px-[6px] pt-[2px] pb-[1px] bg-[#ff0a0a] rounded ml-2 font-semibold tracking-widest">
                        {navigation.side}
                      </span>
                    )}
                  </div>
                  {navigation.playIcon && libHoverIndex === navigation.id && (
                    <BsPlayCircle className="text-theme-primary text-lg font-semibold hover:opacity-80" />
                  )}
                </div>
              ))}
            </div>
          </nav>
        </div>
        <button 
          className="side-bar-width bg-theme-sidebar flex justify-center items-center h-14 border-t-[1px] border-solid border-t-theme-separate fixed bottom-0"
        >
          <BsPlusLg className="text-theme-primary text-lg mr-[10px]" />
          <p className="text-theme-primary text-sm font-bold">Tạo playlist mới</p>
        </button>
      </div>
    </aside>
  )
}

export default SideBar
