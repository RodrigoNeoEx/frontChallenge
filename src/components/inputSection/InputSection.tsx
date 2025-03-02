import { useState } from "react";
import Table from "../table/Table";
import { get } from "../../utils/axios";
import { formatCep } from "../../utils/formatCep";

const InputSection = () => {

  const [value, setValue] = useState("");
  const [data, setData] = useState<any>([]);

  const handleChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    let newValue = e.target.value;
    const formattedValue = formatCep(newValue);
    setValue(formattedValue);


    if (formattedValue.replace(/\D/g, "").length === 8) {
      const cep = formattedValue.replace(/\D/g, ""); 
      const url = `https://viacep.com.br/ws/${cep}/json/`;
      get(url, "CEP não encontrado").then((res) => setData(res));     
  };
}

  return (    
  <div className="bg-overall px-6 sm:py-32 lg:px-8">
    <form action="#" method="POST" className="mx-auto mt-10 max-w-xl sm:mt-20">
      <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2 ">
        <div>
          <label htmlFor="input-cep" className="block text-sm/6 font-semibold text-gray-900">
          Insira o número do CEP abaixo:
          </label>
          <div className="mt-2.5">
            <input 
              type="text"
              name="input-cep"
              id="input-cep"
              placeholder="00000000"
              value={value}
              onChange={handleChange}
              maxLength={9}
              className="block w-full rounded-md bg-white px-3.5 py-2 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600" 
            />
          </div>
        </div> 
      </div>      
    </form>
     <Table data={data}/> 
    
  </div>

 
  )
};

export default InputSection;