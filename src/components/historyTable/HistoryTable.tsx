import Table from "../table/Table";

const HistoryTable = () => {

  return (
    <div className="bg-overall px-6 py-6 sm:py-32 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-4xl font-semibold tracking-tight text-primary sm:text-5xl">
          Veja seu Historico de Pesquisas:
        </h2>

        {/* {dataList.map((data, index) => {
          return (
            <Table key={index} data={data}/>
          )
        })} */}

      </div>
    </div>
  )
}

export default HistoryTable;