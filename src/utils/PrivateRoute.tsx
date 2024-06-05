/* eslint-disable react/jsx-props-no-spreading */
import {  Route,useNavigate } from 'react-router-dom';
import { useAppSelector } from './reduxHook';

// eslint-disable-next-line @typescript-eslint/no-empty-interface


const PrivateRoute = ({ component, ...rest }: any) => {
  const { isAuthenticated } = useAppSelector((state:any) => state.auth);
  const navigate = useNavigate();
  return (
    <Route
      {...rest}
      render={(props:any) => {
        // user not logged in
        if (!isAuthenticated) {
          return navigate("/login", 
           { state: {next: props.location.pathname} })
        }

        const Component = component as any;

        return <Component {...props} />;
      }}
    />
  );
};

export default PrivateRoute;
