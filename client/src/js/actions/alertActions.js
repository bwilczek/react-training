export function clear() {
  console.log('about to dispatch ALERT_CLEAR')
  return {
    type: 'ALERT_CLEAR',
    payload: null,
  }
}
