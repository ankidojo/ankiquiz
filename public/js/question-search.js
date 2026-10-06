// QUESTION SEARCH - filter the current exam's questions by keyword and
// jump to the selected one, reusing the same "go to question" flow as
// clicking a number in the #attempts-que list.
(function () {
  var MIN_QUERY_LENGTH = 2;
  var MAX_RESULTS = 30;

  function stripHtml(html) {
    var tmp = document.createElement("div");
    tmp.innerHTML = html || "";
    return tmp.textContent || tmp.innerText || "";
  }

  function escapeHtml(text) {
    var div = document.createElement("div");
    div.textContent = text;
    return div.innerHTML;
  }

  function buildSnippet(plainText, query) {
    var lowerText = plainText.toLowerCase();
    var idx = lowerText.indexOf(query.toLowerCase());
    if (idx === -1) return escapeHtml(plainText.slice(0, 100));

    var start = Math.max(0, idx - 30);
    var end = Math.min(plainText.length, idx + query.length + 60);
    var snippet = (start > 0 ? "..." : "") + plainText.slice(start, end) + (end < plainText.length ? "..." : "");

    var before = escapeHtml(snippet.slice(0, idx - start + (start > 0 ? 3 : 0)));
    var match = escapeHtml(snippet.substr(idx - start + (start > 0 ? 3 : 0), query.length));
    var after = escapeHtml(snippet.slice(idx - start + (start > 0 ? 3 : 0) + query.length));

    return before + "<mark>" + match + "</mark>" + after;
  }

  function runSearch(query) {
    var resultsEl = document.getElementById("questionSearchResults");
    if (!resultsEl) return;

    if (!exam || !exam.listQuestions || query.trim().length < MIN_QUERY_LENGTH) {
      resultsEl.classList.add("d-none");
      resultsEl.innerHTML = "";
      return;
    }

    var trimmedQuery = query.trim();
    var lowerQuery = trimmedQuery.toLowerCase();

    var matches = [];
    for (var i = 0; i < exam.listQuestions.length; i++) {
      var question = exam.listQuestions[i];
      var plainText = stripHtml(question.question_text);
      if (plainText.toLowerCase().indexOf(lowerQuery) !== -1) {
        matches.push({ queNo: question.queNo, plainText: plainText });
        if (matches.length >= MAX_RESULTS) break;
      }
    }

    if (matches.length === 0) {
      resultsEl.innerHTML = `<div class="questionSearchEmpty">Không tìm thấy câu hỏi nào.</div>`;
      resultsEl.classList.remove("d-none");
      return;
    }

    var html = matches.map(function (m) {
      return `
        <div class="questionSearchItem" data-queno="${m.queNo}">
          <span class="questionSearchItemNo">#${m.queNo + 1}</span>
          <span class="questionSearchItemSnippet">${buildSnippet(m.plainText, trimmedQuery)}</span>
        </div>
      `;
    }).join("");

    resultsEl.innerHTML = html;
    resultsEl.classList.remove("d-none");
  }

  function jumpToQuestion(queNo) {
    exam.current = queNo;
    let question = exam.currentQuestion();
    question.getQuestion(exam.getChoice(), exam.getMarkToReview());
    exam.saveToLocalCache("CURRENT_QUESTION");
  }

  function init() {
    var input = document.getElementById("questionSearchInput");
    var resultsEl = document.getElementById("questionSearchResults");
    if (!input || !resultsEl) return;

    input.addEventListener("input", function () {
      runSearch(input.value);
    });

    resultsEl.addEventListener("click", function (event) {
      var item = event.target.closest(".questionSearchItem");
      if (!item) return;
      jumpToQuestion(parseInt(item.getAttribute("data-queno"), 10));
      input.value = "";
      resultsEl.classList.add("d-none");
      resultsEl.innerHTML = "";
    });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
