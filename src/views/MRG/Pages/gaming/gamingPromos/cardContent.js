// Images
import cardImage1 from "assets/media/img/mrg/monthly_promos/NewMemberBonus_Logo-768x768.png";
import cardImage2 from "assets/media/img/mrg/monthly_promos/MiccosukeeOneStatusMatch_Logo-768x768.png";
import cardImage3 from "assets/media/img/mrg/monthly_promos/january/NewYearNewMoney_Logo.png";
import cardImage4 from "assets/media/img/mrg/monthly_promos/january/CoolTechHotSeat_Logo.png";
import cardImage5 from "assets/media/img/mrg/monthly_promos/GiftGiveaway_Logo.png";
import cardImage6 from "assets/media/img/mrg/monthly_promos/january/WinterWonderlandWheel_Logo.png";
import cardImage7 from "assets/media/img/mrg/monthly_promos/VIPGiveawayBlack_Logo-768x768.png";
import cardImage8 from "assets/media/img/mrg/monthly_promos/RedCardRicochet_Logo-768x768.png";
import cardImage9 from "assets/media/img/mrg/monthly_promos/VIPGiveaway_White-768x768.png";
import cardImage10 from "assets/media/img/mrg/monthly_promos/january/HolidayHotSeat_Logo.png";
import cardImage11 from "assets/media/img/mrg/monthly_promos/january/BeatTheBomb_Logo.png";
import cardImage12 from "assets/media/img/mrg/monthly_promos/BirthdayBonanza_Logo-768x768.png";
import cardImage13 from "assets/media/img/mrg/monthly_promos/NewMembers_ReferralsWinBig_Logo.png";

// NEED A SCHEDULER SOLUTION AS WELL

