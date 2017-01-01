import axios from 'axios'

export function add(operand1, operand2) {
  return {
    type: 'CALCULATOR_ADD',
    payload: axios.post('/api/calculator/add', {operand1, operand2})
  }
}
