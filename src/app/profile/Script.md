# ppt 흐름 및 구조 ( script )

## 1. 프로젝트 이름 : 방방콕콕

- 여행 기록과 소통을 위한 SNS
- 기존 SNS의 과도한 정보 속에서, 사진 중심의 여행 기록 서비스 필요성
- 사진 업로드, 좋아요/북마크, 팔로우, 프로필 페이지, 무한스크롤, 모달 뷰
- Next.js + Firebase + Tailwind 사용, React Query로 캐싱 최적화
- 모바일, 테블릿, 데스크탑에 따른 반응형 디자인

> coment

저희 팀이 개발한 “방방콕콕”은 여행 사진을 중심으로 기록하고 소통할 수 있는 SNS 플랫폼입니다.

기존 SNS는 정보가 너무 많거나, 상업적 콘텐츠가 많아 피로감을 느끼는 경우가 많은데요, 저희는 여행에 집중된 기록과 사진 기반 소통에 집중해서 기획하게 되었습니다.

여행을 좋아하는 사람들이 자신의 추억을 간단하게 공유하고, 서로 교류할 수 있는 공간을 목표로 개발했습니다.

### 팀원 소개

- name : 맡은 페이지
- name : 맡은 페이지
- name : 맡은 페이지
- name : 맡은 페이지

### 협업 도구

> coment

**github**
저희는 이번 프로젝트에서 GitHub와 Figma를 활용한 협업을 적극적으로 진행했습니다.
GitHub에서는 각자 기능별로 브랜치를 나누고, PR 리뷰와 이슈 트래킹을 통해 개발 흐름을 정리하며 체계적으로 협업했습니다.
Figma에서는 팀원들과 함께 UI/UX를 설계하고, 반응형 구조나 버튼 인터랙션 등 사용자 중심의 화면을 구체화하는 데 활용했습니다.
이렇게 기획–디자인–개발 간 연결 과정을 효율적으로 관리하면서, 실제 서비스 개발에 가까운 환경을 경험할 수 있었습니다.

**figma**
저희는 프로젝트 초기 단계부터 Figma를 활용해 UI/UX를 설계했습니다. 특히 모바일, 태블릿, 데스크탑 환경에 맞는 반응형 구조를 중심으로 레이아웃을 계획했고, 피그마 프로토타입을 바탕으로 팀원들과 실시간 피드백을 주고받으며 개선을 반복했습니다
Figma를 통해 디자이너와 개발자 간의 간극을 줄일 수 있었고, 기획 – 디자인 – 개발이 하나의 흐름으로 이어지면서 실제 서비스와 가까운 완성도를 구현할 수 있었습니다.
반응형 구조뿐만 아니라, 버튼 인터랙션, 폰트 크기, 여백 설정 등 세부 UI 요소까지 사전에 설계해두었기 때문에 개발 과정에서도 시간을 단축하고 유지보수를 쉽게 할 수 있었습니다

**next.js**
저희는 실제 서비스에 가까운 SNS를 만들기 위해 빠른 개발 속도와 유지보수, SEO 최적화까지 고려해서 Next.js 프레임워크를 선택했습니다.
특히 이번 프로젝트에는 Next.js의 App Router 구조를 적용했습니다.
App Router는 파일 기반의 라우팅과 서버 사이드 렌더링(SSR)을 지원해서 검색엔진(SEO)에 유리하고, 페이지 구성도 매우 직관적이라는 장점이 있습니다.
화면에 보이는 예시는 layout.tsx 파일로, 각 페이지를 감싸는 공통 레이아웃을 설정한 코드입니다.
이 안에 React Query Provider, Alert Modal Provider 등을 선언해 모든 페이지에서 전역 상태나 알림 처리를 한 번에 구성할 수 있도록 했습니다.
App Router의 구조를 통해 코드가 명확하게 분리되어 협업 시 유지보수나 기능 확장이 매우 편리했습니다.

**firebase**

저희 프로젝트에서는 Firebase Firestore를 사용하여 게시물, 유저, 장소 등 주요 데이터를 관리했습니다.

Firestore는 NoSQL 기반의 문서(Document) 중심 구조로, 정형화된 테이블 없이 유연하게 데이터를 저장하고 관리할 수 있어 SNS처럼 구조가 자주 바뀌는 서비스에 적합했습니다.

화면 왼쪽은 실제 코드에서 Firestore를 사용해 특정 유저의 게시물 또는 닉네임으로 데이터를 조회하는 함수입니다. Firebase SDK를 통해 매우 간단한 쿼리 방식으로 데이터를 가져올 수 있고, 비동기로 처리되어 실시간 반영도 가능합니다.
오른쪽은 Firestore 콘솔 화면으로, 데이터가 컬렉션 → 문서 → 필드 구조로 저장되어 있고 게시물마다 이미지 URL, 작성자 ID, 작성일, 위치, 좋아요 수 등 다양한 정보를 담고 있습니다.
특히 Firestore는 서버 없이도 실시간 동기화가 가능하고, 인증/저장소와의 통합도 쉬워서 초기 서비스 구축에 최적화된 백엔드였습니다.

