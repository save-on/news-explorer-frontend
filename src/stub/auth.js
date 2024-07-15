export const authorize = (email, password) => {
  if (email && password) {
    return new Promise((resolve, reject) => {
      resolve({ token: "I'm a fake token" });
    });
  }
};

export const checkToken = (token) => {
  if (token) {
    return new Promise((resolve, reject) => {
      resolve({
        data: {
          name: "John",
          email: "johnwick@gmail.com",
          password: "JohnWick123$",
          id: "1234567890",
        },
      });
    });
  }
};
