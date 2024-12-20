
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import { Login } from "./components/pages/Login";
import { Register } from "./components/pages/Register";
import { Header } from "./components/pages/Header";
import { Sidebar } from "./components/pages/Sidebar";
import { Dashboard } from "./components/pages/Dashboard";
import { Employees } from "./components/pages/Employees";
import { Departments } from "./components/pages/Departments";
import { SalarynAttendance } from "./components/pages/SalarynAttendance";
import { Viewfeedbacks } from "./components/pages/Viewfeedbacks";
import { Settings } from "./components/pages/Settings";
import {Leaveapproval} from "./components/pages/Leaveapproval";
import { Createprojects } from './components/pages/Createprojects';

const Layout = ({ children }) => {
  const location = useLocation();
  const showHeaderSidebar = location.pathname !== '/' && location.pathname !== '/register';

  return (
    <div className='wholecontainer'>
      {showHeaderSidebar && <Header />}
      {showHeaderSidebar && <Sidebar />}
      <div className='main-content'>
        {children}
      </div>
    </div>
  );
};

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Layout><Dashboard /></Layout>} />
        <Route path="/employees" element={<Layout><Employees /></Layout>} />
        <Route path="/departments" element={<Layout><Departments /></Layout>} />
        <Route path="/salary" element={<Layout><SalarynAttendance /></Layout>} />
        <Route path="/leaveapproval" element={<Layout><Leaveapproval /></Layout>} />
        <Route path="/createprojects" element={<Layout><Createprojects /></Layout>} />
        {/* <Route path="/createprojects" element={<Layout><Createprojects /></Layout>} />
        
        <Route path="/awardanemployee" element={<Layout><Awardanemployee /></Layout>} />
        <Route path="/logout" element={<Layout><Logout /></Layout>} />
        <Route path="/rewards" element={<Layout><Rewards /></Layout>} /> */}
        <Route path="/viewfeedbacks" element={<Layout><Viewfeedbacks /></Layout>} />
        
        <Route path="/settings" element={<Layout><Settings /></Layout>} />
        
      </Routes>
    </Router>
  );
}

export default App;
