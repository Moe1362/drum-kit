
const buttons = document.querySelectorAll(".drum").length;
for (let i = 0; i < buttons; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function(){

        let buttonInner = this.innerHTML;
        makeSound(buttonInner);
    });
}
 

document.addEventListener("keydown", function(event){
    makeSound(event.key);
});



    function makeSound(key) {
        


        switch (key) {
            case "w":
                let audio = new Audio('/Users/mohammad/Desktop/udemy Excersice/drum-kit/assets/sounds/tom-1.mp3');
                audio.play();
                break;
            case "a":
                let audio1 = new Audio('/Users/mohammad/Desktop/udemy Excersice/drum-kit/assets/sounds/tom-2.mp3');
                audio1.play();
                break;
            case "s":
                let audio2 = new Audio('/Users/mohammad/Desktop/udemy Excersice/drum-kit/assets/sounds/tom-3.mp3');
                audio2.play();
                break;
            case "d":
                let audio3 = new Audio('/Users/mohammad/Desktop/udemy Excersice/drum-kit/assets/sounds/tom-4.mp3');
                audio3.play();
                break;
            case "j":
                let audio4 = new Audio('/Users/mohammad/Desktop/udemy Excersice/drum-kit/assets/sounds/crash.mp3');
                audio4.play();
                break;
            case "k":
                let audio5 = new Audio('/Users/mohammad/Desktop/udemy Excersice/drum-kit/assets/sounds/kick-bass.mp3');
                audio5.play();
                break;
            case "l":
                let audio6 = new Audio('/Users/mohammad/Desktop/udemy Excersice/drum-kit/assets/sounds/snare.mp3');
                audio6.play();
                break;

            default: console.log(buttonInner);
        }


    }


    // let audio = new Audio('./assets/sounds/tom-1.mp3');
    // audio.play();

