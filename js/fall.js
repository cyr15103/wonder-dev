//start fall scene

var LeafScene = new Phaser.Class({
  
    Extends: Phaser.Scene,
    
    initialize:
    
    function LeafScene ()
    {
        Phaser.Scene.call(this, { key: 'leafScene' });
    },
    
    preload: function ()
    {
        /*this.load.image('leaf', 'images/leaf.png');
        this.load.spritesheet('girl3', 'images/sprite-sheet-3.png', { frameWidth: 270, frameHeight: 360 });
        this.load.image('bg1f', 'images/bg-1-f.png');
        this.load.image('bg2f', 'images/bg-2-f.png');
        this.load.image('bg3f', 'images/bg-3-f.png');*/
    },
    
    create: function (){
          game.sound.stopAll();
          gameState.active = false;
          gameState2.active = true;

          gameState2.bgColor = this.add.rectangle(0, 0, config.width, config.height, 0xC0F9F7).setOrigin(0, 0);
          this.weather = 'fall';
          this.createParallaxBackgrounds();
          this.refreshToTitleScene();

          this.add.sprite(3150, 535, 'fallhouse');
          var pump = this.add.sprite(3520, 840, 'pump').setScale(1.3);
          var kidpump = this.add.sprite(3440, 890, 'kidpump').setInteractive({useHandCursor: true});
          kidpump.setScale(1.3);
          var triggerGhosts = this.add.rectangle(4850, 800, 100, 350, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          var triggerlightup2 = this.add.rectangle(3250, 615, 450, 325, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          var triggerleafpile = this.add.rectangle(1600, 900, 500, 300, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          var triggerTreeSquirrel = this.add.rectangle(1070, 500, 400, 400, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          this.add.image(2550, 525, 'tree3');
          var squirrel = this.add.sprite(1054, 578, 'squirrel').setScale(1.1);
          this.add.sprite(1070, 540, 'stree3').setScale(1.15);
          this.add.image(5400, 550, 'stree3').setScale(1.3);
          var acornSquirrel = this.add.sprite(2780, 900, 'squirrelA').setInteractive({useHandCursor: true});
          acornSquirrel.setScale(0.85);
        
       
          var foxes = this.add.sprite(6350, 720, 'foxes').setInteractive({useHandCursor: true});
          foxes.setScale(0.9);

          this.add.sprite(7200, 530, 'treehouse-f').setScale(1.1);
          var triggerCredits = this.add.rectangle(7200, 400, 800, 600, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          var triggerCredits2 = this.add.rectangle(7200, 750, 300, 800, 0xe5b6ae, 0).setInteractive({useHandCursor: true});

          var homebtn = this.add.image(1835, 80, 'home-btn').setInteractive({useHandCursor: true});
          fullbtn = this.add.image(1835, 192, 'full-btn').setInteractive({useHandCursor: true});
          triggerChimes = this.add.rectangle(2320, 750, 150, 325, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          chimesF = this.sound.add('chimes2');
          fallamb = this.sound.add('fallamb');
          fallamb.setLoop(true);
          fallamb.setVolume(0.6);
          fallamb.play();
          footstepsL = this.sound.add('footstepsinleaves');
          footstepsL.setLoop(true);
          footstepsL.setVolume(0.5);
          var squirrelSquealing = this.sound.add('squealing'); 

              //house lights up on click
        triggerlightup2.on('pointerdown', function () {
          //console.log('clicked');
          pump.anims.play('lightup3', true);
        });

        triggerCredits.on('pointerdown', () => {
          //console.log('switch');
          this.scene.start("creditFall");
          document.querySelector(".ground").style.backgroundColor = "#B7AA72";
          document.querySelector(".bg-color").style.backgroundColor = "#B7AA72"; 
        });

        triggerCredits2.on('pointerdown', () => {
          //console.log('switch');
          this.scene.start("creditFall");
          document.querySelector(".ground").style.backgroundColor = "#B7AA72";
          document.querySelector(".bg-color").style.backgroundColor = "#B7AA72"; 
        });


        foxes.on('pointerdown', () => {
         foxes.anims.play('foxturn', true);
        });

        acornSquirrel.on('pointerdown', () => {
          acornSquirrel.anims.play('dropped', true);
          squirrelSquealing.play();
         });

            homebtn.on('pointerdown', () => {
          this.cameras.main.fade(800, 0, 0, 0, false, function(camera, progress){
            if (progress > .9) {
              game.sound.stopAll();
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
 
          //creates falling leaves
          gameState2.lpart = this.add.particles('leaf');
          gameState2.lemit = gameState2.lpart.createEmitter({
          x: 1000,
          y: 400,
          lifespan: 20000,
          radial: true,
          frequency: 5000,
          speedX: { min:-100, max: 120 },
          speedY: { min: 60, max: 90 },
          scale: { start: 0.9, end: 1.1 },
          quantity: 1,
         rotate:{start:90, end:260},
          });

         //creates falling leaves
         gameState2.lpart = this.add.particles('leaf');
         gameState2.lemit = gameState2.lpart.createEmitter({
         x: 2500,
         y: 350,
         lifespan: 20000,
         radial: true,
         frequency: 5000,
         speedX: { min:-100, max: 120 },
         speedY: { min: 60, max: 90 },
         scale: { start: 0.9, end: 1.1 },
         quantity: 1,
        rotate:{start:90, end:260},
         });
         
         //creates falling leaves
         gameState2.lpart = this.add.particles('leaf');
         gameState2.lemit = gameState2.lpart.createEmitter({
         x: 5350,
         y: 400,
         lifespan: 20000,
         radial: true,
         frequency: 5000,
         speedX: { min:-100, max: 120 },
         speedY: { min: 60, max: 90 },
         scale: { start: 0.9, end: 1.1 },
         quantity: 1,
        rotate:{start:90, end:260},
         });
         
          
          this.add.image(2550, 525, 'top');
          this.add.image(1070, 540, 'smTop').setScale(1.15);
          this.add.image(5400, 550, 'smTop').setScale(1.3);
        //  gameState2.lpart.setScrollFactor(0.2);
          homebtn.setScrollFactor(0);
          fullbtn.setScrollFactor(0);
          // adds player
          gameState2.player3 = this.physics.add.sprite(250, 830, 'girl3').setScale(0.92);

          var speechbubble3 = this.add.sprite(950, 1100, 'speechbubblef');
          var text1 = this.add.text(585, 1080, 'LYLA: Mom told me not to jump in the leaves...', { font: '30px Comfortaa', fill: '#fff' });
          var text2 = this.add.text(585, 1080, 'LYLA: What should I be for Halloween this year?', { font: '30px Comfortaa', fill: '#fff' });
          var text3 = this.add.text(630, 1080, 'LYLA: You don\'t have to hide Mr. Squirrel!', { font: '30px Comfortaa', fill: '#fff' });
          var text4 = this.add.text(650, 1080, 'LYLA: That\'s the pumpkin I made!', { font: '30px Comfortaa', fill: '#fff' });

          speechbubble3.alpha = 0;
          text1.alpha = 0;
          text2.alpha = 0;
          text3.alpha = 0;
          text4.alpha = 0;
          speechbubble3.setScrollFactor(0);
          text1.setScrollFactor(0);
          text2.setScrollFactor(0);
          text3.setScrollFactor(0);
          text4.setScrollFactor(0);
        
          triggerleafpile.on('pointerdown', function () {
            speechbubble3.alpha = 1;
            text1.alpha = 1;  
            setTimeout(function(){ speechbubble3.alpha = 0;   text1.alpha = 0}, 5000);
          });

          triggerGhosts.on('pointerdown', function () {
            speechbubble3.alpha = 1;
            text2.alpha = 1;  
            setTimeout(function(){ speechbubble3.alpha = 0;   text2.alpha = 0}, 5000);
          });

          triggerTreeSquirrel.on('pointerdown', () => {
            squirrel.anims.play('hideintree', true);
            speechbubble3.alpha = 1;
            text3.alpha = 1;  
            setTimeout(function(){ speechbubble3.alpha = 0;   text3.alpha = 0}, 4000);
           });  

           kidpump.on('pointerdown', () => {
            speechbubble3.alpha = 1;
            text4.alpha = 1;  
            setTimeout(function(){ speechbubble3.alpha = 0;   text4.alpha = 0}, 2700);
           });  
          
          //sets cameras
          this.cameras.main.setBounds(0, 0, gameState2.width, gameState2.height)
          this.physics.world.setBounds(0, 0, gameState2.width, 1160);
          this.cameras.main.startFollow(gameState2.player3, true, 0.5, 0.5);
          this.physics.add.collider(gameState2.player3, gameState2.platforms);
      
         // gameState2.player3.setBounce(0.2);
          gameState2.player3.setCollideWorldBounds(true);
  
          //add animations
          
          this.anims.create({
            key: 'dropped',
            frames: [
                { key: 'squirrelA'  //, duration: 300
               },
                { key: 'squirrelA2'// , duration: 500
               },
                { key: 'squirrelA3'// 
              },
                { key: 'squirrelA4' },
                { key: 'squirrelA5' //, duration: 300 
              },
                { key: 'squirrelA6' //, duration: 300
              },
                { key: 'squirrelA7' },
            ],
            frameRate: 5,
            repeat: 0
        });

        this.anims.create({
          key: 'hideintree',
          frames: [
              { key: 'squirrel' },
              { key: 'squirrel2'  },
             // { key: 'squirrel3' },
              { key: 'squirrel4' , duration: 3000},
             // { key: 'squirrel3' },
              { key: 'squirrel2'  },
              { key: 'squirrel' },
          ],
          frameRate: 15,
          repeat: 0
      });

          this.anims.create({
            key: 'foxturn',
            frames: [
                { key: 'foxes'  ,duration: 300 },
                { key: 'foxes2' , duration: 500 },
                { key: 'foxes3' },
                { key: 'foxes4' },
                { key: 'foxes5' , duration: 300 },
                { key: 'foxes6' , duration: 300},
                { key: 'foxes7' },
                { key: 'foxes8'},
                { key: 'foxes'}
            ],
            frameRate: 5,
            repeat: 0
        });

        this.anims.create({
                key: 'lightup3',
                frames: [
                    { key: 'pump' },
                    { key: 'litpump', duration: 600 },
                    { key: 'pump'}
                ],
                frameRate: 5,
                repeat: 0
            });

                  
          this.anims.create({
              key: 'left3',
              frames: this.anims.generateFrameNumbers('girl3', { start: 6, end: 9 }),
              frameRate: 9,
              repeat: -1
          });
        
          this.anims.create({
              key: 'turn3',
              frames: [ { key: 'girl3', frame: 0 } ],
              frameRate: 20
          });
  
          this.anims.create({
            key: 'lturn3',
            frames: [ { key: 'girl3', frame: 5 } ],
            frameRate: 20
        });
        
          this.anims.create({
              key: 'right3',
              frames: this.anims.generateFrameNumbers('girl3', { start: 1, end: 4 }),
              frameRate: 9,
              repeat: -1
          });
          //
  
      //create keys
      gameState2.cursors = this.input.keyboard.createCursorKeys();
      keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
      keySpace2 = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ESC);
      
        
    },
  
    createParallaxBackgrounds: function () {
  
      // Adds in the three background images here and sets their origin
      gameState2.bg1f = this.add.image(0, 0, 'bg1f');
      gameState2.bg2f = this.add.image(0, 0, 'bg2f');
      gameState2.bg3f = this.add.image(0, 0, 'bg3f');
      
      gameState2.bg1f.setOrigin(0, 0);
      gameState2.bg2f.setOrigin(0, 0);
      gameState2.bg3f.setOrigin(0, 0);
  
      //creates parallax effect
      const game_width = parseFloat(gameState2.bg3f.getBounds().width)
      gameState2.width = game_width;
      const window_width = config.width
  
      
      const bg1f_width = gameState2.bg1f.getBounds().width
      const bg2f_width = gameState2.bg2f.getBounds().width
      const bg3f_width = gameState2.bg3f.getBounds().width
  
      gameState2.bgColor .setScrollFactor(0);
      gameState2.bg1f.setScrollFactor((bg1f_width - window_width) / (game_width - window_width));
      gameState2.bg2f.setScrollFactor((bg2f_width - window_width) / (game_width - window_width));
      gameState2.bg3f.setScrollFactor((bg3f_width - window_width) / (game_width - window_width));

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
                  //console.log("Time's up! Redirecting");
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
              gameState2.player3.flipX = false;
              gameState2.player3.setVelocityX(gameState2.speed);
              gameState2.player3.anims.play('right3', true);
              if(!footstepsL.isPlaying) footstepsL.play();
            } else if (gameState2.cursors.left.isDown) {
              gameState2.player3.flipX = false;
              gameState2.player3.setVelocityX(-gameState2.speed);
              gameState2.player3.anims.play('left3', true);
              if(!footstepsL.isPlaying) footstepsL.play();
            } else if (Phaser.Input.Keyboard.JustUp(gameState2.cursors.left)){
              gameState2.player3.setVelocityX(0);
              gameState2.player3.anims.play('lturn3', true);
              if(footstepsL.isPlaying) footstepsL.stop(); 
            }else if (Phaser.Input.Keyboard.JustUp(gameState2.cursors.right)) {
              gameState2.player3.setVelocityX(0);
              gameState2.player3.anims.play('turn3', true);
              if(footstepsL.isPlaying) footstepsL.stop(); 
            }
        }

        triggerChimes.on('pointerdown', function () {
          // console.log('clicked');
           chimesF.play();
         });
        
         //changes scene on space bar
      if(keySpace.isDown){
        //this.input.once('pointerdown', function () {
  
        console.log('From LeafScene to SnowScene');
  
        this.cameras.main.fade(800, 0, 0, 0, false, function(camera, progress){
          if (progress > .9) {
            this.scene.start('snowScene')
            document.querySelector(".ground").style.backgroundColor = "#EDDED9";
            document.querySelector(".bg-color").style.backgroundColor = "#E5B6AE"; 
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
  
  //end fall scene code
  
  var fallamb;
  var triggerChimes;
  var chimesF;
  var fullbtn;
  var footstepsL;
  
  
  //
  //
  //
  //
  //
  
  