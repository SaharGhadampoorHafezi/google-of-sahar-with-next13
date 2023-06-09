import ImageSearchResults from "@/components/ImageSearchResults";
import Link from "next/link";
import React from "react";

export default async function imageSearchPage({ searchParams }) {
  const startIndex = searchParams.start || "1";
  const response = await fetch(
    
    // `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${process.env.CONTEXT_KEY}&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`
    `https://www.googleapis.com/customsearch/v1?key=AIzaSyDMDHAmsmmtwanvjrrplteKavXsAq1O4EA&cx=548702590e7bf4ae2&q=${searchParams.searchTerm}&searchType=image&start=${startIndex}`

  );
  if (!response.ok) {
    // console.log(response)
    throw new Error("something went wrong!");
  }
  const data = await response.json();
  // console.log(data);
  const results = data.items;
  console.log(results);
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

  return <>{results && <ImageSearchResults results={data} />}</>;
}

/*<script async src="https://cse.google.com/cse.js?cx=b106020ee0a374d95">
</script>
<div class="gcse-search"></div> */
