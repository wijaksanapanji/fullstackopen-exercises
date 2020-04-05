import React from "react";
import ReactDOM from "react-dom";

const Header = (props) => <h1>{props.title}</h1>;

const ContentItem = (props) => (
  <div>
    <h4>Title: {props.course.title}</h4>
    <p>Score: {props.course.score}</p>
  </div>
);

const Content = (props) => (
  <div>
    {props.courses.map((course) => (
      <ContentItem course={course} key={course.title} />
    ))}
  </div>
);

const Total = (props) => {
  const total = props.courses.reduce((acc, curr) => {
    return acc + curr.score;
  }, 0);

  return <h1>Total Score: {total}</h1>;
};

const App = () => {
  const courseTitle = `Half stack application development`;
  const courses = [
    {
      title: `Fundamentals of React`,
      score: 10,
    },
    {
      title: `Using props to pass data`,
      score: 7,
    },
    {
      title: `State of a component`,
      score: 14,
    },
  ];
  return (
    <div>
      <Header title={courseTitle} />
      <Content courses={courses} />
      <Total courses={courses} />
    </div>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
