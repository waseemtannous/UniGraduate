export function checkLogin() {
    if (sessionStorage.getItem("user") === null) window.location.href = "/Login";
}