


import Link from 'next/link';
import ApplyButton from './ApplyButton';

export default function JobCard({ job, showApply }) {
  return (
    <>
    <div className="bg-white rounded-xl shadow-md p-6 hover:shadow-lg transition duration-300">
      <h2 className="text-xl font-semibold text-blue-700">{job.title}</h2>
      <p className="text-sm text-gray-600 mt-1 mb-2">{job.company} · {job.location}</p>
      <p className="text-gray-800 text-sm mb-4">{job.description.slice(0, 80)}...</p>

      <div className="flex justify-between items-center mt-4">
        <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-medium">
          AI Match: {job.ai_match_score}%
        </span>
        <Link
          href={`/jobs1/${job.id}`}
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          View →
        </Link>
      </div>

      {showApply && (
        <div className="mt-4">
          <ApplyButton jobId={job.id} />
        </div>
      )}
    </div>
    </>
  );
}
