# 현재 인스턴스 검증

작업 디렉터리: /workspace/Craftsman-Cook-Japanese-Food--CBT
Node 24.22.1. `npm ci --cache /tmp/cbt-npm-cache` 성공. 최초 기본 npm cache 경로 쓰기 실패 후 쓰기 가능한 cache 경로를 사용했다. TLS/무결성 검증을 비활성화하지 않았다.

- 단위: npm test, 종료 0, 947 통과 (7 모델/스키마·중복·60문항 추출·합격 경계·만료·저장 키 + 940 계산 역산).
- 프로덕션 빌드: tsc -b 및 Vite 성공. JS 청크 약 1.2MB, 500kB 경고 있음.
- PC/Pixel 7 Chromium 에뮬레이션: 두 모드 실제 답안 선택·keydown/keyup Space 이동, 제목·기준 메뉴 부재·상단 배너 부재, 새로고침 답안 보존, 제출 결과.
- 390×480, 740×360 메뉴: 실제 wheel 및 CDP touchStart/move/end로 하단 초기화 접근 → 위로 이동 → 대시보드 접근. scrollTop 직접 변경하지 않음.
- 개발 서버 npm run dev -- --port 5173 실행, 로컬 HTTP 요청 성공과 페이지 제목 확인.
- 실제 휴대폰/다른 브라우저/iframe/글자 확대/모든 등록·백업·손상 복원 UI 흐름의 브라우저 검증은 미실행. 기능 재사용과 실제 테스트 범위를 구별한다.
- 데이터 생성은 결정적이며 SHA 비교로 재생성 동일성 확인. 1,000개 스키마·ID·정규화 본문/보기 검사. 의미상 중복은 계산 4 family로 명시적으로 분류; 계산 변형을 독립 유형으로 세지 않음.
- Q-Net 공식 확인 차단 403. 외부 전문가/공식 출제기준 검수 미완료.
- 배포 사전 api.github.com 확인 최초 차단 403. 이후 조회 재시도·main push·workflow 실행 없음. CI/Pages 미실행, 공개 사이트 미확인.
- 환경 draft 저장: INVALID_ARGUMENT `Setup could not be completed; saving the draft could not be confirmed.` 저장 미확인. docs/environment-setup.sh와 docs/start.md에 지침 보존.

최종 브라우저 실행: 8개 통과, 실패 0, 종료 0. 최초 테스트 작성 중 시작 버튼 누락과 중복 변수 오류를 수정하고 로컬 재검증했다. 이는 배포 재시도가 아니다.
