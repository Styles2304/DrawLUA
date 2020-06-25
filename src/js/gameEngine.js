class GAME {
    constructor(canvas, container, width, height, fps) {
        this.STAGE = document.getElementById(canvas);
        this.STAGE.width = width;
        this.STAGE.height = height;
        this.CONTAINER = container;
        this.CONTEXT = this.STAGE.getContext("2d");
        this.FPS = fps;
        this.LOOP = null;
        this.PAUSE = false;
        this.KEYS = {
            enter: false,
            space: false,
            left: false,
            up: false,
            right: false,
            down: false,
            a: false,
            b: false,
            c: false,
            d: false,
            e: false,
            f: false,
            g: false,
            h: false,
            i: false,
            j: false,
            k: false,
            l: false,
            m: false,
            n: false,
            o: false,
            p: false,
            q: false,
            r: false,
            s: false,
            t: false,
            u: false,
            v: false,
            w: false,
            x: false,
            y: false,
            z: false
        }
    }

    update() {}
    draw() {}
    pause() { this.PAUSE = true; }
    unpause() { this.PAUSE = false; }
    drawSpriteSheet(object) {
        var _ctx = object.sprite.sheet.getContext("2d");
        var _scale = object.sprite.scale;
        var _step = {
            x: object.sprite.width,
            y: object.sprite.height
        }

        var _curStep = {
            x: 0,
            y: 0
        }
        var _animationList = object.sprite.animations.animationList;

        for (var a = 0; a < _animationList.length; a++) {
            var _animation = object.sprite.animations[_animationList[a]];
            var _loop = _animation.loop;
            
            for (var e = 0; e < _loop.length; e++) {
                var _frame = _animation.frames[_loop[e]];
                var _colors = _frame.length;

                var _yOffset = _curStep.y * _step.y;
                var _xOffset = _curStep.x * _step.x;
                
                for (var i = 0; i < _colors; i++) {
                    var _color = _frame[i][0];
                    _ctx.fillStyle = _color;

                    for (var o = 1; o < _frame[i].length; o++) {
                        var _coordY = _frame[i][o][0];

                        for (var u = 0; u < _frame[i][o][1].length; u++) {
                            var _coordX = _frame[i][o][1][u];

                            _ctx.fillRect((_coordX + _xOffset) * _scale, (_coordY + _yOffset) * _scale, _scale, _scale);
                        }
                    }
                }

                _curStep.x++;
            }
            
            _curStep.y++;
            _curStep.x = 0;
        }
    }
    run() {
        // Sub-settings
            var that = this;
        // Prep the container
        document.getElementById(this.CONTAINER).setAttribute(
            "style",
            "width: " + this.STAGE.width + "px; " +
            "height: " + this.STAGE.height + "px; "
        );

        // Setup the key listeners for common keys
        window.onkeydown = function(e) {
            var key = e.keyCode ? e.keyCode : e.which;
            switch (key) {
                case 13: that.KEYS.enter = true; e.preventDefault(); break;
                case 32: that.KEYS.space = true; e.preventDefault(); break;
                case 37: that.KEYS.left = true; e.preventDefault(); break;
                case 38: that.KEYS.up = true; e.preventDefault(); break;
                case 39: that.KEYS.right = true; e.preventDefault(); break;
                case 40: that.KEYS.down = true; e.preventDefault(); break;
                case 65: that.KEYS.a = true; e.preventDefault(); break;
                case 66: that.KEYS.b = true; e.preventDefault(); break;
                case 67: that.KEYS.c = true; e.preventDefault(); break;
                case 68: that.KEYS.d = true; e.preventDefault(); break;
                case 69: that.KEYS.e = true; e.preventDefault(); break;
                case 70: that.KEYS.f = true; e.preventDefault(); break;
                case 71: that.KEYS.g = true; e.preventDefault(); break;
                case 72: that.KEYS.h = true; e.preventDefault(); break;
                case 73: that.KEYS.i = true; e.preventDefault(); break;
                case 74: that.KEYS.j = true; e.preventDefault(); break;
                case 75: that.KEYS.k = true; e.preventDefault(); break;
                case 76: that.KEYS.l = true; e.preventDefault(); break;
                case 77: that.KEYS.m = true; e.preventDefault(); break;
                case 78: that.KEYS.n = true; e.preventDefault(); break;
                case 79: that.KEYS.o = true; e.preventDefault(); break;
                case 80: that.KEYS.p = true; e.preventDefault(); break;
                case 81: that.KEYS.q = true; e.preventDefault(); break;
                case 82: that.KEYS.r = true; e.preventDefault(); break;
                case 83: that.KEYS.s = true; e.preventDefault(); break;
                case 84: that.KEYS.t = true; e.preventDefault(); break;
                case 85: that.KEYS.u = true; e.preventDefault(); break;
                case 86: that.KEYS.v = true; e.preventDefault(); break;
                case 87: that.KEYS.w = true; e.preventDefault(); break;
                case 88: that.KEYS.x = true; e.preventDefault(); break;
                case 89: that.KEYS.y = true; e.preventDefault(); break;
                case 90: that.KEYS.z = true; e.preventDefault(); break;
            }
        }

        window.onkeyup = function(e) {
            var key = e.keyCode ? e.keyCode : e.which;
            switch (key) {
                case 13: that.KEYS.enter = false; break;
                case 32: that.KEYS.space = false; break;
                case 37: that.KEYS.left = false; break;
                case 38: that.KEYS.up = false; break;
                case 39: that.KEYS.right = false; break;
                case 40: that.KEYS.down = false; break;
                case 65: that.KEYS.a = false; break;
                case 66: that.KEYS.b = false; break;
                case 67: that.KEYS.c = false; break;
                case 68: that.KEYS.d = false; break;
                case 69: that.KEYS.e = false; break;
                case 70: that.KEYS.f = false; break;
                case 71: that.KEYS.g = false; break;
                case 72: that.KEYS.h = false; break;
                case 73: that.KEYS.i = false; break;
                case 74: that.KEYS.j = false; break;
                case 75: that.KEYS.k = false; break;
                case 76: that.KEYS.l = false; break;
                case 77: that.KEYS.m = false; break;
                case 78: that.KEYS.n = false; break;
                case 79: that.KEYS.o = false; break;
                case 80: that.KEYS.p = false; break;
                case 81: that.KEYS.q = false; break;
                case 82: that.KEYS.r = false; break;
                case 83: that.KEYS.s = false; break;
                case 84: that.KEYS.t = false; break;
                case 85: that.KEYS.u = false; break;
                case 86: that.KEYS.v = false; break;
                case 87: that.KEYS.w = false; break;
                case 88: that.KEYS.x = false; break;
                case 89: that.KEYS.y = false; break;
                case 90: that.KEYS.z = false; break;
            }
        }

        // Initiate the game loop
        this.LOOP = setInterval(function() {
            if (!that.PAUSE) {
                that.update();
                that.draw();
            }
        }, 1000 / this.FPS);
    }
}