const getStoredApp =()=>{
const storedAppSTR = localStorage.getItem("installed")
if(storedAppSTR){
    const storedAppData =JSON.parse(storedAppSTR);
    return storedAppData;
}
else{
    return [];
}

}
const addToStoredDB =(id)=>{

  const storedAppData = getStoredApp();
  if(storedAppData.includes(id)){
  alert(" Reminder Installed Successfully")
  }
  else{
    storedAppData.push(id);
const data = JSON.stringify(storedAppData);
localStorage.setItem("installed",data)
  }

}
export   {addToStoredDB,getStoredApp} ;
