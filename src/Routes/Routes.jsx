import { Route } from "react-router-dom";
import App from "../App.jsx";
import Dashboard from "../pages/Dashboard/Dashboard.jsx";
import ManageTeam from "../pages/ManageTeam/ManageTeam";
import ContactsInformation from "../pages/ContactsInformation/ContactsInformation";
import InvoicesBalances from "../pages/InvoicesBalances/InvoicesBalances";
import Calendar from "../pages/Calendar/Calendar";
import FaqPage from "../pages/FaqPage/FaqPage";
import BarChart from "../pages/BarChart/BarChart";
import PieChart from "../pages/PieChart/PieChart";
import LineChart from "../pages/LineChart/LineChart";
import GeographyChart from "../pages/GeographyChart/GeographyChart";
import ProfileForm from "../pages/ProfileForm/ProfileForm.jsx";

export const routes = (
  <Route path="/" element={<App />}>
    <Route path="/" element={<Dashboard />} />
    <Route path="manage-team" element={<ManageTeam />} />
    <Route path="contacts-information" element={<ContactsInformation />} />
    <Route path="invoices-balances" element={<InvoicesBalances />} />
    <Route path="profile-form" element={<ProfileForm />} />
    <Route path="calendar" element={<Calendar />} />
    <Route path="faq" element={<FaqPage />} />
    <Route path="bar-chart" element={<BarChart />} />
    <Route path="pie-chart" element={<PieChart />} />
    <Route path="line-chart" element={<LineChart />} />
    <Route path="geography-chart" element={<GeographyChart />} />
  </Route>
);
