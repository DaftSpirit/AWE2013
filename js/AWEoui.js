            var c = document.getElementById("canvas");
            var ctx = c.getContext("2d");

            var myInterval = setInterval(animate, 1000/60); //boucle de rafraichissement
            var prop = 5;
            var yposmin = 6*prop;
            var yposmax = 15*prop;  
            var sens = 0.3*prop;
            var xpos = 10*prop;
            var ypos =15*prop;

            function animate() //animation du "non"
            {
                ctx.clearRect(0,0,canvas.width,canvas.height);

                bras_droit();

                ctx.beginPath();

                //face avant du cube
                ctx.moveTo(xpos,ypos);
                ctx.lineTo(xpos+(30*prop),ypos);
                ctx.lineTo(xpos+(30*prop),ypos+(30*prop));
                ctx.lineTo(xpos,ypos+(30*prop));
                ctx.lineTo(xpos,ypos);

                //face de droite
                ctx.moveTo(xpos+(30*prop),ypos);
                ctx.lineTo((44*prop),(10*prop));
                ctx.lineTo((44*prop),(35*prop));
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

                ctx.beginPath();

                if(ypos>=(10*prop))
                {
                    ctx.moveTo(xpos,ypos);
                    ctx.lineTo(16*prop,10*prop);
                    ctx.lineTo(44*prop,10*prop);
                    ctx.lineTo(xpos+(30*prop),ypos);
					
					ctx.lineJoin = "round";
					ctx.lineCap = "round";
					ctx.fillStyle = "rgba(200,200,200,1)";
					ctx.strokeStyle = "rgba(0,0,0,1)";
					ctx.lineWidth = 0.5*prop;
					ctx.fill();
					ctx.stroke();
					ctx.closePath();
                }
                

                ctx.beginPath();
				
                //smiley qui souri
                ctx.moveTo(xpos+(7.5*prop),ypos+(20*prop)); 
                ctx.lineTo(xpos+(10*prop),ypos+(22*prop));
                ctx.lineTo(xpos+(20*prop),ypos+(22*prop));
                ctx.lineTo(xpos+(22*prop),ypos+(20*prop));
                
                /*//smiley pas content
                ctx.moveTo(xpos+75,ypos+250); 
                ctx.lineTo(xpos+100,ypos+225); 
                ctx.lineTo(xpos+200,ypos+225);
                ctx.lineTo(xpos+225,ypos+250);*/
                
                //oeil droit
                ctx.moveTo(xpos+(24*prop),ypos+(7.5*prop)); 
                ctx.lineTo(xpos+(21.5*prop),ypos+(5*prop));
                ctx.lineTo(xpos+(19*prop),ypos+(7.5*prop));
                ctx.lineTo(xpos+(21.5*prop),ypos+(10*prop));

                //oeil gauche
                ctx.moveTo(xpos+(6*prop),ypos+(7.5*prop)); 
                ctx.lineTo(xpos+(8.5*prop),ypos+(5*prop));
                ctx.lineTo(xpos+(11*prop),ypos+(7.5*prop));
                ctx.lineTo(xpos+(8.5*prop),ypos+(10*prop));

                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctx.fillStyle = "rgba(0,0,200,0.5)";
                ctx.strokeStyle = "rgba(200,200,200,1)";
                ctx.lineWidth = 0.5*prop;
                ctx.fill();
                ctx.stroke();
                ctx.closePath();
                /*ctx.fillStyle = "lightblue";
                ctx.fillRect(xpos,ypos,50,50); C'est le test !!!*/


                if(ypos>=yposmax || ypos<=yposmin)
                {
                    sens *= -1;
                }

                ypos += sens;
            }

            function bras_droit ()
            {
                ctx.beginPath();

                //bras droit
                ctx.moveTo(xpos+(2.5*prop),ypos+(11*prop));
                ctx.lineTo(xpos-(5.5*prop),ypos+(16*prop));
                ctx.lineTo(xpos-(9*prop),ypos+(30*prop));

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
                ctx.moveTo(xpos+(33*prop),ypos+(11*prop));
                ctx.lineTo(xpos+(43*prop),ypos+(16*prop));
                ctx.lineTo(xpos+(48*prop),ypos+(30*prop));

                ctx.lineJoin = "round";
                ctx.lineCap = "round";
                ctx.strokeStyle = "rgba(0,0,0,1)";
                ctx.lineWidth = 2*prop;
                ctx.stroke();
                ctx.closePath();
            }