import { createSelector } from 'reselect'

const getList = (state, props) => state.series[props.seriesId]

export const makeGetStats = () => {
  return createSelector(
    [ getList ],
    (list) => {
      if(list == undefined || list.length == 0) {
        return {cnt: 0, avg: NaN, sum: 0}
      }
      const cnt = list.length
      const sum = list.reduce(((total, next) => total+next), 0)
      const avg = sum/cnt
      return {
        cnt,
        sum,
        avg
      }
    }
  )
}

export default makeGetStats
