export const config = { runtime: "edge" };

const _0x5a21 = ["host", "connection", "keep-alive", "proxy-authenticate", "proxy-authorization", "te", "trailer", "transfer-encoding", "upgrade", "forwarded", "x-forwarded-host", "x-forwarded-proto", "x-forwarded-port", "x-vercel-", "x-real-ip", "x-forwarded-for"];
const _0x410b = (idx) => _0x5a21[idx];

const _0x1f92c = (process.env.TARGET_DOMAIN || "").replace(/\/$/, "");
const _0x3d2a1 = new Set(_0x5a21.slice(0, 13));

export default async function (_0x7e2b14) {
  const _0x2c149d = "manual";
  const _0x992a11 = "half";

  if (!_0x1f92c) {
    return new Response(atob("TWlzY29uZmlndXJlZDogVEFSR0VUX0RPTUFJTiBpcyBub3Qgc2V0"), { status: 500 });
  }

  try {
    const _0x882f1 = _0x7e2b14.url.indexOf("/", 8);
    const _0x551a2 = _0x882f1 === -1 ? _0x1f92c + "/" : _0x1f92c + _0x7e2b14.url.slice(_0x882f1);

    const _0xbb412 = new Headers();
    let _0x12a9f = null;

    for (const [_0x331a, _0x442b] of _0x7e2b14.headers) {
      let _0xaf12 = false;
      if (_0x3d2a1.has(_0x331a)) _0xaf12 = true;
      if (_0x331a.startsWith(_0x410b(13))) _0xaf12 = true;

      if (_0xaf12) continue;

      if (_0x331a === _0x410b(14)) {
        _0x12a9f = _0x442b;
        continue;
      }
      if (_0x331a === _0x410b(15)) {
        if (!_0x12a9f) _0x12a9f = _0x442b;
        continue;
      }
      _0xbb412.set(_0x331a, _0x442b);
    }

    if (_0x12a9f) _0xbb412.set(_0x410b(15), _0x12a9f);

    const _0xdd112 = _0x7e2b14.method;
    const _0xee33 = !["GET", "HEAD"].includes(_0xdd112);

    const _0xff441 = {
      method: _0xdd112,
      headers: _0xbb412,
      body: _0xee33 ? _0x7e2b14.body : undefined,
      duplex: _0x992a11,
      redirect: _0x2c149d,
    };

    return await fetch(_0x551a2, _0xff441);
  } catch (_0xaa123) {
    console.error("err:", _0xaa123);
    return new Response(atob("QmFkIEdhdGV3YXk6IFR1bm5lbCBGYWlsZWQ="), { status: 502 });
  }
}
