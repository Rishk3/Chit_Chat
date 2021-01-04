// const whatsapp = require('whatsapp-chat-parser');
import whatsapp from "whatsapp-chat-parser";

export const countTotalMsgs = (contents) => {
  whatsapp
    .parseString(contents)
    .then((messages) => {
      console.log(messages);
      if (messages[0].author === "System") {
        messages.shift();
      }
      let userArray = [];
      let dateArray = [];
      let picturesSentObj = {};
      let actualMsgArray = [];
      let totalmsgsbyUserArrayObj = {};
      let totalmsgsbyUserObj = {};
      let mediaSentByUserObj = {};
      let userMsgObj = {};
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
      console.log("totalmsgs by user", totalmsgsbyUserArrayObj);

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
      console.log("totalLetters used By userrs", totalmsgsbyUserObj);
      let obb = {};
      let embb = {};
      //checking Number of media sent by users
      console.log("uniqueuserArray", uniqueUserArray);
      console.log("MessageArray", messages);
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
          obb[u] = emoji2;
        });
      });
      console.log("heart emoji", obb);
      console.log("pictureobj", picturesSentObj);

      //checkimng emoji

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

      console.log("emojiObj", emojiObj);

      //Date Manipulations
      let weekDaysArray = [];
      let monthsArray = [];
      let timeArray = [];
      let totalMsgsByDayObj = {};
      let totalMsgsByMonthObj = {};
      let totalMsgsByTIme = {};
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

      console.log("msgs in a day obj", totalMsgsByDayObj);
      console.log("msgs in a month obj", totalMsgsByMonthObj);
      console.log("msgs in a time obj", totalMsgsByTIme);

      let newUnixMsgArray = messages.map(
        (mess) =>
          mess.date !== null
            ? { ...mess, date: new Date(mess.date).getTime() / 1000 }
            : mess
        // console.log(new Date(mess.date).getTime() / 1000);
      );
      let avgResTimeObj = {};
      //sorting by unixTime is necessary or NOt???
      // newUnixMsgArray.sort((a, b) => {
      //   return a.date - b.date;
      // });
      uniqueUserArray.forEach((user) => {
        let totalrestime = 0;
        let counter = 0;
        for (let i = 0; i < newUnixMsgArray.length - 1; i++) {
          if (
            newUnixMsgArray[i].author !== newUnixMsgArray[i + 1].author &&
            newUnixMsgArray[i + 1].author === user
          ) {
            totalrestime =
              totalrestime +
              Math.abs(newUnixMsgArray[i + 1].date - newUnixMsgArray[i].date);
            counter++;
          }
        }
        avgResTimeObj[user] = totalrestime / counter;
      });
      console.log("Avg Response time in seconds", avgResTimeObj);

      //logic for calculating response time of user
    })
    .catch((err) => {
      console.log(err);
    });
};
