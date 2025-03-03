import { useState, useEffect } from "react";
import Table from "../table/Table";
import { formatCep } from "../../utils/formatCep";
import { useDispatch, useSelector } from "react-redux";
import validateAndFetchCep from "../../utils/validateAndFetchCep";
import { saveAdress } from "../../utils/saveAdress";
import useHydrateCeps from "../../hooks/useHydrateCeps";
import normalizeCep from "../../utils/normalizeCEP";


const InputSection = () => {
  const [value, setValue] = useState("");
  const [data, setData] = useState<any>(null);
  const [invalidCeps, setInvalidCeps] = useState<string[]>([]);
  const [isSaved, setIsSaved] = useState(false);
  
  const dispatch = useDispatch();
  const cepList = useSelector((state: any) => state.cep.list);

  useHydrateCeps();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(formatCep(e.target.value));
  };

  const handleValidation = async () => {
    const cep = normalizeCep(value);
    await validateAndFetchCep(cep, setData, invalidCeps, setInvalidCeps);
  };

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
    <div className="bg-overall px-6 sm:py-32 lg:px-8">
      <form className="mx-auto mt-10 max-w-xl sm:mt-20" onSubmit={(e) => e.preventDefault()}>
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="input-cep" className="block text-sm/6 font-semibold text-gray-900">
              Insira o número do CEP abaixo:
            </label>
            <div className="mt-2.5 flex">
              <input
                type="text"
                name="input-cep"
                id="input-cep"
                placeholder="00000000"
                value={value}
                onChange={handleChange}
                onBlur={handleValidation}
                onKeyDown={(e) => e.key === "Enter" && handleValidation()}
                maxLength={9}
                className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 outline-gray-300 placeholder:text-gray-400 focus:outline-indigo-600"
              />
            </div>
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
          </div>
        </div>
      </form>
      <Table data={data || {}} />
    </div>
  );
};

export default InputSection;
