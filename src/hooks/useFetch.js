import { useEffect, useState } from "react";

export default function useFetch(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        // 리스트 가지고 오기
        fetch(url) 
        .then(res => {
            return res.json()
        })
        .then(data => {
            // set을 해준다 
            setData(data);
        });
    }, [url]);

    return data;
}