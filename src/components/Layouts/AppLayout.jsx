import Header from "./Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Footer";
import Loader from "../Ui/Loader";
import Lightning from "../Animation/Lightning";

const AppLayout = () => {
  const navigate = useNavigation();
  if (navigate.state === "loading") return <Loader />;
  return (
    <div style={{ position: "relative", minHeight: "100vh" }}>
      {/* Lightning Background */}
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          width: "100vw",
          height: "100vh",
          zIndex: 0,
          pointerEvents: "none",
        }}
      >
        <Lightning hue={230} speed={1.5} intensity={1.2} size={1.1} />
      </div>
      {/* Main Content */}
      <div style={{ position: "relative", zIndex: 1 }}>
        <Header />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default AppLayout;
