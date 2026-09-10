# 정다희 Backend Engineer Portfolio

SAFY 프로젝트의 기여와 문제 해결 과정을 반응형 웹 포트폴리오로 구성한 정적 사이트입니다.

## 로컬 미리보기

```bash
python -m http.server 4173 --directory dist
```

브라우저에서 `http://127.0.0.1:4173`을 엽니다.

## Cloudflare Pages 배포

- Framework preset: `None`
- Build command: 비워 둠
- Build output directory: `dist`
- Production branch: `main`
- Custom domain: `portfolio.alotofhee.xyz`

Cloudflare Pages에 이 GitHub 저장소를 연결하면 `main` 브랜치에 push할 때마다 자동 배포됩니다.
