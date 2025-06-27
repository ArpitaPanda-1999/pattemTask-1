
'use client';
import './globals.css';
import Link from 'next/link';
import { useState } from 'react';
import { jobs } from '@/data/jobs';

export default function Home() {
  const [showData, setShowData] = useState(false);
  console.log(jobs);

  return (
    <div className="max-w-3xl mx-auto text-center mt-16 space-y-6">
      <h1 className="text-4xl font-bold">🚀 Welcome to Pattem Jobs</h1>
      <p className="text-gray-600 text-lg">AI-guided careers. Smart hiring. Fast applications.</p>

      <Link href="/jobs1">
        <button className="mt-4 px-6 py-3 bg-blue-600 text-white rounded hover:bg-blue-700 transition">
          View Job Listings
        </button>
      </Link>

      {/* <div>
        <button
          onClick={() => setShowData(!showData)}
          className="mt-6 text-blue-500 underline"
        >
          {showData ? 'Hide Job Data' : 'Show Job Data'}
        </button>

        {showData && (
          <pre className="text-left bg-gray-100 p-4 mt-4 rounded text-sm overflow-auto">
            {JSON.stringify(jobs, null, 2)}
          </pre>
        )}
      </div> */}
    </div>
  );
}

