/*------------------------------------*\
     Plugins - Table of contents
 \*------------------------------------*/
/*
 - date-time-picker
*/

// date-time-picker
!(function (t, e) {
  "object" == typeof exports && "object" == typeof module
      ? (module.exports = e())
      : "function" == typeof define && define.amd
      ? define([], e)
      : "object" == typeof exports
      ? (exports.DateTimePickerComponent = e())
      : (t.DateTimePickerComponent = e());
})(self, function () {
  return (function () {
      "use strict";
      var t = {
              d: function (e, n) {
                  for (var a in n) t.o(n, a) && !t.o(e, a) && Object.defineProperty(e, a, { enumerable: !0, get: n[a] });
              },
              o: function (t, e) {
                  return Object.prototype.hasOwnProperty.call(t, e);
              },
              r: function (t) {
                  "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(t, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t, "__esModule", { value: !0 });
              },
          },
          e = {};
      function n() {
          var t = this;
          this.i18n = {
              jan: "Jan",
              feb: "Feb",
              mar: "Mar",
              apr: "Apr",
              may: "May",
              jun: "Jun",
              jul: "Jul",
              aug: "Aug",
              sep: "Sep",
              oct: "Oct",
              nov: "Nov",
              dec: "Dec",
              jan_: "January",
              feb_: "February",
              mar_: "March",
              apr_: "April",
              may_: "May",
              jun_: "June",
              jul_: "July",
              aug_: "August",
              sep_: "September",
              oct_: "October",
              nov_: "November",
              dec_: "December",
              mon: "Mon",
              tue: "Tue",
              wed: "Wed",
              thu: "Thu",
              fri: "Fri",
              sat: "Sat",
              sun: "Sun",
              mon_: "Monday",
              tue_: "Tuesday",
              wed_: "Wednesday",
              thu_: "Thursday",
              fri_: "Friday",
              sat_: "Saturday",
              sun_: "Sunday",
              done: "Done",
          };
          var e,
              n,
              a = 864e5,
              i = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"],
              s = ["jan", "feb", "mar", "apr", "may", "jun", "jul", "aug", "sep", "oct", "nov", "dec"],
              r = navigator.userAgent.match(/(iPad|iPhone|iPod)/g) ? "touchstart" : "click",
              o = "start";
          function c(t, e) {
              var n,
                  a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : null,
                  i = null == a ? void 0 : a.value;
              if (i && (n = l(i))) return n;
              if (e) {
                  if (e instanceof Date) return e;
                  if ("string" == typeof e && (n = l(e))) return n;
              }
              return t;
          }
          function d(t) {
              var n = t.getDay();
              return e && (n = e.indexOf(i[n])), n;
          }
          function l(t) {
              var e = null,
                  n = t.match(/^(\d{4})-(\d{2})-(\d{2})(T(\d{2}):(\d{2}):(\d{2}))?$/);
              if (n && +new Date(n[0])) {
                  var a = n[1],
                      i = n[2] - 1,
                      s = n[3];
                  if (n[4]) {
                      var r = n[5],
                          o = n[6],
                          c = n[7];
                      e = new Date(a, i, s, r, o, c);
                  } else e = new Date(a, i, s);
              }
              return e || null;
          }
          (this.addOnSelectEvent = function (t) {
              for (var e = t.querySelectorAll("td.selectable"), n = 0, a = e.length; n < a; n++) e[n].addEventListener("click", this.onSelectDayOrHour);
          }),
              (this.checkDateTimeConsistency = function () {
                  var t = this.first_date.getTime(),
                      e = this.start_date.getTime(),
                      n = this.last_date.getTime();
                  if ((e <= t && this.start_date.setHours(this.first_date.getHours(), this.first_date.getMinutes(), 0, 0), e >= n && this.start_date.setHours(this.last_date.getHours(), this.last_date.getMinutes(), 0, 0), this.end_date)) {
                      var a = this.end_date.getTime();
                      "start" == o
                          ? e + this.min_range >= a &&
                            (e + this.min_range >= n && this.start_date.setTime(n - this.min_range), this.end_date.setTime(this.start_date.getTime() + this.min_range), this.printDateAndTime(this.end_container, this.end_date))
                          : (a - this.min_range <= e &&
                                (a - this.min_range <= t && this.end_date.setTime(t + this.min_range), this.start_date.setTime(this.end_date.getTime() - this.min_range), this.printDateAndTime(this.start_container, this.start_date)),
                            a >= n && this.end_date.setHours(this.last_date.getHours(), this.last_date.getMinutes(), 0, 0));
                  }
              }),
              (this.closePicker = function (t, e) {
                  var n = this,
                      a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                  setTimeout(function () {
                      e.classList.remove("active"), (t.style.display = "none"), document.removeEventListener(r, n.onClickOutside);
                  }, a);
              }),
              (this.get_Dates = function () {
                  var t = new Date().setHours(0, 0, 0, 0),
                      e = new Date(this.start_date).setHours(0, 0, 0, 0),
                      n = new Date(this.first_date).setHours(0, 0, 0, 0),
                      a = new Date(this.last_date).setHours(0, 0, 0, 0),
                      i = null;
                  return this.end_date && (i = new Date(this.end_date).setHours(0, 0, 0, 0)), { _today: t, _start_date: e, _first_date: n, _last_date: a, _end_date: i };
              }),
              (this.getDayClassName = function (t, e, n) {
                  var a = new Date(e.getFullYear(), e.getMonth(), t).getTime(),
                      i = "day ";
                  return (
                      a < n._first_date || a > n._last_date ? (i += "disabled ") : (i += "selectable "),
                      a == n._today && (i += "today "),
                      a == n._start_date && ((i += "start-day "), (i += "start" == o ? "active " : "inactive ")),
                      this.end_date && (a > n._start_date && a < n._end_date && (i += " range"), a == n._end_date && ((i += " end-day "), (i += "end" == o ? "active " : "inactive "))),
                      i
                  );
              }),
              (this.getHourClassName = function (t, e) {
                  var n = ("0" + e.getHours()).slice(-2) + ":" + ("0" + e.getMinutes()).slice(-2),
                      a = t.split(":"),
                      i = a[0],
                      s = a[1],
                      r = new Date(e);
                  r.setHours(i, s, 0, 0);
                  var c = "hour ";
                  return r < this.first_date || r > this.last_date ? (c += "disabled") : ((c += "selectable"), (c += n == t ? " time-selected " + o : "")), c;
              }),
              (this.getHTML = function (t, e, n) {
                  var a,
                      i = "",
                      s = this[t + "_container"].id;
                  if (n) {
                      var r = "div#".concat(s, " button.active, div#").concat(s, " table td.active, div#").concat(s, " table td.time-selected"),
                          o = "div#".concat(s, " table td.inactive");
                      if (this.end_container) {
                          var c = this.end_container.id;
                          (r += ", div#".concat(c, " button.active, div#").concat(c, " table td.active, div#").concat(c, " table td.time-selected")), (o += ", div#".concat(c, " table td.inactive"));
                      }
                      n.active_background && n.active_color && (i += "".concat(r, " {\n          background-color: ").concat(n.active_background, "; color: ").concat(n.active_color, ";\n        }")),
                          n.inactive_background && n.inactive_color && (i += "".concat(o, " {\n          background-color: ").concat(n.inactive_background, "; color: ").concat(n.inactive_color, ";\n        }")),
                          i && (i = "<style>".concat(i, "</style>"));
                  }
                  var d = this[t + "_container"].querySelector("input.date_output") ? "" : '<input type="hidden" name="'.concat(s, '_value" class="date_output" value="">');
                  if ("datetime" === e)
                      a = '<div class="button-container fix-float">\n          <button type="button" class="date '
                          .concat(
                              t,
                              ' w-50">\n                        <span class="month-day">00</span>\n                      </button>\n          <button type="button" class="time '
                          )
                          .concat(t, ' w-50">\n            <span class="hours">00</span>\n            <span class="minutes">:00</span>\n          </button>\n        </div>\n        <div class="picker"></div>\n        ')
                          .concat(d);
                  else
                      a = '<div class="button-container">\n          <button type="button" class="date '
                          .concat(
                              t,
                              '">\n            <span class="week-day"></span>\n            <span class="month-day">00</span>\n            <span class="month">jan</span>\n          </button>\n        </div>\n        <div class="picker"></div>\n        '
                          )
                          .concat(d);
                  return i + a;
              }),
              (this.onClickOutside = function (e) {
                  var n = "start" == o ? t.start_picker : t.end_picker,
                      a = e.target,
                      i = !1;
                  do {
                      if (a.matches("#".concat(n.parentElement.id, ".datetime-container")) || a.classList.contains("prev-month") || a.classList.contains("next-month")) {
                          i = !0;
                          break;
                      }
                      a = a.parentElement;
                  } while (null !== a && 1 === a.nodeType);
                  i || t.closePicker(n, n.previousElementSibling.querySelector(".active"));
              }),
              (this.onOpenPicker = function (e) {
                  var n,
                      a,
                      i,
                      s,
                      c = e.currentTarget;
                  c.classList.toggle("active");
                  var d = "div#".concat(t.start_container.id, " button");
                  if (
                      ((d += null !== (n = t.end_container) && void 0 !== n && n.id ? ", div#".concat(t.end_container.id, " button") : ""),
                      [].slice.call(document.querySelectorAll(d)).forEach(function (t) {
                          t != c && t.classList.remove("active");
                      }),
                      c.classList.contains("start") ? ((a = t.start_picker), (i = t.end_picker), (s = t.start_date), (o = "start")) : ((a = t.end_picker), (i = t.start_picker), (s = t.end_date), (o = "end")),
                      c.classList.contains("active"))
                  ) {
                      (a.style.display = "block"), i && (i.style.display = "none"), document.addEventListener(r, t.onClickOutside);
                      var l = c.classList.contains("date") ? "Date" : "Time";
                      "Time" == l && t.round_to && (l = "Alternative" + l),
                          t["show" + l + "Picker"](a, s),
                          (function (t) {
                              var e = t.getBoundingClientRect().top + t.offsetHeight - document.documentElement.clientHeight;
                              e > 0 && ("scrollBehavior" in document.documentElement.style ? window.scrollBy({ top: e, left: 0, behavior: "smooth" }) : window.scrollBy(0, e));
                          })(a);
                  } else (a.style.display = "none"), document.removeEventListener(r, t.onClickOutside);
              }),
              (this.onSelectDayOrHour = function (e) {
                  var n = {},
                      a = e.target;
                  n.text = a.textContent;
                  var i = -1 != n.text.indexOf(":");
                  if (
                      ("start" == o
                          ? ((n.date = t.start_date), (n.container = t.start_container), (n.btn = i ? t.start_time_btn : t.start_date_btn), (n.picker = t.start_picker))
                          : ((n.date = t.end_date), (n.container = t.end_container), (n.btn = i ? t.end_time_btn : t.end_date_btn), (n.picker = t.end_picker)),
                      i)
                  ) {
                      var s = n.text.split(":");
                      (n.hour = s[0]), (n.minute = s[1]);
                  } else (n.prev_month = a.classList.contains("prev-month")), (n.next_month = a.classList.contains("next-month"));
                  var r = a.classList.contains("day") ? "Day" : "Hour";
                  t["select" + r](n);
              }),
              (this.printDateAndTime = function (t, e) {
                  var a = t.querySelectorAll("button.date > *"),
                      i = a[0],
                      r = a[1],
                      o = a[2],
                      c = d(e);
                  (i.textContent = this.i18n[n[c]]),
                      (r.textContent = ("0" + e.getDate()).slice(-2)),
                      (o.innerHTML = '<span data-i18n="'.concat(s[e.getMonth()], '">').concat(this.i18n[s[e.getMonth()]], "</span><br>").concat(e.getFullYear()));
                  var l,
                      h = t.querySelector("button.time");
                  if (h) {
                      var u = h.querySelectorAll("span"),
                          _ = u[0],
                          p = u[1];
                      (_.textContent = ("0" + e.getHours()).slice(-2)), (p.textContent = ":".concat(("0" + e.getMinutes()).slice(-2)));
                  }
                  var m,
                      v,
                      f,
                      y,
                      g,
                      b,
                      k =
                          ((v = (m = e).getFullYear()),
                          (f = ("0" + (m.getMonth() + 1)).slice(-2)),
                          (y = ("0" + m.getDate()).slice(-2)),
                          (g = ("0" + m.getHours()).slice(-2)),
                          (b = ("0" + m.getMinutes()).slice(-2)),
                          "".concat(v, "-").concat(f, "-").concat(y, "T").concat(g, ":").concat(b, ":00"));
                  switch (this.date_output) {
                      case "full_ISO":
                          l = k;
                          break;
                      case "short_ISO":
                          l = k.split("T")[0];
                          break;
                      default:
                          l = (function (t) {
                              var e = Date.UTC(t.getFullYear(), t.getMonth(), t.getDate(), t.getHours(), t.getMinutes(), 0, 0);
                              return Math.floor(e / 1e3);
                          })(e);
                  }
                  t.querySelector("input.date_output").value = l;
              }),
              (this.roundMinutes = function (t) {
                  var e = this;
                  t.forEach(function (t) {
                      t.setSeconds(0, 0);
                      var n = t.getMinutes(),
                          a = t.getHours(),
                          i = e.round_to ? e.round_to : 30;
                      if (n % i != 0)
                          for (var s = n; s <= n + i; s++)
                              if (s % i == 0) {
                                  n = s;
                                  break;
                              }
                      60 == n && ((n = 0), 24 == (a += 1) && ((a = 0), t.setDate(t.getDate() + 1))), t.setHours(a, n);
                  });
              }),
              (this.selectDay = function (t) {
                  t.prev_month
                      ? t.date.setFullYear(this.prev_month.getFullYear(), this.prev_month.getMonth(), t.text)
                      : t.next_month
                      ? t.date.setFullYear(this.next_month.getFullYear(), this.next_month.getMonth(), t.text)
                      : t.date.setFullYear(this.current_month.getFullYear(), this.current_month.getMonth(), t.text),
                      this.checkDateTimeConsistency();
                  for (var e = this.get_Dates(), n = document.querySelectorAll("td.selectable"), a = 0, i = n.length; a < i; a++) {
                      var s = void 0,
                          r = "";
                      n[a].classList.contains("prev-month") ? ((s = this.prev_month), (r += "prev-month ")) : n[a].classList.contains("next-month") ? ((s = this.next_month), (r += "next-month ")) : (s = this.current_month),
                          (r += this.getDayClassName(n[a].textContent, s, e)),
                          (n[a].className = r);
                  }
                  this.printDateAndTime(t.container, t.date), this.closePicker(t.picker, t.btn, 500);
              }),
              (this.selectHour = function (t) {
                  t.date.setHours(t.hour, t.minute, 0, 0), this.checkDateTimeConsistency();
                  for (var e = document.querySelectorAll("td.selectable"), n = 0, a = e.length; n < a; n++) e[n].className = this.getHourClassName(e[n].textContent, t.date);
                  this.printDateAndTime(t.container, t.date), this.closePicker(t.picker, t.btn, 500);
              }),
              (this.setEndPickerProps = function (t, e) {
                  var n = document.getElementById(t);
                  if (null == n || "DIV" != n.nodeName) throw new Error("Does div#".concat(t, " exist? Please, check your HTML code"));
                  var a = new Date(this.start_date.getTime() + this.min_range),
                      i = c(a, e, n.querySelector("input.date_output"));
                  i < this.start_date && (i = a), this.roundMinutes([i]), i > this.last_date && (this.last_date = i), (this.end_container = n), (this.end_date = i);
              }),
              (this.setStartPickerProps = function (t, s, r, o, d) {
                  var l = document.getElementById(t);
                  if (null == l || "DIV" != l.nodeName) throw new Error("Does div#".concat(t, " exist? Please, check your HTML code"));
                  var h = c(new Date(Date.now() + a), s, l.querySelector("input.date_output")),
                      u = c(new Date(), r);
                  h < u && (u = h);
                  var _ = new Date(h.getTime() + 31536e6),
                      p = c(_, o);
                  p < h && (p = _),
                      this.round_to && [1, 5, 10, 15, 20, 30].indexOf(this.round_to) < 0 && (this.round_to = 1),
                      this.roundMinutes([h, u, p]),
                      (function (t) {
                          (t = +t) > 6 && (t = 6);
                          if (t > 0) {
                              var a = i.slice(0, t),
                                  s = i.slice(t, i.length);
                              e = s.concat(a);
                          }
                          n = e || i;
                      })(d),
                      (this.start_container = l),
                      (this.start_date = h),
                      (this.first_date = u),
                      (this.last_date = p);
              }),
              (this.showAlternativeTimePicker = function (t, e) {
                  for (
                      var a,
                          i = this,
                          r = new Date(e),
                          c = function () {
                              for (var t = "", n = 0; n <= 59; n++)
                                  if (n % i.round_to == 0) {
                                      if ((r.setHours(a, n), r < i.first_date || r > i.last_date)) continue;
                                      var s = ("0" + n).slice(-2),
                                          o = n == e.getMinutes() ? "selected" : "";
                                      t += '<option value="'.concat(s, '" ').concat(o, ">").concat(s, "</option>");
                                  }
                              return t;
                          },
                          l = '<select class="select-hours">',
                          h = 0;
                      h <= 23;
                      h++
                  )
                      if ((r.setHours(h), !(r < this.first_date || r > this.last_date))) {
                          var u = ("0" + h).slice(-2),
                              _ = h == e.getHours() ? "selected" : "";
                          _ && (a = h), (l += '<option value="'.concat(u, '" ').concat(_, ">").concat(u, "</option>"));
                      }
                  l += "</select>";
                  var p,
                      m,
                      v = '<select class="select-minutes">';
                  (v += c()),
                      (v += "</select>"),
                      (t.innerHTML = '<table class="time">\n      <tr>\n        <th>\n          '
                          .concat(this.i18n[n[d(e)] + "_"], "\n          ")
                          .concat(e.getDate(), '\n          <span class="month" data-i18n="')
                          .concat(s[e.getMonth()] + "_", '">')
                          .concat(this.i18n[s[e.getMonth()] + "_"], "</span>\n        </th>\n      </tr>\n      <tr>\n        <td>\n          ")
                          .concat(l, "\n          ")
                          .concat(v, '\n          <button type="button" class="confirm">')
                          .concat(this.i18n.done, "</button>\n        </td>\n      </tr>\n    </table>")),
                      "start" == o ? ((p = this.start_container), (m = this.start_time_btn)) : ((p = this.end_container), (m = this.end_time_btn));
                  var f = p.querySelector("select.select-hours"),
                      y = p.querySelector("select.select-minutes"),
                      g = p.querySelector("button.confirm");
                  (f.onchange = function (t) {
                      a = f.options[f.selectedIndex].value;
                      var e = c();
                      y.innerHTML = e;
                  }),
                      (g.onclick = function (n) {
                          n.preventDefault();
                          var a = f.options[f.selectedIndex].value,
                              s = y.options[y.selectedIndex].value;
                          e.setHours(a, s, 0, 0), i.checkDateTimeConsistency(), i.printDateAndTime(p, e), i.closePicker(t, m, 500), (g.disabled = !0);
                      });
              }),
              (this.showDatePicker = function (t, e) {
                  for (
                      var a,
                          i = this,
                          r = "",
                          o = e.getMonth(),
                          c = e.getFullYear(),
                          l = ["31", (c % 100 != 0 && c % 4 == 0) || c % 400 == 0 ? 29 : 28, "31", "30", "31", "30", "31", "31", "30", "31", "30", "31"],
                          h = new Date(c, o, 1),
                          u = d(h),
                          _ = new Date(c, o - 1, 1),
                          p = new Date(c, o + 1, 1),
                          m = this.get_Dates(),
                          v = 0,
                          f = u,
                          y = l[_.getMonth()];
                      f > 0;

                  )
                      (v = y - (f - 1)), (a = this.getDayClassName(v, _, m)), (r += '<td class="prev-month '.concat(a, '">').concat(v, "</td>")), f--;
                  for (v = 1; v <= l[o]; ) u > 6 && ((u = 0), (r += "</tr><tr>")), (a = this.getDayClassName(v, h, m)), (r += '<td class="'.concat(a, '">').concat(v, "</td>")), u++, v++;
                  for (v = 1; u <= 6; u++, v++) (a = this.getDayClassName(v, p, m)), (r += '<td class="next-month '.concat(a, '">').concat(v, "</td>"));
                  (t.innerHTML = '<table class="date">\n      <tr>\n        <th><a href="javascript:void(0);" class="prev-month">&laquo;</a></th>\n        <th colspan="5">\n          <span class="month" data-i18n="'
                      .concat(s[o] + "_", '">')
                      .concat(this.i18n[s[o] + "_"], "</span>\n          ")
                      .concat(c, '\n        </th>\n        <th><a href="javascript:void(0);" class="next-month">&raquo;</a></th>\n      </tr>\n      <tr>\n        <td class="day-label" data-i18n="')
                      .concat(n[0], '">')
                      .concat(this.i18n[n[0]], '</td>\n        <td class="day-label" data-i18n="')
                      .concat(n[1], '">')
                      .concat(this.i18n[n[1]], '</td>\n        <td class="day-label" data-i18n="')
                      .concat(n[2], '">')
                      .concat(this.i18n[n[2]], '</td>\n        <td class="day-label" data-i18n="')
                      .concat(n[3], '">')
                      .concat(this.i18n[n[3]], '</td>\n        <td class="day-label" data-i18n="')
                      .concat(n[4], '">')
                      .concat(this.i18n[n[4]], '</td>\n        <td class="day-label" data-i18n="')
                      .concat(n[5], '">')
                      .concat(this.i18n[n[5]], '</td>\n        <td class="day-label" data-i18n="')
                      .concat(n[6], '">')
                      .concat(this.i18n[n[6]], "</td>\n      </tr>\n      <tr>\n        ")
                      .concat(r, "\n      </tr>\n    </table>")),
                      _.setDate(y);
                  var g = t.querySelector(".prev-month");
                  _ > this.first_date
                      ? g.addEventListener("click", function () {
                            return i.showDatePicker(t, _);
                        })
                      : g.classList.add("disabled");
                  var b = t.querySelector(".next-month");
                  this.last_date > p
                      ? b.addEventListener("click", function () {
                            return i.showDatePicker(t, p);
                        })
                      : b.classList.add("disabled"),
                      this.addOnSelectEvent(t),
                      (this.current_month = h),
                      (this.prev_month = _),
                      (this.next_month = p);
              }),
              (this.showTimePicker = function (t, e) {
                  for (
                      var a,
                          i = [
                              "00:00",
                              "00:30",
                              "01:00",
                              "01:30",
                              "02:00",
                              "02:30",
                              "03:00",
                              "03:30",
                              "04:00",
                              "04:30",
                              "05:00",
                              "05:30",
                              "06:00",
                              "06:30",
                              "07:00",
                              "07:30",
                              "08:00",
                              "08:30",
                              "09:00",
                              "09:30",
                              "10:00",
                              "10:30",
                              "11:00",
                              "11:30",
                              "12:00",
                              "12:30",
                              "13:00",
                              "13:30",
                              "14:00",
                              "14:30",
                              "15:00",
                              "15:30",
                              "16:00",
                              "16:30",
                              "17:00",
                              "17:30",
                              "18:00",
                              "18:30",
                              "19:00",
                              "19:30",
                              "20:00",
                              "20:30",
                              "21:00",
                              "21:30",
                              "22:00",
                              "22:30",
                              "23:00",
                              "23:30",
                          ],
                          r = 0,
                          o = "",
                          c = 1;
                      c < 9;
                      c++
                  ) {
                      for (o += "<tr>", r *= 1; r < 6 * c; r++) i[r] ? ("", (a = this.getHourClassName(i[r], e)), (o += '<td class="'.concat(a, '">').concat(i[r], "</td>"))) : (o += '<td class="white-background disabled"></td>');
                      o += "</tr>";
                  }
                  (t.innerHTML = '<table class="time">\n      <tr>\n        <th colspan="7">\n          '
                      .concat(this.i18n[n[d(e)] + "_"], "\n          ")
                      .concat(e.getDate(), '\n          <span class="month" data-i18n="')
                      .concat(s[e.getMonth()] + "_", '">')
                      .concat(this.i18n[s[e.getMonth()] + "_"], "</span>\n        </th>\n      </tr>\n      ")
                      .concat(o, "\n    </table>")),
                      this.addOnSelectEvent(t);
              });
      }
      function a(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          n.call(this), (this.i18n = e.l10n ? e.l10n : this.i18n), (this.date_output = e.date_output ? e.date_output : "short_ISO");
          var a = e.start_date ? e.start_date : null,
              i = e.first_date ? e.first_date : null,
              s = e.last_date ? e.last_date : null,
              r = void 0 !== e.first_day_no ? e.first_day_no : 0,
              o = e.styles ? e.styles : {};
          this.setStartPickerProps(t, a, i, s, r),
              this.start_container.classList.add("datetime-container"),
              this.start_container.insertAdjacentHTML("afterbegin", this.getHTML("start", "date", o)),
              this.printDateAndTime(this.start_container, this.start_date),
              (this.start_date_btn = this.start_container.querySelector("button.date.start")),
              (this.start_picker = this.start_container.querySelector("div.picker")),
              this.start_date_btn.addEventListener("click", this.onOpenPicker);
      }
      function i(t) {
          var e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {};
          n.call(this), (this.i18n = e.l10n ? e.l10n : this.i18n), (this.round_to = !!e.round_to && e.round_to), (this.date_output = e.date_output ? e.date_output : "full_ISO");
          var a = e.start_date ? e.start_date : null,
              i = e.first_date ? e.first_date : null,
              s = e.last_date ? e.last_date : null,
              r = void 0 !== e.first_day_no ? e.first_day_no : 0,
              o = e.styles ? e.styles : {};
          this.setStartPickerProps(t, a, i, s, r),
              this.start_container.classList.add("datetime-container", "fix-float"),
              this.start_container.insertAdjacentHTML("afterbegin", this.getHTML("start", "datetime", o)),
              this.printDateAndTime(this.start_container, this.start_date),
              (this.start_date_btn = this.start_container.querySelector("button.date.start")),
              (this.start_time_btn = this.start_container.querySelector("button.time.start")),
              (this.start_picker = this.start_container.querySelector("div.picker")),
              this.start_date_btn.addEventListener("click", this.onOpenPicker),
              this.start_time_btn.addEventListener("click", this.onOpenPicker);
      }
      function s(t, e) {
          var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          n.call(this), (this.i18n = a.l10n ? a.l10n : this.i18n), (this.date_output = a.date_output ? a.date_output : "short_ISO"), (this.min_range = a.min_range_hours ? 60 * a.min_range_hours * 60 * 1e3 : 36e5);
          var i = a.start_date ? a.start_date : null,
              s = a.first_date ? a.first_date : null,
              r = a.last_date ? a.last_date : null,
              o = void 0 !== a.first_day_no ? a.first_day_no : 0,
              c = a.styles ? a.styles : {};
          this.setStartPickerProps(t, i, s, r, o);
          var d = a.end_date ? a.end_date : null;
          this.setEndPickerProps(e, d),
              this.start_container.classList.add("datetime-container"),
              this.start_container.insertAdjacentHTML("afterbegin", this.getHTML("start", "date", c)),
              this.printDateAndTime(this.start_container, this.start_date),
              (this.start_date_btn = this.start_container.querySelector("button.date.start")),
              (this.start_picker = this.start_container.querySelector("div.picker")),
              this.start_date_btn.addEventListener("click", this.onOpenPicker),
              this.end_container.classList.add("datetime-container"),
              this.end_container.insertAdjacentHTML("afterbegin", this.getHTML("end", "date")),
              this.printDateAndTime(this.end_container, this.end_date),
              (this.end_date_btn = this.end_container.querySelector("button.date.end")),
              (this.end_picker = this.end_container.querySelector("div.picker")),
              this.end_date_btn.addEventListener("click", this.onOpenPicker);
      }
      function r(t, e) {
          var a = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {};
          n.call(this),
              (this.i18n = a.l10n ? a.l10n : this.i18n),
              (this.round_to = !!a.round_to && a.round_to),
              (this.date_output = a.date_output ? a.date_output : "full_ISO"),
              (this.min_range = a.min_range_hours ? 60 * a.min_range_hours * 60 * 1e3 : 36e5);
          var i = a.start_date ? a.start_date : null,
              s = a.first_date ? a.first_date : null,
              r = a.last_date ? a.last_date : null,
              o = void 0 !== a.first_day_no ? a.first_day_no : 0,
              c = a.styles ? a.styles : {};
          this.setStartPickerProps(t, i, s, r, o);
          var d = a.end_date ? a.end_date : null;
          this.setEndPickerProps(e, d),
              this.start_container.classList.add("datetime-container", "fix-float"),
              this.start_container.insertAdjacentHTML("afterbegin", this.getHTML("start", "datetime", c)),
              this.printDateAndTime(this.start_container, this.start_date),
              (this.start_date_btn = this.start_container.querySelector("button.date.start")),
              (this.start_time_btn = this.start_container.querySelector("button.time.start")),
              (this.start_picker = this.start_container.querySelector("div.picker")),
              this.start_date_btn.addEventListener("click", this.onOpenPicker),
              this.start_time_btn.addEventListener("click", this.onOpenPicker),
              this.end_container.classList.add("datetime-container", "fix-float"),
              this.end_container.insertAdjacentHTML("afterbegin", this.getHTML("end", "datetime")),
              this.printDateAndTime(this.end_container, this.end_date),
              (this.end_date_btn = this.end_container.querySelector("button.date.end")),
              (this.end_time_btn = this.end_container.querySelector("button.time.end")),
              (this.end_picker = this.end_container.querySelector("div.picker")),
              this.end_date_btn.addEventListener("click", this.onOpenPicker),
              this.end_time_btn.addEventListener("click", this.onOpenPicker);
      }
      return (
          t.r(e),
          t.d(e, {
              DatePicker: function () {
                  return a;
              },
              DateTimePicker: function () {
                  return i;
              },
          }),
          Element.prototype.matches ||
              (Element.prototype.matches = Element.prototype.matchesSelector || Element.prototype.mozMatchesSelector || Element.prototype.msMatchesSelector || Element.prototype.oMatchesSelector || Element.prototype.webkitMatchesSelector),
          (a.prototype = Object.create(n.prototype)),
          (a.prototype.constructor = a),
          (i.prototype = Object.create(n.prototype)),
          (i.prototype.constructor = i),
          (s.prototype = Object.create(n.prototype)),
          (s.prototype.constructor = s),
          (r.prototype = Object.create(n.prototype)),
          (r.prototype.constructor = r),
          e
      );
  })();
});
