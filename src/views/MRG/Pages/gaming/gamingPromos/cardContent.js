// Images
import cardImage1 from "assets/media/img/mrg/monthly_promos/NewMemberBonus_Logo-768x768.png";
import cardImage2 from "assets/media/img/mrg/monthly_promos/MiccosukeeOneStatusMatch_Logo-768x768.png";
import cardImage3 from "assets/media/img/mrg/monthly_promos/october/JackpotJackOLanterns_Logo.png";
import cardImage4 from "assets/media/img/mrg/monthly_promos/VIPGiveawayBlack_Logo-768x768.png";
import cardImage5 from "assets/media/img/mrg/monthly_promos/RedCardRicochet_Logo-768x768.png";
import cardImage6 from "assets/media/img/mrg/monthly_promos/october/CreepyCash_Logo.png";
import cardImage7 from "assets/media/img/mrg/monthly_promos/VIPGiveaway_White-768x768.png";
import cardImage8 from "assets/media/img/mrg/monthly_promos/october/MonsterMoney_Logo.png";
import cardImage9 from "assets/media/img/mrg/monthly_promos/BirthdayBonanza_Logo-768x768.png";
import cardImage10 from "assets/media/img/mrg/monthly_promos/august/NewMemberRicochet_Logo.png";
import cardImage11 from "assets/media/img/mrg/monthly_promos/august/ReferralRicochet_Logo.png";
import cardImage12 from "assets/media/img/mrg/monthly_promos/october/HalloweenHotSeat_Logo.png";

// NEED A SCHEDULER SOLUTION AS WELL

