import React, { useState } from "react";
import DatePicker from "react-datepicker";
import { connect } from "react-redux";
import {Form, Button} from 'react-bootstrap';
import { Redirect, withRouter } from "react-router-dom";
import { handleAddBooking } from "../Actions/booking";
import PropTypes from 'prop-types'
import FlashMessagesList from "./FlashMessageList";
import { addFlashMessage} from "../Actions/flashMessage";
import 'react-datepicker/dist/react-datepicker.css';

const Booking = (props) =>{
    const [dateFrom, setDateFrom] = useState(Date.now());
    const [dateTo, setDateTo] = useState(Date.now());
    const [bookedQuantity, setBookedQuantity] = useState(1);
    
    const {resource} = props
    const {id,name,quantity,availableDateFrom,availableDateTo } = resource

    const handleQuantityChange=(event)=>{
        const bookedQuantity = event.target.value
        setBookedQuantity(bookedQuantity)
    }
    
    const handleBooking = (event) =>{
        event.preventDefault();
        const resourceId = id

            if(!(availableDateTo > dateTo && availableDateFrom <= dateFrom )){
                props.addFlashMessage({
                    type: 'error',
                    text: `sorry the resource not available in this date From ${dateFrom}--${dateTo}`
                    })
            }
            else if (bookedQuantity > quantity){
                props.addFlashMessage({
                    type: 'error',
                    text:quantity === 0 ?'sorry the resource is not available any more':`sorry the available resource quantity is only :  ${quantity}`
                    })
            }
            else{
                props.handleAddBooking({dateFrom,dateTo,bookedQuantity,resourceId})
            }
    }
    
    if(resource === 'notFound'){
        return <Redirect to='/NotFound' />
    }
    return (
        <div>
            <Form className='w-50  bg-light mx-auto rounded-3 border  shadow p-3  m-3 ' onSubmit={handleBooking}>
            <Form.Label className='h3'>Booking {name} </Form.Label>
            <br/>
            <Form.Group className="mb-3 w-75  mx-auto" controlId="formBasicEmail">
            <Form.Label className='text-muted mx-auto '>
            Date From
            </Form.Label>
            <DatePicker 
            selected={dateFrom} 
            minDate={new Date()}
            showTimeSelect
            dateFormat="dd/MM/yyyy HH:mm"
            onChange={(date) => setDateFrom(Date.parse(date))} />
            </Form.Group>
            <Form.Group className="mb-3 w-75  mx-auto" controlId="formBasicEmail">
            <Form.Label className='text-muted mx-auto '>
            Date To
            </Form.Label>
            <DatePicker 
            selected={dateTo} 
            minDate={dateFrom}
            showTimeSelect
            dateFormat="dd/MM/yyyy HH:mm"
            onChange={(date) => setDateTo(Date.parse(date))} />
            </Form.Group>
            <Form.Group className="mb-3 w-75  mx-auto" controlId="formBasicEmail">
            <Form.Label className='text-muted mx-auto '>
            Quantity  
            </Form.Label>
            <input 
            type="number" 
            name="quantity" 
            value={bookedQuantity}
            min="1"
            onChange={handleQuantityChange}
            />
            </Form.Group>
            <Button 
            type='submit'
            >
                BooK
            </Button>
            </Form>
            <FlashMessagesList />
            </div>
    )
}

Booking.propTypes = {
    handleAddBooking: PropTypes.func.isRequired,
    addFlashMessage: PropTypes.func.isRequired,
    } 

function mapStateToProps ({resources},props) {
    const {id} = props.match.params
    const resource = resources[id]
    return {
        resource : resource ? resource : 'notFound' ,
    }
}
const mapDispatchToProps = (dispatch) => {
    return {
        handleAddBooking : ({dateFrom,dateTo,bookedQuantity,resourceId})=>{
        dispatch(handleAddBooking({dateFrom,dateTo,bookedQuantity,resourceId}))
    },
        addFlashMessage : ({type,text})=>{
            dispatch(addFlashMessage({type,text}))
        }
    }
    }
    

export default withRouter(connect(mapStateToProps,mapDispatchToProps)(Booking))