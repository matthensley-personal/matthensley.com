import React from "react"


function YearList({year}) {
  let yeardata, playlist
  if(year === '0') {
    return false;
  }
  if(year === '2012') {
    yeardata = <ol className="yearlist">
    <li>Bowerbirds- The Clearing</li>
  <li>Titus Andronicus- Local Business</li>
  <li>Joe Pug- The Great Despiser</li>
  <li>The Mountain Goats- Transcendental Youth</li>
  <li>Dr. Dog- Be The Void</li>
  <li>Strand of Oaks- Dark Shores</li>
  <li>Dan Deacon- America</li>
  <li>Matthew E. White- Big Inner</li>
  <li>Tallest Man on Earth- There's No Leaving Now</li>
  <li>King Tuff- King Tuff</li>
  <li>Japandroids- Celebration Rock</li>
  <li>Sigur Ros- Valtari</li>
  <li>Zammuto- Zammuto</li>
  <li>Langhorne Slim- The Way We Move</li>
  <li>Poliça- Give You The Ghost</li>
  <li>Spiritualized - Sweet Heart Sweet Light</li>
  <li>Godspeed You! Black Emperor- Allelujah! Don't Bend! Ascend!</li>
  <li>B. Fleischmann- I'm Not Ready For The Grave Yet</li>
  <li>Chromatics- Kill For Love</li>
  <li>Father John Misty- Fear Fun</li>
  <li>Woods- Bend Beyond</li>
  <li>Fiona Apple- The Idl....(etc)</li>
  <li>Tame Impala- Lonerism</li>
  <li>John K. Samson- Provincial</li>
  <li>Andrew Bird- Break It Yourself / Hands of Glory</li>
  </ol>

  playlist =
    <iframe title="2012" src="https://open.spotify.com/embed/playlist/6evx1ZkhKnJ50a4T0u9bzk" width="380" height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  }
  else if(year === '2013') {
    yeardata = <ol className="yearlist">
    <li>Kurt Vile- Wakin On A Pretty Daze</li>
<li>Laura Marling- Once I Was An Eagle</li>
<li>Arcade Fire- Reflektor</li>
<li>Yo La Tengo- Fade</li>
<li>Vampire Weekend- Modern Vampires of...</li>
<li>Unknown Mortal Orchestra- II</li>
<li>Cass McCombs- Big Wheel and Others</li>
<li>Torres- Torres</li>
<li>Jason Isbell- Southeastern</li>
<li>Hayden- Us Alone</li>
<li>Appleseed Cast- Illumination Ritual</li>
<li>Night Beds- Country Sleep</li>
<li>Phosphorescent- Muchacho</li>
<li>The National- Trouble Will Find Me</li>
<li>Deafheaven- Sunbather</li>
<li>Colin Stetson- New History Warfare vol 3</li>
<li>Kevin Morby- Harlem River</li>
<li>Rhye- Woman</li>
<li>Diarrhea Planet- I'm Rich Beyond Your...</li>
<li>Flaming Lips- The Terror</li>
<li>Yellowbirds- Songs from the Vanished Frontier</li>
<li>William Tyler- Impossible Truth</li>
<li>The Shouting Matches- Grownass Man</li>
<li>Cate Le Bon- Mug Museum</li>
<li>Volcano Choir- Repave</li></ol>

playlist = <iframe title="2013" src="https://open.spotify.com/embed/playlist/1BgEQNYjEUg0uGdnKTI4kx" width="380" height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  }
  else if(year === '2014') {
    yeardata = <ol className="yearlist">
    <li>War On Drugs- Lost In The Dream</li>
<li>Doug Paisley- Strong Feelings</li>
<li>Bahamas- Bahamas is Afie</li>
<li>Asgeir- In The Silence</li>
<li>Hiss Golden Messenger- Lateness of Dancers</li>
<li>Hospitality- Trouble</li>
<li>Barr Brothers- Sleeping Operator</li>
<li>Ages and Ages- Divisionary</li>
<li>Woods- With Light and With Love</li>
<li>Strand of Oaks- Heal</li>
<li>St. Even- St. Even</li>
<li>Milo- A Toothpaste Suburb</li>
<li>Kevin Morby- Still Life</li>
<li>Saintseneca- Dark Arc</li>
<li>Zammuto- Anchor</li>
<li>Ought- More Than Any Other Day</li>
<li>Sylvan Esso- Sylvan Esso</li>
<li>Mac DeMarco- Salad Days</li>
<li>Wake Owl- Private World of Paradise</li>
<li>The Antlers- Familiars</li>
<li>Leif Vollebekk- North Americana</li>
<li>Tycho- Awake</li>
<li>Christopher Denny- If the Roses Don't Kill Us</li>
<li>The Gloaming- The Gloaming</li>
<li>Sun Kil Moon- Benji</li>
    </ol>
    playlist = <iframe title="2014" src="https://open.spotify.com/embed/playlist/79enh1Ckx38K0MRR3MWj8V" width="380" height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  }
  else if(year === '2015') {
    yeardata = <ol className="yearlist"><li>Sufjan Stevens- Carrie and Lowell</li>
<li>Donnie Trumpet + Social Experiment- Surf</li>
<li>James McMurtry- Complicated Game</li>
<li>Lord Huron- Strange Trails</li>
<li>Joe Pug- Windfall</li>
<li>Red River Dialect- Tender Gold and Gentle Blue</li>
<li>Young Fathers- White Men are Black Men Too</li>
<li>Kurt Vile- b'lieve I'm goin down</li>
<li>Titus Andronics- The Most Lamentable Tragedy</li>
<li>Royal Headache- High</li>
<li>GY!BE- Asunder, Sweet and Other Distress</li>
<li>Kendrick Lamar- To Pimp A Butterfly</li>
<li>Dick Diver- Melbourne, Florida</li>
<li>Matthew E. White- Fresh Blood</li>
<li>The Dodos- Individ</li>
<li>Leon Bridges- Coming Home</li>
<li>Unknown Mortal Orchestra- Multi-Love</li>
<li>Milo- So The Flies Don't Come</li>
<li>Joey Bada$$- B4.DA.$$</li>
<li>Old Wave- Old Wave</li>
<li>California X- Nights In The Dark</li>
<li>Phil Cook- Southland Mission</li>
<li>Roadside Graves- Acne/Ears</li>
<li>Oddisee- The Good Fight</li>
<li>Natalie Prass- Natalie Prass</li>
    </ol>
    playlist = <iframe title="2015" src="https://open.spotify.com/embed/playlist/20vfcHL3W5jFbGcLu044U6" width="380" height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  }
  else if(year === '2016') {
    yeardata = <ol className="yearlist"><li>Kevin Morby- Singing Saw</li>
<li>William Tyler - Modern Country</li>
<li>Hiss Golden Messenger - Heart Like A Levee</li>
<li>Fruit Bats - Absolute Loser</li>
<li>Chance The Rapper - Coloring Book</li>
<li>RLYR - Delayer</li>
<li>Bon Iver - 22, A Million</li>
<li>Karl Blau - Introducing Karl Blau</li>
<li>Whitney - Light Upon The Lake</li>
<li>Lambchop - FLOTUS</li>
<li>The Avalanches - Wildflower</li>
<li>Dead Tongues - Montana</li>
<li>The Gloaming - 2</li>
<li>Pinegrove - Cardinal</li>
<li>Sturgill Simpson - A Sailor's Guide To Earth</li>
<li>Nap Eyes - Thought Rock Fish Scale</li>
<li>Andrew Bird - Are You Serious</li>
<li>A Tribe Called Quest - We Got It From Here...</li>
<li>Phil Cook - Old Hwy D</li>
<li>Hamilton Leithauser + Rostam - I Had A Dream That You Were Mine</li>
<li>Car Seat Headrest - Teens of Denial</li>
<li>Anderson.Paak - Malibu</li>
<li>Big Thief - Masterpiece</li>
<li>Basia Bulat - Good Advice</li>
<li>Steve Gunn - Eyes On The Lines</li>
    </ol>
    playlist = <iframe title="2016" src="https://open.spotify.com/embed/playlist/49aJyzvT7l2iosNbpC3HEC" width="380" height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  }
  else if(year === '2017') {
    yeardata = <ol className="yearlist"><li>Kevin Morby - City Music</li>
<li>Do Make Say Think - Stubborn Persistent Illusions</li>
<li>The War on Drugs - A Deeper Understanding</li>
<li>Jake Xerxes Fussell - What in the Natural World</li>
<li>Hiss Golden Messenger - Hallelujah Anyhow</li>
<li>Bonnie Prince Billy - Best Troubador</li>
<li>Barr Brothers - Queens of the Breakers</li>
<li>Fleet Foxes - Crack Up</li>
<li>Rostam - Half Light</li>
<li>Wooden Wand - Clipper Ship</li>
<li>Leif Vollebekk - Twin Solitude</li>
<li>Sylvan Esso - What Now</li>
<li>Big Thief - Capacity</li>
<li>Milo - who told you to think??!!?!?!?!</li>
<li>Chuck Johnson - Balsams</li>
<li>Kurt Vile & Courtney Barnett - Lotta Sea Lice</li>
<li>Protomartyr - Relatives in Descent</li>
<li>Gun Outfit - Out of Range</li>
<li>Mac DeMarco - This Old Dog</li>
<li>Godspeed You! Black Emperor - Luciferian Towers</li>
<li>Asgeir - Afterglow</li>
<li>Bonny Doon - Bonny Doon</li>
<li>Alvvays - Antisocialites</li>
<li>Gunn-Truscinski Duo - Bay Head</li>
<li>Tift Merritt - Stitch of the World</li>
    </ol>
    playlist = <iframe title="2017" src="https://open.spotify.com/embed/playlist/7jD5S2N4TRx8Pdmoo5MGRd" width="380" height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  }
  else if(year === '2018') {
    yeardata = <ol className="yearlist"><li>Doug Paisley - Starter Home</li>
<li>Damien Jurado - The Horizon Just Laughed</li>
<li>Red River Dialect - Broken Stay Open Sky</li>
<li>Jim James - Uniform Distortion</li>
<li>The Dead Tongues - Unsung Passage</li>
<li>Andrew W.K. - You're Not Alone</li>
<li>Kurt Vile - Bottle It In</li>
<li>Oafur Arnalds - re:member</li>
<li>Jennifer Castle - Angels of Death</li>
<li>Milo - budding ornithologists are weary of tired analogies</li>
<li>Low - Double Negative</li>
<li>Israel Nash Gripka - Lifted</li>
<li>Typhoon - Offerings</li>
<li>Niklas Paschburg - Oceanic</li>
<li>Nap Eyes - I'm Bad Now</li>
<li>Gregory Alan Isakov - Evening Machines</li>
<li>Phosphorescent - C'est La Vie</li>
<li>RLYR - Actual Existence</li>
<li>Khruangbin - Con Todo El Mundo</li>
<li>Nathan Salsburg - Third</li>
<li>Clint Heidorn - Pasadena</li>
<li>Big Red Machine - Big Red Machine</li>
<li>Wye Oak - The Louder I Call, the Faster It Runs</li>
<li>Lucy Dacus - Historian</li>
<li>Sleep - The Sciences</li>
    </ol>
    playlist = <iframe title="2018" src="https://open.spotify.com/embed/playlist/7imhN9bdkGm7kwjkVX8HYc" width="380" height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  }
  else if(year === '2019') {
    yeardata = <ol className="yearlist"><li>Kevin Morby - Oh My God</li>
<li>Jake Xerxes Fussell - Out of Sight</li>
<li>Bill Callahan - Shepard in a Sheepskin Vest</li>
<li>Joe Pug - The Flood In Color</li>
<li>Vampire Weekend - Father of the Bride</li>
<li>Daniel Norgren - Wooh Dang</li>
<li>Andrew Bird - My Finest Work Yet</li>
<li>Mountain Goats - In League With Dragons</li>
<li>Damien Jurado - In The Shape of a Storm</li>
<li>Red River Dialect - Abundance Welcoming Ghosts</li>
<li>Big Thief - Two Hands</li>
<li>Titus Andronicus - An Obelisk</li>
<li>Bonnie Prince Billy - I Made A Place</li>
<li>William Tyler - Goes West</li>
<li>Bon Iver - i,i</li>
<li>Appleseed Cast - The Fleeting Light of Impermanence</li>
<li>Wilco - Love is Everywhere</li>
<li>Hiss Golden Messenger - Terms of Surrender</li>
<li>Joan Shelley - Like The River Loves The Sea</li>
<li>Lankum - The Livelong Day</li>
<li>The National - I Am Easy To Find</li>
<li>Vetiver - Up On High</li>
<li>Fruit Bats - Gold Past Life</li>
<li>Ages and Ages - Me You They We</li>
<li>Kishi Bashi - Omoiyari</li>
    </ol>
    playlist = <iframe title="2019" src="https://open.spotify.com/embed/playlist/0dWpJr2zSG6yuTWIIeDHsM" width="300" height="600" frameborder="0" allowtransparency="true" allow="encrypted-media"></iframe>
  }

  return (
  <div className="yearContainer">
    <article>
    <h3>{year}</h3>
    <div className="yearData">
     <div className="list">{yeardata}</div>
     <div className="playlist">{playlist}</div>
    </div>
    </article>
  </div>
  )
}

export default YearList
