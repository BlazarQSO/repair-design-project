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
            },
            "btn-slider-second_block-circle1": {
                title: "btn-circle1",
                onClickHandler: function (e) {
                    return () => sliderMoveCircle("btn-circle1");
                }
            },
            "btn-slider-second_block-circle2": {
                title: "btn-circle2",
                onClickHandler: function (e) {
                    return () => sliderMoveCircle("btn-circle2");
                }
            },
            "btn-slider-second_block-circle3": {
                title: "btn-circle3",
                onClickHandler: function (e) {
                    return () => sliderMoveCircle("btn-circle3");
                }
            },
            "btn-play-third_block_control": {
                title: "btn-play-third_block_control",
                onClickHandler: function (e) {
                    return () => playerPlay(this.title);
                }
            },
            "btn-pause-third_block_control": {
                title: "btn-pause-third_block_control",
                onClickHandler: function (e) {
                    return () => playerPause(this.title);
                }
            },
            "btn-slider-fifth_block_fantasies-left": {
                title: "btn-slider",
                onClickHandler: function (e) {
                    return () => sliderMoveLeftFifth("btn-slider-fifth_block_fantasies-left");
                }
            },
            "btn-slider-fifth_block_fantasies-right": {
                title: "btn-slider",
                onClickHandler: function (e) {
                    return () => sliderMoveRightFifth("btn-slider-fifth_block_fantasies-right");
                }
            },
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
                    document.getElementById("btn-slider-second_block-circle1").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    document.getElementById("btn-slider-second_block-circle2").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    span.sty
                    break;
                }
                case "second-position": {
                    slider.classList.remove("second-position");
                    slider.classList.add("third-position");
                    document.getElementById("btn-slider-second_block-circle2").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    document.getElementById("btn-slider-second_block-circle3").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
                case "third-position": {
                    slider.classList.remove("third-position");
                    slider.classList.add("first-position");
                    document.getElementById("btn-slider-second_block-circle3").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    document.getElementById("btn-slider-second_block-circle1").style.backgroundColor = "rgba(255, 255, 255, 1)";
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

        function sliderMoveCircle(id) {
            const slider = document.querySelector("#second_block-slider");
            switch (id) {
                case "btn-circle1": {
                    slider.classList.remove("second-position");
                    slider.classList.remove("third-position");
                    slider.classList.add("first-position");
                    document.getElementById("btn-slider-second_block-circle2").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    document.getElementById("btn-slider-second_block-circle3").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    document.getElementById("btn-slider-second_block-circle1").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
                case "btn-circle2": {
                    slider.classList.remove("first-position");
                    slider.classList.remove("third-position");
                    slider.classList.add("second-position");
                    document.getElementById("btn-slider-second_block-circle1").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    document.getElementById("btn-slider-second_block-circle3").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    document.getElementById("btn-slider-second_block-circle2").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
                case "btn-circle3": {
                    slider.classList.remove("first-position");
                    slider.classList.remove("second-position");
                    slider.classList.add("third-position");
                    document.getElementById("btn-slider-second_block-circle1").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    document.getElementById("btn-slider-second_block-circle2").style.backgroundColor = "rgba(255, 255, 255, 0.3)";
                    document.getElementById("btn-slider-second_block-circle3").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
            }
        }

        function playerPlay(id) {            
            document.getElementById("video").play();            
            document.getElementById(id).style.opacity = "0";
            document.getElementById("btn-pause-third_block_control").style.opacity = "1";
        }

        function playerPause(id) {
            document.getElementById("video").pause();
            document.getElementById(id).style.opacity = "0";
            document.getElementById("btn-play-third_block_control").style.opacity = "1";
        }

        function sliderMoveLeftFifth(id) {
            const slider = document.getElementById("fifth_block_fantasies-slider");
            
            switch (slider.classList[1]) {
                case "first-position2": {
                    slider.classList.remove("first-position2");
                    slider.classList.add("fourth-position2");                    
                    break;
                }
                case "second-position2": {
                    slider.classList.remove("second-position2");
                    slider.classList.add("first-position2");                    
                    break;
                }
                case "third-position2": {
                    slider.classList.remove("third-position2");
                    slider.classList.add("second-position2");                    
                    break;
                }
                case "fourth-position2": {
                    slider.classList.remove("fourth-position2");
                    slider.classList.add("third-position2");
                    break;
                }
            }
        }

        function sliderMoveRightFifth(id) {
            const slider = document.getElementById("fifth_block_fantasies-slider");

            switch (slider.classList[1]) {
                case "first-position2": {
                    slider.classList.remove("first-position2");
                    slider.classList.add("second-position2");
                    break;
                }
                case "second-position2": {
                    slider.classList.remove("second-position2");
                    slider.classList.add("third-position2");
                    break;
                }
                case "third-position2": {
                    slider.classList.remove("third-position2");
                    slider.classList.add("fourth-position2");
                    break;
                }
                case "fourth-position2": {
                    slider.classList.remove("fourth-position2");
                    slider.classList.add("first-position2");
                    break;
                }
            }
        }
    }
})();