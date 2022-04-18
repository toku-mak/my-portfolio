import React from 'react'
import styled from 'styled-components'
import Spacer, {
  VerticalLayoutLeft,
  HorizontalLayout,
} from 'static/styles/Layout'
import { NormalText } from 'static/styles/Text'
import { SectionTitleText } from 'static/styles/Text'
import { SectionTitleLine } from 'static/styles/Utility'

const DateArea = styled.div`
  width: 100px;
`

type QualifivationInfo = {
  year: string
  name: string
}

type Props = {
  qualificationInfos: QualifivationInfo[]
}

const QualifivationList: React.FC<Props> = (props) => {
  const qualifivationItems = props.qualificationInfos.map(
    (qualificationInfo) => (
      <HorizontalLayout>
        <DateArea>
          <NormalText>{qualificationInfo.year}</NormalText>
        </DateArea>
        <Spacer size={20} axis="horizontal" />
        <NormalText>{qualificationInfo.name}</NormalText>
      </HorizontalLayout>
    ),
  )

  return (
    <>
      <VerticalLayoutLeft>{qualifivationItems}</VerticalLayoutLeft>
    </>
  )
}

const Qualifivations: React.FC = () => {
  const qualificationsData = {
    qualifications: [
      {
        year: '2014/11',
        name: '基本情報技術者試験　合格',
      },
      {
        year: '2016/12',
        name: '応用情報技術者試験　合格',
      },
      {
        year: '2019/7',
        name: '色彩検定3級　合格',
      },
      {
        year: '2019/7',
        name: '色彩検定2級　合格',
      },
      {
        year: '2019/6~9',
        name: 'バンタンデザイン専門学校グラフィックデザイン速習コース　卒業',
      },
    ],
  }

  return (
    <VerticalLayoutLeft>
      <SectionTitleText>Qualifivations</SectionTitleText>
      <SectionTitleLine />
      <QualifivationList
        qualificationInfos={qualificationsData.qualifications}
      />
    </VerticalLayoutLeft>
  )
}

export default Qualifivations
