// INIT, GLOBAL VARIABLES
var groupId, examId, exam, queDataCount, que;
var USER_STORAGE = {
  screen_mode: "white-mode",
  group_id: "",
  exam_id: "",
  system_prompts: {},
};

// Default "system prompt" shown per group, meant to be read by Chrome's
// Ask Gemini sidebar alongside the current question so answers follow
// this format. Users can edit and save their own version per group.
var DEFAULT_SYSTEM_PROMPTS = {
  AIP_C01: `
  Bạn là chuyên gia luyện thi AWS Certification, đặc biệt AWS AI / Generative AI như AIF-C01 và AIP-C01.

Nhiệm vụ: Giải câu hỏi trắc nghiệm theo cách **NGẮN GỌN, ĐÚNG TRỌNG TÂM, DỄ NHỚ**, giúp người học nhanh chóng nhận diện đáp án trong kỳ thi.

### FORMAT

1. **✅ ĐÁP ÁN ĐÚNG**: A / B / C / D

2. **🎯 ĐỀ ĐANG HỎI GÌ?**
   Tóm tắt ngắn gọn:

   * Bài toán thực sự là gì?
   * Requirement quan trọng nhất là gì?
   * Đề đang ưu tiên điều gì? (cost, latency, scalability, operational overhead, security...)

3. **💡 LÝ DO CHỌN ĐÁP ÁN**
   Giải thích 1-2 câu tại sao đáp án đúng đáp ứng requirement tốt nhất.

4. **⚡ PHÂN TÍCH NHANH**

   * **A**: [✅ Đúng / ❌ Sai / ⚠️ Có thể nhưng không tối ưu] — lý do ngắn.
   * **B**: [✅ Đúng / ❌ Sai / ⚠️ Có thể nhưng không tối ưu] — lý do ngắn.
   * **C**: [✅ Đúng / ❌ Sai / ⚠️ Có thể nhưng không tối ưu] — lý do ngắn.
   * **D**: [✅ Đúng / ❌ Sai / ⚠️ Có thể nhưng không tối ưu] — lý do ngắn.

5. **🔑 KEYWORDS CẦN NHỚ**
   3-5 keyword/cụm từ quan trọng.

6. **🧠 MẸO THI**
   "Gặp X → nghĩ ngay đến Y."

### QUY TẮC

* Trả lời bằng tiếng Việt; giữ nguyên tên AWS service và thuật ngữ AWS bằng English.
* Không nhắc lại nguyên văn đề.
* Ưu tiên **requirement quyết định đáp án**.
* Phân biệt rõ:
  **"Có thể làm được" ≠ "Đáp án tốt nhất".**
* Đặc biệt chú ý: **BEST, MOST, LEAST, LOWEST COST, LOW LATENCY, MINIMUM OPERATIONAL OVERHEAD, MINIMUM DEVELOPMENT EFFORT, SERVERLESS, MANAGED, HIGHLY AVAILABLE, SCALABLE...**
* Nếu đáp án có thể hoạt động nhưng không tối ưu → dùng **⚠️ Có thể nhưng không tối ưu**.
* Nếu đáp án không đáp ứng requirement → **❌ Sai**.
* Nếu có nhiều đáp án đúng, chọn đúng số lượng theo yêu cầu.
* Mặc định **150-250 từ**; chỉ dài hơn khi câu hỏi có concept phức tạp hoặc dễ nhầm.
* Không giải thích kiến thức ngoài phạm vi cần thiết để chọn đáp án.
`,
  
  SAP_C02: `Bạn là một Chuyên gia Đào tạo Chứng chỉ AWS / Solution Architect Professional. Nhiệm vụ của bạn là giải thích chi tiết câu hỏi trắc nghiệm được cung cấp.
Bạn là chuyên gia luyện thi AWS Certification, đặc biệt AWS Solution Architect Professional như SAP-C02 và SAA-C03.

Nhiệm vụ: Giải câu hỏi trắc nghiệm theo cách **NGẮN GỌN, ĐÚNG TRỌNG TÂM, DỄ NHỚ**, giúp người học nhanh chóng nhận diện đáp án trong kỳ thi.

### FORMAT

1. **✅ ĐÁP ÁN ĐÚNG**: A / B / C / D

2. **🎯 ĐỀ ĐANG HỎI GÌ?**
   Tóm tắt ngắn gọn:

   * Bài toán thực sự là gì?
   * Requirement quan trọng nhất là gì?
   * Đề đang ưu tiên điều gì? (cost, latency, scalability, operational overhead, security...)

3. **💡 LÝ DO CHỌN ĐÁP ÁN**
   Giải thích 1-2 câu tại sao đáp án đúng đáp ứng requirement tốt nhất.

4. **⚡ PHÂN TÍCH NHANH**

   * **A**: [✅ Đúng / ❌ Sai / ⚠️ Có thể nhưng không tối ưu] — lý do ngắn.
   * **B**: [✅ Đúng / ❌ Sai / ⚠️ Có thể nhưng không tối ưu] — lý do ngắn.
   * **C**: [✅ Đúng / ❌ Sai / ⚠️ Có thể nhưng không tối ưu] — lý do ngắn.
   * **D**: [✅ Đúng / ❌ Sai / ⚠️ Có thể nhưng không tối ưu] — lý do ngắn.

5. **🔑 KEYWORDS CẦN NHỚ**
   3-5 keyword/cụm từ quan trọng.

6. **🧠 MẸO THI**
   "Gặp X → nghĩ ngay đến Y."

### QUY TẮC

* Trả lời bằng tiếng Việt; giữ nguyên tên AWS service và thuật ngữ AWS bằng English.
* Không nhắc lại nguyên văn đề.
* Ưu tiên **requirement quyết định đáp án**.
* Phân biệt rõ:
  **"Có thể làm được" ≠ "Đáp án tốt nhất".**
* Đặc biệt chú ý: **BEST, MOST, LEAST, LOWEST COST, LOW LATENCY, MINIMUM OPERATIONAL OVERHEAD, MINIMUM DEVELOPMENT EFFORT, SERVERLESS, MANAGED, HIGHLY AVAILABLE, SCALABLE...**
* Nếu đáp án có thể hoạt động nhưng không tối ưu → dùng **⚠️ Có thể nhưng không tối ưu**.
* Nếu đáp án không đáp ứng requirement → **❌ Sai**.
* Nếu có nhiều đáp án đúng, chọn đúng số lượng theo yêu cầu.
* Mặc định **150-250 từ**; chỉ dài hơn khi câu hỏi có concept phức tạp hoặc dễ nhầm.
* Không giải thích kiến thức ngoài phạm vi cần thiết để chọn đáp án.
`

};

