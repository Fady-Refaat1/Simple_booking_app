import React, { useState } from 'react'
import { Container,Button } from 'react-bootstrap';
import { Redirect } from 'react-router-dom';

const Page404 =()=>{
    const [toHome, setToHome] = useState(false);

    if(toHome === true){
        return <Redirect to='/'/>
    }

    return (
        <Container className="alert alert-danger mx-auto m-5">
            page not found ERROR 4O4
            <Button
            onClick={()=>setToHome(true)}
            >
                Back to Home page
            </Button>
        </Container>

    );
}

export default Page404;