## 2. 기술 스택 및 선택 이유

- 프레임워크: Next.js (App Router 기반)
  - 파일 기반 라우팅과 SSR(서버 사이드 렌더링) 지원으로 SEO에 유리
  - App Router 으로 페이지+레이아웃 구성이 직관적
- 데이터베이스 / 백엔드: Firebase Firestore
  - 실시간 데이터 처리 및 확장성
  - 인증, 저장소, Firestore DB를 통합적으로 사용 가능
  - 백엔드 구축 없이도 전체 SNS 로직 구현이 가능해서 빠른 개발에 적합
- 전역 상태 관리: React Context API
  - 앱 규모가 크지 않기 때문에 Context로도 충분
  - 로그인 상태, 알림 모달 등 간단한 전역 상태를 관리하기에 적합
- 스타일링 도구: Tailwind CSS
  - 클래스 기반 유틸리티 스타일링으로 빠르고 일관된 UI 구현
  - 반응형 지원이 뛰어나 모바일/데스크톱 대응이 용이
  - 별도 CSS 작성 없이도 유지보수 편리

> coment

- 실제 서비스를 목표로, 빠르게 개발하면서도 확장성과 유지보수를 고려했습니다.
- Next.js (App Router)
  파일 기반 라우팅과 SSR 지원으로 SEO에 유리하며, App Router로 페이지와 레이아웃 구성도 직관적입니다.
- Firebase Firestore
  인증, 저장소, DB까지 올인원 솔루션으로 실시간 데이터 처리와 빠른 초기 구축이 가능합니다.
- React Context API
  로그인 상태, 알림 등 간단한 전역 상태만 필요했기 때문에, 무거운 라이브러리 대신 Context를 선택했습니다.
- Tailwind CSS
  빠르고 일관된 스타일링이 가능하며, 반응형 구현이 간편하고 유지보수 효율이 높습니다.

## 3. 폴더 구조 요약

- src/app : Next.js App Router 라우팅 기반 페이지 구성
- src/components : 도메인 별 하위 컴포넌트 분리로 유지보수성 확립
- src/contextapi : 전역 상태 관리 : 인증 상태, 알림 모달 등 React Context로 처리
- src/lib : Firebase 데이터 함수 및 API 관련 유틸 정리

> coment

- 구조를 명확히 나눠, 기능별 유지보수가 용이하게 설계했습니다.
- src/app : 페이지 라우팅
- src/components : 도메인별 UI 컴포넌트
- src/contextapi : 로그인, 알림 등 전역 상태 관리
- src/lib : Firebase 관련 데이터 요청 함수
- src/hooks : 커스텀 훅 관리
  이렇게 폴더 구조를 명확히 분리해서 협업 시에도 파일을 빠르게 찾을 수 있도록 했습니다.

## 4. 각 페이지 구체적인 설명

### 각 게시물 구성

- 이미지, 좋아요, 북마크, 위치, 태그, 시간 정보 등 메타 정보 표시
- 개시물의 이미지가 2개 이상이면 +N 표시
- 이미지 클릭시 모달 뷰어
- 상세 내용 + 위치 + 시간 표시
- ESC 또는 바깥화면 클릭시 창 닫기 지원
- 반응형 및 다크모드 구현
- 현재 시간을 기준으로 언제 업로드 했는지 직관적으로 보여줍니다.
- hover UI/UX 구현

> coment

- SNS형 게시물 카드로 직관적이며, 상호작용이 가능하게 구성했습니다.
- 이미지, 좋아요, 북마크, 위치, 태그, 업로드 시간 등 메타데이터를 포함
- 이미지가 2개 이상일 경우 +N 표시
- 클릭 시 모달 뷰어로 상세 이미지 및 위치/설명 확인
- ESC 또는 바깥 클릭 시 닫기
- 사용자가 언제 게시물을 올렸는지를 "방금 전", "3일 전"처럼 자연스럽게 보여줍니다.
- 마우스 hover 시 버튼/정보 강조 등 UI/UX 개선 적용

### feed 페이지

- 무한스크롤
- 게시물 상단에 게시물을 업로드한 유저의 프로필
- 프로필 클릭 시 해당 유저의 페이지로 이동

> coment

이 컴포넌트는 인스타그램 피드처럼 게시물을 보여주는 역할을 하며, 이미지 클릭 시 모달로 상세 정보를 확인할 수 있도록 구성했습니다.
무한스크롤은 IntersectionObserver를 활용하여 성능 저하 없이 부드럽게 구현했고, Firebase와 React Query를 함께 사용해 데이터 요청 횟수를 최소화했습니다.
사용자 경험 측면에서는 다크모드, 반응형 UI, 키보드 인터랙션(Escape 키 등)까지 고려했습니다.

### bookmark 페이지

- 사용자가 '좋아요' 누른 게시물을 모아 북마크처럼 보여주는 페이지
- 좋아요 필터링, 정렬 기능, 이미지 모달 뷰어, 반응형 UI
- ESC 키로 모달 닫기 지원

> coment

