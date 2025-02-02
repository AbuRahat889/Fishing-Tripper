import banner from "@/assets/banner.png";

export default function Hero() {
  return (
    <main
      className="bg-cover bg-center bg-no-repeat pt-[138px] pb-[110px]"
      style={{
        backgroundImage: `url(${banner.src})`,
      }}
    >
      <div className="container flex flex-col  text-start text-white px-[135px]">
        <h1 className="text-4xl font-bold shadow-lg">
          Plan Your Perfect Day on the Water
        </h1>
        <p className="max-w-2xl text-2xl font-normal leading-normal tracking-widest mt-3">
          Find the best fishing charters, expert captains, and unforgettable
          adventures—tailored to you. Join a group fishing charter or hire a
          private boat.
        </p>
      </div>
    </main>
  );
}
