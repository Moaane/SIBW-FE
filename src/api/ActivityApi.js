import { MainApi } from "./ApiManager";

export async function findAllActivityTemplate(page) {
  try {
    const result = await MainApi(
      `activity-templates/find-all?page=${page}&pageSize=9`,
      {
        method: "GET",
      }
    );

    return result;
  } catch (error) {
    throw error;
  }
}

export async function createActivityTemplate(body) {
  try {
    const result = await MainApi("activity-templates/create", {
      method: "POST",
      data: body,
    });
    return result;
  } catch (error) {
    throw error;
  }
}

export async function deleteActivityTemplate(activityId) {
  try {
    const result = await MainApi(`activity-templates/delete/${activityId}`, {
      method: "DELETE",
    });
    return result;
  } catch (error) {
    throw error;
  }
}
