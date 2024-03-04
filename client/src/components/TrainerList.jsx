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
          
          <p>£{trainer.price}</p>
        </li>
      ))}
      </ul>
      </div>    
    </>
  )
}