// QUESTION LIST RESPONSIVE - the question list (#attempts-que) has a single
// home in the markup (the collapsible sidebar panel), but on phones it reads
// better as a modal bottom-sheet. Rather than keep two copies of the markup
// (which would duplicate the #attempts-que id that exam.js/classes.js/
// question-search.js all rely on), this moves the one real node between the
// sidebar and the modal body depending on viewport, and flips the trigger
// link's Bootstrap behavior (collapse vs modal) to match.
(function () {
  // Same device/orientation check as the "CSS FOR IPHONES DEVICES" media
  // query in exam.css, so JS placement and CSS styling always agree.
  var mql = window.matchMedia("(max-device-width: 500px) and (orientation: portrait)");

  function closeOpenUI(attemptsQue, modalEl) {
    if (!window.bootstrap) return;
    var collapse = bootstrap.Collapse.getInstance(attemptsQue);
    if (collapse) collapse.hide();
    if (modalEl) {
      var modal = bootstrap.Modal.getInstance(modalEl);
      if (modal) modal.hide();
    }
  }

  function applyMode(isMobile) {
    var attemptsQue = document.getElementById("attempts-que");
    var sidebar = document.querySelector(".ExamQuestionsBlock .right");
    var modalBody = document.getElementById("questionListModalBody");
    var modalEl = document.getElementById("questionListModal");
    var trigger = document.getElementById("btnToggleQuestionList");
    if (!attemptsQue || !sidebar || !modalBody || !trigger) return;

    closeOpenUI(attemptsQue, modalEl);

    if (isMobile) {
      if (attemptsQue.parentElement !== modalBody) {
        modalBody.appendChild(attemptsQue);
      }
      attemptsQue.classList.remove("collapse", "hide", "show");
      trigger.setAttribute("data-bs-toggle", "modal");
      trigger.setAttribute("data-bs-target", "#questionListModal");
      trigger.removeAttribute("aria-expanded");
      trigger.removeAttribute("aria-controls");
    } else {
      if (attemptsQue.parentElement !== sidebar) {
        sidebar.appendChild(attemptsQue);
      }
      attemptsQue.classList.remove("show");
      attemptsQue.classList.add("collapse", "hide");
      trigger.setAttribute("data-bs-toggle", "collapse");
      trigger.setAttribute("data-bs-target", "#attempts-que");
      trigger.setAttribute("aria-expanded", "false");
      trigger.setAttribute("aria-controls", "attempts-que");
    }
  }

  function init() {
    applyMode(mql.matches);
    if (mql.addEventListener) {
      mql.addEventListener("change", function (e) { applyMode(e.matches); });
    } else if (mql.addListener) {
      // Safari < 14
      mql.addListener(function (e) { applyMode(e.matches); });
    }
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
