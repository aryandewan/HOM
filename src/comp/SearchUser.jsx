import React, { useState, useEffect } from "react";
import Trie from "../utils/Trie";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

import { FaQuoteLeft } from "react-icons/fa";

const SearchUser = ({ users }) => {
  const [query, setQuery] = useState("");
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [trie, setTrie] = useState(new Trie());
  const [isXL, setIsXL] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsXL(window.innerWidth >= 1280);
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const newTrie = new Trie();
    users.forEach((user) => newTrie.insert(user.name));
    setTrie(newTrie);
  }, [users]);

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (query === "") {
        setFilteredUsers(users);
      } else {
        const matchingNames = trie.searchPrefix(query.toLowerCase());
        const filtered = users.filter((user) =>
          matchingNames.includes(user.name.toLowerCase())
        );
        setFilteredUsers(filtered);
      }
    }, 1000);

    return () => clearTimeout(timeout);
  }, [query, users, trie]);

  return (
    <div className="w-full flex flex-col items-center justify-center gap-10">
      <input
        type="text"
        placeholder="Search users..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="border p-5 rounded-full w-full mb-4 outline-none"
      />
      <Carousel className="w-full">
        <CarouselContent>
          {filteredUsers.length > 0 ? (
            filteredUsers.map((user) => (
              <CarouselItem
                key={user.id}
                className="flex flex-col items-center justify-center"
              >
                <div className="flex flex-col items-start justify-center gap-5 p-5 w-full md:w-[50%]">
                  <FaQuoteLeft className="text-[#3c8736] text-3xl md:text-5xl" />
                  <p className="text-white text-sm md:text-2xl">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Optio corporis quae, rerum impedit neque eaque doloribus
                    officia. Dicta, at consequuntur.
                  </p>
                  <div className="flex flex-row items-center justify-center gap-2">
                    <img
                      src={`https://ui-avatars.com/api/?name=${user.name}`}
                      alt={user.name}
                      className="w-10 h-10 rounded-full"
                    />
                    <p className="text-white text-xl">{user.name}</p>
                  </div>
                </div>
              </CarouselItem>
            ))
          ) : (
            <div className="p-2 text-gray-500">No users found.</div>
          )}
        </CarouselContent>
        {isXL && (
          <>
            <CarouselPrevious className="text-white hover:text-white bg-black hover:bg-black" />
            <CarouselNext className="text-white hover:text-white bg-black hover:bg-black" />
          </>
        )}
      </Carousel>
    </div>
  );
};

export default SearchUser;
