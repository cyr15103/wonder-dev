var RainScene = new Phaser.Class({

    Extends: Phaser.Scene,
    
    initialize:
    
    function RainScene ()
    {
        Phaser.Scene.call(this, { key: 'rainScene' });
       
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
          this.weather = 'rain';
          this.createParallaxBackgrounds();
          this.refreshToTitleScene();
  
          var house = this.add.sprite(3150, 535, 'house');
          
          var triggerlightup4 = this.add.rectangle(3250, 675, 450, 425, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          triggerChimes = this.add.rectangle(2320, 750, 150, 325, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          var triggerFrog = this.add.rectangle(3500, 1000, 300, 100, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          var triggerPlant = this.add.rectangle(570, 1000, 200, 150, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          var triggerSpeech = this.add.rectangle(1600, 900, 250, 200, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          
          this.add.image(2550, 550, 'tree');
          this.add.image(1070, 540, 'stree').setScale(1.15);
          this.add.image(5400, 550, 'stree').setScale(1.3);

          this.add.sprite(7200, 530, 'treehouse').setScale(1.1);
          var triggerCredits = this.add.rectangle(7200, 400, 800, 600, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          var triggerCredits2 = this.add.rectangle(7200, 750, 300, 800, 0xe5b6ae, 0).setInteractive({useHandCursor: true});
          var hummingbird = this.add.sprite(5450, 746, 'hummingbird').setInteractive({useHandCursor: true});
          hummingbird.setScale(0.71);
          var frog = this.add.sprite(3500, 1000, 'frog3').setScale(1.4);
          var ducks = this.add.sprite(6270, 950, 'ducks').setInteractive({useHandCursor: true});
          var homebtn = this.add.image(1835, 80, 'home-btn').setInteractive({useHandCursor: true});
          var fullbtn = this.add.image(1835, 192, 'full-btn').setInteractive({useHandCursor: true});
          var cardinal = this.add.sprite(1145, 560, 'bird').setInteractive({useHandCursor: true});
          cardinal.setScale(0.6);
          var plant = this.add.sprite(565, 913, 'plant');
          chimesR = this.sound.add('chimes4');
          quack = this.sound.add('quack');
          var splash = this.sound.add('splash');
          raining = this.sound.add('raining');
          var on = this.sound.add('on');
          raining.setLoop(true);
          raining.setVolume(0.5);
          raining.play();
          footstepsM = this.sound.add('footstepsinmud');
          footstepsM.setLoop(true);

        triggerlightup4.on('pointerdown', function () {
            on.play();
            house.anims.play('lightup', true);
            //window.location.href = 'index.html';
        });

        triggerCredits.on('pointerdown', () => {
          //console.log('switch');
          this.scene.start("creditSpring");
          document.querySelector(".ground").style.backgroundColor = "#B7AA72";
          document.querySelector(".bg-color").style.backgroundColor = "#B7AA72"; 
        });

        triggerCredits2.on('pointerdown', () => {
          //console.log('switch');
          this.scene.start("creditSpring");
          document.querySelector(".ground").style.backgroundColor = "#B7AA72";
          document.querySelector(".bg-color").style.backgroundColor = "#B7AA72"; 
        });

        cardinal.on('pointerdown', function () {
           cardinal.anims.play('cardinalmove', true);
         });

         hummingbird.on('pointerdown', function () {
          hummingbird.anims.play('birdjump', true);
        });

         triggerFrog.on('pointerdown', function () {
           splash.play();
           frog.anims.play('appear', true);
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
          if (!game.scale.isFullscreen) {
           game.scale.startFullscreen();
          // game.scale.resize(1920, 1200);
            // On stop fulll screen
        } else { 
            game.scale.stopFullscreen();
            //game.scale.resize(1100, 700);
            
           // game.config.parentElement.style.backgroundColor = "#20567e";
            // On start fulll screen
        }
        });
        //creates rain
        gameState.particles = this.add.particles('raindrop');
        gameState.emitter = gameState.particles.createEmitter({
        x: {min: 0, max: config.width * 2 },
        y: -20,
        lifespan: 2200,
        speedX: { min:-220, max: -170 },
        speedY: { min: 500, max: 700 },
        scale: { start: 0.7, end: 0.2 },
        quantity: 1,
          });
        
          gameState.emitter.setScrollFactor(0);
          homebtn.setScrollFactor(0);
          fullbtn.setScrollFactor(0);
          
         
          // adds player
          gameState.player = this.physics.add.sprite(250, 825, 'girl').setScale(0.9);
    
          speechbubble = this.add.sprite(950, 1100, 'speechbubble');
          text1 = this.add.text(550, 1080, 'LYLA: Did you know daffodils are my favorite flower?', { font: '30px Comfortaa', fill: '#fff' });
          text2 = this.add.text(600, 1080, 'LYLA: That\'s Daisy and her new baby Puddle!', { font: '30px Comfortaa', fill: '#fff' });
          text3 = this.add.text(650, 1080, 'LYLA: My blueberry bush is growing!', { font: '30px Comfortaa', fill: '#fff' });
          speechbubble.alpha = 0;
          text1.alpha = 0;
          text2.alpha = 0;
          text3.alpha = 0;
          speechbubble.setScrollFactor(0);
          text1.setScrollFactor(0);
          text2.setScrollFactor(0);
          text3.setScrollFactor(0);
        
        triggerSpeech.on('pointerdown', function () {
          if (speechbubble.alpha === 0 && text2.alpha === 0 && text3.alpha === 0) {
              speechbubble.alpha = 1;
              text1.alpha = 1;  
              setTimeout(function(){ speechbubble.alpha = 0;   text1.alpha = 0}, 5000);
            }
          });

        ducks.on('pointerdown', function () {
          // console.log('clicked');
          quack.play();
          ducks.anims.play('flapandmove', true);
            if (speechbubble.alpha === 0 && text1.alpha === 0 && text3.alpha === 0) {
              speechbubble.alpha = 1;
              text2.alpha = 1;  
              setTimeout(function(){ speechbubble.alpha = 0;   text2.alpha = 0}, 4000);
            }
         });

        triggerPlant.on('pointerdown', function () {
          plant.anims.play('grow', true);
            if (speechbubble.alpha === 0 && text1.alpha === 0 && text2.alpha === 0) {
              speechbubble.alpha = 1;
              text3.alpha = 1;  
              setTimeout(function(){ speechbubble.alpha = 0;   text3.alpha = 0}, 3000);
            }
        });

  
          //sets cameras
          this.cameras.main.setBounds(0, 0, gameState.width, gameState.height)
          this.physics.world.setBounds(0, 0, gameState.width, 1150);
          this.cameras.main.startFollow(gameState.player, true, 0.5, 0.5);
          this.physics.add.collider(gameState.player, gameState.platforms);
  
          //set text
         // text = this.add.text(975, 25, '', { font: '20px Verdana', fill: '#595B5B' });
         // text.setScrollFactor(0);
      
          gameState.player.setBounce(0.2);
          gameState.player.setCollideWorldBounds(true);
        
          //creates animations
          this.anims.create({
            key: 'lightup',
            frames: [
                { key: 'house' },
                { key: 'houselit', duration: 800 },
                { key: 'house'}
            ],
            frameRate: 20,
            repeat: 0
        });

        this.anims.create({
          key: 'flapandmove',
          frames: [
              { key: 'ducks' },
              { key: 'ducks2', duration: 600},
              { key: 'ducks' },
              { key: 'ducks3' },
              { key: 'ducks4', duration: 600 },
              { key: 'ducks5' },
              { key: 'ducks6' },
              { key: 'ducks7' },
              { key: 'ducks8' },
              { key: 'ducks9' },
              { key: 'ducks10' },
              { key: 'ducks11' },
              { key: 'ducks12' },
              { key: 'ducks' }
          ],
          frameRate: 16,
          repeat: 0
      });

          this.anims.create({
            key: 'cardinalmove',
            frames: [
                { key: 'bird' },
                { key: 'bird1'},
                { key: 'bird2' },
                { key: 'bird3' },
                { key: 'bird4' },
                { key: 'bird5' },
                { key: 'bird6' },
                { key: 'bird7' },
                { key: 'bird8' },
                { key: 'bird9', duration: 600 },
                { key: 'bird10' },
                { key: 'bird11' },
                { key: 'bird12' },
                { key: 'bird13' },
                { key: 'bird14' },
                { key: 'bird15' },
                { key: 'bird16' },
                { key: 'bird' },
            ],
            frameRate: 24,
            repeat: 0
        });

        this.anims.create({
          key: 'birdjump',
          frames: [
              { key: 'hummingbird' , duration: 400 },
              { key: 'hummingbird2'},
              { key: 'hummingbird3'},
              { key: 'hummingbird4' },
              { key: 'hummingbird5' },
              { key: 'hummingbird6' },
              { key: 'hummingbird7' },
              { key: 'hummingbird8' },
              { key: 'hummingbird9'},
              { key: 'hummingbird10' },
              { key: 'hummingbird11'},
              { key: 'hummingbird12' , duration: 1200},
              { key: 'hummingbird13' },
              { key: 'hummingbird14' },
              { key: 'hummingbird15', duration: 400 },
              { key: 'hummingbird' },
          ],
          frameRate: 24,
          repeat: 0
      });

        this.anims.create({
          key: 'appear',
          frames: [
              { key: 'frog3'},
              { key: 'frog2'},
              { key: 'frog' , duration: 900},
              { key: 'frog2'},
              { key: 'frog3'},
          ],
          frameRate: 10,
          repeat: 0
      });
          this.anims.create({
            key: 'grow',
            frames: [
                { key: 'plant'},
                { key: 'plant2'},
                { key: 'plant3' , duration: 1200},
                { key: 'plant2'},
                { key: 'plant'},
            ],
            frameRate: 10,
            repeat: 0
        });

          this.anims.create({
            key: 'left',
            frames: this.anims.generateFrameNumbers('girl', { start: 12, end: 15 }),
            frameRate: 8,
            repeat: -1
          })
          
          this.anims.create({
            key: 'idle',
            frames: this.anims.generateFrameNumbers('girl', { start: 0, end: 3 }),
            frameRate: 7,
            repeat: -1
          })
  
          this.anims.create({
            key: 'lidle',
            frames: this.anims.generateFrameNumbers('girl', { start: 8, end: 11 }),
            frameRate: 7,
            repeat: -1
        });
          
          this.anims.create({
            key: 'right',
            frames: this.anims.generateFrameNumbers('girl', { start: 4, end: 7}),
            frameRate: 8,
            repeat: -1
            })
            gameState.player.anims.play('idle', true);
        //creates keys
        gameState.cursors = this.input.keyboard.createCursorKeys();
        keySpace = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE);
             
        
        //interval

      function getRandomInt(min, max) {
              min = Math.ceil(min);
              max = Math.floor(max); 
            console.log(Math.floor(Math.random() * (max - min)) + min);
             return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
            
            }

        function setRain(x, y, z) {
           setInterval(function(){ 
            
            gameState.emitter.setQuantity(getRandomInt(y, z));
             }, x);

            }
        setRain(10000, 7, 14);
        setRain(20000, 1, 8);    
            },
             
      
      createParallaxBackgrounds: function () {
          // Adds in the three background images here and sets their origin
          gameState.bg1 = this.add.image(0, 0, 'bg1');
          gameState.bg2 = this.add.image(0, 0, 'bg2');
          gameState.bg3 = this.add.image(0, 0, 'bg3');
          
          gameState.bg1.setOrigin(0, 0);
          gameState.bg2.setOrigin(0, 0);
          gameState.bg3.setOrigin(0, 0);
  
          //creates parallax effect
          const game_width = parseFloat(gameState.bg3.getBounds().width)
          gameState.width = game_width;
          const window_width = config.width
      
          const bg1_width = gameState.bg1.getBounds().width
          const bg2_width = gameState.bg2.getBounds().width
          const bg3_width = gameState.bg3.getBounds().width
      
          gameState.bgColor .setScrollFactor(0);
          gameState.bg1.setScrollFactor((bg1_width - window_width) / (game_width - window_width));
          gameState.bg2.setScrollFactor((bg2_width - window_width) / (game_width - window_width));
          gameState.bg3.setScrollFactor((bg3_width - window_width) / (game_width - window_width));
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
              gameState.player.flipX = false;
              gameState.player.setVelocityX(gameState.speed);
              gameState.player.anims.play('right', true);
              if(!footstepsM.isPlaying) footstepsM.play();
            } else if (gameState.cursors.left.isDown) {
              gameState.player.flipX = false;
              gameState.player.setVelocityX(-gameState.speed);
              gameState.player.anims.play('left', true);
              if(!footstepsM.isPlaying) footstepsM.play();
            } else if (Phaser.Input.Keyboard.JustUp(gameState.cursors.left)){
              gameState.player.setVelocityX(0);
              gameState.player.anims.play('lidle', true);
              if(footstepsM.isPlaying) footstepsM.stop();
            }else if (Phaser.Input.Keyboard.JustUp(gameState.cursors.right)) {
              gameState.player.setVelocityX(0);
              gameState.player.anims.play('idle', true);
              if(footstepsM.isPlaying) footstepsM.stop(); 
            }
           
        }

            /* speech1.on('animationcomplete-hide', function() {
              console.log('complete');
              gameState.player.anims.play();
          });

          speech1.on('animationstart-hide', function() {
            console.log('start');
            gameState.player.anims.stop();
        });*/

        triggerChimes.on('pointerdown', function () {
          console.log('clicked');
          chimesR.play();
        });
   
       // playerx = gameState.player.x;
       // console.log(playerx);
       //speeds up the rain on the up arrow
        /* if(gameState.active){
        
          if(gameState.emitter.quantity.propertyValue === 1){
           
              if(Phaser.Input.Keyboard.JustUp(gameState.cursors.up)) {
                 gameState.emitter.setQuantity(2);
                console.log(gameState.emitter.quantity.propertyValue);
              }
    
          } else if (gameState.emitter.quantity.propertyValue === 2){
    
            if(Phaser.Input.Keyboard.JustUp(gameState.cursors.up)) {
              gameState.emitter.setQuantity(3);
             console.log(gameState.emitter.quantity.propertyValue);
            }
          }
          
         else if (gameState.emitter.quantity.propertyValue === 3){
    
          if(Phaser.Input.Keyboard.JustUp(gameState.cursors.up)) {
            gameState.emitter.setQuantity(4);
           console.log(gameState.emitter.quantity.propertyValue);
          }
        } else if (gameState.emitter.quantity.propertyValue === 4){
    
          if(Phaser.Input.Keyboard.JustUp(gameState.cursors.up)) {
            gameState.emitter.setQuantity(5);
           console.log(gameState.emitter.quantity.propertyValue);
          }
      } else if (gameState.emitter.quantity.propertyValue === 5){
    
        if(Phaser.Input.Keyboard.JustUp(gameState.cursors.up)) {
          gameState.emitter.setQuantity(6);
         console.log(gameState.emitter.quantity.propertyValue);
        }
      }
      else if (gameState.emitter.quantity.propertyValue === 6){
    
        if(Phaser.Input.Keyboard.JustUp(gameState.cursors.up)) {
          gameState.emitter.setQuantity(7);
         console.log(gameState.emitter.quantity.propertyValue);
        }
      }
      else if (gameState.emitter.quantity.propertyValue === 7  && gameState.emitter.speedY.propertyValue.max === 600 && gameState.emitter.speedY.propertyValue.min=== 400){
    
        if(Phaser.Input.Keyboard.JustUp(gameState.cursors.up)) {
          gameState.emitter.setQuantity(8);
          gameState.emitter.setSpeedY({min:600, max:800});
         console.log(gameState.emitter.quantity.propertyValue);
        }
      }    
      else if (gameState.emitter.quantity.propertyValue === 8){
    
        if(Phaser.Input.Keyboard.JustUp(gameState.cursors.up)) {
          gameState.emitter.setQuantity(9);
         console.log(gameState.emitter.quantity.propertyValue);
        }
      }
      else if (gameState.emitter.quantity.propertyValue === 9){
    
        if(Phaser.Input.Keyboard.JustUp(gameState.cursors.up)) {
          gameState.emitter.setQuantity(10);
         console.log(gameState.emitter.quantity.propertyValue);
        }
      }
      else if (gameState.emitter.quantity.propertyValue === 10){
    
        if(Phaser.Input.Keyboard.JustUp(gameState.cursors.up)) {
          gameState.emitter.setQuantity(11);
         console.log(gameState.emitter.quantity.propertyValue);
        }
      }
      else if (gameState.emitter.quantity.propertyValue === 11){
    
        if(Phaser.Input.Keyboard.JustUp(gameState.cursors.up)) {
          gameState.emitter.setQuantity(12);
         console.log(gameState.emitter.quantity.propertyValue);
        }
      }
      else if (gameState.emitter.quantity.propertyValue === 12){
    
        if(Phaser.Input.Keyboard.JustUp(gameState.cursors.up)) {
          gameState.emitter.setQuantity(13);
         console.log(gameState.emitter.quantity.propertyValue);
        }
      }
    
        }
    
      //lowers speed of rain on down arrow
        if(gameState.active){
          
          if(gameState.emitter.quantity.propertyValue === 2){
           
              if(Phaser.Input.Keyboard.JustUp(gameState.cursors.down)) {
                 gameState.emitter.setQuantity(1);
                console.log(gameState.emitter.quantity.propertyValue);
              }
    
          } else if (gameState.emitter.quantity.propertyValue === 3){
    
            if(Phaser.Input.Keyboard.JustUp(gameState.cursors.down)) {
              gameState.emitter.setQuantity(2);
             console.log(gameState.emitter.quantity.propertyValue);
            }
          }
          
         else if (gameState.emitter.quantity.propertyValue === 4){
    
          if(Phaser.Input.Keyboard.JustUp(gameState.cursors.down)) {
            gameState.emitter.setQuantity(3);
           console.log(gameState.emitter.quantity.propertyValue);
          }
        } else if (gameState.emitter.quantity.propertyValue === 5 ){
    
          if(Phaser.Input.Keyboard.JustUp(gameState.cursors.down)) {
            gameState.emitter.setQuantity(4);
           console.log(gameState.emitter.quantity.propertyValue);
          }
      } else if (gameState.emitter.quantity.propertyValue === 6){
    
        if(Phaser.Input.Keyboard.JustUp(gameState.cursors.down)) {
          gameState.emitter.setQuantity(5);
         console.log(gameState.emitter.quantity.propertyValue);
        }
      }
      else if (gameState.emitter.quantity.propertyValue === 7){
    
        if(Phaser.Input.Keyboard.JustUp(gameState.cursors.down)) {
          gameState.emitter.setQuantity(6);
         console.log(gameState.emitter.quantity.propertyValue);
        }
      }
      else if (gameState.emitter.quantity.propertyValue === 8  && gameState.emitter.speedY.propertyValue.max === 800 && gameState.emitter.speedY.propertyValue.min=== 600){
    
        if(Phaser.Input.Keyboard.JustUp(gameState.cursors.down)) {
          gameState.emitter.setQuantity(7);
          gameState.emitter.setSpeedY({min:400, max:600});
         console.log(gameState.emitter.quantity.propertyValue);
        }
      }
  
      else if (gameState.emitter.quantity.propertyValue === 9){
    
        if(Phaser.Input.Keyboard.JustUp(gameState.cursors.down)) {
          gameState.emitter.setQuantity(8);
         console.log(gameState.emitter.quantity.propertyValue);
        }
      }
      else if (gameState.emitter.quantity.propertyValue === 10){
    
        if(Phaser.Input.Keyboard.JustUp(gameState.cursors.down)) {
          gameState.emitter.setQuantity(9);
         console.log(gameState.emitter.quantity.propertyValue);
        }
      }
      else if (gameState.emitter.quantity.propertyValue === 11){
    
        if(Phaser.Input.Keyboard.JustUp(gameState.cursors.down)) {
          gameState.emitter.setQuantity(10);
         console.log(gameState.emitter.quantity.propertyValue);
        }
      }
      else if (gameState.emitter.quantity.propertyValue === 12){
    
        if(Phaser.Input.Keyboard.JustUp(gameState.cursors.down)) {
          gameState.emitter.setQuantity(11);
         console.log(gameState.emitter.quantity.propertyValue);
        }
      }
      else if (gameState.emitter.quantity.propertyValue === 13){
    
        if(Phaser.Input.Keyboard.JustUp(gameState.cursors.down)) {
          gameState.emitter.setQuantity(12);
         console.log(gameState.emitter.quantity.propertyValue);
        }
      }
      }*/
  
         //speed changes update to text
      /*text.setText([
        string + gameState.emitter.quantity.propertyValue
        ]);*/   

      //changes scene on spacebar
        if(keySpace.isDown){
          //this.input.once('pointerdown', function () {
  
          console.log('From RainScene to SummerScene');
          this.cameras.main.fade(800, 0, 0, 0, false, function(camera, progress){
            if (progress > .9) {
            this.scene.start('summerScene');  
            document.querySelector(".ground").style.backgroundColor = "#789344";
            document.querySelector(".bg-color").style.backgroundColor = "#5ac0ff";  
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
    
    //end rain scene code

    var text1;
    var text2;
    var text3;
    var speechbubble;
    var raining;
    var triggerChimes;
    var chimesR;
    var playerx;
    var footstepsM;
