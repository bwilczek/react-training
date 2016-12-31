export function add(operand1, operand2) {
  return {
    type: 'CALCULATOR_ADD',
    payload: {operand1, operand2}
  }
}
