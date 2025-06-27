

"use client";
import { jobs } from '@/data/jobs';
import JobCard from '@/components/JobCard';

export default function JobDataPage() {
  return (
    <div className="max-w-6xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">All Job Listings</h1>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {jobs.map((job) => (
          <JobCard key={job.id} job={job} showApply={true} />
        ))}
      </div>
    </div>
  );
}