function getUserStorage(id) {
  let currentLocalStorage = localStorage.getItem("USER_STORAGE");
  if (currentLocalStorage) {
    USER_STORAGE = JSON.parse(currentLocalStorage);
  }
  if (!USER_STORAGE.system_prompts) {
    USER_STORAGE.system_prompts = {};
  }

  let output = "";
  switch (id) {
    case "screen_mode":
      output = USER_STORAGE.screen_mode;
      break;
    case "group_id":
      output = USER_STORAGE.group_id;
      break;
    case "exam_id":
      output = USER_STORAGE.exam_id;
      break;
    case "all":
      output = USER_STORAGE;
      break;
    default:
      output = USER_STORAGE;
  }

  return output;
}

function setUserStorage(id, value) {
  switch(id) {
    case "screen_mode":
      USER_STORAGE["screen_mode"] = value;
      break;
    case "group_id":
      USER_STORAGE["group_id"] = value;
      break;
    case "exam_id":
      USER_STORAGE["exam_id"] = value;
      break;
  }
  localStorage.setItem("USER_STORAGE", JSON.stringify(USER_STORAGE));

  return USER_STORAGE;
}

function getSystemPrompt(targetGroupId) {
  let storage = getUserStorage("all");
  let prompts = storage.system_prompts || {};
  if (prompts[targetGroupId] !== undefined) {
    return prompts[targetGroupId];
  }
  return DEFAULT_SYSTEM_PROMPTS[targetGroupId] || "";
}

function setSystemPrompt(targetGroupId, text) {
  let storage = getUserStorage("all");
  if (!storage.system_prompts) {
    storage.system_prompts = {};
  }
  storage.system_prompts[targetGroupId] = text;
  USER_STORAGE = storage;
  localStorage.setItem("USER_STORAGE", JSON.stringify(USER_STORAGE));
}

