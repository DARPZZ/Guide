import React from "react";
type WordPdfStep = {
  id: number;
  picture:string;
  text:string;
  styleing?:string;
};
interface Props {
  step: WordPdfStep;
}
function WordPdfComps({ step }: Props) {
  return (
    <>
      <h3 className="font-normal text-lg">
        <span className="font-bold underline text-xl">{step.id}.</span> {step.text}
      </h3>
      <img src={step.picture} alt="Fail" className={`${step.styleing}`} />
    </>
  );
}

export default WordPdfComps;
