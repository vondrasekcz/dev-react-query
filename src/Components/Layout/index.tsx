import { Outlet, } from "react-router-dom";


const Layout = () => (
  <>
    <div>
      Layout
    </div>
    <main>
      <Outlet />
    </main>
  </>
);


export default Layout;
