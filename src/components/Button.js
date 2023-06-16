/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx, Flex,  Button } from 'theme-ui';

const SubscriptionForm = ({ buttonLabel, ...props }) => {
  return (
    <Flex as="form" sx={styles.form} {...props}>
      <Button>{buttonLabel ?? 'Get Started'}</Button>
    </Flex>
  );
};

export default SubscriptionForm;

const styles = {
  form: {
    button: {
      m: ['20px auto 0', null, null, null, '5px 0 0'],
    },
  },
};
