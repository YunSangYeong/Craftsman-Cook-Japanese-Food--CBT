#!/usr/bin/env bash
set -euo pipefail
cd /workspace/Craftsman-Cook-Japanese-Food--CBT
npm ci --cache /tmp/cbt-npm-cache
npm test
npm run build
