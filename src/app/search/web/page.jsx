import WebSearchResults from "@/components/WebSearchResults";
import Link from "next/link";
import React from "react";

export default async function webSearchPage({ searchParams }) {
  const response = await fetch(
    //https://developers.google.com/custom-search/v1/using_rest?hl=en&authuser=2
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}`
  );
  if (!response.ok) {
    console.log(response)
    throw new Error("something went wrong!");
  }
  const data = await response.json();
  console.log(data);
  const results = data.items;
  if (!results) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <h1 className="text-3xl mb-4">no result find</h1>
        <p className="text-lg">
          try search something else or go back 
          <Link className="text-blue-500" href="/">
              home
          </Link>{" "}
          page
        </p>
      </div>
    );
  }

  return <>{results && <WebSearchResults results={data} />}</>;
}

/*<script async src="https://cse.google.com/cse.js?cx=b106020ee0a374d95">
</script>
<div class="gcse-search"></div> */
