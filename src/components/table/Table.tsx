import React from "react";

const Table = ({data}: any) => {
  return (
    <div className="flex flex-col">
      <div className="overflow-x-auto sm:-mx-6 lg:-mx-8">
        <div className="inline-block min-w-full py-2 sm:px-6 lg:px-8">
          <div className="overflow-hidden">
            <table
              className="min-w-full text-left text-sm font-light text-surface dark:text-white">         
              <tbody>
                <tr className="border-b border-neutral-200 dark:border-white/10">
                {data?.map((item: any, i: number) => {
                  return (
                    <React.Fragment key={i}>
                      <td className="font-medium w-1/4 text-left">{item.key}</td>
                      <td className="pl-2 text-left">{item.content}</td>
                    </React.Fragment>
                  )
                })}                  
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