export const plateSanitized = (placa: string) => {
    const regexPlaca = /^[A-Z]{3}[-.\s]?\d{4}$|^[A-Z]{3}\d[A-Z]\d{2}$/;
    const isValid = regexPlaca.test(placa);

    return isValid;
};

export const chassiSanitized = (placa: string) => {
    const regexChassi = /^[A-HJ-NPR-Z0-9]{17}$/;
    const isValid = regexChassi.test(placa);

    return isValid;
};
