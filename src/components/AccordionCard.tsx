import { questions } from '../constants';

import Accordion from './Accordion';

const AccordionCard = () => {
  return (
    <div className="flex w-screen justify-center md:items-center">
      <Accordion title="FAQs" items={questions} />
    </div>
  );
};

export default AccordionCard;
