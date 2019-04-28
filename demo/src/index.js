import React, {Component} from 'react'
import {render} from 'react-dom'
import {css, injectGlobal} from 'emotion'
import NumberField from '../../src'
import {Canvas, Heading, Paragraph, Box} from '@cmds/demo-utils'

injectGlobal`
    * {
        box-sizing: border-box;
    }
    body {
        font-family: -apple-system,BlinkMacSystemFont,Segoe UI,Helvetica,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji,Segoe UI Symbol;
        margin: 0;
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
        return <Canvas>
            <Heading>
                Record Detail Context
            </Heading>
            <Paragraph>
                With editor role
            </Paragraph>
            <Box>
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
            </Box>
            <Paragraph>
                With read only role
            </Paragraph>
            <Box>
                <NumberField
                    id={'fld1'}
                    contextId={'recordDetail'}
                    roleId={'readOnly'}
                    numberFormatId={'decimal'}
                    allowNegativeNumbers={false}
                    precisionId={'2'}
                    number={this.state.number}
                />
            </Box>
            <Paragraph>
                State
            </Paragraph>
            <Box>
                 <pre>
                {JSON.stringify(this.state, null, 2)}
            </pre>
            </Box>
            <Heading>
                Record Gallery Card Context
            </Heading>
            <Paragraph>
                With read only role
            </Paragraph>
            <Box>
                <NumberField
                    id={'fld1'}
                    contextId={'recordGalleryCard'}
                    roleId={'readOnly'}
                    numberFormatId={'decimal'}
                    allowNegativeNumbers={false}
                    precisionId={'2'}
                    number={this.state.number}
                />
            </Box>
            <Heading>
                Record List Item Context
            </Heading>
            <Paragraph>
                With read only role
            </Paragraph>
            <Box>
                <NumberField
                    id={'fld1'}
                    contextId={'recordListItem'}
                    roleId={'readOnly'}
                    numberFormatId={'decimal'}
                    allowNegativeNumbers={false}
                    precisionId={'2'}
                    number={this.state.number}
                />
            </Box>
        </Canvas>
    }
}

render(<Demo/>, document.querySelector('#demo'))
