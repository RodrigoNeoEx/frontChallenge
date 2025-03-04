import { useState, useEffect, useReducer } from "react";
import Table from "../table/Table";
import { formatCep } from "../../utils/formatCep";
import { useDispatch, useSelector } from "react-redux";
import validateAndFetchCep from "../../utils/validateAndFetchCep";
import { saveAdress } from "../../utils/saveAdress";
import useHydrateCeps from "../../hooks/useHydrateCeps";
import normalizeCep from "../../utils/normalizeCEP";
import { cacheReducer } from "../../hooks/useCepCache";
import { Field, Input, Label } from '@headlessui/react'
import clsx from 'clsx'


const InputSection = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState<any>(null);
  const [invalidCeps, setInvalidCeps] = useState<string[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  
  const [cepCache, dispatchCache] = useReducer(cacheReducer, {});  
  const dispatch = useDispatch();
  const cepList = useSelector((state: any) => state.cep.list);

  useHydrateCeps();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(formatCep(e.target.value));
  };

  const handleValidation = async () => {
    const normalizedCep = normalizeCep(value);
    if (cepCache[normalizedCep]) {
        setData(cepCache[normalizedCep]);
        return;
    }
    await validateAndFetchCep(normalizedCep, setData, invalidCeps, setInvalidCeps, dispatchCache);
};

  useEffect(() => {
    console.log("Cache atual de CEPs:", cepCache);
}, [cepCache]);

  const handleSalvar = () => {
    if (!data || !data.cep) {
      setData({ erro: "Nenhum endereço válido para salvar. Consulte um CEP antes." });
      return;
    }
    saveAdress(data, dispatch, () => setIsSaved(true));
  };

  useEffect(() => {
    if (isSaved) {
      setValue("");
      setData(null);
      setIsSaved(false);
    }
  }, [isSaved]);

  const alreadyExist = cepList.some((item: any) => normalizeCep(item.cep) === normalizeCep(value));

  return (
    <div className="px-6 sm:py-5 lg:px-8 pb-4">
      <form className="mx-auto mt-5 max-w-xl sm:mt-auto" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6">         
          <Field>
            <Label className="text-sm/6 font-medium text-primary">Insira o número do CEP abaixo:</Label>        
            <Input
              className={clsx(
                'mt-3 block w-full rounded-lg border-none bg-secondary/4 py-1.5 px-3 text-sm/6 text-primary',
                'focus:outline-none data-[focus]:outline-2 data-[focus]:-outline-offset-2 data-[focus]:outline-white/25'
              )}
              type="text"
                    name="input-cep"
                    id="input-cep"
                    placeholder="00000-000"
                    value={value}
                    onChange={handleChange}
                    onBlur={handleValidation}
                    onKeyDown={(e) => e.key === "Enter" && handleValidation()}
                    maxLength={9}
            />
            {data &&
            
            <button
              className={`w-full font-bold py-2 px-4 inline-flex items-center mt-4 justify-center ${
                alreadyExist ? "bg-[#13679f] cursor-not-allowed text-white" : "bg-gradient-to-r from-[#04C1F3] to-[#13679F]"
              }`}
              type="button"
              onClick={handleSalvar}
              disabled={alreadyExist}
            >
              {alreadyExist ? "CEP já salvo" : "Salvar pesquisa"}              
            </button>
            }
          </Field>
          {data && <Table data={data || {}} />}
        
        </div>
      </form>
    </div>
  );
};

export default InputSection;
