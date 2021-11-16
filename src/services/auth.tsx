interface Response {
  token: string,
  user: {
    name: string,
    email: string,
  }
}

export function signIn() {
  return new Promise<Response>((resolve) => {
    setTimeout(() => {
      resolve({
        token: 'jk12h3j21h3jk212h3jk12h3jkh12j3kh12k123hh21g3f12f3',
        user: {
          name: 'Ítalo Lima',
          email: 'italolima534@gmail.com',
        }
      });
    }, 500);
  });
}

