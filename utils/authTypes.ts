export interface LoginFormInterface {
    uuid?: string,
    phone: string,
    via?: string
}


export interface LoginFormOTPInterface {
    uuid: string,
    phone: string,
    code: string
}
