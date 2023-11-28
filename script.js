function showSchedule() {
    const inputDate = new Date(document.getElementById('date').value);
    const scheduleDiv = document.getElementById('schedule');

    if (isNaN(inputDate)) {
        scheduleDiv.textContent = '有効な日付を選択してください。';
        return;
    }

    const schedule = getSchedule(inputDate);

    scheduleDiv.textContent = `勤務スケジュール： ${schedule}`;
}

function getSchedule(date) {
    // 九日間のサイクルで勤務スケジュールを設定
    const scheduleCycle = ['昼勤', '昼勤', '昼勤', '夜勤', '夜勤', '夜勤', '休み', '休み', '休み'];
    
    // 日付からインデックスを計算
    const index = Math.floor((date.getTime() - startDate.getTime()) / (24 * 60 * 60 * 1000)) % scheduleCycle.length;
    
    return scheduleCycle[index];
}

// 勤務スケジュールのサイクルの開始日付
const startDate = new Date('2023-11-09');
