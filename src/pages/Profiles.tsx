import React, { useEffect, useState } from 'react'
import UserProfileCard from '../components/UserProfileCard';

const Profiles:React.FC = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        fetch(`https://json-server-3-psi.vercel.app/results`).then(res => res.json())
        .then((data):void => {
            setUsers(data)
            console.log("Users: ",data.length)
        })
    }, []);
  return (
    <section>
        <h2 className='text-center text-4xl font-bold mb-8'>Meet Your Other Half</h2>
        <div className='flex gap-4 flex-wrap justify-around'>
            {users.map((user, indx) => {
                return <div className='' key={indx}>
                    <UserProfileCard user={user}/>
                </div>
            })}
        </div>
    </section>
  )
}

export default Profiles;