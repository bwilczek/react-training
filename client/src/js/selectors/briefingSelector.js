import { createSelector } from 'reselect'

const getBriefingForIcaoCode = (state, props) => state.briefing[props.icaoCode]

export const makeGetBriefingForIcaoCode = () => {
  return createSelector(
    [ getBriefingForIcaoCode ],
    (briefingForIcaoCode) => briefingForIcaoCode
  )
}
