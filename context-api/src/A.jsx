import { createContext, useState } from "react";
import B from "./B";

//step 1 : create a context
let countContext = createContext();

let A = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      {/* step 2: add provider as child of the component which has the data  */}
      {/* step 3: give that provider the value you want to give to your indirect low level children  */}
      <countContext.Provider value={{ count, setCount }}>
        <B />
      </countContext.Provider>
    </div>
  );
};

export default A;
// step 4: export the context you created
export { countContext };
