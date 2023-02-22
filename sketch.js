// engine ,world , Bodies ,body 

const Engine = Matter.Engine;
 const World = Matter.World;
  const Bodies = Matter.Bodies; 
  const Body = Matter.Body;
   function setup() {
     createCanvas(400,400);
    
     // engine i have created and kept in bigger engine
      engine = Engine.create();
       // im putting this world inside the engine which i have made 
       world = engine.world;
        // creating ball with properties 
        var ball_options = { restitution: 0.95, 
          frictionAir:0.01 }
           var ground_options ={ isStatic: true };
            // creating fground 
            ground = Bodies.rectangle(100,400,400,20,ground_options);//(x,y , w,h , properties)
             // ground adding in the world 
             World.add(world,ground);
              // craete ball
               ball = Bodies.circle(100,10,20,ball_options);// (x , y , r , properties) 
               // adding ball inside world 
               World.add(world,ball); // ground mode
                rectMode(CENTER); // circle mode 
                ellipseMode(RADIUS); }
                 function draw() {
                   background(51); 
                   // update of engine
                    Engine.update(engine);
ellipse(ball.position.x,ball.position.y,20);
rect(ground.position.x,ground.position.y,500,20);
                 }