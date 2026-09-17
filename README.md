# 정다희 Backend Engineer Portfolio

SAFY 프로젝트의 기여와 문제 해결 과정을 반응형 웹 포트폴리오로 구성한 정적 사이트입니다.

## 로컬 미리보기

```bash
python -m http.server 4173 --directory dist
```

브라우저에서 `http://127.0.0.1:4173`을 엽니다.

## GitHub Pages 배포

- 저장소의 `Settings > Pages`에서 Source를 `GitHub Actions`로 선택합니다.
- `main` 브랜치가 갱신되면 `.github/workflows/pages.yml`이 `dist` 폴더를 자동 배포합니다.
- Pages의 Custom domain에 `portfolio.alotofhee.xyz`를 입력하고 DNS 확인 후 HTTPS를 활성화합니다.

DNS에는 `portfolio` CNAME을 `da2dla.github.io`로 연결합니다.
