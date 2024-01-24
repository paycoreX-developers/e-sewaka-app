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

export interface RegisterFormInterface {
    uuid: string, //simpan lagi untuk verify otp
    phone: string,
    full_name: string,
    pass: string,
    repass?: string,
    address: string,
    prov: string,
    city: string,
    district: string,
    village: string,
    email: string,
    zipcode: string,
    ip_address: string | undefined,
    callback_url: string | undefined,
    referral: string | undefined,
    owner_name: string,
    via: string,
    is_direct?: number | string
    aggrement?: boolean
}

export interface RegisterOtpFormInterface {
    uuid: string,
    phone: string,
    code: string
}

export interface SetPinFormInterface {
    uuid: string,
    old_pin: string,
    new_pin: string
}

export interface LoginFormInterface {
    uuid?: string,
    phone: string,
    via?: string
}

export interface Otp {
    one: number | null | string
    two: number | null | string
    three: number | null | string
    four: number | null | string
    five: number | null | string
    six: number | null | string
}

export interface LoginFormOTPInterface {
    uuid: string,
    phone: string,
    code: string
}

export interface Phones {
    phone: string
}


export interface UserData {

    rc: number,
    msg: string,
    full_name: string,
    balance: number,
    my_point: number,
    address: string,
    prov: number | string,
    city: number | string,
    district: number | string,
    village: number | string,
    prov_name?: string,
    city_name: string,
    district_name: string,
    village_name: string,
    zipcode: number,
    nik: string,
    email: string,
    img_url: string,
    ip_address: string,
    callback_url?: any,
    referral: number,
    is_kyc_approved: string,
    owner_name: string,
    tempat_lahir?: string,
    tgl_lahir?: string,
    referral_full_name: string,
    referral_code: string,
    phones: Phones[]

}