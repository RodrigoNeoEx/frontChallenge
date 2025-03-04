import { useSelector } from "react-redux";
import Table from "../table/Table";

const HistoryTable = () => {
  const cepList = useSelector((state: any) => state.cep.list);

  return (
    <div className="px-6 py-4 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
          Veja seu Historico de Pesquisas:
        </h2>
        {cepList.map((data: any, index: any) => <Table key={index} data={data} />)}
      </div>
    </div>
  )
}

export default HistoryTable;