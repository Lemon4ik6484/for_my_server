fetch('https://api.mcstatus.io/v2/status/java/86.223.47.125:25565')
  .then(res => {
    return res.json();
  })
  .then(data => {
    console.log(data)
  })