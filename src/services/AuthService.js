import ApiClient from "./Axios.Config";

const AuthService = {
  login: (data) => ApiClient.post("/auth/login", data),
  register: (data) => ApiClient.post("/auth/register", data),
  logout: () => {
    localStorage.removeItem("token");
  },
  getProfile: () => ApiClient.get("/auth/me"),
};

export default AuthService;
