import { describe, expect, test } from "@jest/globals";
import { chassiSanitized, plateSanitized } from "../../src/utils";

describe("Car Service", () => {
    test("should receive false when placa is invalid", () => {
        const response = plateSanitized("fake-placa");

        expect(response).toStrictEqual(false);
    });

    test("should receive true when placa is valid", () => {
        const response = plateSanitized("HFX-7422");

        expect(response).toStrictEqual(true);
    });

    test("should receive false when chassi is invalid", () => {
        const response = chassiSanitized("fake-chassi");

        expect(response).toStrictEqual(false);
    });

    test("should receive true when chassi is valid", () => {
        const response = chassiSanitized("1HGCM82633A123456");

        expect(response).toStrictEqual(true);
    });
});
