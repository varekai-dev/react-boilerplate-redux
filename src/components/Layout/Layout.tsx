import { FC, PropsWithChildren } from 'react'

import { Footer, Header } from './elements'

export const Layout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
      <Footer />
    </div>
  )
}
