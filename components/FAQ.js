/* components/FAQ.js */

const FAQ = () => {
  return `
    <div class="section-content">
      <h2>Frequently Asked Questions</h2>
      <div class="faq-list">
        <div class="faq-item">
          <div class="faq-question">Is this meal plan suitable for weight loss?</div>
          <div class="faq-answer">Yes, this meal plan is designed to be calorie-controlled and nutrient-dense, making it very suitable for weight loss when combined with a calorie deficit.</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">Can I build muscle on this plan?</div>
          <div class="faq-answer">Absolutely! This plan provides sufficient protein from plant-based sources to support muscle growth, especially when combined with resistance training. Consider the "High Protein" theme for even more protein.</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">How many calories are in this meal plan?</div>
          <div class="faq-answer">The calorie content will vary depending on portion sizes and specific ingredient choices.  A sample day is roughly estimated to be around 1800-2200 calories, but this can be adjusted. We recommend using a calorie tracking app to fine-tune it to your needs.</div>
        </div>
        <div class="faq-item">
          <div class="faq-question">Can I follow this plan long-term?</div>
          <div class="faq-answer">Yes, this plan is designed for long-term sustainability. It focuses on whole, unprocessed plant-based foods and encourages consistency, which are key for long-term health and wellness.</div>
        </div>
      </div>
    </div>
  `;
};

FAQ.init = () => {
  const faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(item => {
    const question = item.querySelector('.faq-question');
    question.addEventListener('click', () => {
      item.classList.toggle('active');
    });
  });
};


export default FAQ;