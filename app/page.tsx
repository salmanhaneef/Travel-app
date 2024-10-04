import Camp from "@/components/Camp";
import Features from "@/components/Features";
import GetApp from "@/components/GetApp";
import Guide from "@/components/Guide";
import Hero from "@/components/Hero";
import ScrollAnimation from "@/components/ScrollAnimation";

const Home: React.FC = () => {
  return (
    <>
      <ScrollAnimation>
        <Hero />
      </ScrollAnimation>

      <ScrollAnimation>
        <Camp />
      </ScrollAnimation>

      <ScrollAnimation>
        <Guide />
      </ScrollAnimation>

      <ScrollAnimation>
        <Features />
      </ScrollAnimation>

      <ScrollAnimation>
        <GetApp />
      </ScrollAnimation>
    </>
  );
};

export default Home;
