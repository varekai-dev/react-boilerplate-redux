import { FC } from 'react'

import { Button } from 'designSystem'
import { Counter, Layout } from 'components'

export const Home: FC = () => {
  return (
    <Layout>
      <h1>Home</h1>
      <Counter />
      <Button>Click</Button>
    </Layout>
  )
}
