/** Creates a function object to be passed to `new p5()`. */
export const createSketch = (definition) => {
  const methodNames = Object.keys(definition);

  return (p) => {
    methodNames.forEach((methodName) => {
      const method = definition[methodName];
      if (method) p[methodName] = method.bind(undefined, p);
    });
  };
};
