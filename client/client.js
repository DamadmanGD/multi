

const log = (text) => {
    const l = document.querySelector("#chat-list")
    const lt = document.createElement("li")
    lt.innerHTML = text
    l.appendChild(lt)
    l.scrollTop = l.scrollHeight
    
}
const onChatSubmitted = (sock) => (e) => {   
    e.preventDefault();

    const input = document.querySelector("#chat");
    const text = input.value;
    input.value = " ";
    
    sock.emit("msg", text)
   
}
const sock = io()
sock.on("msg", (text) => log(text))
//log("list")
document.querySelector("#chat-form").addEventListener("submit", onChatSubmitted(sock))


