 import { jobs } from '@/data/jobs';
import JobCard from '@/components/JobCard';

export default function JobsPage() {
    return (
        <div className="grid gap-4">
            {jobs.map((job) => (
                <JobCard key={job.id} job={job} />
            ))}
        </div>
    );
}