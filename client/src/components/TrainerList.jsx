import { useLoaderData, Link } from "react-router-dom";
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { useState, useEffect } from "react";

export default function TrainerList() {
  const Trainers = useLoaderData();

  const [brand, setBrand] = useState('All')
  const [filteredTrainers, setFilteredTrainers] = useState([])
  const [search, setSearch] = useState('')

  const handleSearchChange = (e) => {
    setSearch(e.target.value)
  }


  useEffect(() => {
    const pattern = new RegExp(search, 'i')
    let filteredBrand;
    if (brand === 'All') {
      filteredBrand = Trainers.filter(trainer => pattern.test(trainer.name))
    } else {
      filteredBrand = Trainers.filter(trainer => {
        return pattern.test(trainer.name) && trainer.brand.name === brand
      })
    }
    setFilteredTrainers(filteredBrand)
  }, [Trainers, brand, filteredTrainers.name, search])

  return (
    <>
      <div className="search-bar">
        <input className="m-4"
          type="text"
          placeholder="Search Trainer"
          value={search}
          onChange={handleSearchChange}
        />

        <select className="m-4" name="Brand" value={brand} onChange={(e) => setBrand(e.target.value)}>
          <option value="All">All</option>
          <option value="reebok">Reebok</option>
          <option value="fila">Fila</option>
          <option value="nike">Nike</option>
          <option value="puma">Puma</option>
          <option value="adidas">Adidas</option>


        </select>
      </div>
      <Container>
        {/* <h1>Trainers</h1> */}
        <Row >
          {filteredTrainers.map(trainer => (
            <Col key={trainer.id} md={4}>
              <div className="trainerlist-card" >
                <Link
                  xs={12}
                  md={4}
                  lg={3}
                  to={`/trainer/${trainer.id}`}>
                  <h2>{trainer.name}</h2>
                  <img src={trainer.image_1} alt={trainer.name} style={{ height: 200, width: 200 }} />
                  
                  <p><strong>Price: </strong>£{trainer.price} <br /> <strong>size:</strong> {trainer.size}</p>
                </Link>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </>

  );
}
