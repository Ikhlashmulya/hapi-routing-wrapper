import { Lifecycle, RouteOptions, ServerRoute } from "@hapi/hapi";

export class HapiRouter {
  private routes: ServerRoute[] = [];

  public get(path: string, handler: Lifecycle.Method, options?: RouteOptions) {
    this.routes.push({
      method: "get",
      path,
      handler,
      options,
    });
  }

  public post(path: string, handler: Lifecycle.Method, options?: RouteOptions) {
    this.routes.push({
      method: "post",
      path,
      handler,
      options,
    });
  }

  public put(path: string, handler: Lifecycle.Method, options?: RouteOptions) {
    this.routes.push({
      method: "put",
      path,
      handler,
      options,
    });
  }

  public patch(
    path: string,
    handler: Lifecycle.Method,
    options?: RouteOptions
  ) {
    this.routes.push({
      method: "patch",
      path,
      handler,
      options,
    });
  }

  public delete(
    path: string,
    handler: Lifecycle.Method,
    options?: RouteOptions
  ) {
    this.routes.push({
      method: "delete",
      path,
      handler,
      options,
    });
  }

  public all(path: string, handler: Lifecycle.Method, options?: RouteOptions) {
    this.routes.push({
      method: "*",
      path,
      handler,
      options,
    });
  }

  public getRoutes() {
    return this.routes;
  }
}

export function createHapiRouter() {
  return new HapiRouter();
}
