"use client";

import React, { useEffect, useState } from "react";
import { callAPI } from "../config/axios";

interface IUsers {
  name: string;
  username: string;
  email: string;
}

const Posts = () => {
  const [data, setData] = useState<IUsers[]>([]);

  const fetchData = async () => {
    try {
      const res = await callAPI.get("/users");
      console.log("data from json : ", res.data);

      setData(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  const newUser = {
    username: "Maria",
    job: "Teacher",
  };

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users/9", {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((error) => console.log(error));

    fetchData();
  }, []);

  return (
    <div>
      {data.map((val, index) => (
        <div key={index}>
          <ul className="flex flex-col gap-4">
            <li>{val.name}</li>
            <li>{val.username}</li>
            <li>{val.email}</li>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Posts;
