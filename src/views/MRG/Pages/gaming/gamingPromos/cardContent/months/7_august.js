// Imagest
import cardImage1 from 'assets/media/img/mrg/monthly_promos/0_recurring/NewMembersBonus_Logo.png';
import cardImage2 from 'assets/media/img/mrg/monthly_promos/0_recurring/VIPEnrollmentBonus_Logo.png';
import cardImage3 from 'assets/media/img/mrg/monthly_promos/8_august/SeniorTuesdays_Logo.png';
import cardImage4 from 'assets/media/img/mrg/monthly_promos/0_recurring/LunchBreakHotSeat_Logo.png';
import cardImage5 from 'assets/media/img/mrg/monthly_promos/8_august/TakeTheCase_Logo.png';
import cardImage6 from 'assets/media/img/mrg/monthly_promos/0_recurring/VIPGiveawayBlackCard_Logo.png';
import cardImage7 from 'assets/media/img/mrg/monthly_promos/0_recurring/RedCardVIPRicochet_Logo.png';
import cardImage8 from 'assets/media/img/mrg/monthly_promos/8_august/5KToPlay_Logo.png';
import cardImage9 from 'assets/media/img/mrg/monthly_promos/0_recurring/GiftGiveaway_Logo.png';
import cardImage10 from 'assets/media/img/mrg/monthly_promos/0_recurring/VIPGiveawayWhiteCard_Logo.png';
import cardImage11 from 'assets/media/img/mrg/monthly_promos/8_august/VIPGift_Logo.png';
import cardImage12 from 'assets/media/img/mrg/monthly_promos/8_august/TheChoiceIsYours_Logo.png';
import cardImage13 from 'assets/media/img/mrg/monthly_promos/0_recurring/HappyBirthdayHotSeat_Logo.png';
import cardImage14 from 'assets/media/img/mrg/monthly_promos/0_recurring/NewMembers_ReferralsWinBig_Logo.png';

