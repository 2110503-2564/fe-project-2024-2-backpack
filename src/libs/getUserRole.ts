export function getUserRole() {
    if (typeof window !== "undefined") {
      // Example: Use JWT or cookies in real apps
      return localStorage.getItem("role"); // 'admin' or 'user'
    }
    return null;
  }
  