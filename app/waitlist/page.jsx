"use client";

import React from "react";
import Head from "next/head";

export default function WaitlistPage() {
  return (
    <>
      <Head>
        <title>Waitlist</title>
      </Head>
      <div className="mt-20 fixed w-full">
        <div className="aspect-video w-full">
          <iframe
            style={{width: "100%"}}
            height="569"
            src="https://www.create.xyz/app/3b9336a1-c7fe-4697-8f8e-26a8de6acc09"
            title="Waiting List Landing Page"
            frameBorder="0"
          ></iframe>
        </div>
      </div>
    </>
  );
}
