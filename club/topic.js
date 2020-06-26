let topicsArray=
[
    "沉默的遊行",
    "神使繪卷",
    "驚嘆號",
    "砂之器",
    "聖戰"
];

let startDate=new Date();

function setMonthAndDay(startMonth,startDay)
{
    //一次設定好月分與日期
    startDate.setMonth(startMonth-1,startDay);
    //時間先忽略，設為0
    startDate.setHours(0);
    startDate.setMinutes(0);
    startDate.setSeconds(0);
}