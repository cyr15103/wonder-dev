var TitleScene = new Phaser.Class({

    Extends: Phaser.Scene,
    
    initialize:
    
    function TitleScene ()
    {
        Phaser.Scene.call(this, { key: 'titleScene' });
       
    },
    
    preload: function ()
    {
    },
    
    create: function ()
    {
        game.sound.stopAll();
        gameState.active = false;
        gameState2.active = true; 

        titletrack = this.sound.add('titletrack');
        titletrack.setLoop(true);
        titletrack.play();
          
        gameState.active = true;
        gameState2.active = false;
        gameState.image = this.add.image(960, 600, 'title');
        this.input.addDownCallback(function() {
				
            if (game.sound.context.state === 'suspended') {
                game.sound.context.resume();
                }
            });

        var play = this.add.sprite(1220, 697, 'play').setInteractive({ useHandCursor: true  } );
        play.on('pointerdown', () => {
        console.log('From TitleScene to RainScene');
        titletrack.stop();
        this.scene.start('rainScene');  
        document.querySelector(".ground").style.backgroundColor = "#53722A";
        document.querySelector(".bg-color").style.backgroundColor = "#95b6c1";  
        });

    },
  
    update: function ()
        {  
        },
    });

    var titletrack;