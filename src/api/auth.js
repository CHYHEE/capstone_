import axios from "axios";
import { Cookies } from 'react-cookie';
import api from "./api";


const cookies = new Cookies();

// 로그인
// export const login = (loginId, password) => api.post(`/login?username=${loginId}&password=${password}`, );
export const auth_login = async (loginId, password, memberName, birth, gender, mbti, phone) => {
    try {

        const response = await axios.post("http://127.0.0.1:8080/member/login", {
            loginId: loginId,
            password: password,
            memberName: memberName,
            birth: birth,
            gender: gender,
            mbti: mbti,
            phone: phone
        },{withCredentials: true});


        // 응답 상태 코드
        const statusCode = response.status;
        console.log('Response Status Code:', statusCode);

        // 서버가 보낸 데이터
        const responseData = response.data;
        console.log('Server Response Data:', responseData);

        //쿠키 저장 
        console.log('권한: ' + response.data.authorities);
        //cookies.set("token", value);

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
export const info = async  (loginId, password, birth, gender, mbti, phone) => {
    await api.post("/member/info", {
    "loginId":loginId,
    "password":password,
    "birth":birth,
    "gender":gender,
    "mbti":mbti,
    "phone": phone
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


// 이미지 정보
// export const image = async () => {
//     await api.get("/member/image").then(response => {
//     const statusCode = response.status;

//     const responseData = response.data;

//     return { statusCode, responseData };
// }).catch(error => {
//     // 오류가 발생한 경우
//     console.error('Error during login request:', error);

//     // Promise로 오류 반환
//     throw error;
// });}


// Id 중복확인
export const checkId = async (loginId) => {
    try {
        // 비동기적인 GET 요청
        const response = await axios.get("http://127.0.0.1:8080/member/checkDupleId", {
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
         const response = await axios.post("http://127.0.0.1:8080/member/join", {
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


// 매칭
export const matching = async (memberName, birth, gender, mbti) => {
    try {
        const response = await axios.get("http://127.0.0.1:8080/member/matching", {
            memberName: memberName,
            birth: birth,
            gender: gender,
            mbti: mbti,
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



// export const getImageApi = async () => {
//     const [imageList, setImageList] = useState();
//     let res = await axios.get('서버주소');
//     setImageList(res.data);
// };

// useEffect(()=>{
//   getImageApi();
// }, []);

//
// 회원정보 수정
export const updateInfo = async (loginId, mbti, userName, birth, gender, phone) => {
    try {
        const response = await axios.put("http://127.0.0.1:8080/member/updateInfo", {
            loginId: loginId,
            mbti: mbti,
            memberName: userName,
            birth: birth,
            gender: gender,
            phone: phone
        });

        const statusCode = response.status;
        console.log('Response Status Code:', statusCode);

        const responseData = response.data;
        console.log('Server Response Data:', responseData);

        return { statusCode, responseData };
    } catch (error) {
        console.error('Error during login request:', error);
        throw error;
    }
}



// 회원탈퇴
//export const remove = (userId) => api.delete(`/users/${userId}`)

//export const logout = () => api.post("/logout")

// export const session = () => api.get("/users/session")