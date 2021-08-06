import React from 'react';
import { connect } from 'react-redux';
import { deleteFlashMessage } from '../Actions/flashMessage';
import FlashMessage from './FlashMessage';
import PropTypes from 'prop-types';

const FlashMessagesList = (props) => {
  const {messages , deleteFlashMessage} = props
  const messagesToDisplay = messages.map( message =>
      <FlashMessage key={message.id} message={message} deleteFlashMessage={deleteFlashMessage} />
    );
    return (
      <div>{messagesToDisplay}</div>
    );
}

FlashMessagesList.propTypes = {
  messages: PropTypes.array.isRequired,
  deleteFlashMessage: PropTypes.func.isRequired
}

function mapStateToProps({flashMessages}) {
  return {
    messages: flashMessages
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    deleteFlashMessage : (id)=>{
      dispatch(deleteFlashMessage(id))
    }
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(FlashMessagesList);