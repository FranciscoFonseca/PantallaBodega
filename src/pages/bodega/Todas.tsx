// // import axios from "axios";
// // import moment from "moment";
// // import { useEffect, useState } from "react";

// // /*
// // [
// //   {
// //     "docNum": 40144,
// //     "docDate": "2022-08-08T00:00:00",
// //     "cardCode": "C0006359",
// //     "cardName": "Importadora De Vehiculos S.a. De C.v.",
// //     "itemCode": "01-01-007-0002",
// //     "dscription": "Npk Fertil 12-24-12",
// //     "quantity": 2,
// //     "whsCode": "SPS3AVEB"
// //   },
// //   {
// //     "docNum": 51063,
// //     "docDate": "2022-11-02T00:00:00",
// //     "cardCode": "C0009722",
// //     "cardName": "Darlin Jacobo Chacon Solis",
// //     "itemCode": "01-01-001-0014",
// //     "dscription": "Urea Prill (N) 46%",
// //     "quantity": 1,
// //     "whsCode": "SPS3AVEB"
// //   },
// //   {
// //     "docNum": 54290,
// //     "docDate": "2022-12-02T00:00:00",
// //     "cardCode": "C0010349",
// //     "cardName": "YOJOA TRADING COMPANY",
// //     "itemCode": "01-01-013-0004",
// //     "dscription": "Osmocote 15-9-12 (12-14 meses)",
// //     "quantity": 1,
// //     "whsCode": "SPS3AVEB"
// //   },
// //   {
// //     "docNum": 91591,
// //     "docDate": "2023-08-01T00:00:00",
// //     "cardCode": "C0001137",
// //     "cardName": "Valentin Rodriguez Santos",
// //     "itemCode": "01-01-014-0019",
// //     "dscription": "Nitrato de Amonio (N) 33.5%",
// //     "quantity": 25,
// //     "whsCode": "SPS3AVEB"
// //   },
// //   {
// //     "docNum": 101024,
// //     "docDate": "2023-10-02T00:00:00",
// //     "cardCode": "C0003011",
// //     "cardName": "AGROSALUT S.A",
// //     "itemCode": "01-01-014-0038",
// //     "dscription": "Sulfato de Manganeso Soluble",
// //     "quantity": 9,
// //     "whsCode": "SPS3AVEB"
// //   },
// //   {
// //     "docNum": 101024,
// //     "docDate": "2023-10-02T00:00:00",
// //     "cardCode": "C0003011",
// //     "cardName": "AGROSALUT S.A",
// //     "itemCode": "01-01-014-0036",
// //     "dscription": "Sulfato de Cobre 25.3% ( Cu )",
// //     "quantity": 9,
// //     "whsCode": "SPS3AVEB"
// //   },
// //   {
// //     "docNum": 101024,
// //     "docDate": "2023-10-02T00:00:00",
// //     "cardCode": "C0003011",
// //     "cardName": "AGROSALUT S.A",
// //     "itemCode": "01-01-014-0040",
// //     "dscription": "Sulfato de Zinc Soluble 22.5%",
// //     "quantity": 9,
// //     "whsCode": "SPS3AVEB"
// //   },
// //   {
// //     "docNum": 101432,
// //     "docDate": "2023-10-03T00:00:00",
// //     "cardCode": "C0000770",
// //     "cardName": "David Enrique Fuentes Osorio",
// //     "itemCode": "01-01-010-0007",
// //     "dscription": "Fastrac 17-5-21",
// //     "quantity": 30,
// //     "whsCode": "SPS3AVEB"
// //   },
// //   {
// //     "docNum": 101544,
// //     "docDate": "2023-10-04T00:00:00",
// //     "cardCode": "C0002197",
// //     "cardName": "Empacadora 2000 S.R.l De C.V.",
// //     "itemCode": "01-01-001-0014",
// //     "dscription": "Urea Prill (N) 46%",
// //     "quantity": 1,
// //     "whsCode": "SPS3AVEB"
// //   },
// //   {
// //     "docNum": 101544,
// //     "docDate": "2023-10-04T00:00:00",
// //     "cardCode": "C0002197",
// //     "cardName": "Empacadora 2000 S.R.l De C.V.",
// //     "itemCode": "01-01-010-0001",
// //     "dscription": "Fastrac 12-20-12",
// //     "quantity": 1,
// //     "whsCode": "SPS3AVEB"
// //   }
// // ]

