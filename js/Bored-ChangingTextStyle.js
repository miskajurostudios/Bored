const titles = ["𝖡𝗈𝗋𝖾𝖽", "𝓑𝓸𝓻𝓮𝓭", "𝙱𝚘𝚛𝚎𝚍", "𝔅𝔬𝔯𝔢𝔡"];
let index = 0;

setInterval(() => {
    document.getElementById("BoredTitle").textContent = titles[index];
    index = (index + 1) % titles.length;
}, 500);
