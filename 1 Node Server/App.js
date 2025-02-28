const http =  require('http');

// const requestListener = (request, response) => {
//     console.log(request)
// }

// function requestListener (request, response) {
//         console.log(request)
//     }

const server = http.createServer((request, response)=>{
    console.log(request);
});
const PORT = 3000;

server.listen(PORT, ()=> {
    console.log(`Server started on a http://localhost:${PORT}`)
})