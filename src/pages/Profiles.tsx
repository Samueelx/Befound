import React, { useEffect, useState } from 'react'
import UserProfileCard from '../components/UserProfileCard';

const Profiles:React.FC = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:3000/results`).then(res => res.json())
        .then((data) => {
            setUsers(data)
            console.log(data.length)
        })
    }, []);
  return (
    <section>
        <h2 className='text-center text-4xl font-bold mb-8'>Meet Your Other Half</h2>
        <div className='flex gap-4 flex-wrap justify-evenly'>
            {users.map((user) => {
                return <div className='grow'>
                    <UserProfileCard user={user}/>
                </div>
            })}
        </div>
    </section>
  )
}

export default Profiles;