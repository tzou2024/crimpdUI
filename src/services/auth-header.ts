export default function authHeader() {
    const userStr = localStorage.getItem("user");
    let user = null;
    if (userStr)
      user = JSON.parse(userStr);
  
    if (user && user.token) {
      let ret = { 'Authorization': 'Bearer ' + user.token }
      return ret;
    } else {
      return { Authorization: '' };
    }
  }