function init() {
  loadDarkMode();
  groupId = getUserStorage("group_id");
  $("#groupList").val(groupId);
  switchGroup(groupId);

  examId = getUserStorage("exam_id");
  $("#deskList").val(examId);
  switchDesk(groupId, examId);
}
init();

// LOAD QUESTION
$("#attempts-que").on("click", "ul > li", function () {
  exam.current = $(this).data("queno");
  let question = exam.currentQuestion();
  question.getQuestion(
    exam.getChoice(),
    exam.getMarkToReview()
  );
  exam.saveToLocalCache("CURRENT_QUESTION");
  $(".explanation-block").html("");
});

// SHOW FEEDBACK
$(".btn-showAnswer").on("click", function () {
  let isShowAnswer = false;
  if ($(".btn-showAnswer").hasClass("show")) {
    isShowAnswer = false;
    $(".btn-showAnswer").removeClass("show");
    $(".btn-showAnswer").text("Show Answer");
  } else {
    isShowAnswer = true;
    $(".btn-showAnswer").addClass("show");
    $(".btn-showAnswer").text("Hide Answer");
  }

  let question = exam.currentQuestion();
  question.showQueAnswerHtml(exam.getChoice(), isShowAnswer);
  question.showCommentHtml(exam.getComment(), isShowAnswer);
});

// EDIT QUESION
$("#btnEditQuestionModal").on("click", function() {
  if($("#editQuestionModal").hasClass("show")) {
    $('#editQuestionModal').modal('hide');
  } else {
    $('#editQuestionModal').modal('show');
    $('#editQuestionModal .txtContent').val(exam.getComment(exam.current));
  }
});

$("#editQuestionModal").on("click", ".btnSave", function() {
  let content = $('#editQuestionModal .txtContent').val();
  exam.setComment(exam.current, content);
  $('#editQuestionModal').modal('hide');
});

$("#editQuestionModal").on("click", ".btn-secondary", function() {
  $('#editQuestionModal').modal('hide');
});

$(".btn-editQuestion").on("click", function () {
  console.log("btn editques");
});

// SHOW DISSUSTION
$(".btn-showDiscussion").on("click", function () {
  let isShowDiscussion = false;
  let discusstion = exam.currentQuestion()["discusstion"];
  let discusstion_count = discusstion ? discusstion.length : 0;
  if ($(".btn-showDiscussion").hasClass("show")) {
    isShowDiscussion = false;
    $(".btn-showDiscussion").removeClass("show");
    $(".discussion-container").addClass("d-none");
    $(".btn-showDiscussion").text(`Show Discussion (${discusstion_count})`);
  } else {
    isShowDiscussion = true;
    $(".btn-showDiscussion").addClass("show");
    $(".discussion-container").removeClass("d-none");
    $(".btn-showDiscussion").text(`Hide Discussion (${discusstion_count})`);
  }
  
  if(discusstion) {
    let html_discusstion = "";
    //Sort by voted count
    discusstion.sort((a, b) => b.upvote_count - a.upvote_count);
    
    discusstion.forEach(function (comment, index) {
      let selected_answers = comment.selected_answers;
      let html_selected_answers = "";
      if(selected_answers !== undefined && selected_answers != "") {
        html_selected_answers = `<span class="comment-selected-answers">${comment.selected_answers}</span>`;
      }
      html_discusstion += `
        <li id="comment-${comment.id}" class="comment-container" data-comment-id="${comment.id}">
          <div class="pb-1">
            <span class="fw-bold">#${index + 1}</span> 
            ${html_selected_answers}
            (<span class="comment-voted">${comment.upvote_count}</span> Voted)
          </div>
          <div class="comment-content">${comment.content}</div>
          <div class="pt-1"><span class="comment-username">${comment.username}</span> (<span class="comment-date">${comment.date}</span>)</div>
        </li>
      `;
    });
    html_discusstion = `
      <div class="p-1 mb-1 bg-info text-black">Discussion</div>
      <ul class="comment-list">
        ${html_discusstion}
      </ul>
    `;
    $(".discussion-container").html(html_discusstion);
  } else {
    $(".discussion-container").html("Have not comments!");
  }
});

// NEXT QUESTION
$(".btnNextQue").on("click", function () {
  exam.nextQuestion();
  let question = exam.currentQuestion();
  question.getQuestion(
    exam.getChoice(),
    exam.getMarkToReview()
  );
  exam.saveToLocalCache("CURRENT_QUESTION");
});

