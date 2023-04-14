import { useContext } from "react";
import Product from "../products/Product";
import { MyContext } from "../../contexts/MyContextProvider";

function Main() {
  const { allData } = useContext(MyContext);

  console.log(allData);
  return (
    <div className="mt-10 grid gap-5 grid-cols-3 overflow-y-auto ml-20">
      {allData?.length && (
        <div className="grid grid-cols-2 gap-16 mr-[-16%]">
          {allData.map((item) => {
            return (
              <div key={item.user}>
                <Product item={item}  className="mr-[15%]"/>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default Main;
