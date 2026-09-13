import Navbar from "../components/Navbar";

function Dashboard() {

  return (

    <>

      <Navbar />

      <main className="container">

        <div className="welcome">

          <h1>
            Welcome back, Student 👋
          </h1>

          <p>
            Track your career and placement journey.
          </p>

        </div>

        <div className="stats">

          <div className="stat-card">

            <h3>Total Applications</h3>

            <h2>12</h2>

          </div>

          <div className="stat-card">

            <h3>Shortlisted</h3>

            <h2>5</h2>

          </div>

          <div className="stat-card">

            <h3>Interviews</h3>

            <h2>3</h2>

          </div>

          <div className="stat-card">

            <h3>Skills</h3>

            <h2>8</h2>

          </div>

        </div>

        <div className="dashboard-section">

          <h2>Career Progress</h2>

          <div className="progress-box">

            <p>Profile Completion</p>

            <div className="progress">

              <div className="progress-bar">
                80%
              </div>

            </div>

          </div>

        </div>

      </main>

    </>

  );
}

export default Dashboard;
