// const whatsapp = require('whatsapp-chat-parser');
import whatsapp from "whatsapp-chat-parser";
import { defaultEmojisGithub } from "./resuable.js";

let totalmsgsbyUserArrayObj = {};
let totalmsgsbyUserObj = {};
let picturesSentObj = {};
let loveEmojiObj = {};
let laughEmojiObj = {};
let mostCommonEmojiObj = {};
let cmnEmj = {};
let totalMsgsByDayObj = {};
let totalMsgsByMonthObj = {};
let totalMsgsByTIme = {};
let avgResTimeObj = {};
export const countTotalMsgs = (contents) => {
  whatsapp
    .parseString(contents)
    .then((messages) => {
      // console.log(messages);
      if (messages[0].author === "System") {
        messages.shift();
      }
      let userArray = [];
      let dateArray = [];

      let actualMsgArray = [];

      const defaultEmojiArray = [
        "🙄",
        "❤️",
        "😎",
        "😅",
        "😍",
        "🥰",
        "🙃",
        "🤔",
        "🤭",
        "😋",
        "😂",
        "😊",
        "😘",
      ];
      let emojiObj = {};
      messages.forEach((mess) => {
        userArray.push(mess.author);
        dateArray.push(mess.date);
        actualMsgArray.push(mess.message);
      });
      let uniqueUserArray = userArray.filter(function (item, pos) {
        return userArray.indexOf(item) === pos;
      });
      //  console.log("userArray", uniqueUserArray);
      const countOccurrences = (arr, val) =>
        arr.reduce((a, v) => (v === val ? a + 1 : a), 0);
      uniqueUserArray.forEach((user) => {
        totalmsgsbyUserArrayObj[user] = countOccurrences(userArray, user);
      });
      //   console.log("totalmsgs by user", totalmsgsbyUserArrayObj);

      uniqueUserArray.forEach((u) => {
        let msgLength = 0;
        messages.forEach((mess) => {
          if (u === mess.author) {
            let msgg = mess.message.trim();
            msgLength = msgLength + msgg.length;
          }
        });
        totalmsgsbyUserObj[u] = msgLength;
      });
      //  console.log("totalLetters used By userrs", totalmsgsbyUserObj);

      let embb = {};
      //checking Number of media sent by users
      //  console.log("uniqueuserArray", uniqueUserArray);
      //  console.log("MessageArray", messages);
      uniqueUserArray.forEach((u) => {
        let mediaByuser = 0;
        let emoji1 = 0;
        let emoji2 = 0;
        let emoji3 = 0;
        let emoji4 = 0;
        let emoji5 = 0;
        let emoji6 = 0;
        let emoji7 = 0;
        let emoji8 = 0;
        let emoji9 = 0;
        let emoji10 = 0;
        let emoji11 = 0;
        let emoji12 = 0;
        let emoji13 = 0;

        messages.forEach((mess) => {
          if (u === mess.author) {
            let msg = mess.message.trim();
            if (msg.includes("<Media omitted>")) {
              mediaByuser++;
            }
            if (msg.includes("🙄")) {
              emoji1++;
            }
            if (msg.includes("❤️")) {
              emoji2++;
            }
            if (msg.includes("😎")) {
              emoji3++;
            }
            if (msg.includes("😅")) {
              emoji4++;
            }
            if (msg.includes("😍")) {
              emoji5++;
            }
            if (msg.includes("🥰")) {
              emoji6++;
            }
            if (msg.includes("🙃")) {
              emoji7++;
            }
            if (msg.includes("🤔")) {
              emoji8++;
            }
            if (msg.includes("🤭")) {
              emoji9++;
            }
            if (msg.includes("😋")) {
              emoji10++;
            }
            if (msg.includes("😂")) {
              emoji11++;
            }
            if (msg.includes("😊")) {
              emoji12++;
            }
            if (msg.includes("😘")) {
              emoji13++;
            }
          }
          picturesSentObj[u] = mediaByuser;
          loveEmojiObj[u] = emoji2;
          laughEmojiObj[u] = emoji11;
        });
      });
      //  console.log("heart emoji", loveEmojiObj);
      // console.log("pictureobj", picturesSentObj);

      //checkimng emoji

      defaultEmojisGithub.forEach((emoji) => {
        let countOfEach = 0;
        messages.forEach((msg) => {
          if (msg.message.includes(emoji)) {
            countOfEach++;
          }
        });
        mostCommonEmojiObj[emoji] = countOfEach;
      });

      const entries = Object.entries(mostCommonEmojiObj);

      let maxCommonEmoji = 0;
      let emp = 0;
      const pp = entries.map((entry, index) => {
        if (entry[1] > maxCommonEmoji) {
          maxCommonEmoji = entry[1];
          emp = entry[0];
        }
      });

      cmnEmj[emp] = maxCommonEmoji;

      defaultEmojiArray.forEach((emoji) => {
        let emojicount = 0;
        messages.forEach((mess) => {
          let msg = mess.message.trim();
          if (msg.includes(emoji)) {
            emojicount++;
          }
        });
        emojiObj[emoji] = emojicount;
      });

      //  console.log("emojiObj", emojiObj);

      //Date Manipulations
      let weekDaysArray = [];
      let monthsArray = [];
      let timeArray = [];

      const DaysInWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      const monthsInYear = [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ];
      const timeInADay = [
        "00",
        "01",
        "02",
        "03",
        "04",
        "05",
        "06",
        "07",
        "08",
        "09",
        "10",
        "11",
        "12",
        "13",
        "14",
        "15",
        "16",
        "17",
        "18",
        "19",
        "20",
        "21",
        "22",
        "23",
      ];

      dateArray.forEach((date) => {
        date = date.toString();
        let dateSplit = date.split(" ");
        weekDaysArray.push(dateSplit[0]);
        monthsArray.push(dateSplit[1]);
        timeArray.push(dateSplit[4]);
      });

      let timeDigitArray = [];
      timeArray.forEach((time) => {
        let timeSplit = time.split(":");
        timeDigitArray.push(timeSplit[0]);
      });

      DaysInWeek.forEach((day) => {
        totalMsgsByDayObj[day] = countOccurrences(weekDaysArray, day);
      });
      monthsInYear.forEach((month) => {
        totalMsgsByMonthObj[month] = countOccurrences(monthsArray, month);
      });
      timeInADay.forEach((time) => {
        totalMsgsByTIme[time] = countOccurrences(timeDigitArray, time);
      });

      // console.log("msgs in a day obj", totalMsgsByDayObj);
      // console.log("msgs in a month obj", totalMsgsByMonthObj);
      //  console.log("msgs in a time obj", totalMsgsByTIme);

      //  console.log("original msg araay", messages);
      let newUnixMsgArray = messages.map(
        (mess) =>
          mess.date !== null
            ? { ...mess, date: new Date(mess.date).getTime() / 1000 }
            : mess
        // console.log(new Date(mess.date).getTime() / 1000);
      );

      //sorting by unixTime is necessary or NOt???
      // newUnixMsgArray.sort((a, b) => {
      //   return a.date - b.date;
      // });
      // console.log("Unixmsg Array", newUnixMsgArray);
      uniqueUserArray.forEach((user) => {
        let totalrestime = 0;
        let counter = 0;
        for (let i = 0; i < newUnixMsgArray.length - 1; i++) {
          if (
            newUnixMsgArray[i].author !== newUnixMsgArray[i + 1].author &&
            newUnixMsgArray[i + 1].author === user
          ) {
            // checking if user responding within 1000s
            if (
              Math.abs(newUnixMsgArray[i + 1].date - newUnixMsgArray[i].date) <
              3000
            ) {
              totalrestime =
                totalrestime +
                Math.abs(newUnixMsgArray[i + 1].date - newUnixMsgArray[i].date);
              counter++;
            }
          }
        }
        avgResTimeObj[user] = totalrestime / counter;
      });
      // console.log("Avg Response time in seconds", avgResTimeObj);

      //logic for calculating response time of user
    })
    .catch((err) => {
      console.log(err);
    });
};

export const totalMsgByEachUser = totalmsgsbyUserArrayObj;
export const totalLettersUsedObj = totalmsgsbyUserObj;
export const totalMediaSentObj = picturesSentObj;
export const totalLoveEmojiSentObj = loveEmojiObj;
export const totalLaughEmojiSentObj = laughEmojiObj;
export const totalMsgsInDayObj = totalMsgsByDayObj;
export const totalMsgsInMonthObj = totalMsgsByMonthObj;
export const totalMsgsByTimeObj = totalMsgsByTIme;
export const totalavgResTimeObj = avgResTimeObj;
export const commonEmojiObj = cmnEmj;
