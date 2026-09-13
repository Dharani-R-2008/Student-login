function JobCard({ job }) {

  return (
    <div className="job-card">

      <div>

        <h2>{job.role}</h2>

        <h3>{job.company}</h3>

      </div>

      <p>📍 {job.location}</p>

      <p>
        <strong>Skills:</strong> {job.skills}
      </p>

      <p>
        <strong>Salary:</strong> {job.salary}
      </p>

      <button>
        Apply Now
      </button>

    </div>
  );
}

export default JobCard;
