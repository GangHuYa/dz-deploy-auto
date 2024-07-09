declare const fs: any;
declare const path: any;
declare const initData: any;
type configType = {
    host: string;
    username: string;
    port: number;
    password: string;
    localDistPath: string;
    serverPath: string;
    privateKeyValue: string;
    isDeleteZip: boolean;
    isClearPrevFiles: boolean;
};
type connectType = {
    host: string;
    port: number;
    username: string;
    password: string;
    privateKeyValue: string;
    serverPath: string;
    destination: string;
    currentDate: string;
    isClearPrevFiles: boolean;
};
type initDataType = {
    configPath: string;
    isDeleteZip: boolean;
    isClearPrevFiles: boolean;
};
