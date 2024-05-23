"use client"
import { useQuery } from "@tanstack/react-query";
import React from "react";

interface IData {
  userId: number;
  id: number;
  title: string;
  body: string;
}

const GetData = () => {
  const { data:Products, isLoading, isError } = useQuery<IData[]>({
    queryKey: ["product"],
    queryFn: () =>
      fetch("https://jsonplaceholder.typicode.com/posts").then((res) =>
        res.json()
      ),
  });

  console.log(Products)

  if (isLoading) {
    return <div className="flex flex-col justify-center items-start">Loading...</div>;
  }

  if (isError) {
    return <div>Error loading Products</div>;
  }

  return (
    <div>
      {Products?.map((item) => (
        <div key={item.id} className=" flex flex-col justify-center items-start">
          <h3>{item.title}</h3>
          {/* <p>{item.body}</p> */}
        </div>
      ))}
    </div>
  );
};

export default GetData;
