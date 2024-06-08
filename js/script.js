var file = document.getElementById("selectedFile");
var btn = document.getElementById("btn");

function isFileTypeValid(fileType) {
    let validFileTypes = [
        "application/pdf",
        "image/png",
        "image/jpg",
        "image/jpeg",
    ];

    if (validFileTypes.includes(fileType)) {
        return true;
    } else {
        return false;
    }
}

file.addEventListener("change",() => {
    //   Select Files
    var selectedFiles = file.files;
    if (selectedFiles.length === 0) {
        alert("No file selected");
    } else {
        var summary = document.querySelector(".summary");
        for (let file of selectedFiles) {
            // Check File Type
            if (isFileTypeValid(file.type)) {
                var div = document.createElement("div");
                div.classList.add("box");
                div.innerHTML = `Name : ${file.name}<br>Type : ${file.type}`;
                summary.appendChild(div);
            } else {
                var div = document.createElement("div");
                div.classList.add("invalidFileType");
                div.innerHTML = `Name : ${file.name}<br>Type : ${file.type}`;
                summary.appendChild(div);
            }
        }
    }
});