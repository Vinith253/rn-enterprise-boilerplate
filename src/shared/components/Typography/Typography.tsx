import React from 'react';
import {
  Text,
  TextProps,
  TextStyle,
} from 'react-native';

import {typography} from '@theme/typography';
import {useAppTheme} from '@theme/useAppTheme';

type Variant =
  | 'headingLarge'
  | 'headingMedium'
  | 'body'
  | 'caption';

type Props = TextProps & {
  variant?: Variant;
  style?: TextStyle;
};

const Typography = ({
  children,
  variant = 'body',
  style,
  ...props
}: Props) => {
  const theme = useAppTheme();

  return (
    <Text
      style={[
        typography[variant],
        {
          color: theme.colors.text,
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default Typography;