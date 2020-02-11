import * as Ajv from 'ajv';
import { Request } from 'express';
import { ValidationError } from '../framework/types';
export declare class ContentType {
    contentType: string;
    mediaType: string;
    charSet: string;
    withoutBoundary: string;
    private constructor();
    static from(req: Request): ContentType;
    equivalents(): string[];
}
export declare function validationError(status: number, path: string, message: string): ValidationError;
/**
 * (side-effecting) modifies the errors object
 * TODO - do this some other way
 * @param errors
 */
export declare function augmentAjvErrors(errors?: Ajv.ErrorObject[]): Ajv.ErrorObject[];
export declare function ajvErrorsToValidatorError(status: number, errors: Ajv.ErrorObject[]): ValidationError;
export declare const deprecationWarning: {
    (message?: any, ...optionalParams: any[]): void;
    (message?: any, ...optionalParams: any[]): void;
};
