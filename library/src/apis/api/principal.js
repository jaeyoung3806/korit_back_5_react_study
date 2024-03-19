import instance from "../utils/instance"

export const getPrincipalRequest = async() => {
    return instance.get("/account/principal");
}