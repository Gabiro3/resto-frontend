import DashboardNavbar from "../components/DashboardNavbar";
import DashboardSideBar from "../components/DashboardSideBar";
import { Outlet } from "react-router-dom";
import useProtectPage from "../hooks/useProtectPage";
import { createContext, useState } from "react";
import Page from "../components/ui/sidebar-v2";


export const userContext = createContext();
export default function Dashboard() {
  const { userInfo } = useProtectPage();
  const [isBarClicked, setIsBarClicked] = useState(false);
  return (
    <div className="dashboard-container">
      <userContext.Provider value={Object.keys(userInfo).length && userInfo}>
        <div className={`${isBarClicked && "active"}`}>
          <Page />
        </div>
        <div className="right-side">
          <div className="main-content">
            <Outlet context={userInfo} />
          </div>
        </div>
      </userContext.Provider>
    </div>
  );
}

