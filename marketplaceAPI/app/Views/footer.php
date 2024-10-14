<style>
  .supportBtn {
    position: relative;
    top: 10%;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.05);
    border-radius: 10px;
    padding: 20px 5%;
    box-shadow: 0px 5px 15px 0px rgba(0, 0, 0, 0.25);
  }

  .supportBtn span {
    font-weight: 600;
    font-size: 1.4rem;
  }

  .supportBtn a {
    margin-left: 0 !important;
    width: auto !important;
  }
  .supportBtn2 {
      display: none;
    }

  @media screen and (max-width: 1200px) {
    .supportBtn {
      position: relative;
    }
  }

  @media screen and (max-width: 1100px) {
    .supportBtn a {
      position: relative;
      margin: 0 !important;
      width: auto !important;
    }
  }

  @media screen and (max-width: 767px) {
    .supportBtn {
      display: none;
    }
    .supportBtn2 {
      display: flex;
      width: 100%;
    }
  }
  .footer{
    padding-top: 2rem !important;
  }
  .footer-grid{
    padding-bottom: 1rem !important;
  }
  .footer-grid-menu {
    grid-row-gap: 0px !important;
  }
</style>

<footer class="footer">
  <div class="container-default footer-container">
    <div class="w-layout-grid footer-grid">

      <div>
        <div data-w-id="6664d1ce-10c1-caea-a340-642053fcd291" class="w-layout-grid footer-grid-menu">
          <div>
            <h3 class="footer-title menu">About Company</h3>
            <div class="_2-menus-footer">
              <ul role="list" class="footer-menu-container right-menu">
                <li class="footer-link-wrapper">
                  <a href="<?=base_URL("contactus")?>" class="footer-link">Contact Us</a>
                </li>
                <li class="footer-link-wrapper">
                  <a href="<?=base_URL("aboutus")?>" class="footer-link">About Us</a>
                </li>
                <li class="footer-link-wrapper">
                  <a href="<?=base_URL("privacypolicy")?>" class="footer-link">Privacy Policy</a>
                </li>
                <li class="footer-link-wrapper">
                  <a href="<?=base_URL("termcondition")?>" aria-current="page" class="footer-link w--current">Terms and Conditions</a>
                </li>
                <li class="footer-link-wrapper">
                  <a href="<?=base_URL("refundcancellation")?>" aria-current="page" class="footer-link w--current">Refund & Cancellation</a>
                </li>
                <li class="footer-link-wrapper">
                  <a href="<?=base_URL("login")?>" class="footer-link">Login / Register</a>
                </li>
              </ul>
            </div>
          </div>
          <?php if (isset($_SESSION['candidate_Unique_Id'])) { ?>
            <div>
              <h3 class="footer-title menu">For Candidates</h3>
              <ul role="list" class="footer-menu-container right-menu">
                <?php if (isset($resumephase_count)) {
                  if ($resumephase_count < 0) { ?>
                    <li class="footer-link-wrapper">
                      <a href="./create-resume" class="footer-link">Create Resume</a>
                    </li>
                <?php }
                } ?>
                <li class="footer-link-wrapper">
                  <a href="./emp-applied-job?savejobs=" class="footer-link">Save Jobs List</a>
                </li>
                <li class="footer-link-wrapper">
                  <a href="./emp-browse-jobs" class="footer-link">Browse Jobs</a>
                </li>
                <li class="footer-link-wrapper">
                  <a href="./employee-dashboard" class="footer-link">Candidate Dashboard</a>
                </li>
              </ul>
            </div>
          <?php } ?>
          <?php if (isset($_SESSION['employer_Unique_Id'])) { ?>
            <div>
              <h3 class="footer-title menu">For Employers</h3>
              <ul role="list" class="footer-menu-container right-menu">
                <li class="footer-link-wrapper">
                  <a href="./post_job" class="footer-link">Post A Job</a>
                </li>
                <li class="footer-link-wrapper">
                  <a href="./featured_jobs" class="footer-link">Pricing</a>
                </li>
                <li class="footer-link-wrapper">
                  <a href="./company-dashboard" class="footer-link">Employer Dashboard</a>
                </li>
              </ul>
            </div>
          <?php } ?>
          <div style="position: relative;">
            <h3 class="footer-title menu">Follow Us</h3>
            <ul role="list" class="footer-menu-container right-menu">
              <li class="footer-link-wrapper">
                <a href="http://facebook.com/" class="social-media-link-footer w-inline-block"><img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec9826823eec548b3182923_facebook.svg" alt="Facebook Icon - " class="social-icon-foote" />
                  <div>Facebook</div>
                </a>
              </li>
              <li class="footer-link-wrapper">
                <a href="http://twitter.com/" class="social-media-link-footer w-inline-block"><img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec98269518a6e6118d567d1_twitter.svg" alt="Twitter - " class="social-icon-foote" />
                  <div>Twitter</div>
                </a>
              </li>
              <li class="footer-link-wrapper">
                <a href="http://instagram.com/" class="social-media-link-footer w-inline-block"><img src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ec982692fa1e9d0c1a8db49_instagram.svg" alt="Instagram - " class="social-icon-foote" />
                  <div>Instagram</div>
                </a>
              </li>
            </ul>
            <!-- <div class="supportBtn">
              <span>Report a Glitch?</span>
              <a href="support" class="button-primary button-header-primary w-button">Gritupp Support</a>
            </div> -->
          </div>
        </div>
        <div class="text-center">
        <span>Report a Glitch?</span>
              <a href="<?=base_URL("contactus")?>" class="">Gritupp Support</a>
              </div>
      </div>
      <!-- <div class="supportBtn supportBtn2">
        <span>Report a Glitch?</span>
        <a href="support" class="button-primary button-header-primary w-button">Gritupp Support</a>
      </div> -->
    </div>
    <div data-w-id="43672ddb-3571-2ab6-380c-ff151fdf1f14" class="w-layout-grid copyright-grid">
      <a href="<?=base_URL("/")?>" class="w-inline-block"><img src="<?=base_url()?>/images/favicon1.png" alt="Jobs - " class="footer-logo" /></a>
      <div class="text-block">
        © Copyright <a style="color: #15ef;">Gritupp and Grow Tech Solution</a> - Developed at
        <a href="https://designoftime.co.in" target="_blank">Design Of Time Co.</a>
      </div>
    </div>
  </div>
</footer>

<!-- <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/js/bootstrap.bundle.min.js"></script> -->
<?php if(isset($_SESSION['employer_Unique_Id'])) { ?>
<script src="js/grituppcart.js"></script>
<?php } ?>