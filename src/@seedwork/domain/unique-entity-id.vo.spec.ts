import InvalidUuidError from "../errors/invalid-uuid.error"
import UniqueEntityId from "./unique-entity-id.vo"

describe("UniqueEntityId unit test", () => {
    it("should to throw error when id is invalid", () => {
        const validateSpy = jest.spyOn(UniqueEntityId.prototype as any, 'validate');
        expect(() => new UniqueEntityId("Fake id")).toThrow(new InvalidUuidError());
        expect(validateSpy).toHaveBeenCalled();
    })
})