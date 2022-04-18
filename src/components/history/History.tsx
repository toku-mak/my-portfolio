import React from 'react'
import styled from 'styled-components'
import { VerticalLayoutLeft } from 'static/styles/Layout'
import { BoldText, NormalText, SectionTitleText } from 'static/styles/Text'
import { SectionTitleLine } from 'static/styles/Utility'
//import Spacer, { HorizontalLayout } from 'static/styles/Layout'

const Timeline = styled.ol`
  list-style: decimal inside;
`

const TimelineItem = styled.li`
  display: flex;
  margin-bottom: 0;
`

const TimelineTitle = styled.div`
  width: 5%;
  padding: 1.5rem 2rem 2rem 0;
  text-align: right;
`

const TimelineContent = styled.div`
  border-left: 2px solid #868c80;
  width: 95%;
  padding: 1.5rem 0 1.5rem 0.5rem;
  position: relative;
  &::before {
    content: ' ';
    display: block;
    width: 3px;
    height: 3px;
    padding: 0.1rem;
    position: absolute;
    top: 2rem;
    left: -0.3rem;
    border-radius: 50%;
    border: 1px solid #ffffff;
    background: #868c80;
  }
`

const History: React.FC = () => {
  return (
    <VerticalLayoutLeft>
      <SectionTitleText>History</SectionTitleText>
      <SectionTitleLine />
      <Timeline>
        <TimelineItem>
          <TimelineTitle>
            <BoldText>2014</BoldText>
          </TimelineTitle>
          <TimelineContent>
            <BoldText>鹿児島大学　物理科学科　卒業</BoldText>
            <NormalText>
              宇宙コースに所属し、大型望遠鏡に取り付けるカメラの開発を行う
            </NormalText>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineTitle>
            <BoldText>2016</BoldText>
          </TimelineTitle>
          <TimelineContent>
            <BoldText>
              鹿児島大学大学院　理工学研究科　物理宇宙専攻　卒業
            </BoldText>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
      <div>
        {/*
        <HorizontalLayout>
          <Experience />
          <Spacer size={100} axis="horizontal" />
          <Education />
      </HorizontalLayout>*/}
      </div>
    </VerticalLayoutLeft>
  )
}

export default History
