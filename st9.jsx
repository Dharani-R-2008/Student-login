import Navbar from "../components/Navbar";

function Profile() {

  return (

    <>

      <Navbar />

      <main className="container">

        <h1>My Profile</h1>

        <div className="profile-card">

          <div className="profile-header">

            <div className="avatar">
              D
            </div>

            <div>

              <h2>Student Name</h2>

              <p>
                B.Sc Computer Science
              </p>

            </div>

          </div>

          <hr />

          <div className="profile-details">

            <p>
              <strong>Email:</strong>
              student@example.com
            </p>

            <p>
              <strong>College:</strong>
              ABC College
            </p>

            <p>
              <strong>Year:</strong>
              2nd Year
            </p>

            <p>
              <strong>CGPA:</strong>
              8.2
            </p>

          </div>

          <h3>Skills</h3>

          <div className="skills">

            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
            <span>Git</span>
            <span>SQL</span>

          </div>

          <button>
            Edit Profile
          </button>

        </div>

      </main>

    </>

  );
}

export default Profile;
