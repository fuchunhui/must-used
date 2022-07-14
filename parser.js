const group = (array, callbackFn) => array.reduce(
  ([left, right], item) => {
    return callbackFn(item)
      ? [[...left, item], right]
      : [left, [...right, item]]
  },
  [[], []]
);

const parser = agent => {
  const parts = agent.split(' ');
  const [engines, os] = group(parts, part => part.includes('/'));

  const [platform, arch] = os;
  const environment = engines.map(
    engine => engine.split('/')
  ).reduce(
    (state, [name, version]) => ({
      ...state,
      [name]: version
    }),
    {}
  );

  return {
    ...environment,
    platform,
    arch,
    raw: agent
  };
};

export default parser;
