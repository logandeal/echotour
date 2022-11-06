let roots = {"lafferre":root};

function God() {
    var location = readInitialPrompt();
    var node = roots[location];
    var person = new Person();
    while(1) {
        giveInstructions(node,person);
        var next_direction = getNextInstruction();
        if (next_direction === "leave") {
            endTour();
            break;
        }
        node = takeInstruction(node,next_direction,person);
    }
}

function readInitialPrompt() {
    // Get location from user and return it. Must be a key in roots dictionary
}

function getNextInstruction() {
    // Get next instruction from user and return it. Return options are "forward", "back", "left", "right", or "leave" to end the tour.
}

function endTour() {
    // Get em out of here.
}