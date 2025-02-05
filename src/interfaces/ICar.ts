export interface ICar {
    placa: string;
    chassi: string;
    modelo: string;
    renavam: string;
    marca: string;
    ano: number;
}

export interface IUpdateCar {
    placa?: string;
    chassi?: string;
    modelo?: string;
    renavam?: string;
    marca?: string;
    ano?: number;
}
