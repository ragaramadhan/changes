"use client";
import IPChangeForm from "@/components/IPChangeForm";
import ButtonGrid from "@/components/ButtonGrid";
import { useEffect, useState } from "react";

export default function Home() {
  // Simulate fetching 30 items from a database

  const [items, setItem] = useState([]);
  // const items = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/save`, {
  //   method: "GET",
  // });

  const fetchIP = async () => {
    const data = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/save`, {
      method: "GET",
      cache: "no-store",
    });
    const result = await data.json();
    // console.log(result);

    setItem(result.data);
  };

  useEffect(() => {
    fetchIP();
  }, []);

  return (
    <main className="container mx-auto px-4 py-8 bg-red-200 shadow-lg rounded-lg mt-10">
      <h1 className="text-3xl font-bold mb-8 text-center">
        IP Change Form and Button Grid
      </h1>
      <IPChangeForm />
      <ButtonGrid items={items} />
    </main>
  );
}
