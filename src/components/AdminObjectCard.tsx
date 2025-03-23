import { YellowButton } from "./OtherComponents";

export default function AdminObjectCard ({id, name, email, coid, coname}:{id:string, name:string, email?:string, coid?:string, coname?:string}) {
    return (
        <div className="h-fit w-auto bg-white m-3 p-4 flex flex-row space-x-4 rounded-4xl items-start text-2xl border-5 border-black"
        style={{boxShadow:"3px 3px 10px rgba(0, 0, 0, 0.8)"}}>
            <div className="grid grid-cols-8 col-span-1 flex-1">
                <h2 className="text-center h-9 font-bold">id</h2>
                <h2 className="col-span-7">{id}</h2>
                <h2 className="text-center h-9 font-bold">name</h2>
                <h2 className="col-span-7">{name}</h2>

                {
                    email?
                    <>
                        <h2 className="text-center h-9 font-bold">email</h2>
                        <h2 className="col-span-7">{email}</h2>
                    </> 
                     : ""
                }

                {
                    coid? 
                    <>
                        <h2 className="text-center h-9 font-bold row-span-2">form</h2>
                        <h2 className="col-span-7 text-red-500">coid: {coid}</h2>
                        <h2 className="col-span-7 text-red-500">coname: {coname} </h2>
                    </> 
                    : ""
                }

            </div>
            <div className="flex flex-col space-y-2.5 w-fit flex-none items-start">
                <YellowButton text="edit"/>
                <YellowButton text="remove"/>
            </div>
            
        </div>
    );
}

{/* <main className="w-[100vw]">
      <div className="w-[calc(100vw-350px)] h-fit min-h-[90vh] p-4"
      style={{backgroundImage: "var(--color-rainbow)"}}>
        <AdminObjectCard id="o8w49829109efwojvpwewap023jm-jgw" name="I LOVE TOMORROW BY TOGATHER" coid="vswjt90j42-g2g-qa2g"/>
      </div>
    </main> */}


