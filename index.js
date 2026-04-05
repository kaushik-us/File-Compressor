const _0x4c756a = _0x5266;
(function (_0x2bfbd4, _0x256adc) {
  const _0x4bf7cd = _0x5266,
    _0x3c9886 = _0x2bfbd4();
  while (!![]) {
    try {
      const _0x527970 =
        parseInt(_0x4bf7cd(0x1a2)) / 0x1 +
        (-parseInt(_0x4bf7cd(0x207)) / 0x2) *
          (-parseInt(_0x4bf7cd(0x1a3)) / 0x3) +
        parseInt(_0x4bf7cd(0x1e2)) / 0x4 +
        parseInt(_0x4bf7cd(0x180)) / 0x5 +
        -parseInt(_0x4bf7cd(0x188)) / 0x6 +
        (-parseInt(_0x4bf7cd(0x1a8)) / 0x7) *
          (-parseInt(_0x4bf7cd(0x1db)) / 0x8) +
        (parseInt(_0x4bf7cd(0x208)) / 0x9) *
          (-parseInt(_0x4bf7cd(0x18a)) / 0xa);
      if (_0x527970 === _0x256adc) break;
      else _0x3c9886["push"](_0x3c9886["shift"]());
    } catch (_0x47dc88) {
      _0x3c9886["push"](_0x3c9886["shift"]());
    }
  }
})(_0x3040, 0x7913f);
const toBytes = (_0x22d35f, _0x16ee76) =>
    _0x22d35f * { KB: 0x400, MB: 0x400 ** 0x2, GB: 0x400 ** 0x3 }[_0x16ee76],
  human = (_0x2430be) => {
    const _0x456470 = _0x5266;
    if (_0x2430be >= 0x400 ** 0x3)
      return (
        (_0x2430be / 0x400 ** 0x3)[_0x456470(0x216)](0x2) + _0x456470(0x1e8)
      );
    if (_0x2430be >= 0x400 ** 0x2)
      return (
        (_0x2430be / 0x400 ** 0x2)[_0x456470(0x216)](0x2) + _0x456470(0x193)
      );
    if (_0x2430be >= 0x400)
      return (_0x2430be / 0x400)["toFixed"](0x2) + _0x456470(0x199);
    return _0x2430be + "\x20B";
  },
  sleep = (_0x4b3f71) =>
    new Promise((_0x481e74) => setTimeout(_0x481e74, _0x4b3f71)),
  API = "/.netlify/functions",
  IMAGE_EXTS = new Set([
    _0x4c756a(0x219),
    _0x4c756a(0x1b7),
    _0x4c756a(0x1e5),
    _0x4c756a(0x202),
    _0x4c756a(0x1cb),
    _0x4c756a(0x1a5),
    _0x4c756a(0x1c6),
    _0x4c756a(0x1bf),
    "gif",
    "bmp",
    _0x4c756a(0x218),
    _0x4c756a(0x197),
    _0x4c756a(0x1d2),
    _0x4c756a(0x1e1),
    _0x4c756a(0x1aa),
    "cr2",
    _0x4c756a(0x1ca),
    _0x4c756a(0x1b6),
    _0x4c756a(0x1f7),
    _0x4c756a(0x184),
  ]),
  PDF_EXTS = new Set([_0x4c756a(0x1c3)]),
  DOC_EXTS = new Set([
    _0x4c756a(0x19f),
    _0x4c756a(0x20a),
    _0x4c756a(0x17b),
    _0x4c756a(0x189),
    _0x4c756a(0x20b),
    _0x4c756a(0x1b8),
    _0x4c756a(0x1f5),
    _0x4c756a(0x17a),
    _0x4c756a(0x186),
    _0x4c756a(0x1ac),
    "txt",
    _0x4c756a(0x1af),
    _0x4c756a(0x1b5),
    "md",
    _0x4c756a(0x1f4),
    _0x4c756a(0x19c),
    _0x4c756a(0x1df),
  ]),
  NATIVE_EXTS = new Set(["png", _0x4c756a(0x1cb), _0x4c756a(0x1a5), "gif"]);
