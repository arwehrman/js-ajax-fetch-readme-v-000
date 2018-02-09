
const token = 'e128dee41b0bb4573f8b717debd615de47c4d1e5'
fetch('https://api.github.com/user/repos', {
  headers: {
    Authorization: `token ${token}`
  }
}).then(res => res.json()).then(json => console.log(json));
