import React from 'react';
import { NavLink } from 'react-router-dom';

function NavTabs() {
  return (
    <ul className="nav nav-tabs">
        {/* ===== HOME TAB ===== */}
      <li className="nav-item">
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          home
        </NavLink>
      </li>
        {/* ===== ABOUT TAB ===== */}
      <li className="nav-item">
        <NavLink
          to="about"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          about me
        </NavLink>
      </li>
        {/* ===== PROJECT TAB ===== */}
      <li className="nav-item">
        <NavLink
          to="project"
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          project
        </NavLink>
      </li>
        {/* ===== CONTACT TAB ===== */}
      <li className="nav-item">
        <NavLink
          to="contact"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          contact
        </NavLink>
      </li>
        {/* ===== RESUME TAB ===== */}
        <li className="nav-item">
        <NavLink
          to="resume"
          end
          className={({ isActive }) =>
            isActive ? 'nav-link active' : 'nav-link'
          }
        >
          resume
        </NavLink>
      </li>
    </ul>
  );
}

export default NavTabs;
