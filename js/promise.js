function getData() {
    const xhr = new XMLHttpRequest(); //XMLHttpRequest 객체 생성
    xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1'); //HTTP Method, URL 정의
    xhr.setRequestHeader('content-type', 'application/json'); //헤더 값 중 content-type 정의
    xhr.send(); // 요청 전송

    xhr.onload = () => {
        if (xhr.status === 200) {
            // 정상적으로 응답이 되면 status가 200
            const res = JSON.parse(xhr.response); // 응답 데이터를 JSON.parse 함수로 JSON 객체로 변경
            console.log(res);
            return res;
        } else {
            // 에러 발생
            console.error(xhr.status, xhr.statusText); //응답 상태와 응답 메시지를 출력
            return;
        }
    };
}

// var res = getData(); // 함수 호출
// console.log(res); // 코드가 바로 실행되고, 이 시점에는 서버로 부터 응답이 오지 않은 시점이기 때문에 undefined
// console.log("다음 코드를 실행합니다.");

function getDataPromise() {
    return new Promise((resolve, reject) => {
        const xhr = new XMLHttpRequest(); //XMLHttpRequest 객체 생성
        xhr.open('GET', 'https://jsonplaceholder.typicode.com/posts/1'); //HTTP Method, URL 정의
        xhr.setRequestHeader('content-type', 'application/json'); //헤더 값 중 content-type 정의
        xhr.send(); // 요청 전송

        xhr.onload = () => {
            if (xhr.status === 200) {
                // 정상적으로 응답이 되면 status가 200
                const res = JSON.parse(xhr.response); // 응답 데이터를 JSON.parse 함수로 JSON 객체로 변경
                resolve(res);
            } else {
                // 에러 발생
                console.error(xhr.status, xhr.statusText); //응답 상태와 응답 메시지를 출력
                reject(new Error(xhr.status));
            }
        };
    });
}

getDataPromise().then(res => {
    console.log(res); // 서버 응답이 완료된 후 코드가 실행 됨
    console.log('다음 코드를 실행합니다.');
});
