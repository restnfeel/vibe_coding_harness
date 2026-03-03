---
sidebar_position: 2
title: 단계별 워크플로우
---

# Spec Kit 단계별 워크플로우

Spec Kit의 6단계 워크플로우를 순서대로 안내합니다. 각 단계에서 생성되는 아티팩트가 다음 단계의 입력이 됩니다.

## 작성 원칙

Spec Kit을 효과적으로 사용하기 위한 핵심 원칙입니다:

1. **What before How** — 기술 구현 방법보다 "무엇을, 왜" 만드는지를 먼저 정의합니다
2. **명시적 > 암묵적** — 모호한 부분은 `[NEEDS CLARIFICATION]`으로 표시하고 반드시 해소합니다
3. **독립적 테스트 가능** — 각 사용자 스토리는 독립적으로 개발, 테스트, 배포할 수 있어야 합니다
4. **단계적 정제** — 코딩 전에 명세를 충분히 반복 검토합니다

## Step 1: 프로젝트 초기화

먼저 Spec Kit CLI로 프로젝트를 초기화합니다.

```bash
# 새 프로젝트 생성
specify init my-project

# 기존 디렉토리에서 초기화
specify init --here

# AI 에이전트 지정
specify init my-project --agent claude
```

초기화 후 프로젝트에 슬래시 커맨드 파일들이 생성됩니다.

## Step 2: Constitution 정의

```
/speckit.constitution
```

프로젝트의 **핵심 원칙과 개발 가이드라인**을 수립합니다. Constitution은 이후 모든 단계에서 AI가 참고하는 "프로젝트 헌법" 역할을 합니다.

### Constitution에 포함할 내용

| 항목 | 설명 | 예시 |
|------|------|------|
| 아키텍처 원칙 | 프로젝트의 구조적 접근 방식 | "Library-First 방식으로 모든 기능을 구현" |
| 인터페이스 원칙 | 외부 노출 방식 | "모든 기능은 CLI로 먼저 노출" |
| 개발 원칙 | 개발 방법론 | "TDD를 따르며, 테스트를 먼저 작성" |
| 품질 원칙 | 테스트·품질 기준 | "통합 테스트 중심의 검증" |
| 운영 원칙 | 버전·배포 정책 | "Semantic Versioning 준수" |

### 생성되는 아티팩트

```
📄 constitution.md
├── Core Principles (5개 원칙)
├── Additional Sections (프로젝트별 제약사항)
├── Governance (변경 절차)
└── Metadata (버전, 날짜)
```

:::info
Constitution은 한번 정의하면 프로젝트 전체에 걸쳐 적용됩니다. 변경이 필요하면 명시적인 수정 절차(Amendment)를 거칩니다.
:::

## Step 3: Specification 작성

```
/speckit.specify
```

프로젝트의 **비전과 요구사항**을 정의합니다. 여기서 핵심은 **기술적 구현이 아닌 사용자 관점**에서 작성하는 것입니다.

### Specification 구성 요소

- **사용자 스토리** — 우선순위별(P1, P2, P3) 사용자 시나리오
- **기능 요구사항** — FR-001, FR-002 형태의 필수 기능 목록
- **인수 조건** — Given-When-Then 형식의 테스트 시나리오
- **엣지 케이스** — 경계 조건과 에러 상황 정의
- **성공 기준** — 기술 무관한 측정 가능한 지표
- **핵심 엔티티** — 데이터 모델과 관계 정의

### 좋은 Specification 작성법

```markdown
# ❌ Bad - 기술 구현에 집중
"React와 Redux를 사용해서 상태를 관리하고
REST API로 백엔드와 통신하는 칸반 보드"

# ✅ Good - 의도와 결과에 집중
"팀원들이 태스크를 시각적으로 관리하고
드래그&드롭으로 상태를 변경할 수 있는 칸반 보드.
실시간으로 팀원 간 변경사항이 동기화되어야 한다."
```

## Step 4: Specification 보완 (선택)

```
/speckit.clarify
```

Specification에서 **모호하거나 미비한 부분을 질의하고 보완**합니다.

활용 시나리오:
- 보안 요구사항이 불명확할 때
- 성능 기준이 정의되지 않았을 때
- 엣지 케이스 처리 방법이 모호할 때
- 외부 시스템 연동 스펙이 누락되었을 때

## Step 5: Plan 수립

```
/speckit.plan
```

Specification을 기반으로 **기술적 구현 전략**을 수립합니다.

### Plan에 포함되는 내용

| 섹션 | 내용 |
|------|------|
| Technical Context | 언어, 프레임워크, 의존성, 테스트 도구 |
| Constitution Check | 원칙 준수 여부 검증 게이트 |
| Project Structure | 소스 코드 디렉토리 구조 설계 |
| Complexity Tracking | 아키텍처 위반 사항과 근거 기록 |

### 구현 단계 (Phases)

Plan은 3단계로 나뉩니다:

```
Phase 0: Research    → 기술 조사, PoC
Phase 1: Design      → 데이터 모델, API 계약, 구조 설계
Phase 2: Implement   → 실제 구현
```

:::caution
Phase 0 시작 전에 Constitution Check을 수행하고, Phase 1 완료 후 다시 검증합니다.
:::

## Step 6: Tasks 생성 및 구현

### 태스크 생성

```
/speckit.tasks
```

Plan을 **실행 가능한 작업 단위**로 분해합니다.

### 태스크 구조

태스크는 5개 Phase로 구성됩니다:

| Phase | 이름 | 설명 |
|-------|------|------|
| 1 | Setup | 프로젝트 초기화, 기본 구조 생성 |
| 2 | Foundation | 모든 스토리에 필요한 기반 인프라 |
| 3 | User Stories | 우선순위별 기능 구현 (P1 → P2 → P3) |
| 4 | Polish | 크로스커팅 개선, 최적화 |
| 5 | Dependencies | 병렬화 전략, 실행 순서 |

### 태스크 네이밍 규칙

```
[ID] [P?] [Story] Description
```

- `[P]` — 병렬 실행 가능 표시 (파일 충돌·의존성 없음)
- `[Story]` — 연결된 사용자 스토리 태그

### 검증 및 구현

```bash
# 아티팩트 간 일관성 검증 (선택)
/speckit.analyze

# 구현 실행
/speckit.implement
```

`/speckit.implement`는 tasks.md의 태스크를 순서대로 실행하며, Foundation Phase가 완료되기 전에는 User Story 작업이 시작되지 않습니다.

## 전체 워크플로우 요약

```
1. specify init          → 프로젝트 초기화
2. /speckit.constitution → 원칙 수립
3. /speckit.specify      → 요구사항 정의
4. /speckit.clarify      → 명세 보완 (선택)
5. /speckit.plan         → 기술 설계
6. /speckit.tasks        → 태스크 분해
7. /speckit.analyze      → 일관성 검증 (선택)
8. /speckit.implement    → 구현 실행
```
