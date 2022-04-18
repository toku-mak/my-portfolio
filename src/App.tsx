import React from 'react'
import { Route, Routes } from 'react-router-dom'
import styled from 'styled-components'
import Spacer, { HorizontalLayout } from 'static/styles/Layout'
import Home from 'components/Home'
//import WorksDetail from 'components/WorksDetail'
//import toTop from 'static/images/icon-top.png'

const App: React.FC = () => {
  const FooterBar = styled(HorizontalLayout)`
    background-color: #515151;
    width: 100%;
    height: 64px;
    justify-content: flex-end;
  `

  /*const TopIcon = styled.img`
    margin-top: -33px;
    width: 60px;
    height: 60px;
  `

  const scrollTop = (): void => {
    window.scrollTo(0, 0)
  }*/

  return (
    <>
      <div>
        <Routes>
          <Route path="/" element={<Home />} />
          {/*<Route path="/works" element={<WorksDetail />} />*/}
        </Routes>
        {/* フッター */}
        <FooterBar>
          {/*<TopIcon src={toTop} onClick={scrollTop} />*/}
          <Spacer size={53} axis="horizontal" />
        </FooterBar>
      </div>
    </>
  )
}

export default App
