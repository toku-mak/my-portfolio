import styled from 'styled-components'

export const TitleText = styled.div`
  font-family: 'Noto Serif JP', sans-serif;
`

export const HeadTitleText = styled(TitleText)`
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 28px;
  text-align: center;

  color: #868c80;
`

export const SectionTitleText = styled(TitleText)`
  font-style: normal;
  font-weight: bold;
  font-size: 16px;

  color: #ea9f97;
`

export const Text = styled.div`
  font-family: Roboto;
  font-style: normal;
  line-height: 28px;
  color: #868c80;
`

export const BoldText = styled(Text)`
  font-weight: bold;
  font-size: 16px;
`
export const NormalText = styled(Text)`
  font-weight: 500;
  font-size: 14px;
`

export const HeadWord = styled.div`
  width: 1198px;

  font-family: Roboto;
  font-style: normal;
  font-weight: bold;
  font-size: 40px;
  line-height: 28px;
  text-align: center;

  color: #515151;
`

export const HeadWordJP = styled.div`
  width: 1198px;

  font-family: Roboto;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 28px;
  text-align: center;

  color: #515151;
`
