import { connect } from 'react-redux';
import {Button,Row, Col, Card} from 'react-bootstrap';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types'
import { formatDate } from '../utils/DATA';

const ResourceCard = (props) =>{
    const { resource } = props
    const {id,name,quantity,availableDateFrom,availableDateTo} =resource

    const toBookingPage = (event, id) => {
        event.preventDefault()
        props.history.push(`/booking/${id}`)
        }

    return(
        <Card key={resource.id} className='w-75  bg-light mx-auto rounded-3 border  shadow p-3 m-5  ' style={{color:'black' }}>
                <Row>
                    <Col>
                    Resource ID : {id}
                    </Col>
                    <Col>
                    Resource Name : {name}
                    </Col>
                    <Col>
                    Available quantity : {quantity}
                    </Col>
                    <Col>
                    <Row>
                    Available Date : 
                    </Row>
                    <Row>
                    Date From : {formatDate(availableDateFrom)}  
                    </Row>
                    <Row>
                    Date To : {formatDate(availableDateTo)}
                    </Row>
                    </Col>
                    <Col>
                    <Button
                    className='mx-auto'
                    onClick={(e)=>{toBookingPage (e,id)}}
                    >
                        Book Now 
                    </Button>
                    </Col>
                </Row>
        </Card>
    )
}

ResourceCard.propTypes = {
    resource: PropTypes.object.isRequired
    } 

const mapStateToProps = ({resources},{id})=>{
    const resource = resources[id]
    return {
        resource
    }
}

export default withRouter(connect(mapStateToProps)(ResourceCard))