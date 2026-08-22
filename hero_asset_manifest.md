# Hero Asset Manifest R1

Estado: Gate R1-A preparado el 2026-08-20.

El master narrativo fuente está disponible en `~/Descargas/Hero-video.mp4`. Para esta revisión visual se conserva el source completo de `8.00 s`; los posters fueron extraídos del MP4 completo definitivo.

| Archivo | SHA-256 | Resolución | Duración | FPS | Codec | Audio | Bytes |
|---|---|---:|---:|---:|---|---|---:|
| `public/assets/hero/hero-intro-desktop.mp4` | `9a542b471718b44615e7d0864271357e5817fe00d63e28677d760c3c42b4ddae` | 1280x720 | 8.00 s | 24 | H.264 / avc1 / yuv420p | no | 3731989 |
| `public/assets/hero/hero-poster-initial-desktop.webp` | `f4423e74d544d3ec6fefa16582bb144d045eae1b0d85e58f80bf0af0b57c6fec` | 1280x720 | n/a | n/a | WebP | n/a | 68398 |
| `public/assets/hero/hero-poster-final-desktop.webp` | `27d5aec62dd425b0e1929488b5433bbb03b1f5c063519f0c52ce8fd57a4e17ce` | 1672x941 | n/a | n/a | WebP | n/a | 311956 |
| `public/assets/hero/hero-poster-final-tablet.webp` | `2089e11d14294c080efef9741c6c68d285801ce68b39dc95664d0952d783beb3` | 1024x720 | n/a | n/a | WebP | n/a | 114874 |
| `public/assets/hero/hero-poster-final-mobile.webp` | `3ca54a6c27ee177ac4980ae86d3b7aa489f7bc3fef0dfbbe500d58783aa7b757` | 640x720 | n/a | n/a | WebP | n/a | 126620 |

`moov` está antes de `mdat` mediante `-movflags +faststart`. Desktop normal y reduced-motion usan el WebP final de alta resolución; tablet y mobile usan sus crops WebP. El PNG definitivo se conserva fuera de `public/` como master de producción y no se publica en runtime. No se publica un manifest JSON runtime. Los hashes deben actualizarse si cambia cualquier export.

## Performance R1

- MP4: CRF 24, preset slow, 24 FPS, sin audio; 3.73 MB.
- SSIM del MP4 frente al source: 0.9789.
- El video solo se monta con viewport desktop, Save-Data desactivado y reduced-motion desactivado.
- El poster inicial es el candidato LCP prioritario; el video se monta después del primer frame de hidratación para no bloquear el render por un evento de imagen cacheado.
- El end frame WebP solo se precarga después de iniciar el video.
- Mobile y tablet no solicitan MP4 ni el end frame desktop.
- Objetivo de despliegue: CDN/Edge con cache largo para assets versionados y validación de respuestas `206 Partial Content`.

## R1-B

- WebM VP9 evaluado y descartado: CRF 30-34 produjo 4.63-5.99 MB con SSIM <= 0.9541; un límite de 3000 kbps produjo 2.34 MB pero SSIM 0.9381. El MP4 CRF24 conserva mejor los glows y textos con 3.73 MB y SSIM 0.9789.
- Generar AVIF para posters.
- Perfilar red y ajustar compresión sin degradar glows ni continuidad cromática.
