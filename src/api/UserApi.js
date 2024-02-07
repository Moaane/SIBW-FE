import { MainApi } from "./ApiManager";

export async function findAllUserApi(page) {
  try {
    const result = await MainApi(`/users/find-all?page=${page}&pageSize=10`, {
      method: "GET",
    });

    return result;
  } catch (error) {
    console.log(error);
    throw error;
  }
}

export async function findOneUserUsernameApi(username) {
  try {
    const result = await MainApi(`users/find/username/${username}`, {
      method: "GET",
    });
    return result;
  } catch (error) {
    throw error;
  }
}

export async function findOneUserEmailApi(email) {
  try {
    const result = await MainApi(`users/find/email/${email}`, {
      method: "GET",
    });
    return result;
  } catch (error) {
    throw error;
  }
}

export async function findOneUserApi(id) {
  try {
    const result = await MainApi(`/users/find/${id}`, {
      method: "GET",
    });
    return result;
  } catch (error) {
    throw error;
  }
}

export async function createUserApi(body) {
  try {
    const result = await MainApi(`/users/create`, {
      method: "POST",
      data: body,
    });
    return result;
  } catch (error) {
    throw error;
  }
}

export async function updateUserApi(id, body) {
  try {
    const result = await MainApi(`/users/update/${id}`, {
      method: "PATCH",
      data: body,
    });
    return result;
  } catch (error) {
    throw error;
  }
}

export async function deleteUserApi(id) {
  try {
    const result = await MainApi(`/users/delete/${id}`, {
      method: "DELETE",
    });
    return result;
  } catch (error) {
    throw error;
  }
}
