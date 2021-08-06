import React from 'react';
import classnames from 'classnames';
import PropTypes from 'prop-types'
import { CloseButton } from 'react-bootstrap';

const FlashMessage = (props) => {
    const {deleteFlashMessage ,message} = props
    const handleCloseMessage = ()=> {
        deleteFlashMessage(props.message.id)
    }
        const {type, text } = message;
        return (
        <div className={classnames('alert', {
            'alert-success': type === 'success',
            'alert-danger': type === 'error'
        })}>
            {text}
            <CloseButton onClick={handleCloseMessage}/>
        </div>
    );
}

FlashMessage.propTypes = {
    message: PropTypes.object.isRequired,
    deleteFlashMessage: PropTypes.func.isRequired
}

export default FlashMessage;