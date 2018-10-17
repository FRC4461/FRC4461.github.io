var rotation = 0;

// Using multiple unit types within one animation.
$("#start").click(function () {
    var pos = $("#positionDropDown").val();
    var objective = $("#objectiveDropDown").val();

    if (pos == "leftPosition") {
        console.log("honk");
        $("#robot").animate({ "top": "13em", "left": "33em" }, "slow");
        $("#robot").css('transform', 'rotate(' + (rotation = 0) + 'deg)');
        if (objective == "crossLine") {
            sidePosCrossLine();
        } else if (objective == "leftScale") {
            leftPosLeftScale();
        } else if (objective == "leftSwitch") {
            leftPosLeftSwitch();
        } else if (objective == "rightScale") {
            leftPosRightScale()
        } else if (objective == "rightSwitch") {
            leftPosRightSwitch();
        } else {
            console.log("muevete por favor");
        }
    } else if (pos == "middlePosition") {
        $("#robot").animate({ "top": "27em", "left": "33em" }, "slow");
        $("#robot").css('transform', 'rotate(' + (rotation = 0) + 'deg)');
        console.log("doot");
        if (objective == "crossLine") {
            middlePosCrossLine();
        } else if (objective == "leftScale") {
            middlePosLeftScale();
        } else if (objective == "leftSwitch") {
            middlePosLeftSwitch();
        } else if (objective == "rightScale") {
            middlePosRightScale()
        } else if (objective == "rightSwitch") {
            middlePosRightSwitch();
        } else {
            console.log("muevete por favor");
        }
        //animation
    } else if (pos == "rightPosition") {
        $("#robot").animate({ "top": "38em", "left": "33em" }, "slow");
        $("#robot").css('transform', 'rotate(' + (rotation = 0) + 'deg)');
        console.log("beep");
        if (objective == "crossLine") {
            sidePosCrossLine();
        } else if (objective == "leftScale") {
            rightPosLeftScale();
        } else if (objective == "leftSwitch") {
            rightPosLeftSwitch();
        } else if (objective == "rightScale") {
            rightPosRightScale()
        } else if (objective == "rightSwitch") {
            rightPosRightSwitch();
        } else {
            console.log("muevete por favor");
        }
        //animation
    } else {
        console.log("this is kind of not possible");
    }
});

$("#reset").click(function () {
    var position = $("#positionDropDown").val();
    reset();
});

function sidePosCrossLine() {
    console.log("i am going to the line");
    $("#robot").animate({ "left": "+=15em" }, "slow");
}

function leftPosLeftScale() {
    $("#robot").animate({ "left": "+=33em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation += 90) + 'deg)');
        $(this).dequeue();
    });
}

function leftPosRightScale() {
    // animation
}

function leftPosLeftSwitch() {
    $("#robot").animate({ "left": "+=16em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation += 90) + 'deg)');
        $(this).dequeue();
    });
    $("#robot").animate({ "top": "+=2em" }, "slow");
    // animation
}

function leftPosRightSwitch() {
    // animation
}
function middlePosCrossLine() {
    $("#robot").animate({ "left": "+=5em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation -= 90) + 'deg)');
        $(this).dequeue();
    });
    $("#robot").animate({ "top": "-=15em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation += 90) + 'deg)');
        $(this).dequeue();
    });
    $("#robot").animate({ "left": "+=13em" }, "slow");

    // animation
}

function middlePosLeftScale() {
    $("#robot").animate({ "left": "+=5em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation -= 90) + 'deg)');
        $(this).dequeue();
    });
    $("#robot").animate({ "top": "-=15em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation += 90) + 'deg)');
        $(this).dequeue();
    });
    $("#robot").animate({ "left": "+=28em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation += 90) + 'deg)');
        $(this).dequeue();
    });
}

function middlePosLeftSwitch() {
    $("#robot").animate({ "left": "+=5em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation -= 90) + 'deg)');
        $(this).dequeue();
    });
    $("#robot").animate({ "top": "-=8em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation += 90) + 'deg)');
        $(this).dequeue();
    });
    $("#robot").animate({ "left": "+=7em" }, "slow");
    $("#robot").animate({ "left": "-=2em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation -= 90) + 'deg)');
        $(this).dequeue();
    });
    $("#robot").animate({ "top": "-=5em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation += 90) + 'deg)');
        $(this).dequeue();
    });
    $("#robot").animate({ "left": "+=7em" }, "slow");
}

function middlePosRightScale() {
    $("#robot").animate({ "left": "+=5em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation += 90) + 'deg)');
        $(this).dequeue();
    });
    $("#robot").animate({ "top": "+=13em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation -= 90) + 'deg)');
        $(this).dequeue();
    });
    $("#robot").animate({ "left": "+=28em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation -= 90) + 'deg)');
        $(this).dequeue();
    });
}

function middlePosRightSwitch() {
    $("#robot").animate({ "left": "+=5em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation += 90) + 'deg)');
        $(this).dequeue();
    });
    $("#robot").animate({ "top": "+=7em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation -= 90) + 'deg)');
        $(this).dequeue();
    });
    $("#robot").animate({ "left": "+=7em" }, "slow");
    $("#robot").animate({ "left": "-=2em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation += 90) + 'deg)');
        $(this).dequeue();
    });
    $("#robot").animate({ "top": "+=4em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation -= 90) + 'deg)');
        $(this).dequeue();
    });
    $("#robot").animate({ "left": "+=7em" }, "slow");
}

function rightPosLeftScale() {
    // animation
}

function rightPosRightScale() {
    $("#robot").animate({ "left": "+=33em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation += 270) + 'deg)');
        $(this).dequeue();
    });
    // animation      
}

function rightPosLeftSwitch() {
    // animation
}

function rightPosRightSwitch() {
    $("#robot").animate({ "left": "+=16em" }, "slow");
    $("#robot").queue(function () {
        $(this).css('transform', 'rotate(' + (rotation += 270) + 'deg)');
        $(this).dequeue();
    });
    $("#robot").animate({ "top": "-=2em" }, "slow");
    // animation
}

function reset() {
    $("#robot").animate({ "top": "13em", "left": "33em" }, 0);
    $("#robot").css('transform', 'rotate(' + (rotation = 0) + 'deg)');
}