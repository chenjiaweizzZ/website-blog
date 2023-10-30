import React, { memo } from 'react'
import { useRoutes } from 'react-router-dom'
import routes from './router'
import AppHeader from './components/app-header'
import { AppStyled } from './styled'
// import { AppFooter } from './components/app-footer'

const App = memo(() => {
  return (
    <AppStyled>
      <div className='app'>
        <AppHeader />
        <div className='page'>
          {useRoutes(routes)}
        </div>
        {/* <AppFooter></AppFooter> */}
      </div>
    </AppStyled>

  )
})

export default App
