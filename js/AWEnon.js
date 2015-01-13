            var c = document.getElementById("canvas");
            var ctx = c.getContext("2d");

            var myInterval = setInterval(animate, 1000/60); //boucle de rafraichissement
            var prop = 5;
            var xposmin = 4.2*prop;
            var xposmax = 20*prop;
            var sens = 0.3*prop;
            var xpos = 5*prop;
            var ypos =15*prop;

            function animate() //animation du "non"
            {
                ctx.clearRect(0,0,canvas.width,canvas.height);

                if(xpos<=(12.5*prop)) //cotés du cube qui vont s'afficher de façon alternative
                {
                    
                    bras_droit();

                    ctx.beginPath();

                    //face avant du cube
                    ctx.moveTo(xpos,ypos);
                    ctx.lineTo(xpos+(30*prop),ypos);
                    ctx.lineTo(xpos+(30*prop),ypos+(30*prop));
                    ctx.lineTo(xpos,ypos+(30*prop));
                    ctx.lineTo(xpos,ypos);

                    //face de droite
                    ctx.moveTo((42.5*prop),(10*prop));
                    ctx.lineTo((42.5*prop),(35*prop));
                    ctx.lineTo(xpos+(30*prop),ypos+(30*prop));
                    ctx.lineTo(xpos+(30*prop),ypos);

                    ctx.lineJoin = "round";
                    ctx.lineCap = "round";
                    ctx.fillStyle = "rgba(200,200,200,1)";
                    ctx.strokeStyle = "rgba(0,0,0,1)";
                    ctx.lineWidth = 0.5*prop;
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();

                    bras_gauche();
                }
                else
                {
                    
                    bras_gauche();

                    ctx.beginPath();

                    //face avant du cube
                    ctx.moveTo(xpos,ypos);
                    ctx.lineTo(xpos+(30*prop),ypos);
                    ctx.lineTo(xpos+(30*prop),ypos+(30*prop));
                    ctx.lineTo(xpos,ypos+(30*prop));
                    ctx.lineTo(xpos,ypos);

                    //face de gauche
                    ctx.moveTo((12.5*prop),(10*prop)); 
                    ctx.lineTo((12.5*prop),(35*prop));
                    ctx.lineTo(xpos,ypos+(30*prop));
                    ctx.lineTo(xpos,ypos);

                    ctx.lineJoin = "round";
                    ctx.lineCap = "round";
                    ctx.fillStyle = "rgba(200,200,200,1)";
                    ctx.strokeStyle = "rgba(0,0,0,1)";
                    ctx.lineWidth = 0.5*prop;
                    ctx.fill();
                    ctx.stroke();
                    ctx.closePath();

                    bras_droit();
                }

                ctx.beginPath();

                ctx.moveTo(xpos,ypos); //face du dessus
                ctx.lineTo((12.5*prop),(10*prop));
                ctx.lineTo((42.5*prop),(10*prop));
                ctx.lineTo(xpos+(30*prop),ypos);
                
                /*//smiley qui souri
                ctx.moveTo(xpos+75,ypos+200); 
                ctx.lineTo(xpos+100,ypos+225);
                ctx.lineTo(xpos+200,ypos+225);
                ctx.lineTo(xpos+225,ypos+200);*/
                
                //smiley pas content
                ctx.moveTo(xpos+(7.5*prop),ypos+(25*prop)); 
                ctx.lineTo(xpos+(10*prop),ypos+(22.5*prop)); 
                ctx.lineTo(xpos+(20*prop),ypos+(22.5*prop));
                ctx.lineTo(xpos+(22.5*prop),ypos+(25*prop));

                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctx.fillStyle = "rgba(200,200,200,1)";
                ctx.strokeStyle = "rgba(0,0,0,1)";
                ctx.lineWidth = 0.5*prop;
                ctx.fill();
                ctx.stroke();
                ctx.closePath();

                ctx.beginPath();
                
                //oeil droit
                ctx.moveTo(xpos+(24*prop),ypos+(7.5*prop)); 
                ctx.lineTo(xpos+(21.5*prop),ypos+(5*prop));
                ctx.lineTo(xpos+(19*prop),ypos+(7.5*prop));
                ctx.lineTo(xpos+(21.5*prop),ypos+(10*prop));
                ctx.lineTo(xpos+(24*prop),ypos+(7.5*prop));

                //oeil gauche
                ctx.moveTo(xpos+(6*prop),ypos+(7.5*prop)); 
                ctx.lineTo(xpos+(8.5*prop),ypos+(5*prop));
                ctx.lineTo(xpos+(11*prop),ypos+(7.5*prop));
                ctx.lineTo(xpos+(8.5*prop),ypos+(10*prop));
                ctx.lineTo(xpos+(6*prop),ypos+(7.5*prop));

                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctx.fillStyle = "rgba(200,0,0,1)";
                ctx.strokeStyle = "rgba(200,200,200,1)";
                ctx.lineWidth = 0.5*prop;
                ctx.fill();
                ctx.stroke();
                ctx.closePath();

                
                /*ctx.fillStyle = "lightblue";
                ctx.fillRect(xpos,ypos,50,50); C'est le test !!!*/


                if(xpos>=xposmax || xpos<=xposmin)
                {
                    sens *= -1;
                }

                xpos += sens;
            }

            function bras_droit ()
            {
                ctx.beginPath();

                //bras droit
                ctx.moveTo((xpos/2)+(6.5*prop),ypos+(10*prop));
                ctx.lineTo((xpos/2)-(0.5*prop),ypos+(15*prop));
                ctx.lineTo((xpos/2)-(2*prop),ypos+(28.5*prop));

                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctx.strokeStyle = "rgba(0,0,0,1)";
                ctx.lineWidth = 2*prop;
                ctx.stroke();
                ctx.closePath();
            }

            function bras_gauche ()
            {
                ctx.beginPath();

                //bras gauche
                ctx.moveTo((xpos/2)+(36.5*prop),ypos+(10*prop));
                ctx.lineTo((xpos/2)+(48.5*prop),ypos+(15*prop));
                ctx.lineTo((xpos/2)+(52*prop),ypos+(28.5*prop));

                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctx.strokeStyle = "rgba(0,0,0,1)";
                ctx.lineWidth = 2*prop;
                ctx.stroke();
                ctx.closePath();
            }