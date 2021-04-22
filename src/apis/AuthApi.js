import axiosInstance from "./AxiosConfig";

const AuthApi = {
  refreshToken: async () => {
    const res = await axiosInstance.get("/public/auth/refresh", {
      withCredentials: true,
    });
    console.log(res);
    return res;
  },
  loginWithCredential: async (emailOrPhone, password) => {
    const res = await axiosInstance.post(
      "/public/auth/token",
      {
        loginname: "test01@test.test",
        password: "secret",
        remember: true,
      },
      {
        withCredentials: true,
      }
    );
    console.log(res);
    return res;
  },
};

export default AuthApi;
