import React from 'react'
import parseNumber from './../../utils/parse-number'
import formatNumber from './../../utils/format-number'
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
        editing: false,
        number: null,
        rawNumber: null
    }

    formatNumber = (input) => {
        return formatNumber(input, {
            allowNegativeNumbers: this.props.allowNegativeNumbers,
            numberFormatId: this.props.numberFormatId,
            precisionId: this.props.precisionId
        })
    }

    parseNumber = (input) => {
        return parseNumber(input, {
            allowNegativeNumbers: this.props.allowNegativeNumbers,
            numberFormatId: this.props.numberFormatId,
            precisionId: this.props.precisionId
        })
    }

    componentDidMount() {

        this.setState({
            number: this.formatNumber(this.props.number)
        })
    }

    render() {

        const {number} = this.state

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
                value={number || ''}
                onChange={this.handleChange}
                onFocus={this.handleFocus}
                onBlur={this.handleBlur}
            />
        )
    }

    handleFocus = () => {

        this.setState({
            editing: true
        })
    }

    handleBlur = () => {

        this.setState({
            editing: false,
            number: this.formatNumber(this.parseNumber(this.state.number))
        })
    }

    handleChange = (e) => {

        this.setState({
            number: e.target.value
        })

        this.props.onChange({
            id: this.props.id,
            number: this.parseNumber(e.target.value)
        })
    }
}