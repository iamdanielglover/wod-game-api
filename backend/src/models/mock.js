const Merit = require('./merits')

const merits = [
    {
        name: "Archery",
        preqs: { strength: 2, dexterity: 2, athletics: 2 },
        levels: [
            {
                name: "Draw and Loose (●)",
                description: "Your character’s arm muscles are well-toned for the demanding task of repeatedly drawing a heavy bow. She gains +1 Strength for the purposes of a bow’s minimum Strength, Damage and Range."
            },
            {
                name: "Rapid Nock (●●)",
                description: "Your character can maintain a withering rate of fire. Once per turn, she may “reload” a bow as a reflexive action."
            },
            {
                name: "Arcing Fire (●●●)",
                description: "Arrows, like all other projectiles, travel in ballistic arcs. Your character is a master of estimating range, wind and other factors to arc shots much farther than they would travel if fired directly. Double the Ranges of any bow your character uses."
            },
            {
                name: "Plunging Fire (●●●●)",
                description: "Your character can eschew direct attacks in favor of launching arrows high into the air to plummet straight down on hapless victims. Your character’s bow attacks suffer no penalties for target concealment behind solid objects, so long as the target lacks overhead protection and your character can see any part of the target by which to gauge her location. For example, a target hiding behind a log with her foot sticking out applies no penalty, but a character in a fetal curl on a van’s floorboards receives normal protection.\nDrawback: Your character may use this maneuver only outdoors or in enclosed spaces large enough to provide for several hundred feet of vertical flight (e.g., football stadiums)."
            },
            {
                name: "Deadly Fire (●●●●●)",
                description: "At this level of expertise your character has spent so much time with a bow that she has honed an impressive musculature suited specifically to drawing and loosing arrows, one which allows her to wield a bow with a heavier draw weight as well as achieve a fuller draw without slowing down her rate of fire. This allows her arrows to hit with greater force, giving her +1 to the bows damage, raising it from 2L to 3L."
            },
            {
                name: "Speed Archer (●●●●●●)",
                description: "Your character's skill with a bow is such that she can unleash several arrows in rapid succession within a scant few seconds (one turn). In a single action, she may make one extra archery attack for a total of two attacks. Also, the archer must declare the targets of each attack before the first attack is rolled (label them within the Dice Roller), and each attack not directed at the initial target is at an additional -1 modifier."
            }
        ]
    },
    {
        name: "Armored Fighting",
        preqs: { strength: 3, stamina: 3 },
        levels: [
            {
                name: "Armored Fighting (●)",
                description: "Langschwert groups that emphasize historical techniques learn to fight in full armor. They know how to move and conserve energy in heavy chain mail or even full plate. These skills aren’t exclusive to European martial artists. They’re also found in Japanese koryu and modern military combatives. Your character knows how to fight in heavy armor. Every two dots in this Merit (at ●● or ●●●●) reduce her Brawl Skill, Melee Defense and Speed penalties for heavy armor by 1."
            }
        ]
    },
    {
        name: "Athletics Dodge ",
        preqs: { dexterity: 2, athletics: 1 },
        levels: [
            {
                name: "Athletics Dodge (●)",
                description: "Whenever your character performs a dodge you can add his Athletics Skill dots to his Defense instead of doubling his Defense. He essentially draws on his knowledge of how his body moves to parry and evade attacks rather than rely on his raw ability alone. Athletics Dodge applies against incoming Brawl-and Weaponry-based attacks, against thrown-weapon attacks, and against Firearms attacks made within close-combat range. Your character can move up to his Speed and perform an Athletics Dodge maneuver in a turn.\nA character can possess the Brawling Dodge, Athletics Dodge and Weaponry Dodge Merits, but only one can be used per turn."
            }
        ]
    },
    {
        name: "Boxing",
        preqs: { strength: 3, stamina: 2, brawl: 3 },
        levels: [
            {
                name: "Body Blow (●)",
                description: "Your character can deliver powerful blows that leave opponents reeling and gasping for air. If successes inflicted in a single Brawl attack equal or exceed a target's Size, the victim loses his next action. Note: Body Blow is Passive and can combine with other Fighting Style Maneuvers - The attack must exceed the greater of Size or Stamina."
            },
            {
                name: "Duck and Weave (●●)",
                description: "Your character is trained to instinctively duck and evade an opponent's blows. Use the higher of your character's Dexterity or Wits to determine his Defense when dealing with Brawl-based attacks only (not against Weaponry attacks). If a combination of Brawl- and Weaponry-based attacks is focused on your character in the same turn, use his normal Defense against both."
            },
            {
                name: "Combination Blows (●●●)",
                description: "Your character's training and experience allow him to devastate opponents with a flurry of rapid blows. He can make two Brawl attacks against the same target in a single action. The second attack suffers a -1 penalty. \nDrawback: Your character cannot use his Defense against any attack in the same turn in which he intends to use this maneuver.If he uses Defense against attacks that occur earlier in the Initiative roster, before he can perform this maneuver, he cannot perform the maneuver in the turn.He is too busy bobbing and weaving out of the way of attacks."
            },
            {
                name: "Haymaker (●●●●)",
                description: "Your character can deliver powerful, accurate blows capable of knocking an opponent unconscious with a single punch. A single Brawl attack that equals or exceeds the target's Size in damage might knock him unconscious. A Stamina roll is made for the victim. If it succeeds, he is conscious but he still loses his next action due to the Body Blow (see above). If it fails, he is unconscious for a number of turns equal to the damage done.\nDrawback: Your character cannot use his Defense against any attack in the same turn in which he intends to use this maneuver.If he uses Defense against attacks that occur earlier in the Initiative roster, before he can perform this maneuver, he cannot perform the maneuver in the turn.He is too busy bobbing and weaving out of the way of attacks."
            },
            {
                name: "Brutal Blow (●●●●●)",
                description: "Your character's accuracy and power are such that his fists are lethal weapons, able to injure or kill opponents. A brutal blow inflicts lethal instead of bashing damage.\nDrawback: Spend one Willpower point per attack.Note that this Willpower expenditure does not add three dice to the attack."
            }
        ]
    },
    {
        name: "Brute Force",
        preqs: { strength: 3, brawl: 3 },
        levels: [
            {
                name: "Body Blow (●)",
                description: "Your character can deliver powerful blows that leave opponents reeling and gasping for air. If successes inflicted in a single Brawl attack equal or exceed a target's Size, the victim loses his next action."
            },
            {
                name: "Juggernaut (●●)",
                description: "The character uses his entire body as a weapon. He barrels forward, smashing his head into his opponent and throwing the rest of his weight into the attack. This is an “all-out attack”. The character foregoes his Defense, but gains a +4 bonus to the roll as opposed to the normal +2 bonus. Normal all-out attack rules apply."
            },
            {
                name: "Crush and Bite(●●●)",
                description: "This maneuver is used only during a successfully maintained grapple. If the character succeeds on a grapple with his opponent, he may perform two attacks. (The character needn’t truly “crush and bite,” and may instead choke, head-butt, and/or even smother.)"
            },
            {
                name: "Bone Cracker (●●●●)",
                description: "This maneuver is used only during a successfully maintained grapple. The character grabs a foe’s limb with both hands, twisting as if wringing water from a dish rag. This is a targeted attack, and is made at –2 dice (due to targeting an arm or leg). If the attack does damage equal to or exceeding the target's Strength + Stamina, however, the bone breaks and the damage becomes lethal. A broken bone also forces the target to lose a dot of Dexterity until those lethal levels heal. Lowered Dexterity also takes away from the target’s Initiative modifier, Speed, and possibly Defense.\nDrawback: Spend one Willpower point to activate this attack.This point does not confer three additional dice to the attack.Also, both hands must be free for the attack to be successful."
            },
        ]
    },
    {
        name: "Chain Weapons",
        preqs: { strength: 2, dexterity: 3, weaponry: 3 },
        levels: [
            {
                name: "Impenetrable Defense (●)",
                description: "Your character may choose not to attack in a given turn, and instead whirl the chain in the direction of her opponent (or opponents). During the entire turn, regardless of Initiative, you may add +2 to your character’s Defense to deflect incoming blows. Your character also takes no penalty for defending against multiple opponents until she faces three attacks. The first and second attacks made against her cause no negative modifiers to her Defense."
            },
            {
                name: "Hand Bind (●●)",
                description: "This defensive maneuver is made against an incoming attack (Brawl or Weaponry-based). When a foe attacks with a weapon or with his body, your character wraps the attacking limb with the chain, grappling it with a Strength + Weaponry attack. The foe’s Defense is not subtracted from this roll, but his successes on the attack roll are. If your character is successful, the limb is bound with the chain, and the opponent can attempt to escape this next turn with a Strength + Brawl roll. If the foe achieved more successes on his attack, his attack is still diminished by whatever successes you rolled on the Hand Bind roll. This maneuver must be done on the attacker’s Initiative turn, and performing this action means your character cannot make an attack this turn."
            },
            {
                name: "Outside Choke (●●●)",
                description: "Your character attempts to wrap the chain around her opponent’s neck. Roll Strength + Weaponry. The victim may attempt to free himself on his next action with a Strength + Brawl roll, which is reduced by your character’s Strength +1. This maneuver is not to cause damage or kill the opponent — this maneuver is to render him unconscious by pressing the chain against the arteries of his neck, thus halting blood flow to his brain. If your character is successful on the grapple, she can begin to choke the victim on the following turn. For every turn that the choke hold is not broken, the victim suffers an additional –1 on all rolls to resist. When your character has accumulated a number of uninterrupted turns equal to the victim’s Stamina, he falls unconscious. This maneuver, when complete, causes a single point of bashing damage to the victim. This combat maneuver is ineffective against characters who need not breathe."
            },
            {
                name: "Whirl and Thrust (●●●●)",
                description: "Your character at this level is highly adept at using chains, and can make focused attacks with any part of the weapon. By whirling the chain a few times, she can build momentum on a single attack, which can be made with startling accuracy. On a targeted attack, you can ignore up to –2 of penalties associated with directed attacks. In other words, attacks to an opponent’s torso or limbs are done at no penalty, attacks the head would be at –1, to the hand –2 and to the eye –3.\nDrawback: Your character negates her Defense for the rest of the turn.If your character has applied her Defense against any incoming attack before her turn, she may not perform this maneuver."
            },
        ]
    },
    {
        name: "Combat Art",
        preqs: { dexterity: 3, stamina: 2, composure: 2 },
        levels: [
            {
                name: "Flourish (●)",
                description: "The character performs an example of her style in order to threaten rather than entertain (though audiences often experience a thrill when witnessing such a feat) as an instant action. She gains a bonus to Intimidation Skill rolls equal to her rating in the supplemented Skill or Fighting Style. This bonus lasts until the end of the scene or the character suffers a successful attack from an opponent (whichever comes first). Characters who enter the scene after the flourish is performed are not affected by it.\nDrawback: The flourishing character’s bonus is penalized by others who know her supplemented Skill or Fighting Style, as they might see through the emptiness of her action.For each dot the target of the character’s intimidation possesses in the same Skill or Fighting Style as that being supplemented, subtract one die from the flourishing character’s roll.Against sufficiently skilled opponents, this can completely cancel the bonus granted by the maneuver and even remove dice from the base Intimidation pool.A master sees through such petty posturing and thinks less of the student as a result."
            },
            {
                name: "Staged Combat (●●)",
                description: "The character has trained to make perfectly safe and choreographed combat seem exceedingly real. The character gains a bonus to Expression Skill or Subterfuge Skill rolls to falsify combat equal to her rating in the supplemented Skill or Fighting Style. Drawback: This maneuver can only be used with another individual who is working to fake the fight (and typically functions as a Teamwork action)."
            },
            {
                name: "Dancing for Mars (●●●)",
                description: "The character gains a bonus equal to her rating in her supplemented Skill or Fighting Style to Expression Skill rolls when utilizing her combat prowess as a performance piece (those using Combat Art to supplement Expression may double their Expression rating). This may be used to win competitions, secure a job teaching martial arts, or even intimidate one’s enemies. The bonus does not, however, ever apply to attacks made with the Skill, and use of this maneuver usually constitutes an extended action."
            },
            {
                name: "Function Follows Form (●●●●)",
                description: "The character has learned how to marry life and art, and her extensive training allows her to utilize the grace she exemplifies on the stage or gym mat to out-maneuver her enemies on the mean streets of the World of Darkness. The character gains one half of her rating in the supplemented Skill or Fighting Style, rounded up, as bonus dice to her attack roll and as a bonus to her Defense (which is not doubled in the case of a Dodge maneuver).\nDrawback: The character must spend one Willpower point during any turn in which she benefits from this maneuver."
            },
        ]
    },
    {
        name: "Combat Marksmanship",
        preqs: { strength: 2, dexterity: 2, composure: 3, firearms: 2 },
        levels: [
            {
                name: "Shoot First (●)",
                description: "Your character’s trained reflexes give her a split-second edge in a gunfight. Whenever she begins a combat with a firearm already in her hand, she gains a bonus to her Initiative roll equal to her Firearms Skill. If she also has the Quick Draw Merit for firearms and draws a firearm during the first turn of combat, this bonus is added retroactively, starting at the beginning of the second turn of combat."
            },
            {
                name: "Tactical Reload (●●)",
                description: "Your character’s muscle memory enables her to reload without conscious thought. Once per turn, she may reload a firearm that feeds from a detachable magazine or use a speedloader to reload a revolver, as a reflexive action."
            },
            {
                name: "Double Tap (●●●)",
                description: "When using a lever-action, pump-action or semi-automatic firearm, your character may make short burst attacks as if her gun were capable of autofire."
            },
            {
                name: "Bayonet Range (●●●●)",
                description: "Your character can maintain accuracy and control even when facing an opponent at arm’s length. The target’s Defense does not apply to firearm attacks your character makes within close-combat range."
            },
            {
                name: "Rapid Fire (●●●●●)",
                description: "Your character’s concentration is such that she can unleash a hail of bullets. In a single action, she may make one extra Firearms attack for each point by which her Composure exceeds 2. Each extra attack is made at a cumulative –1 modifier. Thus, she can perform a total of two attacks at Composure 3 (the second of which is at –1), three attacks at Composure 4 (the third of which is at –2) and four at Composure 5 (the fourth of which is at –3). She must declare the targets of all attacks before rolling the first one. Each attack not directed against her initial target suffers an additional –1 penalty. All attacks made with this maneuver must be single shots.\nDrawback: Your character cannot use her Defense against any attack in the same turn in which she intends to use this maneuver.If she uses Defense against attacks that occur earlier in the Initiative roster, before she can perform this maneuver, she cannot use Rapid Fire this turn.In addition, your character may not use this maneuver with bolt - action or break-action firearms."
            },
        ]
    },
    {
        name: "Disarm",
        preqs: { dexterity: 3, weaponry: 2 },
        levels: [
            {
                name: "Disarm (●)",
                description: "Your character has refined his Weaponry Skill to the extent that he can use a weapon to disarm opponents in close combat. When making a normal attack, compare your successes to the opponent's Dexterity. If you get a number of successes equal to or greater than the opponent's Dexterity, you can choose to have your character disarm him instead of doing damage. A weapon lands a number of yards away from the opponent equal to your successes rolled.\nDisarming is a different activity than specifically attacking or breaking weapons or items carried by opponents."
            }
        ]
    },
    {
        name: "Equipped Grappling",
        preqs: { dexterity: 3, brawl: 3, weaponry: 2 },
        levels: [
            {
                name: "Equipped Grappling (●)",
                description: "Your character knows how to use a blunt weapon to enhance her holds and locks. She presses the weapon against joints and muscle groups, or forces compliance with a few short blows. If she has a blunt weapon in hand, add the weapon’s Size to her Strength + Brawl pool whenever she attempts overpowering maneuvers.\nDrawbacks: This benefit doesn’t apply to initial attempts to establish a grapple.It only works with weapons that have a maximum Size of 3."
            }
        ]
    },
    {
        name: "Fast Reflexes",
        preqs: { dexterity: 3 },
        levels: [
            {
                name: "Fast Reflexes (●)",
                description: "+1 Initiative per dot. Your character's mix of sharp reflexes and steady nerves helps him get the drop on adversaries."
            },
            {
                name: "Fast Reflexes (●●)",
                description: "+1 Initiative per dot. Your character's mix of sharp reflexes and steady nerves helps him get the drop on adversaries."
            },
        ]
    },
    {
        name: "Fencing",
        preqs: { dexterity: 2, weaponry: 3 },
        levels: [
            {
                name: "Thrust (●)",
                description: "The thrust is a simple yet powerful attack. A fencer’s stance (one leg anchoring your character’s position and the other leg lunging him forward) gives this attack extra force. When your character makes a thrust attack, plunging the blade toward an opponent, he does so with a +1 bonus."
            },
            {
                name: "Feint (●●)",
                description: "Your character knows how to make a fake attack intended to throw off an opponent. Make a “normal” attack roll (Strength + Weaponry), and this roll is penalized by the opponent’s Defense, par usual. This attack is fake; it does not strike the foe or do any damage. If your character achieves even a single success, however, the opponent is momentarily confused and off-balance, and may not apply her Defense against the next attack she suffers (which may be from your character the following turn or may be from some other source beforehand)."
            },
            {
                name: "Riposte (●●●)",
                description: "A Riposte requires an attack to be made against your character. He steps out of the way of the attack using his Dodge (i.e., her Defense, doubled). While his opponent is open, he can then make a sudden and quick attack, which is performed at a –1 penalty. However, the opponent’s Defense does not further penalize the attack roll.\nDrawback: If your character suffers any further attacks on a turn where she has used Riposte, she cannot apply her Defense against them."
            },
            {
                name: "Moulinet (●●●●)",
                description: "If your character makes a successful hit on an adversary with his sword, he may then rotate his wrist and perform a quick spiral cut with the tip of the weapon. This additional cut requires no additional roll; the cut does lethal damage to the opponent equal to your character’s Dexterity.\nDrawback: To perform this maneuver, the character must spend a Willpower point before he makes her initial attack roll.The Willpower does not grant him the additional + 3 to attack.If the initial attack roll fails, the Willpower point is wasted and the Moulinet may not be added."
            },
        ]
    },
    {
        name: "Kendo - Japanese Fencing",
        preqs: { dexterity: 2, weaponry: 3 },
        levels: [
            {
                name: "Kaburi (●)",
                description: "Thrust becomes Kaburi; instead of thrusting, your character makes an overhead attack, but the +1 modifier remains."
            },
            {
                name: "Kiai (●●)",
                description: "Feint becomes Kiai. It involves shouting loudly while making a distracting maneuver."
            },
            {
                name: "Uchiotoshi Waza (●●●)",
                description: "Riposte becomes Uchiotoshi Waza, or “killing the sword.” The character may not step out of the way but instead parries the attack before her own counter-attack."
            },
            {
                name: "Nidan Waza (●●●●)",
                description: "Moulinet becomes Nidan Waza, allowing one completed attack and a second quick cut with the sword."
            },
        ]
    },
    {
        name: "Fighting Finesse",
        preqs: { dexterity: 3, weaponry: 2 },
        levels: [
            {
                name: "Fighting Finesse (●)",
                description: "Nothing"
            },
            {
                name: "Fighting Finesse (●●)",
                description: "Your character prefers to fight with a chosen weapon in a manner that favors agility over power. With that one weapon (a rapier or katana, for example), you may substitute your character's Dexterity for Strength when making attack rolls.\nThis Merit may be purchased multiple times to gain agility with more weapons, one for each purchase."
            }
        ]
    },
    {
        name: "Fresh Start",
        preqs: { athletics: 2 },
        levels: [
            {
                name: "Fresh Start (●)",
                description: "Effect: Your character dedicates an action to altering his standing in the Initiative order in the following turn and for all subsequent turns, choosing to insert himself at a new point in the roster, even if it means going first when he went last before. For example, if your Initiative roll resulted in a 9, but a rival whom your character wanted to waylay got a 12, your character can forfeit an action in turn one to get a fresh start and then act before that rival at 13 in turn two and afterward.\nDrawback: A character must take an action to change his Initiative ranking in subsequent turns.He can do nothing else in that action except move up to his Speed."
            }
        ]
    },
    {
        name: "Gladitorial",
        preqs: { strength: 3, presence: 2, weaponry: 3 },
        levels: [
            {
                name: "Stunning Attack (●)",
                description: "Your character can make a sudden, howling attack of such viciousness that her opponent is knocked off balance. You must declare a Stunning Attack as your action before the attack roll is made. If the number of successes inflicted in the single Weaponry attack roll exceed the victim’s Composure rating, the victim suffers a penalty on his next action equal to the difference. Note that your character must scream or howl while making this attack — it cannot be performed silently."
            },
            {
                name: "Weapon Slap (●●)",
                description: "Your character unleashes a powerful blow designed not to injure the opponent but to push his weapon or shield out of the way and create an opening that can be exploited. If the attack roll is successful, no damage is inflicted on the victim, but he does not apply his Defense (including the benefit added by a shield) to the next incoming attack (which may be from your character in the following turn, or from some other source beforehand)."
            },
            {
                name: "Lethal Accuracy (●●●)",
                description: "Your character has an innate understanding of the various types of armor and their weak spots. Attacks made with any lethal weapon have Armor Piercing 1 and penalties to hit specific targets or body parts are reduced by One."
            },
            {
                name: "Brutal Sacrifice (●●●●)",
                description: "Your character can intensify a lethal attack by staging it so that her weapon is embedded in the victim’s body and ensuring that the weapon’s removal will inflict more damage. You must declare a Brutal Sacrifice as your action before the attack roll is made. \nIf the roll is a success, your character leaves her weapon in the victim’s body.If the weapon is not removed, the victim suffers a –2 penalty on all actions due to pain and physical interference.If the weapon is removed, it inflicts additional lethal damage equal to the weapon’s damage rating.This additional damage requires no roll.If the victim does not remove the weapon himself, your character may attempt a Dexterity + Brawl attack to do so on a subsequent turn. \nDrawbacks: To perform this maneuver, your character must expend a point of Willpower before the attack roll is made.The Willpower does not grant an additional + 3 on the roll.If the initial attack roll fails, the Willpower point is wasted and the Brutal Sacrifice may not be added.In addition, your character loses the use of the weapon until it is removed from the victim and returned to her."
            }
        ]
    },
    {
        name: "Grappling",
        preqs: { strength: 2, dexterity: 3, stamina: 3, brawl: 2 },
        levels: [
            {
                name: "Sprawl (●)",
                description: "Your character knows how to “sprawl” and sink his weight to avoid being overpowered in a grapple. Subtract the higher of Strength +1 or Dexterity +1 from dice pools to overpower him in a grapple. This doesn’t apply to the initial hold, but subsequent attacks from the grip."
            },
            {
                name: "Takedown/Throw (●●)",
                description: "Your character knows how to rapidly close with your enemy and take him to the ground. In lieu of securing a grappling hold, he can immediately render the opponent prone. Furthermore, if he takes an opponent down this way, he can choose whether or not to go prone with the target. Mixed martial arts fighters take a crouching (but still standing) position from here and deliver vicious beatings with their hands – a technique called “ground and pound."
            },
            {
                name: "Chokehold (●●●)",
                description: "Your character can efficiently choke enemies by cutting off blood flow to their brains. If he overpowers an opponent in a grapple, he can start the choke. The choke inflicts a cumulative –1 die penalty to the opponent’s actions for each turn it’s maintained. The victim falls unconscious if he endures a choking attack for a number of consecutive turns equal to his Stamina. Your character can continue choking an unconscious victim. This inflicts lethal damage equal to the attacker’s Strength + Brawl successes every turn."
            },
            {
                name: "Submission Hold (●●●●)",
                description: "Opponents caught in your joint locks can’t escape without injuring themselves. If your character scores more successes than his opponent’s Size in an immobilization attempt, the victim can’t attempt any physical action – including breaking free – without suffering a point of lethal damage. This penalty lasts from the moment of immobilization to end of the next turn."
            },
        ]
    },
    {
        name: "Hand of a Killer",
        preqs: { dexterity: 3, weaponry: 2 },
        levels: [
            {
                name: "Hand of a Killer (●)",
                description: "Your character has a talent for using mundane objects to inflict pain; in his hands, almost anything with the right heft or edge is an effective killing tool. The character ignores the standard -1 penalty for improvised weapons. This doesn’t negate other limitations inherent to certain objects, like a damage maximum or a propensity to break in combat.\nDrawback: The character can never take a specialty relating to the use of a melee weapon, ranged weapon or firearm.While the character is capable of using actual, designed weapons, they don’t interest him enough to become especially proficient in them."
            }
        ]
    },
    {
        name: "Heavy Hands",
        preqs: { strength: 3, brawl: 2 },
        levels: [
            {},
            {},
            {
                name: "Heavy Hands (●●●)", 
                description: "Your character has a strong upper body, tough knuckles and enough raw aggression to punch harder than most people. Her strikes inflict +1 damage. This even applies when she’s wearing knuckledusters or other blunt fist loads.\nDrawback: The benefit does not apply to biting, grappling attacks or sharp weapons(including blades or spiked fist loads) – just standard unarmed strikes."
            }
        ]
    },
    {
        name: "Iron Stamina",
        preqs: { stamina: 3 },
        levels: [
            {
                name: "Iron Stamina (●)",
                description: "Each dot eliminates a negative modifier (on a one-for-one basis) when resisting the effects of fatigue or injury. For example: A character with Iron Stamina ●● is able to ignore up to a -2 modifier brought on by fatigue. The Merit also counteracts the effects of wound penalties. So, if all of your character's Health boxes are filled (which normally imposes a -3 penalty to his actions) and he has Iron Stamina ●, those penalties are reduced to -2. This Merit cannot be used to gain positive modifiers for actions, only to cancel out negative ones."
            },
            {
                name: "Iron Stamina (●●)",
                description: "Each dot eliminates a negative modifier (on a one-for-one basis) when resisting the effects of fatigue or injury. For example: A character with Iron Stamina ●● is able to ignore up to a -2 modifier brought on by fatigue. The Merit also counteracts the effects of wound penalties. So, if all of your character's Health boxes are filled (which normally imposes a -3 penalty to his actions) and he has Iron Stamina ●, those penalties are reduced to -2. This Merit cannot be used to gain positive modifiers for actions, only to cancel out negative ones."
            },
            {
                name: "Iron Stamina (●●●)",
                description: "Each dot eliminates a negative modifier (on a one-for-one basis) when resisting the effects of fatigue or injury. For example: A character with Iron Stamina ●● is able to ignore up to a -2 modifier brought on by fatigue. The Merit also counteracts the effects of wound penalties. So, if all of your character's Health boxes are filled (which normally imposes a -3 penalty to his actions) and he has Iron Stamina ●, those penalties are reduced to -2. This Merit cannot be used to gain positive modifiers for actions, only to cancel out negative ones."
            },
        ]
    },
    {
        name: "Iron Stomach",
        preqs: { stamina: 2 },
        levels: [
            {},
            {
                name: "Iron Stomach (●)",
                description: "Your character can eat almost anything, under almost any conditions. Greasy bacon and runny eggs on a raging hangover? No problem. The green meat in the fridge? No problem. Milk two weeks past its expiration date? No problem. He could be dropped in the middle of the forest and could live off bugs and roots as long as necessary in order to survive - and with no ill effects. Add two dice to appropriate Survival Skill rolls. Add three to Stamina to resist deprivation." 
            }
        ]
    },
    {
        name: "Krav Maga",
        preqs: { strength: 2, dexterity: 3, wits: 3, brawl: 3 },
        levels: [
            {
                name: "Immediate Defense (●)",
                description: "The character has learned to act quickly to neutralize a threat and make a fast escape. She gains a bonus to her Initiative equal to her Brawl Skill when fighting armed opponents."
            },
            {
                name: "The First Moment (●●)",
                description: "The character has trained her reaction time to a tenth of a second, acting more by instinct than thought. If the character’s initiative roll results in a tie with another character involved in combat, the character automatically acts before his opponents and allies. Initiative Modifiers are not compared and initiative is never determined by a roll-off (though if multiple characters aside from the Krav Maga practitioner rolled the same initiative, their initiative ratings are resolved as normal). If two characters possess this maneuver, they act at the same time, each resolving their action as if the other had not yet acted. This can result in two characters killing each other in the same heated moment."
            },
            {
                name: "Impenetrable Defense (●●●)",
                description: "The character knows that offense and defense are one in the same. The character may add his rating in his Brawl Skill to his Defense or Dodge against a single incoming attack. The bonus from this maneuver combines with that from Brawling Dodge.\nDrawback: The character must expend a Willpower point to perform this maneuver.This maneuver is reflexive, and a character may use it and perform an instant action(such as attacking) so long as she did not use the Dodge action."
            },
            {
                name: "Disarming Defense (●●●●)",
                description: "The character twists her torso out of danger while grabbing her opponent’s wrist and pulling him forward, using her own torso for leverage as she tears his weapon from his hand. This acts as the Disarm Merit save that it utilizes the Brawl Skill. Rather than knocking the weapon away, the character takes the weapon from her opponent, and may use it the following turn."
            },
            {
                name: "Finishing the Fight (●●●●●)",
                description: "The character moves defensively, but knows when to lash out at an enemy to bring him crashing to the ground. The character declares and benefits from a Dodge action (including Brawling Dodge, if she possesses it). She may abort that action to make an immediate, reflexive counter-attack against an opponent whose attack fails to overcome her Dodge trait. Drawback: This maneuver costs the character one Willpower point to enact. After making her counter-attack, the character loses her Defense for the remainder of the turn."
            },
        ]
    },
    {
        name: "Kung Fu",
        preqs: { strength: 2, dexterity: 2, stamina: 2, brawl: 2 },
        levels: [
            {
                name: "Focused Attack (●)",
                description: "Physical conditioning and accuracy allow your character to deliver blows at vulnerable spots on targets. Penalties to hit specific targets are reduced by one. Even when a specific part of an opponent is not targeted, armor penalties to your character's Brawl attacks are reduced by one."
            },
            {
                name: "Iron Skin (●●)",
                description: "Your character has hardened his body to physical blows, allowing him to withstand repeated hits with minimal effect. He has an effective armor trait of 1 against bashing attacks only."
            },
            {
                name: "Defensive Attack (●●●)",
                description: "Your character has mastered the ability to fight defensively. When using this maneuver, your character gains +2 to his Defense for the turn, but any attack he makes suffers a -2 penalty. He can move no more than his Speed while performing a Defense Attack maneuver in a turn."
            },
            {
                name: "Whirlwind Strike (●●●●)",
                description: "Your character can unleash a storm of blows against an opponent. He can make number of extra Brawl attacks for each point of Dexterity that he has above 2 in a single action. Each extra attack is made at a cumulative -1 modifier. Thus, he can perform a total of two attacks at Dexterity 3 (the second of which is at -1), three attacks at Dexterity 4 (the third of which is at -2), and four at Dexterity 5 (the fourth of which is at -3). All attacks must be on the same target.\nDrawback: Your character cannot use his Defense against any attack in the same turn in which he intends to use this maneuver.If he uses Defense against attacks that occur earlier in the Initiative roster, before he can perform this maneuver, he cannot perform the maneuver this turn.He is too busy bobbing and weaving out of the way of attacks."
            },
            {
                name: "Lethal Strike (●●●●●)",
                description: "By focusing his might and concentration, your character can kill or maim an opponent with a well-placed strike. A strike inflicts lethal instead of bashing damage.\nDrawback: Spend one Willpower point per attack.Note that this Willpower expenditure does not add three dice to the attack."
            }
        ]
    },
    {
        name: "Langschwert",
        preqs: { strength: 3, weaponry: 3 },
        levels: [
            {
                name: "Wards(●)",
                description: "Your character knows how to use his weapon to deflect and threaten away attacks. Add 1 to his Defense when he wields a weapon compatible with this Fighting Style."
            },
            {
                name: "Fool's Guard (●●",
                description: "Your character knows how to hold his weapon low to seemingly invite attack, but when the opponent strikes, he can quickly raise it to counter. Instead of offering a normal Defense, roll Strength + Weaponry + 1 die against the opponent’s attack. This is an instant action. Each success reduces the attack’s damage by 1, and if the characters successes exceed the attacker’s, the difference is inflicted upon the attacker as damage from the character’s weapon.\nDrawback: The character cannot employ his Defense in any turn where he uses the Fool’s Guard."
            },
            {
                name: "Half Sword (●●●)",
                description: "Your character grabs the midpoint of his weapon to rain more powerful thrusts and blows at a shorter range, almost as if he was using the blade as a small spear. If his attack succeeds, add 2 to the weapon’s damage (do not add this as the weapon’s equipment bonus, but after rolling).\nDrawback: The weapon’s reduced range nullifies the Wards maneuver, so the character loses its Defense bonus.It also reduces the character’s Weaponry- based dice pool by one."
            },
            {
                name: "Doubling Cut (●●●●)",
                description: "Your character strikes the enemy with two quick cuts. He can make two Weaponry attacks against an opponent in the same turn.\nDrawback: Your character cannot employ his Defense or the Fool’s Guard in the same turn as he uses this maneuver."
            },
            {
                name: "Wrathful Cut (●●●●●)",
                description: "Your character steps in with a powerful blow, capable of overwhelming his enemy’s defenses. When he makes an All-Out Attack, add his Weaponry Skill dots instead of the normal +2 bonus.\nDrawback: Your character cannot employ his Defense or the Fool’s Guard in the same turn as he uses this maneuver."
            },
        ]
    },
    {
        name: "MAC",
        preqs: { strength: 2, dexterity: 2, stamina: 2, brawl: 2 },
        levels: [
            {
                name: "Tactician’s Sense (●)",
                description: "The character gauges the body language of combatants in his proximity. In game terms, he can make a Reflexive Wits + Composure perception roll and gauge the Initiative modes of all combatants before a fight starts."
            },
            {
                name: "Atemi Attack (●●)",
                description: "The human body has a variety of pressure points, any of which can cause an opponent great pain. The trained fighter knows where to strike for maximum effect. When striking with a Brawl or Weaponry attack, the character may ignore up to 1 point of the enemy’s Armor protection per dot in this Fighting Style."
            },
            {
                name: "Forearm Choke (●●●)",
                description: "The character applies pressure to an enemy’s carotid artery in an attempt to knock him out. The character must successfully achieve a Grapple attack[1]. The character may apply the choke hold from the following turn. The hostile may attempt to free himself on his next action with Strength + Brawl, his dice pool penalized by the character’s Strength + 1. This maneuver is designed to render the foe unconscious. The foe may resist each turn at a cumulative –1 dice pool penalty. When your character has sustained the choke hold for a number of turns equal to the hostile’s Stamina, the hostile is rendered unconscious, and sustains a single point of bashing damage. The Forearm Choke is useless against creatures that do not need to breathe."
            },
            {
                name: "Bullring (●●●●)",
                description: "The character is trained in fighting off multiple opponents simultaneously. His Defense is applied in full to each and every simultaneous hand-to-hand attack in a single turn."
            },
            {
                name: "Lethal Strike (●●●●●)",
                description: "The soldier’s hands become deadly weapons when the character spends a Willpower point. A successful Brawl strike delivered in a turn in which he spends Willpower delivers lethal, rather than bashing, damage.\nDrawback: Because the lethal attack takes place in that turn, the character cannot spend Willpower to boost his attack dice pool."
            },
        ]
    },
    {
        name: "Natural Immunity",
        preqs: { stamina: 2 },
        levels: [
            {
                name: "Natural Immunity (●)",
                description: "Your character gains a +2 modifier on Stamina rolls to resist infection, sickness and disease. His immune system is exceptionally effective at resisting infections, viruses and bacteria. Your character can probably count on one hand the number of times he's been seriously ill."
            }
        ]
    },
    {
        name: "Perfect Stillness",
        preqs: { stealth: 1 },
        levels: [
            {
                name: "Perfect Stillness (●)",
                direction: "Your character has learned how to avoid the notice of her Keeper by remaining utterly motionless for hours at a time. Whenever she wishes, she can remain perfectly still for an entire scene. Except for breathing softly and silently, your character can stand without moving a muscle for an entire scene, even if the position she is in would be exceedingly uncomfortable for others. In addition to various other uses of this Merit, if your character remains stationary while hiding, all rolls to notice or locate her are made at a –2 penalty. This Merit is common among Fairest Muses, some of whom spent much of their time in Arcadia as living statues."
            }
        ]
    },
    {
        name: "Quick Draw",
        preqs: { dexterity: 3 },
        levels: [
            {
                name: "Quick Draw (●)",
                description: "Your character can draw a pistol and fire or pull a melee weapon and attack without penalty as a single action in a turn. If a weapon is hidden on your character's person (under a coat or in a purse), it can be drawn and used in the same turn without the normal loss of Defense. A separate Quick Draw Merit must be acquired for use with firearms and melee weapons."
            }
        ]
    },
    {
        name: "Sniping",
        preqs: { dexterity: 3, resolve: 3, firearms: 3, stealth: 2 },
        levels: [
            {
                name: "On Scope (●)",
                description: "Your character has an intuitive understanding of long-range ballistics and has spent countless hours straining to pick out tiny details through a telescopic sight. The maximum bonus she may receive from aiming is increased to her Composure +1 for semiautomatic and automatic rifles and her Composure +2 for break-action, bolt-action and lever-action rifles. In addition, when using a scope or other long-range optic device (e.g., binoculars), she receives a +2 bonus to all perception rolls."
            },
            {
                name: "Battlesight Zero (●●)",
                description: "Once your character is familiar with the capabilities of a rifle, she can wring unparalleled performance from it. Whenever your character sights in a rifle, she doubles the number of attacks that receive the bonus from this process. In addition, whenever she makes an attack with a rifle that receives this bonus, the weapon’s short range is increased by five yards times her Wits, medium range by twice this amount and long range by three times this amount."
            },
            {
                name: "Focused Shot (●●●)",
                description: "Your character can lurk motionless in ambush for days, ignoring sleep deprivation, temperature extremes and even life-threatening injuries in the name of putting lead on target. When making an aimed shot, she may ignore an amount of penalties for wounds, drugs, disease, pain, fatigue, environmental conditions and similar factors equal to her Resolve. For example, if your character has Resolve 4, has two points of Health remaining (–2), has gone without sleep for 36 hours (–2) and has ingested strong hallucinogens (–3), her aimed shots suffer only a –3 penalty instead of the –7 that affects all her other dice pools."
            },
            {
                name: "Tactical Intervention (●●●●)",
                description: "Split-second timing and nerves of steel enable your character to take advantage of the smallest opportunities for accurate shot placement. When making an aimed shot, all penalties for shooting into close combat and for concealment are halved, rounding down."
            },
            {
                name: "One Shot, One Kill (●●●●●)",
                description: "When your character picks up her rifle, people fall down. It’s just that simple. When making an aimed shot, do not add the rifle’s Damage rating to the attack dice pool (though “9 again” or “8 again” still applies if it would normally). Instead, if the attack succeeds, add the rifle’s Damage rating as extra successes.\nDrawback: Spend one Willpower per attack.Note that this Willpower expenditure does not add three dice to the attack."
            },
        ]
    },
    {
        name: "Sojutso",
        preqs: { strength: 3, dexterity: 2, weaponry: 3 },
        levels: [
            {
                name: "Warding Stance (●)",
                direction: "The basic advantage of a spear or fixed bayonet is its length. Trained fighters learn to keep the tip of the weapon pointed forward, constantly threatening incoming attackers. Thus, this maneuver lets a practitioner attack first whenever an opponent using a smaller-Size melee weapon attacks from the front."
            },
            {
                name: "Thrust (●●)",
                direction: "The character knows how to deliver precise, powerful thrusting blows. His spear or bayonet gains the 9 again quality. If the spear or fixed bayonet already has this quality, he gains no further benefit."
            },
            {
                name: "Block and Strike (●●●)",
                direction: "Your character can deflect incoming attacks with the haft or stock of his weapon and swiftly strike back. When using this maneuver, your character gains +2 to his Defense for the turn, but any attack he makes suffers a –2 penalty. Unlike similar maneuvers (such as Two Weapons' Deflect and Thrust maneuver), the character can move freely while using the technique."
            },
            {
                name: "Great Thrust (●●●●)",
                direction: "The character lunges forward, putting his entire body behind a powerful thrust. If he employs an All Out Attack [2], he adds a number of dice equal to his lower of his Strength or Weaponry Skill instead of the standard two dice.\nDrawback: If the attack inflicts at least as much lethal damage as the opponent’s Size, the character lodges the weapon deep in his target’s body.Dislodging the weapon requires an additional Strength + Weaponry roll, but automatically inflicts a point of lethal damage."
            },
        ]
    },
    {
        name: "Spetsnaz Knife Fighting",
        preqs: { dexterity: 3, weaponry: 2 },
        levels: [
            {
                name: "Anticipate Attack (●)",
                description: "Those trained in Special Forces knife fighting know to move fast before incoming attacks and in response to them. To do this requires a level of anticipation and strategy even before a combat begins. At this level, your character may substitute his Weaponry score for his Composure when determining his Initiative modifier. This is only during combat situations in which your character is using an edged or pointed weapon of Size 2 or under."
            },
            {
                name: "Advantageous Angle (●●)",
                description: "Your knife-wielder knows how to make a feinted attack from the side or rear in a way that grants him advantage. While normally such attacks confer no bonuses, the character is aware how to deceive an opponent into mounting a Defense against an attack that isn’t coming — and then stage an attack from a different angle. The foe’s Defense is at –1 during such an attack.\nDrawback: This maneuver can only be made every other turn."
            },
            {
                name: "Vital Attack (●●●)",
                description: "Your character knows how to target his attacks to vital organs and other vulnerabilities. Attacks made with a knife have Armor Piercing 1, and penalties to hit specific targets or body parts are reduced by one."
            },
            {
                name: "Slash and Stab (●●●●)",
                description: "Your character’s deftness with a knife allows him to make two attacks against one target in a single action. The first attack is a slash, the second a thrusting stab. The first attack is made as normal, but the second suffers a –1 penalty.\nDrawback: This quick maneuver leaves the character somewhat more vulnerable against the next attack coming toward him.His Defense is counted as being one less against the next attack."
            },
        ]
    },
    {
        name: "Staff Fighting",
        preqs: { strength: 3, dexterity: 2, weaponry: 2 },
        levels: [
            {
                name: "Trip (●)",
                description: "Your character can use her polearm to trip a single opponent, hopefully sending him to the ground.It is a contested roll pitting the character’s normal attack roll against the opponent’s Dexterity + Athletics.The character’s attack is penalized by the foe’s Defense, as usual.If the opponent falls, assume Knockdown rules.In this case, however, the fall to the ground incurs a single point of bashing damage to the opponent."
            },
            {
                name: "Temple Strike (●●)",
                description: "Your character brings her staff against the side of her adversary’s head. The normal –3 penalty to hit the head still applies, but if the damage meets or exceeds the target’s Size, the target falls unconscious for a number of turns equal to the damage done. This damage is usually bashing, as it is meant to be performed with a blunt staff. The damage can be performed with a bladed weapon such as the naginata, however. The effect is the same, but the damage is now lethal instead of bashing."
            },
            {
                name: "Dangerous Radius (●●●)",
                description: "With this technique, your character can swing her weapon in a wide arc, hitting anyone within three yards. Make a normal attack roll for the character (Strength + Weaponry + weapon bonuses). This roll receives a dice penalty equal to the number of opponents hit with this strike (to a maximum of –5 dice). Successes achieved on this roll are done as damage to all within the three-yard radius. If the weapon is a normal blunt polearm (i.e., a staff), it does bashing. If bladed, the weapon causes lethal damage.\nDrawback: This attack cannot distinguish between friend or foe.Any allies within the three- yard radius are hit along with enemies.The technique cannot be pulled to exclude friends from the damage."
            },
        ]
    },
    {
        name: "Thrown Weapons",
        preqs: { dexterity: 3, athletics: 2 },
        levels: [
            {
                name: "Distance (●)",
                description: "Your character learns to properly gauge a target’s distance and modify her technique to match it. Double her short, medium and long range throwing ranges."
            },
            {
                name: "Hidden Weapons (●●)",
                description: "The character knows how to rapidly retrieve a throwing weapon from a sleeve, holster or other prepared spot on her body. She never needs to use an action to draw a throwing weapon from a prepared spot."
            },
            {
                name: "Precision (●●●)",
                description: "The character knows how to deliver precisely thrown weapons over relatively long distances. His thrown weapons gain the 9 again quality when attacking a Specified Target (see WoD Core, page 165) with an associated penalty of -2 or more. If the thrown weapon already has this quality, he gains no further benefit."
            },
            {
                name: "Twin Blades (●●●●)",
                description: "Your character's training and experience allow him to throw two edged weapons at once. He can make two Thrown attacks against the same target in a single action. The second attack suffers a -1 penalty. Your character still suffers the -2 offhand penalty when attacking with a weapon in his secondary hand (unless you have also purchased the Ambidextrous Merit)."
            },
        ]
    },
    {
        name: "Two Weapons",
        preqs: { dexterity: 3, weaponry: 3 },
        levels: [
            {
                name: "Whirling Blades (●)",
                description: "Your character's Dodge trait is not penalized by multiple attacks staged against him in a turn until the number of attacks exceeds his Weaponry dots, at which point each attack thereafter reduces his Dodge by -1. So, if your character (with 2 Defense and 3 Weaponry) dodges attacks in a turn, the first three incoming attacks suffer his full Dodge trait as a penalty (-4). The fourth suffers a -3 penalty, the fifth suffers a -2 penalty, and so on. Basically, your character's weapons move so quickly all about him that opponents in close combat have trouble reaching or assaulting him."
            },
            {
                name: "Deflect and Thrust (●●)",
                description: "Your character can avoid attacks and strike back in the same motion. When using this maneuver, your character gains +2 to his Defense for the turn, but any attack he makes suffers a -2 penalty. He can move no more than his Speed while performing a Deflect and Thrust maneuver in a turn."
            },
            {
                name: "Focused Attack (●●●)",
                description: "Your character can attack a single target twice in one turn. The second attack suffers a -1 penalty.\nDrawback: Your character cannot use his Defense against any attack in the same turn in which he intends to use this maneuver.If he uses Defense against attacks that occur earlier in the Initiative roster, before he can perform this maneuver, he cannot perform the maneuver this turn.He is too busy bobbing and weaving out of the way of attacks."
            },
            {
                name: "Whirlwind Strike (●●●●)",
                description: "Your character can make a single attack on two different targets in one turn. The targets cannot be a distance apart in excess of your character's Speed trait. The second attack suffers a -1 penalty.\nDrawback: Your character cannot use his Defense against any attack in the same turn in which he intends to use this maneuver.If he uses Defense against attacks that occur earlier in the Initiative roster, before he can perform this maneuver, he cannot perform the maneuver this turn.He is too busy bobbing and weaving out of the way of attacks."
            }
        ]
    },
    {
        name: "Atavism",
        preqs: { intelligence: 2 },
        levels: [
            {
                name: "Atavism (●)",
                description: "You’re a throwback to a time when men were closer to beasts. Whether your mental state matches a warped and twisted body, or you look out of a normal face with the eyes of an ancient predator, you’re not normal. You run on instinct more than intellect, your body moving in response to signals that your brain never consciously registers. Like an animal, you use the higher of your Dexterity and Wits to determine your Defense."
            }
        ]
    },
    {
        name: "Berserker",
        preqs: { resolve: 3, stamina: 3 },
        levels: [
            {
                name: "Strength in the Fury (●)",
                description: "A berserker goes all-out, all the time, and her body rewards her heedless actions with increased power and speed. The berserker gains an additional die (for a total of three) when taking allout attacks."
            },
            {
                name: "Adrenaline Rush (●●)",
                description: "The berserker ignores pain and her foes’ attacks only drive her madness, pushing her to brutally defeat them. The character gains a point of armor against bashing and lethal attacks as she casually shrugs off weak attacks."
            },
            {
                name: "Inhuman Alacrity (●●●)",
                description: "A berserker’s opponents are shocked and frightened by the speed and ferocity that manifests in her actions, making her far more difficult to hit. The character gains an additional 2 dice (for a total of four dice) when using Willpower to avoid suffering an attack."
            },
            {
                name: "Ignorant in the Face of Death (●●●●)",
                description: "The berserker’s rage overrides her physical limitations, pushing her to greater feats even when others would fall in pain. In a mad, violently fit, the character can ignore some or all wound penalties for a turn.\nDrawback: The character sacrifices part of her Defense in any turn during which she ignores wound penalties on a one-for-one basis(for example, by ignoring two dice of wound penalties, she suffers a –2 to her Defense trait).If she has already applied her full Defense against an incoming attack during the turn, she may not use this maneuver.The character may still use Willpower to enhance her attack or Defense, if she so chooses, but may not utilize any other maneuver or supernatural ability that necessitates the loss of Defense(such as an all- out attack)."
            },
            {
                name: "Bloody-Handed Bastard (●●●●●)",
                description: "The berserker gouges at eyes, bites at ears, and tears at genitals. Her behavior is so violent that she inflicts lasting damage on her foes, regardless of weapon. The character’s attacks inflict lethal damage.\nDrawback: The character sacrifices her Defense during a turn in which she uses this maneuver.If she has already applied her Defense against an incoming attack during the turn, she may not use this maneuver."
            },
        ]
    },
    {
        name: "Muay Thai",
        preqs: { strength: 3, stamina: 2, brawl: 2 },
        levels: [
            {
                name: "Cut Kick (●)",
                description: "Your character knows how to deliver powerful round kicks to her opponent’s legs. When you choose this option your character inflicts one less point of damage than usual, counted after rolling to see if the attack succeeds. (For example, an attack that scores one success would still be a successful cut kick, but inflicts no Health damage). However, each kick reduces the opponent’s Speed by one, down to a minimum of one. If you roll as many successes as the opponent’s Size, he falls prone because he’s been swept by a kick or can’t use his legs out of sheer pain. Opponents can get back up whenever they have the chance, but their Speed only recovers at the end of the combat scene."
            },
            {
                name: "Iron Skin (●●)",
                description: "Has Armor of 1 against Bashing attacks."
            },
            {
                name: "Combination Blows (●●●)",
                description: "Can make two brawl attacks against the same target with a - 1 to the second attack.Cannot use defense before or after attack"
            },
            {
                name: "Thai Clinch (●●●●)",
                description: "Your character grabs an enemy around the head and pulls him into a vicious elbow or knee strike. If you are establishing a grappling hold as the first part of using the Combination Blows maneuver to inflict damage as the second move, add your Dexterity to your dice pool to attack.\nDrawback: The usual –1 penalty for Combination Blows applies to the first grappling attempt, not to the following attack.This benefit does not apply if your character has already established a hold, or during future attempts to damage an opponent from the same hold, but she can always abandon her current hold and try a new grapple to use the Thai Clinch."
            },
            {
                name: "Lethal Strike (●●●●●)",
                description: "Spend WP, Brawl attacks deal Lethal."
            },
        ]
    },
    {
        name: "Frenzied Assault",
        preqs: { strength: 3, stamina: 3, intimidation: 2, weaponry: 2 },
        levels: [
            {
                name: "Bestial Instincts (●)",
                description: "Your character sees weakness as an opening, and strikes before her prey has a chance to defend herself. Your character may substitute her Weaponry score for her Composure when determining her Initiative modifier."
            },
            {
                name: "Terrorize (●●)",
                description: "Whether she grins manically whilst drenched in other people’s blood or refuses to speak from behind a gore-spattered hockey mask, your character can use her very presence to scare her targets into submission. Instead of attacking, you may make a contested Strength + Intimidation roll. Everyone who has seen you inflict at least two levels of lethal damage resists with their Resolve + Composure. Every character who fails the contested roll loses their Defense until after your character’s next action."
            },
            {
                name: "Hard to Kill (●●●)",
                description: "Your character doesn’t feel pain when he could be inflicting it. Whenever he is engaged in combat — specifically, part of a scene where he takes specific actions in order of Initiative — he gains an extra two points of Health and doesn’t have to roll for unconsciousness until his rightmost Health box is filled with lethal damage.\nDrawback: The bonus Health vanishes at the end of the combat — when the action fades to a point that Initiative is no longer necessary.See “Temporary Health Dots” on page 137 of the World of Darkness Rulebook for more information."
            },
            {
                name: "Savage Rending (●●●●)",
                description: "Your character swings wildly with her weapon, rending flesh from bone — and limbs from bodies — in an orgy of death. Reduce all penalties for targeting specific body parts by two[1]. If you target an arm or leg and do five or more points of lethal damage, the blow severs the limb. Each character witnessing the attack must succeed at a reflexive Resolve + Composure roll or suffer a -2 modifier on their next action. Drawback: Your character cannot use her Defense on the same turn she intends to use this maneuver. If your attack is a dramatic failure, the weapon lodges in your foe, wrenching it from your character’s hands."
            },
            {
                name: "Trance of Death (●●●●●)",
                description: "Your character is so far removed from normal humanity that the dangerous and chaotic whirl of combat means very little to him. Maybe he tunes it all out, like a soldier who has seen too much. Maybe he actually enjoys it, finding solace in knowing that he could die at any second. Whatever it is, nobody can question his effectiveness. When attacking, spend one Willpower point to turn the roll into a rote action. Drawback: Spend 1 Willpower per attack. This willpower expenditure does not add three dice to the attack. If your character uses a rote action in combat she cannot apply her Defense to incoming attacks on the same turn."
            },
        ]
    },
    // mental merits
    {
        name: "Area of Experitse",
        preqs: {},
        levels: []
    },
    {
        name: "Combat Awareness",
        preqs: {},
        levels: []
    },
    {
        name: "Danger Sense",
        preqs: {},
        levels: []
    },
    {
        name: "Eidetic Memory",
        preqs: {},
        levels: []
    },
    {
        name: "Encyclopedic Knowledge",
        preqs: {},
        levels: []
    },
    {
        name: "",
        preqs: {},
        levels: []
    },
    {
        name: "",
        preqs: {},
        levels: []
    },
    {
        name: "",
        preqs: {},
        levels: []
    },
    {
        name: "",
        preqs: {},
        levels: []
    },
]



module.exports = merits