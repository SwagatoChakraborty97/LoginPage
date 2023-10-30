import React from "react";
import styled from "styled-components";
import BannerImg from "../Login/banner_img.png";

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  @media (max-width: 1024px) {
    display: block;
  }
  @media (max-width: 500px) {
    font-size: small;
  }
  @media (max-width: 1500px) {
    margin: 11% 0;
  }
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BannerImage = styled.img`
  width: 90%;
  @media (max-width: 1024px) {
    width: 60%;
    margin-top: 2%;
  }
  @media (max-width: 500px) {
    margin-top: 6%;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 7% 5% 7%;
  border-radius: 8px;
  box-shadow: 0px 0px 7px 0px #0000004f;
  margin: 6%;
  @media (max-width: 1500px) {
    margin: 1%;
  }
  @media (max-width: 1200px) {
    margin: 1%;
    padding: 6% 3% 6%;
  }
  @media (max-width: 1024px) {
    margin: 2%;
    padding: 3% 1% 3%;
  }

  @media (max-width: 500px) {
    margin-top: 6%;
  }
`;

const Header = styled.h1`
  padding: 2%;
  align-self: center;
`;

const Input = styled.input`
  padding: 4%;
  font-size: medium;
  min-width: 360%;
  margin: 2% 0;
  @media (max-width: 1024px) {
    min-width: max-content;
    padding: 1%;
    min-width: 92vw;
    margin: 0.2%;
  }
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  padding: 14px 500px 0px 0px;
  @media (max-width: 1024px) {
    padding: 0;
    margin: 1.2% 0 0 0.5%;
  }
`;

const Button = styled.a`
  background-color: #1575a7;
  text-decoration: none;
  text-align: center;
  color: white;
  border-radius: 5px;
  width: max-content;
  display: flex;
  align-self: center;
  padding: 1.5% 35%;
  margin: 20px;
`;

const Span = styled.span`
  padding: 5px;
  text-align: center;
`;

const SpanLink = styled.a`
  color: #ff9138;
`;

const CheckboxContainer = styled.div`
  display: flex;
  max-width: 98%;
  justify-content: space-between;
  margin: 1% 0;
  @media (max-width: 1024px) {
    display: flex;
    max-width: none;
    justify-content: space-between;
  }
`;

const Checkbox = styled.div`
  padding: 2px 5px 2px;
`;

const CheckboxInput = styled.input`
  padding: 2px 16px 2px;
  accent-color: #ff9138;
`;

const ChangePasswordLink = styled.a`
  color: #ff9138;
  text-decoration: none;

  @media (max-width: 500px) {
    text-align: center;
  }
`;

export const Login = () => {
  const togglePassword = () => {
    const pswrd = document.getElementById("password_1");
    const eyeicon = document.getElementById("eye_1");
    // console.log(pswrd.type);
    // console.log(eyeicon[0].textContent);
    if (pswrd.type == "password") {
      pswrd.type = "text";
      eyeicon.textContent = "visibility";
    } else {
      pswrd.type = "password";
      eyeicon.textContent = "visibility_off";
    }
    // console.log(pswrd.type, eyeicon.textContent);
  };
  return (
    <>
      <LoginContainer>
        <ImageContainer>
          <BannerImage src={BannerImg} alt="" />
        </ImageContainer>
        <Content>
          <Header className="bold">Login</Header>
          <Field>
            <label htmlFor="" className="item bold">
              Login Id
            </label>
            <Input
              type="email"
              name=""
              id=""
              placeholder="Login Id"
              className="form-fields"
            />
          </Field>
          <Field>
            <label htmlFor="" className="item bold">
              Password
            </label>
            <Input
              type="password"
              name=""
              id=""
              placeholder="Enter Password"
              className="form-fields"
            />
          </Field>
          <CheckboxContainer>
            <div id="chkbox">
              <Checkbox>
                <CheckboxInput type="checkbox" name="" id="" />
                <label htmlFor=""> Remember Me</label>
              </Checkbox>
              <Checkbox>
                <CheckboxInput type="checkbox" name="" id="" />
                <label htmlFor="">
                  <span>
                    {" "}
                    Agree to{" "}
                    <SpanLink href="#" className="bold">
                      Terms and Conditions
                    </SpanLink>
                  </span>
                </label>
              </Checkbox>
            </div>
            <ChangePasswordLink href="#" className="bold">
              Change Password
            </ChangePasswordLink>
          </CheckboxContainer>
          <Button href="#">Login</Button>
          <Span>
            Don't have an account?{" "}
            <SpanLink href="#" className="bold">
              Register Here
            </SpanLink>
          </Span>
        </Content>
      </LoginContainer>
    </>
  );
};
