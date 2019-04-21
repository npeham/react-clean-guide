import { overrideUndefinedValues } from './object.helper';

type TestObject = {
  firstValue: string;
  secondValue: number;
};

describe('object helper tests', () => {
  describe('overrideUndefinedValues', () => {
    const defaultObject: TestObject = {
      firstValue: 'default',
      secondValue: 0,
    };

    it('returns merged params', () => {
      const testObjectWithUndefinedValue: TestObject = {
        firstValue: '5',
        // @ts-ignore
        secondValue: undefined,
      };
      const mergedParams: TestObject = {
        ...testObjectWithUndefinedValue,
        secondValue: defaultObject.secondValue,
      };

      expect(
        overrideUndefinedValues(testObjectWithUndefinedValue, defaultObject),
      ).toEqual(mergedParams);
    });

    it('returns the correct params when no one is undefined', () => {
      const testObject: TestObject = {
        firstValue: '5',
        secondValue: 0,
      };

      expect(overrideUndefinedValues(testObject, defaultObject)).toEqual(
        testObject,
      );
    });
  });
});
