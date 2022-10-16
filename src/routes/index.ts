import { RoutesDto } from '../dtos/RoutesDto'
import Discovery from '../pages/Discovery'
import Following from '../pages/Following'
import AboutUs from '../pages/About'

const publicRoutes: RoutesDto[] = [
  { path: '/', component: Discovery },
  { path: '/following', component: Following },
  { path: '/about-us', component: AboutUs },
]

const privateRoutes: RoutesDto[] = []

export { publicRoutes, privateRoutes }
