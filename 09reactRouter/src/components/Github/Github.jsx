import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github() {


  const data = useLoaderData()
  // const [data, setData] = useState([]);

  // useEffect(() => {
  //   fetch(`https://api.github.com/users/${githubID}`)
  //     .then((response) => response.json())

  //     .then((data) => {
  //       console.log(data);
  //       setData(data);
  //     });
  // }, [githubID]);

  return (
    <>
      <div className="flex flex-col items-center justify-center m-4 bg-gray-600 text-white p-4 text-3xl">
        <div> github.com/{data.login}</div>
        <img className="m-4" src={data?.avatar_url} alt="Git picture" width={300} />
        <div className="m-4"> {data?.name}</div>
        <div className="text-2xl"> Followers:  {data?.followers}</div>
      </div>
    </>
  );
}

export default Github;
export const githubInfoLoader = async () => {
  

  const response = await fetch("https://api.github.com/users/dwkrdahal")
  return response.json()
}
