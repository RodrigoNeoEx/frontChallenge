const Table = ({data}: any) => {
  return (
    <div className="flex flex-col bg-gradient-to-r from-[#04C1F3] to-[#13679F] w-full transition-all transition-discrete">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table
              className="min-w-full text-left text-sm font-bold">         
              <tbody>
                <tr className="border-b border-neutral-200">
                  {Object.entries(data).map(([key, value]) => (
                    String(value).length > 0 &&                       
                      <tr key={key}>
                        <td className="border px-4 py-2">{key}</td>
                        <td className="border px-4 py-2 w-full">
                          {key === 'erro' ? 'CEP não econtrado!' : String(value)}
                        </td>
                      </tr> 
                  ))}                 
                </tr>                
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Table;