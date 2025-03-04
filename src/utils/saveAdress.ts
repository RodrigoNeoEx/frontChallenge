import { addCep } from "../redux/slices/cepSlice";
import { Dispatch } from "@reduxjs/toolkit";

function normalizeCep(cep: string) {
    return cep.replace(/\D/g, "");
}

export function saveAdress(
    cepData: any,
    dispatch: Dispatch,
    onSuccess: () => void
) {
    if (!cepData || !cepData.cep) {
        return;
    }

    const normalizedCep = normalizeCep(cepData.cep);
    cepData = { ...cepData, cep: normalizedCep };

    const enderecosSalvos = JSON.parse(localStorage.getItem('enderecosSalvos') || '[]');

    const existe = enderecosSalvos.some((item: any) => normalizeCep(item.cep) === normalizedCep);
    if (existe) {
        return;
    }

    try {
        enderecosSalvos.push(cepData);
        localStorage.setItem('enderecosSalvos', JSON.stringify(enderecosSalvos));

        dispatch(addCep(cepData)); 
        onSuccess();
    } catch (error) {
        console.error("Erro ao salvar no LocalStorage", error);
    }
}
