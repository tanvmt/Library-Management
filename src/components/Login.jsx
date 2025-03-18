import PropTypes from "prop-types";
import React from "react";
import image from "./image.svg";
import line1 from "./line-1.svg";
import "./style.css";

export const LoginPanel = ({ property1, className, href, href1 }) => {
  return (
    <div className={`login-panel ${property1} ${className}`}>
      {property1 === "register" && (
        <div className="text-wrapper">Đăng nhập</div>
      )}

      <div className="overlap">
        <div className="ng-k">
          {property1 === "register" && <>Đăng ký</>}

          {property1 === "login" && <>Đăng nhập</>}
        </div>

        <img
          className="line"
          alt="Line"
          src={property1 === "login" ? line1 : image}
        />
      </div>

      {property1 === "register" && (
        <>
          <div className="div">Quên mật khẩu?</div>

          <div className="login-button">
            <div className="overlap-group">
              <div className="text-wrapper-2">Đăng ký</div>
            </div>
          </div>

          <div className="group">
            <div className="div-wrapper">
              <div className="text-wrapper-3">********************</div>
            </div>

            <div className="label">Mật khẩu</div>
          </div>

          <div className="group-2">
            <div className="overlap-2">
              <a
                className="text-wrapper-4"
                href={href1}
                rel="noopener noreferrer"
                target="_blank"
              >
                thietpt03@gmail.com
              </a>
            </div>

            <div className="label-2">Tên đăng nhập/Email</div>
          </div>
        </>
      )}

      {property1 === "login" && (
        <>
          <div className="text-wrapper-5">Đăng ký</div>

          <div className="div">Quên mật khẩu?</div>

          <div className="overlap-group-wrapper">
            <div className="overlap-group">
              <div className="text-wrapper-2">Đăng nhập</div>
            </div>
          </div>

          <div className="group">
            <div className="div-wrapper">
              <div className="text-wrapper-3">********************</div>
            </div>

            <div className="label">Mật khẩu</div>
          </div>

          <div className="group-2">
            <div className="overlap-2">
              <a
                className="text-wrapper-4"
                href={href}
                rel="noopener noreferrer"
                target="_blank"
              >
                thietpt03@gmail.com
              </a>
            </div>

            <div className="label-2">Tên đăng nhập/Email</div>
          </div>

          <p className="p">Tài khoản hoặc mật khẩu không đúng</p>
        </>
      )}
    </div>
  );
};

LoginPanel.propTypes = {
  property1: PropTypes.oneOf(["login", "register"]),
  href: PropTypes.string,
  href1: PropTypes.string,
};
