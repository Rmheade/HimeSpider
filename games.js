const baseGames = [
{
    name: "Suggestions and Issues Form",
    url: "https://docs.google.com/forms/d/e/1FAIpQLSeog95fl57i1Jv28IUltDQdAHghnphJHIKCL3biTzReZtLXVA/viewform",
    image: "images/form.svg",
    description: "Have a game suggestion or Issue? Click here to share your thoughts and help improve our game collection!",
    controls: "N/A",
    category: "Other",
    isPriority: true,
    isExternal: true
},
{
 name: "Chat GPT",
 url: "pages/gpt/index.html",
 image: "pages/gpt/gpt.svg",
 description: "A web-based interface to interact with the Chat GPT language model, allowing users to input prompts and receive AI-generated text responses in real-time." ,
 controls: "Type your prompt into the text box and press Enter to submit",
 category: "Other",
 isPriority: true
},
{
 name: "Infinite Mario",
 url: "/pages/mario/main.html",
 image: "images/mario.jpg",
 description: "An endless platformer featuring Mario navigating through randomly generated levels with progressively increasing difficulty, jumping over obstacles and enemies.",
 controls: "Arrow Keys or A/D to move, Spacebar to jump",
 category: "Platformer"
},
{
 name: "Geometry Dash",
 url: "/pages/geodash/index.html",
 image: "images/goedash.png",
 description: "A rhythm-based platformer where a geometric cube auto-runs through obstacle courses, requiring precise timing to jump at exact moments to the beat of the soundtrack.",
 controls: "Spacebar or Mouse Click to jump",
 category: "Platformer"
},
{
 name: "Breakout",
 url: "/pages/breakout/index.html",
 image: "images/breakout.png",
 description: "A classic brick-breaking game where a paddle bounces a ball to destroy colored blocks at the top of the screen while avoiding losing the ball.",
 controls: "Arrow keys to control paddle",
 category: "Arcade"
},
{
 name: "Pacman",
 url: "/pages/pac/index.html",
 image: "images/pac.png",
 description: "Navigate a maze as Pacman, eating pellets while avoiding colorful ghosts that chase you, with power-ups available to temporarily turn the tables and eat the ghosts.",
 controls: "Arrow Keys to move",
 category: "Arcade"
},
{
 name: "Evil Glitch",
 url: "/pages/EvilGlitch/index.html",
 image: "images/evilglitch.jpg",
 description: "2D arcade shoot 'em up with a retro, 80s-inspired aesthetic, where players defend their world from an invasion of interdimensional glitches",
 controls: "Controls: Arrow Keys to Move, Click to Shoot",
 category: "Shooter"
},
{
 name: "Getting Over It Multiplayer",
 url: "/pages/goi/index.html",
 image: "images/gettingoverit.avif",
 description: "A cooperative multiplayer climbing game where players work together using a hammer to scale an enormous mountain filled with tricky obstacles and environmental hazards.",
 controls: "Mouse or WASD to move and aim hammer, Click to swing",
 category: "Platformer"
},
{
 name: "Terraria",
 url: "/pages/terraria/index.html",
 image: "images/terraria.png",
 description: "A 2D sandbox adventure game combining exploration, mining, and combat where you build structures, collect resources, and battle bosses in a vast underground world.",
 controls: "Arrow Keys or WASD to move, Mouse to aim and click to attack, E to interact",
 category: "Sandbox"
},
{
 name: "FNAF 1",
 url: "/pages/fnaf1/index.html",
 image: "pages/fnaf1/logo.jpg",
 description: "Survive five nights as a security guard at an abandoned animatronic pizzeria, monitoring cameras and doors to keep terrifying robots from entering your office.",
 controls: "Mouse to click buttons, Keyboard arrow keys to navigate menu",
 category: "Horror"
},
{
 name: "FNAF 2",
 url: "/pages/fnaf2/index.html",
 image: "pages/fnaf2/logo.jpg",
 description: "Return to another location with updated animatronics, now requiring you to wear a mask and manage both camera systems and audio lures in your fight for survival.",
 controls: "Mouse to click cameras and buttons, Spacebar to wear mask",
 category: "Horror"
},
{
 name: "FNAF 3",
 url: "/pages/fnaf3/index.html",
 image: "pages/fnaf3/logo.webp",
 description: "The game shifts focus to managing a haunted attraction with broken animatronics and audio systems, requiring puzzle-solving alongside traditional survival mechanics.",
 controls: "Mouse to interact with control panel and cameras",
 category: "Horror"
},
{
 name: "FNAF 4",
 url: "/pages/fnaf4/index.html",
 image: "pages/fnaf4/logo.webp",
 description: "Experience a young child's nightmare as animatronics prowl your house; use strategically placed doors and listen for audio cues to survive each terrifying night.",
 controls: "Arrow Keys to move, Mouse to interact with doors",
 category: "Horror"
},
{
 name: "FNAF Ultimate Custom Night",
 url: "/pages/fnafucn/index.html",
 image: "pages/fnafucn/logo.webp",
 description: "Face an ultimate gauntlet combining animatronics from across the FNAF series with fully customizable AI difficulty levels for the ultimate survival challenge.",
 controls: "Mouse to manage camera and office systems",
 category: "Horror"
},
{
 name: "Diablo",
 url: "/pages/diablo/index.html",
 image: "images/diablo.webp",
 description: "An isometric dungeon crawler featuring real-time combat, loot collection, and increasingly difficult enemies as you descend through catacombs to face the lord of darkness.",
 controls: "Mouse click to move and attack, Keyboard for spells and inventory",
 category: "RPG"
},
{
 name: "Takeover",
 url: "/pages/takover/index.html",
 image: "images/takeover.avif",
 description: "An io game where your goal is to takeover every player on the map. Eat to grow, and touch other players to convert them.",
 controls: "Mouse move.",
 category: "IO"
},
{
 name: "1D Game",
 url: "/pages/1D-Game/index.html",
 image: "images/lines.jpg",
 description: "A minimalist gameplay experience set in one dimension where you navigate a maze while defending yourself from a monster.",
 controls: "Arrow Keys to move, space to shoot",
 category: "Other"
},
{
 name: "Retro Bowl",
 url: "/pages/retro-bowl/index.html",
 image: "pages/retro-bowl/img/icon.jpg",
 description: "A retro-styled American football management game combining simple pixel graphics with strategic team building, play-calling, and on-field execution.",
 controls: "Mouse to select plays and aim passes, Spacebar to snap",
 category: "Sports"
},
{
 name: "Rooftop Snipers",
 url: "/pages/rooftopsnipers/index.html",
 image: "pages/rooftopsnipers/img/preview.png",
 description: "A physics-based multiplayer duel game where two characters stand on rooftops with limited ammunition, aiming to knock each other off with sniper rifle shots.",
 controls: "Arrow Keys to aim and move, Spacebar to shoot (Player 1) / WASD to move, E to shoot (Player 2)",
 category: "IO"
},
{
 name: "Tunnel Rush",
 url: "/pages/tunnel-rush/index.html",
 image: "pages/tunnel-rush/img/tunnel.jpg",
 description: "A fast-paced 3D racing game where you navigate through an ever-narrowing tunnel at high speed, dodging walls and obstacles to survive as long as possible.",
 controls: "Arrow Keys or A/D to strafe left and right, Spacebar to boost",
 category: "Endless"
},
{
 name: "Doge Miner",
 url: "/pages/doge-miner/index.html",
 image: "pages/doge-miner/img/dogeminer_300x300.png",
 description: "A humorous incremental clicker game featuring the iconic Doge meme, mining for resources and progressively purchasing upgrades to expand your operation.",
 controls: "Mouse click to mine, Click upgrades to purchase",
 category: "Clicker"
},
{
 name: "World's Hardest Game",
 url: "/pages/worldhardgame/index.html",
 image: "pages/worldhardgame/images/splash.jpg",
 description: "An intentionally punishing puzzle platformer with brutal difficulty, requiring split-second timing and perfect execution to navigate intricate obstacle patterns.",
 controls: "Arrow Keys to move, timing-based navigation with no jumps",
 category: "Strategy"
},
{
 name: "Basketball Stars",
 url: "/pages/basketballstars/index.html",
 image: "pages/basketballstars/assets/images/basketball-stars.png",
 description: "A competitive sports game featuring fast-paced basketball matches with realistic physics, allowing you to shoot, dribble, and battle opponents one-on-one.",
 controls: "Mouse to aim and shoot, WASD or Arrow Keys to move",
 category: "Sports"
},
{
 name: "Backflip",
 url: "/pages/backflip/index.html",
 image: "pages/backflip/backflip-dive-3d.jpg",
 description: "A 3D diving and parkour game where you perform acrobatic stunts and backflips while navigating through challenging courses and avoiding hazards.",
 controls: "Spacebar to perform flips",
 category: "Sports"
},
{
 name: "Cookie Clicker",
 url: "/pages/cookie-clicker/index.html",
 image: "images/cookie.webp",
 description: "An addictive idle game where you click cookies to accumulate currency and purchase generators and upgrades in an exponentially expanding economic system.",
 controls: "Mouse click on cookie to earn, Click buildings and upgrades to purchase",
 category: "Clicker"
},
{
 name: "Battle For Gondor",
 url: "/pages/batforgondor/index.html",
 image: "pages/batforgondor/battleforgondor.jpg",
 description: "A tower defense game inspired by Lord of the Rings where you strategically place defenses to stop waves of enemies from breaching your fortress walls.",
 controls: "Mouse to select towers, Click to place, Right-click to rotate",
 category: "Strategy"
},
{
 name: "Gimme the Airpod",
 url: "/pages/gimmetheairpod/index.html",
 image: "pages/gimmetheairpod/img/logo.png",
 description: "A humorous two players game where you throw an axe at each other to steal the airpod." ,
 controls: "Arrow Keys or WASD to move, F or comma key to jump, G or period key to grab or throw",
 category: "Other"
},
{
 name: "Factory Balls",
 url: "/pages/factoryballs/index.html",
 image: "pages/factoryballs/images/splash.png",
 description: "A puzzle game where you manipulate factory equipment to paint, dip, and shape balls to match target designs shown at the end of each assembly line.",
 controls: "Mouse to drag and interact with factory machines",
 category: "Strategy"
},
{
 name: "Subway Surfers",
 url: "/pages/subwaysurfers/index.html",
 image: "pages/subwaysurfers/splash.jpeg",
 description: "An endless runner set in subway tunnels where you evade guards and trains, collecting coins and power-ups while navigating between tracks at increasing speeds.",
 controls: "Arrow Keys or WASD to move between lanes, Spacebar to jump",
 category: "Endless"
},
{
 name: "Getaway Shootout",
 url: "/pages/getawayshootout/index.html",
 image: "pages/getawayshootout/934bde36-a4a1-43d0-8b35-30f15feddbb4.png",
 description: "A chaotic multiplayer shooter where you battle opponents across a destructible wild west town, grabbing weapons and using environmental hazards to achieve victory.",
 controls: "Arrow Keys to move, Mouse to aim, Click to shoot, Spacebar to jump",
 category: "IO"
},
{
 name: "Balloons TD",
 url: "/pages/balloonstd/index.html",
 image: "pages/balloonstd/bloonstd.jpg",
 description: "A strategic tower defense game where you place monkey towers to pop waves of colorful balloons, unlocking increasingly powerful defenses and abilities.",
 controls: "Mouse to select towers, Click to place, Right-click for tower menu",
 category: "Strategy"
},
{
 name: "Balloons TD 2",
 url: "/pages/balloonstd2/index.html",
 image: "pages/balloonstd2/bloonstd2.png",
 description: "The sequel expands on tower defense mechanics with more tower types, complex balloon mechanics, and deeper strategic options for challenging maps.",
 controls: "Mouse to select and place towers, Right-click for tower upgrades",
 category: "Strategy"
},
{
 name: "Minecraft",
 url: "/pages/Eaglercraft/Eaglercraft.html",
 image: "pages/Eaglercraft/minecraft.jpg",
 description: "A 3D sandbox game where players explore a world made of blocks to gather resources, build structures, and survive.",
 controls: "WASD to move, Mouse to look around, Click to break/place blocks, E for inventory",
 category: "Sandbox"
},
{
 name: "Celeste",
 url: "https://lkarch.org/celeste/",
 image: "pages/celeste-pico8/celeste.jpg",
 description: "A challenging pixel-art platformer following a climber ascending a mountain filled with perilous jumps, wall-slides, and dash mechanics with an emotional narrative." ,
 controls: "Arrow Keys or WASD to move, Spacebar to jump, Shift to dash",
 category: "Platformer"
},
{
 name: "Slope",
 url: "/pages/Slope/index.html",
 image: "pages/Slope/slope4.jpeg",
 description: "An addictive 3D endless runner where a ball rolls down a neon-lit slope, requiring quick reflexes to dodge barriers and stay on the narrow path." ,
 controls: "Arrow Keys or A/D to move left and right",
 category: "Endless"
},
{
 name: "Portal",
 url: "/pages/portal/game.html",
 image: "pages/portal/portal.avif",
 description: "A physics-based puzzle-platformer where you use a portal gun to create interconnected wormholes, solving environmental puzzles to escape test chambers." ,
 controls: "WASD to move, click to spawn portals",
 category: "Strategy"
},
{
 name: "Pokemon Unbound",
 url: "/pages/PokemonUnbound/index.html",
 image: "pages/PokemonUnbound/unbound.jpg",
 description: "A fan-made Pokemon game featuring enhanced graphics, new mechanics, expanded pokedex entries, and a challenging campaign with competitive gym battles and legendary encounters." ,
 controls: "Arrow Keys to move, Enter to interact, A/B for menu selection",
 category: "RPG"
},
{
 name: "Vex 4",
 url: "/pages/vex4/index.html",
 image: "pages/vex4/vex4.png",
 description: "A fast-paced platformer requiring precise timing and button combinations to navigate deadly spike-filled corridors and challenging acrobatic sequences." ,
 controls: "Arrow Keys or WASD to move, Spacebar to jump, Z to dash, X to wall-slide",
 category: "Platformer"
},
{
 name: "Vex 5",
 url: "/pages/vex5/index.html",
 image: "pages/vex5/vex.jpeg",
 description: "The fifth installment introduces new mechanics and platform types while maintaining brutal difficulty, demanding mastery of complex movement combinations and split-second timing." ,
 controls: "Arrow Keys or WASD to move, Spacebar to jump, Z to dash, X to wall-slide",
 category: "Platformer"
},
{
 name: "Vex 6",
 url: "/pages/vex6/index.html",
 image: "pages/vex6/assets/icon.jpeg",
 description: "The latest Vex game expands upon the series with additional levels, refined controls, and increasingly creative obstacle designs that test your platforming expertise." ,
 controls: "Arrow Keys or WASD to move, Spacebar to jump, Z to dash, X to wall-slide",
 category: "Platformer"
},
{
 name: "Fnaf 6: Pizza Simulator",
 url: "/pages/fnafps/index.html",
 image: "pages/fnafps/fnafps.png",
 description: "A business simulation meets survival horror where you manage a pizzeria while dealing with animatronic threats, balancing profit with security concerns." ,
 controls: "Mouse to manage business operations and interact with systems",
 category: "Horror"
},
{
 name: "Sonic the Hedgehog 3",
 url: "/pages/sonic3/index.html",
 image: "pages/sonic3/sonic3.jpg",
 description: "A classic Genesis-era platformer featuring Sonic's signature speed-based gameplay, loop-de-loops, and competitive boss battles across varied themed zones." ,
 controls: "Arrow Keys to move, Spacebar to jump, hold to rev spin dash",
 category: "Platformer"
},
{
 name: "Mortal Kombat 3",
 url: "/pages/MortalKombat3/index.html",
 image: "pages/MortalKombat3/mk3.jpeg",
 description: "A brutal 2D fighting game featuring a diverse roster of martial artists with signature finishing moves and a dark cyberpunk-influenced storyline campaign." ,
 controls: "Arrow Keys to move and perform combos, WASD for special moves, Enter to select fighter",
 category: "Fighting"
},
{
 name: "Fnaf World",
 url: "/pages/fnafw/index.html",
 image: "pages/fnafw/fnafworld.webp",
 description: "A turn-based RPG spin-off featuring animatronic characters in a colorful world, combining JRPG mechanics with the FNAF universe and quirky humor." ,
 controls: "Mouse to navigate menus, Click to select actions and dialogue options",
 category: "Horror"
},
{
 name: "Super Meatboy",
 url: "/pages/Meatboy/game.html",
 image: "pages/Meatboy/meatboy.jpg",
 description: "An infamously difficult platformer where you guide a sentient cube of meat through blood-soaked levels filled with buzz saws and other gruesome obstacles." ,
 controls: "Arrow Keys or WASD to move, Spacebar to jump, Shift to dash",
 category: "Platformer"
},
{
 name: "2048",
 url: "/pages/2048/index.html",
 image: "pages/2048/2048.png",
 description: "A mathematical puzzle game where you slide numbered tiles to combine them and reach the elusive 2048 tile through strategic placement and planning." ,
 controls: "Arrow Keys to move tiles in four directions",
 category: "Puzzle"
},
{
 name: "The Impossible Quiz",
 url: "/pages/impossiblequiz/game.html",
 image: "pages/impossiblequiz/impossiblequiz.jpg",
 description: "A mind-bending trivia game with trick questions, absurd logic puzzles, and unexpected mechanics that subvert traditional quiz game conventions." ,
 controls: "Mouse to click answers and navigate, sometimes requires unusual button combinations",
 category: "Puzzle"
},
{
 name: "Hollow Knight",
 url: "/pages/hollow-knight-main/index.html",
 image: "pages/hollow-knight-main/hollowknight.png",
 description: "A metroidvania featuring a silent knight exploring an interconnected underground kingdom, battling hostile creatures and unraveling the mysteries of a fallen civilization." ,
 controls: "Arrow Keys or WASD to move, Spacebar to jump, Z to attack, X for special abilities, Enter for menu",
 category: "Platformer"
},
{
 name: "Super Smash Bros",
 url: "/pages/SSB/game.html",
 image: "pages/SSB/ssb.webp",
 description: "A multiplayer fighting game featuring iconic Nintendo characters battling on various stages, combining accessible controls with competitive depth and platform-specific mechanics." ,
 controls: "Arrow Keys to move and attack, Spacebar to jump, Z for special moves, Enter to select character",
 category: "Fighting"
},
{
 name: "Balatro",
 url: "/pages/belatro/index.html",
 image: "pages/belatro/belatro.jpg",
 description: "A roguelike deck-building game combining poker hand mechanics with strategic card synergies, requiring careful synergy planning across multiple runs." ,
 controls: "Mouse to select and play cards, Click to confirm hands",
 category: "Strategy"
},
{
 name: "Undertale",
 url: "pages/undertale/undertale.html",
 image: "pages/undertale/undertale.jpg",
 description: "A narrative-driven RPG where your choices determine the story's outcome, featuring bullet-hell combat, memorable characters, and philosophical themes about pacifism versus violence." ,
 controls: "Arrow Keys to move, Spacebar or Z to interact, Shift for menu navigation",
 category: "RPG"
},
{
 name: "Deltarune",
 url: "pages/deltarune/index.html",
 image: "pages/deltarune/deltarune.jpg",
 description: "A spiritual successor to Undertale featuring new characters in a different world, maintaining the same innovative bullet-dodging combat system and player-choice narrative framework." ,
 controls: "Arrow Keys to move, Spacebar or Z to interact, Shift for menu navigation",
 category: "RPG"
},
{
 name: "Moto X3M",
 url: "pages/motox3m/index.html",
 image: "pages/motox3m/moto-x3m.png",
 description: "A stunt motorcycle racing game where you perform tricks and flips while navigating obstacle-filled tracks, managing speed and air time to complete levels.",
 controls: "Arrow Keys or A/D to lean forward/backward, Spacebar or W/S to accelerate/brake",
 category: "Racing"
},
{
 name: "Sonic & Knuckles",
 url: "pages/Sonic&Knuckles/index.html",
 image: "pages/Sonic&Knuckles/s&n.webp",
 description: "A Genesis classic where Sonic and Knuckles race to stop a villain, featuring Knuckles' unique climbing and gliding abilities alongside Sonic's speed-based platforming.",
 controls: "Arrow Keys to move, Spacebar to jump, hold for spin dash",
 category: "Platformer"
},
{
 name: "Tanuki Sunset",
 url: "pages/tsunset/index.html",
 image: "pages/tsunset/img/cover.png",
 description: "A zen-like driving game where a tanuki cruises through beautiful voxel landscapes at sunset, focusing on relaxation and artistic presentation over competition.",
 controls: "Arrow Keys or A/D to steer, maintain steady speed",
 category: "Endless"
},
{
 name: "10 Minutes Till Dawn",
 url: "/pages/10-minutes-till-dawn/index.html",
 image: "pages/10-minutes-till-dawn/tmtd.png",
 description: "A roguelike survival shooter where you defend against waves of enemies for ten minutes, collecting upgrades and power-ups to increase your arsenal and survivability.",
 controls: "WASD or Arrow Keys to move, Mouse to aim and click to shoot",
 category: "Shooter"
},
{
 name: "1v1 LOL",
 url: "/pages/1v1-lol/index.html",
 image: "pages/1v1-lol/1v1.png",
 description: "A competitive building and shooting game inspired by battle royales, where you construct structures while engaging in fast-paced combat against other players.",
 controls: "WASD to move, Mouse to aim and shoot, Click to build, E to edit structures",
 category: "Shooter"
},
{
 name: "Abandoned",
 url: "/pages/abandoned/index.html",
 image: "pages/abandoned/abd.png",
 description: "A psychological horror exploration game set in a desolate environment, focusing on atmosphere and storytelling as you uncover mysteries through environmental clues.",
 controls: "WASD to move, Mouse to look around, E to interact with objects",
 category: "Horror"
},
{
 name: "A Dark Room",
 url: "/pages/adarkroom/index.html",
 image: "images/adr.png",
 description: "A minimalist text-based adventure where you start in darkness and gradually build a civilization through strategic decisions and resource management in a post-apocalyptic setting.",
 controls: "Mouse to click buttons and make choices",
 category: "RPG"
},
{
 name: "Ages of Conflict",
 url: "/pages/ages-of-conflict/index.html",
 image: "pages/ages-of-conflict/aoc.jpg",
 description: "A real-time strategy game spanning multiple historical eras, where you build bases, train units, and engage in tactical warfare across various battlefields and civilizations.",
 controls: "Mouse to select units and structures, Click to command movement and attacks",
 category: "Simulation"
},
{
 name: "Amidst the Sky",
 url: "/pages/amidst-the-sky/index.html",
 image: "pages/amidst-the-sky/ats.png",
 description: "A peaceful exploration game set among clouds and floating islands, emphasizing discovery and environmental storytelling over combat or time pressure.",
 controls: "WASD to move, Mouse to look, Spacebar to jump, E to interact",
 category: "Platformer"
},
{
 name: "Another Gentleman's\\nAdventure",
 url: "/pages/another-gentlemans-adventure/index.html",
 image: "pages/another-gentlemans-adventure/aga.jpg",
 description: "A whimsical pixel-art platformer following a gentleman's quest through fantastical lands, combining humor with challenging level design and secret discoveries.",
 controls: "Arrow Keys or WASD to move, Spacebar to jump, E to interact",
 category: "Platformer"
},
{
 name: "Awesome Tanks 2",
 url: "/pages/awesome-tanks-2/index.html",
 image: "pages/awesome-tanks-2/at2.png",
 description: "A tank-based strategy shooter featuring level-based campaigns where you upgrade weapons and armor, destroying enemy bases while protecting your tank from incoming fire.",
 controls: "Mouse to aim and position tank, Click to shoot, WASD for movement",
 category: "Shooter"
},
{
 name: "Awesome Tanks",
 url: "/pages/awesome-tanks/index.html",
 image: "pages/awesome-tanks/at.png",
 description: "A classic tank combat game where you destroy enemy bases and vehicles, earning upgrades through progression to increase firepower and defensive capabilities.",
 controls: "Mouse to aim, Click to fire, Arrow Keys or WASD to move",
 category: "Shooter"
},
{
 name: "Babel Tower",
 url: "/pages/babel-tower/index.html",
 image: "pages/babel-tower/bt.avif",
 description: "A tower-building puzzle game where you stack blocks to construct increasingly tall structures, managing balance and gravity to avoid toppling.",
 controls: "Mouse to select and place blocks at angles",
 category: "Clicker"
},
{
 name: "Basket Random",
 url: "/pages/basket-random/index.html",
 image: "pages/basket-random/br.png",
 description: "A two player game full of chaos. Players tilt back and forth, so you need to time your jumps correctly!",
 controls: "Up arrow or W to jump and shoot",
 category: "Sports"
},
{
 name: "BitLife",
 url: "/pages/bit-life/index.html",
 image: "pages/bit-life/bl.png",
 description: "A text-based life simulation where you make decisions that shape an entire virtual life from birth to death, exploring careers, relationships, and life outcomes.",
 controls: "Mouse to read text and click choices",
 category: "Simulation"
},
{
 name: "Boxing Random",
 url: "/pages/boxing-random/index.html",
 image: "pages/boxing-random/br.png",
 description: "A two player game full of chaos. Players tilt back and forth, so you need to time your jumps correctly!",
 controls: "Up arrow or W to jump and punch",
 category: "Sports"
},
{
 name: "Chrome Dino",
 url: "/pages/chrome-dino/index.html",
 image: "pages/chrome-dino/cd.webp",
 description: "Google's offline dinosaur game where a T-Rex runs across a desert landscape, jumping over cacti and ducking under pterodactyls with increasing speed.",
 controls: "Spacebar or Up Arrow to jump, Down Arrow to duck",
 category: "Endless"
},
{
 name: "Clicker Heroes",
 url: "/pages/clicker-heroes-updated/index.html",
 image: "pages/clicker-heroes-updated/ch.jpeg",
 description: "An incremental RPG combining idle mechanics with active clicking, where you hire heroes and purchase upgrades to defeat increasingly powerful monsters and bosses.",
 controls: "Mouse to click monsters and purchase heroes/upgrades",
 category: "Clicker"
},
{
 name: "Conway's Game of Life",
 url: "/pages/conways-game-of-life/index.html",
 image: "pages/conways-game-of-life/cgl.png",
 description: "A cellular automaton simulation based on mathematical rules, where you set initial patterns and watch complex emergent behaviors evolve autonomously.",
 controls: "Mouse to place cells, Click to start/pause simulation, keyboard to adjust speed",
 category: "Simulation"
},
{
 name: "Core Ball",
 url: "/pages/core-ball/index.html",
 image: "pages/core-ball/cb.jpg",
 description: "A simple but fun game of timing where you shoot lines into a rotating ball. If you hit an empty space, you score points. Hit a line and it's game over!" ,
 controls: "Click to shoot line",
 category: "Timing"
},
{
 name: "Crossy Road",
 url: "/pages/crossy-road/index.html",
 image: "pages/crossy-road/cr.jpeg",
 description: "An endless arcade-style game where you navigate a character across roads, rivers, and railways, collecting coins while avoiding traffic and hazards in voxel environments.",
 controls: "Arrow Keys or WASD to move in one direction at a time, hold to continue",
 category: "Timing"
},
{
 name: "Cut the Rope",
 url: "/pages/cut-the-rope/index.html",
 image: "pages/cut-the-rope/ctr.png",
 description: "A physics-based puzzle game where you cut ropes holding candy to feed it to a hungry monster, using momentum and timing to overcome various obstacles.",
 controls: "Mouse to draw lines cutting ropes",
 category: "Puzzle"
},
{
 name: "Dadish",
 url: "/pages/dadish/index.html",
 image: "pages/dadish/dd.jpg",
 description: "A charming platformer starring a radish father searching for his kidnapped children, featuring gentle gameplay and humorous dialogue throughout colorful levels.",
 controls: "Arrow Keys or WASD to move, Spacebar to jump, E to interact",
 category: "Platformer"
},
{
 name: "Dadish 2",
 url: "/pages/dadish-2/index.html",
 image: "pages/dadish-2/dd2.png",
 description: "The sequel continues the radish father's adventure with new worlds and challenges, introducing expanded mechanics while maintaining the heartwarming family-focused narrative.",
 controls: "Arrow Keys or WASD to move, Spacebar to jump, E to talk to characters",
 category: "Platformer"
},
{
 name: "Dadish 3",
 url: "/pages/dadish-3/index.html",
 image: "pages/dadish-3/dd3.webp",
 description: "The third installment expands the platforming experience with additional abilities and zones, deepening the story of the vegetable family reunion with new obstacles.",
 controls: "Arrow Keys or WASD to move, Spacebar to jump, E to interact with world",
 category: "Platformer"
},
{
 name: "Doodle Jump",
 url: "/pages/doodle-jump/index.html",
 image: "pages/doodle-jump/icon.png",
 description: "An endless vertical platformer where a doodle creature bounces upward through platforms, dodging enemies and collecting power-ups in a vertically scrolling level.",
 controls: "Left and Right Arrow Keys to move, Spacebar or Up Arrow to jump",
 category: ""
},
{
 name: "Drift Boss",
 url: "/pages/drift-boss/index.html",
 image: "pages/drift-boss/db.png",
 description: "A minimalist driving game focused on drifting mechanics, where you must carfuly drift around bend after bend, trying to get a high score" ,
 controls: "Space to change drift direction",
 category: "Racing"
},
{
 name: "Drive Mad",
 url: "/pages/drive-mad/index.html",
 image: "pages/drive-mad/dm.jpg",
 description: "A stunt driving game with ragdoll physics where vehicles navigate treacherous obstacle courses, requiring precise control to avoid flipping and crashing.",
 controls: "Arrow Keys or WASD to move, Spacebar to accelerate, careful balance required",
 category: "Puzzle"
},
{
 name: "Duck Life 4",
 url: "/pages/duck-life-4/index.html",
 image: "pages/duck-life-4/dl4.jpg",
 description: "A duck training and racing game where you raise a duck through mini-games to develop running, flying, swimming, and climbing skills before competitive races.",
 controls: "Arrow Keys or WASD to move, Spacebar to jump, Mouse to select training activities",
 category: "Sports"
},
{
 name: "Dune",
 url: "/pages/dune/index.html",
 image: "pages/dune/dune.png",
 description: "A physics-based arcade game where you launch a ball over sand dunes, timing your jumps to land smoothly and maintain momentum to achieve the highest possible score.",
 controls: "Controls: Mouse click or Spacebar to jump/launch.",
 category: "Arcade"
},
{
 name: "Evowars",
 url: "/pages/evowars/index.html",
 image: "pages/evowars/evo.jpeg",
 description: "A multiplayer IO game where you fight opponents with a huge sword, collecting orbs to increase your size and evolve your character to become the largest and most dominant on the map." ,
 controls: "Controls: Mouse to move, Left Click to attack.",
 category: "IO"
},
{
 name: "Fireboy and Watergirl",
 url: "/pages/fireboy-and-watergirl/index.html",
 image: "pages/fireboy-and-watergirl/fb1.jpeg",
 description: "A cooperative puzzle platformer featuring a fire character and water character navigating temples, using their elemental properties to solve environmental challenges." ,
 controls: "Arrow Keys for Fireboy movement, WASD for Watergirl movement, Spacebar to jump",
 category: "Platformer"
},
{
 name: "Fireboy and Watergirl 2",
 url: "/pages/fireboy-and-watergirl-2/index.html",
 image: "pages/fireboy-and-watergirl-2/fb2.jpeg",
 description: "The sequel expands temple exploration with new mechanics and puzzles, requiring coordinated teamwork between the two elemental characters across elaborate levels." ,
 controls: "Arrow Keys for Fireboy, WASD for Watergirl, Spacebar to interact",
 category: "Platformer"
},
{
 name: "Fireboy and Watergirl 3",
 url: "/pages/fireboy-and-watergirl-3/index.html",
 image: "pages/fireboy-and-watergirl-3/fb3.jpeg",
 description: "The third installment introduces ice-based puzzles alongside fire and water mechanics, adding complexity to cooperative gameplay with frozen obstacles and pathways." ,
 controls: "Arrow Keys for Fireboy, WASD for Watergirl, Spacebar to jump or push objects",
 category: "Platformer"
},
{
 name: "Fireboy and Watergirl 4",
 url: "/pages/fireboy-and-watergirl-4/index.html",
 image: "pages/fireboy-and-watergirl-4/fb4.jpeg",
 description: "Continuing the series with additional elemental mechanics and challenging puzzles combining fire, water, and new environmental elements across interconnected rooms." ,
 controls: "Arrow Keys for Fireboy, WASD for Watergirl, coordinate for puzzle solving",
 category: "Platformer"
},
{
 name: "Flappy Bird",
 url: "/pages/flappy-bird/index.html",
 image: "pages/flappy-bird/fb.webp",
 description: "A deceptively simple yet addictive game where a bird flaps through gaps between pipes, requiring precise timing to avoid obstacles and achieve high scores." ,
 controls: "Spacebar or Mouse Click to flap wings, maintain flight through pipe gaps",
 category: "Endless"
},
{
 name: "FNAF Sister Location",
 url: "/pages/fnafsl/index.html",
 image: "pages/fnafsl/fnafsl.webp",
 description: "A Five Nights at Freddy's spin-off set in an underground facility where you manage vents and animatronics using a controlled AI system while uncovering dark secrets." ,
 controls: "Mouse to interact with security terminal and vent controls",
 category: "Horror"
},
{
 name: "Friday Night Funkin'",
 url: "/pages/friday-night-funkin/index.html",
 image: "pages/friday-night-funkin/fnf.avif",
 description: "A rhythm game where you engage in rap battles against various opponents, hitting the correct key prompts to the beat while following a compelling narrative." ,
 controls: "Arrow Keys to hit notes on beat, follow the falling arrows",
 category: "Rhythm"
},
{
 name: "Gons.io",
 url: "/pages/gons-io/index.html",
 image: "pages/gons-io/gons.jpg",
 description: "A multiplayer shooter game where players fight in arenas collecting weapons and power-ups while competing for dominance in fast-paced combat encounters." ,
 controls: "WASD or Arrow Keys to move, Mouse to aim and click to shoot",
 category: "IO"
},
{
 name: "Gun Spin",
 url: "/pages/gunspin/index.html",
 image: "pages/gunspin/gs.png",
 description: "A physics-based gun-spinning and shooting game where you perform trick spins with firearms and engage in target practice with realistic ballistic mechanics." ,
 controls: "Mouse to aim and spin gun, Click to shoot, drag to rotate",
 category: "Endless"
},
{
 name: "Hextris",
 url: "/pages/hextris/index.html",
 image: "pages/hextris/hex.png",
 description: "A hexagon-based puzzle game combining block-stacking mechanics with rotating fields, requiring strategic placement to clear pieces and prevent grid overflow." ,
 controls: "Left and Right Arrow Keys to rotate, Spacebar to place blocks",
 category: "Puzzle"
},
{
 name: "Idle Breakout",
 url: "/pages/idle-breakout/index.html",
 image: "pages/idle-breakout/ib.avif",
 description: "An idle game merging classic Breakout brick-breaking with incremental progression, where you accumulate resources to purchase upgrades and unlock new capabilities." ,
 controls: "Mouse to click and break bricks, purchase upgrades automatically",
 category: "Clicker"
},
{
 name: "Incremancer",
 url: "/pages/incremancer/index.html",
 image: "pages/incremancer/ic.webp",
 description: "An incremental magic-themed game where you cast spells and accumulate mana to purchase progressively powerful magical abilities and multipliers." ,
 controls: "Mouse to click spells and purchase upgrades",
 category: "Clicker"
},
{
 name: "Maptroid",
 url: "/pages/maptroid/index.html",
 image: "pages/maptroid/mt.png",
 description: "A fan-made Metroid-style game featuring exploration of an interconnected world, item collection, and combat against hostile creatures in sci-fi environments." ,
 controls: "Arrow Keys or WASD to move, Spacebar to jump, Z to fire weapon",
 category: "Platformer"
},
{
 name: "Mario Game",
 url: "/pages/mario-game/index.html",
 image: "pages/mario-game/sm.png",
 description: "A classic-style Super Mario platformer with familiar level design, power-ups, and enemies, offering nostalgic side-scrolling action and challenging jumps." ,
 controls: "Arrow Keys to move, Spacebar to jump, X for power-up usage",
 category: "Platformer"
},
{
 name: "Monkey Mart",
 url: "/pages/monkey-mart/index.html",
 image: "pages/monkey-mart/mm.webp",
 description: "A business simulation where you manage a convenience store operated by monkeys, stocking shelves and serving customers to build profit and expand your shop." ,
 controls: "Mouse to interact with store elements and manage inventory",
 category: "Strategy"
},
{
 name: "N-Gon",
 url: "/pages/n-gon/index.html",
 image: "pages/n-gon/ngon.png",
 description: "A minimalist action game where you control a polygon defending against waves of incoming shapes, using rotation and strategic positioning to survive." ,
 controls: "Left and Right Arrow Keys to rotate, Spacebar to shoot or defend",
 category: "Shooter"
},
{
 name: "N-Step Steve Part 1",
 url: "/pages/n-step-steve-part-1/index.html",
 image: "pages/n-step-steve-part-1/nss1.png",
 description: "A quirky platformer following Steve through surreal levels with creative obstacle design and whimsical humor, emphasizing exploration and puzzle-solving." ,
 controls: "Arrow Keys or WASD to move, Spacebar to jump, E to interact",
 category: "Puzzle"
},
{
 name: "N-Step Steve Part 2",
 url: "/pages/n-step-steve-part-2/index.html",
 image: "pages/n-step-steve-part-2/nss2.png",
 description: "The sequel continues Steve's absurdist adventure with expanded worlds, new mechanics, and increasingly bizarre challenges that defy conventional platformer logic." ,
 controls: "Arrow Keys or WASD to move, Spacebar to jump, E for special actions",
 category: "Puzzle"
},
{
 name: "OvO",
 url: "/pages/ovo/2.0.2alpha/index.html",
 image: "pages/ovo/ovo.jpg",
 description: "A minimalist parkour platformer featuring precise movement mechanics, where you navigate tight spaces using wall jumps, slides, and momentum to overcome intricate challenges.",
 controls: "Arrow Keys or WASD to move, Spacebar to jump, hold for sustained movement",
 category: "Platformer"
},
{
 name: "Particle Clicker",
 url: "/pages/particle-clicker/index.html",
 image: "pages/particle-clicker/pc.png",
 description: "An educational incremental game where you click particles and purchase upgrades to unlock new elements and subatomic research, teaching physics concepts through gameplay.",
 controls: "Mouse to click particles and purchase upgrades",
 category: "Clicker"
},
{
 name: "P-Craft",
 url: "/pages/pcraft/index.html",
 image: "pages/pcraft/pc.png",
 description: "A crafting and building simulation inspired by Minecraft where you gather resources, construct structures, and manage your creative survival world in 2D.",
 controls: "WASD to move, Mouse to place and break blocks, E for inventory",
 category: "Sandbox"
},
{
 name: "Planet Life",
 url: "/pages/planet-life/index.html",
 image: "pages/planet-life/pl.png",
 description: "A cellular simulation game where you terraform planets and manage ecosystems, watching civilizations develop through strategic planetary adjustments and environmental changes.",
 controls: "Mouse to interact with planet surface, click to place ecosystems",
 category: "Sandbox"
},
{
 name: "Precision Client",
 url: "/pages/precision-client/index.html",
 image: "pages/precision-client/pc.webp",
 description: "A Minecraft client that allows more features",
 controls: "WASD to move, Mouse for camera control, click to build/destroy blocks",
 category: "Sandbox"
},
{
 name: "Progress Knight",
 url: "/pages/progress-knight/index.html",
 image: "pages/progress-knight/pk.png",
 description: "An idle RPG combining active combat with incremental progression, where your knight battles increasingly powerful enemies while earning experience through grinding and upgrades.",
 controls: "Mouse to click enemies and purchase upgrades, auto-attack available",
 category: "Clicker"
},
{
 name: "Pull of War",
 url: "/pages/pull-of-war/index.html",
 image: "pages/pull-of-war/pics/line3.png",
 description: "A stragetic war game where you manage forces and other things to win the war",
 controls: "Click for various actions",
 category: "Strategy"
},
{
 name: "Reach the Core",
 url: "/pages/reach-the-core/index.html",
 image: "pages/reach-the-core/rtc.jpg",
 description: "A drilling adventure game where you burrow deeper into Earth's layers, overcoming obstacles and discovering geological features while managing your drilling equipment.",
 controls: "Arrow Keys to move, Spacebar to drill, mouse to navigate menus",
 category: "Endless"
},
{
 name: "Restless Wing Syndrome",
 url: "/pages/restless-wing-syndrome/index.html",
 image: "pages/restless-wing-syndrome/rws.png",
 description: "A unique gameplay experience exploring a surreal condition through interactive mechanics, combining storytelling with unconventional controls and philosophical themes.",
 controls: "WASD to move, Mouse for interaction, specific mechanics vary by scenario",
 category: "Platformer"
},
{
 name: "Rift Shift",
 url: "/pages/rift-shift/index.html",
 image: "pages/rift-shift/rs.png",
 description: "A puzzle platformer featuring dimension-shifting mechanics where you phase between alternate realities to navigate impossible spaces and solve environmental challenges.",
 controls: "Arrow Keys or WASD to move, Spacebar to jump, Z to shift dimensions",
 category: "Puzzle"
},
{
 name: "Rookie Bowman",
 url: "/pages/rookie-bowman/index.html",
 image: "pages/rookie-bowman/rb.jpg",
 description: "An archery action game where you fire arrows at targets with trajectory-based mechanics, competing for accuracy and high scores across varying difficulty levels.",
 controls: "Mouse to aim bow, click to fire arrow, adjust angle and power",
 category: "Shooter"
},
{
 name: "Run 3",
 url: "/pages/run-3/index.html",
 image: "pages/run-3/r3.avif",
 description: "An endless running platformer set in space tunnels with gravity-defying mechanics, where characters can run on walls and ceilings to navigate impossible geometries.",
 controls: "Arrow Keys or A/D to move left and right, Spacebar to jump",
 category: "Endless"
},
{
 name: "Sandspiel",
 url: "/pages/sandspiel/index.html",
 image: "pages/sandspiel/ss.jpg",
 description: "A physics sandbox where you create landscapes and watch particle interactions, mixing sand, water, lava, and other elements to observe emergent behaviors and build structures.",
 controls: "Mouse to paint elements on canvas, right-click to erase, keyboard to select materials",
 category: "Simulation"
},
{
 name: "Scuba Bear",
 url: "/pages/scuba-bear/index.html",
 image: "pages/scuba-bear/sb.jpg",
 description: "An underwater exploration game following a bear collecting treasure and navigating ocean hazards, combining adventure elements with puzzle-solving and resource collection.",
 controls: "Arrow Keys or WASD to move, Spacebar to jump/swim, E to interact",
 category: "Platformer"
},
{
 name: "Smart Ball",
 url: "/pages/smart-ball/index.html",
 image: "pages/smart-ball/sb.jpg",
 description: "A puzzle game where a ball intelligently navigates mazes and obstacles, requiring you to guide its pathfinding through clever puzzle design and strategic positioning.",
 controls: "Mouse to set waypoints and direct ball, click to move",
 category: "Puzzle"
},
{
 name: "Smash Karts",
 url: "/pages/smash-karts/index.html",
 image: "pages/smash-karts/sk.png",
 description: "A multiplayer kart racing game combining arcade racing with power-ups and collision-based combat, where strategy and speed determine victory in chaotic tracks.",
 controls: "Arrow Keys to steer, Spacebar to accelerate, mouse for power-up aiming",
 category: "IO"
},
{
 name: "Stickman Hook",
 url: "/pages/stickman-hook/index.html",
 image: "pages/stickman-hook/smh.png",
 description: "A physics-based swinging game where a stickman uses grappling hooks to traverse obstacle courses, requiring momentum management and precise timing to swing between platforms.",
 controls: "Mouse click to attach hook, release to swing, momentum-based physics",
 category: "IO"
},
{
 name: "Subway Surfers NY",
 url: "/pages/subway-surfers-ny/index.html",
 image: "pages/subway-surfers-ny/ssny.webp",
 description: "The New York edition of the endless runner where you dodge trains in subway tunnels, collecting power-ups and completing missions unique to the urban setting.",
 controls: "Arrow Keys or WASD to move between lanes, Spacebar to jump",
 category: "Endless"
},
{
 name: "Temple Run 2",
 url: "/pages/temple-run-2/index.html",
 image: "pages/temple-run-2/tr2.avif",
 description: "An endless running adventure through exotic temple ruins and jungles, dodging obstacles and collecting coins while being chased by supernatural guardians." ,
 controls: "Arrow Keys to turn and jump, Spacebar to swipe-dodge obstacles",
 category: "Endless"
},
{
 name: "The Final Earth",
 url: "/pages/the-final-earth/index.html",
 image: "pages/the-final-earth/tfe.png",
 description: "A city-building simulation where you construct civilization on a desolate planet, managing population, resources, and infrastructure to ensure survival and prosperity." ,
 controls: "Mouse to place buildings and manage city, click to interact with structures",
 category: "Strategy"
},
{
 name: "There is No Game",
 url: "/pages/there-is-no-game/index.html",
 image: "pages/there-is-no-game/ting.webp",
 description: "A meta-narrative puzzle game that deconstructs gaming conventions, featuring cryptic puzzles, hidden mechanics, and a mysterious story revealed through unconventional gameplay." ,
 controls: "Mouse to interact with interface elements, puzzle solutions vary by challenge",
 category: "Puzzle"
},
{
 name: "Time Shooter",
 url: "/pages/time-shooter/index.html",
 image: "pages/time-shooter/ts.png",
 description: "A unique shooter where time is a manipulable resource, allowing you to slow, reverse, or skip moments to dodge bullets and eliminate enemies with creative temporal tactics." ,
 controls: "WASD to move, Mouse to aim and shoot, T to manipulate time",
 category: "Shooter"
},
{
 name: "Time Shooter 3",
 url: "/pages/time-shooter-3/index.html",
 image: "pages/time-shooter-3/ts3.png",
 description: "The third installment expands time manipulation mechanics with additional abilities, introducing complex puzzle-combat hybrids where temporal strategy is essential for survival." ,
 controls: "WASD to move, Mouse to aim and shoot, multiple keys for time abilities",
 category: "Shooter"
},
{
 name: "Tiny Fishing",
 url: "/pages/tiny-fishing/index.html",
 image: "pages/tiny-fishing/tf.jpeg",
 description: "A relaxing fishing idle game where you cast lines, catch fish, and upgrade your gear to explore deeper waters and unlock new species in a peaceful progression system." ,
 controls: "Mouse to cast line and reel in fish, click upgrades to purchase",
 category: "IO"
},
{
 name: "Trace",
 url: "/pages/trace/index.html",
 image: "pages/trace/trace.png",
 description: "A minimalist puzzle game where you draw paths or patterns to complete objectives, requiring spatial reasoning and creative thinking to solve each level's unique challenges." ,
 controls: "Mouse to draw lines or shapes, specific mechanics vary by puzzle",
 category: "Puzzle"
},
{
 name: "Two Ball 3D",
 url: "/pages/two-ball-3d/index.html",
 image: "pages/two-ball-3d/tb3d.webp",
 description: "A 3D physics puzzle game where you control two balls simultaneously through intricate mazes, requiring coordination and timing to reach both goal zones." ,
 controls: "WASD for ball 1, Arrow Keys for ball 2, coordinate simultaneous movement",
 category: "Endless"
},
{
 name: "Web Osu",
 url: "/pages/web-osu/index.html",
 image: "pages/web-osu/webosu.jpeg",
 description: "A browser-based rhythm game inspired by Osu, where you click, hold, and spin to the beat of music, featuring multiple difficulty levels and custom beatmaps." ,
 controls: "Mouse to click circles, hold sliders, spin spinners to the rhythm",
 category: "Rhythm"
},
{
 name: "X Trench Run",
 url: "/pages/x-trench-run/index.html",
 image: "pages/x-trench-run/xtr.jpeg",
 description: "A high-speed space trench runner inspired by classic arcade games, requiring precise navigation through narrow corridors while avoiding laser fire and obstacles." ,
 controls: "Arrow Keys or WASD to move, Spacebar to boost, precise timing required",
 category: "Endless"
},
{
 name: "Yohoho",
 url: "/pages/yohoho/index.html",
 image: "pages/yohoho/img/banner1024x512.jpg",
 description: "A pirate-themed io game where you kill other players to grow." ,
 controls: "Mouse to move, click to attack",
 category: "IO"
},
{
 name: "Henry Stickman:\\nBreaking the Bank",
 url: "/pages/hscBreakBank/index.html",
 image: "pages/hscBreakBank/bb.webp",
 description: "An interactive comedy adventure where stick figure Henry attempts an elaborate bank heist, with multiple choice branches determining the comedic outcome of his schemes." ,
 controls: "Mouse to click dialogue choices and interact with game elements",
 category: "Strategy"
},
{
 name: "Henry Stickman:\\nEscape the Prison",
 url: "/pages/hscEscapePrison/index.html",
 image: "pages/hscEscapePrison/ep.jpg",
 description: "Henry faces prison escape challenges through humorous interactive scenarios, choosing different methods and solutions that lead to wildly different comedic endings and failures." ,
 controls: "Mouse to select choices and perform timed actions during escape sequences",
 category: "Strategy"
},
{
 name: "Henry Stickman:\\nFleeing the Complex",
 url: "/pages/hscFleeComplex/index.html",
 image: "pages/hscFleeComplex/fc.jpg",
 description: "An action-comedy adventure where Henry escapes from a government facility, making rapid choices that determine success or hilarious failure through absurdist scenarios." ,
 controls: "Mouse to click choices rapidly, timing and selection determine outcome",
 category: "Strategy"
},
{
 name: "Henry Stickman:\\nInfiltrate the Airship",
 url: "/pages/hscInfiltrateAirship/index.html",
 image: "pages/hscInfiltrateAirship/ia.jpg",
 description: "Henry infiltrates a fortified airship for a comedic heist, navigating stealth sections and making multiple choice decisions that lead to various absurd consequences." ,
 controls: "Mouse to make choices, perform timed actions during stealth sections",
 category: "Strategy"
},
{
 name: "Henry Stickman:\\nSteal the Diamond",
 url: "/pages/hscStealDiamond/index.html",
 image: "pages/hscStealDiamond/sd.jpeg",
 description: "The first Henry Stickman adventure where he attempts to steal a diamond, with branching paths and comedic failures that introduce the series' signature humor and absurdity." ,
 controls: "Mouse to click interactive elements and make dialogue choices",
 category: "Strategy"
},
{
 name: "Polytrack",
 url: "/pages/polytrack/index.html",
 image: "pages/polytrack/poly.png",
 description: "A minimalist racing game featuring geometric shapes racing on abstract tracks, emphasizing precision driving and quick reflexes through stylized visuals and tight controls." ,
 controls: "Arrow Keys or A/D to steer, Spacebar to accelerate and brake",
 category: "Racing"
},
{
 name: "Grey-Box Testing",
 url: "/pages/gbt/index.html",
 image: "pages/gbt/gbt.png",
 description: "A parcour game with too many bugs!" ,
 controls: "WASD to move, Space to jump",
 category: "Platformer"
},
{
 name: "1",
 url: "/pages/1/index.html",
 image: "pages/1/meta/apple-touch-icon.png",
 description: "2048, but backwards! You start with the 2048 tile and combine tiles to reach 1. A unique twist on the classic sliding puzzle game." ,
 controls: "Arrow keys to move tiles in four directions",
 category: "2048"
},
{
 name: "1v1 Space",
 url: "/pages/1v1space/index.html",
 image: "pages/1v1space/splash.png",
 description: "A dueling shooter set in space where two players engage in one-on-one combat with directional shooting and movement, requiring positioning and reflexes." ,
 controls: "Arrow Keys or WASD to move, Mouse to aim and click to shoot",
 category: "Shooter"
},
{
 name: "9007199254740992",
 url: "/pages/9007199254740992/index.html",
 image: "pages/9007199254740992/logo-4.png",
 description: "An 8x8 2048-inspired game where you combine numbers to reach the 9007199254740992 tile",
 controls: "Arow Keys to move tiles in four directions",
 category: "2048"
},
{
 name: "Achievement Unlocked",
 url: "/pages/achievementunlocked/index.html",
 image: "pages/achievementunlocked/achievementunlocked.png",
 description: "A clever meta-game where you unlock absurd achievements by performing mundane tasks, playfully satirizing achievement systems found in modern video games." ,
 controls: "Mouse to click buttons and perform simple actions to unlock achievements",
 category: "Platformer"
},
{
 name: "Adrenaline Challenge",
 url: "/pages/adrenalinechallenge/index.html",
 image: "pages/adrenalinechallenge/adrenalinechallenge.jpg",
 description: "An intense action game testing reflexes and endurance, featuring escalating difficulty and rapid-fire challenges designed to push players to their limits." ,
 controls: "Mouse and keyboard for rapid interaction, specific controls vary by challenge",
 category: "Racing"
},
{
 name: "Among Us",
 url: "/pages/among-us/index.html",
 image: "pages/among-us/red.png",
 description: "A social deduction game where players work together on a spaceship while one or more imposters sabotage progress, requiring discussion and deduction to identify traitors." ,
 controls: "WASD to move, Mouse to interact with tasks, chat and voting through interface",
 category: "Strategy"
},
{
 name: "Avalanche",
 url: "/pages/avalanche/index.html",
 image: "pages/avalanche/avalanche.png",
 description: "An endless game where you progress upwards away from hot lava as blocks fall from above. Don't get crushed, and avoid the rising lava!" ,
 controls: "Arrow Keys to move",
 category: "Platformer"
},
{
 name: "The Backrooms",
 url: "/pages/backrooms/index.html",
 image: "pages/backrooms/img/splash.jpg",
 description: "A horror exploration game based on internet creepypasta, navigating endless maze-like corporate spaces filled with existential dread and mysterious entities." ,
 controls: "WASD to move, Mouse to look around, E to interact with environment",
 category: "Horror"
},
{
 name: "Big Red Button",
 url: "/pages/bigredbutton/index.html",
 image: "pages/bigredbutton/bigredbutton.png",
 description: "A humorous clicker game centered on pressing a comically large red button, with escalating consequences and absurd outcomes based on how many times you press it." ,
 controls: "Mouse to click the big red button repeatedly",
 category: "Other"
},
{
 name: "Black Knight",
 url: "/pages/blackknight/index.html",
 image: "pages/blackknight/blackknight.png",
 description: "An action game featuring a dark warrior character battling enemies through levels, combining combat mechanics with exploration and upgrade systems." ,
 controls: "Arrow Keys or WASD to move, Spacebar to attack, mouse for special abilities",
 category: "Platformer"
},
{
 name: "Bloxors",
 url: "/pages/bloxors/index.html",
 image: "pages/bloxors/block.png",
 description: "A block-sliding puzzle game where you navigate rectangular blocks through mazes, requiring strategic positioning and pattern recognition to reach goal squares." ,
 controls: "Arrow Keys to move blocks, Mouse for optional interface interaction",
 category: "Puzzle"
},
{
 name: "Boxhead 2Play",
 url: "/pages/boxhead2play/index.html",
 image: "pages/boxhead2play/boxhead2play.jpg",
 description: "A cooperative two-player shooter where boxheaded characters fight waves of zombies in enclosed arenas, combining arcade action with strategic teamwork." ,
 controls: "Player 1: Arrow Keys to move, Spacebar to shoot; Player 2: WASD to move, Shift to shoot",
 category: "Shooter"
},
{
 name: "Big Tower Tiny Square",
 url: "/pages/btts/index.html",
 image: "pages/btts/images.png",
 description: "A challenging platformer where a tiny square ascends an enormous tower filled with geometric obstacles and precision-timing challenges across numerous levels." ,
 controls: "Arrow Keys or WASD to move, Spacebar to jump, careful timing essential",
 category: "Platformer"
},
{
 name: "Cannon Basketball 4",
 url: "/pages/cannon-basketball-4/index.html",
 image: "pages/cannon-basketball-4/assets/images/cb4.webp",
 description: "A physics-based basketball puzzle game where you aim cannons to shoot balls into hoops, managing trajectory and power across increasingly complex level designs." ,
 controls: "Mouse to aim cannon, click to fire with power adjustment",
 category: "Sports"
},
{
 name: "Canyon Defense",
 url: "/pages/canyondefense/index.html",
 image: "pages/canyondefense/canyondefense.png",
 description: "A tower defense game set in canyon landscapes where you strategically place defensive towers to repel waves of enemies attempting to traverse your territory.",
 controls: "Mouse to select and place towers, right-click to upgrade or sell",
 category: "Strategy"
},
{
 name: "Cell Machine",
 url: "/pages/cell-machine/index.html",
 image: "pages/cell-machine/img/icon.png",
 description: "A puzzle game where you construct cellular machines using modular components, creating automated systems to process inputs and produce outputs through logical design.",
 controls: "Mouse to place and connect cells, drag to move components",
 category: "Strategy"
},
{
 name: "Champion Archer",
 url: "/pages/championarcher/index.html",
 image: "pages/championarcher/championarcher.png",
 description: "An archery competition game where you aim and fire arrows at targets with varying difficulty, managing wind resistance and distance for accurate shots.",
 controls: "Mouse to aim bow, click to draw and release arrow",
 category: "Shooter"
},
{
 name: "Circlo",
 url: "/pages/circlo/index.html",
 image: "pages/circlo/img/download.png",
 description: "A circular puzzle game where you navigate geometric shapes through rotating rings and barriers, requiring timing and spatial awareness to progress through levels.",
 controls: "Arrow Keys to move, Spacebar to jump through gaps",
 category: "Puzzle"
},
{
 name: "Connect 3",
 url: "/pages/connect3/index.html",
 image: "pages/connect3/connect3.png",
 description: "A match-three puzzle game where you connect colored tiles in groups of three or more, clearing pieces and cascading new ones in strategic tile manipulation gameplay.",
 controls: "Mouse to click and drag tiles to create matches",
 category: "Puzzle"
},
{
 name: "Craftmine",
 url: "/pages/craftmine/index.html",
 image: "pages/craftmine/images/craftmine.png",
 description: "A 2d version of minecraft, with a touch of terraria. Mine resources, craft items, and build structures in a pixelated sandbox world.",
 controls: "WASD to move, Mouse to mine and place blocks, E for inventory",
 category: "Sandbox"
},
{
 name: "Creative Kill Chamber",
 url: "/pages/creativekillchamber/index.html",
 image: "pages/creativekillchamber/creativekillchamber.jpg",
 description: "A puzzle game emphasizing creative problem-solving where you eliminate targets using environmental hazards and physics to find unconventional kill methods.",
 controls: "Mouse to interact with objects, drag to move elements and set up scenarios",
 category: "Shooter"
},
{
 name: "CSGo Clicker",
 url: "/pages/csgo-clicker/index.html",
 image: "pages/csgo-clicker/csgc.png",
 description: "A Counter-Strike themed idle clicker where you earn in-game currency, purchase weapons and upgrades, and progress through weapon tiers and upgrades.",
 controls: "Mouse to click and purchase upgrades, auto-earn with progression",
 category: "Clicker"
},
{
 name: "Cut the Rope - Holiday Gift",
 url: "/pages/ctr-holiday/index.html",
 image: "pages/ctr-holiday/Holiday_Gift.webp",
 description: "A holiday-themed sequel to Cut the Rope featuring festive levels and new mechanics, maintaining the physics-puzzle gameplay with seasonal challenges and obstacles.",
 controls: "Mouse to draw lines cutting ropes, interact with holiday elements",
 category: "Puzzle"
},
{
 name: "Cut the Rope - Time Travel",
 url: "/pages/ctr-tr/index.html",
 image: "pages/ctr-tr/logo.png",
 description: "A time-traveling puzzle adventure where you cut ropes to feed the monster across different eras, introducing time-manipulation mechanics alongside classic rope physics.",
 controls: "Mouse to cut ropes, use time powers with keyboard shortcuts",
 category: "Puzzle"
},
{
 name: "Cubefield",
 url: "/pages/cubefield/index.html",
 image: "pages/cubefield/cubefield.jpg",
 description: "A 3D dodging game where you navigate a ship through an endless field of approaching cubes at high speed, requiring quick reflexes and spatial awareness.",
 controls: "Arrow Keys or A/D to steer left and right, maintain momentum",
 category: "Endless"
},
{
 name: "Cupcake 2048",
 url: "/pages/cupcake2048/index.html",
 image: "pages/cupcake2048/meta/apple-touch-icon.png",
 description: "A themed variation of 2048 featuring cupcakes and desserts instead of numbers, combining sliding tile mechanics with a food-based aesthetic.",
 controls: "Arrow Keys to slide tiles and combine matching cupcakes",
 category: "2048"
},
{
 name: "Deal or No Deal",
 url: "/pages/deal-or-no-deal/index.html",
 image: "pages/deal-or-no-deal/index.jpg",
 description: "A game show simulator based on the television series where you open cases and negotiate with a banker to secure the best possible deal or jackpot.",
 controls: "Mouse to open cases and click deals, make strategic choices",
 category: "Strategy"
},
{
 name: "Death Run 3D",
 url: "/pages/death-run-3d/index.html",
 image: "pages/death-run-3d/img/death.png",
 description: "A 3d tunnel game where you must avoid constatnly changing barriers while moving with the music",
 controls: "WASD to change corner",
 category: "Endless"
},
{
 name: "Defend the Tank",
 url: "/pages/defend-the-tank/index.html",
 image: "pages/defend-the-tank/images/logo.jpg",
 description: "A tower defense game where you protect a central tank from incoming waves of enemies, upgrading defenses and managing resources to survive increasingly difficult attacks.",
 controls: "Mouse to select towers and place them around tank",
 category: "Strategy"
},
{
 name: "Doge 2048",
 url: "/pages/doge2048/index.html",
 image: "pages/doge2048/doge1.jpeg",
 description: "A 2048 variant featuring the popular Doge meme dog, sliding tiles and combining memes to reach the highest Doge tile through strategic number manipulation.",
 controls: "Arrow Keys to slide tiles and merge Doges",
 category: "2048"
},
{
 name: "Double Wires",
 url: "/pages/doublewires/index.html",
 image: "pages/doublewires/doublewires.png",
 description: "A precision platformer where you play like spiderman swinging through the world.",
 controls: "Left and right mouse buttons to swing",
 category: "Strategy"
},
{
 name: "Draw the Hill",
 url: "/pages/draw-the-hill/index.html",
 image: "pages/draw-the-hill/icons/icon-512.png",
 description: "A creative physics game where you draw terrain and structures for a vehicle to navigate, testing your designs as the car drives across your creations.",
 controls: "Mouse to draw terrain, watch vehicle traverse your design",
 category: "Puzzle"
},
{
 name: "Duck Life",
 url: "/pages/ducklife1/index.html",
 image: "pages/ducklife1/ducklife.png",
 description: "The original duck training game where you develop a duckling through mini-games to prepare it for competitive racing, building speed and endurance attributes.",
 controls: "Mouse for mini-games, Spacebar to start races, Arrow Keys to race",
 category: "Sports"
},
{
 name: "Duck Life 2",
 url: "/pages/ducklife2/index.html",
 image: "pages/ducklife2/ducklife2.png",
 description: "The sequel expands duck training with additional attributes and more diverse mini-games, offering deeper progression and more competitive racing challenges.",
 controls: "Mouse for training games, Arrow Keys for racing competitions",
 category: "Sports"
},
{
 name: "Duck Life 3",
 url: "/pages/ducklife3/index.html",
 image: "pages/ducklife3/duck.png",
 description: "The third installment adds new environments and training types, featuring expanded gameplay with travel mechanics and more varied racing and competition scenarios.",
 controls: "Mouse for training selection, Arrow Keys to control duck movement",
 category: "Sports"
},
{
 name: "Edge Not Found",
 url: "/pages/edgenotfound/index.html",
 image: "pages/edgenotfound/edge.png",
 description: "A philosophical puzzle game exploring impossible geometry and spatial paradoxes, where you navigate environments that defy conventional logic and physics.",
 controls: "WASD to move, Mouse to look around, E to interact with objects",
 category: "Puzzle"
},
{
 name: "Elastic Man",
 url: "/pages/elasticman/index.html",
 image: "pages/elasticman/elasticman.jpg",
 description: "A quirky physics-based game where you poke and manipulate a stretchy elastic character, watching it react and contort in exaggerated comedic ways.",
 controls: "Mouse to poke and drag elastic character around",
 category: "Other"
},
{
 name: "Endless War 3",
 url: "/pages/endlesswar3/index.html",
 image: "pages/endlesswar3/endlesswar3.png",
 description: "A strategic turn-based war game where you manage armies and territories, engaging in tactical combat across varied terrains while managing resources and troops.",
 controls: "Mouse to select units and territories, click to move and attack",
 category: "Strategy"
},
{
 name: "Exo",
 url: "/pages/exo/index.html",
 image: "pages/exo/img/small.jpg",
 description: "A space game where you have crashed on an unknown planet and must survive from waves of alien invaders",
 controls: "Click to do various actions",
 category: "Strategy"
},
{
 name: "Fake Virus",
 url: "/pages/fake-virus/index.html",
 image: "pages/fake-virus/fake-virus.png",
 description: "A humorous pranking interface that mimics a computer virus with fake warning messages and comedic alerts, designed to playfully startle users.",
 controls: "Mouse to interact with fake virus warnings and alerts",
 category: "Other"
},
{
 name: "Flappy 2048",
 url: "/pages/flappy-2048/index.html",
 image: "pages/flappy-2048/meta/apple-touch-icon.png",
 description: "A hybrid game combining Flappy Bird mechanics with 2048 tile-matching, where you navigate through pipes while collecting and merging numbered tiles.",
 controls: "Spacebar to flap, collect tiles while avoiding pipes",
 category: "2048"
},
{
 name: "Flash Tetris",
 url: "/pages/flashtetris/index.html",
 image: "pages/flashtetris/flashtetris.png",
 description: "A classic Tetris implementation featuring falling tetromino blocks that you must arrange and clear, with traditional gravity and line-clearing mechanics.",
 controls: "Arrow Keys to move blocks, Z to rotate, Down to drop faster",
 category: "Puzzle"
},
{
 name: "Game Inside a Game",
 url: "/pages/game-inside/index.html",
 image: "pages/game-inside/giag.png",
 description: "A meta-narrative puzzle game featuring games within games, with nested levels and reality-bending mechanics that challenge perceptions of game boundaries.",
 controls: "Mouse to navigate menus, controls vary by nested game",
 category: "Platformer"
},
{
 name: "Glass City",
 url: "/pages/glass-city/index.html",
 image: "pages/glass-city/image.png",
 description: "It's open world game where you can explore, use different fire-arms, kill puppets, destroy environment, pick up items (puppets, grenades)  and just have fun.",
 controls: "WASD or ARROW KEYS To Move, Left Click to Shoot or Pick Up Items, 1,2,3 keys to To Change Weapons, Q to Hide Weapons, G to Spawn Grenade, tab to enable Slow Motion Time, esc to Open Game Menu",
 category: "Shooter"
},
{
 name: "Google Snake",
 url: "/pages/google-snake/index.html",
 image: "pages/google-snake/img/snake.png",
 description: "Google's classic Snake game where a growing serpent eats pellets while avoiding walls and itself, with classic arcade gameplay mechanics.",
 controls: "Arrow Keys to direct snake movement",
 category: "Arcade"
},
{
 name: "Grindcraft",
 url: "/pages/grindcraft/index.html",
 image: "pages/grindcraft/img/splash.png",
 description: "A Minecraft-inspired idle game where you gather resources, craft items, and progress through crafting recipes with an incremental mechanics layer.",
 controls: "Mouse to gather resources and craft items, click upgrades",
 category: "Clicker"
},
{
 name: "Hacker Type",
 url: "/pages/hackertype/index.html",
 image: "pages/hackertype/logo192.png",
 description: "Pretend you are hacking by typing on your keyboard to make fake hacking show up.",
 controls: "Type anything",
 category: "Other"
},
{
 name: "Hover Bot Arena",
 url: "/pages/hba/index.html",
 image: "pages/hba/hoverbotarena.jpg",
 description: "A multiplayer robot combat game where hovering bots battle in arenas, using movement and firepower to eliminate opponents in fast-paced deathmatch scenarios.",
 controls: "WASD or Arrow Keys to move, Mouse to aim and click to shoot",
 category: "Shooter"
},
{
 name: "Helicopter",
 url: "/pages/helicopter/index.html",
 image: "pages/helicopter/helicopter.png",
 description: "A classic helicopter arcade game where you navigate a helicopter through narrow corridors, avoiding walls and obstacles at increasing speeds.",
 controls: "Spacebar or Mouse click to ascend, release to descend",
 category: "Other"
},
{
 name: "Hex Empire",
 url: "/pages/hexempire/index.html",
 image: "pages/hexempire/hexempire.jpg",
 description: "A turn-based hexagonal strategy game where you build an empire, manage resources, and engage in tactical warfare across hexagonal grid territories.",
 controls: "Mouse to select territories, click to move troops and attack",
 category: "Strategy"
},
{
 name: "HexGL",
 url: "/pages/HexGL/index.html",
 image: "pages/HexGL/icon_256.png",
 description: "A 3D racing game through hexagonal tunnels at high speed, featuring neon aesthetics and futuristic track designs with responsive flight mechanics.",
 controls: "Arrow Keys or A/D to steer, mouse for additional control",
 category: "Racing"
},
{
 name: "Idle Shark",
 url: "/pages/idle-shark/index.html",
 image: "pages/idle-shark/img/sharklogo.png",
 description: "An ocean-themed idle game where you control a shark collecting fish and upgrading abilities, managing a growing aquatic empire through progression.",
 controls: "Mouse to click and catch fish, purchase upgrades",
 category: "Clicker"
},
{
 name: "Interactive Buddy",
 url: "/pages/interactivebuddy/index.html",
 image: "pages/interactivebuddy/interactivebuddy.jpg",
 description: "A digital pet simulator where you interact with an animated buddy character, clicking to poke, tickle, and perform actions triggering comedic reactions.",
 controls: "Mouse to click and drag buddy around, interact with elements",
 category: "Other"
},
{
 name: "Just One Boss",
 url: "/pages/just-one-boss/index.html",
 image: "pages/just-one-boss/pv1Gr5.png",
 description: "A boss-focused action game featuring intense one-on-one battles against powerful opponents, emphasizing skill-based combat and pattern recognition.",
 controls: "WASD to move, Mouse to aim, click to attack with varied combos",
 category: "Strategy"
},
{
 name: "Kitten Cannon",
 url: "/pages/kittencannon/index.html",
 image: "pages/kittencannon/kittencannon.png",
 description: "A physics-based distance game where you launch kittens from a cannon across landscapes, trying to achieve maximum distance with strategic power and angle adjustment.",
 controls: "Mouse to aim cannon angle and power, click to fire kitten",
 category: "Strategy"
},
{
 name: "Krunker.io",
 url: "https://krunker.io/",
 image: "pages/krunker/img/krunker-io.jpg",
 description: "A fast-paced multiplayer first-person shooter with simple graphics and responsive controls, featuring various game modes and weapon classes for competitive play.",
 controls: "WASD to move, Mouse to aim and shoot, Spacebar to jump",
 category: "Shooter"
},
{
 name: "Learn to Fly",
 url: "/pages/learntofly/index.html",
 image: "pages/learntofly/learntofly.png",
 description: "A penguin flight simulator where you launch yourself down icy slopes to achieve maximum distance, purchasing upgrades to increase speed and flight duration.",
 controls: "Mouse to aim launch angle, click to start, arrow keys during flight",
 category: "Strategy"
},
{
 name: "Matrix Rampage",
 url: "/pages/matrixrampage/index.html",
 image: "pages/matrixrampage/matrixrampage.jpg",
 description: "An action game inspired by The Matrix featuring slow-motion combat, bullet-dodging mechanics, and martial arts-style melee combat against waves of enemies.",
 controls: "WASD to move, Mouse to aim and shoot, Spacebar to dodge",
 category: "Shooter"
},
{
 name: "Meme 2048",
 url: "/pages/meme2048/index.html",
 image: "pages/meme2048/meta/apple-touch-startup-image-640x1096.png",
 description: "A 2048 variant featuring internet memes instead of numbers, sliding and combining viral content to progress toward the highest meme tile.",
 controls: "Arrow Keys to slide tiles and combine memes",
 category: "2048"
},
{
 name: "Minecraft Classic",
 url: "/pages/minecraft-classic/index.html",
 image: "pages/minecraft-classic/pack.png",
 description: "The original browser-based Minecraft in creative mode where you freely build and destroy blocks in an infinite world without survival mechanics.",
 controls: "WASD to move, Mouse to place and destroy blocks, E for inventory",
 category: "Sandbox"
},
{
 name: "Minesweeper",
 url: "/pages/minesweeper/index.html",
 image: "pages/minesweeper/img/minesweeper.png",
 description: "The classic puzzle game where you uncover hidden mines on a grid using numerical clues, requiring logic and deduction to identify safe tiles.",
 controls: "Mouse to click reveal tiles, right-click to place flags",
 category: "Puzzle"
},
{
 name: "Mini Putt",
 url: "/pages/miniputt/index.html",
 image: "pages/miniputt/miniputt.png",
 description: "A mini golf game featuring creative hole designs, power-ups, and obstacles, challenging you to sink putts with precise angle and power control.",
 controls: "Mouse to aim putter, click to adjust power and putt",
 category: "Sports"
},
{
 name: "Missiles",
 url: "/pages/missiles/index.html",
 image: "pages/missiles/miss.png",
 description: "A quick paced tunel game where you must aim yourself correctly so you don't hit the wall",
 controls: "Mouse to change direction",
 category: "Endless"
},
{
 name: "MotoX3M Pool",
 url: "/pages/motox3m-pool/index.html",
 image: "pages/motox3m-pool/splash.jpg",
 description: "A water-themed stunt motorcycle game where you perform tricks and flips while riding on water and navigating pool-based obstacle courses with aquatic hazards.",
 controls: "Arrow Keys to lean, Spacebar to accelerate, manage balance on water",
 category: "Racing"
},
{
 name: "MotoX3M Spooky",
 url: "/pages/motox3m-spooky/index.html",
 image: "pages/motox3m-spooky/splash.jpeg",
 description: "A Halloween-themed stunt motorcycle game featuring spooky environments, ghostly obstacles, and eerie atmospheres while maintaining the signature trick and flip mechanics.",
 controls: "Arrow Keys to lean forward/backward, Spacebar or W/S to accelerate/brake",
 category: "Racing"
},
{
 name: "MotoX3M Winter",
 url: "/pages/motox3m-winter/index.html",
 image: "pages/motox3m-winter/download.jpeg",
 description: "A winter-themed motorcycle stunt game with snowy landscapes, icy surfaces, and cold-weather obstacles testing your balance and timing across frozen terrain.",
 controls: "Arrow Keys to lean, Spacebar to accelerate, manage ice physics",
 category: "Racing"
},
{
 name: "NS Shaft",
 url: "/pages/ns-shaft/index.html",
 image: "pages/ns-shaft/nss.webp",
 description: "A vertical shaft descent game where you navigate downward through rotating obstacles and challenges, requiring precise timing to avoid hazards while descending." ,
 controls: "Arrow Keys or A/D to move left and right",
 category: "Platformer"
},
{
 name: "Om Bounce",
 url: "/pages/om-bounce/index.html",
 image: "pages/om-bounce/assets/icon.png",
 description: "A rhythmic bouncing game where you tap to the beat, bouncing obstacles in sync with music to progress through levels with evolving soundtracks." ,
 controls: "Spacebar or Mouse Click to bounce to the rhythm",
 category: "Rhythm"
},
{
 name: "Pandemic 2",
 url: "/pages/pandemic2/index.html",
 image: "pages/pandemic2/pandemic2.png",
 description: "A strategy simulation where you create and spread a plague across the world, managing infection rates while avoiding detection and cure development." ,
 controls: "Mouse to click countries and evolve disease traits",
 category: "Strategy"
},
{
 name: "Papa's Pizzaria",
 url: "/pages/papaspizzaria/index.html",
 image: "pages/papaspizzaria/papaspizzaria.jpg",
 description: "A time-management restaurant simulation where you take pizza orders, prepare pizzas with custom toppings, and serve customers while managing a growing business." ,
 controls: "Mouse to select ingredients and assemble pizzas, click to serve",
 category: "Strategy"
},
{
 name: "Paper.io 2",
 url: "/pages/paperio2/index.html",
 image: "pages/paperio2/images/icon512.png",
 description: "A territorial conquest game where you trace lines to claim map areas, competing against other players while protecting your border from being cut." ,
 controls: "Mouse to draw lines claiming territory, avoid enemy crossings",
 category: "IO"
},
{
 name: "Papery Planes",
 url: "/pages/papery-planes/index.html",
 image: "pages/papery-planes/splash.jpg",
 description: "A paper airplane flying game where you fold and customize planes, then guide them through obstacle courses and competitions with physics-based flight mechanics." ,
 controls: "Mouse to control plane trajectory, fold planes before flying",
 category: "Endless"
},
{
 name: "PolyBranch",
 url: "/pages/polybranch/index.html",
 image: "pages/polybranch/img/pic1.png",
 description: "A polygon-based puzzle platformer where geometric shapes navigate branching paths, requiring strategic routing through increasingly complex level designs." ,
 controls: "Arrow Keys or WASD to move, Spacebar to jump",
 category: "Platformer"
},
{
 name: "Push the Square",
 url: "/pages/push-the-square/index.html",
 image: "pages/push-the-square/img/splash.png",
 description: "A physics puzzle game where you push a square through obstacle courses using momentum and strategic pushing to reach the goal without losing control." ,
 controls: "Arrow Keys to push square, Mouse for optional aiming assistance",
 category: "Puzzle"
},
{
 name: "Push Your Luck",
 url: "/pages/push-your-luck/index.html",
 image: "pages/push-your-luck/pyl.jpeg",
 description: "A gambling-style risk-reward game where you decide when to cash out or push for higher rewards, testing your courage and decision-making under pressure." ,
 controls: "Mouse to click push or cash out buttons",
 category: "Strategy"
},
{
 name: "Rolly Vortex",
 url: "/pages/rolly-vortex/index.html",
 image: "pages/rolly-vortex/icon-256.png",
 description: "A tunnel-rolling arcade game where a ball rolls through rotating vortex tunnels, requiring quick reflexes to avoid obstacles and maintain constant rolling momentum." ,
 controls: "Arrow Keys or A/D to move ball left and right",
 category: "Endless"
},
{
 name: "Sand Game",
 url: "/pages/sand-game/index.html",
 image: "pages/sand-game/sand-game.PNG",
 description: "A particle sandbox simulation where you paint different materials like sand, water, and fire, observing realistic physics and chemical reactions between elements." ,
 controls: "Mouse to paint elements, keyboard to select different materials",
 category: "Simulation"
},
{
 name: "Super Mario 64",
 url: "/pages/sm64/index.html",
 image: "pages/sm64/logo.png",
 description: "An emulated classic 3D platformer where Mario explores expansive castle worlds, collecting stars through diverse objectives, jumping puzzles, and creative level design." ,
 controls: "WASD to move, Mouse for camera, Spacebar to jump, Z to crouch",
 category: "Platformer"
},
{
 name: "Smoking Barrels",
 url: "/pages/smokingbarrels/index.html",
 image: "pages/smokingbarrels/smokingbarrels.jpg",
 description: "A western-themed top-down shooter where you eliminate waves of gunslinging enemies, managing limited ammunition while taking cover behind barrels and structures." ,
 controls: "WASD to move, Mouse to aim and click to shoot",
 category: "Shooter"
},
{
 name: "Snow Battle",
 url: "/pages/snowbattle/index.html",
 image: "pages/snowbattle/img/logo.png",
 description: "A multiplayer snowball fight game where you throw snowballs at opponents in winter landscapes, combining physics-based projectiles with competitive arena combat." ,
 controls: "Mouse to aim snowballs, click to throw, WASD to move",
 category: "IO"
},
{
 name: "Soldier Legend",
 url: "/pages/soldier-legend/index.html",
 image: "pages/soldier-legend/images/splash.jpeg",
 description: "A military action game where you command soldiers through combat scenarios, managing unit positioning and firepower to complete tactical objectives and missions." ,
 controls: "Mouse to select soldiers and direct movement, click to attack",
 category: "Endless"
},
{
 name: "Sort the Court",
 url: "/pages/sort-the-court/index.html",
 image: "pages/sort-the-court/img/splash.png",
 description: "A roguelike card deck game where you make judicial decisions as a ruler, with each choice affecting your kingdom and determining your ultimate fate and ending." ,
 controls: "Mouse to click card choices and royal decisions",
 category: "Strategy"
},
{
 name: "Soundboard",
 url: "/pages/soundboard/index.html",
 image: "pages/soundboard/img/mlg.png",
 description: "A digital soundboard application featuring viral audio clips and meme sounds that you can trigger and layer for comedic effect and sound mixing." ,
 controls: "Mouse to click sound buttons and trigger audio clips",
 category: "Other"
},
{
 name: "Stack",
 url: "/pages/stack/index.html",
 image: "pages/stack/stack.png",
 description: "A minimalist arcade game where you stack blocks on top of each other, trying to reach maximum height while avoiding tipping over or falling off." ,
 controls: "Spacebar or Mouse Click to place blocks, timing is critical",
 category: "Endless"
},
{
 name: "Stack Bump 3D",
 url: "/pages/stack-bump-3d/index.html",
 image: "pages/stack-bump-3d/thumbnail.jpg",
 description: "A 3D block-stacking game where you build towers while bumping into obstacles, maintaining balance as structures grow taller with physics-based wobbling." ,
 controls: "Arrow Keys to move stack, manage weight distribution carefully",
 category: "Endless"
},
{
 name: "Stick War",
 url: "/pages/stickwar/index.html",
 image: "pages/stickwar/stickwar.jpg",
 description: "A strategy action game featuring stick figure armies battling across terrain, building units and structures while commanding troops in real-time tactical combat." ,
 controls: "Mouse to command units, WASD to move camera, build units with buttons",
 category: "Strategy"
},
{
 name: "Storm the House 2",
 url: "/pages/stormthehouse2/index.html",
 image: "pages/stormthehouse2/stormthehouse2.jpg",
 description: "A tower defense game where you defend a house from waves of attackers, purchasing weapons and upgrades to fortify your defenses and survive onslaught." ,
 controls: "Mouse to purchase weapons and upgrades, click to fire at enemies",
 category: "Strategy"
},
{
 name: "Superhot",
 url: "/pages/superhot/index.html",
 image: "pages/superhot/hot.jpg",
 description: "A time-manipulation first-person shooter where time moves only when you move, allowing strategic planning and stylish combat scenarios against waves of enemies." ,
 controls: "WASD to move, Mouse to aim and shoot, time-relative mechanics",
 category: "Shooter"
},
{
 name: "Swerve",
 url: "/pages/swerve/index.html",
 image: "pages/swerve/img/favicon.jpg",
 description: "A minimalist reflex game where you swerve a character to avoid incoming obstacles, testing reaction time with progressively increasing difficulty and speed." ,
 controls: "Arrow Keys or A/D to swerve left and right",
 category: "Racing"
},
{
 name: "Tactical Assassin",
 url: "/pages/tacticalassasin2/index.html",
 image: "pages/tacticalassasin2/tacticalassassin2.png",
 description: "A sniper strategy game where you analyze scenes, identify targets, and execute eliminations with precision timing and careful tactical positioning." ,
 controls: "Mouse to aim sniper rifle, click to fire when target appears",
 category: "Shooter"
},
{
 name: "Tank Trouble 2",
 url: "/pages/tank-trouble-2/index.html",
 image: "pages/tank-trouble-2/icon-256.png",
 description: "A two-player tank battle game with maze arenas, ricocheting bullets, and power-ups, emphasizing strategic positioning and angle calculation for shots." ,
 controls: "Player 1: WASD to move, E to aim; Player 2: Arrow Keys to move, Space to aim",
 category: "Shooter"
},
{
 name: "The Battle",
 url: "/pages/thebattle/index.html",
 image: "pages/thebattle/thebattle.png",
 description: "A turn-based strategy game featuring opposing forces battling across terrain, where you deploy units and plan attacks to overcome enemy positions and armies." ,
 controls: "Mouse to select units and direct attacks, click target zones",
 category: "Strategy"
},
{
 name: "The Heist",
 url: "/pages/theheist/index.html",
 image: "pages/theheist/theheist.jpg",
 description: "A planning and execution puzzle game where you orchestrate a heist, deciding routes and timing for completing the theft while avoiding guards and security." ,
 controls: "Mouse to plan heist path and time actions, click to execute",
 category: "Strategy"
},
{
 name: "This is the Only Level",
 url: "/pages/thisistheonlylevel/index.html",
 image: "pages/thisistheonlylevel/thisistheonlylevel.png",
 description: "A clever one-level platformer where game elements rearrange between attempts, using the same space in creative ways to create seemingly infinite challenges." ,
 controls: "Arrow Keys or WASD to move, Spacebar to jump",
 category: "Platformer"
},
{
 name: "Toss the Turtle",
 url: "/pages/tosstheturtle/index.html",
 image: "pages/tosstheturtle/tosstheturtle.png",
 description: "A physics-based distance game where you launch a turtle across landscapes, purchasing upgrades and adjusting launch angles to achieve maximum flight distance." ,
 controls: "Mouse to aim launcher angle and power, click to toss turtle",
 category: "Strategy"
},
{
 name: "Tube Jumpers",
 url: "/pages/tube-jumpers/index.html",
 image: "pages/tube-jumpers/img/icon.jpg",
 description: "A cooperative platformer where characters jump through connected tubes and pipes, timing synchronized jumps to navigate obstacle-filled tunnel networks together." ,
 controls: "Arrow Keys for player 1, WASD for player 2, coordinate jumps",
 category: "Strategy"
},
{
 name: "TV Static",
 url: "/pages/tv-static/index.html",
 image: "pages/tv-static/static.png",
 description: "An experimental audiovisual experience simulating analog television static with interactive elements, creating a surreal and atmospheric multimedia installation." ,
 controls: "Mouse to interact with static patterns, create visual effects",
 category: "Other"
},
{
 name: "Webretro",
 url: "/pages/webretro-local/index.html",
 image: "pages/webretro-local/assets/icon204.png",
 description: "A retro game emulator allowing you to play classic arcade and console games through a browser interface with save functionality and controller support." ,
 controls: "Varies by emulated game, configurable keyboard or gamepad",
 category: "Other"
},
{
 name: "Wolfenstein 3D",
 url: "/pages/wolf3d/index.html",
 image: "pages/wolf3d/art/wolf3d.png",
 description: "A classic first-person shooter where you navigate castle levels eliminating enemies, collecting weapons and treasures while avoiding guard encounters." ,
 controls: "WASD to move, Mouse to aim and click to shoot, E to open doors",
 category: "Shooter"
},
{
 name: "Wordle",
 url: "/pages/wordle/index.html",
 image: "pages/wordle/img/logo_192x192.png",
 description: "A word-guessing puzzle game where you deduce a hidden word through strategic guesses, receiving color-coded feedback on letter positions and correctness." ,
 controls: "Keyboard to type letter guesses, Enter to submit",
 category: "Puzzle"
},
{
 name: "World's Hardest Game 2",
 url: "/pages/worlds-hardest-game-2/index.html",
 image: "pages/worlds-hardest-game-2/the-worlds-hardest-game-2.jpg",
 description: "The sequel to the punishing platformer, featuring even more brutal obstacle patterns, faster enemies, and tighter puzzle designs demanding extreme precision and patience." ,
 controls: "Arrow Keys to move with frame-perfect timing required",
 category: "Strategy"
},
{
 name: "Duck Life: Treasure Hunt",
 url: "pages/dlth/index.html",
 image: "pages/dlth/dltr.jpeg",
 description: "An adventurous duck training game where you explore islands, find treasures, and train your duck with mini-games to enhance its abilities for competitive",
 controls: "The arrow keys for movement and jumping, and the mouse for specific actions like flying or interacting with puzzles",
 category: "Sports"
},
{
 name: "Hexanaut",
 url: "https://hexanaut.io/",
 image: "images/hexanaut.jpeg",
 description: "A multiplayer strategy game where you control hexagonal tiles to capture territory and outmaneuver opponents in real-time battles.",
 controls: "Mouse to select and move tiles, keyboard shortcuts for special actions",
 category: "IO"
},
{
 name: "Defly.io",
 url: "https://defly.io/",
 image: "images/deflyio.png",
 description: "A multiplayer aerial combat game where you pilot a plane, capture zones, and engage in dogfights with other players in a dynamic arena.",
 controls: "WASD to fly, Mouse to aim and shoot, Spacebar for special maneuvers",
 category: "IO"
},
{
 name: "ZombsRoyale.io",
 url: "https://zombs.io",
 image: "images/zr.jpeg",
 description: "A 2D battle royale game where you scavenge for weapons, build structures, and fight to be the last player standing in a shrinking arena.",
 controls: "WASD to move, Mouse to aim and shoot, E to interact with objects",
 category: "IO"
},
{
 name: "Goober Dash",
 url: "https://gooberdash.winterpixel.io/",
 image: "images/gd.jpg",
 description: "A fast-paced endless runner where you control a character dodging obstacles and collecting items to achieve the highest score possible.",
 controls: "Spacebar or Mouse Click to jump, Arrow Keys to move left and right",
 category: "IO"
},
{
 name: "Thomas 32x",
 url: "https://html-classic.itch.zone/html/15749771/thms/index.html",
 image: "pages/tmhs/logo.png",
 description: "Control a bean",
 controls: "WASD to move, right click to look around, idk what else, ask thomas",
 category: "Thomasi"
},
{
 name: "RaycasterV4",
 url: "pages/raycastv4/index.html",
 image: "pages/raycastv4/icon.png",
 description: "Only really impressive if you reazlie this was made in scratch. Then it's amazing.",
 controls: "WASD to move, Mouse to look around",
 category: "Thomasi"
},
{
 name: "Super Metroid",
 url: "pages/supermetroid/index.html",
 image: "pages/supermetroid/supermetroid.webp",
 description: "ASuper Metroid is a landmark 1994 Super Nintendo action-adventure game known for pioneering the \"Metroidvania\" genre, featuring non-linear exploration of Planet Zebes as bounty hunter Samus Aran, acquiring power-ups to unlock new areas, and building a rich, atmospheric world through minimalist storytelling, challenging level design, and iconic music.",
 controls: "Arrow Keys to move, Z to shoot, X to jump, A for special actions",
 category: "Platformer"
},
{
 name: "Metroid II",
 url: "pages/metroidII/index.html",
 image: "pages/metroidII/metroidII.jpeg",
 description: "Metroid II: Return of Samus follows bounty hunter Samus Aran on the hostile planet SR388, tasked with exterminating the entire Metroid species",
 controls: "Arrow Keys to move, Z to shoot, X to jump, A for special actions",
 category: "Platformer"
},
{
 name: "Metroid",
 url: "pages/metroid/index.html",
 image: "pages/metroid/metroid.jpeg",
 description: "Metroid is a classic 1986 action-adventure game where players control Samus Aran on planet Zebes, exploring interconnected areas, battling alien creatures, and acquiring power-ups to enhance abilities and access new regions, pioneering the 'Metroidvania' genre with its non-linear gameplay and atmospheric design.",
 controls: "Arrow Keys to move, Z to shoot, X to jump, A for special actions",
 category: "Platformer"
},
{
 name: "CloudMoon",
 url: "pages/cma/index.html",
 image: "pages/cma/cma.png",
 description: "Play Clash Royale and other mobile games on this website",
 controls: "Varies",
 category: "Other"
},
{
    name: "PokeRouge",
    url: "pages/pokerouge/index.html",
    image: "pages/pokerouge/pr.jpg",
    description: "A rougelike pokemon game",
    controls: "Mouse to aim launch angle, click to start, arrow keys during flight",
    category: "Strategy"
},
{
    name: "Learn to Fly 2",
    url: "pages/learntofly2/index.html",
    image: "pages/learntofly2/ltf2.jpeg",
    description: "Learn to Fly 2 is a launcher game where you play as a penguin attempting to fly using a ramp and various gadgets.",
    controls: "Mouse to aim launch angle, click to start, arrow keys during flight",
    category: "Strategy"
},
{
    name: "Learn to Fly 3",
    url: "pages/learntofly3/index.html",
    image: "pages/learntofly3/ltf3.png",
    description: "Build your spaceship from scratch, earn funds and invest them into building a bigger, better spaceship as you try and fly your way up to space!",
    controls: "Mouse to aim launch angle, click to start, arrow keys during flight",
    category: "Strategy"
},
{
    name: "Jacksmith",
    url: "pages/jack/index.html",
    image: "pages/jack/Jack.webp",
    description: "Jacksmith is the craftiest donkey in all the land. In Jacksmith, you are a blacksmith crafting a wide range of weapons for all of your warriors",
    controls: "Click to interact",
    category: "Strategy"
},
{
 name: "Papa's Burgeria",
 url: "/pages/pburger/index.html",
 image: "pages/pburger/pb.png",
 description: "A time-management restaurant simulation where you take burger orders, prepare bugers with custom toppings, and serve customers while managing a growing business." ,
 controls: "Mouse to select ingredients and assemble burgers, click to serve",
 category: "Strategy"
},
{
 name: "Papa's Taco Mia",
 url: "/pages/ptaco/index.html",
 image: "pages/ptaco/pt.webp",
 description: "A time-management restaurant simulation where you take taco orders, prepare tacos with custom toppings, and serve customers while managing a growing business." ,
 controls: "Mouse to select ingredients and assemble tacos, click to serve",
 category: "Strategy"
},
{
 name: "Papa's Freezeria",
 url: "/pages/pfreeze/index.html",
 image: "pages/pfreeze/pf.webp",
 description: "A time-management restaurant simulation where you take ice-cream orders, prepare ice-cream with custom toppings, and serve customers while managing a growing business." ,
 controls: "Mouse to select ingredients and assemble ice-cream, click to serve",
 category: "Strategy"
},
{
 name: "Papa's Pancakeria",
 url: "/pages/ppancake/index.html",
 image: "pages/ppancake/pp.webp",
 description: "A time-management restaurant simulation where you take pancake orders, prepare pacakes with custom toppings, and serve customers while managing a growing business." ,
 controls: "Mouse to select ingredients and assemble pacakes, click to serve",
 category: "Strategy"
},
{
 name: "Papa's Wingeria",
 url: "/pages/pwing/index.html",
 image: "pages/pwing/pw.png",
 description: "A time-management restaurant simulation where you take wing orders, prepare wings with custom toppings, and serve customers while managing a growing business." ,
 controls: "Mouse to select ingredients and assemble wings, click to serve",
 category: "Strategy"
},
{
 name: "Papa's Hot Doggeria",
 url: "/pages/photdog/index.html",
 image: "pages/photdog/ph.png",
 description: "A time-management restaurant simulation where you take hotdog orders, prepare hotdog with custom toppings, and serve customers while managing a growing business." ,
 controls: "Mouse to select ingredients and assemble hotdogs, click to serve",
 category: "Strategy"
},
{
 name: "Papa's Cupcakeria",
 url: "/pages/pcup/index.html",
 image: "pages/pcup/pc.jpeg",
 description: "A time-management restaurant simulation where you take cupcake orders, prepare cupcakes with custom toppings, and serve customers while managing a growing business." ,
 controls: "Mouse to select ingredients and assemble cupcakes, click to serve",
 category: "Strategy"
},
{
 name: "Papa's Pastaria",
 url: "/pages/ppaste/index.html",
 image: "pages/ppaste/pp.jpeg",
 description: "A time-management restaurant simulation where you take pastery orders, prepare pastery with custom toppings, and serve customers while managing a growing business." ,
 controls: "Mouse to select ingredients and assemble pastery, click to serve",
 category: "Strategy"
},
{
 name: "Papa's Donuteria",
 url: "/pages/pdog/index.html",
 image: "pages/pdog/pd.jpeg",
 description: "A time-management restaurant simulation where you take donut orders, prepare donuts with custom toppings, and serve customers while managing a growing business." ,
 controls: "Mouse to select ingredients and assemble donuts, click to serve",
 category: "Strategy"
},
{
 name: "Papa's Cheeseria",
 url: "/pages/pcheese/index.html",
 image: "pages/pcheese/pc.webp",
 description: "A time-management restaurant simulation where you take grilled cheese orders, prepare grilled cheeses with custom toppings, and serve customers while managing a growing business." ,
 controls: "Mouse to select ingredients and assemble grilled cheeses, click to serve",
 category: "Strategy"
},
{
 name: "Papa's Bakeria",
 url: "/pages/pbake/index.html",
 image: "pages/pbake/pb.jpeg",
 description: "A time-management restaurant simulation where you take baking orders, prepare bakings with custom toppings, and serve customers while managing a growing business." ,
 controls: "Mouse to select ingredients and assemble baked things, click to serve",
 category: "Strategy"
},
{
 name: "Papa's Sushiria",
 url: "/pages/psush/index.html",
 image: "pages/psush/ps.webp",
 description: "A time-management restaurant simulation where you take sushi orders, prepare sushi with custom toppings, and serve customers while managing a growing business." ,
 controls: "Mouse to select ingredients and assemble sushi, click to serve",
 category: "Strategy"
},
{
 name: "Papa's Scooperia",
 url: "/pages/pscoop/index.html",
 image: "pages/pscoop/ps.webp",
 description: "A time-management restaurant simulation where you take ice-cream orders, prepare ice-cream with custom toppings, and serve customers while managing a growing business." ,
 controls: "Mouse to select ingredients and assemble ice-cream, click to serve",
 category: "Strategy"
},
];