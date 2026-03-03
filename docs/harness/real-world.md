---
sidebar_position: 3
title: 하이브리드 Harness
---

# 하이브리드 Harness — Spec Kit × Superpowers 통합

Spec Kit의 **명세 생성력**과 Superpowers의 **구현 실행력**을 하나로 결합한 하이브리드 Harness 기법입니다. 각각의 강점을 활용하여 **설계부터 구현·검증·배포까지 끊김 없는 자동화 파이프라인**을 구성합니다.

## 왜 하이브리드인가?

### 각 도구의 강점과 한계

| | Spec Kit | Superpowers |
|---|----------|-------------|
| **강점** | 체계적인 명세 생성, 아티팩트 간 일관성 검증, 구조화된 템플릿 | TDD 강제, 서브에이전트 병렬 구현, 코드 리뷰, Git 격리 |
| **한계** | 구현 단계의 품질 관리 도구가 약함 | 명세 작성 도구가 없음 (brainstorming이 대체하지만 구조화 수준이 다름) |

### 하이브리드의 핵심 아이디어

```
Spec Kit이 "무엇을 만들 것인가"를 정의하고
Superpowers가 "어떻게 만들 것인가"를 실행한다
```

- **전반부 (설계)**: Spec Kit의 구조화된 커맨드로 constitution → spec → plan → tasks 생성
- **후반부 (구현)**: Superpowers의 스킬 체인으로 TDD → 리뷰 → 검증 → 완료 실행

각 도구가 **가장 잘하는 영역**만 담당하므로, 개별 사용보다 품질이 높아집니다.

## 하이브리드 Harness 전체 흐름

```
┌──────────────────────────────────────────────────────────────┐
│                    하이브리드 Harness                           │
│                                                              │
│  ┌─────────────────────────────────────────────────────┐     │
│  │           Phase A: Spec Kit 영역 (명세)               │     │
│  │                                                     │     │
│  │  /speckit.constitution                              │     │
│  │       ▼                                             │     │
│  │  /speckit.specify                                   │     │
│  │       ▼                                             │     │
│  │  /speckit.clarify                                   │     │
│  │       ▼                                             │     │
│  │  /speckit.plan                                      │     │
│  │       ▼                                             │     │
│  │  /speckit.tasks ──→ tasks.md 생성                    │     │
│  │       ▼                                             │     │
│  │  /speckit.analyze ──→ 아티팩트 일관성 검증             │     │
│  │                                                     │     │
│  │  산출물: constitution.md, spec.md, plan.md, tasks.md │     │
│  └───────────────────────┬─────────────────────────────┘     │
│                          ▼                                   │
│                   🔄 핸드오프 지점                              │
│            (Spec Kit 산출물 → Superpowers 입력)                │
│                          ▼                                   │
│  ┌─────────────────────────────────────────────────────┐     │
│  │        Phase B: Superpowers 영역 (구현)               │     │
│  │                                                     │     │
│  │  using-git-worktrees ──→ 격리 환경 생성               │     │
│  │       ▼                                             │     │
│  │  subagent-driven-development                        │     │
│  │  ┌──────────────────────────────────┐              │     │
│  │  │ tasks.md의 각 태스크에 대해:        │              │     │
│  │  │                                  │              │     │
│  │  │  test-driven-development         │              │     │
│  │  │  (RED → GREEN → REFACTOR)        │              │     │
│  │  │       ▼                          │              │     │
│  │  │  Spec 리뷰 (spec.md 대비 검증)     │              │     │
│  │  │       ▼                          │              │     │
│  │  │  Code 리뷰 (품질 검증)             │              │     │
│  │  │       ▼                          │              │     │
│  │  │  다음 태스크                       │              │     │
│  │  └──────────────────────────────────┘              │     │
│  │       ▼                                             │     │
│  │  verification-before-completion                     │     │
│  │  (전체 테스트 + constitution 원칙 재검증)              │     │
│  │       ▼                                             │     │
│  │  finishing-a-development-branch                     │     │
│  │  (머지 / PR / 보존 / 폐기)                           │     │
│  └─────────────────────────────────────────────────────┘     │
│                                                              │
└──────────────────────────────────────────────────────────────┘
```

## 핸드오프: Spec Kit → Superpowers 연결

하이브리드의 핵심은 **Phase A의 산출물이 Phase B의 입력**이 되는 핸드오프 지점입니다.

### 아티팩트 매핑

| Spec Kit 산출물 | Superpowers에서의 역할 |
|----------------|----------------------|
| `constitution.md` | verification 단계에서 원칙 준수 최종 검증 기준 |
| `spec.md` | Spec 리뷰어가 구현 결과를 검증하는 기준 문서 |
| `plan.md` | git worktree 생성 시 기술 스택·구조 참조 |
| `tasks.md` | subagent-driven-development의 태스크 큐로 직접 사용 |

### 핸드오프 규칙

