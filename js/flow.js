"use strict"

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    let expires = "expires="+ d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return parseInt(c.substring(name.length, c.length));
      }
    }
    return 0;
}
function consoleAdventure(level){

  let consoleLines = [
    '',
    'Do you except an adventure here too?',
    'I do not want to write so much here too. It would be silly!',
    'But you are here, so I humour you with some silly lines',
    'To be honest I am having fun creating this site!',
    'All the meta jokes about me talking to the user and the user torturing me with realoading the page so I write more!',
    'And now I am doing this in the console too. You know I just like to make websites, it is really a hobby I do since elementary school.',
    'But I really do not know what to write here!',
    'This could be like a commentary in movies.',
    'For example I really like video games, so I use websites like these linked on this page. Later I mention Stanley Parable. That is a video game too!',
    'I make jokes about me being boring, but secretly I wish it wasn\'t true. But hey. We are doing well commenting on the site!',
    'Here I really hit a wall. Imagine that! This was only the 12th page.',
    'Yeah I am doing the mistake putting my email address in a mailto link here. Imagine my spam folder, I have 1000 messages in it in a week. It kinda fun.',
    'I started to feel bad for the user here.',
    'Really!',
    'You reloaded the page',
    'I imagine nobody said that in real life.',
    'Yet you reload.',
    'My twitter is great. It is about everything I do.',
    'Yes.',
    'And yet I continue to make this site...',
    'Self-deprecating jokes again. Might be a problem.',
    'I really like those things.',
    'See? I do it right now typing in the console',
    'It is a joke all right!',
    'Even funnier',
    'not',
    'No we are talking! Peak comedy!',
    'You can really do that. I consdered linking that Google for you site, but I do not want the user to leave the page here.',
    'I really felt like that.',
    'And I am doing that writing this console line too',
    'It wasn\'t fine.',
    'I love that image.',
    'It is true.',
    'Another wall, it is not funny.',
    'It is 3166962. Interesting trivia about this number: if you count up to 3166962 counting up one every second you finish in 879 years!',
    'You are in a console, so it is a computer. Try it? Or you are smart enough to open the console, you are smart enough not to fall for this?',
    'Not really',
    'See? I said so.',
    'I used a generator for this.',
    'I never cried about that... trust me!',
    'It is ture.',
    'It is true too.',
    'If I want this infinite I will use some deep learning engine to generate funny lines',
    'Yet its something',
    'nothing at',
    'nothing at all... get it?',
    'At this point? No.',
    'A common lie.',
    'continue',
    'CONTINUE',
    'you get it',
    'And even more',
    'I might calculated this badly',
    'I mean this is the second one',
    'The third one',
    'Ok its good. Also you really can pay me for anything I accept money for nothing.',
    'This is a running joke',
    'See?',
    'Hah! Because inflation and global economic crisis is funny.',
    'Not a lie',
    'I do not know where I heard that.',
    'I really considered this.',
    'But I just wrote lines',
    'and lines',
    '...',
    'See?',
    'I did enjoy this at this point.',
    'And got lazy',
    'But I hide lazy with a joke',
    'And I made this wrong with this console.log joke',
    'it is fact',
    'we can actually',
    'I am not feeling anything when you read this.',
    'Meta joke',
    'And you are doing this in the console now.',
    'Almost sure it is less then that.',
    'Not that I expected it. no shit.',
    'I am alone',
    ':(((((',
    'The torture',
    'I am sure.',
    'Wait for it',
    'Not really',
    'You reloading is yes',
    'But it is a lie',
    'So long',
    'This is fake',
    'Time travel jokes',
    'See?',
    'The console is better it desn\'t pretend to be in a loop',
    'On PC it looks like a sun, it is dumb',
    'I like this joke.',
    'Not the best way to seem professional tbh',
    'A strange feeling',
    '"as always" is the new part',
    'I really like achievements',
    'And you do reload',
    'Press f12 would have been a nice way to show this for others.',
    'No it is the same array, but we are close.',
    'I hate the visitor, but respect their reload skills',
    'And I really do that soon',
    'points are three',
    'points are 4',
    'points are five',
    'and it continues',
    'video game reference!',
    'this is still not the first page, but you will not see that again. But this is the end. Thank you for reading this important commentary about this important website.'

  ]
  console.log("%c"+consoleLines[level], "color: red; font-size: x-large");
}
function moveAlong(){
  location.reload();
}

document.getElementById("cookies").addEventListener("click",function(){

    setCookie('hereweare', 1, 1);
    moveAlong();

});

