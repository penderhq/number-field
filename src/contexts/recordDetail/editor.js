import ReactDOM from 'react-dom'
import React from 'react'
import times from 'lodash/times'
import numeral from 'numeral'
import isString from 'lodash/isString'
import constant from 'lodash/constant'
import {css} from 'emotion'

export default class NumberInput extends React.Component {

    state = {
        value: null
    }

    format(number) {

        if (!number) return null
        if (isString(number) && !number.length) return null

        let format = '0'

        if (this.props.numberFormat === 'decimal') {
            format = '0.' + times(this.props.precision, constant(0)).join('')
            number = parseFloat(number)
        } else {
            number = parseInt(number, 10)
        }

        number = this.props.allowNegativeNumbers ? number : Math.max(0, number)
        return numeral(number).format(format)
    }

    componentWillMount() {
        this.setState({
            value: this.format(this.props.value)
        })
    }

    componentDidUpdate(prevProps) {

        if (this.props.value && !prevProps.value) {
            this.setState({
                value: ''
            })
            return
        }

        const a = this.format(this.props.value)
        const b = this.format(prevProps.value)

        const valueChanged = a !== b
        const precisionChanged = this.props.precision !== prevProps.precision
        const numberFormatChanged = this.props.numberFormat !== prevProps.numberFormat
        const allowNegativeNumbersChanged = this.props.allowNegativeNumbers !== prevProps.allowNegativeNumbers

        if (valueChanged || precisionChanged || numberFormatChanged || allowNegativeNumbersChanged) {
            this.setState({
                value: a
            })
        }
    }

    render() {

        return (
            <input
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
                value={this.state.value || ''}
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
            value: e.target.value
        })
    }

    handleBlur = () => {

        let value = this.format(this.state.value)

        this.setState({
            value
        })

        if (value && this.props.numberFormat === 'integer') {
            value = parseInt(value, 10)
        }

        if (value && this.props.numberFormat === 'decimal') {
            value = parseFloat(value)
        }

        this.props.onChange({
            id: this.props.id,
            value
        })
    }
}