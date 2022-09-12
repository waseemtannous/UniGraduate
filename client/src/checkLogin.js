
export function checkLogin() {
    console.log(sessionStorage.getItem("user"));
    if (sessionStorage.getItem("user") === null) window.location.href = "/Login";
}