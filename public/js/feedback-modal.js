// Feedback Modal: one shared modal, used by both the exam view and the test view.
(function () {
  const MAX_INITIAL_COMMENTS = 3;

  function getModal() {
    const el = document.getElementById('feedbackModal');
    return el ? bootstrap.Modal.getOrCreateInstance(el) : null;
  }

  function buildFeedbackHtml(question, label) {
    let html = '<div class="feedback-content">';

    if (label) {
      html += `<h5 style="color: #64b5f6; margin-bottom: 15px;">${label}</h5>`;
    }

    if (question.general_feedback && question.general_feedback.trim() !== '') {
      html += `<h4 style="margin-top: 0;">📖 Explanation</h4>`;
      html += `<div>${question.general_feedback}</div>`;
    }

    const comments = question.discusstion || [];
    if (comments.length > 0) {
      html += `<h4 style="margin-top: 20px;">💬 Discussion</h4>`;
      html += `<div id="discussionComments">`;

      comments.forEach((comment, index) => {
        const hidden = index >= MAX_INITIAL_COMMENTS ? 'd-none' : '';
        html += `<div class="discussion-comment ${hidden}" style="border-left: 3px solid #64b5f6; padding-left: 10px; margin: 10px 0;">`;
        if (comment.username) {
          html += `<p style="margin: 0 0 5px 0; display: flex; align-items: center; gap: 8px; flex-wrap: wrap;"><strong>${comment.username}</strong>`;
          if (comment.selected_answers) {
            html += `<span class="badge bg-success" style="font-size: 0.75em; white-space: nowrap;">${comment.selected_answers}</span>`;
          }
          if (comment.upvote_count) {
            html += `<span style="color: #ff9800;">👍 ${comment.upvote_count}</span>`;
          }
          if (comment.date) {
            html += `<span style="color: #999; font-size: 0.9em;">${comment.date}</span>`;
          }
          html += `</p>`;
        }
        html += `<p style="margin: 0;">${comment.content || ''}</p>`;
        html += `</div>`;
      });

      html += `</div>`;

      if (comments.length > MAX_INITIAL_COMMENTS) {
        html += `<button type="button" id="viewMoreComments" class="btn btn-sm btn-outline-info" style="margin-top: 10px;">View More (${comments.length - MAX_INITIAL_COMMENTS} more)</button>`;
      }
    }

    if (html === '<div class="feedback-content">') {
      html += '<div class="feedback-loading">No feedback available for this question</div>';
    }

    return html + '</div>';
  }

  window.showFeedback = function (question, label) {
    const body = document.getElementById('feedbackModalBody');
    const modal = getModal();
    if (!body || !modal) return;

    if (!question) {
      body.innerHTML = '<div class="feedback-loading">No question available</div>';
    } else {
      body.innerHTML = buildFeedbackHtml(question, label);
      const viewMore = document.getElementById('viewMoreComments');
      if (viewMore) {
        viewMore.addEventListener('click', function () {
          body.querySelectorAll('.discussion-comment.d-none').forEach(c => c.classList.remove('d-none'));
          viewMore.style.display = 'none';
        });
      }
    }

    body.scrollTop = 0;
    modal.show();
  };

  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.querySelector('.btn-showFeedback');
    if (!btn) return;

    btn.addEventListener('click', function (e) {
      e.preventDefault();
      const question = typeof exam !== 'undefined' ? exam.currentQuestion() : null;
      const label = question ? `Question ${exam.current + 1}` : '';
      window.showFeedback(question, label);
    });
  });
})();
