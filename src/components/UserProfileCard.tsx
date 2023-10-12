import React from 'react';
import { User } from '../Interfaces/User';

interface UserProfileCardProps {
  user: User;
}

const UserProfileCard: React.FC<UserProfileCardProps> = ({ user }) => {
  return (
    <div className="w-72 bg-white rounded-lg shadow-lg p-6 mb-4">
      <div className="flex items-center justify-center">
        <img
          className="w-32 h-32 rounded-full object-cover mb-4"
          src={user.picture.large}
          alt={user.name.first}
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-bold">{`${user.name.first} ${user.name.last}`}</h2>
        <p className="text-gray-600">{user.gender}</p>
        <p className="text-gray-600">{`Age: ${calculateAge(user.dob.date)}`}</p>
        <p className="text-gray-600">{`Location: ${user.location.city}, ${user.location.state}, ${user.location.country}`}</p>
        <div className="border-t-2 border-gray-200 my-4" />
        <p className="text-gray-600">{`Phone: ${user.cell}`}</p>
        <p className="text-gray-600">{`Email: ${user.email}`}</p>
      </div>
    </div>
  );
};

export default UserProfileCard;

function calculateAge(birthday: string): number {
  const birthDate = new Date(birthday);
  const today = new Date();
  let age = today.getFullYear() - birthDate.getFullYear();
  const monthDiff = today.getMonth() - birthDate.getMonth();
  if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
}
