import Feedbacks from "@/components/Feedbacks";
import Heromain from "@/components/Heromain";
import Services from "@/components/Services";
import SocialLinks from "@/components/SocialLinks";
export default function Home() {
  return (
    <>
      <Heromain
        title="TRADE SMARTER, NOT HARDER"
        subtitle="Be a part of a successful trading community by joining Trading With Jarit today. We have the services available which help all trading goals & dreams become true."
        
        description="We have transformed many struggling beginners into professional and successful traders through our easy to understand and highly valuable services."
        
      />
      <Services />
      <Feedbacks 
        title="Software"
        />
      <SocialLinks />
    </>
  );
}
