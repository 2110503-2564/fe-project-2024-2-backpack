import CoworkingSpaceCard from "./CoworkingSpaceCard";
import { CoworkingSpace } from "@/types/CoworkingSpace"
import { BackendResponse } from "@/types/BackendResponses";
interface CoworkingSpaceCatalogProps {
    res: BackendResponse<CoworkingSpace>;
}
const CoworkingSpaceCatalog = async ({ res }: CoworkingSpaceCatalogProps) => {
    var coworkingSpaces;
    if (res.success && "data" in res){
        coworkingSpaces = res.data;
    }
    return (
        <div className="w-full h-auto px-7 py-6 flex flex-row justify-start items-start gap-6 flex-wrap content-start">
            {coworkingSpaces ? (coworkingSpaces.map((cw) => (
                <div className="w-full xl:w-1/3 flex-grow">
                    <CoworkingSpaceCard
                        about={cw.about}
                        id={cw._id}
                        name={cw.name}
                        location={cw.address + ", " + cw.district + ", " + cw.province + ", " + cw.postalcode}
                        openinghours={
                            new Date(cw.open_time).toISOString().slice(11, 16) + "-" + 
                            new Date(cw.close_time).toISOString().slice(11, 16)
                        }
                    />
                </div>
            ))) : (
                <p>No coworking spaces available.</p>
            )}
        </div>
    );
};

export default CoworkingSpaceCatalog;