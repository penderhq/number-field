import React from 'react'
import NumberInput from '@cmds/number-input'
import {css} from 'emotion'

export default class NumberField extends React.Component {

    render() {

        return (
            <NumberInput
                className={css`
                    -moz-appearance: none;
                    -webkit-appearance: none;
                    -webkit-transition: border-color .15s ease-in-out;
                    appearance: none;
                    background-color: #fff;
                    border: 1px solid #d9d9d9;
                    border-radius: 3px;
                    color: #191919;
                    display: block;
                    font-size: 16px;
                    height: 38px;
                    line-height: 1.42857;
                    padding: 5px 15px;
                    transition: border-color .15s ease-in-out;
                    width: 280px;
                    max-width: 100%;
                    &:focus {
                        -webkit-transition-duration: 0s;
                        border-color: #07f;
                        outline: 0;
                        transition-duration: 0s;
                    }
                `}
                value={this.props.number}
                precision={parseInt(this.props.precisionId, 10)}
                format={this.props.numberFormatId}
                allowNegative={this.props.allowNegativeNumbers}
                onChange={this.handleChange}
            />
        )
    }

    handleChange = ({value}) => {

        if (this.props.onChange) {
            this.props.onChange({
                id: this.props.id,
                number: value
            })
        }
    }
}