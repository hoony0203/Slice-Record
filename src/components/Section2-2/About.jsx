import React from "react";

const About = () => {
  return (
    <div className="about flex">
      <div className="profile">
        <img src="src/assets/img/limChangHoon.jpg" alt="profileImg" />
        <div className="profile-icons flex">
          <div className="profile-github flex">
            <i className="fa-brands fa-github fa-3x"></i>
            <label>
              <a
                href="https://github.com/hoony0203"
                target="_blank"
                rel="noopener noreferrer">
                https://github.com/hoony0203
              </a>
            </label>
          </div>
          <div className="profile-email flex">
            <i className="fa-solid fa-envelope fa-3x"></i>
            <label>hoony0203@naver.com</label>
          </div>
          <div className="profile-phone flex">
            <i className="fa-solid fa-phone fa-3x"></i>
            <label>010-2117-6440</label>
          </div>
        </div>
      </div>
      <div className="profile-script">
        <h2>안녕하세요, 프론트엔드 개발자 임창훈입니다.</h2>
        <p>최적화</p>
      </div>
    </div>
  );
};

export default About;