```markdown
## 핸드오프 조건
- /speckit.analyze 가 "일관성 통과"를 반환해야 함
- tasks.md의 모든 태스크에 [Story] 태그가 있어야 함
- plan.md에 Constitution Check이 완료되어 있어야 함

## 핸드오프 후 Superpowers가 참조하는 파일
- spec.md  → Spec 리뷰의 기준 문서
- tasks.md → 서브에이전트 디스패치의 태스크 소스
- constitution.md → 최종 검증의 원칙 기준
```

## 하이브리드 Harness 적용 방법

### CLAUDE.md 통합 규칙

```markdown
# Hybrid Harness Rules

## 전체 프로젝트 개발 요청 시
"프로젝트 개발해", "처음부터 만들어줘" 키워드가 포함되면:

### Phase A: 명세 (Spec Kit)
1. /speckit.constitution → 프로젝트 원칙 수립
2. /speckit.specify → 사용자 스토리 중심 요구사항 정의
3. /speckit.clarify → [NEEDS CLARIFICATION] 항목 전부 해소
4. /speckit.plan → 기술 스택·아키텍처 설계
5. /speckit.tasks → 태스크 분해 (Foundation → Stories → Polish)
6. /speckit.analyze → 아티팩트 일관성 검증
   → 통과 시 Phase B로 진행, 실패 시 해당 아티팩트 수정 후 재검증

### Phase B: 구현 (Superpowers)
7. using-git-worktrees → 격리 환경 + 의존성 설치 + 테스트 베이스라인
8. subagent-driven-development → tasks.md 기반 TDD 구현
   - 각 태스크: TDD(RED→GREEN→REFACTOR) → Spec 리뷰(spec.md 기준) → Code 리뷰
9. verification-before-completion → 전체 테스트 + constitution 원칙 재검증
10. finishing-a-development-branch → 완료 처리

### 공통 규칙
- Phase A 완료 전에 Phase B를 시작하지 않는다
- /speckit.analyze 가 통과해야 핸드오프한다
- Spec 리뷰는 반드시 spec.md를 기준으로 수행한다
- 최종 검증은 constitution.md의 원칙도 재확인한다
```

### 승인 게이트 (전체)

| 게이트 | 위치 | Phase | 대기 내용 |
|--------|------|-------|----------|
| **원칙 승인** | constitution 완료 | A | 핵심 원칙 확인 |
| **설계 승인** | plan 완료 | A | 기술 스택·구조 확인 |
| **핸드오프 승인** | analyze 통과 후 | A→B | 구현 착수 최종 확인 |
| **완료 방식** | finishing 단계 | B | 머지/PR/보존/폐기 선택 |

## 세 가지 Harness 비교

| | Superpowers Harness | Spec Kit Harness | 하이브리드 Harness |
|---|---|---|---|
| **설계 도구** | brainstorming (대화형) | Spec Kit 커맨드 (구조화) | Spec Kit 커맨드 |
| **명세 품질** | 자유 형식 설계 문서 | 템플릿 기반 체계적 명세 | 템플릿 기반 체계적 명세 |
| **구현 도구** | Superpowers 스킬 체인 | /speckit.implement | Superpowers 스킬 체인 |
| **구현 품질** | TDD + 2단계 리뷰 + 검증 | Spec Kit 자체 구현 | TDD + 2단계 리뷰 + 검증 |
| **일관성 검증** | 없음 | /speckit.analyze | /speckit.analyze |
| **코드 리뷰** | 자동 (Spec + Code) | 없음 | 자동 (spec.md 기준) |
| **Git 격리** | worktree 자동 생성 | 없음 | worktree 자동 생성 |
| **최적 상황** | 빠른 기능 개발 | 대규모 기획·명세 | 체계적 전체 프로젝트 |

## 상황별 Harness 선택 가이드

### Superpowers Harness를 선택할 때

- 요구사항이 비교적 명확하고 대화로 확인 가능
- 빠른 구현이 목표
- 소규모 기능 추가나 개선 작업
- Spec Kit 설치 없이 바로 사용하고 싶을 때

### Spec Kit Harness를 선택할 때

- 대규모 기획이 필요한 프로젝트
- 여러 이해관계자와 명세를 공유해야 할 때
- 명세 문서 자체가 중요한 산출물일 때
- 구현은 다른 팀이나 방법으로 할 때

### 하이브리드 Harness를 선택할 때

- 처음부터 끝까지 체계적으로 진행하려는 프로젝트
- 명세 품질과 구현 품질 모두 높아야 할 때
- 프로젝트 규모가 크고 실패 비용이 높을 때
- 장기적으로 유지보수할 프로덕션 코드를 만들 때

:::tip 실용적 조언
처음부터 하이브리드를 쓸 필요는 없습니다. **Superpowers Harness로 시작**하여 워크플로우에 익숙해진 후, 프로젝트가 커지면 **Spec Kit을 전반부에 추가**하는 점진적 전환이 효과적입니다.
:::
