// Images
import cardImage1 from 'assets/media/img/mrg/monthly_promos/0_recurring/NewMembersBonus_Logo.png';
import cardImage2 from 'assets/media/img/mrg/monthly_promos/7_july/VIPEnrollmentBonus_Logo.png';
import cardImage3 from 'assets/media/img/mrg/monthly_promos/7_july/FreedomWeekend_Logo.png';
import cardImage4 from 'assets/media/img/mrg/monthly_promos/7_july/FreedomWeekend_Logo.png';
import cardImage5 from 'assets/media/img/mrg/monthly_promos/7_july/BBQFreePlayBucks_Logo.png';
import cardImage6 from 'assets/media/img/mrg/monthly_promos/7_july/IndependenceDayDollars_Logo.png';
import cardImage7 from 'assets/media/img/mrg/monthly_promos/7_july/4thOfJulyVIPBucks_Logo.png';
import cardImage8 from 'assets/media/img/mrg/monthly_promos/0_recurring/GiftGiveaway_Logo.png';
import cardImage9 from 'assets/media/img/mrg/monthly_promos/7_july/Grillin_Chillin_Logo.png';
import cardImage10 from 'assets/media/img/mrg/monthly_promos/0_recurring/LunchBreakHotSeat_Logo.png';
import cardImage11 from 'assets/media/img/mrg/monthly_promos/0_recurring/VIPGiveawayBlackCard_Logo.png';
import cardImage12 from 'assets/media/img/mrg/monthly_promos/0_recurring/RedCardVIPRicochet_Logo.png';
import cardImage13 from 'assets/media/img/mrg/monthly_promos/0_recurring/VIPGiveawayWhiteCard_Logo.png';
import cardImage14 from 'assets/media/img/mrg/monthly_promos/7_july/PoolPartyPayouts_Logo.png';
import cardImage15 from 'assets/media/img/mrg/monthly_promos/0_recurring/BirthdayBonanzaHotSeats_Logo.png';
import cardImage16 from 'assets/media/img/mrg/monthly_promos/0_recurring/NewMembers_ReferralsWinBig_Logo.png';

