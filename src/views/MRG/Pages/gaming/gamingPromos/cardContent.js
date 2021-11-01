// Images
import cardImage1 from "assets/media/img/mrg/monthly_promos/NewMemberBonus_Logo-768x768.png";
import cardImage2 from "assets/media/img/mrg/monthly_promos/MiccosukeeOneStatusMatch_Logo-768x768.png";
import cardImage3 from "assets/media/img/mrg/monthly_promos/RedCardRicochet_Logo-768x768.png";
import cardImage4 from "assets/media/img/mrg/monthly_promos/november/TurkeyBucks_Logo.png";
import cardImage5 from "assets/media/img/mrg/monthly_promos/november/CornucopiaOfCash_Logo.png";
import cardImage6 from "assets/media/img/mrg/monthly_promos/VIPGiveawayBlack_Logo-768x768.png";
import cardImage7 from "assets/media/img/mrg/monthly_promos/VIPGiveaway_White-768x768.png";
import cardImage8 from "assets/media/img/mrg/monthly_promos/november/ShopTillYouDrop_Logo.png";
import cardImage9 from "assets/media/img/mrg/monthly_promos/BirthdayBonanza_Logo-768x768.png";
import cardImage10 from "assets/media/img/mrg/monthly_promos/New-Members-Win-Big.png";
import cardImage11 from "assets/media/img/mrg/monthly_promos/Referral-WinBig.png";

// NEED A SCHEDULER SOLUTION AS WELL

