import React, { useState } from "react";
import { userApi } from "../../api/userApi";

/**
 * 회원가입 컴포넌트 (SignUp)
 */

export default function Signup() {
  // 입력 폼 필드 상태 관리
  const [username, setUsername] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password1, setPassword1] = useState<string>("");
  const [password2, setPassword2] = useState<string>("");

  // 피드백 메시지 및 에러 상태 관리
  const [message, setMessage] = useState<string>("");
  const [isError, setIsError] = useState<boolean>(false);

  // 폼 제출 핸들러
  const handleSubmit = async (e: React.SyntheticEvent) => {
    e.preventDefault();
    setMessage("");

    try {
      // 회원가입 API 호출
      const response = await userApi.signup({
        username,
        email,
        password1,
        password2,
      });

      setIsError(false);
      setMessage(
        typeof response === "string" ? response : "회원가입이 완료되었습니다.",
      );
    } catch (err: any) {
      setIsError(true);
      const errorData = err.response?.data;

      if (typeof errorData === "string") {
        setMessage(errorData);
      } else if (typeof errorData === "object" && errorData != null) {
        const errorMessage = Object.values(errorData).join(", ");
        setMessage(errorMessage || "회원가입 중 오류가 발생했습니다.");
      } else {
        setMessage("서버와의 통신에 실패했습니다.");
      }
    }
  }
  return (
    <div style={{ maxWidth: '400px', margin: '50px auto', padding: '20px', border: '1px solid #ddd', borderRadius: '8px', fontFamily: 'sans-serif' }}>
      <h2>회원가입</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        
        {/* 아이디 입력 */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>아이디</label>
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        {/* 이메일 입력 */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>이메일</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        {/* 비밀번호 입력 */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>비밀번호</label>
          <input
            type="password"
            value={password1}
            onChange={(e) => setPassword1(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        {/* 비밀번호 확인 입력 */}
        <div>
          <label style={{ display: 'block', marginBottom: '5px', fontWeight: 'bold' }}>비밀번호 확인</label>
          <input
            type="password"
            value={password2}
            onChange={(e) => setPassword2(e.target.value)}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        {/* 제출 버튼 */}
        <button
          type="submit"
          style={{ padding: '10px', backgroundColor: '#007bff', color: '#fff', border: 'none', borderRadius: '4px', cursor: 'pointer', fontWeight: 'bold' }}
        >
          가입하기
        </button>
      </form>

      {/* 결과 메시지 박스 (성공/실패 여부에 따라 스타일 분기) */}
      {message && (
        <div style={{ marginTop: '20px', padding: '10px', backgroundColor: isError ? '#ffe6e6' : '#e6f4ea', color: isError ? '#d93838' : '#137333', borderRadius: '4px' }}>
          {message}
        </div>
      )}
    </div>
  );
}
