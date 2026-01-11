//*ABOUT THE GAME: This is my first .io game that I made. Its not great, but its cool. The game is not multiplayer, you are just playing with random named A.I bots. The game is like agar.io, but much more low graphic. Ok so, the rules of the game are that you are supposed to collect mass that is all around the game world and when you are bigger then another circle that is moving, you can take him in your colour of the team, and your team will keep trying to dominate others to win. The other circles in your team are called comrades. Got that? Great. Me neither.
//*UPDATE V.01: I have added rooms to the game, so everytime you refresh the page, you spawn in a different room.
//*UPDATE V.02: I have added walls so that Enemies and team players dot go out of bounds from the map. You can go out of bounds,though.
//*UPDATE V.03: The A.Is are much more smarter and tactical.
//*UPDATE V.04: You can now only have a name up to 15 characters.
//*UPDATE V.05: Food spawns in random places and not in the same place.
//*UPDATE V.06 Fixed colour glitch in game.
(function() {
  var gameStart = false;
  var defaultName = "Unnamed Player";
  var name = defaultName;
  var $ = function(s) {
    return document.querySelector(s);
  };
  var getNth = function(n) {
    var s = n.toString().slice(-1);
    if (s == "1" && n != 11) n += "st";
    else if (s == "2" && n != 12) n += "nd";
    else if (s == "3" && n != 13) n += "rd";
    else n += "th";
    return n;
  };
  var getName = function(n) {
    var a = "abcdefghijklmnopqrstuvwxyz";
    a += a.toUpperCase();
    for (let i = 0; i <= 9; i++) a += i;
    var s = "";
    for (let i = 0; i < n; i++)
      s += rand(a.split(""));
    return s;
  };
  var borders = {
    x: can.width / 2 - 1500,
    y: can.height / 2 - 1500,
    w: 3000,
    h: 3000,
    spc: 100
  };
  var mouse = {
    x: null,
    y: null
  };
  var Ball = function(prop, isOrb) {
    this.s = rand(30, 50);
    this.x = rand(borders.x + this.s, borders.x + borders.w - this.s);
    this.y = rand(borders.y + this.s, borders.y + borders.h - this.s);
    this.vx = rand([-1, 1]) * randFloat(1, 3);
    this.vy = rand([-1, 1]) * randFloat(1, 3);
    this.fill = [rand(0, 255), rand(0, 255), rand(0, 255)];
    this.mix = null;
    this.name = rand(5) === 0 ? defaultName : getName(rand(5, 15));
    this.draw = function() {
      ctx.beginPath();
      ctx.lineWidth = this.s / 25;
      ctx.fillStyle = "rgba(" + this.fill + ", 0.5)";
      ctx.arc(this.x, this.y, this.s, 0, 2 * Math.PI);
      ctx.fill();
      ctx.stroke();
      if (this.mix)
        for (let i = 0; i < 3; i++) {
          if (this.fill[i] < this.mix[i]) this.fill[i]++;
          else if (this.fill[i] > this.mix[i]) this.fill[i]--;
        }
      if (!isOrb) {
        ctx.beginPath();
        ctx.fillStyle = "black";
        ctx.lineWidth = this.s / 50;
        ctx.font = this.s / 2 + "px Bangers";
        ctx.textAlign = "center";
        ctx.textBaseline = "top";
        ctx.fillText(this.name, this.x, this.y + this.s);
      }
    };
    this.getRank = function(balls) {
      let rank = 1;
      for (let i = 0; i < balls.length; i++)
        if (balls[i].s > this.s) rank++;
      return getNth(rank);
    };
    for (let i in prop)
      this[i] = prop[i];
  };
  var Orb = function() {
    var o = new Ball({}, true);
    o.s = 10;
    o.x = rand(borders.x + o.s, borders.x + borders.w - o.s);
    o.y = rand(borders.y + o.s, borders.y + borders.h - o.s);
    return o;
  };
  var isCopy = function(a, b) {
    let x = 0;
    if (a.length != b.length) return false;
    for (let i = 0; i < a.length; i++)
      if (b[i] == a[i]) x++;
    return x == a.length;
  };
  var getCopy = function(a) {
    let b = [];
    for (let i = 0; i < a.length; i++)
      b.push(a[i]);
    return b;
  };
  var collides = function(a, b) {
    let dist = Math.hypot(a.x - b.x, a.y - b.y);
    return dist < a.s + b.s;
  };
  var orbs, balls, player, gameover;
  var init = function() {
    orbs = [];
    balls = [];
    gameover = false;
    for (let i = 0; i < 200; i++)
      orbs.push(new Orb());
    for (let i = 0; i < 20; i++)
      balls.push(new Ball());
    player = new Ball({
      x: can.width / 2,
      y: can.height / 2,
      s: 30,
      name: name,
      vx: gameStart ? 3 : 0,
      vy: gameStart ? 3 : 0,
      gotten: function(balls) {
        let x = 0;
        for (let i = 0; i < balls.length; i++)
          if (isCopy((this.mix || this.fill), balls[i].fill)) x++;
        return x;
      }
    });
  }
  init();
  var stats = new Stats();
  //document.body.appendChild(stats.dom);
  (function update() {
    stats.begin();
    ctx.beginPath();
    ctx.clearRect(0, 0, can.width, can.height);
    let p = player;
    let a = Math.atan2(mouse.y - p.y, mouse.x - p.x);
    ctx.strokeStyle = "lightgray";
    for (let x = borders.x; x <= borders.x + borders.w; x += borders.spc) {
      ctx.beginPath();
      ctx.moveTo(x, borders.y);
      ctx.lineTo(x, borders.y + borders.h);
      ctx.stroke();
    }
    for (let y = borders.y; y <= borders.y + borders.h; y += borders.spc) {
      ctx.beginPath();
      ctx.moveTo(borders.x, y);
      ctx.lineTo(borders.x + borders.w, y);
      ctx.stroke();
    }
    borders.x -= Math.cos(a) * p.vx;
    borders.y -= Math.sin(a) * p.vy;
    ctx.strokeStyle = "black";
    for (let i = 0; i < orbs.length; i++) {
      let o = orbs[i];
      o.draw();
      o.x -= Math.cos(a) * p.vx;
      o.y -= Math.sin(a) * p.vy;
      if (collides(o, p)) {
        p.s++;
        orbs[i] = new Orb();
      }
      for (let x = 0; x < balls.length; x++)
        if (collides(o, balls[x])) {
          if (gameStart) balls[x].s++;
          orbs[i] = new Orb();
        }
    }
    if (gameStart) p.draw();
    //if (p.s > 30) p.s -= 0.01;
    for (let i = 0; i < balls.length; i++) {
      let b = balls[i];
      b.draw();
      b.x += b.vx;
      b.y += b.vy;
      b.x -= Math.cos(a) * p.vx;
      b.y -= Math.sin(a) * p.vy;
      //if (b.s > 30) b.s -= 0.005;
      if (collides(p, b) && !isCopy((p.mix || p.fill), (b.mix || b.fill))) {
        if (p.s > b.s) b.mix = getCopy(p.fill);
        else p.mix = getCopy(b.fill);
      }
      for (let x = 0; x < balls.length; x++)
        if (collides(balls[x], b) && 
            !isCopy((balls[x].mix || balls[x].fill), (b.mix || b.fill))) {
          if (balls[x].s > b.s) b.mix = getCopy(balls[x].fill);
          else balls[x].mix = getCopy(b.fill);
        }
      if (b.x + b.s > borders.x + borders.w) b.vx = -Math.abs(b.vx);
      else if (b.x - b.s < borders.x) b.vx = Math.abs(b.vx);
      if (b.y + b.s > borders.y + borders.h) b.vy = -Math.abs(b.vy);
      else if (b.y - b.s < borders.y) b.vy = Math.abs(b.vy);
    }
    if (gameStart) {
      ctx.beginPath();
      ctx.fillStyle = "black";
      ctx.textAlign = "left";
      ctx.textBaseline = "top";
      ctx.font = "30px Bangers";
      ctx.fillText("Place: " + p.getRank(balls), 0, 0);
      ctx.fillText("Fatness: " + Math.floor(p.s), 0, 30);
      ctx.fillText("Army: " + p.gotten(balls) + " / " + balls.length, 0, 60);
    }
    if (p.gotten(balls) == balls.length && !gameover) {
      setTimeout(init, 3000);
      gameover = true;
    }
    if (gameover) {
      for (let i = 0; i < balls.length; i++) {
        balls[i].vx *= 0.98;
        balls[i].vy *= 0.98;
      }
      player.vx *= 0.98;
      player.vx *= 0.98;
    }
    stats.end();
    requestAnimationFrame(update);
  }());
  window.addEventListener("resize", function() {
    can.width = this.innerWidth;
    can.height = this.innerHeight;
    player.x = can.width / 2;
    player.y = can.height / 2;
  }, false);
  can.addEventListener("mousemove", function(e) {
    mouse.x = e.offsetX;
    mouse.y = e.offsetY;
  }, false);
  //$("#name-input").focus();
  $("#io-name").innerHTML = getName(5);
  $("#start").addEventListener("click", function() {
    $(".welcome").style.animation = "shrink 2s ease-in";
    setTimeout(function() {
      $(".welcome").style.display = "none";
    }, 2001);
    if ($("#name-input").value !== "")
      name = $("#name-input").value;
    gameStart = true;
    init();
  }, false);
}());
