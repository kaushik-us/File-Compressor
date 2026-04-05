"use strict";
const _0x5de98f = _0x845d;
function _0x845d(_0x2e708b, _0x3ef168) {
  _0x2e708b = _0x2e708b - 0x10e;
  const _0x29129f = _0x2912();
  let _0x845df1 = _0x29129f[_0x2e708b];
  return _0x845df1;
}
(function (_0x54a68f, _0x211f95) {
  const _0x261690 = _0x845d,
    _0x4d7b68 = _0x54a68f();
  while (!![]) {
    try {
      const _0x57c8e6 =
        (parseInt(_0x261690(0x11b)) / 0x1) *
          (parseInt(_0x261690(0x115)) / 0x2) +
        (-parseInt(_0x261690(0x132)) / 0x3) *
          (parseInt(_0x261690(0x137)) / 0x4) +
        -parseInt(_0x261690(0x133)) / 0x5 +
        (-parseInt(_0x261690(0x131)) / 0x6) *
          (-parseInt(_0x261690(0x110)) / 0x7) +
        (parseInt(_0x261690(0x12f)) / 0x8) *
          (-parseInt(_0x261690(0x10e)) / 0x9) +
        parseInt(_0x261690(0x127)) / 0xa +
        (-parseInt(_0x261690(0x11f)) / 0xb) *
          (-parseInt(_0x261690(0x117)) / 0xc);
      if (_0x57c8e6 === _0x211f95) break;
      else _0x4d7b68["push"](_0x4d7b68["shift"]());
    } catch (_0x498eab) {
      _0x4d7b68["push"](_0x4d7b68["shift"]());
    }
  }
})(_0x2912, 0x4be64);
const { PDFDocument } = require(_0x5de98f(0x12c)),
  busboy = require(_0x5de98f(0x124));
function _0x2912() {
  const _0x1ba49c = [
    "4928260DOtojY",
    "pdf",
    "data",
    "handler",
    "Method\x20not\x20allowed",
    "pdf-lib",
    "setTitle",
    "concat",
    "8tGGngW",
    "setKeywords",
    "1836234UsJQnk",
    "75ESTLqn",
    "1595055xcncoe",
    "body",
    "content-type",
    "stringify",
    "68916wbCycK",
    "Content-Type",
    "error",
    "file",
    "setProducer",
    "968958UiIoRl",
    "headers",
    "7jRGTPr",
    "setSubject",
    "application/json",
    "base64",
    "setAuthor",
    "28MeErow",
    "toString",
    "276BOuoiq",
    "setCreator",
    "finish",
    "write",
    "13709oeIloO",
    "message",
    "from",
    "application/pdf",
    "84887BBknHU",
    "load",
    "save",
    "target",
    "isBase64Encoded",
    "busboy",
    "POST",
    "httpMethod",
  ];
  _0x2912 = function () {
    return _0x1ba49c;
  };
  return _0x2912();
}
function parseMultipart(_0x119de5) {
  return new Promise((_0x1ffa90, _0x424c09) => {
    const _0x490b37 = _0x845d,
      _0x118f47 =
        _0x119de5[_0x490b37(0x10f)][_0x490b37(0x135)] ||
        _0x119de5[_0x490b37(0x10f)][_0x490b37(0x138)] ||
        "",
      _0x8071e3 = busboy({ headers: { "content-type": _0x118f47 } });
    let _0x52b9cd = null,
      _0x250b5d = 0x0;
    (_0x8071e3["on"](_0x490b37(0x13a), (_0xe2b307, _0x26e2d1) => {
      const _0x1fa5e6 = _0x490b37,
        _0x5b72ae = [];
      (_0x26e2d1["on"](_0x1fa5e6(0x129), (_0x5d5def) =>
        _0x5b72ae["push"](_0x5d5def),
      ),
        _0x26e2d1["on"]("end", () => {
          const _0x395b42 = _0x1fa5e6;
          _0x52b9cd = Buffer[_0x395b42(0x12e)](_0x5b72ae);
        }));
    }),
      _0x8071e3["on"]("field", (_0x2d813b, _0x1b884c) => {
        const _0x3a8c52 = _0x490b37;
        if (_0x2d813b === _0x3a8c52(0x122))
          _0x250b5d = parseInt(_0x1b884c, 0xa);
      }),
      _0x8071e3["on"](_0x490b37(0x119), () =>
        _0x1ffa90({ fileBuffer: _0x52b9cd, target: _0x250b5d }),
      ),
      _0x8071e3["on"](_0x490b37(0x139), _0x424c09));
    const _0x5d32b2 = _0x119de5[_0x490b37(0x123)]
      ? Buffer[_0x490b37(0x11d)](_0x119de5[_0x490b37(0x134)], _0x490b37(0x113))
      : Buffer[_0x490b37(0x11d)](_0x119de5[_0x490b37(0x134)] || "");
    (_0x8071e3[_0x490b37(0x11a)](_0x5d32b2), _0x8071e3["end"]());
  });
}
exports[_0x5de98f(0x12a)] = async (_0x286e47) => {
  const _0x1d591c = _0x5de98f;
  if (_0x286e47[_0x1d591c(0x126)] !== _0x1d591c(0x125))
    return {
      statusCode: 0x195,
      body: JSON[_0x1d591c(0x136)]({ error: _0x1d591c(0x12b) }),
    };
  try {
    const { fileBuffer: _0x489345, target: _0x1b503f } =
      await parseMultipart(_0x286e47);
    if (!_0x489345 || !_0x1b503f || _0x1b503f <= 0x0)
      return {
        statusCode: 0x190,
        body: JSON["stringify"]({ error: "Missing\x20file\x20or\x20target." }),
      };
    const _0x36ceb8 = await PDFDocument[_0x1d591c(0x120)](_0x489345, {
      ignoreEncryption: !![],
      updateMetadata: ![],
    });
    (_0x36ceb8[_0x1d591c(0x12d)](""),
      _0x36ceb8[_0x1d591c(0x114)](""),
      _0x36ceb8[_0x1d591c(0x111)](""),
      _0x36ceb8[_0x1d591c(0x130)]([]),
      _0x36ceb8[_0x1d591c(0x13b)](""),
      _0x36ceb8[_0x1d591c(0x118)](""));
    const _0xb94711 = await _0x36ceb8[_0x1d591c(0x121)]({
        useObjectStreams: !![],
        addDefaultPage: ![],
        objectsPerTick: Infinity,
      }),
      _0x158ace = Buffer[_0x1d591c(0x11d)](_0xb94711);
    return {
      statusCode: 0xc8,
      headers: { "Content-Type": _0x1d591c(0x112) },
      body: JSON[_0x1d591c(0x136)]({
        data: _0x158ace[_0x1d591c(0x116)]("base64"),
        mime: _0x1d591c(0x11e),
        ext: _0x1d591c(0x128),
        size: _0x158ace["length"],
      }),
    };
  } catch (_0x18b28b) {
    return (
      console[_0x1d591c(0x139)]("[compress-pdf]", _0x18b28b[_0x1d591c(0x11c)]),
      {
        statusCode: 0x1f4,
        body: JSON[_0x1d591c(0x136)]({ error: _0x18b28b[_0x1d591c(0x11c)] }),
      }
    );
  }
};
