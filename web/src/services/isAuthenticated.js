export const isAuthenticated = () => {
    var token = localStorage.getItem('@AuthJWT:Token');
    if (token !== null) {
        return true;
    }
    return false;
} 