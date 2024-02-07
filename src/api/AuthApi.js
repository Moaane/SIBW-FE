import { MainApi } from "./ApiManager";

export async function loginApi(body) {
  try {
    const result = await MainApi(`/auth/login?remember=${body.remember}`, {
      method: "POST",
      data: body,
    });
    // console.log(result);
    return result;
  } catch (error) {
    throw error;
  }
}
