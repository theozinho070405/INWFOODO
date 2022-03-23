import estilos from "../styles/topo.module.css"
import { Container,Row,Col } from "react-bootstrap"
import Image from "next/image"

export default function Topo(){
    return(
        <>
            <div className={estilos.background}></div>
            <div className={estilos.texture}>
            <Container className={estilos.container}>
                <Row className={estilos.row}>
                    <Col xs={12} md={6}>
                        <Image src="/assets/mobile.png" alt="" className="img-fluid" width={500} height={500}></Image>
                    </Col>
                    <Col xs={12} md={6} className={estilos.direita}>
                        <h6>FOODO</h6>
                        <h2>Get Your Food In</h2>
                        <h1>FOODO</h1>
                        <p>At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga.</p>
                        <button className={estilos.botao}>Download App</button>
                    </Col>
                </Row>
            </Container>
            </div>
        </>
    )
}