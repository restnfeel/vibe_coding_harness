---
sidebar_position: 3
title: 설치 및 커스터마이징
---

# Superpowers 설치 및 커스터마이징

Superpowers 스킬의 설치 방법, 프로젝트 구조, 커스텀 스킬 작성법을 다룹니다.

## 설치 방법

### Claude Code

```bash
# 플러그인 설치
/install-plugin https://github.com/obra/superpowers

# 업데이트
/plugin update superpowers
```

### Cursor

Cursor 플러그인 마켓플레이스에서 **superpowers**를 검색하여 설치합니다.

### Codex / OpenCode

수동으로 원격 설정 URL을 통해 설정합니다. 각 플랫폼별 안내는 레포지토리의 `docs/` 디렉토리에서 확인할 수 있습니다.

## 프로젝트 구조

설치 후 Superpowers의 전체 파일 구조는 다음과 같습니다:

```
superpowers/
├── skills/                    # 핵심 스킬 정의
│   ├── brainstorming/
│   │   └── SKILL.md
│   ├── test-driven-development/
│   │   └── SKILL.md
│   ├── writing-plans/
│   │   └── SKILL.md
│   ├── subagent-driven-development/
│   │   └── SKILL.md
│   ├── systematic-debugging/
│   │   └── SKILL.md
│   ├── verification-before-completion/
│   │   └── SKILL.md
│   ├── using-git-worktrees/
│   │   └── SKILL.md
│   ├── dispatching-parallel-agents/
│   │   └── SKILL.md
│   ├── requesting-code-review/
│   │   └── SKILL.md
│   ├── receiving-code-review/
│   │   └── SKILL.md
│   ├── finishing-a-development-branch/
│   │   └── SKILL.md
│   ├── executing-plans/
│   │   └── SKILL.md
│   ├── using-superpowers/
│   │   └── SKILL.md
│   └── writing-skills/
│       └── SKILL.md
├── commands/                  # 슬래시 커맨드
│   ├── brainstorm.md
│   ├── write-plan.md
│   └── execute-plan.md
├── agents/                    # 서브에이전트 정의
├── hooks/                     # Git 훅 및 자동화
├── lib/                       # 유틸리티 라이브러리
├── docs/                      # 플랫폼별 문서
└── tests/                     # 테스트 스위트
```

### SKILL.md 파일 구조

각 스킬은 하나의 `SKILL.md` 파일로 정의됩니다:

```markdown
---
name: my-skill-name
description: "Use when [트리거 조건]. [1024자 이내]"
---

## Overview
스킬의 목적과 핵심 원리

## When to Use
활성화 조건과 트리거

## Core Pattern
핵심 워크플로우 단계

## Quick Reference
빠른 참조용 요약표

## Implementation
상세 구현 가이드

## Common Mistakes
자주 하는 실수와 안티패턴

## Real-World Impact (선택)
실제 적용 사례
```

### Description 작성 규칙

Description은 스킬 자동 활성화의 핵심입니다:

```markdown
# ✅ Good — "언제" 사용하는지 기술
description: "Use when encountering any bug, test failure, or
unexpected behavior, before proposing fixes"

# ❌ Bad — "무엇을" 하는지 기술
description: "A systematic 4-phase debugging framework that
analyzes root causes and validates fixes"
```

- `"Use when..."`으로 시작
- **트리거 조건**에 집중 (워크플로우 요약 아님)
- 에러 메시지, 증상, 동의어 등 구체적 키워드 포함
- 1024자 이내

:::tip
Description에 워크플로우를 요약하면, AI가 전체 SKILL.md를 읽지 않고 요약만 따르는 문제가 발생합니다. 반드시 "언제" 사용하는지만 기술하세요.
:::

## 나만의 스킬 만들기

Superpowers의 `writing-skills` 스킬은 **TDD 방식으로 커스텀 스킬을 작성**하는 체계적 가이드를 제공합니다.

### TDD 기반 스킬 작성 프로세스

스킬 작성도 코드와 마찬가지로 RED-GREEN-REFACTOR를 따릅니다:

#### 1단계: RED — 실패하는 테스트 시나리오 작성

스킬 없이 에이전트가 어떻게 동작하는지 관찰합니다.

```markdown
## 테스트 시나리오: 복잡한 기능 요청
- Input: "사용자 인증 시스템 구현해줘"
- 스킬 없이 에이전트 동작: 바로 코드 작성 시작
- 기대 동작: 요구사항 질문 → 설계 → 승인 → 구현
- 결과: FAIL (바로 코드 작성)
```

#### 2단계: GREEN — 최소한의 스킬 작성

실패 시나리오를 해결하는 최소한의 SKILL.md를 작성합니다.

#### 3단계: REFACTOR — 허점 보완

에이전트가 스킬을 우회할 수 있는 합리화 패턴을 차단합니다:

```markdown
## Common Mistakes

### ❌ "이건 간단하니까 바로 구현해도 돼"
→ 간단해 보이는 프로젝트도 검증되지 않은 가정이 있음

### ❌ "이미 머릿속으로 설계했어"
→ 문서화된 설계와 승인 없이는 진행하지 않음
```

### 스킬 유형별 테스트 전략

| 스킬 유형 | 테스트 초점 |
|-----------|------------|
| **Discipline** (규율) | 시간 압박, 매몰 비용, 피로 상황에서의 준수 |
| **Technique** (기법) | 다양한 상황에서의 적용과 변형 |
| **Pattern** (패턴) | 올바른 인식과 반례 구분 |
| **Reference** (참조) | 정보 검색과 적용 정확도 |

### 배포 체크리스트

- [ ] RED: 실패 테스트 시나리오 문서화
- [ ] GREEN: 최소 SKILL.md 작성
- [ ] REFACTOR: 우회 패턴 차단 추가
- [ ] YAML frontmatter 검증 (`name`, `description`)
- [ ] Description이 "Use when..."으로 시작하는지 확인
- [ ] 개별 스킬 테스트 완료 (배치 생성 금지)
- [ ] Quick Reference 테이블 포함
- [ ] 하나 이상의 실제 사례 포함

### 기여하기

커스텀 스킬을 커뮤니티에 기여하려면:

1. Superpowers 레포지토리를 Fork
2. 스킬 브랜치 생성
3. `writing-skills/SKILL.md` 가이드를 따라 작성
4. Pull Request 제출

## 스킬 관리 커맨드

| 커맨드 | 기능 |
|--------|------|
| `/plugin update superpowers` | 최신 버전으로 업데이트 |
| `/brainstorm` | 브레인스토밍 세션 시작 |
| `/write-plan` | 구현 계획 작성 시작 |
| `/execute-plan` | 계획 실행 시작 |
