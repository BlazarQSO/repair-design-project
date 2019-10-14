(function () {    
    window.onload = function () {

        let buttons = {

            // second_block slider

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

            // third_block_control video

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

            // fifth_block slider

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

            // sixth_block slider

            ////------left block arrows

            "btn-slider-sixth_block_design-left": {
                title: "btn-slider",
                onClickHandler: function (e) {
                    return () => sliderMoveLeftSixth("btn-slider-sixth_block_design-left");
                }
            },
            "btn-slider-sixth_block_design-right": {
                title: "btn-slider",
                onClickHandler: function (e) {
                    return () => sliderMoveRightSixth("btn-slider-sixth_block_design-right");
                }
            },
            "btn-slider-sixth_block_design-circle1": {
                title: "btn-slider",
                onClickHandler: function (e) {
                    return () => sliderDesignMoveItem("btn-slider-sixth_block_design-circle1");
                }
            },
            "btn-slider-sixth_block_design-circle2": {
                title: "btn-slider",
                onClickHandler: function (e) {
                    return () => sliderDesignMoveItem("btn-slider-sixth_block_design-circle2");
                }
            },
            "btn-slider-sixth_block_design-circle3": {
                title: "btn-slider",
                onClickHandler: function (e) {
                    return () => sliderDesignMoveItem("btn-slider-sixth_block_design-circle3");
                }
            },
            "btn-slider-sixth_block_design-circle4": {
                title: "btn-slider",
                onClickHandler: function (e) {
                    return () => sliderDesignMoveItem("btn-slider-sixth_block_design-circle4");
                }
            },
            "btn-slider-sixth_block_design-circle5": {
                title: "btn-slider",
                onClickHandler: function (e) {
                    return () => sliderDesignMoveItem("btn-slider-sixth_block_design-circle5");
                }
            },
            "btn-slider-sixth_block_design-circle6": {
                title: "btn-slider",
                onClickHandler: function (e) {
                    return () => sliderDesignMoveItem("btn-slider-sixth_block_design-circle6");
                }
            },

            ////------right block numbered list of elements

            "btn-slider-sixth_block_design1": {
                title: "btn-slider",
                onClickHandler: function (e) {
                    return () => sliderDesignMoveItem("btn-slider-sixth_block_design1");
                }
            },
            "btn-slider-sixth_block_design2": {
                title: "btn-slider",
                onClickHandler: function (e) {
                    return () => sliderDesignMoveItem("btn-slider-sixth_block_design2");
                }
            },
            "btn-slider-sixth_block_design3": {
                title: "btn-slider",
                onClickHandler: function (e) {
                    return () => sliderDesignMoveItem("btn-slider-sixth_block_design3");
                }
            },
            "btn-slider-sixth_block_design4": {
                title: "btn-slider",
                onClickHandler: function (e) {
                    return () => sliderDesignMoveItem("btn-slider-sixth_block_design4");
                }
            },
            "btn-slider-sixth_block_design5": {
                title: "btn-slider",
                onClickHandler: function (e) {
                    return () => sliderDesignMoveItem("btn-slider-sixth_block_design5");
                }
            },
            "btn-slider-sixth_block_design6": {
                title: "btn-slider",
                onClickHandler: function (e) {
                    return () => sliderDesignMoveItem("btn-slider-sixth_block_design6");
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

        function sliderDesignMoveItem(id) {
            const slider = document.getElementById("sixth_block_design-slider");

            let cirlces = document.querySelectorAll(".sixth_block_design--work-l_block-arrows span");            
            for (let i = 0; i < cirlces.length; i++) {
                cirlces[i].style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            }
            
            switch (id) {
                case "btn-slider-sixth_block_design-circle1":
                case "btn-slider-sixth_block_design1": {                    
                    document.getElementById("btn-slider-sixth_block_design-circle1").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    let className = slider.classList[1].toString();
                    slider.classList.remove(className);
                    slider.classList.add("first-position3");
                    break;
                }
                case "btn-slider-sixth_block_design-circle2":
                case "btn-slider-sixth_block_design2": {
                    document.getElementById("btn-slider-sixth_block_design-circle2").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    let className = slider.classList[1].toString();
                    slider.classList.remove(className);
                    slider.classList.add("second-position3");
                    break;
                }
                case "btn-slider-sixth_block_design-circle3":
                case "btn-slider-sixth_block_design3": {
                    document.getElementById("btn-slider-sixth_block_design-circle3").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    let className = slider.classList[1].toString();
                    slider.classList.remove(className);
                    slider.classList.add("third-position3");
                    break;
                }
                case "btn-slider-sixth_block_design-circle4":
                case "btn-slider-sixth_block_design4": {
                    document.getElementById("btn-slider-sixth_block_design-circle4").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    let className = slider.classList[1].toString();
                    slider.classList.remove(className);
                    slider.classList.add("fourth-position3");
                    break;
                }
                case "btn-slider-sixth_block_design-circle5":
                case "btn-slider-sixth_block_design5": {
                    document.getElementById("btn-slider-sixth_block_design-circle5").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    let className = slider.classList[1].toString();
                    slider.classList.remove(className);
                    slider.classList.add("fifth-position3");
                    break;
                }
                case "btn-slider-sixth_block_design-circle6":
                case "btn-slider-sixth_block_design6": {
                    document.getElementById("btn-slider-sixth_block_design-circle6").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    let className = slider.classList[1].toString();
                    slider.classList.remove(className);
                    slider.classList.add("sixth-position3");
                    break;
                }
            }
        }

        function sliderMoveRightSixth(id) {
            const slider = document.getElementById("sixth_block_design-slider");

            let cirlces = document.querySelectorAll(".sixth_block_design--work-l_block-arrows span");
            for (let i = 0; i < cirlces.length; i++) {
                cirlces[i].style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            }
            
            switch (slider.classList[1]) {
                case "first-position3": {                    
                    slider.classList.remove("first-position3");
                    slider.classList.add("second-position3");
                    document.getElementById("btn-slider-sixth_block_design-circle2").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
                case "second-position3": {
                    slider.classList.remove("second-position3");
                    slider.classList.add("third-position3");
                    document.getElementById("btn-slider-sixth_block_design-circle3").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
                case "third-position3": {
                    slider.classList.remove("third-position3");
                    slider.classList.add("fourth-position3");
                    document.getElementById("btn-slider-sixth_block_design-circle4").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
                case "fourth-position3": {
                    slider.classList.remove("fourth-position3");
                    slider.classList.add("fifth-position3");
                    document.getElementById("btn-slider-sixth_block_design-circle5").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
                case "fifth-position3": {
                    slider.classList.remove("fifth-position3");
                    slider.classList.add("sixth-position3");
                    document.getElementById("btn-slider-sixth_block_design-circle6").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
                case "sixth-position3": {
                    slider.classList.remove("sixth-position3");
                    slider.classList.add("first-position3");
                    document.getElementById("btn-slider-sixth_block_design-circle1").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
            }
        }

        function sliderMoveLeftSixth(id) {
            const slider = document.getElementById("sixth_block_design-slider");

            let cirlces = document.querySelectorAll(".sixth_block_design--work-l_block-arrows span");
            for (let i = 0; i < cirlces.length; i++) {
                cirlces[i].style.backgroundColor = "rgba(255, 255, 255, 0.3)";
            }

            switch (slider.classList[1]) {
                case "first-position3": {
                    slider.classList.remove("first-position3");
                    slider.classList.add("sixth-position3");
                    document.getElementById("btn-slider-sixth_block_design-circle6").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
                case "sixth-position3": {
                    slider.classList.remove("sixth-position3");
                    slider.classList.add("fifth-position3");
                    document.getElementById("btn-slider-sixth_block_design-circle5").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
                case "fifth-position3": {
                    slider.classList.remove("fifth-position3");
                    slider.classList.add("fourth-position3");
                    document.getElementById("btn-slider-sixth_block_design-circle4").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
                case "fourth-position3": {
                    slider.classList.remove("fourth-position3");
                    slider.classList.add("third-position3");
                    document.getElementById("btn-slider-sixth_block_design-circle3").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
                case "third-position3": {
                    slider.classList.remove("third-position3");
                    slider.classList.add("second-position3");
                    document.getElementById("btn-slider-sixth_block_design-circle2").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
                case "second-position3": {
                    slider.classList.remove("second-position3");
                    slider.classList.add("first-position3");
                    document.getElementById("btn-slider-sixth_block_design-circle1").style.backgroundColor = "rgba(255, 255, 255, 1)";
                    break;
                }
            }
        }
    }
})();