export const august = {
  month: 'august',
  monthEs: 'agosto',
  calendarLink:
    'https://mapa-media.s3.amazonaws.com/mrg_monthly_promos/august_en.pdf',
  calendarLinkEs:
    'https://mapa-media.s3.amazonaws.com/mrg_monthly_promos/august_sp.pdf',
  data: [
    {
      id: 0,
      title: 'New Member Bonus',
      img: cardImage1,
      oneLiner:
        'Sign up today, receive $25 Free Play. Plus, qualify to win $2,500 Cash, $2,500 Free Play, & a one-night hotel stay on Aug. 31!',
      rules: {
        subSections: [
          { id: '00', title: 'Day', body: 'All month of August' },
          { id: '01', title: 'Promotion Type', body: 'New Member' },
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
          { id: '04', title: 'Dates and Times', body: 'All month of August' },
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
              'Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play is valid until 1:59 AM on September 1 and on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 1,
      title: 'VIP Enrollment Bonus',
      img: cardImage2,
      oneLiner:
        'Certified VIPs, score hundreds in VIP Bonus Play just for signing up!',
      rules: {
        subSections: [
          { id: '10', title: 'Day', body: 'All month of August' },
          { id: '11', title: 'Promotion Type', body: 'Tier/ Status Match' },
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
              'Player name on valid photo ID must match the name on the provided Players Card. Players must provide address, email, and/or phone to be eligible for the VIP Bonus program. Card and ID must not be damaged, altered, or otherwise illegible. Limit one bonus issuance per person. Offer is only available to new players and must occur upon initial enrollment. No exceptions. Must be 18 years of age or older. Must have valid, government-issued, gaming-approved ID and be physically present with the original ID to register. Free Play is valid on select machines only. Players will have until 1:59 AM on September 1 to redeem Free Play credits. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details.',
          },
        ],
      },
    },
    {
      id: 2,
      title: 'Senior Tuesdays',
      img: cardImage3,
      oneLiner:
        'Guests 55+ Play & Earn $10 Free Play, plus qualify to earn a free extra Bingo Pack, every Tuesday, from 9 AM – midnight.',
      rules: {
        subSections: [
          {
            id: '20',
            title: 'Day',
            body: 'Tuesday, August 2, 9, 16, 23 & 30, 2022',
          },
          { id: '21', title: 'Promotion Type', body: 'Ricochet Rewards' },
          {
            id: '22',
            title: 'Rules',
            body:
              'Tuesdays are for seniors at Miccosukee Resort & Gaming! On August 2, 9, 16, 23 & 30, between 9 AM and midnight, guests 55 and over who earn 20 points gaming on their Miccosukee One card will receive $10 in Free Play. Plus, seniors who earn 100 points on their Miccosukee One card will earn a free Extra Bingo Pack good for that Friday!',
          },
          {
            id: '23',
            title: 'TO QUALIFY',
            body:
              'Miccosukee One members must be 55 years old or older & meet play requirements from 9 AM - 11:59 PM.',
          },
          {
            id: '24',
            title: 'Dates and Times',
            body: 'August 2, 9, 16, 23 & 30, from 9 AM - 11:59 PM',
          },
          {
            id: '25',
            title: 'Winners',
            body:
              "Miccosukee One members who meet the 20-point criteria will be awarded $10 Free Play. Miccosukee One members who meet the 100-point requirement may claim their voucher redeemable for one Extra Bingo Pack from the Miccosukee One Player's Club.",
          },
          {
            id: '26',
            title: 'Promotion Location',
            body:
              'Gaming devices that accept Miccosukee One cards and the Players Club',
          },
          {
            id: '27',
            title: 'Prize Restrictions',
            body:
              "Players can win one (1) $10 Free Play Prize and one (1) Extra Bingo Pack per promotional day. Players must accumulate the required points between 9 AM - 11:59 PM. Players have until 2 AM the following day to collect the Extra Bingo Pack voucher from the Player's Club. All unclaimed vouchers will be forfeited. Extra Bingo Pack voucher is only valid for the first Friday after the day it was earned. Purchase of the initial Bingo admissions pack is required to redeem the Extra Bingo Pack. Vouchers for extra Bingo packs must be redeemed at the Bingo Admissions counter. Lost or stolen vouchers will not be replaced.",
          },
          {
            id: '28',
            title: 'General Rule Disclaimers',
            body:
              'Eligibility for age-based promotion is based on the player’s age one day before the promotion starts. Promotions are only available for eligible Miccosukee One members. Prizes are not transferable. Free Play is valid for 30 days and on select machines only. Must be 55 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 3,
      title: 'Lunch Break Hot Seat',
      img: cardImage4,
      oneLiner:
        'Win a share of $1,000 Free Play every Wednesday in August, from 11 AM – 2 PM!',
      rules: {
        subSections: [
          {
            id: '30',
            title: 'Day',
            body: 'Wednesday, August 3, 10, 17, 24 & 31, 2022',
          },
          { id: '31', title: 'Promotion Type', body: 'Ricochet Rewards' },
          {
            id: '32',
            title: 'Rules',
            body:
              'Your lunch is hot and ready, and so is the Free Play!!! On Wednesday, August 3, 10, 17, 24 & 31, between 11 AM and 2 PM, up to 40 Miccosukee One members will win $25 Free Play via ricochet hot seat.',
          },
          {
            id: '33',
            title: 'TO QUALIFY',
            body:
              "Miccosukee One members must be actively gaming on their Miccosukee One Player's card.",
          },
          {
            id: '34',
            title: 'Dates and Times',
            body: 'August 3, 10, 17, 24 & 31, from 11 AM - 2 PM',
          },
          {
            id: '35',
            title: 'Winners',
            body:
              'Miccosukee One member who triggers the ricochet prize through their play will win $25 Free Play, and three (3) additional random winners playing with their Miccosukee One card at the time the prize is triggered will win $25 Free Play.',
          },
          {
            id: '36',
            title: 'Promotion Location',
            body: 'Gaming devices that accept Miccosukee One cards.',
          },
          {
            id: '37',
            title: 'Prize Type and Amounts',
            body:
              'The player who triggers the prize and three (3) additional random winners in up to ten (10) occurrences will receive $25 Free Play.',
          },
          {
            id: '38',
            title: 'Prize Restrictions',
            body: 'Players can win multiple times.',
          },
          {
            id: '39',
            title: 'General Rule Disclaimers',
            body:
              'Promotions are only available for Miccosukee One members. Prizes are not transferable. Free Play is valid for 30 days and on select machines only. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 4,
      title: 'Take the Case',
      img: cardImage5,
      oneLiner:
        'Pick the right case & claim your share of $35,000 cash on Wednesday, Aug. 3, 10, 17 & 24! Drawings at 7 PM & 9 PM.',
      rules: {
        subSections: [
          {
            id: '40',
            title: 'Day',
            body: 'Wednesday, August 3, 10, 17 & 24, 2022',
          },
          { id: '41', title: 'Promotion Type', body: 'Drawing' },
          {
            id: '42',
            title: 'Rules',
            body:
              'Take the right case and claim your share of $35K. On Wednesday, August 3, 10, 17 & 24, at 7 PM & 9 PM, two lucky Miccosukee One members can win up to $5,000 in cash!',
          },
          {
            id: '43',
            title: 'TO QUALIFY',
            body:
              'Miccosukee One members must earn 100 points on their Miccosukee One card for each drawing ticket. Points can be earned from July 27 at 9 AM to August 24 at 8:45 PM.',
          },
          {
            id: '44',
            title: 'Dates and Times',
            body: 'August 3, 10, 17 & 24, at 7 PM & 9 PM',
          },
          {
            id: '45',
            title: 'Number of Winners Per Drawing',
            body: 'Two (2) winners at 7 PM & 9 PM',
          },
          {
            id: '46',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              "Drawings and prize giveaways will take place at the Player's Club.",
          },
          {
            id: '47',
            title: 'Max Number of Entries',
            body: 'Players can earn an unlimited amount of entries.',
          },
          {
            id: '48',
            title: 'Prize Type and Amounts',
            body:
              'Cash prizes available to be won are $1,000, $1,500, $2,000, $3,000, $4,000 & $5,000.',
          },
          {
            id: '49',
            title: 'Amount of Wins Permitted Per Guest',
            body:
              'Players can only win once in any single drawing with multiple winners.',
          },
          {
            id: '410',
            title: 'No Show Rules / Rollover Rules',
            body:
              'Must be present to win. The prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification, and Player’s Card within ten (10) minutes of being announced, and another name will be drawn until the prize is claimed. Players must locate and identify the corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.',
          },
          {
            id: '411',
            title: 'Game Rules',
            body:
              'If present, winners will pick a single prize vehicle. A total of 16 prize vehicles will start the promotion and will not be reset after they are picked. Each week will start with fewer cases than the prior week. The prize vehicles available to be picked by the winners will be worth the following amounts [3 - $1,000] [4 - $1,500] [4 - $2,000] [3 - $3,000] [1 - $4,000] [1 - $5,000].',
          },
          {
            id: '412',
            title: 'Drawing Ticket / Barrel Rules',
            body:
              "Barrel will be available on August 1. Upon receiving a drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Take the Case.” The drum will be cleared after the last drawing of the night. The player must have retained the smaller portion of the perforated ticket present in order to redeem the prize. Lost, stolen, or damaged tickets will not be replaced or accepted to claim a prize. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
          },
          {
            id: '413',
            title: 'General Rule Disclaimers',
            body:
              'Must have a valid, government-issued, gaming-approved ID to claim the prize. Prizes will be retained for thirty (30) days if a valid, government-issued, gaming-approved ID is not provided at the time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card-level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 5,
      title: 'Black Card VIP Giveaway',
      img: cardImage6,
      oneLiner:
        'Black Tier members, win a share of $7,500 cash & $2,500 Free Play with hot seats & drawings from 5 PM – 9 PM on Thursday, Aug. 4 & 18!',
      rules: {
        subSections: [
          { id: '50', title: 'Day', body: 'Thursday, August 4 & 18, 2022' },
          { id: '51', title: 'Promotion Type', body: 'Drawing' },
          {
            id: '52',
            title: 'Rules',
            body:
              "Black Card members, we're giving you two ways to win on your giveaway day!! On Thursday, August 4 & 18, between 5 PM & 9 PM, Miccosukee One Black Tier members can win their share of $7,500 cash & $2,500 Free Play via Hot Seats and Drawings!!!",
          },
          {
            id: '53',
            title: 'TO QUALIFY',
            body:
              "Miccosukee One Black Tier members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from July 28 at 9 AM to August 18 at 8:45 PM. Miccosukee One Black Tier members must be actively gaming on their Miccosukee One Player's card to be eligible for the ricochet hot seat portion of the promotion.",
          },
          {
            id: '54',
            title: 'Dates and Times',
            body:
              'Drawings will occur on August 4 & 18 at 7 PM, 8 PM & 9 PM. Ricochet hot seats will run from 5 PM - 9 PM on August 4 & 18.',
          },
          {
            id: '55',
            title: 'Number of Winners per Drawing',
            body: 'One (1) drawing winner at 7 PM, 8 PM & 9 PM',
          },
          {
            id: '56',
            title: 'Ricochet Winners',
            body:
              'Miccosukee One Black Tier member who triggers the ricochet prize through their play will win $50 Free Play, and one (1) additional random Black Tier member playing with their Miccosukee One card at the time the prize is triggered will win $50 Free Play.',
          },
          {
            id: '57',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              "Drawings and prize giveaways will take place at the Player's Club. Ricochet Hot Seats will take place at gaming devices that accept Miccosukee One cards.",
          },
          {
            id: '58',
            title: 'Max Number of Drawing Entries',
            body: 'Players can earn an unlimited amount of entries.',
          },
          {
            id: '59',
            title: 'Drawing Prize Type and Amounts',
            body:
              'If present winners may claim the following drawing cash prizes [7 PM = $2,000] [8 PM = $2,500] [9 PM = $3,000].',
          },
          {
            id: '510',
            title: 'Ricochet Hot Seat Prize Type and Amounts',
            body:
              'The player who triggers the prize and one (1) additional random winner in up to twenty-five (25) occurrences will receive $50 in Free Play.',
          },
          {
            id: '511',
            title: 'Amount of Wins Permitted per Guest',
            body:
              'Players can only win once in any single drawing with multiple winners. Players can win multiple ricochet hot seats per day.',
          },
          {
            id: '512',
            title: 'No Show Rules / Rollover Rules',
            body:
              'Must be present to win. The prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification, and Player’s Card within ten (10) minutes of being announced, and another name will be drawn until the prize is claimed. The player must locate and identify the corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.',
          },
          {
            id: '513',
            title: 'Drawing Ticket / Barrel Rules',
            body:
              "Barrel will be available August 1 – 4 for the 8/4 drawing and August 12 – 18 for the 8/18 drawing. Upon receiving a drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Black Card VIP Giveaway.” The drum will be cleared after the last drawing of the night. The player must have retained the smaller portion of the perforated ticket present in order to redeem the prize. Lost, stolen, or damaged tickets will not be replaced or accepted to claim a prize. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
          },
          {
            id: '514',
            title: 'General Rule Disclaimers',
            body:
              'Eligibility for tiered promotion based on August 1 status. Must have a valid, government-issued, gaming-approved ID to claim the prize. Free Play is valid for thirty days and on select machines only. Prizes will be retained for thirty (30) days if a valid, government-issued, gaming-approved ID is not provided at the time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card-level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 6,
      title: 'Red Card VIP Giveaway',
      img: cardImage7,
      oneLiner:
        'Red Cards, win a share of $3,000 cash & $1,000 Free Play with hot seats & drawings from 5 PM – 9 PM on Thursday, Aug. 4 & 18!',
      rules: {
        subSections: [
          { id: '60', title: 'Day', body: 'Thursday, August 4 & 18, 2022' },
          { id: '61', title: 'Promotion Type', body: 'Drawing' },
          {
            id: '62',
            title: 'Rules',
            body:
              "Red Card members, we're giving you two ways to win on your giveaway day!! On Thursday, August 4 & 18, between 5 PM & 9 PM, Miccosukee One Red Tier members can win their share of $3,000 cash & $1,000 Free Play via Hot Seats and Drawings!!!",
          },
          {
            id: '63',
            title: 'TO QUALIFY',
            body:
              "Miccosukee One Red Tier members must earn 100 points on their Miccosukee One card for each drawing ticket. Points can be earned from July 28 at 9 AM to August 18 at 8:45 PM. Miccosukee One Red Tier members must be actively gaming on their Miccosukee One Player's card to be eligible for the ricochet hot seat portion of the promotion.",
          },
          {
            id: '64',
            title: 'Dates and Times',
            body:
              'Drawings will occur on August 4 & 18 at 7 PM, 8 PM & 9 PM. Ricochet hot seats will run from 5 PM – 9 PM on August 4 & 18.',
          },
          {
            id: '65',
            title: 'Number of Winners per Drawing',
            body: 'One (1) drawing winner at 7 PM, 8 PM & 9 PM',
          },
          {
            id: '66',
            title: 'Ricochet Winners',
            body:
              'Miccosukee One Red Card member who triggers the ricochet prize through their play will win $20 Free Play, and one (1) additional random Red Card member playing with their Miccosukee One card at the time the prize is triggered will win $20 Free Play.',
          },
          {
            id: '67',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              "Drawings and prize giveaways will take place at the Player's Club. Ricochet Hot Seats will take place at gaming devices that accept Miccosukee One cards.",
          },
          {
            id: '68',
            title: 'Max Number of Drawing Entries',
            body: 'Players can earn an unlimited amount of entries.',
          },
          {
            id: '69',
            title: 'Drawing Prize Type and Amounts',
            body:
              'If present, winners may claim the following drawing cash prizes [7 PM = $1,000] [8 PM = $500] [9 PM = $1,500].',
          },
          {
            id: '610',
            title: 'Ricochet Hot Seat Prize Type and Amounts',
            body:
              'The player who triggers the prize and one (1) additional random winner in up to twenty-five (25) occurrences will receive $20 in Free Play.',
          },
          {
            id: '611',
            title: 'Amount of Wins Permitted per Guest',
            body:
              'Players can only win once in any single drawing with multiple winners. Players can win multiple ricochet hot seats per day.',
          },
          {
            id: '612',
            title: 'Drawing No Show Rules / Rollover Rules',
            body:
              'Must be present to win. The prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification, and Player’s Card within ten (10) minutes of being announced, and another name will be drawn until the prize is claimed. Players must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.',
          },
          {
            id: '613',
            title: 'Drawing Ticket / Barrel Rules',
            body:
              "Barrel will be available August 1 – 4 for the 8/4 drawing and August 12 – 18 for the 8/18 drawing. Upon receiving a drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “Red Card VIP Giveaway.” The drum will be cleared after the last drawing of the night. The player must have retained the smaller portion of the perforated ticket present in order to redeem the prize. Lost, stolen, or damaged tickets will not be replaced or accepted to claim a prize. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
          },
          {
            id: '614',
            title: 'General Rule Disclaimers',
            body:
              'Eligibility for tiered promotion based on August 1 status. Must have a valid, government-issued, gaming-approved ID to claim the prize. Free Play is valid for thirty days and on select machines only. Prizes will be retained for thirty (30) days if a valid, government-issued, gaming-approved ID is not provided at the time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card-level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 7,
      title: '5K to Play',
      img: cardImage8,
      oneLiner:
        'Grab a share of your summer bonus with $2,500 cash & $2,500 Free Play on Sunday, Aug. 7 & 21. Drawings every hour, from 1 PM – 5 PM.',
      rules: {
        subSections: [
          { id: '70', title: 'Day', body: 'Sunday, August 7 & 21, 2022' },
          { id: '71', title: 'Promotion Type', body: 'Drawing' },
          {
            id: '72',
            title: 'Rules',
            body:
              "On Sunday, August 7 & 21, we're giving away $5K to help you play!! We'll have drawings every hour from 1 PM to 5 PM, where Miccosukee One members will be called to win their share of $5,000.",
          },
          {
            id: '73',
            title: 'TO QUALIFY',
            body:
              'Earn 100 points on your Miccosukee One card for each drawing ticket. Points can be earned between August 1 at 9 AM and August 21 at 4:45 PM.',
          },
          {
            id: '74',
            title: 'Dates and Times',
            body:
              'Drawings will occur at 1 PM, 2 PM, 3 PM, 4 PM & 5 PM on August 7 & 21.',
          },
          {
            id: '75',
            title: 'Number of Winners per Drawing',
            body: 'One (1) winner will be drawn per drawing.',
          },
          {
            id: '76',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              "The drawings and prize payments will occur at the Player's Club.",
          },
          {
            id: '77',
            title: 'Max Number of Entries',
            body: 'Players can earn an unlimited amount of entries.',
          },
          {
            id: '78',
            title: 'Prize Type and Amounts',
            body:
              'If present, winners may claim $500 Cash & $500 Free Play at 1 PM, 2 PM, 3 PM, 4 PM & 5 PM.',
          },
          {
            id: '79',
            title: 'Drawing No Show Rules / Rollover Rules',
            body:
              'Must be present to win. The prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification, and Player’s Card within ten (10) minutes of being announced, and another name will be drawn until the prize is claimed. Players must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.',
          },
          {
            id: '710',
            title: 'Amount of Wins Permitted per Guest',
            body:
              'Players can only win once in any single drawing with multiple winners.',
          },
          {
            id: '711',
            title: 'Drawing Ticket / Barrel Rules',
            body:
              "Barrel will be available on August 1 at 9 AM. The drum will be emptied after the last drawing of the day. Entries may not be entered into the drum during the drawing. Upon receiving a drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub's larger perforated portion into the appropriate drum of the respective raffle, \"5K To Play.” The player must have retained the smaller portion of the perforated ticket in order to redeem the prize. Lost, stolen, or damaged tickets will not be replaced or accepted to claim a prize. Tickets placed in the wrong drum will be disqualified and will not be reissued.",
          },
          {
            id: '712',
            title: 'General Rule Disclaimers',
            body:
              'Must have a valid, government-issued, gaming-approved ID to claim the prize. Free Play is valid for thirty days and on select machines only. Prizes will be retained for thirty (30) days if a valid, government-issued, gaming-approved ID is not provided at the time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card-level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 8,
      title: 'Gift Giveaway',
      img: cardImage9,
      oneLiner:
        'Free Electronic Essentials for qualified members! Pick up your gifts at the Cypress Lounge on designated Mondays & Tuesdays in August, from 12 PM – 10 PM.',
      rules: {
        subSections: [
          {
            id: '80',
            title: 'Day',
            body:
              'Monday, August 1, 8, 15 & 22, and Tuesday, August 2, 9, 16 & 23, 2022',
          },
          { id: '81', title: 'Promotion Type', body: 'Continuity Program' },
          {
            id: '82',
            title: 'TO QUALIFY',
            body:
              "Come into MRG for a lovely gift. Miccosukee One members may qualify for a continuity gift set based upon rated gaming on their Miccosukee One card from 7/01/2021 through 6/30/2022. Player’s Miccosukee One account must also include a valid address and be enrolled to receive mail offers from Miccosukee Resort & Gaming. Invited guests can join us on designated Mondays or Tuesdays in August to collect a different piece each week. Visit all 4 weeks to collect the whole set! Miccosukee One members who did not receive the monthly invite may qualify for weekly continuity gift items by accumulating 50 points on their Miccosukee One card from 9 AM to 9:45 PM on distribution days. To redeem, players must visit the Miccosukee One Player's Club for their voucher.",
          },
          {
            id: '83',
            title: 'Dates and Times',
            body: 'August 1-2, 8-9, 15-16 & 22-23, from 12 PM – 10 PM',
          },
          {
            id: '84',
            title: 'Number of Recipients per Distribution',
            body:
              'Gifts will be available on a first-come, first-serve basis, while supplies last.',
          },
          {
            id: '85',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              'Continuity gifts will be distributed from the Cypress Lounge.',
          },
          {
            id: '86',
            title: 'Prize Type and Amounts',
            body:
              'If present, invited guests may claim the following gifts in random distribution order [USB 3 Mode Selfie Light - $29.99] [Stereo Earbuds w/Mic - $49.99] [10,000 MAH Power Bank w/Charging Cord - $24.99] [Twin Portable Wireless Speakers - $49.99].',
          },
          {
            id: '87',
            title: 'Amount of Gifts Permitted per Guest',
            body: 'One weekly gift item per invited guest',
          },
          {
            id: '88',
            title: 'No Show Rules / Rollover Rules',
            body:
              'Must be present to receive the gift. The gift will automatically be forfeited if the player fails to produce the Miccosukee One card and valid photo ID during the dates and times of corresponding distribution.',
          },
          {
            id: '89',
            title: 'General Rule Disclaimers',
            body:
              'Must have a valid, government-issued, gaming-approved ID to claim the gift. Promotions are only available for eligible Miccosukee One members. Offers are non-transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded. Exceptions may be considered on a case-by-case basis depending on circumstances.',
          },
        ],
      },
    },
    {
      id: 9,
      title: 'White Card VIP Giveaway',
      img: cardImage10,
      oneLiner:
        'White Tier members, win a share of $15,000 cash & $5,000 Free Play with hot seats & drawings from 5 PM – 9 PM on Thursday, Aug. 11 & 25!',
      rules: {
        subSections: [
          { id: '90', title: 'Day', body: 'Thursday, August 11 & 25, 2022' },
          { id: '91', title: 'Promotion Type', body: 'Drawing' },
          {
            id: '92',
            title: 'Rules',
            body:
              "White Card members, we're giving you two ways to win on your giveaway day!! On Thursday, August 11 & 25, between 5 PM & 9 PM, Miccosukee One White Tier members can win their share of $15,000 cash & $5,000 Free Play via Hot Seats and Drawings!!!",
          },
          {
            id: '93',
            title: 'TO QUALIFY',
            body:
              "Miccosukee One White Tier members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from August 1 at 9 AM to August 25 at 8:45 PM. Miccosukee One White Tier members must be actively gaming on their Miccosukee One Player's card to be eligible for the ricochet hot seat portion of the promotion.",
          },
          {
            id: '94',
            title: 'Dates and Times',
            body:
              'Drawings will occur on August 11 & 25 at 7 PM, 8 PM & 9 PM. Ricochet hot seats will run from 5 PM - 9 PM on August 11 & 25.',
          },
          {
            id: '95',
            title: 'Number of Winners per Drawing',
            body: 'One (1) drawing winner at 7 PM, 8 PM & 9 PM',
          },
          {
            id: '96',
            title: 'Ricochet Winners',
            body:
              'Miccosukee One White Card member who triggers the ricochet prize through their play will win $100 Free Play, and one (1) additional random White Card member playing with their Miccosukee One card at the time the prize is triggered will win $100 Free Play.',
          },
          {
            id: '97',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              "Drawings and prize giveaways will take place at the Player's Club. Ricochet Hot Seats will take place at gaming devices that accept Miccosukee One cards.",
          },
          {
            id: '98',
            title: 'Max Number of Drawing Entries',
            body: 'Players can earn an unlimited amount of entries.',
          },
          {
            id: '99',
            title: 'Drawing Prize Type and Amounts',
            body:
              'If present, winners may claim the following drawing cash prizes [7 PM = $3,000] [8 PM = $5,000] [9 PM = $7,000].',
          },
          {
            id: '910',
            title: 'Ricochet Hot Seat Prize Type and Amounts',
            body:
              'The player who triggers the prize and one (1) additional random winner in up to twenty-five (25) occurrences will receive $100 in Free Play.',
          },
          {
            id: '911',
            title: 'Amount of Wins Permitted per Guest',
            body:
              'Players can only win once in any single drawing with multiple winners. Players can win multiple ricochet hot seats per day.',
          },
          {
            id: '912',
            title: 'No Show Rules / Rollover Rules',
            body:
              'Must be present to win. The prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification, and Player’s Card within ten (10) minutes of being announced, and another name will be drawn until the prize is claimed. The player must locate and identify the corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.',
          },
          {
            id: '913',
            title: 'Drawing Ticket / Barrel Rules',
            body:
              "Barrel will be available August 5 – 11 for the 8/11 drawing and August 19 – 25 for the 8/25 drawing. Upon receiving a drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle “White Card VIP Giveaway.” The drum will be cleared after the last drawing of the night. The player must have retained the smaller portion of the perforated ticket present in order to redeem the prize. Lost, stolen, or damaged tickets will not be replaced or accepted to claim a prize. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
          },
          {
            id: '914',
            title: 'General Rule Disclaimers',
            body:
              'Eligibility for tiered promotion based on August 1 status. Must have a valid, government-issued, gaming-approved ID to claim the prize. Free Play is valid for thirty days and on select machines only. Prizes will be retained for thirty (30) days if a valid, government-issued, gaming-approved ID is not provided at the time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card-level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 10,
      title: 'VIP Gift',
      img: cardImage11,
      oneLiner:
        'Invited guests may collect their gifts in the High-Limit Gaming Room on Friday, Aug. 5 & 19, from 2 PM – 8 PM.',
      rules: {
        subSections: [
          { id: '100', title: 'Day', body: 'Friday, August 5 & 19, 2022' },
          { id: '101', title: 'Promotion Type', body: 'Gifting Program' },
          {
            id: '102',
            title: 'TO QUALIFY',
            body:
              'Come into MRG for a lovely gift. Miccosukee One members may qualify for a VIP gift set based upon rated gaming on their Miccosukee One card. Invited guests, join us on designated Fridays in August to collect a different piece each week. Visit both weeks to collect the whole set!',
          },
          {
            id: '103',
            title: 'Dates and Times',
            body: 'August 5 & 19, from 2 PM – 8 PM',
          },
          {
            id: '104',
            title: 'Number Of Recipients per Distribution',
            body:
              'Gifts will be available on a first-come, first-serve basis, while supplies last.',
          },
          {
            id: '105',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              'VIP gifts will be distributed from the High Limit Gaming Room.',
          },
          {
            id: '106',
            title: 'Prize Type and Amounts',
            body:
              'If present, invited guests may claim the following gifts in random distribution order [TAHARI Home - 20pc Dinnerware Set - $159.95] [TAHARI Home - 20 Pc Flatware Set in Retail Box with Handle - $139.95].',
          },
          {
            id: '107',
            title: 'Amount of Gifts Permitted per Guest',
            body: 'One weekly gift item per invited guest',
          },
          {
            id: '108',
            title: 'No Show Rules / Rollover Rules',
            body:
              'Must be present to receive a gift. The gift will automatically be forfeited if the player fails to produce the Miccosukee One card and valid photo ID during the dates and times of corresponding distribution.',
          },
          {
            id: '109',
            title: 'General Rule Disclaimers',
            body:
              'Must have a valid, government-issued, gaming-approved ID to claim a gift. Promotions are only available for eligible Miccosukee One members. Offers are non-transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded. Exceptions may be considered on a case-by-case basis depending on circumstances.',
          },
        ],
      },
    },
    {
      id: 11,
      title: 'The Choice is Yours Giveaway',
      img: cardImage12,
      oneLiner:
        'Four players will win their share of up to $20,000 in cash or Free play on Saturday, Aug. 27! Drawings from 6 PM – 9 PM.',
      rules: {
        subSections: [
          { id: '110', title: 'Day', body: 'Saturday, August 27, 2022' },
          { id: '111', title: 'Promotion Type', body: 'Drawing' },
          {
            id: '112',
            title: 'Rules',
            body:
              'Cash or Free Play??? The Choice Is Yours!!! On August 27 at 6 PM, 7 PM, 8 PM & 9 PM, one lucky Miccosukee One member will win their share of up to $20,000!',
          },
          {
            id: '113',
            title: 'TO QUALIFY',
            body:
              'Miccosukee One members must earn 200 points on their Miccosukee One card for each drawing ticket. Points can be earned from August 1 at 9 AM to August 27 at 8:45 PM. This promotion will feature a bonus entry multiplier every Friday and Saturday that players are allowed to earn entries. Guests will receive one bonus entry for every 200 points they earn from 9 AM – 4 AM and through 8:45 PM on August 27.',
          },
          {
            id: '114',
            title: 'Dates and Times',
            body: 'August 27 at 6 PM, 7 PM, 8 PM & 9 PM',
          },
          {
            id: '115',
            title: 'Number of Winners per Drawing',
            body: 'One (1) winner at 6 PM, 7 PM, 8 PM & 9 PM.',
          },
          {
            id: '116',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              "Drawings and prize giveaways will take place at the Player's Club.",
          },
          {
            id: '117',
            title: 'Max Number of Entries',
            body: 'Players can earn an unlimited amount of entries.',
          },
          {
            id: '118',
            title: 'Prize Type and Amounts',
            body:
              'Winners may choose one of two prize options [$4,000 - Cash] or [$5,000 - Free Play]. Free Play is valid for 30 days.',
          },
          {
            id: '119',
            title: 'Amount of Wins Permitted per Guest',
            body:
              'Players can only win once in any single drawing with multiple winners.',
          },
          {
            id: '1110',
            title: 'No Show Rules / Rollover Rules',
            body:
              'Must be present to win. The prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification, and Player’s Card within ten (10) minutes of being announced, and another name will be drawn until the prize is claimed. Players must locate and identify the corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.',
          },
          {
            id: '1111',
            title: 'Bonus Entry Rules',
            body:
              'On August 5, 6, 12, 13, 19, 20, 26, and through 8:45 PM on August 27, players can earn one bonus entry for every 200 points they earn. Players must earn & collect their bonus entries from 9 AM Friday through 4 AM Sunday each weekend separately. Any entries not claimed during the appropriate time frame will be forfeited and cannot be printed at a later date.',
          },
          {
            id: '1112',
            title: 'Drawing Ticket / Barrel Rules',
            body:
              "Barrel will be available on August 18. Upon receiving a drawing ticket from the Player's Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle, “The Choice Is Yours Giveaway.” The drum will be cleared after the last drawing of the night. The player must have retained the smaller portion of the perforated ticket present in order to redeem the prize. Lost, stolen, or damaged tickets will not be replaced or accepted to claim a prize. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.",
          },
          {
            id: '1113',
            title: 'General Rule Disclaimers',
            body:
              'Must have a valid, government-issued, gaming-approved ID to claim the prize. Prizes will be retained for thirty (30) days if a valid, government-issued, gaming-approved ID is not provided at the time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Free Play is valid for 30 days and on select machines only. Daily Free Play download restrictions may apply by tier. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card-level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 12,
      title: 'Happy Birthday Hot Seat',
      img: cardImage13,
      oneLiner:
        'Celebrate your August Birthday with up to ten chances to win your share of $2,000 Free Play on Monday, Aug. 29, from 6 PM – 9 PM.',
      rules: {
        subSections: [
          { id: '120', title: 'Day', body: 'Monday, August 29, 2022' },
          { id: '121', title: 'Promotion Type', body: 'Ricochet / Drawing' },
          {
            id: '122',
            title: 'Rules',
            body:
              'Happy Birthday, August babies!! On Monday, August 29, between the hours of 6 PM and 9 PM, August birthday guests who are actively gaming with their Miccosukee One card will be eligible for a chance to win a share of $2,000 in Free Play.',
          },
          {
            id: '123',
            title: 'TO QUALIFY',
            body:
              'Miccosukee One members must have a birthday during the month of August and be actively playing gaming machines with their Miccosukee One card.',
          },
          {
            id: '124',
            title: 'Dates and Times',
            body: 'August 29, between 6 PM - 9 PM',
          },
          {
            id: '125',
            title: 'Winners',
            body:
              'Miccosukee One member who triggers the ricochet prize through their play will win $25 Free Play, and three (3) additional random winners playing with their Miccosukee One card at the time the prize is triggered will win $25 Free Play. Four of the primary ricochet winners will also be called to win $250 in Free Play. All winners must have an August Birthday to be eligible.',
          },
          {
            id: '126',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              "Player's Club and gaming machines that accept Player's Club cards",
          },
          {
            id: '127',
            title: 'Prize Type and Amounts',
            body:
              'The player who triggers the prize and three (3) additional random winners in up to ten (10) occurrences will receive $25 in Free Play. Four of the primary ricochet winners will also win a $250 Free Play.',
          },
          {
            id: '128',
            title: 'Amount of Wins Permitted per Guest',
            body: 'Players can win multiple times.',
          },
          {
            id: '129',
            title: 'Drawing Rules',
            body:
              "Four of the primary ricochet winners will be announced on the gaming floor to win their $250 Free Play prize. Winners will keep the $25 ricochet Free Play prize regardless if they arrive at the player's club within 10 minutes.",
          },
          {
            id: '1210',
            title: 'No Show Rules / Roll Over Rules',
            body:
              'Must be present to win the $250 Free Play prize. $250 Free Play prize will automatically be forfeited if the player fails to independently produce the valid identification and Player’s Card within ten (10) minutes of being announced. No shows will not result in a redraw.',
          },
          {
            id: '1211',
            title: 'General Rule Disclaimers',
            body:
              'Must have a valid, government-issued, gaming-approved ID to claim the prize. Prizes will be retained for thirty (30) days if a valid, government-issued, gaming-approved ID is not provided at the time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Free Play is valid for 30 days and on select machines only. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card-level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
          },
        ],
      },
    },
    {
      id: 13,
      title: 'New Members & Referrals Win Big',
      img: cardImage14,
      oneLiner:
        'A new Miccosukee One member or Referral from August will win $2,500 cash, $2,500 Free Play & a one-night hotel stay on Wednesday, Aug. 31 at 8 PM!',
      rules: {
        subSections: [
          { id: '130', title: 'Day', body: 'Wednesday, August 31, 2022' },
          { id: '131', title: 'Promotion Type', body: 'Drawing' },
          {
            id: '132',
            title: 'Rules',
            body:
              'New Members and Referrals can win big on Wednesday, August 31 at 8 PM!! One New Member or Referral from the month of August will be chosen from the drum and will win $2,500 cash, $2,500 Free Play, and a one-night hotel stay!!!',
          },
          {
            id: '133',
            title: 'TO QUALIFY',
            body:
              'Miccosukee One members must have signed up for a Miccosukee One card or referred a new member any time after the prior months New Member & Referrals Win Big drawing through 7:45 PM on August 31 and be present to win.',
          },
          { id: '134', title: 'Dates and Times', body: 'August 31 at 8 PM' },
          {
            id: '135',
            title: 'Number of Winners per Drawing',
            body: 'One (1) winner will be drawn at 8 PM.',
          },
          {
            id: '136',
            title: 'Drawing Location / Prize Giveaway Location',
            body:
              "Drawings and prize giveaways will take place at the Player's Club.",
          },
          {
            id: '137',
            title: 'Max Number of Entries',
            body:
              'Every eligible new member will receive one drawing ticket. Referrals will receive one drawing ticket per new member they refer.',
          },
          {
            id: '138',
            title: 'Prize Type and Amounts',
            body:
              'One (1) $2,500 cash prize & $2,500 Free Play prize at 8 PM. Winners will also receive a one-night hotel stay.',
          },
          {
            id: '139',
            title: 'Amount of Wins Permitted per Guest',
            body:
              'Players can only win once in any single drawing with multiple winners.',
          },
          {
            id: '1310',
            title: 'No Show Rules / Rollover Rules',
            body:
              'Must be present to win. The prize will automatically be forfeited if the player fails to independently produce the winning ticket stub, valid identification, and Player’s Card within ten (10) minutes of being announced, and another name will be drawn until the prize is claimed. Players must locate and identify corresponding drawing stub on their own accord. Miccosukee Resort & Gaming employees are not permitted to handle player retained drawing stubs once issued.',
          },
          {
            id: '1311',
            title: 'Drawing Ticket / Barrel Rules',
            body:
              'Barrel will be available on August 31. Upon receiving a drawing ticket from the Player\'s Club, it is the sole duty of the player to place the ticket stub’s larger perforated portion into the appropriate drum of the respective raffle "New Members & Referrals Win Big.” The drum will be cleared after the last drawing of the night. The player must have retained the smaller portion of the perforated ticket present in order to redeem the prize. Lost, stolen, or damaged tickets will not be replaced or accepted to claim a prize. Tickets placed in the wrong drum will be disqualified and will not be reissued. Entries may not be entered into the drum during the drawing.',
          },
          {
            id: '1312',
            title: 'General Rule Disclaimers',
            body:
              'Must have a valid, government-issued, gaming-approved ID to claim the prize. Free Play is valid for thirty days and on select machines only. Daily Free Play download restrictions may apply by tier. Prizes will be retained for thirty (30) days if a valid, government-issued, gaming-approved ID is not provided at the time of win. Any retained prize not claimed within thirty (30) days will be forfeited. Promotions are only available for Miccosukee One members. Points accumulated in any Bonus Point Multiplier promotion do not apply towards additional raffle entries or towards card-level tier advancement. Prizes are not transferable. Must be 18 years of age or older to qualify. Once disqualification is declared, it is final. Malfunctions void all plays and pays. Offer is subject to change or cancellation, without notice, at the discretion of management. See a Player’s Club Attendant for details. Any individual that has self-excluded or been trespassed by Miccosukee Resort & Gaming may not be enrolled or participate in the Miccosukee One program without written documentation of such status being rescinded.',
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
      oneLiner:
        'Regístrese hoy, reciba $25 Free Play. Además, ¡califique para ganar $2,500 en efectivo, $2,500 Free Play y estadía de una noche en el hotel el 31 de agosto!',
      rules: {
        subSections: [
          { id: '00', title: 'Día', body: 'Todo el mes de agosto' },
          { id: '01', title: 'Tipo de Promoción', body: 'Nuevo Miembro' },
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
            body: 'Todo el mes de agosto',
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
              'Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play es válido hasta las 1:59 AM del 1 de septiembre y sólo en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 1,
      title: 'Bono de Inscripción VIP',
      img: cardImage2,
      oneLiner:
        'VIP certificados, ¡obtengan cientos en Juego de Bono VIP al registrarse!',
      rules: {
        subSections: [
          { id: '10', title: 'Día', body: 'Todo el mes de agosto' },
          { id: '11', title: 'Tipo de Promoción', body: 'Igualamos su Nivel' },
          {
            id: '12',
            title: 'Reglas',
            body:
              "Los nuevos jugadores que se unan al programa Miccosukee One y presenten una tarjeta de Player's Club de nivel ascendido y/o un estado verificado de una propiedad competidora de Florida, ¡recibirán JUEGO DE BONO VIP (VIP BONUS PLAY)!",
          },
          {
            id: '13',
            title: 'Lugar de Promoción',
            body:
              "La inscripción al programa se llevará a cabo en el Miccosukee One Player's Club. La promoción se llevará a cabo en cualquier máquina de juego que acepte tarjetas de jugador Miccosukee One. Los créditos de Free Play se descargarán a la cuenta de la tarjeta Miccosukee One del jugador.",
          },
          {
            id: '14',
            title: 'PARA CALIFICAR',
            body:
              'Los miembros que se unan al programa Miccosukee One como inscripción VIP de Nivel I recibirán un incentivo de bienvenida único de $100 VIP Bonus Play. Los miembros que se unan al programa Miccosukee One como inscripción VIP de Nivel II recibirán un incentivo de bienvenida único de $200 VIP Bonus Play. VIP BONUS PLAY está disponible sólo para inscripciones de nuevos jugadores.',
          },
          {
            id: '15',
            title:
              'Los jugadores que muestren las siguientes tarjetas de niveles de la competencia son elegibles para el juego de bono VIP de $100 de Nivel I',
            body:
              '[Magic City Casino: Illusionist] [The Casino at Dania Beach: Sapphire] [The Big Easy "Mardi-Gras": Gold] [Calder: Gold, Black] [Hialeah Park: Silver] [Casino Miami: Silver] [Seminole Properties: Platinum] [Isle Casino Racing Pompano Park: Platinum] [Casino at Gulfstream Park: Place].',
          },
          {
            id: '16',
            title:
              'Los jugadores que muestren las siguientes tarjetas de niveles de la competencia son elegibles para el juego de bono VIP de $200 de Nivel II',
            body:
              '[Magic City Casino: Oracle, Wizard] [The Casino at Dania Beach: Diamond, Legend] [The Big Easy “Mardi-Gras”: Black] [Calder: Red, Royal] [Hialeah Park: Black] [Casino Miami: Elite, VIP] [Seminole Properties: Elite, X-Card] [Isle Casino Racing Pompano Park: Diamond, Diamond Plus, Diamond Elite, Seven Stars] [ Casino en Gulfstream Park: Win, Triple Crown].',
          },
          {
            id: '17',
            title: 'REGLAS GENERALES',
            body:
              'El nombre que el jugador muestre en su ID debe igualar el nombre en su Player’s Card. Los jugadores deben proporcionar su dirección, correo electrónico y/o teléfono para ser elegibles para el programa VIP Bonus. La tarjeta y la identificación no deben estar dañadas, alteradas o ilegibles. Límite de una emisión de bonos por persona. La oferta sólo está disponible para nuevos jugadores y debe realizarse en el momento de la inscripción inicial. Sin excepciones. Debe tener 18 años de edad o más. Debe tener una identificación válida, emitida por el gobierno, aprobada para jugar, y estar físicamente presente con la identificación original para registrarse. Free Play es válido sólo en máquinas seleccionadas. Los jugadores tendrán hasta la 1:59 AM del 1 de septiembre para canjear sus créditos de Free Play. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para más detalles.',
          },
        ],
      },
    },
    {
      id: 2,
      title: 'Martes de Mayores',
      img: cardImage3,
      oneLiner:
        'Invitados 55+ Jueguen y Ganen $10 Free Play, y además califiquen para ganar un paquete de Bingo adicional gratis todos los martes, de 9 AM a medianoche.',
      rules: {
        subSections: [
          {
            id: '20',
            title: 'Día',
            body: 'martes 2, 9, 16, 23 y 30 de agosto de 2022',
          },
          { id: '21', title: 'Tipo de Promoción', body: 'Premios Ricochet' },
          {
            id: '22',
            title: 'Reglas',
            body:
              '¡Los martes son para los adultos maduritos en Miccosukee Resort & Gaming! Los días 2, 9, 16, 23 y 30 de agosto, entre las 9 AM y la medianoche, los invitados mayores de 55 años que ganen 20 puntos jugando con su tarjeta Miccosukee One recibirán $10 Free Play. Además, ¡los jugadores que ganen 100 puntos en su tarjeta Miccosukee One obtendrán un paquete de Bingo adicional gratis para el juego de ese viernes!',
          },
          {
            id: '23',
            title: 'PARA CALIFICAR',
            body:
              'Los miembros de Miccosukee One deben tener 55 años o más y cumplir con los requisitos de juego de 9 AM a 11:59 PM.',
          },
          {
            id: '24',
            title: 'Fechas y Horarios',
            body: '2, 9, 16, 23 y 30 de agosto, de 9 AM a 11:59 PM',
          },
          {
            id: '25',
            title: 'Ganadores',
            body:
              "Los miembros de Miccosukee One que cumplan con el criterio de 20 puntos recibirán $10 Free Play. Los miembros de Miccosukee One que cumplan con el requisito de 100 puntos pueden reclamar su cupón canjeable por un paquete de Bingo adicional en el Miccosukee One Player's Club.",
          },
          {
            id: '26',
            title: 'Lugar de Promoción',
            body: 'Máquinas de juego que acepten la tarjeta Miccosukee One',
          },
          {
            id: '27',
            title: 'Restricciones de Premio',
            body:
              "Los jugadores pueden ganar un (1) premio de $10 Free Play y un (1) paquete de Bingo adicional por día promocional. Los jugadores deben acumular los puntos requeridos entre las 9 AM y las 11:59 PM. Los jugadores tienen hasta las 2 AM del día siguiente para retirar el cupón del paquete de Bingo adicional del Player's Club. Todos los cupones no reclamados se perderán. El cupón del paquete de Bingo extra sólo es válido para el primer viernes después del día en que se ganó. Se requiere la compra del paquete de admisión de Bingo inicial para canjear el paquete de Bingo adicional. Los cupones para paquetes de Bingo adicionales deben canjearse en el mostrador de Admisiones de Bingo. Los cupones perdidos o robados no serán reemplazados.",
          },
          {
            id: '28',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Elegibilidad para la promoción por edad se basa en la edad del jugador un día antes del inicio de la promoción. Las promociones sólo están disponibles para miembros elegibles de Miccosukee One. Los premios no son transferibles. Free Play es válido durante 30 días y sólo en máquinas seleccionadas. Debe tener 55 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 3,
      title: 'Almuerzo de Premios',
      img: cardImage4,
      oneLiner:
        '¡Gane una parte de $1,000 Free Play cada miércoles de agosto, de 11 AM – 2 PM!',
      rules: {
        subSections: [
          {
            id: '30',
            title: 'Día',
            body: 'miércoles 3, 10, 17, 24 y 31 de agosto de 2022',
          },
          { id: '31', title: 'Tipo de Promoción', body: 'Premios Ricochet' },
          {
            id: '32',
            title: 'Reglas',
            body:
              '¡Su almuerzo de Free Play está listo y caliente! El miércoles 3, 10, 17, 24 y 31 de agosto, entre las 11 AM y 2 PM, hasta 40 miembros de Miccosukee One ganarán $25 Free Play por premio de rebote.',
          },
          {
            id: '33',
            title: 'PARA CALIFICAR',
            body:
              'Miembros de Miccosukee One que estén jugando activamente con sus tarjetas de Miccosukee One',
          },
          {
            id: '34',
            title: 'Fechas y Horarios',
            body: '3, 10, 17, 24 y 31 de agosto, de 11 AM – 2 PM',
          },
          {
            id: '35',
            title: 'Ganadores',
            body:
              'El miembro de Miccosukee One que active el premio de rebote a través de su juego ganará $25 Free Play y tres (3) ganadores adicionales seleccionados al azar y que estén jugando con su tarjeta Miccosukee One en el momento en que se active el premio ganarán $25 Free Play.',
          },
          {
            id: '36',
            title: 'Lugar de Promoción',
            body: 'Máquinas de juego que acepten la tarjeta Miccosukee One',
          },
          {
            id: '37',
            title: 'Tipo de Premio y Cantidades',
            body:
              'El jugador que active el premio y tres (3) ganadores seleccionados al azar durante hasta diez (10) oportunidades recibirán $25 Free Play.',
          },
          {
            id: '38',
            title: 'Restricciones de Premio',
            body: 'Los jugadores pueden ganar varias veces.',
          },
          {
            id: '39',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One. Premios no son transferibles. Free Play válido por treinta días y en máquinas seleccionadas. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un asistente del Player’s Club para más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 4,
      title: 'Maletín de Dinero',
      img: cardImage5,
      oneLiner:
        '¡Elija el maletín correcto y reclame su parte de $35,000 en efectivo el miércoles, 3, 10, 17 y 24 de agosto! Sorteos a las 7 PM y 9 PM.',
      rules: {
        subSections: [
          {
            id: '40',
            title: 'Día',
            body: 'miércoles 3, 10, 17 y 24 de agosto de 2022',
          },
          { id: '41', title: 'Tipo de Promoción', body: 'Sorteo' },
          {
            id: '42',
            title: 'Reglas',
            body:
              'Elija el maletín correcto y reclame su parte de $35K. Los miércoles 3, 10, 17 y 24 de agosto a las 7 PM y 9 PM, ¡dos afortunados miembros de Miccosukee One pueden ganar hasta $5,000 en efectivo!',
          },
          {
            id: '43',
            title: 'PARA CALIFICAR',
            body:
              'Los miembros de Miccosukee One deben ganar 100 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 27 de julio a las 9 AM hasta el 24 de agosto a las 8:45 PM.',
          },
          {
            id: '44',
            title: 'Fechas y Horarios',
            body: '3, 10, 17 y 24 de agosto, a las 7 PM y 9 PM',
          },
          {
            id: '45',
            title: 'Cantidad de Ganadores por Sorteo',
            body: 'Dos (2) ganadores a las 7 PM y 9 PM',
          },
          {
            id: '46',
            title: 'Lugar del Sorteo',
            body:
              'Los sorteos y la entrega de premios serán en el Player’s Club.',
          },
          {
            id: '47',
            title: 'Cantidad de Entradas Permitidas por Persona',
            body: 'Los jugadores pueden acumular entradas ilimitadas.',
          },
          {
            id: '48',
            title: 'Tipo de premio y Cantidades',
            body:
              'Los premios en efectivo disponibles para ganar son $1,000, $1,500, $2,000, $3,000, $4,000 y $5,000.',
          },
          {
            id: '49',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body:
              'Los jugadores sólo pueden ganar una vez en un solo sorteo con múltiples ganadores.',
          },
          {
            id: '410',
            title: 'Reglas de No Asistencia',
            body:
              'Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.',
          },
          {
            id: '411',
            title: 'Reglas del Juego',
            body:
              'Si están presentes, los ganadores elegirán un solo vehículo de premio. Un total de 16 vehículos premiados comenzarán la promoción y no se reiniciarán una vez seleccionados. Cada semana comenzará con una cantidad menor de maletines que la semana anterior. Los vehículos de premio disponibles para ser elegidos por los ganadores valdrán las siguientes cantidades [3 - $1,000] [4 - $1,500] [4 - $2,000] [3 - $3,000] [1 - $4,000] [1 - $5,000].',
          },
          {
            id: '412',
            title: 'Reglas de Boletos de Sorteo / Tómbola',
            body:
              'La tómbola estará disponible el 1 de agosto. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Take the Case.” La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados y no serán elegibles para ganar. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no se podrán depositar en la tómbola durante el sorteo.',
          },
          {
            id: '413',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Los premios se retendrán durante treinta (30) días si no se proporciona una identificación válida, emitida por el gobierno y aprobada para jugar, al momento de ganar. Cualquier premio retenido que no se reclame dentro de los treinta (30) días se perderá. Las promociones sólo están disponibles para miembros de Miccosukee One. Free Play es válido por treinta días y en máquinas seleccionadas. Los puntos acumulados en cualquier promoción del multiplicador de puntos de bono no se aplican a entradas de rifas adicionales ni al avance de nivel de tarjeta. Los premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 5,
      title: 'Sorteo VIP para Tarjeta Negra',
      img: cardImage6,
      oneLiner:
        'Tarjetas Negras, ¡ganen su parte de $7,500 en efectivo y $2,500 Free Play por premio de rebote y sorteos de 5 PM – 9 PM el jueves, 4 y 18 de agosto!',
      rules: {
        subSections: [
          { id: '50', title: 'Día', body: 'jueves, 4 y 18 de agosto de 2022' },
          { id: '51', title: 'Tipo de Promoción', body: 'Sorteo' },
          {
            id: '52',
            title: 'Reglas',
            body:
              'Miembros de Tarjeta Negra, ¡les ofrecemos dos formas de ganar el día de su sorteo! El jueves 4 y 18 de agosto, entre las 5 PM y 9 PM, ¡miembros de Miccosukee One de Tarjeta Negra podrían ganar su parte de $7,500 en efectivo y $2,500 Free Play por premio de rebote y sorteos!',
          },
          {
            id: '53',
            title: 'PARA CALIFICAR',
            body:
              'Miembros de nivel Negro de la tarjeta Miccosukee One deben ganar 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 28 de julio a las 9 AM hasta el 18 de agosto a las 8:45 PM. Los miembros de Miccosukee One de nivel Negro deben estar jugando activamente con su tarjeta Miccosukee One para ser elegibles para ganar por premio de rebote durante esa parte de la promoción.',
          },
          {
            id: '54',
            title: 'Fechas y Horarios',
            body:
              'Los sorteos se realizarán el 4 y 18 de agosto a las 7 PM, 8 PM y 9 PM. Los premios de rebote estarán disponibles de 5 PM a 9 PM los días 4 y 18 de agosto.',
          },
          {
            id: '55',
            title: 'Cantidad de Ganadores por Sorteo',
            body:
              'Un (1) ganador será elegido por sorteo a las 7 PM, 8 PM y 9 PM.',
          },
          {
            id: '56',
            title: 'Ganadores por Premio de Rebote',
            body:
              'El miembro de Miccosukee One de nivel Negro que active el premio de rebote a través de su juego ganará $50 Free Play y un (1) miembro adicional de nivel Negro seleccionado al azar y que esté jugando con su tarjeta Miccosukee One en el momento en que se active el premio ganará $50 Free Play.',
          },
          {
            id: '57',
            title: 'Lugar del Sorteo',
            body:
              "Los sorteos y la entrega de premios se llevarán a cabo en el Player's Club. Para ganar por premio de rebote, deberá jugar en máquinas que acepten la tarjeta Miccosukee One.",
          },
          {
            id: '58',
            title: 'Cantidad de Entradas Permitidas por Persona',
            body: 'Los jugadores pueden acumular entradas ilimitadas.',
          },
          {
            id: '59',
            title: 'Tipo de Premio y Cantidades',
            body:
              'Si los ganadores están presentes, pueden reclamar los siguientes premios en efectivo del sorteo [7 PM = $2,000] [8 PM = $2,500] [9 PM = $3,000].',
          },
          {
            id: '510',
            title: 'Cantidades por Premio de Rebote',
            body:
              'El jugador que activa el premio y un (1) ganador adicional elegido al azar en hasta veinticinco (25) oportunidades recibirán $50 Free Play.',
          },
          {
            id: '511',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body:
              'Los jugadores sólo pueden ganar una vez en un solo sorteo con múltiples ganadores. Los jugadores pueden ganar múltiples veces por día en la promoción por premio de rebote.',
          },
          {
            id: '512',
            title: 'Reglas de No Asistencia',
            body:
              'Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.',
          },
          {
            id: '513',
            title: 'Reglas de Boletos de Sorteo / Tómbola',
            body:
              'La tómbola estará disponible del 1 – 4 de agosto para el sorteo del 4 de agosto, y del 12 – 18 de agosto para el sorteo del 18 de agosto. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Black Card VIP Giveaway.” La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados y no serán elegibles para ganar. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no se podrán depositar en la tómbola durante el sorteo.',
          },
          {
            id: '514',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Elegibilidad para promoción por niveles basada en el estado de juego del 1 de agosto. Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Los premios se retendrán durante treinta (30) días si no se proporciona una identificación válida, emitida por el gobierno y aprobada para jugar, al momento de ganar. Cualquier premio retenido que no se reclame dentro de los treinta (30) días se perderá. Las promociones sólo están disponibles para miembros de Miccosukee One. Free Play es válido por treinta días y en máquinas seleccionadas. Los puntos acumulados en cualquier promoción del multiplicador de puntos de bono no se aplican a entradas de rifas adicionales ni al avance de nivel de tarjeta. Los premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 6,
      title: 'Sorteo VIP para Tarjeta Roja',
      img: cardImage7,
      oneLiner:
        'Tarjetas Rojas, ¡ganen una parte de $3,000 en efectivo y $1,000 Free Play por premio rebote y sorteos de 5 PM – 9 PM el jueves, 4 y 18 de agosto!',
      rules: {
        subSections: [
          { id: '60', title: 'Día', body: 'jueves, 4 y 18 de agosto de 2022' },
          { id: '61', title: 'Tipo de Promoción', body: 'Sorteo' },
          {
            id: '62',
            title: 'Reglas',
            body:
              'Miembros de Tarjeta Roja, ¡les ofrecemos dos formas de ganar el día de su sorteo! El jueves 4 y 18 de agosto, entre las 5 PM y las 9 PM, ¡los miembros de Miccosukee One de nivel Rojo pueden ganar su parte de $3,000 en efectivo y $1,000 Free Play por premio de rebote y sorteos!',
          },
          {
            id: '63',
            title: 'PARA CALIFICAR',
            body:
              'Los miembros de Miccosukee One de nivel Rojo deben ganar 100 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 28 de julio a las 9 AM hasta el 18 de agosto a las 8:45 PM. Los miembros de Miccosukee One de nivel Rojo deben estar jugando activamente con su tarjeta Miccosukee One para ser elegibles para ganar por premio de rebote durante esa parte de la promoción.',
          },
          {
            id: '64',
            title: 'Fechas y Horarios',
            body:
              'Los sorteos se realizarán el 4 y 18 de agosto a las 7 PM, 8 PM y 9 PM. Los premios de rebote estarán disponibles de 5 PM a 9 PM los días 4 y 18 de agosto.',
          },
          {
            id: '65',
            title: 'Cantidad de Ganadores por Sorteo',
            body:
              'Un (1) ganador será elegido por sorteo a las 7 PM, 8 PM y 9 PM.',
          },
          {
            id: '66',
            title: 'Ganadores por Premio de Rebote',
            body:
              'El miembro de Miccosukee One de nivel Rojo que active el premio de rebote a través de su juego ganará $20 Free Play y un (1) miembro adicional de nivel Rojo seleccionado al azar y que esté jugando con su tarjeta Miccosukee One en el momento en que se active el premio ganará $20 Free Play.',
          },
          {
            id: '67',
            title: 'Lugar del Sorteo',
            body:
              "Los sorteos y la entrega de premios se llevarán a cabo en el Player's Club. Para ganar por premio de rebote, deberá jugar en máquinas que acepten la tarjeta Miccosukee One.",
          },
          {
            id: '68',
            title: 'Cantidad de Entradas Permitidas por Persona',
            body: 'Los jugadores pueden acumular entradas ilimitadas.',
          },
          {
            id: '69',
            title: 'Tipo de Premio y Cantidades',
            body:
              'Si los ganadores están presentes, pueden reclamar los siguientes premios en efectivo del sorteo [7 PM = $1,000] [8 PM= $500] [9 PM = $1,500].',
          },
          {
            id: '610',
            title: 'Cantidades por Premio de Rebote',
            body:
              'El jugador que activa el premio y un (1) ganador adicional elegido al azar en hasta veinticinco (25) oportunidades recibirán $20 Free Play.',
          },
          {
            id: '611',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body:
              'Los jugadores sólo pueden ganar una vez en un solo sorteo con múltiples ganadores. Los jugadores pueden ganar múltiples veces por día en la promoción por premio de rebote.',
          },
          {
            id: '612',
            title: 'Reglas de No Asistencia',
            body:
              'Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.',
          },
          {
            id: '613',
            title: 'Reglas de Boletos de Sorteo / Tómbola',
            body:
              'La tómbola estará disponible del 1 – 4 de agosto para el sorteo del 4 de agosto, y del 12 – 18 de agosto para el sorteo del 18 de agosto. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “Red Card VIP Giveaway.” La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados y no serán elegibles para ganar. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no se podrán depositar en la tómbola durante el sorteo.',
          },
          {
            id: '614',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Elegibilidad para promoción por niveles basada en el estado de juego del 1 de agosto. Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Los premios se retendrán durante treinta (30) días si no se proporciona una identificación válida, emitida por el gobierno y aprobada para jugar, al momento de ganar. Cualquier premio retenido que no se reclame dentro de los treinta (30) días se perderá. Las promociones sólo están disponibles para miembros de Miccosukee One. Free Play es válido por treinta días y en máquinas seleccionadas. Los puntos acumulados en cualquier promoción del multiplicador de puntos de bono no se aplican a entradas de rifas adicionales ni al avance de nivel de tarjeta. Los premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 7,
      title: '5K para Jugar',
      img: cardImage8,
      oneLiner:
        'Consiga una parte de su bono de verano con $2,500 en efectivo y $2,500 Free Play el domingo, 7 y 21 de agosto. Sorteos cada hora, de 1 PM – 5 PM.',
      rules: {
        subSections: [
          { id: '70', title: 'Día', body: 'domingo, 7 y 21 de agosto de 2022' },
          { id: '71', title: 'Tipo de Promoción', body: 'Sorteo' },
          {
            id: '72',
            title: 'Reglas',
            body:
              '¡¡El domingo 7 y 21 de agosto regalaremos $5K para ayudarle a jugar!! Tendremos sorteos cada hora de 1 PM a 5 PM donde se llamará a los miembros de Miccosukee One para ganar su parte de $5,000.',
          },
          {
            id: '73',
            title: 'PARA CALIFICAR',
            body:
              'Gane 100 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar entre el 1 de agosto a las 9 AM y el 21 de agosto a las 4:45 PM.',
          },
          {
            id: '74',
            title: 'Fechas y Horarios',
            body:
              'Los sorteos se realizarán a la 1 PM, 2 PM, 3 PM, 4 PM, y 5 PM los días 7 y 21 de agosto.',
          },
          {
            id: '75',
            title: 'Cantidad de Ganadores por Sorteo',
            body: 'Se sorteará un (1) ganador por sorteo.',
          },
          {
            id: '76',
            title: 'Lugar del Sorteo',
            body:
              "Los sorteos y la entrega de premios se llevarán a cabo en el Player's Club.",
          },
          {
            id: '77',
            title: 'Cantidad de Entradas Permitidas por Persona',
            body: 'Los jugadores pueden acumular entradas ilimitadas.',
          },
          {
            id: '78',
            title: 'Tipo de Premio y Cantidades',
            body:
              'Si están presentes, los ganadores pueden reclamar $500 en efectivo y $500 Free Play a la 1 PM, 2 PM, 3 PM, 4 PM y 5 PM.',
          },
          {
            id: '79',
            title: 'Reglas de No Asistencia',
            body:
              'Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.',
          },
          {
            id: '710',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body:
              'Los jugadores sólo pueden ganar una vez en un solo sorteo con múltiples ganadores.',
          },
          {
            id: '711',
            title: 'Reglas de Boletos de Sorteo / Tómbola',
            body:
              'La tómbola estará disponible el 1 de agosto a las 9 AM. La tómbola se vaciará después del último sorteo de la noche. Los boletos no se podrán depositar en la tómbola durante el sorteo. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “5K to Play.” El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados y no serán elegibles para ganar. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no se podrán depositar en la tómbola durante el sorteo.',
          },
          {
            id: '712',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Los premios se retendrán durante treinta (30) días si no se proporciona una identificación válida, emitida por el gobierno y aprobada para jugar, al momento de ganar. Cualquier premio retenido que no se reclame dentro de los treinta (30) días se perderá. Las promociones sólo están disponibles para miembros de Miccosukee One. Free Play es válido por treinta días y en máquinas seleccionadas. Los puntos acumulados en cualquier promoción del multiplicador de puntos de bono no se aplican a entradas de rifas adicionales ni al avance de nivel de tarjeta. Los premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 8,
      title: 'Entrega de Regalo',
      img: cardImage9,
      oneLiner:
        '¡Accesorios Electrónicos Gratis para miembros calificados! Reciba sus regalos en el Cypress Lounge los lunes y martes designados de agosto, de 12 PM – 10 PM.',
      rules: {
        subSections: [
          {
            id: '80',
            title: 'Día',
            body:
              'lunes 1, 8, 15, y 22 de agosto y martes 2, 9, 16 y 23 de agosto de 2022',
          },
          {
            id: '81',
            title: 'Tipo de Promoción',
            body: 'Programa de Continuidad',
          },
          {
            id: '82',
            title: 'PARA CALIFICAR',
            body:
              "Visite MRG para obtener un hermoso regalo. Los miembros de Miccosukee One pueden calificar para el set de obsequios de continuidad en función de los juegos clasificados en su tarjeta Miccosukee One del 1 de julio de 2021 hasta el 30 de junio de 2022. La cuenta Miccosukee One del jugador también debe incluir una dirección válida y estar inscrita para recibir ofertas por correo de Miccosukee Resort & Gaming. Los jugadores invitados pueden visitarnos los lunes o martes designados en agosto para recolectar una pieza diferente cada semana. ¡Visite las 4 semanas para coleccionar todo el conjunto! Los miembros de Miccosukee One que no recibieron la invitación mensual pueden calificar para artículos de regalo de continuidad semanal acumulando 50 puntos en su tarjeta Miccosukee One de 9 AM a 9:45 PM en los días de distribución. Para canjear el regalo, los jugadores deben visitar el Miccosukee One Player's Club para obtener su cupón.",
          },
          {
            id: '83',
            title: 'Fechas y Horarios',
            body: '1-2, 8-9, 15-16 y 22-23 de agosto, de 12 PM – 10 PM',
          },
          {
            id: '84',
            title: 'Número de Destinatarios por Distribución',
            body:
              'Los regalos estarán disponibles por orden de llegada, mientras dure la mercancía.',
          },
          {
            id: '85',
            title: 'Lugar de Entrega de Regalos',
            body:
              'Los regalos de continuidad se distribuirán en el Cypress Lounge.',
          },
          {
            id: '86',
            title: 'Tipo de Premio y Cantidades',
            body:
              'Si están presentes, los invitados pueden reclamar los siguientes regalos distribuidos al azar [Luz para selfie USB de 3 modos - $29.99] [Auriculares estéreo con micrófono - $49.99] [Banco de energía de 10,000 MAH con cable de carga - $24.99] [Altavoces inalámbricos portátiles dobles - $49.99].',
          },
          {
            id: '87',
            title: 'Cantidad de Regalos Permitidos por Invitado',
            body: 'Un artículo de regalo semanal por invitado',
          },
          {
            id: '88',
            title: 'Reglas de No Asistencia',
            body:
              'Debe estar presente para recibir el regalo. El regalo se perderá automáticamente si el jugador no presenta el cupón de regalo con su tarjeta Miccosukee One y una identificación válida durante las fechas y horarios de distribución establecidos.',
          },
          {
            id: '89',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One elegibles. Ofertas no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado. Se pueden considerar excepciones caso por caso dependiendo de las circunstancias.',
          },
        ],
      },
    },
    {
      id: 9,
      title: 'Sorteo VIP para Tarjeta Blanca',
      img: cardImage10,
      oneLiner:
        'Tarjetas Blancas, ¡ganen su parte de $15,000 en efectivo y $5,000 Free Play por premio de rebote y sorteos de 5 PM – 9 PM el jueves, 11 y 25 de agosto!',
      rules: {
        subSections: [
          { id: '90', title: 'Día', body: 'jueves, 11 y 25 de agosto de 2022' },
          { id: '91', title: 'Tipo de Promoción', body: 'Sorteo' },
          {
            id: '92',
            title: 'Reglas',
            body:
              'Miembros de Tarjeta Blanca, ¡les ofrecemos dos formas de ganar el día de su sorteo! El jueves 11 y 25 de agosto, entre las 5 PM y 9 PM, ¡miembros de Miccosukee One de Tarjeta Blanca podrían ganar su parte de $15,000 en efectivo y $5,000 Free Play por premio de rebote y sorteos!',
          },
          {
            id: '93',
            title: 'PARA CALIFICAR',
            body:
              'Miembros de nivel Blanco de la tarjeta Miccosukee One deben ganar 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de agosto a las 9 AM hasta el 25 de agosto a las 8:45 PM. Los miembros de Miccosukee One de nivel Blanco deben estar jugando activamente con su tarjeta Miccosukee One para ser elegibles para ganar por premio de rebote durante esa parte de la promoción.',
          },
          {
            id: '94',
            title: 'Fechas y Horarios',
            body:
              'Los sorteos se realizarán el 11 y 25 de agosto a las 7 PM, 8 PM y 9 PM. Los premios de rebote estarán disponibles de 5 PM a 9 PM los días 11 y 25 de agosto.',
          },
          {
            id: '95',
            title: 'Cantidad de Ganadores por Sorteo',
            body:
              'Un (1) ganador será elegido por sorteo a las 7 PM, 8 PM y 9 PM.',
          },
          {
            id: '96',
            title: 'Ganadores por Premio de Rebote',
            body:
              'El miembro de Miccosukee One de nivel Blanco que active el premio de rebote a través de su juego ganará $100 Free Play y un (1) miembro adicional de nivel Blanco seleccionado al azar y que esté jugando con su tarjeta Miccosukee One en el momento en que se active el premio ganará $100 Free Play.',
          },
          {
            id: '97',
            title: 'Lugar del Sorteo',
            body:
              "Los sorteos y la entrega de premios se llevarán a cabo en el Player's Club. Para ganar por premio de rebote, deberá jugar en máquinas que acepten la tarjeta Miccosukee One.",
          },
          {
            id: '98',
            title: 'Cantidad de Entradas Permitidas por Persona',
            body: 'Los jugadores pueden acumular entradas ilimitadas.',
          },
          {
            id: '99',
            title: 'Tipo de Premio y Cantidades',
            body:
              'Si los ganadores están presentes, pueden reclamar los siguientes premios en efectivo del sorteo [7 PM = $3,000] [8 PM = $5,000] [9 PM = $7,000].',
          },
          {
            id: '910',
            title: 'Cantidades por Premio de Rebote',
            body:
              'El jugador que activa el premio y un (1) ganador adicional elegido al azar en hasta veinticinco (25) oportunidades recibirán $100 Free Play.',
          },
          {
            id: '911',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body:
              'Los jugadores sólo pueden ganar una vez en un solo sorteo con múltiples ganadores. Los jugadores pueden ganar múltiples veces por día en la promoción por premio de rebote.',
          },
          {
            id: '912',
            title: 'Reglas de No Asistencia',
            body:
              'Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.',
          },
          {
            id: '913',
            title: 'Reglas de Boletos de Sorteo / Tómbola',
            body:
              'La tómbola estará disponible del 5 – 11 de agosto para el sorteo del 11 de agosto, y del 19 – 25 de agosto para el sorteo del 25 de agosto. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “White Card VIP Giveaway.” La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados y no serán elegibles para ganar. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no se podrán depositar en la tómbola durante el sorteo.',
          },
          {
            id: '914',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Elegibilidad para promoción por niveles basada en el estado de juego del 1 de agosto. Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Los premios se retendrán durante treinta (30) días si no se proporciona una identificación válida, emitida por el gobierno y aprobada para jugar, al momento de ganar. Cualquier premio retenido que no se reclame dentro de los treinta (30) días se perderá. Las promociones sólo están disponibles para miembros de Miccosukee One. Free Play es válido por treinta días y en máquinas seleccionadas. Los puntos acumulados en cualquier promoción del multiplicador de puntos de bono no se aplican a entradas de rifas adicionales ni al avance de nivel de tarjeta. Los premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 10,
      title: 'Regalo VIP',
      img: cardImage11,
      oneLiner:
        'Jugadores invitados pueden recolectar sus regalos en la Sala de Altas Apuestas el viernes, 5 y 19 de agosto, de 2 PM a 8 PM.',
      rules: {
        subSections: [
          {
            id: '100',
            title: 'Día',
            body: 'viernes, 5 y 19 de agosto de 2022',
          },
          {
            id: '101',
            title: 'Tipo de Promoción',
            body: 'Programa de Regalos',
          },
          {
            id: '102',
            title: 'PARA CALIFICAR',
            body:
              'Visite MRG para obtener un hermoso regalo. Los miembros de Miccosukee One pueden calificar para un set de regalo VIP según la calificación de juego en su tarjeta Miccosukee One. Los jugadores invitados pueden visitarnos los viernes designados en agosto para recolectar una pieza diferente cada semana. ¡Visite ambas semanas para coleccionar todo el conjunto!',
          },
          {
            id: '103',
            title: 'Fechas y Horarios',
            body: '5 y 19 de agosto, de 2 PM a 8 PM',
          },
          {
            id: '104',
            title: 'Número de Destinatarios por Distribución',
            body:
              'Los regalos estarán disponibles por orden de llegada, mientras dure la mercancía.',
          },
          {
            id: '105',
            title: 'Lugar de Entrega de Regalos',
            body:
              'Los regalos VIP se distribuirán en el Salón de Altas Apuestas (High Limit Gaming Room).',
          },
          {
            id: '106',
            title: 'Tipo de Premio y Cantidades',
            body:
              'Si están presentes, los invitados pueden reclamar los siguientes regalos distribuidos al azar [TAHARI Home - Juego de vajilla de 20 piezas - $159.95] [TAHARI Home - Juego de cubiertos de 20 piezas en caja con asa - $139.95].',
          },
          {
            id: '107',
            title: 'Cantidad de Regalos Permitidos por Invitado',
            body: 'Un artículo de regalo semanal por invitado',
          },
          {
            id: '108',
            title: 'Reglas de No Asistencia',
            body:
              'Debe estar presente para recibir el regalo. El regalo se perderá automáticamente si el jugador no presenta su tarjeta Miccosukee One y una identificación válida durante las fechas y horarios de distribución establecidos.',
          },
          {
            id: '109',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Promociones sólo están disponibles para miembros de la tarjeta Miccosukee One elegibles. Ofertas no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado. Se pueden considerar excepciones caso por caso dependiendo de las circunstancias.',
          },
        ],
      },
    },
    {
      id: 11,
      title: 'Elija Usted',
      img: cardImage12,
      oneLiner:
        '¡Cuatro jugadores ganarán su parte de hasta $20,000 en efectivo o Free Play el sábado, 27 de agosto! Sorteos de 6 PM a 9 PM.',
      rules: {
        subSections: [
          { id: '110', title: 'Día', body: 'sábado, 27 de agosto de 2022' },
          { id: '111', title: 'Tipo de Promoción', body: 'Sorteo' },
          {
            id: '112',
            title: 'Reglas',
            body:
              '¿¿¿Dinero en efectivo o Free Play??? ¡¡¡La decisión es suya!!! El 27 de agosto a las 6 PM, 7 PM, 8 PM y 9 PM, ¡un afortunado miembro de Miccosukee One ganará su parte de hasta $20,000!',
          },
          {
            id: '113',
            title: 'PARA CALIFICAR',
            body:
              'Los miembros de Miccosukee One deben ganar 200 puntos en su tarjeta Miccosukee One para cada boleto de sorteo. Los puntos se pueden ganar desde el 1 de agosto a las 9 AM hasta el 27 de agosto a las 8:45 PM. Esta promoción contará con un multiplicador de entradas de bono todos los viernes y sábados en los que los jugadores pueden ganar entradas. Los invitados recibirán una entrada de bono por cada 200 puntos que ganen de 9 AM a 4 AM y hasta las 8:45 PM el 27 de agosto.',
          },
          {
            id: '114',
            title: 'Fechas y Horarios',
            body: '27 de agosto a las 6 PM, 7 PM, 8 PM y 9 PM',
          },
          {
            id: '115',
            title: 'Cantidad de Ganadores por Sorteo',
            body:
              'Un (1) ganador será elegido por sorteo a las 6 PM, 7 PM, 8 PM y 9 PM.',
          },
          {
            id: '116',
            title: 'Lugar del Sorteo',
            body:
              "Los sorteos y la entrega de premios se llevarán a cabo en el Player's Club.",
          },
          {
            id: '117',
            title: 'Cantidad de Entradas Permitidas por Persona',
            body: 'Los jugadores pueden acumular entradas ilimitadas.',
          },
          {
            id: '118',
            title: 'Tipo de Premio y Cantidades',
            body:
              'Los ganadores pueden elegir una de dos opciones de premio [$4,000 - Efectivo] o [$5,000 – Free Play]. El Free Play es válido por 30 días.',
          },
          {
            id: '119',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body:
              'Los jugadores sólo pueden ganar una vez en un solo sorteo con múltiples ganadores.',
          },
          {
            id: '1110',
            title: 'Reglas de No Asistencia',
            body:
              'Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.',
          },
          {
            id: '1111',
            title: 'Reglas para Entradas de Bono',
            body:
              'Los días 5, 6, 12, 13, 19, 20, y 26 de agosto y hasta las 8:45 PM del 27 de agosto, los jugadores pueden ganar una entrada de bono por cada 200 puntos que ganen. Los jugadores deben ganar y recolectar sus entradas de bono desde las 9 AM del viernes hasta las 4 AM del domingo cada fin de semana por separado. Cualquier entrada que no se reclame durante el período de tiempo apropiado se perderá y no se podrá imprimir en una fecha posterior.',
          },
          {
            id: '1112',
            title: 'Reglas de Boletos de Sorteo / Tómbola',
            body:
              'La tómbola estará disponible el 18 de agosto. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “The Choice is Yours Giveaway.” La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados y no serán elegibles para ganar. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no se podrán depositar en la tómbola durante el sorteo.',
          },
          {
            id: '1113',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Los premios se retendrán durante treinta (30) días si no se proporciona una identificación válida, emitida por el gobierno y aprobada para jugar, al momento de ganar. Cualquier premio retenido que no se reclame dentro de los treinta (30) días se perderá. Las promociones sólo están disponibles para miembros de Miccosukee One. Free Play es válido por treinta días y en máquinas seleccionadas. Es posible que se apliquen restricciones de descarga de Free Play diariamente según el nivel. Los puntos acumulados en cualquier promoción del multiplicador de puntos de bono no se aplican a entradas de rifas adicionales ni al avance de nivel de tarjeta. Los premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 12,
      title: 'Feliz Cumpleaños',
      img: cardImage13,
      oneLiner:
        'Celebre su cumpleaños de agosto con hasta diez posibilidades de ganar su parte de $2,000 Free Play el lunes, 29 de agosto, de 6 PM a 9 PM.',
      rules: {
        subSections: [
          { id: '120', title: 'Día', body: 'lunes, 29 de agosto de 2022' },
          { id: '121', title: 'Tipo de Promoción', body: 'Premios Ricochet' },
          {
            id: '122',
            title: 'Reglas',
            body:
              '¡¡Feliz cumpleaños, bebés de agosto!! El lunes 29 de agosto, entre las 6 PM y las 9 PM, los invitados que cumplan años en agosto y que estén jugando activamente con su tarjeta Miccosukee One serán elegibles para tener la oportunidad de ganar una parte de $2,000 en Free Play.',
          },
          {
            id: '123',
            title: 'PARA CALIFICAR',
            body:
              'Los miembros de Miccosukee One deben cumplir años durante el mes de agosto y estar jugando activamente en las máquinas de juego con su tarjeta Miccosukee One.',
          },
          {
            id: '124',
            title: 'Fechas y Horarios',
            body: '29 de agosto, entre las 6 PM y 9 PM',
          },
          {
            id: '125',
            title: 'Ganadores',
            body:
              'El miembro de Miccosukee One que active el premio de rebote a través de su juego ganará $25 Free Play y tres (3) ganadores adicionales elegidos al azar que jueguen con su tarjeta Miccosukee One en el momento en que se active el premio ganarán $25 Free Play. También se llamará a cuatro de los principales ganadores de rebote para ganar $250 Free Play. Todos los ganadores deben cumplir años en agosto para ser elegibles.',
          },
          {
            id: '126',
            title: 'Lugar del Sorteo',
            body:
              'El Player’s Club y máquinas de juego que acepten tarjetas del Player’s Club',
          },
          {
            id: '127',
            title: 'Tipo de Premio y Cantidades',
            body:
              'El jugador que active el premio y tres (3) ganadores adicionales elegidos al azar en hasta diez (10) oportunidades recibirán $25 Free Play. Cuatro de los principales ganadores de rebote también ganarán $250 Free Play.',
          },
          {
            id: '128',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body: 'Los jugadores pueden ganar múltiples veces.',
          },
          {
            id: '129',
            title: 'Reglas del Sorteo',
            body:
              'Cuatro de los ganadores por premio de rebote principales se anunciarán en la sala de juego para ganar su premio de $250 Free Play. Los ganadores se quedarán con el premio de rebote de $25 Free Play independientemente de si llegan al Player’s Club dentro de los 10 minutos.',
          },
          {
            id: '1210',
            title: 'Reglas de No Asistencia',
            body:
              'Debe estar presente para ganar el premio de $250 Free Play. El premio de $250 Free Play se perderá automáticamente si el jugador no presenta de forma independiente la identificación válida y la tarjeta del jugador dentro de los diez (10) minutos de haber sido anunciado. Si no se presenta, no se volverá a sortear.',
          },
          {
            id: '1211',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Los premios se retendrán durante treinta (30) días si no se proporciona una identificación válida, emitida por el gobierno y aprobada para jugar, al momento de ganar. Cualquier premio retenido que no se reclame dentro de los treinta (30) días se perderá. Las promociones sólo están disponibles para miembros de Miccosukee One. Free Play es válido por treinta días y en máquinas seleccionadas. Los puntos acumulados en cualquier promoción del multiplicador de puntos de bono no se aplican a entradas de rifas adicionales ni al avance de nivel de tarjeta. Los premios no son transferibles. Deben tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. Un mal funcionamiento anula todos los juegos y sus pagos. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
    {
      id: 13,
      title: 'Nuevos Miembros y Referidos Ganan en Grande',
      img: cardImage14,
      oneLiner:
        '¡Un nuevo miembro o referido de Miccosukee One del mes de agosto ganará $2,500 en efectivo, $2,500 Free Play un una noche de estadía en nuestro hotel el miércoles, 31 de agosto a las 8 PM!',
      rules: {
        subSections: [
          { id: '130', title: 'Día', body: 'miércoles, 31 de agosto de 2022' },
          { id: '131', title: 'Tipo de Promoción', body: 'Sorteo' },
          {
            id: '132',
            title: 'Reglas',
            body:
              '¡¡Nuevos miembros y referidos pueden ganar en grande el miércoles, 31 de agosto a las 8 PM!! ¡¡¡Un nuevo miembro o un miembro que haya referido a un amigo en el mes de agosto será elegido de la tómbola para ganar $2,500 en efectivo, $2,500 Free Play y estadía de una noche en nuestro hotel!!!',
          },
          {
            id: '133',
            title: 'PARA CALIFICAR',
            body:
              'Los miembros de Miccosukee One deben haberse registrado para obtener una tarjeta Miccosukee One o haber recomendado a un nuevo miembro en cualquier momento después del sorteo "New Members & Referrals Win Big" del mes anterior hasta las 7:45 pm del 31 de agosto y estar presentes para ganar.',
          },
          {
            id: '134',
            title: 'Fecha y Horario de Sorteo',
            body: '31 de agosto a las 8 PM',
          },
          {
            id: '135',
            title: 'Cantidad de Ganadores por Sorteo',
            body: 'Un (1) ganador será elegido a las 8 PM.',
          },
          {
            id: '136',
            title: 'Ubicación de Sorteo',
            body:
              'Los sorteos y la entrega de premios serán en el Player’s Club.',
          },
          {
            id: '137',
            title: 'Cantidad de Entradas Permitidas por Persona',
            body:
              'Cada nuevo miembro elegible recibirá un boleto de sorteo. Miembros recibirán un boleto de sorteo por cada nuevo miembro que refieran.',
          },
          {
            id: '138',
            title: 'Tipo de Premio y Cantidades',
            body:
              'Un (1) premio en efectivo de $2,500 y un premio de $2,500 Free Play a las 8 PM. Los ganadores también recibirán una estadía de una noche en nuestro hotel.',
          },
          {
            id: '139',
            title: 'Cantidad de Ganancias Permitidas por Persona',
            body:
              'Jugadores sólo pueden ganar una vez en cualquier sorteo con múltiples ganadores.',
          },
          {
            id: '1310',
            title: 'Reglas de No Asistencia',
            body:
              'Deben estar presentes para ganar. El premio se perderá automáticamente si el jugador seleccionado no logra encontrar su boleto ganador por cuenta propia, y no logra presentar identificación válida y su tarjeta del Player’s Club a los diez (10) minutos de haber sido anunciado; otro nombre será seleccionado hasta que se reclame el premio. El jugador debe localizar e identificar el boleto de sorteo correspondiente por cuenta propia. No está permitido que empleados de Miccosukee Resort & Gaming manejen los boletos de sorteo retenidos por el jugador una vez hayan sido emitidos.',
          },
          {
            id: '1311',
            title: 'Reglas de Boletos de Sorteo / Tómbola',
            body:
              'La tómbola estará disponible el 31 de agosto. Al recibir el boleto del Player’s Club, es responsabilidad exclusiva del jugador colocar la porción perforada más grande del boleto en la tómbola correspondiente al sorteo, “New Members & Referrals Win Big”. La tómbola se vaciará después del último sorteo de la noche. El jugador debe haber retenido la porción más pequeña del boleto perforado para obtener el premio. Boletos perdidos, robados o dañados no serán reemplazados y no serán elegibles para ganar. Los boletos colocados en la tómbola incorrecta serán descalificados y no se volverán a emitir. Los boletos no podrán ser depositados en la tómbola durante el sorteo.',
          },
          {
            id: '1312',
            title: 'Reglas Generales / Relevo de Responsabilidad',
            body:
              'Para reclamar el premio, deben tener una identificación válida, emitida por el gobierno y aprobada para jugar. Free Play es válido durante 30 días y sólo en máquinas seleccionadas. Es posible que se apliquen restricciones de descarga de Free Play diariamente según el nivel. Los premios se retendrán durante treinta (30) días si no se proporciona una identificación válida, emitida por el gobierno y aprobada para jugar, al momento de ganar. Cualquier premio retenido que no se reclame dentro de los treinta (30) días se perderá. Las promociones sólo están disponibles para miembros de Miccosukee One. Los puntos acumulados en cualquier promoción del multiplicador de puntos de bono no se aplican a entradas de rifas adicionales ni al avance de nivel de tarjeta. Los premios no son transferibles. Debe tener 18 años de edad o más para calificar. Una vez declarada la descalificación, es definitiva. La oferta está sujeta a cambios o cancelaciones, sin previo aviso, a discreción de la gerencia. Consulte a un Asistente del Player’s Club para obtener más detalles. Cualquier persona que se haya autoexcluido o haya sido traspasada por Miccosukee Resort & Gaming no puede inscribirse ni participar en el programa Miccosukee One sin que se rescinda la documentación escrita de tal estado.',
          },
        ],
      },
    },
  ],
};
