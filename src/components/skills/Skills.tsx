import React from 'react'
import { VerticalLayoutLeft } from 'static/styles/Layout'
import { SectionTitleText } from 'static/styles/Text'
import { SectionTitleLine } from 'static/styles/Utility'
import SkillList from './SkillList'
import SkillData from '../../static/data/skill.json'

const Skills: React.FC = () => {
  return (
    <VerticalLayoutLeft>
      <SectionTitleText>Skills</SectionTitleText>
      <SectionTitleLine />
      <SkillList skillInfos={SkillData.skills} />
    </VerticalLayoutLeft>
  )
}

export default Skills
