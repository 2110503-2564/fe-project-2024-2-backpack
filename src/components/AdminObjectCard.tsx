import { YellowButton } from "./YellowButton";

export default function AdminObjectCard({
  id,
  name,
  number,
  uid,
  mid,
  coid,
  coname,
  editFunction,
  removeFunction,
}: {
  id?: string;
  name?: string;
  number?: number;
  uid?: string;
  mid?: string;
  coid?: string;
  coname?: string;
  editFunction?: (id: string) => void;
  removeFunction?: Function;
}) {
  const triggerEditFunction = () => {
    if (editFunction && id) {
      editFunction(id);
    }
  };

  return (
    <div
      className="h-fit w-auto bg-white z-50 m-3 p-4 flex flex-row space-x-4 rounded-4xl items-start text-2xl border-5 border-black"
      style={{ boxShadow: "3px 3px 10px rgba(0, 0, 0, 0.8)" }}
    >
      <div className="grid grid-cols-8 col-span-1 flex-1">
        <h2 className="text-center h-9 font-bold">id</h2>
        <h2 className="col-span-7">{id}</h2>

        {uid ? (
          <>
            <h2 className="text-center h-9 font-bold">User id</h2>
            <h2 className="col-span-7">{uid}</h2>
          </>
        ) : (
          ""
        )}

        {name ? (
          <>
            <h2 className="text-center h-9 font-bold">name</h2>
            <h2 className="col-span-7">{name}</h2>
          </>
        ) : (
          ""
        )}

        {number ? (
          <>
            <h2 className="text-center h-9 font-bold">number</h2>
            <h2 className="col-span-7">{number}</h2>
          </>
        ) : (
          ""
        )}

        {mid ? (
          <>
            <h2 className="text-center h-9 font-bold">Room id</h2>
            <h2 className="col-span-7">{mid}</h2>
          </>
        ) : (
          ""
        )}

        {coid ? (
          <>
            <h2 className="text-center h-9 font-bold row-span-2">form</h2>
            <h2 className="col-span-7 text-red-500">coid: {coid}</h2>
            <h2 className="col-span-7 text-red-500">coname: {coname} </h2>
          </>
        ) : (
          ""
        )}
      </div>
      <div className="flex flex-col space-y-2.5 w-fit flex-none items-start">
        <YellowButton text="edit" clickto={triggerEditFunction} />
        <YellowButton
          text="remove"
          clickto={() => (removeFunction && id ? removeFunction(id) : "")}
        />
      </div>
    </div>
  );
}

{
  /* <main className="w-[100vw]">
      <div className="w-[calc(100vw-350px)] h-fit min-h-[90vh] p-4"
      style={{backgroundImage: "var(--color-rainbow)"}}>
        <AdminObjectCard id="o8w49829109efwojvpwewap023jm-jgw" name="I LOVE TOMORROW BY TOGATHER" coid="vswjt90j42-g2g-qa2g"/>
      </div>
    </main> */
}
