import CoworkingSpaceCard from "@/components/CoworkingSpaceCard";
export default function coworkingSpacesList() {
  return (
    <div className="w-full min-h-[90vh] h-auto px-7 py-6 bg-fixed bg-gradient-to-b from-white to-red-100 flex flex-row justify-start items-start gap-6 flex-wrap content-start">
      <div className="lg:basis-1/3 flex-grow">
        <CoworkingSpaceCard
          name="Menacing Space"
          id="1"
          about="Very menacing coworking space. You might encounter stand users here...  Located in the heart of the city, we provide a vibrant environment that fosters productivity, creativity, and collaboration."
          location="123 Sukhumvit Road, Khlong Toei, Bangkok, Thailand"
          openinghours="9.00-21.00"
        />
      </div>

      {Array.from({ length: 5 }).map((_, index) => (
        <div key={index} className="lg:basis-1/3 flex-grow">
          <CoworkingSpaceCard
            name="... Space"
            id="2" // Make ID unique if needed
            about="Modern coworking space designed for entrepreneurs, freelancers, and remote workers, offering flexible work areas, high-speed internet, and premium amenities."
            location="..., Bangkok, Thailand"
            openinghours="9.00-21.00"
          />
        </div>
      ))}

    </div>
  );
}
