import isString from 'lodash/isString'
import isNaN from 'lodash/isNaN'
import isNil from "lodash/isNil";

export default (input, {allowNegativeNumbers, numberFormatId, precisionId}) => {

    if (isNil(input)) {
        return null
    }

    if (!isString(input)) {
        throw new Error(`Input ${input} is not a string`)
    }

    if (numberFormatId === 'decimal') {

        input = parseFloat(input)

        input = input.toFixed(precisionId)

        input = parseFloat(input)
    }

    if (numberFormatId === 'integer') {
        input = parseInt(input, 10)
    }

    if (!allowNegativeNumbers) {
        input = Math.abs(input)
    }

    if (isNaN(input)) {
        input = null
    }

    return input
}