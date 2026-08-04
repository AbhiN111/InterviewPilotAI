import "./PersonalInfo.css";

function PersonalInfo() {
  return (
    <div className="personal-card">

      <div className="personal-header">

        <h2>Personal Information</h2>

        <button>Save Changes</button>

      </div>

      <div className="personal-grid">

        <div className="form-group">

          <label>Full Name</label>

          <input
            type="text"
            defaultValue="Abhishek Nawale"
          />

        </div>

        <div className="form-group">

          <label>Email</label>

          <input
            type="email"
            defaultValue="abhishek@example.com"
          />

        </div>

        <div className="form-group">

          <label>Phone</label>

          <input
            type="text"
            defaultValue="+91 9876543210"
          />

        </div>

        <div className="form-group">

          <label>College</label>

          <input
            type="text"
            defaultValue="Sinhgad Academy of Engineering"
          />

        </div>

        <div className="form-group">

          <label>Branch</label>

          <input
            type="text"
            defaultValue="Computer Engineering"
          />

        </div>

        <div className="form-group">

          <label>Graduation Year</label>

          <input
            type="text"
            defaultValue="2028"
          />

        </div>

      </div>

    </div>
  );
}

export default PersonalInfo;