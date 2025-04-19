const a0_0x21241e = a0_0x2650;
(function (_0x50ff2c, _0x226939) {
  const _0x53166f = a0_0x2650,
    _0x2eae27 = _0x50ff2c();
  while (!![]) {
    try {
      const _0x5973ff =
        (-parseInt(_0x53166f(0xed)) / 0x1) *
          (-parseInt(_0x53166f(0x104)) / 0x2) +
        (-parseInt(_0x53166f(0xfb)) / 0x3) *
          (-parseInt(_0x53166f(0x133)) / 0x4) +
        (parseInt(_0x53166f(0x126)) / 0x5) *
          (parseInt(_0x53166f(0x146)) / 0x6) +
        (-parseInt(_0x53166f(0xf1)) / 0x7) *
          (-parseInt(_0x53166f(0xee)) / 0x8) +
        (parseInt(_0x53166f(0x11a)) / 0x9) *
          (-parseInt(_0x53166f(0x119)) / 0xa) +
        (-parseInt(_0x53166f(0xd0)) / 0xb) *
          (parseInt(_0x53166f(0x135)) / 0xc) +
        (-parseInt(_0x53166f(0x122)) / 0xd) *
          (parseInt(_0x53166f(0x113)) / 0xe);
      if (_0x5973ff === _0x226939) break;
      else _0x2eae27["push"](_0x2eae27["shift"]());
    } catch (_0x238afb) {
      _0x2eae27["push"](_0x2eae27["shift"]());
    }
  }
})(a0_0x451a, 0xa9884);
let selectedOption = "",
  questionCount = 0x0,
  ideaCount = !![],
  selectedArr = [],
  randomWords = [],
  originalWordOrder = [],
  incorrectAttempts = 0x0;
const gameCards = document[a0_0x21241e(0x125)](a0_0x21241e(0xd2)),
  allCards = document[a0_0x21241e(0x120)](a0_0x21241e(0xd3)),
  playground = document["querySelector"](a0_0x21241e(0xe3)),
  startGame = document[a0_0x21241e(0x125)](a0_0x21241e(0xd5)),
  questionHint = document[a0_0x21241e(0x125)](a0_0x21241e(0xe8)),
  selectedWords = document[a0_0x21241e(0x125)](a0_0x21241e(0x106)),
  shuffleWords = document[a0_0x21241e(0x125)](a0_0x21241e(0x144)),
  endGameButton = document[a0_0x21241e(0x125)](a0_0x21241e(0xf2)),
  categoryBackButton = document[a0_0x21241e(0x125)](a0_0x21241e(0xd6));
