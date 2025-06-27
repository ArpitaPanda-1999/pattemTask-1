

'use client';
import Link from 'next/link';
import { useApplication } from '@/context/ApplicationContext';

export default function Navbar() {
  const { appliedJobs } = useApplication();

  return (
    <nav className="bg-white shadow p-4 flex justify-between items-center">
      <Link href="/" className="font-bold text-xl text-blue-700">Pattem Jobs</Link>

      <div className="flex gap-6 items-center">
        <Link href="/jobs1/data" className="text-sm text-blue-600 hover:underline">
          All Job Cards
        </Link>
        <span className="text-sm">Jobs Applied: {appliedJobs.length}</span>
      </div>
    </nav>
  );
}
