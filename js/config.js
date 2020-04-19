// game config


const gameState = {
    speed: 300,
    ups: 380,
    width: 3200,
    height: 1200,
  };
  
  const gameState2 = {
    speed: 300,
    ups: 380,
    width: 3200,
    height: 1200,
  };
    const config = {
      type: Phaser.CANVAS,
      width: 1920,
      height: 1200,
      fps: {target: 60},
      parent:'phaser',
      
      physics: {
          default: 'arcade',
          arcade: {
              gravity: { y: 1000 },
              enableBody: true,
              debug: false,
          }
      },
      scale: {
        autoCenter: Phaser.Scale.CENTER_BOTH,
      mode: Phaser.Scale.FIT,
    },
      scene: [PreloadScene, ErrorScene, TitleScene, RainScene, SummerScene, LeafScene, SnowScene, CreditSpring, CreditSummer, CreditFall, CreditWinter ]
    };
    const game = new Phaser.Game(config);
    
  
  