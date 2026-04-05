"use strict";
const _0x45c36a = _0x1eae;
(function (_0x222ff1, _0x3d5620) {
  const _0x3acd8c = _0x1eae,
    _0x766fdf = _0x222ff1();
  while (!![]) {
    try {
      const _0x50afec =
        (-parseInt(_0x3acd8c(0x125)) / 0x1) *
          (parseInt(_0x3acd8c(0x100)) / 0x2) +
        (-parseInt(_0x3acd8c(0x117)) / 0x3) *
          (parseInt(_0x3acd8c(0x121)) / 0x4) +
        (parseInt(_0x3acd8c(0x126)) / 0x5) *
          (parseInt(_0x3acd8c(0x10a)) / 0x6) +
        (-parseInt(_0x3acd8c(0x114)) / 0x7) *
          (parseInt(_0x3acd8c(0x115)) / 0x8) +
        (parseInt(_0x3acd8c(0x129)) / 0x9) *
          (parseInt(_0x3acd8c(0x109)) / 0xa) +
        (-parseInt(_0x3acd8c(0xf9)) / 0xb) *
          (parseInt(_0x3acd8c(0x127)) / 0xc) +
        parseInt(_0x3acd8c(0x119)) / 0xd;
      if (_0x50afec === _0x3d5620) break;
      else _0x766fdf["push"](_0x766fdf["shift"]());
    } catch (_0x321eb2) {
      _0x766fdf["push"](_0x766fdf["shift"]());
    }
  }
})(_0x115c, 0xc8185);
function _0x1eae(_0x283b16, _0x15f623) {
  _0x283b16 = _0x283b16 - 0xf6;
  const _0x115ccd = _0x115c();
  let _0x1eae0b = _0x115ccd[_0x283b16];
  return _0x1eae0b;
}
const archiver = require(_0x45c36a(0x11c)),
  zlib = require("zlib"),
  { promisify } = require(_0x45c36a(0xff)),
  { Readable } = require("stream"),
  busboy = require(_0x45c36a(0xfc)),
  gzip = promisify(zlib[_0x45c36a(0x111)]),
  deflateRaw = promisify(zlib[_0x45c36a(0x11b)]),
  deflate = promisify(zlib[_0x45c36a(0x116)]);
