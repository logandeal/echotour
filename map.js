class Node {
  constructor(upDesc, rightDesc, leftDesc, downDesc, bonusContent) {
    this.upDesc = upDesc;
    this.rightDesc = rightDesc;
    this.leftDesc = leftDesc;
    this.downDesc = downDesc;
    this.bonusContent = bonusContent;
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

class Person {
  constructor() {
    this.direction = "up";
  }
}

//function veryCoolFunc(){

//declaring nodes
var root = new Node("the main entrance.", null, null, null, null);
var node2 = new Node("a staircase with 12 steps leading down.", "a hall that leads to the Interactive digital environments lab, E1419 Auditorium, and Mechanical and Aerospace.", "potential energy cafe.", "the front entrance.", "In this area there is a study area with couches, chairs, tables, and a counter!");
var node3 = new Node("the main hallway that leads to the west wing and labs C1201 - C1206.", "an elevator, restrooms, labs C1210 - C1215, and an exit to the north couryard.", "a hallway that leads to the east wing, Overholser Atrium, labs C1243 - C1246, and labs C1249 - C1251.", "stairs with 12 steps leading up to potential energy cafe and the main entrance", "This is the portion of the main hallway closest to the entrance.");
var node4 = new Node("a hallway that leads to labs C1243 - C1246, Overholser Atrium, and Labs W1065 - W1081.", "a hallway that leads to the main entrance.", null, "a hallway that leads to restrooms, an elevator, the Civil and Environmental area, and labs C1249 - C1251", null);
var node5 = new Node(null, "a hallway that leads to the interactive digital environments lab and an exit.", "a path that leads to the main entrance", "a hallway that leads to the mechanical and aerospace area and labs E1403, E1404, E1411, E1413, and E1414.", null);
var node6 = new Node("a hall that leads to the interactive digital environments lab and the main entrance", "is a hallway that leads to labs E1411, E1413, E1414, and mechanical and aerospace.", "a womens restroom and labs E1403 and E1404.", "This portion of the hallway houses the Measurement Lab, the Thermal Fluids Lab, and the women's restroom.");
var node7 = new Node("a hallway that leads to an elevator, restrooms, ketchum auditorium, student services, and administration - deans office.", "a hallway that leads to labs C1201 - C1204.", "a hallway that leads to bas W1065 - W1081, and an exit.", "a hallway that leads to the main entrance.", null);
var node8 = new Node(null, "an area next to the main entrance.", null, null, "This is Potential Energy Cafe! You can buy coffee and snacks!");
var node9 = new Node(null, null, "the main hallway", null, "Here there are restrooms, an elevator, labs C1210-C1215 and an exit to the north courtyard");
var node10 = new Node("a hallway that leads to labs C1243 - C1246.", null, "a hallway that leads to restrooms, an elevator, the Civil and Environmental area, and labs C1249 - C1246", null, null);
var node11 = new Node("labs C1249 - C1251.", null, null, "the Civil and Environmental area", "There is a small study area here with a vending machine and restrooms.");
var node12 = new Node("a hallway that leads to labs C1249 - C1251 and restrooms.", null, null, null, "This is the Civil and Environmental area. In front of you is the room where we made this audio tour!");
var node13 = new Node("the west wing", null, "an exit.", null, null);
var node14 = new Node("a hall that leads to W1065 - W1081.", "a hall that leads to W1065 - W1081.", "an exit.", "labs C1249 - C1251", "Multiple paths lead to W1065 - W1081 because you can access the classrooms from both sides of the hall.");
var node15 = new Node(null, "classrooms W1065 - W1081.", null, "path that leads to labs C1249 - C1251", null);
var node16 = new Node("classrooms W1065 - W1081, an exit, and the adiministration / Dean's office.", "classrooms W1065 - W1081.", "labs C1249 - C1251.", "Multiple paths lead to W1065 - W1081 because you can access the classrooms from both sides of the hall.");
var node17 = new Node("the administration / Dean's offices.", "classrooms W1065 - W1081.", "labs C1249 - C1251.", "labs C1249 - C1251.", null);
var node18 = new Node(null, "a path towards Student Services, Ketcham Auditorium, and the main hallway", "an exit", "a hallway towards W1065 - W1081", "This is where the administration / Dean's offices are.");
var node19 = new Node(null, "towards the main hallway.", "in the direction of labs C1249 - C1251.", "a hallway that leads to the Civil and Environmental area and labs C1249 - C1251.", null);
var node20 = new Node("towards Ketcham Auditorium, Student Services, and rooms W1002 - W1020.", null, "a hallway that leads to restrooms and W1065 - W1081.", "in the direction of the main entrance.", "There are study rooms in this area.");
var node21 = new Node("towards Ketcham Auditorium and W1002 - W1006.", "a hallway with classrooms W1002 - W1020.", "the administration and dean's offices.", "the main hallway towards the main entrance.");
var node22 = new Node(null, null, "towards Student Services and the administration and dean's offices", "an exit", "This is where classrooms W1002 - W1020 are.");
var node23 = new Node(null, "towards ketcham and W1002 - W1006", null, "in the direction of the main hallway and the administration and dean's offices.", "This is where Student Services are. There are two grand staircases and a wide open ceiling.");
var node24 = new Node(null, null, "towards the Student Services and main hallway", null, "This location has Ketcham Auditorium where many meetings, talks, and events are held. It also has several classrooms.");
var node25 = new Node(null, "an exit", "the main hallway", null, "This hallway houses the 3D Printing Lab, Mizzou INformation and Data FUsion Lab, and Mizzou Racing.");
var node26 = new Node(null, "an exit", "towards the main entrance", null, "This is where the CREXR Lab and the Bioinformatics and Machine Learning Lab are located.");
var node27 = new Node(null, null, "in the direction of the Measurement Lab and Thermal Fluids Lab", "an exit", "In this area are the Automation and Design Lab, AI and Automation Lab, and the Graduate Student Office");

//adding directions to nodes
root.addUp(node2);

node2.addUp(node3);
node2.addLeft(node8);
node2.addRight(node5);
node2.addDown(root);

node3.addUp(node7);
node3.addLeft(node4);
node3.addRight(node9);
node3.addDown(node2);

node4.addRight(node3);
node4.addDown(node10);
node4.addUp(node19);

node5.addDown(node6);
node5.addLeft(node2);
node5.addRight(node26);

//left and right noted but not navegable
node6.addUp(node5);
node6.addRight(node27);

node7.addDown(node3);
node7.addLeft(node19);
node7.addUp(node20);
node7.addRight(node25);

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
node16.addRight(node19);

node17.addLeft(node15);
node17.addDown(node16);
node17.addUp(node18);
node17.addRight(node20);

node18.addDown(node17);
node18.addRight(node21);

node19.addDown(node4);
node19.addLeft(node16);
node19.addRight(node7);

node20.addUp(node21);
node20.addLeft(node17);
node20.addDown(node7);

node21.addDown(node20);
node21.addUp(node23);
node21.addLeft(node18);
node21.addRight(node22);

node22.addLeft(node21);

node23.addDown(node21);
node23.addRight(node24);

node24.addLeft(node23);

node25.addLeft(node7);

node26.addLeft(node5);

node27.addLeft(node6);

//person = new Person();
//nodey = takeInstruction(node2, "left", person);
//giveInstructions(nodey, person);
//
//}
function giveInstructions(node, person) {
  console.dir(node);
  currentString = "";
  switch (person.direction) {
    case "up": {
      if (node.bonusContent != null) {
        currentString += node.bonusContent + " ";
      }
      if (node.upDesc != null) {
        currentString += "In front of you is " + node.upDesc + " ";
      }
      if (node.rightDesc != null) {
        currentString += "To your right is " + node.rightDesc + " ";
      }
      if (node.leftDesc != null) {
        currentString += "To your left is " + node.leftDesc + " ";
      }
      if (node.downDesc != null) {
        currentString += "Behind you is " + node.downDesc + " ";
      }
      break;
    }
    case "down": {
      if (node.bonusContent != null) {
        currentString += node.bonusContent + " ";
      }
      if (node.downDesc != null) {
        currentString += "In front of you is " + node.downDesc + " ";
      }
      if (node.leftDesc != null) {
        currentString += "To your right is " + node.leftDesc + " ";
      }
      if (node.rightDesc != null) {
        currentString += "To your left is " + node.rightDesc + " ";
      }
      if (node.upDesc != null) {
        currentString += "Behind you is " + node.upDesc + " ";
      }
      break;
    }
    case "right": {
      if (node.bonusContent != null) {
        currentString += node.bonusContent + " ";
      }
      if (node.rightDesc != null) {
        currentString += "In front of you is " + node.rightDesc + " ";
      }
      if (node.downDesc != null) {
        currentString += "To your right is " + node.downDesc + " ";
      }
      if (node.upDesc != null) {
        currentString += "To your left is " + node.upDesc + " ";
      }
      if (node.leftDesc != null) {
        currentString += "Behind you is " + node.leftDesc + " ";
      }
      break;
    }
    case "left": {
      if (node.bonusContent != null) {
        currentString += node.bonusContent + " ";
      }
      if (node.leftDesc != null) {
        currentString += "In front of you is " + node.leftDesc + " ";
      }
      if (node.upDesc != null) {
        currentString += "To your right is " + node.upDesc + " ";
      }
      if (node.downDesc != null) {
        currentString += "To your left is " + node.downDesc + " ";
      }
      if (node.rightDesc != null) {
        currentString += "Behind you is " + node.rightDesc + " ";
      }
      break;
    }
  }
  readText(currentString);
  readText("Here are the directions you may move");
  switch (person.direction) {
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

function takeInstruction(node, next_direction, person) {
  console.dir(node);
  console.log(next_direction);
  switch (next_direction) {
    case "forward":
      if (person.direction === "up") {
        person.direction = "up";
        return node.mapu;
      } else if (person.direction === "down") {
        person.direction = "down";
        return node.mapd;
      } else if (person.direction === "left") {
        person.direction = "left";
        return node.mapl;
      } else {
        person.direction = "right";
        return node.mapr;
      }
    case "back":
      if (person.direction === "up") {
        person.direction = "down";
        return node.mapd;
      } else if (person.direction === "down") {
        person.direction = "up";
        return node.mapu;
      } else if (person.direction === "left") {
        person.direction = "right";
        return node.mapr;
      } else {
        person.direction = "left";
        return node.mapl;
      }
    case "left":
      if (person.direction === "up") {
        person.direction = "left";
        return node.mapl;
      } else if (person.direction === "down") {
        person.direction = "right";
        return node.mapr;
      } else if (person.direction === "left") {
        person.direction = "down";
        return node.mapd;
      } else {
        person.direction = "up";
        return node.mapu;
      }
    case "right":
      if (person.direction === "up") {
        person.direction = "right";
        return node.mapr;
      } else if (person.direction === "down") {
        person.direction = "left";
        return node.mapl;
      } else if (person.direction === "left") {
        person.direction = "up";
        return node.mapu;
      } else {
        person.direction = "down";
        return node.mapd;
      }
  }
}

// function readText(text) {
//   // console.log(text);
//   // read text to user
// }
