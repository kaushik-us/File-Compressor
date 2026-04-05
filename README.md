# File Compressor

Drop in any file, set a target size, get a compressed file back.

---

## Supported formats

- **Images:** JPG, PNG, WebP, AVIF, GIF, BMP, TIFF, HEIC, PSD, RAW, SVG, ICO
- **PDF:** PDF
- **Documents:** DOCX, XLSX, PPTX, ODT, ODS, ODP, EPUB, TXT, RTF, CSV, MD, HTML, XML, JSON

---

## Libraries used

- **sharp** — image compression (libvips · mozjpeg · libwebp · pngquant)
- **pdf-lib** — PDF compression
- **archiver** — document compression (zip/deflate)
- **zlib** — text file compression
- **busboy** — multipart file upload parsing