// // */

// // interface CasaMatriz {
// //   docNum: number;
// //   docDate: string;
// //   cardCode: string;
// //   cardName: string;
// //   itemCode: string;
// //   dscription: string;
// //   quantity: number;
// //   whsCode: string;
// //   docTotal: number;
// //   paidToDate: number;
// //   slpName: string;
// //   docEntry: number;
// // }

// // const TodasBodegas = () => {
// //   const [casaMatriz, setCasaMatriz] = useState<CasaMatriz[]>([]);
// //   const [loading, setLoading] = useState<boolean>(true);
// //   const [error, setError] = useState<boolean>(false);

// //   const getCasaMatriz = async () => {
// //     try {
// //       setError(false);
// //       const { data } = await axios.get<CasaMatriz[]>(
// //         `http://192.100.10.187:8787/api/Data/GetOrders2`
// //       );

// //       setCasaMatriz(data);
// //       setLoading(false);
// // //group by docEntry

// //     } catch (error) {
// //       setLoading(false);
// //       setError(true);
// //     }
// //   };

// //   useEffect(() => {
// //     getCasaMatriz();

// //     const intervalId = setInterval(getCasaMatriz, 15000);
// //     // Clean up the interval when the component unmounts
// //     return () => clearInterval(intervalId);
// //   }, []);

// //   return (
// //     <div
// //       style={{
// //         // backgroundImage: "url(/fondoAgro2.png)",
// //         backgroundImage: "url(/fondoAgro.jpg)",
// //         backgroundSize: "100% 100%",
// //         backdropFilter: "blur(8px)",
// //         height: "100vh",
// //         width: "100vw",
// //         //blur justthe background
// //       }}
// //     >
// //       {loading && <p>Loading...</p>}
// //       {error && <p>Error</p>}

// //       {/* <ul>
// //         {casaMatriz.map((item) => (
// //           <li key={item.docNum}>
// //             {item.docNum} - {item.cardName} - {item.dscription} -{" "}
// //             {item.quantity} - {item.whsCode} - {item.itemCode} -{" "}
// //             {moment(item.docDate).format("DD/MM/YYYY")}
// //           </li>
// //         ))}
// //       </ul> */}

// //       {/* diplay the data in a card form */}
// //       <div
// //         style={{
// //           height: "100%",
// //           width: "100%",
// //           padding: "1rem",
// //         }}
// //       >
// //         <div className="flex flex-wrap">
// //           {casaMatriz.map((item) => (
// //             <div className="m-2 " key={`${item.docNum}-${item.dscription}`}>
// //               <div className="rounded border h-[30rem] w-80 bg-white">
// //                 <div className="flex flex-col p-2 text-2xl gap-2">
// //                   <h5 className="card-title mt-3">{item.cardName}</h5>
// //                   <p className="card-text">
// //                     <b>Producto: </b>
// //                     {item.dscription}
// //                   </p>
// //                   {item.docEntry}
// //                   <p className="card-text">
// //                     <b>Cantidad: </b>
// //                     {item.quantity}
// //                   </p>
// //                   <p className="card-text">
// //                     <b>Bodega: </b>
// //                     {item.whsCode}
// //                   </p>
// //                   <p className="card-text">
// //                     <b>Codigo: </b>
// //                     {item.itemCode}
// //                   </p>
// //                   <p className="card-text">
// //                     <b>Fecha: </b>
// //                     {moment(item.docDate).format("DD/MM/YYYY")}
// //                   </p>
// //                   <p className="card-text">
// //                     <b>Vendedor: </b>
// //                     {item.slpName}
// //                   </p>
// //                   <p className="card-text">
// //                     <b>Estatus: </b>
// //                     {item.docTotal - item.paidToDate === 0 ? (
// //                       <span className="text-green-500">Pagado</span>
// //                     ) : (
// //                       <span className="text-red-500">Pendiente</span>
// //                     )}
// //                   </p>
// //                 </div>
// //               </div>
// //             </div>
// //           ))}
// //         </div>
// //       </div>
// //     </div>
// //   );
// // };

