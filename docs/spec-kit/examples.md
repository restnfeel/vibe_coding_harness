---
sidebar_position: 3
title: 템플릿과 활용 팁
---

# Spec Kit 템플릿과 활용 팁

Spec Kit이 제공하는 각 아티팩트 템플릿의 구조와 실전 활용 팁을 소개합니다.

## Constitution 템플릿

Constitution은 프로젝트의 불변 원칙을 정의하는 문서입니다.

### 템플릿 구조

```markdown
# [PROJECT_NAME] Constitution

## Core Principles

### Principle 1: [아키텍처 접근]
Library-First 방식으로 모든 기능을 구현합니다.

### Principle 2: [인터페이스 설계]
모든 기능은 CLI를 통해 먼저 노출합니다.

### Principle 3: [개발 방법론]
TDD를 따르며, 테스트를 먼저 작성합니다.

### Principle 4: [품질 기준]
통합 테스트 중심으로 검증합니다.

### Principle 5: [운영 정책]
Semantic Versioning을 준수합니다.

## Governance
이 Constitution은 모든 개발 결정의 바인딩 가이드입니다.
수정 시 명시적 Amendment 절차를 따릅니다.
```

### 작성 팁

- 원칙은 **5개 이내**로 유지합니다 — 많을수록 AI가 우선순위를 판단하기 어렵습니다
- 각 원칙은 **검증 가능**해야 합니다 — "좋은 코드를 작성한다"보다 "함수는 20줄을 넘지 않는다"가 낫습니다
- 프로젝트 유형에 따라 **제약사항 섹션을 추가**합니다 (보안, 성능, 규정 준수 등)

## Specification 템플릿

Specification은 사용자 관점의 요구사항 문서입니다.

### 템플릿 구조

```markdown
# Feature: [기능명]

## User Stories

### P1: [최우선 스토리]
사용자가 [행동]을 하면 [결과]를 얻는다.

**Acceptance Criteria:**
- Given [전제조건]
- When [행동]
- Then [기대결과]

### P2: [차순위 스토리]
...

## Functional Requirements
- FR-001: 시스템은 [기능]을 제공해야 한다 (MUST)
- FR-002: 시스템은 [기능]을 지원해야 한다 (MUST)

## Edge Cases
- 네트워크 연결 끊김 시 로컬 캐시에서 데이터를 표시한다
- 동시 편집 충돌 시 최신 변경을 우선한다

## Success Criteria
- SC-001: 사용자 태스크 완료율 90% 이상
- SC-002: 페이지 로드 시간 2초 이내
```

### 작성 팁

- 스토리는 **P1(핵심) → P2(중요) → P3(부가)** 순으로 우선순위를 매깁니다
- 각 스토리는 **독립적으로 MVP가 될 수 있어야** 합니다
- 불확실한 부분은 `[NEEDS CLARIFICATION]` 마커를 남겨 `/speckit.clarify`로 해소합니다
- 기술 용어 대신 **사용자 행동과 결과**로 기술합니다

## Plan 템플릿

Plan은 Specification을 기반으로 한 기술적 구현 전략입니다.

### 템플릿 구조

```markdown
# Implementation Plan: [기능명]

## Summary
[Spec에서 추출한 핵심 요구사항과 기술 접근 방법]

## Technical Context
- Language: TypeScript 5.x
- Framework: Next.js 14
- Database: PostgreSQL 16
- Testing: Vitest + Playwright
- Platform: Linux containers

## Constitution Check ✅
- [x] Principle 1 준수 확인
- [x] Principle 2 준수 확인
- [ ] Phase 1 완료 후 재검증 필요

## Project Structure
src/
├── lib/          # 핵심 비즈니스 로직
├── api/          # API 라우트
├── components/   # UI 컴포넌트
└── tests/        # 테스트

## Phases
### Phase 0: Research
### Phase 1: Design
### Phase 2: Implement
```

### 작성 팁

- Constitution Check은 **Phase 0 전**과 **Phase 1 후** 두 번 수행합니다
- 아키텍처 위반이 필요하면 **Complexity Tracking 섹션에 근거**를 남깁니다
- 프로젝트 유형(단일 앱, 웹앱, 모바일+API)에 따라 구조 템플릿을 선택합니다

## Tasks 템플릿

Tasks는 Plan을 실행 가능한 작업 단위로 분해한 문서입니다.

### 태스크 Phase 구조

```markdown
## Phase 1: Setup
- [ ] [T001] 프로젝트 초기화 및 의존성 설치
- [ ] [T002] CI/CD 파이프라인 설정

## Phase 2: Foundation
- [ ] [T003] 데이터베이스 스키마 생성
- [ ] [T004] 인증 미들웨어 구현
⚠️ Foundation이 완료되기 전에 User Story 작업을 시작하지 않습니다.

## Phase 3: User Stories
### P1: 핵심 기능
- [ ] [T005] [P] [Story-1] 사용자 등록 API 구현
- [ ] [T006] [P] [Story-1] 사용자 등록 UI 구현
- [ ] [T007] [Story-1] Independent Test ✅

### P2: 중요 기능
- [ ] [T008] [P] [Story-2] 대시보드 API 구현
...

## Phase 4: Polish
- [ ] [T012] 성능 최적화
- [ ] [T013] 접근성 개선
```

### 작성 팁

- `[P]` 표시된 태스크는 **병렬 실행 가능** — 파일 충돌이 없고 의존성이 없음
- 각 스토리 끝에 **Independent Test**를 포함하여 단독 검증 가능성을 확보합니다
- 테스트를 **먼저 작성**하고, 실패하는 것을 확인한 후 구현합니다 (TDD)

## 프로젝트 유형별 활용 전략

### Greenfield (0 → 1)

처음부터 새로 만드는 프로젝트에 최적화된 기본 워크플로우입니다.

```
Constitution → Specify → Plan → Tasks → Implement
```

### Creative Parallel (탐색형)

여러 접근 방식을 병렬로 탐색할 때 사용합니다.

```
Constitution → Specify → Plan A / Plan B → 비교 → Tasks → Implement
```

### Brownfield (기존 코드 현대화)

레거시 시스템을 점진적으로 개선할 때 사용합니다.

```
Constitution → (기존 코드 분석) → Specify (변경 범위) → Plan → Tasks → Implement
```

:::tip 복잡한 프로젝트 팁
대규모 프로젝트에서는 한 번에 모든 스토리를 구현하지 말고, **P1 스토리만 먼저 완성한 후 다음 우선순위**로 넘어가세요. 인지 과부하를 방지하고 AI의 맥락 윈도우를 효율적으로 사용할 수 있습니다.
:::

## 자주 하는 실수

| 실수 | 개선 방법 |
|------|-----------|
| Specification에 기술 구현을 포함 | "React로 구현"이 아닌 "사용자가 드래그로 이동 가능"으로 작성 |
| Constitution 원칙이 너무 많음 | 5개 이내로 유지, 핵심만 선별 |
| Clarify 단계를 건너뜀 | 모호한 부분은 반드시 해소 후 Plan 진행 |
| 한 번에 모든 스토리 구현 | P1부터 단계적으로 진행 |
| Foundation 없이 기능 구현 시작 | Phase 2(Foundation) 완료 후 Phase 3 진행 |