export const cardContent = (language) => {
  if (language) {
    return [
      {
        id: 0,
        title: "New Member Bonus",
        img: cardImage1,
        oneLiner: "New Members receive $25 Free Play!",
        rules: {
          subSections: [
            { id: "00", title: "Day", body: "All month of January" },
            { id: "01", title: "Promotion Type", body: "Play and Win" },
            {
              id: "02",
              title: "Rules",
              body:
                "New members who sign up for a Miccosukee One Card will automatically receive $25 Free Play.",
            },
            {
              id: "03",
              title: "TO QUALIFY",
              body:
                "Must be a new member to the Miccosukee One program and provide address plus email and/or phone.",
            },
            {
              id: "04",
              title: "Dates and Times",
              body: "All month of January",
            },
            {
              id: "05",
              title: "Winners",
              body:
                "Miccosukee One Card Members who meet the sign up requirements.",
            },
            {
              id: "06",
              title: "Promotion Location",
              body:
                "Promotion will take place at any gaming machine that accepts Miccosukee One player cards. Free Play credits will be downloaded to Miccosukee One card account upon enrollment at the Miccosukee One Player's Club.",
            },
            {
              id: "07",
              title: "Prize Type and Amounts",
              body: "New members will be awarded $25 in Free Play.",
            },
            {
              id: "08",
              title: "Prize Restrictions",
              body:
                "Players can earn the $25 prize once when they sign up as a new member.",
            },
            {
              id: "09",
              title: "General Rule Disclaimers",
              body:
                "Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid until 1:59 AM on February 1 and on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 1,
        title: "Miccosukee One Status Match",
        img: cardImage2,
        oneLiner: "Upgraded status PLUS a Free Play Bonus!",
        rules: {
          subSections: [
            { id: "10", title: "Day", body: "All month of January" },
            { id: "11", title: "Promotion Type", body: "Tier/Status Match" },
            {
              id: "12",
              title: "Rules",
              body:
                "Players who join or return to the Miccosukee One program and present an upgraded Player’s Club card and/or verified status from a competing Florida property, will be enrolled automatically as Miccosukee One RED or BLACK tiered players respectively. Program enrollment takes place at the Miccosukee One Player's Club.",
            },
            {
              id: "13",
              title: "Promotion Location",
              body:
                "Promotion will take place at any gaming machine that accepts Miccosukee One player cards. Free Play credits will be downloaded to Miccosukee One card account upon eligible tier match enrollment at the Miccosukee One Player's Club.",
            },
            {
              id: "14",
              title: "TO QUALIFY",
              body:
                "Members joining as a RED tier member will receive a $100 Free Play enrollment bonus. Members joining as a BLACK tier member will receive a $200 Free Play enrollment bonus. Tier match is available to new and inactive players only. Active Miccosukee One members with a player rating within one (1) year are not eligible. Players will retain rank until conclusion of next full earning period. Rated gaming at Miccosukee Resort & Gaming must qualify for tier retention or further upgrade.",
            },
            {
              id: "15",
              title:
                "Players who show the following competitor tiered cards will be upgraded to Miccosukee One Red Card",
              body:
                "[Magic City Casino: Illusionist] [The Casino at Dania Beach: Sapphire] [The Big Easy “Mardi-Gras”: Gold] [Calder: Gold, Black] [Hialeah Park: Silver] [Casino Miami: Silver] [Seminole Properties: Platinum] [Isle Casino Racing Pompano Park: Platinum] [Casino at Gulfstream Park: Place]",
            },
            {
              id: "16",
              title:
                "Players who show the following competitor tiered cards will be upgraded to Miccosukee One Black Card",
              body:
                "[Magic City Casino: Oracle, Wizard] [The Casino at Dania Beach: Diamond, Legend] [The Big Easy “Mardi-Gras”: Black] [Calder: Red, Royal] [Hialeah Park: Black] [Casino Miami: Elite, VIP] [Seminole Properties: Elite, X-Card] [Isle Casino Racing Pompano Park: Diamond, Diamond Plus, Diamond Elite, Seven Stars] [Casino at Gulfstream Park: Win, Triple Crown].",
            },
            {
              id: "17",
              title: "General Rules",
              body:
                "Player name on valid photo ID must match the name on the Players Card. Players must provide address and email and/or phone to be eligible for tier match program. Card and ID must not be damaged, altered or otherwise illegible. Limit one upgrade per person. Offer only available to new players or players inactive over 12 months at Miccosukee Resort and Gaming. New player tier match status must occur upon initial enrollment. No exceptions. Inactive players must visit the Player’s Club within 24 hours of first completed reactivation session to claim tier match status. Must be 18 years of age or older. Must have valid, government issued, gaming approved ID and be physically present with the original ID to register. Free Play valid on select machines only. Players will have until 1:59 AM on February 1 to redeem Free Play credits. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details.",
            },
          ],
        },
      },
      {
        id: 2,
        title: "New Year New Money",
        img: cardImage3,
        oneLiner: "Win $2,022 cash Jan. 1!",
        rules: {
          subSections: [
            { id: "20", title: "Day", body: "Saturday, January 1, 2022" },
            { id: "21", title: "Promotion Type", body: "Drawing" },
            {
              id: "22",
              title: "Rules",
              body:
                "We have 2,022 reasons why you should come hang with us on New Year's Day. On Saturday, January 1 at 7 PM, 8 PM, & 9 PM, one Miccosukee One member will win $2,022 in cash!",
            },
            {
              id: "23",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must earn 100 points on their Miccosukee One card for each drawing ticket. Points can be earned from December 25 at 9 AM to January 1 at 8:45 PM.",
            },
            {
              id: "24",
              title: "Dates and Times",
              body: "January 1 at 7 PM, 8 PM & 9 PM",
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
              title: "Prize Type and Amounts",
              body: "One (1) $2,022 cash prize at 7 PM, 8 PM & 9 PM",
            },
            {
              id: "28",
              title: "Amount of Wins Permitted Per Guest",
              body: "Players can win multiple times.",
            },
            {
              id: "29",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
            },
            {
              id: "210",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available on January 1 at 9 AM. Drum will be emptied after the last drawing. Entries may not be entered into the drum during the drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub's larger perforated portion into the appropriate drum of the respective raffle, \"New Year New Money\". Player must have retained the smaller portion of perforated ticket in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued.",
            },
            {
              id: "211",
              title: "General Rule Disclaimers",
              body:
                "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Free Play valid for 30 days and on select machines only. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 3,
        title: "Cool Tech Hot Seat",
        img: cardImage4,
        oneLiner: "Win cool tech & $100 Free Play Jan. 2, 9 16, 23 & 30!",
        rules: {
          subSections: [
            {
              id: "30",
              title: "Day",
              body: "Sunday, January 2, 9, 16, 23 & 30, 2022",
            },
            { id: "31", title: "Promotion Type", body: "Drawing" },
            {
              id: "32",
              title: "Rules",
              body:
                "Find yourself in the hot seat and we'll give you some cool tech. On Sunday, January 2, 9, 16, 23 & 30 between 1 PM & 5 PM, up to five Miccosukee One members will win a Ring Cam, iPad, Amazon Echo and $100 in Free Play!",
            },
            {
              id: "33",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members actively gaming on their Miccosukee One Player's card",
            },
            {
              id: "34",
              title: "Dates and Times",
              body: "January 2, 9, 16, 23 & 30 from 1 PM - 5 PM",
            },
            {
              id: "35",
              title: "Winners",
              body:
                "Miccosukee One member who triggers the ricochet prize through their play will win.",
            },
            {
              id: "36",
              title: "Drawing Location / Prize Giveaway Location",
              body:
                "Player's Club and gaming machines that accept Player's Club cards",
            },
            {
              id: "37",
              title: "Prize Type and Amounts",
              body:
                "If present, winners will be awarded a Ring Cam (Valued at $79.20), iPad (Valued at $1,060), Amazon Echo (Valued at $89.99) and $100 in Free Play.",
            },
            {
              id: "38",
              title: "Amount of Wins Permitted Per Guest",
              body: "Players can win multiple times.",
            },
            {
              id: "39",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to win non Free Play prizes. Ring Cam, iPad & Amazon Echo will automatically be forfeited if the player fails to independently produce the valid identification and Player’s Card within ten (10) minutes of being announced. No shows will not result in a redraw.",
            },
            {
              id: "310",
              title: "Drawing Rules",
              body:
                "Winners will be issued $100 Free Play automatically on their Miccosukee One Card if selected. Once the SpeedMedia winner is selected, their name will be announced on the gaming floor. Winners will keep the $100 prize regardless if they arrive at the Player's Club within the 10 minutes.",
            },
            {
              id: "311",
              title: "General Rule Disclaimers",
              body:
                "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Free Play valid for 30 days and on select machines only. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Gift Giveaway",
        img: cardImage5,
        oneLiner: "Free bedding set Mondays or Tuesdays in Jan.",
        rules: {
          subSections: [
            {
              id: "40",
              title: "Day",
              body:
                "Monday, January 3, 10, 17 & 24, 2022 & Tuesday, January 4, 11, 18 & 25, 2022",
            },
            { id: "41", title: "Promotion Type", body: "Continuity Program" },
            {
              id: "42",
              title: "Rules/ TO QUALIFY",
              body:
                "Here is a sweet gift to get your year started right! Miccosukee One members may qualify for January continuity gift set invite based upon rated gaming on their Miccosukee One card from 12/01/2020 through 11/30/2021. Player’s Miccosukee One account must be enrolled to receive mail offers from Miccosukee Resort & Gaming. Invited guests join us Mondays or Tuesdays in January to collect a different piece each week. Visit all 4 weeks to collect the whole set!",
            },
            {
              id: "43",
              title:
                "Miccosukee One members who did not receive the monthly invite may qualify for weekly continuity gift items by accumulating 50 points on their Miccosukee One card from 9 AM to 9 PM on distribution days. To redeem, players must visit the Miccosukee One Player's Club for voucher. Player’s Miccosukee One account must be enrolled to receive mail offers from Miccosukee Resort & Gaming. Invited guests join us Mondays or Tuesdays in January to collect a different piece each week. Visit all 4 weeks to collect the whole set!",
              body:
                "Miccosukee One members who did not receive the monthly invite may qualify for weekly continuity gift items by accumulating 50 points on their Miccosukee One card from 9 AM to 9 PM on distribution days. To redeem, players must visit the Miccosukee One Player's Club for voucher. Player’s Miccosukee One account must be enrolled to receive mail offers from Miccosukee Resort & Gaming. Invited guests join us Mondays or Tuesdays in January to collect a different piece each week. Visit all 4 weeks to collect the whole set!",
            },
            {
              id: "44",
              title: "Dates and Times",
              body:
                "Distribution will take place January 3-4, 10-11, 17-18, 24-25 from 12 PM – 10 PM. Play & Earn eligibility based on point accumulation from 9 AM – 9 PM on distribution days.",
            },
            {
              id: "45",
              title: "Number Of Recipients Per Distribution",
              body:
                "Gifts will be available on first come, first serve basis, while supplies last.",
            },
            {
              id: "46",
              title: "Drawing Location / Prize Giveaway Location",
              body:
                "Continuity gifts will be distributed from the Bingo Admissions area. Player’s should visit the Player’s Club after earning 50 points to receive a voucher for their gift.",
            },
            {
              id: "47",
              title: "Prize Type and Amounts",
              body:
                "If present, eligible guests may claim the following gifts in random distribution order [Classic Queen Sheet Set - $44.99] [Classic Two Piece Pillow Set - $39.99] [Classic Queen Comforter - $69.99] [Classic Throw Blanket - $29.99]. Miccosukee One guests who reach the 50 point Play & Earn threshold will be awarded one point [$.01].",
            },
            {
              id: "48",
              title: "Amount of Gifts Permitted Per Guest",
              body: "One weekly gift item per eligible guest",
            },
            {
              id: "49",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to receive gift. Gift will automatically be forfeited if gift voucher, Miccosukee One card, and valid photo ID are not provided during dates and times of corresponding distribution.",
            },
            {
              id: "410",
              title: "General Rule Disclaimers",
              body:
                "One gift item per week. Must have valid, government issued, gaming approved ID to claim gift. Promotions are only available for eligible Miccosukee One members. Offers are non-transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Winter Wonderland Wheel",
        img: cardImage6,
        oneLiner: "Up to $5,000 cash up for grabs Jan. 5, 12, 19 & 26!",
        rules: {
          subSections: [
            {
              id: "50",
              title: "Day",
              body: "Wednesday, January 5, 12, 19 & 26, 2022",
            },
            { id: "51", title: "Promotion Type", body: "Drawing" },
            {
              id: "52",
              title: "Rules",
              body:
                "Chill out and make some cash on our Winter Wonderland Wheel! On Wednesday, January 5, 12, 19 & 26 at 7 PM, 8 PM & 9 PM, one Miccosukee One member will win up to $5,000 in cash!",
            },
            {
              id: "53",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must earn 100 points on their Miccosukee One card for each drawing ticket. Points can be earned from January 1 at 9 AM to January 26 at 8:45 PM.",
            },
            {
              id: "54",
              title: "Dates and Times",
              body: "January 5, 12, 19 & 26 at 7 PM, 8 PM & 9 PM.",
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
              body: "Cash prizes available to be won are $2,000 - $5,000.",
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
              title: "Game Rules",
              body:
                "If present, winners will spin a prize wheel. A total of 12 prize slots will be on the prize wheel. The prize slots will be worth the following amounts [5 - $2,000] [5 - $3,000] [1 - $4,000] [1 - $5,000]. Wheel must make one full revolution for spin to be eligible for a prize.",
            },
            {
              id: "512",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available January 1. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Winter Wonderland Wheel”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "513",
              title: "General Rule Disclaimers",
              body:
                "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 6,
        title: "Black Card VIP Giveaway",
        img: cardImage7,
        oneLiner: "Black Cards, win a share of $7,500 cash Jan. 6 & 20!",
        rules: {
          subSections: [
            { id: "60", title: "Day", body: "Thursday, January 6 & 20, 2022" },
            { id: "61", title: "Promotion Type", body: "Drawing" },
            {
              id: "62",
              title: "Rules",
              body:
                "A new year deserves new money!! On Thursday, January 6 & 20 at 7 PM, 8 PM & 9 PM, one Miccosukee One Black Tier member will win their share of $7,500 in cash!",
            },
            {
              id: "63",
              title: "TO QUALIFY",
              body:
                "Miccosukee One Black Tier members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from January 1 at 9 AM to January 20 at 8:45 PM.",
            },
            {
              id: "64",
              title: "Dates and Times",
              body: "January 6 & 20 at 7 PM, 8 PM & 9 PM",
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
              body: "One (1) $2,500 cash prize at 7 PM, 8 PM & 9 PM",
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
                "Barrel will be available January 1- 6 for the 1/6 drawing and January 14 - 20 for 1/20 drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Black Card VIP Giveaway”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "612",
              title: "General Rule Disclaimers",
              body:
                "Eligibility for tiered promotion based on January 1 status. Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 7,
        title: "Red Card VIP Giveaway",
        img: cardImage8,
        oneLiner:
          "Feeling lucky Red Card? Win up to $150 Free Play Jan. 6 & 20!",
        rules: {
          subSections: [
            { id: "70", title: "Day", body: "Thursday, January 6 & 20, 2022" },
            { id: "71", title: "Promotion Type", body: "Ricochet Rewards" },
            {
              id: "72",
              title: "Rules",
              body:
                "Calling all Red Tier members! On Thursday, January 6 & 20 between 6 PM and 9 PM, up to 24 Red Tier Miccosukee One members will win $100 or $150 Free Play via ricochet hot seat.",
            },
            {
              id: "73",
              title: "TO QUALIFY",
              body:
                "Miccosukee One Red Tier members actively gaming on their Miccosukee One Player's card",
            },
            {
              id: "74",
              title: "Dates and Times",
              body: "January 6 & 20 from 6 PM - 9 PM",
            },
            {
              id: "75",
              title: "Winners",
              body:
                "Miccosukee One Red Tier member who triggers the ricochet prize through their play will win $150 Free Play and one (1) additional random Red Tier winner playing with their Miccosukee One card at the time the prize is triggered will win $100 Free Play.",
            },
            {
              id: "76",
              title: "Promotion Location",
              body: "Gaming devices that accept Miccosukee One cards",
            },
            {
              id: "77",
              title: "Prize Type and amounts",
              body:
                "The player who triggers the prize and 1 additional random winner in up to twelve (12) occurrences will receive $100 or $150 in Free Play.",
            },
            {
              id: "78",
              title: "Prize Restrictions",
              body: "Players can win multiple times.",
            },
            {
              id: "79",
              title: "General Rule Disclaimers",
              body:
                "Eligibility for tiered promotion based on January 1 status. Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days and on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 8,
        title: "White Card VIP Giveaway",
        img: cardImage9,
        oneLiner: "White Cards, win a share of $15,000 Jan. 13 & 27!",
        rules: {
          subSections: [
            { id: "80", title: "Day", body: "Thursday, January 13 & 27, 2022" },
            { id: "81", title: "Promotion Type", body: "Drawing" },
            {
              id: "82",
              title: "Rules",
              body:
                "A new year deserves new money!! On Thursday, January 13 & 27 at 7 PM, 8 PM & 9 PM, one Miccosukee One White Tier member will win their share of $15,000 in cash!",
            },
            {
              id: "83",
              title: "TO QUALIFY",
              body:
                "Miccosukee One White Tier members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from January 1 at 9 AM to January 27 at 8:45 PM.",
            },
            {
              id: "84",
              title: "Dates and Times",
              body: "January 13 & 27 at 7 PM, 8 PM & 9 PM",
            },
            {
              id: "85",
              title: "Number of Winners Per Drawing",
              body: "One (1) winner at 7 PM, 8 PM & 9 PM",
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
              body: "Players can earn an unlimited amount of entries.",
            },
            {
              id: "88",
              title: "Prize Type and Amounts",
              body: "One (1) $5,000 cash prize at 7 PM, 8 PM & 9 PM",
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
                "Barrel will be available January 7 – 13 for the 1/13 drawing and January 21 – 27 for the 1/27 drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “White Card VIP Giveaway”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "812",
              title: "General Rule Disclaimers",
              body:
                "Eligibility for tiered promotion based on January 1 status. Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 9,
        title: "Holiday Hot Seat",
        img: cardImage10,
        oneLiner: "Ricochet prize of $50 Free Play Jan. 17.",
        rules: {
          subSections: [
            { id: "90", title: "Day", body: "Monday, January 17, 2022" },
            { id: "91", title: "Promotion Type", body: "Ricochet Rewards" },
            {
              id: "92",
              title: "Rules",
              body:
                "Come into MRG on your day off and sit on the Holiday Hot Seat! On January 17 between 5 PM and 9 PM, up to 100 Miccosukee One members will win $50 Free Play via ricochet hot seat.",
            },
            {
              id: "93",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members actively gaming on their Miccosukee One Player's card",
            },
            {
              id: "94",
              title: "Dates and Times",
              body: "January 17 from 5 PM - 9 PM",
            },
            {
              id: "95",
              title: "Winners",
              body:
                "Miccosukee One member who triggers the ricochet prize through their play will win $50 Free Play and one (1) additional random winner playing with their Miccosukee One card at the time the prize is triggered will win $50 Free Play.",
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
                "The player who triggers the prize and 1 additional random winner in up to fifty (50) occurrences will receive $50 in Free Play.",
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
        title: "Beat The Bomb",
        img: cardImage11,
        oneLiner: "Win $1,000 - $18,000 cash Jan. 29!",
        rules: {
          subSections: [
            { id: "100", title: "Day", body: "Saturday, January 29, 2022" },
            { id: "101", title: "Promotion Type", body: "Drawing" },
            {
              id: "102",
              title: "Rules",
              body:
                "Tick Tock, when will you stop?? On January 29 we'll have drawings at 7 PM, 9 PM & 11 PM where Miccosukee One members will be called for a chance to win $1,000 to $18,000 in cash. Plus, if our three winners don't win a total of $35,000, we'll give away the difference at midnight.",
            },
            {
              id: "103",
              title: "TO QUALIFY",
              body:
                "Earn 200 points on your Miccosukee One card for each drawing ticket. Points can be earned between January 1 at 9 AM and January 29 at 11:45 PM. This promotion will feature a bonus entry multiplier every Friday and Saturday that players are allowed to earn entries. Guests will receive one bonus entry for every 200 points they earn from 9 AM – close and through 11:45 PM on January 29.",
            },
            {
              id: "104",
              title: "Dates & Times",
              body:
                "Drawings will occur at 7 PM, 9 PM & 11 PM on January 29 & 11:59 PM if necessary.",
            },
            {
              id: "105",
              title: "Number of Winners Per Drawing",
              body: "One (1) winner will be drawn per drawing.",
            },
            {
              id: "106",
              title: "Drawing Location / Prize Giveaway Location",
              body:
                "The drawings and prize payments will occur at the Player's Club.",
            },
            {
              id: "107",
              title: "Max Number of Entries",
              body: "Players can earn an unlimited amount of entries.",
            },
            {
              id: "108",
              title: "Prize Type and Amounts",
              body:
                "If present, winners will play the Beat The Bomb gameshow and can win the following prizes [$1,000] [$2,000] [$4,000] [$6,000] [$8,000] [$10,000] [$12,000] [$14,000] [$16,000] [$18,000]. If the three contestants don't win a combined total of $35,000, we'll give away the difference at 11:59PM.",
            },
            {
              id: "109",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
            },
            {
              id: "1010",
              title: "Game Rules",
              body:
                'The object of the game is to go as far as possible without hitting the "bomb". A total of 10 prize vehicles will be on display. Nine of the prize vehicles will contain a $2,000 prize and one will have a "bomb". All prize vehicles will be shuffled before the game starts. Players will pick one prize vehicle at a time. If they pick the "bomb" the game is over and they will win $1,000. If players pick a $2,000 prize, they can continue to pick more prizes or choose to stop at anytime; prizes are cumulative.',
            },
            {
              id: "1011",
              title: "Bonus Entry Rules",
              body:
                "On January 1, 7, 8, 14, 15, 21, 22, 28 & through 11:45 PM on January 29, players can earn one bonus entry for every 200 points they earn. Players must collect their bonus entries on the same day and within the time frame they have to earn them. Any entries not claimed during the appropriate time frame will be forfeited and cannot be printed at a later date.",
            },
            {
              id: "1012",
              title: "Amount of Wins Permitted Per Guest",
              body:
                "Players can only win once in any single drawing with multiple winners.",
            },
            {
              id: "1013",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available on January 1 at 9 AM. Drum will be emptied after the last drawing. Entries may not be entered into the drum during the drawing. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub's larger perforated portion into the appropriate drum of the respective raffle, \"Beat The Bomb\". Player must have retained the smaller portion of perforated ticket in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued.",
            },
            {
              id: "1014",
              title: "General Rule Disclaimers",
              body:
                "Must have valid, government issued, gaming approved ID to claim the prize. Prizes will be retained for thirty (30) days if valid, government issued, gaming approved ID is not provided at time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final.  Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 11,
        title: "Birthday Bonanza Hot Seats",
        img: cardImage12,
        oneLiner:
          "January b-day guests can win a share of $1,200 Free Play Jan. 31!",
        rules: {
          subSections: [
            { id: "110", title: "Day", body: "Monday, January 31, 2022" },
            { id: "111", title: "Promotion Type", body: "Ricochet Rewards" },
            {
              id: "112",
              title: "Rules",
              body:
                "On Monday, January 31 between the hours of 6 PM and 10 PM, January birthday guests who are actively gaming with their Miccosukee One card will be eligible for a chance to win $25-$100 in Free Play. Up to $1,200 may be awarded in a max of 8 occurrences.",
            },
            {
              id: "113",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must have a birthday during the month of January and be actively playing gaming machines with their Miccosukee One card.",
            },
            {
              id: "114",
              title: "Dates and Times",
              body: "January 31 from 6 PM - 10 PM",
            },
            {
              id: "115",
              title: "Winners",
              body:
                "Miccosukee One members who trigger the ricochet prize through their play and various random winners who are playing with their Miccosukee One card at the time the prize is triggered. All guests must have a January birthday to be eligible to win.",
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
                "The player who triggers the Ricochet will receive $100 and two (2) others will win $25 during each occurrence. A total of $1,200 in Free Play may be awarded in up to 8 occurrences. Up to 24 winners may be awarded prizes.",
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
                "Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play valid for 30 days on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.",
            },
          ],
        },
      },
      {
        id: 12,
        title: "New Members & Referrals Win Big",
        img: cardImage13,
        oneLiner: "New Members & Referrals can win $5K Jan. 31!",
        rules: {
          subSections: [
            { id: "120", title: "Day", body: "Monday, January 31, 2022" },
            { id: "121", title: "Promotion Type", body: "Drawing" },
            {
              id: "122",
              title: "Rules",
              body:
                "New Members and Referrals can win big on Monday, January 31 at 8 PM!! One New Member or Referral from the month of January will be chosen from the drum and will win $5,000 in Cash!!!",
            },
            {
              id: "123",
              title: "TO QUALIFY",
              body:
                "Miccosukee One members must have signed up for a Miccosukee One card or referred a new member during the month of January and be present to win.",
            },
            { id: "124", title: "Dates and Times", body: "January 31 at 8 PM" },
            {
              id: "125",
              title: "Number of Winners Per Drawing",
              body: "One (1) winner will be drawn.",
            },
            {
              id: "126",
              title: "Drawing Location / Prize Giveaway Location",
              body:
                "Drawings and prize giveaways will take place at the Player's Club.",
            },
            {
              id: "127",
              title: "Max Number of Entries",
              body:
                "Every eligible new member will receive one drawing ticket. Referrals will receive one drawing ticket per new member they refer.",
            },
            {
              id: "128",
              title: "Prize Type and Amounts",
              body: "One (1) $5,000 cash prize at 8 PM",
            },
            {
              id: "129",
              title: "Amount of Wins Permitted Per Guest",
              body:
                "Players can only win once in any single drawing with multiple winners.",
            },
            {
              id: "1210",
              title: "No Show Rules / Roll Over Rules",
              body:
                "Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.",
            },
            {
              id: "1211",
              title: "Drawing Ticket / Barrel Rules",
              body:
                "Barrel will be available January 31. Upon receiving drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle \"New Members & Referrals Win Big”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
            },
            {
              id: "1212",
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
        oneLiner: "¡Nuevos Miembros reciben $25 Free Play!",
        rules: {
          subSections: [
            { id: "00", title: "Día", body: "Todo el mes de enero" },
            { id: "01", title: "Tipo de Promoción", body: "Juegue y Gane" },
            {
              id: "02",
              title: "Reglas",
              body:
                "Nuevos miembros que se unan a la tarjeta Miccosuke One recibirán automáticamente $25 Free Play.",
            },
            {
              id: "03",
              title: "PARA CALIFICAR",
              body:
                "Debe ser un nuevo miembro del programa Miccosukee One y proveer dirección, correo electrónico y/o número de teléfono.",
            },
            {
              id: "04",
              title: "Fechas y Horarios",
              body: "Todo el mes de enero",
            },
            {
              id: "05",
              title: "Ganadores",
              body:
                "Miembros de la tarjeta Miccosukee One que cumplan con los requisitos de inscripción",
            },
            {
              id: "06",
              title: "Lugar de Promoción",
              body:
                "La promoción se llevará a cabo en cualquier máquina de juego que acepte las tarjetas Miccosukee One. Los créditos de Free Play serán descargados en la cuenta de Miccosukee One al momento de inscribirse en el Miccosukee One Player’s Club.",
            },
            {
              id: "07",
              title: "Restricciones de Premio",
              body:
                "Los jugadores pueden ganar el premio de $25 una vez al registrarse como nuevo miembro.",
            },
            {
              id: "08",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play es válido hasta las 1:59 AM del 1 de febrero y sólo en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 1,
        title: "Igualamos su Nivel",
        img: cardImage2,
        oneLiner: "¡Promoción de nivel MÁS un bono Free Play!",
        rules: {
          subSections: [
            { id: "10", title: "Día", body: "Todo el mes de enero" },
            { id: "11", title: "Tipo de Promoción", body: "Tier/Status Match" },
            {
              id: "12",
              title: "Reglas",
              body:
                "Jugadores que se unan o regresen al programa Miccosukee One y presenten un Player’s Card de nivel ascendido y/o un estado verificado de una propiedad competidora de Florida, serán inscritos automáticamente como jugadores con niveles ROJO o NEGRO, respectivamente. La inscripción al programa se lleva a cabo en el Miccosukee One Player's Club.",
            },
            {
              id: "13",
              title: "Lugar de Promoción",
              body:
                "La promoción se llevará a cabo en cualquier máquina de juego que acepte tarjetas de jugador Miccosukee One. Los créditos de Free Play se descargarán a la cuenta de la tarjeta Miccosukee One al inscribirse en el programa tier match elegible en el Miccosukee One Player's Club.",
            },
            {
              id: "14",
              title: "PARA CALIFICAR",
              body:
                "Miembros que se unan como jugador de nivel ROJO recibirán un bono de inscripción de $100 Free Play. Miembros que se unan como jugador de nivel NEGRO recibirán un bono de inscripción de $200 Free Play. Tier match sólo está disponible para jugadores nuevos o inactivos. Jugadores activos de Miccosukee One con un nivel de juego de un (1) año no son elegibles. Jugadores conservarán su nivel hasta que culmine el próximo periodo de ganancia total. Juego por niveles en Miccosukee Resort & Gaming debe calificar para retención o promoción de nivel.",
            },
            {
              id: "15",
              title:
                "Jugadores que muestren las siguientes tarjetas de juego por nivel serán promovidos al nivel Rojo de la tarjeta Miccosukee One",
              body:
                "[Magic City Casino: Illusionist] [The Casino at Dania Beach: Sapphire] [The Big Easy “Mardi-Gras”: Gold] [Calder: Gold, Black] [Hialeah Park: Silver] [Casino Miami: Silver] [Seminole Properties: Platinum] [Isle Casino Racing Pompano Park: Platinum] [Casino at Gulfstream Park: Place].",
            },
            {
              id: "16",
              title:
                "Jugadores que muestren las siguientes tarjetas de juego por nivel serán promovidos al nivel Negro de la tarjeta Miccosukee One",
              body:
                "[Magic City Casino: Oracle, Wizard] [The Casino at Dania Beach: Diamond, Legend] [The Big Easy “Mardi-Gras”: Black] [Calder: Red, Royal] [Hialeah Park: Black] [Casino Miami: Elite, VIP] [Seminole Properties: Elite, X-Card] [Isle Casino Racing Pompano Park: Diamond, Diamond Plus, Diamond Elite, Seven Stars] [Casino at Gulfstream Park: Win, Triple Crown].",
            },
            {
              id: "17",
              title: "REGLAS GENERALES",
              body:
                "El nombre que el jugador muestre en su ID debe igualar el nombre que muestre en su Player’s Card. Jugadores deben proveer dirección, correo electrónico y/o número de teléfono para ser elegibles para el programa de tier match. El Player’s Card y la ID no deben estar dañadas, alteradas o ilegibles. Límite una promoción de nivel por persona. Oferta válida sólo para nuevos jugadores o jugadores que lleven 12 meses inactivos en Miccosukee Resort & Gaming. El tier match para nuevos jugadores debe ocurrir en el momento de la inscripción inicial. Sin excepciones. Los jugadores inactivos deben visitar el Player’s Club dentro de las 24 horas posteriores a la primera sesión de reactivación completada para reclamar su tier match. Deben tener 18 años de edad o más para calificar. Los jugadores sólo pueden participar en la promoción una vez. Deben tener identificación válida, emitida por el gobierno, aprobada para jugar, y estar físicamente presente con la identificación original al momento de registrarse. Free Play es válido sólo en máquinas seleccionadas. Jugadores tendrán hasta las 1:59 AM del 1 de febrero para canjear sus créditos de Free Play. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles.",
            },
          ],
        },
      },
      {
        id: 2,
        title: "Año Nuevo Dinero Nuevo",
        img: cardImage3,
        oneLiner: "¡Gane $2,022 en efectivo el 1 de enero!",
        rules: {
          subSections: [
            { id: "20", title: "Día", body: "sábado, 1 de enero de 2022" },
            { id: "21", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "22",
              title: "Reglas",
              body:
                "Tenemos 2,022 razones por las que deben visitarnos el día de Año Nuevo. El sábado, 1 de enero a las 7 PM, 8 PM y 9 PM, ¡un miembro de Miccosukee One ganará $2,022 en efectivo!",
            },
            {
              id: "23",
              title: "PARA CALIFICAR",
              body:
                "Miembros de Miccosukee One deben ganar 100 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 25 de diciembre a las 9 AM hasta el 1 de enero a las 8:45 PM.",
            },
            {
              id: "24",
              title: "Fechas y Horarios",
              body: "1 de enero a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "25",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "26",
              title: "Lugar del Sorteo",
              body:
                "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "27",
              title: "Tipo de Premio y Cantidades",
              body:
                "Un (1) premio en efectivo de $2,022 a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "28",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body: "Los jugadores pueden ganar varias veces.",
            },
            {
              id: "29",
              title: "Reglas de “No Asistencia”",
              body:
                "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "210",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible el 1 de enero a las 9 AM. La tómbola se vaciará después del último sorteo. Los boletos no se podrán depositar en la tómbola durante el sorteo. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “New Year New Money”. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir.",
            },
            {
              id: "211",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 3,
        title: "Silla Caliente Tecnología Genial",
        img: cardImage4,
        oneLiner:
          "¡Gane tecnología y $100 Free Play el 2, 9, 16, 23 y 30 de enero!",
        rules: {
          subSections: [
            {
              id: "30",
              title: "Día",
              body: "domingo, 2, 9, 16, 23 y 30 de enero de 2022",
            },
            { id: "31", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "32",
              title: "Reglas",
              body:
                "Si se sienta en la silla caliente, ganará tecnología genial. El domingo 2, 9, 16, 23 y 30 de enero entre la 1 PM y las 5 PM, ¡hasta cinco miembros de Miccosukee One ganarán una Ring Cam, iPad, Amazon Echo y $100 Free Play!",
            },
            {
              id: "33",
              title: "PARA CALIFICAR",
              body:
                "Miembros de Miccosukee One que estén jugando activamente con su tarjeta Miccosukee One.",
            },
            {
              id: "34",
              title: "Fechas y Horarios",
              body: "2, 9, 16, 23 y 30 de enero de 1 PM – 5 PM",
            },
            {
              id: "35",
              title: "Ganadores",
              body:
                "Un miembro de la tarjeta Miccosukee One que active el premio Ricochet mientras juega ganará el premio.",
            },
            {
              id: "36",
              title: "Lugar del Sorteo",
              body:
                "Player’s Club y máquinas que acepten tarjetas del Player’s Club",
            },
            {
              id: "37",
              title: "Tipo de Premio y Cantidades",
              body:
                "Si están presentes, los ganadores recibirán una Ring Cam (cámara de seguridad/ valorada en $79.20), iPad (valorado en $1,060), Amazon Echo (valorado en $89.99) y $100 Free Play.",
            },
            {
              id: "38",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body: "Los jugadores pueden ganar varias veces.",
            },
            {
              id: "39",
              title: "Reglas de “No Asistencia”",
              body:
                "Deben estar presentes para ganar premios que no sean Free Play. Los premios de Ring Cam (cámara de seguridad), iPad y Amazon Echo se perderán automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado. Si no se presenta, no se volverá a sortear.",
            },
            {
              id: "310",
              title: "Reglas del Sorteo",
              body:
                "Los ganadores seleccionados recibirán $100 Free Play automáticamente en su tarjeta Miccosukee One. Una vez que se seleccione al ganador de SpeedMedia, su nombre se anunciará en la sala de juegos. Los ganadores se quedarán con el premio de $100 aunque no se presenten al Player’s Club dentro de los 10 minutos.",
            },
            {
              id: "311",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 4,
        title: "Entrega de Regalo",
        img: cardImage5,
        oneLiner: "Juego de cama gratis lunes y martes de enero",
        rules: {
          subSections: [
            {
              id: "40",
              title: "Día",
              body:
                "lunes, 3, 10, 17, y 24 Y martes, 4, 11, 18 y 25 de enero de 2022",
            },
            {
              id: "41",
              title: "Tipo de Promoción",
              body: "Programa de Continuidad",
            },
            {
              id: "42",
              title: "Reglas/ PARA CALIFICAR",
              body:
                "Le tenemos un regalo especial para comenzar bien el año. Los miembros de Miccosukee One pueden calificar para el regalo de continuidad de enero según los juegos clasificados en su tarjeta Miccosukee One desde el 1 de diciembre de 2020 hasta el 30 de noviembre de 2021. La cuenta Miccosukee One del jugador también debe incluir una dirección válida de Florida y estar inscrita para recibir ofertas por correo de Miccosukee Resort & Gaming. Los jugadores invitados pueden visitarnos los lunes o martes de enero para recibir una pieza diferente cada semana. ¡Visite las 4 semanas para completar el juego!",
            },
            {
              id: "43",
              title:
                "Los miembros de Miccosukee One que no recibieron la invitación mensual pueden calificar para artículos de regalo de continuidad semanal al acumular 50 puntos en su tarjeta Miccosukee One de 9 AM a 9 PM durante los días de distribución. Para reclamar su regalo, los jugadores deben visitar el Miccosukee One Player's Club para obtener un cupón. La cuenta Miccosukee One del jugador debe estar inscrita para recibir ofertas por correo de Miccosukee Resort & Gaming. Los jugadores pueden visitarnos los lunes o martes de enero para recibir una pieza diferente cada semana. ¡Visite las 4 semanas para completar el juego!",
              body:
                "Los miembros de Miccosukee One que no recibieron la invitación mensual pueden calificar para artículos de regalo de continuidad semanal al acumular 50 puntos en su tarjeta Miccosukee One de 9 AM a 9 PM durante los días de distribución. Para reclamar su regalo, los jugadores deben visitar el Miccosukee One Player's Club para obtener un cupón. La cuenta Miccosukee One del jugador debe estar inscrita para recibir ofertas por correo de Miccosukee Resort & Gaming. Los jugadores pueden visitarnos los lunes o martes de enero para recibir una pieza diferente cada semana. ¡Visite las 4 semanas para completar el juego!",
            },
            {
              id: "44",
              title: "Fechas y Horarios",
              body:
                "La distribución de regalos se llevará a cabo los días 3-4, 10-11, 17-18, 24-25 de enero 12 PM – 10 PM. Elegibilidad para el programa Juegue y Gane está basada en acumulación de puntos de 9 AM – 9 PM durante los días de distribución.",
            },
            {
              id: "45",
              title: "Número de Destinatarios por Distribución",
              body:
                "Los regalos estarán disponibles por orden de llegada, mientras dure la mercancía.",
            },
            {
              id: "46",
              title: "Lugar de Entrega de Regalos",
              body:
                "Los regalos de continuidad se distribuirán desde el área de Admisiones de Bingo. Los jugadores deben visitar el Player’s Club después de ganar sus 50 puntos para recibir un cupón para reclamar su regalo.",
            },
            {
              id: "47",
              title: "Tipo de Premio y Cantidades",
              body:
                "Si están presentes, los invitados pueden reclamar los siguientes regalos distribuidos al azar [Juego Clásico de Sábanas Queen - $44.99] [Juego Clásico de Fundas de Almohada de Dos Piezas - $39.99] [Edredón Clásico Queen - $69.99] [Manta Polar Clásica - $29.99]. Los invitados de Miccosukee One que alcancen a acumular los 50 puntos de Juegue y Gane recibirán un punto [$ .01].",
            },
            {
              id: "48",
              title: "Cantidad de Regalos Permitidos por Invitado",
              body: "Un artículo de regalo semanal por invitado",
            },
            {
              id: "49",
              title: "Reglas de “No Asistencia”",
              body:
                "Debe estar presente para recibir el regalo. El regalo se perderá automáticamente si el jugador no presenta el cupón de regalo con su tarjeta Miccosukee One y una identificación válida durante las fechas y horarios de distribución establecidos.",
            },
            {
              id: "410",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Un regalo por semana. Para reclamar el regalo, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 5,
        title: "Ruleta de Fantasía Invernal",
        img: cardImage6,
        oneLiner: "¡Hasta $5,000 están en juego el 5, 12, 19 y 26 de enero!",
        rules: {
          subSections: [
            {
              id: "50",
              title: "Día",
              body: "miércoles, 5, 12, 19 y 26 de enero de 2022",
            },
            { id: "51", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "52",
              title: "Reglas",
              body:
                "¡Diviértase y gane dinero en nuestra Ruleta de Fantasía Invernal (Winter Wonderland Wheel)! El miércoles 5, 12, 19 y 26 de enero a las 7 PM, 8 PM y 9 PM, ¡un miembro de Miccosukee One ganará hasta $5,000 en efectivo!",
            },
            {
              id: "53",
              title: "PARA CALIFICAR",
              body:
                "Miembros de Miccosukee One deberán ganar 100 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de enero a las 9 AM hasta el 26 de enero a las 8:45 PM.",
            },
            {
              id: "54",
              title: "Fechas y Horarios",
              body: "5, 12, 19 y 26 de enero a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "55",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "56",
              title: "Lugar del Sorteo",
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
                "Los premios en efectivo que se pueden ganar son de $2,000 - $5,000.",
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
              title: "Reglas del Juego",
              body:
                "Si están presentes, los ganadores girarán una ruleta de premios. Un total de 12 posiciones estarán disponibles en la ruleta de premios. Los premios valdrán las siguientes cantidades [5 - $2,000] [5 - $3,000] [1 - $4,000] [1 - $5,000]. La ruleta debe hacer un giro completo para ser elegible para un premio.",
            },
            {
              id: "512",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible el 1 de enero. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Winter Wonderland Wheel”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no se podrán depositar en la tómbola durante el sorteo.",
            },
            {
              id: "513",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 6,
        title: "Sorteo VIP para Tarjeta Negra",
        img: cardImage7,
        oneLiner:
          "Tarjetas Negras, ¡ganen su parte de $7,500 en efectivo el 6 y 20 de enero!",
        rules: {
          subSections: [
            { id: "60", title: "Día", body: "jueves, 6 y 20 de enero de 2022" },
            { id: "61", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "62",
              title: "Reglas",
              body:
                "¡¡Un año nuevo merece más dinero!! El jueves 6 y 20 de enero a las 7 PM, 8 PM y 9 PM, ¡un miembro de la tarjeta Miccosukee One de nivel Negro ganará su parte de $7,500 en efectivo!",
            },
            {
              id: "63",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One de nivel Negro deberán ganar 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de enero a las 9 AM hasta el 20 de enero a las 8:45 PM.",
            },
            {
              id: "64",
              title: "Fechas y Horarios",
              body: "6 y 20 de enero a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "65",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "66",
              title: "Lugar del Sorteo",
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
                "Un (1) premio en efectivo de $2,500 a las 7 PM, 8 PM y 9 PM",
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
                "La tómbola estará disponible del 1 – 6 de enero para el sorteo del 6 de enero, y del 14 – 20 de enero para el sorteo del 20 de enero. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Black Card VIP Giveaway”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no se podrán depositar en la tómbola durante el sorteo.",
            },
            {
              id: "612",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Elegibilidad para promoción por niveles basada en el estado de juego del 1 de enero. Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 7,
        title: "Sorteo VIP para Tarjeta Roja",
        img: cardImage8,
        oneLiner:
          "¿Está de suerte, Tarjeta Roja? ¡Gane hasta $150 Free Play el 6 y 20 de enero!",
        rules: {
          subSections: [
            { id: "70", title: "Día", body: "jueves, 6 y 20 de enero de 2022" },
            { id: "71", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "72",
              title: "Reglas",
              body:
                "¡Llamando a todos los miembros de nivel Rojo! El jueves, 6 y 20 de enero entre las 6 PM y 9 PM, hasta 24 miembros de la tarjeta Miccosukee One de nivel Rojo ganarán $100 o $150 Free Play vía Ricochet hot seat.",
            },
            {
              id: "73",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One de nivel ROJO que están jugando activamente con su tarjeta Miccosuke One.",
            },
            {
              id: "74",
              title: "Fecha y Horarios de Sorteos",
              body: "6 y 20 de enero de 6 PM – 9 PM",
            },
            {
              id: "75",
              title: "Ganadores",
              body:
                "Un miembro de la tarjeta Miccosukee One de nivel Rojo que active el premio Ricochet mientras juega ganará $150 Free Play y un (1) jugador adicional de nivel Rojo que está jugando con su tarjeta Miccosukee One y que sea elegido al azar cuando el premio sea activado ganará $100 Free Play.",
            },
            {
              id: "76",
              title: "Lugar de Promoción",
              body: "Máquinas de juego que acepten la tarjeta Miccosukee One",
            },
            {
              id: "77",
              title: "Tipo de Premio y Cantidades",
              body:
                "El jugador que active el premio y un (1) ganador al azar durante una de hasta doce (12) oportunidades recibirán $100 o $150 Free Play.",
            },
            {
              id: "78",
              title: "Restricciones de Premio",
              body: "Los jugadores pueden ganar varias veces.",
            },
            {
              id: "79",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Elegibilidad para promoción por niveles basada en el estado de juego del 1 de enero. Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play válido por treinta días y en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 8,
        title: "Sorteo VIP para Tarjeta Blanca",
        img: cardImage9,
        oneLiner:
          "Tarjetas Blancas, ¡ganen su parte de $15,000 en efectivo el 13 y 27 de enero!",
        rules: {
          subSections: [
            {
              id: "80",
              title: "Día",
              body: "jueves, 13 y 27 de enero de 2022",
            },
            { id: "81", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "82",
              title: "Reglas",
              body:
                "¡¡Un año nuevo merece más dinero!! El jueves 13 y 27 de enero a las 7 PM, 8 PM y 9 PM, ¡un miembro de la tarjeta Miccosukee One de nivel Blanco ganará su parte de $15,000 en efectivo!",
            },
            {
              id: "83",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One de nivel Blanco deberán ganar 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de enero a las 9 AM hasta el 27 de enero a las 8:45 PM.",
            },
            {
              id: "84",
              title: "Fecha y Horario de Sorteos",
              body: "13 y 27 de enero a las 7 PM, 8 PM y 9 PM",
            },
            {
              id: "85",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido a las 7 PM, 8 PM y 9 PM.",
            },
            {
              id: "86",
              title: "Lugar del Sorteo",
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
                "Un (1) premio en efectivo de $5,000 a las 7 PM, 8 PM y 9 PM",
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
                "La tómbola estará disponible del 7 – 13 de enero para el sorteo del 13 de enero, y del 21 – 27 de enero para el sorteo del 27 de enero. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “White Card VIP Giveaway”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no se podrán depositar en la tómbola durante el sorteo.",
            },
            {
              id: "812",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Elegibilidad para promoción por niveles basada en el estado de juego del 1 de enero. Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 9,
        title: "Silla Caliente Festiva",
        img: cardImage10,
        oneLiner: "Premio Ricochet de $50 Free Play el 17 de enero.",
        rules: {
          subSections: [
            { id: "90", title: "Día", body: "lunes, 17 de enero de 2022" },
            { id: "91", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "92",
              title: "Reglas",
              body:
                "¡Venga a MRG en su día libre y siéntese en la Silla Caliente Festiva (Holiday Hot Seat)! El 17 de enero entre las 5 PM Y las 9 PM, hasta 100 miembros de Miccosukee One ganarán $50 Free Play vía ricochet hot seat.",
            },
            {
              id: "93",
              title: "PARA CALIFICAR",
              body:
                "Miembros de Miccosukee One que estén jugando activamente con su tarjeta Miccosukee One.",
            },
            {
              id: "94",
              title: "Fechas y Horarios",
              body: "17 de enero de 5 PM – 9 PM",
            },
            {
              id: "95",
              title: "Ganadores",
              body:
                "Un miembro de la tarjeta Miccosukee One que active el premio Ricochet mientras juega ganará $50 Free Play y un (1) jugador adicional que esté jugando con su tarjeta Miccosukee One será elegido al azar cuando el premio sea activado para ganar $50 Free Play.",
            },
            {
              id: "96",
              title: "Lugar de Promoción",
              body: "Máquinas de juego que acepten la tarjeta Miccosukee One",
            },
            {
              id: "97",
              title: "Tipo de Premio y Cantidades",
              body:
                "El jugador que active el premio y 1 ganador al azar durante una de hasta cincuenta (50) oportunidades recibirán $50 Free Play.",
            },
            {
              id: "98",
              title: "Restricciones de Premio",
              body: "Los jugadores pueden ganar varias veces.",
            },
            {
              id: "99",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play válido por treinta días y en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 10,
        title: "Gánele a la Bomba",
        img: cardImage11,
        oneLiner: "¡Gane $1,000 - $18,000 en efectivo el 29 de enero!",
        rules: {
          subSections: [
            { id: "100", title: "Día", body: "sábado, 29 de enero de 2022" },
            { id: "101", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "102",
              title: "Reglas",
              body:
                "Tic ??Tac, ¿cuándo se detendrá? El 29 de enero tendremos sorteos a las 7 PM, 9 PM y 11 PM donde llamaremos a los miembros de Miccosukee One para tener la oportunidad de ganar entre $1,000 y $18,000 en efectivo. Además, si nuestros tres ganadores no se llevan un total de $35,000, regalaremos la diferencia a la medianoche.",
            },
            {
              id: "103",
              title: "PARA CALIFICAR",
              body:
                "Gane 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar entre el 1 de enero a las 9 AM hasta el 29 de enero a las 11:45 PM. Esta promoción contará con un multiplicador de entradas de bono cada viernes y sábado que los jugadores puedan ganar entradas. Los invitados recibirán una entrada de bono por cada 200 puntos que ganen desde las 9 AM hasta la hora de cierre y hasta las 11:45 PM del 29 de enero.",
            },
            {
              id: "104",
              title: "Fechas y Horarios",
              body:
                "Los sorteos serán a las 7 PM, 9 PM y 11 PM el 29 de enero, y a las 11:59 PM de ser necesario.",
            },
            {
              id: "105",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido por sorteo.",
            },
            {
              id: "106",
              title: "Lugar del Sorteo",
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
              body:
                "Si están presentes, los ganadores jugarán Gánele a la Bomba (Beat The Bomb) y podrán ganar los siguientes premios [$1,000] [$2,000] [$4,000] [$6,000] [$8,000] [$10,000] [$12,000] [$14,000] [$16,000] [$18,000]. Si los tres concursantes no ganan un total combinado de $35,000, regalaremos la diferencia a las 11:59 PM.",
            },
            {
              id: "109",
              title: "Reglas de “No Asistencia”",
              body:
                "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "1010",
              title: "Reglas del Juego",
              body:
                'El objetivo del juego es llegar lo más lejos posible sin golpear la "bomba". Se exhibirán un total de 10 vehículos premiados. Nueve de los vehículos premiados contendrán un premio de $2,000 y uno tendrá una "bomba". Todos los vehículos premiados se barajarán antes de que comience el juego. Los jugadores elegirán un vehículo de premio a la vez. Si eligen la "bomba", el juego se acaba y ganarán $1,000. Si los jugadores eligen un premio de $2,000, pueden continuar eligiendo más premios o elegir detenerse en cualquier momento, los premios son acumulativos.',
            },
            {
              id: "1011",
              title: "Reglas para Entradas de Bono",
              body:
                "El 1, 7, 8, 14, 15, 21, 22, 28 de enero y hasta las 11:45 PM del 29 de enero, los jugadores pueden ganar una entrada de bono por cada 200 puntos que acumulen en su tarjeta. Los jugadores deben recoger sus entradas de bono el mismo día y dentro del plazo que tienen para ganarlas. Cualquier entrada no reclamada durante el periodo de tiempo establecido se perderá y no se podrá emitir en una fecha posterior.",
            },
            {
              id: "1012",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body:
                "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "1013",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible el 1 de enero a las 9 AM. La tómbola se vaciará después del último sorteo de la noche. Los boletos no se podrán depositar en la tómbola durante el sorteo. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Beat The Bomb”. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir.",
            },
            {
              id: "1014",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 11,
        title: "Bonanza de Cumpleaños",
        img: cardImage12,
        oneLiner:
          "¡Cumpleañeros de enero pueden ganar una parte de $1,200 Free Play el 31 de enero!",
        rules: {
          subSections: [
            { id: "110", title: "Día", body: "lunes, 31 de enero de 2022" },
            { id: "111", title: "Tipo de Promoción", body: "Premios Ricochet" },
            {
              id: "112",
              title: "Reglas",
              body:
                "El lunes, 31 de enero entre las 6 PM y 10 PM, miembros que cumplan años en enero y estén jugando ativamente con sus tarjetas Miccosukee One serán elegibles para la oportunidad de ganar $25-$100 Free Play. Hasta $1,200 podrían ser otorgados en 8 oportunidades.",
            },
            {
              id: "113",
              title: "PARA CALIFICAR",
              body:
                "Miembros de la tarjeta Miccosukee One deben cumplir años en enero y estar jugando activamente en las máquinas con su tarjeta Miccosukee One.",
            },
            {
              id: "114",
              title: "Fecha y Horarios",
              body: "31 de enero de 6 PM – 10 PM",
            },
            {
              id: "115",
              title: "Ganadores",
              body:
                "Miembros de la tarjeta Miccosukee One que activen el premio Ricochet mientras juegan y varios ganadores al azar que estén jugando con su tarjeta Miccosukee One cuando el premio sea activado. Todos los jugadores deberán cumplir años en enero para ser elegibles para ganar.",
            },
            {
              id: "116",
              title: "Ubicacion de Promoción",
              body: "Máquinas de juego que acepten la tarjeta Miccosukee One",
            },
            {
              id: "117",
              title: "Tipo de Premio y Cantidades",
              body:
                "El jugador que active el premio Ricochet recibirá $100 y otros dos (2) ganadores recibirán $25 en cada oportunidad. Un total de $1,200 Free Play será otorgado durante 8 oportunidades. Hasta 24 ganadores recibirán premios.",
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
                "Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Los premios no son transferibles. Free Play es válido durante 30 días y sólo en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. El mal funcionamiento anula todas las jugadas y los pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
      {
        id: 12,
        title: "Nuevos Miembros y Referidos Ganan en Grande",
        img: cardImage13,
        oneLiner:
          "¡Nuevos Miembros y Referidos pueden ganar $5K el 31 de enero!",
        rules: {
          subSections: [
            { id: "120", title: "Día", body: "lunes, 31 de enero de 2022" },
            { id: "121", title: "Tipo de Promoción", body: "Sorteo" },
            {
              id: "122",
              title: "Reglas",
              body:
                "¡¡Nuevos miembros y miembros que hayan referido a un amigo a Miccosukee One pueden ganar en grande el lunes, 31 de enero a las 8 PM!! ¡¡¡Un nuevo miembro o un miembro que haya referido a un amigo en el mes de enero será elegido de la tómbola para ganar $5,000 en efectivo!!!",
            },
            {
              id: "123",
              title: "PARA CALIFICAR",
              body:
                "Miembros de Miccosukee One deben haberse inscrito o deben haber referido a un amigo a Miccosukee One durante el mes de enero y deben estar presentes para ganar.",
            },
            {
              id: "124",
              title: "Fecha y Horario de Sorteo",
              body: "31 de enero a las 8 PM",
            },
            {
              id: "125",
              title: "Cantidad de Ganadores por Sorteo",
              body: "Un (1) ganador será elegido durante el sorteo.",
            },
            {
              id: "126",
              title: "Ubicación de Sorteo",
              body:
                "Los sorteos y la entrega de premios serán en el Player’s Club.",
            },
            {
              id: "127",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body:
                "Cada nuevo miembro elegible recibirá un boleto de sorteo. Miembros recibirán un boleto de sorteo por cada nuevo miembro que refieran.",
            },
            {
              id: "128",
              title: "Tipo de Premio y Cantidades",
              body: "Un (1) premio en efectivo de $5,000 a las 8 PM",
            },
            {
              id: "129",
              title: "Cantidad de Ganancias Permitidas por Persona",
              body:
                "Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.",
            },
            {
              id: "1210",
              title: "Reglas de “No Asistencia”",
              body:
                "Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.",
            },
            {
              id: "1211",
              title: "Reglas de Boletos de Sorteo / Tómbola",
              body:
                "La tómbola estará disponible el 31 de enero. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “New Members & Referrals Win Big”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.",
            },
            {
              id: "1212",
              title: "Reglas Generales / Relevo de Responsabilidad",
              body:
                "Para reclamar el premio, deben tener identificación válida emitida por el gobierno y aprobada para jugar. Los premios serán retenidos por 30 días si una identificación válida emitida por el gobierno no se provee al momento de ganar. Cualquier premio retenido que no se reclame en treinta (30) días se perderá. Promociones están disponibles sólo para miembros de la tarjeta Miccosukee One. Puntos acumulados en cualquier promoción de Bonus Point Multiplier no aplican para boletos de sorteo adicionales o para avanzar de nivel en la tarjeta. Premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier individuo que se haya autoexcluido o haya traspasado por Miccosukee Resort & Gaming no podrá inscribirse o participar en el programa de Miccosukee One sin mostrar documentación que establezca que dicho estado haya sido rescindido.",
            },
          ],
        },
      },
    ];
  }
};
