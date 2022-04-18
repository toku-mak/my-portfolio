import styled from 'styled-components'

export const VerticalLayout = styled.div`
  display: flex;
  flex-direction: column;
`

export const VerticalLayoutCenter = styled(VerticalLayout)`
  align-items: center;
`

export const VerticalLayoutLeft = styled(VerticalLayout)`
  align-items: flex-start;
`

export const VerticalLayoutWithGap = styled(VerticalLayoutCenter)`
  gap: 135px;
`

export const VerticalLayoutWithGapBackgroundGray = styled(
  VerticalLayoutWithGap,
)`
  background-color: #f7f7f7;
  width: 100%;
`

export const HorizontalLayout = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: flex-start;
`
export const HorizontalLayoutWithGap = styled(HorizontalLayout)`
  gap: 100px;
`

type Props = {
  size: number
  axis: string
}

const Spacer: React.FC<Props> = (props) => {
  const width = props.axis === 'vertical' ? 1 : props.size
  const height = props.axis === 'horizontal' ? 1 : props.size
  return (
    <div
      style={{
        width,
        minWidth: width,
        height,
        minHeight: height,
      }}
    />
  )
}
export default Spacer
