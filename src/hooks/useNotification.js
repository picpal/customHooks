import React from 'react';

const useNotification = (title,options) => {
  // Notification API 활용 ( 알림차단이 해제되어 있어야 함 )

  if(!("Notification" in window)){
    return;
  }

  const fireNotif = () => {
    if(Notification.permission !== "granted"){
      Notification.requestPermission().then(permission => {
        if(permission === "granted"){
          new Notification(title,options);
        }else{
          return;
        }
      })
    }else{
      new Notification(title,options);
    }
  };

  return fireNotif;
  
};

export default useNotification;