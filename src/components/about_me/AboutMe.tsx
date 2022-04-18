import React from 'react'
import { HorizontalLayoutWithGap } from 'static/styles/Layout'
import { NormalText } from 'static/styles/Text'
import styled from 'styled-components'
import Avator from '../../static/images/icon-bear.png'

const AvatorImage = styled.img`
  border-radius: 50%;
  width: 256px;
  height: 256px;
  object-fit: cover;
  object-position: 5px -15px;
  background-color: #e6e6dc;
`

const SummaryArea = styled.div`
  width: 500px;
  height: 350px;
  background-color: #ecc6c1;
  align-items: center;
`

const SummaryText = styled(NormalText)`
  text-align: center;
  color: #000000;
`

const Layout = styled(HorizontalLayoutWithGap)`
  display: flex;
  align-items: center;
`

const AboutMe: React.FC = () => {
  return (
    <Layout>
      <AvatorImage src={Avator} />
      <SummaryArea>
        <SummaryText>
          <br />
          <br />
          <br />
          ソフトウェアエンジニアの「とくま」です。
          <br />
          30代前半、社会人7年生、一児(1才)のママです。
          <br />
          <br />
          組み込み系からWeb業界のフロントエンドエンジニアに
          <br />
          転向しようと奮闘中です。
          <br />
          UI/UXデザインに拘りたい、拘ったデザインを実現したいです。
          <br />
          <br />
        </SummaryText>
      </SummaryArea>
    </Layout>
  )
}

export default AboutMe
