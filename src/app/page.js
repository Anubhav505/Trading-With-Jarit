import Feedbacks from "@/components/Feedbacks";
import Hero from "@/components/Hero";
import Services from "@/components/Services";
import SocialLinks from "@/components/SocialLinks";
export default function Home() {
  return (
    <>
      <Hero
        title="TRADE SMARTER, NOT HARDER"
        subtitle="Be a part of a successful trading community by joining Trading With Jarit today. We have the services available which help all trading goals & dreams become true."
        clientsCount={5000}
        yearsCount={6}
        description="We have transformed many struggling beginners into professional and successful traders through our easy to understand and highly valuable services."
        showImage={false}
        hasBackgroundImage={true}
      />
      <Services />
      <Feedbacks 
        title="Software"
        />
      <SocialLinks />
    </>
  );
}