// // export default TodasBodegas;
// import axios from "axios";
// import moment from "moment";
// import { useEffect, useState } from "react";

// interface CasaMatriz {
//   docNum: number;
//   docDate: string;
//   cardCode: string;
//   cardName: string;
//   itemCode: string;
//   dscription: string;
//   quantity: number;
//   whsCode: string;
//   docTotal: number;
//   paidToDate: number;
//   slpName: string;
//   docEntry: number;
// }

// const TodasBodegas = () => {
//   const [casaMatriz, setCasaMatriz] = useState<CasaMatriz[]>([]);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<boolean>(false);

//   const getCasaMatriz = async () => {
//     try {
//       setError(false);
//       const { data } = await axios.get<CasaMatriz[]>(
//         `http://192.100.10.187:8787/api/Data/GetOrders2`
//       );

//       setCasaMatriz(data);
//       setLoading(false);
//     } catch (error) {
//       setLoading(false);
//       setError(true);
//     }
//   };

//   useEffect(() => {
//     getCasaMatriz();

//     const intervalId = setInterval(getCasaMatriz, 8000);
//     return () => clearInterval(intervalId);
//   }, []);

//   // Group the data based on docEntry
//   const groupedCasaMatriz = casaMatriz.reduce(
//     (result: Record<number, CasaMatriz[]>, item) => {
//       const docEntry = item.docEntry;
//       if (!result[docEntry]) {
//         result[docEntry] = [];
//       }
//       result[docEntry].push(item);
//       return result;
//     },
//     {}
//   );

//   // Convert the grouped data back to an array of arrays
//   const groupedArray = Object.values(groupedCasaMatriz);
//   const itemCart = (group: CasaMatriz[], index: any) => {
//     return (
//       <div className="m-3" key={`group-${index}`}>
//         {/* <div className="rounded border h-[30rem] w-80 bg-white"> */}
//         <div
//           id="CardId"
//           className="flex flex-col rounded border w-[26rem] bg-white"
//           style={{ height: "100%" }}
//         >
//           <div
//             className="flex flex-col p-2 text-2xl gap-2"
//             // key={`${item.docNum}-${item.dscription}`}
//           >
//             <h5 className="card-title mt-3">{group[0].cardName}</h5>
//             <p className="card-text">
//               <b>Estatus: </b>
//               {group[0].docTotal - group[0].paidToDate === 0 ? (
//                 <span className="text-green-500">Pagado</span>
//               ) : (
//                 <span className="text-red-500">Pendiente</span>
//               )}
//             </p>
//             <p className="card-text">
//               <b>Fecha: </b>
//               {moment(group[0].docDate).format("DD/MM/YYYY")}
//             </p>
//             <p className="card-text">
//               <b>Vendedor: </b>
//               {group[0].slpName}
//             </p>
//             <p className="card-text ">
//               <b>Bodega: </b>
//               {group[0].whsCode}
//             </p>
//             {/* {group.map((item) => ( */}
//             {/* //add index to the key */}
//             {group.map((item, index) => (
//               <div className="border-t-2 border-slate-900 mt-2 pb-2">
//                 <p className="card-text">
//                   <b>Producto: </b>
//                   {item.dscription}
//                 </p>
//                 <p className="card-text">
//                   <b>Codigo: </b>
//                   {item.itemCode}
//                 </p>
//                 {item.docEntry}
//                 <p className="card-text">
//                   <b>Cantidad: </b>
//                   {item.quantity}
//                 </p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>
//     );
//   };
//   return (
//     <div
//       style={{
//         backgroundImage: "url(/fondoAgro.jpg)",
//         backgroundSize: "100% 100%",
//         backdropFilter: "blur(8px)",
//         height: "100vh",
//         width: "100vw",
//         overflow: "hidden", // Hide overflow to prevent scrollbars
//       }}
//       className="scrolling-container" // Add a class for the background
//     >
//       {loading && <p>Loading...</p>}
//       {error && <p>Error</p>}

//       <div
//         style={{
//           height: "100vh", // Set a fixed height for the container
//           width: "100%",
//           padding: "1rem",
//           overflowY: "scroll", // Enable vertical scrolling
//         }}
//         className="scrolling-content" // Add a class for the scrolling content
//       >
//         <div className="flex flex-wrap justify-start">
//           {groupedArray.map((group: CasaMatriz[], index) =>
//             itemCart(group, index)
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default TodasBodegas;

