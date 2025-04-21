const a0_0x3f8d48 = a0_0xe4b4;
(function (_0xc95d95, _0x30e195) {
  const _0xe65734 = a0_0xe4b4,
    _0x43f2ad = _0xc95d95();
  while (!![]) {
    try {
      const _0xdd7c8f =
        -parseInt(_0xe65734(0xfd)) / 0x1 +
        (-parseInt(_0xe65734(0x11a)) / 0x2) *
          (parseInt(_0xe65734(0xf7)) / 0x3) +
        (parseInt(_0xe65734(0x125)) / 0x4) *
          (-parseInt(_0xe65734(0x12c)) / 0x5) +
        (-parseInt(_0xe65734(0x116)) / 0x6) *
          (parseInt(_0xe65734(0x11d)) / 0x7) +
        -parseInt(_0xe65734(0x12a)) / 0x8 +
        (parseInt(_0xe65734(0xfe)) / 0x9) * (-parseInt(_0xe65734(0xfc)) / 0xa) +
        parseInt(_0xe65734(0x104)) / 0xb;
      if (_0xdd7c8f === _0x30e195) break;
      else _0x43f2ad["push"](_0x43f2ad["shift"]());
    } catch (_0x1b8430) {
      _0x43f2ad["push"](_0x43f2ad["shift"]());
    }
  }
})(a0_0x35fe, 0xdf9c5);
function a0_0xe4b4(_0x46e0eb, _0x3cebc6) {
  const _0x35fe57 = a0_0x35fe();
  return (
    (a0_0xe4b4 = function (_0xe4b483, _0x529418) {
      _0xe4b483 = _0xe4b483 - 0xec;
      let _0x23682b = _0x35fe57[_0xe4b483];
      return _0x23682b;
    }),
    a0_0xe4b4(_0x46e0eb, _0x3cebc6)
  );
}
const scriptURL =
    "https://script.google.com/macros/s/AKfycbxSTwfbYFbAwAg4P-sIMH7pyuPxVfkaRLmbZqmWQcK_tbDwWcZP8wq75rPVUWvr3LT3cg/exec",
  form = document[a0_0x3f8d48(0x126)][a0_0x3f8d48(0x119)],
  submitButton = document["getElementById"](a0_0x3f8d48(0x12b)),
  skipButton = document[a0_0x3f8d48(0xfa)]("skipRegistration"),
  kidsStar = document["querySelector"](a0_0x3f8d48(0x11f));
document[a0_0x3f8d48(0x13a)](a0_0x3f8d48(0x108), function () {
  const _0xebbbb7 = a0_0x3f8d48,
    _0x4cef58 = new URLSearchParams(window[_0xebbbb7(0x13b)]["search"]),
    _0x2f65b9 = _0x4cef58[_0xebbbb7(0x131)]("score");
  _0x2f65b9 !== null &&
    (showFeedbackForm(_0x2f65b9), checkIfFeedbackAlreadySubmitted());
  if (
    document[_0xebbbb7(0xfa)]("gameFeedbackSection")[_0xebbbb7(0x121)][
      _0xebbbb7(0xf3)
    ] === _0xebbbb7(0x111)
  ) {
    if (skipButton)
      skipButton[_0xebbbb7(0x121)][_0xebbbb7(0xf3)] = _0xebbbb7(0xf4);
  }
}),
  document["addEventListener"](a0_0x3f8d48(0x108), function () {
    const _0x3a9371 = a0_0x3f8d48,
      _0xf20fbf = document[_0x3a9371(0x118)](_0x3a9371(0x10e));
    _0xf20fbf[_0x3a9371(0x13a)]("input", function () {
      const _0x59bf06 = _0x3a9371;
      (this[_0x59bf06(0x135)] = this["value"]["replace"](/\D/g, "")),
        this["value"] !== "" &&
          parseInt(this["value"]) > 0x63 &&
          (alert(_0x59bf06(0x11e)), (this["value"] = ""));
    });
  }),
  document[a0_0x3f8d48(0x13a)](a0_0x3f8d48(0x108), function () {
    const _0xa0f254 = a0_0x3f8d48,
      _0x5de462 = document[_0xa0f254(0x118)](_0xa0f254(0xec));
    _0x5de462[_0xa0f254(0x13a)]("blur", function () {
      const _0x53334a = _0xa0f254,
        _0x3dab58 = this[_0x53334a(0x135)][_0x53334a(0x10a)](),
        _0x3a21d1 = /^[^\s@]+@[^\s@]+\.[^\s@]+$/["test"](_0x3dab58);
      !_0x3a21d1 && _0x3dab58[_0x53334a(0x11c)] > 0x0
        ? ((this[_0x53334a(0x121)]["border"] = "2px\x20solid\x20red"),
          this["setCustomValidity"](_0x53334a(0x123)),
          this[_0x53334a(0x132)]())
        : ((this[_0x53334a(0x121)][_0x53334a(0x137)] = _0x53334a(0x100)),
          this["setCustomValidity"](""));
    });
  });
