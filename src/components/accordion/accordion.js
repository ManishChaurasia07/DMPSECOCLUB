/** @jsxRuntime classic */
/** @jsx jsx */
import { Fragment } from 'react';
import { rgba } from 'polished';
import { jsx, Heading } from 'theme-ui';
import { BaseAccordion } from './base-accordion';
import ActionButton from './action-button';
import {
  AccordionButton,
  AccordionItem,
  AccordionContents,
  single,
  preventClose,
  combineReducers,
} from './shared';

export default function Accordion({ items, ...props }) {
  return (
    <BaseAccordion
      stateReducer={combineReducers(single, preventClose)}
      {...props}
    >
      {({ openIndexes, handleItemClick }) => (
        <Fragment>
          {items.map((item, index) => (
            <AccordionItem
              key={item.title}
              sx={styles.accordion}
              isOpen={openIndexes.includes(index)}
              className={openIndexes.includes(index) ? 'is-open' : 'is-closed'}
            >
              <AccordionButton onClick={() => handleItemClick(index)}>
                <Heading as="h4" sx={styles.title}>
                  {item.title}
                </Heading>
              </AccordionButton>
              <AccordionContents
                isOpen={openIndexes.includes(index)}
                sx={styles.content}
              >
                {item.contents}
              </AccordionContents>
              <ActionButton
                handleClick={() => handleItemClick(index)}
                isOpen={openIndexes.includes(index)}
              />
            </AccordionItem>
          ))}
        </Fragment>
      )}
    </BaseAccordion>
  );
}

const styles = {
  accordion: {
    borderBottom: `1px solid ${rgba('#0F2137', 0.3)}`,
    gap: [2, null, null, 4, 3, 13],
    display: 'grid',
    gridTemplateColumns: ['1fr ', null, null, null, '1fr 1fr'],
    alignItems: 'flex-start',
    position: 'relative',
    paddingRight: [null, null, null, 7, 8, 11],
    marginBottom: [3, null, null, 6, 8],
    paddingBottom: [3, null, null, 6, 8],
    '&.is-open': {
      borderWidth: 2,
      borderColor: 'heading',
    },
  },
  title: {
    color: 'heading',
    fontWeight: 500,
    fontSize: [2, null, null, 4],
    lineHeight: 1.5,
    letterSpacing: 'heading',
    paddingRight: [8, null, null, 0],
  },
  content: {
    fontSize: [1, null, null, 2],
    '> div': {
      paddingTop: [1, null, null, 0],
    },
  },
};
