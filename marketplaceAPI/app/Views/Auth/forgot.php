<?= $this->extend("layouts/public_layout")?>
<?= $this->section("content")?>
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
          id="forgotform"
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
          <h2>Enter Your Email</h2>
          
          <input
            type="text"
            class="input password w-password-page w-input"
            autofocus="true"
            maxlength="256"
            name="email"
            data-name="field"
            placeholder="Enter your email"
            id="field"
            required
          />
          <input type="hidden" name="fronturl" value="<?= base_URL()?>">
          <input
            type="submit"
            value="Submit"
            data-wait="Please wait..."
            class="button-primary full-width w-password-page w-button"
            id="senddetails"
          />
          <a href="<?= base_URL("canregister")?>"><p></p>Not a user? <u>Register now</u></a>
        </form>
        <div class="alert alert-success" id="responsehandler" style="display:none;"> </div>
      </div>
    </div>
    <script>
      $(document).ready(function(){
          $("#forgotform").submit(function(e){
              e.preventDefault();
              $.ajax({
                type:"POST",
                url:"<?= base_URL("forgot")?>",
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
                  } else if (response.status === 'error') {
                      $('#responsehandler').show();
                      $('#responsehandler').removeClass('alert alert-success');
                      $('#responsehandler').addClass('alert alert-danger');
                      $('#responsehandler').html(JSON.stringify(response.data));
                  }
                  $("#senddetails").val("Submit");
                  setTimeout(() => {
                    $('#responsehandler').hide();
                  }, 3000);
                }
              })
          })
      })  
    </script>
<?= $this->endSection()?> 