// @ts-nocheck
import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import Cookies from 'js-cookie';
import { useTypedSelector } from '../hooks/useTypedSelector';
import { UserType } from '../types/models';

const checkAuth = () => !!Cookies.get('jwt_token');

type RouteProps = {
  component: JSX.Element;
};

export const AdminRoutes = ({ component: Component, ...rest }) => {
  const currentUser = useTypedSelector(state => state.auth.user);

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

export const AuthRoutes = ({ component: Component, ...rest }) => {
  const currentUser: UserType | null = useTypedSelector(state => state.auth.user.data);

  const checkValideted = () => currentUser && currentUser.is_validated;

  return (
    <Route
      {...rest}
      render={props =>
        checkAuth() && checkValideted ? (
          <Component {...props} />
        ) : (
          <Redirect to={{ pathname: '/login' }} />
        )
      }
    />
  );
};

export const NoAuthRoutes = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      !checkAuth() ? <Component {...props} /> : <Redirect to={{ pathname: '/' }} />
    }
  />
);
