# FishingMap 배포 가이드

## 1. 빌드

```bash
npm run build
```

`dist` 폴더에 정적 파일이 생성됩니다.

---

## 2. 배포 전 환경 변수 (필수)

배포 플랫폼에서 다음 환경 변수를 설정하세요.

| 변수명 | 설명 |
|--------|------|
| `VITE_DATA_GO_KR_KEY` | 공공데이터포털 API 인증키 |
| `VITE_API_BASE` | **배포 시에만** 설정. 값: `https://apis.data.go.kr` |

- 로컬/개발: `VITE_API_BASE` 없으면 `/data-go`(프록시) 사용
- 배포: `VITE_API_BASE=https://apis.data.go.kr` 로 설정 후 빌드

---

## 3. 추천 배포 방법

### A. Vercel (가장 간단)

1. [vercel.com](https://vercel.com) 가입 후 GitHub 연동
2. 저장소 선택 → **Import**
3. **Environment Variables**에 추가:
   - `VITE_DATA_GO_KR_KEY` = (API 키)
   - `VITE_API_BASE` = `https://apis.data.go.kr`
4. **Deploy** 클릭

- 빌드 커맨드: `npm run build` (자동 인식)
- 출력 디렉터리: `dist` (자동 인식)

---

### B. Netlify

1. [netlify.com](https://netlify.com) 가입 후 저장소 연결
2. Build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
3. **Site settings → Environment variables**에 위 두 변수 추가
4. Deploy

---

### C. GitHub Pages (무료)

1. **저장소 이름이 `FishingMap`이 아니면**  
   `vite.config.js`에서 `"/FishingMap/"` 을 `"/당신저장소이름/"` 으로 변경하거나,  
   빌드 시 `VITE_BASE=/당신저장소이름/` 환경 변수로 지정.

2. **빌드** (로컬에서 미리 확인):
   ```bash
   npm run build:gh
   ```
   - `dist`에 `404.html`이 생성됨 (새로고침/직접 URL 시에도 SPA 동작).

3. **배포 방법 (둘 중 하나)**  
   - **Settings → Pages → Source: Deploy from a branch**  
     - Branch: `main` (또는 사용 중인 브랜치), Folder: `/ (root)`  
     - 루트에 `dist` 내용을 올리려면 보통 **GitHub Actions** 사용.  
   - **GitHub Actions** (권장):  
     - `.github/workflows/deploy.yml` 추가 (아래 참고).  
     - 저장소 Settings → Secrets에 `VITE_DATA_GO_KR_KEY` 등록.  
     - 푸시 시 자동 빌드 후 `gh-pages` 브랜치에 배포.

4. **환경 변수**  
   - Actions에서 사용할 경우: Secrets에 `VITE_DATA_GO_KR_KEY` 추가.  
   - 빌드 시 `VITE_API_BASE=https://apis.data.go.kr` 로 설정 (또는 스크립트/워크플로우에 고정).

---

## 4. 로컬에서 배포 결과 미리보기

```bash
npm run build
npm run preview
```

브라우저에서 `http://localhost:4173` 으로 확인.  
이때는 **프록시가 없으므로** `.env`에 `VITE_API_BASE=https://apis.data.go.kr` 를 넣고 빌드해야 API가 동작합니다.
