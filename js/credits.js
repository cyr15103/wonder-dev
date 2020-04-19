var CreditSpring = new Phaser.Class({

    Extends: Phaser.Scene,
    
    initialize:
    
    function CreditSpring ()
    {
        Phaser.Scene.call(this, { key: 'creditSpring' });
       
    },
    
    preload: function ()
    {
    },
    
    create: function ()
    {
        game.sound.stopAll();
        var creditTrack = this.sound.add('creditsmus');
        creditTrack.setLoop(true);
        creditTrack.play();
          gameState.active = true;
          gameState2.active = false;
          this.add.image(960, 600, 'credit');

          var back = this.add.sprite(1835, 80, 'back').setInteractive({ useHandCursor: true  } );
        back.on('pointerdown', () => {
        //titletrack.stop();
          this.scene.start('rainScene');  
          document.querySelector(".ground").style.backgroundColor = "#53722A";
          document.querySelector(".bg-color").style.backgroundColor = "#95b6c1";  
          });
         
    },
  
    update: function ()
    //sets player animations and movement
        {
           
        },
    });

    var CreditSummer = new Phaser.Class({

        Extends: Phaser.Scene,
        
        initialize:
        
        function CreditSummer ()
        {
            Phaser.Scene.call(this, { key: 'creditSummer' });
           
        },
        
        preload: function ()
        {
        },
        
        create: function ()
        {
            game.sound.stopAll();
            var creditTrack = this.sound.add('creditsmus');
            creditTrack.setLoop(true);
            creditTrack.play();
              gameState.active = true;
              gameState2.active = false;
              this.add.image(960, 600, 'creditb');
    
             var back = this.add.sprite(1835, 80, 'back').setInteractive({ useHandCursor: true  } );
            back.on('pointerdown', () => {
            //titletrack.stop();
              this.scene.start('summerScene');  
              document.querySelector(".ground").style.backgroundColor = "#789344";
              document.querySelector(".bg-color").style.backgroundColor = "#5ac0ff";  
              });
             
        },
      
        update: function ()
        //sets player animations and movement
            {
               
            },
        });

var CreditFall = new Phaser.Class({

            Extends: Phaser.Scene,
            
            initialize:
            
            function CreditFall ()
            {
                Phaser.Scene.call(this, { key: 'creditFall' });
               
            },
            
            preload: function ()
            {
            },
            
            create: function ()
            {
                game.sound.stopAll();
                var creditTrack = this.sound.add('creditsmus');
                creditTrack.setLoop(true);
                creditTrack.play();
                  gameState.active = true;
                  gameState2.active = false;
                  this.add.image(960, 600, 'creditf');
        
                  var back = this.add.sprite(1835, 80, 'back').setInteractive({ useHandCursor: true  } );
                back.on('pointerdown', () => {
                //titletrack.stop();
                  this.scene.start('leafScene');  
                  document.querySelector(".ground").style.backgroundColor = "#93632F";
                  document.querySelector(".bg-color").style.backgroundColor = "#D3E9F2";    
                  });
                 
            },
          
            update: function ()
            //sets player animations and movement
                {
                   
                },
            });

var CreditWinter = new Phaser.Class({

                Extends: Phaser.Scene,
                
                initialize:
                
                function CreditWinter ()
                {
                    Phaser.Scene.call(this, { key: 'creditWinter' });
                   
                },
                
                preload: function ()
                {
                },
                
                create: function ()
                {
                    game.sound.stopAll();
                    var creditTrack = this.sound.add('creditsmus');
                    creditTrack.setLoop(true);
                    creditTrack.play();
                      gameState.active = true;
                      gameState2.active = false;
                      this.add.image(960, 600, 'credits');
            
                      var back = this.add.sprite(1835, 80, 'back').setInteractive({ useHandCursor: true  } );
                    back.on('pointerdown', () => {
                    //titletrack.stop();
                      this.scene.start('snowScene');  
                      document.querySelector(".ground").style.backgroundColor = "#EDDED9";
                      document.querySelector(".bg-color").style.backgroundColor = "#E5B6AE"; 
                      });
                     
                },
              
                update: function ()
                //sets player animations and movement
                    {
                       
                    },
                });