import React from "react";
import { useNavigate } from "react-router-dom";
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

function MemeCard(props){
    const navigate = useNavigate();

    return (
        <Card style={{
            width: '18rem',
            margin: '25px',
            background: 'rgba(255, 255, 255, 0.1)',
            backdropFilter: 'blur(10px)',
            border: '1px solid rgba(255, 255, 255, 0.2)',
            borderRadius: '15px',
            color: '#fff',
            boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
        }}>
            <Card.Img variant="top" src={props.img} />
            <Card.Body className="body">
                <Card.Title style={{
                    textAlign:'center',
                }}>{props.title}</Card.Title>
                <Button style={{
                    // backgroundColor: '#4a4a4a',
                    // color: 'white',
                    // textAlign:'center',
                    // marginLeft:'35%',
                    // marginTop:'10px',
                    // 
                    padding: '6px 12px',
                    fontSize: '1.1rem',
                    borderRadius: '6px',
                    backgroundColor: 'white',
                    color: '#34495e',
                    border:'3px solid #A9A9A9',
                    transition: 'all 0.3s ease',
                    display: 'block',
                    margin: '10px auto', 
                    width: 'fit-content', 
                }}
                onClick={e => navigate(`/edit?url=${props.img}`)} variant="primary">
                    Edit
                </Button>
            </Card.Body>
        </Card>
    );
}

export default MemeCard;