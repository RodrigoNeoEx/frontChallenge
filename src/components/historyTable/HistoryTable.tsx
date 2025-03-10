import { useSelector } from "react-redux";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState, useEffect } from 'react';
import Table from '../table/Table';

const HistoryTable = () => {
  const cepList = useSelector((state: any) => state.cep.list);
  const [selected, setSelected] = useState<any>(null);

  useEffect(() => {
    if (cepList.length > 0 && !selected) {
      setSelected(cepList[0]);
    }
  }, [cepList, selected]);


  return (
    <div className="px-6 lg:px-8 relative">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary ">
        {cepList.length === 0 
          ? 'Salve suas pesquisas para poder consultar abaixo.'
          : "Selecione abaixo seus CEPS's salvos para visualizar:"
        }          
        </h2>
        {cepList.length !== 0 &&
        <div className="relative mt-4">
          <Listbox value={selected} onChange={setSelected}>
            <div className="relative">
              <ListboxButton className="w-full rounded-lg bg-secondary py-1.5 pr-8 pl-3 text-left text-sm text-primary font-bold">
                {`CEP: ${selected?.cep}`}
                <ChevronDownIcon className="absolute top-0 right-2.5 text-primary size-8" />
              </ListboxButton>

              <ListboxOptions className="mt-1 w-full top-full rounded-lg border bg-primary shadow-lg max-h-60 overflow-auto absolute">
                {cepList.map((cep: any) => (
                  <ListboxOption
                    key={cep.cep}
                    value={cep}
                    className="cursor-pointer select-none py-2 pl-3 pr-4 text-sm text-white hover:bg-gray-100 border"
                  >
                    {`CEP: ${cep.cep}`}
                  </ListboxOption>
                ))}
              </ListboxOptions>
            </div>
          </Listbox>

          {selected && (
            <div className="mt-4">
              <Table data={selected} />
            </div>
          )}
        </div>
         }
      </div>
    </div>
  );
};

export default HistoryTable;
