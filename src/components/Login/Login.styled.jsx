import React from 'react';
import styled from 'styled-components';
import BannerImg from '../Login/banner_img.png';

const LoginContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
`;

const ImageContainer = styled.div`
  display: flex;
  justify-content: center;
`;

const BannerImage = styled.img`
  width: 90%;
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 10% 6% 10%;
  border-radius: 8px;
  box-shadow: 0px 0px 7px 0px #0000004f;
  margin: 6%;
`;

const Header = styled.h1`
  padding: 2%;
  align-self: center;
`;

const Error = styled.div`
  background: coral;
  border-radius: 5px;
  padding: 2px 50px;
  margin: 2px;
  align-self: center;
`;

const Input = styled.input`
  padding: 4%;
  font-size: medium;
`;

const FormFields = styled.div`
  min-width: 415%;
`;

const Item = styled.div`
  margin: 2%;
`;

const Field = styled.div`
  display: flex;
  flex-direction: column;
  padding: 4px 500px 0px 0px;
`;

const Name = styled.div`
  display: flex;
  gap: 10px;
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
`;

const Checkbox = styled.div`
  padding: 2px 16px 2px;
`;

const CheckboxInput = styled.input`
  padding: 2px 16px 2px;
  accent-color: #ff9138;
`;

const ChangePasswordLink = styled.a`
  color: #ff9138;
  text-decoration: none;
`;

const media = {
  mobile: '@media (max-width: 500px)',
  tablet: '@media (max-width: 1024px)',
  laptop: '@media (max-width: 1200px)',
  desktop: '@media (max-width: 1500px)',
};

export const Login = () => {
  return (
    <>
      <LoginContainer>
        <ImageContainer>
          <BannerImage src={BannerImg} alt="" />
        </ImageContainer>
        <Content>
          <Header className="bold">Login</Header>
          <div className="field item">
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
          </div>
          <div className="field item">
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
          </div>
          <CheckboxContainer>
            <div id="chkbox">
              <Checkbox>
                <CheckboxInput type="checkbox" name="" id="" />
                <label htmlFor="">&nbsp; Remember Me</label>
              </Checkbox>
              <Checkbox>
                <CheckboxInput type="checkbox" name="" id="" />
                <label htmlFor="">
                  <span>
                    Agree to{' '}
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
            Don't have an account?
            <SpanLink href="#" className="bold">
              Register Here
            </SpanLink>
          </Span>
        </Content>
      </LoginContainer>
    </>
  );
};
