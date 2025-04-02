
import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white flex flex-col items-center justify-center px-4">
      <h1 className="text-4xl font-bold mb-4 text-blue-400">Welcome to FitGenius</h1>
      <p className="text-lg mb-8 text-gray-300 text-center max-w-2xl">
        Your personalized AI-powered fitness and nutrition coach. Start your transformation today!
      </p>
      <div className="flex gap-4 flex-wrap justify-center">
        <Link to="/plan" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">Personal Plan</Link>
        <Link to="/ebooks" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">eBooks</Link>
        <Link to="/reviews" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">Reviews</Link>
        <Link to="/contact" className="bg-blue-600 hover:bg-blue-700 px-6 py-3 rounded-xl">Contact</Link>
      </div>
    </div>
  );
}
