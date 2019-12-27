import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import auth0Client from '../../../auth/auth';
import './Navbar.css';

const Navbar = (props) => {
  const signOut = () => {
    props.signOut({});
    props.history.push('/');
  };

  const { config, isAuthenticated, userProfile } = props;
  
  const elems = config.map(c => {
    const Comp = c.component;
    if (!c.needsAuth || c.needsAuth === isAuthenticated ) {
      return (
        <div key={c.key}>
          <Comp to={c.to} className={c.className}>
            {c.description}
          </Comp>
        </div>
      );
    }
    return null;
  });

  return(
    <nav className='navbar navbar-dark bg-primary fixed-top' >
      <Link className="navbar-brand" to="/">
        Playground App
      </Link>
      {elems}    
      {
        !isAuthenticated && (
          <button className='btn btn-dark' onClick={auth0Client.signIn}>Sign In</button>
        )
      }
      {
        isAuthenticated && (
          <div>
            <label className='mr-2 text-white'>{ userProfile.name }</label>
            <button className='btn btn-dark' onClick={() => {signOut()}}>Sign Out</button>
          </div>
        )
      }
    </nav>
  );
}

export default withRouter(Navbar);