import React from 'react'
import {css} from 'emotion'
import formatNumber from '../../utils/format-number'

export default class NumberField extends React.Component {

    render() {

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
                        allowNegativeNumbers: this.props.allowNegativeNumbers,
                        precisionId: this.props.precisionId,
                        numberFormatId: this.props.numberFormatId
                    })}
                </div>
            </div>
        )
    }
}