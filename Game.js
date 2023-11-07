const readlineSync = require("readline-sync");

function stelVraag(vraag, art) {
    console.clear();
    if (art) console.log(art);
    return readlineSync.question(vraag).toLowerCase();
}

function vraag0() {
    switch (stelVraag("who do you go with? \n A= (1)	Go with Liam.     B= Go with Maya \n")) {
        case 'a':
            vraag1();
            break;
        case 'b':
            vraag2();
            break;
    }
}

function vraag1() {
    switch (stelVraag("You both arrive at the fountain the next morning at 6:02 am. As expected there the fog is very much present. As you walk around the fountain you feel your body shiver from the cold. Suddenly Liam comes to you with a coin out of the fountain without any number or texture on it. He asks what you want to do with it. \n A= (1)	Take a look at it.     B= (4)	Drop it in the fountain. \n")) {
        case 'a':
            vraag3();
            break;
        case 'b':
            vraag4();
            break;
    }
}

function vraag2() {
    switch (stelVraag("You and maya arrive at the house and a dark and cold atmosphere falls over the two of you. You both enter and look around as much as you can. After about 30 minutes you find yourself in a room with Maya standing right behind you. As you turn on the light switch you see a dead body. Its the captain of the baseball team who went missing about 2 months ago. Mayas face turns pale as she stares at the body.  \n A= Take Maya outside and go back to investigate.     B= (6)	Continue looking around the house. \n")) {
        case 'a':
            vraag5();
            break;
        case 'b':
            vraag6();
            break;
    }
}

function vraag3() {
    switch (stelVraag("You tell Liam that you want to explore the area around the fountain. The fog adds an eerie atmosphere to the scene as you both start walking away from the fountain. The visibility is quite limited, and you can barely see a few feet ahead. You end up not finding anything for the rest of this time. As you open your locker later at lunch you find a note threatening you to stop investigating whatever you are after. \n A= Go to class.     B= Ask liam what happened. \n")) {
        case 'a':
            vraag7();
            break;
        case 'b':
            vraag8();
            break;
    }
}

function vraag4() {
    switch (stelVraag("Liam carefully tosses the coin into the fountain's water, and it disappears beneath the surface with a faint ripple. For a moment, nothing seems to happen. Then, suddenly, the fog begins to recede. The once obscured surroundings become more visible, and the temperature rises as the chill in the air dissipates. \n A= Go to class.     B= Ask liam what happened. \n")) {
        case 'a':
            vraag9();
            break;
        case 'b':
            vraag10();
            break;
    }
}

function vraag5() {
    switch (stelVraag("As you take maya outside she is still in total shock. You tell her to wait for you as you will go back to check for clues. As you turn around to get back inside she grabs you by the arm and asks you to stay with her by her side. You look at her but before you can respond you notice her crying out all her emotions as she is asking this of you. With a sinking hearth you accept her request.  \n A= Pull her in to a hug    B= Pat her hat and take her home. \n")) {
        case 'a':
            vraag12();
            break;
        case 'b':
            vraag11();
            break;
    }
}

function vraag6() {
    switch (stelVraag("You close the door to the room and continue looking around. Suddenly you and maya starting to feel weaker and weaker. After a good few minutes investigating the two of you collapse. The last thing you see before your eyes fall is maya being lifted by a masked figure. Then you feel a sharp pain. You just died.  \n you reached the ending Nosey students. Do you want to try again? \n A= Yes     B= No \n")) {
        case 'a':
            vraag0();
            break;
        case 'b':
            console.log("Have a horrible day.")
            break;
    }
}

function vraag7() {
    switch (stelVraag("You confront Liam with the note. He says that this is proof something or someone is trying to scare them off. He asks what your plan will be now.  \n A= find out who left the note.     B= Ask Maya for advise. \n")) {
        case 'a':
            vraag13();
            break;
        case 'b':
            vraag14();
            break;
    }
} 

function vraag8() {
    switch (stelVraag("You carefully fold the threatening note and tuck it away, choosing not to share it with Liam or anyone else. Lunchtime proceeds as usual, with your fellow students unaware of the sinister message hidden in your locker. The decision to keep the threat a secret leaves you with a sense of unease, but you're determined to continue your investigation discreetly. The mysteries of Olympia High weigh on your mind as you ponder the identity of the person who wants you to stop. The bell rings and lunch is over. \n A= skip class to find the identity of the person behind the note.     B= Attend class and investigate after school. \n")) {
        case 'a':
            vraag15();
            break;
        case 'b':
            vraag16();
            break;
    }
}

function vraag9() {
    switch (stelVraag("You are early in class and remember that you left your books in your locker. You tell Liam you will be back and go get your books. \n A= Ga naar 3     B= ga naar 3 \n")) {
        case 'a':
            vraag3();
            break;
        case 'b':
            vraag3();
            break;
    }
}

function vraag10() {
    switch (stelVraag("Curiosity gets the best of you, and you turn to Liam, asking him about the mysterious coin's impact on the fog. Liam, with a look of amazement on his face, explains that it seems the coin has a significant effect on the fog and that it might be linked to the strange occurrences at Olympia High. With the fog dissipating, you both now have a clearer view of your surroundings, and the mysteries surrounding the fountain and the school deepen. You're one step closer to unravelling the secrets of Olympia High and are eager to continue your investigation with Liam. They continue the rest of the day at school. As you open your locker later at lunch you find a note threatening you to stop investigating whatever you are after. \n A= Confront Liam with the note.     B= Keep the note to yourself.  \n")) {
        case 'a':
            vraag7();
            break;
        case 'b':
            vraag8();
            break;
    }
}

