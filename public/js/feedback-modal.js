// Feedback Modal Handler
let feedbackModalInstance = null;

document.addEventListener('DOMContentLoaded', function() {
  const feedbackModal = document.getElementById('feedbackModal');
  const feedbackModalBody = document.getElementById('feedbackModalBody');
  const btnShowFeedback = document.querySelector('.btn-showFeedback');

  if (!feedbackModal || !btnShowFeedback) return;

  // Initialize Bootstrap modal
  feedbackModalInstance = new bootstrap.Modal(feedbackModal, {
    backdrop: true,
    keyboard: true
  });

  // Handle modal show event to populate feedback content
  feedbackModal.addEventListener('show.bs.modal', function() {
    loadFeedbackContent();
  });

  function loadFeedbackContent() {
    if (typeof exam !== 'undefined') {
      try {
        const currentQuestion = exam.currentQuestion();
        if (currentQuestion) {
          displayFeedback(currentQuestion);
        } else {
          feedbackModalBody.innerHTML = '<div class="feedback-loading">No question available</div>';
        }
      } catch (error) {
        console.error('Error loading feedback:', error);
        feedbackModalBody.innerHTML = '<div class="feedback-loading">Error loading feedback</div>';
      }
    } else {
      feedbackModalBody.innerHTML = '<div class="feedback-loading">Exam object not found</div>';
    }
  }

  function displayFeedback(question) {
    let feedbackHTML = '<div class="feedback-content">';

    // Question number
    if (exam && exam.current !== undefined) {
      feedbackHTML += `<h5 style="color: #64b5f6; margin-bottom: 15px;">Question ${exam.current + 1}</h5>`;
    }

    // General feedback (detailed explanation) - MAIN CONTENT
    if (question.general_feedback && question.general_feedback.trim() !== '') {
      feedbackHTML += `<h4 style="margin-top: 0;">📖 Explanation</h4>`;
      feedbackHTML += `<div>${question.general_feedback}</div>`;
    }

    // Discussion/Comments if available
    if (question.discusstion && question.discusstion.length > 0) {
      feedbackHTML += `<h4 style="margin-top: 20px;">💬 Discussion</h4>`;
      question.discusstion.forEach((comment, index) => {
        let commentHTML = `<div style="border-left: 3px solid #64b5f6; padding-left: 10px; margin: 10px 0;">`;
        if (comment.username) {
          commentHTML += `<p style="margin: 0 0 5px 0;"><strong>${comment.username}</strong>`;
          if (comment.upvote_count) {
            commentHTML += ` <span style="color: #ff9800;">👍 ${comment.upvote_count}</span>`;
          }
          commentHTML += `</p>`;
        }
        commentHTML += `<p style="margin: 0;">${comment.body || comment.comment || comment}</p>`;
        commentHTML += `</div>`;
        feedbackHTML += commentHTML;
      });
    }

    feedbackHTML += '</div>';
    feedbackModalBody.innerHTML = feedbackHTML;
  }

  // Click button to show/hide modal
  btnShowFeedback.addEventListener('click', function(e) {
    e.preventDefault();
    e.stopPropagation();
    if (feedbackModalInstance) {
      feedbackModalInstance.toggle();
    }
  });
});
