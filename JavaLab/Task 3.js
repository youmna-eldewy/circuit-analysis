function editPara(){
    const paragraphs = document.querySelectorAll(".info");

    paragraphs.forEach (paragraph =>{
        let newText = paragraph.innerText.toUpperCase();
        newText = newText.replace(/PARAGRAPH/g, "SENTENCE");
        paragraph.innerHTML = newText;
        paragraph.classList.add("edited-text");
    })
    const heading = document.getElementById("title");
    heading.innerHTML += "-Edited";
}