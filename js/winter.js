
// start snow scene code

  var SnowScene = new Phaser.Class({
  
  Extends: Phaser.Scene,
  
  initialize:
  
  function SnowScene ()
  {
      Phaser.Scene.call(this, { key: 'snowScene' });
  },
  
  preload: function ()
  {
  },
  
  create: function (){
        game.sound.stopAll();
        gameState.active = false;
        gameState2.active = true;
        gameState2.bgColor = this.add.rectangle(0, 0, config.width, config.height, 0xe5b6ae).setOrigin(0, 0);
        this.weather = 'snow';
        this.createParallaxBackgrounds();
        this.refreshToTitleScene();
       
        var snowhouse = this.add.sprite(3150, 535, 'snowhouse');
        var triggerlightup = this.add.rectangle(3250, 675, 450, 425, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
        var triggerSnowangel = this.add.rectangle(500, 900, 450, 200, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
        triggerChimes = this.add.rectangle(2320, 750, 150, 325, 0xe5b6ae, 0).setInteractive({useHandCursor: true});

        this.add.image(2550, 525, 'tree2');
        this.add.image(1070, 540, 'stree2').setScale(1.15);
        this.add.image(5400, 550, 'stree2').setScale(1.3);
        var sled = this.add.sprite(5560, 850, 'sled').setInteractive({useHandCursor: true});
        var snowman = this.add.sprite(6380, 750, 'snowman').setInteractive({useHandCursor: true});
        var fawn = this.add.sprite(4700, 720, 'fawn').setInteractive({useHandCursor: true});
        fawn.setScale(0.9);
        chimes = this.sound.add('chimes');

        this.add.sprite(7200, 530, 'treehouse-s').setScale(1.1);
        var triggerCredits = this.add.rectangle(7200, 400, 800, 600, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
        var triggerCredits2 = this.add.rectangle(7200, 750, 300, 800, 0xe5b6ae, 0).setInteractive({useHandCursor: true});

        var homebtn = this.add.image(1835, 80, 'home-btn').setInteractive({useHandCursor: true});
        var fullbtn = this.add.image(1835, 192, 'full-btn').setInteractive({useHandCursor: true});
        var bells = this.sound.add('bells');
        var deer = this.add.sprite(1730, 600, 'deer').setScale(0.65);
        var triggerdeer = this.add.rectangle(1650, 660, 460, 300, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
        wind = this.sound.add('wind');
        var rumble = this.sound.add('rumble');
        footsteps = this.sound.add('footsteps');
        footsteps.setLoop(true);
        wind.setLoop(true);
        wind.setVolume(0.6);
        wind.play();

        //house lights up on click
        triggerlightup.on('pointerdown', function () {
          //console.log('clicked');
          snowhouse.anims.play('lightup2', true);
        });
    
        triggerCredits.on('pointerdown', () => {
          //console.log('switch');
          this.scene.start("creditWinter");
          document.querySelector(".ground").style.backgroundColor = "#B7AA72";
          document.querySelector(".bg-color").style.backgroundColor = "#B7AA72"; 
        });

        triggerCredits2.on('pointerdown', () => {
          //console.log('switch');
          this.scene.start("creditWinter");
          document.querySelector(".ground").style.backgroundColor = "#B7AA72";
          document.querySelector(".bg-color").style.backgroundColor = "#B7AA72"; 
        });

          //deer moves on click
        triggerdeer.on('pointerdown', function () {
          console.log('clicked');
          deer.anims.play('deeranim', true);
        });

        fawn.on('pointerdown', function () {
         // console.log('clicked');
          rumble.play();
          fawn.anims.play('shake', true);
        }); 

        homebtn.on('pointerdown', () => {
          this.cameras.main.fade(800, 0, 0, 0, false, function(camera, progress){
            if (progress > .9) {
              wind.stop();
              chimes.stop();
          this.scene.start('titleScene'); 
          document.querySelector(".ground").style.backgroundColor = "#78B1CE";
          document.querySelector(".bg-color").style.backgroundColor = "#78B1CE";  
         
            }
          }) 
        });    
  
        fullbtn.on('pointerdown', function () {
          if (game.scale.isFullscreen) {
            game.scale.stopFullscreen();
            // On stop fulll screen
        } else {
            game.scale.startFullscreen();
           // game.config.parentElement.style.backgroundColor = "#20567e";
            // On start fulll screen
        }
        });
     
   


        //creates snow 
        gameState2.part = this.add.particles('snowflake');
        gameState2.emit = gameState2.part.createEmitter({
        x: {min: 0, max: config.width * 2 },
        y: -20,
        lifespan: 5000,
        speedX: { min:-100, max: 100 },
        speedY: { min: 200, max: 300 },
        scale: { start: 1.2, end: 0.7 },
        quantity: 1,
        });
        
        gameState2.emit.setScrollFactor(0);
        homebtn.setScrollFactor(0);
        fullbtn.setScrollFactor(0);
        // adds player
        gameState2.player2 = this.physics.add.sprite(250, 830, 'girl2').setScale(0.92);

        var speechbubble4 = this.add.sprite(950, 1100, 'speechbubbles');
        var text1 = this.add.text(700, 1080, 'LYLA: Do you like my snowangel?', { font: '30px Comfortaa', fill: '#fff' });
        var text2 = this.add.text(450, 1080, 'LYLA: Sledding reminds me of Christmas! Can you hear the jingle bells?', { font: '28px Comfortaa', fill: '#fff' });
        var text3 = this.add.text(650, 1080, 'LYLA: I think I saw Frosty wink at me!', { font: '28px Comfortaa', fill: '#fff' });

        speechbubble4.alpha = 0;
        text1.alpha = 0;
        text2.alpha = 0;
        text3.alpha = 0;
        speechbubble4.setScrollFactor(0);
        text1.setScrollFactor(0);
        text2.setScrollFactor(0);
        text3.setScrollFactor(0);
      
      triggerSnowangel.on('pointerdown', function () {
        if (speechbubble4.alpha === 0 && text2.alpha === 0 && text3.alpha === 0) {
          speechbubble4.alpha = 1;
          text1.alpha = 1;  
          setTimeout(function(){ speechbubble4.alpha = 0;   text1.alpha = 0}, 3000);
        }
     });

      sled.on('pointerdown', function () {
        if (speechbubble4.alpha === 0 && text1.alpha === 0 && text3.alpha === 0) { 
          bells.play();
          speechbubble4.alpha = 1;
          text2.alpha = 1;  
          setTimeout(function(){ speechbubble4.alpha = 0;   text2.alpha = 0}, 4500);
        }
      });

      
      snowman.on('pointerdown', function () {
        // console.log('clicked');
        snowman.anims.play('wink', true);
        if (speechbubble4.alpha === 0 && text1.alpha === 0 && text2.alpha === 0) {
          setTimeout(function(){ speechbubble4.alpha = 1;   text3.alpha = 1}, 1500);
          setTimeout(function(){ speechbubble4.alpha = 0;   text3.alpha = 0}, 4500);
        }
       });
   
        
        //sets cameras
        this.cameras.main.setBounds(0, 0, gameState2.width, gameState2.height)
        this.physics.world.setBounds(0, 0, gameState2.width, 1160);
        this.cameras.main.startFollow(gameState2.player2, true, 0.5, 0.5);
        this.physics.add.collider(gameState2.player2, gameState2.platforms);
    
        gameState2.player2.setBounce(0.2);
        gameState2.player2.setCollideWorldBounds(true);

        //set text
      //  text2 = this.add.text(975, 25, '', { font: '20px Verdana', fill: '#595B5B' });
       // text2.setScrollFactor(0);

        //add animations
        this.anims.create({
              key: 'lightup2',
              frames: [
                  { key: 'snowhouse' },
                  { key: 'snowhouselit', duration: 2000 },
                  { key: 'snowhouse'}
              ],
              frameRate: 5,
              repeat: 0
          });
          this.anims.create({
            key: 'deeranim',
            frames: [
                { key: 'deer' },
                { key: 'deer1' },
                { key: 'deer2' },
                { key: 'deer3' },
                { key: 'deer4' },
                { key: 'deer5' },
                { key: 'deer6' },
                { key: 'deer7' },
                { key: 'deer8' },
                { key: 'deer9' },
                { key: 'deer10' },
               // { key: 'deer11' },
                //{ key: 'deer12' },
                { key: 'deer' }
            ],
            frameRate: 8,
            repeat: 0
        });
        this.anims.create({
          key: 'shake',
          frames: [
              { key: 'fawn' },
              { key: 'fawn2' },
              { key: 'fawn3' },
              { key: 'fawn4' },
              { key: 'fawn5' },
              { key: 'fawn6' },
              { key: 'fawn7' },
              { key: 'fawn8' },
              { key: 'fawn9' },
              { key: 'fawn10' , duration: 5000 },
              { key: 'fawn' }
          ],
          frameRate: 16,
          repeat: 0
      });

        this.anims.create({
          key: 'wink',
          frames: [
              { key: 'snowman' },
              { key: 'snowman2' },
              { key: 'snowman3' },
              { key: 'snowman4', duration: 1000  },
              { key: 'snowman5' },
              { key: 'snowman6' },
              { key: 'snowman7' },
              { key: 'snowman' },
          ],
          frameRate: 75,
          repeat: 0
      });

        this.anims.create({
            key: 'left2',
            frames: this.anims.generateFrameNumbers('girl2', { start: 6, end: 9 }),
            frameRate: 9,
            repeat: -1
        });
      
        this.anims.create({
            key: 'turn2',
            frames: [ { key: 'girl2', frame: 0 } ],
            frameRate: 20
        });

        this.anims.create({
          key: 'lturn2',
          frames: [ { key: 'girl2', frame: 5 } ],
          frameRate: 20
      });
      
        this.anims.create({
            key: 'right2',
            frames: this.anims.generateFrameNumbers('girl2', { start: 1, end: 4 }),
            frameRate: 9,
            repeat: -1
        });

        
        //

    //create keys
    gameState2.cursors = this.input.keyboard.createCursorKeys();
    keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
    
    
    function getRandomInt(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max); 
            console.log(Math.floor(Math.random() * (max - min)) + min);
             return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
            
            }
      
    function setSnow(x, y, z) {
      setInterval(function(){ 
       gameState2.emit.setQuantity(getRandomInt(y, z));
        }, x);

       }
 
     setSnow(14000, 1, 7);
        
     if (gameState2.player2.anims.getCurrentKey() === 'right2') {
      console.log('Player is walking')
    }

  },

  createParallaxBackgrounds: function () {

    // Adds in the three background images here and sets their origin
    gameState2.bg1s = this.add.image(0, 0, 'bg1s');
    gameState2.bg2s = this.add.image(0, 0, 'bg2s');
    gameState2.bg3s = this.add.image(0, 0, 'bg3s');
    
    gameState2.bg1s.setOrigin(0, 0);
    gameState2.bg2s.setOrigin(0, 0);
    gameState2.bg3s.setOrigin(0, 0);

    //creates parallax effect
    const game_width = parseFloat(gameState2.bg3s.getBounds().width)
    gameState2.width = game_width;
    const window_width = config.width

    
    const bg1s_width = gameState2.bg1s.getBounds().width
    const bg2s_width = gameState2.bg2s.getBounds().width
    const bg3s_width = gameState2.bg3s.getBounds().width

    gameState2.bgColor .setScrollFactor(0);
    gameState2.bg1s.setScrollFactor((bg1s_width - window_width) / (game_width - window_width));
    gameState2.bg2s.setScrollFactor((bg2s_width - window_width) / (game_width - window_width));
    gameState2.bg3s.setScrollFactor((bg3s_width - window_width) / (game_width - window_width));
},

refreshToTitleScene: function () {
  //  Number of minutes to wait before refreshing
  let timeoutMinutes = 5;

  // URL to Load (can be a relative URL)
  let myURL = 'index.html';

  // Declare timer in global scope so we can access it
  let timer;


      // Simple debounce function so we don't fire the
      // `mousemove` event too often.
      // @url https://davidwalsh.name/javascript-debounce-function
      function debounce(func, wait, immediate) {
        var timeout;
        return function() {
          var context = this, args = arguments;
          var later = function() {
            timeout = null;
            if (!immediate) func.apply(context, args);
          };
          var callNow = immediate && !timeout;
          clearTimeout(timeout);
          timeout = setTimeout(later, wait);
          if (callNow) func.apply(context, args);
        };
      };
        // Starts the timer and specifies the code to run
        // if the timer ever reaches `timeoutMinutes`
        function startTimer(){
            timer = setTimeout(()=>{
                // When the timer runs out...
              //  console.log("Time's up! Redirecting");
                window.location.href = myURL;
            }, timeoutMinutes * 60000);
        }

        // When the mouse moves, restart the timer.
        document.addEventListener('mousemove', debounce(event =>{
           // console.log('Mouse finished moving. Restarting inactivity timer...');
            // Restart the timer
            clearTimeout(timer);
            startTimer();
        }, 1000));

},

  update: function (){
    
    //player animations & movement
        if(gameState2.active){
          if (gameState2.cursors.right.isDown) {
            gameState2.player2.flipX = false;
            gameState2.player2.setVelocityX(gameState2.speed);
            gameState2.player2.anims.play('right2', true);
            if(!footsteps.isPlaying) footsteps.play();
          } else if (gameState2.cursors.left.isDown) {
            gameState2.player2.flipX = false;
            gameState2.player2.setVelocityX(-gameState2.speed);
            gameState2.player2.anims.play('left2', true);
            if(!footsteps.isPlaying) footsteps.play();
          } else if (Phaser.Input.Keyboard.JustUp(gameState2.cursors.left)){
            gameState2.player2.setVelocityX(0);
            gameState2.player2.anims.play('lturn2', true);
            if(footsteps.isPlaying) footsteps.stop(); 
          }else if (Phaser.Input.Keyboard.JustUp(gameState2.cursors.right)) {
            gameState2.player2.setVelocityX(0);
            gameState2.player2.anims.play('turn2', true);
            if(footsteps.isPlaying) footsteps.stop();
          }
      }
      triggerChimes.on('pointerdown', function () {
       // console.log('clicked');
        chimes.play();
      });
    
    //changes scene on space bar
    if(keySpace.isDown){
      //this.input.once('pointerdown', function () {

      console.log('From SnowScene to RainScene');
      
      this.cameras.main.fade(800, 0, 0, 0, false, function(camera, progress){
        if (progress > .9) {
        this.scene.start('rainScene');  
        document.querySelector(".ground").style.backgroundColor = "#53722A";
        document.querySelector(".bg-color").style.backgroundColor = "#95b6c1";      
      }
        });
    }

    //sets different background colors for the two scenes
    this.setWeather(this.weather);
    },

    setWeather: function(weather) {
      const weathers = {
        'rain': {
          'bgColor': 0x95b6c1,
        },
  
        'snow': {
          'bgColor': 0xe5b6ae,
        },

        'fall': {
          'bgColor': 0xD3E9F2,
        },
        'summer': {
          'bgColor': 0x5AC0FF,
        },
      }
    if (weather) {
      let { bgColor} = weathers[weather];
      gameState2.bgColor.fillColor = bgColor;
    }
  }
});

//end snow scene code




var text2;
var string2 = 'Speed:';
var wind;
var triggerChimes;
var chimes;
var footsteps;






