import isNumber from 'lodash/isNumber'
import isString from 'lodash/isString'
import isNil from 'lodash/isNil'

export default (input, {allowNegativeNumbers, precisionId, numberFormatId}) => {

    if (isNil(input)) {
        return null
    }

    if (!isNumber(input)) {
        throw new Error(`Input ${input} is not a number`)
    }

    if (isString(input)) return null

    if (!allowNegativeNumbers) {
        input = Math.abs(input)
    }

    if (numberFormatId === 'decimal') {

        input = parseFloat(input)

        input = input.toFixed(precisionId)
    }

    if (numberFormatId === 'integer') {

        input = parseInt(input, 10)

        input = `${input}`
    }

    return input
}