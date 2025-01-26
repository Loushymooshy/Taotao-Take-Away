export function isLoggedIn(): boolean {
    const token = localStorage.getItem("jwtToken");
    return token !== null;
  }
  