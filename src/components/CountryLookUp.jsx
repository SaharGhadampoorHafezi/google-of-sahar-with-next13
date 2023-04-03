"use client";

import { useEffect, useState } from "react";

export default function CountryLookUp() {
  const [country, setCountry] = useState("United States");
  useEffect(() => {
    fetch(
      // `https://extreme-ip-lookup.com/json/?key=${process.env.NEXT_PUBLIC_IP_API_KEY}`
      "https://extreme-ip-lookup.com/json/?key=hRIS0SeDoFQGIPPDAHzv"
    )
      .then((res) => res.json())
      .then((data) => setCountry(data.country));
  }, []);
  return <div>{country}</div>;
}
// when you add something to environmental variable you need
// to restart your server.

// we needed to add 'NEXT_PUBLIC_' before our api variable because,
// it is used in a client component not, a server side.

// https://extreme-ip-lookup.com/ has been used to find ip