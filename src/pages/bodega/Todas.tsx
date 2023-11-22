import axios from "axios";
import moment from "moment";
import { useEffect, useState } from "react";

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
//declare initial as caasMatrizType
const initial: CasaMatrizType[] = [
  {
    docNum: 100073702,
    docDate: "2023-11-14T00:00:00",
    cardCode: "C0002791",
    cardName: "CANTERAS D & B",
    itemCode: "01-01-014-0019",
    docEntry: 163987,
    dscription: "Nitrato de Amonio (N) 33.5%",
    quantity: 25,
    whsCode: "SPS3AVEB",
    docTotal: 14805.7575,
    paidToDate: 14805.7575,
    slpName: "Fulvia Azucena Najera",
  },
  {
    docNum: 100073711,
    docDate: "2023-11-16T00:00:00",
    cardCode: "C0003148",
    cardName: "GALILTEC",
    itemCode: "01-01-013-0003",
    docEntry: 164233,
    dscription: "Osmocote 15-9-12 (5-6 meses)",
    quantity: 1,
    whsCode: "SPS3AVEB",
    docTotal: 2309.2842,
    paidToDate: 2309.2842,
    slpName: "Fulvia Azucena Najera",
  },
];

const CasaMatriz = () => {
  const [casaMatriz, setCasaMatriz] = useState<CasaMatrizType[]>(initial);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<boolean>(false);
  const [casaMatriz2, setCasaMatriz2] = useState<CasaMatrizType[]>(initial);
  //Add the function here
  //var uniq = 'id' + (new Date()).getTime();
  const getCasaMatriz = async () => {
    try {
      setError(false);
      const { data } = await axios.get<CasaMatrizType[]>(
        `http://192.100.10.187:8787/api/Data/GetOrders3`
      );

      setCasaMatriz(data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      setError(true);
    }
  };

  useEffect(() => {
    getCasaMatriz();
    // const intervalId = setInterval(getCasaMatriz, 100);
    const intervalId = setInterval(getCasaMatriz, 15000);
    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [casaMatriz2]);
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

  const refreshHandler = () => {
    console.log("click");
    var uniq = new Date().getTime();
    setCasaMatriz2([
      ...casaMatriz2,

      {
        docNum: uniq,
        docDate: "2023-11-14T00:00:00",
        cardCode: "C0002791",
        cardName: "CANTERAS D & B",
        itemCode: "01-01-014-0019",
        docEntry: uniq,
        dscription: "Nitrato de Amonio (N) 33.5%",
        quantity: 25,
        whsCode: "SPS3AVEB",
        docTotal: 14805.7575,
        paidToDate: 14805.7575,
        slpName: "Fulvia Azucena Najera",
      },
    ]);
  };

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
          onClick={() => {
            refreshHandler();
          }}
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
      {/* <iframe
        src={voz1}
        allow="autoplay"
        style={{ display: "none" }}
        id="iframeAudio"
        
      ></iframe> */}
      {/* ifram looping audio */}

      {/* a button that on click pushes a new object on casamatriz2  */}

      {loading && <p>Loading...</p>}
      {error && <p>E</p>}
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
