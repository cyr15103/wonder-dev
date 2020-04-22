var SummerScene = new Phaser.Class({

    Extends: Phaser.Scene,
    
    initialize:
    
    function SummerScene ()
    {
        Phaser.Scene.call(this, { key: 'summerScene' });
       
    },
    
    preload: function ()
    {
    },
    
    create: function ()
    {
          game.sound.stopAll();
          gameState.active = true;
          gameState2.active = false;
          gameState.bgColor = this.add.rectangle(0, 0, config.width, config.height, 0x95b6c1).setOrigin(0, 0); 
          this.weather = 'summer';
          this.createParallaxBackgrounds();
          this.refreshToTitleScene();

          this.add.sprite(3150, 535, 'house');
          var triggerCall = this.add.rectangle(3250, 675, 450, 425, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          this.add.image(2550, 525, 'tree4');
          this.add.image(1070, 540, 'stree4').setScale(1.15);
          this.add.image(5400, 550, 'stree4').setScale(1.3);
          var puppy = this.add.sprite(3980, 860, 'pup').setScale(0.56);
          var triggerBark = this.add.rectangle(3980, 840, 200, 175, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          this.add.image(1720, 980, 'bub-mach').setScale(1.1);
          var beehive = this.add.sprite(5500, 670, 'beehive').setInteractive({useHandCursor: true});
          var pinwheels = this.add.sprite(6100, 880, 'pin').setScale(0.6);
          var triggerWheels = this.add.rectangle(6100, 860, 200, 175, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          var butterfly = this.add.sprite(655, 720, 'butterfly').setInteractive({useHandCursor: true});
          butterfly.setScale(0.45);

          this.add.sprite(7200, 530, 'treehouse-b').setScale(1.1);
          var triggerCredits = this.add.rectangle(7200, 400, 800, 600, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          var triggerCredits2 = this.add.rectangle(7200, 750, 300, 800, 0xe5b6ae, 0).setInteractive({useHandCursor: true});

          var homebtn = this.add.image(1835, 80, 'home-btn').setInteractive({useHandCursor: true});
          var fullbtn = this.add.image(1835, 192, 'full-btn').setInteractive({useHandCursor: true});

          triggerChimes = this.add.rectangle(2320, 750, 150, 325, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          var pop = this.sound.add('pop');
          bubbles = this.sound.add('bubbles');
          bubbles.setVolume(0.1);
          chimesB = this.sound.add('chimes3');
          var bark = this.sound.add('bark');
          var bees = this.sound.add('bees');
          bees.setVolume(0.2);
          
          summeramb = this.sound.add('summeramb');
          summeramb.setVolume(0.3);
          summeramb.setLoop(true);
          summeramb.play();
          footstepsG = this.sound.add('footstepsonground2');
          footstepsG.setLoop(true);

         var kitchenAndCall = this.sound.add('kitchen');
         
        triggerCredits.on('pointerdown', () => {
          //console.log('switch');
          this.scene.start("creditSummer");
          document.querySelector(".ground").style.backgroundColor = "#B7AA72";
          document.querySelector(".bg-color").style.backgroundColor = "#B7AA72"; 
        });

        triggerCredits2.on('pointerdown', () => {
          //console.log('switch');
          this.scene.start("creditSummer");
          document.querySelector(".ground").style.backgroundColor = "#B7AA72";
          document.querySelector(".bg-color").style.backgroundColor = "#B7AA72"; 
        });

        butterfly.on('pointerdown', function () {
          //console.log('clicked');
          butterfly.anims.play('flap', true);
        });

        triggerWheels.on('pointerdown', function () {
          //console.log('clicked');
          pinwheels.anims.play('rotate', true);
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

        document.addEventListener('fullscreenchange', (event) => {
          if (document.fullscreenElement) {
            console.log(`Element: ${document.fullscreenElement.id} entered full-screen mode.`);
          } else {
          game.scale.stopFullscreen();
          }
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
          //creates bubbles
          homebtn.setScrollFactor(0);
          fullbtn.setScrollFactor(0);

           gameState.bpart = this.add.particles('bubble');
           gameState.bemit = gameState.bpart.createEmitter({
           x: 1735,
           y: 968,
           lifespan: 3100,
           radial: true,
           frequency: 500,
           angle: { start: 0, end: 100, random:true },  // { start, end, steps }
           speedX: { min:-25, max: -100 },
           speedY: { min: -20, max: 10 },
           scale: { start: 0.27, end: 0.23 },
           quantity: 3,
           });

           gameState.bpart2 = this.add.particles('bubble');
           gameState.bemit2 = gameState.bpart2.createEmitter({
           x: 1700,
           y: 947,
           lifespan: 4000,
           radial: true,
           frequency: 300,
           angle: { start: 0, end: 100, random:true },  // { start, end, steps }
           speedX: { min:-120, max: -200 },
           speedY: { min: -50, max: -10 },
           scale: { start: 0.23, end: 0.19 },
           quantity: 5,
           });
           
           gameState.bpart3 = this.add.particles('bubble');
           gameState.bemit3 = gameState.bpart3.createEmitter({
           x: 1670,
           y: 970,
           lifespan: 5000,
           radial: true,
           frequency: 400,
           angle: { start: 0, end: 100, random:true },  // { start, end, steps }
           speedX: { min:-90, max: -160 },
           speedY: { min: -20, max: 10 },
           scale: { start: 0.19, end: 0.14 },
           quantity: 3,
           });
           
          // gameState.bemit.setScrollFactor(0);
                   
          // adds player
          gameState.player4 = this.physics.add.sprite(250, 830, 'girl4').setScale(0.92);
          
          var speechbubble2 = this.add.sprite(950, 1100, 'speechbubbleb');
          var text1 = this.add.text(700, 1080, 'LYLA: That\'s my doggy Peaches', { font: '30px Comfortaa', fill: '#000' });
          var text2 = this.add.text(800, 1080, 'LYLA: Mmmm, honey', { font: '30px Comfortaa', fill: '#000' });
          var text3 = this.add.text(630, 1080, 'LYLA: No, I don\'t want to go inside yet!', { font: '30px Comfortaa', fill: '#000' });

          speechbubble2.alpha = 0;
          text1.alpha = 0;
          text2.alpha = 0;
          text3.alpha = 0;
          speechbubble2.setScrollFactor(0);
          text1.setScrollFactor(0);
          text2.setScrollFactor(0);
          text3.setScrollFactor(0);
        
          triggerBark.on('pointerdown', function () {
            //console.log('clicked');
            if (speechbubble2.alpha === 0 && text1.alpha === 0 && text3.alpha === 0) {
              pop.play();
              speechbubble2.alpha = 1;
              text1.alpha = 1;  
              setTimeout(function(){ speechbubble2.alpha = 0;   text1.alpha = 0}, 4000);
            }
            puppy.anims.play('bark', true);
            bark.play();
          });

          beehive.on('pointerdown', function () {
            //console.log('clicked');
            bees.play();
            beehive.anims.play('hive', true);
            if (speechbubble2.alpha === 0 && text2.alpha === 0 && text3.alpha === 0) {
              pop.play();
              speechbubble2.alpha = 1;
              text2.alpha = 1;  
              setTimeout(function(){ speechbubble2.alpha = 0;   text2.alpha = 0}, 3000);
            }
          });

          triggerCall.on('pointerdown', function () {
            kitchenAndCall.play();
            //if (speechbubble2.alpha === 0 && text1.alpha === 0 && text2.alpha === 0) {
              setTimeout(function(){pop.play(); speechbubble2.alpha = 1;   text3.alpha = 1}, 11000);
              setTimeout(function(){ speechbubble2.alpha = 0;   text3.alpha = 0}, 15000);
            //}
          });

          //sets cameras
          this.cameras.main.setBounds(0, 0, gameState.width, gameState.height)
          this.physics.world.setBounds(0, 0, gameState.width, 1160);
          this.cameras.main.startFollow(gameState.player4, true, 0.5, 0.5);
          this.physics.add.collider(gameState.player4, gameState.platforms);
  
          gameState.player4.setBounce(0.2);
          gameState.player4.setCollideWorldBounds(true);
        
          this.anims.create({
            key: 'lightup4',
            frames: [
                { key: 'house' },
                { key: 'houselit', duration: 600 },
                { key: 'house'}
            ],
            frameRate: 5,
            repeat: 0
        });
        this.anims.create({
          key: 'rotate',
          frames: [
              { key: 'pin' },
              { key: 'pin2' },
              { key: 'pin3' },
              { key: 'pin4' },
              { key: 'pin5' },
              { key: 'pin6' },
              { key: 'pin7' },
              { key: 'pin8' },
              { key: 'pin2' },
              { key: 'pin3' },
              { key: 'pin4' },
              { key: 'pin5' },
              { key: 'pin6' },
              { key: 'pin7' },
              { key: 'pin8' },
              { key: 'pin2' },
              { key: 'pin3' },
              { key: 'pin4' },
              { key: 'pin5' },
              { key: 'pin6' },
              { key: 'pin7' },
              { key: 'pin8' },
              { key: 'pin2' },
              { key: 'pin3' },
              { key: 'pin4' },
              { key: 'pin5' },
              { key: 'pin6' },
              { key: 'pin7' },
              { key: 'pin8' },
          ],
          frameRate: 24,
          repeat: 0
      });
      this.anims.create({
        key: 'bark',
        frames: [
            { key: 'pup' },
            { key: 'pup2' },
            { key: 'pup3' },
            { key: 'pup4' },
            { key: 'pup5', duration: 100 },
            { key: 'pup6' },
            { key: 'pup7' },
            { key: 'pup8' },
            { key: 'pup9' },
            { key: 'pup' }
        ],
        frameRate: 10,
        repeat: 1
    });

    this.anims.create({
      key: 'flap',
      frames: [
          { key: 'butterfly' },
          { key: 'butterfly2' },
          { key: 'butterfly3' },
          { key: 'butterfly4' , duration: 50},
          { key: 'butterfly5'},
          { key: 'butterfly6' },
          { key: 'butterfly' },
      ],
      frameRate: 10,
      repeat: 4
  });

  
        this.anims.create({
          key: 'hive',
          frames: [
              { key: 'beehive' },
              { key: 'beehive2', duration: 60 },
              { key: 'beehive3', duration: 80 },
              { key: 'beehive'}
          ],
          frameRate: 8,
          repeat: 4
      });


          this.anims.create({
            key: 'left4',
            frames: this.anims.generateFrameNumbers('girl4', { start: 6, end: 9 }),
            frameRate: 6,
            repeat: -1
        });
      
        this.anims.create({
            key: 'turn4',
            frames: [ { key: 'girl4', frame: 0 } ],
            frameRate: 20
        });

        this.anims.create({
          key: 'lturn4',
          frames: [ { key: 'girl4', frame: 5 } ],
          frameRate: 20
      });
      
        this.anims.create({
            key: 'right4',
            frames: this.anims.generateFrameNumbers('girl4', { start: 1, end: 4 }),
            frameRate: 6,
            repeat: -1
        });

        //creates keys
        gameState.cursors = this.input.keyboard.createCursorKeys();
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
            
              },
  
      createParallaxBackgrounds: function () {
          // Adds in the three background images here and sets their origin
          gameState.bg1b = this.add.image(0, 0, 'bg1-b');
          gameState.bg2b = this.add.image(0, 0, 'bg2-b');
          gameState.bg3b = this.add.image(0, 0, 'bg3-b');
          
          gameState.bg1b.setOrigin(0, 0);
          gameState.bg2b.setOrigin(0, 0);
          gameState.bg3b.setOrigin(0, 0);
  
          //creates parallax effect
          const game_width = parseFloat(gameState.bg3b.getBounds().width)
          gameState.width = game_width;
          const window_width = config.width
      
          const bg1b_width = gameState.bg1b.getBounds().width
          const bg2b_width = gameState.bg2b.getBounds().width
          const bg3b_width = gameState.bg3b.getBounds().width
      
          gameState.bgColor .setScrollFactor(0);
          gameState.bg1b.setScrollFactor((bg1b_width - window_width) / (game_width - window_width));
          gameState.bg2b.setScrollFactor((bg2b_width - window_width) / (game_width - window_width));
          gameState.bg3b.setScrollFactor((bg3b_width - window_width) / (game_width - window_width));
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
      
    update: function ()
    //sets player animations and movement
        {
          if(gameState.active){
            if (gameState.cursors.right.isDown) {
              gameState.player4.flipX = false;
              gameState.player4.setVelocityX(gameState.speed);
              gameState.player4.anims.play('right4', true);
              if(!footstepsG.isPlaying) footstepsG.play();
            } else if (gameState.cursors.left.isDown) {
              gameState.player4.flipX = false;
              gameState.player4.setVelocityX(-gameState.speed);
              gameState.player4.anims.play('left4', true);
              if(!footstepsG.isPlaying) footstepsG.play();
            } else if (Phaser.Input.Keyboard.JustUp(gameState.cursors.left)){
              gameState.player4.setVelocityX(0);
              gameState.player4.anims.play('lturn4', true);
              if(footstepsG.isPlaying) footstepsG.stop(); 
            }else if (Phaser.Input.Keyboard.JustUp(gameState.cursors.right)) {
              gameState.player4.setVelocityX(0);
              gameState.player4.anims.play('turn4', true);
              if(footstepsG.isPlaying) footstepsG.stop(); 
            }
        }
          if (this.cameras.main.worldView.contains(1720, 980)){

              if(!bubbles.isPlaying){
                bubbles.play();
              }
            } 
          else{
            // bubbles.stop();
            bubbles.pause();
          }
       
       triggerChimes.on('pointerdown', function () {
          // console.log('clicked');
           chimesB.play();
         });
          
      //changes scene on spacebar
        if(keySpace.isDown){
          //this.input.once('pointerdown', function () {
  
          console.log('From SunScene to LeafScene');
          this.cameras.main.fade(800, 0, 0, 0, false, function(camera, progress){
            if (progress > .9) {
            this.scene.start('leafScene')  
            document.querySelector(".ground").style.backgroundColor = "#93632F";
            document.querySelector(".bg-color").style.backgroundColor = "#D3E9F2";  
          }
            });
        }
  
      //sets different background colors or the two scenes
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
          let { bgColor } = weathers[weather];
          gameState.bgColor.fillColor = bgColor;
          // Update gameState.bgColor.fillColor here!
          
        }
        
      }
    });
    
    var summeramb;
    var bubbles;
    var triggerChimes;
    var chimesB;
    var footstepsG;