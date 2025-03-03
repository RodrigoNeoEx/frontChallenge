const normalizeCep = (cep: string) => cep.replace(/\D/g, "");

export default normalizeCep;