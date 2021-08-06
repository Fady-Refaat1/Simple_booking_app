import { connect } from 'react-redux';
import ResourceCard from './ResourceCard';
import PropTypes from 'prop-types'

const DashBoard = (props) =>{
    const {resourcesIds} = props
    return(
        <div>
            <h3 className='center'>Recources</h3>
            <ul className='dashboard-list'>
                {resourcesIds.map(
                    (id)=>(
                        <li key={id}>
                            <ResourceCard id ={id}/>
                        </li>
                        )
                )}
            </ul>
        </div>
    )
}

DashBoard.propTypes = {
    resourcesIds: PropTypes.array.isRequired
    } 

const mapStateToProps = ({resources})=>{
    return {resourcesIds : Object.keys(resources)}
}

export default connect(mapStateToProps)(DashBoard)