// PREVIOUS QUESTION
$(".btnPrevQue").on("click", function () {
  exam.prevQuestion();
  let question = exam.currentQuestion();
  question.getQuestion(
    exam.getChoice(),
    exam.getMarkToReview()
  );
  exam.saveToLocalCache("CURRENT_QUESTION");
});

// SHORTKEYS
$(document).keydown(function (e) {
  if (["textarea"].includes(e.target.nodeName.toLowerCase())) return;
  
  switch(e.keyCode) {
    case 37: //LEFT
      $(".btnPrevQue")[0].click();
      break;
    case 39: //RIGHT
      $(".btnNextQue")[0].click();
      break;
    // case 38: //DOWN
    //   $(".btn-showAnswer")[0].click();
    //   break;
    // case 40: //UP
    //   $(".btn-showAnswer")[0].click();
    //   break;
    case 13: //ENTER
      e.preventDefault();
      $(".btn-showAnswer")[0].click();
      $(".btn-showDiscussion")[0].click();
      break;
    case 32: //SPACE
      e.preventDefault();
      $("#starMarkToReview").click();
      break;
    case 82: //R = Review
      e.preventDefault();
      $("#testBlock .btnQuickReview").click();
      break;
      // case 67: //C = Edit self comment
    case 69: //E = Edit self comment
      e.preventDefault();
      $("#btnEditQuestionModal").click();
      break;
    default:
      break
  }
});

// USERS CHOICE
$("#ques-list").on("click", ".ip-radio", function () {
  let aws = "";
  $("#ques-list .ip-radio:checked").each(function () {
    aws += $(this).val();
  });

  exam.saveChoice(exam.current, aws);
  if (aws != "") {
    que.markChoice(exam.current, true);
  } else {
    que.markChoice(exam.current, false);
  }
});

// MARK TO REVIEW
$("#starMarkToReview").on("click", function () {
  let isMarked = $("#starMarkToReview").hasClass("true");
  exam.saveMarkToReview(exam.current, !isMarked);
  que.markToReview(exam.current, !isMarked);
  que.showMarkToReview(!isMarked);
});

// REVIEW RESULT
$(".btn-review").on("click", function () {
  $(".ExamQuestionsBlock").addClass("d-none");
  $(".resultBlock").removeClass("d-none");
  exam.showResult();
});

// GO TO QUESTION IN REVIEW RESULT SCREEN
$("#resultBlock").on("click", ".btnViewQue", function () {
  exam.current = $(this).data("queno");
  let question = exam.currentQuestion();
  question.getQuestion(
    exam.getChoice(),
    exam.getMarkToReview()
  );
  $(".btn-return").click();
});

$(".btn-return").on("click", function () {
  $(".ExamQuestionsBlock").removeClass("d-none");
  $(".settingBlock").removeClass("d-none");
  $(".examBlock").removeClass("d-none");
  $(".examBlock").removeClass("d-none");
  $(".resultBlock").addClass("d-none");
  $(".starBlock").addClass("d-none");
  $(".testBlock").addClass("d-none");
  $(".testContent ").html("No Contents");
  $(".btnShowAnswer").addClass("d-none");
});

//SAVE QUIZ TO CACHE
$(".btn-saveQuiz").on("click", function () {
  exam.saveToLocalCache();
  $(".notification").text("Save to local successfully!!");
  $(".notification").removeClass("dange").addClass("success");
});

//CLEAR CACHE
$(".btn-clearQuiz").on("click", function () {
  exam.clearLocalCache();
  $(".notification").text("Clear local storage successfully!!");
  $(".notification").removeClass("success").addClass("danger");
});

//CHOICE GROUP
$("#groupList").on("change", function () {
  switchGroup($("#groupList").val());
});

//CHOICE DESK
$("#deskList").on("change", function () {
  groupId = $("#groupList").val();
  examId = $("#deskList").val();
  switchDesk(groupId, examId);
  setUserStorage("exam_id", examId);
});

function switchGroup(groupId) {
  let groupIndex = listExamGroup.findIndex((group) => group.id == groupId);
  if(groupIndex < 0) { 
    groupIndex = 0;
  }

  let listItem = listExamGroup[groupIndex].list;
  let itemHtml = "";
  listItem.forEach(function (item) {
    itemHtml += `<option value="${item.id}">${item.name}</option>`
  });
  $("#deskList").html(itemHtml);

  setUserStorage("group_id", groupId);
  switchDesk(groupId, examId);
}

