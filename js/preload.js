var PreloadScene = new Phaser.Class({
  
    Extends: Phaser.Scene,
    
    initialize:
    
    function PreloadScene ()
    {
        Phaser.Scene.call(this, { key: 'preloadScene' });
    },

    init: function () 
    {

    },
    
    preload: function ()
    { 

        this.graphics = this.add.graphics();
		this.newGraphics = this.add.graphics();
        var progressBar = new Phaser.Geom.Rectangle(760, 500, 400, 50);
		var progressBarFill = new Phaser.Geom.Rectangle(765, 500, 400, 50);

		this.graphics.fillStyle(0x40575E, 1);
		this.graphics.fillRectShape(progressBar);

		this.newGraphics.fillStyle(0x78B1CE, 1);
		this.newGraphics.fillRectShape(progressBarFill);

        
        var text1 = this.add.text(650,750,"*Optimized for 1920 by 1200 resolution", { fontSize: '32px', fill: '#EFDAC7',  fontFamily: '"Comfortaa"'  });
        var text2 = this.add.text(650,800,"*Wear headphones for best experience", { fontSize: '32px', fill: '#EFDAC7',  fontFamily: '"Comfortaa"'});
        var loadingText = this.add.text(795, 575,"LOADING: ", { fontSize: '38px', fill: '#EFDAC7',  fontFamily: '"Comfortaa"' });
   
        //title screen assets
        this.load.image('title', 'images/titlescene.png');
        this.load.image('error', 'images/error.png');
        this.load.audio('titletrack', ['sounds/titletrack.mp3']);
        //spring scene assets
        this.load.audio('raining', ['sounds/rain.mp3']);
        this.load.audio('quack', ['sounds/quack.mp3']);
        this.load.audio('on', ['sounds/light-switch.mp3']);
        this.load.audio('splash', ['sounds/splash.mp3']);
        this.load.image('play', 'images/playbtn.png');
        this.load.image('speechbubble', 'images/speechbubble.png');
        this.load.image('raindrop', 'images/rain.png',  { frameWidth: 32, frameHeight: 48 });
        this.load.spritesheet('girl', 'images/sprite-sheet-1.png', { frameWidth: 540, frameHeight: 720 });
        this.load.image('idle1', 'images/idle-1.png', { frameWidth: 540, frameHeight: 720 });
        this.load.image('idle2', 'images/idle-2.png', { frameWidth: 540, frameHeight: 720 });
        this.load.image('idle3', 'images/idle-3.png', { frameWidth: 540, frameHeight: 720 });
        this.load.image('idle4', 'images/idle-4.png', { frameWidth: 540, frameHeight: 720 });
        this.load.image('lidle1', 'images/lidle-1.png', { frameWidth: 540, frameHeight: 720 });
        this.load.image('lidle2', 'images/lidle-2.png', { frameWidth: 540, frameHeight: 720 });
        this.load.image('lidle3', 'images/lidle-3.png', { frameWidth: 540, frameHeight: 720 });
        this.load.image('lidle4', 'images/lidle-4.png', { frameWidth: 540, frameHeight: 720 });
        this.load.image('house', 'images/house.png');
        this.load.image('houselit', 'images/house-lit.png');
        this.load.image('tree', 'images/tree.png');
        this.load.image('stree', 'images/stree.png');
        this.load.image('bg1', 'images/bg-1.png');
        this.load.image('bg2', 'images/bg-2.png');
        this.load.image('bg3', 'images/bg-3.png');
        this.load.audio('chimes4', ['sounds/chimes4.mp3'])
        this.load.image('treehouse', 'images/tree-house.png')
        this.load.image('home-btn', 'images/homebtn.png')
        this.load.image('full-btn', 'images/fullbtn.png')
        this.load.image('ducks', 'images/ducks.png');
        this.load.image('ducks2', 'images/ducks-2.png');
        this.load.image('ducks3', 'images/ducks-3.png');
        this.load.image('ducks4', 'images/ducks-4.png');
        this.load.image('ducks5', 'images/ducks-5.png');
        this.load.image('ducks6', 'images/ducks-6.png');
        this.load.image('ducks7', 'images/ducks-7.png');
        this.load.image('ducks8', 'images/ducks-8.png');
        this.load.image('ducks9', 'images/ducks-9.png');
        this.load.image('ducks10', 'images/ducks-10.png');
        this.load.image('ducks11', 'images/ducks-11.png');
        this.load.image('ducks12', 'images/ducks-12.png');
        this.load.image('bird', 'images/bird.png');
        this.load.image('bird1', 'images/bird-1.png');
        this.load.image('bird2', 'images/bird-2.png');
        this.load.image('bird3', 'images/bird-3.png');
        this.load.image('bird4', 'images/bird-4.png');
        this.load.image('bird5', 'images/bird-5.png');
        this.load.image('bird6', 'images/bird-6.png');
        this.load.image('bird7', 'images/bird-7.png');
        this.load.image('bird8', 'images/bird-8.png');
        this.load.image('bird9', 'images/bird-9.png');
        this.load.image('bird10', 'images/bird-10.png');
        this.load.image('bird11', 'images/bird-11.png');
        this.load.image('bird12', 'images/bird-12.png');
        this.load.image('bird13', 'images/bird-13.png');
        this.load.image('bird14', 'images/bird-14.png');
        this.load.image('bird15', 'images/bird-15.png');
        this.load.image('bird16', 'images/bird-16.png');
        this.load.image('hummingbird', 'images/hummingbird.png');
        this.load.image('hummingbird2', 'images/hummingbird-2.png');
        this.load.image('hummingbird3', 'images/hummingbird-3.png');
        this.load.image('hummingbird4', 'images/hummingbird-4.png');
        this.load.image('hummingbird5', 'images/hummingbird-5.png');
        this.load.image('hummingbird6', 'images/hummingbird-6.png');
        this.load.image('hummingbird7', 'images/hummingbird-7.png');
        this.load.image('hummingbird8', 'images/hummingbird-8.png');
        this.load.image('hummingbird9', 'images/hummingbird-9.png');
        this.load.image('hummingbird10', 'images/hummingbird-10.png');
        this.load.image('hummingbird11', 'images/hummingbird-11.png');
        this.load.image('hummingbird12', 'images/hummingbird-12.png');
        this.load.image('hummingbird13', 'images/hummingbird-13.png');
        this.load.image('hummingbird14', 'images/hummingbird-14.png');
        this.load.image('hummingbird15', 'images/hummingbird-15.png');
        this.load.image('frog', 'images/frog.png');
        this.load.image('frog2', 'images/frog-2.png');
        this.load.image('frog3', 'images/frog-3.png');
        this.load.image('plant', 'images/plant.png');
        this.load.image('plant2', 'images/plant-2.png');
        this.load.image('plant3', 'images/plant-3.png');
        this.load.audio('footstepsinmud', ['sounds/footstepsinmud.mp3']);

        //summer scene assets
        this.load.spritesheet('girl4', 'images/sprite-sheet-4.png', { frameWidth: 540, frameHeight: 720 });
        this.load.audio('summeramb', ['sounds/summer-ambient_1.mp3']);
        this.load.audio('bark', ['sounds/bark.mp3']);
        this.load.audio('bees', ['sounds/bees.mp3']);
        this.load.image('tree4', 'images/tree-b.png')
        this.load.image('stree4', 'images/stree-b.png');
        this.load.image('speechbubbleb', 'images/speechbubble-b.png');
        this.load.image('bub-mach', 'images/bubble-mach.png');
        this.load.audio('bubbles', ['sounds/bubble-mach.mp3'])
        this.load.image('bubble', 'images/bubble.png');
        this.load.image('bg1-b', 'images/bg-1-b.png');
        this.load.image('bg2-b', 'images/bg-2-b.png');
        this.load.image('bg3-b', 'images/bg-3-b.png');
        this.load.image('leaf', 'images/leaf.png');
        this.load.image('beehive', 'images/beehive.png');
        this.load.image('butterfly', 'images/butterfly.png');
        this.load.image('butterfly2', 'images/butterfly-2.png');
        this.load.image('butterfly3', 'images/butterfly-3.png');
        this.load.image('butterfly4', 'images/butterfly-4.png');
        this.load.image('butterfly5', 'images/butterfly-5.png');
        this.load.image('butterfly6', 'images/butterfly-6.png');
        this.load.image('treehouse-b', 'images/tree-house-b.png')
        this.load.image('beehive2', 'images/beehive-2.png');
        this.load.image('beehive3', 'images/beehive-3.png');
        this.load.image('pin', 'images/pin.png');
        this.load.image('pin2', 'images/pin-2.png');
        this.load.image('pin3', 'images/pin-3.png');
        this.load.image('pin4', 'images/pin-4.png');
        this.load.image('pin5', 'images/pin-5.png');
        this.load.image('pin6', 'images/pin-6.png');
        this.load.image('pin7', 'images/pin-7.png');
        this.load.image('pin8', 'images/pin-8.png');
        this.load.image('pup', 'images/pup.png');
        this.load.image('pup2', 'images/pup-2.png');
        this.load.image('pup3', 'images/pup-3.png');
        this.load.image('pup4', 'images/pup-4.png');
        this.load.image('pup5', 'images/pup-5.png');
        this.load.image('pup6', 'images/pup-6.png');
        this.load.image('pup7', 'images/pup-7.png');
        this.load.image('pup8', 'images/pup-8.png');
        this.load.image('pup9', 'images/pup-9.png');
        this.load.audio('chimes3', ['sounds/chimes3.mp3']);
        this.load.audio('kitchen', ['sounds/lyla-edited.mp3']);
        this.load.audio('footstepsonground2', ['sounds/footstepsonground2.mp3']);

        //fall scene assets
        this.load.spritesheet('girl3', 'images/sprite-sheet-3.png', { frameWidth: 540, frameHeight: 720 });
        this.load.audio('fallamb', ['sounds/windinleaves_1.mp3'])
        this.load.image('tree3', 'images/tree-f.png');
        this.load.image('top', 'images/tree-f-top.png');
        this.load.image('speechbubblef', 'images/speechbubble-f.png');
        this.load.image('stree3', 'images/stree-f.png');
        this.load.image('smTop', 'images/stree-f-top.png');
        this.load.image('bg1f', 'images/bg-1-f.png');
        this.load.image('bg2f', 'images/bg-2-f.png');
        this.load.image('bg3f', 'images/bg-3-f.png');
        this.load.image('snowflake', 'images/snowflakes.png');
        this.load.image('squirrel', 'images/squirrel.png');
        this.load.image('squirrel2', 'images/squirrel-2.png');
        this.load.image('squirrel3', 'images/squirrel-3.png');
        this.load.image('squirrel4', 'images/squirrel-4.png');
        this.load.image('fallhouse', 'images/house-f.png');
        this.load.image('kidpump', 'images/kidpump.png');
        this.load.image('pump', 'images/pumpkin.png');
        this.load.image('litpump', 'images/pumpkin-2.png');
        this.load.image('treehouse-f', 'images/tree-house-f.png');
        this.load.image('squirrelA', 'images/squirrelA.png');
        this.load.image('squirrelA2', 'images/squirrelA-2.png');
        this.load.image('squirrelA3', 'images/squirrelA-3.png');
        this.load.image('squirrelA4', 'images/squirrelA-4.png');
        this.load.image('squirrelA5', 'images/squirrelA-5.png');
        this.load.image('squirrelA6', 'images/squirrelA-6.png');
        this.load.image('squirrelA7', 'images/squirrelA-7.png');
        this.load.image('foxes', 'images/foxes-1.png');
        this.load.image('foxes2', 'images/foxes-2.png');
        this.load.image('foxes3', 'images/foxes-3.png');
        this.load.image('foxes4', 'images/foxes-4.png');
        this.load.image('foxes5', 'images/foxes-5.png');
        this.load.image('foxes6', 'images/foxes-6.png');
        this.load.image('foxes7', 'images/foxes-7.png');
        this.load.image('foxes8', 'images/foxes-8.png');
        this.load.audio('chimes2', ['sounds/chimes2.mp3']);
        this.load.audio('footstepsinleaves', ['sounds/footstepsinleaves.mp3']);
        this.load.audio('squealing', ['sounds/squirrelnoises.mp3']);

        //winter scene assets
        this.load.spritesheet('girl2', 'images/sprite-sheet-2.png', { frameWidth: 540, frameHeight: 720 });
        this.load.audio('wind', ['sounds/wind.mp3'])
        this.load.audio('bells', ['sounds/bells.mp3'])
        this.load.audio('rumble', ['sounds/rumble.mp3']);
        this.load.image('tree2', 'images/tree-s.png')
        this.load.image('stree2', 'images/stree-s.png');
        this.load.image('speechbubbles', 'images/speechbubble-s.png');
        this.load.image('deer', 'images/deer-0.png');
        this.load.image('deer1', 'images/deer-1.png');
        this.load.image('deer2', 'images/deer-2.png');
        this.load.image('deer3', 'images/deer-3.png');
        this.load.image('deer4', 'images/deer-4.png');
        this.load.image('deer5', 'images/deer-5.png');
        this.load.image('deer6', 'images/deer-6.png');
        this.load.image('deer7', 'images/deer-7.png');
        this.load.image('deer8', 'images/deer-8.png');
        this.load.image('deer9', 'images/deer-9.png');
        this.load.image('deer10', 'images/deer-10.png');
        this.load.image('fawn', 'images/fawn.png');
        this.load.image('fawn2', 'images/fawn-2.png');
        this.load.image('fawn3', 'images/fawn-3.png');
        this.load.image('fawn4', 'images/fawn-4.png');
        this.load.image('fawn5', 'images/fawn-5.png');
        this.load.image('fawn6', 'images/fawn-6.png');
        this.load.image('fawn7', 'images/fawn-7.png');
        this.load.image('fawn8', 'images/fawn-8.png');
        this.load.image('fawn9', 'images/fawn-9.png');
        this.load.image('fawn10', 'images/fawn-10.png');
        this.load.image('snowman', 'images/snowman.png');
        this.load.image('snowman2', 'images/snowman-2.png');
        this.load.image('snowman3', 'images/snowman-3.png');
        this.load.image('snowman4', 'images/snowman-4.png');
        this.load.image('snowman5', 'images/snowman-5.png');
        this.load.image('snowman6', 'images/snowman-6.png');
        this.load.image('snowman7', 'images/snowman-7.png');
        this.load.image('sled', 'images/sled.png');
        this.load.image('snowhouse', 'images/house-s.png')
        this.load.image('snowhouselit', 'images/house-s-lit.png')
        this.load.image('bg1s', 'images/bg-1-s.png');
        this.load.image('bg2s', 'images/bg-2-s.png');
        this.load.image('bg3s', 'images/bg-3-s.png');
        this.load.image('treehouse-s', 'images/tree-house-s.png')
        this.load.audio('chimes', ['sounds/chimes.mp3'])
        this.load.audio('footsteps', ['sounds/footsteps.mp3'])

        //credits 
        this.load.audio('creditsmus', ['sounds/credits_1.mp3'])
        this.load.image('back', 'images/back.png');
        this.load.image('credit', 'images/credits.png');
        this.load.image('creditb', 'images/credits-b.png');
        this.load.image('creditf', 'images/credits-f.png');
        this.load.image('credits', 'images/credits-s.png');

		this.load.on('progress', this.updateBar, {text1:text1, text2:text2, loadingText:loadingText, newGraphics:this.newGraphics});
		this.load.on('complete', this.complete, {scene:this.scene});
	},

	updateBar(percentage) {

       // console.log("P:" + percentage);
      
        this.newGraphics.clear();
this.newGraphics.fillStyle(0x78B1CE, 1);
this.newGraphics.fillRectShape(new Phaser.Geom.Rectangle(760, 500, percentage*400, 50));
		
percentage = percentage * 100;
this.text1.setText("*Optimized for 1920 by 1200 resolution");
this.text2.setText("*Wear headphones for best experience");
this.loadingText.setText("LOADING: " + percentage.toFixed(2) + "%");
//console.log("P:" + percentage);
	},

	complete() {
      //  console.log("COMPLETE!");
      
      var isMobile = {
        Android: function() {
            return navigator.userAgent.match(/Android/i);
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i);
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i);
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i);
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
        },
        any: function() {
            return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
        }
    };
        if( isMobile.any() || isMobile.iOS()) {
        this.scene.start("errorScene");
        } else {
        this.scene.start("titleScene");
        }

    },

});
