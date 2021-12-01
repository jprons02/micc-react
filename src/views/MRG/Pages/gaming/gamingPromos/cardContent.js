// Images
import cardImage1 from "assets/media/img/mrg/monthly_promos/NewMemberBonus_Logo-768x768.png";
import cardImage2 from "assets/media/img/mrg/monthly_promos/MiccosukeeOneStatusMatch_Logo-768x768.png";
import cardImage3 from "assets/media/img/mrg/monthly_promos/december/PickYourPresent_Logo.png";
import cardImage4 from "assets/media/img/mrg/monthly_promos/VIPGiveawayBlack_Logo-768x768.png";
import cardImage5 from "assets/media/img/mrg/monthly_promos/RedCardRicochet_Logo-768x768.png";
import cardImage6 from "assets/media/img/mrg/monthly_promos/VIPGiveaway_White-768x768.png";
import cardImage7 from "assets/media/img/mrg/monthly_promos/BirthdayBonanza_Logo-768x768.png";
import cardImage8 from "assets/media/img/mrg/monthly_promos/december/CommodityCashOut_Logo.png";
import cardImage9 from "assets/media/img/mrg/monthly_promos/NewMembers_ReferralsWinBig_Logo.png";
import cardImage10 from "assets/media/img/mrg/monthly_promos/december/big-REVISED_Gift-Giveaway.png";

// NEED A SCHEDULER SOLUTION AS WELL

