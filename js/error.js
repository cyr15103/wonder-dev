var ErrorScene = new Phaser.Class({

    Extends: Phaser.Scene,
    
    initialize:
    
    function ErrorScene ()
    {
        Phaser.Scene.call(this, { key: 'errorScene' });
       
    },
    
    preload: function ()
    {
    },
    
    create: function ()
    {
 
          this.add.image(960, 600, 'error');
         
    },
  
    update: function ()
        {
           
        },
    });