function _0x115c() {
  const _0x4b6e81 = [
    "[compress-document]",
    "headers",
    "push",
    "application/json",
    "pop",
    "4522480MOxLVX",
    "292722fsyZLz",
    "constants",
    "from",
    "httpMethod",
    "stringify",
    "filename",
    "Z_BEST_COMPRESSION",
    "gzip",
    "end",
    "target",
    "3623179eqVGfQ",
    "24rMxunU",
    "deflate",
    "21Txqtkj",
    "message",
    "37143431eNLZkk",
    "Method\x20not\x20allowed",
    "deflateRaw",
    "archiver",
    "data",
    "append",
    "concat",
    "finalize",
    "73612ZEPfpp",
    "toLowerCase",
    "isZip",
    "Missing\x20file\x20or\x20target.",
    "4PlbmAR",
    "40BhtpCu",
    "6688248orerSO",
    "write",
    "27ukGicu",
    "handler",
    "buf",
    "toString",
    "11AUYKfb",
    "finish",
    "file",
    "busboy",
    "content-type",
    "Compression\x20failed.",
    "util",
    "772836YRCqaK",
    "length",
    "base64",
    "error",
  ];
  _0x115c = function () {
    return _0x4b6e81;
  };
  return _0x115c();
}
function parseMultipart(_0x1637e3) {
  return new Promise((_0x31bd66, _0x5f39c5) => {
    const _0x66c17 = _0x1eae,
      _0x1ef8d0 =
        _0x1637e3[_0x66c17(0x105)][_0x66c17(0xfd)] ||
        _0x1637e3["headers"]["Content-Type"] ||
        "",
      _0x53924e = busboy({ headers: { "content-type": _0x1ef8d0 } });
    let _0x59f7a8 = null,
      _0x1928e8 = "",
      _0x22b96f = 0x0;
    (_0x53924e["on"](_0x66c17(0xfb), (_0x267edb, _0x1d3e69, _0x4c451a) => {
      const _0xbdec9a = _0x66c17;
      _0x1928e8 = _0x4c451a[_0xbdec9a(0x10f)] || "";
      const _0x4a4efb = [];
      (_0x1d3e69["on"](_0xbdec9a(0x11d), (_0x46542c) =>
        _0x4a4efb[_0xbdec9a(0x106)](_0x46542c),
      ),
        _0x1d3e69["on"](_0xbdec9a(0x112), () => {
          const _0x16b47f = _0xbdec9a;
          _0x59f7a8 = Buffer[_0x16b47f(0x11f)](_0x4a4efb);
        }));
    }),
      _0x53924e["on"]("field", (_0x314c1a, _0xf958ed) => {
        const _0x595043 = _0x66c17;
        if (_0x314c1a === _0x595043(0x113))
          _0x22b96f = parseInt(_0xf958ed, 0xa);
      }),
      _0x53924e["on"](_0x66c17(0xfa), () =>
        _0x31bd66({
          fileBuffer: _0x59f7a8,
          filename: _0x1928e8,
          target: _0x22b96f,
        }),
      ),
      _0x53924e["on"](_0x66c17(0x103), _0x5f39c5));
    const _0x391fb6 = _0x1637e3["isBase64Encoded"]
      ? Buffer[_0x66c17(0x10c)](_0x1637e3["body"], _0x66c17(0x102))
      : Buffer[_0x66c17(0x10c)](_0x1637e3["body"] || "");
    (_0x53924e[_0x66c17(0x128)](_0x391fb6), _0x53924e[_0x66c17(0x112)]());
  });
}
function zipBuffer(_0x5e0f4e, _0x2544aa) {
  return new Promise((_0x5086ed, _0x5e34a5) => {
    const _0x35ce4a = _0x1eae,
      _0x114a74 = [],
      _0x1f70f7 = archiver("zip", { zlib: { level: 0x9 } });
    (_0x1f70f7["on"]("data", (_0x114a55) =>
      _0x114a74[_0x35ce4a(0x106)](_0x114a55),
    ),
      _0x1f70f7["on"](_0x35ce4a(0x112), () =>
        _0x5086ed(Buffer["concat"](_0x114a74)),
      ),
      _0x1f70f7["on"]("error", _0x5e34a5));
    const _0x598f8a = new Readable();
    (_0x598f8a[_0x35ce4a(0x106)](_0x5e0f4e),
      _0x598f8a[_0x35ce4a(0x106)](null),
      _0x1f70f7[_0x35ce4a(0x11e)](_0x598f8a, { name: _0x2544aa }),
      _0x1f70f7[_0x35ce4a(0x120)]());
  });
}
exports[_0x45c36a(0xf6)] = async (_0x1152e3) => {
  const _0x4fc792 = _0x45c36a;
  if (_0x1152e3[_0x4fc792(0x10d)] !== "POST")
    return {
      statusCode: 0x195,
      body: JSON[_0x4fc792(0x10e)]({ error: _0x4fc792(0x11a) }),
    };
  try {
    const {
      fileBuffer: _0x228a0f,
      filename: _0x3bf9f3,
      target: _0xf5a3e6,
    } = await parseMultipart(_0x1152e3);
    if (!_0x228a0f || !_0xf5a3e6 || _0xf5a3e6 <= 0x0)
      return {
        statusCode: 0x190,
        body: JSON[_0x4fc792(0x10e)]({ error: _0x4fc792(0x124) }),
      };
    const _0x4538e1 = (_0x3bf9f3["split"](".")[_0x4fc792(0x108)]() || "")[
        _0x4fc792(0x122)
      ](),
      _0x8107df = [];
    try {
      _0x8107df["push"]({
        buf: await zipBuffer(_0x228a0f, _0x3bf9f3),
        isZip: !![],
      });
    } catch {}
    try {
      _0x8107df[_0x4fc792(0x106)]({
        buf: await deflateRaw(_0x228a0f, {
          level: zlib[_0x4fc792(0x10b)][_0x4fc792(0x110)],
        }),
      });
    } catch {}
    try {
      _0x8107df[_0x4fc792(0x106)]({
        buf: await gzip(_0x228a0f, {
          level: zlib["constants"][_0x4fc792(0x110)],
        }),
      });
    } catch {}
    try {
      _0x8107df[_0x4fc792(0x106)]({
        buf: await deflate(_0x228a0f, {
          level: zlib[_0x4fc792(0x10b)]["Z_BEST_COMPRESSION"],
        }),
      });
    } catch {}
    if (_0x8107df[_0x4fc792(0x101)] === 0x0)
      return {
        statusCode: 0x1a6,
        body: JSON[_0x4fc792(0x10e)]({ error: _0x4fc792(0xfe) }),
      };
    const _0x2c0cee = _0x8107df["filter"](
      (_0x5c3651) => _0x5c3651[_0x4fc792(0xf7)][_0x4fc792(0x101)] <= _0xf5a3e6,
    );
    let _0x1776d9;
    _0x2c0cee[_0x4fc792(0x101)] > 0x0
      ? (_0x1776d9 = _0x2c0cee["reduce"]((_0x36d241, _0x9a129b) =>
          _0x9a129b[_0x4fc792(0xf7)][_0x4fc792(0x101)] >
          _0x36d241[_0x4fc792(0xf7)][_0x4fc792(0x101)]
            ? _0x9a129b
            : _0x36d241,
        ))
      : (_0x1776d9 = _0x8107df["reduce"]((_0x595cc1, _0x322987) =>
          _0x322987["buf"][_0x4fc792(0x101)] <
          _0x595cc1[_0x4fc792(0xf7)][_0x4fc792(0x101)]
            ? _0x322987
            : _0x595cc1,
        ));
    const _0x3f6903 = _0x1776d9[_0x4fc792(0x123)] ? "zip" : _0x4538e1,
      _0x20da64 = _0x1776d9[_0x4fc792(0x123)]
        ? "application/zip"
        : "application/octet-stream";
    return {
      statusCode: 0xc8,
      headers: { "Content-Type": _0x4fc792(0x107) },
      body: JSON["stringify"]({
        data: _0x1776d9[_0x4fc792(0xf7)][_0x4fc792(0xf8)]("base64"),
        mime: _0x20da64,
        ext: _0x3f6903,
        size: _0x1776d9[_0x4fc792(0xf7)]["length"],
      }),
    };
  } catch (_0x4cc26b) {
    return (
      console[_0x4fc792(0x103)](_0x4fc792(0x104), _0x4cc26b[_0x4fc792(0x118)]),
      {
        statusCode: 0x1f4,
        body: JSON["stringify"]({ error: _0x4cc26b[_0x4fc792(0x118)] }),
      }
    );
  }
};
