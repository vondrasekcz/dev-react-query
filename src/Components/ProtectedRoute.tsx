import { ReactNode, } from "react";
import { Navigate, Outlet, } from "react-router-dom";


interface Props {
  isAllowed?: boolean,
  redirectPath?: string,
  children?: ReactNode,
};


const DEFAULT_REDIRECT_TO = "/login";


const ProtectedRoute = ({
  isAllowed,
  redirectPath = DEFAULT_REDIRECT_TO,
  children,
}: Props) => {
  if (!isAllowed) {
    return (
      <Navigate
        to={redirectPath}
        replace
      />
    );
  };

  return (
    <>
      {children ? children : <Outlet />}
    </>
  );
};

export default ProtectedRoute;
