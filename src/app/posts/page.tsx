"use client";

import React, { useEffect, useState } from "react";
import { callAPI } from "../config/axios";
import Link from "next/link";

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

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div>
      {data.map((val, index) => (
        <div key={index}>
          <ul className="flex flex-col gap-4">
            <Link href={`/posts/${val.name}`}>
              <li>{val.name}</li>
              <li>{val.username}</li>
              <li>{val.email}</li>
            </Link>
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Posts;
