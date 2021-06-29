// Images
import cardImage1 from "assets/img/mrg/monthly_promos/AnniversaryGift_Logo-768x768.png";
import cardImage2 from "assets/img/mrg/monthly_promos/BunnyBucks_Logo-768x768.png";
import cardImage3 from "assets/img/mrg/monthly_promos/MiccosukeeOneStatusMatch_Logo-768x768.png";
import cardImage4 from "assets/img/mrg/monthly_promos/NewMemberBonus_Logo-768x768.png";
import cardImage5 from "assets/img/mrg/monthly_promos/RedCardRicochet_Logo-768x768.png";
import cardImage6 from "assets/img/mrg/monthly_promos/RolloverCash_Logo-768x768.png";
import cardImage7 from "assets/img/mrg/monthly_promos/VIPBonusPoints_Logo-768x768.png";
import cardImage8 from "assets/img/mrg/monthly_promos/VIPGiveaway_White-768x768.png";
import cardImage9 from "assets/img/mrg/monthly_promos/VIPGiveawayBlack_Logo-768x768.png";
import cardImage10 from "assets/img/mrg/monthly_promos/VIPGiveawayBlack_Logo-768x768.png";
import cardImage11 from "assets/img/mrg/monthly_promos/VIPGiveawayBlack_Logo-768x768.png";
import cardImage12 from "assets/img/mrg/monthly_promos/VIPGiveawayBlack_Logo-768x768.png";

// NEED A SCHEDULER SOLUTION AS WELL

