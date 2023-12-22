// import React from "react";
// import { Link } from "react-router-dom";

// export default function EmptyPage() {
//     return(
//             <>
//                 <h2>잘못된 접근입니다</h2>
//                 <Link to="/">돌아가기</Link>
//             </>
//     );
// }

import { Link, useNavigate } from "react-router-dom";

export default function EmptyPage() {
    const navigate = useNavigate();

    const goBack = () => {
        navigate('/'); // 홈 페이지로 이동
    };

    return (
        <div>
            <h2>잘못된 접근입니다</h2>
            <button onClick={goBack}>돌아가기</button>
        </div>
    );
}



