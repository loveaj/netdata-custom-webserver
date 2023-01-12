# Installing

CentOS 7 has Node.js v16.x insatlled by default.  

Assuming you’ve already installed Node.js, create a directory to hold your application, and make that your working directory.  

`$ mkdir /opt/netdata-custom-webserver`  
`$ cd /opt/netdata-custom-webserver`  

Use the npm init command to create a package.json file for your application. For more information on how package.json works, see Specifics of npm’s package.json handling.  

`$ npm init`  

This command prompts you for a number of things, such as the name and version of your application. For now, you can simply hit RETURN to accept the defaults.  

Now install Express in the myapp directory and save it in the dependencies list. For example:

`$ npm install express`  

The default entry point is `index.js`. Create a file calles `index.js` and paste in the following code:  

```
const express = require('express')
const path = require('path')
const app = express()
const cors = require('cors');
const port = 19998

app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
```

# Deploy the Netdata custom dashboard app
Run `npm run build` inside the Netdata custom dashboard repo directory.  

Copy the resultant `dist` directory into this `/opt/netdata-custom-webserver` directory.

# Run the app web server 
Run the app with the following command:

`$ node index.js`

