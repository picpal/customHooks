const useConfirm = (message,callback,rejection) => {
  if(typeof callback !== "function"){
    return;
  }

  const confirmAction = () => {
    // eslint-disable-next-line no-restricted-globals
    if(confirm(message)){
      callback();
    }else{
      rejection();
    }
  };
  
  return confirmAction
};

export default useConfirm;