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
      width: 20px;
      height: 20px;
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
        action="<?= base_URL("canregister")?>"
        method="post"
        id="registerform"
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
        <h2>Register</h2>
        
        <div class="_2-buttons-wrapper">
          <div class="button-spacer">
            <a
              href="#"
              class="button-primary full-width-mobile w-button"
              >Candidate</a
            >
          </div>
          <a href="<?= base_URL("empregister")?>" 
          class="button-secondary w-button">Employer</a>
        </div>
        <h2></h2>
        <input
          type="text"
          class="input password w-password-page w-input"
          autofocus="true"
          maxlength="256"
          name="username"
          data-name="field"
          placeholder="Enter your Full Name"
          id="username"
          required
        />
        <input
          type="email"
          class="input password w-password-page w-input"
          autofocus="true"
          maxlength="256"
          name="email"
          data-name="field"
          placeholder="Enter your email"
          id="email"
          required
        />
        <input
          type="tel"
          class="input password w-password-page w-input"
          autofocus="true"
          maxlength="256"
          name="mobile"
          data-name="field"
          placeholder="Enter your phone no"
          id="mobile"
          required
        />
        <div class="input password w-password-page w-input eyeInput">
          <input type="password" class="" autofocus="true" maxlength="256" name="password" data-name="field" placeholder="Enter your password" id="eyeInputField" minlength="8" required />
          <div class="eyeIcon" id="eyeIcon">
            <svg style="width: 25px; height:25px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
            </svg>
          </div>
          <script>
            const eyeInputField = document.getElementById('eyeInputField');
            const eyeIcon = document.getElementById('eyeIcon');

            eyeIcon.addEventListener('click', () => {
              if (eyeInputField.type === "password") {
                eyeInputField.type = "text";
              } else {
                eyeInputField.type = "password";
              }
            })
          </script>
        </div>
        <div class="input password w-password-page w-input eyeInput">
          <input type="password" class="" autofocus="true" maxlength="256" name="cpassword" data-name="field" placeholder="Confirm your password" id="eyeInputField2" minlength="8" required />
          <div class="eyeIcon" id="eyeIcon2">
            <svg style="width: 25px; height:25px;" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
              <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4C142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1c3.3-7.9 3.3-16.7 0-24.6c-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zM144 256a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64c-7.1 0-13.9-1.2-20.3-3.3c-5.5-1.8-11.9 1.6-11.7 7.4c.3 6.9 1.3 13.8 3.2 20.7c13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1c-5.8-.2-9.2 6.1-7.4 11.7c2.1 6.4 3.3 13.2 3.3 20.3z" />
            </svg>
          </div>
          <script>
            const eyeInputField2 = document.getElementById('eyeInputField2');
            const eyeIcon2 = document.getElementById('eyeIcon2');

            eyeIcon2.addEventListener('click', () => {
              if (eyeInputField2.type === "password") {
                eyeInputField2.type = "text";
              } else {
                eyeInputField2.type = "password";
              }
            })
          </script>
        </div>
        <input
          type="submit"
          value="Register"
          data-wait="Please wait..."
          class="button-primary full-width w-password-page w-button"
          id="senddetails"
        />
        <a href="<?= base_URL("login")?>"><p></p>Already registered? <u>Login now</u></a>
      </form>
      <div class="alert alert-success" id="responsehandler" style="display:none;"> </div>
    </div>
  </div>
  <script>
    $(document).ready(function(){
      console.log("Radhe Radhe");
        $("#registerform").submit(function(e){
            e.preventDefault();
            $.ajax({
              type:"POST",
              url:"<?= base_URL("canregister")?>",
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
                      location.href = "<?= base_URL("login")?>";
                    }, 4000);
                } else if (response.status === 'error') {
                    if (response.errors) {
                        $('#responsehandler').show();
                        $('#responsehandler').removeClass('alert alert-success');
                        $('#responsehandler').addClass('alert alert-danger');
                        $('#responsehandler').html(response.errors.username);
                        $('#responsehandler').html(response.errors.email);
                        $('#responsehandler').html(response.errors.password);
                        $('#responsehandler').html(response.errors.cpassword);
                    } else {
                      $('#responsehandler').hide();
                    }
                    if(response.data){
                      $('#responsehandler').show();
                      $('#responsehandler').removeClass('alert alert-success');
                      $('#responsehandler').addClass('alert alert-danger');
                      $('#responsehandler').html(JSON.stringify(response.data));
                    }
                }
                setTimeout(() => {
                  $('#responsehandler').hide();
                  $("#senddetails").val("Register");
                }, 3000);
              }
            })
        })
    })  
  </script>
<?= $this->endSection()?> 