var fixtures = require('./../index');
it("when require module, should has default export", ()=>{
    expect(fixtures.default).toBe(fixtures);
})
it("when fixture not existing and type not setted, should create string-fixture and remember it", () => {
    var f = fixtures();
    var res = f("test1");
    expect(res).toEqual(jasmine.any(String));
    expect(f("test1")).toBe(res);
})
it("when fixture exists and type setted, should rewrite value", () => {
    var f = fixtures();
    var res = f("test1");
    var res2 = f("test1", "test");
    expect(res2 != res).toBeTruthy();
})
it("when type setted and exists, should call fixture-func", () => {
    var f = fixtures();
    var res = f("test1", "int");
    expect(res).toEqual(jasmine.any(Number));
})
it("when type is empty, should be as name", () => {
    var f = fixtures();
    var res = f("test1");
    expect(res).toBe("test1");
})
it("String", () => {
    var res = fixtures.string();
    expect(res.length > 0).toBeTruthy();
    expect(res).toEqual(jasmine.any(String));
})
it("Integer", () => {
    var res = fixtures.int();
    expect(res).toEqual(jasmine.any(Number));
    expect(res != 0).toBeTruthy();
    expect(res === parseInt(res)).toBeTruthy();
})
it("Float", () => {
    var res = fixtures.float();
    expect(res).toEqual(jasmine.any(Number));
    expect(res != 0).toBeTruthy();
    expect(res === parseFloat(res)).toBeTruthy();
})
it("Number", () => {
    var res = fixtures.number();
    expect(res).toEqual(jasmine.any(Number));
    expect(res != 0).toBeTruthy();
})