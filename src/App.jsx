import "./App.css";
import { createHashRouter, RouterProvider } from "react-router-dom";
import {Home} from "./Home";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions/TermsAndConditions";
import ErrorPage from "./ErrorPage/ErrorPage";
import { AboutUsPage } from "./pages/AboutUsPage";
import { ContactUsPage } from "./pages/ContactUsPage";
import { GalleryPage } from "./pages/GalleryPage";
import { TestimonialsPage } from "./pages/TestimonialsPage";
import Layout from "./components/Layout";
import { StaffPage } from "./pages/StaffPage";

const router = createHashRouter([
  {
    path: "/",
    element: <Layout><Home /></Layout>,
  },
  {
    path: "/about-us",
    element: <Layout><AboutUsPage /></Layout>,
  },
  {
    path: "/staff",
    element: <Layout><StaffPage /></Layout>,
  },
  {
    path: "/contact-us",
    element: <Layout><ContactUsPage /></Layout>,
  },
  {
    path: "/gallery",
    element: <Layout><GalleryPage /></Layout>,
  },
  {
    path: "/testimonials",
    element: <Layout><TestimonialsPage /></Layout>,
  },
  {
    path: "/privacy-policy",
    element: <Layout><PrivacyPolicy /></Layout>,
  },
  {
    path: "/terms-and-conditions",
    element: <Layout><TermsAndConditions /></Layout>,
  },
  {
    path: "*",
    element: <Layout><ErrorPage /></Layout>,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;