let selectedFile = null,
  downloadBlob = null,
  downloadName = "",
  lastOrigExt = "",
  lastOutExt = "";
const dropzone = document[_0x4c756a(0x20e)](_0x4c756a(0x185)),
  fileInput = document[_0x4c756a(0x20e)](_0x4c756a(0x215)),
  fileInfo = document[_0x4c756a(0x20e)](_0x4c756a(0x1b3)),
  sizeInput = document[_0x4c756a(0x20e)](_0x4c756a(0x1e3)),
  unitSelect = document["getElementById"](_0x4c756a(0x1c8)),
  compressBtn = document["getElementById"]("compressBtn"),
  progressWrap = document[_0x4c756a(0x20e)](_0x4c756a(0x200)),
  progressBar = document[_0x4c756a(0x20e)]("progressBar"),
  progressLabel = document[_0x4c756a(0x20e)](_0x4c756a(0x194)),
  progressPct = document[_0x4c756a(0x20e)]("progressPct"),
  resultDiv = document[_0x4c756a(0x20e)](_0x4c756a(0x1b4)),
  formatsBtn = document[_0x4c756a(0x20e)](_0x4c756a(0x1ff)),
  modalOverlay = document[_0x4c756a(0x20e)](_0x4c756a(0x183)),
  modalClose = document[_0x4c756a(0x20e)](_0x4c756a(0x1d8));
(formatsBtn["addEventListener"](_0x4c756a(0x1fa), () =>
  modalOverlay["classList"][_0x4c756a(0x1a1)](_0x4c756a(0x1dd)),
),
  modalClose["addEventListener"](_0x4c756a(0x1fa), () =>
    modalOverlay[_0x4c756a(0x201)][_0x4c756a(0x1e0)]("open"),
  ),
  modalOverlay["addEventListener"](_0x4c756a(0x1fa), (_0x4166ec) => {
    const _0x33c77b = _0x4c756a;
    if (_0x4166ec[_0x33c77b(0x1ed)] === modalOverlay)
      modalOverlay[_0x33c77b(0x201)][_0x33c77b(0x1e0)](_0x33c77b(0x1dd));
  }),
  document["addEventListener"](_0x4c756a(0x1ec), (_0x574f6b) => {
    const _0x2b8d6a = _0x4c756a;
    if (_0x574f6b[_0x2b8d6a(0x19d)] === _0x2b8d6a(0x18d))
      modalOverlay[_0x2b8d6a(0x201)][_0x2b8d6a(0x1e0)](_0x2b8d6a(0x1dd));
  }));
function setFile(_0x1d220d) {
  const _0x5a63a2 = _0x4c756a;
  ((selectedFile = _0x1d220d),
    (fileInfo["textContent"] =
      _0x1d220d[_0x5a63a2(0x213)] +
      _0x5a63a2(0x182) +
      human(_0x1d220d["size"]) +
      ")"),
    (fileInfo[_0x5a63a2(0x20c)][_0x5a63a2(0x1ce)] = _0x5a63a2(0x1b2)),
    (compressBtn[_0x5a63a2(0x1e9)] = ![]),
    (resultDiv[_0x5a63a2(0x20c)][_0x5a63a2(0x1ce)] = _0x5a63a2(0x1c4)));
}
(fileInput[_0x4c756a(0x1a0)]("change", (_0x87e67d) => {
  const _0x229d56 = _0x4c756a;
  if (_0x87e67d[_0x229d56(0x1ed)][_0x229d56(0x18f)][0x0])
    setFile(_0x87e67d["target"][_0x229d56(0x18f)][0x0]);
}),
  dropzone[_0x4c756a(0x1a0)](_0x4c756a(0x17d), (_0x3712a5) => {
    const _0x515be8 = _0x4c756a;
    (_0x3712a5["preventDefault"](),
      dropzone[_0x515be8(0x201)]["add"](_0x515be8(0x203)));
  }),
  dropzone[_0x4c756a(0x1a0)]("dragleave", () =>
    dropzone[_0x4c756a(0x201)][_0x4c756a(0x1e0)]("drag-over"),
  ),
  dropzone[_0x4c756a(0x1a0)]("drop", (_0x145d0b) => {
    const _0x5d5d46 = _0x4c756a;
    (_0x145d0b[_0x5d5d46(0x1ee)](),
      dropzone[_0x5d5d46(0x201)]["remove"](_0x5d5d46(0x203)));
    if (_0x145d0b["dataTransfer"][_0x5d5d46(0x18f)][0x0])
      setFile(_0x145d0b[_0x5d5d46(0x21d)]["files"][0x0]);
  }));
