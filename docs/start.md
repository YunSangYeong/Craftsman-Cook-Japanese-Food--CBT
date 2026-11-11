기존 /workspace/Craftsman-Cook-Japanese-Food--CBT 체크아웃을 사용한다. 사용자 요청 없이 worktree를 만들지 않는다.
AGENTS.md와 연결된 스킬을 먼저 읽는다. Node >=22.12가 필요하다.
의존성이 없으면 bash docs/environment-setup.sh를 실행한다.
개발 서버: npm run dev -- --port 5173
준비 확인: curl -fsS http://127.0.0.1:5173/Craftsman-Cook-Japanese-Food--CBT/ 후 브라우저에서 제목과 두 모드를 확인한다.
검사: npm test, npm run build, PLAYWRIGHT_CHROMIUM_EXECUTABLE_PATH=/usr/bin/chromium npm run test:e2e
시스템 Chromium이 없으면 Playwright Chromium을 공식 설치한다. 프로세스는 새 작업마다 다시 시작해야 한다.
배포 사전 API가 403으로 차단된 상태이므로 사용자가 재시도를 명시하기 전 main 푸시/배포 실행 금지.
