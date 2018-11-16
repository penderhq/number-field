import ReactDOM from 'react-dom'
import React from 'react'
import times from 'lodash/times'
import numeral from 'numeral'
import isString from 'lodash/isString'
import constant from 'lodash/constant'
import {css} from 'emotion'

/**
 * Outlines
 * -----------
 *
 * componentDidMount
 *  - set input value to formatted version of number prop
 *
 * input.onChange
 *  - trigger onChange with formatted version of value
 *
 * input.onBlur
 *  - set input value to formatted version of number prop
 */
export default class NumberField extends React.Component {

    state = {
        number: null
    }

    format(number) {

        if (!number) return null
        if (isString(number) && !number.length) return null

        let format = '0'

        if (this.props.numberFormatId === 'decimal') {
            format = '0.' + times(parseInt(this.props.precisionId, 10), constant(0)).join('')
            number = parseFloat(number)
        } else {
            number = parseInt(number, 10)
        }

        number = this.props.allowNegativeNumbers ? number : Math.max(0, number)
        return numeral(number).format(format)
    }

    componentWillMount() {
        this.setState({
            number: this.format(this.props.number)
        })
    }

    componentDidUpdate(prevProps) {

        if (this.props.number && !prevProps.number) {
            this.setState({
                number: ''
            })
            return
        }

        const a = this.format(this.props.number)
        const b = this.format(prevProps.number)

        const numberChanged = a !== b
        const precisionChanged = this.props.precisionId !== prevProps.precisionId
        const numberFormatChanged = this.props.numberFormatId !== prevProps.numberFormat
        const allowNegativeNumbersChanged = this.props.allowNegativeNumbers !== prevProps.allowNegativeNumbers

        if (numberChanged || precisionChanged || numberFormatChanged || allowNegativeNumbersChanged) {
            this.setState({
                number: a
            })
        }
    }

    render() {

        return (
            <input
                data-context-id={this.props.contextId}
                data-role-id={this.props.roleId}
                type="text"
                className={css`
                    padding: 16px 20px;
                    width: 100%;
                    background: #fafafa;
                    border: 1px solid #ced4da;
                    box-shadow: none;
                    border-radius: 4px;
                    font-size: 16px;
                    -webkit-appearance: none;
                    &:focus {
                        background-color: #fff;
                        border-color: #000;
                        outline: 0;
                    }
                `}
                value={this.props.number || ''}
                onChange={this.handleChange}
                onBlur={this.handleBlur}
            />
        )
    }


    handleKeyPress = (e) => {

        if (e.nativeEvent && e.nativeEvent.code && e.nativeEvent.code === 'Enter') {
            ReactDOM.findDOMNode(this).blur()
        }
    }

    handleChange = (e) => {

        const {inputType, data} = e.nativeEvent

        const allowedCharacters = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', ',', '.']

        if (this.props.allowNegativeNumbers) {
            allowedCharacters.push('-')
        }

        // Only allow numerical input
        if (inputType === 'insertText' && allowedCharacters.includes(data) === false) {
            return
        }

        this.setState({
            number: e.target.value
        })
    }

    handleBlur = () => {

        let number = this.format(this.state.number)

        this.setState({
            number
        })

        if (number && this.props.numberFormatId === 'integer') {
            number = parseInt(number, 10)
        }

        if (number && this.props.numberFormatId === 'decimal') {
            number = parseFloat(number)
        }

        this.props.onChange({
            id: this.props.id,
            number
        })
    }
}