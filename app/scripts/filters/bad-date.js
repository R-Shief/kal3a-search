'use strict';

/**
 * @ngdoc filter
 * @name kal3aSearchApp.filter:badDate
 * @function
 * @description
 * # badDate
 * Filter in the kal3aSearchApp.
 */
angular.module('kal3aSearchApp')
  .filter('badDate', function () {
    return function (input) {
        function _isInteger(val) {
            var digits = '1234567890';
            for (var i = 0; i < val.length; i++) {
                if (digits.indexOf(val.charAt(i)) === -1) {
                    return false;
                }
            }
            return true;
        }

        function _getInt(str, i, minlength, maxlength) {
            for (var x = maxlength; x >= minlength; x--) {
                var token = str.substring(i, i + x);
                if (token.length < minlength) {
                    return null;
                }
                if (_isInteger(token)) {
                    return token;
                }
            }
            return null;
        }

        function getDateFromFormat(val, format) {
            var MONTH_NAMES=['January','February','March','April','May','June','July','August','September','October','November','December','Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
                DAY_NAMES=['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sun','Mon','Tue','Wed','Thu','Fri','Sat'];
            val = val + '';
            format = format + '';
            var i;
            var iVal = 0;
            var iFormat = 0;
            var c = '';
            var token = '';
            var x, y;
            var now = new Date();
            var year = now.getYear();
            var month = now.getMonth() + 1;
            var date = 1;
            var hh = now.getHours();
            var mm = now.getMinutes();
            var ss = now.getSeconds();
            var ampm = '';

            while (iFormat < format.length) {
                // Get next token from format string
                c = format.charAt(iFormat);
                token = '';
                while ((format.charAt(iFormat) === c) && (iFormat < format.length)) {
                    token += format.charAt(iFormat++);
                }
                // Extract contents of value based on format token
                if (token === 'yyyy' || token === 'yy' || token === 'y') {
                    if (token === 'yyyy') {
                        x = 4;
                        y = 4;
                    }
                    if (token === 'yy') {
                        x = 2;
                        y = 2;
                    }
                    if (token === 'y') {
                        x = 2;
                        y = 4;
                    }
                    year = _getInt(val, iVal, x, y);
                    if (year === null) {
                        return 0;
                    }
                    iVal += year.length;
                    if (year.length === 2) {
                        if (year > 70) {
                            year = 1900 + (year - 0);
                        }
                        else {
                            year = 2000 + (year - 0);
                        }
                    }
                }
                else if (token === 'MMM' || token === 'NNN') {
                    month = 0;
                    for (i = 0; i < MONTH_NAMES.length; i++) {
                        var monthName = MONTH_NAMES[i];
                        if (val.substring(iVal, iVal + monthName.length).toLowerCase() === monthName.toLowerCase()) {
                            if (token === 'MMM' || (token === 'NNN' && i > 11)) {
                                month = i + 1;
                                if (month > 12) {
                                    month -= 12;
                                }
                                iVal += monthName.length;
                                break;
                            }
                        }
                    }
                    if ((month < 1) || (month > 12)) {
                        return 0;
                    }
                }
                else if (token === 'EE' || token === 'E') {
                    for (i = 0; i < DAY_NAMES.length; i++) {
                        var dayName = DAY_NAMES[i];
                        if (val.substring(iVal, iVal + dayName.length).toLowerCase() === dayName.toLowerCase()) {
                            iVal += dayName.length;
                            break;
                        }
                    }
                }
                else if (token === 'MM' || token === 'M') {
                    month = _getInt(val, iVal, token.length, 2);
                    if (month === null || (month < 1) || (month > 12)) {
                        return 0;
                    }
                    iVal += month.length;
                }
                else if (token === 'dd' || token === 'd') {
                    date = _getInt(val, iVal, token.length, 2);
                    if (date === null || (date < 1) || (date > 31)) {
                        return 0;
                    }
                    iVal += date.length;
                }
                else if (token === 'hh' || token === 'h') {
                    hh = _getInt(val, iVal, token.length, 2);
                    if (hh === null || (hh < 1) || (hh > 12)) {
                        return 0;
                    }
                    iVal += hh.length;
                }
                else if (token === 'HH' || token === 'H') {
                    hh = _getInt(val, iVal, token.length, 2);
                    if (hh === null || (hh < 0) || (hh > 23)) {
                        return 0;
                    }
                    iVal += hh.length;
                }
                else if (token === 'KK' || token === 'K') {
                    hh = _getInt(val, iVal, token.length, 2);
                    if (hh === null || (hh < 0) || (hh > 11)) {
                        return 0;
                    }
                    iVal += hh.length;
                }
                else if (token === 'kk' || token === 'k') {
                    hh = _getInt(val, iVal, token.length, 2);
                    if (hh === null || (hh < 1) || (hh > 24)) {
                        return 0;
                    }
                    iVal += hh.length;
                    hh--;
                }
                else if (token === 'mm' || token === 'm') {
                    mm = _getInt(val, iVal, token.length, 2);
                    if (mm === null || (mm < 0) || (mm > 59)) {
                        return 0;
                    }
                    iVal += mm.length;
                }
                else if (token === 'ss' || token === 's') {
                    ss = _getInt(val, iVal, token.length, 2);
                    if (ss === null || (ss < 0) || (ss > 59)) {
                        return 0;
                    }
                    iVal += ss.length;
                }
                else if (token === 'a') {
                    if (val.substring(iVal, iVal + 2).toLowerCase() === 'am') {
                        ampm = 'AM';
                    }
                    else if (val.substring(iVal, iVal + 2).toLowerCase() === 'pm') {
                        ampm = 'PM';
                    }
                    else {
                        return 0;
                    }
                    iVal += 2;
                }
                else {
                    if (val.substring(iVal, iVal + token.length) !== token) {
                        return 0;
                    }
                    else {
                        iVal += token.length;
                    }
                }
            }
            // If there are any trailing characters left in the value, it doesn't match
            if (iVal !== val.length) {
                return 0;
            }
            // Is date valid for month?
            if (month === 2) {
                // Check for leap year
                if (( (year % 4 === 0) && (year % 100 !== 0) ) || (year % 400 === 0)) { // leap year
                    if (date > 29) {
                        return 0;
                    }
                }
                else {
                    if (date > 28) {
                        return 0;
                    }
                }
            }
            if ((month === 4) || (month === 6) || (month === 9) || (month === 11)) {
                if (date > 30) {
                    return 0;
                }
            }
            // Correct hours value
            if (hh < 12 && ampm === 'PM') {
                hh = hh - 0 + 12;
            }
            else if (hh > 11 && ampm === 'AM') {
                hh -= 12;
            }
            var newdate = new Date(year, month - 1, date, hh, mm, ss);
            return newdate.getTime();
        }

        return getDateFromFormat(input, 'yyyy-MM-dd HH:mm:ss.000000');
    };
  });
