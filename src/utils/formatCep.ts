export const formatCep = (value: string) => {
  const cep = value.replace(/\D/g, "");
  if (cep.length > 5) {
    return cep.substring(0, 5) + "-" + cep.substring(5, 8);
  }

  return cep;
};