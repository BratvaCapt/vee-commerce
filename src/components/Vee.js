import React from 'react';
import styled from 'styled-components';

export default function Vee(){
    return(
    <div>
<VeeWrapper>
<div className='contain'>
<div className='cardin'>
<div className='front'>
<img src ='./images/Vee.jpg' alt='Vee' height= '550px'
    width= '350px'/>
</div>
<div id='yeah' className='back'>
    <img src ='./images/Eddy.jpg' alt='Eddy'  height= '550px'
    width= '350px'/>
</div>
</div>
</div>
   </VeeWrapper>
   <VeeQuote>
 <header id='showcase'>
<h1>
    A Rare Gem
</h1>
</header>
<div id='content' >
What is a Gem? Well in literal terms it means a precious stone incorprated into
jewelry. But figuratively, it means something precious, something you are not willing
to lose, something beautiful. I have just a few of those in my life and the lady above is a very significant one.<br/>
Beauty, Love, Care, Heart, Determination... These are just few of the qualities i admire
in her, And Vee Thanks for pushing me to acquire a skill that i like, i'd have been dead 
with boredom by now. I'll stop here Sha, lemme not add to your reading schedule, just remember
that you mean a lot to me :).   
</div>
 
   </VeeQuote>
    </div>    
   
   
   
    )
}

const VeeWrapper = styled.div`
display: flex;
justify-content: center;  
    
.cardin {
    position: relative;
    top:50px;
    height: 550px;
    width: 350px;
    transition: all 1s linear;
    transform-style: preserve-3d;
  }

  .front,
  .back {
      position: absolute;
      height: 100%;
      width: 100%;
      border: 1px solid black;
      border-radius: 10px;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 3em;     
  }
  .front {
    z-index: 2;
    backface-visibility : hidden;
  }

  .back {  
   z-index: 1;
   transform: rotateY(180deg);
  }

 .contain:active .cardin {
  transform: rotateY(180deg);
 }
 

 .contain {
  perspective: 1000px;
 }
`
const VeeQuote = styled.div`
position: relative;
top: 100px; 
font-family: Cursive, Helvatica, sans-serif;


#showcase {
    text-align: center;
    height: 100px;
}
#showcase h1 {
    position: relative;
    animation: heading;
    animation-duration: 5s;
    animation-fill-mode: forwards;
}

@keyframes heading{
0% {left: -1000px}
100%{left:0px}
}

#content {
 opacity: 0;   
text-align: center;
animation-name: content;
animation-duration: 4s;
animation-delay: 7s;
animation-fill-mode: forwards;
}
@keyframes content{
    0% {opacity: 0}
    100%{opacity: 1}
    }

`