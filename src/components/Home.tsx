import React from 'react'
import styled from 'styled-components'
import Spacer, {
  HorizontalLayoutWithGap,
  VerticalLayoutCenter,
  VerticalLayoutWithGap,
} from 'static/styles/Layout'
import { BoldText, HeadTitleText } from 'static/styles/Text'
import MainVisual from './main_visual/MainVisual'
import AboutMe from './about_me/AboutMe'
import History from './history/History'
import Character from './character/Character'
import Skills from './skills/Skills'
import Qualifivations from './qualifications/Qualifications'
import AdditionalInformation from './additional_information/AdditionalInformation'
import Works from './works/Works'
import Likes from './liks/Likes'
import Vision from './vision/Vision'

const ColorBackGroundArea = styled(VerticalLayoutCenter)`
  width: 100%;
  background-color: #ecdfc2;
`
const ElementPlacementArea = styled(VerticalLayoutCenter)`
  gap: 50px;
`

const Home: React.FC = () => {
  return (
    <VerticalLayoutWithGap>
      <MainVisual />
      <ColorBackGroundArea>
        <Spacer size={135} axis="vertical" />
        <ElementPlacementArea>
          <HeadTitleText>About This Page</HeadTitleText>
          <VerticalLayoutCenter>
            <BoldText>Welcome !</BoldText>
            <BoldText>
              ソフトウェアエンジニア「とくま」の自己紹介サイトです。
            </BoldText>
            <BoldText>Reactの勉強用に作成しています。</BoldText>
            <BoldText>作成途中ですが、添削用に公開してます。</BoldText>
          </VerticalLayoutCenter>
        </ElementPlacementArea>
        <Spacer size={135} axis="vertical" />
      </ColorBackGroundArea>
      <ElementPlacementArea>
        <HeadTitleText>About Me</HeadTitleText>
        <AboutMe />
        <HorizontalLayoutWithGap>
          <History />
          <Character />
        </HorizontalLayoutWithGap>
        <HorizontalLayoutWithGap>
          <Skills />
          <Qualifivations />
        </HorizontalLayoutWithGap>
        <HorizontalLayoutWithGap>
          <AdditionalInformation />
          <Spacer size={550} axis="horizontal" />
        </HorizontalLayoutWithGap>
      </ElementPlacementArea>
      <ColorBackGroundArea>
        <Spacer size={135} axis="vertical" />
        <ElementPlacementArea>
          <HeadTitleText>Works</HeadTitleText>
          <Works />
          <Spacer size={135} axis="vertical" />
        </ElementPlacementArea>
      </ColorBackGroundArea>
      <ElementPlacementArea>
        <HeadTitleText>Vision</HeadTitleText>
        <Vision />
      </ElementPlacementArea>
      <ColorBackGroundArea>
        <ElementPlacementArea>
          <Spacer size={135} axis="vertical" />
          <HeadTitleText>Likes</HeadTitleText>
          <Likes />
          <Spacer size={135} axis="vertical" />
        </ElementPlacementArea>
      </ColorBackGroundArea>
    </VerticalLayoutWithGap>
  )
}

export default Home
