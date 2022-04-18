import React from 'react'
import styled from 'styled-components'
import { HorizontalLayout } from 'static/styles/Layout'

const LevelLayout = styled(HorizontalLayout)`
  gap: 5px;
`

const Ellipse = styled.div`
  width: 8px;
  height: 8px;
  border-radius: 50%;
`

const GrayEllipse = styled(Ellipse)`
  background-color: #868c80;
`

const ColorEllipse = styled(Ellipse)`
  background-color: #ea9f97;
`
type Props = {
  level: number
}

const Level: React.FC<Props> = (props) => {
  switch (props.level) {
    case 1:
      return (
        <LevelLayout>
          <ColorEllipse />
          <GrayEllipse />
          <GrayEllipse />
          <GrayEllipse />
          <GrayEllipse />
        </LevelLayout>
      )
    case 2:
      return (
        <LevelLayout>
          <ColorEllipse />
          <ColorEllipse />
          <GrayEllipse />
          <GrayEllipse />
          <GrayEllipse />
        </LevelLayout>
      )
    case 3:
      return (
        <LevelLayout>
          <ColorEllipse />
          <ColorEllipse />
          <ColorEllipse />
          <GrayEllipse />
          <GrayEllipse />
        </LevelLayout>
      )
    case 4:
      return (
        <LevelLayout>
          <ColorEllipse />
          <ColorEllipse />
          <ColorEllipse />
          <ColorEllipse />
          <GrayEllipse />
        </LevelLayout>
      )
    case 5:
      return (
        <LevelLayout>
          <ColorEllipse />
          <ColorEllipse />
          <ColorEllipse />
          <ColorEllipse />
          <ColorEllipse />
        </LevelLayout>
      )
    default:
      return (
        <LevelLayout>
          <GrayEllipse />
          <GrayEllipse />
          <GrayEllipse />
          <GrayEllipse />
          <GrayEllipse />
        </LevelLayout>
      )
  }
}

export default Level