export const cardContent = (language) => {
  if (language) {
    return [
      {
        id: 0,
        title: "New Member Bonus",
        img: cardImage1,
        oneLiner: "Join and earn up to $500 more Free Play!",
        rules: {
          subSections: [
            { id: "00", title: "Day", body: "All month of October" },
            { id: "01", title: "Promotion Type", body: "Play and Win" },
            {
              id: "02",
              title: "Rules",
              body:
                "New members who sign up for a Miccosukee One Card will automatically receive $15 Free Play and have the opportunity to earn two (2) extra offers worth up to $500 based on their play through designated time periods.",
            },
            {
              id: "03",
              title: "TO QUALIFY",
              body:
                'Must be a new member to the Miccosukee One program and provide address plus email and/or phone. Subsequent "Bounce Back Offers" will be based on play during specified time frames after players sign up for a Miccosukee One card.',
            },
            {
              id: "04",
              title: "Dates and Times",
              body: "All month of October",
            },
            {
              id: "05",
              title: "Winners",
              body:
                "Miccosukee One Card Members who meet the play and sign up requirements.",
            },
            {
              id: "06",
              title: "Promotion Location",
              body:
                "Promotion will take place at any gaming machine that accepts Miccosukee One Player Cards. Free Play credits will be downloaded to Winners’ Miccosukee One Card account.",
            },
            {
              id: "07",
              title: "Prize Type and Amounts",
              body:
                "Based on play from the enrollment date, new members could earn up to $15 - $515 in Free Play.",
            },
            {
              id: "08",
              title: "Prize Restrictions",
              body:
                "Players can earn up to $250 from Bounce Back #1. The offer will be loaded to new member’s Miccosukee One account within 2-5 days of enrollment date based on eligible play on their enrollment date. Bounce Back #1 will be valid for seven (7) days. Based on play from the second rated calendar date, eligible players could earn a second offer for up to $250 Free Play. Bounce Back #2 will be loaded to guest account within 2-5 days of qualifying play date based on eligible ratings that calendar date. Bounce Back #2 will be valid for seven (7) days. Second rated date must be within fourteen (14) days of enrollment. Player may qualify for a different tier Bounce Back offer on second date. Player is not required to play first Bounce Back in order to redeem second offer based upon second date play. Player must have qualified for enrollment offer to be eligible for second offer. Eligible gaming is inclusive of ratings concluded by midnight on qualifying date of enrollment and/or return. Offers will be communicated by e-mail.",
            },
            {
              id: "09",
              title:
                "Criteria for earning each Bounce Back offer are tiered as such",
              body:
                "[10 – 49 points = Play 10 Get 5] [50-99 points = Play 20 Get 10] [100-499 points = $10] [500-999 points = $25] [1,000-2,499 points = $50] [2,500-4,999 points = $100] [5,000-9,999 points = $150] [10,000+ points = $250].",
            },
            {
              id: "010",
              title: "General Rule Disclaimers",
              body:
                "Promotions are only available for Miccosukee One members. Prizes are not transferable. Bounce Back Free Play valid for 7 days and on select machines only. Play and Get Free Play is available for thirty (30) days once earned during the valid 7 day offer window. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 1,
        title: "Miccosukee One Status Match",
        img: cardImage2,
        oneLiner: "Receive upgraded status + Free Play bonus!",
        rules: {
          subSections: [
            { id: "10", title: "Day", body: "All month of October" },
            { id: "11", title: "Promotion Type", body: "Tier/Status Match" },
            {
              id: "12",
              title: "Rules",
              body:
                "Players who join or return to the Miccosukee One program and present an upgraded Player’s Club card from a competing Florida property, will be enrolled automatically as Miccosukee One RED or BLACK tiered players respectively.",
            },
            {
              id: "13",
              title: "TO QUALIFY",
              body:
                "Members joining as a RED tier member will receive a $25 Free Play enrollment bonus. Members joining as a BLACK tier member will receive a $50 Free Play enrollment bonus. Tier match is available to new and inactive players only. Active Miccosukee One members with a player rating within one (1) year are not eligible. Players will retain rank until conclusion of next full earning period. Rated gaming at Miccosukee Resort & Gaming must qualify for tier retention or further upgrade.",
            },
            {
              id: "14",
              title:
                "Players who show the following competitor tiered cards will be upgraded to Miccosukee One Red Card",
              body:
                "[Magic City Casino: Illusionist] [The Casino at Dania Beach: Sapphire] [The Big Easy “Mardi-Gras”: Gold] [Calder: Gold, Black] [Hialeah Park: Silver] [Casino Miami: Silver] [Seminole Properties: Platinum] [Isle Casino Racing Pompano Park: Platinum] [Casino at Gulfstream Park: Place]",
            },
            {
              id: "15",
              title:
                "Players who show the following competitor tiered cards will be upgraded to Miccosukee One Black Card",
              body:
                "[Magic City Casino: Oracle, Wizard] [The Casino at Dania Beach: Diamond, Legend] [The Big Easy “Mardi-Gras”: Black] [Calder: Red, Royal] [Hialeah Park: Black] [Casino Miami: Elite, VIP] [Seminole Properties: Elite, X-Card] [Isle Casino Racing Pompano Park: Diamond, Diamond Plus, Diamond Elite, Seven Stars] [Casino at Gulfstream Park: Win, Triple Crown].",
            },
            {
              id: "16",
              title: "GENERAL RULES",
              body:
                "Player name on valid photo ID must match the name on the Players Card. Players must provide address and email and/or phone to be eligible for tier match program. Card and ID must not be damaged, altered or otherwise illegible. Limit one upgrade per person. Offer only available to new players or players 12 months inactive at Miccosukee Resort and Gaming. New player Tier Match status must occur upon initial enrollment. No exceptions. Inactive players must visit the Player’s Club within 24 hours of first completed reactivation session to claim Tier Match status. Must be 18 years of age or older to qualify. Must have valid, government issued, gaming approved ID and be physically present with the original ID to register. Free Play valid on select machines only. Players will have until 1:59 AM on November 1 to redeem Free Play credits. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details.",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Jackpot Jack-O-Lanterns",
        img: cardImage3,
        oneLiner: "Scary big jackpot worth $30,000!",
        rules: {
          subSections: [
            {
              id: "20",
              title: "Day",
              body: "Monday, October 4, 11 & 18, 2021",
            },
            { id: "21", title: "Promotion Type", body: "Drawing" },
            {
              id: "22",
              title: "Rules",
              body:
                "This Jack-O-Lantern jackpot is so big, it’s scary!!! On Monday, October 4, 11 & 18 at 7 PM, 8 PM & 9 PM, a lucky Miccosukee One member will win their share of $30,000 in cash!",
            },
            {
              id: "23",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must earn 100 points on their Miccosukee One card for each drawing ticket. Points can be earned from September 27 at 9 AM to October 18 at 8:45 PM.",
            },
            {
              id: "24",
              title: "Dates and Times",
              body: "October 4, 11 & 18 at 7 PM, 8 PM & 9 PM",
            },
            {
              id: "25",
              title: "Number of Winners Per Drawing",
              body: "One (1) winner at 7 PM, 8 PM & 9 PM",
            },
            {
              id: "26",
              title: "Drawing Location / Prize Giveaway Location",
              body:
                "Drawings and prize giveaways will take place at the Player's Club.",
            },
            {
              id: "27",
              title: "Max Number of Entries",
              body: "Players can earn an unlimited amount of entries.",
            },
            {
              id: "28",
              title: "Prize Type and Amounts",
              body: "Cash prizes available to be won are $1,000 - $7,500.",
            },
            {
              id: "29",
              title: "Amount of Wins Permitted Per Guest",
              body:
                "Players can only win once in any single drawing with multiple winners.",
            },
            {
              id: "210",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
            },
            {
              id: "211",
              title: "Game Rules",
              body:
                "If present, winners will pick a single prize vehicle. A total of 9 prize vehicles will start the month. Prize vehicles will not be replaced after they have been picked throughout the month. The prize vehicles picked by the winners will be worth the following amounts [1 - $1,000] [1 - $1,500] [1 - $2,000] [3 - $3,000] [1 - $4,000] [1 - $5,000] [1 - $7,500].",
            },
            {
              id: "212",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available October 1. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Jackpot Jack-O-Lanterns”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "213",
              title: "General Rule Disclaimers",
              body:
                "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 3,
        title: "Black Card VIP Giveaway",
        img: cardImage4,
        oneLiner: "Black Cards, win $2,500 cash!",
        rules: {
          subSections: [
            { id: "30", title: "Day", body: "Thursday, October 7 & 21, 2021" },
            { id: "31", title: "Promotion Type", body: "Drawing" },
            {
              id: "32",
              title: "Rules",
              body:
                "It's all treats & no tricks Thursday, October 7 & 21 at 7 PM, 8 PM & 9 PM when one Miccosukee One Black Card member will win $2,500 in cash!",
            },
            {
              id: "33",
              title: "TO QUALIFY",
              body:
                "Miccosukee One Black Card members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from October 1 at 9 AM to October 21 at 8:45 PM.",
            },
            {
              id: "34",
              title: "Dates and Times",
              body: "October 7 & 21 at 7 PM, 8 PM & 9 PM",
            },
            {
              id: "35",
              title: "Number of Winners Per Drawing",
              body: "One (1) winner at 7 PM, 8 PM & 9 PM",
            },
            {
              id: "36",
              title: "Drawing Location / Prize Giveaway Location",
              body:
                "Drawings and prize giveaways will take place at the Player's Club.",
            },
            {
              id: "37",
              title: "Max Number of Entries",
              body: "Players can earn an unlimited amount of entries.",
            },
            {
              id: "38",
              title: "Prize Type and Amounts",
              body: "One (1) $2,500 cash prize at 7 PM, 8 PM & 9 PM",
            },
            {
              id: "39",
              title: "Amount of Wins Permitted Per Guest",
              body:
                "Players can only win once in any single drawing with multiple winners.",
            },
            {
              id: "310",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
            },
            {
              id: "311",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available October 1 - 7 for the 10/7 drawing and October 15 - 21 for 10/21 drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Black Card VIP Giveaway”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "312",
              title: "General Rule Disclaimers",
              body:
                "Eligibility for tiered promotion based on October 1 status. Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Red Card VIP Giveaway",
        img: cardImage5,
        oneLiner: "Ricochet Hot Seats pay up to $150 Free Play!",
        rules: {
          subSections: [
            { id: "40", title: "Day", body: "Wednesday, October 6 & 20, 2021" },
            { id: "41", title: "Promotion Type", body: "Ricochet Rewards" },
            {
              id: "42",
              title: "Rules",
              body:
                "Calling all Red Card members! On Wednesday, October 6 & 20 between 6 PM and 9 PM up to 24 Red Tier Miccosukee One members will win $100 or $150 Free Play via Ricochet hot seat.",
            },
            {
              id: "43",
              title: "TO QUALIFY",
              body:
                "Miccosukee One RED Tier members actively gaming on their Miccosukee One Player's card.",
            },
            {
              id: "44",
              title: "Dates and Times",
              body: "October 6 & 20 from 6 PM - 9 PM",
            },
            {
              id: "45",
              title: "Winners",
              body:
                "Miccosukee One RED Tier member who triggers the Ricochet Prize through their play will win $150 Free Play and one (1) additional random Red Tier winner playing with their Miccosukee One card at the time the prize is triggered will win $100 Free Play.",
            },
            {
              id: "46",
              title: "Promotion Location",
              body: "Gaming devices that accept Miccosukee One cards",
            },
            {
              id: "47",
              title: "Prize Type and amounts",
              body:
                "The player who triggers the prize and 1 additional random winner in up to twelve (12) occurrences will receive $100 or $150 in Free Play.",
            },
            {
              id: "48",
              title: "Prize Restrictions",
              body: "Players can win multiple times.",
            },
            {
              id: "49",
              title: "General Rule Disclaimers",
              body:
                "Eligibility for tiered promotion based on October 1 status. Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days and on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Creepy Cash",
        img: cardImage6,
        oneLiner: "Win a share of $7,500 cash!",
        rules: {
          subSections: [
            { id: "50", title: "Day", body: "Sunday, October 10 & 24, 2021" },
            { id: "51", title: "Promotion Type", body: "Drawing" },
            {
              id: "52",
              title: "Rules",
              body:
                "Cash prizes so good, they're CREEPY!!! On Sunday, October 10 & 24 one Miccosukee One member will win their share of $7,500 in cash at 1 PM, 3 PM & 5 PM!",
            },
            {
              id: "53",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must earn 100 points on their Miccosukee One card for each drawing ticket. Points can be earned from October 1 at 9 AM to October 24 at 4:45 PM.",
            },
            {
              id: "54",
              title: "Dates and Times",
              body: "October 10 & 24 at 1 PM, 3 PM & 5 PM",
            },
            {
              id: "55",
              title: "Number of Winners Per Drawing",
              body: "One (1) winner at 1 PM, 3 PM & 5 PM",
            },
            {
              id: "56",
              title: "Drawing Location / Prize Giveaway Location",
              body:
                "Drawings and prize giveaways will take place at the Player's Club.",
            },
            {
              id: "57",
              title: "Max Number of Entries",
              body: "Players can earn an unlimited amount of entries.",
            },
            {
              id: "58",
              title: "Prize Type and Amounts",
              body:
                "If present, winners may claim the following cash prizes [1 PM - $1,500] [3 PM - $1,000] [5 PM - $5,000].",
            },
            {
              id: "59",
              title: "Amount of Wins Permitted Per Guest",
              body:
                "Players can only win once in any single drawing with multiple winners.",
            },
            {
              id: "510",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
            },
            {
              id: "511",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available on October 1 at 9 AM. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Creepy Cash”. Drum will be cleared after the last drawing of the day. Player must have retained the smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "512",
              title: "General Rule Disclaimers",
              body:
                "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 6,
        title: "White Card VIP Giveaway",
        img: cardImage7,
        oneLiner: "White Cards, win $5,000 cash!",
        rules: {
          subSections: [
            { id: "60", title: "Day", body: "Thursday, October 14 & 28, 2021" },
            { id: "61", title: "Promotion Type", body: "Drawing" },
            {
              id: "62",
              title: "Rules",
              body:
                "It's all treats & no tricks Thursday, October 14 & 28 at 7 PM, 8 PM & 9 PM when one Miccosukee One White Card member will win $5,000 in cash!",
            },
            {
              id: "63",
              title: "TO QUALIFY",
              body:
                "Miccosukee One White Card members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from October 1 at 9 AM to October 28 at 8:45 PM.",
            },
            {
              id: "64",
              title: "Dates and Times",
              body: "October 14 & 28 at 7 PM, 8 PM & 9 PM",
            },
            {
              id: "65",
              title: "Number of Winners Per Drawing",
              body: "One (1) winner at 7 PM, 8 PM & 9 PM",
            },
            {
              id: "66",
              title: "Drawing Location / Prize Giveaway Location",
              body:
                "Drawings and prize giveaways will take place at the Player's Club.",
            },
            {
              id: "67",
              title: "Max Number of Entries",
              body: "Players can earn an unlimited amount of entries.",
            },
            {
              id: "68",
              title: "Prize Type and Amounts",
              body: "One (1) $5,000 cash prize at 7 PM, 8 PM & 9 PM.",
            },
            {
              id: "69",
              title: "Amount of Wins Permitted Per Guest",
              body:
                "Players can only win once in any single drawing with multiple winners.",
            },
            {
              id: "610",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
            },
            {
              id: "611",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available October 8 - 14 for the 10/14 drawing and October 22 - 28 for 10/28 drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “White Card VIP Giveaway”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "612",
              title: "General Rule Disclaimers",
              body:
                "Eligibility for tiered promotion based on October 1 status. Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 7,
        title: "Monster Money",
        img: cardImage8,
        oneLiner: "2 days, 5 drawings, $1,000-$10,000 cash!",
        rules: {
          subSections: [
            {
              id: "70",
              title: "Day",
              body: "Friday, October 29 & Saturday, October 30, 2021",
            },
            { id: "71", title: "Promotion Type", body: "Drawing" },
            {
              id: "72",
              title: "Rules",
              body:
                "We are giving away a monstrous amount of money to celebrate Halloween!! On October 29 & 30 we'll have 5 drawings each day starting at 5 PM where Miccosukee One members will be called every two hours to win $1,000 to $10,000. If winners do not claim their prize, it will roll over to the 1 AM drawing on October 31. The last drawing on October 31 must have a winner, and that winner could be YOU!",
            },
            {
              id: "73",
              title: "TO QUALIFY",
              body:
                "Earn 200 points on your Miccosukee One card for each drawing ticket. Points can be earned between October 1 at 9 AM and October 31 at 12:45 AM. This promotion will feature a bonus entry multiplier every Friday and Saturday that players are allowed to earn entries. Guests will receive one bonus entry for every 200 points they earn from 9 AM – close and through 12:45 AM on October 31.",
            },
            {
              id: "74",
              title: "Dates & Times",
              body:
                "Drawings will occur at 5 PM, 7 PM, 9 PM, 11 PM on October 29, 30 & 1 AM on October 30, 31.",
            },
            {
              id: "75",
              title: "Number of Winners Per Drawing",
              body: "One (1) winner will be drawn per drawing.",
            },
            {
              id: "76",
              title: "Drawing Location / Prize Giveaway Location",
              body:
                "The drawings and prize payments will occur at the Player's Club.",
            },
            {
              id: "77",
              title: "Max Number of Entries",
              body: "Players can earn an unlimited amount of entries.",
            },
            {
              id: "78",
              title: "Prize Type and Amounts",
              body:
                "If present, winners may claim the following cash prizes [5 PM - $1,000] [7 PM - $4,000] [9 PM - $3,000] [11 PM - $2,000] [1 AM - $10,000]. The 1 AM winner on October 31 will win $10,000 cash and any unclaimed cash roll over prizes from both drawing days.",
            },
            {
              id: "79",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to win. Prize will automatically be forfeited if the player selected is not present within ten (10) minutes of being announced with their ticket stub. If the winners from the any drawing result in a no show, the prize money will roll over to the 1 AM drawing on October 31. Drawing officials will keep drawing names at the final drawing until a winner is found.",
            },
            {
              id: "710",
              title: "Bonus Entry Rules",
              body:
                "On October 1, 2, 8, 9, 15, 16, 22, 23 & 29 from 9 AM – close and October 30 through 12:45 AM on October 31, players can earn one bonus entry for every 200 points they earn. Players must collect their bonus entries on the same day and within the time frame they have to earn them. Any entries not claimed during the appropriate time frame will be forfeited and cannot be printed at a later date.",
            },
            {
              id: "711",
              title: "Amount of Wins Permitted Per Guest",
              body:
                "Players can only win once in any single drawing with multiple winners.",
            },
            {
              id: "712",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available on October 1 at 9 AM. Drum will be emptied after the last drawing at 1AM on October 31. Entries may not be entered into the drum during the drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub's larger perforated portion into the appropriate drum of the respective raffle, \"Monster Money\". Player must have retained the smaller portion of perforated ticket in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued.",
            },
            {
              id: "713",
              title: "General Rule Disclaimers",
              body:
                "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final.  Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 8,
        title: "Birthday Bonanza Hot Seats",
        img: cardImage9,
        oneLiner: "Win a share of $1,200 Free Play!",
        rules: {
          subSections: [
            { id: "80", title: "Day", body: "Monday, October 25, 2021" },
            { id: "81", title: "Promotion Type", body: "Ricochet Rewards" },
            {
              id: "82",
              title: "Rules",
              body:
                "On Monday, October 25 between the hours of 6 PM and 10 PM, October birthday guests who are actively gaming with their Miccosukee One card will be eligible for a chance to win $25-$100 in Free Play. Up to $1,200 may be awarded in up to 8 occurrences.",
            },
            {
              id: "83",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must have a birthday during the month of October and be actively playing gaming machines on their Miccosukee One card.",
            },
            {
              id: "84",
              title: "Dates and Times",
              body: "October 25 from 6 PM - 10 PM",
            },
            {
              id: "85",
              title: "Winners",
              body:
                "Miccosukee One members who trigger the Ricochet prize through their play and various random winners who are playing with their Miccosukee One card at the time the prize is triggered. All guests must have an October birthday to be eligible to win.",
            },
            {
              id: "86",
              title: "Promotion Location",
              body: "Gaming devices that accept Miccosukee One cards",
            },
            {
              id: "87",
              title: "Prize Type and Amounts",
              body:
                "The player who triggers the Ricochet will receive $100 and two (2) others will win $25 during each occurrence. A total of $1,200 in Free Play may be awarded in up to 8 occurrences. Up to 24 winners may be awarded prizes.",
            },
            {
              id: "88",
              title: "Prize Restrictions",
              body: "Players can win multiple times.",
            },
            {
              id: "89",
              title: "General Rule Disclaimers",
              body:
                "Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 9,
        title: "New Member Ricochet",
        img: cardImage10,
        oneLiner: "New Members, win a share of $5,000!",
        rules: {
          subSections: [
            { id: "90", title: "Day", body: "Sunday, October 31, 2021" },
            { id: "91", title: "Promotion Type", body: "Ricochet Rewards" },
            {
              id: "92",
              title: "Rules",
              body:
                "New members deserve new money! On Sunday, October 31 between the hours of 8 PM and 10 PM, October new members who are actively gaming with their Miccosukee One card will be eligible for a chance to win $100 - $500 in Free Play. Up to $5,000 may be awarded in a max of 5 occurrences.",
            },
            {
              id: "93",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must have signed up for a Miccosukee One card during the month of October and be actively playing gaming machines on their Miccosukee One card.",
            },
            {
              id: "94",
              title: "Dates and Times",
              body: "October 31 from 8 PM - 10 PM",
            },
            {
              id: "95",
              title: "Winners",
              body:
                "Miccosukee One members who trigger the Ricochet prize through their play and various random winners who are playing with their Miccosukee One card at the time the prize is triggered. All guests must have signed up in October to be eligible to win.",
            },
            {
              id: "96",
              title: "Promotion Location",
              body: "Gaming devices that accept Miccosukee One cards",
            },
            {
              id: "97",
              title: "Prize Type and Amounts",
              body:
                "The player who triggers the Ricochet will receive $500 and five (5) others will win $100 during each occurrence. A total of $5,000 in Free Play may be awarded in up to 5 occurrences. Up to 30 winners may be awarded prizes.",
            },
            {
              id: "98",
              title: "Prize Restrictions",
              body: "Players can win multiple times.",
            },
            {
              id: "99",
              title: "General Rule Disclaimers",
              body:
                "Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days and on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 10,
        title: "Referral Ricochet",
        img: cardImage11,
        oneLiner: "Refer and win up to $100 Free Play!",
        rules: {
          subSections: [
            { id: "100", title: "Day", body: "Sunday, October 31, 2021" },
            { id: "101", title: "Promotion Type", body: "Ricochet Rewards" },
            {
              id: "102",
              title: "Rules",
              body:
                "You refer us a friend, we can refer you some Free Play! On Sunday, October 31 between the hours of 6 PM and 8 PM, October Referrals who are actively gaming with their Miccosukee One card will be eligible for a chance to win $50 or $100 in Free Play. Up to $1,000 may be awarded in a max of 5 occurrences.",
            },
            {
              id: "103",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must have referred a new Miccosukee One member during the month of October and be actively playing gaming machines on their Miccosukee One card.",
            },
            {
              id: "104",
              title: "Dates and Times",
              body: "October 31 from 6 PM - 8 PM",
            },
            {
              id: "105",
              title: "Winners",
              body:
                "Miccosukee One members who trigger the Ricochet prize through their play and various random winners who are playing with their Miccosukee One card at the time the prize is triggered. All guests must have referred a new member and been present at time of enrollment in October to be eligible to win.",
            },
            {
              id: "106",
              title: "Promotion Location",
              body: "Gaming devices that accept Miccosukee One cards",
            },
            {
              id: "107",
              title: "Prize Type and Amounts",
              body:
                "The player who triggers the Ricochet will receive $100 and two (2) others will win $50 during each occurrence. A total of $1,000 in Free Play may be awarded in up to 5 occurrences. Up to 15 winners may be awarded prizes.",
            },
            {
              id: "108",
              title: "Prize Restrictions",
              body: "Players can win multiple times.",
            },
            {
              id: "109",
              title: "General Rule Disclaimers",
              body:
                "Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days and on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 11,
        title: "Halloween Hot Seat",
        img: cardImage12,
        oneLiner: "Celebrate Halloween with $50 or $250 Free Play!",
        rules: {
          subSections: [
            { id: "110", title: "Day", body: "Sunday, October 31, 2021" },
            { id: "111", title: "Promotion Type", body: "Ricochet Rewards" },
            {
              id: "112",
              title: "Rules",
              body:
                "We have sweet Free Play treats to help you celebrate Halloween! On Sunday, October 31 between 6 PM and 10 PM up to 60 Miccosukee One members will win $50 or $250 Free Play via ricochet hot seat.",
            },
            {
              id: "113",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members actively gaming on their Miccosukee One Player's card.",
            },
            {
              id: "114",
              title: "Dates and Times",
              body: "October 31 from 6 PM - 10 PM",
            },
            {
              id: "115",
              title: "Winners",
              body:
                "Miccosukee One member who triggers the ricochet prize through their play will win $250 Free Play and five (5) additional random winners playing with their Miccosukee One card at the time the prize is triggered will win $50 Free Play.",
            },
            {
              id: "116",
              title: "Promotion Location",
              body: "Gaming devices that accept Miccosukee One cards",
            },
            {
              id: "117",
              title: "Prize Type and amounts",
              body:
                "The player who triggers the prize and 5 additional random winner in up to ten (10) occurrences will receive $50 or $250 in free play.",
            },
            {
              id: "118",
              title: "Prize Restrictions",
              body: "Players can win multiple times.",
            },
            {
              id: "119",
              title: "General Rule Disclaimers",
              body:
                "Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days and on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
    ];
  }
  /*
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   *
   */
  // SPANISH
  else {
    return [
      {
        id: 0,
        title: "Bono para Nuevos Miembros",
        img: cardImage1,
        oneLiner: "¡Únase y gane hasta $500 más de Free Play!\u200b",
        rules: {
          subSections: [
            { id: "00", title: "Día", body: "Todo el mes de octubre" },
            { id: "01", title: "Tipo de Promoción", body: "Juegue y Gane" },
            {
              id: "02",
              title: "Reglas",
              body:
                "Nuevos miembros que se unan a la tarjeta Miccosuke One recibirán automáticamente $15 Free Play y tendrán la oportunidad de ganar dos (2) ofertas adicionales valoradas en hasta $500 basadas en frecuencia de juego en periodos de tiempo designados.",
            },
            {
              id: "03",
              title: "PARA CALIFICAR",
              body:
                "Debe ser un nuevo miembro del programa Miccosukee One y proveer dirección, correo electrónico y/o número de teléfono. “Ofertas de Bounce Back” subsiguientes estarán basadas en frecuencia de juego durante periodos de tiempo específicos luego de que el jugador se haya registrado a la tarjeta Miccosukee One.",
            },
            {
              id: "04",
              title: "Fechas y Horario",
              body: "Todo el mes de octubre",
            },
            {
              id: "05",
              title: "Ganadores",
              body:
                "Miembros de la tarjeta Miccosukee One que cumplan con los requisitos de juego e inscripción",
            },
            {
              id: "06",
              title: "Ubicación de Promoción",
              body:
                "La promoción se llevará a cabo en cualquier máquina de juego que acepte la tarjeta Miccosukee One. Los créditos de Free Play serán descargados en la cuenta de Miccosukee One del ganador.",
            },
            {
              id: "07",
              title: "Tipo de Premio y Cantidades",
              body:
                "Basado en la cantidad de juego en la fecha de inscripción, el nuevo miembro podría calificar para una oferta de hasta $15-$515 Free Play.",
            },
            {
              id: "08",
              title: "Restricciones de Premio",
              body:
                "Los jugadores pueden ganar hasta $250 de la oferta Bounce Back #1. La oferta será descargada en la cuenta del nuevo miembro de la tarjeta Miccosukee One 2-5 días después de la fecha de inscripción y estará basada en elegibilidad de juego en su fecha de inscripción. Bounce Back #1 será válido durante siete (7) días. Basado en la frencuencia de juego de la segunda fecha de calendario calificada, jugadores elegibles podrían calificar para una segunda oferta para ganar hasta $250 Free Play. Los créditos de Bounce Back #2 serán descargados a la cuenta del invitado 2-5 días después de la fecha calificada y estarán basados en calificaciones elegibles en esa fecha de calendario. Bounce Back #2 será válido durante siete (7) días. Segunda fecha de calendario calificada debe ser dentro de 14 días de la fecha de inscripción. Jugador puede calificar para una oferta de Bounce Back diferente en la segunda fecha. Jugador no está sujeto a jugar la primera oferta de Bounce Back para poder redimir la segunda oferta basada en la frecuencia de juego de la segunda fecha. Jugador debe haber calificado para la oferta de inscripción para ser elegible para la segunda oferta. Juego elegible incluye calificaciones concluídas a la media noche en las fechas de inscripción estipuladas y las fechas en que regrese a jugar. Ofertas serán anunciadas por correo electrónico.",
            },
            {
              id: "09",
              title:
                "Criterio para ganar cada oferta de Bounce Back está clasificado de la siguiente manera",
              body:
                "[10 – 49 puntos = Juegue 10 Reciba 5] [50-99 puntos = Juegue 20 Reciba 10] [100-499 puntos = $10] [500-999 puntos = $25] [1,000-2,499 puntos = $50] [2,500-4,999 puntos = $100] [5,000-9,999 puntos = $150] [10,000+ puntos = $250].",
            },
            {
              id: "010",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Bounce Back Free Play es válido por 7 días y sólo en máquinas seleccionadas. Juegue y Gane Free. Juegue y Gane Free Play estará disponible por treinta (30) días al ganarse durante el periodo de oferta estipulado. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 1,
        title: "Igualamos su Nivel",
        img: cardImage2,
        oneLiner: "¡Reciba promoción de nivel + bono Free Play!",
        rules: {
          subSections: [
            { id: "10", title: "Día", body: "Todo el mes de octubre" },
            { id: "11", title: "Tipo de Promoción", body: "Tier/Status Match" },
            {
              id: "12",
              title: "Reglas",
              body:
                "Jugadores que se unan o regresen al programa Miccosukee One y presenten un Player’s Card de nivel ascendido de un establecimiento de nuestra competencia localizado en la Florida serán inscritos automáticamente como un miembro de la tarjeta Miccosukee One de niveles ROJO o NEGRO, respectivamente.",
            },
            {
              id: "13",
              title: "PARA CALIFICAR",
              body:
                "Miembros que se unan como jugador de nivel ROJO recibirán un bono de inscripción de $25. Miembros que se unan como jugador de nivel NEGRO recibirán un bono de inscripción de $50. Tier match sólo está disponible para jugadores nuevos o inactivos. Jugadores activos de Miccosukee One con un nivel de juego de un (1) año no son elegibles. Jugadores conservarán su nivel hasta que culmine el próximo periodo de ganancia total. Juego por niveles en Miccosukee Resort & Gaming debe calificar para retención o promoción de nivel.",
            },
            {
              id: "14",
              title:
                "Jugadores que muestren las siguientes tarjetas de juego por nivel serán promovidos al nivel Rojo de la tarjeta Miccosukee One",
              body:
                "[Magic City Casino: Illusionist] [The Casino at Dania Beach: Sapphire] [The Big Easy “Mardi-Gras”: Gold] [Calder: Gold, Black] [Hialeah Park: Silver] [Casino Miami: Silver] [Seminole Properties: Platinum] [Isle Casino Racing Pompano Park: Platinum] [Casino at Gulfstream Park: Place].",
            },
            {
              id: "15",
              title:
                "Jugadores que muestren las siguientes tarjetas de juego por nivel serán promovidos al nivel Negro de la tarjeta Miccosukee One",
              body:
                "[Magic City Casino: Oracle, Wizard] [The Casino at Dania Beach: Diamond, Legend] [The Big Easy “Mardi-Gras”: Black] [Calder: Red, Royal] [Hialeah Park: Black] [Casino Miami: Elite, VIP] [Seminole Properties: Elite, X-Card] [Isle Casino Racing Pompano Park: Diamond, Diamond Plus, Diamond Elite, Seven Stars] [Casino at Gulfstream Park: Win, Triple Crown].",
            },
            {
              id: "16",
              title: "REGLAS GENERALES",
              body:
                "El nombre que el jugador muestre en su ID debe igualar el nombre que muestre en su Player’s Card. Jugadores deberán proveer dirección, correo electrónico y/o número de teléfono para ser elegibles para el programa de tier match. El Player’s Card y la ID no deben estar dañadas, alteradas o ilegibles. Límite una promoción de nivel por persona. Oferta válida sólo para nuevos jugadores o jugadores que lleven 12 meses inactivos en Miccosukee Resort & Gaming. El Tier Match para nuevos jugadores debe ocurrir en el momento de la inscripción inicial. Sin excepciones. Los jugadores inactivos deben visitar el Player’s Club dentro de las 24 horas posteriores a la primera sesión de reactivación completada para reclamar su Tier Match. Deben tener 18 años de edad o más para calificar. Los jugadores sólo pueden participar en la promoción una vez. Deben tener identificación válida, emitida por el gobierno, aprobada para jugar, y estar físicamente presente con la identificación original al momento de registrarse. Free Play es válido sólo en máquinas seleccionadas. Jugadores tendrán hasta las 1:59 AM del 1 de noviembre para redimir sus créditos de Free Play. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles.",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Linternas de Calabaza Premiadas",
        img: cardImage3,
        oneLiner: "¡Premio gordo aterrador valorado en $30,000!",
        rules: {
          subSections: [
            {
              id: "20",
              title: "Día",
              body: "lunes 4, 11 y 18 de octubre de 2021",
            },
            { id: "21", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "22",
              title: "Reglas",
              body:
                "¡Estas Linternas de Calabaza tienen tantos premios que da miedo! El lunes 4, 11 y 18 de octubre a las 7 PM, 8 PM y 9 PM, ¡un afortunado miembro de Miccosukee One ganará su parte de $ 30,000 en efectivo!",
            },
            {
              id: "23",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One deben ganar 100 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 27 de septiembre a las 9 AM hasta el 18 de octubre a las 8:45 PM.",
            },
            {
              id: "24",
              title: "Fecha y Horario de Sorteos",
              body: "4, 11 y 18 de octubre a las 7 PM, 8 PM & 9 PM",
            },
            {
              id: "25",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "26",
              title: "Ubicación de Sorteo",
              body:
                "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "27",
              title: "Cantidad de Entradas Permitidas por Persona",
              body: "Los jugadores pueden acumular entradas ilimitadas.",
            },
            {
              id: "28",
              title: "Tipo de Premio y Cantidades",
              body:
                "Los premios en efectivo disponibles para ganar son de $ 1,000 a $ 7,500.",
            },
            {
              id: "29",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body:
                "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "210",
              title: "Reglas de “No Asistencia”",
              body:
                "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "211",
              title: "Reglas del Juego",
              body:
                "Si están presentes, los ganadores elegirán un sólo vehículo de premio. Comenzaremos el mes con un total de 9 vehículos premiados. Los vehículos premiados no serán reemplazados después de que hayan sido elegidos durante el mes. Los vehículos premiados valdrán las siguientes cantidades [1 - $ 1,000] [1 - $ 1,500] [1 - $ 2,000] [3 - $ 3,000] [1 - $ 4,000] [1 - $ 5,000] [1 - $ 7,500].",
            },
            {
              id: "212",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible el 1 de octubre. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Jackpot Jack-O-Lanterns”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "213",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 3,
        title: "Sorteo VIP para Tarjeta Negra",
        img: cardImage4,
        oneLiner: "¡Tarjetas Negras, ganen $2,500 en efectivo!",
        rules: {
          subSections: [
            {
              id: "30",
              title: "Día",
              body: "jueves, 7 y 21 de octubre de 2021",
            },
            { id: "31", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "32",
              title: "Reglas",
              body:
                "¡Son todo premios y cero trucos el jueves 7 y 21 de octubre a las 7 PM, 8 PM y 9 PM cuando un miembro de la tarjeta Miccosukee One de nivel Negro gane $ 2,500 en efectivo!",
            },
            {
              id: "33",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One de nivel Negro deberán ganar 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de octubre a las 9 AM hasta el 21 de octubre a las 8:45 PM.",
            },
            {
              id: "34",
              title: "Fecha y Horario de Sorteos",
              body: "7 y 21 de octubre a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "35",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido a las 7 PM, 8 PM y 9 PM.",
            },
            {
              id: "36",
              title: "Ubicación de Sorteo",
              body:
                "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "37",
              title: "Cantidad de Entradas Permitidas por Persona",
              body: "Los jugadores pueden acumular entradas ilimitadas.",
            },
            {
              id: "38",
              title: "Tipo de Premio y Cantidades",
              body:
                "Un (1) premio en efectivo de $2,500 a las 7 PM, 8 PM y 9 PM.",
            },
            {
              id: "39",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body:
                "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "310",
              title: "Reglas de “No Asistencia”",
              body:
                "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "311",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible del 1 – 7 de octubre para el sorteo del 7 de octubre, y del 15 – 21 de octubre para el sorteo del 21 de octubre. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Black Card VIP Giveaway”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "312",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Elegibilidad para promoción por niveles basada en el estatus de juego del 1 de octubre. Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Sorteo VIP para Tarjeta Roja",
        img: cardImage5,
        oneLiner: "¡Ricochet Hot Seats pagan hasta $150 Free Play!",
        rules: {
          subSections: [
            {
              id: "40",
              title: "Día",
              body: "miércoles, 6 y 20 de octubre de 2021",
            },
            { id: "41", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "42",
              title: "Reglas",
              body:
                "¡Llamando a todos los miembros de nivel Rojo! El miércoles, 6 y 20 de octubre entre las 6 PM y 9 PM hasta 24 miembros de la tarjeta Miccosukee One de nivel Rojo ganarán $100 o $150 Free Play vía Ricochet hot seat.",
            },
            {
              id: "43",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One de nivel ROJO que están jugando activamente con su tarjeta Miccosuke One.",
            },
            {
              id: "44",
              title: "Fecha y Horarios de Sorteo",
              body: "6 y 20 de octubre de 6 PM – 9 PM",
            },
            {
              id: "45",
              title: "Ganadores",
              body:
                "Un miembro de la tarjeta Miccosukee One de nivel Rojo que active el premio Ricochet mientras juega ganará $150 Free Play y un (1) jugador adicional de nivel Rojo que está jugando con su tarjeta Miccosukee One y que sea elegido al azar cuando el premio sea activado ganará $100 Free Play.",
            },
            {
              id: "46",
              title: "Ubicación de Promoción",
              body: "Máquinas de juego que acepten la tarjeta Miccosukee One.",
            },
            {
              id: "47",
              title: "Tipo de Premio y Cantidades",
              body:
                "El jugador que active el premio y 1 ganador al azar durante una de hasta doce (12) oportunidades recibirán $100 o $150 Free Play.",
            },
            {
              id: "48",
              title: "Restricciones de Premio",
              body: "Los jugadores pueden ganar múltiples veces.",
            },
            {
              id: "49",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Elegibilidad para promoción por niveles basada en el estatus de juego del 1 de octubre. Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play válido por treinta días y en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Efectivo Espeluznante",
        img: cardImage6,
        oneLiner: "¡Gane una parte de $7,500 en efectivo!",
        rules: {
          subSections: [
            {
              id: "50",
              title: "Día",
              body: "domingo, 10 y 24 de octubre de 2021",
            },
            { id: "51", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "52",
              title: "Reglas",
              body:
                "¡¡¡Los premios en efectivo son tan buenos que dan MIEDO!!! ¡El domingo 10 y 24 de octubre, un miembro de tarjeta Miccosukee One ganará su parte de $7,500 en efectivo a las 1 PM, 3 PM y 5 PM!",
            },
            {
              id: "53",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One deben ganar 100 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de octubre a las 9 AM hasta el 24 de octubre a las 4:45 PM.",
            },
            {
              id: "54",
              title: "Fecha y Horario de Sorteos",
              body: "10 y 24 de octubre a las 1 PM, 3 PM y 5 PM",
            },
            {
              id: "55",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido a las 1 PM, 3 PM y 5 PM.",
            },
            {
              id: "56",
              title: "Ubicación de Sorteo",
              body:
                "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "57",
              title: "Cantidad de Entradas Permitidas por Persona",
              body: "Los jugadores pueden acumular entradas ilimitadas.",
            },
            {
              id: "58",
              title: "Tipo de Premio y Cantidades",
              body:
                "Si están presentes, los ganadores pueden reclamar los siguientes premios  [1 PM -  $1,500] [3 PM -  $1,000] [5 PM - $5,000].",
            },
            {
              id: "59",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body:
                "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "510",
              title: "Reglas de “No Asistencia”",
              body:
                "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "511",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible el 1 de octubre a las 9 AM. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Creepy Cash”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "512",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 6,
        title: "Sorteo VIP para Tarjeta Blanca",
        img: cardImage7,
        oneLiner: "¡Tarjetas Blancas, ganen $5,000 en efectivo!",
        rules: {
          subSections: [
            {
              id: "60",
              title: "Día",
              body: "jueves, 14 y 28 de octubre de 2021",
            },
            { id: "61", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "62",
              title: "Reglas",
              body:
                "¡Son todo premios y cero trucos el jueves 14 y 28 de octubre a las 7 PM, 8 PM y 9 PM cuando un miembro de la tarjeta Miccosukee One de nivel Blanco gane $5,000 en efectivo!",
            },
            {
              id: "63",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One de nivel Blanco deberán ganar 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de octubre a las 9 AM hasta el 28 de octubre a las 8:45 PM.",
            },
            {
              id: "64",
              title: "Fecha y Horario de Sorteos",
              body: "14 y 28 de octubre a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "65",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido a las 7 PM, 8 PM y 9 PM.",
            },
            {
              id: "66",
              title: "Ubicación de Sorteo",
              body:
                "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "67",
              title: "Cantidad de Entradas Permitidas por Persona",
              body: "Los jugadores pueden acumular entradas ilimitadas.",
            },
            {
              id: "68",
              title: "Tipo de Premio y Cantidades",
              body:
                "Un (1) premio en efectivo de $5,000 a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "69",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body:
                "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "610",
              title: "Reglas de “No Asistencia”",
              body:
                "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "611",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible del 8 – 14 de octubre para el sorteo del 14 de octubre, y del 22 – 28 de octubre para el sorteo del 28 de octubre. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “White Card VIP Giveaway”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "612",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Elegibilidad para promoción por niveles basada en el estatus de juego del 1 de octubre. Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 7,
        title: "Dinero Monstruoso",
        img: cardImage8,
        oneLiner: "2 días, 5 sorteos, $1,000- $10,000 en efectivo!",
        rules: {
          subSections: [
            {
              id: "70",
              title: "Día",
              body: "viernes, 29 de octubre y sábado, 30 de octubre de 2021",
            },
            { id: "71", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "72",
              title: "Reglas",
              body:
                "¡¡Estamos regalando una monstruosa cantidad de dinero para celebrar Halloween!! El 29 y 30 de octubre tendremos 5 sorteos cada día a partir de las 5 PM, donde se llamará a los miembros de Miccosukee One cada dos horas para ganar de $ 1,000 a $ 10,000. Si los ganadores no reclaman su premio, se transferirá al sorteo de la 1 AM del 31 de octubre. El último sorteo del 31 de octubre debe tener un ganador, ¡y ese ganador podría ser USTED!",
            },
            {
              id: "73",
              title: "PARA CALIFICAR",
              body:
                "Gane 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar entre el 1 de octubre a las 9 AM al 31 de octubre a las 12:45 AM. Esta promoción contará con un multiplicador de entradas de bono todos los viernes y sábados que los jugadores puedan ganar entradas. Los invitados recibirán una entrada de bono por cada 200 puntos que ganen desde las 9 AM hasta la hora de cierre y hasta las 12:45 AM del 31 de octubre.",
            },
            {
              id: "74",
              title: "Fecha y Horario de Sorteos",
              body:
                "Los sorteos se realizarán a las 5 PM, 7 PM, 9 PM, 11 PM el 29, 30 de octubre y 1 AM el 30 y 31 de octubre.",
            },
            {
              id: "75",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido por sorteo.",
            },
            {
              id: "76",
              title: "Ubicación de Sorteo",
              body:
                "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "77",
              title: "Cantidad de Entradas Permitidas por Persona",
              body: "Los jugadores pueden acumular entradas ilimitadas.",
            },
            {
              id: "78",
              title: "Tipo de Premio y Cantidades",
              body:
                "Si están presentes, los ganadores pueden reclamar los siguientes premios en efectivo [5 PM - $ 1,000] [7 PM - $ 4,000] [9 PM - $ 3,000] [11 PM - $ 2,000] [1 AM - $ 10,000]. El ganador de la 1 AM del 31 de octubre ganará $ 10,000 en efectivo más cualquier premio en efectivo no reclamado de los sorteos anteriores.",
            },
            {
              id: "79",
              title: "Reglas de “No Asistencia”",
              body:
                "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no está presente con el talonario de su boleto dentro de los diez (10) minutos de haber sido anunciado. Si los ganadores de cualquier sorteo no se presentan, el dinero del premio se transferirá al sorteo de la 1 AM del 31 de octubre. Los funcionarios del sorteo seguirán sorteando nombres en el sorteo final hasta que se encuentre un ganador.",
            },
            {
              id: "710",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body:
                "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "711",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                'La tómbola estará disponible el 1 de octubre a las 9 AM. La tómbola se vaciará después del último sorteo a la 1 AM del 31 de octubre. Los boletos no podrán ser depositados en la tómbola durante el sorteo. Al recibir el boleto de sorteo del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, "Monster Money". El jugador debe haber retenido la porción más pequeña del boleto perforado para poder obtener el premio. Los boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir.',
            },
            {
              id: "712",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 8,
        title: "Bonanza de Cumpleaños",
        img: cardImage9,
        oneLiner: "¡Gane una parte de $1,200 Free Play! \u200b",
        rules: {
          subSections: [
            { id: "80", title: "Día", body: "lunes, 25 de octubre de 2021" },
            { id: "81", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "82",
              title: "Reglas",
              body:
                "El lunes, 25 de octubre entre las 6 PM y 10 PM, miembros que cumplan años en octubre y estén jugando ativamente con sus tarjetas Miccosukee One serán elegibles para la oportunidad de ganar $25-$100 Free Play. Hasta $1,200 podrían ser otorgados en 8 oportunidades.",
            },
            {
              id: "83",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One deben cumplir años en octubre y estar jugando activamente en las máquinas con su tarjeta Miccosukee One.",
            },
            {
              id: "84",
              title: "Fecha y Horarios",
              body: "25 de octubre de 6 PM – 10 PM",
            },
            {
              id: "85",
              title: "Ganadores",
              body:
                "Miembros de la tarjeta Miccosukee One que activen el premio Ricochet mientras juegan y varios ganadores al azar que estén jugando con su tarjeta Miccosukee One cuando el premio sea activado. Todos los jugadores deberán cumplir años en octubre para ser elegibles para ganar.",
            },
            {
              id: "86",
              title: "Ubicacion de Promoción",
              body: "Máquinas de juego que acepten la tarjeta Miccosukee One",
            },
            {
              id: "87",
              title: "Tipo de Premio y Cantidades",
              body:
                "El jugador que active el premio Ricochet recibirá $100 y otros dos (2) ganadores recibirán $25 en cada oportunidad. Un total de $1,200 Free Play será otorgado durante 8 oportunidades. Hasta 24 ganadores recibirán premios.",
            },
            {
              id: "88",
              title: "Restricciones de Premio",
              body: "Los jugadores pueden ganar múltiples veces.",
            },
            {
              id: "89",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Los premios no son transferibles. Free Play es válido durante 30 días y sólo en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 9,
        title: "Ricochet para Nuevos Miembros",
        img: cardImage10,
        oneLiner: "¡Nuevos miembros, ganen una parte de $5,000!",
        rules: {
          subSections: [
            { id: "90", title: "Día", body: "domingo, 31 de octubre de 2021" },
            { id: "91", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "92",
              title: "Reglas",
              body:
                "¡Nuevos miembros merecen dinero nuevo! El domingo, 31 de octubre entre las 8 PM y 10 PM, nuevos miembros que se inscriban en octubre y que estén jugando activamente con su tarjeta Miccosukee One serán elegibles para la oportunidad de ganar $100 - $500 Free Play. Hasta $5,000 podrían ser otorgados en un máximo de 5 oportunidades.",
            },
            {
              id: "93",
              title: "PARA CALIFICAR",
              body:
                "Los miembros de Miccosukee One deben haberse registrado para obtener la tarjeta Miccosukee One durante el mes de octubre y deben estar jugando activamente en las máquinas de juego con su tarjeta Miccosukee One.",
            },
            {
              id: "94",
              title: "Fecha y Horarios",
              body: "31 de octubre de 8 PM – 10 PM",
            },
            {
              id: "95",
              title: "Ganadores",
              body:
                "Miembros de la Tarjeta Miccosukee One que activen el premio Ricochet mientras juegan y varios jugadores seleccionados al azar mientras juegan con su tarjeta Miccosukee One cuando el premio se active. Todos los invitados deben haberse registrado en octubre para poder ganar.",
            },
            {
              id: "96",
              title: "Ubicación de Promoción",
              body: "Máquinas de juego que acepten tarjetas de Miccosukee One",
            },
            {
              id: "97",
              title: "Tipo de Premio y Cantidades",
              body:
                "El jugador que active el premio Ricochet recibirá $500 y otros cinco (5) jugadores ganarán $100 durante cada oportunidad. Un total de $5,000 Free Play será otorgado en hasta 5 oportundiades. Hasta 30 ganadores recibirán premios.",
            },
            {
              id: "98",
              title: "Restricciones de Premio",
              body: "Los jugadores pueden ganar múltiples veces.",
            },
            {
              id: "99",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Los premios no son transferibles. Free Play es válido durante 30 días y sólo en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 10,
        title: "Ricochet por Referidos",
        img: cardImage11,
        oneLiner: "¡Refiera y gane hasta $100 Free Play!",
        rules: {
          subSections: [
            { id: "100", title: "Día", body: "domingo, 31 de octubre de 2021" },
            { id: "101", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "102",
              title: "Reglas",
              body:
                "¡Si usted nos refiere un amigo, le regalamos Free Play! El domingo, 31 de octubre entre las 6 PM y 8 PM, miembros que hayan hecho un referido en octubre y que estén jugando activamente con su tarjeta Miccosukee One serán elegibles para la oportunidad de ganar $50 o $100 Free Play. Hasta $1,000 podrían ser otorgados en un máximo de 5 oportunidades.",
            },
            {
              id: "103",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One deben haber referido a un nuevo miembro de Miccosukee One durante el mes de octubre y deben estar jugando activamente en las máquinas con su tarjeta Miccosukee One.",
            },
            {
              id: "104",
              title: "Fecha y Horarios",
              body: "31 de octubre de 6 PM – 8 PM",
            },
            {
              id: "105",
              title: "Ganadores",
              body:
                "Miembros de la tarjeta Miccosukee One que activen el premio Ricochet mientras juegan y varios ganadores seleccionados al azar mientras juegan con su tarjeta Miccosukee One cuando el premio se active. Todos los invitados deben haber referido a un nuevo miembro y deben estar presentes en el momento de inscripción en octubre para ser elegibles a ganar.",
            },
            {
              id: "106",
              title: "Ubicación de Promoción",
              body: "Máquinas de juego que acepten tarjetas de Miccosukee One",
            },
            {
              id: "107",
              title: "Tipo de Premio y Cantidades",
              body:
                "El jugador que active el premio Ricochet recibirá $100 y otros dos (2) jugadores ganarán $50 durante cada oportunidad. Un total de $1,000 Free Play será otorgado en hasta 5 oportundiades. Hasta 15 ganadores serán premiados.",
            },
            {
              id: "108",
              title: "Restricciones de Premio",
              body: "Los jugadores pueden ganar múltiples veces.",
            },
            {
              id: "109",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Los premios no son transferibles. Free Play es válido durante 30 días y sólo en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 11,
        title: "Silla Caliente de Halloween",
        img: cardImage12,
        oneLiner: "¡Celebre Halloween con $50 o $250 Free Play!",
        rules: {
          subSections: [
            { id: "110", title: "Día", body: "domingo, 31 de octubre de 2021" },
            { id: "111", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "112",
              title: "Reglas",
              body:
                "¡Tenemos dulces sorpresas de Free Play para ayudarle a celebrar Halloween! El domingo, 31 de octubre entre las 6 PM Y las 10 PM, hasta 60 miembros de Miccosukee One ganarán $50 o $250 Free Play vía premio ricochet.",
            },
            {
              id: "113",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One que estén jugando activamente con sus tarjetas de Miccosukee One.",
            },
            {
              id: "114",
              title: "Fecha y Horarios",
              body: "31 de octubre de 6 PM – 10 PM",
            },
            {
              id: "115",
              title: "Ganadores",
              body:
                "Un miembro de la tarjeta Miccosukee One que active el premio ricochet mientras juega ganará $250 Free Play y cinco (5) jugadores adicionales que estén jugando con su tarjeta Miccosukee One serán elegidos al azar cuando el premio sea activado para ganar $50 Free Play.",
            },
            {
              id: "116",
              title: "Ubicación de Promoción",
              body: "Máquinas de juego que acepten la tarjeta Miccosukee One.",
            },
            {
              id: "117",
              title: "Tipo de Premio y Cantidades",
              body:
                "El jugador que active el premio y 5 ganadores adicionales elegidos al azar en hasta diez (10) oportunidades recibirán $50 o $250 Free Play.",
            },
            {
              id: "118",
              title: "Restricciones de Premio",
              body: "Los jugadores pueden ganar múltiples veces.",
            },
            {
              id: "119",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play válido por treinta días y en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
    ];
  }
};
