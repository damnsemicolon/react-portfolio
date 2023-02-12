import React from 'react';
import { NavLink } from 'react-router-dom';
import ContactButton from './ContactButton';


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
        {/* ===== CONTACT BUTTON ===== */}
            <li className="nav-item ml-auto">
        <ContactButton />
      </li>
    </ul>
  );
}

export default NavTabs;
