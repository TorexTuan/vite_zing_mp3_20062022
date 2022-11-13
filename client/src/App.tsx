import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import { RoutesDto } from './dtos/RoutesDto'
import { publicRoutes } from './routes'
import DefautLayouts from './components/layouts/DefaultLayouts'

function App() {
  return (
    <Router>
      <div className="App theme-brown">
        <Routes>
          {publicRoutes.map((publicRoute: RoutesDto, index: number) => {
            let Page = publicRoute.component
            const Layout = DefautLayouts
            return (
              <Route
                key={index}
                path={publicRoute.path}
                element={
                  <Layout>
                    <Page />
                  </Layout>
                }
              />
            )
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
