import { deepEquals } from "../equalities";
import { ComponentType } from "react";
import { memo } from "./memo.ts";
/*
  deepMemo HOC는 컴포넌트의 props를 깊은 비교하여 불필요한 리렌더링을 방지합니다.
  - deepEquals 함수를 사용하여 props 비교
  - 앞에서 만든 memo를 사용
*/
export function deepMemo<P extends object>(Component: ComponentType<P>) {
  return memo(Component, deepEquals);
}
