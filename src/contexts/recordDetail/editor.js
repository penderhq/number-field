import React from 'react'
import NumberInput from '@cmds/number-input'
import {css} from 'emotion'

export default class NumberField extends React.Component {

    render() {

        return (
            <NumberInput
                className={css`
                    background-color: rgba(0, 0, 0, 0.05);
                    border: 2px solid transparent;
                    border-radius: 3px;
                    padding: 6px;
                    width: 100%;
                    max-width: 220px;
                    &:focus {
                        outline: none;
                        border-color: rgba(0, 0, 0, 0.25);
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