# yeonji-workspace

개인 연습/포트폴리오용 pnpm 모노레포입니다. 직접 만든 UI 라이브러리(`@yeonji/ui`)를 실제 Next.js 앱들에 적용해보면서 컴포넌트와 구조를 계속 다듬어가는 중입니다. (WIP — 아직 완성된 상태가 아니며, 폴더 구조/문서가 자주 바뀔 수 있습니다)

## 폴더 구조

```
yeonji-workspace/
├── apps/
│   ├── booking/       # 예약 플로우 연습 프로젝트 (Next.js)
│   └── yeonji-site/   # 개인 사이트 + 컴포넌트 플레이그라운드 (Next.js)
└── packages/
    └── yeonji-ui/     # 공용 디자인 시스템/컴포넌트 라이브러리 (@yeonji/ui)
```

## 앱 & 패키지 소개

### apps/booking

오퍼(특가) 조회 → 예약 → 모의 결제 → 예약 완료로 이어지는 예약 서비스 흐름을 연습하는 프로젝트입니다.

- `/offers/[offerId]` - 오퍼 상세
- `/offers/[offerId]/reserve` - 예약 진행
- `/payments/mock/[paymentSessionId]` - 모의 결제 (실제 PG 연동 없이 흐름만 재현)
- `/reservations/complete` - 예약 완료

### apps/yeonji-site

개인 사이트 겸 `@yeonji/ui` 컴포넌트를 눈으로 확인해보는 플레이그라운드입니다. `/playground` 하위에 `Box`, `Input`, `Typography` 등 컴포넌트별 데모 페이지가 있습니다.

### packages/yeonji-ui

`@yeonji/ui`라는 이름으로 배포(워크스페이스 내부 전용)되는 디자인 시스템입니다.

- 현재 공개 export: `Box`, `Flex`, `Input`, `Layout`, `Typography`(`Heading`, `Text`) + 테마 토큰(`vars`, `primitive`, `lightTheme`)
- 작업 중(아직 루트에서 export 안 됨): `InputNumber`, `Label`, `Select`
- 스타일링은 [vanilla-extract](https://vanilla-extract.style/)로 작성하며, `theme/` → `shared/field/` → `components/` 순서로 토큰을 참조하는 계층 구조를 따릅니다.

## 기술 스택

| 영역                 | 사용 기술                                                            |
| -------------------- | -------------------------------------------------------------------- |
| 모노레포 관리        | pnpm workspace                                                       |
| 프레임워크           | Next.js 16, React 19                                                 |
| 언어                 | TypeScript                                                           |
| 스타일링 (yeonji-ui) | vanilla-extract (`@vanilla-extract/css`, `@vanilla-extract/recipes`) |
| 번들링 (yeonji-ui)   | tsup                                                                 |

## 시작하기

### 요구사항

- Node.js 20 이상
- pnpm 9 이상

### 설치

```bash
pnpm install
```

### 개발 서버 실행

```bash
pnpm dev:booking   # apps/booking 실행 (기본 http://localhost:3000)
pnpm dev:site      # apps/yeonji-site 실행 (기본 http://localhost:3000)
pnpm dev:ui        # yeonji-ui를 watch 모드로 빌드 (다른 앱에서 변경사항을 바로 확인하려면 함께 실행)
```

> `booking`과 `yeonji-site`는 둘 다 기본 포트가 3000번이라, 동시에 켜면 하나는 자동으로 다른 포트(3001 등)로 뜹니다.

### 전체 빌드

```bash
pnpm build   # pnpm -r build, 모든 패키지를 순서대로 빌드
```

## 모노레포 팁

- 앱/패키지에서 `@yeonji/ui`를 쓸 때는 `package.json`에 `"@yeonji/ui": "workspace:*"`(또는 `workspace:^`)로 의존성을 추가하면 pnpm이 로컬 `packages/yeonji-ui`를 심볼릭 링크로 연결해줍니다. npm 레지스트리에 배포된 버전이 아니라 항상 로컬 소스를 바라봅니다.
- `yeonji-ui`를 수정했는데 앱에 반영이 안 되면, `pnpm dev:ui`(watch 빌드)가 켜져 있는지 먼저 확인하세요.
- 새 앱/패키지를 추가할 때는 `apps/` 또는 `packages/` 아래에 폴더를 만들면 `pnpm-workspace.yaml`의 `apps/*`, `packages/*` 패턴에 자동으로 포함됩니다.
