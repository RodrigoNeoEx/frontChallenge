import React from "react";

const Table = ({data}: any) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table
              className="min-w-full text-left text-sm font-light">         
              <tbody>
                <tr className="border-b border-neutral-200 dark:border-white/10">
                  {Object.entries(data).map(([key, value]) => (
                    value 
                    ? (
                      <tr key={key}>
                        <td className="border px-4 py-2">{key}</td>
                        <td className="border px-4 py-2 w-full">{value as React.ReactNode}</td>
                      </tr>
                    )
                    : <></>
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