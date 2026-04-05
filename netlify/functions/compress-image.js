"use strict";
const _0x12a6cf = _0x152f;
(function (_0x229ed2, _0x529b77) {
  const _0xd6d8d2 = _0x152f,
    _0x2e37da = _0x229ed2();
  while (!![]) {
    try {
      const _0x2f2303 =
        (parseInt(_0xd6d8d2(0x16b)) / 0x1) *
          (parseInt(_0xd6d8d2(0x192)) / 0x2) +
        (parseInt(_0xd6d8d2(0x15f)) / 0x3) *
          (parseInt(_0xd6d8d2(0x19c)) / 0x4) +
        (-parseInt(_0xd6d8d2(0x180)) / 0x5) *
          (parseInt(_0xd6d8d2(0x19a)) / 0x6) +
        (-parseInt(_0xd6d8d2(0x168)) / 0x7) *
          (parseInt(_0xd6d8d2(0x15d)) / 0x8) +
        parseInt(_0xd6d8d2(0x187)) / 0x9 +
        (parseInt(_0xd6d8d2(0x190)) / 0xa) *
          (-parseInt(_0xd6d8d2(0x15b)) / 0xb) +
        -parseInt(_0xd6d8d2(0x183)) / 0xc;
      if (_0x2f2303 === _0x529b77) break;
      else _0x2e37da["push"](_0x2e37da["shift"]());
    } catch (_0x112918) {
      _0x2e37da["push"](_0x2e37da["shift"]());
    }
  }
})(_0x43df, 0xe9ba2);
function _0x43df() {
  const _0xbeee35 = [
    "base64",
    "file",
    "Cannot\x20reach\x20target\x20size\x20—\x20try\x20a\x20larger\x20target.",
    "1891078bOsSWy",
    "filename",
    "length",
    "8scVvvL",
    "body",
    "webp",
    "round",
    "target",
    "4:2:0",
    "toLowerCase",
    "sharp",
    "pop",
    "Missing\x20file\x20or\x20target.",
    "4:4:4",
    "sqrt",
    "content-type",
    "image/avif",
    "Method\x20not\x20allowed",
    "[compress-image]",
    "stringify",
    "lanczos3",
    "avif",
    "toString",
    "kernel",
    "11125NwWlVY",
    "error",
    "image/png",
    "6360264pkpBrg",
    "write",
    "resize",
    "jpg",
    "16378848ZtEeng",
    "isBase64Encoded",
    "height",
    "push",
    "png",
    "httpMethod",
    "jpeg",
    "image/jpeg",
    "width",
    "10970vurTlv",
    "mime",
    "323956pldQgh",
    "handler",
    "gif",
    "end",
    "busboy",
    "none",
    "toBuffer",
    "Cannot\x20read\x20image:\x20",
    "4668mzRCgT",
    "max",
    "52CXMuxc",
    "891cpuoOG",
    "includes",
    "16tllARl",
    "concat",
    "168897DLEROe",
    "application/json",
    "message",
    "from",
    "data",
    "image/webp",
  ];
  _0x43df = function () {
    return _0xbeee35;
  };
  return _0x43df();
}
const sharp = require(_0x12a6cf(0x172)),
  busboy = require(_0x12a6cf(0x196));
