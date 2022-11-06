class Node {
    constructor(description) {
        this.description = description;
        this.mapu = null;
        this.mapd = null;
        this.mapr = null;
        this.mapl = null;
    }
    addDown(node) {
        this.mapd = node;
        node.mapu = this;
    }
    addUp(node) {
        this.mapu = node;
        node.mapd = this;
    }
    addRight(node) {
        this.mapr = node;
        node.mapl = this;
    }
    addLeft(node) {
        this.mapl = node;
        node.mapr = this;
    }
}
//declaring nodes
var root = new Node("In front of you is the main entrance");
var node2 = new Node("In front of you is a staircase with 12 steps going down. To your left is potential energy cafe. To your right is a hall that leads to the Interactive digital environments lab, E1419 Auditorium, and Mechanical and Aerospace.");
var node3 = new Node("In front of you is a long hallway that leads to the west wing and labs C1201 - C1206. To your left is a hallway that leads to the east wing, Overholser Atrium, labs C1243 - C1246, and labs C1249 - C1251");
var node4 = new Node("To your right is a hallway that leads to labs C1243 - C1246, Overholser Atrium, and Labs W1065 - W1081. To your left is a hallway that leads to restrooms, an elevator, civil and environment, and labs C1249 - C1251");
var node5 = new Node("In front of you is a hallway that leads to the interactive digital environments lab and an exit to the north.");
var node6 = new Node("To your left is a hallway that leads to labs E1411, E1413, E1414, and mechanical and aerospace. To your right is a womens restroom and labs E1403 and E1404.");
var node7 = new Node("In front of you is a hallway that leads to an elevator, restrooms, ketchum auditorium, student services, and administration - deans office. To your left is a hallway that leads to bas W1065 - W1081, and an exit to the south. To your right is a hallway that leads to labs C1201 - C1204.");
var node8 = new Node("This is Potential Energy Cafe! You can buy coffee and snacks!");
var node9 = new Node("Here there are restrooms, an elevator, labs C1219-C1215 and an exit to the north courtyard");
var node10 = new Node("To the right of you is a hallway that leads to restrooms, an elevator, civil and environmental, and labs C1249 - C1246");
var node11 = new Node("To your right are labs C1249 - C1251. To your left is civil and environmental");
var node12 = new Node("This is Civil and Environmental. In front of you is the room where we made this video tour!");
var node13 = new Node("To your left is an exit. In front of you is the west wing.");
var node14 = new Node("In front of you leads to W1065 - W1081. To your right leads to W1065 - W1081. This is because you can access the classrooms from both sides of the hall. To your left is an exit.");
var node15 = new Node("To the right leads to W1065 - W1081. Going down leads to labs C1249 - C1251");
var node16 = new Node("Going up leads to W1065 - W1081, an exit, and the adiministration / Dean's office. Going right leads to W1065 - W1081. Going left leads to labs C1249 - C1251.");
var node17 = new Node("Going forward leads to W1065 - W1081. Going right leads to C1249 - C1251. Going left leads to the administration / Dean's office.");

//adding directions to nodes
root.addUp(node2);

node2.addUp(node3);
node2.addLeft(node8);
node2.addRight(node5);
node2.addDown(node1);

node3.addUp(node7);
node3.addLeft(node4);
node3.addRight(node9);
node3.addDown(node2);

//right noted but not navegable yet
node4.addRight(node3);
node4.addDown(node10);

//up noted but not navegable yet
node5.addDown(node6);
node5.addLeft(node2);

//left and right noted but not navegable
node6.addUp(node5);

//node7 up, left, right noted but not navegable
node7.addDown(node3);

node8.addRight(node2);

node9.addLeft(node3);

node10.addUp(node4);
node10.addLeft(node11);

node11.addRight(node10);
node11.addDown(node12);
node11.addUp(node13);

node12.addUp(node11);

node13.addDown(node11);
node13.addUp(node14);

node14.addDown(node13);
node14.addUp(node15);
node14.addRight(node16);

node15.addDown(node14);
node15.addRight(node17);

node16.addLeft(node14);
node16.addUp(node17);

node17.addLeft(node15);
node17.addDown(node16);


function giveInstructions(node, facing_direction) {
    readText(node.description);
    readText("Here are the directions you may move");
    switch (facing_direction) {
        case "up":
            if (node.mapu != null) readText("Forward"); // read option up
            if (node.mapd != null) readText("Back"); // read option down
            if (node.mapl != null) readText("Left"); // read option left
            if (node.mapr != null) readText("Right"); // read option right
            break;
        case "down":
            if (node.mapu != null) readText("Back"); // read option up
            if (node.mapd != null) readText("Forward"); // read option down
            if (node.mapl != null) readText("Right"); // read option left
            if (node.mapr != null) readText("Left"); // read option right
            break;
        case "left":
            if (node.mapu != null) readText("Right"); // read option up
            if (node.mapd != null) readText("Left"); // read option down
            if (node.mapl != null) readText("Forward"); // read option left
            if (node.mapr != null) readText("Back"); // read option right
            break;
        case "right":
            if (node.mapu != null) readText("Left"); // read option up
            if (node.mapd != null) readText("Right"); // read option down
            if (node.mapl != null) readText("Back"); // read option left
            if (node.mapr != null) readText("Forward"); // read option right
            break;
    }
}

function takeInstruction(node, next_direction, facing_direction) {
    switch (next_direction) {
        case "forward":
            if (facing_direction === "up") return node.mapu;
            else if (facing_direction === "down") return node.mapd;
            else if (facing_direction === "left") return node.mapl;
            else return node.mapr;
        case "back":
            if (facing_direction === "up") return node.mapd;
            else if (facing_direction === "down") return node.mapu;
            else if (facing_direction === "left") return node.mapr;
            else return node.mapl;
        case "left":
            if (facing_direction === "up") return node.mapl;
            else if (facing_direction === "down") return node.mapr;
            else if (facing_direction === "left") return node.mapd;
            else return node.mapu;
        case "right":
            if (facing_direction === "up") return node.mapr;
            else if (facing_direction === "down") return node.mapl;
            else if (facing_direction === "left") return node.mapu;
            else return node.mapd;
    }
}

function readText(text) {
    // read text to user
}

