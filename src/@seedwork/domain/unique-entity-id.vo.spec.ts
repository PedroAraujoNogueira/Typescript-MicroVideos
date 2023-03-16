import InvalidUuidError from "../errors/invalid-uuid.error"
import UniqueEntityId from "./unique-entity-id.vo"
import { validate as uuidValidate } from 'uuid';

// function spyValidateMethod() {
//     return jest.spyOn(UniqueEntityId.prototype as any, 'validate');
// } 

describe("UniqueEntityId unit test", () => {
    
    // beforeEach(() => {
    //     jest.clearAllMocks(); // Limpa todos os mocks dessa classe de teste.
    // })

    const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');
    
    // beforeEach(() => {
    //     validateSpy.mockClear(); // Limpa somente os mocks da variavel validateSpy.
    // }) 

    it("should to throw error when id is invalid", () => {
        // const validateSpy = spyValidateMethod();
        expect(() => new UniqueEntityId("Fake id")).toThrow(new InvalidUuidError());
        expect(validateSpy).toHaveBeenCalled();
    })

    it("should accept a uuid passed in constructor", () => {
        // const validateSpy = spyValidateMethod();
        const uuid = "76e356d9-5354-433b-9b0f-bf181d502669";
        const vo = new UniqueEntityId(uuid);
        expect(vo.id).toBe(uuid);
        expect(validateSpy).toHaveBeenCalled();
    })

    it("should create a uuid", () => {
        // const validateSpy = spyValidateMethod();
        const vo = new UniqueEntityId();
        expect(uuidValidate(vo.id)).toBeTruthy();
        expect(validateSpy).toHaveBeenCalled();
    })
})