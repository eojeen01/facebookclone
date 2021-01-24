function signup(email, password) {
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((user) => {

            alert("회원가입 성공");
            location.href = "index.html";


        })
        .catch((error) => {
            var errorMessage = error.message;
            alert(errorCode + errorMessage);
        });


}

function logIn(email, password) {
    firebase.auth().signInWithEmailAndPassword(email, password)
        .then((user) => {
            alert("로그인 되었습니다");
            location.href = "main.html";
        })
        .catch((error) => {
            var errorCode = error.code;
            var errorMessage = error.message;
        });
}

function UpdateCurrentUser() {

    firebase.auth().onAuthStateChanged(function (user) {
        if (user) {
            console.log(user.uid);
        } else {
            alert("로그인상태가 아닙니다.");
            location.href = "index.html";
        }
    });
}