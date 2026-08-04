import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import Topbar from "../../components/dashboard/Topbar/Topbar";

import ProfileCard from "../../components/profile/ProfileCard/ProfileCard";
import ProfileStats from "../../components/profile/ProfileStats/ProfileStats";
import PersonalInfo from "../../components/profile/PersonalInfo/PersonalInfo";
import SkillsCard from "../../components/profile/SkillsCard/SkillsCard";
import Achievements from "../../components/profile/Achievements/Achievements";
import Goals from "../../components/profile/Goals/Goals";
import ActivityTimeline from "../../components/profile/ActivityTimeline/ActivityTimeline";

import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">

      <Sidebar />

      <div className="profile-content">

        <Topbar />

        <main className="profile-main">

          <div className="profile-header">

            <h1>My Profile</h1>

            <p>
              Manage your personal information and track your interview preparation journey.
            </p>

          </div>

          <div className="profile-top">

            <ProfileCard />

            <ProfileStats />

          </div>

          <PersonalInfo />

          <SkillsCard />

          <div className="profile-bottom">

            <Achievements />

            <Goals />

          </div>

          <ActivityTimeline />

        </main>

      </div>

    </div>
  );
}

export default Profile;