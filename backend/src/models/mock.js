const Merit = require('./merits')

const merits = [
    {
        name: "Gladitorial",
        preqs: { strength: 3, presence: 2, weaponry: 3 },
        levels: [
            {
                name: "Stunning Attack",
                description: "Your character can make a sudden, howling attack of such viciousness that her opponent is knocked off balance. You must declare a Stunning Attack as your action before the attack roll is made. If the number of successes inflicted in the single Weaponry attack roll exceed the victim’s Composure rating, the victim suffers a penalty on his next action equal to the difference. Note that your character must scream or howl while making this attack — it cannot be performed silently."
            },
            {
                name: "Weapon Slap",
                description: "Your character unleashes a powerful blow designed not to injure the opponent but to push his weapon or shield out of the way and create an opening that can be exploited. If the attack roll is successful, no damage is inflicted on the victim, but he does not apply his Defense (including the benefit added by a shield) to the next incoming attack (which may be from your character in the following turn, or from some other source beforehand)."
            },
            {
                name: "Lethal Accuracy",
                description: "Your character has an innate understanding of the various types of armor and their weak spots. Attacks made with any lethal weapon have Armor Piercing 1 and penalties to hit specific targets or body parts are reduced by One."
            },
            {
                name: "Brutal Sacrifice",
                description: "Your character can intensify a lethal attack by staging it so that her weapon is embedded in the victim’s body and ensuring that the weapon’s removal will inflict more damage. You must declare a Brutal Sacrifice as your action before the attack roll is made. \nIf the roll is a success, your character leaves her weapon in the victim’s body.If the weapon is not removed, the victim suffers a –2 penalty on all actions due to pain and physical interference.If the weapon is removed, it inflicts additional lethal damage equal to the weapon’s damage rating.This additional damage requires no roll.If the victim does not remove the weapon himself, your character may attempt a Dexterity + Brawl attack to do so on a subsequent turn. \nDrawbacks: To perform this maneuver, your character must expend a point of Willpower before the attack roll is made.The Willpower does not grant an additional + 3 on the roll.If the initial attack roll fails, the Willpower point is wasted and the Brutal Sacrifice may not be added.In addition, your character loses the use of the weapon until it is removed from the victim and returned to her."
            }
        ]
    },
    {
        name: "Boxing",
        preqs: { strength: 3, stamina: 2, brawl: 3 },
        levels: [
            {
                name: "Body Blow",
                description: "Your character can deliver powerful blows that leave opponents reeling and gasping for air. If successes inflicted in a single Brawl attack equal or exceed a target's Size, the victim loses his next action. Note: Body Blow is Passive and can combine with other Fighting Style Maneuvers - The attack must exceed the greater of Size or Stamina."
            },
            {
                name: "Duck and Weave",
                description: "Your character is trained to instinctively duck and evade an opponent's blows. Use the higher of your character's Dexterity or Wits to determine his Defense when dealing with Brawl-based attacks only (not against Weaponry attacks). If a combination of Brawl- and Weaponry-based attacks is focused on your character in the same turn, use his normal Defense against both."
            },
            {
                name: "Combination Blows",
                description: "Your character's training and experience allow him to devastate opponents with a flurry of rapid blows. He can make two Brawl attacks against the same target in a single action. The second attack suffers a -1 penalty. \nDrawback: Your character cannot use his Defense against any attack in the same turn in which he intends to use this maneuver.If he uses Defense against attacks that occur earlier in the Initiative roster, before he can perform this maneuver, he cannot perform the maneuver in the turn.He is too busy bobbing and weaving out of the way of attacks."
            },
            {
                name: "Haymaker",
                description: "Your character can deliver powerful, accurate blows capable of knocking an opponent unconscious with a single punch. A single Brawl attack that equals or exceeds the target's Size in damage might knock him unconscious. A Stamina roll is made for the victim. If it succeeds, he is conscious but he still loses his next action due to the Body Blow (see above). If it fails, he is unconscious for a number of turns equal to the damage done.\nDrawback: Your character cannot use his Defense against any attack in the same turn in which he intends to use this maneuver.If he uses Defense against attacks that occur earlier in the Initiative roster, before he can perform this maneuver, he cannot perform the maneuver in the turn.He is too busy bobbing and weaving out of the way of attacks."
            },
            {
                name: "Brutal Blow",
                description: "Your character's accuracy and power are such that his fists are lethal weapons, able to injure or kill opponents. A brutal blow inflicts lethal instead of bashing damage.\nDrawback: Spend one Willpower point per attack.Note that this Willpower expenditure does not add three dice to the attack."
            }
        ]
    }
]



// const buildMerit = async (merit) => {
//     try {
//         const newMerit = new Merit(merit)
//         await newMerit.save()
//         return newMerit
//     } catch (e) {
//         console.log("no")
//     }
// }

// const build = buildMerit(gladitorial))

module.exports = merits