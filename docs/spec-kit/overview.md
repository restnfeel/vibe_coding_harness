---
sidebar_position: 1
title: Spec Kit 개요
---

# Spec Kit 개요

[Spec Kit](https://github.com/github/spec-kit)은 GitHub에서 공개한 오픈소스 툴킷으로, **Spec-Driven Development**(명세 주도 개발)를 실현하기 위한 도구입니다. 명세(Specification)를 단순한 문서가 아닌 **실행 가능한 아티팩트**로 만들어, AI 에이전트가 직접 구현물을 생성하도록 합니다.

## Spec Kit이란?

기존 개발 방식에서 기획서나 설계 문서는 개발자가 참고하는 보조 자료에 불과했습니다. Spec Kit은 이 패러다임을 뒤집어, **"무엇을 만들 것인가"를 먼저 체계적으로 정의하면, AI가 "어떻게 만들 것인가"를 실행**하는 워크플로우를 제공합니다.

핵심 철학은 다음과 같습니다:

- **Intent-Driven Development** — 구현 방법보다 의도와 목적을 먼저 정의
- **Specification as Executable** — 명세가 곧 실행 가능한 산출물
- **What before How** — 기술 선택 전에 요구사항을 완벽히 정의

## 왜 Spec Kit이 필요한가?

### 바이브 코딩의 한계

AI에게 "채팅 앱 만들어줘"라고 바로 요청하면, AI는 임의의 기술 스택과 구조로 결과물을 만들어냅니다. 요구사항이 모호하면 결과물도 모호해집니다.

### Spec Kit이 해결하는 문제

| 문제 | Spec Kit의 해결 방식 |
|------|----------------------|
| 요구사항 모호성 | 구조화된 명세 템플릿으로 명확한 정의 |
| AI의 맥락 부족 | Constitution으로 프로젝트 원칙 전달 |
| 구현 방향 불일치 | Plan으로 기술적 결정사항 사전 확정 |
| 작업 범위 불명확 | Tasks로 실행 가능한 단위로 분해 |
| 품질 검증 부재 | Checklist로 검증 기준 자동 생성 |

## Spec Kit의 구성 요소

Spec Kit은 슬래시 커맨드 기반으로 동작하며, 각 커맨드가 하나의 아티팩트를 생성합니다.

### 핵심 커맨드 (Core Commands)

| 커맨드 | 생성 아티팩트 | 역할 |
|--------|-------------|------|
| `/speckit.constitution` | `constitution.md` | 프로젝트 원칙과 개발 가이드라인 수립 |
| `/speckit.specify` | `spec.md` | 요구사항 및 사용자 스토리 정의 |
| `/speckit.plan` | `plan.md` | 기술 스택 및 아키텍처 설계 |
| `/speckit.tasks` | `tasks.md` | 실행 가능한 태스크 목록 생성 |
| `/speckit.implement` | 소스 코드 | 계획에 따른 구현 실행 |

### 보조 커맨드 (Enhancement Commands)

| 커맨드 | 역할 |
|--------|------|
| `/speckit.clarify` | 명세의 미비한 부분을 질의·보완 |
| `/speckit.analyze` | 아티팩트 간 일관성 검증 |
| `/speckit.checklist` | 품질 검증 체크리스트 생성 |

### 실행 흐름

```
Constitution → Specify → (Clarify) → Plan → Tasks → (Analyze) → Implement
    원칙         명세        보완       설계    작업       검증        구현
```

## 지원하는 AI 에이전트

Spec Kit은 15개 이상의 AI 코딩 에이전트를 지원합니다:

- **Claude Code** (Anthropic)
- **GitHub Copilot**
- **Cursor**
- **Windsurf**
- **Google Gemini CLI**
- **Amazon Q**
- **Qoder CLI**
- 기타 Generic 옵션으로 미지원 에이전트도 사용 가능

## 설치 방법

```bash
uv tool install specify-cli --from git+https://github.com/github/spec-kit.git
```

프로젝트 초기화:

```bash
# 새 프로젝트 디렉토리 생성
specify init my-project

# 현재 디렉토리에서 초기화
specify init --here
```

:::tip
`uv`가 설치되어 있지 않다면, `uvx`를 통해 직접 실행할 수도 있습니다.
Python 3.11 이상과 Git이 필요합니다.
:::
