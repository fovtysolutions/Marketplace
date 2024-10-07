<?= $this->extend("layouts/public_layout")?>
<?= $this->section("content")?>
    <div class="section contact-us wf-section">
      <div class="container-small align-center">
        <h1 data-w-id="fd0558f8-4717-d75b-3cad-6a3ac5bee0b0" style="
              -webkit-transform: translate3d(0, 100px, 0) scale3d(0.8, 0.8, 1)
                rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -moz-transform: translate3d(0, 100px, 0) scale3d(0.8, 0.8, 1)
                rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              -ms-transform: translate3d(0, 100px, 0) scale3d(0.8, 0.8, 1)
                rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              transform: translate3d(0, 100px, 0) scale3d(0.8, 0.8, 1)
                rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
              opacity: 1;
            " class="heading-size-1">
          <span class="color-primary-1 underline">Gritupp </span> Support
        </h1>
        <p data-w-id="daf7f6e0-2c5f-2ebb-2c1f-063a59b2581b" style="opacity: 1" class="paragraph-large">
          Have questions? We’re ready to help!
        </p>
      </div>
      <div class="container-default contact-us">
        <div class="contact-us-wrapper">
          <div class="w-layout-grid contact-us-grid">
            <div data-w-id="9532385e-53c4-ddce-9626-2f4d41143bf2" style="opacity: 1" class="w-form">
              <form id="wf-form-Support-Form" action="assets/php/supportback.php" method="POST">
                <div class="w-layout-grid grid-form v2">
                  <div>
                    <label for="Name-2">Name<span class="color-red">*</span></label><input type="text" class="input w-input" maxlength="256" name="Name" data-name="Name" placeholder="John Carter" id="Name-2" required="" />
                  </div>
                  <div>
                    <label for="Email-4">Email<span class="color-red">*</span></label><input type="email" class="input w-input" maxlength="256" name="Email" data-name="Email" placeholder="john@company.com" id="Email" required="" />
                  </div>
                  <div>
                    <label for="Phone-Number">Phone Number</label><input type="tel" class="input w-input" maxlength="256" name="Phone_Number" data-name="Phone Number" placeholder="(123) 456 - 7890" id="Phone-Number" />
                  </div>
                  <div>
                    <label for="Subject">Subject<span class="color-red">*</span></label><input type="text" class="input w-input" maxlength="256" name="Subject" data-name="Subject" placeholder="How can we help?" id="Subject" required="" />
                  </div>
                  <div id="w-node-_8a5012a6-e174-591d-5dc0-6312aefc16b7-9cd29a21" class="input-container-full-width">
                    <label for="Message">Message</label><textarea placeholder="Hello, I would like to get in touch with Jobs Job Board to post a featured job opening..." maxlength="5000" id="Message" name="Message" data-name="Message" required="" class="textarea w-input"></textarea>
                  </div>
                </div>
                <div class="spacer form"></div>
                <div class="w-layout-grid grid-form v2">
                  <input type="submit" value="Send Message" data-wait="Please wait..." id="w-node-_42b08780-189d-22e7-2b65-e6243612fe69-9cd29a21" class="button-primary large w-button" />
                </div>
              </form>
              <div class="success-form w-form-done">
                <div>Thank you! Your submission has been received!</div>
              </div>
              <div class="error-message w-form-fail">
                <div>
                  Oops! Something went wrong while submitting the form.
                </div>
              </div>
            </div>
            <div data-w-id="2971679f-4774-ef9e-1fd2-c34fcceb134a" style="opacity: 1" class="sidebar-form">
              <div class="form-sidebar-title">Contact Us</div>
              <p class="mg-bottom-50px">
                Have questions or feedback? We'd love to hear from you! Reach out to our team at
                <a href="mailto:info@gritupp.com">info@gritupp.com.</a>
              </p>
              <div class="form-sidebar-title">Follow us</div>
              <div class="w-layout-grid social-media-grid">
                <a href="http://facebook.com/" class="social-media-link w-inline-block"><img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec9826823eec548b3182923_facebook.svg" alt="Facebook Icon - " /></a><a href="https://twitter.com/" class="social-media-link w-inline-block"><img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec98269518a6e6118d567d1_twitter.svg" alt="Twitter - " /></a><a href="https://www.instagram.com/" class="social-media-link w-inline-block"><img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec982692fa1e9d0c1a8db49_instagram.svg" alt="Instagram - " /></a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
<?= $this->endSection()?> 