(gameCards[a0_0x21241e(0x127)][a0_0x21241e(0x14a)] = a0_0x21241e(0x118)),
  (playground[a0_0x21241e(0x127)][a0_0x21241e(0x14a)] = "none"),
  (endGameButton[a0_0x21241e(0x127)][a0_0x21241e(0x14a)] = "none"),
  startGame[a0_0x21241e(0x12c)](a0_0x21241e(0x12f), () => {
    const _0x266b30 = a0_0x21241e;
    (gameCards[_0x266b30(0x127)][_0x266b30(0x14a)] = _0x266b30(0x149)),
      (startGame[_0x266b30(0x127)][_0x266b30(0x14a)] = _0x266b30(0x118)),
      (endGameButton["style"][_0x266b30(0x14a)] = _0x266b30(0x117));
  }),
  allCards["forEach"]((_0x52aad0) => {
    const _0x1981c3 = a0_0x21241e;
    _0x52aad0[_0x1981c3(0x12c)](_0x1981c3(0x12f), (_0x5131ad) => {
      const _0x78312e = _0x1981c3;
      if (
        _0x5131ad[_0x78312e(0xd1)][_0x78312e(0xf9)]["contains"](
          _0x78312e(0x14f),
        )
      ) {
        console[_0x78312e(0x10a)](
          "⛔\x20Category\x20already\x20played:",
          _0x5131ad[_0x78312e(0xd1)][_0x78312e(0xff)](_0x78312e(0x140)),
        );
        return;
      }
      allCards[_0x78312e(0xec)]((_0x17c6f0) =>
        _0x17c6f0[_0x78312e(0xf9)][_0x78312e(0xce)](_0x78312e(0xe9)),
      ),
        _0x5131ad[_0x78312e(0xd1)][_0x78312e(0xf9)][_0x78312e(0x143)](
          _0x78312e(0xe9),
        ),
        (selectedOption = _0x5131ad["currentTarget"]["getAttribute"](
          _0x78312e(0x140),
        )),
        console[_0x78312e(0x10a)](_0x78312e(0x141), selectedOption),
        (questionCount = 0x0),
        (gameCards[_0x78312e(0x127)][_0x78312e(0x14a)] = _0x78312e(0x118)),
        (playground[_0x78312e(0x127)][_0x78312e(0x14a)] = _0x78312e(0x117)),
        startToGuessTheWord();
    });
  }),
  endGameButton[a0_0x21241e(0x12c)](a0_0x21241e(0x12f), () => {
    const _0x1905df = a0_0x21241e;
    (gameCards[_0x1905df(0x127)][_0x1905df(0x14a)] = _0x1905df(0x118)),
      (playground[_0x1905df(0x127)][_0x1905df(0x14a)] = _0x1905df(0x118)),
      (endGameButton[_0x1905df(0x127)][_0x1905df(0x14a)] = "none"),
      (document["body"][_0x1905df(0x13c)] =
        "\x0a\x20\x20\x20\x20<h2\x20style=\x22text-align:\x20center;\x20font-size:\x2024px;\x20padding:\x2030px;\x20color:\x20#2d3436;\x22>\x0a\x20\x20\x20\x20\x20\x20🎉\x20ధన్యవాదాలు\x20పిల్లలూ!\x20ఆటను\x20ఆడి\x20చాలా\x20బాగా\x20చేసింది!\x20<br\x20/><br\x20/>\x0a\x20\x20\x20\x20\x20\x20ఇప్పుడు\x20<strong>విండోని\x20మూసేయండి</strong>\x20లేదా\x20మీరు\x20కావాలంటే\x20మళ్లీ\x20ఆడవచ్చు!\x20👋\x0a\x20\x20\x20\x20\x20\x20<br\x20/><br\x20/>\x20!!\x20Please\x20close\x20the\x20window\x20!!\x0a\x20\x20\x20\x20</h2>\x0a\x20\x20"),
      localStorage["clear"](),
      setTimeout(() => {
        const _0x553b6d = _0x1905df;
        window[_0x553b6d(0x13e)]();
      }, 0x3e8);
  });
