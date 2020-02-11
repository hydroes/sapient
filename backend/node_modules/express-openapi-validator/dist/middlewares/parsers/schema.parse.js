"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const util_1 = require("../util");
const util_2 = require("./util");
const PARAM_TYPE = {
    query: 'query',
    header: 'headers',
    path: 'params',
    cookie: 'cookies',
};
/**
 * A class top arse incoing parameters and populate a list of request fields e.g. id and field types e.g. query
 * whose value must later be parsed as a JSON object, JSON Exploded Object, JSON Array, or JSON Exploded Array
 */
class ParametersSchemaParser {
    constructor(apiDocs) {
        this._apiDocs = apiDocs;
    }
    /**
     * Parse incoing parameters and populate a list of request fields e.g. id and field types e.g. query
     * whose value must later be parsed as a JSON object, JSON Exploded Object, JSON Array, or JSON Exploded Array
     * @param path
     * @param parameters
     */
    parse(path, parameters = []) {
        const schemas = { query: {}, headers: {}, params: {}, cookies: {} };
        parameters.forEach(p => {
            const parameter = util_2.dereferenceParameter(this._apiDocs, p);
            this.validateParameterType(path, parameter);
            const reqField = PARAM_TYPE[parameter.in];
            const { name, schema } = util_2.normalizeParameter(parameter);
            if (!schemas[reqField].properties) {
                schemas[reqField] = {
                    type: 'object',
                    properties: {},
                };
            }
            schemas[reqField].properties[name] = schema;
            if (reqField === 'query' && parameter.allowEmptyValue) {
                if (!schemas[reqField].allowEmptyValue) {
                    schemas[reqField].allowEmptyValue = new Set();
                }
                schemas[reqField].allowEmptyValue.add(name);
            }
            if (parameter.required) {
                if (!schemas[reqField].required) {
                    schemas[reqField].required = [];
                }
                schemas[reqField].required.push(name);
            }
        });
        return schemas;
    }
    validateParameterType(path, parameter) {
        const isKnownType = PARAM_TYPE[parameter.in];
        if (!isKnownType) {
            const message = `Parameter 'in' has incorrect value '${parameter.in}' for [${parameter.name}]`;
            throw util_1.validationError(400, path, message);
        }
        const hasSchema = () => {
            var _a, _b;
            const contentType = parameter.content && Object.keys(parameter.content)[0];
            return !parameter.schema || !((_b = (_a = parameter.content) === null || _a === void 0 ? void 0 : _a[contentType]) === null || _b === void 0 ? void 0 : _b.schema);
        };
        if (!hasSchema()) {
            const message = `No available parameter in 'schema' or 'content' for [${parameter.name}]`;
            throw util_1.validationError(400, path, message);
        }
    }
}
exports.ParametersSchemaParser = ParametersSchemaParser;
//# sourceMappingURL=schema.parse.js.map