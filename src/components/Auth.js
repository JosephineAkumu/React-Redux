import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUser } from '../actions/authActions';
import axios from 'axios';

const Auth = ({ setUser, children }) => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      axios.get('/api/auth/user', { headers: { Authorization: `Bearer ${token}` } })
        .then((response) => {
          const user = response.data;
          setUser(user);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [setUser]);

  return <>{children}</>;
};

export default connect(null, { setUser })(Auth);
