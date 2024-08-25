import { ParallaxProvider } from "react-scroll-parallax";
import AboutTwo from "@/components/Abouts/About-Two";

const About = () => (
  <div className="rbt-about-area about-style-1 rbt-section-gapTop pb--30 pb_md--80 pb_sm--80 bg-color-white">
    <div className="container">
      <ParallaxProvider>
        <AboutTwo />
      </ParallaxProvider>
    </div>
  </div>
);

export default About;
