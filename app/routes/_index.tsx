import type { MetaFunction } from "@remix-run/node";
import { Link } from "@remix-run/react";

export const meta: MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
  return (
    <div className="font-sans p-4">
      <h1><p>Welcome!</p></h1>
      <p className="text-gray-600"><Link to="/learn"><span
        className="text-red-600 px-2 underline">Learn TS</span></Link></p>
    </div>
  );
}
