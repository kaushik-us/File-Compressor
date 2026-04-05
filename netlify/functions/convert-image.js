"use strict";
const _0x16f11a = _0xb690;
(function (_0x4fb344, _0x3445ab) {
  const _0x19e603 = _0xb690,
    _0x2d6e04 = _0x4fb344();
  while (!![]) {
    try {
      const _0x44c538 =
        -parseInt(_0x19e603(0x203)) / 0x1 +
        parseInt(_0x19e603(0x202)) / 0x2 +
        (parseInt(_0x19e603(0x216)) / 0x3) *
          (parseInt(_0x19e603(0x1f9)) / 0x4) +
        parseInt(_0x19e603(0x211)) / 0x5 +
        (-parseInt(_0x19e603(0x204)) / 0x6) *
          (-parseInt(_0x19e603(0x20e)) / 0x7) +
        (parseInt(_0x19e603(0x213)) / 0x8) *
          (-parseInt(_0x19e603(0x1fe)) / 0x9) +
        -parseInt(_0x19e603(0x20c)) / 0xa;
      if (_0x44c538 === _0x3445ab) break;
      else _0x2d6e04["push"](_0x2d6e04["shift"]());
    } catch (_0x2d9fd0) {
      _0x2d6e04["push"](_0x2d6e04["shift"]());
    }
  }
})(_0x52ee, 0x50946);
const sharp = require(_0x16f11a(0x1eb)),
  busboy = require(_0x16f11a(0x1f0));
