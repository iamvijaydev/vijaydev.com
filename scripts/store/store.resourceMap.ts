import { InternalRouteData } from "../types";

const store = new Map<string, InternalRouteData<unknown>>();

const getDefaultValue = <MatterType>(): InternalRouteData<MatterType> => ({
  route: {
    pathname: '',
    chunkPath: '',
  },
  input: {
    source: '',
  },
  output: {
    cjs: '',
    mjs: '',
    html: '',
  },
});

export const getRoutes = <MatterType>() => store as Map<string, InternalRouteData<MatterType>>;

export const addRoute = <MatterType>(
  pathname: string,
  data: InternalRouteData<MatterType>
) => {
  if (store.has(pathname)) {
    return updateRoute<MatterType>(pathname, data);
  }

  store.set(pathname, { ...getDefaultValue<MatterType>(), ...data });
};

export const addChildPath = <MatterType>(pathname: string, childPath: string) => {
  let found = store.get(pathname);

  if (!found) {
    found = getDefaultValue<MatterType>();
    store.set(pathname, found);
  }

  if (!found.route.childPathnames) found.route.childPathnames = new Set();

  found.route.childPathnames.add(childPath);
}

export const updateRoute = <MatterType>(
  pathname: string,
  data: Partial<InternalRouteData<MatterType>>
) => {
  const found = store.get(pathname);

  if (!found) return;

  const { route, input, output, matter } = data;

  if (route) {
    found.route = { ...found.route, ...route };
  }
  if (input) {
    found.input = { ...found.input, ...input };
  }
  if (output) {
    found.output = { ...found.output, ...output };
  }
  if (matter) {
    found.matter = matter;
  }
};
