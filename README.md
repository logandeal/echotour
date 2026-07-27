# echotour

An interactive, voice-guided audio tour of Lafferre Hall (University of
Missouri's engineering building), built for the visually impaired. Built at
**TigerHacks 2022**.

Live at [echotour.tech](https://echotour.tech).

## How it works

- Say a location to start (e.g. "Lafferre Hall") — the app confirms it heard
  you and begins narrating.
- At each point in the building, echotour describes what's around you
  (in front, behind, left, right) and lists which directions you can move.
- Say "forward", "back", "left", "right", or "leave" to navigate or end the
  tour.
- Directions stay relative to which way you're facing — turning left, then
  saying "forward" again, moves you in the new direction rather than your
  original one.

## How it's built

- Vanilla JavaScript, HTML, and CSS — no framework, no build step.
- Voice in/out via the browser's [Web Speech
  API](https://developer.mozilla.org/en-US/docs/Web/API/Web_Speech_API):
  `SpeechRecognition` for listening, `SpeechSynthesis` for narration.
- The building itself is modeled in `map.js` as a directed graph: each `Node`
  holds descriptions for what's up/down/left/right of it and links to its
  neighbors, plus optional bonus details (e.g. "this is Potential Energy
  Cafe!"). A `Person` object tracks facing direction so instructions stay
  relative as you turn through the graph.
- Hosted on GitHub Pages via the `CNAME` file pointing at echotour.tech.

## Background

Built to explore accessibility tooling for the visually impaired — the goal
was an experience that promotes independent, confident navigation of an
unfamiliar building. The team manually walked and digitized Lafferre Hall's
first floor, junction by junction, to build the graph in `map.js`.

**Challenges:** the async, event-driven nature of the Web Speech API made
state management tricky, and keeping node references consistent while
traversing (and backtracking through) the graph took some care. Mapping
Lafferre Hall's layout accurately was its own project.

**What's next:** map additional floors/buildings, integrate with existing
visual tours and museum guides, and explore games for visually impaired
users.

Read more on [DevPost](https://devpost.com/software/echotour).

## Contributors

Jonathan Gowan, Tristen Brown, Katelyn Van Dyke, Logan Deal