import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";
import useSound from "use-sound";
import bellSound from "../../sounds/bell.mp3";
interface CasaMatrizType {
  docNum: number;
  docDate: string;
  cardCode: string;
  cardName: string;
  itemCode: string;
  dscription: string;
  quantity: number;
  whsCode: string;
  docTotal: number;
  paidToDate: number;
  slpName: string;
  docEntry: number;
}

const CasaMatriz = () => {
  const [casaMatriz, setCasaMatriz] = useState<CasaMatrizType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [play, { stop }] = useSound(bellSound);

  // return <button onClick={play}>Boop!</button>;
  function isNewObjectAdded(
    originalArray: CasaMatrizType[],
    newArray: CasaMatrizType[]
  ): boolean {
    // Check if the lengths are different
    if (originalArray.length !== newArray.length - 1) {
      return true;
    }

    // Check if each object in the original array is present in the new array
    for (const originalObject of originalArray) {
      const foundObject = newArray.find(
        (newObject) => newObject.docNum === originalObject.docNum
      );

      if (!foundObject) {
        return true; // New object found
      }
    }

    return false; // No new object found
  }
  const getCasaMatriz = async () => {
    try {
      setError(false);
      const { data } = await axios.get<CasaMatrizType[]>(
        `http://192.100.10.187:8787/api/Data/GetOrders3`
      );

      const test = isNewObjectAdded(casaMatriz, data);

      console.log(test);
      setCasaMatriz(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getCasaMatriz();
    const intervalId = setInterval(getCasaMatriz, 15000);
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, []);
  const groupedCasaMatriz = casaMatriz.reduce(
    (result: Record<number, CasaMatrizType[]>, item) => {
      const docEntry = item.docEntry;
      if (!result[docEntry]) {
        result[docEntry] = [];
      }
      result[docEntry].push(item);
      return result;
    },
    {}
  );

  // Convert the grouped data back to an array of arrays
  const groupedArray = Object.values(groupedCasaMatriz);

  const itemCart = (group: CasaMatrizType[], index: any) => {
    return (
      <div className="m-3" key={`group-${index}`}>
        {/* <div className="rounded border h-[30rem] w-80 bg-white"> */}
        <div
          id="CardId"
          className="flex flex-col rounded border w-[26rem] bg-white"
          style={{ height: "100%" }}
        >
          <div
            className="flex flex-col p-2 text-2xl gap-2"
            // key={`${item.docNum}-${item.dscription}`}
          >
            <div className="mt-3 flex justify-center">
              <b className="card-text">No. Factura</b>
            </div>
            <div className="flex justify-center">
              <p className="card-text">{group[0].docNum}</p>
            </div>
            <h5 className="card-title">{group[0].cardName}</h5>
            <p className="card-text">
              <b>Estatus: </b>
              {group[0].docTotal - group[0].paidToDate === 0 ? (
                <span className="text-green-500">Pagado</span>
              ) : (
                <span className="text-red-500">Pendiente</span>
              )}
            </p>
            <p className="card-text">
              <b>Fecha: </b>
              {moment(group[0].docDate).format("DD/MM/YYYY")}
            </p>
            <p className="card-text">
              <b>Vendedor: </b>
              {group[0].slpName}
            </p>
            <p className="card-text ">
              <b>Bodega: </b>
              {group[0].whsCode}
            </p>
            {/* {group.map((item) => ( */}
            {/* //add index to the key */}
            {group.map((item, index) => (
              <div className="border-t-2 border-slate-900 mt-2 pb-2">
                <p className="card-text">
                  <b>Producto: </b>
                  {item.dscription}
                </p>
                <p className="card-text">
                  <b>Codigo: </b>
                  {item.itemCode}
                </p>
                {item.docEntry}
                <p className="card-text">
                  <b>Cantidad: </b>
                  {item.quantity}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  return (
    <button onMouseEnter={() => play()} onMouseLeave={() => stop()}>
      <span role="img" aria-label="trumpet">
        🎺
      </span>
    </button>
  );
};

export default CasaMatriz;
