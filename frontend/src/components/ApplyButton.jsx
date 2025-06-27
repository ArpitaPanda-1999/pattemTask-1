


'use client';
import { useApplication } from '@/context/ApplicationContext';

export default function ApplyButton({ jobId }) {
  const { appliedJobs, applyToJob } = useApplication();
  const isApplied = appliedJobs.includes(jobId);

  return (
    <button
      className={`mt-4 px-4 py-2 rounded text-white ${isApplied ? 'bg-gray-500' : 'bg-blue-600 hover:bg-blue-700'}`}
      onClick={() => applyToJob(jobId)}
      disabled={isApplied}
    >
      {isApplied ? 'Applied' : 'Apply Now'}
    </button>
  );
}