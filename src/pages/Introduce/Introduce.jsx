import "./Introduce.scss";
import FramePage from "~/components/FramePage/FramePage";
import SomethingAbout from "./SomethingAbout";
import VideoSection from "./VideoSection";
import RoadSection from "./RoadSection";
import BehaviorRules from "./BehaviorRules";
import CoreValue from "./CoreValue";
import ClientsTestimonials from "./ClientsTestimonials";

export default function Introduce() {
  return (
    <FramePage>
      <div className="w-full">
        <section id="sds_banner">
          <img
            src="https://softdreams.vn/wp-content/uploads/2023/11/Group-2609280-1.png"
            alt="SoftDreams Banner"
            className="w-full h-auto"
          />
        </section>

        <SomethingAbout />
        <VideoSection />
        <RoadSection />
        <BehaviorRules />
        <CoreValue />
        <ClientsTestimonials />
      </div>
    </FramePage>
  );
}
