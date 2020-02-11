"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function dereferenceParameter(apiDocs, parameter) {
    // TODO this should recurse or use ajv.getSchema - if implemented as such, may want to cache the result
    // as it is called by query.paraer and req.parameter mutator
    if (is$Ref(parameter)) {
        const p = parameter;
        const id = p.$ref.replace(/^.+\//i, '');
        return apiDocs.components.parameters[id];
    }
    else {
        return parameter;
    }
}
exports.dereferenceParameter = dereferenceParameter;
function normalizeParameter(parameter) {
    var _a, _b;
    // TODO this should recurse or use ajv.getSchema - if implemented as such, may want to cache the result
    // as it is called by query.paraer and req.parameter mutator
    let schema = parameter.schema;
    if (!schema) {
        const contentType = Object.keys(parameter.content)[0];
        schema = (_b = (_a = parameter.content) === null || _a === void 0 ? void 0 : _a[contentType]) === null || _b === void 0 ? void 0 : _b.schema;
    }
    const name = parameter.in === 'header' ? parameter.name.toLowerCase() : parameter.name;
    return { name, schema };
}
exports.normalizeParameter = normalizeParameter;
function is$Ref(parameter) {
    return parameter.hasOwnProperty('$ref');
}
//# sourceMappingURL=util.js.map