export const cardContent = (language) => {
  if (language) {
    return [
      {
        id: 0,
        title: "New Member Bonus",
        img: cardImage1,
        oneLiner: "New Members earn up to $500+ Free Play all month!",
        rules: {
          subSections: [
            { id: "00", title: "Day", body: "All month of December" },
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
              body: "All month of December",
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
        oneLiner: "Upgraded status + Free Play bonus all month!",
        rules: {
          subSections: [
            { id: "10", title: "Day", body: "All month of December" },
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
                "Player name on valid photo ID must match the name on the Players Card. Players must provide address and email and/or phone to be eligible for tier match program. Card and ID must not be damaged, altered or otherwise illegible. Limit one upgrade per person. Offer only available to new players or players 12 months inactive at Miccosukee Resort and Gaming. New player Tier Match status must occur upon initial enrollment. No exceptions. Inactive players must visit the Player’s Club within 24 hours of first completed reactivation session to claim Tier Match status. Must be 18 years of age or older to qualify. Must have valid, government issued, gaming approved ID and be physically present with the original ID to register. Free Play valid on select machines only. Players will have until 1:59 AM on January 1, 2022 to redeem Free Play credits. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details.",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Pick Your Present",
        img: cardImage3,
        oneLiner: "Win a share of $8K Dec. 9, 16, 23 & 30!",
        rules: {
          subSections: [
            {
              id: "20",
              title: "Day",
              body: "Thursday, December 9, 16, 23 & 30, 2021",
            },
            { id: "21", title: "Promotion Type", body: "Drawing" },
            {
              id: "22",
              title: "Rules",
              body:
                "Whether you’ve been naughty or nice, we got you a present to make you feel alright! On Thursday, December 9, 16, 23 & 30 at 7 PM & 9 PM, two Miccosukee One members will win their share of $8,000 in cash!",
            },
            {
              id: "23",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must earn 100 points on their Miccosukee One card for each drawing ticket. Points can be earned from December 1 at 9 AM to December 30 at 8:45 PM.",
            },
            {
              id: "24",
              title: "Dates and Times",
              body: "December 9, 16, 23 & 30 at 7 PM & 9 PM",
            },
            {
              id: "25",
              title: "Number of Winners Per Drawing",
              body: "Two (2) winners at 7 PM & 9 PM",
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
              body: "Cash prizes available to be won are $1,000 - $3,000.",
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
                "If present, winners will pick a single prize vehicle. A total of 4 prize vehicles will start each drawing day and will not be reset after they are picked. The prize vehicles available to be picked by the winners will be worth the following amounts [1 - $1,000] [1 - $1,500] [1 - $2,500] [1 - $3,000].",
            },
            {
              id: "212",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available December 1. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Pick Your Present”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
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
        oneLiner: "Black Cards, win a share of $7,500 cash Dec. 7 & 21!",
        rules: {
          subSections: [
            { id: "30", title: "Day", body: "Tuesday, December 7 & 21, 2021" },
            { id: "31", title: "Promotion Type", body: "Drawing" },
            {
              id: "32",
              title: "Rules",
              body:
                "We love the holidays, almost as much as we love giving away jackpots!! On Tuesday, December 7 & 21 at 7 PM, 8 PM & 9 PM one Miccosukee One Black Tier member will win their share of $7,500 cash!",
            },
            {
              id: "33",
              title: "TO QUALIFY",
              body:
                "Miccosukee One Black Card members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from December 1 at 9 AM to December 21 at 8:45 PM.",
            },
            {
              id: "34",
              title: "Dates and Times",
              body: "December 7 & 21 at 7 PM, 8 PM & 9 PM",
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
                "Barrel will be available December 1 – 7 for the 12/7 drawing and December 15 – 21 for the 12/21 drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Black Card VIP Giveaway”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "312",
              title: "General Rule Disclaimers",
              body:
                "Eligibility for tiered promotion based on December 1 status. Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Red Card VIP Giveaway",
        img: cardImage5,
        oneLiner:
          "Feeling lucky Red Card? Win up to $150 Free Play Dec. 8 & 22!",
        rules: {
          subSections: [
            {
              id: "40",
              title: "Day",
              body: "Wednesday, December 8 & 22, 2021",
            },
            { id: "41", title: "Promotion Type", body: "Ricochet Rewards" },
            {
              id: "42",
              title: "Rules",
              body:
                "Calling all Red Tier members! On Wednesday, December 8 & 22 between 6 PM and 9 PM up to 24 Red Tier Miccosukee One members will win $100 or $150 Free Play via Ricochet hot seat.",
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
              body: "December 8 & 22 from 6 PM - 9 PM",
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
                "Eligibility for tiered promotion based on December 1 status. Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days and on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 5,
        title: "White Card VIP Giveaway",
        img: cardImage6,
        oneLiner: "White Cards, win a share of $15,000 Dec. 14 & 28!",
        rules: {
          subSections: [
            { id: "50", title: "Day", body: "Tuesday, December 14 & 28, 2021" },
            { id: "51", title: "Promotion Type", body: "Drawing" },
            {
              id: "52",
              title: "Rules",
              body:
                "We love the holidays, almost as much as we love giving away jackpots! On Tuesday, December 14 & 28 at 7 PM, 8 PM & 9 PM one Miccosukee One White Tier member will win a share of $15,000 in cash!",
            },
            {
              id: "53",
              title: "TO QUALIFY",
              body:
                "Miccosukee One White Card members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from December 1 at 9 AM to December 28 at 8:45 PM.",
            },
            {
              id: "54",
              title: "Dates and Times",
              body: "December 14 & 28 at 7 PM, 8 PM & 9 PM",
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
              body: "One (1) $5,000 cash prize at 7 PM, 8 PM & 9 PM",
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
                "Barrel will be available December 8 – 14 for the 12/14 drawing and December 22 – 28 for the 12/28 drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “White Card VIP Giveaway”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "512",
              title: "General Rule Disclaimers",
              body:
                "Eligibility for tiered promotion based on December 1 status. Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 6,
        title: "Birthday Bonanza Hot Seats",
        img: cardImage7,
        oneLiner:
          "December b-day guests can win a share of $1,200 Free Play Dec. 14 & 28!",
        rules: {
          subSections: [
            { id: "60", title: "Day", body: "Monday, December 27, 2021" },
            { id: "61", title: "Promotion Type", body: "Ricochet Rewards" },
            {
              id: "62",
              title: "Rules",
              body:
                "On Monday, December 27 between the hours of 6 PM and 10 PM, December birthday guests who are actively gaming with their Miccosukee One card will be eligible for a chance to win $25-$100 in Free Play. Up to $1,200 may be awarded in up to 8 occurrences.",
            },
            {
              id: "63",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must have a birthday during the month of December and be actively playing gaming machines on their Miccosukee One card.",
            },
            {
              id: "64",
              title: "Dates and Times",
              body: "December 27 from 6 PM - 10 PM",
            },
            {
              id: "65",
              title: "Winners",
              body:
                "Miccosukee One members who trigger the Ricochet prize through their play and various random winners who are playing with their Miccosukee One card at the time the prize is triggered. All guests must have a December birthday to be eligible to win.",
            },
            {
              id: "66",
              title: "Promotion Location",
              body: "Gaming devices that accept Miccosukee One cards",
            },
            {
              id: "67",
              title: "Prize Type and Amounts",
              body:
                "The player who triggers the Ricochet will receive $100 and two (2) others will win $25 during each occurrence. A total of $1,200 in Free Play may be awarded in up to 8 occurrences. Up to 24 winners may be awarded prizes.",
            },
            {
              id: "68",
              title: "Prize Restrictions",
              body: "Players can win multiple times.",
            },
            {
              id: "69",
              title: "General Rule Disclaimers",
              body:
                "Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 7,
        title: "Commodity Cash Out",
        img: cardImage8,
        oneLiner: "Ring in the New Year winning $7K or $10K Dec. 31!",
        rules: {
          subSections: [
            { id: "70", title: "Day", body: "Friday, December 31, 2021" },
            { id: "71", title: "Promotion Type", body: "Drawing" },
            {
              id: "72",
              title: "Rules",
              body:
                "A safe full of gold or silver will help you bring in the New Year!!! On December 31, we'll have 5 drawings starting at 5 PM where Miccosukee One members will be called every two hours to win $7,000 or $10,000 in cash.",
            },
            {
              id: "73",
              title: "TO QUALIFY",
              body:
                "Earn 200 points on your Miccosukee One card for each drawing ticket. Points can be earned between December 1 at 9 AM and January 1 at 12:45 AM. This promotion will feature a bonus entry multiplier every Friday, Saturday and Sunday that players are allowed to earn entries. Guests will receive one bonus entry for every 200 points they earn from 9 AM – close and through 12:45 AM on January 1.",
            },
            {
              id: "74",
              title: "Dates & Times",
              body:
                "Drawings will occur at 5 PM, 7 PM, 9 PM, 11 PM on December 31 & 1 AM on January 1.",
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
                "If present, winners will pick a single prize vehicle. A total of four (4) prize vehicles will start each drawing. The prize vehicles picked by the winners will be worth the following amounts [2 Gold Safes - $10,000] [2 Silver Safes - $7,000].",
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
                "On December 3, 4, 5, 10, 11, 12, 17, 18, 19, 24, 25, 26, 31 & through 12:45 AM on January 1, players can earn one bonus entry for every 200 points they earn. Players must collect their bonus entries on the same day and within the time frame they have to earn them. Any entries not claimed during the appropriate time frame will be forfeited and cannot be printed at a later date.",
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
                "Barrel will be available on December 1 at 9 AM. Drum will be emptied after the last drawing at 1 AM. Entries may not be entered into the drum during the drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub's larger perforated portion into the appropriate drum of the respective raffle, \"Commodity Cash Out\". Player must have retained the smaller portion of perforated ticket in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued.",
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
        title: "New Members & Referrals Win Big",
        img: cardImage9,
        oneLiner: "New Members & Referrals can win $5K Dec. 31!",
        rules: {
          subSections: [
            { id: "80", title: "Day", body: "Friday, December 31, 2021" },
            { id: "81", title: "Promotion Type", body: "Drawing" },
            {
              id: "82",
              title: "Rules",
              body:
                "New Members and Referrals can win big on Friday, December 31 at 8 PM!! One New Member or Referral from the month of December will be chosen from the drum and will win $5,000 in Cash!!!",
            },
            {
              id: "83",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must have signed up for a Miccosukee One card or referred a new member during the month of December and be present to win.",
            },
            { id: "84", title: "Dates and Times", body: "December 31 at 8 PM" },
            {
              id: "85",
              title: "Number of Winners Per Drawing",
              body: "One (1) winner will be drawn.",
            },
            {
              id: "86",
              title: "Drawing Location / Prize Giveaway Location",
              body:
                "Drawings and prize giveaways will take place at the Player's Club.",
            },
            {
              id: "87",
              title: "Max Number of Entries",
              body:
                "Every eligible new member will receive one drawing ticket. Referrals will receive one drawing ticket per new member they refer.",
            },
            {
              id: "88",
              title: "Prize Type and Amounts",
              body: "One (1) $5,000 cash prize at 8 PM.",
            },
            {
              id: "89",
              title: "Amount of Wins Permitted Per Guest",
              body:
                "Players can only win once in any single drawing with multiple winners.",
            },
            {
              id: "810",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
            },
            {
              id: "811",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available December 31. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle \"New Members & Referrals Win Big”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "812",
              title: "General Rule Disclaimers",
              body:
                "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 9,
        title: "Free Oxford Luggage Set",
        img: cardImage10,
        oneLiner:
          "Travel in style with a FREE luggage set Mondays or Tuesdays in December!",
        rules: {
          subSections: [
            {
              id: "90",
              title: "Day",
              body:
                "Monday and Tuesday, December 6-7, 13-14, 20-21, 27-28, 2021",
            },
            { id: "91", title: "Promotion Type", body: "Continuity Program" },
            {
              id: "92",
              title: "Rules",
              body:
                "Invited guests join us Mondays or Tuesdays in December to collect a different piece each week. Visit all 4 weeks to collect the whole set!",
            },
            {
              id: "93",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members may qualify for December continuity gift set based upon rated gaming on their Miccosukee One card from 11/01/2020 through 10/31/2021. Player’s Miccosukee One account must also include a valid Florida address and be enrolled to receive mail offers from Miccosukee Resort & Gaming.",
            },
            {
              id: "94",
              title: "Dates and Times",
              body: "December 6-7, 13-14, 20-21, 27-28 from 12 PM – 10 PM",
            },
            {
              id: "95",
              title: "Number of Recipients Per Distribution",
              body:
                "Gifts will be available on first come, first serve basis, while supplies last.",
            },
            {
              id: "96",
              title: "Gift Giveaway Location",
              body:
                "Continuity gifts will be distributed from the Bingo Admissions area.",
            },
            {
              id: "97",
              title: "Gift Type and Value",
              body:
                "If present, invited guests may claim the following gifts in random distribution order [Oxford 21” Upright Travel Trolley Bag - $49.99] [Oxford 20” Weekender Bag - $39.99] [Oxford 19” Tote Bag & 10” Toiletry Bag - $39.99] [Oxford 21” Rolling Travel Bag - $49.99].",
            },
            {
              id: "98",
              title: "Amount of Gifts Permitted Per Guest",
              body: "One weekly gift item per invited guest",
            },
            {
              id: "99",
              title: "No Show Rule",
              body:
                "Must be present to receive gift. Gift will automatically be forfeited if the player fails to produce the gift voucher with Miccosukee One card and valid photo ID during dates and times of corresponding distribution.",
            },
            {
              id: "910",
              title: "General Rule Disclaimer",
              body:
                "Must have valid, government issued, gaming approved ID to claim gift. Promotions are only available for eligible Miccosukee One members. Offers are non-transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
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
        oneLiner:
          "¡Nuevos Miembros ganan hasta $500+ Free Play todo el mes!\u200b",
        rules: {
          subSections: [
            { id: "00", title: "Día", body: "Todo el mes de diciembre" },
            { id: "01", title: "Tipo de Promoción", body: "Juegue y Gane" },
            {
              id: "02",
              title: "Reglas",
              body:
                "Nuevos miembros que se unan a la tarjeta Miccosukee One recibirán automáticamente $15 Free Play y tendrán la oportunidad de ganar dos (2) ofertas adicionales valoradas en hasta $500 basadas en frecuencia de juego en periodos de tiempo designados.",
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
              body: "Todo el mes de diciembre",
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
                "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Bounce Back Free Play es válido por 7 días y sólo en máquinas seleccionadas. Juegue y Gane Free. Juegue y Gane Free Play estará disponible por treinta (30) días al ganarse durante el periodo de oferta estipulado. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 1,
        title: "Igualamos su Nivel",
        img: cardImage2,
        oneLiner: "¡Promoción de nivel + bono Free Play todo el mes!",
        rules: {
          subSections: [
            { id: "10", title: "Día", body: "Todo el mes de diciembre" },
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
                "El nombre que el jugador muestre en su ID debe igualar el nombre que muestre en su Player’s Card. Jugadores deberán proveer dirección, correo electrónico y/o número de teléfono para ser elegibles para el programa de tier match. El Player’s Card y la ID no deben estar dañadas, alteradas o ilegibles. Límite una promoción de nivel por persona. Oferta válida sólo para nuevos jugadores o jugadores que lleven 12 meses inactivos en Miccosukee Resort & Gaming. El Tier Match para nuevos jugadores debe ocurrir en el momento de la inscripción inicial. Sin excepciones. Los jugadores inactivos deben visitar el Player’s Club dentro de las 24 horas posteriores a la primera sesión de reactivación completada para reclamar su Tier Match. Deben tener 18 años de edad o más para calificar. Los jugadores sólo pueden participar en la promoción una vez. Deben tener identificación válida, emitida por el gobierno, aprobada para jugar, y estar físicamente presente con la identificación original al momento de registrarse. Free Play es válido sólo en máquinas seleccionadas. Jugadores tendrán hasta las 1:59 AM del 1 de enero de 2022 para redimir sus créditos de Free Play. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles.",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Elija su Regalo",
        img: cardImage3,
        oneLiner: "Gane una parte de $8K el 9, 16, 23 y 30 de diciembre!",
        rules: {
          subSections: [
            {
              id: "20",
              title: "Día",
              body: "jueves, 9, 16, 23 y 30 de diciembre de 2021",
            },
            { id: "21", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "22",
              title: "Reglas",
              body:
                "Ya sea que haya sido travieso o bonachón, ¡le tenemos un regalo que alegrará su corazón! El jueves, 9, 16, 23 y 30 de diciembre a las 7 PM y 9 PM, ¡dos miembros de la tarjeta Miccosukee One ganarán su parte de $8,000 en efectivo!",
            },
            {
              id: "23",
              title: "PARA CALIFICAR",
              body:
                "Miembros de Miccosukee One deberán ganar 100 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de diciembre a las 9 AM hasta el 30 de diciembre a las 8:45 PM.",
            },
            {
              id: "24",
              title: "Fecha y Horarios de Sorteos",
              body: "9, 16, 23 y 30 de diciembre a las 7 PM y 9 PM",
            },
            {
              id: "25",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Dos (2) ganadores serán elegidos a las 7 PM y 9 PM.",
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
                "Los premios en efectivo disponibles para ganar son de $1,000 - $3,000.",
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
                "Si están presentes, los ganadores elegirán un sólo vehículo de premio. Comenzaremos cada día con un total de 4 vehículos premiados y no se restablecerán después de que se seleccionen.",
            },
            {
              id: "212",
              title:
                "Los vehículos premiados valdrán las siguientes cantidades [1 - $ 1,000] [1 - $ 1,500] [1 - $ 2,500] [1 - $ 3,000].",
              body:
                "Los vehículos premiados valdrán las siguientes cantidades [1 - $ 1,000] [1 - $ 1,500] [1 - $ 2,500] [1 - $ 3,000].",
            },
            {
              id: "213",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible el 1 de diciembre. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Pick Your Present”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "214",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 3,
        title: "Sorteo VIP para Tarjeta Negra",
        img: cardImage4,
        oneLiner:
          "Tarjetas Negras, ¡ganen su parte de $7,500 en efectivo el 7 y 21 de diciembre!",
        rules: {
          subSections: [
            {
              id: "30",
              title: "Día",
              body: "martes, 7 y 21 de diciembre de 2021",
            },
            { id: "31", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "32",
              title: "Reglas",
              body:
                "Nos encantan las fiestas, ¡casi tanto como nos encanta regalar dinero! El martes, 7 y 21 de diciembre a las 7 PM, 8 PM y 9 PM, ¡un miembro de la tarjeta Miccosukee One de nivel Negro ganará su parte de $7,500 en efectivo!",
            },
            {
              id: "33",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One de nivel Negro deberán ganar 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de diciembre a las 9 AM hasta el 21 de diciembre a las 8:45 PM.",
            },
            {
              id: "34",
              title: "Fecha y Horario de Sorteos",
              body: "7 y 21 de diciembre a las 7 PM, 8 PM y 9 PM",
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
                "Un (1) premio en efectivo de $2,500 a las 7 PM, 8 PM y 9 PM",
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
                "La tómbola estará disponible del 1 – 7 de diciembre para el sorteo del 7 de diciembre, y del 15 – 21 de diciembre para el sorteo del 21 de diciembre. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Black Card VIP Giveaway”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "312",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Elegibilidad para promoción por niveles basada en el estado de juego del 1 de diciembre. Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Sorteo VIP para Tarjeta Roja",
        img: cardImage5,
        oneLiner:
          "¿Tiene suerte, Tarjeta Roja? ¡Gane hasta $150 Free Play el 8 y 22 de diciembre!",
        rules: {
          subSections: [
            {
              id: "40",
              title: "Día",
              body: "miércoles, 8 y 22 de diciembre de 2021",
            },
            { id: "41", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "42",
              title: "Reglas",
              body:
                "¡Llamando a todos los miembros de nivel Rojo! El miércoles, 8 y 22 de diciembre entre las 6 PM y 9 PM hasta 24 miembros de la tarjeta Miccosukee One de nivel Rojo ganarán $100 o $150 Free Play vía Ricochet hot seat.",
            },
            {
              id: "43",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One de nivel ROJO que están jugando activamente con su tarjeta Miccosuke One.",
            },
            {
              id: "44",
              title: "Fecha y Horarios de Sorteos",
              body: "8 y 22 de diciembre de 6 PM – 9 PM",
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
              body: "Máquinas de juego que acepten la tarjeta Miccosukee One",
            },
            {
              id: "47",
              title: "Tipo de Premio y Cantidades",
              body:
                "El jugador que active el premio y un (1) ganador al azar durante una de hasta doce (12) oportunidades recibirán $100 o $150 Free Play.",
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
                "Elegibilidad para promoción por niveles basada en el estado de juego del 1 de diciembre. Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play válido por treinta días y en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Sorteo VIP para Tarjeta Blanca",
        img: cardImage6,
        oneLiner:
          "Tarjetas Blancas, ¡ganen su parte de $15,000 en efectivo el 14 y 28 de diciembre!",
        rules: {
          subSections: [
            {
              id: "50",
              title: "Día",
              body: "martes, 14 y 28 de diciembre de 2021",
            },
            { id: "51", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "52",
              title: "Reglas",
              body:
                "Nos encantan las fiestas, ¡casi tanto como nos encanta regalar dinero! El martes, 14 y 28 de diciembre a las 7 PM, 8 PM y 9 PM, ¡un miembro de la tarjeta Miccosukee One de nivel Blanco ganará su parte de $15,000 en efectivo!",
            },
            {
              id: "53",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One de nivel Blanco deberán ganar 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de diciembre a las 9 AM hasta el 28 de diciembre a las 8:45 PM.",
            },
            {
              id: "54",
              title: "Fecha y Horario de Sorteos",
              body: "14 y 28 de diciembre a las 7 PM, 8 PM y 9 PM",
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
                "Un (1) premio en efectivo de $5,000 a las 7 PM, 8 PM y 9 PM",
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
                "La tómbola estará disponible del 8 – 14 de diciembre para el sorteo del 14 de diciembre, y del 22 – 28 de diciembre para el sorteo del 28 de diciembre. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “White Card VIP Giveaway”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "512",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Elegibilidad para promoción por niveles basada en el estado de juego del 1 de diciembre. Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 6,
        title: "Bonanza de Cumpleaños",
        img: cardImage7,
        oneLiner:
          "¡Cumpleañeros de diciembre pueden ganar una parte de $1,200 Free Play el 14 y 28 de diciembre!  \u200b",
        rules: {
          subSections: [
            { id: "60", title: "Día", body: "lunes, 27 de diciembre de 2021" },
            { id: "61", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "62",
              title: "Reglas",
              body:
                "El lunes, 27 de diciembre entre las 6 PM y 10 PM, miembros que cumplan años en diciembre y estén jugando ativamente con sus tarjetas Miccosukee One serán elegibles para la oportunidad de ganar $25-$100 Free Play. Hasta $1,200 podrían ser otorgados en 8 oportunidades.",
            },
            {
              id: "63",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One deben cumplir años en diciembre y estar jugando activamente en las máquinas con su tarjeta Miccosukee One.",
            },
            {
              id: "64",
              title: "Fecha y Horarios",
              body: "27 de diciembre de 6 PM – 10 PM",
            },
            {
              id: "65",
              title: "Ganadores",
              body:
                "Miembros de la tarjeta Miccosukee One que activen el premio Ricochet mientras juegan y varios ganadores al azar que estén jugando con su tarjeta Miccosukee One cuando el premio sea activado. Todos los jugadores deberán cumplir años en diciembre para ser elegibles para ganar.",
            },
            {
              id: "66",
              title: "Ubicacion de Promoción",
              body: "Máquinas de juego que acepten la tarjeta Miccosukee One",
            },
            {
              id: "67",
              title: "Tipo de Premio y Cantidades",
              body:
                "El jugador que active el premio Ricochet recibirá $100 y otros dos (2) ganadores recibirán $25 en cada oportunidad. Un total de $1,200 Free Play será otorgado durante 8 oportunidades. Hasta 24 ganadores recibirán premios.",
            },
            {
              id: "68",
              title: "Restricciones de Premio",
              body: "Los jugadores pueden ganar múltiples veces.",
            },
            {
              id: "69",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Los premios no son transferibles. Free Play es válido durante 30 días y sólo en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 7,
        title: "Efectivo por Mercancía",
        img: cardImage8,
        oneLiner: "¡Reciba el Año Nuevo ganado $7K o $10 K el 31 de diciembre!",
        rules: {
          subSections: [
            {
              id: "70",
              title: "Día",
              body: "viernes, 31 de diciembre de 2021",
            },
            { id: "71", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "72",
              title: "Reglas",
              body:
                "¡¡¡Una caja fuerte llena de oro o plata le ayudará a recibir el Año Nuevo!!! El 31 de diciembre tendremos 5 sorteos a partir de las 5 PM donde llamaremos a los miembros de Miccosukee One cada dos horas para ganar de $7,000 a $10,000 en efectivo.",
            },
            {
              id: "73",
              title: "PARA CALIFICAR",
              body:
                "Gane 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de diciembre a las 9 AM hasta el 1 de enero a las 12:45 AM. Esta promoción contará con un multiplicador de entradas de bono todos los viernes, sábados y domingos que los jugadores puedan ganar entradas. Los invitados recibirán una entrada de bono por cada 200 puntos que ganen desde las 9 AM hasta la hora de cierre y hasta las 12:45 AM el 1 de enero.",
            },
            {
              id: "74",
              title: "Fecha y Horario de Sorteos",
              body:
                "Los sorteos se realizarán a las 5 PM, 7 PM, 9 PM, 11 PM el 31 de diciembre y a las 1 AM el 1 de enero.",
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
                "Si están presentes, los ganadores seleccionarán un sólo vehículo de premio. Comenzaremos cada sorteo con un total de 4 vehículos premiados. Los vehículos premiados valdrán las siguientes cantidades [2 Cajas Fuertes de Oro - $10,000] [2 Cajas Fuertes de Plata - $7,000].",
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
                "El 3, 4, 5, 10, 11, 12, 17, 18, 19, 24, 25, 26 y 31 de diciembre y hasta las 12:45 AM del 1 de enero de 2022, los jugadores pueden ganar una entrada de bono por cada 200 puntos que ganen. Los jugadores deben recoger sus entradas de bono el mismo día y dentro del plazo que tienen para ganarlas. Cualquier entrada no reclamada durante el periodo de tiempo establecido se perderá y no se podrá emitir en una fecha posterior.",
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
                "La tómbola estará disponible el 1 de diciembre a las 9 AM. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Commodity Cash Out”. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir.",
            },
            {
              id: "713",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 8,
        title: "Nuevos Miembros y Referidos Ganan en Grande",
        img: cardImage9,
        oneLiner:
          "¡\u200bNuevos Miembros y Referidos pueden ganar $5K el 31 de diciembre!",
        rules: {
          subSections: [
            {
              id: "80",
              title: "Día",
              body: "viernes, 31 de diciembre de 2021",
            },
            { id: "81", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "82",
              title: "Reglas",
              body:
                "¡¡Nuevos miembros y miembros que hayan referido a un amigo a Miccosukee One pueden ganar en grande el viernes, 31 de diciembre a las 8 PM!! ¡¡¡Un nuevo miembro o un miembro que haya referido a un amigo en el mes de diciembre será elegido de la tómbola para ganar $5,000 en efectivo!!!",
            },
            {
              id: "83",
              title: "PARA CALIFICAR",
              body:
                "Miembros de Miccosukee One deben haberse inscrito o deben haber referido a un amigo a Miccosukee One durante el mes de diciembre y deben estar presentes para ganar.",
            },
            {
              id: "84",
              title: "Fecha y Horario de Sorteo",
              body: "31 de diciembre a las 8 PM",
            },
            {
              id: "85",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido durante el sorteo.",
            },
            {
              id: "86",
              title: "Ubicación de Sorteo",
              body:
                "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "87",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body:
                "Cada nuevo miembro elegible recibirá un boleto de sorteo. Miembros recibirán un boleto de sorteo por cada nuevo miembro que refieran.",
            },
            {
              id: "88",
              title: "Tipo de Premio y Cantidades",
              body: "Un (1) premio en efectivo de $5,000 a las 8 PM",
            },
            {
              id: "89",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body:
                "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "810",
              title: "Reglas de “No Asistencia”",
              body:
                "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "811",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible el 31 de diciembre. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “New Members & Referrals Win Big”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "812",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 9,
        title: "Juego de Equipaje Oxford Gratis",
        img: cardImage10,
        oneLiner:
          "¡Viaje con estilo con un juego de equipaje GRATIS los lunes o martes de diciembre!",
        rules: {
          subSections: [
            {
              id: "90",
              title: "Día",
              body:
                "lunes y martes, 6-7, 13-14, 20-21, 27-28 de diciembre de 2021",
            },
            {
              id: "91",
              title: "Tipo de Promoción",
              body: "Programa de Continuidad",
            },
            {
              id: "92",
              title: "Reglas",
              body:
                "Jugadores invitados, acompáñennos los lunes o martes en diciembre para recolectar una pieza diferente cada semana. ¡Visiten las 4 semanas para conseguir el juego completo!",
            },
            {
              id: "93",
              title: "PARA CALIFICAR",
              body:
                "Los miembros de Miccosukee One pueden calificar para el regalo de continuidad de diciembre según los juegos clasificados en su tarjeta Miccosukee One desde el 1 de noviembre de 2020 hasta el 31 de octubre de 2021. La cuenta Miccosukee One del jugador también debe incluir una dirección válida de Florida y estar inscrita para recibir ofertas por correo de Miccosukee Resort & Gaming.",
            },
            {
              id: "94",
              title: "Fecha y Horarios",
              body: "6-7, 13-14, 20-21, 27-28 de diciembre de 12 PM – 10 PM",
            },
            {
              id: "95",
              title: "Número de Destinatarios por Distribución",
              body:
                "Los regalos estarán disponibles por orden de llegada, mientras dure la mercancía.",
            },
            {
              id: "96",
              title: "Ubicación de Entrega de Regalos",
              body:
                "Los regalos de continuidad se distribuirán desde el área de Admisiones de Bingo.",
            },
            {
              id: "97",
              title: "Tipo de Premio y Cantidades",
              body:
                'Si están presentes, los invitados pueden reclamar los siguientes regalos distribuidos al azar [Bolsa de Viaje Rodante Vertical Oxford de 21"- $49.99] [Mochila de Fin de Semana Oxford de 20" - $39.99] [Bolsa de Mano Oxford de 19 " y Bolsa de Aseo de 10"- $39.99] [Bolsa de Viaje Rodante Oxford de 21”- $49.99].',
            },
            {
              id: "98",
              title: "Cantidad de Regalos Permitidos por Invitado",
              body: "Un artículo de regalo semanal por invitado",
            },
            {
              id: "99",
              title: "Reglas de “No Asistencia”",
              body:
                "Debe estar presente para recibir el regalo. El regalo se perderá automáticamente si el jugador no presenta el cupón de regalo con su tarjeta Miccosukee One y una identificación válida durante las fechas y horarios de distribución establecidos.",
            },
            {
              id: "910",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el regalo, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
    ];
  }
};