let _timerInterval = null;
function startTimer() {
  const _0x3663b1 = _0x4c756a,
    _0x4a436d = Date[_0x3663b1(0x1a4)]();
  (stopTimer(),
    (_timerInterval = setInterval(() => {
      const _0x47fbc2 = _0x3663b1,
        _0x35338d = ((Date[_0x47fbc2(0x1a4)]() - _0x4a436d) / 0x3e8)[
          _0x47fbc2(0x216)
        ](0x1);
      progressPct[_0x47fbc2(0x1ad)] = _0x35338d + "s";
    }, 0x64)));
}
function _0x5266(_0x5a314a, _0xa3b72f) {
  _0x5a314a = _0x5a314a - 0x17a;
  const _0x30400e = _0x3040();
  let _0x52661d = _0x30400e[_0x5a314a];
  return _0x52661d;
}
function stopTimer() {
  _timerInterval && (clearInterval(_timerInterval), (_timerInterval = null));
}
function setProgress(_0x1d054c, _0x1badd4) {
  const _0x42d0fa = _0x4c756a;
  ((progressBar[_0x42d0fa(0x20c)][_0x42d0fa(0x17f)] = _0x1d054c + "%"),
    (progressLabel["textContent"] = _0x1badd4));
  if (_0x1d054c <= 0x0) progressPct[_0x42d0fa(0x1ad)] = "";
}
async function compressViaAPI(_0x5755ee, _0x326e69, _0x3d0f16) {
  const _0x11c3f4 = _0x4c756a,
    _0x5a1780 = new FormData();
  (_0x5a1780["append"]("file", _0x5755ee),
    _0x5a1780[_0x11c3f4(0x21c)]("target", String(_0x326e69)));
  const _0x20ae30 = await fetch("" + API + _0x3d0f16, {
      method: _0x11c3f4(0x19a),
      body: _0x5a1780,
    }),
    _0x519916 = await _0x20ae30[_0x11c3f4(0x217)]();
  let _0x5b79bb;
  try {
    _0x5b79bb = JSON["parse"](_0x519916);
  } catch {
    if (
      _0x20ae30[_0x11c3f4(0x1ea)] === 0x1f6 ||
      _0x20ae30[_0x11c3f4(0x1ea)] === 0x1f8 ||
      _0x519916["toLowerCase"]()[_0x11c3f4(0x198)](_0x11c3f4(0x21b))
    )
      throw new Error(_0x11c3f4(0x19b));
    throw new Error(_0x11c3f4(0x211) + _0x20ae30[_0x11c3f4(0x1ea)] + ")");
  }
  if (!_0x20ae30["ok"])
    throw new Error(_0x5b79bb[_0x11c3f4(0x1c0)] || _0x11c3f4(0x17c));
  const _0x164729 = atob(_0x5b79bb[_0x11c3f4(0x1cc)]),
    _0x53c63d = new Uint8Array(_0x164729[_0x11c3f4(0x1ab)]);
  for (
    let _0x35ee0d = 0x0;
    _0x35ee0d < _0x164729[_0x11c3f4(0x1ab)];
    _0x35ee0d++
  )
    _0x53c63d[_0x35ee0d] = _0x164729[_0x11c3f4(0x19e)](_0x35ee0d);
  const _0x4767a6 = new Blob([_0x53c63d], {
    type: _0x5b79bb[_0x11c3f4(0x206)],
  });
  return {
    blob: _0x4767a6,
    ext: _0x5b79bb[_0x11c3f4(0x1bc)],
    size: _0x5b79bb["size"],
    origExt: _0x5b79bb[_0x11c3f4(0x1cf)],
  };
}
async function compressImageAsync(_0x40898a, _0x39f1a1) {
  const _0x9803a3 = _0x4c756a;
  return compressViaAPI(_0x40898a, _0x39f1a1, _0x9803a3(0x205));
}
async function padFile(_0x422bbc, _0x59037a) {
  const _0x4bbba3 = _0x4c756a;
  setProgress(0x32, _0x4bbba3(0x1d9));
  const _0xa84f7d = await _0x422bbc[_0x4bbba3(0x1f9)](),
    _0x21276c = new Uint8Array(_0x59037a);
  _0x21276c[_0x4bbba3(0x1d1)](new Uint8Array(_0xa84f7d), 0x0);
  const _0x2b2c6d = _0x422bbc[_0x4bbba3(0x213)]
    ["split"](".")
    [_0x4bbba3(0x1dc)]()
    ["toLowerCase"]();
  return {
    blob: new Blob([_0x21276c], { type: _0x422bbc[_0x4bbba3(0x181)] }),
    ext: _0x2b2c6d,
    padded: !![],
  };
}
async function convertToOriginal(_0x48bd55, _0x4324df, _0xb3028f) {
  const _0x1499ed = _0x4c756a,
    _0x4b6319 = new FormData();
  (_0x4b6319[_0x1499ed(0x21c)]("file", _0x48bd55, _0x4324df),
    _0x4b6319[_0x1499ed(0x21c)](_0x1499ed(0x1cf), _0xb3028f));
  const _0x1a4927 = await fetch(API + _0x1499ed(0x1d5), {
      method: "POST",
      body: _0x4b6319,
    }),
    _0x262972 = await _0x1a4927["json"]();
  if (!_0x1a4927["ok"])
    throw new Error(_0x262972[_0x1499ed(0x1c0)] || _0x1499ed(0x1a7));
  const _0x1a2a08 = atob(_0x262972["data"]),
    _0x3d1a75 = new Uint8Array(_0x1a2a08[_0x1499ed(0x1ab)]);
  for (let _0x2eca99 = 0x0; _0x2eca99 < _0x1a2a08["length"]; _0x2eca99++)
    _0x3d1a75[_0x2eca99] = _0x1a2a08[_0x1499ed(0x19e)](_0x2eca99);
  return {
    blob: new Blob([_0x3d1a75], { type: _0x262972[_0x1499ed(0x206)] }),
    ext: _0x262972["ext"],
    width: _0x262972[_0x1499ed(0x17f)],
    height: _0x262972["height"],
    size: _0x262972[_0x1499ed(0x1de)],
  };
}
function _0x3040() {
  const _0x547215 = [
    "convertStatus",
    "dng",
    "split",
    "arrayBuffer",
    "click",
    "<hr\x20class=\x22divider\x22/><div\x20style=\x22color:var(--muted);font-size:12px;margin-bottom:12px;\x22>File\x20was\x20smaller\x20than\x20target\x20—\x20padded\x20with\x20null\x20bytes\x20to\x20reach\x20exact\x20target\x20size.</div>",
    "blob",
    "message",
    "className",
    "formatsBtn",
    "progressWrap",
    "classList",
    "png",
    "drag-over",
    "<div\x20class=\x22result-title\x22>⚠\x20Unsupported\x20format</div><strong>.",
    "/compress-image",
    "mime",
    "770SgGuRt",
    "45qWacrZ",
    "AVIF",
    "doc",
    "pptx",
    "style",
    "pointerEvents",
    "getElementById",
    "Uploading…",
    "Compressing\x20PDF\x20with\x20pdf-lib…",
    "Server\x20error\x20(",
    "createElement",
    "name",
    "Compressing\x20document\x20with\x20archiver\x20·\x20zlib…",
    "fileInput",
    "toFixed",
    "text",
    "ico",
    "jpg",
    "%\x20of\x20target</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20",
    "timeout",
    "append",
    "dataTransfer",
    "ods",
    "xlsx",
    "Server\x20error",
    "dragover",
    "has",
    "width",
    "1879645DXxXCv",
    "type",
    "\x20\x20(",
    "modalOverlay",
    "svg",
    "dropzone",
    "odp",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22result-title\x22>✓\x20Compression\x20complete</div>\x0a\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-grid\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>Original</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-value\x22>",
    "4436862rASrIl",
    "xls",
    "803060hsodHc",
    "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>Target</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-value\x22>",
    "value",
    "Escape",
    "\x0a\x20\x20\x20\x20\x20\x20<div\x20id=\x22convertStatus\x22\x20style=\x22font-size:12px;color:var(--muted);margin-top:6px;display:none;\x22></div>\x0a\x20\x20\x20\x20",
    "files",
    "</strong>\x20for\x20best\x20quality\x20at\x20this\x20size.\x20Use\x20the\x20button\x20below\x20to\x20convert\x20back\x20to\x20<strong>",
    "result\x20success",
    "createObjectURL",
    "\x20MB",
    "progressLabel",
    "%</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>Accuracy</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-value\x22>",
    "href",
    "heic",
    "includes",
    "\x20KB",
    "POST",
    "Compression\x20timed\x20out\x20—\x20try\x20a\x20larger\x20target\x20size\x20or\x20a\x20smaller\x20file.",
    "xml",
    "key",
    "charCodeAt",
    "docx",
    "addEventListener",
    "add",
    "268468DOFUMy",
    "4134xKaKxq",
    "now",
    "avif",
    "Compressing\x20image\x20with\x20sharp\x20·\x20mozjpeg\x20·\x20WebP…",
    "Conversion\x20failed",
    "539kRRsFG",
    "/compress-document",
    "raw",
    "length",
    "epub",
    "textContent",
    "innerHTML",
    "rtf",
    "</strong>\x20is\x20not\x20supported.\x20Click\x20<strong>Formats</strong>\x20to\x20see\x20what\x27s\x20accepted.",
    "round",
    "block",
    "fileInfo",
    "result",
    "csv",
    "arw",
    "jpeg",
    "ppt",
    "🔄\x20Convert\x20to\x20",
    "toUpperCase",
    "✓\x20Saved\x20as\x20",
    "ext",
    "</a>\x0a\x20\x20\x20\x20\x20\x20",
    "dlBtn",
    "tif",
    "error",
    "\x20—\x20",
    "</strong>\x20at\x20the\x20same\x20file\x20size.</div>",
    "pdf",
    "none",
    "/compress-pdf",
    "tiff",
    "<div\x20class=\x22result-title\x22>⚠\x20Error</div><pre\x20style=\x22white-space:pre-wrap;font-size:13px;margin:0\x22>",
    "unitSelect",
    "Done!",
    "nef",
    "webp",
    "data",
    "revokeObjectURL",
    "display",
    "origExt",
    "Please\x20enter\x20a\x20valid\x20target\x20size.",
    "set",
    "heif",
    "padded",
    "<a\x20class=\x22download-btn\x20convert-btn\x22\x20id=\x22convertOrigBtn\x22>🔄&nbsp;\x20Convert\x20to\x20",
    "/convert-image",
    "replace",
    "\x20&\x20Download",
    "modalClose",
    "File\x20is\x20already\x20smaller\x20than\x20target\x20—\x20padding…",
    "\x0a\x20\x20\x20\x20\x20\x20",
    "1336ggvJaA",
    "pop",
    "open",
    "size",
    "json",
    "remove",
    "psd",
    "1796624fWbHhm",
    "sizeInput",
    "<div\x20class=\x22webp-note\x22>⚡\x20Compressed\x20as\x20<strong>.",
    "jfif",
    "convertOrigBtn",
    "toLowerCase",
    "\x20GB",
    "disabled",
    "status",
    "</pre>",
    "keydown",
    "target",
    "preventDefault",
    "result\x20error",
    "Converting…",
    "\x20downloaded",
    "download",
    "_compressed.",
    "html",
    "odt",
  ];
  _0x3040 = function () {
    return _0x547215;
  };
  return _0x3040();
}
compressBtn["addEventListener"]("click", async () => {
  const _0x184d5c = _0x4c756a;
  if (!selectedFile) return;
  const _0x520794 = parseFloat(sizeInput["value"]);
  if (!_0x520794 || _0x520794 <= 0x0) {
    alert(_0x184d5c(0x1d0));
    return;
  }
  const _0x339e21 = Math[_0x184d5c(0x1b1)](
      toBytes(_0x520794, unitSelect[_0x184d5c(0x18c)]),
    ),
    _0x5bfe49 = selectedFile[_0x184d5c(0x213)]
      [_0x184d5c(0x1f8)](".")
      ["pop"]()
      [_0x184d5c(0x1e7)]();
  if (
    !IMAGE_EXTS[_0x184d5c(0x17e)](_0x5bfe49) &&
    !PDF_EXTS[_0x184d5c(0x17e)](_0x5bfe49) &&
    !DOC_EXTS[_0x184d5c(0x17e)](_0x5bfe49)
  ) {
    ((resultDiv[_0x184d5c(0x1fe)] = _0x184d5c(0x1ef)),
      (resultDiv[_0x184d5c(0x1ae)] =
        _0x184d5c(0x204) + _0x5bfe49 + _0x184d5c(0x1b0)),
      (resultDiv[_0x184d5c(0x20c)][_0x184d5c(0x1ce)] = _0x184d5c(0x1b2)));
    return;
  }
  ((compressBtn["disabled"] = !![]),
    (progressWrap["style"][_0x184d5c(0x1ce)] = _0x184d5c(0x1b2)),
    (resultDiv[_0x184d5c(0x20c)]["display"] = "none"),
    setProgress(0x5, _0x184d5c(0x20f)));
  const _0x4240af = selectedFile[_0x184d5c(0x1de)];
  try {
    let _0x4b2496;
    if (_0x4240af <= _0x339e21)
      _0x4b2496 = await padFile(selectedFile, _0x339e21);
    else {
      if (IMAGE_EXTS["has"](_0x5bfe49))
        (setProgress(0xf, _0x184d5c(0x1a6)),
          startTimer(),
          await sleep(0x0),
          (_0x4b2496 = await compressImageAsync(selectedFile, _0x339e21)),
          stopTimer());
      else
        PDF_EXTS[_0x184d5c(0x17e)](_0x5bfe49)
          ? (setProgress(0xf, _0x184d5c(0x210)),
            startTimer(),
            await sleep(0x0),
            (_0x4b2496 = await compressViaAPI(
              selectedFile,
              _0x339e21,
              _0x184d5c(0x1c5),
            )),
            stopTimer())
          : (setProgress(0xf, _0x184d5c(0x214)),
            startTimer(),
            await sleep(0x0),
            (_0x4b2496 = await compressViaAPI(
              selectedFile,
              _0x339e21,
              _0x184d5c(0x1a9),
            )),
            stopTimer());
    }
    (stopTimer(),
      setProgress(0x64, _0x184d5c(0x1c9)),
      (lastOrigExt = _0x5bfe49),
      (lastOutExt = _0x4b2496[_0x184d5c(0x1bc)]));
    const _0x49e5d8 = selectedFile[_0x184d5c(0x213)][_0x184d5c(0x1d6)](
      /\.[^.]+$/,
      "",
    );
    ((downloadName =
      _0x49e5d8 + _0x184d5c(0x1f3) + _0x4b2496[_0x184d5c(0x1bc)]),
      (downloadBlob = _0x4b2496[_0x184d5c(0x1fc)]));
    const _0x2dbd97 = _0x4b2496[_0x184d5c(0x1fc)][_0x184d5c(0x1de)],
      _0x195dd6 = ((0x1 - _0x2dbd97 / _0x4240af) * 0x64)["toFixed"](0x1),
      _0x46c8d1 = ((_0x2dbd97 / _0x339e21) * 0x64)[_0x184d5c(0x216)](0x1),
      _0x2d60c6 = IMAGE_EXTS[_0x184d5c(0x17e)](_0x5bfe49),
      _0x3eec1c =
        _0x2d60c6 &&
        !_0x4b2496[_0x184d5c(0x1d3)] &&
        _0x4b2496[_0x184d5c(0x1bc)] !== _0x5bfe49 &&
        !(_0x5bfe49 === _0x184d5c(0x219) && _0x4b2496["ext"] === "jpg") &&
        !(
          _0x5bfe49 === _0x184d5c(0x1b7) &&
          _0x4b2496["ext"] === _0x184d5c(0x219)
        ) &&
        !(
          _0x5bfe49 === _0x184d5c(0x1e5) &&
          _0x4b2496[_0x184d5c(0x1bc)] === _0x184d5c(0x219)
        ),
      _0xd4b56e = [_0x184d5c(0x219), "jpeg", _0x184d5c(0x1e5)][
        _0x184d5c(0x198)
      ](_0x5bfe49)
        ? "JPEG"
        : _0x5bfe49 === _0x184d5c(0x202)
          ? "PNG"
          : _0x5bfe49 === "gif"
            ? "GIF"
            : _0x5bfe49 === _0x184d5c(0x1a5)
              ? _0x184d5c(0x209)
              : _0x5bfe49[_0x184d5c(0x1ba)]();
    ((resultDiv[_0x184d5c(0x1fe)] = _0x184d5c(0x191)),
      (resultDiv[_0x184d5c(0x1ae)] =
        _0x184d5c(0x187) +
        human(_0x4240af) +
        "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-item\x20highlight\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>Output</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-value\x22>" +
        human(_0x2dbd97) +
        _0x184d5c(0x18b) +
        human(_0x339e21) +
        "</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-item\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-label\x22>Reduced\x20by</div>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<div\x20class=\x22stat-value\x22>" +
        _0x195dd6 +
        _0x184d5c(0x195) +
        _0x46c8d1 +
        _0x184d5c(0x21a) +
        (_0x4b2496[_0x184d5c(0x1d3)] ? _0x184d5c(0x1fb) : "") +
        _0x184d5c(0x1da) +
        (_0x3eec1c
          ? _0x184d5c(0x1e4) +
            _0x4b2496[_0x184d5c(0x1bc)][_0x184d5c(0x1ba)]() +
            _0x184d5c(0x190) +
            _0xd4b56e +
            _0x184d5c(0x1c2)
          : "") +
        "\x0a\x20\x20\x20\x20\x20\x20<a\x20class=\x22download-btn\x22\x20id=\x22dlBtn\x22>⬇&nbsp;\x20Download\x20" +
        downloadName +
        _0x184d5c(0x1bd) +
        (_0x3eec1c
          ? _0x184d5c(0x1d4) + _0xd4b56e + "\x20&amp;\x20Download</a>"
          : "") +
        _0x184d5c(0x18e)),
      (resultDiv[_0x184d5c(0x20c)][_0x184d5c(0x1ce)] = _0x184d5c(0x1b2)),
      document["getElementById"](_0x184d5c(0x1be))[_0x184d5c(0x1a0)](
        _0x184d5c(0x1fa),
        () => {
          const _0x5d1e3b = _0x184d5c,
            _0x2a8f69 = document[_0x5d1e3b(0x212)]("a");
          ((_0x2a8f69[_0x5d1e3b(0x196)] = URL["createObjectURL"](downloadBlob)),
            (_0x2a8f69["download"] = downloadName),
            _0x2a8f69[_0x5d1e3b(0x1fa)](),
            setTimeout(
              () => URL[_0x5d1e3b(0x1cd)](_0x2a8f69[_0x5d1e3b(0x196)]),
              0x1388,
            ));
        },
      ),
      _0x3eec1c &&
        document[_0x184d5c(0x20e)](_0x184d5c(0x1e6))[_0x184d5c(0x1a0)](
          _0x184d5c(0x1fa),
          async () => {
            const _0x4b0385 = _0x184d5c,
              _0x1002f8 = document[_0x4b0385(0x20e)](_0x4b0385(0x1e6)),
              _0x55b5bb = document[_0x4b0385(0x20e)](_0x4b0385(0x1f6));
            ((_0x1002f8["textContent"] = "⏳\x20Converting…"),
              (_0x1002f8[_0x4b0385(0x20c)][_0x4b0385(0x20d)] =
                _0x4b0385(0x1c4)),
              (_0x55b5bb[_0x4b0385(0x20c)][_0x4b0385(0x1ce)] =
                _0x4b0385(0x1b2)),
              (_0x55b5bb["textContent"] = _0x4b0385(0x1f0)));
            try {
              const _0x3eab0e = await convertToOriginal(
                  downloadBlob,
                  downloadName,
                  lastOrigExt,
                ),
                _0x3d0fb1 =
                  _0x49e5d8 + _0x4b0385(0x1f3) + _0x3eab0e[_0x4b0385(0x1bc)],
                _0x39543a = document["createElement"]("a");
              ((_0x39543a[_0x4b0385(0x196)] = URL[_0x4b0385(0x192)](
                _0x3eab0e["blob"],
              )),
                (_0x39543a[_0x4b0385(0x1f2)] = _0x3d0fb1),
                _0x39543a[_0x4b0385(0x1fa)](),
                setTimeout(
                  () => URL[_0x4b0385(0x1cd)](_0x39543a[_0x4b0385(0x196)]),
                  0x1388,
                ),
                (_0x55b5bb["textContent"] =
                  _0x4b0385(0x1bb) +
                  _0xd4b56e +
                  _0x4b0385(0x1c1) +
                  human(_0x3eab0e[_0x4b0385(0x1fc)]["size"]) +
                  "\x20(" +
                  _0x3eab0e[_0x4b0385(0x17f)] +
                  "×" +
                  _0x3eab0e["height"] +
                  ")"),
                (_0x1002f8[_0x4b0385(0x1ad)] =
                  "✓\x20" + _0xd4b56e + _0x4b0385(0x1f1)));
            } catch (_0x540079) {
              ((_0x55b5bb["textContent"] =
                "⚠\x20" + _0x540079[_0x4b0385(0x1fd)]),
                (_0x1002f8[_0x4b0385(0x1ad)] =
                  _0x4b0385(0x1b9) + _0xd4b56e + _0x4b0385(0x1d7)),
                (_0x1002f8[_0x4b0385(0x20c)][_0x4b0385(0x20d)] = ""));
            }
          },
        ));
  } catch (_0x502ce4) {
    (stopTimer(),
      setProgress(0x0, ""),
      (resultDiv[_0x184d5c(0x1fe)] = "result\x20error"),
      (resultDiv["innerHTML"] =
        _0x184d5c(0x1c7) + _0x502ce4[_0x184d5c(0x1fd)] + _0x184d5c(0x1eb)),
      (resultDiv[_0x184d5c(0x20c)][_0x184d5c(0x1ce)] = _0x184d5c(0x1b2)));
  } finally {
    compressBtn[_0x184d5c(0x1e9)] = ![];
  }
});
