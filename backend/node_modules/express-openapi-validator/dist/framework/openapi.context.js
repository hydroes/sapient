"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class OpenApiContext {
    constructor(spec, ignorePaths) {
        this.expressRouteMap = {};
        this.openApiRouteMap = {};
        this.routes = [];
        this.apiDoc = spec.apiDoc;
        this.basePaths = spec.basePaths;
        this.routes = spec.routes;
        this.ignorePaths = ignorePaths;
        this.buildRouteMaps(spec.routes);
    }
    isManagedRoute(path) {
        var _a;
        for (const bp of this.basePaths) {
            if (path.startsWith(bp) && !((_a = this.ignorePaths) === null || _a === void 0 ? void 0 : _a.test(path))) {
                return true;
            }
        }
        return false;
    }
    routePair(route) {
        const methods = this.methods(route);
        if (methods) {
            return {
                expressRoute: methods._expressRoute,
                openApiRoute: methods._openApiRoute,
            };
        }
        return null;
    }
    methods(route) {
        const expressRouteMethods = this.expressRouteMap[route];
        if (expressRouteMethods)
            return expressRouteMethods;
        const openApiRouteMethods = this.openApiRouteMap[route];
        return openApiRouteMethods;
    }
    // private schema(route: string, method: string) {
    //   const methods = this.methods(route);
    //   if (methods) {
    //     const schema = methods[method];
    //     return schema;
    //   }
    //   return null;
    // }
    // side-effecting builds express/openapi route maps
    buildRouteMaps(routes) {
        for (const route of routes) {
            const routeMethods = this.expressRouteMap[route.expressRoute];
            if (routeMethods) {
                routeMethods[route.method] = route.schema;
            }
            else {
                const { schema, openApiRoute, expressRoute } = route;
                const routeMethod = { [route.method]: schema };
                const routeDetails = Object.assign({ _openApiRoute: openApiRoute, _expressRoute: expressRoute }, routeMethod);
                this.expressRouteMap[route.expressRoute] = routeDetails;
                this.openApiRouteMap[route.openApiRoute] = routeDetails;
            }
        }
    }
}
exports.OpenApiContext = OpenApiContext;
//# sourceMappingURL=openapi.context.js.map