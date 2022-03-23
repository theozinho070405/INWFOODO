import Estilo from '../styles/download.module.css'
import { Container, Row, Col } from 'react-bootstrap'
import Image from 'next/image'

export default function Download(){
    return(
        <div className={Estilo.container_bg}>
            <Container className={Estilo.container}>
              <h3>Get Food with Foodo</h3>
              <h3>Download the App</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, dolores sequi laboriosam laborum cumque corrupti! Alias at eos nemo ab ducimus culpa debitis repellendus! Eum doloremque quaerat saepe quis quam?</p>
            </Container>
            <Container className={Estilo.imagens}>
                <Row>
                    <Col xs={12} md={6}>
                        <Image src={'/assets/app-apple-btn.svg'} classNmae='img-fluid' width={244} height={76}></Image>
                    </Col>
                    <Col xs={12} md={6}>
                        <Image src={'/assets/app-play-btn.svg'} classNmae='img-fluid' width={244} height={76}></Image>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}