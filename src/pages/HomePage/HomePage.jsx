import "./HomePage.scss";
import FramePage from "~/components/FramePage/FramePage";
import Section1 from "./Section1";
import Ecosystem from "~/components/Ecosystem/Ecosystem";
import Testimonial from "~/components/Testimonial/Testimonial";
import ContactHotline from "~/components/ContactHotline/ContactHotline";
import CulturePeople from "~/components/CulturePeople/CulturePeople";
import Partners from "~/components/Partners/Partners";
import News from "~/components/News/News";
export default function HomePage() {
  return (
    <FramePage>
      <Section1 />
      <Ecosystem />
      <Testimonial />
      <CulturePeople />
      <Partners />
      {/* Chỉ hiển thị ContactHotline nếu có dữ liệu */}
      <News />
      <ContactHotline />
    </FramePage>
  );
}
