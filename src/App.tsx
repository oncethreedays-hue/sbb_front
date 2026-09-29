import { useState, useEffect } from 'react'
import { questionApi } from './api/questionApi'
import type { QuestionRequestDto, PageResponse, QuestionResponseDto } from './types'

function App() {
  const [questionPage, setQuestionPage] = useState<PageResponse<QuestionResponseDto> | null>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // 백엔드와 통신 테스트 함수
    const fetchQuestions = async () => {
      try {
        // 0페이지, 검색어 없음으로 목록 요청
        const data = await questionApi.getList(0, '');
        console.log("백엔드 연결 성공 데이터:", data);
        setQuestionPage(data);
      } catch (err: any) {
        console.error("백엔드 연결 실패:", err);
        setError(err.message);
      }
    };

    fetchQuestions();
  }, []);

return (
    <div style={{ padding: '20px' }}>
      <h1>SBB 프론트엔드 & 백엔드 연결 테스트</h1>
      
      {error && <p style={{ color: 'red' }}>에러 발생: {error}</p>}

      {questionPage ? (
        <div>
          <p style={{ color: 'green', fontWeight: 'bold' }}>✅ 백엔드 연결 성공!</p>
          <p>총 질문 개수: {questionPage.totalPages}개</p>
          <ul>
            {questionPage.content.map((q) => (
              <li key={q.id}>
                [{q.id}] {q.subject} (작성자: {q.authorUsername ? q.authorUsername : '익명'}, 답변수: {q.answerCount})
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>백엔드에서 데이터를 불러오는 중...</p>
      )}
    </div>
  );
}
export default App
