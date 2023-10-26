import { Equal, Expect } from "../helpers/type-utils";

interface Values {
  email: string;
  firstName: string;
  lastName: string;
}

type Helper =  {
  [K in keyof Values]: [K, Values[K]];
}

type ValuesAsUnionOfTuples = Helper[keyof Helper];

type tests = [
  Expect<
    Equal<
      ValuesAsUnionOfTuples,
      ["email", string] | ["firstName", string] | ["lastName", string]
    >
  >
];
