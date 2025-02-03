import Experience from "@/components/Home/Experience";
import Hero from "@/components/Home/Hero";
import SearchBar from "@/components/Home/SearchBar";
import SearchDestinations from "@/components/Home/SearchDestinations";
import TopCharters from "@/components/Home/TopCharters";
import WellComeVideo from "@/components/Home/WellComeVideo";

export default function Home() {
  return (
    <div>
      <Hero />

      <SearchBar />
      <WellComeVideo />
      <SearchDestinations />
      <Experience />
      <TopCharters/>
    </div>
  );
}
