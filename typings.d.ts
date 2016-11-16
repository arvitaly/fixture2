declare module "fixture2" {
    function fixture(name: string): any;
    function fixture(name: string, value: "string"): string;
    function fixture(name: string, value: "int"): number;
    function fixture(name: string, value: "float"): number;
    function fixture(name: string, value: "number"): number;
    function fixture<T>(name: string, value: T): T;
    export default fixture;
}