(function () {    
    window.onload = function () {

        let buttons = {
            "btn-slider-second_block-left": {
                title: "btn-left",
                onClickHandler: function (e) {
                    return () => sliderMoveLeft();
                }
            },
            "btn-slider-second_block-right": {
                title: "btn-right",
                onClickHandler: function (e) {
                    return () => sliderMoveRigth();
                }
            },
            "btn-slider-second_block-left2": {
                title: "btn-left",
                onClickHandler: function (e) {
                    return () => sliderMoveLeft();
                }
            },
            "btn-slider-second_block-right2": {
                title: "btn-right",
                onClickHandler: function (e) {
                    return () => sliderMoveRigth();
                }
            }
        }
        
        // This is binding handlers to buttons.
        for (let key in buttons) {
            document.querySelector("#" + key).onclick = buttons[key].onClickHandler();
        }

        function sliderMoveRigth() {
            const slider = document.querySelector("#second_block-slider");
            
            switch (slider.classList[1]) {
                case "first-position": {
                    slider.classList.remove("first-position");
                    slider.classList.add("second-position");
                    document.getElementById("btn-slider-second_block-cirlce1").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    document.getElementById("btn-slider-second_block-cirlce2").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    span.sty
                    break;
                }
                case "second-position": {
                    slider.classList.remove("second-position");
                    slider.classList.add("third-position");
                    document.getElementById("btn-slider-second_block-cirlce2").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    document.getElementById("btn-slider-second_block-cirlce3").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
                case "third-position": {
                    slider.classList.remove("third-position");
                    slider.classList.add("first-position");
                    document.getElementById("btn-slider-second_block-cirlce3").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    document.getElementById("btn-slider-second_block-cirlce1").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
            }
        }

        function sliderMoveLeft() {
            const slider = document.querySelector("#second_block-slider");

            switch (slider.classList[1]) {
                case "first-position": {
                    slider.classList.remove("first-position");
                    slider.classList.add("third-position");
                    document.getElementById("btn-slider-second_block-cirlce1").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    document.getElementById("btn-slider-second_block-cirlce3").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
                case "second-position": {
                    slider.classList.remove("second-position");
                    slider.classList.add("first-position");
                    document.getElementById("btn-slider-second_block-cirlce2").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    document.getElementById("btn-slider-second_block-cirlce1").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
                case "third-position": {
                    slider.classList.remove("third-position");
                    slider.classList.add("second-position");
                    document.getElementById("btn-slider-second_block-cirlce3").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    document.getElementById("btn-slider-second_block-cirlce2").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
            }
        }
    }
})();