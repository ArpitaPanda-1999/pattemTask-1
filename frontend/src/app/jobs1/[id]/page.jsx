import { jobs } from '@/data/jobs';
import Link from 'next/link';

export async function generateStaticParams() {
  return jobs.map((job) => ({
    id: job.id.toString(),
  }));
}

export default function JobDetailsPage({ params }) {
  const jobId = parseInt(params.id);
  const job = jobs.find((job) => job.id === jobId);

  if (!job) {
    return <div className="p-6 text-red-600">Job not found.</div>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6 bg-white rounded shadow">
      <h1 className="text-2xl font-bold text-blue-700">{job.title}</h1>
      <p className="text-sm text-gray-600 mb-2">{job.company} · {job.location}</p>

      <p className="mt-4 text-gray-800">{job.description}</p>

      <div className="mt-6">
        <span className="inline-block bg-green-100 text-green-700 px-4 py-2 rounded-full text-sm font-medium">
          AI Match Score: {job.ai_match_score}%
        </span>
      </div>

      <div className="mt-6 flex justify-between items-center">
        <Link href="/jobs1" className="text-blue-600 hover:underline">
          ← Back to Jobs
        </Link>

        <button className="bg-blue-600 text-white px-5 py-2 rounded hover:bg-blue-700 transition">
          Apply Now
        </button>
      </div>
    </div>
  );
}
