import React, { useEffect, useState } from "react";
import { GuideContainer } from "../../../../../components/GuideContainer";
import LastStep from "../../../../../components/LastStep";

const index = () => {
  const [data, setData] = useState([]);
  const [activeStep, setActiveStep] = useState(0);
  const [underFinalConfirmation, setUnderFinalConfirmation] = useState(false);
  const finalConfirmationPageNumber = 2;

  useEffect(() => {
    if (activeStep === finalConfirmationPageNumber) {
      setUnderFinalConfirmation(true);
    }
  }, [activeStep]);

  console.log({ data });

  const pages = {
    0: <GuideContainer setData={setData} setActiveStep={setActiveStep} />,
    1: <GuideContainer setData={setData} setActiveStep={setActiveStep} />,
    2: <GuideContainer setData={setData} setActiveStep={setActiveStep} />,
    3: <GuideContainer setData={setData} setActiveStep={setActiveStep} />,
    4: <GuideContainer setData={setData} setActiveStep={setActiveStep} />,
    5: <GuideContainer setData={setData} setActiveStep={setActiveStep} />,
    6: <GuideContainer setData={setData} setActiveStep={setActiveStep} />,
    7: <GuideContainer setData={setData} setActiveStep={setActiveStep} />,
    8: <GuideContainer setData={setData} setActiveStep={setActiveStep} />,
    9: <GuideContainer setData={setData} setActiveStep={setActiveStep} />,
    10: <GuideContainer setData={setData} setActiveStep={setActiveStep} />,
    11: <GuideContainer setData={setData} setActiveStep={setActiveStep} />,
    12: <LastStep data={data} />,
  };
  return pages[activeStep as keyof typeof pages];
};

export default index;
