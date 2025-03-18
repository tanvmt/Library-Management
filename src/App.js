import React from "react";
// import line1 from "./line-1.svg";
import "./App.css";

export const Login = () => {
  return (
    <div className="login">
      <div className="login-panel-wrapper">
        <div className="login-panel">
          <div className="overlap">
            <div className="text-wrapper">Đăng nhập</div>

            {/* <img className="line" alt="Line" src={line1} /> */}
          </div>

          <div className="div">Đăng ký</div>

          <div className="text-wrapper-2">Quên mật khẩu?</div>

          <div className="login-button">
            <div className="overlap-group">
              <div className="text-wrapper-3">Đăng nhập</div>
            </div>
          </div>

          <div className="group">
            <div className="div-wrapper">
              <div className="text-wrapper-4">********************</div>
            </div>

            <div className="label">Mật khẩu</div>
          </div>

          <div className="group-2">
            <div className="overlap-2">
              <a
                className="text-wrapper-5"
                href="mailto:thietpt03@gmail.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                thietpt03@gmail.com
              </a>
            </div>

            <div className="label-2">Tên đăng nhập/Email</div>
          </div>

          <p className="p">Tài khoản hoặc mật khẩu không đúng</p>
        </div>
      </div>
    </div>
  );
};