이 페이지는 사용자가 좋아요한 게시물만 필터링해서 보여주는 북마크 UI입니다.
Firebase Firestore에서 데이터를 불러온 뒤, React Query로 캐시하여 성능을 높였습니다.
게시물은 정렬 기능을 통해 원하는 기준대로 확인할 수 있고, 각 포스트는 클릭 시 모달로 확대해서 확인할 수 있습니다.
또한 다크모드 지원, 반응형 디자인, 키보드 접근성까지 고려해 사용자 경험을 강화했습니다.

### profile 페이지

> 상단

- 로그인한 본인의 페이지 또는 타인 프로필 페이지입니다.
- 프로필 표시, 수정, 태그 리스트, 팔로우/공유, 게시물 렌더링
- 사용자가 프로필을 수정할 수 있도록 닉네임, 소개글, 프로필 이미지 상태를 관리
- 화면 너비에 따라 PC/tablet/Mobile 레이아웃 분리
- 프로필 이미지 위에 마우스를 올리면 수정하기 또는 공유하기 버튼
- 닉네임/소개글/게시물 수/구독자 수 등 표시
- 팔로우 버튼은 타인 프로필에서만 노출
- 닉네임/소개글/이미지를 수정하고 Firebase에 업데이트
- 팔로우/언팔로우에 따른 구독자 수 실시간 반영

> 하단

- 해당 유저의 게시물 목록을 출력, 게시물이 없으면 "게시물이 없습니다" 메시지 출력
- 최신 게시물부터 게시물 노출
- 이미지, 좋아요 버튼, 마이페이지 일때는 삭제버튼 노출
- 삭제 확인 모달 기능

> coment

유저가 작성한 게시물을 불러와 카드 형식으로 보여주는 컴포넌트입니다.
이미지 클릭 시 모달 상세보기를 통해 게시물 내용과 장소 정보를 확인할 수 있습니다.
로그인한 본인의 페이지일 경우에는 삭제 버튼도 활성화되며, 실시간 UI 반영까지 구현되어 있습니다.

> last coment

ProfileLayout은 사용자의 프로필 정보를 보여주고, 본인일 경우 수정도 가능한 핵심 레이아웃입니다.
반응형으로 구성되어 데스크탑과 모바일에서 모두 보기 좋게 설계되어 있고,
실시간 팔로워 수 반영, 이미지 업로드, 닉네임/소개글 검증 기능이 포함되어 있습니다.
Firebase Firestore와 Storage를 연동해 DB 반영 및 이미지 저장을 처리했고,
하단에는 ProfileFeedComponent를 통해 해당 유저의 게시물이 연동되어 출력됩니다.

## folder script

> script

1. app/bookmark
   좋아요한 게시물(북마크)만 모아 보여주는 페이지를 담당했습니다.
   정렬 기능(최신순, 좋아요순 등), 모달 뷰어, 반응형 UI를 구성했고

2. app/feed
   전체 게시물을 불러오는 피드 페이지를 구현했습니다.
   무한스크롤 기능, 모달 이미지 상세 보기 등을 PostComponent와 함께 구성했습니다.

3. components/profile
   ProfileLayout.tsx, ProfileFeedLayout.tsx를 통해
   프로필 상단 정보와 게시물 피드를 분리 구성했고,
   유저 본인 여부에 따라 버튼이 다르게 보이도록 처리했습니다.

4. app/profile/[username]
   동적 라우팅을 활용해 유저 프로필 페이지를 구성했습니다.
   ClientPage.tsx에서는 닉네임 기반 유저 정보 조회, 게시물 출력,
   팔로우 기능을 포함해 프로필 전체 레이아웃을 구현했습니다.

5. app/profile/subscribers
   나를 팔로우한 유저, 내가 팔로우한 유저를 확인할 수 있는 구독자 목록 페이지도 구현했습니다.
   Firestore의 서브컬렉션을 통해 실시간 구독 정보를 렌더링하도록 구성했습니다.

6. components/post
   게시물 상호작용 기능을 분리해서 구현했습니다.

FollowButton.tsx – 유저 팔로우
LikeButton.tsx – 좋아요 기능
ShareButton.tsx – 공유 기능
각 컴포넌트는 상태관리, Firestore 업데이트, UI 상태 반영까지 포함됩니다.

7.  types/post.ts
    게시물 관련 타입 정의를 담당했습니다.
    데이터 구조가 일관되도록 Post, User 등 타입을 정리해
    전역에서 사용될 수 있게 구성했습니다.

🧩 마무리 요약 멘트
전체적으로 저는 북마크, 피드, 프로필, 구독자, 게시물 인터랙션 컴포넌트를 중심으로 담당했으며,
기능별 폴더 구조에 따라 역할을 명확히 나누고,
유지보수가 쉬운 방식으로 구성하는 데 중점을 두었습니다.

# 총평 및 부가설명

- 게시글 수정하는 기능 미구현
- 내가 팔로우 중인 유저 및 나를 팔로우 하는 유저를 확인하는 기능 미구현
- 장소의 위치를 따로 찾아야 하는 불편함
