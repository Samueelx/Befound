import React, { useEffect, useState } from "react";
import { User } from "../Interfaces/User";
import { useParams } from "react-router-dom";

const UserCard: React.FC = () => {
  const [user, setUser] = useState<User | undefined>({} as User);
  const uuid = useParams();
//   console.log(uuid.id?.toString())

  useEffect(() => {
    async function fetchSpecificUser(): Promise<User | undefined> {
      const res = await fetch(`https://json-server-3-psi.vercel.app/results`);
      const data: User[] = await res.json();
      const result: User[] = data.filter((usr) => usr.login.uuid == uuid.id);
      return result.shift();
    }

    fetchSpecificUser().then((usr) => {
      setUser(usr);
      console.log(usr);
    });
  }, [uuid]);
  return (
    <>
      <div className="hover:scale-125 transition-all duration-500 h-screen flex justify-center items-center bg-white rounded-xl p-12 shadow-xl">
        <div className="flex flex-col items-center">
          <div className="relative">
            <div id="activeStatus" className="h-4 w-4 bg-green-500 absolute top-3 right-2 rounded-full ring-4 ring-white"></div>
            <img
              src={user?.picture?.large}
              alt="avatar"
              className="h-36 ring-2 ring-offset-2 rounded-full cursor-pointer"
            />
          </div>
          <div id="title">
            <p className="font-semibold text-xl mt-3">
              {user?.name?.first}
              <span> </span>
              {user?.name?.last}
            </p>
          </div>
          <div id="location">
            <div className=" m-4">
              <dl className="mt-4 text-xs font-medium flex items-center row-start-2 sm:mt-1 sm:row-start-3 md:mt-2.5 lg:row-start-2">
                <dt className="sr-only">Reviews</dt>
                <dd className="text-indigo-600 flex items-center dark:text-indigo-400">
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    aria-hidden="true"
                    className="mr-1 stroke-current dark:stroke-indigo-500"
                  >
                    <path
                      d="m12 5 2 5h5l-4 4 2.103 5L12 16l-5.103 3L9 14l-4-4h5l2-5Z"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                  <span>
                    4.89{" "}
                    <span className="text-slate-400 font-normal">(128)</span>
                  </span>
                </dd>
                <dt className="sr-only">Location</dt>
                <dd className="flex items-center">
                  <svg
                    width="2"
                    height="2"
                    aria-hidden="true"
                    fill="currentColor"
                    className="mx-3 text-slate-300"
                  >
                    <circle cx="1" cy="1" r="1" />
                  </svg>
                  <svg
                    width="24"
                    height="24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="mr-1 text-slate-400 dark:text-slate-500"
                    aria-hidden="true"
                  >
                    <path d="M18 11.034C18 14.897 12 19 12 19s-6-4.103-6-7.966C6 7.655 8.819 5 12 5s6 2.655 6 6.034Z" />
                    <path d="M14 11a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                  </svg>
                  {user?.location?.city} <span>{`, `}</span>{user?.location?.country}
                </dd>
              </dl>
            </div>
          </div>
          <div id="contacts" className=" text-indigo-700 flex justify-center items-center flex-col font-extralight">
            <div className="my-2">
                <p>Phone: {user?.cell}</p>
            </div>
            <div className="my-2">
                <p>{user?.email}</p>
            </div>
          </div>
          <div id="stats" className="flex justify-between items-center my-6 text-sm">
            <div className="flex flex-col items-center mr-4">
                <div className=" text-indigo-500 font-semibold text-lg">90</div>
                <div className="text-indigo-400 text-sm">Posts</div>
            </div>
            <div className="flex flex-col items-center mr-4">
                <div className=" text-indigo-500 font-semibold text-lg">1.7K</div>
                <div className="text-indigo-400 text-sm">Likes</div>
            </div>
          </div>
          <div id="actions" className="flex justify-center items-center mt-4">
            <div className="mr-4">
                <button className=" bg-red-950 text-white p-2 rounded-md px-4 focus:ring-2 ring-offset-2 ring-red-500">SWIPE LEFT</button>
            </div>
            <div>
                <button className="bg-indigo-500 text-white p-2 rounded-md px-4 focus:ring-2 ring-offset-2 ring-indigo-500">SWIPE RIGHT</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default UserCard;