skipButton &&
  skipButton[a0_0x3f8d48(0x13a)](a0_0x3f8d48(0x129), function () {
    const _0x342bc8 = a0_0x3f8d48;
    localStorage[_0x342bc8(0x130)](_0x342bc8(0x12f), _0x342bc8(0x102)),
      (window[_0x342bc8(0x13b)][_0x342bc8(0xf0)] = "pages/game.html");
  });
function checkIfFeedbackAlreadySubmitted() {
  const _0x19a260 = a0_0x3f8d48;
  localStorage[_0x19a260(0x106)](_0x19a260(0x115)) &&
    ((submitButton[_0x19a260(0xee)] = !![]),
    (submitButton[_0x19a260(0x135)] = _0x19a260(0x10b)),
    (submitButton[_0x19a260(0x121)][_0x19a260(0xf2)] = _0x19a260(0x10d)));
}
document[a0_0x3f8d48(0x13a)](a0_0x3f8d48(0x108), function () {
  const _0x4fb01b = a0_0x3f8d48,
    _0x40a4cd = document["getElementById"](_0x4fb01b(0xef)),
    _0x79ec6c = document[_0x4fb01b(0xfa)](_0x4fb01b(0x120)),
    _0x5a8800 = document[_0x4fb01b(0x118)](_0x4fb01b(0x103));
  function _0x115575(_0x2e6e58) {
    const _0x5f5a1d = _0x4fb01b;
    document[_0x5f5a1d(0x13d)](_0x5f5a1d(0x114))[_0x5f5a1d(0xf6)](
      (_0x384e28) => {
        const _0x27e317 = _0x5f5a1d;
        if (_0x2e6e58)
          (_0x384e28[_0x27e317(0x139)][_0x27e317(0x105)] = "true"),
            _0x384e28["removeAttribute"]("required");
        else
          _0x384e28["dataset"]["required"] === "true" &&
            (_0x384e28[_0x27e317(0x107)](_0x27e317(0x105), _0x27e317(0x102)),
            delete _0x384e28[_0x27e317(0x139)]["required"]);
      },
    );
  }
  _0x40a4cd[_0x4fb01b(0x13a)](_0x4fb01b(0x129), function () {
    const _0x16f039 = _0x4fb01b;
    _0x115575(!![]), (_0x79ec6c[_0x16f039(0x121)][_0x16f039(0xf3)] = "block");
  }),
    _0x5a8800["addEventListener"](_0x4fb01b(0x129), function () {
      const _0x3e0cc3 = _0x4fb01b;
      _0x115575(![]), (_0x79ec6c["style"][_0x3e0cc3(0xf3)] = _0x3e0cc3(0xf4));
    }),
    window[_0x4fb01b(0x13a)](_0x4fb01b(0x129), function (_0x34ccf4) {
      const _0x3b0312 = _0x4fb01b;
      _0x34ccf4[_0x3b0312(0x110)] === _0x79ec6c &&
        (_0x115575(![]),
        (_0x79ec6c[_0x3b0312(0x121)][_0x3b0312(0xf3)] = _0x3b0312(0xf4)));
    });
});
function a0_0x35fe() {
  const _0x4b5ff3 = [
    "disabled",
    "helpButton",
    "href",
    "FullName",
    "backgroundColor",
    "display",
    "none",
    "message",
    "forEach",
    "1681818VukYyo",
    "keydown",
    "Age",
    "getElementById",
    "preventDefault",
    "1440BvrHzm",
    "1700674mekgyV",
    "102807iXlQUy",
    "Submit",
    "2px\x20solid\x20green",
    "body",
    "true",
    ".modal\x20.close",
    "90524808JIYcEl",
    "required",
    "getItem",
    "setAttribute",
    "DOMContentLoaded",
    "registration.html",
    "trim",
    "Feedback\x20Already\x20Submitted",
    "textContent",
    "#ccc",
    "input[name=\x27Age\x27]",
    "error",
    "target",
    "block",
    "There\x20was\x20an\x20error\x20submitting\x20the\x20feedback.\x20Please\x20try\x20again.",
    "\x0a\x20\x20\x20\x20\x20\x20\x20\x20<h2\x20style=\x22text-align:\x20center;\x20padding:\x2020px;\x22>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20✅\x20Thank\x20you\x20for\x20playing!\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20<br\x20/><br\x20/>\x0a\x20\x20\x20\x20\x20\x20\x20\x20\x20\x20You\x20may\x20now\x20<strong>close\x20this\x20window</strong>.\x0a\x20\x20\x20\x20\x20\x20\x20\x20</h2>\x0a\x20\x20\x20\x20\x20\x20",
    "input[required]",
    "FeedbackSubmitted",
    "1410GBhMgK",
    "clear",
    "querySelector",
    "RegistrationForm",
    "2NIAtQl",
    "Feedback",
    "length",
    "51149ajJfKu",
    "Age\x20cannot\x20be\x20more\x20than\x2099\x20years!",
    ".kids-star-wrapper",
    "helpModal",
    "style",
    "input[name=\x27FullName\x27],\x20input[name=\x27Email\x27],\x20input[name=\x27Age\x27]",
    "Please\x20enter\x20a\x20valid\x20email\x20address.",
    "gameFeedbackSection",
    "760oHfvCW",
    "forms",
    "innerHTML",
    "contextmenu",
    "click",
    "13399136gxXnbE",
    "submit",
    "405ZOTKIZ",
    "removeItem",
    "formTitle",
    "SkippedRegistration",
    "setItem",
    "get",
    "reportValidity",
    "removeAttribute",
    "key",
    "value",
    "Score",
    "border",
    "Email",
    "dataset",
    "addEventListener",
    "location",
    "ctrlKey",
    "querySelectorAll",
    "input[name=\x27Email\x27]",
    "append",
  ];
  a0_0x35fe = function () {
    return _0x4b5ff3;
  };
  return a0_0x35fe();
}
function redirectToFreshStart() {
  const _0x2be49a = a0_0x3f8d48;
  localStorage["clear"](),
    (window[_0x2be49a(0x13b)][_0x2be49a(0xf0)] = _0x2be49a(0x109));
}
form[a0_0x3f8d48(0x13a)](a0_0x3f8d48(0x12b), async (_0xb4d7f9) => {
  const _0x1c1c81 = a0_0x3f8d48;
  _0xb4d7f9[_0x1c1c81(0xfb)](),
    (submitButton[_0x1c1c81(0xee)] = !![]),
    (submitButton["value"] = "Submitting...");
  if (
    document[_0x1c1c81(0xfa)](_0x1c1c81(0x124))["style"][_0x1c1c81(0xf3)] ===
    _0x1c1c81(0xf4)
  )
    localStorage[_0x1c1c81(0x12d)](_0x1c1c81(0x12f)),
      localStorage[_0x1c1c81(0x130)](
        _0x1c1c81(0xf1),
        form[_0x1c1c81(0xf1)][_0x1c1c81(0x135)],
      ),
      localStorage[_0x1c1c81(0x130)](
        _0x1c1c81(0x138),
        form["Email"][_0x1c1c81(0x135)],
      ),
      localStorage[_0x1c1c81(0x130)](
        _0x1c1c81(0xf9),
        form[_0x1c1c81(0xf9)]["value"],
      ),
      (window["location"][_0x1c1c81(0xf0)] = "pages/game.html");
  else {
    document[_0x1c1c81(0x13d)](_0x1c1c81(0x122))[_0x1c1c81(0xf6)]((_0x3bf9a9) =>
      _0x3bf9a9[_0x1c1c81(0x133)]("required"),
    );
    const _0x40cc58 = localStorage[_0x1c1c81(0x106)](_0x1c1c81(0xf1)) || "",
      _0x5acbc3 = localStorage[_0x1c1c81(0x106)](_0x1c1c81(0x138)) || "",
      _0x35fc9d = localStorage[_0x1c1c81(0x106)](_0x1c1c81(0xf9)) || "";
    if (!_0x40cc58 || !_0x5acbc3 || !_0x35fc9d) {
      alert("Error:\x20Registration\x20details\x20are\x20missing!"),
        redirectToFreshStart();
      return;
    }
    const _0x22679c = new FormData();
    _0x22679c[_0x1c1c81(0xed)](_0x1c1c81(0xf1), _0x40cc58),
      _0x22679c[_0x1c1c81(0xed)]("Email", _0x5acbc3),
      _0x22679c[_0x1c1c81(0xed)](_0x1c1c81(0xf9), _0x35fc9d),
      _0x22679c["append"](
        _0x1c1c81(0x136),
        form[_0x1c1c81(0x136)][_0x1c1c81(0x135)],
      ),
      _0x22679c["append"](_0x1c1c81(0x11b), form["Feedback"][_0x1c1c81(0x135)]);
    try {
      await fetch(scriptURL, { method: "POST", body: _0x22679c }),
        localStorage["setItem"](_0x1c1c81(0x115), "true"),
        (document[_0x1c1c81(0x101)][_0x1c1c81(0x127)] = _0x1c1c81(0x113)),
        localStorage[_0x1c1c81(0x117)](),
        setTimeout(() => {
          window["close"]();
        }, 0x3e8);
    } catch (_0x423774) {
      console[_0x1c1c81(0x10f)]("Error!", _0x423774[_0x1c1c81(0xf5)]),
        alert(_0x1c1c81(0x112)),
        (submitButton["disabled"] = ![]),
        (submitButton[_0x1c1c81(0x135)] = _0x1c1c81(0xff));
    }
  }
});
function showFeedbackForm(_0x3f1b2a) {
  const _0xf1be01 = a0_0x3f8d48;
  if (localStorage[_0xf1be01(0x106)](_0xf1be01(0x12f)) === _0xf1be01(0x102)) {
    window[_0xf1be01(0x13b)][_0xf1be01(0xf0)] = "pages/games.html";
    return;
  }
  (document["getElementById"](_0xf1be01(0x12e))[_0xf1be01(0x10c)] =
    "Thank\x20you\x20for\x20playing!"),
    document[_0xf1be01(0x13d)](_0xf1be01(0x122))[_0xf1be01(0xf6)](
      (_0x3514e2) => {
        const _0x6ad2d3 = _0xf1be01;
        (_0x3514e2[_0x6ad2d3(0x121)][_0x6ad2d3(0xf3)] = _0x6ad2d3(0xf4)),
          _0x3514e2["removeAttribute"](_0x6ad2d3(0x105));
      },
    );
  const _0x3327f1 = document[_0xf1be01(0xfa)](_0xf1be01(0xef));
  _0x3327f1 && (_0x3327f1[_0xf1be01(0x121)][_0xf1be01(0xf3)] = _0xf1be01(0xf4)),
    (kidsStar["style"][_0xf1be01(0xf3)] = "none"),
    (document[_0xf1be01(0xfa)](_0xf1be01(0x124))[_0xf1be01(0x121)][
      _0xf1be01(0xf3)
    ] = _0xf1be01(0x111)),
    (document["getElementById"]("scoreField")[_0xf1be01(0x135)] = _0x3f1b2a);
}
document["addEventListener"](a0_0x3f8d48(0x128), (_0x4bbeca) =>
  _0x4bbeca[a0_0x3f8d48(0xfb)](),
),
  document[a0_0x3f8d48(0x13a)](a0_0x3f8d48(0xf8), (_0x39de2b) => {
    const _0x15f8df = a0_0x3f8d48;
    _0x39de2b[_0x15f8df(0x13c)] &&
      (_0x39de2b[_0x15f8df(0x134)] === "u" ||
        _0x39de2b[_0x15f8df(0x134)] === "s" ||
        _0x39de2b[_0x15f8df(0x134)] === "i" ||
        _0x39de2b[_0x15f8df(0x134)] === "j") &&
      _0x39de2b[_0x15f8df(0xfb)]();
  });
