import { useQuery } from "@tanstack/react-query";
import Axios from "axios";
// export const Contact = () => {
//   const {
//     data: catData,
//     isLoading,
//     isError,
//     refetch,
//   } = useQuery(["cat"], () => {
//     return Axios.get("https://catfact.ninja/fact").then((res) => res.data);
//   });

//   if (isError) {
//     return <h1>Sorry there was an error</h1>;
//   }

//   if (isLoading) {
//     return <h1>Loading...</h1>;
//   }

//   return (
//     <div>
//       <h1>
//         Contact Page <p>{catData?.fact}</p>
//       </h1>
//       <button onClick={refetch}>Update Data</button>
//     </div>
//   );
// };
export const Contact = () => {
  return <div>Hi</div>;
};
