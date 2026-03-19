

const calculaLiquido = (bruto, descontos) => {
    return bruto - bruto * descontos / 100;
}

export { calculaLiquido }