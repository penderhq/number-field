import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import NumberField from '../../src'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
    }
`

const Context = ({contextId, roleId}) => (
    <div
        className={css`
            margin-top: 32px;
            margin-bottom: 24px;
        `}
    >
        <strong>Context:</strong> {contextId}, <strong>Role:</strong> {roleId}
    </div>
)

class Demo extends Component {

    state = {
        number: 32.25
    }

    render() {
        return <div>
            <h1>NumberField Demo</h1>
            <p>Used for entering a number.</p>
            <h2>
                State
            </h2>
            <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
            <Context contextId={'recordDetail'} roleId={'editor'}/>
            <div
                className={css`
                        width: 250px;
                    `}
            >
                <NumberField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'editor'}
                    numberFormatId={'decimal'}
                    allowNegativeNumbers={true}
                    precisionId={'2'}
                    number={this.state.number}
                    onChange={({number}) => {

                        this.setState({
                            number
                        })
                    }}
                />
            </div>
            <Context contextId={'recordDetail'} roleId={'readOnly'}/>
            <div
                className={css`
                        width: 600px;
                    `}
            >
                <NumberField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    numberFormatId={'decimal'}
                    allowNegativeNumbers={false}
                    precisionId={'2'}
                    number={this.state.number}
                />
            </div>
            <Context contextId={'recordGalleryCard'} roleId={'readOnly'}/>
            <div
                className={css`
                        width: 240px;
                        height: 22px;
                    `}
            >
                <NumberField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    numberFormatId={'decimal'}
                    allowNegativeNumbers={false}
                    precisionId={'2'}
                    number={this.state.number}
                />
            </div>
            <Context contextId={'recordListItem'} roleId={'readOnly'}/>
            <div
                className={css`
                        width: 240px;
                        height: 24px;
                    `}
            >
                <NumberField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    numberFormatId={'decimal'}
                    allowNegativeNumbers={false}
                    precisionId={'2'}
                    number={this.state.number}
                />
            </div>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
