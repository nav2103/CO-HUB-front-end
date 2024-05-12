// import React from 'react';
import { Navbar } from "../../Components";
import { Footer, DashboardButtons, DisplayToggle } from "../../Containers";
import "./dashboard.css";

const Dashboard = () => {
  return (
    <div className="dashboard gradient_bg">
      <Navbar />
      <div className="dashboard__header">
        <div className="dashboard__heading">
          <h1>Dashboard</h1>
          <div className="dashboard__line" />
        </div>
        <DashboardButtons />
        <DisplayToggle />
      </div>
      <Footer />
    </div>
  );
};

export default Dashboard;
