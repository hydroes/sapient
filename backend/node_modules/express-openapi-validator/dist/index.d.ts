import { Application } from 'express';
import { OpenApiValidatorOpts } from './framework/types';
export declare class OpenApiValidator {
    private readonly options;
    constructor(options: OpenApiValidatorOpts);
    installSync(app: Application): void;
    install(app: Application): Promise<void>;
    install(app: Application, callback: (error: Error) => void): void;
    private installMiddleware;
    private installPathParams;
    private installMetadataMiddleware;
    private installMultipartMiddleware;
    private installSecurityMiddleware;
    private installRequestValidationMiddleware;
    private installResponseValidationMiddleware;
    private validateOptions;
    private normalizeOptions;
}
