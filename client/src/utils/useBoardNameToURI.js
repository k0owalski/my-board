const useBoardNameToURI = () => {
  return (boardName) => boardName.toLowerCase().replaceAll(' ', '-');
};

export default useBoardNameToURI;
