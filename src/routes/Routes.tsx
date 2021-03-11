// @ts-nocheck
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useTypedSelector } from '../hooks/useTypedSelector';

const checkAuth = () => !!Cookies.get('jwt_token');

type RouteProps = {
  component: JSX.Element;
};

export const AdminRoutes = ({ component: Component, ...rest }) => {
  const currentUser = useTypedSelector(state => state.auth.user.data);
  console.log('currentUser:', currentUser);
  const checkAdmin = () => currentUser && currentUser.role === 'admin';
  return (
    <Route
      {...rest}
      render={props =>
        checkAuth() && checkAdmin() ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};

export const AuthRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      checkAuth() ? <Component {...props} /> : <Redirect to={{ pathname: '/login' }} />
    }
  />
);

export const NoAuthRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !checkAuth() ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />
    }
  />
);
