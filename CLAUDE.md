# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

# 링크나무 (Link in Bio 서비스)

Linktree처럼 여러 링크를 한 페이지에 모아 하나의 URL로 공유하는 서비스.

@AGENTS.md

## 기술 스택

- Next.js 16.3 (App Router), React 19, TypeScript
- Tailwind CSS v4
- MongoDB Atlas — 링크 클릭 수 저장
- Vercel 배포

## 주요 기능

- 프로필 표시 (이름, 소개, 사진)
- 링크 카드 목록
- 링크 클릭 수 집계 (MongoDB에 저장)

## 명령어

- `npm run dev` — 개발 서버
- `npm run build` — 프로덕션 빌드
- `npm run start` — 빌드 결과 실행
- `npm run lint` — 린트

## 구조

- `src/data/profile.ts` — 프로필·링크 목록 (현재 더미 값, 콘텐츠는 여기서 수정)
- `src/lib/mongodb.ts` — MongoDB 연결, 클릭 수 조회/증가. `MONGODB_URI`가 없으면 DB 없이 동작 (클릭 수 0)
- `src/app/api/clicks/route.ts` — `GET` 전체 클릭 수, `POST {id}` 클릭 1 증가 (등록된 링크 id만 허용)
- `src/app/page.tsx` — 메인 페이지 (정적 렌더링)
- `src/components/` — `ProfileHeader`, `LinkCard` (클릭 시 `sendBeacon`으로 집계, 클릭 수는 화면에 표시하지 않음 — `GET /api/clicks`로 조회)
- 환경 변수 예시는 `.env.example` 참고

## 코드 규칙

- TypeScript 사용
- 컴포넌트는 `src/components/` 아래에 작성
- 환경 변수(예: MongoDB 연결 문자열)는 `.env.local`에 저장하며 절대 커밋하지 않음 — `.gitignore`에 포함되어 있는지 확인
- 모바일 우선 반응형 디자인 (Tailwind 기본 클래스는 모바일 기준, `sm:`/`md:` 등으로 확장)
