import React, { useEffect, useState } from "react";
import { GuideContainer } from "../../../../../components/GuideContainer";
import LastStep from "../../../../../components/LastStep";

export const finalConfirmationPageNumber = 12;

export type Data = {
  [key: number]: string;
};

const index = () => {
  const [data, setData] = useState<Data[]>([]);
  const [activeStep, setActiveStep] = useState(0);
  const [underFinalConfirmation, setUnderFinalConfirmation] = useState(false);

  useEffect(() => {
    if (activeStep === finalConfirmationPageNumber) {
      setUnderFinalConfirmation(true);
    }
  }, [activeStep]);

  const pages = {
    0: (
      <GuideContainer
        data={data}
        setData={setData}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        underFinalConfirmation={underFinalConfirmation}
      />
    ),
    1: (
      <GuideContainer
        data={data}
        setData={setData}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        underFinalConfirmation={underFinalConfirmation}
      />
    ),
    2: (
      <GuideContainer
        data={data}
        setData={setData}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        underFinalConfirmation={underFinalConfirmation}
      />
    ),
    3: (
      <GuideContainer
        data={data}
        setData={setData}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        underFinalConfirmation={underFinalConfirmation}
      />
    ),
    4: (
      <GuideContainer
        data={data}
        setData={setData}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        underFinalConfirmation={underFinalConfirmation}
      />
    ),
    5: (
      <GuideContainer
        data={data}
        setData={setData}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        underFinalConfirmation={underFinalConfirmation}
      />
    ),
    6: (
      <GuideContainer
        data={data}
        setData={setData}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        underFinalConfirmation={underFinalConfirmation}
      />
    ),
    7: (
      <GuideContainer
        data={data}
        setData={setData}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        underFinalConfirmation={underFinalConfirmation}
      />
    ),
    8: (
      <GuideContainer
        data={data}
        setData={setData}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        underFinalConfirmation={underFinalConfirmation}
      />
    ),
    9: (
      <GuideContainer
        data={data}
        setData={setData}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        underFinalConfirmation={underFinalConfirmation}
      />
    ),
    10: (
      <GuideContainer
        data={data}
        setData={setData}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        underFinalConfirmation={underFinalConfirmation}
      />
    ),
    11: (
      <GuideContainer
        data={data}
        setData={setData}
        activeStep={activeStep}
        setActiveStep={setActiveStep}
        underFinalConfirmation={underFinalConfirmation}
      />
    ),
    12: <LastStep data={data} setActiveStep={setActiveStep} />,
  };
  return pages[activeStep as keyof typeof pages];
};

export default index;
