import SectionOne from "./Home/SectionOne/sectionOne.jsx";
import SectionTwu from "./Home/SectionTwu/sectionTwu.jsx";
import SectionTrue from "./Home/SectionTree/sectionTrue.jsx";
import SectionFor from "./Home/SectionFor/sectionfor.jsx";
import SectionFive from "./Home/SectionFive/sectionFive.jsx";
import SectionVideo from "./Home/SectionVideo/sectionVideo.jsx";
import LandingStyle from "./page.module.css";
import Layout from "./components/LandingPage/Layout/layout.jsx";
import Image from "next/image";

var Home = () => {
  return (
    <Layout>
      <div className={LandingStyle.contentVideo}>
        <SectionVideo />
      </div>
      <div>
        <SectionOne />
      </div>
      <div>
        <SectionTwu />
      </div>
      <div className={LandingStyle.contentSectionsTrue}>
        <div className={LandingStyle.elemento}>
          <Image
            src="/images/elemento1section.png"
            alt="elemento"
            width={1200}
            height={400}
          />
        </div>
        <SectionTrue />
      </div>
      <div className={LandingStyle.contentSectionsFor}>
        <SectionFor />
      </div>
      <div>
        <SectionFive />
      </div>
    </Layout>
  );
};

export default Home;
