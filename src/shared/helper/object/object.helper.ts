type StringSignature = { [key: string]: any };

export function overrideUndefinedValues<T extends StringSignature>(
  params: T,
  overrideWith: T,
): T {
  const paramKeys = Object.keys(params);

  const undefinedParamKeys = paramKeys.filter(
    (paramKey: string) => params[paramKey] === undefined,
  );

  const mergedParams = undefinedParamKeys.reduce((prev, undefinedParamKey) => {
    return { ...prev, [undefinedParamKey]: overrideWith[undefinedParamKey] };
  },                                             params);

  return mergedParams;
}
