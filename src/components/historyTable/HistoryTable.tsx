import { useSelector } from "react-redux";
import { Listbox, ListboxButton, ListboxOption, ListboxOptions } from '@headlessui/react';
import { ChevronDownIcon } from '@heroicons/react/20/solid';
import { useState, useRef, useEffect } from 'react';

const people = [
  { id: 1, name: 'Tom Cook' },
  { id: 2, name: 'Wade Cooper' },
  { id: 3, name: 'Tanya Fox' },
  { id: 4, name: 'Arlene Mccoy' },
  { id: 5, name: 'Devon Webb' },
];

const HistoryTable = () => {
  const cepList = useSelector((state: any) => state.cep.list);
  const [selected, setSelected] = useState(people[1]);
  const [firstOpen, setFirstOpen] = useState(true);

  const listboxRef = useRef<HTMLDivElement>(null);

  const scrollToListbox = () => {
    if (listboxRef.current) {
      const rect = listboxRef.current.getBoundingClientRect();
      const scrollY = window.scrollY + rect.top - (window.innerHeight / 4); // Opcional: ajusta 1/4 da tela
      window.scrollTo({
        top: scrollY,
        behavior: 'smooth',
      });
    }
  };

  useEffect(() => {
    if (firstOpen) {
      scrollToListbox();
      setFirstOpen(false);
    }
  }, [firstOpen]);

  return (
    <div className="px-6 sm:py-32 lg:px-8 relative min-h-[30rem]">
      <div className="mx-auto max-w-2xl text-center">
        <h2 className="text-balance text-3xl font-semibold tracking-tight text-primary sm:text-5xl">
          Veja seu Histórico Salvo de Pesquisas:
        </h2>

        <div className="relative mt-4" ref={listboxRef}>
          <Listbox value={selected} onChange={setSelected}>
            {({ open }) => (
              <>
                <ListboxButton className="w-full rounded-lg bg-secondary py-1.5 pr-8 pl-3 text-left text-sm text-primary font-bold">
                  {selected.name}
                  <ChevronDownIcon className="absolute top-0 right-2.5 text-primary size-8" />
                </ListboxButton>

                {open && (
                  <ListboxOptions className="mt-1 w-full top-full rounded-lg border bg-white shadow-lg max-h-60 overflow-auto">
                    {people.map((person) => (
                      <ListboxOption
                        key={person.name}
                        value={person}
                        className="cursor-pointer select-none py-2 pl-3 pr-4 text-sm text-gray-900 hover:bg-gray-100"
                      >
                        {person.name}
                      </ListboxOption>
                    ))}
                  </ListboxOptions>
                )}
              </>
            )}
          </Listbox>
        </div>
      </div>
    </div>
  );
};

export default HistoryTable;
