export interface LogIn {
    username: string;
    password: string;
}
export const InitalState: LogIn = {
    username: '',
    password: ''
};
export class LogInModel {
    username;
    password;
    constructor(model: LogIn = InitalState) {
        this.username = model.username;
        this.password = model.password;
    }
}
