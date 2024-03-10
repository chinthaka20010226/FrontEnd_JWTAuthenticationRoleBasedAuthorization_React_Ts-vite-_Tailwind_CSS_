export interface IRegisterDto {
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    password: string;
    address: string;
}

export interface ILoginDto {
    userName: string;
    password: string;
}

export interface IUpdateRoleDto {
    userName: string;
    newRole: string;
}

export interface IAuthUser {
    id: string;
    firstName: string;
    lastName: string;
    userName: string;
    email: string;
    createdAt: string;
    roles: string[];
}

export interface ILoginResponseDto {
    newToken: string;
    userInfo: IAuthUser;
} 

export interface IAuthContextState {
    isAuthenticated: boolean;
    isAuthLoading: boolean;
    user?: IAuthUser;
}


// **************** Avoid Some Different Typing Error **********************************

export enum IAuthContextActionTypes {
    INITIAL = 'INITIAL',
    LOGIN = 'LOGIN',
    LOGOUT = 'LOGOUT',
}

// **********************************************************************************

export interface IAuthContextAction {
    type: IAuthContextActionTypes;
    payLoad?: IAuthUser;
}

export interface IAuthContext {
    isAuthenticated: boolean;
    isAuthLoading: boolean;
    user?: IAuthUser;
    login: (userNAme: string, password: string) => Promise<void>;
    register: (
        firstName: string,
        lastName: string,
        userName: string,
        email: string,
        password: string,
        address: string
    ) => Promise<void>;
    logout: () => void;
}

export enum RolesEnum {
    ADMIN = 'ADMIN',
    USER = 'USER',
}