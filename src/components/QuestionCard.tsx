import React from "react";

type Props = {
  question: string;
  answer: string[];
  callback: any;
  userAnswer: string;
  questionNum: number;
  totalQuestions: number;
};

// FC => Указывает что это функциональный компонент
// Снизу обычные пропсы которые можно юзать в компоненте
const QuestionCard: React.FC<Props> = ({
  question,
  answer,
  callback,
  userAnswer,
  questionNum,
  totalQuestions,
}) => {
  return <div>
    <p className="number">
      Question: {questionNum} / {totalQuestions}
    </p>
    {/* dangerouslySetInnerHTML -> используем потому что не знаем какие данные парсим, опасные или нет */}
    {/* Вторые косые скобки из за того что внутри обьект */}
    <p dangerouslySetInnerHTML={{ __html: question}} />
  </div>;
};

export default QuestionCard;
