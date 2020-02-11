import { OpenAPIV3 } from '../../framework/types';
export declare function dereferenceParameter(apiDocs: OpenAPIV3.Document, parameter: OpenAPIV3.ReferenceObject | OpenAPIV3.ParameterObject): OpenAPIV3.ParameterObject;
export declare function normalizeParameter(parameter: OpenAPIV3.ParameterObject): {
    name: string;
    schema: OpenAPIV3.ReferenceObject | OpenAPIV3.SchemaObject;
};
