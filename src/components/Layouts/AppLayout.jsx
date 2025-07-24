import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Loader from "../Ui/Loader";

const AppLayout = () => {
  const navigate = useNavigation();
  if (navigate.state === "loading") return <Loader />;
  return (
    <div>
      <Header />
      <Outlet />
      <Footer />
    </div>
  );
};

export default AppLayout;
