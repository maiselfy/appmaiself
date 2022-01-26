import React, { useState, useEffect, useCallback } from "react";
import moment from "moment";
import { useLongPress } from "react-use";
import { buildCalendar } from "../../services/calendar";

interface Check {
  date: string;
  checked: boolean;
}
const findCheckInCalendarChecks = (
  date: moment.Moment,
  calendarChecks: any
) => {
  // console.log(date, calendarChecks);

  const dateFormatted = date.startOf("day").subtract(3, "hours").clone();
  // console.log(dateFormatted);

  const dictionary = {};
  return !!calendarChecks.find((item) => {
    // console.log(dateFormatted.isSame(moment(item.date)));
    return dateFormatted.isSame(moment(item.date));
  });
};

import {
  MonthTxt,
  CalendarContainer,
  Header,
  LeftArrowIcon,
  RightArrowIcon,
  WeekRow,
  DayButton,
  Dot,
  DateTxt,
} from "./styles";
import { useAuth } from "../../hooks/useAuth";
import api from "../../api/api";
import { AsyncStorage, Text } from "react-native";
import { useTheme } from "styled-components";
const Calendar = ({
  habitId,
  shouldReload,
  setShouldReload,
}: {
  habitId: string;
  shouldReload: boolean;
  setShouldReload: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { user } = useAuth();
  const theme = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState(moment());
  const [selectedDate, setSelectedValue] = useState(moment());
  const [calendar, setCalendar] = useState([]);
  const [calendarChecks, setCalendarChecks] = useState<Check[]>([]);

  useEffect(() => {
    const loadHabit = async () => {
      if (user.id !== undefined && habitId !== undefined) {
        const response = await api
          .get(
            `api/habitCheck/listChecksOnInterval/${user?.id}/${habitId}/${value
              .startOf("month")
              .toDate()
              .toUTCString()}`,
            {
              headers: {
                Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
              },
            }
          )
          .catch((err) => console.log(err.response));
        setCalendarChecks(response.data.checks);
      }
    };
    setShouldReload(false);
    loadHabit();
  }, [habitId, user?.id, value, shouldReload]);

  useEffect(() => {
    async function rodaporra() {
      const response = await api
        .get(
          `api/habitCheck/listChecksOnInterval/${user?.id}/${habitId}/${value
            .startOf("month")
            .toDate()
            .toUTCString()}`,
          {
            headers: {
              Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
            },
          }
        )
        .catch((err) => console.log(err.response));
      const calendarDates = buildCalendar(value);
      const b = calendarDates.map((week) => {
        return week.map((date) => {
          const a = {
            date: moment(date.date).subtract(3, "hours"),
            checked: findCheckInCalendarChecks(
              moment(date.date).subtract(3, "hours"),
              response.data.checks
            ),
          };
          return a;
        });
      });
      setCalendar(b);
    }
    rodaporra();
  }, [value]);

  const handlerLongClick = async (day: moment.Moment) => {
    if (!findCheckInCalendarChecks(day, calendarChecks)) {
      api
        .post(
          "api/habitCheck",
          {
            user_id: user?.id,
            habit_id: habitId,
            date: day.toDate().toUTCString(),
          },
          {
            headers: {
              Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
            },
          }
        )
        .catch((error) => console.log(error.response));
    } else {

      api
        .delete(
          `api/habitCheck/delete/${habitId}/${day.toDate().toUTCString()}`,
          {
            headers: {
              Authorization: `Bearer ${await AsyncStorage.getItem("token")}`,
            },
          }
        )
        .catch((error) => console.log(error));
    }
    setShouldReload(true);
  };

  return (
    <CalendarContainer>
      <Header justify='space-between' align='center'>
        <LeftArrowIcon
          name='arrow-left'
          size={24}
          onPress={() => setValue(value.clone().subtract(1, "month"))}
        />
        <MonthTxt>{value.format("MMMM,  YYYY")}</MonthTxt>
        <RightArrowIcon
          name='arrow-right'
          size={24}
          onPress={() => setValue(value.clone().add(1, "month"))}
          disabled={value.isSame(new Date(), "month")}
        />
      </Header>
      {calendar.map((week, index) => (
        <WeekRow key={index}>
          {week.map((day: { checked: boolean; date: Date }) => (
            <DayButton
              enabled={!moment(day.date).isAfter(new Date())}
              key={moment(day.date).dayOfYear()}
              onLongPress={() => handlerLongClick(moment(day.date))}
              bg={
                moment(day.date).isSame(new Date(), "day")
                  ? theme.colors.primary
                  : theme.colors.default
              }
            >
              <DateTxt disabled={moment(day.date).isAfter(new Date())}>
                {moment(day.date).format("D").toString()}
              </DateTxt>
              {/* {console.log(day.date, day.checked)} */}
              <Dot
                display={
                  moment(day.date).isBefore(value, "month") ||
                  moment(day.date).isAfter(value, "month")
                    ? "none"
                    : "flex"
                }
                bg={day.checked ? theme.colors.success : theme.colors.primary}
              />
            </DayButton>
          ))}
        </WeekRow>
      ))}
    </CalendarContainer>
  );
};
export default Calendar;