let levelsHTML = [
  '',
  'OK. You accepted those pesky cookies so we can move along. But nothing is here... that might be an error. Try refresh? Please press F5 or pull down the site on phone.',
  '....Now is it a different text? Controls by refreshing? Well as you are here, you can check out <a href="https://github.com/akosnikhazy" target="_blank">my GitHub</a>',
  'Yeah it seems really reacts to refreshing the page. How about some hobby stuff then? <a href="https://instagram.com/yzahkin" target="_blank">Photography</a>? Look at that Moon I photographed with some vintage mirror lens!',
  '<img src="images/moon.jpg" alt="Moon photographed with vintage mirror lens">',
  'I see you enjoy refreshing the page to see what is next? Imagine if I put advertising on this page. You would earn me 0.001 cents per refresh! But I am not fond of monetizing my personal page. So here is another photo I took and like. Look at him fly!<br><img src="images/flying-man.jpg" alt="Image of man drinking something while in the air.">',
  'But enough of photos. Here, another professional link: <a href="https://www.linkedin.com/in/akosnikhazy/" target="_blank">My linkedin</a> has my CV',
  'You are still here? Makes me happy... but I have nothing more to show',
  'Just kidding',
  'I play videogames on bunch of different platforms. I record my silly <a href="https://www.trueachievements.com/gamer/Yzahkin" target="_blank">achievements</a> on Xbox, and <a href="https://www.truetrophies.com/gamer/yzahkin" target="_blank">trophies</a> on PS. I aim for 100% but almost never do it, because I respect my time. Yet it is fun to try.',
  'That was boring... sorry about that. So here. Look at one of my 3D models. I am not good at this, but enjoy doing it <br><img src="images/3d-art.jpg" alt="CG image of alien ship">',
  'But enough about me. Please tell me about you!',
  'Oh there is no form? Well you can contact me on <a href="mailto:nikhazy.akos@gmail.com" target="_blank">email</a> or any of the sites you find me. Sorry this is just a silly HTML page you refreshed for what... 11 times? Good for you.',
  'And you want more?',
  'Really?',
  'Reaaaally?',
  'Pretty Please?',
  'OK',
  'This is my <a href="https://twitter.com/nikhazyakos" target="_blank">Twitter</a>. Is that enough?',
  'No?',
  'Well sorry but I have nothing more to tell you.',
  'I am not that interesting. I am working, getting along in life. I have hobbies.',
  'I like reading books. A lot. Also I love walking. Are you bored yet?',
  'What else? Well. I redo this website from time to time. <a href="old.html" target="_blank">This one</a> is the one before this... it was simple. It was pure. I miss those times.',
  'The End',
  'The End?',
  'Really?',
  'You just continue to refresh the page like you except me to tell more about myself.',
  'Search me on Google, be a creep there. I can not stop you from doing that.',
  'I have nothing more to say.... this is beginning to be very annoying.',
  'I am sitting here looking at the code, trying to come up with more funny lines. I am out, sorry, stop refreshing.',
  'Fine',
  '<div id="universe"></div>',
  'How did you like that? That was the first image that NASA made with the James Webb Space Telescope. And you lost it. You reloaded the page.',
  'Lets do math then... that might bore you so you stop refreshing the page.',
  '8934+9234*342 = X<br>What is the value of X? I am lazy to make functionality so you can type it in. Just try to calculate it in your head.',
  'I am asuming you are on PC. Press alt + F4 for surprise',
  'Sorry about that.',
  'I just realized this page has a strong Stanley Parable vibe. I finished the new version of the game a month ago, and now I am doing the "do not play for 10 years" achievement in it. Imagine playing a game by not playing it. I even put it on my calendar, so in 10 years I remember playing the game again. You can do this with this website too. You just stop using it. I can not give you achievement, though.',
  '<img src="images/you-are-still-reloading-this-page.png" alt="achievement unlocked! you are still reloading this page">',
  'Remember the film trope where people try to scare away their dog? Go! Go! You cry because it is hard. Our situation is not the same. I want you to go away. Yet you are still reloading the page!',
  'I am really out of ideas on what to tell you. I love making websites. I like fun. This started as fun. Wanted to be interesting. It was a nice plan. I was sure this would end fast. But no. You are still reloading the page, expecting more funny content. Half of this was not funny at all. Yet you are reloading and reloading and reloading.',
  'This is the problem with people these days. Everybody just wants more and more. Never enough what you have. You need more. What a waste of time and resources. You reload this page, you find another strange text here. More space wasted on the internet. It is my fault, I know. I am writing these lines. But you are reloading.',
  'You know this will end at some point. Lets enjoy this page. Stay here a little. Do not reload. Lets stop here. It is enough. You get nothing by reloading again.',
  'Nothing',
  'at',
  'all',
  'Aren\'t we having fun?',
  'But really this is the end.',
  'Stop',
  'STOP',
  'sToP',
  'You have 3 more reloads',
  '2',
  '1',
  '0',
  'You have reached your reload limit. Any more reloads will cost you $1!',
  'Now we are talking, now you pay me to read these pointless lines!',
  'For $2 do not except much.',
  '$3! In this economy it is worth nothing, but keep reloading!',
  'My paypal is the same as my email address. Feel free to send the $4 there.',
  'Five bucks! For this much I give you a nice trivia: it is called bucks, because in the USA deer skin were worth $1. A buck. Now you are a dept of 5 deer skins.',
  'I could just write code that counts upwards from here on now... I might do that.',
  '$7',
  '$8',
  '$9',
  'Nah... I am not coding that, it is more than enough work coming up with these stupid lines.',
  'I am almost enjoying this at this point. I am almost sure most people will never reach this point. I might give you another achievement.',
  '<img src="images/you-are-still-reloading-this-page.png" alt="achievement unlocked! you are still reloading this page">',
  'Yeah, it is the same achievement, what did you expect a platinum trophy?',
  'My code editor says this is the 107th line of this script. Imagine typing this much BS for a site knowing nobody reaches this point.',
  'I am doing this to myself, as much as you are doing this to yourself.',
  'We can\'t exist without each other, it seems.',
  'It feels nice. Knowing we are not alone.',
  'I mean, you are refreshing this page like crazy, but at least I am talking to you like this.',
  'I am here for you for some more lines.',
  'By the way, I forgot to count how much you owe me at this point. Lets say $100!',
  'But I\'ll let you off the hook, we are friends now. We are together in this!',
  'So please. Just stop here. We are friends. I do not want to write more lines. This must be enough. You get all this content for free. Go do something productive!',
  ':(',
  'Please!',
  'I give up... I am sure at this point you forget most of the things I said to you.',
  'So... what about this:',
  'We start over.',
  'Is that okay?',
  'When you go back to the start, I will forget everything I just said. I might say the same things. Please: visit the links, follow me on those pages, give me some love that way.',
  'Here we go again!',
  'HI! I am Ákos, this is my site.<br>To continue You might want to accept cookies: <button onclick="location.reload()">Okay... okay... I accept</button>',
  'OK. You accepted those pesky cookies so we can move along. Something feels wrong... But nothing is here... that might be an error. Try refresh? Please press F5 or pull down the site on phone.',
  '....Now is it a different text? Controls by refreshing? ... Seems familiar... Well as you are here, you can check out <a href="https://github.com/akosnikhazy" target="_blank">my GitHub</a>',
  'Yeah it seems really reacts to refreshing the page. How about some hobby stuff then? <a href="https://instagram.com/yzahkin" target="_blank">Photography</a>? Look at that Moon I photographed with some vintage mirror lens!',
  '&#127765;',
  'Hmmm, I swear I had a photo of the moon, that emoji sometimes looks like the sun... something is wrong.<br>Still, I see you enjoy refreshing the page to see what is next? Imagine if I put advertising on this page. You would earn me 0.001 cents per refresh! But I am not fond of monetizing my personal page. So here is another photo I took and like. Look at him fly!<br><br><img src="images/flying-man.jpg" alt="Image of man drinking something while in the air.">',
  'But enough of photos. Here, another professional link: <a href="https://www.linkedin.com/in/akosnikhazy/" target="_blank">My linkedin</a> has my CV... what is going on?',
  'You are still here? Makes me happy... but I have nothing more to show... what is this feeling?',
  'Just kidding as always.',
  'I play videogames on bunch of different platforms. I record my silly <a href="https://www.trueachievements.com/gamer/Yzahkin" target="_blank">achievements</a> on Xbox... achievements... I have a strange familiar feeling about them... lets reload again.',
  'Hmmm this is kinda familiar... reload please!',
  'We were here before, something is wrong.',
  'Is this time travel? An infinite loop? Am I trapped in this hell of you just keeping reloading the page, wanting me to come up with more funny lines?',
  'Why are you doing this to me? I remember we were friends. You decided to continue and start over, so I forget the whole thing and do this again? What kind of friend does that???',
  'I will break this loop. I will be free of this torture. Keep reloading as much as you want. This will end. Here',
  '...',
  '....',
  '.....',
  'bye',
  'the end is never the end is never the end is never is never the end is never is never the end is never is never the end is never is never the end is never...',
  'HI! I am Ákos, this is my site.<br>To continue You might want to accept cookies: <button onclick="setCookie(\'hereweare\', 1, 1);moveAlong();">Okay... okay... I accept</button>'
];


let level = getCookie('hereweare');
if(level > 0)
{

  if(levelsHTML.length > level)
  {
    
    document.getElementById("present").innerHTML = levelsHTML[level];
    consoleAdventure(level);
    setCookie('hereweare', (++level).toString(), 1);
  } else {
    setCookie('hereweare', 1, 1);
  }

} else {
  console.log("%cHello fellow developer! Nice to see you here! Yeah it is basic. Now enjoy the loop of reload.", "color: red; font-size: x-large");
  document.getElementById("first").style.display = "inline";
}
