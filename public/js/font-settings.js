// FONT SETTINGS - lets the user pick the font family/size used for the
// question text and answer choices, applied via CSS variables and saved to
// USER_STORAGE (localStorage) so it persists across sessions.
(function () {
  var DEFAULT_FONT_FAMILY = "default";
  var DEFAULT_FONT_SIZE = 15;

  var FONT_FAMILY_STACKS = {
    "default": "'Poppins', 'Inter', sans-serif",
    "sans-serif": "Arial, Helvetica, sans-serif",
    "serif": "'Times New Roman', Times, serif",
    "rounded": "Verdana, Geneva, sans-serif",
    "monospace": "'Courier New', Courier, monospace",
    // Loaded via the Google Fonts <link> in index.html's <head>; all four
    // cover Vietnamese diacritics well, good for exam reading.
    "noto-sans": "'Noto Sans', Arial, sans-serif",
    "lexend": "'Lexend', Arial, sans-serif",
    "atkinson": "'Atkinson Hyperlegible', Arial, sans-serif",
    "merriweather": "'Merriweather', Georgia, serif",
  };

  function applySettings(fontFamily, fontSize) {
    var stack = FONT_FAMILY_STACKS[fontFamily] || FONT_FAMILY_STACKS[DEFAULT_FONT_FAMILY];
    document.documentElement.style.setProperty("--exam-font-family", stack);
    document.documentElement.style.setProperty("--exam-font-size", fontSize + "px");
  }

  function loadAndApply() {
    var fontFamily = getUserStorage("font_family") || DEFAULT_FONT_FAMILY;
    var fontSize = getUserStorage("font_size") || DEFAULT_FONT_SIZE;
    applySettings(fontFamily, fontSize);
    return { fontFamily: fontFamily, fontSize: fontSize };
  }

  function init() {
    var familySelect = document.getElementById("fontFamilySelect");
    var sizeRange = document.getElementById("fontSizeRange");
    var sizeValue = document.getElementById("fontSizeValue");
    var resetBtn = document.getElementById("btnResetFontSettings");

    var current = loadAndApply();

    if (!familySelect || !sizeRange || !sizeValue) return;

    familySelect.value = current.fontFamily;
    sizeRange.value = current.fontSize;
    sizeValue.textContent = current.fontSize;

    familySelect.addEventListener("change", function () {
      setUserStorage("font_family", familySelect.value);
      applySettings(familySelect.value, sizeRange.value);
    });

    sizeRange.addEventListener("input", function () {
      sizeValue.textContent = sizeRange.value;
      setUserStorage("font_size", parseInt(sizeRange.value, 10));
      applySettings(familySelect.value, sizeRange.value);
    });

    if (resetBtn) {
      resetBtn.addEventListener("click", function () {
        familySelect.value = DEFAULT_FONT_FAMILY;
        sizeRange.value = DEFAULT_FONT_SIZE;
        sizeValue.textContent = DEFAULT_FONT_SIZE;
        setUserStorage("font_family", DEFAULT_FONT_FAMILY);
        setUserStorage("font_size", DEFAULT_FONT_SIZE);
        applySettings(DEFAULT_FONT_FAMILY, DEFAULT_FONT_SIZE);
      });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
