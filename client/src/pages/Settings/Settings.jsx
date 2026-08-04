import Sidebar from "../../components/dashboard/Sidebar/Sidebar";
import Topbar from "../../components/dashboard/Topbar/Topbar";

import SettingsHeader from "../../components/settings/SettingsHeader/SettingsHeader";
import GeneralSettings from "../../components/settings/GeneralSettings/GeneralSettings";
import SecuritySettings from "../../components/settings/SecuritySettings/SecuritySettings";
import PrivacySettings from "../../components/settings/PrivacySettings/PrivacySettings";
import AboutSettings from "../../components/settings/AboutSettings/AboutSettings";

import "./Settings.css";

function Settings() {
  return (
    <div className="settings-page">

      <Sidebar />

      <div className="settings-content">

        <Topbar />

        <main className="settings-main">

          <SettingsHeader />

          <GeneralSettings />

          <SecuritySettings />

          <PrivacySettings />

          <AboutSettings />

        </main>

      </div>

    </div>
  );
}

export default Settings;