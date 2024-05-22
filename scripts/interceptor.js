// interceptor.js
document.addEventListener('DOMContentLoaded', function () {
    // 你需要执行的全局逻辑
    checkUserLoginStatus();
    // console.log('Interceptor loaded on all pages');
});

/**
 * 检查用户登录状态
 */
function checkUserLoginStatus() {
    const loggedIn = sessionStorage.getItem('loggedIn');
    if (!loggedIn) {
        // 可以重定向到登录页面
        window.location.href = '/notes';
    }
}
