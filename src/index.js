import React from 'react'
import PropTypes from 'prop-types'
import RecordDetailEditor from './contexts/recordDetail/editor'
import RecordDetailReadOnly from './contexts/recordDetail/readOnly'
import RecordGalleryCard from './contexts/recordGalleryCard'

export default class NumberField extends React.Component {

    static propTypes = {
        value: PropTypes.number,
        options: PropTypes.shape({
            numberFormatId: PropTypes.oneOf(['decimal', 'integer']).isRequired,
            allowNegativeNumbers: PropTypes.bool.isRequired,
            precisionId: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8']).isRequired
        }).isRequired
    }

    render() {

        const {contextId, roleId} = this.props


        if (contextId === 'recordDetail' && roleId === 'editor') {
            return (
                <RecordDetailEditor
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordDetail' && roleId === 'readOnly') {
            return (
                <RecordDetailReadOnly
                    {...this.props}
                />
            )
        }

        if (contextId === 'recordGalleryCard' && roleId === 'readOnly') {
            return (
                <RecordGalleryCard
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