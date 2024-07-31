import Hero from "@/components/hero";
import realibilityImg from "/public/reliability.jpg";

export default function ReliabilityPage() {
  return (
    <Hero 
      imgData={realibilityImg}
      imgAlt="welding man"
      title="Super high realibility hosting" 
    />  );
}