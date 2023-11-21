module.exports =function getMonthName(monthNumber) {
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December'
    ];

    if (monthNumber >= 0 && monthNumber <= 12) {
        return months[monthNumber ];
    } else {
        return monthNumber;
    }
}


