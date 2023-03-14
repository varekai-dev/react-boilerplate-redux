import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { Route as RoutePath } from 'enums'

import { Home } from 'modules/home'

import './styles/global.scss'

export const App: FC = () => {
  return (
    <Routes>
      <Route path={RoutePath.Home} element={<Home />} />
    </Routes>
  )
}
