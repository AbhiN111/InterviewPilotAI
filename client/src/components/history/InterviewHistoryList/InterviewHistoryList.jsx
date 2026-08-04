import InterviewHistoryCard from "../InterviewHistoryCard/InterviewHistoryCard";
import "./InterviewHistoryList.css";

function InterviewHistoryList() {

  const interviews = [

    {
      id: 1,
      company: "Google",
      role: "Software Engineer",
      date: "03 Aug 2026",
      duration: "32 min",
      score: 96,
      status: "Excellent",
    },

    {
      id: 2,
      company: "Microsoft",
      role: "Frontend Developer",
      date: "30 Jul 2026",
      duration: "28 min",
      score: 91,
      status: "Excellent",
    },

    {
      id: 3,
      company: "Amazon",
      role: "SDE Intern",
      date: "26 Jul 2026",
      duration: "35 min",
      score: 86,
      status: "Good",
    },

    {
      id: 4,
      company: "TCS Digital",
      role: "System Engineer",
      date: "20 Jul 2026",
      duration: "25 min",
      score: 74,
      status: "Practice",
    },

    {
      id: 5,
      company: "Infosys",
      role: "Specialist Programmer",
      date: "15 Jul 2026",
      duration: "31 min",
      score: 89,
      status: "Good",
    },

  ];

  return (

    <div className="history-list">

      {interviews.map((interview) => (

        <InterviewHistoryCard
          key={interview.id}
          interview={interview}
        />

      ))}

    </div>

  );
}

export default InterviewHistoryList;