import React from 'react'
import PropTypes from 'prop-types'
import NumberInput from './NumberInput'
import NumberLabel from './NumberLabel'

export default class NumberField extends React.Component {

    static propTypes = {
        value: PropTypes.number,
        options: PropTypes.shape({
            numberFormat: PropTypes.oneOf(['decimal', 'integer']).isRequired,
            allowNegativeNumber: PropTypes.bool.isRequired,
            precision: PropTypes.oneOf([1, 2, 3, 4, 5, 6, 7, 8]).isRequired
        }).isRequired
    }

    render() {

        const {contextId, roleId} = this.props


        if (contextId === 'recordDetail' && roleId === 'editor') {
            return (
                <NumberInput
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordDetail' && roleId === 'readOnly') {
            return (
                <NumberLabel
                    {...this.props}
                />
            )
        }

        return (
            <div>
                Not supported
            </div>
        )
    }
}