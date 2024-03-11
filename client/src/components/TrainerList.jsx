import { useLoaderData, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

export default function TrainerList() {
  const Trainers = useLoaderData();

  return (
    <Container>
      <h1>All Trainers</h1>
      <Row >
        {Trainers.map(trainer => (
          <Col key={trainer.id} md={4}>
            <div className="trainerlist-card" >
              <Link
                xs={12}
                md={4}
                lg={3}
                to={`/trainer/${trainer.id}`}>
                <h2>{trainer.name}</h2>
                <img src={trainer.image} alt={trainer.name} style={{ height: 200, width: 200 }} />
                <p><strong>Price: </strong>£{trainer.price}</p>
              </Link>
            </div>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
