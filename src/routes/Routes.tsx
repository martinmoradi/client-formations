import React from 'react';
import { Route, Redirect } from 'react-router-dom';

// export const PublicRoutes = ({ component: Component, ...rest }) => (
//   <Route
//     {...rest}
//     render={(props) =>
//       !checkAuth() ? (
//         <Component {...props} />
//       ) : (
//         <Redirect to={{ pathname: '/' }} />
//       )
//     }
//   />
// );