function parseMultipart(_0x42f675) {
  return new Promise((_0x15ad12, _0x40c7fa) => {
    const _0x30784c = _0xb690,
      _0x2dfcde =
        _0x42f675[_0x30784c(0x206)][_0x30784c(0x1ff)] ||
        _0x42f675[_0x30784c(0x206)][_0x30784c(0x21e)] ||
        "",
      _0x23a2e2 = busboy({ headers: { "content-type": _0x2dfcde } });
    let _0x23182e = null,
      _0x6a9907 = "",
      _0x304edf = "";
    (_0x23a2e2["on"](_0x30784c(0x20d), (_0x4180e3, _0x21edb5, _0x2e0487) => {
      const _0x53a2b3 = _0x30784c;
      _0x6a9907 = _0x2e0487[_0x53a2b3(0x207)] || "";
      const _0x3e5f37 = [];
      (_0x21edb5["on"](_0x53a2b3(0x218), (_0xd65bdf) =>
        _0x3e5f37[_0x53a2b3(0x1ee)](_0xd65bdf),
      ),
        _0x21edb5["on"]("end", () => {
          _0x23182e = Buffer["concat"](_0x3e5f37);
        }));
    }),
      _0x23a2e2["on"](_0x30784c(0x1fb), (_0x1b023f, _0x1aaff7) => {
        const _0x2c4d6c = _0x30784c;
        if (_0x1b023f === _0x2c4d6c(0x1f7))
          _0x304edf = _0x1aaff7[_0x2c4d6c(0x1f5)]()[_0x2c4d6c(0x1e5)](
            /^\./,
            "",
          );
      }),
      _0x23a2e2["on"](_0x30784c(0x1fd), () =>
        _0x15ad12({
          fileBuffer: _0x23182e,
          filename: _0x6a9907,
          origExt: _0x304edf,
        }),
      ),
      _0x23a2e2["on"]("error", _0x40c7fa));
    const _0x2f4709 = _0x42f675[_0x30784c(0x1e9)]
      ? Buffer[_0x30784c(0x1f2)](_0x42f675[_0x30784c(0x219)], "base64")
      : Buffer["from"](_0x42f675[_0x30784c(0x219)] || "");
    (_0x23a2e2[_0x30784c(0x214)](_0x2f4709), _0x23a2e2[_0x30784c(0x215)]());
  });
}
function _0xb690(_0x5489e0, _0x4fb50f) {
  _0x5489e0 = _0x5489e0 - 0x1e2;
  const _0x52ee69 = _0x52ee();
  let _0xb690b9 = _0x52ee69[_0x5489e0];
  return _0xb690b9;
}
function fmtInfo(_0x21833d) {
  const _0x4762be = _0x16f11a;
  if ([_0x4762be(0x20b), "jpeg", _0x4762be(0x1f1)]["includes"](_0x21833d))
    return {
      fmt: _0x4762be(0x205),
      mime: "image/jpeg",
      outExt: _0x4762be(0x20b),
    };
  if (_0x21833d === _0x4762be(0x1e6))
    return {
      fmt: _0x4762be(0x1e6),
      mime: _0x4762be(0x20f),
      outExt: _0x4762be(0x1e6),
    };
  if (_0x21833d === _0x4762be(0x1ed))
    return { fmt: "webp", mime: _0x4762be(0x20a), outExt: _0x4762be(0x1ed) };
  if (_0x21833d === "avif")
    return { fmt: "avif", mime: "image/avif", outExt: _0x4762be(0x1e4) };
  if (_0x21833d === "gif")
    return { fmt: _0x4762be(0x210), mime: "image/gif", outExt: "gif" };
  if ([_0x4762be(0x1fc), _0x4762be(0x212)][_0x4762be(0x21c)](_0x21833d))
    return { fmt: "tiff", mime: _0x4762be(0x21d), outExt: "tiff" };
  return {
    fmt: _0x4762be(0x205),
    mime: _0x4762be(0x1ec),
    outExt: _0x4762be(0x20b),
  };
}
async function encodeAs(_0x2c189f, _0xcd6e2d, _0x3156c1) {
  const _0x566010 = _0x16f11a;
  let _0x567fa6 = sharp(_0x2c189f, {
    failOn: _0x566010(0x1e7),
    limitInputPixels: ![],
  });
  switch (_0xcd6e2d) {
    case _0x566010(0x205):
      _0x567fa6 = _0x567fa6[_0x566010(0x205)]({
        quality: _0x3156c1,
        mozjpeg: !![],
        chromaSubsampling: _0x3156c1 >= 0x50 ? _0x566010(0x21a) : "4:2:0",
        trellisQuantisation: !![],
        overshootDeringing: !![],
        optimiseScans: !![],
        optimiseCoding: !![],
      });
      break;
    case _0x566010(0x1e6):
      _0x567fa6 = _0x567fa6[_0x566010(0x1e6)]({
        quality: _0x3156c1,
        compressionLevel: 0x9,
        palette: !![],
        dither: 0x1,
        effort: 0xa,
        adaptiveFiltering: !![],
      });
      break;
    case "webp":
      _0x567fa6 = _0x567fa6[_0x566010(0x1ed)]({
        quality: _0x3156c1,
        effort: 0x6,
        smartSubsample: !![],
        sharpness: 0x2,
      });
      break;
    case _0x566010(0x1e4):
      _0x567fa6 = _0x567fa6["avif"]({
        quality: _0x3156c1,
        effort: 0x9,
        chromaSubsampling: "4:2:0",
      });
      break;
    case _0x566010(0x210):
      _0x567fa6 = _0x567fa6[_0x566010(0x210)]({
        effort: 0xa,
        dither: 0x1,
        colours: Math[_0x566010(0x1ef)](
          0x2,
          Math[_0x566010(0x1e3)](
            0x100,
            Math[_0x566010(0x1f8)](_0x3156c1 * 2.56),
          ),
        ),
      });
      break;
    case _0x566010(0x1fc):
      _0x567fa6 = _0x567fa6["tiff"]({
        quality: _0x3156c1,
        compression: _0x566010(0x217),
      });
      break;
    default:
      _0x567fa6 = _0x567fa6[_0x566010(0x205)]({
        quality: _0x3156c1,
        mozjpeg: !![],
      });
  }
  return _0x567fa6[_0x566010(0x21f)]();
}
exports[_0x16f11a(0x201)] = async (_0x311ef0) => {
  const _0x1c9b59 = _0x16f11a;
  if (_0x311ef0["httpMethod"] !== _0x1c9b59(0x200))
    return {
      statusCode: 0x195,
      body: JSON[_0x1c9b59(0x208)]({ error: _0x1c9b59(0x1fa) }),
    };
  try {
    const { fileBuffer: _0x78b417, origExt: _0x1dec51 } =
      await parseMultipart(_0x311ef0);
    if (!_0x78b417)
      return {
        statusCode: 0x190,
        body: JSON["stringify"]({ error: "Missing\x20file." }),
      };
    const _0x3baa48 = _0x78b417[_0x1c9b59(0x1ea)],
      {
        fmt: _0x3c5b1b,
        mime: _0x4b5945,
        outExt: _0x5c139b,
      } = fmtInfo(_0x1dec51 || _0x1c9b59(0x20b)),
      _0x179fc2 =
        _0x3c5b1b === _0x1c9b59(0x1ed) || _0x3c5b1b === _0x1c9b59(0x1e4)
          ? 0xa
          : 0x14;
    let _0x4530f3 = _0x179fc2,
      _0x379e8a = 0x5f,
      _0x3ffac4 = null;
    for (let _0x1772e0 = 0x0; _0x1772e0 < 0xe; _0x1772e0++) {
      const _0x30fa56 = Math[_0x1c9b59(0x1f8)]((_0x4530f3 + _0x379e8a) / 0x2);
      let _0x414260;
      try {
        _0x414260 = await encodeAs(_0x78b417, _0x3c5b1b, _0x30fa56);
      } catch {
        _0x379e8a = _0x30fa56 - 0x1;
        continue;
      }
      _0x414260[_0x1c9b59(0x1ea)] <= _0x3baa48
        ? ((_0x3ffac4 = _0x414260), (_0x4530f3 = _0x30fa56 + 0x1))
        : (_0x379e8a = _0x30fa56 - 0x1);
      if (_0x4530f3 > _0x379e8a) break;
    }
    if (!_0x3ffac4)
      try {
        _0x3ffac4 = await encodeAs(_0x78b417, _0x3c5b1b, _0x179fc2);
      } catch (_0x46d61b) {
        return {
          statusCode: 0x1a6,
          body: JSON[_0x1c9b59(0x208)]({
            error: "Conversion\x20failed:\x20" + _0x46d61b[_0x1c9b59(0x21b)],
          }),
        };
      }
    const _0x1bb64c = await sharp(_0x3ffac4, { failOn: _0x1c9b59(0x1e7) })[
      _0x1c9b59(0x1f4)
    ]();
    return {
      statusCode: 0xc8,
      headers: { "Content-Type": "application/json" },
      body: JSON[_0x1c9b59(0x208)]({
        data: _0x3ffac4["toString"](_0x1c9b59(0x1e2)),
        mime: _0x4b5945,
        ext: _0x5c139b,
        size: _0x3ffac4[_0x1c9b59(0x1ea)],
        width: _0x1bb64c[_0x1c9b59(0x209)],
        height: _0x1bb64c[_0x1c9b59(0x1f6)],
      }),
    };
  } catch (_0x5333c7) {
    return (
      console[_0x1c9b59(0x1e8)](_0x1c9b59(0x1f3), _0x5333c7[_0x1c9b59(0x21b)]),
      {
        statusCode: 0x1f4,
        body: JSON[_0x1c9b59(0x208)]({ error: _0x5333c7[_0x1c9b59(0x21b)] }),
      }
    );
  }
};
function _0x52ee() {
  const _0x2141c5 = [
    "image/jpeg",
    "webp",
    "push",
    "max",
    "busboy",
    "jfif",
    "from",
    "[convert-image]",
    "metadata",
    "toLowerCase",
    "height",
    "origExt",
    "round",
    "10204eIwMpL",
    "Method\x20not\x20allowed",
    "field",
    "tiff",
    "finish",
    "18981QXtCyW",
    "content-type",
    "POST",
    "handler",
    "226568iJQnhj",
    "143448rsfcrC",
    "1856226HkQdnC",
    "jpeg",
    "headers",
    "filename",
    "stringify",
    "width",
    "image/webp",
    "jpg",
    "7589750YlHdAC",
    "file",
    "7lQUVSu",
    "image/png",
    "gif",
    "3172175jXNqgf",
    "tif",
    "912IoLphW",
    "write",
    "end",
    "489TkctAJ",
    "lzw",
    "data",
    "body",
    "4:4:4",
    "message",
    "includes",
    "image/tiff",
    "Content-Type",
    "toBuffer",
    "base64",
    "min",
    "avif",
    "replace",
    "png",
    "none",
    "error",
    "isBase64Encoded",
    "length",
    "sharp",
  ];
  _0x52ee = function () {
    return _0x2141c5;
  };
  return _0x52ee();
}
