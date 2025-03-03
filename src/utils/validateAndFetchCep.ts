import { get } from "./axios";

function checkStringCEP(cep: string) {
    return cep.replace(/\D/g, "");
}

async function validateAndFetchCep(
    cep: string,
    setData: (value: any) => void,
    invalidCeps: string[],
    setInvalidCeps: (ceps: string[]) => void
) {
    const validCEP = checkStringCEP(cep);

    const checkStorage = JSON.parse(localStorage.getItem('checkStorage') || '[]');
    const savedCEP = checkStorage.find((item: any) => checkStringCEP(item.cep) === validCEP);

    if (savedCEP) {
        setData(savedCEP); 
        return;
    }

    const url = `https://viacep.com.br/ws/${validCEP}/json/`;

    try {
        const res = await get(url, "CEP não encontrado");

        if (res?.cep) {
            setData(res);
        } else {
            setData({ erro: "CEP não encontrado!" });
            setInvalidCeps([...invalidCeps, validCEP]);
        }
    } catch (error) {
        setData({ erro: "Erro ao buscar CEP!" });
        setInvalidCeps([...invalidCeps, validCEP]);
    }
}

export default validateAndFetchCep;
