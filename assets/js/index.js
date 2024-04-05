
const buttons = document.querySelectorAll(".drum");
for (let i = 0; i < buttons.length; i++) {
    const buttonListener = document.querySelectorAll(".drum")[i];
    buttonListener.addEventListener("click", handleListener);

    function handleListener() {
        alert("Hello");
    }

}



