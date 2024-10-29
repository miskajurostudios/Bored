if (typeof index === 'undefined') {
    const headers = ["𝖡𝗈𝗋𝖾𝖽", "𝓑𝓸𝓻𝓮𝓭", "𝙱𝚘𝚛𝚎𝚍", "𝔅𝔬𝔯𝔢𝔡"];
    let index = 0;

    setInterval(() => {
        document.title = headers[index];
        index = (index + 1) % headers.length;
    }, 500);
}
