module.exports = {
  handlerRequest(req, res){
    const url = req.url;
    const method = req.method;

    if (url == '/'){
      res.write("Hello world");
    } 
    if (url == '/users'){
      res.write('<html>');
      res.write('<head><title>Users</title><head>');
      res.write('<body><form action="/create-user" method="POST"> <input type="text" placeholder="username" name="username"/> <input type="text" placeholder="password" name="password"/>  <button type="submit"> Create new User </button> <form> <br /> <ul><li> User 1</li> <li> User 2 </li></ul></body>');
      res.write('</html>');
      return res.end();
    }
    if (url == '/create-user' && method == 'POST'){
      const body = [];
      req.on('data', chunk => {
        console.log(chunk);
        body.push(chunk);
      });
      req.on('end', () => {
        const parsedBody = Buffer.concat(body).toString();
        const response = parsedBody.split('&');
        console.log(`Username: ${response[0].split('=')[1]} Password: ${response[1].split('=')[1]}`);
      })
    }
  }
}