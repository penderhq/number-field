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

class Viewport extends React.Component {

    render() {

        return (
            <div
                className={css`
                    background-color: #e9ebee;
                    padding: 20px;
                `}
            >
                {this.props.children}
            </div>
        )
    }
}

const stringifyJSON = (args) => {
    try {
        return JSON.stringify(args, null, 2)
    } catch (e) {
        return null
    }
}

const log = (name) => (args) => {
    alert(`
name: ${name}
args: ${stringifyJSON(args)}
    `)
}

class Demo1 extends React.Component {

    state = {
        number: 32.25
    }

    render() {

        return (
            <Viewport>
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
            </Viewport>
        )
    }
}

class Demo extends Component {
    render() {
        return <div>
            <h1>NumberField Demo</h1>
            <p>Used for entering a number.</p>
            <h2>Context based</h2>
            <p>The behaviour of the component changes based on the context in which it is rendered.</p>
            <h3>
                RecordDetail context
            </h3>
            <p>Used for displaying the single line text field in a record detail.</p>
            <h4>
                Editor role
            </h4>
            <Demo1/>
            <h4>Read only role</h4>
            <Viewport>
                <div
                    className={css`
                        width: 600px;
                        background-color: #fff;
                    `}
                >
                    <NumberField
                        id={'fld1'}
                        contextId={'recordDetail'}
                        roleId={'readOnly'}
                        numberFormatId={'decimal'}
                        allowNegativeNumbers={false}
                        precisionId={'2'}
                        number={32.25}
                        onChange={log('onChange')}
                    />
                </div>
            </Viewport>
            <h3>
                RecordGalleryCard context
            </h3>
            <p>Used for displaying the number field in a record gallery card.</p>
            <h4>
                Read only role
            </h4>
            <Viewport>
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
                        number={32.25}
                    />
                </div>
            </Viewport>
        </div>
    }
}

render(<Demo/>, document.querySelector('#demo'))
