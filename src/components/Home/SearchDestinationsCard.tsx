import Image from "next/image";

interface CardInfo {
  image: string;
  title: string;
  flag: string;
  subTitle: string;
  description: string;
}

export default function SearchDestinationsCard({
  cardInfo,
}: {
  cardInfo: CardInfo;
}) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <Image
        src={cardInfo.image}
        alt={cardInfo.title}
        height={200}
        width={200}
        className="w-full h-56 object-cover"
      />

      <div className="p-6">
        <h2 className="text-2xl text-[#171717]  font-bold mb-2 flex items-center leading-9">
          {cardInfo.title}{" "}
          <span className="ml-2">
            <Image
              src={cardInfo.flag}
              alt="flag"
              height={100}
              width={100}
              className="w-6 h-6"
            />
          </span>
        </h2>

        <p className="text-[#474747] text-2xl font-normal leading-7">
          {cardInfo.subTitle}
        </p>
        <p className="text-[#9E9E9E] mt-2 text-base font-normal">
          {cardInfo.description}
        </p>
      </div>
    </div>
  );
}
