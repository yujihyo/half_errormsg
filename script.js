// =============================
// 요소
// =============================

const photoA = document.getElementById("photoA");
const photoB = document.getElementById("photoB");

const nameA = document.getElementById("nameA");
const nameB = document.getElementById("nameB");

const message1 = document.getElementById("message1");
const message2 = document.getElementById("message2");
const message3 = document.getElementById("message3");
const message4 = document.getElementById("message4");

const previewPhoto1 = document.getElementById("previewPhoto1");
const previewPhoto2 = document.getElementById("previewPhoto2");
const previewPhoto3 = document.getElementById("previewPhoto3");
const previewPhoto4 = document.getElementById("previewPhoto4");

const previewName1 = document.getElementById("previewName1");
const previewName2 = document.getElementById("previewName2");
const previewName3 = document.getElementById("previewName3");
const previewName4 = document.getElementById("previewName4");

const previewMessage1 = document.getElementById("previewMessage1");
const previewMessage2 = document.getElementById("previewMessage2");
const previewMessage3 = document.getElementById("previewMessage3");
const previewMessage4 = document.getElementById("previewMessage4");

const captureArea = document.getElementById("captureArea");
const saveButton = document.getElementById("saveButton");


// =============================
// 기본 이미지
// =============================

const DEFAULT_IMAGE =
"https://placehold.co/200x200/555555/FFFFFF";

previewPhoto1.src = DEFAULT_IMAGE;
previewPhoto2.src = DEFAULT_IMAGE;
previewPhoto3.src = DEFAULT_IMAGE;
previewPhoto4.src = DEFAULT_IMAGE;


// =============================
// 이름
// =============================

nameA.addEventListener("input", () => {

    const value = nameA.value || "이름";

    previewName1.textContent = value;
    previewName3.textContent = value;

});

nameB.addEventListener("input", () => {

    const value = nameB.value || "이름";

    previewName2.textContent = value;
    previewName4.textContent = value;

});


// =============================
// 메시지
// =============================

message1.addEventListener("input", () => {
    previewMessage1.textContent = message1.value || "메시지";
});

message2.addEventListener("input", () => {
    previewMessage2.textContent = message2.value || "메시지";
});

message3.addEventListener("input", () => {
    previewMessage3.textContent = message3.value || "메시지";
});

message4.addEventListener("input", () => {
    previewMessage4.textContent = message4.value || "메시지";
});


// =============================
// 사진 업로드
// =============================

function loadImage(input, targets){

    if(!input.files.length) return;

    const file = input.files[0];

    const reader = new FileReader();

    reader.onload = function(e){

        targets.forEach(target=>{

            target.src = e.target.result;

        });

    };

    reader.readAsDataURL(file);

}

photoA.addEventListener("change",()=>{

    loadImage(photoA,[
        previewPhoto1,
        previewPhoto3
    ]);

});

photoB.addEventListener("change",()=>{

    loadImage(photoB,[
        previewPhoto2,
        previewPhoto4
    ]);

});


// =============================
// 저장
// =============================

function saveImage(){

    html2canvas(captureArea,{
        backgroundColor:null,
        scale:3,
        useCORS:true
    }).then(canvas=>{

        if(window.innerWidth <= 768){

            canvas.toBlob(function(blob){

                const url = URL.createObjectURL(blob);

                window.open(url, "_blank");

                setTimeout(()=>{
                    URL.revokeObjectURL(url);
                },10000);

            },"image/png");

        }else{

            const link = document.createElement("a");

            link.download = "notification.png";
            link.href = canvas.toDataURL("image/png");
            link.click();

        }

    });

}

saveButton.onclick = saveImage;
mobileSaveButton.onclick = saveImage;

/*이름*/

function editNameA(){

    const value = prompt("이름을 입력하세요.", nameA.value);

    if(value === null) return;

    nameA.value = value;

    previewName1.textContent = value || "이름";
    previewName3.textContent = value || "이름";

}

function editNameB(){

    const value = prompt("이름을 입력하세요.", nameB.value);

    if(value === null) return;

    nameB.value = value;

    previewName2.textContent = value || "이름";
    previewName4.textContent = value || "이름";

}

previewName1.onclick = () => {

    if(window.innerWidth <= 768){

        editNameA();

    }

};

previewName3.onclick = previewName1.onclick;

previewName2.onclick = () => {

    if(window.innerWidth <= 768){

        editNameB();

    }

};

previewName4.onclick = previewName2.onclick;


/*사진*/
previewPhoto1.onclick = () => {

    if(window.innerWidth <= 768){

        photoA.click();

    }

};

previewPhoto3.onclick = previewPhoto1.onclick;

previewPhoto2.onclick = () => {

    if(window.innerWidth <= 768){

        photoB.click();

    }

};

previewPhoto4.onclick = previewPhoto2.onclick;

/*메시지*/
function editMessage(input, preview){

    const value = prompt("메시지를 입력하세요.", input.value);

    if(value === null) return;

    input.value = value;

    preview.textContent = value || "메시지";

}

previewMessage1.onclick = () => {

    if(window.innerWidth <= 768){

        editMessage(message1, previewMessage1);

    }

};

previewMessage2.onclick = () => {

    if(window.innerWidth <= 768){

        editMessage(message2, previewMessage2);

    }

};

previewMessage3.onclick = () => {

    if(window.innerWidth <= 768){

        editMessage(message3, previewMessage3);

    }

};

previewMessage4.onclick = () => {

    if(window.innerWidth <= 768){

        editMessage(message4, previewMessage4);

    }

};