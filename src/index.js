import React from 'react'
import PropTypes from 'prop-types'
import RecordDetailEditor from './contexts/recordDetail/editor'
import RecordDetailReadOnly from './contexts/recordDetail/readOnly'
import RecordGalleryCard from './contexts/recordGalleryCard'
import RecordListItem from './contexts/recordListItem'

export default class NumberField extends React.Component {

    static propTypes = {
        id: PropTypes.string.isRequired,
        contextId: PropTypes.oneOf(['recordDetail', 'recordGridRow', 'recordGalleryCard', 'recordListItem']),
        roleId: PropTypes.oneOf(['editor', 'readOnly']),
        number: PropTypes.number,
        numberFormatId: PropTypes.oneOf(['decimal', 'integer']).isRequired,
        allowNegativeNumbers: PropTypes.bool.isRequired,
        precisionId: PropTypes.oneOf(['1', '2', '3', '4', '5', '6', '7', '8']),
        onChange: PropTypes.func
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

        if (contextId === 'recordListItem' && roleId === 'readOnly') {

            return (
                <RecordListItem
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