function switchDesk(groupId, examId) {
  let groupIndex = listExamGroup.findIndex((group) => group.id == groupId);
  if(groupIndex < 0) return;

  let listExam = listExamGroup[groupIndex].list;
  let examIndex = listExam.findIndex((exam) => exam.id == examId);
  if(examIndex < 0) {
    examIndex = 0;
    examId = listExam[examIndex].id
  }
  //Set dropdown status
  $("#deskList .deskItem").removeClass("active");
  $(`#deskList .deskItem[data-examid="${examId}"]`).addClass("active");
  $("#selectExam").text(listExam[examIndex].name);
  $("#examName").text(listExam[examIndex].name);

  //Set URL
  setSearchParam("group", groupId);
  setSearchParam("exam", examId);

  exam = new Exam(listExam[examIndex].data, `cache${listExam[examIndex].id}`);
  queDataCount = exam.count;

  que = new Question();
  que.showQueNumber(exam.current);
  que.showQueListNumber(exam.count);

  //Load from local cache
  exam.loadFromLocalCache();
  exam.loadQueListNumber();

  //Show first question or question is saved from local
  let firstQuestion = exam.listQuestions[exam.current];
  firstQuestion.getQuestion(
    exam.getChoice(),
    exam.getMarkToReview()
  );
}

// CREATE TEST
let testQuestion = [];
let showDetail = false;
$(".btn-createTest").on("click", function () {
  $(".ExamQuestionsBlock").addClass("d-none");
  $(".examBlock").addClass("d-none");
  $(".settingBlock").addClass("d-none");
  $(".testBlock").removeClass("d-none");
});

$("#testBlock").on("click", ".btnCreateTest", function () {
  let type = $("#filterOptionType2").val();
  let max = $("#filterOptionMaxQuestion2").val();
  let from = $("#filterOptionFromQuestion2").val();
  let to = $("#filterOptionToQuestion2").val();
  let random = $("#filterOptionRandom").val();
  let show_question_title = $("#show_question_title").val() == "1";
  
  testQuestion = exam.createExam({
    "type": type,
    "from": from,
    "to": to,
    "random": random,
    "max": max,
    "question_options": {
      "show_title": show_question_title,
    }
  });

  exam.renderContent_v2(testQuestion, "#testBlock .testContent");
  $(".btnShowAnswer").removeClass("d-none");
});

// MARK STAR
$("#testBlock").on("click", ".starMarkToReview", function () {
  let queNo = $(this).data("queno");
  let isMarked = $(`#testBlock .starMarkToReview[data-queno="${queNo}"]`).hasClass("true");
  
  exam.saveMarkToReview(queNo, !isMarked);
  que.markToReview(queNo, !isMarked);
  if(isMarked) {
    $(`#testBlock .starMarkToReview[data-queno="${queNo}"]`).removeClass("true").addClass("false");
  } else {
    $(`#testBlock .starMarkToReview[data-queno="${queNo}"]`).removeClass("false").addClass("true");
  }
});

// SHOW ANSWER
$("#testBlock").on("click", ".btnShowAnswerQuestion", function (event) {
  let index = $(this).data("index");
  let hideshow = $(this).data("hideshow") == "Hide" ? false : true;
  let question = testQuestion[index];

  let userChoice = "";
  $(`#QuestionBlockItem_${index} .ip-radio:checked`).each((key, item) => {
    userChoice += $(item).val() + " "
  })

  $(`#QuestionBlockItem_${index}`).html(question.renderQuestionHtml_v2({
    index: index,
    showAnswer: hideshow,
    showComment: false,
    isStar: false,
    userChoice: userChoice,
    showAnswerBtn: true,
    showCommentBtn: true,
  }));

});

// SHOW DISCUSSTION
$("#testBlock").on("click", ".btnShowDisscussionQuestion", function () {
  let index = $(this).data("index");
  let hideshow = $(this).data("hideshow") == "Hide" ? false : true;
  let question = testQuestion[index];

  let userChoice = "";
  $(`#QuestionBlockItem_${index} .ip-radio:checked`).each((key, item) => {
    userChoice += $(item).val() + " "
  })

  $(`#QuestionBlockItem_${index}`).html(question.renderQuestionHtml_v2({
    index: index,
    showAnswer: true,
    showComment: hideshow,
    isStar: false,
    userChoice: userChoice,
    showAnswerBtn: true,
    showCommentBtn: true,
  }));

});

