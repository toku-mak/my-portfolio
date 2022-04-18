import React from 'react'
import Spacer, {
  HorizontalLayout,
  VerticalLayoutCenter,
  VerticalLayoutLeft,
} from 'static/styles/Layout'
import { TitleText } from 'static/styles/Text'
import styled from 'styled-components'
import MainImageFile1 from 'static/images/main-sakura.jpg'
import MainImageFile2 from 'static/images/main-PC.jpg'

const TitleArea = styled(VerticalLayoutLeft)`
  position: absolute;
  left: -150px;
  top: 310px;
  transform: rotate(270deg);
`

const MainTittleText = styled(TitleText)`
  font-style: normal;
  font-weight: bold;
  font-size: 80px;
  line-height: 80px;
  text-align: left;
  color: #868c80;
`

const SubTittleText = styled(TitleText)`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  line-height: 28px;
  text-align: left;
  color: #868c80;
`
const TitleBar = styled.hr`
  width: 490px;
  height: 0px;
  border: 1px solid #868c80;
`
const MainImage1 = styled.img`
  width: 400px;
  height: 500px;
  object-fit: cover;
`

const MainImage2 = styled.img`
  width: 550px;
  height: 690px;
  object-fit: cover;
`

const MainVisual: React.FC = () => {
  return (
    <>
      <HorizontalLayout>
        <TitleArea>
          <MainTittleText>TOKUMA</MainTittleText>
          <TitleBar />
          <SubTittleText>Software Engineer</SubTittleText>
        </TitleArea>
        <Spacer size={150} axis="horizontal" />
        <VerticalLayoutCenter>
          <Spacer size={120} axis="vertical" />
          <MainImage1 src={MainImageFile1} />
        </VerticalLayoutCenter>
        <Spacer size={150} axis="horizontal" />
        <MainImage2 src={MainImageFile2} />
      </HorizontalLayout>
    </>
  )
}

export default MainVisual
