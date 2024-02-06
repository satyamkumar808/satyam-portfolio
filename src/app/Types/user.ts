export interface LoginUser {
    userEmail : String;
    userPassword : String;
}

export interface UserProfile {
    userId : number;
    userName : string;
    userEmail: string;
}

export interface User extends UserProfile {
    tocken: string;
}
