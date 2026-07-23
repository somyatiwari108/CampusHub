import { NavLink } from "react-router-dom";
import {
  FaBell,
  FaUserCircle,
  FaGraduationCap,
} from "react-icons/fa";

import { MdDashboard } from "react-icons/md";
import { FiBookOpen } from "react-icons/fi";
import { BsBriefcase } from "react-icons/bs";
import { HiSparkles } from "react-icons/hi2";
import { PiUsersThreeBold } from "react-icons/pi";

function Navbar() {
  return (
    <nav className="bg-white shadow-sm border-b border-gray-200 h-20">
      <div className="max-w-7xl mx-auto h-full px-8 flex items-center justify-between">

        {/* Logo */}
        <div className="flex items-center gap-3">

          <div className="w-11 h-11 rounded-xl bg-gradient-to-r from-blue-700 to-cyan-500 flex items-center justify-center">
            <FaGraduationCap className="text-white text-xl" />
          </div>

          <h1 className="text-3xl font-bold">
            Campus
            <span className="text-cyan-500">Hub</span>
          </h1>

        </div>

        {/* Navigation */}
        <div className="flex items-center gap-8">

          <NavLink to="/">
            <div className="flex items-center gap-2">
              <MdDashboard />
              Dashboard
            </div>
          </NavLink>

          <NavLink to="/alumni">
            <div className="flex items-center gap-2">
              <PiUsersThreeBold />
              Alumni
            </div>
          </NavLink>

          <NavLink to="/notices">
            <div className="flex items-center gap-2">
              <FiBookOpen />
              Notices
            </div>
          </NavLink>

          <NavLink to="/placement">
            <div className="flex items-center gap-2">
              <BsBriefcase />
              Placement
            </div>
          </NavLink>

          <NavLink to="/quiz">
            <div className="flex items-center gap-2">
              <HiSparkles />
              AI Quiz
            </div>
          </NavLink>

        </div>

        {/* Right Side */}
        <div className="flex items-center gap-6">

          <FaBell className="text-xl cursor-pointer" />

          <div className="flex items-center gap-2">

            <FaUserCircle className="text-3xl" />

            <span className="font-medium">
              Som
            </span>

          </div>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;