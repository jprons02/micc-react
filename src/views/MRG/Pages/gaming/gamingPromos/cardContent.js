// Images
import cardImage1 from "assets/img/mrg/monthly_promos/NewMemberBonus_Logo-768x768.png";
import cardImage2 from "assets/img/mrg/monthly_promos/MiccosukeeOneStatusMatch_Logo-768x768.png";
import cardImage3 from "assets/img/mrg/monthly_promos/VIPGiveawayBlack_Logo-768x768.png";
import cardImage4 from "assets/img/mrg/monthly_promos/september/HighLowDuel_logo.png";
import cardImage5 from "assets/img/mrg/monthly_promos/august/FiftyFifty_Logo.png";
import cardImage6 from "assets/img/mrg/monthly_promos/RedCardRicochet_Logo-768x768.png";
import cardImage7 from "assets/img/mrg/monthly_promos/VIPGiveaway_White-768x768.png";
import cardImage8 from "assets/img/mrg/monthly_promos/september/SunnySundayPayouts_logo.png";
import cardImage9 from "assets/img/mrg/monthly_promos/september/JustInCase_logo.png";
import cardImage10 from "assets/img/mrg/monthly_promos/BirthdayBonanza_Logo-768x768.png";
import cardImage11 from "assets/img/mrg/monthly_promos/august/NewMemberRicochet_Logo.png";
import cardImage12 from "assets/img/mrg/monthly_promos/august/ReferralRicochet_Logo.png";

// NEED A SCHEDULER SOLUTION AS WELL

