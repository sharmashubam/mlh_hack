import Navbar from "../navbar/Navbar";
import Main from "../main/Main";
import Profile from "../profile/Profile";
import Footer from "../footer/Footer";
import Up_loadingform from "../form/UP_loadingform";
import { MyContextProvider } from "../../contexts/MyContextProvider";
import Profile from '../profile/Profile'

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
