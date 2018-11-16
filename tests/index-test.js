import expect from 'expect'
import parseNumber from './../src/utils/parse-number'
import formatNumber from './../src/utils/format-number'

describe('parseNumber', () => {

    it('should parse decimals with precision', () => {

        const result = parseNumber('-32.250', {
            allowNegativeNumbers: false,
            precisionId: '2',
            numberFormatId: 'decimal'
        })

        expect(result).toEqual(32.25)
    })

    it('should parse integers', () => {

        const result = parseNumber('-32.250', {
            allowNegativeNumbers: false,
            numberFormatId: 'integer'
        })

        expect(result).toEqual(32)
    })
})

describe('formatNumber', () => {

    it('should format decimals with precision', () => {

        const result = formatNumber(-32.250, {
            allowNegativeNumbers: false,
            precisionId: '2',
            numberFormatId: 'decimal'
        })

        expect(result).toEqual('32.25')
    })

    it('should format integers', () => {

        const result = formatNumber(-32.250, {
            allowNegativeNumbers: false,
            numberFormatId: 'integer'
        })

        expect(result).toEqual('32')
    })
})