export const cardContent = (language) => {
  if (language) {
    return [
      {
        id: 0,
        title: "New Member Bonus",
        img: cardImage1,
        oneLiner: "Sign up and earn $15-$515 Free Play!",
        rules: {
          subSections: [
            { id: "00", title: "Day", body: "All month of September" },
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
              body: "All month of September",
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
                "Promotions are only available for Miccosukee One members. Prizes are not transferable. Bounce Back Free Play valid for 7 days and on select machines only. Play and Get Free Play is available for thirty (30) days once earned during the valid 7 day offer window. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 1,
        title: "Miccosukee One Status Match",
        img: cardImage2,
        oneLiner: "Sign-on bonus plus upgraded status!",
        rules: {
          subSections: [
            { id: "10", title: "Day", body: "All month of September" },
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
                "Player name on valid photo ID must match the name on the Players Card. Players must provide address and email and/or phone to be eligible for tier match program. Card and ID must not be damaged, altered or otherwise illegible. Limit one upgrade per person. Offer only available to new players or players 12 months inactive at Miccosukee Resort and Gaming. New player Tier Match status must occur upon initial enrollment. No exceptions. Inactive players must visit the Player’s Club within 24 hours of first completed reactivation session to claim Tier Match status. Must be 21 years of age or older. Must have valid, government issued, gaming approved ID and be physically present with the original ID to register. Free Play valid on select machines only. Players will have until 1:59 AM on October 1 to redeem Free Play credits. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details.",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Black Card VIP Giveaway",
        img: cardImage3,
        oneLiner: "Black Cards, win $2,500 cash!",
        rules: {
          subSections: [
            {
              id: "20",
              title: "Day",
              body: "Thursday, September 2 & 16, 2021",
            },
            { id: "21", title: "Promotion Type", body: "Drawing" },
            {
              id: "22",
              title: "Rules",
              body:
                "Calling all Black Cards, we are giving away $7,500 in cash to welcome in the fall. Thursday, September 2 & 16 at 7 PM, 8 PM & 9 PM, one Miccosukee One Black Card member will win $2,500 in cash!",
            },
            {
              id: "23",
              title: "TO QUALIFY",
              body:
                "Miccosukee One Black Card members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from August 26 at 9 AM to September 16 at 8:45 PM.",
            },
            {
              id: "24",
              title: "Dates and Times",
              body: "September 2 & 16 at 7 PM, 8 PM & 9 PM",
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
              body: "One (1) $2,500 cash prize at 7 PM 8 PM & 9 PM",
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
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available September 1 – 2 for the 9/2 drawing and September 10 – 16 for the 9/16 drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Black Card VIP Giveaway”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "212",
              title: "General Rule Disclaimers",
              body:
                "Eligibility for tiered promotion based on September 1 status. Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 3,
        title: "High Low Duel",
        img: cardImage4,
        oneLiner: "Cards pay up to $6K!",
        rules: {
          subSections: [
            {
              id: "30",
              title: "Day",
              body: "Monday, September 6, 13 & 20, 2021",
            },
            { id: "31", title: "Promotion Type", body: "Drawing" },
            {
              id: "32",
              title: "Rules",
              body:
                "Your next card might be low but your pay-out will be high!!! On Monday, September 6, 13 & 20 at 7 PM & 9 PM, two Miccosukee One members will win up to $6,000 in cash!",
            },
            {
              id: "33",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must earn 100 points on their Miccosukee One card for each drawing ticket. Points can be earned from September 1 at 9 AM to September 20 at 8:45 PM.",
            },
            {
              id: "34",
              title: "Dates and Times",
              body: "September 6, 13 & 20 at 7 PM & 9 PM",
            },
            {
              id: "35",
              title: "Number of Winners Per Drawing",
              body: "Two (2) winners at 7 PM & 9 PM",
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
              body: "Cash prizes available to be won are $1,000 - $6,000.",
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
              title: "Game Rules",
              body:
                "If present, winners will play High Low against each other. The player that was picked out of the barrel first will play High Low first. A deck of cards will be shuffled, once shuffling is complete the player will cut the deck. The first card in the deck will be revealed to the player. Once the card is revealed, the player will then decide whether the next card will be higher or lower than the card revealed. If the player is right, another card will be revealed, if the player is wrong their turn is over. A total of 6 cards will be revealed, including the first show card. A tie in cards will be considered a correct guess. The guest with more correct guesses wins. A tie will be settled by both guests drawing a card from the deck, higher card wins, ties will result in a redraw. A 2 is considered the lowest card and an Ace is considered the highest card. The prize vehicles picked by the winner of the high low duel will be worth the following amounts [2 - $1,500] [2 - $2,500] [2 - $3,000] [2 - $4,000] [1 - $5,000] [1 - $6,000]. The consolation prize will be $1,000 for 2nd place.",
            },
            {
              id: "312",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available September 1. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “High Low Duel”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "313",
              title: "General Rule Disclaimers",
              body:
                "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Fifty Fifty",
        img: cardImage5,
        oneLiner: "Win $50 Free Play!",
        rules: {
          subSections: [
            { id: "40", title: "Day", body: "Sunday, September 5 & 19, 2021" },
            { id: "41", title: "Promotion Type", body: "Play and Win" },
            {
              id: "42",
              title: "Rules",
              body:
                "On Sunday, September 5 & 19, 2021, the first 50 Miccosukee One Card members who earn 50 points on their Miccosukee One Card will receive $50 in Free Play one time from 9 AM until 11:59 PM.",
            },
            {
              id: "43",
              title: "TO QUALIFY",
              body:
                "Insert your Miccosukee One Card in any gaming machine from 9 AM to 11:59 PM to earn Free Play allotment. Free Play will be automatically downloaded to the first fifty guest accounts once corresponding Play & Earn criteria has been reached.",
            },
            {
              id: "44",
              title: "Dates and Times",
              body: "September 5 & 19 from 9 AM - 11:59 PM",
            },
            {
              id: "45",
              title: "Winners",
              body:
                "The first 50 Miccosukee One Card Members who meet the play requirements",
            },
            {
              id: "46",
              title: "Promotion Location",
              body:
                "Promotion will take place at any video machine that accepts Miccosukee One Player Cards. Free Play credits will be downloaded to Winners’ Miccosukee One Card account automatically.",
            },
            {
              id: "47",
              title: "Prize Type and Amounts",
              body:
                "Miccosukee One members who earn 50 points will receive $50 in Free Play.",
            },
            {
              id: "48",
              title: "Prize Restrictions",
              body:
                "Play & Earn is redeemable only one time per promotional day for the first 50 Miccosukee One members that reach the point requirement.",
            },
            {
              id: "49",
              title: "General Rule Disclaimers",
              body:
                "Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days and on select machines only. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Malfunction void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Red Card VIP Giveaway",
        img: cardImage6,
        oneLiner: "Red Cards, win up to $150 Free Play!",
        rules: {
          subSections: [
            {
              id: "50",
              title: "Day",
              body: "Wednesday, September 8 & 22, 2021",
            },
            { id: "51", title: "Promotion Type", body: "Ricochet Rewards" },
            {
              id: "52",
              title: "Rules",
              body:
                "Calling all Red Card members! On Wednesday, September 8 & 22 between 6 PM and 9 PM up to 24 Red Tier Miccosukee One members will win $100 or $150 Free Play via Ricochet hot seat.",
            },
            {
              id: "53",
              title: "TO QUALIFY",
              body:
                "Miccosukee One RED Tier members actively gaming on their Miccosukee One Player's card.",
            },
            {
              id: "54",
              title: "Dates and Times",
              body: "September 8 & 22 from 6 PM - 9 PM",
            },
            {
              id: "55",
              title: "Winners",
              body:
                "Miccosukee One RED Tier member who triggers the Ricochet Prize through their play will win $150 Free Play and one (1) additional random Red Tier winner playing with their Miccosukee One card at the time the prize is triggered will win $100 Free Play.",
            },
            {
              id: "56",
              title: "Promotion Location",
              body: "Gaming devices that accept Miccosukee One cards",
            },
            {
              id: "57",
              title: "Prize Type and amounts",
              body:
                "The player who triggers the prize and 1 additional random winner in up to twelve (12) occurrences will receive $100 or $150 in Free Play.",
            },
            {
              id: "58",
              title: "Prize Restrictions",
              body: "Players can win multiple times.",
            },
            {
              id: "59",
              title: "General Rule Disclaimers",
              body:
                "Eligibility for tiered promotion based on September 1 status. Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days and on select machines only. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
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
            {
              id: "60",
              title: "Day",
              body: "Thursday, September 9 & 23, 2021",
            },
            { id: "61", title: "Promotion Type", body: "Drawing" },
            {
              id: "62",
              title: "Rules",
              body:
                "Calling all White Cards, we are giving away $15,000 in cash to welcome in the fall. Thursday, September 9 & 23 at 7 PM, 8 PM & 9 PM, one Miccosukee One White Card member will win $5,000 in cash!",
            },
            {
              id: "63",
              title: "TO QUALIFY",
              body:
                "Miccosukee One White Card members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from September 1 at 9 AM to September 23 at 8:45 PM.",
            },
            {
              id: "64",
              title: "Dates and Times",
              body: "September 9 & 23 at 7 PM, 8 PM & 9 PM",
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
                "Barrel will be available September 3 – 9 for the 9/9 drawing and September 17 – 23 for the 9/23 drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “White Card VIP Giveaway”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "612",
              title: "General Rule Disclaimers",
              body:
                "Eligibility for tiered promotion based on September 1 status. Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 7,
        title: "Sunny Sunday Pay-outs",
        img: cardImage8,
        oneLiner: "Win a share of $7,500!",
        rules: {
          subSections: [
            { id: "70", title: "Day", body: "Sunday, September 12 & 26, 2021" },
            { id: "71", title: "Promotion Type", body: "Drawing" },
            {
              id: "72",
              title: "Rules",
              body:
                "Sunny Days will make it pay!!! On Sunday, September 12 & 26 one Miccosukee One member will win their share of $7,500 in cash at 1 PM, 3 PM & 5 PM!",
            },
            {
              id: "73",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must earn 100 points on their Miccosukee One card for each drawing ticket. Points can be earned from September 1 at 9 AM to September 26 at 4:45 PM.",
            },
            {
              id: "74",
              title: "Dates and Times",
              body: "September 12 & 26 at 1 PM, 3 PM & 5 PM",
            },
            {
              id: "75",
              title: "Number of Winners Per Drawing",
              body: "One (1) winner at 1 PM, 3 PM & 5 PM",
            },
            {
              id: "76",
              title: "Drawing Location / Prize Giveaway Location",
              body:
                "Drawings and prize giveaways will take place at the Player's Club.",
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
                "If present, winners may claim the following cash prizes [1 PM - $1,500] [3 PM -  $1,000] [5 PM - $5,000].",
            },
            {
              id: "79",
              title: "Amount of Wins Permitted Per Guest",
              body:
                "Players can only win once in any single drawing with multiple winners.",
            },
            {
              id: "710",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
            },
            {
              id: "711",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available on September 1 at 9 AM. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Sunny Sunday Pay-outs”. Drum will be cleared after the last drawing of the day. Player must have retained the smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "712",
              title: "General Rule Disclaimers",
              body:
                "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 8,
        title: "Just in Case",
        img: cardImage9,
        oneLiner: "Win up to $25K!",
        rules: {
          subSections: [
            { id: "80", title: "Day", body: "Saturday, September 25, 2021" },
            { id: "81", title: "Promotion Type", body: "Drawing" },
            {
              id: "82",
              title: "Rules",
              body:
                "We're giving away a lot of money… Just In Case you're interested!!! On September 25, we'll call a winner at 7 PM, 9 PM & 11 PM to play the Just In Case Gameshow for a chance to win up to $25,000. Plus, if our contestants don't win a combined total of $30K, we will hold a bonus drawing to reach that amount at 12 AM.",
            },
            {
              id: "83",
              title: "TO QUALIFY",
              body:
                "Earn 200 points on your Miccosukee One card for each drawing ticket. Points can be earned between September 1 at 9 AM and September 25 at 10:45 PM. This promotion will feature a bonus entry multiplier every Friday and Saturday that players are allowed to earn entries. Guests will receive one bonus entry for every 200 points they earn from 9 AM – close and through 10:45 PM on September 25.",
            },
            {
              id: "84",
              title: "Dates & Times",
              body:
                "Drawings will occur at 7 PM, 9 PM & 11 PM on September 25. Bonus drawing may occur at 12 AM on September 26 if total funds awarded in game shows equal less than $30,000.",
            },
            {
              id: "85",
              title: "Number of Winners Per Drawing",
              body: "One (1) winner will be drawn per drawing.",
            },
            {
              id: "86",
              title: "Drawing Location / Prize Giveaway Location",
              body:
                "The drawings and prize payments will occur at the Player's Club.",
            },
            {
              id: "87",
              title: "Max Number of Entries",
              body: "Players can earn an unlimited amount of entries.",
            },
            {
              id: "88",
              title: "Prize Type and Amounts",
              body:
                "If present, winners will play Just In Case and win the following cash prizes if they choose to reveal a case at the end of the game, [$1] [$200] [$500] [$800] [$1,000] [$1,500] [$2,000] [$2,500] [$3,000] [$4,000] [$5,000] [$6,000] [$7,000] [$8,000] [$9,000] [$10,000] [$12,500] [$15,000] [$20,000] [$25,000]. Contestants may also choose to take a pay-out offer between $100 - $22,500.",
            },
            {
              id: "89",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
            },
            {
              id: "810",
              title: "Game Rules",
              body:
                "The game is based off of elimination and offers. The object of the game is to pick the highest value case in the beginning of the game and to eliminate cases in low to high order to keep offers as high as possible. Contestants will start with 20 cases. The cash values in these cases are located in the Prize Type and Amounts section of the rules. To begin the game, contestants will choose one of the 20 cases that will not be eligible for elimination. Once contestants have chosen their case and it is set to the side, the elimination rounds will begin. The first three rounds of the game will consist of 5 cases being eliminated, whenever a player chooses a case to eliminate, the amount inside will be revealed. After each round of elimination, the banker will provide a cash offer to the contestant. The amount of the cash offer will depend on the total sum of money in the cases that have not been eliminated. The higher the sum of the cases, the higher the offer amount will be. If the contestant takes the cash offer, the game will be over and the contestant will be paid the offer. The next three rounds will consist of the contestant eliminating one case at a time and receiving an offer after each case. If contestants refuse every offer, they will be left with two cases. One case will be the case that was chosen by the contestant at the beginning of the game and the other case will be the last one standing after all rounds of elimination. The contestant will then choose a case to open; the prize inside that case is what will be awarded. If the total pay-outs of the 7 PM, 9 PM and 11 PM game show do not equal $30,000, another name will be drawn to award the variance at 12 AM on September 26.",
            },
            {
              id: "811",
              title: "Bonus Entry Rules",
              body:
                "On September 3, 4, 10, 11, 17, 18 & 24 from 9 AM – close, September 25 from 9 AM to until 10:45 PM, players can earn one bonus entry for every 200 points they earn. Players must collect their bonus entries on the same day and within the time frame they have to earn them. Any entries not claimed during the appropriate time frame will be forfeited and cannot be printed at a later date.",
            },
            {
              id: "812",
              title: "Amount of Wins Permitted Per Guest",
              body:
                "Players can only win once in any single drawing with multiple winners.",
            },
            {
              id: "813",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available on September 1 at 9 AM. Drum will be emptied after the last drawing of the promotion. Entries may not be entered into the drum during the drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub's larger perforated portion into the appropriate drum of the respective raffle, \"Just In Case\". Player must have retained the smaller portion of perforated ticket in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued.",
            },
            {
              id: "814",
              title: "General Rule Disclaimers",
              body:
                "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final.  Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 9,
        title: "Birthday Bonanza Hot Seats",
        img: cardImage10,
        oneLiner: "Score $25-$100 Free Play!",
        rules: {
          subSections: [
            { id: "90", title: "Day", body: "Monday, September 27, 2021" },
            { id: "91", title: "Promotion Type", body: "Ricochet Rewards" },
            {
              id: "92",
              title: "Rules",
              body:
                "On Monday, September 27 between the hours of 6 PM and 10 PM, September birthday guests who are actively gaming with their Miccosukee One card will be eligible for a chance to win $25-$100 in Free Play. Up to $1,200 may be awarded in up to 8 occurrences.",
            },
            {
              id: "93",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must have a birthday during the month of September and be actively playing gaming machines on their Miccosukee One card.",
            },
            {
              id: "94",
              title: "Dates and Times",
              body: "September 27 from 6 PM - 10 PM",
            },
            {
              id: "95",
              title: "Winners",
              body:
                "Miccosukee One members who trigger the Ricochet prize through their play and various random winners who are playing with their Miccosukee One card at the time the prize is triggered. All guests must have a September birthday to be eligible to win.",
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
                "The player who triggers the Ricochet will receive $100 and two (2) others will win $25 during each occurrence. A total of $1,200 in Free Play may be awarded in up to 8 occurrences. Up to 24 winners may be awarded prizes.",
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
                "Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days on select machines only. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 10,
        title: "New Member Ricochet",
        img: cardImage11,
        oneLiner: "New Members can win a share of $5,000!",
        rules: {
          subSections: [
            { id: "100", title: "Day", body: "Thursday, September 30, 2021" },
            { id: "101", title: "Promotion Type", body: "Ricochet Rewards" },
            {
              id: "102",
              title: "Rules",
              body:
                "New members deserve new money! On Thursday, September 30 between the hours of 8 PM and 10 PM, September new members who are actively gaming with their Miccosukee One card will be eligible for a chance to win $100 - $500 in Free Play. Up to $5,000 may be awarded in a max of 5 occurrences.",
            },
            {
              id: "103",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must have signed up for a Miccosukee One card during the month of September and be actively playing gaming machines on their Miccosukee One card.",
            },
            {
              id: "104",
              title: "Dates and Times",
              body: "September 30 from 8 PM - 10 PM",
            },
            {
              id: "105",
              title: "Winners",
              body:
                "Miccosukee One members who trigger the Ricochet prize through their play and various random winners who are playing with their Miccosukee One card at the time the prize is triggered. All guests must have signed up in September to be eligible to win.",
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
                "The player who triggers the Ricochet will receive $500 and five (5) others will win $100 during each occurrence. A total of $5,000 in Free Play may be awarded in up to 5 occurrences. Up to 30 winners may be awarded prizes.",
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
                "Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days and on select machines only. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 11,
        title: "Referral Ricochet",
        img: cardImage12,
        oneLiner: "Refer and win up to $100 Free Play!",
        rules: {
          subSections: [
            { id: "110", title: "Day", body: "Thursday, September 30, 2021" },
            { id: "111", title: "Promotion Type", body: "Ricochet Rewards" },
            {
              id: "112",
              title: "Rules",
              body:
                "You refer us a friend, we can refer you some Free Play! On Thursday, September 30 between the hours of 6 PM and 8 PM, September Referrals who are actively gaming with their Miccosukee One card will be eligible for a chance to win $50 or $100 in Free Play. Up to $1,000 may be awarded in a max of 5 occurrences.",
            },
            {
              id: "113",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must have referred a new Miccosukee One member during the month of September and be actively playing gaming machines on their Miccosukee One card.",
            },
            {
              id: "114",
              title: "Dates and Times",
              body: "September 30 from 6 PM - 8 PM",
            },
            {
              id: "115",
              title: "Winners",
              body:
                "Miccosukee One members who trigger the Ricochet prize through their play and various random winners who are playing with their Miccosukee One card at the time the prize is triggered. All guests must have referred a new member and been present at time of enrollment in September to be eligible to win.",
            },
            {
              id: "116",
              title: "Promotion Location",
              body: "Gaming devices that accept Miccosukee One cards",
            },
            {
              id: "117",
              title: "Prize Type and Amounts",
              body:
                "The player who triggers the Ricochet will receive $100 and two (2) others will win $50 during each occurrence. A total of $1,000 in Free Play may be awarded in up to 5 occurrences. Up to 15 winners may be awarded prizes.",
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
                "Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days and on select machines only. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
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
        oneLiner: "¡Inscríbase y gane $15-$515 Free Play!",
        rules: {
          subSections: [
            { id: "00", title: "Día", body: "Todo el mes de septiembre" },
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
              body: "Todo el mes de septiembre",
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
                "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Bounce Back Free Play es válido por 7 días y sólo en máquinas seleccionadas. Juegue y Gane Free. Juegue y Gane Free Play estará disponible por treinta (30) días al ganarse durante el periodo de oferta estipulado. Deben tener 21 años o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 1,
        title: "Igualamos su Nivel",
        img: cardImage2,
        oneLiner: "¡Reciba un bono y promoción de nivel!",
        rules: {
          subSections: [
            { id: "10", title: "Día", body: "Todo el mes de septiembre" },
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
                "El nombre que el jugador muestre en su ID debe igualar el nombre que muestre en su Player’s Card. Jugadores deberán proveer dirección, correo electrónico y/o número de teléfono para ser elegibles para el programa de tier match. El Player’s Card y la ID no deben estar dañadas, alteradas o ilegibles. Límite una promoción de nivel por persona. Oferta válida sólo para nuevos jugadores o jugadores que lleven 12 meses inactivos en Miccosukee Resort & Gaming. El Tier Match para nuevos jugadores debe ocurrir en el momento de la inscripción inicial. Sin excepciones. Los jugadores inactivos deben visitar el Player’s Club dentro de las 24 horas posteriores a la primera sesión de reactivación completada para reclamar su Tier Match. Deben tener 21 años o más para calificar. Los jugadores sólo pueden participar en la promoción una vez. Deben tener identificación válida, emitida por el gobierno, aprobada para jugar, y estar físicamente presente con la identificación original al momento de registrarse. Free Play es válido sólo en máquinas seleccionadas. Jugadores tendrán hasta las 1:59 AM del 1 de octubre para redimir sus créditos de Free Play. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles.",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Sorteo VIP para Tarjeta Negra",
        img: cardImage3,
        oneLiner: "¡Tarjetas Negras, ganen $2,500 en efectivo!",
        rules: {
          subSections: [
            {
              id: "20",
              title: "Día",
              body: "jueves, 2 y 16 de septiembre de 2021",
            },
            { id: "21", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "22",
              title: "Reglas",
              body:
                "Llamando a los miembros de tarjeta Negra, estamos regalando $7,500 en efectivo para darle la bienvenida al otoño. El jueves, 2 y 16 de septiembre a las 7 PM, 8 PM y 9 PM, ¡un miembro de la tarjeta Miccosukee One de nivel Negro ganará $2,500 en efectivo!",
            },
            {
              id: "23",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One de nivel Negro deberán ganar 200 puntos en su tarjeta Miccosukee One por cada boleto de sorteo. Los puntos se pueden ganar desde el 26 de agosto a las 9 AM hasta el 16 de septiembre a las 8:45 PM.",
            },
            {
              id: "24",
              title: "Fecha y Horario de Sorteos",
              body: "2 y 16 de septiembre a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "25",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido a las 7 PM, 8 PM y 9 PM.",
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
                "Un (1) premio en efectivo de $2,500 a las 7 PM, 8 PM y 9 PM.",
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
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible del 1 – 2 de septiembre para el sorteo del 2 de septiembre, y del 10 – 16 de septiembre para el sorteo del 16 de septiembre. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Black Card VIP Giveaway”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "212",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Elegibilidad para promoción por niveles basada en el estatus de juego del 1 de septiembre. Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 21 años o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 3,
        title: "Duelo Alto Bajo",
        img: cardImage4,
        oneLiner: "¡Cartas pagan hasta $6K!",
        rules: {
          subSections: [
            {
              id: "30",
              title: "Día",
              body: "lunes, 6, 13 y 20 de septiembre de 2021",
            },
            { id: "31", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "32",
              title: "Reglas",
              body:
                "¡Su próxima tarjeta puede ser baja, pero su pago será alto! ¡El lunes 6, 13 y 20 de septiembre a las 7 PM y 9 PM, dos miembros de la tarjeta Miccosukee One ganarán hasta $ 6,000 en efectivo!",
            },
            {
              id: "33",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One deberán ganar 100 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar del 1 de septiembre a las 9 AM hasta el 20 de septiembre a las 8:45 PM.",
            },
            {
              id: "34",
              title: "Fecha y Horario de Sorteos",
              body: "6, 13 y 20 de septiembre a las 7 PM y 9 PM",
            },
            {
              id: "35",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Dos (2) ganadores a las 7 PM y 9 PM",
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
                "Los premios en efectivo disponibles a ser ganados son de $1,000 - $6,000.",
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
              title: "Reglas del Juego",
              body:
                "Si están presentes, los ganadores jugarán High Low (Alto Bajo) entre sí. El primer jugador que haya sido elegido de la tómbola jugará High Low primero. Se mezclará una baraja de cartas, una vez que se termine de barajar, el jugador cortará el mazo. La primera carta del mazo le será revelada al jugador. Una vez que se revele la carta, el jugador decidirá si la siguiente carta será más alta o más baja que la carta revelada. Si el jugador acierta, se revelará otra carta; si el jugador se equivoca, se terminará su turno. Se revelarán un total de 6 cartas, incluida la primera carta presentada. Un empate en las cartas se considerará si adivina correctamente. El invitado con más aciertos gana. El empate será resuelto por ambos invitados sacando una carta de la baraja, la carta más alta gana; los empates resultarán en un nuevo sorteo. Un 2 se considera la carta más baja y un AS se considera la carta más alta. Los módulos de premio elegidos por el ganador del duelo Alto Bajo tendrán las siguientes denominaciones [2 - $ 1,500] [2 - $ 2,500] [2 - $ 3,000] [2 - $ 4,000] [1 - $ 5,000] [1 - $ 6,000]. El premio de consolación será de $ 1,000 para el segundo lugar.",
            },
            {
              id: "312",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible el 1 de septiembre. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “High Low Duel”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "313",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 21 años o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Cincuenta y Cincuenta",
        img: cardImage5,
        oneLiner: "¡Gane $50 Free Play!",
        rules: {
          subSections: [
            {
              id: "40",
              title: "Día",
              body: "domingo, 5 y 19 de septiembre de 2021",
            },
            { id: "41", title: "Tipo de Promoción", body: "Juegue y Gane" },
            {
              id: "42",
              title: "Reglas",
              body:
                "El domingo, 5 y 19 de septiembre, los primeros 50 miembros de la tarjeta Miccosukee One que ganen 50 puntos en su tarjeta Miccosukee One recibirán $50 Free Play una vez de 9 AM hasta 11:59 PM.",
            },
            {
              id: "43",
              title: "PARA CALIFICAR",
              body:
                "Inserte su tarjeta Miccosukee One en cualquier máquina de juego entre las 9 AM y 11:59 PM para ganar Free Play. Los créditos de Free Play serán descargados automáticamente a la cuenta de los primeros cincuenta invitados que cumplan los requisitos de Juegue y Gane.",
            },
            {
              id: "44",
              title: "Fecha y Horario de Sorteos",
              body: "5 y 19 de septiembre de 9 AM – 11:59 PM",
            },
            {
              id: "45",
              title: "Ganadores",
              body:
                "Los primeros 50 miembros de la tarjeta Miccosukee One que llenen los requisitos de juego.",
            },
            {
              id: "46",
              title: "Ubicación de Promoción",
              body:
                "La promoción tomará lugar en cualquier máquina que acepte las tarjetas Miccosukee One. Los créditos de Free Play serán descargados automáticamente a la cuenta Miccosukee One del ganador.",
            },
            {
              id: "47",
              title: "Tipo de Premio y Cantidades",
              body:
                "Miembros de la tarjeta Miccosukee One que ganen 50 puntos recibirán $50 Free Play.",
            },
            {
              id: "48",
              title: "Restricciones de Premio",
              body:
                "Juegue y Gane sólo es redimible una vez por día de promoción para los primeros 50 miembros de la tarjeta Miccosukee One que alcancen los puntos requeridos.",
            },
            {
              id: "49",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play es válido por 30 días y sólo en máquinas seleccionadas. Deben tener 21 años o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Sorteo VIP para Tarjeta Roja",
        img: cardImage6,
        oneLiner: "¡Tarjetas Rojas, ganen hasta $150 Free Play!",
        rules: {
          subSections: [
            {
              id: "50",
              title: "Día",
              body: "miércoles, 8 y 22 de septiembre de 2021",
            },
            { id: "51", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "52",
              title: "Reglas",
              body:
                "¡Llamando a todos los miembros de nivel Rojo! El miércoles, 8 y 22 de septiembre entre las 6 PM y 9 PM hasta 24 miembros de la tarjeta Miccosukee One de nivel Rojo ganarán $100 o $150 Free Play vía Ricochet hot seat.",
            },
            {
              id: "53",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One de nivel ROJO que están jugando activamente con su tarjeta Miccosuke One.",
            },
            {
              id: "54",
              title: "Fecha y Horarios",
              body: "8 y 22 de septiembre de 6 PM – 9 PM",
            },
            {
              id: "55",
              title: "Ganadores",
              body:
                "Un miembro de la tarjeta Miccosukee One de nivel Rojo que active el premio Ricochet mientras juega ganará $150 Free Play y un (1) jugador adicional de nivel Rojo que está jugando con su tarjeta Miccosukee One y que sea elegido al azar cuando el premio sea activado ganará $100 Free Play.",
            },
            {
              id: "56",
              title: "Ubicación de Promoción",
              body: "Máquinas de juego que acepten la tarjeta Miccosukee One.",
            },
            {
              id: "57",
              title: "Tipo de Premio y Cantidades",
              body:
                "El jugador que active el premio y 1 ganador al azar durante una de hasta doce (12) oportunidades recibirán $100 o $150 Free Play.",
            },
            {
              id: "58",
              title: "Restricciones de Premio",
              body: "Los jugadores pueden ganar múltiples veces.",
            },
            {
              id: "59",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Elegibilidad para promoción por niveles basada en el estatus de juego del 1 de septiembre. Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play válido por treinta días y en máquinas seleccionadas. Deben tener 21 años o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
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
              body: "jueves, 9 y 23 de septiembre de 2021",
            },
            { id: "61", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "62",
              title: "Reglas",
              body:
                "Llamando a los miembros de tarjeta Blanca, estamos regalando $15,000 en efectivo para darle la bienvenida al otoño. El jueves, 9 y 23 de septiembre a las 7 PM, 8 PM y 9 PM, ¡un miembro de la tarjeta Miccosukee One de nivel Blanco ganará $5,000 en efectivo!",
            },
            {
              id: "63",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One de nivel Blanco deberán ganar 200 puntos en su tarjeta Miccosukee One por cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de septiembre a las 9 AM hasta el 23 de septiembre a las 8:45 PM.",
            },
            {
              id: "64",
              title: "Fecha y Horario de Sorteos",
              body: "9 y 23 de septiembre a las 7 PM, 8 PM y 9 PM",
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
                "La tómbola estará disponible del 3 – 9 de septiembre para el sorteo del 9 de septiembre, y del 17 – 23 de septiembre para el sorteo del 23 de septiembre. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “White Card VIP Giveaway”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "612",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Elegibilidad para promoción por niveles basada en el estatus de juego del 1 de septiembre. Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 21 años o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 7,
        title: "Domingo Soleado Bien Pagado",
        img: cardImage8,
        oneLiner: "¡Gane su parte de $7,500!",
        rules: {
          subSections: [
            {
              id: "70",
              title: "Día",
              body: "domingo, 12 y 26 de septiembre de 2021",
            },
            { id: "71", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "72",
              title: "Reglas",
              body:
                "¡Los días soleados pagarán bien! El domingo 12 y 26 de septiembre, ¡un miembro de la tarjeta Miccosukee One ganará su parte de $7,500 en efectivo a las 1 PM, 3 PM y 5 PM!",
            },
            {
              id: "73",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One deberán ganar 100 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de septiembre a las 9 AM hasta el 26 de septiembre a las 4:45 PM.",
            },
            {
              id: "74",
              title: "Fecha y Horario de Sorteos",
              body: "12 y 26 de septiembre a las 1 PM, 3 PM y 5 PM",
            },
            {
              id: "75",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido a las 1 PM, 3 PM y 5 PM.",
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
                "Si están presentes, los ganadores podrán reclamar los siguientes premios en efectivo [1 PM - $1,500] [3 PM - $1,000] [5 PM - $5,000].",
            },
            {
              id: "79",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body:
                "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "710",
              title: "Reglas de “No Asistencia”",
              body:
                "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "711",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible el 1 de septiembre a las 9 AM. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Sunny Sunday Pay-outs”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "712",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 21 años o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 8,
        title: "Maletín Premiado",
        img: cardImage9,
        oneLiner: "¡Gane hasta $25K!",
        rules: {
          subSections: [
            {
              id: "80",
              title: "Día",
              body: "sábado, 25 de septiembre de 2021",
            },
            { id: "81", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "82",
              title: "Reglas",
              body:
                "Estamos regalando mucho dinero… ¡¡¡por si acaso le interesa!!! El 25 de septiembre, llamaremos a un ganador a las 7 PM, 9 PM y 11 PM para concursar en el juego del Maletín Premiado (Just In Case) y tener la oportunidad de ganar hasta $25,000. Además, si nuestros concursantes no ganan un total de $30K, tendremos un sorteo de bono para alcanzar esa cantidad a las 12 AM.",
            },
            {
              id: "83",
              title: "PARA CALIFICAR",
              body:
                "Gane 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar entre el 1 de septiembre a las 9 AM hasta el 25 de septiembre a las 10:45 PM. Esta promoción incluye un multiplicador de entradas de bono cada viernes y sábado que los jugadores puedan ganar entradas. Los invitados recibirán una entrada de bono por cada 200 puntos que ganen de 9 AM – hora de cierre y hasta las 10:45 PM del 25 de septiembre.",
            },
            {
              id: "84",
              title: "Fecha y Horario de Sorteos",
              body:
                "Los sorteos serán a las 7 PM, 9 PM y 11 PM el 25 de septiembre. Un sorteo de bono se llevará a cabo a las 12 AM el 26 de septiembre si los fondos totales otorgados en los sorteos anteriores equivalen a menos de $30,000.",
            },
            {
              id: "85",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido por sorteo.",
            },
            {
              id: "86",
              title: "Ubicación de Sorteo",
              body:
                "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "87",
              title: "Cantidad de Entradas Permitidas por Persona",
              body: "Los jugadores pueden acumular entradas ilimitadas.",
            },
            {
              id: "88",
              title: "Tipo de Premio y Cantidades",
              body:
                "Si están presentes, los ganadores jugarán el Maletín Premiado (Just In Case) y ganarán los siguientes premios en efectivo si eligen revelar un maletín al final del juego, [$1] [$200] [$500] [$800] [$1,000] [$1,500] [$2,000] [$2,500] [$3,000] [$4,000] [$5,000] [$6,000] [$7,000] [$8,000] [$9,000] [$10,000] [$12,500] [$15,000] [$20,000] [$25,000]. Los concursantes también pueden optar por aceptar una oferta de pago de entre $100 y $22,500.",
            },
            {
              id: "89",
              title: "Reglas de “No Asistencia”",
              body:
                "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "810",
              title: "Reglas del Juego",
              body:
                "El juego se basa en eliminaciones y ofertas. El objetivo del juego es elegir el maletín de mayor valor al comienzo del juego y eliminar los maletines en orden de menor a mayor para mantener las ofertas lo más altas posible. Los concursantes comenzarán con 20 maletines. Los valores en efectivo en estos maletines se encuentran en la sección Tipo de Premio y Cantidades de las reglas. Para comenzar el juego, los concursantes elegirán uno de los 20 maletines que no serán elegibles para eliminación. Una vez que los concursantes hayan elegido su maletín y se haya dejado a un lado, comenzarán las rondas eliminatorias. Las primeras tres rondas del juego consistirán en la eliminación de 5 maletines; siempre que un jugador elija un maletín para eliminar, se revelará la cantidad que hay adentro. Después de cada ronda de eliminación, el banquero proporcionará una oferta en efectivo al concursante. El monto de la oferta en efectivo dependerá de la suma total de dinero en los maletines que no hayan sido eliminados. Cuanto mayor sea la suma de los maletines, mayor será el monto de la oferta. Si el concursante acepta la oferta en efectivo, el juego terminará y se le pagará la oferta. Las siguientes tres rondas consistirán en que el concursante elimine un maletín a la vez y reciba una oferta después de cada maletín. Si los concursantes rechazan todas las ofertas, se quedarán con dos maletines. Un maletín será el que fue elegido por el concursante al comienzo del juego y el otro maletín será el último que quede después de todas las rondas de eliminación. El concursante elegirá entonces un maletín para abrir; el premio dentro de ese maletín es lo que se otorgará. Si los pagos totales de los sorteos de las 7 PM, 9 PM y 11 PM no equivalen a $30,000, se sorteará otro nombre para otorgar la variación a las 12 AM del 26 de septiembre.",
            },
            {
              id: "811",
              title: "Reglas de Entradas de Bono",
              body:
                "El 3, 4, 10, 11, 17, 18 y 24 de septiembre de 9 AM – hora de cierre, y el 25 de septiembre de 9 AM hasta las 10:45 PM, los jugadores pueden ganar entradas de bono por cada 200 puntos que acumulen. Jugadores deben recolectar sus entradas de bono el mismo día y durante los horarios establecidos. Cualquier entrada no reclamada durante el tiempo estipulado será perdida y no se podrá utilizar en otra fecha.",
            },
            {
              id: "812",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body:
                "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "813",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible el 1 de septiembre a las 9 AM. La tómbola se vaciará después del último sorteo de la noche. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Just in Case”. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir.",
            },
            {
              id: "814",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 21 años o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 9,
        title: "Bonanza de Cumpleaños",
        img: cardImage10,
        oneLiner: "¡Llévese $25-$100 Free Play! \u200b",
        rules: {
          subSections: [
            { id: "90", title: "Día", body: "lunes, 27 de septiembre de 2021" },
            { id: "91", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "92",
              title: "Reglas",
              body:
                "El lunes, 27 de septiembre entre las 6 PM y 10 PM, miembros que cumplan años en septiembre y estén jugando ativamente con sus tarjetas Miccosukee One serán elegibles para la oportunidad de ganar $25-$100 Free Play. Hasta $1,200 podrían ser otorgados en 8 oportunidades.",
            },
            {
              id: "93",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One deben cumplir años en septiembre y estar jugando activamente en las máquinas con su tarjeta Miccosukee One.",
            },
            {
              id: "94",
              title: "Fecha y Horarios",
              body: "27 de septiembre de 6 PM – 10 PM",
            },
            {
              id: "95",
              title: "Ganadores",
              body:
                "Miembros de la tarjeta Miccosukee One que activen el premio Ricochet mientras juegan y varios ganadores al azar que estén jugando con su tarjeta Miccosukee One cuando el premio sea activado. Todos los jugadores deberán cumplir años en septiembre para ser elegibles para ganar.",
            },
            {
              id: "96",
              title: "Ubicacion de Promoción",
              body: "Máquinas de juego que acepten la tarjeta Miccosukee One",
            },
            {
              id: "97",
              title: "Tipo de Premio y Cantidades",
              body:
                "El jugador que active el premio Ricochet recibirá $100 y otros dos (2) ganadores recibirán $25 en cada oportunidad. Un total de $1,200 Free Play será otorgado durante 8 oportunidades. Hasta 24 ganadores recibirán premios.",
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
                "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Los premios no son transferibles. Free Play es válido durante 30 días y sólo en máquinas seleccionadas. Deben tener 21 años o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 10,
        title: "Ricochet para Nuevos Miembros",
        img: cardImage11,
        oneLiner: "¡Nuevos miembros pueden ganar su parte de $5,000!",
        rules: {
          subSections: [
            {
              id: "100",
              title: "Día",
              body: "jueves, 30 de septiembre de 2021",
            },
            { id: "101", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "102",
              title: "Reglas",
              body:
                "¡Nuevos miembros merecen dinero nuevo! El jueves, 30 de septiembre entre las 8 PM y 10 PM, nuevos miembros que se inscriban en septiembre y que estén jugando activamente con su tarjeta Miccosukee One serán elegibles para la oportunidad de ganar $100 - $500 Free Play. Hasta $5,000 podrían ser otorgados en un máximo de 5 oportunidades.",
            },
            {
              id: "103",
              title: "PARA CALIFICAR",
              body:
                "Los miembros de Miccosukee One deben haberse registrado para obtener la tarjeta Miccosukee One durante el mes de septiembre y deben estar jugando activamente en las máquinas de juego con su tarjeta Miccosukee One.",
            },
            {
              id: "104",
              title: "Fecha y Horarios",
              body: "30 de septiembre de 8 PM – 10 PM",
            },
            {
              id: "105",
              title: "Ganadores",
              body:
                "Miembros de la Tarjeta Miccosukee One que activen el premio Ricochet mientras juegan y varios jugadores seleccionados al azar mientras juegan con su tarjeta Miccosukee One cuando el premio se active. Todos los invitados deben haberse registrado en septiembre para poder ganar.",
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
                "El jugador que active el premio Ricochet recibirá $500 y otros cinco (5) jugadores ganarán $100 durante cada oportunidad. Un total de $5,000 Free Play será otorgado en hasta 5 oportundiades. Hasta 30 ganadores recibirán premios.",
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
                "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Los premios no son transferibles. Free Play es válido durante 30 días y sólo en máquinas seleccionadas. Deben tener 21 años o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 11,
        title: "Ricochet por Referidos",
        img: cardImage12,
        oneLiner: "¡Refiera y gane hasta $100 Free Play!",
        rules: {
          subSections: [
            {
              id: "110",
              title: "Día",
              body: "jueves, 30 de septiembre de 2021",
            },
            { id: "111", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "112",
              title: "Reglas",
              body:
                "¡Si usted nos refiere un amigo, le regalamos Free Play! El jueves, 30 de septiembre entre las 6 PM y 8 PM, miembros que hayan hecho un referido en septiembre y que estén jugando activamente con su tarjeta Miccosukee One serán elegibles para la oportunidad de ganar $50 o $100 Free Play. Hasta $1,000 podrían ser otorgados en un máximo de 5 oportunidades.",
            },
            {
              id: "113",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One deben haber referido a un nuevo miembro de Miccosukee One durante el mes de septiembre y deben estar jugando activamente en las máquinas con su tarjeta Miccosukee One.",
            },
            {
              id: "114",
              title: "Fecha y Horarios",
              body: "30 de septiembre de 6 PM – 8 PM",
            },
            {
              id: "115",
              title: "Ganadores",
              body:
                "Miembros de la tarjeta Miccosukee One que activen el premio Ricochet mientras juegan y varios ganadores seleccionados al azar mientras juegan con su tarjeta Miccosukee One cuando el premio se active. Todos los invitados deben haber referido a un nuevo miembro y deben estar presentes en el momento de inscripción en septiembre para ser elegibles a ganar.",
            },
            {
              id: "116",
              title: "Ubicación de Promoción",
              body: "Máquinas de juego que acepten tarjetas de Miccosukee One",
            },
            {
              id: "117",
              title: "Tipo de Premio y Cantidades",
              body:
                "El jugador que active el premio Ricochet recibirá $100 y otros dos (2) jugadores ganarán $50 durante cada oportunidad. Un total de $1,000 Free Play será otorgado en hasta 5 oportundiades. Hasta 15 ganadores serán premiados.",
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
                "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Los premios no son transferibles. Free Play es válido durante 30 días y sólo en máquinas seleccionadas. Deben tener 21 años o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
    ];
  }
};
