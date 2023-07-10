import React, { Suspense } from "react";
import Link from "next/link";
import RepoCard from "@/app/components/RepoCard.jsx";
async function fetchdata() {
  const res = await fetch("https://api.github.com/users/eliot6001/repos", {
    next: {
      revalidate: 60, //check the cache
    },
  });
  await new Promise((resolve) => setTimeout(resolve, 1000));
  /*Wait a second */
  const arrayOfRepos = await res.json();
  return arrayOfRepos;
}

const Repos = async () => {
  const fetchData = await fetchdata();
  const clicked = false;
  return (
    <>
      <div className="gap-3 flex flex-col">
        <h2 className=" text-gray-700 text-xl"> Repositories :</h2>

        <div className="flex flex-row flex-wrap items-stretch justify-center  max-w-fit">
          {fetchData?.map((elem) => (
            <RepoCard
              name={elem.name}
              description={elem.description}
              stargazers_count={elem.stargazers_count}
              forks_count={elem.forks_count}
              watchers={elem.watchers}
              html_url={elem.html_url}
              seeMore={elem.name}
            ></RepoCard>
          ))}
        </div>
      </div>
    </>
  );
};

export default Repos;
