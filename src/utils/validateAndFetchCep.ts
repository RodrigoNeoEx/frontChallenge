import { get } from "./axios";
import normalizeCep from "./normalizeCEP";


async function validateAndFetchCep(
    cep: string,
    setData: (value: any) => void,
    invalidCeps: string[],
    setInvalidCeps: (ceps: string[]) => void,
    dispatchCache: (action: any) => void
) {
    const validCEP = normalizeCep(cep);

    const enderecosSalvos = JSON.parse(localStorage.getItem('enderecosSalvos') || '[]');
    const savedCEP = enderecosSalvos.find((item: any) => normalizeCep(item.cep) === validCEP);

    if (savedCEP) {
        setData(savedCEP);
        return;
    }

    if (validCEP.length !== 8) {
        setData({ erro: "CEP inválido! Insira exatamente 8 dígitos." });
        dispatchCache({ type: 'ADD_ERROR', cep: validCEP, error: "CEP inválido!" });
        return;
    }

    const url = `https://viacep.com.br/ws/${validCEP}/json/`;

    try {
        const res = await get(url, "CEP não encontrado");

        if (res?.cep) {
            setData(res);
            dispatchCache({ type: 'ADD_SUCCESS', cep: validCEP, data: res });
        } else {
            setData({ erro: "CEP não encontrado!" });
            dispatchCache({ type: 'ADD_ERROR', cep: validCEP, error: "CEP não encontrado!" });
            setInvalidCeps([...invalidCeps, validCEP]);
        }
    } catch (error) {
        setData({ erro: "Erro ao buscar CEP!" });
        dispatchCache({ type: 'ADD_ERROR', cep: validCEP, error: "Erro ao buscar CEP!" });
        setInvalidCeps([...invalidCeps, validCEP]);
    }
}

export default validateAndFetchCep;
