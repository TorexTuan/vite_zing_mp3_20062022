import { Props } from '../../../dtos/LayoutsDto'
import Header from '../components/Header'
import Sidebar from '../components/Sidebar'

function DefautLayouts({ children }: Props) {
  return (
    <div className="flex w-full">
      <Sidebar />
      <div className="w-full">
        <Header />
        <div className="px-[70px] bg-theme-layout">{children}</div>
      </div>
    </div>
  )
}

export default DefautLayouts
