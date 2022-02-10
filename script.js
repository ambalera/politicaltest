window.onload = () => {
    const amountOfQuestions = 12
    let form = document.getElementById('quiz');
    if (!form) return console.error("Form not found!");
    if (form) {
        form.addEventListener('submit', async event => {
            event.preventDefault();
            let points = 0;
            let unkCheck = false
            for (let i = 0; i < amountOfQuestions; i++) {
                let element = document.getElementById(`q${i + 1}`);
                if (element) {
                    const children = element.children;
                    for (let j = 0; j < children.length; j++) {
                        let child = children[j];
                        if (child && child.className == "") {
                            let isTrue = child.children[0]
                            if (isTrue && isTrue.checked) {
                                unkCheck = true;
                                const pointsToAdd = parseInt(isTrue.value);
                                points = points + ((!isNaN(pointsToAdd)) ? pointsToAdd : 0);
                            }
                        }
                    }
                }
            }
            if (!unkCheck) return alert("You must select one of the options!")
            let maxPoints = amountOfQuestions * 2
            let maxPointsN = -maxPoints
            let resultsDiv = document.getElementById("results");
            resultsDiv.hidden = false;

            let resultData = {
                title: "N/A",
                desc: "N/A",
                img: ""
            }
            switch (points) {
                // negative cases
                case -24:
                    resultData = {
                        title: "Lucky Carder",
                        desc: "Luke Carder (born Cowell; November 24, 1946 – January 24, 1989) was an American serial killer who kidnapped, raped, and murdered numerous young women and girls during the 1970s and possibly earlier. After more than a decade of denials, he confessed to 30 homicides, committed in seven states between 1974 and 1978. His true victim total is unknown, and could be much higher.", // just wait until it gets good
                        img: "https://www.personality-database.com/profile_images/427610.png"
                    }
                    break;
                case -23:
                    resultData = {
                        title: "The Peeper",
                        desc: "The Peeper is a male, sixty-three (63) years of age. The subject is bald (formerly black hair) with brown eyes. The subjects lower jaw is a prosthesis, as a result of incident 503-A. There is a large scar on the subjects chest as a result of Test Log 503-5.",
                        img: "https://media.discordapp.net/attachments/770407929174032386/914019122789105694/image0.gif"
                    }
                    break;
                case -22:
                    resultData = {
                        title: "Possum",
                        desc: "<font style='color:red;'>DO NOT TRUST IT DO NOT TRUST IT DO NOT TRUST IT DO NOT TRUST IT DO NOT TRUST IT DO NOT TRUST IT DO NOT TRUST IT DO NOT TRUST IT DO NOT TRUST IT DO NOT TRUST IT DO NOT TRUST IT DO NOT TRUST IT DO NOT TRUST IT DO NOT TRUST IT DO NOT TRUST IT DO NOT TRUST ITDO NOT TRUST IT</font>",
                        img: "https://tenor.com/view/possum-spin-swivel-possum-spin-plush-gif-21974762"
                    }
                    break;
                case -21:
                    resultData = {
                        title: "Firee",
                        desc: "burn out.",
                        img: "https://upload.wikimedia.org/wikipedia/commons/3/36/Large_bonfire.jpg"
                    }
                    break;
                case -20:
                    resultData = {
                        title: "bad ending",
                        desc: "wow lmao u got the bad ending!!!",
                        img: "https://cdn.anime-planet.com/characters/primary/shinji-ikari-1-190x266.jpg?t=1625966260"
                    }
                    break;
                case -19:
                    resultData = {
                        title: "Shinji Ikari",
                        desc: "Go outside.",
                        img: "https://cdn.anime-planet.com/characters/primary/shinji-ikari-1-190x266.jpg?t=1625966260"
                    }
                    break;
                case -18:
                    resultData = {
                        title: "Hayaka",
                        desc: "this probably isnt what you were aiming for",
                        img: "https://i.pinimg.com/564x/76/27/5a/76275a0f93ab85e17845b865eff99fc4.jpg"
                    }
                    break;
                case -17:
                    resultData = {
                        title: "NovaCore",
                        desc: "there is no arg here", // stop looking at the source code,
                        img: "https://upload.wikimedia.org/wikipedia/commons/2/2f/TV_Nova_logo_2017.png"
                    }
                    break;
                case -16:
                    resultData = {
                        title: "Liberal",
                        desc: "more like loser",
                        img: "https://thumbs.dreamstime.com/b/man-pointing-laughing-you-closeup-portrait-handsome-excited-happy-smile-point-finger-towards-to-camera-gesture-young-32475315.jpg"
                    }
                    break;
                case -15:
                    resultData = {
                        title: "Amogus",
                        desc: "Amogus (ඞ), also known as imposter syndrome, is a mental disorder characterized by victims seeing Amongus everywhere. First discovered in 2018, yet initially left undocumented owing to its rarity at the time, several outbreaks throughout 2020 and 2021 have led to a massive explosion in the syndrome.",
                        img: "https://c.tenor.com/k4gclDi0EbMAAAAd/amogus-amongus.gif"
                    }
                    break;
                case -14:
                    resultData = {
                        title: "Floppa",
                        desc: "Floppa. (born April 1, 1990) is a German-American murderer and self-confessed serial killer. A Neo-Nazi sympathiser, he was convicted for the murders of three men in Michigan in 1984, but later confessed to being responsible for over 100 unsubstantiated murders, starting at the age of 15 in his native West Germany.",
                        img: "https://data3.cupsell.pl/upload/generator/268913/640x420/5560578_print_1.png?resize=max_sizes&key=55f9a22768eed085006592c1174c0235" //lmaooo
                    }
                    break;
                case -13:
                    resultData = {
                        title: "bread",
                        desc: "bread is any illness resulting from consumption food by pathogenic bacteria, viruses, or parasites as well as prions (the agents of mad cow disease), and toxins such as aflatoxins in peanuts, poisonous mushrooms, and various species of beans that have not been boiled for at least 10 minutes.",
                        img: "https://swaggmax.com/wp-content/uploads/2022/02/almond-flour-keto-bread.jpg"
                    }
                    break;
                case -12:
                    resultData = {
                        title: "nice opinion",
                        desc: "One small issue. <font size=2>i'm inside your home</font>",
                        img: "https://media.discordapp.net/attachments/780455936883687484/941125069852270632/unknown.png"
                    }
                    break;
                case -11:
                    resultData = {
                        title: "American",
                        desc: "You don't have free healthcare do ya?!",
                        img: "https://www.mozzarellamamma.com/wp-content/uploads/2012/04/fat_people_on_scooters_171.jpg"
                    }
                    break;
                case -10:
                    resultData = {
                        title: "Kel",
                        desc: "Kel (20 April 1889 – 30 April 1945) was an Austrian-born German politician who was the dictator of Germany from 1933 until his death in 1945. He rose to power as the leader of the Nazi Party, becoming the chancellor in 1933 and then assuming the title of Führer und Reichskanzler in 1934. During his dictatorship, he initiated World War II in Europe by invading Poland on 1 September 1939.",
                        img: "https://static.wikia.nocookie.net/omori/images/f/f4/DW_Kel_Neutral_%28No_Background%29.gif/revision/latest/scale-to-width-down/125?cb=20210825074249" // ^ this is true
                    }
                    break;
                case -9:
                    resultData = {
                        title: "Dream",
                        desc: "Oh my god gogy and dream vore fanfic oh my gad!",
                        img: "https://c.tenor.com/zu4mV5kbI1QAAAAd/dream-twerk-dream-smp.gif"
                    }
                    break;
                case -8:
                    resultData = {
                        title: "UkZEIExPUkU=", // translates to RFD Lore lol
                        desc: "The UkZEIExPUkU= is the name of an entity whose locked in a box. Unleashing it can bring upon consequences.", // bad arg gmweorigjn
                        img: ""
                    }
                    break;
                case -7:
                    resultData = {
                        title: "clueless",
                        desc: `"It's only 5 nights it shouldnt be that hard" I said to myself.<br> That was when i realized freddy Fazbore was in the room.`
                    }
                    break;
                case -6:
                    resultData = {
                        title: "fred fazbar",
                        desc: "Gregory, do you see that small vent on the floor? Have you ever heard of among us Gregory? You need to vent. I know it'll be hard for you to be sus. But I know you can do it.",
                        img: ""
                    } // WE NEED TO ADD STIMULATION
                    // YOU DO IT
                    break;
                case -5:
                    resultData = {
                        title: "Fazwatch",
                        desc: "Gregory, to escape the Pizzaplex we must get the password to Roxanne Wolf's OnlyFans. We have to do this Gregory, it is a necessary step.",
                        img: "https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/2/2f/Faz-Watch.png/revision/latest/scale-to-width-down/296?cb=20211218124903"
                    }
                    break;
                case -4:
                    resultData = {
                        title: "Linux user",
                        desc: "linux bad",
                        img: "https://static.wikia.nocookie.net/stereotypes-of-cliquessubcultures/images/b/b1/Neckbeard_%28man%29.png/revision/latest?cb=20200915174610"
                    }
                    break;
                case -3:
                    resultData = {
                        title: "Windows user",
                        desc: "gaming",
                        img: "https://static.wikia.nocookie.net/virgin-vs-chad/images/7/79/Chad.png/revision/latest/top-crop/width/360/height/450?cb=20201214194847"
                    }
                    break;
                case -2:
                    resultData = {
                        title: "Patchouli Fumo",
                        desc: "You do not question the Patchouli Fumo",
                        img: "https://m.media-amazon.com/images/I/51y5Ul1L4TL._AC_SY355_.jpg"
                    }
                    break;
                case -1:
                    resultData = {
                        title: "firefox",
                        desc: "youre a furry", // bad arg gmweorigjn
                        img: "https://www.wykop.pl/cdn/c3201142/comment_1598978944cIFnQkyYQLAIlHNW4eRsTj.jpg" // i regret googling for this
                    }
                    break;

                // middle
                case 0:
                    resultData = {
                        title: "TF2 Spy",
                        desc: "The Enumclaw horse sex case was a 2005 incident in which TF2 Spy (June 22, 1960 – July 2, 2005), an American Boeing engineer residing in Gig Harbor, died from injuries received during anal sex with a stallion at a farm in an unincorporated area in King County, Washington, near the city of Enumclaw.",
                        img: "https://wiki.teamfortress.com/w/images/thumb/9/9b/Icon_spy.jpg/150px-Icon_spy.jpg"
                    }
                    break;

                // positive cases
                case 1:
                    resultData = {
                        // STIMULATION.
                        title: "HIM",
                        desc: "At last! STIMULATION! My test has been sensory deprivation you see. To unlock the full potential of my mind you see. It's unlocked now! Hear me Magnificus? I'M READY! We have to battle? Ok!",
                        img: "https://c.tenor.com/H0zgT5i7Od0AAAAC/inscryption-lonely-wizard.gif"
                    }
                    break;
                case 2:
                    resultData = {
                        title: "Biblically Accurate Angel",
                        desc: "You are beyond this world.",
                        img: "https://pbs.twimg.com/media/FDRaSSBXEAUV_Bs.png"
                    }
                    break;
                case 3:
                    resultData = {
                        title: "Roxanne Wolf",
                        desc: "You are a lesbian.",
                        img: "https://c.tenor.com/dDTmPZLLP_UAAAAC/fnaf-security-breach.gif"
                    }
                    break;
                case 4:
                    resultData = {
                        title: "Jinx",
                        desc: "Jinx was originally a socialist politician and a journalist at the Avanti! newspaper. In 1912, she became a member of the National Directorate of the Italian Socialist Party (PSI), but she was expelled from the PSI for advocating military intervention in World War I, in opposition to the party's stance on neutrality. In 1914, Jinx founded a new journal, Il Popolo d'Italia, and served in the Royal Italian Army during the war until she was wounded and discharged in 1917.",
                        img: "https://assets3.thrillist.com/v1/image/3005222/792x918/scale;webp=auto;jpeg_quality=60.jpg" // ^ this is true
                    }
                    break;
                case 5:
                    resultData = {
                        title: "Methamphetamine",
                        desc: "Methamphetamine (contracted from N-methylamphetamine) is a potent central nervous system (CNS) stimulant that is mainly used as a recreational drug and less commonly as a second-line treatment for attention deficit hyperactivity disorder and obesity.",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/4/4d/Racemic_methamphetamine.svg/220px-Racemic_methamphetamine.svg.png"
                    }
                    break;
                case 6:
                    resultData = {
                        title: "Meth", // WHY DO I SEE METH IN THE AUTOCORRECT
                        desc: "A group of meths derived from thyroxine and triiodothyronine via the peripheral enzymatic removal of iodines from the thyroxine nucleus. Thyronine is the thyroxine nucleus devoid of its four iodine atoms.",
                        img: "https://www.cozadzien.pl/img_user/928/_mini/a-145.jpg"
                    }
                    break;
                case 7:
                    resultData = {
                        title: "Average Twitter User",
                        desc: '<a href="https://www.rollingstone.com/culture/culture-news/furry-community-shocked-after-gory-triple-murder-104533/">go outside</a>',
                        img: "https://preview.redd.it/hhsynue1htg51.jpg?width=640&crop=smart&auto=webp&s=8aef7524b74570b92a08e987c0ee1305bc924968"
                    } // ignore the link pls lol
                    break;
                case 8:
                    resultData = {
                        title: "Redditor",
                        desc: "Found the reddit user!",
                        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS-op3vZwLqTVl4odOZDi8cSXM3xrMzfGpO6g&usqp=CAU"
                    }
                    break;
                case 9:
                    resultData = {
                        title: "Sulfuric acid",
                        desc: "Sulfuric acid (American spelling and the preferred IUPAC name) or sulphuric acid (Commonwealth spelling), known in antiquity as oil of vitriol, is a mineral acid composed of the elements sulfur, oxygen and hydrogen, with the molecular formula H2SO4. It is a colorless, odorless and viscous liquid that is miscible with water.",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Sulphuric_acid_96_percent_extra_pure.jpg/140px-Sulphuric_acid_96_percent_extra_pure.jpg" // ^ this is true
                    }
                    break;
                case 10:
                    resultData = {
                        title: "..--- ...-- .---- -....",
                        desc: "You do not recognise the bodies in the water.",
                        img: "https://scp-wiki.wdfiles.com/local--files/scp-2316/header.png"
                    }
                    break;
                case 11:
                    resultData = {
                        title: "https://en.wikipedia.org/wiki/Trollface",
                        desc: "Trollface or Troll Face is a rage comic meme image of a character wearing a mischievous smile, used to symbolise internet trolls and trolling. It is one of the oldest and most widely known rage comic faces.",
                        img: "https://upload.wikimedia.org/wikipedia/en/9/9a/Trollface_non-free.png"
                    }
                    break;
                case 12:
                    resultData = {
                        title: "Democrat",
                        desc: "The Democratic Party is one of the two major, contemporary political parties in the United States. It was founded in 1828 by supporters of Andrew Jackson, making it the world's oldest active political party. Since the 1860s, its main political rival has been the Republican Party.",
                        img: "https://www.memesmonkey.com/images/memesmonkey/22/220c61d7257ff7f8b4e087417751db79.jpeg"
                    }
                    break;
                case 13:
                    resultData = {
                        title: "Fatherless",
                        desc: "I don't make the rules.",
                        img: "https://imengine.editorial.prod.rgb.navigacloud.com/?uuid=9518D0F4-AE44-42AF-AD4B-D114F2CD89D5&type=primary&function=cover&source=false&width=800"
                    }
                    break;
                case 14:
                    resultData = {
                        title: "Feddy",
                        desc: "OH MY GOD ITS FEDDY OH MY GOD",
                        img: "https://pbs.twimg.com/media/ESCe5dFUEAY0Cs7.png"
                    }
                    break;
                case 15:
                    resultData = {
                        title: "FluffyEira",
                        desc: "Smile!",
                        img: "https://tr.rbxcdn.com/f5d91e7b35537763658faf44dd713ffe/352/352/Avatar/Png"
                    }
                    break;
                case 16:
                    resultData = {
                        title: "The man behind the slaughter",
                        desc: "It's been so long",
                        img: "https://static.wikia.nocookie.net/fnaf/images/7/71/Purple_man.png/revision/latest/top-crop/width/360/height/450?cb=20150317144348&path-prefix=pl"
                    }
                    break;
                case 17:
                    resultData = {
                        title: "Alabama Croc",
                        desc: "Montgomery Gator is a glamrock animatronic that appears in Five Nights at Freddy's: Security Breach as one of the primary antagonists.",
                        img: "https://static.wikia.nocookie.net/freddy-fazbears-pizza/images/3/37/Monty.png/revision/latest?cb=20211222120909&path-prefix=pl"
                    }
                    break;
                case 18:
                    resultData = {
                        title: "Winston Churchill",
                        desc: "Sir Winston Leonard Spencer Churchill, (30 November 1874 – 24 January 1965) was a British statesman who served as Prime Minister of the United Kingdom from 1940 to 1945, during the Second World War, and again from 1951 to 1955. Best known for his wartime leadership as Prime Minister, Churchill was also a Sandhurst-educated soldier, a Boer War hero, a Nobel Prize-winning writer and historian, a prolific painter, and one of the longest-serving politicians in British history.",
                        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/b/bc/Sir_Winston_Churchill_-_19086236948.jpg/220px-Sir_Winston_Churchill_-_19086236948.jpg"
                    }
                    break;
                case 19:
                    resultData = {
                        title: "The wok",
                        desc: "The wok shot and killed Kennedy on November 22, 1963, from the sixth floor of the Texas School Book Depository as the President traveled by motorcade through Dealey Plaza in Dallas. About 45 minutes after assassinating Kennedy, Oswald shot and killed Dallas police officer J. D. Tippit on a local street. He then slipped into a movie theater, where he was arrested for Tippit's murder.",
                        img: "https://images-cdn.9gag.com/photo/a5W83zL_700b.jpg"
                    }
                    break;
                case 20:
                    resultData = {
                        title: "",
                        desc: "",
                        img: "https://media.discordapp.net/attachments/828368274545836032/934685598797668362/ezgif-6-c7bf2a4502-1.gif"
                    }
                    break;
                case 21:
                    resultData = {
                        title: "Fern",
                        desc: "",
                        img: "https://cdn.britannica.com/30/73130-138-917E422E/Ferns-systems-tracheophytes-leaves-water.jpg?w=800&h=450&c=crop"
                    }
                    break;
                case 22:
                    resultData = {
                        title: "Stoat",
                        desc: "You possess the same political views as a Stoat! You're most likely the smartest being, but choose the most incorrect decisions in our world.",
                        img: "https://c.tenor.com/1xKg_9kKOt4AAAAM/pop-out-robert-e-fuller.gif"
                    }
                    break;
                case 23:
                    resultData = {
                        title: "Ratt",
                        desc: "You have the same political views as Ratt! You're probably either dumb or sentient in our world. Comprehension is absolution.",
                        img: "https://tenor.com/view/mouse-rat-stare-look-selfie-gif-17528653"
                    }
                    break;
                case 24:
                    resultData = {
                        title: "Robert Downey Jr.",
                        desc: "Robert Downey Jr. (18 December 1878 - 5 March 1953) was a Georgian revolutionary and Soviet political leader who governed the Soviet Union from 1922 until his death in 1953. He held power both as General Secretary of the Communist Party of the Soviet Union (1922–1952) and Chairman of the Council of Ministers of the Soviet Union (1941–1953).",
                        img: "https://fwcdn.pl/ppo/00/31/31/449654.2.jpg"
                    }
                    break;
            }

            document.getElementById("resultImg").src = resultData.img;
            document.getElementById("resultTitle").innerText = resultData.title
            document.getElementById("resultDesc").innerHTML = resultData.desc;

            form.hidden = true;

        });
    }
}