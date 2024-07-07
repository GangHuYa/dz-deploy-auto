declare const fs: any;
declare const path: any;
declare const initData: any;
type configType = {
    host: string;
    username: string;
    port: number;
    localDistPath: string;
    serverPath: string;
    privateKeyValue: string;
};
type paramsType = {
    configPath: string;
};
declare class DeployPlugin {
    private options;
    constructor(options: paramsType);
    apply(compiler: any): void;
}
