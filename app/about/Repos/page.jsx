import React from "react";
import Link from "next/link";
async function fetchdata() {
  const res = await fetch(
    "https://api.github.com/users/eliot6001/repos",
    {next:{
      revalidate: 60, //check the cache
    }
   }
  );
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
            <Link
              href={elem?.html_url}
              className="flex flex-col text-grey-200 container border p-6 w-1/4 max-sm:w-4/5 items-stretch hover:bg-slate-200 mr-5 mt-2"
            >
              <span className="text-cyan-500 text-xl"> {elem?.name} </span>
              <span>
                {" "}
                → {elem.description ? elem.description : "No Description"}
              </span>
              <span className="flex w-full justify-between mt-auto">
                <span className="flex gap-2 p-2 mt-auto ">
                  {elem?.stargazers_count}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill={``}
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                    id="star"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                    />
                  </svg>{" "}
                  {/* Star SVG */}
                </span>
                <span className="flex gap-2 p-2 mt-auto ">
                  {elem?.forks_count}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="black"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke={"currentColor"}
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5"
                    />
                  </svg>
                  {/* Branch SVG */}
                </span>
                <span className="flex gap-2 p-2 mt-auto">
                  {elem?.watchers}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>{" "}
                  {/* Eye SVG */}
                </span>
              </span>
            </Link>
          ))}
        </div>
      </div>
    </>
  );
};

export default Repos;
