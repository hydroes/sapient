import { OpenAPIV3, ParametersSchema } from '../../framework/types';
declare type Parameter = OpenAPIV3.ReferenceObject | OpenAPIV3.ParameterObject;
/**
 * A class top arse incoing parameters and populate a list of request fields e.g. id and field types e.g. query
 * whose value must later be parsed as a JSON object, JSON Exploded Object, JSON Array, or JSON Exploded Array
 */
export declare class ParametersSchemaParser {
    private _apiDocs;
    constructor(apiDocs: OpenAPIV3.Document);
    /**
     * Parse incoing parameters and populate a list of request fields e.g. id and field types e.g. query
     * whose value must later be parsed as a JSON object, JSON Exploded Object, JSON Array, or JSON Exploded Array
     * @param path
     * @param parameters
     */
    parse(path: string, parameters?: Parameter[]): ParametersSchema;
    private validateParameterType;
}
export {};
