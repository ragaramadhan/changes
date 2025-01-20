"use client";

import { useRouter } from "next/navigation";
import { useState, FormEvent } from "react";

export default function IPChangeForm() {
  const [ip, setIp] = useState("");
  const [changeIpLink, setChangeIpLink] = useState("");
  const router = useRouter();
  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // console.log(ip, changeIpLink);
    await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/save`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ip, changeIpLink }),
    });
    // await SaveIp({ ip, changeIpLink });
    setIp("");
    setChangeIpLink("");

    router.refresh();
  };

  return (
    <div className="max-w-md mx-auto mb-12">
      <form
        onSubmit={handleSubmit}
        className="shadow-md rounded px-8 pt-6 pb-8 mb-4 bg-blue-50"
      >
        <h2 className="text-2xl font-bold mb-6 text-center text-blue-800">
          IP Change Form
        </h2>
        <div className="mb-4">
          <label
            className="block text-blue-700 text-sm font-bold mb-2"
            htmlFor="ip"
          >
            IP Address
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="ip"
            type="text"
            placeholder="Enter IP address"
            value={ip}
            onChange={(e) => setIp(e.target.value)}
            required
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-blue-700 text-sm font-bold mb-2"
            htmlFor="changeIpLink"
          >
            Change IP Link
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="changeIpLink"
            type="url"
            placeholder="Enter Change IP Link"
            value={changeIpLink}
            onChange={(e) => setChangeIpLink(e.target.value)}
            required
          />
        </div>
        <div className="flex items-center justify-center">
          <button
            className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            type="submit"
          >
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
