import React from 'react'
import { css } from 'emotion'
import formatNumber from '@pndr/number-input/lib/utils/formatNumber'
import defaultEmptyRenderer from '../../defaultEmptyRenderer'
import isNil from 'lodash/isNil'

export default class NumberField extends React.Component {

    render() {

        const {
            allowNegativeNumbers,
            precisionId,
            numberFormatId
        } = this.props

        if (isNil(this.props.number)) {
            return defaultEmptyRenderer()
        }

        return (
            <div
                className={css`
                    outline: none;
                    display: flex;
                    vertical-align: middle;
                    height: auto;
                    position: relative;
                    white-space: normal;
                    box-shadow: none;
                    overflow: visible;
                    box-sizing: border-box;
                    background-color: transparent;
                `}
            >
                <div
                    className={css`
                        display: flex;
                        flex: 1 1 auto;
                        min-width: 0;
                        min-height: 0;
                    `}
                >
                    <div
                        className={css`
                            cursor: pointer;
                            white-space: pre-wrap;
                            word-wrap: break-word;
                            max-width: 100%;
                        `}
                    >
                        {formatNumber(this.props.number, {
                            allowNegative: allowNegativeNumbers,
                            precision: parseInt(precisionId, 10),
                            format: numberFormatId
                        })}
                    </div>
                </div>
            </div>
        )
    }
}