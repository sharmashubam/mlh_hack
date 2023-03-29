import Navbar from "../navbar/Navbar";
import Main from "../main/Main";
import Profile from "../profile/Profile";
import Footer from "../footer/Footer";

function HomePage() {
  return (
    <div className="h-full ">
      <Navbar />
      <div>
        <Main />
        <Profile />
      </div>
      <Footer />
    </div>
  );
}

export default HomePage;
