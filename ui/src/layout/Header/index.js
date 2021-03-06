import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header>
      <nav className='navbar navbar-expand-md navbar-dark fixed-top bg-dark'>
        <Link className='navbar-brand' to='/'>
          Logo
        </Link>
        <button
          className='navbar-toggler'
          type='button'
          data-toggle='collapse'
          data-target='#navbarsExampleDefault'
          aria-controls='navbarsExampleDefault'
          aria-expanded='false'
          aria-label='Toggle navigation'
        >
          <span className='navbar-toggler-icon'></span>
        </button>

        <div className='collapse navbar-collapse' id='navbarsExampleDefault'>
          <ul className='navbar-nav mr-auto'>
            <li className='nav-item active'>
              <Link className='nav-link' to='/'>
                Home <span className='sr-only'>(current)</span>
              </Link>
            </li>
          </ul>
          <form className='form-inline my-2 my-lg-0'>
            <input
              className='form-control mr-sm-2'
              type='text'
              placeholder='Search'
              aria-label='Search'
            />
            <button
              className='btn btn-outline-success my-2 my-sm-0'
              type='submit'
            >
              Search
            </button>
          </form>
        </div>
      </nav>
    </header>
  );
};
export default Header;
