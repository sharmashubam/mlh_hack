import Navbar from "../navbar/Navbar";
import Main from "../main/Main";
import Profile from "../profile/Profile";
import Footer from "../footer/Footer";
import { MyContextProvider } from "../../contexts/MyContextProvider";

function HomePage() {
  return (
    <MyContextProvider>
      <div className="h-full ">
        <Navbar />
        <div>
          <Main />
          <Profile />
        </div>
        <Footer />
      </div>
    </MyContextProvider>
  );
}

export default HomePage;
