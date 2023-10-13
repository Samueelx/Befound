import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import UserProfileCard from '../components/UserProfileCard';
import ScrollToTop from '../components/ScrollToTop';
import { User } from '../Interfaces/User';

const Profiles:React.FC = () => {
    const [users, setUsers] = useState<User[]>([]);
    useEffect(() => {
        fetch(`https://json-server-3-psi.vercel.app/results`).then(res => res.json())
        .then((data:User[]):void => {
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
                    <Link to={`users/${user.login.uuid}`}>
                    <UserProfileCard user={user}/>
                    </Link>
                    
                </div>
            })}
        </div>
        <div>
            <ScrollToTop />
        </div>
    </section>
  )
}

export default Profiles;