import JSBI from 'jsbi'
import invariant from 'tiny-invariant'

import { SOLIDITY_TYPE_MAXIMA, ZERO } from '../constants'
import { SolidityType } from '../enums'

export function validateSolidityTypeInstance(value: JSBI, solidityType: SolidityType): void {
  invariant(JSBI.greaterThanOrEqual(value, ZERO), `${value} is not a ${solidityType}.`)
  invariant(JSBI.lessThanOrEqual(value, SOLIDITY_TYPE_MAXIMA[solidityType]), `${value} is not a ${solidityType}.`)
}
