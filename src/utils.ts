import diaryService from "./services/diaryService";
const newDiaryEntry = diaryService.addDiary({
  date,
  weather,
  visibility,
  comment,
});

export default newDiaryEntry