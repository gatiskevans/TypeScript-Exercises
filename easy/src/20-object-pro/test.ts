import { objectPro } from "./index";

describe("objectPro function", () => {
    test("should return the keys and values of object as separate arrays", () => {
        expect(objectPro({ a: 1, d: 2, c: 3 })).toEqual([["a", "c", "d"], [1, 3, 2]]);
        expect(objectPro({ a: "Apple", b: "Microsoft", c: "Google" })).toEqual([["a", "b", "c"], ["Apple", "Microsoft", "Google"]]);
        expect(objectPro({ key1: true, key2: false, key3: undefined })).toEqual([["key1", "key2", "key3"], [true, false, undefined]]);
    });
});