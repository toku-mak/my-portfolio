import React from 'react'
import styled from 'styled-components'
import Spacer, {
  HorizontalLayout,
  VerticalLayoutLeft,
} from 'static/styles/Layout'
import { NormalText } from 'static/styles/Text'
import Level from './Level'

const ItemNameText = styled(NormalText)`
  font-weight: bold;
`

const ItemNameArea = styled.div`
  width: 200px;
`

type SkillInfo = {
  name: string
  level: number
  note: string
}

type Props = {
  skillInfos: SkillInfo[]
}

const SkillList: React.FC<Props> = (props) => {
  const SkillItesm = styled(HorizontalLayout)`
    align-items: center;
  `

  const skillItems = props.skillInfos.map((skillInfo) => (
    <SkillItesm>
      <ItemNameArea>
        <ItemNameText>{skillInfo.name}</ItemNameText>
      </ItemNameArea>
      <Level level={skillInfo.level} />
      <Spacer size={20} axis="horizontal" />
      <NormalText>{skillInfo.note}</NormalText>
    </SkillItesm>
  ))

  return (
    <>
      <VerticalLayoutLeft>{skillItems}</VerticalLayoutLeft>
    </>
  )
}

export default SkillList
