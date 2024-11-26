import React from "react";
import Context from "@/context/Context";
import { Provider } from "react-redux";
import Store from "@/redux/store";
import MobileMenu from "@/components/Header/MobileMenu";
import HeaderStyle from "@/components/Header/HeaderStyle";
import FooterOne from "@/components/Footer/Footer-One";
import PageHead from "../Head";
import Dashboard from "@/components/Instructor/Dashboard";
import StudentDashboardHeader from "@/components/Student/StudentDashboardHeader";
import StudentDashboardSidebar from "@/components/Student/StudentDashboardSidebar";

const StudentDashboard = () => {
  return (
    <>
      <PageHead title="Student Dashboard - Online Courses & Education NEXTJS14 Template" />
      <Provider store={Store}>
        <Context>
          <MobileMenu />
          <HeaderStyle headerSticky="rbt-sticky" headerType="" />
          <div className="rbt-page-banner-wrapper">
            <div className="rbt-banner-image" />
          </div>
          <div className="rbt-dashboard-area rbt-section-overlayping-top rbt-section-gapBottom">
            <div className="container">
              <div className="row">
                <div className="col-lg-12">
                  <StudentDashboardHeader />
                  <div className="row g-5">
                    <div className="col-lg-3">
                      <StudentDashboardSidebar />
                    </div>
                    <div className="col-lg-9">
                      <Dashboard />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <FooterOne />
        </Context>
      </Provider>
    </>
  );
};

export default StudentDashboard;
