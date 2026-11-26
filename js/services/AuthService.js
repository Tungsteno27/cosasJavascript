const BASE_URL = 'http://localhost:8080/api';

class AuthService {
    static async login(username, password){
        const response = await fetch(`${BASE_URL}/auth/login`, {
            method: 'POST',
            headers: {'Content-Type': 'application/json'},
            body: JSON.stringify({username, password})
        });
        const data = await response.json();
        if(!response.ok){
            const errorMsg = data.error || "Ocurrio un error al iniciar la sesion";
            throw new Error(errorMsg)
        }
        if (data.token){
            localStorage.setItem('token', data.token);
            localStorage.setItem('user', username);
        } else{
            const errorMsg = data.error || "Ocurrio un error al iniciar la sesion";
            throw new Error(errorMsg)
        }
        return data;
    }
    static isAuthenticate(){
        return localStorage.getItem('token');
    }
    static getUser(){
        return localStorage.getItem('user')
    }
    
}

export default AuthService;