const express= require ('express');
const app = express();
app.get('/',(require,Response)=>{
    Response.send('Hello World');

});
app.listen(3001,()=>{
    console.log(`server is running on http://localhost:3001`);
});