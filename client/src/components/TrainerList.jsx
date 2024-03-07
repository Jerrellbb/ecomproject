import { useLoaderData, Link } from "react-router-dom"


export default function TrainerList() {
  const Trainers = useLoaderData()

  return (

    <>
      <div>
        <h1>All Trainers</h1>

      </div>

      <div>
      <ul className='Trainer-list'>
      {Trainers.map(trainer => (
        <li key={trainer.id}>
          <Link to={`/trainer/${trainer.id}`}>{trainer.name}</Link>
          <img src={trainer.image} alt={trainer.name} style={{ height: 200, width:200 }} />
          <p>£{trainer.price}</p>
        </li>
      ))}
      </ul>
      </div>    
    </>
  )
}