export const cardContent = (language) => {
  if (language) {
    return [
      {
        id: 0,
        title: "New Member Bonus",
        img: cardImage1,
        oneLiner: "New Members earn up to $500+ Free Play!",
        rules: {
          subSections: [
            { id: "00", title: "Day", body: "All month of November" },
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
              body: "All month of November",
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
        oneLiner: "Upgraded status + Free Play bonus!",
        rules: {
          subSections: [
            { id: "10", title: "Day", body: "All month of November" },
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
                "Player name on valid photo ID must match the name on the Players Card. Players must provide address and email and/or phone to be eligible for tier match program. Card and ID must not be damaged, altered or otherwise illegible. Limit one upgrade per person. Offer only available to new players or players 12 months inactive at Miccosukee Resort and Gaming. New player Tier Match status must occur upon initial enrollment. No exceptions. Inactive players must visit the Player’s Club within 24 hours of first completed reactivation session to claim Tier Match status. Must be 18 years of age or older to qualify. Must have valid, government issued, gaming approved ID and be physically present with the original ID to register. Free Play valid on select machines only. Players will have until 1:59 AM on December 1 to redeem Free Play credits. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details.",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Red Card VIP Giveaway",
        img: cardImage3,
        oneLiner: "Feeling lucky Red Card? Win up to $150 Free Play!",
        rules: {
          subSections: [
            {
              id: "20",
              title: "Day",
              body: "Wednesday, November 3 & 17, 2021",
            },
            { id: "21", title: "Promotion Type", body: "Ricochet Rewards" },
            {
              id: "22",
              title: "Rules",
              body:
                "Calling all Red Card members! On Wednesday, November 3 & 17 between 6 PM and 9 PM up to 24 Red Tier Miccosukee One members will win $100 or $150 Free Play via Ricochet hot seat.",
            },
            {
              id: "23",
              title: "TO QUALIFY",
              body:
                "Miccosukee One RED Tier members actively gaming on their Miccosukee One Player's card.",
            },
            {
              id: "24",
              title: "Dates and Times",
              body: "November 3 & 17 from 6 PM - 9 PM",
            },
            {
              id: "25",
              title: "Winners",
              body:
                "Miccosukee One RED Tier member who triggers the Ricochet Prize through their play will win $150 Free Play and one (1) additional random Red Tier winner playing with their Miccosukee One card at the time the prize is triggered will win $100 Free Play.",
            },
            {
              id: "26",
              title: "Promotion Location",
              body: "Gaming devices that accept Miccosukee One cards",
            },
            {
              id: "27",
              title: "Prize Type and amounts",
              body:
                "The player who triggers the prize and 1 additional random winner in up to twelve (12) occurrences will receive $100 or $150 in Free Play.",
            },
            {
              id: "28",
              title: "Prize Restrictions",
              body: "Players can win multiple times.",
            },
            {
              id: "29",
              title: "General Rule Disclaimers",
              body:
                "Eligibility for tiered promotion based on November 1 status. Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days and on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 3,
        title: "Turkey Bucks",
        img: cardImage4,
        oneLiner: "Gobble up a share of $7,500 cash!",
        rules: {
          subSections: [
            { id: "30", title: "Day", body: "Sunday, November 7 & 21, 2021" },
            { id: "31", title: "Promotion Type", body: "Drawing" },
            {
              id: "32",
              title: "Rules",
              body:
                "It's time to gobble up some cash!! On Sunday, November 7 & 21 one Miccosukee One member will win their share of $7,500 in cash at 1 PM, 3 PM & 5 PM!",
            },
            {
              id: "33",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must earn 100 points on their Miccosukee One card for each drawing ticket. Points can be earned from November 1 at 9 AM to November 21 at 4:45 PM.",
            },
            {
              id: "34",
              title: "Dates and Times",
              body: "November 7 & 21 at 1 PM, 3 PM & 5 PM",
            },
            {
              id: "35",
              title: "Number of Winners Per Drawing",
              body: "One (1) winner at 1 PM, 3 PM & 5 PM",
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
              body:
                "If present, winners may claim the following cash prizes [1 PM - $1,500] [3 PM - $1,000] [5 PM - $5,000].",
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
                "Barrel will be available on November 1 at 9 AM. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Turkey Bucks”. Drum will be cleared after the last drawing of the day. Player must have retained the smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "312",
              title: "General Rule Disclaimers",
              body:
                "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Cornucopia of Cash",
        img: cardImage5,
        oneLiner: "Win up to $5,000 cash!",
        rules: {
          subSections: [
            {
              id: "40",
              title: "Day",
              body: "Monday, November 8, 15 & 22, 2021",
            },
            { id: "41", title: "Promotion Type", body: "Drawing" },
            {
              id: "42",
              title: "Rules",
              body:
                "A Cornucopia of Cash is waiting for you on Monday, November 8, 15 & 22. At 7 PM, 8 PM & 9 PM, a lucky Miccosukee One member will win up to $5,000 in cash!",
            },
            {
              id: "43",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must earn 100 points on their Miccosukee One card for each drawing ticket. Points can be earned from November 1 at 9 AM to November 22 at 8:45 PM.",
            },
            {
              id: "44",
              title: "Dates and Times",
              body: "November 8, 15 & 22 at 7 PM, 8 PM & 9 PM",
            },
            {
              id: "45",
              title: "Number of Winners Per Drawing",
              body: "One (1) winner at 7 PM, 8 PM & 9 PM",
            },
            {
              id: "46",
              title: "Drawing Location / Prize Giveaway Location",
              body:
                "Drawings and prize giveaways will take place at the Player's Club.",
            },
            {
              id: "47",
              title: "Max Number of Entries",
              body: "Players can earn an unlimited amount of entries.",
            },
            {
              id: "48",
              title: "Prize Type and Amounts",
              body: "Cash prizes available to be won are $1,000 - $5,000.",
            },
            {
              id: "49",
              title: "Amount of Wins Permitted Per Guest",
              body:
                "Players can only win once in any single drawing with multiple winners.",
            },
            {
              id: "410",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
            },
            {
              id: "411",
              title: "Game Rules",
              body:
                "If present, winners will pick a single prize vehicle. A total of 10 prize vehicles will start each drawing. The prize vehicles picked by the winners will be worth the following amounts [2 - $1,000] [2 - $1,500] [3 - $2,500] [2 - $3,000] [1 - $5,000].",
            },
            {
              id: "412",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available November 1. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Cornucopia of Cash”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "413",
              title: "General Rule Disclaimers",
              body:
                "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Black Card VIP Giveaway",
        img: cardImage6,
        oneLiner: "Black Cards, win a share of $7,500 cash!",
        rules: {
          subSections: [
            { id: "50", title: "Day", body: "Tuesday, November 9 & 23, 2021" },
            { id: "51", title: "Promotion Type", body: "Drawing" },
            {
              id: "52",
              title: "Rules",
              body:
                "Black Tier members, let’s fall for some cash! On Tuesday, November 9 & 23 at 7 PM, 8 PM & 9 PM one Miccosukee One Black Card member will win their share of $7,500 in cash!",
            },
            {
              id: "53",
              title: "TO QUALIFY",
              body:
                "Miccosukee One Black Card members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from November 1 at 9 AM to November 23 at 8:45 PM.",
            },
            {
              id: "54",
              title: "Dates and Times",
              body: "November 9 & 23 at 7 PM, 8 PM & 9 PM",
            },
            {
              id: "55",
              title: "Number of Winners Per Drawing",
              body: "One (1) winner at 7 PM, 8 PM & 9 PM",
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
              body: "One (1) $2,500 cash prize at 7 PM, 8 PM & 9 PM",
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
                "Barrel will be available November 1 – 9 for the 11/9 drawing and November 11 - 23 for 11/23 drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Black Card VIP Giveaway”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "512",
              title: "General Rule Disclaimers",
              body:
                "Eligibility for tiered promotion based on November 1 status. Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 6,
        title: "White Card VIP Giveaway",
        img: cardImage7,
        oneLiner: "White Cards, win a share of $15,000!",
        rules: {
          subSections: [
            {
              id: "60",
              title: "Day",
              body: "Wednesday, November 10 & 24, 2021",
            },
            { id: "61", title: "Promotion Type", body: "Drawing" },
            {
              id: "62",
              title: "Rules",
              body:
                "White Tier members, let’s fall for some cash! On Wednesday, November 10 & 24 at 7 PM, 8 PM & 9 PM one Miccosukee One White Card member will win a share of $15,000 in cash!",
            },
            {
              id: "63",
              title: "TO QUALIFY",
              body:
                "Miccosukee One White Card members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from November 1 at 9 AM to November 24 at 8:45 PM.",
            },
            {
              id: "64",
              title: "Dates and Times",
              body: "November 10 & 24 at 7 PM, 8 PM & 9 PM",
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
              body: "One (1) $5,000 cash prize at 7 PM, 8 PM & 9 PM",
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
                "Barrel will be available November 10 and November 24. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “White Card VIP Giveaway”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "612",
              title: "General Rule Disclaimers",
              body:
                "Eligibility for tiered promotion based on November 1 status. Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 7,
        title: "Shop Till You Drop",
        img: cardImage8,
        oneLiner: "Gifts & cash prizes worth $1,000 - $10,000!",
        rules: {
          subSections: [
            {
              id: "70",
              title: "Day",
              body: "Friday, November 26 & Saturday, November 27, 2021",
            },
            { id: "71", title: "Promotion Type", body: "Drawing" },
            {
              id: "72",
              title: "Rules",
              body:
                "Shop till you drop and win thousands in cash & gifts this holiday weekend!! On November 26 & 27 we'll have 5 drawings each day starting at 5 PM where Miccosukee One members will be called every two hours to win $1,000 to $10,000 in cash and prizes.",
            },
            {
              id: "73",
              title: "TO QUALIFY",
              body:
                "Earn 200 points on your Miccosukee One card for each drawing ticket. Points can be earned between November 1 at 9 AM and November 28 at 12:45 AM. This promotion will feature a bonus entry multiplier every Friday and Saturday that players are allowed to earn entries. Guests will receive one bonus entry for every 200 points they earn from 9 AM – close and through 12:45 AM on November 28.",
            },
            {
              id: "74",
              title: "Dates & Times",
              body:
                "Drawings will occur at 5 PM, 7 PM, 9 PM, 11 PM on November 26, 27 & 1 AM on November 27, 28.",
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
                "If present, winners may claim the following prizes on November 26 [5 PM - Tablet Valued up to $1,200 (Or cash option of $850)] [7 PM - $4,000] [9 PM - $3,000] [11 PM - Self Home Cleaning Kit valued up to $1,700 (Or cash option of $1,200)]. Nov 27 [1 AM - $10,000] [5 PM - Luxury Watch Set valued up to $1,400 (Or cash option of $1,000)] [7 PM - $4,000] [9 PM - $3,000] [11 PM - 4K TV & Sound bar Combo valued up to $2,200 (Or cash option of $1,550)]. November 28 [1 AM - $10,000].",
            },
            {
              id: "79",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
            },
            {
              id: "710",
              title: "Bonus Entry Rules",
              body:
                "On November 5, 6, 12, 13, 19, 20, 26, 27 & through 12:45 AM on November 28, players can earn one bonus entry for every 200 points they earn. Players must collect their bonus entries on the same day and within the time frame they have to earn them. Any entries not claimed during the appropriate time frame will be forfeited and cannot be printed at a later date.",
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
                "Barrel will be available on November 1 at 9 AM. Drum will be emptied after the last drawing at 1AM on November 28. Entries may not be entered into the drum during the drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub's larger perforated portion into the appropriate drum of the respective raffle, \"Shop Till You Drop\". Player must have retained the smaller portion of perforated ticket in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued.",
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
        oneLiner: "A share of $1,200 Free Play is better than cake!",
        rules: {
          subSections: [
            { id: "80", title: "Day", body: "Monday, November 29, 2021" },
            { id: "81", title: "Promotion Type", body: "Ricochet Rewards" },
            {
              id: "82",
              title: "Rules",
              body:
                "On Monday, November 29 between the hours of 6 PM and 10 PM, November birthday guests who are actively gaming with their Miccosukee One card will be eligible for a chance to win $25-$100 in Free Play. Up to $1,200 may be awarded in up to 8 occurrences.",
            },
            {
              id: "83",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must have a birthday during the month of November and be actively playing gaming machines on their Miccosukee One card.",
            },
            {
              id: "84",
              title: "Dates and Times",
              body: "November 29 from 6 PM - 10 PM",
            },
            {
              id: "85",
              title: "Winners",
              body:
                "Miccosukee One members who trigger the Ricochet prize through their play and various random winners who are playing with their Miccosukee One card at the time the prize is triggered. All guests must have a November birthday to be eligible to win.",
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
        title: "New Members Win Big",
        img: cardImage10,
        oneLiner: "New Members can win $2,500 cash!",
        rules: {
          subSections: [
            { id: "90", title: "Day", body: "Tuesday, November 30, 2021" },
            { id: "91", title: "Promotion Type", body: "Drawing" },
            {
              id: "92",
              title: "Rules",
              body:
                "New members can win big on Tuesday, November 30 at 9 PM!! One New Member from the month of November will be chosen from the drum and will win $2,500 in cash!!!",
            },
            {
              id: "93",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must have signed up for a Miccosukee One card during the month of November and be present to win.",
            },
            { id: "94", title: "Dates and Times", body: "November 30 at 9 PM" },
            {
              id: "95",
              title: "Number of Winners Per Drawing",
              body: "One (1) winner will be drawn.",
            },
            {
              id: "96",
              title: "Drawing Location / Prize Giveaway Location",
              body:
                "Drawings and prize giveaways will take place at the Player's Club.",
            },
            {
              id: "97",
              title: "Max Number of Entries",
              body:
                "Every eligible new member will receive one drawing ticket.",
            },
            {
              id: "98",
              title: "Prize Type and Amounts",
              body: "One (1) $2,500 cash prize at 9 PM",
            },
            {
              id: "99",
              title: "Amount of Wins Permitted Per Guest",
              body:
                "Players can only win once in any single drawing with multiple winners.",
            },
            {
              id: "910",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
            },
            {
              id: "911",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available November 30. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle \"New Members Win Big”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "912",
              title: "General Rule Disclaimers",
              body:
                "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 10,
        title: "Referrals Win Big",
        img: cardImage11,
        oneLiner: "Invite a friend for a chance to win $1,000 cash!",
        rules: {
          subSections: [
            { id: "100", title: "Day", body: "Tuesday, November 30, 2021" },
            { id: "101", title: "Promotion Type", body: "Drawing" },
            {
              id: "102",
              title: "Rules",
              body:
                "You refer us a friend, we can refer you some cash! On Tuesday, November 30 at 8 PM, players who have referred one new member in the month of November will have a chance to win $1,000 in cash!!!",
            },
            {
              id: "103",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must refer a new Miccosukee One member during the month of November and be present to win. One entry will be awarded per referral.",
            },
            {
              id: "104",
              title: "Dates and Times",
              body: "November 30 at 8 PM",
            },
            {
              id: "105",
              title: "Number of Winners Per Drawing",
              body: "One (1) winner will be drawn.",
            },
            {
              id: "106",
              title: "Drawing Location / Prize Giveaway Location",
              body:
                "Drawings and prize giveaways will take place at the Player's Club.",
            },
            {
              id: "107",
              title: "Max Number of Entries",
              body: "Players can earn an unlimited amount of entries.",
            },
            {
              id: "108",
              title: "Prize Type and Amounts",
              body: "One (1) $1,000 cash prize at 8 PM",
            },
            {
              id: "109",
              title: "Amount of Wins Permitted Per Guest",
              body:
                "Players can only win once in any single drawing with multiple winners.",
            },
            {
              id: "1010",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
            },
            {
              id: "1011",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available November 30. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Referrals Win Big”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "1012",
              title: "General Rule Disclaimers",
              body:
                "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
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
        oneLiner: "¡Nuevos Miembros ganan hasta $500+ Free Play!\u200b",
        rules: {
          subSections: [
            { id: "00", title: "Día", body: "Todo el mes de noviembre" },
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
              body: "Todo el mes de noviembre",
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
        oneLiner: "¡Promoción de nivel + bono Free Play!",
        rules: {
          subSections: [
            { id: "10", title: "Día", body: "Todo el mes de noviembre" },
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
                "El nombre que el jugador muestre en su ID debe igualar el nombre que muestre en su Player’s Card. Jugadores deberán proveer dirección, correo electrónico y/o número de teléfono para ser elegibles para el programa de tier match. El Player’s Card y la ID no deben estar dañadas, alteradas o ilegibles. Límite una promoción de nivel por persona. Oferta válida sólo para nuevos jugadores o jugadores que lleven 12 meses inactivos en Miccosukee Resort & Gaming. El Tier Match para nuevos jugadores debe ocurrir en el momento de la inscripción inicial. Sin excepciones. Los jugadores inactivos deben visitar el Player’s Club dentro de las 24 horas posteriores a la primera sesión de reactivación completada para reclamar su Tier Match. Deben tener 18 años de edad o más para calificar. Los jugadores sólo pueden participar en la promoción una vez. Deben tener identificación válida, emitida por el gobierno, aprobada para jugar, y estar físicamente presente con la identificación original al momento de registrarse. Free Play es válido sólo en máquinas seleccionadas. Jugadores tendrán hasta las 1:59 AM del 1 de diciembre para redimir sus créditos de Free Play. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles.",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Sorteo VIP para Tarjeta Roja",
        img: cardImage3,
        oneLiner: "¿Tiene suerte Tarjeta Roja? ¡Gane hasta $150 Free Play!",
        rules: {
          subSections: [
            {
              id: "20",
              title: "Día",
              body: "miércoles, 3 y 17 de noviembre de 2021",
            },
            { id: "21", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "22",
              title: "Reglas",
              body:
                "¡Llamando a todos los miembros de nivel Rojo! El miércoles, 3 y 17 de noviembre entre las 6 PM y 9 PM hasta 24 miembros de la tarjeta Miccosukee One de nivel Rojo ganarán $100 o $150 Free Play vía Ricochet hot seat.",
            },
            {
              id: "23",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One de nivel ROJO que están jugando activamente con su tarjeta Miccosuke One.",
            },
            {
              id: "24",
              title: "Fecha y Horarios de Sorteos",
              body: "3 y 17 de noviembre de 6 PM – 9 PM",
            },
            {
              id: "25",
              title: "Ganadores",
              body:
                "Un miembro de la tarjeta Miccosukee One de nivel Rojo que active el premio Ricochet mientras juega ganará $150 Free Play y un (1) jugador adicional de nivel Rojo que está jugando con su tarjeta Miccosukee One y que sea elegido al azar cuando el premio sea activado ganará $100 Free Play.",
            },
            {
              id: "26",
              title: "Ubicación de Promoción",
              body: "Máquinas de juego que acepten la tarjeta Miccosukee One",
            },
            {
              id: "27",
              title: "Tipo de Premio y Cantidades",
              body:
                "El jugador que active el premio y 1 ganador al azar durante una de hasta doce (12) oportunidades recibirán $100 o $150 Free Play.",
            },
            {
              id: "28",
              title: "Restricciones de Premio",
              body: "Los jugadores pueden ganar múltiples veces.",
            },
            {
              id: "29",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Elegibilidad para promoción por niveles basada en el estatus de juego del 1 de noviembre. Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play válido por treinta días y en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 3,
        title: "Dinero para el Pavo",
        img: cardImage4,
        oneLiner: "¡Devore su parte de $7,500 en efectivo!",
        rules: {
          subSections: [
            {
              id: "30",
              title: "Día",
              body: "domingo, 7 y 21 de noviembre de 2021",
            },
            { id: "31", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "32",
              title: "Reglas",
              body:
                "¡¡¡Llegó la hora de devorarse el dinero!!! El domingo, 7 y 21 de noviembre, ¡un miembro de la tarjeta Miccosukee One ganará su parte de $7,500 en efectivo a las 1 PM, 3 PM y 5 PM!",
            },
            {
              id: "33",
              title: "PARA CALIFICAR",
              body:
                "Miembros de Miccosukee One deberán ganar 100 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de noviembre a las 9 AM hasta ell 21 de noviembre a las 4:45 PM.",
            },
            {
              id: "34",
              title: "Fecha y Horarios de Sorteos",
              body: "7 y 21 de noviembre a las 1 PM, 3 PM y 5 PM",
            },
            {
              id: "35",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un ganador será elegido a las 1 PM, 3 PM y 5 PM.",
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
                "Si están presentes, los ganadores pueden reclamar los siguientes premios en efectivo [1 PM - $1,500] [3 PM - $1,000] [5 PM - $5,000].",
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
                "La tómbola estará disponible el 1 de noviembre a las 9 AM. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Turkey Bucks”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "312",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Cornucopia de Efectivo",
        img: cardImage5,
        oneLiner: "¡Gane hasta $5,000 en efectivo!",
        rules: {
          subSections: [
            {
              id: "40",
              title: "Día",
              body: "lunes, 8, 15 y 22 de noviembre de 2021",
            },
            { id: "41", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "42",
              title: "Reglas",
              body:
                "Una cornucopia de efectivo le está esperando el lunes, 8, 15 y 22 de noviembre. A las 7 PM, 8 PM y 9 PM, ¡un afortunado miembro de la tarjeta Miccosukee One ganará hasta $5,000 en efectivo!",
            },
            {
              id: "43",
              title: "PARA CALIFICAR",
              body:
                "Miembros de Miccosukee One deberán ganar 100 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de noviembre a las 9 AM hasta el 22 de noviembre a las 8:45 PM.",
            },
            {
              id: "44",
              title: "Fecha y Horario de Sorteos",
              body: "8, 15 y 22 de noviembre a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "45",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido a las 7 PM, 8 PM y 9 PM.",
            },
            {
              id: "46",
              title: "Ubicación de Sorteo",
              body:
                "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "47",
              title: "Cantidad de Entradas Permitidas por Persona",
              body: "Los jugadores pueden acumular entradas ilimitadas.",
            },
            {
              id: "48",
              title: "Tipo de Premio y Cantidades",
              body:
                "Los premios en efectivo disponibles a ser ganados son de $1,000 - $5,000.",
            },
            {
              id: "49",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body:
                "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "410",
              title: "Reglas de “No Asistencia”",
              body:
                "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "411",
              title: "Reglas del Juego",
              body:
                "Si están presentes, los ganadores elegirán un sólo vehículo de premio. Comenzaremos el mes con un total de 10 vehículos premiados. Los vehículos premiados no serán reemplazados después de que hayan sido elegidos durante el mes. Los vehículos premiados valdrán las siguientes cantidades [2 - $ 1,000] [2 - $ 1,500] [3 - $ 2,500] [2 - $ 3,000] [1 - $ 5,000].",
            },
            {
              id: "412",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible el 1 de noviembre. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Cornucopia of Cash”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "413",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Sorteo VIP para Tarjeta Negra",
        img: cardImage6,
        oneLiner: "Tarjetas Negras, ¡ganen su parte de $7,500 en efectivo!",
        rules: {
          subSections: [
            {
              id: "50",
              title: "Día",
              body: "martes, 9 y 23 de noviembre de 2021",
            },
            { id: "51", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "52",
              title: "Reglas",
              body:
                "Miembros de tarjeta Negra, ¡saltemos en un montón de dinero! El martes 9 y 23 de noviembre a las 7 PM, 8 PM y 9 PM, ¡un miembro de la tarjeta Miccosukee One de nivel Negro ganará una parte de $7,500 en efectivo!",
            },
            {
              id: "53",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One de nivel Negro deberán ganar 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de noviembre a las 9 AM hasta el 23 de noviembre a las 8:45 PM.",
            },
            {
              id: "54",
              title: "Fecha y Horario de Sorteos",
              body: "9 y 23 de noviembre a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "55",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido a las 7 PM, 8 PM y 9 PM.",
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
                "Un (1) premio en efectivo de $2,500 a las 7 PM, 8 PM y 9 PM.",
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
                "La tómbola estará disponible del 1 – 9 de noviembre para el sorteo del 9 de noviembre, y del 11 – 23 de noviembre para el sorteo del 23 de noviembre. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Black Card VIP Giveaway”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "512",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Elegibilidad para promoción por niveles basada en el estatus de juego del 1 de noviembre. Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 6,
        title: "Sorteo VIP para Tarjeta Blanca",
        img: cardImage7,
        oneLiner: "Tarjetas Blancas, ¡ganen su parte de $15,000 en efectivo!",
        rules: {
          subSections: [
            {
              id: "60",
              title: "Día",
              body: "miércoles, 10 y 24 de noviembre de 2021",
            },
            { id: "61", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "62",
              title: "Reglas",
              body:
                "Miembros de tarjeta Blanca, ¡saltemos en un montón de dinero! El miércoles, 10 y 24 de noviembre a las 7 PM, 8 PM y 9 PM, ¡un miembro de la tarjeta Miccosukee One de nivel Blanco ganará su parte de $15,000 en efectivo!",
            },
            {
              id: "63",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One de nivel Blanco deberán ganar 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de noviembre a las 9 AM hasta el 24 de noviembre a las 8:45 PM.",
            },
            {
              id: "64",
              title: "Fecha y Horario de Sorteos",
              body: "10 y 24 de noviembre a las 7 PM, 8 PM y 9 PM",
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
                "La tómbola estará disponible del 10 de noviembre al 24 de noviembre. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “White Card VIP Giveaway”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "612",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Elegibilidad para promoción por niveles basada en el estatus de juego del 1 de noviembre. Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 7,
        title: "Compre Hasta el Cansancio",
        img: cardImage8,
        oneLiner:
          "¡Regalos y premios en efectivo valorados en $1,000 - $10,000!",
        rules: {
          subSections: [
            {
              id: "70",
              title: "Día",
              body:
                "viernes, 26 de noviembre y sábado, 27 de noviembre de 2021",
            },
            { id: "71", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "72",
              title: "Reglas",
              body:
                "¡Compre hasta el cansancio y gane miles en efectivo y regalos este fin de semana festivo! El 26 y 27 de noviembre tendremos 5 sorteos cada día a partir de las 5 PM donde llamaremos a los miembros de Miccosukee One cada dos horas para ganar de $1,000 a $10,000 en efectivo y premios.",
            },
            {
              id: "73",
              title: "PARA CALIFICAR",
              body:
                "Gane 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de noviembre a las 9 AM hasta el 28 de noviembre a las 12:45 AM. Esta promoción contará con un multiplicador de entradas de bono todos los viernes y sábados que los jugadores puedan ganar entradas. Los invitados recibirán una entrada de bono por cada 200 puntos que ganen desde las 9 AM hasta la hora de cierre y hasta las 12:45 AM el 28 de noviembre.",
            },
            {
              id: "74",
              title: "Fecha y Horario de Sorteos",
              body:
                "Los sorteos se realizarán a las 5 PM, 7 PM, 9 PM, 11 PM el 26 y 27 de noviembre, y a las 1 AM el 27 y 28 de noviembre.",
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
                "Si están presentes, los ganadores pueden reclamar los siguientes premios en efectivo el 26 de noviembre [5 PM - Tableta valorada en hasta $1,200 (u opción en efectivo de $850)] [7 PM - $4,000] [9 PM - $ 3,000] [11 PM - Kit de limpieza para el hogar valorado en hasta $1,700 (u opción en efectivo de $1,200)]. 27 de noviembre [1 AM - $10,000] [5 PM - Juego de relojes de lujo valorado en $1,400 (u opción en efectivo de $1,000)] [7 PM - $4,000] [9 PM - $3,000] [11 PM - Combo de TV 4K y barra de sonido valorado en hasta $2,200 (u opción en efectivo de $1,550)]. 28 de noviembre [1 AM - $10,000].",
            },
            {
              id: "79",
              title: "Reglas de “No Asistencia”",
              body:
                "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "710",
              title: "Reglas para Entradas de Bono",
              body:
                "El 5, 6, 12, 13, 19, 20, 26, 27 de noviembre y hasta las 12:45 AM del 28 de noviembre, los jugadores pueden ganar una entrada de bono por cada 200 puntos que ganen. Los jugadores deben recoger sus entradas de bono el mismo día y dentro del plazo que tienen para ganarlas. Cualquier entrada no reclamada durante el periodo de tiempo establecido se perderá y no se podrá emitir en una fecha posterior.",
            },
            {
              id: "711",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body:
                "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "712",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible el 1 de noviembre a las 9 AM. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Shop Till You Drop”. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir.",
            },
            {
              id: "713",
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
        oneLiner:
          "¡Una parte de $1,200 Free Play es mejor que el pastel! \u200b",
        rules: {
          subSections: [
            { id: "80", title: "Día", body: "lunes, 29 de noviembre de 2021" },
            { id: "81", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "82",
              title: "Reglas",
              body:
                "El lunes, 29 de noviembre entre las 6 PM y 10 PM, miembros que cumplan años en noviembre y estén jugando ativamente con sus tarjetas Miccosukee One serán elegibles para la oportunidad de ganar $25-$100 Free Play. Hasta $1,200 podrían ser otorgados en 8 oportunidades.",
            },
            {
              id: "83",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One deben cumplir años en noviembre y estar jugando activamente en las máquinas con su tarjeta Miccosukee One.",
            },
            {
              id: "84",
              title: "Fecha y Horarios",
              body: "29 de noviembre de 6 PM – 10 PM",
            },
            {
              id: "85",
              title: "Ganadores",
              body:
                "Miembros de la tarjeta Miccosukee One que activen el premio Ricochet mientras juegan y varios ganadores al azar que estén jugando con su tarjeta Miccosukee One cuando el premio sea activado. Todos los jugadores deberán cumplir años en noviembre para ser elegibles para ganar.",
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
        title: "Nuevos Miembros Ganan en Grande",
        img: cardImage10,
        oneLiner: "¡Nuevos Miembros pueden ganar $2,500 en efectivo!",
        rules: {
          subSections: [
            { id: "90", title: "Día", body: "martes, 30 de noviembre de 2021" },
            { id: "91", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "92",
              title: "Reglas",
              body:
                "¡Los nuevos miembros pueden ganar en grande el martes, 30 de noviembre a las 9 PM! ¡Un nuevo miembro del mes de noviembre será elegido de la tómbola para ganar $2,500 en efectivo!",
            },
            {
              id: "93",
              title: "PARA CALIFICAR",
              body:
                "Miembros de Miccosukee One deben haberse inscrito para recibir una tarjeta Miccosukee One durante el mes de noviembre y deben estar presentes para ganar.",
            },
            {
              id: "94",
              title: "Fecha y Horario de Sorteo",
              body: "30 de noviembre a las 9 PM",
            },
            {
              id: "95",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido durante el sorteo.",
            },
            {
              id: "96",
              title: "Ubicación de Sorteo",
              body:
                "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "97",
              title: "Cantidad de Entradas Permitidas por Persona",
              body: "Cada nuevo miembro elegible recibirá un boleto de sorteo.",
            },
            {
              id: "98",
              title: "Tipo de Premio y Cantidades",
              body: "Un (1) premio en efectivo de $2,500 a las 9 PM",
            },
            {
              id: "99",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body:
                "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "910",
              title: "Reglas de “No Asistencia”",
              body:
                "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "911",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible el 30 de noviembre. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “New Members Win Big”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "912",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 10,
        title: "Referidos Ganan en Grande",
        img: cardImage11,
        oneLiner:
          "¡Invite a un amigo para la oportunidad de ganar $1,000 en efectivo!",
        rules: {
          subSections: [
            {
              id: "100",
              title: "Día",
              body: "martes, 30 de noviembre de 2021",
            },
            { id: "101", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "102",
              title: "Reglas",
              body:
                "Si nos refiere a un amigo, ¡le regalamos dinero en efectivo! El martes, 30 de noviembre a las 8 PM, ¡los jugadores que hayan referido a un nuevo miembro durante el mes de noviembre tendrán la oportunidad de ganar $1,000 en efectivo!",
            },
            {
              id: "103",
              title: "PARA CALIFICAR",
              body:
                "Miembros de Miccosukee One deberán referir a un nuevo miembro de Miccosukee One durante el mes de noviembre y deberán estar presentes para ganar. Una entrada será otorgada por referido.",
            },
            {
              id: "104",
              title: "Fecha y Horario de Sorteo",
              body: "30 de noviembre a las 8 PM",
            },
            {
              id: "105",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido durante el sorteo.",
            },
            {
              id: "106",
              title: "Ubicación de Sorteo",
              body:
                "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "107",
              title: "Cantidad de Entradas Permitidas por Persona",
              body: "Los jugadores pueden acumular entradas ilimitadas.",
            },
            {
              id: "108",
              title: "Tipo de Premio y Cantidades",
              body: "Un (1) premio en efectivo de $1,000 a las 8 PM",
            },
            {
              id: "109",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body:
                "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "1010",
              title: "Reglas de “No Asistencia”",
              body:
                "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "1011",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible el 30 de noviembre. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Referrals Win Big”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "1012",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
    ];
  }
};
