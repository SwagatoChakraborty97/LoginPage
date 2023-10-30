import "./Login.css";
import BannerImg from "../Login/banner_img.png";

export const Login = () => {
  return (
    <>
      <div id="login">
        <div id="image_container">
          <img src={BannerImg} alt="" id="banner_img" />
        </div>
        <div class="content">
          <h1 class="header bold">Login</h1>
          <div class="field item">
            <label for="" class="item bold">
              Login Id
            </label>
            <input
              type="email"
              name=""
              id=""
              placeholder="Login Id"
              class="form-fields"
            />
          </div>
          <div class="field item">
            <label for="" class="item bold">
              Password
            </label>
            <input
              type="password"
              name=""
              id=""
              placeholder="Enter Password"
              class="form-fields"
            />
          </div>
          <div id="checkbox-container">
            <div id="chkbox">
              <div id="checkbox">
                <input type="checkbox" name="" id="" />
                <label for=""> Remember Me</label>
              </div>
              <div id="checkbox">
                <input type="checkbox" name="" id="" />
                <label for="">
                  <span>
                    Agree to{" "}
                    <a href="" class="bold">
                      Terms and Conditions
                    </a>
                  </span>
                </label>
              </div>
            </div>
            <div id="change_pswrd">
              <a href="#" class="bold">
                Change Password
              </a>
            </div>
          </div>
          <a class="button" href="#">
            {" "}
            Login{" "}
          </a>
          <span>
            Don't have an account?
            <a href="#" class="bold">
              Register Here
            </a>
          </span>
        </div>
      </div>
    </>
  );
};
