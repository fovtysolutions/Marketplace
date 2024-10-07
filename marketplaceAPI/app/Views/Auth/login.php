<?= $this->extend("layouts/public_layout")?>
<?= $this->section("content")?>
  <style>
    .eyeInput {
      padding: 0;
      display: flex;
      overflow: hidden;
      justify-content: flex-start;
      align-items: flex-start;
    }

    .eyeInput input {
      width: 90%;
      height: 100%;
      outline: none;
      border: none;
      padding-left: 20px;
    }

    .eyeInput .eyeIcon {
      width: 10%;
      border-left: 1px solid #cacaca;
      height: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      cursor: pointer;
    }

    .eyeIcon svg {
      height: 100%;
    }

    .googleIcon {
      width: 23px;
      height: 23px;
      margin-right: 6px;
      fill: #ffffff;
    }
  </style>
    <div class="utility-page-wrap">
      <div
        data-w-id="5e86ada79942c1e4247fd4c700000000000b"
        style="
          -webkit-transform: translate3d(0, 100px, 0) scale3d(0.8, 0.8, 1)
            rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
          -moz-transform: translate3d(0, 100px, 0) scale3d(0.8, 0.8, 1)
            rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
          -ms-transform: translate3d(0, 100px, 0) scale3d(0.8, 0.8, 1)
            rotateX(0) rotateY(0) rotateZ(0) skew(0, 0);
          transform: translate3d(0, 100px, 0) scale3d(0.8, 0.8, 1) rotateX(0)
            rotateY(0) rotateZ(0) skew(0, 0);
          opacity: 1;
        "
        class="utility-page-content-password w-password-page w-form"
      >
        <form
          action="/.wf_auth"
          method="post"
          id="loginform"
          name="email-form"
          data-name="Email Form"
          class="utility-page-form w-password-page"
        >
          <div class="icon-password-content">
            <img
              src="https://assets.website-files.com/5ec5d86528da2f24250d634c/5ecda3ef4028e0abe32b01b8_icon-password-jobs-template.svg"
              alt="Password Protected - "
              class="icon-password"
            />
          </div>
          <h2>Login</h2>
            <div class="_2-buttons-wrapper" style="margin-bottom:35px; !important">
              <div class="button-spacer">
                <a href="#" class="button-primary full-width-mobile w-button candidateAndEmployeButton"
                  onclick="setPrimary(this)">Candidate</a>
              </div>
              <a href="#" class="button-secondary w-button candidateAndEmployeButton"
                onclick="setPrimary(this)">Employer</a>
            </div>
          
          <input
            type="text"
            class="input password w-password-page w-input"
            autofocus="true"
            maxlength="256"
            name="email"
            data-name="field"
            placeholder="Enter your username or email"
            id="email"
            required
          />
          <div class="input password w-password-page w-input eyeInput">
            <input type="password" class="" autofocus="true" maxlength="256" name="password" data-name="field"
              placeholder="Enter your password" id="eyeInputField" required />
            <div class="eyeIcon" id="eyeIcon">
              <svg style="width: 25px; height:25px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                <path
                  d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
              </svg>
            </div>
          </div>

          <input
            type="submit"
            value="Submit"
            data-wait="Please wait..."
            class="button-primary full-width w-password-page w-button"
            id="senddetails"
          />
          <div class="text-center" style="width:100%; margin-top:1.5rem;">
            <a type="button" href="assets/php/Login/entryphp/google-oauth.php"
              class="button-primary full-width w-password-page w-button form-control" value="Custome Plan"
              id="googlebtn"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" class="googleIcon">
                <path
                  d="M488 261.8C488 403.3 391.1 504 248 504 110.8 504 0 393.2 0 256S110.8 8 248 8c66.8 0 123 24.5 166.3 64.9l-67.5 64.9C258.5 52.6 94.3 116.6 94.3 256c0 86.5 69.1 156.6 153.7 156.6 98.2 0 135-70.4 140.8-106.9H248v-85.3h236.1c2.3 12.7 3.9 24.9 3.9 41.4z" />
              </svg>Sign In With Google
            </a>
          </div>
          <div style="display: none" class="w-password-page w-embed w-script">
            <input
              type="hidden"
              name="path"
              value="<%WF_FORM_VALUE_PATH%>"
            /><input type="hidden" name="page" value="<%WF_FORM_VALUE_PAGE%>" />
          </div>
          <div style="display: none" class="w-password-page w-embed w-script">
            <script type="application/javascript">
              (function _handlePasswordPageOnload() {
                if (/[?&]e=1(&|$)/.test(document.location.search)) {
                  document.querySelector(
                    ".w-password-page.w-form-fail"
                  ).style.display = "block";
                }
              })();
            </script>
          </div>
          <a href="<?= base_URL("canregister")?>" id="registerlink"><p></p>Not a user? <u>Register now</u></a>
          <a href="<?= base_URL("forgot")?>"><p></p>Forgot Password? <u>Click Here</u></a>
          <a id="error" style="color:red;"></a>
          <input type="hidden" name="userface" id="userface" value="candidate">
        </form>
        <div class="alert alert-success" id="responsehandler" style="display:none;"> </div>
      </div>
    </div>
    <script>
      $(document).ready(function(){
        console.log("Radhe Radhe");
          $("#loginform").submit(function(e){
              e.preventDefault();
              $.ajax({
                type:"POST",
                url:"<?= base_URL("login")?>",
                data:new FormData(this),
                processData:false,
                contentType:false,
                beforeSend:function(){
                    $("#senddetails").val("Please Wait..");
                },
                success:function(response){
                  if (response.status === 'success') {
                      $('#responsehandler').show();
                      $('#responsehandler').removeClass('alert alert-danger');
                      $('#responsehandler').addClass('alert alert-success');
                      $('#responsehandler').html(JSON.stringify(response.data));
                      setTimeout(() => {
                        $('#responsehandler').hide();
                        $("#senddetails").val("Login");
                        location.href = response.route;
                      }, 3000);
                  } else if (response.status === 'error') {
                      if (response.errors) {
                          $('#responsehandler').show();
                          $('#responsehandler').removeClass('alert alert-success');
                          $('#responsehandler').addClass('alert alert-danger');
                          $('#responsehandler').html(response.errors.email);
                          $('#responsehandler').html(response.errors.password);
                      } else {
                        $('#responsehandler').hide();
                      }
                      if(response.data){
                        $('#responsehandler').show();
                        $('#responsehandler').removeClass('alert alert-success');
                        $('#responsehandler').addClass('alert alert-danger');
                        $('#responsehandler').html(JSON.stringify(response.data));
                      }
                    setTimeout(() => {
                      $('#responsehandler').hide();
                      $("#senddetails").val("Login");
                    }, 3000);
                  }
                }
              })
          })
      })  
    </script>
    <script>
      const eyeInputField = document.getElementById('eyeInputField');
      const eyeIcon = document.getElementById('eyeIcon');

      eyeIcon.addEventListener('click', () => {
        if (eyeInputField.type === "password") {
          eyeInputField.type = "text";
        } else {
          eyeInputField.type = "password";
        }
      });

      function setPrimary(clickedButton) {
        const buttons = document.querySelectorAll('.candidateAndEmployeButton');

        buttons.forEach(button => {
          if (button === clickedButton) {
            button.classList.add('button-primary');
            button.classList.remove('button-secondary');
          } else {
            button.classList.remove('button-primary');
            button.classList.add('button-secondary');
          }
        });

        if (clickedButton.textContent === "Candidate") {
          document.getElementById('email').placeholder = "Enter your username or email";
          document.getElementById('registerlink').href = "<?= base_URL("canregister")?>";
          document.getElementById('googlebtn').style.display = "block";
          document.getElementById('userface').value = "candidate";
        } else {
          document.getElementById('email').placeholder = "Enter your company email";
          document.getElementById('registerlink').href = "<?= base_URL("empregister")?>";
          document.getElementById('googlebtn').style.display = "none";
          document.getElementById('userface').value = "employer";
        }
      }
    </script>
<?= $this->endSection()?> 