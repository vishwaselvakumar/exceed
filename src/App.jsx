import React, { lazy, Suspense, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AOS from "aos";
import "aos/dist/aos.css";
import "./css/style.css";
import "./charts/ChartjsConfig";
import loadimg from "./images/EXCEED LOGO.png";
import Navbar from './pages/Navbar/NavBar';
import Footer from './pages/Footer';
import BannerEdit from "./dashboard componts/BannerEdit";
import ServiceCardEditForm from "./dashboard componts/ServiceCarsEditForm";

const Home = lazy(() => import("./pages/Home"));
const AboutUs = lazy(() => import("./pages/About"));
const SecurityPage = lazy(() => import("./pages/Security"));
const SalesEnquiry = lazy(() => import("./pages/Sales"));
const DynamicPage = lazy(() => import("./pages/DynamicServicePage"));
const Help = lazy(() => import("./pages/Help"));
const Contact = lazy(() => import("./pages/Contact"));
const DashboardCardStatus = lazy(() => import("./dashboard Layout/dashboardHome"));
const ServiceCardCreateForm = lazy(() => import("./dashboard componts/ServiceCardCreateForm"));
const ServiceCardDeatails = lazy(() => import("./pages/serviceCardDetails"));
const ServicesCard = lazy(() => import("./pages/ServicesCard"));
const AllServiceCard = lazy(() => import("./dashboard componts/AllservicesCard"));
const Login = lazy(() => import("./component/Loginform"));
const Pagenotfound = lazy(() => import("./component/Pagenotfound"));
const Dashboard = lazy(() => import("./dashboard Layout/Dashboard"));
const Registerform = lazy(() => import("./component/Registerform"));
const ContactUsTable = lazy(() => import("./dashboard componts/ContactUsTable"));
const SalesTable = lazy(() => import("./dashboard componts/SalesTable"));
const HelpTable = lazy(() => import("./dashboard componts/helpTable"));

function App() {
  const location = useLocation();
  const { userInfo } = useSelector((state) => state.auth);

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  useEffect(() => {
    document.body.style.zoom = "84%";
  }, []);

  return (
    <>
      {userInfo ? "" : <Navbar />}
      <Suspense
        fallback={
          <div className="flex justify-center items-center w-50 h-50">
            <img
              src={loadimg}
              alt="loader"
              className="transform translate-x-60 brightness-110 h-40 w-40"
              data-aos="fade-left"
            />
          </div>
        }
        fallbackMinDurationMs={3000}
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/security" element={<SecurityPage />} />
          <Route path="/sales" element={<SalesEnquiry />} />
          <Route path="/help" element={<Contact />} />
          <Route path="/services" element={<ServicesCard />} />
          <Route path="/loginpage" element={<Login />} />
          <Route path="/register" element={<Registerform />} />
          <Route path="/servicePage/:id" element={<DynamicPage />} />

          <Route path="/Admindashboard" element={<Dashboard />}>
            <Route path="service-cards/:id" element={<ServiceCardDeatails />} />
            <Route path="servicecard-create" element={<ServiceCardCreateForm />} />
            <Route path="service-cards" element={<AllServiceCard />} />
            <Route path="contactus" element={<ContactUsTable />} />
            <Route path="sales" element={<SalesTable />} />
            <Route path="help" element={<HelpTable />} />
            <Route path="banner_edit" element={<BannerEdit />} />
            <Route index element={<DashboardCardStatus />} />
            <Route path="editFrom/:id" element={<ServiceCardEditForm />} />
          </Route>

          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </Suspense>
      {userInfo ? "" : <Footer />}
      {userInfo ? "" : (
        <div className="fixed bottom-6 right-6 ">
          <Link
            to="/sales"
            className="bg-gray-500 text-white font-xl mb-6 rounded-full font-bold h-[70px] w-[70px]  text-center px-1 py-1 flex items-center justify-center hover:bg-[#000000] transition duration-300 ease-in-out shadow-lg"
          >
            Sales Enquiry
          </Link>
          <Link
            to="/help"
            className="bg-[#67f529] text-black font-xl font-bold rounded-full h-[70px] w-[70px]  text-center  px-4 py-2 flex items-center justify-center hover:bg-[#ffffff] transition duration-300 ease-in-out shadow-lg"
          >
            Help Desk
          </Link>
        </div>
      )}
    </>
  );
}

export default App;
