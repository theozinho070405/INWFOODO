import Estilo from '../styles/about.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

export default function Download(){
    return(
        <div className={Estilo.container_bg}>
            <Container>
                <Row>
                    <Col xs={12} md={6}>
                        <Image className='img-fluid' src={ '/assets/image-about.png'} width={500} height={500}></Image>
                    </Col> 
                    <Col xs={12} md={6} className={Estilo.details}>
                        <div>
                            <h2>Best Offer in Town</h2>
                            <b>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere, laudantium harum fuga modi expedita natus, explicabo magnam esse debitis odio aliquid rerum ipsa blanditiis molestiae odit ratione! Praesentium, modi quam?</b>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni, minus laborum? Voluptatem sint est debitis dolor libero doloremque deleniti vero non quos corrupti nihil, molestias necessitatibus vel, dignissimos impedit eos.</p>
                            <button className={'btn ' +Estilo.botao}>Explore More</button>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}