export const cardContent = (language) => {
  if (language) {
    return [
  {
    id: 0,
    title: "New Member Bonus",
    img: cardImage1,
    oneLiner: "One liner copy",
    rules: {
      subSections: [
        { id: "00", title: "Day", body: "All month of July" },
        { id: "01", title: "Promotion Type", body: "Play and Win" },
        {
          id: "02",
          title: "Rules",
          body: "New members who sign up for a Miccosukee One Card will automatically receive $15 Free Play and have the opportunity to earn two (2) extra offers worth up to $500 based on their play through designated time periods.",
        },
        {
          id: "03",
          title: "TO QUALIFY",
          body: 'Must be a new member to the Miccosukee One program and provide address plus email and/or phone. Subsequent "Bounce Back Offers" will be based on play during specified time frames after players sign up for a Miccosukee One card.',
        },
        { id: "04", title: "Dates and Times", body: "All month of July" },
        {
          id: "05",
          title: "Winners",
          body: "Miccosukee One Card Members who meet the play and sign up requirements.",
        },
        {
          id: "06",
          title: "Promotion Location",
          body: "Promotion will take place at any gaming machine that accepts Miccosukee One Player Cards. Free Play credits will be downloaded to Winners’ Miccosukee One Card account.",
        },
        {
          id: "07",
          title: "Prize Type and Amounts",
          body: "Based on play from the enrollment date, new members could earn up to $15 - $515 in Free Play.",
        },
        {
          id: "08",
          title: "Prize Restrictions",
          body: "Players can earn up to $250 from Bounce Back #1. The offer will be loaded to new member’s Miccosukee One account within 2-5 days of enrollment date based on eligible play on their enrollment date. Bounce Back #1 will be valid for seven (7) days. Based on play from the second rated calendar date, eligible players could earn a second offer for up to $250 Free Play. Bounce Back #2 will be loaded to guest account within 2-5 days of qualifying play date based on eligible ratings that calendar date. Bounce Back #2 will be valid for seven (7) days. Second rated date must be within fourteen (14) days of enrollment. Player may qualify for a different tier Bounce Back offer on second date. Player is not required to play first Bounce Back in order to redeem second offer based upon second date play. Player must have qualified for enrollment offer to be eligible for second offer. Eligible gaming is inclusive of ratings concluded by midnight on qualifying date of enrollment and/or return. Offers will be communicated by e-mail.",
        },
        {
          id: "09",
          title:
            "Criteria for earning each Bounce Back offer are tiered as such",
          body: "[10 – 49 points = Play 10 Get 5] [50-99 points = Play 20 Get 10] [100-499 points = $10] [500-999 points = $25] [1,000-2,499 points = $50] [2,500-4,999 points = $100] [5,000-9,999 points = $150] [10,000+ points = $250].",
        },
        {
          id: "010",
          title: "General Rule Disclaimers",
          body: "Promotions are only available for Miccosukee One members. Prizes are not transferable. Bounce Back Free Play valid for 7 days and on select machines only. Play and Get Free Play is available for thirty (30) days once earned during the valid 7 day offer window. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
        },
      ],
    },
  },
  {
    id: 1,
    title: "Miccosukee One Status Match",
    img: cardImage2,
    oneLiner: "One liner copy",
    rules: {
      subSections: [
        { id: "10", title: "Day", body: "All month of July" },
        { id: "11", title: "Promotion Type", body: "Tier/Status Match" },
        {
          id: "12",
          title: "Rules",
          body: "Players who join or return to the Miccosukee One program and present an upgraded Player’s Club card from a competing Florida property, will be enrolled automatically as Miccosukee One RED or BLACK tiered players respectively.",
        },
        {
          id: "13",
          title: "TO QUALIFY",
          body: "Members joining as a RED tier member will receive a $25 Free Play enrollment bonus. Members joining as a BLACK tier member will receive a $50 Free Play enrollment bonus. Tier match is available to new and inactive players only. Active Miccosukee One members with a player rating within one (1) year are not eligible. Players will retain rank until conclusion of next full earning period. Rated gaming at Miccosukee Resort & Gaming must qualify for tier retention or further upgrade.",
        },
        {
          id: "14",
          title:
            "Players who show the following competitor tiered cards will be upgraded to Miccosukee One Red Card",
          body: "[Magic City Casino: Illusionist] [The Casino at Dania Beach: Sapphire] [The Big Easy “Mardi-Gras”: Gold] [Calder: Gold, Black] [Hialeah Park: Silver] [Casino Miami: Silver] [Seminole Properties: Platinum] [Isle Casino Racing Pompano Park: Platinum] [Casino at Gulfstream Park: Place]",
        },
        {
          id: "15",
          title:
            "Players who show the following competitor tiered cards will be upgraded to Miccosukee One Black Card",
          body: "[Magic City Casino: Oracle, Wizard] [The Casino at Dania Beach: Diamond, Legend] [The Big Easy “Mardi-Gras”: Black] [Calder: Red, Royal] [Hialeah Park: Black] [Casino Miami: Elite, VIP] [Seminole Properties: Elite, X-Card] [Isle Casino Racing Pompano Park: Diamond, Diamond Plus, Diamond Elite, Seven Stars] [Casino at Gulfstream Park: Win, Triple Crown].",
        },
        {
          id: "16",
          title: "GENERAL RULES",
          body: "Player name on valid photo ID must match the name on the Players Card. Players must provide address and email and/or phone to be eligible for tier match program. Card and ID must not be damaged, altered or otherwise illegible. Limit one upgrade per person. Offer only available to new players or players 12 months inactive at Miccosukee Resort and Gaming. Tier Match bonus must be awarded upon initial enrollment or prior to reactivation play. No exceptions. Must be 21 years of age or older. Must have valid, government issued, gaming approved ID and be physically present with the original ID to register. Free Play valid on select machines only. Players will have until 1:59 AM on August 1, 2021 to redeem Free Play credits. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details.",
        },
      ],
    },
  },
  {
    id: 2,
    title: "Anniversary Gift",
    img: cardImage3,
    oneLiner: "One liner copy",
    rules: {
      subSections: [
        { id: "20", title: "Day", body: "All month of July" },
        { id: "21", title: "Promotion Type", body: "Play and Win" },
        {
          id: "22",
          title: "TO QUALIFY",
          body: "All Miccosukee One members are eligible to earn one 30 Year Anniversary commemorative gift bag by earning 10 points through rated game play using your Miccosukee One Player's Card.",
        },
        {
          id: "23",
          title: "RULES",
          body: "While supplies last. Must be 21 years of age or older. Players may only enter promotion once. Must have valid, government issued, gaming approved ID and be physically present with the original ID to register. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details.",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Patriotic Cash",
    img: cardImage4,
    oneLiner: "One liner copy",
    rules: {
      subSections: [
        { id: "30", title: "Day", body: "Sunday, July 4, 2021" },
        { id: "31", title: "Promotion Type", body: "Drawing" },
        {
          id: "32",
          title: "Rules",
          body: "Celebrate Independence Day by winning a share of $20,000 in cash prizes! On Sunday, July 4 between 4 PM and midnight, one member will be called every two hours to win $1,000-$10,000. Unclaimed prizes roll over to the midnight drawing! Also, new members who sign up for a Miccosukee One Card on July 4th will receive a free entry into the drawing.",
        },
        {
          id: "33",
          title: "TO QUALIFY",
          body: "Earn 100 points on your Miccosukee One card for each drawing ticket. Points can be earned between July 1 at 9 AM and July 4 at 11:45 PM. This promotion will feature a bonus entry multiplier on the day of the drawing. Guests will receive one bonus entry for every 100 points they earn from 9 AM – 11:45 PM on July 4. Plus, all new members who sign up on July 4 will receive one free drawing entry.",
        },
        {
          id: "34",
          title: "Dates & Times",
          body: "Drawings will occur at 4 PM, 6 PM, 8 PM, 10 PM & 11:59 PM on July 4.",
        },
        {
          id: "35",
          title: "Number of Winners Per Drawing",
          body: "One (1) winner will be drawn per drawing.",
        },
        {
          id: "36",
          title: "Drawing Location / Prize Giveaway Location",
          body: "The drawings and prize payments will occur at the Player's Club.",
        },
        {
          id: "37",
          title: "Max Number of Entries",
          body: "Players can earn an unlimited amount of entries.",
        },
        {
          id: "38",
          title: "Prize Type and Amounts",
          body: "If present, winners may claim the following cash prizes [4 PM - $1,000] [6 PM - $4,000] [8 PM - $3,000] [10 PM - $2,000] [11:59 PM - $10,000]. The 11:59 PM winner on July 4 will win $10,000 cash and any unclaimed cash roll over prizes.",
        },
        {
          id: "39",
          title: "No Show Rules / Roll Over Rules",
          body: "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced. If the winners from the 4 PM - 10 PM drawings result in a no show, the prize money will roll over to the 11:59 PM drawing. Drawing officials will keep drawing names at the final drawing of the night until a winner is found. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
        },
        {
          id: "310",
          title: "Bonus Entry Rules",
          body: "On July 4 from 9 AM – 11:45 PM, players can earn one bonus entry for every 100 points they earn. Also, all new members who sign up on July 4 will receive one free entry in to the promotion until 11:45 PM.",
        },
        {
          id: "311",
          title: "Amount of Wins Permitted Per Guest",
          body: "Players can only win once in any single drawing with multiple winners.",
        },
        {
          id: "312",
          title: "Drawing Ticket / Barrel Rules",
          body: "Barrel will be available on July 1 at 9 AM. Drum will be emptied after the last drawing. Entries may not be entered into the drum during the drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub's larger perforated portion into the appropriate drum of the respective raffle, \"Patriotic Cash\". Player must have retained the smaller portion of perforated ticket in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued.",
        },
        {
          id: "313",
          title: "General Rule Disclaimers",
          body: "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final.  Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Red Card VIP Giveaway",
    img: cardImage5,
    oneLiner: "One liner copy",
    rules: {
      subSections: [
        { id: "40", title: "Day", body: "Wednesday, July 14 & 28, 2021" },
        { id: "41", title: "Promotion Type", body: "Ricochet Rewards" },
        {
          id: "42",
          title: "Rules",
          body: "Calling all Red Card members! On Wednesday, July 14 & 28 between 6 PM and 9 PM up to 24 Red Tier Miccosukee One members will win $100 or $150 Free Play via ricochet hot seat.",
        },
        {
          id: "43",
          title: "TO QUALIFY",
          body: "Miccosukee One RED Tier members actively gaming on their Miccosukee One Player's card.",
        },
        {
          id: "44",
          title: "Dates and Times",
          body: "July 14 & 28 from 6 PM - 9 PM",
        },
        {
          id: "45",
          title: "Winners",
          body: "Miccosukee One RED Tier member who triggers the Ricochet Prize through their play and one (1) additional random Red Tier winner playing with their Miccosukee One card at the time the prize is triggered.",
        },
        {
          id: "46",
          title: "Promotion Location",
          body: "Gaming devices that accept Miccosukee One cards.",
        },
        {
          id: "47",
          title: "Prize Type and amounts",
          body: "The player who triggers the prize and 1 additional random winner in up to twelve (12) occurrences will receive $100 or $150 in Free Play.",
        },
        {
          id: "48",
          title: "Prize Restrictions",
          body: "Players can win multiple times.",
        },
        {
          id: "49",
          title: "General Rule Disclaimers",
          body: "Eligibility for tiered promotion based on July 1 status. Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days and on select machines only. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
        },
      ],
    },
  },
  {
    id: 5,
    title: "Black Card VIP Giveaway",
    img: cardImage6,
    oneLiner: "One liner copy",
    rules: {
      subSections: [
        { id: "50", title: "Day", body: "Tuesday, July 13 & 27, 2021" },
        { id: "51", title: "Promotion Type", body: "Drawing" },
        {
          id: "52",
          title: "Rules",
          body: "Calling all Black Cards, we are maxing out the month of July! On Tuesday, July 13 & 27 at 7 PM, 8 PM & 9 PM, one Miccosukee One Black Card member will win $2,500 in cash!",
        },
        {
          id: "53",
          title: "TO QUALIFY",
          body: "Miccosukee One Black Card members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from July 1 at 9 AM to July 27 at 8:45 PM.",
        },
        {
          id: "54",
          title: "Dates and Times",
          body: "July 13 & 27 at 7 PM, 8 PM & 9 PM",
        },
        {
          id: "55",
          title: "Number of Winners Per Drawing",
          body: "One (1) winner at 7 PM, 8 PM & 9 PM.",
        },
        {
          id: "56",
          title: "Drawing Location / Prize Giveaway Location",
          body: "Drawings and prize giveaways will take place at the Player's Club.",
        },
        {
          id: "57",
          title: "Max Number of Entries",
          body: "Players can earn an unlimited amount of entries.",
        },
        {
          id: "58",
          title: "Prize Type and Amounts",
          body: "One (1) $2,500 cash prize at 7 PM 8 PM & 9 PM.",
        },
        {
          id: "59",
          title: "Amount of Wins Permitted Per Guest",
          body: "Players can only win once in any single drawing with multiple winners.",
        },
        {
          id: "510",
          title: "No Show Rules / Roll Over Rules",
          body: "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
        },
        {
          id: "511",
          title: "Drawing Ticket / Barrel Rules",
          body: "Barrel will be available July 1 – 13 for the 7/13 drawing and July 16 – 27 for 7/27 drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Black Card VIP Giveaway”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
        },
        {
          id: "512",
          title: "General Rule Disclaimers",
          body: "Eligibility for tiered promotion based on July 1 status. Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
        },
      ],
    },
  },
  {
    id: 6,
    title: "Fifty Fifty",
    img: cardImage7,
    oneLiner: "One liner copy",
    rules: {
      subSections: [
        { id: "60", title: "Day", body: "Sunday, July 4 & 18, 2021" },
        { id: "61", title: "Promotion Type", body: "Play and Win" },
        {
          id: "62",
          title: "Rules",
          body: "On Sunday, July 4 & 18, the first 50 Miccosukee One Card members who earn 50 points on their Miccosukee One Card will receive $50 in Free Play one time from 9 AM until 11:59 PM.",
        },
        {
          id: "63",
          title: "TO QUALIFY",
          body: "Insert your Miccosukee One Card in any gaming machine from 9 AM to 11:59 PM to earn Free Play allotment. Free Play will be automatically downloaded to first fifty guest accounts once corresponding Play & Earn criteria has been reached.",
        },
        {
          id: "64",
          title: "Dates and Times",
          body: "July 4 & 18 from 9 AM - 11:59 PM",
        },
        {
          id: "65",
          title: "Winners",
          body: "The first 50 Miccosukee One Card Members who meet the play requirements.",
        },
        {
          id: "66",
          title: "Promotion Location",
          body: "Promotion will take place at any video machine that accepts Miccosukee One Player Cards. Free Play credits will be downloaded to Winners’ Miccosukee One Card account automatically.",
        },
        {
          id: "67",
          title: "Prize Type and Amounts",
          body: "Miccosukee One members who earn 50 points will receive $50 in Free Play.",
        },
        {
          id: "68",
          title: "Prize Restrictions",
          body: "Play & Earn is redeemable only one time per promotional day for the first 50 Miccosukee One members that reach the point requirement.",
        },
        {
          id: "69",
          title: "General Rule Disclaimers",
          body: "Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days and on select machines only. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
        },
      ],
    },
  },
  {
    id: 7,
    title: "Stars and Stripes",
    img: cardImage8,
    oneLiner: "One liner copy",
    rules: {
      subSections: [
        { id: "70", title: "Day", body: "Monday, July 5, 12 & 19, 2021" },
        { id: "71", title: "Promotion Type", body: "Drawing" },
        {
          id: "72",
          title: "Rules",
          body: "Stars and Stripes will get your pockets RIGHT!!! On July 5, 12 & 19 at 6 PM, 7 PM, 8 PM & 9 PM, one Miccosukee One member will win up to $3,500 in cash!",
        },
        {
          id: "73",
          title: "TO QUALIFY",
          body: "Miccosukee One members must earn 100 points on their Miccosukee One card for each drawing ticket. Points can be earned from July 1 at 9 AM to July 19 at 8:45 PM.",
        },
        {
          id: "74",
          title: "Dates and Times",
          body: "July 5, 12 & 19 at 6 PM, 7 PM, 8 PM & 9 PM.",
        },
        {
          id: "75",
          title: "Number of Winners Per Drawing",
          body: "One (1) winner at 6 PM, 7 PM, 8 PM & 9 PM.",
        },
        {
          id: "76",
          title: "Drawing Location / Prize Giveaway Location",
          body: "Drawings and prize giveaways will take place at the Player's Club.",
        },
        {
          id: "77",
          title: "Max Number of Entries",
          body: "Players can earn an unlimited amount of entries.",
        },
        {
          id: "78",
          title: "Prize Type and Amounts",
          body: "Cash prizes available to be won are $1,000 - $3,500.",
        },
        {
          id: "79",
          title: "Amount of Wins Permitted Per Guest",
          body: "Players can only win once in any single drawing with multiple winners.",
        },
        {
          id: "710",
          title: "No Show Rules / Roll Over Rules",
          body: "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
        },
        {
          id: "711",
          title: "Game Rules",
          body: "If present, winners will spin a prize wheel which will dictate how many prize vehicles they can pick off the prize table, which will dictate what prize amount guests will receive. The spaces on the prize wheel will be the following [4 - 2] [4 - 3] [4 - 4]. The prize vehicles will be worth the following amount [3 - $500] [5 - $750] [2 - $1,000].",
        },
        {
          id: "712",
          title: "Drawing Ticket / Barrel Rules",
          body: "Barrel will be available July 1. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Stars and Stripes”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
        },
        {
          id: "713",
          title: "General Rule Disclaimers",
          body: "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
        },
      ],
    },
  },
  {
    id: 8,
    title: "White Card VIP Giveaway",
    img: cardImage9,
    oneLiner: "One liner copy",
    rules: {
      subSections: [
        { id: "80", title: "Day", body: "Thursday, July 15 & 29, 2021" },
        { id: "81", title: "Promotion Type", body: "Drawing" },
        {
          id: "82",
          title: "Rules",
          body: "Calling all White Cards! We are maxing out the month of July! On Thursday, July 15 & 29 at 7 PM, 8 PM & 9 PM, one Miccosukee One White Card member will win $5,000 in cash!",
        },
        {
          id: "83",
          title: "TO QUALIFY",
          body: "Miccosukee One White Card members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from July 1 at 9 AM to July 29 at 8:45 PM.",
        },
        {
          id: "84",
          title: "Dates and Times",
          body: "July 15 & 29 at 7 PM, 8 PM & 9 PM",
        },
        {
          id: "85",
          title: "Number of Winners Per Drawing",
          body: "One (1) winner at 7 PM, 8 PM & 9 PM.",
        },
        {
          id: "86",
          title: "Drawing Location / Prize Giveaway Location",
          body: "Drawings and prize giveaways will take place at the Player's Club.",
        },
        {
          id: "87",
          title: "Max Number of Entries",
          body: "Players can earn an unlimited amount of entries.",
        },
        {
          id: "88",
          title: "Prize Type and Amounts",
          body: "One (1) $5,000 cash prize at 7 PM, 8 PM & 9 PM.",
        },
        {
          id: "89",
          title: "Amount of Wins Permitted Per Guest",
          body: "Players can only win once in any single drawing with multiple winners.",
        },
        {
          id: "810",
          title: "No Show Rules / Roll Over Rules",
          body: "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
        },
        {
          id: "811",
          title: "Drawing Ticket / Barrel Rules",
          body: "Barrel will be available July 14 – 15 for the 7/15 drawing and July 28 – 29 for 7/29 drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “White Card VIP Giveaway”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
        },
        {
          id: "812",
          title: "General Rule Disclaimers",
          body: "Eligibility for tiered promotion based on July 1 status. Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
        },
      ],
    },
  },
  {
    id: 9,
    title: "Lazy Sundays",
    img: cardImage10,
    oneLiner: "One liner copy",
    rules: {
      subSections: [
        { id: "90", title: "Day", body: "Sunday, July 11 & 25, 2021" },
        { id: "91", title: "Promotion Type", body: "Drawing" },
        {
          id: "92",
          title: "Rules",
          body: "The only thing more enjoyable than a lazy Sunday is winning lots of money!!! On Sunday, July 11 & 25 one Miccosukee One member will win $2,500 in cash at 1 PM, 3 PM & 5 PM!",
        },
        {
          id: "93",
          title: "TO QUALIFY",
          body: "Miccosukee One members must earn 100 points on their Miccosukee One card for each drawing ticket. Points can be earned from July 1 at 9 AM to July 25 at 4:45 PM.",
        },
        {
          id: "94",
          title: "Dates and Times",
          body: "July 11 & 25 at 1 PM, 3 PM & 5 PM.",
        },
        {
          id: "95",
          title: "Number of Winners Per Drawing",
          body: "One (1) winner at 1 PM, 3 PM & 5 PM.",
        },
        {
          id: "96",
          title: "Drawing Location / Prize Giveaway Location",
          body: "Drawings and prize giveaways will take place at the Player's Club.",
        },
        {
          id: "97",
          title: "Max Number of Entries",
          body: "Players can earn an unlimited amount of entries.",
        },
        {
          id: "98",
          title: "Prize Type and Amounts",
          body: "If present, winners may claim $2,500 cash at 1 PM, 3 PM and 5 PM.",
        },
        {
          id: "99",
          title: "Amount of Wins Permitted Per Guest",
          body: "Players can only win once in any single drawing with multiple winners.",
        },
        {
          id: "910",
          title: "No Show Rules / Roll Over Rules",
          body: "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
        },
        {
          id: "911",
          title: "Drawing Ticket / Barrel Rules",
          body: "Barrel will be available on July 5 at 9 AM. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Lazy Sunday”. Drum will be cleared after the last drawing of the day. Player must have retained the smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
        },
        {
          id: "912",
          title: "General Rule Disclaimers",
          body: "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
        },
      ],
    },
  },
  {
    id: 10,
    title: "Birthday Bonanza Hot Seats",
    img: cardImage11,
    oneLiner: "One liner copy",
    rules: {
      subSections: [
        { id: "100", title: "Day", body: "Monday, July 26, 2021" },
        { id: "101", title: "Promotion Type", body: "Ricochet Rewards" },
        {
          id: "102",
          title: "Rules",
          body: "On Monday, July 26 between the hours of 6 PM and 10 PM, July birthday guests who are actively gaming with their Miccosukee One card will be eligible for a chance to win $25-$100 in Free Play. Up to $1,200 may be awarded in up to 8 occurrences.",
        },
        {
          id: "103",
          title: "TO QUALIFY",
          body: "Miccosukee One members must have a birthday during the month of July and be actively playing gaming machines on their Miccosukee One card.",
        },
        {
          id: "104",
          title: "Dates and Times",
          body: "July 26 from 6 PM - 10 PM",
        },
        {
          id: "105",
          title: "Winners",
          body: "Miccosukee One members who trigger the ricochet prize through their play and various random winners who are playing with their Miccosukee One card at the time the prize is triggered. All guests must have a July birthday to be eligible to win.",
        },
        {
          id: "106",
          title: "Promotion Location",
          body: "Gaming devices that accept Miccosukee One cards.",
        },
        {
          id: "107",
          title: "Prize Type and Amounts",
          body: "The player who triggers the Ricochet will receive $100 and two (2) others will win $25 during each occurrence. A total of $1,200 in Free Play may be awarded in up to 8 occurrences. Up to 24 winners may be awarded prizes.",
        },
        {
          id: "108",
          title: "Prize Restrictions",
          body: "Players can win multiple times.",
        },
        {
          id: "109",
          title: "General Rule Disclaimers",
          body: "Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days on select machines only. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
        },
      ],
    },
  },
  {
    id: 11,
    title: "25K To Play",
    img: cardImage12,
    oneLiner: "One liner copy",
    rules: {
      subSections: [
        { id: "110", title: "Day", body: "Saturday, July 31, 2021" },
        { id: "111", title: "Promotion Type", body: "Drawing" },
        {
          id: "112",
          title: "Rules",
          body: "We have 25K to help you play!!! On July 31, we'll have 5 drawings starting from 5 PM where Miccosukee One members will be called every two hours to win $5,000.",
        },
        {
          id: "113",
          title: "TO QUALIFY",
          body: "Earn 200 points on your Miccosukee One card for each drawing ticket. Points can be earned between July 1 at 9 AM and August 1 at 12:45 AM. This promotion will feature a bonus entry multiplier every Friday and Saturday that players are allowed to earn entries. Guests will receive one bonus entry for every 200 points they earn from 9 AM – close and through 12:45 AM on August 1.",
        },
        {
          id: "114",
          title: "Dates & Times",
          body: "Drawings will occur at 5 PM, 7 PM, 9 PM, 11 PM on July 31 & 1 AM on & August 1.",
        },
        {
          id: "115",
          title: "Number of Winners Per Drawing",
          body: "One (1) winner will be drawn per drawing.",
        },
        {
          id: "116",
          title: "Drawing Location / Prize Giveaway Location",
          body: "The drawings and prize payments will occur at the Player's Club.",
        },
        {
          id: "117",
          title: "Max Number of Entries",
          body: "Players can earn an unlimited amount of entries.",
        },
        {
          id: "118",
          title: "Prize Type and Amounts",
          body: "If present, winners may claim $5,000 cash at 5 PM, 7 PM, 9 PM, 11 PM and 1 AM.",
        },
        {
          id: "119",
          title: "No Show Rules / Roll Over Rules",
          body: "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
        },
        {
          id: "1110",
          title: "Bonus Entry Rules",
          body: "On July 2, 3, 9, 10, 16, 17, 23, 24 & 30 from 9 AM – close, July 31 from 9 AM to August 1 until 12:45 AM, players can earn one bonus entry for every 200 points they earn. Players must collect their bonus entries on the same day and within the time frame they have to earn them. Any entries not claimed during the appropriate time frame will be forfeited and cannot be printed at a later date.",
        },
        {
          id: "1111",
          title: "Amount of Wins Permitted Per Guest",
          body: "Players can only win once in any single drawing with multiple winners.",
        },
        {
          id: "1112",
          title: "Drawing Ticket / Barrel Rules",
          body: "Barrel will be available on July 1 at 9 AM. Drum will be emptied after the last drawing of the promotion. Entries may not be entered into the drum during the drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub's larger perforated portion into the appropriate drum of the respective raffle, \"25K To Play\". Player must have retained the smaller portion of perforated ticket in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued.",
        },
        {
          id: "1113",
          title: "General Rule Disclaimers",
          body: "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 21 years of age or older to qualify. Once disqualification is declared, it is final.  Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
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
        oneLiner: "One liner copy",
        rules: {
          subSections: [
            { id: "00", title: "Día", body: "Todo el mes de julio" },
            { id: "01", title: "Tipo de Promoción", body: "Juegue y Gane" },
            {
              id: "02",
              title: "Reglas",
              body: "Nuevos miembros que se unan a la tarjeta Miccosuke One recibirán automáticamente $15 en Free Play y tendrán la oportunidad de ganar dos (2) ofertas adicionales valoradas en hasta $500 basadas en frecuencia de juego en periodos de tiempo designados.",
            },
            {
              id: "03",
              title: "PARA CALIFICAR",
              body: "Debe ser un nuevo miembro del programa Miccosukee One y proveer dirección, correo electrónico y/o número de teléfono. “Ofertas de Bounce Back” subsiguientes estarán basadas en frecuencia de juego durante periodos de tiempo específicos luego de que el jugador se haya registrado a la tarjeta Miccosukee One.",
            },
            { id: "04", title: "Fechas y Horario", body: "Todo el mes de julio" },
            {
              id: "05",
              title: "Ganadores",
              body: "Miembros de la tarjeta Miccosukee One que cumplan con los requisitos de juego e inscripción.",
            },
            {
              id: "06",
              title: "Ubicación de Promoción",
              body: "La promoción se llevará a cabo en cualquier máquina de juego que acepte la tarjeta Miccosukee One. Los créditos de Free Play serán descargados en la cuenta de Miccosukee One del ganador.",
            },
            {
              id: "07",
              title: "Tipo de Premio y Cantidades",
              body: "Basado en la cantidad de juego en la fecha de inscripción, el nuevo miembro podría calificar para una oferta de hasta $15-$515 en Free Play.",
            },
            {
              id: "08",
              title: "Restricciones de Premio",
              body: "Los jugadores pueden ganar hasta $250 de la oferta Bounce Back #1. La oferta será descargada en la cuenta del nuevo miembro de la tarjeta Miccosukee One 2-5 días después de la fecha de inscripción y estará basada en elegibilidad de juego en su fecha de inscripción. Bounce Back #1 será válido durante siete (7) días. Basado en la frencuencia de juego de la segunda fecha de calendario calificada, jugadores elegibles podrían calificar para una segunda oferta para ganar hasta $250 en Free Play. Los créditos de Bounce Back #2 serán descargados a la cuenta del invitado 2-5 días después de la fecha calificada y estarán basados en calificaciones elegibles en esa fecha de calendario. Bounce Back #2 será válido durante siete (7) días. Segunda fecha de calendario calificada debe ser dentro de 14 días de la fecha de inscripción. Jugador puede calificar para una oferta de Bounce Back diferente en la segunda fecha. Jugador no está sujeto a jugar la primera oferta de Bounce Back para poder redimir la segunda oferta basada en la frecuencia de juego de la segunda fecha. Jugador debe haber calificado para la oferta de inscripción para ser elegible para la segunda oferta. Juego elegible incluye calificaciones concluídas a la media noche en las fechas de inscripción estipuladas y las fechas en que regrese a jugar. Ofertas serán anunciadas por correo electrónico.",
            },
            {
              id: "09",
              title:
                "Criterio para ganar cada oferta de Bounce Back está clasificado de la siguiente manera",
              body: "[10 – 49 puntos = Juegue 10 Reciba 5] [50-99 puntos = Juegue 20 Reciba 10] [100-499 puntos = $10] [500-999 puntos = $25] [1,000-2,499 puntos = $50] [2,500-4,999 puntos = $100] [5,000-9,999 puntos = $150] [10,000+ puntos = $250].",
            },
            {
              id: "010",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body: "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Bounce Back Free Play es válido por 7 días y sólo en máquinas seleccionadas. Juegue y Gane Free. Juegue y Gane Free Play estará disponible por treinta (30) días al ganarse durante el periodo de oferta estipulado. Deben tener 21 años o más para calificar. Si se declara descalificado, es final. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la administración. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 1,
        title: "Miccosukee One Status Match (Igualamos su Nivel)",
        img: cardImage2,
        oneLiner: "One liner copy",
        rules: {
          subSections: [
            { id: "10", title: "Día", body: "Todo el mes de julio" },
            { id: "11", title: "Tipo de Promoción", body: "Tier/Status Match" },
            {
              id: "12",
              title: "Reglas",
              body: "Jugadores que se unan o regresen al programa Miccosukee One y presenten un Player’s Card de nivel ascendido de un establecimiento de nuestra competencia localizado en la Florida serán inscritos automáticamente como un miembro de la tarjeta Miccosukee One de niveles ROJO o NEGRO respectivamente.",
            },
            {
              id: "13",
              title: "PARA CALIFICAR",
              body: "Miembros que se unan como jugador de nivel ROJO recibirán un bono de inscripción de $25. Miembros que se unan como jugador de nivel NEGRO recibirán un bono de inscripción de $50. Tier match sólo está disponible para jugadores nuevos o inactivos. Jugadores activos de Miccosukee One con un nivel de juego de un (1) año no son elegibles. Jugadores conservarán su nivel hasta que culmine el próximo periodo de ganancia total. Juego por niveles en Miccosukee Resort & Gaming debe calificar para retención o promoción de nivel.",
            },
            {
              id: "14",
              title:
                "Jugadores que muestren las siguientes tarjetas de juego por nivel serán promovidos al nivel Rojo de la tarjeta Miccosukee One",
              body: "[Magic City Casino: Illusionist] [The Casino at Dania Beach: Sapphire] [The Big Easy “Mardi-Gras”: Gold] [Calder: Gold, Black] [Hialeah Park: Silver] [Casino Miami: Silver] [Seminole Properties: Platinum] [Isle Casino Racing Pompano Park: Platinum] [Casino at Gulfstream Park: Place].",
            },
            {
              id: "15",
              title:
                "Jugadores que muestren las siguientes tarjetas de juego por nivel serán promovidos al nivel Negro de la tarjeta Miccosukee One",
              body: "[Magic City Casino: Oracle, Wizard] [The Casino at Dania Beach: Diamond, Legend] [The Big Easy “Mardi-Gras”: Black] [Calder: Red, Royal] [Hialeah Park: Black] [Casino Miami: Elite, VIP] [Seminole Properties: Elite, X-Card] [Isle Casino Racing Pompano Park: Diamond, Diamond Plus, Diamond Elite, Seven Stars] [Casino at Gulfstream Park: Win, Triple Crown].",
            },
            {
              id: "16",
              title: "REGLAS GENERALES",
              body: "El nombre que el jugador muestre en su ID debe igualar el nombre que muestre en su Player’s Card. Jugadores deberán proveer dirección, correo electrónico y/o número de teléfono para ser elegibles para el programa de tier match. El Player’s Card y la ID no deben estar dañadas, alteradas o ilegibles. Límite una promoción de nivel por persona. Oferta válida sólo para nuevos jugadores o jugadores que lleven 12 meses inactivos en Miccosukee Resort & Gaming. El bono de Tier Match debe otorgarse en el momento de la inscripción inicial o antes de la reactivación del juego. Sin excepciones. Deben tener 21 años o más para calificar. Los jugadores sólo pueden participar en la promoción una vez. Deben tener identificación válida, emitida por el gobierno, aprobada para jugar, y estar físicamente presente con la identificación original al momento de registrarse. Free Play es válido sólo en máquinas seleccionadas. Jugadores tendrán hasta las 1:59 AM del 1 de agosto de 2021 para redimir sus créditos de Free Play. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la administración. Consulte a un asistente del Player’s Club para más detalles.",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Regalo de Aniversario",
        img: cardImage3,
        oneLiner: "One liner copy",
        rules: {
          subSections: [
            { id: "20", title: "Día", body: "Todo el mes de julio" },
            { id: "21", title: "Tipo de Promoción", body: "Juegue y Gane" },
            {
              id: "22",
              title: "PARA CALIFICAR",
              body: "Todos los miembros de la tarjeta Miccosukee One son elegibles para ganar una bolsa de regalo conmemorativa del 30 Aniversario al obtener 10 puntos jugando con su tarjeta Miccosukee One.",
            },
            {
              id: "23",
              title: "Reglas Generales",
              body: "Mientras dure la mercancía. Deben tener 21 años o más para calificar. Los jugadores sólo pueden participar en la promoción una vez. Deben tener identificación válida, emitida por el gobierno, aprobada para jugar, y estar físicamente presente con la identificación original al momento de registrarse. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la administración. Consulte a un asistente del Player’s Club para obtener más información.",
            },
          ],
        },
      },
      {
        id: 3,
        title: "Dinero Patriótico (or Efectivo Patriótico)",
        img: cardImage4,
        oneLiner: "One liner copy",
        rules: {
          subSections: [
            { id: "30", title: "Día", body: "domingo, 4 de julio de 2021" },
            { id: "31", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "32",
              title: "Reglas",
              body: "¡Celebre el Día de la Independencia ganando una parte de $20,000 en premios en efectivo! El domingo, 4 de julio entre las 4 PM y la media noche, un miembro será anunciado cada dos horas para ganar $1,000-$10,000. ¡Premios no reclamados se añadirán al sorteo de la media noche! Además, los nuevos miembros que se inscriban para una tarjeta Miccosukee One el 4 de julio recibirán una entrada gratuita al sorteo.",
            },
            {
              id: "33",
              title: "PARA CALIFICAR",
              body: "Gane 100 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar entre el 1 de julio a las 9 AM hasta el 4 de julio a las 11:45 PM. Esta promoción incluirá un multiplicador para entradas de bono el día del sorteo. Además, todos los nuevos miembros que se inscriban el 4 de julio recibirán una entrada gratis al sorteo.",
            },
            {
              id: "34",
              title: "Fecha y Horarios de Sorteos",
              body: "Los sorteos serán a las 4 PM, 6 PM, 8 PM, 10 PM y 11:59 PM el 4 de julio.",
            },
            {
              id: "35",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido por sorteo.",
            },
            {
              id: "36",
              title: "Ubicación de Sorteo",
              body: "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "37",
              title: "Cantidad de Entradas Permitidas por Persona",
              body: "Los jugadores pueden acumular entradas ilimitadas.",
            },
            {
              id: "38",
              title: "Tipo de Premio y Cantidades",
              body: "Si están presentes, los ganadores pueden reclamar los siguientes premios en efectivo [4 PM - $1,000] [6 PM - $4,000] [8 PM - $3,000] [10 PM - $2,000] [11:59 PM - $10,000]. El ganador de las 11:59 PM del 4 de julio ganará $10,000 en efectivo más cualquier cantidad no reclamada durante los sorteos anteriores.",
            },
            {
              id: "39",
              title: "Reglas de “No Asistencia”",
              body: "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado. Si los ganadores de los sorteos de las 4 PM – 10 PM no se presentan a reclamar sus premios, los premios se añadirán al sorteo de las 11:59 PM. Oficiales de sorteo seguirán seleccionando nombres en el último sorteo de la noche hasta que se encuentre un ganador. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "310",
              title: "Reglas de Entradas de Bono",
              body: "El 4 de julio de 9 AM – 11:45 PM, los jugadores podrán ganar una entrada de bono por cada 100 puntos que acumulen. Además, los nuevos miembros que se inscriban el 4 de julio recibirán una entrada de bono gratis para la promoción hasta las 11:45 PM.",
            },
            {
              id: "311",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body: "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "312",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body: "La tómbola estará disponible el 1 de julio a las 9 AM. La tómbola se vaciará después del último sorteo. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Patriotic Cash”. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir.",
            },
            {
              id: "313",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body: "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 21 años o más para calificar. Si se declara descalificado, es final. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la administración. Consulte a un asistente del Player’s Club para obtener más información. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Sorteo VIP para Tarjeta Roja",
        img: cardImage5,
        oneLiner: "One liner copy",
        rules: {
          subSections: [
            { id: "40", title: "Día", body: "miércoles, 14 y 28 de julio de 2021" },
            { id: "41", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "42",
              title: "Reglas",
              body: "¡Llamando a todos los miembros de nivel Rojo! El miércoles, 14 y 28 de julio entre las 6 PM y 9 PM hasta 24 miembros de la tarjeta Miccosukee One de nivel Rojo ganarán $100 o $150 en Free Play vía ricochet hot seat.",
            },
            {
              id: "43",
              title: "PARA CALIFICAR",
              body: "Miembros de la tarjeta Miccosukee One de nivel ROJO que están jugando activamente con su tarjeta Miccosuke One.",
            },
            {
              id: "44",
              title: "Fecha y Horarios",
              body: "14 y 28 de julio de 6 PM – 9 PM",
            },
            {
              id: "45",
              title: "Ganadores",
              body: "Un miembro de la tarjeta Miccosukee One de nivel Rojo que active el premio Ricochet mientras juega y un (1) jugador adicional de nivel Rojo que está jugando con su tarjeta Miccosukee One y que sea elegido al azar cuando el premio sea activado.",
            },
            {
              id: "46",
              title: "Ubicación de Promoción",
              body: "Máquinas de juego que acepten la tarjeta Miccosukee One.",
            },
            {
              id: "47",
              title: "Tipo de Premio y Cantidades",
              body: "El jugador que active el premio y 1 ganador al azar durante una de hasta doce (12) oportunidades recibirán $100 o $150 en Free Play.",
            },
            {
              id: "48",
              title: "Restricciones de Premio",
              body: "Los jugadores pueden ganar múltiples veces.",
            },
            {
              id: "49",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body: "Elegibilidad para promoción por niveles basada en el estatus de juego del 1 de julio. Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play válido por treinta días y en máquinas seleccionadas. Deben tener 21 años o más para calificar. Si se declara descalificado, es final. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la administración. Consulte a un asistente del Player’s Club para obtener más información. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Sorteo VIP para Tarjeta Negra",
        img: cardImage6,
        oneLiner: "One liner copy",
        rules: {
          subSections: [
            { id: "50", title: "Día", body: "martes, 13 y 27 de julio de 2021" },
            { id: "51", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "52",
              title: "Reglas",
              body: "¡Llamando a los miembros de tarjeta Negra, estamos maximizando el mes de julio! ¡El martes, 13 y 27 de julio a las 7 PM, 8 PM y 9 PM, un miembro de la tarjeta Miccosukee One de nivel Negro ganará $2,500 en efectivo!",
            },
            {
              id: "53",
              title: "PARA CALIFICAR",
              body: "Miembros de la tarjeta Miccosukee One de nivel Negro deberán ganar 200 puntos en su tarjeta Miccosukee One por cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de julio a las 9 AM hasta el 27 de julio a las 8:45 PM.",
            },
            {
              id: "54",
              title: "Fecha y Horario de Sorteos",
              body: "13 y 27 de julio a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "55",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido a las 7 PM, 8 PM y 9 PM.",
            },
            {
              id: "56",
              title: "Ubicación de Sorteo",
              body: "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "57",
              title: "Cantidad de Entradas Permitidas por Persona",
              body: "Los jugadores pueden acumular entradas ilimitadas.",
            },
            {
              id: "58",
              title: "Tipo de Premio y Cantidades",
              body: "Un (1) premio en efectivo de $2,500 a las 7 PM, 8 PM y 9 PM.",
            },
            {
              id: "59",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body: "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "510",
              title: "Reglas de “No Asistencia”",
              body: "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "511",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body: "La tómbola estará disponible del 1 – 13 de julio para el sorteo del 13 de julio, y del 16 – 27 de julio para el sorteo del 27 de julio. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Black Card VIP Giveaway”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "512",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body: "Elegibilidad para promoción por niveles basada en el estatus de juego del 1 de julio. Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 21 años o más para calificar. Si se declara descalificado, es final. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la administración. Consulte a un asistente del Player’s Club para obtener más información. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 6,
        title: "Cincuenta y Cincuenta",
        img: cardImage7,
        oneLiner: "One liner copy",
        rules: {
          subSections: [
            { id: "60", title: "Día", body: "domingo, 4 y 18 de julio de 2021" },
            { id: "61", title: "Tipo de Promoción", body: "Juegue y Gane" },
            {
              id: "62",
              title: "Reglas",
              body: "El domingo, 4 y 18 de julio, los primeros 50 miembros de la tarjeta Miccosukee One que ganen 50 puntos en su tarjeta Miccosukee One recibirán $50 en Free Play una vez de 9 AM hasta 11:59 PM.",
            },
            {
              id: "63",
              title: "PARA CALIFICAR",
              body: "Inserte su tarjeta Miccosukee One en cualquier máquina de juego entre las 9 AM y 11:59 PM para ganar Free Play. Los créditos de Free Play serán descargados automáticamente a la cuenta de los primeros cincuenta invitados que cumplan los requisitos de Juegue y Gane.",
            },
            {
              id: "64",
              title: "Fecha y Horario de Sorteos",
              body: "4 y 18 de julio de 9 AM – 11:59 PM",
            },
            {
              id: "65",
              title: "Ganadores",
              body: "Los primeros 50 miembros de la tarjeta Miccosukee One que llenen los requisitos de juego.",
            },
            {
              id: "66",
              title: "Ubicación de Promoción",
              body: "La promoción tomará lugar en cualquier máquina que acepte las tarjetas Miccosukee One. Los créditos de Free Play serán descargados automáticamente a la cuenta Miccosukee One del ganador.",
            },
            {
              id: "67",
              title: "Tipo de Premio y Cantidades",
              body: "Miembros de la tarjeta Miccosukee One que ganen 50 puntos recibirán $50 en Free Play.",
            },
            {
              id: "68",
              title: "Restricciones de Premio",
              body: "Juegue y Gane sólo es redimible una vez por día de promoción para los primeros 50 miembros de la tarjeta Miccosukee One que alcancen los puntos requeridos.",
            },
            {
              id: "69",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body: "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play es válido por 30 días y sólo en máquinas seleccionadas. Deben tener 21 años o más para calificar. Si se declara descalificado, es final. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la administración. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 7,
        title: "Estrellas y Barras (or Bandera Adinerada)",
        img: cardImage8,
        oneLiner: "One liner copy",
        rules: {
          subSections: [
            { id: "70", title: "Día", body: "lunes, 5, 12 y 19 de julio de 2021" },
            { id: "71", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "72",
              title: "Reglas",
              body: "¡¡¡Las estrellas y barras (or la bandera estadounidense) seguro le traerán buena suerte y dinero para su bolsillo!!! El 5, 12 y 19 de julio a las 6 PM, 7 PM, 8 PM y 9 PM, ¡un miembro de la tarjeta Miccosukee One ganará hasta $3,500 en efectivo!",
            },
            {
              id: "73",
              title: "PARA CALIFICAR",
              body: "Miembros de la tarjeta Miccosukee One deberán ganar 100 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de julio a las 9 AM hasta el 19 de julio a las 8:45 PM.",
            },
            {
              id: "74",
              title: "Fecha y Horarios de Sorteos",
              body: "5, 12 y 19 de julio a las 6 PM, 7 PM, 8 PM y 9 PM",
            },
            {
              id: "75",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido a las 6 PM, 7 PM, 8 PM y 9 PM.",
            },
            {
              id: "76",
              title: "Ubicación de Sorteo",
              body: "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "77",
              title: "Cantidad de Entradas Permitidas por Persona",
              body: "Los jugadores pueden acumular entradas ilimitadas.",
            },
            {
              id: "78",
              title: "Tipo de Premio y Cantidades",
              body: "Los premios en efectivo disponibles a ser ganados son de $1,000 - $3,500.",
            },
            {
              id: "79",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body: "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "710",
              title: "Reglas de “No Asistencia”",
              body: "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "711",
              title: "Reglas del Juego",
              body: "Si están presentes, los ganadores girarán una ruleta de premios que indicará la cantidad de módulos de premio que podrán elegir de la mesa de premios, que a su vez indicarán la cantidad del premio que recibirán. Los espacios en la ruleta de premios estarán identificados de la siguiente manera [4 - 2] [4 - 3] [4 - 4]. Los módulos de premio tendrán las siguientes denominaciones [3 - $500] [5 - $750] [2 - $1,000].",
            },
            {
              id: "712",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body: "La tómbola estará disponible el 1 de julio. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Stars and Stripes”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "713",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body: "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 21 años o más para calificar. Si se declara descalificado, es final. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la administración. Consulte a un asistente del Player’s Club para obtener más información. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 8,
        title: "Sorteo VIP para Tarjeta Blanca",
        img: cardImage9,
        oneLiner: "One liner copy",
        rules: {
          subSections: [
            { id: "80", title: "Día", body: "jueves, 15 y 29 de julio de 2021" },
            { id: "81", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "82",
              title: "Reglas",
              body: "¡Llamando a los miembros de tarjeta Blanca! ¡Estamos maximizando el mes de julio! El jueves, 15 y 29 de julio a las 7 PM, 8 PM y 9 PM, ¡un miembro de la tarjeta Miccosukee One de nivel Blanco ganará $5,000 en efectivo!",
            },
            {
              id: "83",
              title: "PARA CALIFICAR",
              body: "Miembros de la tarjeta Miccosukee One de nivel Blanco deberán ganar 200 puntos en su tarjeta Miccosukee One por cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de julio a las 9 AM hasta el 29 de julio a las 8:45 PM.",
            },
            {
              id: "84",
              title: "Fecha y Horario de Sorteos",
              body: "15 y 29 de julio a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "85",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido a las 7 PM, 8 PM y 9 PM.",
            },
            {
              id: "86",
              title: "Ubicación de Sorteo",
              body: "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "87",
              title: "Cantidad de Entradas Permitidas por Persona",
              body: "Los jugadores pueden acumular entradas ilimitadas.",
            },
            {
              id: "88",
              title: "Tipo de Premio y Cantidades",
              body: "Un (1) premio en efectivo de $5,000 a las 7 PM, 8 PM y 9 PM.",
            },
            {
              id: "89",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body: "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "810",
              title: "Reglas de “No Asistencia”",
              body: "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "811",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body: "La tómbola estará disponible del 14 – 15 de julio para el sorteo del 15 de julio, y del 28 – 29 de julio para el sorteo del 29 de julio. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “White Card VIP Giveaway”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "812",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body: "Elegibilidad para promoción por niveles basada en el estatus de juego del 1 de julio. Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 21 años o más para calificar. Si se declara descalificado, es final. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la administración. Consulte a un asistente del Player’s Club para obtener más información. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 9,
        title: "Domingos Relajados",
        img: cardImage10,
        oneLiner: "One liner copy",
        rules: {
          subSections: [
            { id: "90", title: "Día", body: "domingo, 11 y 25 de julio de 2021" },
            { id: "91", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "92",
              title: "Reglas",
              body: "¡¡¡Lo único más agadable que un domingo relajado es ganar mucho dinero!!! El domingo 11 y 25 de julio, ¡un miembro de la tarjeta Miccosukee One ganará $2,500 en efectivo a las 1 PM, 3 PM y 5 PM!",
            },
            {
              id: "93",
              title: "PARA CALIFICAR",
              body: "Miembros de la tarjeta Miccosukee One deberán ganar 100 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de julio a las 9 AM hasta el 25 de julio a las 4:45 PM.",
            },
            {
              id: "94",
              title: "Fecha y Horarios de Sorteos",
              body: "11 y 25 de julio a las 1 PM, 3 PM y 5 PM",
            },
            {
              id: "95",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador a las 1 PM, 3 PM y 5 PM.",
            },
            {
              id: "96",
              title: "Ubicación de Sorteo",
              body: "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "97",
              title: "Cantidad de Entradas Permitidas por Persona",
              body: "Los jugadores pueden acumular entradas ilimitadas.",
            },
            {
              id: "98",
              title: "Tipo de Premio y Cantidades",
              body: "Si están presentes, los ganadores podrán reclamar $2,500 en efectivo a las 1 PM, 3 PM y 5 PM.",
            },
            {
              id: "99",
              title: "Reglas de “No Asistencia”",
              body: "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "910",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body: "La tómbola estará disponible el 5 de julio a las 9 AM. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Lazy Sundays”. La tómbola se vaciará después del último sorteo del día. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "911",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body: "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 21 años o más para calificar. Si se declara descalificado, es final. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la administración. Consulte a un asistente del Player’s Club para obtener más información. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 10,
        title: "Bonanza de Cumpleaños",
        img: cardImage11,
        oneLiner: "One liner copy",
        rules: {
          subSections: [
            { id: "100", title: "Día", body: "lunes, 26 de julio de 2021" },
            { id: "101", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "102",
              title: "Reglas",
              body: "El lunes, 26 de julio entre las 6 PM y 10 PM, miembros que cumplan años en julio y estén jugando ativamente con sus tarjetas Miccosukee One serán elegibles para la oportunidad de ganar $25-$100 en Free Play. Hasta $1,200 podrían ser otorgados en 8 oportunidades.",
            },
            {
              id: "103",
              title: "PARA CALIFICAR",
              body: "Miembros de la tarjeta Miccosukee One deben cumplir años en julio y estar jugando activamente en las máquinas con su tarjeta Miccosukee One.",
            },
            {
              id: "104",
              title: "Fecha y Horario de Sorteos",
              body: "26 de julio de 6 PM – 10 PM",
            },
            {
              id: "105",
              title: "Ganadores",
              body: "Miembros de la tarjeta Miccosukee One que activen el premio Ricochet mientras juegan y varios ganadores al azar que estén jugando con su tarjeta Miccosukee One cuando el premio sea activado. Todos los jugadores deberán cumplir años en julio para ser elegibles para ganar.",
            },
            {
              id: "106",
              title: "Ubicacion de Promoción",
              body: "Máquinas de juego que acepten la tarjeta Miccosukee One.",
            },
            {
              id: "107",
              title: "Tipo de Premio y Cantidades",
              body: "El jugador que active el premio ricochet recibirá $100 y otros dos (2) ganadores recibirán $25 en cada oportunidad. Un total de $1,200 en Free Play será otorgado durante 8 oportunidades. Hasta 24 ganadores recibirán premios.",
            },
            {
              id: "108",
              title: "Restricciones de Premio",
              body: "Los jugadores pueden ganar múltiples veces.",
            },
            {
              id: "109",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body: "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Los premios no son transferibles. Free Play es válido durante 30 días y sólo en máquinas seleccionadas. Deben tener 21 años o más para calificar. Si se declara descalificado, es final. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la administración. Consulte a un asistente del Player’s Club para más información. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 11,
        title: "25K Para Jugar",
        img: cardImage12,
        oneLiner: "One liner copy",
        rules: {
          subSections: [
            { id: "110", title: "Día", body: "sábado, 31 de julio de 2021" },
            { id: "111", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "112",
              title: "Reglas",
              body: "¡¡¡Tenemos 25K para ayudarte a jugar!!! El 31 de julio, tendremos 5 sorteos comenzando a las 5 PM dónde llamaremos a miembros de Miccosukee One cada dos horas para ganar $5,000.",
            },
            {
              id: "113",
              title: "PARA CALIFICAR",
              body: "Gane 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de julio a las 9 AM hasta el 1 de agosto a las 12:45 AM. Esta promoción incluirá un multiplicador para entradas de bono cada viernes y sábado que los jugadores puedan ganar entradas. Los jugadores recibirán una entrada de bono por cada 200 puntos que acumulen de 9 AM – hora de cierre hasta el 1 de agosto a las 12:45 AM.",
            },
            {
              id: "114",
              title: "Fecha y Horarios de Sorteos",
              body: "Los sorteos serán a las 5 PM, 7 PM, 9 PM, 11 PM el 31 de julio y a las 1 AM el 1 de agosto.",
            },
            {
              id: "115",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador por sorteo.",
            },
            {
              id: "116",
              title: "Ubicación de Sorteo",
              body: "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "117",
              title: "Cantidad de Entradas Permitidas por Persona",
              body: "Los jugadores pueden acumular entradas ilimitadas.",
            },
            {
              id: "118",
              title: "Tipo de Premio y Cantidades",
              body: "Si están presentes, los ganadores podrán reclamar $5,000 en efectivo a las 5 PM, 7 PM, 9 PM, 11 PM y 1 AM.",
            },
            {
              id: "119",
              title: "Reglas de “No Asistencia”",
              body: "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "1110",
              title: "Reglas de Entradas de Bono",
              body: "El 2, 3, 9, 10, 16, 17, 23, 24 y 30 de julio de 9 AM – hora de cierre y el 31 de julio de 9 AM hasta las 12:45 AM del 1 de agosto, los jugadores podrán ganar una entrada de bono por cada 200 puntos que acumulen. Los jugadores deben recolectar sus entradas de bono el mismo día y durante los horarios establecidos. Cualquier entrada que no se reclame durante el tiempo estipulado se perderá y no se podrá utilizar en otra fecha.",
            },
            {
              id: "1111",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body: "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "1112",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body: "La tómbola estará disponible el 1 de julio a las 9 AM. La tómbola se vaciará después del último sorteo de la promoción. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “25K To Play”. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir.",
            },
            {
              id: "1113",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body: "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 21 años o más para calificar. Si se declara descalificado, es final. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la administración. Consulte a un asistente del Player’s Club para obtener más información. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que el estatus haya sido rescindido.",
            },
          ],
        },
      },
    ];
  }
};
