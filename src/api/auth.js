import axios from "axios";
import SERVER_URL from "./api";
import api from "./api";

// 로그인
// export const login = (loginId, password) => api.post(`/login?username=${loginId}&password=${password}`, );
export const auth_login = async (loginId, password) => {
    try {
        const response = await axios.post("http://10.101.162.88:8080/member/login", {
            loginId: loginId,
            password: password
        });

        // 응답 상태 코드
        const statusCode = response.status; 
        console.log('Response Status Code:', statusCode);

        // 서버가 보낸 데이터
        const responseData = response.data;
        console.log('Server Response Data:', responseData);

        // 응답 상태 코드와 데이터 반환
        return { statusCode, responseData };
    } catch (error) {
        // 오류가 발생한 경우
        console.error('Error during login request:', error);

        // 오류를 반환하여 호출한 곳에서 처리할 수 있도록 함
        throw error;
    }
};
// 사용자 정보
export const info = async  (loginId, password) => {
    await api.post("/member/login", {
    "loginId":loginId,
    "password":password
}).then(response => {
    const statusCode = response.status;

    const responseData = response.data;

    return { statusCode, responseData };
}).catch(error => {
    // 오류가 발생한 경우
    console.error('Error during login request:', error);

    // Promise로 오류 반환
    throw error;
});}

// Id 중복확인
export const checkId = async (loginId) => {
    try {
        // 비동기적인 GET 요청
        const response = await axios.get("http://10.101.162.88:8080/member/checkDupleId", {
            params: { "checkId": loginId }
        });

        const statusCode = response.status;
        const responseData = response.data;

        return { statusCode, responseData };
    } catch (error) {
        // 오류가 발생한 경우
        return error.response;
    }
};

// 회원가입
export const join = async (loginId, password, mbti, userName, birth, gender, phone) => {
    try {
        const response = await axios.post("http://10.101.162.88:8080/member/join", {
            loginId: loginId,
            password: password,
            mbti: mbti,
            memberName: userName,
            birth: birth,
            gender: gender,
            phone: phone
        });

        // 응답 상태 코드
        const statusCode = response.status;
        console.log('Response Status Code:', statusCode);

        // 서버가 보낸 데이터
        const responseData = response.data;
        console.log('Server Response Data:', responseData);

        // 응답 상태 코드와 데이터 반환
        return { statusCode, responseData };
    } catch (error) {
        // 오류가 발생한 경우
        console.error('Error during join request:', error);

        // 오류를 반환하여 호출한 곳에서 처리할 수 있도록 함
        throw error;
    }
};

//api.post(`/login?username=${loginId}&password=${password}`, )
// return api.get(`/users/id?userName=${userName}&email=${email}`)
export const id = (userName, email)=> {return api.get('/users/id',
    {
        params: {
            userName: userName,
            email: email,
        }
    });
}

export const pw = (userName,userId ,email)=> {return api.get('/users/pw',
    {
        params: {
            userName: userName,
            loginId : userId,
            email: email,
        }
    })
};

//
// 회원정보 수정
//export const update = (data) => api.put("/users", data)


// 회원탈퇴
//export const remove = (userId) => api.delete(`/users/${userId}`)

//export const logout = () => api.post("/logout")

// export const session = () => api.get("/users/session")