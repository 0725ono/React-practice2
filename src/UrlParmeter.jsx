import { useParams, useLocation } from "react-router-dom";

export const UrlParmeter = () => {
  const { id } = useParams();
  const { search } = useLocation();
  const query = new URLSearchParams(search);
  return (
    <div>
      <h1>UrlParmeterページです。</h1>
      <p>パラメーターは{id}です。</p>
      <p>クエリパラメーターは{query.get("name")}です</p>
    </div>
  );
};
