import Link from "next/link";
import React, { Suspense } from "react";



/* This is a Repo component that 
 takes in Name of Repo,
    Fetches Data from Github api
 and Shows contents from the api */
async function fetchRepoData(name) {
  const res = await fetch(
    `https://api.github.com/repos/eliot6001/${name}/contents`,
    {
      next: {
        revalidate: 420, //check the cache
      },
    }
  );
  await new Promise((resolve) => setTimeout(resolve, 3000));

  const RepoData = await res.json();
  return RepoData;
}

const RepoDetailsComponent = async ({ name }) => {
  const fetchData = await fetchRepoData(name);

  return (
    <div>
      
      {fetchData.map((elem) => (
        <h2>{elem.name}</h2>
      ))}
    </div>
  );
};
export default RepoDetailsComponent;
