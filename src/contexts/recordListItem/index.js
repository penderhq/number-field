import React from 'react'
import {css} from 'emotion'
import formatNumber from '@cmds/number-input/lib/utils/formatNumber'

export default class NumberField extends React.Component {

    render() {

        const {
            allowNegativeNumbers,
            precisionId,
            numberFormatId
        } = this.props


        return (
            <div
                className={css`
                    max-width: 100%;
                    overflow: hidden;
                    display: inline-flex;
                    align-items: center;
                    max-width: 100%;
                    overflow: hidden;
                    text-overflow: ellipsis;
                    white-space: nowrap;
                    line-height: 1.5;
                    font-size: 13px;
                    height: 100%;
                `}
            >
                <div
                    className={css`
                        flex: 1 1 auto;
                        min-width: 0;
                        min-height: 0;
                        line-height: 1.5;
                        max-width: 100%;
                        overflow: hidden;
                        text-overflow: ellipsis;
                        white-space: nowrap;
                    `}
                >
                    {formatNumber(this.props.number, {
                        allowNegative: allowNegativeNumbers,
                        precision: parseInt(precisionId, 10),
                        format: numberFormatId
                    })}
                </div>
            </div>
        )
    }
}