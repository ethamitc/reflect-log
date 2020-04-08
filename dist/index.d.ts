export declare class Logger {
    private ctx;
    private timestamp;
    constructor(options?: LogOptions);
    ts(): void;
    error(message: string): void;
    warn(message: string): void;
    log(message: string): void;
}
interface LogOptions {
    colorLevel: 0 | 1 | 2 | 3 | undefined;
}
export {};
