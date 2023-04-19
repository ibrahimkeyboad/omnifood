import React from 'react';

function CallToAction() {
  return (
    <section class='section-cta'>
      <div class='container'>
        <div class='cta'>
          <div class='cta-text-box'>
            <h2 class='heading-secondary'>Get your first meal for free!</h2>
            <p class='cta-text'>
              Healthy, tasty and hassle-free meals are waiting for you. Start
              eating well today. You can cancel or pause anytime. And the first
              meal is on us!
            </p>

            <form class='cta-form' action='#'>
              <div>
                <label for='full-name'>Full Name</label>
                <input
                  id='full-name'
                  type='text'
                  placeholder='John Smith'
                  required
                />
              </div>

              <div>
                <label for='email'>Email address</label>
                <input
                  id='email'
                  type='email'
                  placeholder='me@example.com'
                  required
                />
              </div>

              <div>
                <label for='select-where'>Where did you hear from us?</label>
                <select id='select-where' required>
                  <option value=''>Please choose one option:</option>
                  <option value='friends'>Friends and family</option>
                  <option value='youtube'>YouTube video</option>
                  <option value='podcast'>Podcast</option>
                  <option value='ad'>Facebook ad</option>
                  <option value='others'>Others</option>
                </select>
              </div>

              <button class='btn btn--form'>Sign up now</button>

              {/* <input type="checkbox" />
          <input type="number" />  */}
            </form>
          </div>
          <div
            class='cta-img-box'
            role='img'
            aria-label='Woman enjoying food'></div>
        </div>
      </div>
    </section>
  );
}

export default CallToAction;
