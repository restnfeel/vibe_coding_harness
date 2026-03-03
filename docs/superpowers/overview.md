---
sidebar_position: 1
title: Superpowers 스킬 개요
---

# Superpowers 스킬 개요

[Superpowers](https://github.com/obra/superpowers)는 AI 코딩 에이전트에게 **체계적인 소프트웨어 개발 워크플로우**를 부여하는 플러그인 시스템입니다. 조합 가능한 14개의 스킬로 구성되어 있으며, 상황에 맞는 스킬이 자동으로 활성화됩니다.

## Superpowers란?

AI 에이전트에게 코드를 요청하면 바로 구현에 착수하는 것이 일반적입니다. Superpowers는 이 과정에 **전문 개발자의 워크플로우**를 주입합니다:

- 구현 전에 **브레인스토밍**으로 설계를 확정
- **Git Worktree**로 격리된 작업 환경을 생성
- 작업을 **2~5분 단위 태스크**로 분해
- **TDD**(테스트 주도 개발)로 구현
- **코드 리뷰**로 품질 검증
- 완료 전 **검증 게이트**를 통과

### 핵심 철학

| 원칙 | 설명 |
|------|------|
| **Test-Driven** | 테스트를 먼저 작성하고 실패를 확인한 후 구현 |
| **Systematic > Ad-hoc** | 즉흥적 코딩 대신 체계적 프로세스 |
| **Simplicity First** | 복잡도를 줄이는 것이 최우선 목표 |
| **Evidence-Based** | 추측이 아닌 검증 결과로 판단 |

## 7단계 개발 워크플로우

Superpowers가 적용되면 AI 에이전트는 다음 7단계를 자동으로 따릅니다:

```
1. Brainstorming     → 요구사항 탐색, 설계 확정
2. Git Worktrees     → 격리된 브랜치 환경 생성
3. Writing Plans     → 2~5분 단위 태스크로 분해
4. Subagent Dev      → 서브에이전트로 태스크 실행 + 2단계 리뷰
5. TDD               → RED → GREEN → REFACTOR 사이클
6. Code Review       → 명세 준수 + 코드 품질 검증
7. Branch Completion → 테스트 확인 후 머지 결정
```

## 스킬 시스템의 구조

### 14개 스킬 카테고리

스킬은 역할에 따라 4가지 카테고리로 분류됩니다:

#### 🎯 계획 및 설계

| 스킬 | 역할 |
|------|------|
| `brainstorming` | 아이디어를 설계로 발전시키는 협업 대화 |
| `writing-plans` | 구현 계획을 2~5분 단위 태스크로 작성 |
| `executing-plans` | 별도 세션에서 계획 실행 및 리뷰 |

#### 🔨 구현 및 실행

| 스킬 | 역할 |
|------|------|
| `test-driven-development` | RED-GREEN-REFACTOR 사이클 강제 |
| `subagent-driven-development` | 서브에이전트로 태스크별 구현 + 2단계 리뷰 |
| `dispatching-parallel-agents` | 독립적 문제를 병렬 에이전트로 동시 처리 |
| `using-git-worktrees` | 격리된 Git 작업 환경 생성 및 관리 |

#### ✅ 검증 및 품질

| 스킬 | 역할 |
|------|------|
| `systematic-debugging` | 4단계 근본 원인 분석 디버깅 |
| `verification-before-completion` | 완료 선언 전 증거 기반 검증 게이트 |
| `requesting-code-review` | 코드 리뷰 요청 및 피드백 처리 |
| `receiving-code-review` | 코드 리뷰 피드백 수신 및 대응 |

#### 🔄 워크플로우 관리

| 스킬 | 역할 |
|------|------|
| `finishing-a-development-branch` | 브랜치 완료 (머지/PR/보존/삭제) |
| `using-superpowers` | 스킬 시스템 자체의 사용법 안내 |
| `writing-skills` | 새로운 커스텀 스킬 작성 가이드 |

## 기본 동작 원리

### 자동 활성화

스킬은 수동으로 호출할 필요 없이 **상황에 맞게 자동 활성화**됩니다:

- 새 기능 구현 요청 → `brainstorming` 스킬 활성화
- 코드 작성 시 → `test-driven-development` 스킬 활성화
- 버그 수정 요청 → `systematic-debugging` 스킬 활성화
- 작업 완료 시 → `verification-before-completion` 스킬 활성화

### 슬래시 커맨드

명시적으로 호출할 수 있는 커맨드도 제공됩니다:

| 커맨드 | 기능 |
|--------|------|
| `/brainstorm` | 브레인스토밍 세션 시작 |
| `/write-plan` | 구현 계획 작성 |
| `/execute-plan` | 계획 실행 |

### 스킬 간 연계

스킬들은 독립적이면서도 자연스럽게 연계됩니다:

```
brainstorming
  └→ using-git-worktrees (Phase 4에서 호출)
      └→ writing-plans
          └→ subagent-driven-development
              ├→ test-driven-development (각 태스크)
              ├→ requesting-code-review (각 태스크 후)
              └→ verification-before-completion (완료 전)
                  └→ finishing-a-development-branch
```

## 지원 플랫폼

| 플랫폼 | 설치 방식 |
|--------|-----------|
| **Claude Code** | 플러그인 마켓플레이스 |
| **Cursor** | 플러그인 마켓플레이스 |
| **Codex** | 수동 설정 |
| **OpenCode** | 수동 설정 |

:::tip
Superpowers는 MIT 라이선스로 공개되어 있으며, 커뮤니티에서 활발히 개발 중입니다 (GitHub Stars 68.7k+).
:::