function vraag11() {
    switch (stelVraag("You wrap your arms around Maya, offering her the comfort and support she needs in this distressing situation. Her tears slowly subside as she leans into your embrace. You can feel the tension in her body slowly dissipating, and she starts to regain her composure. After a few moments of comforting Maya, you gently ask her if she's feeling better or if there's anything specific she wants to share with you. This could be an opportunity to get more information about what she experienced and how you can help her. \n A= Take her home with you.    B= Drop her off at her house. \n")) {
        case 'a':
            vraag17();
            break;
        case 'b':
            vraag18();
            break;
    }
}

function vraag12() {
    switch (stelVraag("het regent buiten wat ga je doen? \n A= Show Maya the pictures.     B= Close the book and go home.\n")) {
        case 'a':
            vraag19();
            break;
        case 'b':
            vraag20();
            break;
    }
}

function vraag13() {
    switch (stelVraag("You find out that the note was left there by none other than the janitor. You request to look at the security camera’s and find the janitor going in to a room you did not even know existed within the school. You and Liam look in to the room and find some kind of time machine.  \n A= step in the room.     B= Confront the Janitor. \n")) {
        case 'a':
            vraag0();
            break;
        case 'b':
            vraag21();
            break;
    }
}

function vraag14() {
    switch (stelVraag("She recommends checking the security camera. She then gives you a warm smile before walking off. \n A= find out who left the note.    B= find out who left the note. \n")) {
        case 'a':
            vraag13();
            break;
        case 'b':
            vraag13();
            break;
    }
}

function vraag15() {
    switch (stelVraag("You decide to keep a eye on your locker and eventually you notice someone trying to sneak another letter in. you run towards  them and tackle them to the ground. As you lift off the mask on the face it turns out  to be none other than your mom. She says you need to stop playing detective and grow up. \n you reached the ending Step in adulthood. do you want to play again? \n A= Ofcourse.     B= Maybe. \n")) {
        case 'a':
            vraag0();
            break;
        case 'b':
            console.log("Waarom speel je een spel in plaats van geld te maken door te werken?")
            break;
    }
}

function vraag16() {
    switch (stelVraag("You spent the rest of the day following classes and at the end of the day you walk home and think of potential suspects when suddenly you get knocked out and taken away. You now being murdered because you did not give up.  \n you reached the bad ending. Do you want to restart? A= If i am allowed to.     B= I dont have any more time. \n")) {
        case 'a':
            vraag0();
            break;
        case 'b':
            console.log("skill issue.")
            break;
    }
}

function vraag17() {
    switch (stelVraag("You two arrive at your home. You go inside and your parents are still asleep. you Sneak to you room together. After 1 hour sitting in the room together the two of you starting to get some thoughts. Before the  sun rises next morning the two of you have done it. Congratulations you now tamed her cave with your power pole. \n You reached The Dirty ending. do you want to replay?  A= YES!    B= next time. \n")) {
        case 'a':
            vraag0();
            break;
        case 'b':
            console.log("You only liked this ending because your still a virgin in real life.")
            break;
    }
}

function vraag18() {
    const art = `     O
    /|\\
    / \\`;
    switch (stelVraag("You drop her off at he house and drive off on your scooter. You are on your way to your house but then get hit by a truck on the road. You now bleeding out and die in a traffic accident.  \n You reached the Traffic accident ending. play again?\nA= yes.    B= no. \n", art)) {
        case 'a':
            vraag0();
            break;
        case 'b':
            console.log("Go get a license you maniac!")
            break;
    }
}

function vraag19() {
    switch (stelVraag("You flip through the book, examining the unsettling collection of pictures that feature you and even some with Maya. Each photo seems to have been taken without your knowledge or consent, and the feeling of being watched sends a shiver down your spine. You show the pictures to Maya, and her worry deepens as she studies the images. \n A= Discuss the pictures.    B= (23)	Report the pictures. \n")) {
        case 'a':
            vraag22();
            break;
        case 'b':
            vraag23();
            break;
    }
}

function vraag20() {
    switch (stelVraag("You close the book and say nothing is wrong. As you go outside you step on your scooter and wave Maya goodbye. \n A= Drop her off at her house.     B= Drop her off at her house. \n")) {
        case 'a':
            vraag18();
            break;
        case 'b':
            vraag18();
            break;
    }
}

function vraag23() {
    switch (stelVraag("The next day you and Maya report the pictures at the police. Sadly the officer helping you two is the culprit in disguise. He cuts you both up and eat your body parts in a huge human stew.  \n you reached the Canibal ending. retry? A= retry indeed.     B= you crazy!? \n")) {
        case 'a':
            vraag0();
            break;
        case 'b':
            console.log("if you stop now you get nighmares but who am i to judge.")
            break;
    }
}

function vraag21() {
    switch (stelVraag("You confront the janitor, but as you enter the room he walked in to everything turns black. As you open your eyes it seems like your back in class and both Maya and Liam come up to you. You now have travel back in time. \n A= ???     B= ??? \n")) {
        case 'a':
            vraag0();
            break;
        case 'b':
            vraag0();
            break;
    }
}

function vraag22() {
    switch (stelVraag("You both discussed the creepy pictures and come to conclusion that the only one who could have taken the pictures is your history teacher. The two of you confront him the next day with police and get him arrested. \n You reached the Victory ending. this is can be the last dicision. A= Play again     B= close game \n")) {
        case 'a':
            vraag0();
            break;
        case 'b':
            console.log("your right. best to stop after reaching the victory. but was it cannon?")
            break;
    }
}

vraag0();