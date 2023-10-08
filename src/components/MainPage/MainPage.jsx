import BackgroundImageChanger from "../Images/Images";
// import { Outlet } from "react-router-dom";
import { Link, Outlet } from "react-router-dom";

export const MainPage = () => {

    return (
      <div>
        <BackgroundImageChanger>
          <div className="blur"></div>
        </BackgroundImageChanger>
            <div className="container">
              <h1 className="text-7xl font-[500] tracking-widest flex-nowrap ">
                IMAAYA CREATIVES
              </h1>
              <p>
                Our mission is to create an interior that is a natural
                projection of the soul and nature in love and harmony.
              </p>
              <div className="footer">
                <Link to='connect' className="connectBtn">connect with us</Link>
              </div>
            </div>
          <Outlet/>
      </div>
    );
}