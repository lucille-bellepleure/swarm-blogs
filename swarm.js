const axios = require('axios')
const fs = require('fs')
const tar = require('tar')

console.log('test')

let gateway = "http://bee.dappnode:8080/files";
// let tar = new targz().compress('dist/', 'dist.tar', function (err) {
//     if (err)
//         console.log(err)
// })

async function publishToSwarm(tar) {
    try {
        let response = await axios.post(gateway, tar, {
            headers: {
                "Content-Type": "application/"
            }
        })
    } catch (error) {
        console.log(error)
    }
}

publishToSwarm(tarFile).then(response => {
    console.log('On Swarm: ', response)
}).catch(e => {
    console.log(e)
})
// let html2Save = document.getElementsByTagName("HTML")[0].outerHTML;
// document.getElementById("publishbtn").remove()
// let formData = new FormData();
// formData.append('index.html', html2Save);
// let response = await axios.post(gateway, formData, {
//   headers: {
//     'Content-Type': 'text/html'
//   }
// });