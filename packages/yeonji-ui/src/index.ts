// src/index.ts

// 전역 스타일 부수효과 (import만 해도 CSS가 실행됨)
// 순서 중요: reset이 먼저 적용되고, 그 위에 base가 덮어써야 함
import "./theme/reset.css";
import "./theme/font.css";
import "./theme/base.css";

// 토큰 export
export { primitive } from "./theme/primitive.css";
export { vars } from "./theme/contract.css";
export { lightTheme } from "./theme/light.css";

// shared export
export { fieldTokens } from "./shared/field/field.tokens.css";
// 컴포넌트 export
export { Box } from "./components/Box";
export { Flex } from "./components/Flex";
export { Input } from "./components/Input";
export type { InputProps } from "./components/Input";
