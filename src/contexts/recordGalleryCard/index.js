import React from 'react'
import {css} from 'emotion'
import formatNumber from "../../utils/format-number";

export default class NumberField extends React.Component {

    render() {

        return (
            <div
                className={css`
                    position: relative;
                    font-size: 13px;
                    padding: 0;
                    margin: 0;
                    vertical-align: top;
                    background: #fff;
                    color: #000;
                    display: -webkit-box;
                    display: -webkit-flex;
                    display: -ms-flexbox;
                    display: flex;
                    -webkit-flex-wrap: wrap;
                    -ms-flex-wrap: wrap;
                    flex-wrap: wrap;
                    width: 100%;
                    height: 100%;
                `}
            >
                <div
                    className={css`
                        position: relative;
                        max-width: 100%;
                    `}
                >
                    <div
                        className={css`
                            flex: 1 1 auto;
                            min-width: 0;
                            min-height: 0;
                            max-width: 100%;
                            overflow: hidden;
                            text-overflow: ellipsis;
                            white-space: nowrap;
                            line-height: 1.5;
                        `}
                    >
                        {formatNumber(this.props.number, {
                            allowNegativeNumbers: this.props.allowNegativeNumbers,
                            precisionId: this.props.precisionId,
                            numberFormatId: this.props.numberFormatId
                        })}
                    </div>
                </div>
            </div>
        )
    }
}