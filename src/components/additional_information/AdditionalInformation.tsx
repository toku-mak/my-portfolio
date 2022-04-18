import React from 'react'
import { VerticalLayoutLeft } from 'static/styles/Layout'
import { BoldText, SectionTitleText } from 'static/styles/Text'
import { SectionTitleLine } from 'static/styles/Utility'
const AdditionalInformation: React.FC = () => {
  return (
    <VerticalLayoutLeft>
      <SectionTitleText>Additional Information</SectionTitleText>
      <SectionTitleLine />
      <BoldText>Comming Soon ...</BoldText>
    </VerticalLayoutLeft>
  )
}

export default AdditionalInformation
