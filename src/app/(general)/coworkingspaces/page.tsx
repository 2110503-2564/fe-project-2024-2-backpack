import CoworkingSpaceCard from "@/components/CoworkingSpaceCard";
import { getCoWorkingSpaces } from "@/libs/coworkingSpace";
import CoworkingSpaceCatalog from "@/components/CoworkingSpaceCatalog";
export default async function coworkingSpacesList() {
  const res = await getCoWorkingSpaces();
  // console.log(res);
  return (
    <div className="w-full min-h-[90vh] h-auto bg-fixed bg-gradient-to-b from-white to-red-100">
      <CoworkingSpaceCatalog res={res} />
    </div>
  );
}