function showCategorySelection() {
  const _0x2a09fd = a0_0x21241e;
  (gameCards["style"]["display"] = _0x2a09fd(0x149)),
    (startGame["style"][_0x2a09fd(0x14a)] = "none"),
    (endGameButton["style"][_0x2a09fd(0x14a)] = _0x2a09fd(0x117));
}
window["addEventListener"](a0_0x21241e(0x11c), showCategorySelection);
let completedCategories = 0x0;
function checkSelectedWord() {
  const _0x46c7b0 = a0_0x21241e,
    _0x58f4f9 = document["querySelectorAll"](_0x46c7b0(0xea));
  let _0x32c8ba = Array[_0x46c7b0(0xe6)](_0x58f4f9)[_0x46c7b0(0xd9)](
    (_0x36158e) => _0x36158e[_0x46c7b0(0x116)],
  );
  if (_0x32c8ba[_0x46c7b0(0x10b)]("")) return;
  setTimeout(() => {
    const _0x1267cc = _0x46c7b0;
    let _0x331efd = selectedArr[questionCount][_0x1267cc(0x137)];
    JSON["stringify"](_0x32c8ba) === JSON["stringify"](_0x331efd) &&
      (_0x58f4f9[_0x1267cc(0xec)]((_0x418385) =>
        _0x418385["classList"][_0x1267cc(0x143)](_0x1267cc(0x101)),
      ),
      confetti({ particleCount: 0x64, spread: 0x46, origin: { y: 0.6 } }),
      questionCount++,
      questionCount < selectedArr[_0x1267cc(0xdd)]
        ? startToGuessTheWord()
        : (confetti({ particleCount: 0x96, spread: 0x64, origin: { y: 0.4 } }),
          setTimeout(() => {
            const _0x1d847c = _0x1267cc;
            alert(_0x1d847c(0x11d) + selectedOption + _0x1d847c(0xfe)),
              (gameCards["style"][_0x1d847c(0x14a)] = _0x1d847c(0x149)),
              (playground[_0x1d847c(0x127)]["display"] = _0x1d847c(0x118)),
              disableCategory();
          }, 0x320)));
  }, 0x0);
}
function startToGuessTheWord() {
  const _0x4599aa = a0_0x21241e;
  console["log"](_0x4599aa(0x14e)),
    (selectedWords[_0x4599aa(0x13c)] = ""),
    (shuffleWords[_0x4599aa(0x13c)] = ""),
    (ideaCount = !![]);
  const _0x59957e =
    {
      Relations: RelationsArr,
      Foods: FoodsArr,
      Animals: AnimalsArr,
      Items: ItemsArr,
    }[selectedOption] || [];
  (selectedArr = shuffle([..._0x59957e])),
    console[_0x4599aa(0x10a)](
      _0x4599aa(0x13d),
      selectedOption,
      "Words\x20count:",
      selectedArr[_0x4599aa(0xdd)],
    );
  if (
    !selectedArr[_0x4599aa(0xdd)] ||
    questionCount >= selectedArr[_0x4599aa(0xdd)]
  ) {
    console[_0x4599aa(0x142)](_0x4599aa(0x128));
    return;
  }
  let _0x1e996c = selectedArr[questionCount];
  if (!_0x1e996c) {
    console["error"](
      "⛔\x20Word\x20object\x20not\x20found\x20for\x20index:",
      questionCount,
    );
    return;
  }
  (questionHint[_0x4599aa(0x13c)] =
    _0x1e996c[_0x4599aa(0x10e)] + _0x4599aa(0xf0)),
    (originalWordOrder = [..._0x1e996c[_0x4599aa(0x137)]]),
    (randomWords = shuffle([...originalWordOrder])),
    randomWords[_0x4599aa(0xec)]((_0x376334) => {
      const _0x22e4b9 = _0x4599aa;
      let _0x857a97 = document["createElement"]("div");
      _0x857a97["classList"][_0x22e4b9(0x143)]("box"),
        selectedWords[_0x22e4b9(0xf8)](_0x857a97);
      let _0x20156e = document[_0x22e4b9(0x10d)]("div");
      _0x20156e[_0x22e4b9(0xf9)]["add"]("box"),
        (_0x20156e[_0x22e4b9(0x13c)] = _0x376334),
        _0x20156e[_0x22e4b9(0x12c)](_0x22e4b9(0x12f), function () {
          const _0x39ccf9 = _0x22e4b9;
          chooseWordToGuess(this[_0x39ccf9(0x116)], this);
        }),
        shuffleWords["append"](_0x20156e);
    }),
    (gameCards["style"]["display"] = _0x4599aa(0x118)),
    (playground[_0x4599aa(0x127)]["display"] = _0x4599aa(0x117)),
    (categoryBackButton["style"][_0x4599aa(0x14a)] = "inline-block");
}
function disableCategory() {
  const _0x50960e = a0_0x21241e;
  console[_0x50960e(0x10a)](
    "🔒\x20Attempting\x20to\x20disable\x20category:\x20" + selectedOption,
  );
  let _0x2e5de = document["querySelector"](
    _0x50960e(0xda) + selectedOption + "\x27]",
  );
  _0x2e5de
    ? (_0x2e5de[_0x50960e(0xf9)]["add"](_0x50960e(0x14f)),
      _0x2e5de[_0x50960e(0xf9)][_0x50960e(0xce)](_0x50960e(0xe9)),
      _0x2e5de["setAttribute"](_0x50960e(0x12e), _0x50960e(0xd4)),
      console["log"]("✅\x20Disabled\x20category:\x20" + selectedOption))
    : console[_0x50960e(0x13a)](_0x50960e(0xe1) + selectedOption),
    requestAnimationFrame(() => {
      setTimeout(() => {
        checkIfAllCategoriesCompleted();
      }, 0x0);
    });
}
let allCategoriesCompletedShown = ![];
function checkIfAllCategoriesCompleted() {
  const _0x286459 = a0_0x21241e,
    _0x2044eb = document[_0x286459(0x120)](".gameCards\x20[data-option]"),
    _0xfe8048 = Array["from"](_0x2044eb)[_0x286459(0x129)](
      (_0x38622a) =>
        !_0x38622a[_0x286459(0xf9)][_0x286459(0x147)](_0x286459(0x14f)),
    );
  console[_0x286459(0x10a)](
    "🔍\x20Remaining\x20categories:\x20" + _0xfe8048[_0x286459(0xdd)],
  ),
    _0xfe8048["length"] === 0x0 &&
      !allCategoriesCompletedShown &&
      ((allCategoriesCompletedShown = !![]),
      alert(_0x286459(0x121)),
      console[_0x286459(0x10a)](_0x286459(0x132)));
}
const shuffle = (_0x2912e0) => {
  const _0x533dd5 = a0_0x21241e;
  for (
    let _0x575203 = _0x2912e0[_0x533dd5(0xdd)] - 0x1;
    _0x575203 > 0x0;
    _0x575203--
  ) {
    const _0x2dc6f6 = Math["floor"](
      Math[_0x533dd5(0x12a)]() * (_0x575203 + 0x1),
    );
    [_0x2912e0[_0x575203], _0x2912e0[_0x2dc6f6]] = [
      _0x2912e0[_0x2dc6f6],
      _0x2912e0[_0x575203],
    ];
  }
  return _0x2912e0;
};
function chooseWordToGuess(_0x53b0a1, _0x5bdbd7) {
  const _0x239388 = a0_0x21241e;
  if (!_0x5bdbd7) {
    console[_0x239388(0x142)](_0x239388(0x124));
    return;
  }
  const _0x5d500e = document[_0x239388(0x120)](_0x239388(0xea));
  let _0x284280 = ![],
    _0x321620 = Array[_0x239388(0xe6)](_0x5d500e)["filter"](
      (_0x430055) => _0x430055["innerText"] !== "",
    )[_0x239388(0xdd)],
    _0x43cebe = selectedArr[questionCount][_0x239388(0x137)][_0x321620];
  console[_0x239388(0x10a)](_0x239388(0xe0) + _0x53b0a1),
    console[_0x239388(0x10a)](_0x239388(0xcf) + _0x43cebe),
    console[_0x239388(0x10a)](_0x239388(0x14b) + _0x321620),
    _0x5d500e[_0x239388(0xec)]((_0x1808f9, _0x4d0ad0) => {
      const _0x5d22d9 = _0x239388;
      !_0x284280 &&
        _0x1808f9[_0x5d22d9(0x116)] === "" &&
        _0x4d0ad0 === _0x321620 &&
        (_0x53b0a1 === _0x43cebe
          ? ((_0x1808f9[_0x5d22d9(0x116)] = _0x53b0a1),
            (_0x1808f9["dataset"][_0x5d22d9(0x150)] = _0x53b0a1),
            (_0x284280 = !![]),
            (_0x5bdbd7[_0x5d22d9(0x127)][_0x5d22d9(0x130)] = _0x5d22d9(0x134)),
            (incorrectAttempts = 0x0),
            console["log"](
              "✅\x20Letter\x20\x27" + _0x53b0a1 + _0x5d22d9(0x10c) + _0x4d0ad0,
            ))
          : (incorrectAttempts++,
            showTemporaryMessage(_0x5d22d9(0x115), 0x3e8),
            _0x5bdbd7[_0x5d22d9(0xf9)][_0x5d22d9(0x143)](
              _0x5d22d9(0xe7),
              _0x5d22d9(0xf6),
            ),
            setTimeout(() => {
              const _0x516be2 = _0x5d22d9;
              _0x5bdbd7[_0x516be2(0xf9)][_0x516be2(0xce)](
                _0x516be2(0xe7),
                _0x516be2(0xf6),
              );
            }, 0x3e8),
            console[_0x5d22d9(0x10a)](
              _0x5d22d9(0x109) +
                _0x53b0a1 +
                _0x5d22d9(0x145) +
                incorrectAttempts,
            ),
            incorrectAttempts >= 0x2 &&
              (showTemporaryMessage(_0x5d22d9(0xeb), 0x3e8),
              setTimeout(() => {
                const _0x5dc43d = _0x5d22d9;
                (_0x1808f9[_0x5dc43d(0x116)] = _0x43cebe),
                  (_0x1808f9["dataset"][_0x5dc43d(0x150)] = _0x43cebe),
                  document[_0x5dc43d(0x120)](_0x5dc43d(0x100))[_0x5dc43d(0xec)](
                    (_0x28bf67) => {
                      const _0x376296 = _0x5dc43d;
                      _0x28bf67[_0x376296(0x116)] === _0x43cebe &&
                        (_0x28bf67[_0x376296(0x127)][_0x376296(0x130)] =
                          _0x376296(0x134));
                    },
                  ),
                  console["log"](
                    _0x5dc43d(0x139) + _0x43cebe + _0x5dc43d(0x102) + _0x4d0ad0,
                  ),
                  (incorrectAttempts = 0x0);
              }, 0x3e8))));
    });
  let _0x1c8d4d = Array[_0x239388(0xe6)](_0x5d500e)[_0x239388(0xd9)](
      (_0x1771dc) => _0x1771dc[_0x239388(0x116)],
    ),
    _0x22d37a = selectedArr[questionCount][_0x239388(0x137)];
  console[_0x239388(0x10a)](
    _0x239388(0x131) + JSON[_0x239388(0x110)](_0x1c8d4d),
  ),
    console[_0x239388(0x10a)](
      _0x239388(0x14d) + JSON[_0x239388(0x110)](_0x22d37a),
    ),
    JSON["stringify"](_0x1c8d4d) === JSON["stringify"](_0x22d37a) &&
      checkSelectedWord();
}
function a0_0x2650(_0x215652, _0x28e356) {
  const _0x451a8e = a0_0x451a();
  return (
    (a0_0x2650 = function (_0x265002, _0x4fd6cd) {
      _0x265002 = _0x265002 - 0xcd;
      let _0x3b981f = _0x451a8e[_0x265002];
      return _0x3b981f;
    }),
    a0_0x2650(_0x215652, _0x28e356)
  );
}
function showTemporaryMessage(_0x5a7f77, _0xe37ee7) {
  const _0x35484f = a0_0x21241e;
  console[_0x35484f(0x10a)](_0x35484f(0xef) + _0x5a7f77);
  let _0x2fe235 = document[_0x35484f(0x125)](_0x35484f(0x108));
  if (!_0x2fe235) {
    console[_0x35484f(0x142)](_0x35484f(0xfa));
    return;
  }
  (_0x2fe235[_0x35484f(0x116)] = _0x5a7f77),
    (_0x2fe235[_0x35484f(0x127)][_0x35484f(0x14a)] = "block"),
    setTimeout(() => {
      const _0x4ffb5e = _0x35484f;
      _0x2fe235[_0x4ffb5e(0x127)]["display"] = _0x4ffb5e(0x118);
    }, _0xe37ee7);
}
function getTodayWord() {
  const _0x30ca63 = a0_0x21241e,
    _0x9b15d9 = new Date(),
    _0x41ebdd = Math[_0x30ca63(0xcd)](
      (_0x9b15d9 - new Date(_0x9b15d9["getFullYear"](), 0x0, 0x0)) / 0x5265c00,
    ),
    _0x532171 = _0x41ebdd % wordOfTheDayList["length"];
  return wordOfTheDayList[_0x532171];
}
function a0_0x451a() {
  const _0x3900ba = [
    "6941zibVoU",
    "currentTarget",
    ".gameCards",
    ".gameCards\x20.cards",
    "true",
    ".startGame",
    ".categoryBack",
    "rotate(",
    "#1e90ff",
    "map",
    "[data-option=\x27",
    "closeHowto",
    "contextmenu",
    "length",
    "📖\x20<strong>ఈరోజు\x20పదం:</strong>\x20",
    "గురువు",
    "DEBUG:\x20Clicked\x20Letter\x20-\x20",
    "⚠️\x20Could\x20not\x20find\x20category\x20element\x20for:\x20",
    "ctrlKey",
    ".playground",
    "</em>)",
    ".sparkle-wrapper",
    "from",
    "shake",
    ".questionHint",
    "active",
    ".selectedWords\x20.box",
    "Placing\x20correct\x20letter!",
    "forEach",
    "326851RWiogb",
    "2901256qMiCJb",
    "Displaying\x20message:\x20",
    "\x20<i\x20class=\x22fa-solid\x20fa-lightbulb\x22\x20onclick=\x22checkFirstWordIdea(this)\x22></i>",
    "7Iqjdwo",
    ".endGame",
    "#9b59b6",
    "left",
    "#e84393",
    "wrong-choice",
    "fontSize",
    "append",
    "classList",
    "Error:\x20.message-box\x20element\x20not\x20found!",
    "573081QZCyIM",
    "key",
    "color",
    "\x20category\x20completed.\x20Play\x20another\x20category.",
    "getAttribute",
    ".shuffleWords\x20.box",
    "match",
    "\x27\x20at\x20index\x20",
    "howtoModal",
    "2tSsppe",
    "keydown",
    ".selectedWords",
    "div",
    ".message-box",
    "❌\x20Wrong\x20letter\x20\x27",
    "log",
    "includes",
    "\x27\x20placed\x20at\x20index\x20",
    "createElement",
    "hint",
    "preventDefault",
    "stringify",
    "#00b894",
    "top",
    "7039914cFZAgt",
    "appendChild",
    "Wrong\x20letter!\x20Try\x20again",
    "innerText",
    "block",
    "none",
    "650KaLIEJ",
    "113913kcTZTW",
    ".howto-btn",
    "DOMContentLoaded",
    "Words\x20in\x20",
    "animationDelay",
    "todays-word",
    "querySelectorAll",
    "🏆\x20All\x20categories\x20completed!\x20Click\x20\x27End\x20Game\x27\x20to\x20restart.",
    "13ibcYnt",
    "className",
    "Element\x20is\x20undefined!\x20Check\x20event\x20listener.",
    "querySelector",
    "730NlpvsZ",
    "style",
    "⛔\x20Invalid\x20word\x20list\x20or\x20all\x20words\x20completed",
    "filter",
    "random",
    "getElementById",
    "addEventListener",
    "deg)",
    "data-disabled",
    "click",
    "visibility",
    "DEBUG:\x20Current\x20Word\x20Formed\x20-\x20",
    "🏆\x20All\x20categories\x20completed!",
    "20dQuwqj",
    "hidden",
    "17868SCsdks",
    "sparkle",
    "word",
    "transform",
    "⚠️\x20Auto-placed\x20correct\x20letter:\x20\x27",
    "warn",
    "అమ్మ",
    "innerHTML",
    "📂\x20Loaded\x20category:",
    "close",
    ".word-rain",
    "data-option",
    "🎮\x20Category\x20selected:",
    "error",
    "add",
    ".shuffleWords",
    "\x27,\x20attempt\x20",
    "54036fiVrdU",
    "contains",
    "target",
    "flex",
    "display",
    "DEBUG:\x20Letters\x20Placed\x20So\x20Far\x20-\x20",
    "#ff4757",
    "DEBUG:\x20Expected\x20Word\x20-\x20",
    "📢\x20Starting\x20new\x20word\x20selection...",
    "disabled-category",
    "letter",
    "బడి",
    "floor",
    "remove",
    "DEBUG:\x20Expected\x20Letter\x20-\x20",
  ];
  a0_0x451a = function () {
    return _0x3900ba;
  };
  return a0_0x451a();
}
window["addEventListener"](a0_0x21241e(0x11c), () => {
  const _0x2d44ac = a0_0x21241e,
    _0x2f1dc9 = getTodayWord(),
    _0x50f09a = document["getElementById"](_0x2d44ac(0x11f));
  _0x50f09a &&
    (_0x50f09a[_0x2d44ac(0x13c)] =
      _0x2d44ac(0xde) +
      _0x2f1dc9["te"] +
      "\x20(<em>" +
      _0x2f1dc9["en"] +
      _0x2d44ac(0xe4));
});
const teluguWords = [
    "ఆట",
    "నాన్న",
    a0_0x21241e(0x13b),
    "తెలుగు",
    a0_0x21241e(0x151),
    a0_0x21241e(0xdf),
  ],
  wordColors = [
    a0_0x21241e(0x14c),
    a0_0x21241e(0xd8),
    "#2ed573",
    "#ffa502",
    a0_0x21241e(0xf3),
    a0_0x21241e(0x111),
    a0_0x21241e(0xf5),
    "#ff6348",
  ];
