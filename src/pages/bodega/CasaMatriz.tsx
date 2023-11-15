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

class TransactionTracker {
  private trackedDocNums: Set<number> = new Set<number>();

  addTransaction(docNum: number): boolean {
    if (!this.trackedDocNums.has(docNum)) {
      this.trackedDocNums.add(docNum);
      return true; // Trigger
    }
    return false;
  }

  getTrackedDocNums(): Set<number> {
    return this.trackedDocNums;
  }
}

const CasaMatriz = () => {
  const [casaMatriz, setCasaMatriz] = useState<CasaMatrizType[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [play, { stop }] = useSound(bellSound);
  const tracker = new TransactionTracker();
  //Add the function here

  const getCasaMatriz = async () => {
    try {
      setError(false);
      const { data } = await axios.get<CasaMatrizType[]>(
        `http://192.100.10.187:8787/api/Data/GetOrders3`
      );

      data.forEach((transaction) => {
        const trigger = tracker.addTransaction(transaction.docNum);
        console.log("trigger", trigger);
        if (trigger) {
          // Trigger action (e.g., play sound) here
          stop();
          play();
        }
      });

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
    <div
      style={{
        backgroundImage: "url(/fondoAgro.jpg)",
        backgroundSize: "100% 100%",
        backdropFilter: "blur(8px)",
        height: "100vh",
        width: "100vw",
        overflow: "hidden", // Hide overflow to prevent scrollbars
      }}
      className="scrolling-container" // Add a class for the background
    >
      {loading && <p>Loading...</p>}
      {error && <p>Error</p>}
      {/* <button onClick={play}>Boop!</button> */}

      <div
        style={{
          height: "100vh", // Set a fixed height for the container
          width: "100%",
          padding: "1rem",
          overflowY: "scroll", // Enable vertical scrolling
        }}
        className="scrolling-content" // Add a class for the scrolling content
      >
        <div className="flex flex-wrap justify-start">
          {groupedArray.map((group: CasaMatrizType[], index) =>
            itemCart(group, index)
          )}
        </div>
      </div>
    </div>
  );
};

export default CasaMatriz;
