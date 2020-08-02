import React from "react";
import { withRouter } from "react-router-dom";

const WithRouterSample = ({ location, match, history }) => {
  return (
    <div>
      <h4>locaction</h4>
      <textarea
        value={JSON.stringify(location, null, 2)} // null, 2 : JSON에 들여쓰기가 적용된 상태로 문자열 생성
        rows={7}
        readOnly={true}
      />
      <h4>match</h4>
      <textarea
        value={JSON.stringify(match, null, 2)} // null, 2 : JSON에 들여쓰기가 적용된 상태로 문자열 생성
        rows={7}
        readOnly={true}
      />
      <button onclick={() => history.push("/")}>홈으로</button>
    </div>
  );
};

export default withRouter(WithRouterSample);