function createFallingWord() {
  const _0xf9ba7b = a0_0x21241e,
    _0xc32862 = document[_0xf9ba7b(0x10d)]("div");
  (_0xc32862[_0xf9ba7b(0x123)] = "falling-word"),
    (_0xc32862[_0xf9ba7b(0x116)] =
      teluguWords[
        Math[_0xf9ba7b(0xcd)](Math[_0xf9ba7b(0x12a)]() * teluguWords["length"])
      ]),
    (_0xc32862["style"][_0xf9ba7b(0xf4)] =
      Math[_0xf9ba7b(0x12a)]() * window["innerWidth"] + "px"),
    (_0xc32862["style"][_0xf9ba7b(0xf7)] =
      0x14 + Math["random"]() * 0xc + "px"),
    (_0xc32862[_0xf9ba7b(0x127)][_0xf9ba7b(0xfd)] =
      wordColors[
        Math["floor"](Math["random"]() * wordColors[_0xf9ba7b(0xdd)])
      ]),
    (_0xc32862["style"][_0xf9ba7b(0x138)] =
      _0xf9ba7b(0xd7) +
      Math[_0xf9ba7b(0xcd)](Math[_0xf9ba7b(0x12a)]() * 0x14 - 0xa) +
      _0xf9ba7b(0x12d)),
    document[_0xf9ba7b(0x125)](_0xf9ba7b(0x13f))[_0xf9ba7b(0x114)](_0xc32862),
    setTimeout(() => _0xc32862[_0xf9ba7b(0xce)](), 0x1770);
}
setInterval(createFallingWord, 0x3e8);
function createSparkles() {
  const _0x513fff = a0_0x21241e;
  document["querySelectorAll"](_0x513fff(0xe5))[_0x513fff(0xec)](
    (_0x256d82) => {
      const _0x3bd0dc = _0x513fff;
      for (let _0x4778b0 = 0x0; _0x4778b0 < 0xf; _0x4778b0++) {
        const _0x2b4cb9 = document[_0x3bd0dc(0x10d)](_0x3bd0dc(0x107));
        _0x2b4cb9[_0x3bd0dc(0xf9)][_0x3bd0dc(0x143)](_0x3bd0dc(0x136)),
          (_0x2b4cb9[_0x3bd0dc(0x127)][_0x3bd0dc(0xf4)] =
            Math[_0x3bd0dc(0x12a)]() * 0x64 + "%"),
          (_0x2b4cb9[_0x3bd0dc(0x127)][_0x3bd0dc(0x112)] =
            Math[_0x3bd0dc(0x12a)]() * 0x14 + 0x5 + "px"),
          (_0x2b4cb9[_0x3bd0dc(0x127)][_0x3bd0dc(0x11e)] =
            Math[_0x3bd0dc(0x12a)]() * 0x3 + "s"),
          _0x256d82[_0x3bd0dc(0x114)](_0x2b4cb9);
      }
    },
  );
}
window["addEventListener"]("DOMContentLoaded", createSparkles),
  categoryBackButton[a0_0x21241e(0x12c)]("click", () => {
    const _0xead35f = a0_0x21241e;
    (playground["style"][_0xead35f(0x14a)] = _0xead35f(0x118)),
      (gameCards[_0xead35f(0x127)]["display"] = _0xead35f(0x149)),
      (categoryBackButton[_0xead35f(0x127)][_0xead35f(0x14a)] =
        _0xead35f(0x118));
  }),
  document[a0_0x21241e(0x125)](a0_0x21241e(0x11b))[a0_0x21241e(0x12c)](
    a0_0x21241e(0x12f),
    () => {
      const _0x5bf9ac = a0_0x21241e;
      document[_0x5bf9ac(0x12b)](_0x5bf9ac(0x103))[_0x5bf9ac(0x127)][
        "display"
      ] = _0x5bf9ac(0x117);
    },
  ),
  document[a0_0x21241e(0x12b)](a0_0x21241e(0xdb))[a0_0x21241e(0x12c)](
    "click",
    () => {
      const _0x3c5acb = a0_0x21241e;
      document[_0x3c5acb(0x12b)]("howtoModal")[_0x3c5acb(0x127)][
        _0x3c5acb(0x14a)
      ] = _0x3c5acb(0x118);
    },
  ),
  window[a0_0x21241e(0x12c)](a0_0x21241e(0x12f), (_0x29b2ed) => {
    const _0x5c0703 = a0_0x21241e;
    _0x29b2ed[_0x5c0703(0x148)]["id"] === _0x5c0703(0x103) &&
      (document["getElementById"](_0x5c0703(0x103))[_0x5c0703(0x127)][
        _0x5c0703(0x14a)
      ] = "none");
  }),
  document[a0_0x21241e(0x12c)](a0_0x21241e(0xdc), (_0x5eac53) =>
    _0x5eac53["preventDefault"](),
  ),
  document["addEventListener"](a0_0x21241e(0x105), (_0x4d3de0) => {
    const _0x173601 = a0_0x21241e;
    _0x4d3de0[_0x173601(0xe2)] &&
      (_0x4d3de0[_0x173601(0xfc)] === "u" ||
        _0x4d3de0[_0x173601(0xfc)] === "s" ||
        _0x4d3de0[_0x173601(0xfc)] === "i" ||
        _0x4d3de0["key"] === "j") &&
      _0x4d3de0[_0x173601(0x10f)]();
  });
