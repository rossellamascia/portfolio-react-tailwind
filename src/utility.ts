import { app } from "./base";

export const keyApi = process.env.REACT_APP_KEY_API;
export const urlAPI = process.env.REACT_APP_URL_API;

export const fileUrlHandler = async (file: File) => {
    const storageRef = app.storage().ref();
    const fileRef = storageRef.child(file.name);
    await fileRef.put(file);
    return await fileRef.getDownloadURL()
}

