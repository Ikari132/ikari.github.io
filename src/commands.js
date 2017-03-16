export const commands = {
    help: [
        {
            message: "-about: some words about me :)",
            type:"error"
        },
        {
            message: "-works: my portfolio"
        },
        {
            message: "-сontacts: my contacts"
        },
        {
            message: "-send <message> : send message for me"
        }
    ],
    about:[
        {
            message:"Some words about me"
        }
    ],
    works:[
        {
            message:"My portfolio"
        }
    ],
    send:[
        {
            message:"this will be send an email",
            run:()=>{console.log("message")}
        }
    ]
}

// const commands = {
//     help:`
//         <br>
//         -about: some words about me :)<br>

//         -works: my portfolio<br>

//         -сontacts: my contacts<br>

//         -send <message> : send message for me<br>
//     `,

//     about:`Something great about me<br>`,

//     works:`<a href="/">Site</a>`

// }