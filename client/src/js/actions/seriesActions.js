export function append(id, value) {
  console.log('append dispatched')
  return {
    type: 'SERIES_APPEND',
    payload: {id, value},
  }
}

export function clear(id) {
  return {
    type: 'SERIES_CLEAR',
    payload: {id},
  }
}
