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
var node7 = new Node("In front of you is a hallway that leads to an elevator, restrooms, ketchum auditorium, student services, and administration - deans office. To your left is a hallway that leads to bas W1065 - W1081, and an exit to the south. To your right is a hallway that leads to labs C1201 - C1204.")
var node8 = new Node("This is Potential Energy Cafe! You can buy coffee and snacks!")

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

//right and left noted but not navegable yet
node4.addRigh(node3);

//up noted but not navegable yet
node5.addDown(node6);
node5.addLeft(node2);

//left and right noted but not navegable
node6.addUp(node5);

//node7 up, left, right noted but not navegable
node7.addDown(node3);

node8.addRight(node2);

function giveInstructions(node, facing_direction) {
    readText(node.description);
    readText("Here are the directions you may move");
    switch (facing_direction) {
        case: "up"
            if (node.mapu != null) readText("Forward"); // read option up
            if (node.mapd != null) readText("Back"); // read option down
            if (node.mapl != null) readText("Left"); // read option left
            if (node.mapr != null) readText("Right"); // read option right
            break;
        case: "down"
            if (node.mapu != null) readText("Back"); // read option up
            if (node.mapd != null) readText("Forward"); // read option down
            if (node.mapl != null) readText("Right"); // read option left
            if (node.mapr != null) readText("Left"); // read option right
            break;
        case: "left"
            if (node.mapu != null) readText("Right"); // read option up
            if (node.mapd != null) readText("Left"); // read option down
            if (node.mapl != null) readText("Forward"); // read option left
            if (node.mapr != null) readText("Back"); // read option right
            break;
        case: "right"
            if (node.mapu != null) readText("Left"); // read option up
            if (node.mapd != null) readText("Right"); // read option down
            if (node.mapl != null) readText("Back"); // read option left
            if (node.mapr != null) readText("Forward"); // read option right
            break;
    }
}

function takeInstruction(node, next_direction, facing_direction) {
    switch (next_direction) {
        case: "forward"
            if (facing_direction === "up") return node.mapu;
            else if (facing_direction === "down") return node.mapd;
            else if (facing_direction === "left") return node.mapl;
            else return node.mapr;
        case: "back"
            if (facing_direction === "up") return node.mapd;
            else if (facing_direction === "down") return node.mapu;
            else if (facing_direction === "left") return node.mapr;
            else return node.mapl;
        case: "left"
            if (facing_direction === "up") return node.mapl;
            else if (facing_direction === "down") return node.mapr;
            else if (facing_direction === "left") return node.mapd;
            else return node.mapu;
        case: "right"
            if (facing_direction === "up") return node.mapr;
            else if (facing_direction === "down") return node.mapl;
            else if (facing_direction === "left") return node.mapu;
            else return node.mapd;
    }
}

function readText(text) {
    // read text to user
}