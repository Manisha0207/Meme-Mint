import { React, useEffect, useState } from 'react';
import MemeCard from "../Components/Card";
import { getAllMemes } from '../Api/memes';
import AnimatedPage from '../Components/Animated';
import { Container, Row, Col } from 'react-bootstrap';

// Ensure bootstrap CSS imported in app root

function Homepage() {
    const [data, setData] = useState([]);

    useEffect(() => {
        getAllMemes().then(memes => setData(memes.data.memes));
    }, []);

    return (
        <AnimatedPage>
            <Container className="mt-2 mb-4">
                <h1
                    className='display-5'
                    style={{
                        fontFamily: 'Allura',
                        fontSize: '2rem',   // Corrected here
                        color: '#4a4a4a',
                        textAlign: 'center'
                    }}
                >
                    Choose a Template and show your creativity🌟🌟
                </h1>
                <Row>
                    {data.map((el, index) => (
                        <Col key={index} sm={12} md={6} lg={3} className="d-flex justify-content-center mb-4">
                            <MemeCard img={el.url} title={el.name} />
                        </Col>
                    ))}
                </Row>
            </Container>
        </AnimatedPage>
    );
}

export default Homepage;

// import { React, useEffect, useState } from 'react';
// import MemeCard from "../Components/Card";
// import { getAllMemes } from '../Api/memes';
// import AnimatedPage from '../Components/Animated';
// import { Container, Row, Col } from 'react-bootstrap';

// function Homepage() {
//     const [data, setData] = useState([]);

//     useEffect(() => {
//         getAllMemes().then(memes => setData(memes.data.memes));
//     }, []);

//     return (
//         <AnimatedPage>
//             <Container className="mt-2 mb-4">
//                 <h1 className='display-5'
//                     style={{
//                         fontFamily: 'Allura',
//                         fontWeight: '2rem',
//                         color: '#4a4a4a',
//                         textAlign:'center'
//                     }}
//                 >Choose a Template and show your creativity🌟🌟</h1>
//                 <Row>
//                     {data.map((el, index) => (
//                         <Col key={index} sm={12} md={6} lg={3} className="d-flex justify-content-center mb-4">
//                             <MemeCard img={el.url} title={el.name} />
//                         </Col>
//                     ))}
//                 </Row>
//             </Container>
//         </AnimatedPage>
//     );
// }

// export default Homepage;
