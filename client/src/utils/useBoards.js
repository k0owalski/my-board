import useCookies from './useCookies';

const API_GET_BOARDS = 'http://localhost:3072/api/boards/';
const API_CREATE_BOARD = 'http://localhost:3072/api/boards/create';

const useBoards = () => {
  const { getCookie } = useCookies();

  return {
    getBoards: async () => {
      const res = await fetch(API_GET_BOARDS, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${getCookie('token')}`,
        },
      });

      const { success, boards, error } = await res.json();

      return { success, boards, error };
    },
    createBoard: async (name) => {
      const res = await fetch(API_CREATE_BOARD, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json; charset=UTF-8',
          Authorization: `Bearer ${getCookie('token')}`,
        },
        body: JSON.stringify({ name }),
      });

      const { success, error } = await res.json();

      return { success, error };
    },
    boardNameToURI: (boardName) => boardName.toLowerCase().replaceAll(' ', '-'),
  };
};

export default useBoards;