export const july = {
  month: 'july',
  monthEs: 'julio',
  calendarLink:
    'https://mapa-media.s3.amazonaws.com/mrg_monthly_promos/july_en.pdf',
  calendarLinkEs:
    'https://mapa-media.s3.amazonaws.com/mrg_monthly_promos/july_sp.pdf',
  data: [
    {
      id: 0,
      title: 'New Member Bonus',
      img: cardImage1,
      oneLiner: '$25 Free Play + Qualify to Win $5K on July 31',
      rules: {
        subSections: [
          { id: '00', title: 'Day', body: 'All month of July' },
          { id: '01', title: 'Promotion Type', body: 'Play and Win' },
          {
            id: '02',
            title: 'Rules',
            body:
              'New members who sign up for a Miccosukee One Card will automatically receive $25 Free Play.',
          },
          {
            id: '03',
            title: 'TO QUALIFY',
            body:
              'Must be a new member of the Miccosukee One program and provide address plus email and/or phone.',
          },
          { id: '04', title: 'Dates and Times', body: 'All month of July' },
          {
            id: '05',
            title: 'Winners',
            body:
              'Miccosukee One Card Members who meet the sign-up requirements',
          },
          {
            id: '06',
            title: 'Promotion Location',
            body:
              "Enrollment occurs at the Miccosukee One Player's Club. Promotion will take place at any gaming machine that accepts Miccosukee One Player Cards. Free Play credits will be downloaded to the winner’s Miccosukee One card account.",
          },
          {
            id: '07',
            title: 'Prize Type and Amounts',
            body: 'New members will be awarded $25 Free Play.',
          },
          {
            id: '08',
            title: 'Prize Restrictions',
            body:
              'Players can earn the $25 prize once they sign up as a new member.',
          },
          {
            id: '09',
            title: 'General Rule Disclaimers',
            body:
              'Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play is valid until 1:59 AM on August 1 and on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 1,
      title: 'VIP Enrollment Bonus',
      img: cardImage2,
      oneLiner: 'Certified VIPs receive VIP Bonus Play!',
      rules: {
        subSections: [
          { id: '10', title: 'Day', body: 'All month of July' },
          { id: '11', title: 'Promotion Type', body: 'Tier/Status Match' },
          {
            id: '12',
            title: 'Rules',
            body:
              'New players who join the Miccosukee One program and present an upgraded Player’s Club card and/ or verified status from a competing Florida property will receive VIP BONUS PLAY!',
          },
          {
            id: '13',
            title: 'Promotion Location',
            body:
              'Enrollment occurs at the Miccosukee One Player’s Club. Promotion will take place at any gaming machine that accepts Miccosukee One player cards. Free Play credits will be downloaded to the winner’s Miccosukee One card account.',
          },
          {
            id: '14',
            title: 'TO QUALIFY',
            body:
              'Members joining the Miccosukee One program as a Level I VIP enrollment will receive a one-time $100 VIP Bonus Play welcome incentive. Members joining the Miccosukee One program as a Level II VIP enrollment will receive a one-time $200 VIP Bonus Play welcome incentive.                                                                                                       VIP BONUS PLAY is available to new player enrollments only.',
          },
          {
            id: '15',
            title:
              'Players who show the following competitor tiered cards are eligible for Level I $100 VIP Bonus Play',
            body:
              '[Magic City Casino: Illusionist] [The Casino at Dania Beach: Sapphire] [The Big Easy “Mardi-Gras”: Gold] [Calder: Gold, Black] [Hialeah Park: Silver] [Casino Miami: Silver] [Seminole Properties: Platinum] [Isle Casino Racing Pompano Park: Platinum] [Casino at Gulfstream Park: Place].',
          },
          {
            id: '16',
            title:
              'Players who show the following competitor tiered cards are eligible for Level II $200 VIP Bonus Play',
            body:
              '[Magic City Casino: Oracle, Wizard] [The Casino at Dania Beach: Diamond, Legend] [The Big Easy “Mardi-Gras”: Black] [Calder: Red, Royal] [Hialeah Park: Black] [Casino Miami: Elite, VIP] [Seminole Properties: Elite, X-Card] [Isle Casino Racing Pompano Park: Diamond, Diamond Plus, Diamond Elite, Seven Stars] [Casino at Gulfstream Park: Win, Triple Crown].',
          },
          {
            id: '17',
            title: 'General Rules',
            body:
              'Player name on valid photo ID must match the name on the provided Players Card. Players must provide address, email and/or phone to be eligible for the VIP Bonus program. Card and ID must not be damaged, altered, or otherwise illegible. Limit one bonus issuance per person. Offer is only available to new players and must occur upon initial enrollment. No exceptions. Must be 18 years of age or older. Must have valid, government-issued, gaming-approved ID and be physically present with the original ID to register. Free Play is valid on select machines only. Players will have until 1:59 AM on August 1 to redeem Free Play credits. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details.',
          },
        ],
      },
    },
    {
      id: 2,
      title: 'Freedom Weekend Free Play',
      img: cardImage3,
      oneLiner: 'Share of $7,400 Free Play via ricochet prize on July 1!',
      rules: {
        subSections: [
          { id: '20', title: 'Day', body: 'Friday, July 1, 2022' },
          { id: '21', title: 'Promotion Type', body: 'Ricochet Rewards' },
          {
            id: '22',
            title: 'Rules',
            body:
              'Free Play will be plentiful at MRG to help you celebrate Independence Day weekend! On Friday, July 1, between 6 PM and 11 PM, up to 100 Miccosukee One members will win a share of $7,400 Free Play via ricochet hot seat.',
          },
          {
            id: '23',
            title: 'TO QUALIFY',
            body:
              "Miccosukee One members must be actively gaming on their Miccosukee One Player's card.",
          },
          {
            id: '24',
            title: 'Dates and Times',
            body: 'July 1, from 6 PM - 11 PM',
          },
          {
            id: '25',
            title: 'Winners',
            body:
              'Miccosukee One member who triggers the ricochet prize through their play will win $74 Free Play, and nine (9) additional random winners playing with their Miccosukee One card at the time the prize is triggered will win $74 Free Play.',
          },
          {
            id: '26',
            title: 'Promotion Location',
            body: 'Gaming devices that accept Miccosukee One cards',
          },
          {
            id: '27',
            title: 'Prize Type and Amounts',
            body:
              'The player who triggers the prize and nine (9) additional random winners in up to ten (10) occurrences will receive $74 Free Play.',
          },
          {
            id: '28',
            title: 'Prize Restrictions',
            body: 'Players can win multiple times.',
          },
          {
            id: '29',
            title: 'General Rule Disclaimers',
            body:
              'Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play is valid for 30 days and on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 3,
      title: 'Freedom Weekend Cash',
      img: cardImage4,
      oneLiner: 'Win a share of over $29,000 Cash | July 2 & 3',
      rules: {
        subSections: [
          {
            id: '30',
            title: 'Day',
            body: 'Saturday, July 2 & Sunday, July 3, 2022',
          },
          { id: '31', title: 'Promotion Type', body: 'Drawing' },
          {
            id: '32',
            title: 'Rules',
            body:
              "We have over $29K to help you play this Independence Day weekend!! On Saturday, July 2 & Sunday, July 3, we'll have drawings from 3 PM to 11 PM where Miccosukee One members will be called every two hours to win $1,776 to $7,400 cash. If winners do not claim their prize, it will roll over to the 11 PM drawing on July 3. The last drawing of the night on July 3 must have a winner, and that winner could be YOU!",
          },
          {
            id: '33',
            title: 'TO QUALIFY',
            body:
              'Earn 200 points on your Miccosukee One card for each drawing ticket. Points can be earned between June 25 at 9 AM and July 3 at 10:45 PM.',
          },
          {
            id: '34',
            title: 'Dates and Times',
            body:
              'Drawings will occur at 3 PM, 5 PM, 7 PM, 9 PM & 11 PM on July 2 & 3.',
          },
          {
            id: '35',
            title: 'Number of Winners per Drawing',
            body: 'One (1) winner will be drawn per drawing.',
          },
          {
            id: '36',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              "The drawings and prize payments will occur at the Player's Club.",
          },
          {
            id: '37',
            title: 'Max Number of Entries',
            body: 'Players can earn an unlimited amount of entries.',
          },
          {
            id: '38',
            title: 'Prize Type and Amounts',
            body:
              'If present, winners may claim the following cash prizes on July 2 [3 PM - $1,776] [5 PM - $1,776] [7 PM - $1,776] [9 PM - $1,776] [11 PM - $7,400]. If present, winners may claim the following cash prizes on July 3 [3 PM - $1,776] [5 PM - $1,776] [7 PM - $1,776] [9 PM - $1,776]. The 11 PM winner on July 3 will win $7,400 cash and any unclaimed cash rollover prizes from previous drawings on both drawing days.',
          },
          {
            id: '39',
            title: 'No Show Rules / Rollover Rules',
            body:
              'Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification, and Player’s Card within ten (10) minutes of being announced. Player must locate and identify the corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued. If any drawing results in a no-show, the prize money will roll over to the 11 PM drawing on July 3. Drawing officials will keep drawing names at the final drawing until a winner is found on July 3.',
          },
          {
            id: '310',
            title: 'Amount of Wins Permitted per Guest',
            body:
              'Players can only win once in any single drawing with multiple winners.',
          },
          {
            id: '311',
            title: 'Drawing Ticket / Barrel Rules',
            body:
              'Barrel will be available on July 1 at 9 AM. The drum will be emptied after the last drawing on July 3. Entries may not be entered into the drum during the drawing. Upon receiving a drawing ticket from the Player\'s Club, it is the sole duty of the player to place the ticket stub\'s larger perforated portion into the appropriate drum of the respective raffle, "Freedom Weekend Cash". The player must have retained the smaller portion of the perforated ticket in order to redeem the prize. Lost, stolen, or damaged tickets will not be replaced and are not eligible to win. Tickets placed in the wrong drum will be disqualified and will not be reissued.',
          },
          {
            id: '312',
            title: 'General Rule Disclaimers',
            body:
              'Must have valid, government-issued, gaming-approved ID to claim the prize. Prizes will be retained for thirty (30) days if a valid, government-issued, gaming-approved ID is not provided at the time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card-level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final.  Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 4,
      title: 'BBQ Free Play Bucks',
      img: cardImage5,
      oneLiner:
        'Savor a share of $4,000 Free Play every Sunday in July via ricochet prize!',
      rules: {
        subSections: [
          {
            id: '40',
            title: 'Day',
            body: 'Sunday, July 3, 10, 17, 24 & 31, 2022',
          },
          { id: '41', title: 'Promotion Type', body: 'Ricochet Rewards' },
          {
            id: '42',
            title: 'Rules',
            body:
              'Come to MRG on Sundays for some BBQ Free Play Bucks! On Sunday, July 3, 10, 17, 24 & 31, between 1 PM and 5 PM, up to 40 Miccosukee One members will win $50 or $250 Free Play via ricochet hot seat.',
          },
          {
            id: '43',
            title: 'TO QUALIFY',
            body:
              "Miccosukee One members must be actively gaming on their Miccosukee One Player's card.",
          },
          {
            id: '44',
            title: 'Dates and Times',
            body: 'July 3, 10, 17, 24 & 31, from 1 PM - 5 PM',
          },
          {
            id: '45',
            title: 'Winners',
            body:
              'Miccosukee One member who triggers the ricochet prize through their play will win $250 Free Play, and three (3) additional random winners playing with their Miccosukee One card at the time the prize is triggered will win $50 Free Play.',
          },
          {
            id: '46',
            title: 'Promotion Location',
            body: 'Gaming devices that accept Miccosukee One cards',
          },
          {
            id: '47',
            title: 'Prize Type and Amounts',
            body:
              'The player who triggers the prize and three (3) additional random winners in up to ten (10) occurrences will receive $250 or $50 Free Play.',
          },
          {
            id: '48',
            title: 'Prize Restrictions',
            body: 'Players can win multiple times.',
          },
          {
            id: '49',
            title: 'General Rule Disclaimers',
            body:
              'Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play is valid for 30 days and on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 5,
      title: 'Independence Day Dollars',
      img: cardImage6,
      oneLiner: 'Share of $37,000 Cash for five winners on July 4!',
      rules: {
        subSections: [
          { id: '50', title: 'Day', body: 'Monday, July 4, 2022' },
          { id: '51', title: 'Promotion Type', body: 'Drawing' },
          {
            id: '52',
            title: 'Rules',
            body:
              "Win a share of $37,000 in Independence Day Dollars on Monday, July 4!! We'll have drawings from 2 PM - 10 PM where you can win $7,400 cash every two hours.",
          },
          {
            id: '53',
            title: 'TO QUALIFY',
            body:
              'Earn 74 points on your Miccosukee One card for each drawing ticket. Points can be earned between July 1 at 9 AM and July 4 at 9:45 PM.',
          },
          {
            id: '54',
            title: 'Dates and Times',
            body:
              'Drawings will occur at 2 PM, 4 PM, 6 PM, 8 PM & 10 PM on July 4.',
          },
          {
            id: '55',
            title: 'Number of Winners per Drawing',
            body: 'One (1) winner will be drawn per drawing.',
          },
          {
            id: '56',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              "The drawings and prize payments will occur at the Player's Club.",
          },
          {
            id: '57',
            title: 'Max Number of Entries',
            body: 'Players can earn an unlimited amount of entries.',
          },
          {
            id: '58',
            title: 'Prize Type and Amounts',
            body: 'One (1) $7,400 cash prize at 2 PM, 4 PM, 6 PM, 8 PM & 10 PM',
          },
          {
            id: '59',
            title: 'No Show Rules / Rollover Rules',
            body:
              'Must be present to win. The prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification, and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify the corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.',
          },
          {
            id: '510',
            title: 'Amount of Wins Permitted per Guest',
            body:
              'Players can only win once in any single drawing with multiple winners.',
          },
          {
            id: '511',
            title: 'Drawing Ticket / Barrel Rules',
            body:
              'Barrel will be available on July 4 at 9 AM. Drum will be emptied after the last drawing. Entries may not be entered into the drum during the drawing. Upon receiving a drawing ticket from the Player\'s Club, it is the sole duty of the player to place the ticket stub\'s larger perforated portion into the appropriate drum of the respective raffle, "Independence Day Dollars". Player must have retained the smaller portion of the perforated ticket in order to redeem the prize. Lost, stolen, or damaged tickets will not be replaced and are not eligible to win. Tickets placed in the wrong drum will be disqualified and will not be reissued.',
          },
          {
            id: '512',
            title: 'General Rule Disclaimers',
            body:
              'Must have valid, government-issued, gaming-approved ID to claim the prize. Prizes will be retained for thirty (30) days if a valid, government-issued, gaming-approved ID is not provided at the time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final.  Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 6,
      title: '4th of July VIP Bucks',
      img: cardImage7,
      oneLiner:
        'Five White Card members will win a share of $37,000 cash on July 4!',
      rules: {
        subSections: [
          { id: '60', title: 'Day', body: 'Monday, July 4, 2022' },
          { id: '61', title: 'Promotion Type', body: 'Drawing' },
          {
            id: '62',
            title: 'Rules',
            body:
              "We have $37,000 in cash and fireworks to help our White Card members celebrate the 4th of July. We'll draw 5 names at 10:30 PM to win $7,400 cash each!!",
          },
          {
            id: '63',
            title: 'TO QUALIFY',
            body:
              'Miccosukee One White Card members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned between July 1 at 9 AM and July 4 at 10:15 PM. This promotion will feature a bonus entry multiplier on the day of the drawing. Guests will receive one bonus entry for every 200 points they earn from 9 AM – 10:15 PM.',
          },
          {
            id: '64',
            title: 'Dates and Times',
            body: 'Drawing will occur at 10:30 PM on July 4.',
          },
          {
            id: '65',
            title: 'Number of Winners per Drawing',
            body: 'Five (5) winners at 10:30 PM',
          },
          {
            id: '66',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              "The drawings and prize payments will occur at the Player's Club.",
          },
          {
            id: '67',
            title: 'Max Number of Entries',
            body: 'Players can earn an unlimited amount of entries.',
          },
          {
            id: '68',
            title: 'Prize Type and Amounts',
            body: 'Five (5) $7,400 cash prizes at 10:30 PM',
          },
          {
            id: '69',
            title: 'No Show Rules / Rollover Rules',
            body:
              'Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification, and Player’s Card within ten (10) minutes of being announced and another name will be drawn until the prize is claimed. Player must locate and identify the corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.',
          },
          {
            id: '610',
            title: 'Bonus Entry Rules',
            body:
              'On July 4, players can earn one bonus entry for every 200 points they earn. Players must earn & collect their bonus entries from 9 AM through 10:15 PM.',
          },
          {
            id: '611',
            title: 'Amount of Wins Permitted per Guest',
            body: 'Players can only win once.',
          },
          {
            id: '612',
            title: 'Drawing Ticket / Barrel Rules',
            body:
              'Barrel will be available on July 4 at 9 AM. Drum will be emptied after the last drawing. Entries may not be entered into the drum during the drawing. Upon receiving a drawing ticket from the Player\'s Club, it is the sole duty of the player to place the ticket stub\'s larger perforated portion into the appropriate drum of the respective raffle, "4th of July VIP Bucks". The player must have retained the smaller portion of the perforated ticket in order to redeem the prize. Lost, stolen, or damaged tickets will not be replaced and are not eligible to win. Tickets placed in the wrong drum will be disqualified and will not be reissued.',
          },
          {
            id: '613',
            title: 'General Rule Disclaimers',
            body:
              'Eligibility for tiered promotion based on July 1 status. Must have a valid, government-issued, gaming-approved ID to claim the prize. Prizes will be retained for thirty (30) days if a valid, government-issued, gaming-approved ID is not provided at the time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card-level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final.  Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 7,
      title: 'Gift Giveaway',
      img: cardImage8,
      oneLiner:
        'Free Tool Set for Qualified Members | Mondays or Tuesdays in July',
      rules: {
        subSections: [
          {
            id: '70',
            title: 'Day',
            body:
              'Monday, July 4, 11, 18 & 25, and Tuesday, July 5, 12, 19 & 26, 2022',
          },
          { id: '71', title: 'Promotion Type', body: 'Continuity Program' },
          {
            id: '72',
            title: 'TO QUALIFY',
            body:
              "Come into MRG for a lovely gift. Miccosukee One members may qualify for a continuity gift set based upon rated gaming on their Miccosukee One card from 6/01/2021 through 5/31/2022. Player’s Miccosukee One account must also include a valid address and be enrolled to receive mail offers from Miccosukee Resort & Gaming. Invited guests join us on designated Mondays or Tuesdays in July to collect a different piece each week. Visit all 4 weeks to collect the whole set! Miccosukee One members who did not receive the monthly invite may qualify for weekly continuity gift items by accumulating 50 points on their Miccosukee One card from 9 AM to 9:45 PM on distribution days. To redeem, players must visit the Miccosukee One Player's Club for their voucher.",
          },
          {
            id: '73',
            title: 'Dates and Times',
            body: 'July 4-5, 11-12, 18-19, 25-26, from 12 PM – 10 PM',
          },
          {
            id: '74',
            title: 'Number of Recipients per Distribution',
            body:
              'Gifts will be available on a first-come, first-serve basis, while supplies last.',
          },
          {
            id: '75',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              'Continuity gifts will be distributed from the Bingo Admissions area.',
          },
          {
            id: '76',
            title: 'Prize Type and Amounts',
            body:
              'If present, invited guests may claim the following gifts in random distribution order [Specialty Drill Bit Set- $24.99] [Multi Bit Ratcheting Screwdriver Set - $29.99] [Tool Bag - $39.99] [Volt Cordless Drill - $59.99].',
          },
          {
            id: '77',
            title: 'Amount of Gifts Permitted per Guest',
            body: 'One weekly gift item per invited guest',
          },
          {
            id: '78',
            title: 'No Show Rules / Rollover Rules',
            body:
              'Must be present to receive the gift. The gift will automatically be forfeited if the player fails to produce the Miccosukee One card and valid photo ID during the dates and times of corresponding distribution.',
          },
          {
            id: '79',
            title: 'General Rule Disclaimers',
            body:
              'Must have a valid, government-issued, gaming-approved ID to claim the gift. Promotions are only available for eligible Miccosukee One members. Offers are non-transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded. Exceptions may be considered on a case-by-case basis depending on circumstances.',
          },
        ],
      },
    },
    {
      id: 8,
      title: 'Grillin & Chillin',
      img: cardImage9,
      oneLiner: 'Take home up to $3,000 Cash every Wednesday in July!',
      rules: {
        subSections: [
          {
            id: '80',
            title: 'Day',
            body: 'Wednesday, July 6, 13, 20 & 27, 2022',
          },
          { id: '81', title: 'Promotion Type', body: 'Drawing' },
          {
            id: '82',
            title: 'Rules',
            body:
              'We have the only thing more appealing than a flaming hot grill… COLD HARD CASH!! On Wednesday, July 6, 13, 20 & 27 at 7 PM & 9 PM, two lucky Miccosukee One members can win up to $3,000 in cash!',
          },
          {
            id: '83',
            title: 'TO QUALIFY',
            body:
              'Miccosukee One members must earn 100 points on their Miccosukee One card for each drawing ticket. Points can be earned from July 1 at 9 AM to July 27 at 8:45 PM.',
          },
          {
            id: '84',
            title: 'Dates and Times',
            body: 'July 6, 13, 20 & 27, at 7 PM & 9 PM',
          },
          {
            id: '85',
            title: 'Number of Winners per Drawing',
            body: 'Two (2) winners at 7 PM & 9 PM',
          },
          {
            id: '86',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              "Drawings and prize giveaways will take place at the Player's Club.",
          },
          {
            id: '87',
            title: 'Max Number of Entries',
            body: 'Players can earn an unlimited amount of entries.',
          },
          {
            id: '88',
            title: 'Prize Type and Amounts',
            body:
              'Cash prizes available to be won are $1,000, $1,500, $2,500 & $3,000.',
          },
          {
            id: '89',
            title: 'Amount of Wins Permitted per Guest',
            body:
              'Players can only win once in any single drawing with multiple winners.',
          },
          {
            id: '810',
            title: 'No Show Rules / Rollover Rules',
            body:
              'Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification, and Player’s Card within ten (10) minutes of being announced, and another name will be drawn until the prize is claimed. Player must locate and identify the corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.',
          },
          {
            id: '811',
            title: 'Game Rules',
            body:
              'If present, winners will pick a single prize vehicle. A total of 4 prize vehicles will start each drawing day and will not be reset after they are picked. The prize vehicles available to be picked by the winners will be worth the following amounts [1 - $1,000] [1 - $1,500] [1 - $2,500] [1 - $3,000].',
          },
          {
            id: '812',
            title: 'Drawing Ticket / Barrel Rules',
            body:
              "Barrel will be available July 5. Upon receiving a drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Grillin & Chillin”. Drum will be cleared after the last drawing of the night. Player must have retained smaller portion of the perforated ticket present in order to redeem prize. Lost, stolen, or damaged tickets will not be replaced and are not eligible to win. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
          },
          {
            id: '813',
            title: 'General Rule Disclaimers',
            body:
              'Must have valid, government-issued, gaming-approved ID to claim the prize. Prizes will be retained for thirty (30) days if a valid, government-issued, gaming-approved ID is not provided at the time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card-level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 9,
      title: 'Lunch Break Hot Seat',
      img: cardImage10,
      oneLiner: 'Win a share of $1,000 Free Play every Wednesday in July!',
      rules: {
        subSections: [
          {
            id: '90',
            title: 'Day',
            body: 'Wednesday, July 6, 13, 20 & 27, 2022',
          },
          { id: '91', title: 'Promotion Type', body: 'Ricochet Rewards' },
          {
            id: '92',
            title: 'Rules',
            body:
              'Your lunch is hot and ready, and so is the Free Play!!! On Wednesday, July 6, 13, 20 & 27, between 11 AM and 2 PM, up to 40 Miccosukee One members will win $25 Free Play via ricochet hot seat.',
          },
          {
            id: '93',
            title: 'TO QUALIFY',
            body:
              "Miccosukee One members must be actively gaming on their Miccosukee One Player's card.",
          },
          {
            id: '94',
            title: 'Dates and Times',
            body: 'July 6, 13, 20 & 27, from 11 AM - 2 PM',
          },
          {
            id: '95',
            title: 'Winners',
            body:
              'Miccosukee One member who triggers the ricochet prize through their play will win $25 Free Play, and three (3) additional random winners playing with their Miccosukee One card at the time the prize is triggered will win $25 Free Play.',
          },
          {
            id: '96',
            title: 'Promotion Location',
            body: 'Gaming devices that accept Miccosukee One cards',
          },
          {
            id: '97',
            title: 'Prize Types and Amounts',
            body:
              'The player who triggers the prize and three (3) additional random winners in up to ten (10) occurrences will receive $25 Free Play.',
          },
          {
            id: '98',
            title: 'Prize Restrictions',
            body: 'Players can win multiple times.',
          },
          {
            id: '99',
            title: 'General Rule Disclaimers',
            body:
              'Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play is valid for 30 days and on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 10,
      title: 'Black Card VIP Giveaway',
      img: cardImage11,
      oneLiner:
        'Black Cards, win $250 Free Play & up to $3,500 Cash | July 7 & 21',
      rules: {
        subSections: [
          { id: '100', title: 'Day', body: 'Thursday, July 7 & 21, 2022' },
          { id: '101', title: 'Promotion Type', body: 'Drawing' },
          {
            id: '102',
            title: 'Rules',
            body:
              'Black Card members, pick the right prize and win up to $3,500! On Thursday, July 7 & 21 at 7 PM, 8 PM & 9 PM, one Miccosukee One Black Tier member will win $250 Free Play. All three winners will return at 9:15 PM and play against each other to win $1,250 to $3,500 cash.',
          },
          {
            id: '103',
            title: 'TO QUALIFY',
            body:
              'Miccosukee One Black Tier members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from July 1 at 9 AM to July 21 at 8:45 PM.',
          },
          {
            id: '104',
            title: 'Dates and Times',
            body: 'July 7 & 21, at 7 PM, 8 PM & 9 PM',
          },
          {
            id: '105',
            title: 'Number of Winners per Drawing',
            body: 'One (1) winner at 7 PM, 8 PM & 9 PM',
          },
          {
            id: '106',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              "Drawings and prize giveaways will take place at the Player's Club.",
          },
          {
            id: '107',
            title: 'Max Number of Entries',
            body: 'Players can earn an unlimited amount of entries.',
          },
          {
            id: '108',
            title: 'Prize Type and Amounts',
            body:
              'One (1) $250 Free Play prize at 7 PM, 8 PM, & 9 PM. The three (3) contestants at 9:15 PM will each win one of the following cash prizes [1 - $1,250] [1 - $2,000] [1 - $3,500].',
          },
          {
            id: '109',
            title: 'Amount of Wins Permitted per Guest',
            body: 'Players can only win once per drawing day.',
          },
          {
            id: '1010',
            title: 'No Show Rules / Rollover Rules',
            body:
              'Must be present to win. The prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification, and Player’s Card within ten (10) minutes of being announced, and another name will be drawn until the prize is claimed. The player must locate and identify the corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued. If all three (3) players do not return by 9:15 PM, contestants will be drawn to fill all vacant spaces. The $250 qualifying Free Play prizes will not be issued to replacement contestants.',
          },
          {
            id: '1011',
            title: 'Game Rules',
            body:
              'The 7 PM, 8 PM, & 9 PM winners (or replacement contestants) will return at 9:15 PM to pick their prizes (a total of 3 players). In the order they qualified, contestants will pick a prize vehicle that will determine the amount won. Players will pick their prize vehicle in the order they were picked from the barrel.',
          },
          {
            id: '1012',
            title: 'Drawing Ticket / Barrel Rules',
            body:
              "Barrel will be available July 5 – 7 for the 7/7 drawing, and July 15 – 21 for the 7/21 drawing. Upon receiving the drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Black Card VIP Giveaway”. The drum will be cleared after the last drawing of the night. The player must have retained the smaller portion of the perforated ticket present in order to redeem the prize. Lost, stolen, or damaged tickets will not be replaced and are not eligible to win. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
          },
          {
            id: '1013',
            title: 'General Rule Disclaimers',
            body:
              'Eligibility for tiered promotion based on July 1 status. Must have a valid, government-issued, gaming-approved ID to claim the prize. Prizes will be retained for thirty (30) days if the valid, government-issued, gaming-approved ID is not provided at the time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Free Play is valid for 30 days and on select machines only. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card-level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 11,
      title: 'Red Card VIP Ricochet',
      img: cardImage12,
      oneLiner: 'Red Cards, win a share of $3,000 Free Play | July 7 & 21',
      rules: {
        subSections: [
          { id: '110', title: 'Day', body: 'Thursday, July 7 & 21, 2022' },
          { id: '111', title: 'Promotion Type', body: 'Ricochet Rewards' },
          {
            id: '112',
            title: 'Rules',
            body:
              'Calling all Red Tier members! On Thursday, July 7 & 21, between 6 PM and 9 PM, up to 24 Red Tier Miccosukee One members will win $100 or $150 Free Play via ricochet hot seat.',
          },
          {
            id: '113',
            title: 'TO QUALIFY',
            body:
              "Miccosukee One Red Tier members actively gaming on their Miccosukee One Player's card",
          },
          {
            id: '114',
            title: 'Dates and Times',
            body: 'July 7 & 21, from 6 PM - 9 PM',
          },
          {
            id: '115',
            title: 'Winners',
            body:
              'Miccosukee One Red Tier member who triggers the ricochet prize through their play will win $150 Free Play, and one (1) additional random Red Tier winner playing with their Miccosukee One card at the time the prize is triggered will win $100 Free Play.',
          },
          {
            id: '116',
            title: 'Promotion Location',
            body: 'Gaming devices that accept Miccosukee One cards',
          },
          {
            id: '117',
            title: 'Prize Type and Amounts',
            body:
              'The player who triggers the prize and 1 additional random winner in up to twelve (12) occurrences will receive $100 or $150 Free Play.',
          },
          {
            id: '118',
            title: 'Prize Restrictions',
            body: 'Players can win multiple times.',
          },
          {
            id: '119',
            title: 'General Rule Disclaimers',
            body:
              'Eligibility for tiered promotion is based on July 1 status. Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play is valid for 30 days and on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 12,
      title: 'White Card VIP Giveaway',
      img: cardImage13,
      oneLiner:
        'White Cards, win $500 Free Play & up to $7,500 cash | July 14 & 28',
      rules: {
        subSections: [
          { id: '120', title: 'Day', body: 'Thursday, July 14 & 28, 2022' },
          { id: '121', title: 'Promotion Type', body: 'Drawing' },
          {
            id: '122',
            title: 'Rules',
            body:
              'White Card members, pick the right prize and win up to $7,500!! On Thursday, July 14 & 28, at 7 PM, 8 PM & 9 PM, one Miccosukee One White Tier member will win $500 Free Play. All three winners will return at 9:15 PM and play against each other to win $2,500 to $7,500 cash.',
          },
          {
            id: '123',
            title: 'TO QUALIFY',
            body:
              'Miccosukee One White Tier members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from July 1 at 9 AM to July 28 at 8:45 PM.',
          },
          {
            id: '124',
            title: 'Dates and Times',
            body: 'July 14 & 28, at 7 PM, 8 PM & 9 PM',
          },
          {
            id: '125',
            title: 'Number of Winners per Drawing',
            body: 'One (1) winner at 7 PM, 8 PM & 9 PM',
          },
          {
            id: '126',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              "Drawings and prize giveaways will take place at the Player's Club.",
          },
          {
            id: '127',
            title: 'Max Number of Entries',
            body: 'Players can earn an unlimited amount of entries.',
          },
          {
            id: '128',
            title: 'Prize Type and Amounts',
            body:
              'One (1) $500 Free Play prize at 7 PM, 8 PM, & 9 PM. The three (3) contestants at 9:15 PM will win each win one of the following cash prizes [1 - $2,500] [1 - $4,000] [1 - $7,500].',
          },
          {
            id: '129',
            title: 'Amount of Wins Permitted per Guest',
            body: 'Players can only win once per drawing day.',
          },
          {
            id: '1210',
            title: 'No Show Rules / Rollover Rules',
            body:
              'Must be present to win. The prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification, and Player’s Card within ten (10) minutes of being announced, and another name will be drawn until the prize is claimed. The player must locate and identify the corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued. If all three (3) players do not return by 9:15 PM, contestants will be drawn to fill all vacant spaces. The $500 qualifying free play prizes will not be issued to replacement contestants.',
          },
          {
            id: '1211',
            title: 'Game Rules',
            body:
              'The 7 PM, 8 PM, & 9 PM winners (or replacement contestants) will return at 9:15 PM to pick their prizes (a total of 3 players). In the order they qualified, contestants will pick a prize vehicle that will determine the amount won. Players will pick their prize vehicle in the order they were picked from the barrel.',
          },
          {
            id: '1212',
            title: 'Drawing Ticket / Barrel Rules',
            body:
              "Barrel will be available July 8 – 14 for the 7/14 drawing, and July 22 – 28 for the 7/28. Upon receiving the drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “White Card VIP Giveaway”. The drum will be cleared after the last drawing of the night. The player must have retained the smaller portion of the perforated ticket present in order to redeem the prize. Lost, stolen, or damaged tickets will not be replaced and are not eligible to win. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
          },
          {
            id: '1213',
            title: 'General Rule Disclaimers',
            body:
              'Eligibility for tiered promotion based on July 1 status. Must have a valid, government-issued, gaming-approved ID to claim the prize. Prizes will be retained for thirty (30) days if the valid, government-issued, gaming-approved ID is not provided at the time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Free Play is valid for 30 days and on select machines only. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card-level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 13,
      title: 'Pool Party Payouts',
      img: cardImage14,
      oneLiner: 'Winners will split $25,000 Cash on July 30!',
      rules: {
        subSections: [
          { id: '130', title: 'Day', body: 'Saturday, July 30, 2022' },
          { id: '131', title: 'Promotion Type', body: 'Drawing' },
          {
            id: '132',
            title: 'Rules',
            body:
              "We have $25,000 in Pool Party Payouts to get your summer going!! On Saturday, July 30, we'll have drawings every hour from 5 PM to 9 PM where Miccosukee One members will win $5,000 in cash.",
          },
          {
            id: '133',
            title: 'TO QUALIFY',
            body:
              'Earn 200 points on your Miccosukee One card for each drawing ticket. Points can be earned between July 1 at 9 AM and July 30 at 8:45 PM. This promotion will feature a bonus entry multiplier every Friday and Saturday that players are allowed to earn entries. Guests will receive one bonus entry for every 200 points they earn from 9 AM – 4 AM and through 8:45 PM on July 30.',
          },
          {
            id: '134',
            title: 'Dates and Times',
            body:
              'Drawings will occur at 5 PM, 6 PM, 7 PM, 8 PM & 9 PM on July 30.',
          },
          {
            id: '135',
            title: 'Number of Winners per Drawing',
            body: 'One (1) winner will be drawn per drawing.',
          },
          {
            id: '136',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              "The drawings and prize payments will occur at the Player's Club.",
          },
          {
            id: '137',
            title: 'Max Number of Entries',
            body: 'Players can earn an unlimited amount of entries.',
          },
          {
            id: '138',
            title: 'Prize Type and Amounts',
            body: 'One (1) $5,000 cash prize at 5 PM, 6 PM, 7 PM, 8 PM & 9 PM',
          },
          {
            id: '139',
            title: 'No Show Rules / Rollover Rules',
            body:
              'Must be present to win. Prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification, and Player’s Card within ten (10) minutes of being announced, and another name will be drawn until the prize is claimed. Player must locate and identify the corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.',
          },
          {
            id: '1310',
            title: 'Bonus Entry Rules',
            body:
              'On July 1, 2, 8, 9, 15, 16, 22, 23, 29 & through 8:45 PM on July 30, players can earn one bonus entry for every 200 points they earn. Players must earn & collect their bonus entries from 9 AM Friday through 4 AM Sunday each weekend separately. Any entries not claimed during the appropriate time frame will be forfeited and cannot be printed at a later date.',
          },
          {
            id: '1311',
            title: 'Amount of Wins Permitted per Guest',
            body:
              'Players can only win once in any single drawing with multiple winners.',
          },
          {
            id: '1312',
            title: 'Drawing Ticket / Barrel Rules',
            body:
              'Barrel will be available on July 1 at 9 AM. Drum will be emptied after the last drawing. Entries may not be entered into the drum during the drawing. Upon receiving a drawing ticket from the Player\'s Club, it is the sole duty of the player to place the ticket stub\'s larger perforated portion into the appropriate drum of the respective raffle, "Pool Party Payouts". Player must have retained the smaller portion of the perforated ticket in order to redeem the prize. Lost, stolen, or damaged tickets will not be replaced and are not eligible to win. Tickets placed in the wrong drum will be disqualified and will not be reissued.',
          },
          {
            id: '1313',
            title: 'General Rule Disclaimers',
            body:
              'Must have valid, government-issued, gaming-approved ID to claim the prize. Prizes will be retained for thirty (30) days if a valid, government-issued, gaming-approved ID is not provided at the time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card-level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final.  Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 14,
      title: 'Birthday Bonanza Hot Seats',
      img: cardImage15,
      oneLiner: 'Share of $1,200 Free Play for July Birthdays on July 25!',
      rules: {
        subSections: [
          { id: '140', title: 'Day', body: 'Monday, July 25, 2022' },
          { id: '141', title: 'Promotion Type', body: 'Ricochet Rewards' },
          {
            id: '142',
            title: 'Rules',
            body:
              'On Monday, July 25, between the hours of 6 PM and 10 PM, July birthday guests who are actively gaming with their Miccosukee One card will be eligible for a chance to win $25-$100 in Free Play. Up to $1,200 may be awarded in a max of 8 occurrences.',
          },
          {
            id: '143',
            title: 'TO QUALIFY',
            body:
              'Miccosukee One members must have a birthday during the month of July and be actively playing gaming machines with their Miccosukee One card.',
          },
          {
            id: '144',
            title: 'Dates and Times',
            body: 'July 25, from 6 PM - 10 PM',
          },
          {
            id: '145',
            title: 'Winners',
            body:
              'Miccosukee One members who trigger the ricochet prize through their play and various random winners who are playing with their Miccosukee One card at the time the prize is triggered. All guests must have a July birthday to be eligible to win.',
          },
          {
            id: '146',
            title: 'Promotion Location',
            body: 'Gaming devices that accept Miccosukee One cards',
          },
          {
            id: '147',
            title: 'Prize Type and Amounts',
            body:
              'The player who triggers the Ricochet will receive $100, and two (2) others will win $25 during each occurrence. A total of $1,200 Free Play may be awarded in up to 8 occurrences. Up to 24 winners may be awarded prizes.',
          },
          {
            id: '148',
            title: 'Prize Restrictions',
            body: 'Players can win multiple times.',
          },
          {
            id: '149',
            title: 'General Rule Disclaimers',
            body:
              'Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play is valid for 30 days on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 15,
      title: 'New Members & Referrals Win Big',
      img: cardImage16,
      oneLiner: 'Sign up or refer a friend to win $5,000 Cash on July 31!',
      rules: {
        subSections: [
          { id: '150', title: 'Day', body: 'Sunday, July 31, 2022' },
          { id: '151', title: 'Promotion Type', body: 'Drawing' },
          {
            id: '152',
            title: 'Rules',
            body:
              'New Members and Referrals can win big on Sunday, July 31 at 8 PM!! One New Member or Referral from the month of July will be chosen from the drum and will win $5,000 cash!!!',
          },
          {
            id: '153',
            title: 'TO QUALIFY',
            body:
              'Miccosukee One members must have signed up for a Miccosukee One card or referred a new member any time after the prior months New Member & Referrals Win Big drawing through 7:45 PM on July 31 and be present to win.',
          },
          { id: '154', title: 'Dates and Times', body: 'July 31 at 8 PM' },
          {
            id: '155',
            title: 'Number of Winners per Drawing',
            body: 'One (1) winner will be drawn at 8 PM.',
          },
          {
            id: '156',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              "Drawings and prize giveaways will take place at the Player's Club.",
          },
          {
            id: '157',
            title: 'Max Number of Entries',
            body:
              'Every eligible new member will receive one drawing ticket. Referrals will receive one drawing ticket per new member they refer.',
          },
          {
            id: '158',
            title: 'Prize Type and Amounts',
            body: 'One (1) $5,000 cash prize at 8 PM',
          },
          {
            id: '159',
            title: 'Amount of Wins Permitted per Guest',
            body:
              'Players can only win once in any single drawing with multiple winners.',
          },
          {
            id: '1510',
            title: 'No Show Rules / Rollover Rules',
            body:
              'Must be present to win. The prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification, and Player’s Card within ten (10) minutes of being announced, and another name will be drawn until the prize is claimed. The player must locate and identify the corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.',
          },
          {
            id: '1511',
            title: 'Drawing Ticket / Barrel Rules',
            body:
              'Barrel will be available on July 31. Upon receiving a drawing ticket from the Player\'s Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle "New Members & Referrals Win Big”. The drum will be cleared after the last drawing of the night. The player must have retained the smaller portion of the perforated ticket present in order to redeem the prize. Lost, stolen, or damaged tickets will not be replaced and will not be eligible to win. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.',
          },
          {
            id: '1512',
            title: 'General Rule Disclaimers',
            body:
              'Must have a valid, government-issued, gaming-approved ID to claim the prize. Prizes will be retained for thirty (30) days if the valid, government-issued, gaming-approved ID is not provided at the time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card-level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
  ],
  dataEs: [
    {
      id: 0,
      title: 'Bono para Nuevos Miembros',
      img: cardImage1,
      oneLiner: '$25 Free Play + Califique para ganar $5K el 31 de julio',
      rules: {
        subSections: [
          { id: '00', title: 'Día', body: 'Todo el mes de julio' },
          { id: '01', title: 'Tipo de Promoción', body: 'Juegue y Gane' },
          {
            id: '02',
            title: 'Reglas',
            body:
              'Nuevos miembros que se unan a la tarjeta Miccosuke One recibirán automáticamente $25 Free Play.',
          },
          {
            id: '03',
            title: 'PARA CALIFICAR',
            body:
              'Debe ser un nuevo miembro del programa Miccosukee One y proveer dirección, correo electrónico y/o número de teléfono.',
          },
          {
            id: '04',
            title: 'Fechas y Horarios',
            body: 'Todo el mes de julio',
          },
          {
            id: '05',
            title: 'Ganadores',
            body:
              'Miembros de la tarjeta Miccosukee One que cumplan con los requisitos de inscripción',
          },
          {
            id: '06',
            title: 'Lugar de Promoción',
            body:
              'La inscripción se realizará en el Miccosukee One Player’s Club. La promoción se llevará a cabo en cualquier máquina de juego que acepte las tarjetas Miccosukee One. Los créditos de Free Play serán descargados en la cuenta de Miccosukee One del ganador.',
          },
          {
            id: '07',
            title: 'Tipo de Premio y Cantidades',
            body: 'Nuevos miembros ganarán $25 Free Play.',
          },
          {
            id: '08',
            title: 'Restricciones de Premio',
            body:
              'Los jugadores pueden ganar el premio de $25 una vez al registrarse como nuevo miembro.',
          },
          {
            id: '09',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play es válido hasta las 1:59 AM del 1 de agosto y sólo en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 1,
      title: 'Igualamos su Nivel',
      img: cardImage2,
      oneLiner: 'VIPs certificados reciben Juego de Bono!',
      rules: {
        subSections: [
          { id: '10', title: 'Día', body: 'Todo el mes de julio' },
          { id: '11', title: 'Tipo de Promoción', body: 'Tier/Status Match' },
          {
            id: '12',
            title: 'Reglas',
            body:
              "¡Los nuevos jugadores que se unan al programa Miccosukee One y presenten una tarjeta de Player's Club de nivel ascendido y/o un estado verificado de una propiedad competidora de Florida, recibirán JUEGO DE BONO VIP (VIP BONUS PLAY)!",
          },
          {
            id: '13',
            title: 'Lugar de Promoción',
            body:
              "La inscripción al programa se lleva a cabo en el Miccosukee One Player's Club. La promoción se llevará a cabo en cualquier máquina de juego que acepte tarjetas de jugador Miccosukee One. Los créditos de Free Play se descargarán a la cuenta de la tarjeta Miccosukee One del ganador.",
          },
          {
            id: '14',
            title: 'PARA CALIFICAR',
            body:
              'Los miembros que se unan al programa Miccosukee One como inscripción VIP de Nivel I recibirán un incentivo de bienvenida único de $100 VIP Bonus Play. Los miembros que se unan al programa Miccosukee One como inscripción VIP de nivel II recibirán un incentivo de bienvenida único de $200 VIP Bonus Play. VIP BONUS PLAY está disponible solo para inscripciones de nuevos jugadores.',
          },
          {
            id: '15',
            title:
              'Los jugadores que muestren las siguientes tarjetas de niveles de la competencia son elegibles para el juego de bono VIP de $100 de nivel I',
            body:
              '[Magic City Casino: Illusionist] [The Casino at Dania Beach: Sapphire] [The Big Easy "Mardi-Gras": Gold] [Calder: Gold, Black] [Hialeah Park: Silver] [Casino Miami: Silver] [Seminole Properties: Platinum] [Isle Casino Racing Pompano Park: Platinum] [Casino at Gulfstream Park: Place].',
          },
          {
            id: '16',
            title:
              'Los jugadores que muestren las siguientes tarjetas de niveles de la competencia son elegibles para el juego de bono VIP de $200 de nivel II',
            body:
              '[Magic City Casino: Oracle, Wizard] [The Casino at Dania Beach: Diamond, Legend] [The Big Easy “Mardi-Gras”: Black] [Calder: Red, Royal] [Hialeah Park: Black] [Casino Miami: Elite, VIP] [Seminole Properties: Elite, X-Card] [Isle Casino Racing Pompano Park: Diamond, Diamond Plus, Diamond Elite, Seven Stars] [ Casino en Gulfstream Park: Win, Triple Crown].',
          },
          {
            id: '17',
            title: 'REGLAS GENERALES',
            body:
              'El nombre que el jugador muestre en su ID debe igualar el nombre en su Player’s Card. Los jugadores deben proporcionar su dirección, correo electrónico y/o teléfono para ser elegibles para el programa VIP Bonus. La tarjeta y la identificación no deben estar dañadas, alteradas o ilegibles. Límite de una emisión de bonos por persona. La oferta solo está disponible para nuevos jugadores y debe realizarse en el momento de la inscripción inicial. Sin excepciones. Debe tener 18 años de edad o más. Debe tener una identificación válida, emitida por el gobierno, aprobada para jugar, y estar físicamente presente con la identificación original para registrarse. Free Play es válido sólo en máquinas seleccionadas. Los jugadores tendrán hasta la 1:59 AM del 1 de agosto para canjear sus créditos de Free Play. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para más detalles.',
          },
        ],
      },
    },
    {
      id: 2,
      title: 'Free Play para el Fin de Semana de la Independencia',
      img: cardImage3,
      oneLiner: '¡Parte de $7,400 Free Play por premio rebote el 1 de julio!',
      rules: {
        subSections: [
          { id: '20', title: 'Día', body: 'viernes, 1 de julio de 2022' },
          { id: '21', title: 'Tipo de Promoción', body: 'Premios Ricochet' },
          {
            id: '22',
            title: 'Reglas',
            body:
              '¡Hay mucho Free Play en MRG para ayudarlo a celebrar el fin de semana del Día de la Independencia! El viernes, 1 de julio, entre las 6 PM y las 11 PM, hasta 100 miembros de Miccosukee One ganarán una parte de $7,400 Free Play por premio de rebote.',
          },
          {
            id: '23',
            title: 'PARA CALIFICAR',
            body:
              'Miembros de Miccosukee One deben estar jugando activamente con su tarjeta Miccosukee One.',
          },
          {
            id: '24',
            title: 'Fechas y Horarios',
            body: '1 de julio, de 6 PM a 11 PM',
          },
          {
            id: '25',
            title: 'Ganadores',
            body:
              'El miembro de Miccosukee One que active el premio de rebote a través de su juego ganará $74 Free Play y nueve (9) ganadores adicionales seleccionados al azar que estén jugando con su tarjeta Miccosukee One en el momento en que se active el premio ganarán $74 Free Play.',
          },
          {
            id: '26',
            title: 'Lugar de Promoción',
            body: 'Máquinas de juego que acepten la tarjeta Miccosukee One',
          },
          {
            id: '27',
            title: 'Tipo de Premio y Cantidades',
            body:
              'El jugador que active el premio y nueve (9) ganadores adicionales seleccionados al azar durante hasta diez (10) oportunidades recibirán $74 Free Play.',
          },
          {
            id: '28',
            title: 'Restricciones de Premio',
            body: 'Los jugadores pueden ganar varias veces.',
          },
          {
            id: '29',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play válido por treinta días y en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 3,
      title: 'Efectivo para el Fin de Semana de la Independencia',
      img: cardImage4,
      oneLiner: 'Gane una parte de más de $29,000 en Efectivo | 2 y 3 de julio',
      rules: {
        subSections: [
          {
            id: '30',
            title: 'Día',
            body: 'sábado, 2 de julio y domingo, 3 de julio de 2022',
          },
          { id: '31', title: 'Tipo de Promoción', body: 'Sorteo' },
          {
            id: '32',
            title: 'Reglas',
            body:
              '¡¡Tenemos más de $29K para ayudarle a jugar este fin de semana del Día de la Independencia!! El sábado, 2 de julio y el domingo, 3 de julio, tendremos sorteos de 3 PM a 11 PM donde los miembros de Miccosukee One serán llamados cada dos horas para ganar entre $1,776 y $7,400 en efectivo. Si los ganadores no reclaman su premio, pasará al sorteo de las 11 PM del 3 de julio. El último sorteo de la noche del 3 de julio debe tener un ganador, ¡y ese ganador podría ser USTED!',
          },
          {
            id: '33',
            title: 'PARA CALIFICAR',
            body:
              'Gane 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 25 de junio a las 9 AM hasta el 3 de julio a las 10:45 PM.',
          },
          {
            id: '34',
            title: 'Fechas y Horarios',
            body:
              'Los sorteos serán a las 3 PM, 5 PM, 7 PM, 9 PM y 11 PM el 2 y 3 de julio.',
          },
          {
            id: '35',
            title: 'Cantidad de Ganadores por Sorteo',
            body: 'Un (1) ganador será elegido por sorteo.',
          },
          {
            id: '36',
            title: 'Lugar del Sorteo',
            body:
              'Los sorteos y la entrega de premios serán en el Player’s Club.',
          },
          {
            id: '37',
            title: 'Cantidad de Entradas Permitidas por Persona',
            body: 'Los jugadores pueden acumular entradas ilimitadas.',
          },
          {
            id: '38',
            title: 'Tipo de Premio y Cantidades',
            body:
              'Si están presentes, los ganadores pueden reclamar los siguientes premios en efectivo el 2 de julio [3 PM - $1,776] [5 PM - $1,776] [7 PM - $1,776] [9 PM - $1,776] [11 - $7,400]. Si están presentes, los ganadores pueden reclamar los siguientes premios en efectivo el 3 de julio [3 PM - $1,776] [5 PM - $1,776] [7 PM - $1,776] [9 PM - $1,776]. El ganador de las 11 PM del 3 de julio ganará $7,400 en efectivo más cualquier premio en efectivo no reclamado de sorteos anteriores en ambos días de sorteo.',
          },
          {
            id: '39',
            title: 'Reglas de No Asistencia',
            body:
              'Debe estar presente para ganar. El premio se perderá automáticamente si el jugador seleccionado no presenta de forma independiente su boleto ganador, la identificación válida y la tarjeta de jugador dentro de los diez (10) minutos posteriores al anuncio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos. Si algún ganador no se presenta, el dinero del premio se transferirá al sorteo de las 11 PM del 3 de julio. Los oficiales del sorteo seguirán sorteando nombres en el sorteo final hasta que se encuentre un ganador el 3 de julio.',
          },
          {
            id: '310',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body:
              'Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.',
          },
          {
            id: '311',
            title: 'Reglas de Boletos de Sorteo / Tómbola',
            body:
              'La tómbola estará disponible el 1 de julio a las 9 AM. La tómbola se vaciará después del último sorteo del 3 de julio. Los boletos no se podrán depositar en la tómbola durante el sorteo. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Freedom Weekend Cash”. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados y no serán elegibles para ganar. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir.',
          },
          {
            id: '312',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Los premios se retendrán durante treinta (30) días si no se proporciona una identificación válida, emitida por el gobierno y aprobada para jugar, al momento de ganar. Cualquier premio retenido que no se reclame dentro de los treinta (30) días se perderá. Las promociones sólo están disponibles para miembros de Miccosukee One. Los puntos acumulados en cualquier promoción del multiplicador de puntos de bono no se aplican a entradas de rifas adicionales ni al avance de nivel de tarjeta. Los premios no son transferibles. Debe tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 4,
      title: 'Barbacoa de Free Play',
      img: cardImage5,
      oneLiner:
        '¡Saboree una parte de $4,000 Free Play cada domingo de julio por premio rebote!',
      rules: {
        subSections: [
          {
            id: '40',
            title: 'Día',
            body: 'domingo, 3, 10, 17, 24 y 31 de julio de 2022',
          },
          { id: '41', title: 'Tipo de Promoción', body: 'Premios Ricochet' },
          {
            id: '42',
            title: 'Reglas',
            body:
              '¡Visite MRG los domingos para disfrutar de una barbacoa de Free Play! El 3, 10, 17, 24 y 31 de julio, entre la 1 PM y 5 PM, hasta 40 miembros de Miccosukee One ganarán $50 o $250 Free Play por premio de rebote.',
          },
          {
            id: '43',
            title: 'PARA CALIFICAR',
            body:
              'Miembros de Miccosukee One deben estar jugando activamente con su tarjeta Miccosukee One.',
          },
          {
            id: '44',
            title: 'Fechas y Horarios',
            body: '3, 10, 17 24 y 31 de julio, de 1 PM a 5 PM',
          },
          {
            id: '45',
            title: 'Ganadores',
            body:
              'El miembro de Miccosukee One que active el premio de rebote a través de su juego ganará $250 Free Play y tres (3) ganadores adicionales seleccionados al azar que estén jugando con su tarjeta Miccosukee One en el momento en que se active el premio ganarán $50 Free Play.',
          },
          {
            id: '46',
            title: 'Lugar de Promoción',
            body: 'Máquinas de juego que acepten la tarjeta Miccosukee One',
          },
          {
            id: '47',
            title: 'Tipo de Premio y Cantidades',
            body:
              'El jugador que active el premio y tres (3) ganadores adicionales seleccionados al azar durante hasta diez (10) oportunidades recibirán $250 o $50 Free Play.',
          },
          {
            id: '48',
            title: 'Restricciones de Premio',
            body: 'Los jugadores pueden ganar varias veces.',
          },
          {
            id: '49',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play válido por treinta días y en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 5,
      title: 'Dólares para el Día de la Independencia',
      img: cardImage6,
      oneLiner:
        '¡Parte de $37,000 en Efectivo para cinco ganadores el 4 de julio!',
      rules: {
        subSections: [
          { id: '50', title: 'Día', body: 'lunes, 4 de julio de 2022' },
          { id: '51', title: 'Tipo de Promoción', body: 'Sorteo' },
          {
            id: '52',
            title: 'Reglas',
            body:
              '¡¡Gane una parte de $37,000 dólares para el Día de la Independencia el lunes, 4 de julio!! Tendremos sorteos de 2 PM a 10 PM en los que puede ganar $7,400 en efectivo cada dos horas.',
          },
          {
            id: '53',
            title: 'PARA CALIFICAR',
            body:
              'Gane 74 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de julio a las 9 AM hasta el 4 de julio a las 9:45 PM.',
          },
          {
            id: '54',
            title: 'Fechas y Horarios',
            body:
              'Los sorteos serán a las 2 PM, 4 PM, 6 PM, 8 PM y 10 PM el 4 de julio.',
          },
          {
            id: '55',
            title: 'Cantidad de Ganadores por Sorteo',
            body: 'Un (1) ganador será elegido por sorteo.',
          },
          {
            id: '56',
            title: 'Lugar del Sorteo',
            body:
              'Los sorteos y la entrega de premios serán en el Player’s Club.',
          },
          {
            id: '57',
            title: 'Cantidad de Entradas Permitidas por Persona',
            body: 'Los jugadores pueden acumular entradas ilimitadas.',
          },
          {
            id: '58',
            title: 'Tipo de Premio y Cantidades',
            body:
              'Un (1) premio en efectivo de $7,400 a las 2 PM, 4 PM, 6 PM, 8 PM y 10 PM.',
          },
          {
            id: '59',
            title: 'Reglas de No Asistencia',
            body:
              'Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.',
          },
          {
            id: '510',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body:
              'Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.',
          },
          {
            id: '511',
            title: 'Reglas de Boletos de Sorteo / Tómbola',
            body:
              'La tómbola estará disponible el 4 de julio a las 9 AM. La tómbola se vaciará después del último sorteo de la noche. Los boletos no se podrán depositar en la tómbola durante el sorteo. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Independence Day Dollars”. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados y no serán elegibles para ganar. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir.',
          },
          {
            id: '512',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Los premios se retendrán durante treinta (30) días si no se proporciona una identificación válida, emitida por el gobierno y aprobada para jugar, al momento de ganar. Cualquier premio retenido que no se reclame dentro de los treinta (30) días se perderá. Las promociones sólo están disponibles para miembros de Miccosukee One. Los puntos acumulados en cualquier promoción del multiplicador de puntos de bono no se aplican a entradas de rifas adicionales ni al avance de nivel de tarjeta. Los premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 6,
      title: 'Dólares VIP para el 4 de Julio',
      img: cardImage7,
      oneLiner:
        '¡Cinco miembros de Tarjeta Blanca ganarán una parte de $37,000 en Efectivo el 4 de julio!',
      rules: {
        subSections: [
          { id: '60', title: 'Día', body: 'lunes, 4 de julio de 2022' },
          { id: '61', title: 'Tipo de Promoción', body: 'Sorteo' },
          {
            id: '62',
            title: 'Reglas',
            body:
              'Tenemos $37,000 en efectivo y fuegos artificiales para ayudar a nuestros miembros de Tarjerta Blanca a celebrar el 4 de Julio. ¡¡Sortearemos 5 nombres a las 10:30 PM para ganar $7,400 en efectivo cada uno!!',
          },
          {
            id: '63',
            title: 'PARA CALIFICAR',
            body:
              'Los miembros de Tarjeta Blanca de Miccosukee One deben ganar 200 puntos en su tarjeta Miccosukee One por cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de julio a las 9 AM hasta el 4 de julio a las 10:15 PM. Esta promoción contará con un multiplicador de entradas de bono el día del sorteo. Los invitados recibirán una entrada de bono por cada 200 puntos que ganen de 9 AM a 10:15 PM.',
          },
          {
            id: '64',
            title: 'Fechas y Horarios',
            body: 'El sorteo será a las 10:30 PM el 4 de julio.',
          },
          {
            id: '65',
            title: 'Cantidad de Ganadores por Sorteo',
            body: 'Cinco (5) ganadores a las 10:30 PM',
          },
          {
            id: '66',
            title: 'Lugar del Sorteo',
            body:
              'Los sorteos y la entrega de premios serán en el Player’s Club.',
          },
          {
            id: '67',
            title: 'Cantidad de Entradas Permitidas por Persona',
            body: 'Los jugadores pueden acumular entradas ilimitadas.',
          },
          {
            id: '68',
            title: 'Tipo de Premio y Cantidades',
            body: 'Cinco (5) premios en efectivo de $7,400 a las 10:30 PM.',
          },
          {
            id: '69',
            title: 'Reglas de No Asistencia',
            body:
              'Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.',
          },
          {
            id: '610',
            title: 'Reglas para Entradas de Bono',
            body:
              'El 4 de julio, los jugadores pueden recibir una entrada de bono por cada 200 puntos que ganen. Los jugadores deben ganar y recolectar sus entradas de bono desde las 9 AM hasta las 10:15 PM.',
          },
          {
            id: '611',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body: 'Jugadores sólo pueden ganar una vez.',
          },
          {
            id: '612',
            title: 'Reglas de Boletos de Sorteo / Tómbola',
            body:
              'La tómbola estará disponible el 4 de julio a las 9 AM. La tómbola se vaciará después del último sorteo de la noche. Los boletos no se podrán depositar en la tómbola durante el sorteo. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “4th of July VIP Bucks”. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados y no serán elegibles para ganar. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir.',
          },
          {
            id: '613',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Elegibilidad para promoción por niveles basada en el estado de juego del 1 de julio. Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Los premios se retendrán durante treinta (30) días si no se proporciona una identificación válida, emitida por el gobierno y aprobada para jugar, al momento de ganar. Cualquier premio retenido que no se reclame dentro de los treinta (30) días se perderá. Las promociones sólo están disponibles para miembros de Miccosukee One. Los puntos acumulados en cualquier promoción del multiplicador de puntos de bono no se aplican a entradas de rifas adicionales ni al avance de nivel de tarjeta. Los premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 7,
      title: 'Entrega de Regalo',
      img: cardImage8,
      oneLiner:
        '\ufeff\ufeff\ufeffSet de Herramientas Gratis para Miembros Calificados | lunes o martes de julio',
      rules: {
        subSections: [
          {
            id: '70',
            title: 'Día',
            body:
              'lunes, 4, 11, 18, y 25 de julio, y 5, 12, 19 y 26 de julio de 2022',
          },
          {
            id: '71',
            title: 'Tipo de Promoción',
            body: 'Programa de Continuidad',
          },
          {
            id: '72',
            title: 'PARA CALIFICAR',
            body:
              "Visite MRG para obtener un hermoso regalo. Los miembros de Miccosukee One pueden calificar para el set de obsequios de continuidad en función de los juegos clasificados en su tarjeta Miccosukee One del 1 de junio de 2021 hasta el 31 de mayo de 2022. La cuenta Miccosukee One del jugador también debe incluir una dirección válida y estar inscrita para recibir ofertas por correo de Miccosukee Resort & Gaming. Los jugadores invitados pueden visitarnos los lunes o martes designados en julio para recolectar una pieza diferente cada semana. ¡Visite las 4 semanas para coleccionar todo el conjunto! Los miembros de Miccosukee One que no recibieron la invitación mensual pueden calificar para artículos de regalo de continuidad semanal acumulando 50 puntos en su tarjeta Miccosukee One de 9 AM a 9:45 PM en los días de distribución. Para canjear el regalo, los jugadores deben visitar el Miccosukee One Player's Club para obtener su cupón.",
          },
          {
            id: '73',
            title: 'Fechas y Horarios',
            body: '4-5, 11-12, 18-19, y 25-26 de julio, de 12 PM – 10 PM',
          },
          {
            id: '74',
            title: 'Número de Destinatarios por Distribución',
            body:
              'Los regalos estarán disponibles por orden de llegada, mientras dure la mercancía.',
          },
          {
            id: '75',
            title: 'Lugar de Entrega de Regalos',
            body:
              'Los regalos de continuidad se distribuirán desde el área de Admisiones de Bingo.',
          },
          {
            id: '76',
            title: 'Tipo de Premio y Cantidades',
            body:
              'Si están presentes, los invitados pueden reclamar los siguientes regalos distribuidos al azar [Juego de Brocas Especiales - $24.99] [Juego de Destornilladores de Trinquete de Varias Puntas - $29.99] [Bolsa de Herramientas - $39.99] [Taladro Inalámbrico Volt - $59.99].',
          },
          {
            id: '77',
            title: 'Cantidad de Regalos Permitidos por Invitado',
            body: 'Un artículo de regalo semanal por invitado.',
          },
          {
            id: '78',
            title: 'Reglas de No Asistencia',
            body:
              'Debe estar presente para recibir el regalo. El regalo se perderá automáticamente si el jugador no presenta el cupón de regalo con su tarjeta Miccosukee One y una identificación válida durante las fechas y horarios de distribución establecidos.',
          },
          {
            id: '79',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One elegibles. Ofertas no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado. Se pueden considerar excepciones caso por caso dependiendo de las circunstancias.',
          },
        ],
      },
    },
    {
      id: 8,
      title: 'Parrillada de Billetes',
      img: cardImage9,
      oneLiner:
        '¡Llévese a casa hasta $3,000 en Efectivo cada miércoles de julio!',
      rules: {
        subSections: [
          {
            id: '80',
            title: 'Día',
            body: 'miércoles, 6, 13, 20 y 27 de julio de 2022',
          },
          { id: '81', title: 'Tipo de Promoción', body: 'Sorteo' },
          {
            id: '82',
            title: 'Reglas',
            body:
              'Tenemos la única cosa más atractiva que una parrilla caliente... ¡¡MUCHO DINERO EN EFECTIVO!! El miércoles, 6, 13, 20 y 27 de julio a las 7 PM y 9 PM, ¡dos afortunados miembros de Miccosukee One pueden ganar hasta $3,000 en efectivo!',
          },
          {
            id: '83',
            title: 'PARA CALIFICAR',
            body:
              'Los miembros de Miccosukee One deben ganar 100 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de julio a las 9 AM hasta el 27 de julio a las 8:45 PM.',
          },
          {
            id: '84',
            title: 'Fechas y Horarios',
            body: '6, 13, 20 y 27 de julio, a las 7 PM y 9 PM',
          },
          {
            id: '85',
            title: 'Cantidad de Ganadores por Sorteo',
            body: 'Dos (2) ganadores a las 7 PM y 9 PM',
          },
          {
            id: '86',
            title: 'Lugar del Sorteo',
            body:
              'Los sorteos y la entrega de premios serán en el Player’s Club.',
          },
          {
            id: '87',
            title: 'Cantidad de Entradas Permitidas por Persona',
            body: 'Los jugadores pueden acumular entradas ilimitadas.',
          },
          {
            id: '88',
            title: 'Tipo de Premio y Cantidades',
            body:
              'Los premios en efectivo disponibles para ganar son de $1,000, $1,500, $2,500 y $3,000.',
          },
          {
            id: '89',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body:
              'Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.',
          },
          {
            id: '810',
            title: 'Reglas de No Asistencia',
            body:
              'Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.',
          },
          {
            id: '811',
            title: 'Reglas del Juego',
            body:
              'Si están presente, los ganadores elegirán un sólo vehículo de premio. Un total de 4 vehículos de premio comenzarán cada día de sorteo y no se reiniciarán después de que se elijan. Los vehículos de premio disponibles para ser elegidos por los ganadores valdrán las siguientes cantidades [1 - $1,000] [1 - $1,500] [1 - $2,500] [1 - $3,000].',
          },
          {
            id: '812',
            title: 'Reglas de Boletos de Sorteo / Tómbola',
            body:
              'La tómbola estará disponible el 5 de julio. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Grillin & Chillin”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados y no serán elegibles para ganar. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no se podrán depositar en la tómbola durante el sorteo.',
          },
          {
            id: '813',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Los premios se retendrán durante treinta (30) días si no se proporciona una identificación válida, emitida por el gobierno y aprobada para jugar, al momento de ganar. Cualquier premio retenido que no se reclame dentro de los treinta (30) días se perderá. Las promociones sólo están disponibles para miembros de Miccosukee One. Los puntos acumulados en cualquier promoción del multiplicador de puntos de bono no se aplican a entradas de rifas adicionales ni al avance de nivel de tarjeta. Los premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 9,
      title: 'Almuerzo de Premios',
      img: cardImage10,
      oneLiner: '¡Gane una parte de $1,000 Free Play cada miércoles de julio!',
      rules: {
        subSections: [
          {
            id: '90',
            title: 'Día',
            body: 'miércoles, 6, 13, 20 y 27 de julio de 2022',
          },
          { id: '91', title: 'Tipo de Promoción', body: 'Premios Ricochet' },
          {
            id: '92',
            title: 'Reglas',
            body:
              '¡Su almuerzo de Free Play está listo y caliente! El miércoles 6, 13, 20 y 27 de julio, entre las 11 AM y 2 PM, hasta 40 miembros de Miccosukee One ganarán $25 Free Play por premio de rebote.',
          },
          {
            id: '93',
            title: 'PARA CALIFICAR',
            body:
              'Miembros de Miccosukee One que estén jugando activamente con sus tarjetas de Miccosukee One',
          },
          {
            id: '94',
            title: 'Fechas y Horarios',
            body: '6, 13, 20 y 27 de julio, de 11 AM – 2 PM',
          },
          {
            id: '95',
            title: 'Ganadores',
            body:
              'El miembro de Miccosukee One que active el premio de rebote a través de su juego ganará $25 Free Play y tres (3) ganadores adicionales seleccionados al azar y que estén jugando con su tarjeta Miccosukee One en el momento en que se active el premio ganarán $25 Free Play.',
          },
          {
            id: '96',
            title: 'Lugar de Promoción',
            body: 'Máquinas de juego que acepten la tarjeta Miccosukee One',
          },
          {
            id: '97',
            title: 'Tipo de Premio y Cantidades',
            body:
              'El jugador que active el premio y tres (3) ganadores seleccionados al azar durante hasta diez (10) oportunidades recibirán $25 Free Play.',
          },
          {
            id: '98',
            title: 'Restricciones de Premio',
            body: 'Los jugadores pueden ganar varias veces.',
          },
          {
            id: '99',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play válido por treinta días y en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 10,
      title: 'Sorteo VIP para Tarjeta Negra',
      img: cardImage11,
      oneLiner:
        'Tarjetas Negras, ganen $250 Free Play y hasta $3,500 en Efectivo | 7 y 21 de julio',
      rules: {
        subSections: [
          { id: '100', title: 'Día', body: 'jueves, 7 y 21 de julio de 2022' },
          { id: '101', title: 'Tipo de Promoción', body: 'Sorteo' },
          {
            id: '102',
            title: 'Reglas',
            body:
              'Miembros de Tarjeta Negra, ¡¡elijan el premio correcto y ganen hasta $3,500!! El jueves, 7 y 21 de julio a las 7 PM, 8 PM y 9 PM, un miembro de la tarjeta Miccosukee One de nivel Negro ganará $250 Free Play. Los tres ganadores regresarán a las 9:15 PM y jugarán entre sí para ganar de $1,250 a $3,500 en efectivo.',
          },
          {
            id: '103',
            title: 'PARA CALIFICAR',
            body:
              'Miembros de la tarjeta Miccosukee One de nivel Negro deberán ganar 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de julio a las 9 AM hasta el 21 de julio a las 8:45 PM.',
          },
          {
            id: '104',
            title: 'Fechas y Horarios',
            body: '7 y 21 de julio, a las 7 PM, 8 PM y 9 PM',
          },
          {
            id: '105',
            title: 'Cantidad de Ganadores por Sorteo',
            body: 'Un (1) ganador a las 7 PM, 8 PM y 9 PM',
          },
          {
            id: '106',
            title: 'Lugar del Sorteo',
            body:
              'Los sorteos y la entrega de premios serán en el Player’s Club.',
          },
          {
            id: '107',
            title: 'Cantidad de Entradas Permitidas por Persona',
            body: 'Los jugadores pueden acumular entradas ilimitadas.',
          },
          {
            id: '108',
            title: 'Tipo de Premio y Cantidades',
            body:
              'Un (1) premio de $250 Free Play a las 7 PM, 8 PM y 9 PM. Los tres (3) concursantes de las 9:15 PM ganarán uno de los siguientes premios en efectivo [1 - $1,250] [1 - $2,000] [1 - $3,500].',
          },
          {
            id: '109',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body: 'Jugadores sólo pueden ganar una vez por día de sorteo.',
          },
          {
            id: '1010',
            title: 'Reglas de No Asistencia',
            body:
              'Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos. Si los tres (3) jugadores no regresan a las 9:15 PM, se sorteará a los concursantes para llenar todos los espacios vacantes. Los premios de $250 Free Play calificados no se otorgarán a los concursantes de reemplazo.',
          },
          {
            id: '1011',
            title: 'Reglas del Juego',
            body:
              'Los ganadores de las 7 PM, 8 PM y 9 PM (o los concursantes de reemplazo) regresarán a las 9:15 PM para elegir sus premios (un total de 3 jugadores). En el orden en que calificaron, los concursantes elegirán un vehículo de premio que determinará la cantidad ganada. Los jugadores seleccionarán su vehículo de premio en el orden en que fueron elegidos de la tómbola.',
          },
          {
            id: '1012',
            title: 'Reglas de Boletos de Sorteo / Tómbola',
            body:
              'La tómbola estará disponible del 5 – 7 de julio para el sorteo del 7 de julio, y del 15 – 21 de julio para el sorteo del 21 de julio. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Black Card VIP Giveaway”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados y no serán elegibles para ganar. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no se podrán depositar en la tómbola durante el sorteo.',
          },
          {
            id: '1013',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Elegibilidad para promoción por niveles basada en el estado de juego del 1 de julio. Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Los premios se retendrán durante treinta (30) días si no se proporciona una identificación válida, emitida por el gobierno y aprobada para jugar, al momento de ganar. Cualquier premio retenido que no se reclame dentro de los treinta (30) días se perderá. Las promociones sólo están disponibles para miembros de Miccosukee One. Free Play es válido por treinta días y en máquinas seleccionadas. Los puntos acumulados en cualquier promoción del multiplicador de puntos de bono no se aplican a entradas de rifas adicionales ni al avance de nivel de tarjeta. Los premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 11,
      title: 'Sorteo VIP para Tarjeta Roja',
      img: cardImage12,
      oneLiner:
        'Tarjetas Rojas, ganen una parte de $3,000 Free Play | 7 y 21 de julio',
      rules: {
        subSections: [
          { id: '110', title: 'Día', body: 'jueves, 7 y 21 de julio de 2022' },
          { id: '111', title: 'Tipo de Promoción', body: 'Premios Ricochet' },
          {
            id: '112',
            title: 'Reglas',
            body:
              '¡Llamando a todos los miembros de nivel Rojo! El jueves, 7 y 21 de julio, entre las 6 PM y 9 PM, hasta 24 miembros de la tarjeta Miccosukee One de nivel Rojo ganarán $100 o $150 Free Play por premio de rebote.',
          },
          {
            id: '113',
            title: 'PARA CALIFICAR',
            body:
              'Miembros de la tarjeta Miccosukee One de nivel ROJO que estén jugando activamente con su tarjeta Miccosuke One',
          },
          {
            id: '114',
            title: 'Fecha y Horarios de Sorteos',
            body: '7 y 21 de julio, de 6 PM – 9 PM',
          },
          {
            id: '115',
            title: 'Ganadores',
            body:
              'Un miembro de la tarjeta Miccosukee One de nivel Rojo que active el premio de rebote mientras juega ganará $150 Free Play y un (1) jugador adicional de nivel Rojo que esté jugando con su tarjeta Miccosukee One y que sea elegido al azar cuando el premio sea activado ganará $100 Free Play.',
          },
          {
            id: '116',
            title: 'Lugar de Promoción',
            body: 'Máquinas de juego que acepten la tarjeta Miccosukee One',
          },
          {
            id: '117',
            title: 'Tipo de Premio y Cantidades',
            body:
              'El jugador que active el premio y un (1) ganador adicional seleccionado al azar durante hasta doce (12) oportunidades recibirán $100 o $150 Free Play.',
          },
          {
            id: '118',
            title: 'Restricciones de Premio',
            body: 'Los jugadores pueden ganar varias veces.',
          },
          {
            id: '119',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Elegibilidad para promoción por niveles basada en el estado de juego del 1 de julio. Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play válido por treinta días y en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 12,
      title: 'Sorteo VIP para Tarjeta Blanca',
      img: cardImage13,
      oneLiner:
        'Tarjetas Blancas, ganen $500 Free Play y hasta $7,500 en Efectivo | 14 y 28 de julio',
      rules: {
        subSections: [
          { id: '120', title: 'Día', body: 'jueves, 14 y 28 de julio de 2022' },
          { id: '121', title: 'Tipo de Promoción', body: 'Sorteo' },
          {
            id: '122',
            title: 'Reglas',
            body:
              'Miembros de Tarjeta Blanca, ¡¡elijan el premio correcto y ganen hasta $7,500!! El jueves, 14 y 28 de julio a las 7 PM, 8 PM y 9 PM, un miembro de la tarjeta Miccosukee One de nivel Blanco ganará $500 Free Play. Los tres ganadores regresarán a las 9:15 PM y jugarán entre sí para ganar de $2,500 a $7,500 en efectivo.',
          },
          {
            id: '123',
            title: 'PARA CALIFICAR',
            body:
              'Miembros de la tarjeta Miccosukee One de nivel Blanco deberán ganar 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de julio a las 9 AM hasta el 28 de julio a las 8:45 PM.',
          },
          {
            id: '124',
            title: 'Fechas y Horarios',
            body: '14 y 28 de julio a las 7 PM, 8 PM y 9 PM',
          },
          {
            id: '125',
            title: 'Cantidad de Ganadores por Sorteo',
            body: 'Un (1) ganador a las 7 PM, 8 PM y 9 PM',
          },
          {
            id: '126',
            title: 'Lugar del Sorteo',
            body:
              'Los sorteos y la entrega de premios serán en el Player’s Club.',
          },
          {
            id: '127',
            title: 'Cantidad de Entradas Permitidas por Persona',
            body: 'Los jugadores pueden acumular entradas ilimitadas.',
          },
          {
            id: '128',
            title: 'Tipo de Premio y Cantidades',
            body:
              'Un (1) premio de $500 Free Play a las 7 PM, 8 PM y 9 PM. Los tres (3) concursantes de las 9:15 PM ganarán uno de los siguientes premios en efectivo [1 - $2,500] [1 - $4,000] [1 - $7,500].',
          },
          {
            id: '129',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body: 'Jugadores sólo pueden ganar una vez por día de sorteo.',
          },
          {
            id: '1210',
            title: 'Reglas de No Asistencia',
            body:
              'Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos. Si los tres (3) jugadores no regresan a las 9:15 PM, se sorteará a los concursantes para llenar todos los espacios vacantes. Los premios de $500 Free Play calificados no se otorgarán a los concursantes de reemplazo.',
          },
          {
            id: '1211',
            title: 'Reglas del Juego',
            body:
              'Los ganadores de las 7 PM, 8 PM y 9 PM (o los concursantes de reemplazo) regresarán a las 9:15 PM para elegir sus premios (un total de 3 jugadores). En el orden en que calificaron, los concursantes elegirán un vehículo de premio que determinará la cantidad ganada. Los jugadores seleccionarán su vehículo de premio en el orden en que fueron elegidos de la tómbola.',
          },
          {
            id: '1212',
            title: 'Reglas de Boletos de Sorteo / Tómbola',
            body:
              'La tómbola estará disponible del 8 – 14 de julio para el sorteo del 14 de julio, y del 22 – 28 de julio para el sorteo del 28 de julio. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “White Card VIP Giveaway”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados y no serán elegibles para ganar. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no se podrán depositar en la tómbola durante el sorteo.',
          },
          {
            id: '1213',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Elegibilidad para promoción por niveles basada en el estado de juego del 1 de julio. Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Los premios se retendrán durante treinta (30) días si no se proporciona una identificación válida, emitida por el gobierno y aprobada para jugar, al momento de ganar. Cualquier premio retenido que no se reclame dentro de los treinta (30) días se perderá. Las promociones sólo están disponibles para miembros de Miccosukee One. Free Play es válido por treinta días y en máquinas seleccionadas. Los puntos acumulados en cualquier promoción del multiplicador de puntos de bono no se aplican a entradas de rifas adicionales ni al avance de nivel de tarjeta. Los premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 13,
      title: 'Piscina de Dinero',
      img: cardImage14,
      oneLiner: 'Ganadores se repartirán $25,000 en Efectivo el 30 de julio!',
      rules: {
        subSections: [
          { id: '130', title: 'Día', body: 'sábado, 30 de julio de 2022' },
          { id: '131', title: 'Tipo de Promoción', body: 'Sorteo' },
          {
            id: '132',
            title: 'Reglas',
            body:
              '¡Tenemos una piscina llena de $25,000 en efectivo para que siga disfrutando su verano! El sábado, 30 de julio, tendremos sorteos cada hora de 5 PM a 9 PM donde los miembros de Miccosukee One ganarán $5,000 en efectivo.',
          },
          {
            id: '133',
            title: 'PARA CALIFICAR',
            body:
              'Gane 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de julio a las 9 AM hasta el 30 de julio a las 8:45 PM. Esta promoción contará con un multiplicador de entradas de bono todos los viernes y sábados en los que los jugadores pueden ganar entradas. Los invitados recibirán una entrada de bono por cada 200 puntos que ganen desde las 9 AM hasta las 4 AM, y hasta las 8:45 PM del 30 de julio.',
          },
          {
            id: '134',
            title: 'Fechas y Horarios',
            body:
              'Los sorteos serán a las 5 PM, 6 PM, 7 PM, 8 PM y 9 PM el 30 de julio.',
          },
          {
            id: '135',
            title: 'Cantidad de Ganadores por Sorteo',
            body: 'Un ganador será elegido por sorteo.',
          },
          {
            id: '136',
            title: 'Lugar del Sorteo',
            body:
              'Los sorteos y la entrega de premios serán en el Player’s Club.',
          },
          {
            id: '137',
            title: 'Cantidad de Entradas Permitidas por Persona',
            body: 'Los jugadores pueden acumular entradas ilimitadas.',
          },
          {
            id: '138',
            title: 'Tipo de Premio y Cantidades',
            body:
              'Un (1) premio en efectivo de $5,000 a las 5 PM, 6 PM, 7 PM, 8 PM y 9 PM',
          },
          {
            id: '139',
            title: 'Reglas de No Asistencia',
            body:
              'Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.',
          },
          {
            id: '1310',
            title: 'Reglas para Entradas de Bono',
            body:
              'El 1, 2, 8, 9, 15, 16, 22, 23 y 29 de julio, y hasta las 8:45 PM del 30 de julio, los jugadores pueden recibir una entrada de bono por cada 200 puntos que ganen. Los jugadores deben ganar y recolectar sus entradas de bono desde las 9 AM del viernes hasta las 4 AM del domingo, cada fin de semana por separado. Cualquier entrada que no se reclame durante el período de tiempo estipulado se perderá y no se podrá imprimir en una fecha posterior.',
          },
          {
            id: '1311',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body:
              'Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.',
          },
          {
            id: '1312',
            title: 'Reglas de Boletos de Sorteo / Tómbola',
            body:
              'La tómbola estará disponible el 1 de julio a las 9 AM. La tómbola se vaciará después del último sorteo de la noche. Los boletos no se podrán depositar en la tómbola durante el sorteo. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Pool Party Payouts”. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados y no serán elegibles para ganar. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir.',
          },
          {
            id: '1313',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Los premios se retendrán durante treinta (30) días si no se proporciona una identificación válida, emitida por el gobierno y aprobada para jugar, al momento de ganar. Cualquier premio retenido que no se reclame dentro de los treinta (30) días se perderá. Las promociones sólo están disponibles para miembros de Miccosukee One. Los puntos acumulados en cualquier promoción del multiplicador de puntos de bono no se aplican a entradas de rifas adicionales ni al avance de nivel de tarjeta. Los premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 14,
      title: 'Bonanza de Cumpleaños',
      img: cardImage15,
      oneLiner:
        '¡Porción de $1,200 Free Play para los cumpleañeros de julio el 25 de julio!',
      rules: {
        subSections: [
          { id: '140', title: 'Día', body: 'lunes, 25 de julio de 2022' },
          { id: '141', title: 'Tipo de Promoción', body: 'Premios Ricochet' },
          {
            id: '142',
            title: 'Reglas',
            body:
              'El lunes, 25 de julio, entre las 6 PM y 10 PM, miembros que cumplan años en julio y estén jugando ativamente con sus tarjetas Miccosukee One serán elegibles para la oportunidad de ganar $25-$100 Free Play. Hasta $1,200 podrían ser otorgados en un máximo de 8 oportunidades.',
          },
          {
            id: '143',
            title: 'PARA CALIFICAR',
            body:
              'Miembros de la tarjeta Miccosukee One deben cumplir años en julio y estar jugando activamente en las máquinas con su tarjeta Miccosukee One.',
          },
          {
            id: '144',
            title: 'Fecha y Horarios',
            body: '25 de julio, de 6 PM – 10 PM',
          },
          {
            id: '145',
            title: 'Ganadores',
            body:
              'Miembros de la tarjeta Miccosukee One que activen el premio de rebote mientras juegan y varios ganadores al azar que estén jugando con su tarjeta Miccosukee One cuando el premio sea activado. Todos los jugadores deberán cumplir años en julio para ser elegibles para ganar.',
          },
          {
            id: '146',
            title: 'Ubicacion de Promoción',
            body: 'Máquinas de juego que acepten la tarjeta Miccosukee One',
          },
          {
            id: '147',
            title: 'Tipo de Premio y Cantidades',
            body:
              'El jugador que active el premio de rebote recibirá $100 y otros dos (2) ganadores recibirán $25 en cada oportunidad. Un total de $1,200 Free Play será otorgado durante un máximo de 8 oportunidades. Hasta 24 ganadores recibirán premios.',
          },
          {
            id: '148',
            title: 'Restricciones de Premio',
            body: 'Los jugadores pueden ganar múltiples veces.',
          },
          {
            id: '149',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Los premios no son transferibles. Free Play es válido durante 30 días y sólo en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 15,
      title: 'Nuevos Miembros y Referidos Ganan en Grande',
      img: cardImage16,
      oneLiner:
        '¡Inscríbase o refiera a un amigo para ganar $5,000 en Efectivo el 31 de julio!',
      rules: {
        subSections: [
          { id: '150', title: 'Día', body: 'domingo, 31 de julio de 2022' },
          { id: '151', title: 'Tipo de Promoción', body: 'Sorteo' },
          {
            id: '152',
            title: 'Reglas',
            body:
              '¡¡Nuevos miembros y miembros que hayan referido a un amigo a Miccosukee One pueden ganar en grande el domingo, 31 de julio a las 8 PM!! ¡¡¡Un nuevo miembro o un miembro que haya referido a un amigo en el mes de julio será elegido de la tómbola para ganar $5,000 en efectivo!!!',
          },
          {
            id: '153',
            title: 'PARA CALIFICAR',
            body:
              'Los miembros de Miccosukee One deben haberse registrado para obtener una tarjeta Miccosukee One o haber recomendado a un nuevo miembro en cualquier momento después del sorteo "Nuevos Miembros y Referidos Ganan en Grande" del mes anterior hasta las 7:45 pm del 31 de julio y estar presentes para ganar.',
          },
          {
            id: '154',
            title: 'Fecha y Horario de Sorteo',
            body: '31 de julio a las 8 PM',
          },
          {
            id: '155',
            title: 'Cantidad de Ganadores por Sorteo',
            body: 'Un (1) ganador será elegido a las 8 PM.',
          },
          {
            id: '156',
            title: 'Ubicación de Sorteo',
            body:
              'Los sorteos y la entrega de premios serán en el Player’s Club.',
          },
          {
            id: '157',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body:
              'Cada nuevo miembro elegible recibirá un boleto de sorteo. Miembros recibirán un boleto de sorteo por cada nuevo miembro que refieran.',
          },
          {
            id: '158',
            title: 'Tipo de Premio y Cantidades',
            body: 'Un (1) premio en efectivo de $5,000 a las 8 PM',
          },
          {
            id: '159',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body:
              'Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.',
          },
          {
            id: '1510',
            title: 'Reglas de No Asistencia',
            body:
              'Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.',
          },
          {
            id: '1511',
            title: 'Reglas de Boletos de Sorteo / Tómbola',
            body:
              'La tómbola estará disponible el 31 de julio. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “New Members & Referrals Win Big”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados y no serán elegibles para ganar. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.',
          },
          {
            id: '1512',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Los premios se retendrán durante treinta (30) días si no se proporciona una identificación válida, emitida por el gobierno y aprobada para jugar, al momento de ganar. Cualquier premio retenido que no se reclame dentro de los treinta (30) días se perderá. Las promociones sólo están disponibles para miembros de Miccosukee One. Free Play es válido durante 30 días y sólo en máquinas seleccionadas. Los puntos acumulados en cualquier promoción del multiplicador de puntos de bono no se aplican a entradas de rifas adicionales ni al avance de nivel de tarjeta. Los premios no son transferibles. Debe tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
  ],
};