function outputFormat(_0x15365d) {
  const _0x1a9699 = _0x12a6cf;
  if (_0x15365d === _0x1a9699(0x18b))
    return {
      fmt: _0x1a9699(0x18b),
      mime: _0x1a9699(0x182),
      outExt: _0x1a9699(0x18b),
    };
  if (_0x15365d === _0x1a9699(0x16d))
    return {
      fmt: _0x1a9699(0x16d),
      mime: _0x1a9699(0x164),
      outExt: _0x1a9699(0x16d),
    };
  if (_0x15365d === _0x1a9699(0x17d))
    return {
      fmt: _0x1a9699(0x17d),
      mime: _0x1a9699(0x178),
      outExt: _0x1a9699(0x17d),
    };
  if (_0x15365d === _0x1a9699(0x194))
    return {
      fmt: _0x1a9699(0x194),
      mime: "image/gif",
      outExt: _0x1a9699(0x194),
    };
  return { fmt: "webp", mime: _0x1a9699(0x164), outExt: _0x1a9699(0x16d) };
}
async function sharpEncode(
  _0x555bb5,
  _0xff747,
  _0x2f248c,
  _0xa2451,
  _0x3cc362,
) {
  const _0xee34fe = _0x12a6cf;
  let _0x5efdb1 = sharp(_0x555bb5, {
    failOn: _0xee34fe(0x197),
    limitInputPixels: ![],
  });
  _0xa2451 &&
    _0x3cc362 &&
    (_0x5efdb1 = _0x5efdb1[_0xee34fe(0x185)](_0xa2451, _0x3cc362, {
      fit: "inside",
      withoutEnlargement: !![],
      kernel: sharp[_0xee34fe(0x17f)][_0xee34fe(0x17c)],
    }));
  switch (_0xff747) {
    case _0xee34fe(0x18d):
      _0x5efdb1 = _0x5efdb1["jpeg"]({
        quality: _0x2f248c,
        mozjpeg: !![],
        chromaSubsampling: _0x2f248c >= 0x50 ? _0xee34fe(0x175) : "4:2:0",
        trellisQuantisation: !![],
        overshootDeringing: !![],
        optimiseScans: !![],
        optimiseCoding: !![],
      });
      break;
    case "png":
      _0x5efdb1 = _0x5efdb1[_0xee34fe(0x18b)]({
        quality: _0x2f248c,
        compressionLevel: 0x9,
        palette: !![],
        dither: 0x1,
        effort: 0xa,
        adaptiveFiltering: !![],
      });
      break;
    case "webp":
      _0x5efdb1 = _0x5efdb1[_0xee34fe(0x16d)]({
        quality: _0x2f248c,
        effort: 0x6,
        smartSubsample: !![],
        sharpness: 0x2,
      });
      break;
    case "avif":
      _0x5efdb1 = _0x5efdb1["avif"]({
        quality: _0x2f248c,
        effort: 0x9,
        chromaSubsampling: _0xee34fe(0x170),
      });
      break;
    case "gif":
      _0x5efdb1 = _0x5efdb1[_0xee34fe(0x194)]({
        effort: 0xa,
        dither: 0x1,
        colours: Math["max"](
          0x2,
          Math["min"](0x100, Math[_0xee34fe(0x16e)](_0x2f248c * 2.56)),
        ),
        interFrameMaxError: _0x2f248c < 0x32 ? 0x8 : 0x0,
      });
      break;
    default:
      _0x5efdb1 = _0x5efdb1[_0xee34fe(0x16d)]({
        quality: _0x2f248c,
        effort: 0x6,
        smartSubsample: !![],
        sharpness: 0x2,
      });
  }
  return _0x5efdb1[_0xee34fe(0x198)]();
}
async function binarySearchQuality(
  _0x389567,
  _0x354bd2,
  _0x343e29,
  _0xf21848,
  _0x4ed426,
) {
  const _0x3a5ceb = _0x12a6cf,
    _0x14db15 = _0x354bd2 === "webp" || _0x354bd2 === "avif" ? 0xa : 0xf;
  let _0x483121 = _0x14db15,
    _0x6e9483 = 0x5c,
    _0x37814d = null;
  for (let _0x565fb7 = 0x0; _0x565fb7 < 0xe; _0x565fb7++) {
    const _0x471eac = Math[_0x3a5ceb(0x16e)]((_0x483121 + _0x6e9483) / 0x2);
    let _0x4fc470;
    try {
      _0x4fc470 = await sharpEncode(
        _0x389567,
        _0x354bd2,
        _0x471eac,
        _0xf21848,
        _0x4ed426,
      );
    } catch {
      _0x6e9483 = _0x471eac - 0x1;
      continue;
    }
    _0x4fc470["length"] <= _0x343e29
      ? ((_0x37814d = _0x4fc470), (_0x483121 = _0x471eac + 0x1))
      : (_0x6e9483 = _0x471eac - 0x1);
    if (_0x483121 > _0x6e9483) break;
  }
  return _0x37814d;
}
async function estimateScale(
  _0x16a654,
  _0x5aa656,
  _0x5b5c69,
  _0xc678ef,
  _0x477e70,
) {
  const _0x2b6589 = _0x12a6cf,
    _0x21b2fb = Math[_0x2b6589(0x19b)](
      0x1,
      Math[_0x2b6589(0x16e)](_0xc678ef * 0.5),
    ),
    _0x41e7e1 = Math[_0x2b6589(0x19b)](
      0x1,
      Math[_0x2b6589(0x16e)](_0x477e70 * 0.5),
    );
  try {
    const _0x13a51c = await sharpEncode(
        _0x16a654,
        _0x5aa656,
        0x32,
        _0x21b2fb,
        _0x41e7e1,
      ),
      _0x43b7ae = _0x5b5c69 / _0x13a51c["length"],
      _0x3cc569 = Math[_0x2b6589(0x176)](_0x43b7ae * 0.25);
    return Math["min"](0x1, Math[_0x2b6589(0x19b)](0.05, _0x3cc569));
  } catch {
    return 0.5;
  }
}
function parseMultipart(_0x175fda) {
  return new Promise((_0x35e927, _0x516edc) => {
    const _0x338c5f = _0x152f,
      _0x120800 =
        _0x175fda["headers"][_0x338c5f(0x177)] ||
        _0x175fda["headers"]["Content-Type"] ||
        "",
      _0xb43f33 = busboy({ headers: { "content-type": _0x120800 } });
    let _0x3e7e9a = null,
      _0x24433b = "",
      _0x1fa06f = 0x0;
    (_0xb43f33["on"](_0x338c5f(0x166), (_0x4decbe, _0x5b8cba, _0x3045cc) => {
      const _0x5c180e = _0x338c5f;
      _0x24433b = _0x3045cc[_0x5c180e(0x169)] || "";
      const _0x4ce3b4 = [];
      (_0x5b8cba["on"](_0x5c180e(0x163), (_0x58f67a) =>
        _0x4ce3b4[_0x5c180e(0x18a)](_0x58f67a),
      ),
        _0x5b8cba["on"](_0x5c180e(0x195), () => {
          const _0x24dcfd = _0x5c180e;
          _0x3e7e9a = Buffer[_0x24dcfd(0x15e)](_0x4ce3b4);
        }));
    }),
      _0xb43f33["on"]("field", (_0x40c678, _0x541637) => {
        const _0x1292b9 = _0x338c5f;
        if (_0x40c678 === _0x1292b9(0x16f))
          _0x1fa06f = parseInt(_0x541637, 0xa);
      }),
      _0xb43f33["on"]("finish", () =>
        _0x35e927({
          fileBuffer: _0x3e7e9a,
          filename: _0x24433b,
          target: _0x1fa06f,
        }),
      ),
      _0xb43f33["on"](_0x338c5f(0x181), _0x516edc));
    const _0x4a88a2 = _0x175fda[_0x338c5f(0x188)]
      ? Buffer[_0x338c5f(0x162)](_0x175fda[_0x338c5f(0x16c)], _0x338c5f(0x165))
      : Buffer["from"](_0x175fda[_0x338c5f(0x16c)] || "");
    (_0xb43f33[_0x338c5f(0x184)](_0x4a88a2), _0xb43f33[_0x338c5f(0x195)]());
  });
}
function _0x152f(_0x59b2b5, _0x314aea) {
  _0x59b2b5 = _0x59b2b5 - 0x15b;
  const _0x43df35 = _0x43df();
  let _0x152f70 = _0x43df35[_0x59b2b5];
  return _0x152f70;
}
exports[_0x12a6cf(0x193)] = async (_0x45602f) => {
  const _0x2969e7 = _0x12a6cf;
  if (_0x45602f[_0x2969e7(0x18c)] !== "POST")
    return {
      statusCode: 0x195,
      body: JSON[_0x2969e7(0x17b)]({ error: _0x2969e7(0x179) }),
    };
  try {
    const {
      fileBuffer: _0x3b25aa,
      filename: _0x140129,
      target: _0x39bf0c,
    } = await parseMultipart(_0x45602f);
    if (!_0x3b25aa || !_0x39bf0c || _0x39bf0c <= 0x0)
      return {
        statusCode: 0x190,
        body: JSON["stringify"]({ error: _0x2969e7(0x174) }),
      };
    const _0x21cd5c = (_0x140129["split"](".")[_0x2969e7(0x173)]() || "")[
        _0x2969e7(0x171)
      ](),
      {
        fmt: _0x95c50a,
        mime: _0x2479ac,
        outExt: _0x5e5bed,
      } = outputFormat(_0x21cd5c);
    let _0x40c4b6;
    try {
      _0x40c4b6 = await sharp(_0x3b25aa, {
        failOn: _0x2969e7(0x197),
        limitInputPixels: ![],
      })["metadata"]();
    } catch (_0x375395) {
      return {
        statusCode: 0x1a6,
        body: JSON["stringify"]({
          error: _0x2969e7(0x199) + _0x375395[_0x2969e7(0x161)],
        }),
      };
    }
    const _0x19cfe0 = _0x40c4b6[_0x2969e7(0x18f)] || 0x1,
      _0x42affe = _0x40c4b6[_0x2969e7(0x189)] || 0x1,
      _0x14e8a0 = await estimateScale(
        _0x3b25aa,
        _0x95c50a,
        _0x39bf0c,
        _0x19cfe0,
        _0x42affe,
      ),
      _0x1c9cb7 = [0x1];
    for (const _0x2f50da of [1.2, 0x1, 0.85, 0.7, 0.55, 0.4]) {
      const _0x1b52b3 = Math["min"](
        0x1,
        Math["max"](0.05, _0x14e8a0 * _0x2f50da),
      );
      if (!_0x1c9cb7[_0x2969e7(0x15c)](_0x1b52b3))
        _0x1c9cb7[_0x2969e7(0x18a)](_0x1b52b3);
    }
    for (const _0x2a17fa of [0.15, 0.1, 0.07, 0.05]) {
      if (!_0x1c9cb7[_0x2969e7(0x15c)](_0x2a17fa)) _0x1c9cb7["push"](_0x2a17fa);
    }
    let _0x4b980b = null;
    for (const _0x36f4b6 of _0x1c9cb7) {
      const _0xcfdbfb =
          _0x36f4b6 < 0.99
            ? Math["max"](0x1, Math[_0x2969e7(0x16e)](_0x19cfe0 * _0x36f4b6))
            : null,
        _0x1789d0 =
          _0x36f4b6 < 0.99
            ? Math[_0x2969e7(0x19b)](
                0x1,
                Math[_0x2969e7(0x16e)](_0x42affe * _0x36f4b6),
              )
            : null,
        _0x50c8d3 = await binarySearchQuality(
          _0x3b25aa,
          _0x95c50a,
          _0x39bf0c,
          _0xcfdbfb,
          _0x1789d0,
        );
      if (_0x50c8d3) {
        _0x4b980b = { buf: _0x50c8d3, mime: _0x2479ac, outExt: _0x5e5bed };
        break;
      }
    }
    if (!_0x4b980b && _0x95c50a === _0x2969e7(0x16d))
      for (const _0x255cc4 of _0x1c9cb7) {
        const _0x518d65 =
            _0x255cc4 < 0.99
              ? Math[_0x2969e7(0x19b)](
                  0x1,
                  Math[_0x2969e7(0x16e)](_0x19cfe0 * _0x255cc4),
                )
              : null,
          _0x11d8e2 =
            _0x255cc4 < 0.99
              ? Math[_0x2969e7(0x19b)](
                  0x1,
                  Math[_0x2969e7(0x16e)](_0x42affe * _0x255cc4),
                )
              : null,
          _0x466415 = await binarySearchQuality(
            _0x3b25aa,
            "jpeg",
            _0x39bf0c,
            _0x518d65,
            _0x11d8e2,
          );
        if (_0x466415) {
          _0x4b980b = {
            buf: _0x466415,
            mime: _0x2969e7(0x18e),
            outExt: _0x2969e7(0x186),
          };
          break;
        }
      }
    if (!_0x4b980b)
      return {
        statusCode: 0x1a6,
        body: JSON[_0x2969e7(0x17b)]({ error: _0x2969e7(0x167) }),
      };
    return {
      statusCode: 0xc8,
      headers: { "Content-Type": _0x2969e7(0x160) },
      body: JSON[_0x2969e7(0x17b)]({
        data: _0x4b980b["buf"][_0x2969e7(0x17e)]("base64"),
        mime: _0x4b980b[_0x2969e7(0x191)],
        ext: _0x4b980b["outExt"],
        size: _0x4b980b["buf"][_0x2969e7(0x16a)],
        origExt: _0x21cd5c,
      }),
    };
  } catch (_0x17a832) {
    return (
      console[_0x2969e7(0x181)](_0x2969e7(0x17a), _0x17a832["message"]),
      {
        statusCode: 0x1f4,
        body: JSON[_0x2969e7(0x17b)]({ error: _0x17a832[_0x2969e7(0x161)] }),
      }
    );
  }
};
