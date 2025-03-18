import React, { useState, useEffect } from "react";
import SearchUser from "./SearchUser";

const UserList = ({ id }) => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  return (
    <section
      id={id}
      className="min-h-dvh w-full mx-auto bg-black flex flex-col items-center justify-center text-white"
    >
      <div className="w-full xl:w-[50%] flex flex-col items-center justify-center gap-10 px-5 xl:px-0">
        <h1 className="text-white text-xl p-5 rounded-full border border-white">
          Testimonials
        </h1>
        <div className="flex flex-col items-center justify-center">
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#3c8736] to-white text-transparent bg-clip-text">
            HEAR FROM
          </h1>
          <h1 className="text-3xl md:text-5xl font-bold bg-gradient-to-r from-[#3c8736] to-white text-transparent bg-clip-text text-center">
            OUR SATISFIED CLIENTS
          </h1>
        </div>
        <SearchUser users={users} />
      </div>
    </section>
  );
};

export default UserList;
