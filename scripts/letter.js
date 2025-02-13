function askPassword() {
  // Ask for the password with the hint
  const userPassword = prompt("Enter the password: (Hint: 1st anniversary)");

  // Check if the password is correct
  const correctPassword = "02192025";  // Set the password here

  if (userPassword === correctPassword) {
    window.open("./letter.html", "_blank");  // Open the letter page
  } else {
    // If the password is incorrect, alert the user
    alert("Incorrect password. Please try again.");
  }
}



function typeWriterEffect(text, elementId, speed, callback) {
  let i = 0;
  const element = document.getElementById(elementId);
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      
      // Change the font to handwriting-like font after typing starts
      if (i > 5) { // Start changing the font after a few characters
        element.style.fontFamily = "'Dancing Script', cursive";
      }

      setTimeout(type, speed);
    } else if (callback) {
      callback();
    }
  }

  type();
}

function closeLetter() {
  document.querySelector('.letter-container').style.display = 'none';

   // Redirect to the envelope page after closing the letter
  window.location.href = '../html/letterEnvelop.html'
}

document.addEventListener('DOMContentLoaded', function() {
  const letterText = `Dear Hannah,

Hi lang. First of all, dapat ikaw ra makabasa okee? Ayaw ipabasabas sa lain! 

Hehehe :3 Lahi nasad akong style karon. Nana siguro kay idea ani at the time na gi create ko ni. Probably hahayst.  Ginapakita man jud nakos imo akong ginabuhat. Maong nakay idea. Mahadlok man jud kayu ko mag tago2 sa imo kay basin ma balaka, maka cause anxiety nya mag luya na dyun ka. Hahayst :( Welp, no matter what if kabalo naka or not, I wanna say, Happy Valentine's Day!!! Hehehe. Wondering why bisaya ni puro? You know me langga. I'm writing this raw, without edit2, no proofreads or whatever. Diba pag inana kay murag dili na genuine iyang tumong. And you know me pajud. Hilig kayu ko gamit AI. Hahayst~ Anyways, time check, 1:38 AM na. HAHAHAHAH na abtan kog ala una sig kuti2 ani. Feb 14, Valentine's najud. and 5 more days to go hehehe. But I dunno if maka adto ko ana ayps kay kwarta man ang apasaon. But knowing me, gapaningkamot jud ko na maka adto and maka money. That's a special day for us. 

Okay! Balik nasad ta sa explanation about the font and why gina typewritter nako pag-himo. First of all kay istitik man sya. Tho lisud sya basahon nuh? HAHAHHA Okii rana. Karon ra bitaw ni. Ang reason pud ngano typewriter ang animation kay para walay skip2 humanon jud nimo. Either imong e close and dili na mag bother ug basa or tiwason jud nimo ang pag basa.

Enough about that explanation. Let's go with my message sa imo. So yeah, I know kabalo najud ka ani. Love kayu tika like super! Love kayu nako imong smile jud pinaka dabest. Imong buhok when down. Imong ilong nga kyutieee. Hehehe inlab nasad ko nag imagine dah. Samot nag maka ribbon plus glasses ugh! Super gwapa kayu akong bebe oi. So much for the appearance, syempre love kaayu pud nako imong personality. Tho dili jud malalis maldita kayu ka ayps. Hehehe many times nako nimo napahilak wala lang ka balo. And also ako sad :( Sorry for making you cry langga :( I have my limitations, gaka sipyat sad pud ko :( But I don't let that be na ingana lang. I'm putting efforts man sad na mabag.o na. In my own simple ways lang gud. Communicate lang jud ta langga, magsinabtanay and manymore. 

Iloveyouuuuuuuuuu very much! Lang. Naa jud ka diha in times na down ko, mag support sa ako, mag comfort, usahay sad mag pasamot sa akong gibati, samot ka down HAHAHAH. Ikaw najud na langga unsa pman diay. But anyways, I'm so soooo soooo grateful sa imooooo nga naa kas akong life. You know that! Gakabuang nagaling sad kos imo which is not good na kay unhealthy nana. But yeah saon taman. Balansi lang gud ta brader. 

Langga youu mean everything to me. Included ka sa mga future plans nako. U are one of the biggest reason na gusto ko maningkamot sakong career because I want to provide us a better future someday. Yes motivation japon nako akong pamilya di na malalis. Gusto sad baya ko mo tabang sa ila para masuklian akong mga kautangan. Unahon sa jud ko na sila gyud pud. Someday langga, someday mahimo tang successful. Paboran ta sa Ginoo at the perfect time na sya lang ang nakabalo. What we need to do is continue na mag exist and mag serve. And yes lang hypcorite kayu ni paminawon na message, and its between us lang jud nakabalo why ni. Always ko mag hisgot about kay God but akong lihok, is far away from his image. :( First of all, bisag inani ko, I wanna say Thank you na gidawat japon ko nimo. But that doesn't mean na inani ko langga, inani rajud ko perminte okay. Change is slow pag abot sa mga inani. But okay rana that's life. Continue lang ta po sa relationship and pag fight sa lyf. Iloveyouuuuu very much langga! Thank you for being with me. For everythinggggg! Like tanan jud as in. Iloveyouuu so muchhh. I'll end this letter here na po. 

But before that let me share to you a bible verse muna.

"Ruth 1:16 - Loyalty is a trait of a good woman, as shown by Ruth in her devotion to Naomi. “But Ruth said, ‘Do not urge me to leave you or to return from following you. For where you go I will go, and where you lodge I will lodge. Your people shall be my people, and your God my God.'” - Ruth 1:16


I wanna impose this kind of loyalty in myself bebe. That no matter what may happen sa lyf, sa imo lang jud ko. Wherever man ta dal.on sa panganod, kung didto ka didto sad ko. Together ko mag kuyog sa imoa langga. Because inana ko ka gugmaan.

With all my heart,
Keysii <3`;

  // Typewriter effect for initial text with a faster speed (50ms between characters)
  typeWriterEffect(letterText, "typewriter-text", 35, function() {
    // Optional: Further changes after the typewriter effect is finished
  });
});

function closeLetter(){
  window.close("./letter.html", "_blank");
}
  