import "./sass/app.scss";
import { commands } from "./commands"
console.log("appStart");

const bash_inp = document.getElementById("input");
const bash = document.getElementById("output");

class Bash {
    constructor(container) {
        this.output = document.getElementById("output");
        this.input = document.getElementById("input");
        this._setHandlers();
        this.insert([{
            message: "Hi, i am Anton, front-end developer. Just type 'help' to know something more"
        }]);
    }
    init() {
        this.output = document.getElementById("output");
    }
    insert(message) {
        // const types = {
        //     info:"bash_info"
        // }
        let res = '';
        for (let string of message) {
            // [dirty] need to create alone method for parse strings and run their funcs
            if (string.run) {
                string.run();
            }
            res += `<div class=" bash_str ${string.type || ""} ">${string.message}</div>`
        }
        this.output.innerHTML = `${this.output.innerHTML} <div class="bash_block">${res}</div>`
    }
    _setHandlers() {
        document.addEventListener("keydown", (e) => { bash_inp.focus() });
        this.input.addEventListener("keydown", (e) => {
            if (e.keyCode === 13) {
                e.preventDefault();
                let val = this.input.value.trim();
                if (!val) {
                    bash_inp.value = ``;
                    return
                };
                var re = /\s+/;
                // console.log(val.split(re));
                if (commands[val]) {
                    this.insert(commands[val]);
                }
                else {
                    this.insert([{ message: "command not found" }]);
                }
                this.input.value = ``;
            }


        }, false)
    }
}

const b = new Bash();