import axios from "axios";



// 매칭
export const matching = async () => {
    try {
        const response = await axios.get("http://127.0.0.1:8080/member/matching",
            {withCredentials: true});


        // 응답 상태 코드
        const statusCode = response.status;
        console.log('Response Status Code:', statusCode);

        // 서버가 보낸 데이터
        const responseData = response.data;
        console.log('Server Response Data:', responseData);

        // 응답 상태 코드와 데이터 반환
        return responseData;
    } catch (error) {
        // 오류가 발생한 경우
            console.error('Error during request:', error);

        // 오류를 반환하여 호출한 곳에서 처리할 수 있도록 함
        throw error;
    }
};