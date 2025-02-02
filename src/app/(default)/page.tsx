import Hero from "@/components/Home/Hero";
import SearchBar from "@/components/Home/SearchBar";
import SearchDestinations from "@/components/Home/SearchDestinations";
import WellComeVideo from "@/components/Home/WellComeVideo";

export default function Home() {
  return (
    <div>
      <Hero />

      <SearchBar />
      <WellComeVideo />
      <SearchDestinations/>
    </div>
  );
}
