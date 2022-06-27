const funk = (cb) => {
  //Asynkron kod
  setTimeout(()=>{
    cb('callback')
  }, 2000)
}
  
  console.log(1);
  console.log(2);
  console.log(3);

  // Synkron kod
  for(let i = 0; i < 2; i++){
    console.log('blocking ' + i);
  }

  funk( m => {
    console.log(m);
  })

  console.log(4);
  console.log(5);
  console.log(6);