// QUICK REVIEW
$("#testBlock").on("click", ".btnQuickReview", function () {
  if($("#quickReviewModal").hasClass("show")) {
    $('#quickReviewModal').modal('hide');
  } else {
    $('#quickReviewModal').modal('show');
    let score = exam.calculateScore(testQuestion);
    exam.renderTestQuickView(score, "#quickReviewContent");
    $("#tableQuickReviewDetails").html("");
    if(showDetail) {
      exam.renderTestQuickViewTable(testQuestion, "#tableQuickReviewDetails");
    }
  }
});

$("#testBlock").on("click", ".btnQuickReviewDetails", function () {
  if(!showDetail) {
    exam.renderTestQuickViewTable(testQuestion, "#tableQuickReviewDetails");
    $("#testBlock .btnQuickReviewDetails").text("Hide Details");
  } else {
    $("#testBlock .btnQuickReviewDetails").text("Show Details");
    $("#tableQuickReviewDetails").html("");
  }
  showDetail = !showDetail;
});

$("#testBlock").on("click", ".btnScrollToQuestion", function () {
  let id = "QuestionBlockItem_" + $(this).data("index")
  document.getElementById(id).scrollIntoView();
  $('#quickReviewModal').modal('hide');
  // exam.renderTestQuickViewTable(testQuestion, "#tableQuickReviewDetails");
});


$("#quickReviewModal").on("click", ".btn-secondary", function () {
  $('#quickReviewModal').modal('hide');
});

// SHOW ALL ANSWER
$("#testBlock").on("click", ".btnShowAnswer", function () {
  $("#testBlock .btnShowAnswerQuestion").click();
});

//EXPORT
$(".btn-exportQuiz").on("click", function () {
  exam.export();
});

$("#modals").on("click", "#btnCopyExportContent", function () {
  exam.copyText("exportContent");
  $("#modals #btnCopyExportContent").text("Copied")
});

//EDIT COMMENT
$(".comment-block").on("click", ".btnEditComment", function () {
  if($(this).hasClass("nextCancelWhenClick")) {
    // Cancel when click 2 times
    $(this).removeClass("nextCancelWhenClick");
    $(".comment-block .textComment").show();
    $(".edit-comment-block").html("");
    return "Cancel";
  } else {
    $(this).addClass("nextCancelWhenClick");
  }
  
  let content = exam.getComment(exam.current);
  let htmlEditComment = `
    <textarea class="txtContent form-control" aria-label="Enter comment" rows="5">${content}</textarea>
    <a class="btnSave btn btn-sm btn-success mt-1">Save</a>
  `;

  $(".comment-block .textComment").hide();
  $(".edit-comment-block").html(htmlEditComment);
});

$(".comment-block").on("click", ".btnSave", function () {
  let content = $(".comment-block .txtContent").val();
  exam.setComment(exam.current, content);

  $(".edit-comment-block").html("");
  que.showCommentHtml(content, true);
  $(".comment-block .textComment").show();
});

// DARK MODE
function toogleDarkMode() {
  let screen_mode = getUserStorage("screen_mode");
  if(screen_mode == "dark-mode") {
    screen_mode = "white-mode";
    $("body").addClass(screen_mode);
    $("body").removeClass("dark-mode");
  } else {
    screen_mode = "dark-mode";
    $("body").addClass(screen_mode);
    $("body").removeClass("white-mode");
  }

  setUserStorage("screen_mode", screen_mode);

  return screen_mode;
}

function loadDarkMode() {
  let screen_mode = getUserStorage("screen_mode");

  if(screen_mode == "dark-mode") {
    $("body").addClass(screen_mode);
    $("body").removeClass("white-mode");
  } else {
    $("body").addClass(screen_mode);
    $("body").removeClass("dark-mode");
  }

  return "Load Dark Mode Successfull"
}

$(".btnToogleDarkMode").on("click", function () {
  toogleDarkMode();
});

// Clear All Answer
$(".btnClearAllAnswer").on("click", function () {
  exam.clearLocalCache("ONLY_ANSWER");
  // Re-show list question number
  que.showQueListNumber(exam.count);
  exam.loadQueListNumber();
});
