import Navbar from "../components/Navbar";
import JobCard from "../components/JobCard";

function Jobs() {

  const jobs = [

    {
      id: 1,
      role: "Frontend Developer",
      company: "TechNova",
      location: "Chennai",
      skills: "React, JavaScript, CSS",
      salary: "₹5 - ₹8 LPA"
    },

    {
      id: 2,
      role: "Full Stack Developer",
      company: "CodeLabs",
      location: "Bangalore",
      skills: "React, Node.js, MongoDB",
      salary: "₹6 - ₹10 LPA"
    },

    {
      id: 3,
      role: "Software Developer",
      company: "InnovateTech",
      location: "Coimbatore",
      skills: "Java, SQL, Git",
      salary: "₹4 - ₹7 LPA"
    },

    {
      id: 4,
      role: "Web Developer Intern",
      company: "WebWorks",
      location: "Chennai",
      skills: "HTML, CSS, JavaScript",
      salary: "₹15K - ₹25K/month"
    }

  ];

  return (

    <>

      <Navbar />

      <main className="container">

        <h1>Find Your Dream Job</h1>

        <p className="page-description">
          Explore jobs and internship opportunities.
        </p>

        <div className="search-box">

          <input
            type="text"
            placeholder="Search jobs..."
          />

          <button>
            Search
          </button>

        </div>

        <div className="jobs-grid">

          {jobs.map((job) => (

            <JobCard
              key={job.id}
              job={job}
            />

          ))}

        </div>

      </main>

    </>

  );
}

export default Jobs;
