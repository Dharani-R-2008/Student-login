import Navbar from "../components/Navbar";

function Applications() {

  const applications = [

    {
      company: "TechNova",
      role: "Frontend Developer",
      date: "10 Sep 2026",
      status: "Shortlisted"
    },

    {
      company: "CodeLabs",
      role: "Full Stack Developer",
      date: "08 Sep 2026",
      status: "Applied"
    },

    {
      company: "InnovateTech",
      role: "Software Developer",
      date: "05 Sep 2026",
      status: "Interview"
    }

  ];

  return (

    <>

      <Navbar />

      <main className="container">

        <h1>My Applications</h1>

        <div className="applications">

          {applications.map((application, index) => (

            <div
              className="application-card"
              key={index}
            >

              <div>

                <h2>
                  {application.role}
                </h2>

                <p>
                  {application.company}
                </p>

                <small>
                  Applied on {application.date}
                </small>

              </div>

              <span
                className={`status ${application.status.toLowerCase()}`}
              >
                {application.status}
              </span>

            </div>

          ))}

        </div>

      </main>

    </>

  );
}

export default Applications;
