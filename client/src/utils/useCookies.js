const useCookies = () => {
  const cookies = document.cookie;

  return {
    getCookie: (name) => cookies.slice(cookies.indexOf(name) + name.length + 1),
    setCookie: (name, value, maxAge = 120000) => {
      const date = new Date();

      date.setTime(date.getTime() + maxAge);

      document.cookie = `${name}=${value};expires=${date.toUTCString()}`;
    },
  };
};

export default useCookies;
