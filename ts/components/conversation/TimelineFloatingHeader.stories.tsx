// Copyright 2022 Signal Messenger, LLC
// SPDX-License-Identifier: AGPL-3.0-only

import * as React from 'react';
import { storiesOf } from '@storybook/react';
import { isBoolean } from 'lodash';
import { boolean } from '@storybook/addon-knobs';

import { setupI18n } from '../../util/setupI18n';
import enMessages from '../../../_locales/en/messages.json';

import type { PropsType } from './TimelineFloatingHeader';
import { TimelineFloatingHeader } from './TimelineFloatingHeader';

const i18n = setupI18n('en', enMessages);

function booleanOr(value: boolean | undefined, defaultValue: boolean): boolean {
  return isBoolean(value) ? value : defaultValue;
}

const createProps = (overrideProps: Partial<PropsType> = {}): PropsType => ({
  isLoading: boolean('isLoading', booleanOr(overrideProps.isLoading, false)),
  style: overrideProps.style,
  visible: boolean('visible', booleanOr(overrideProps.visible, false)),
  i18n,
  timestamp: overrideProps.timestamp || Date.now(),
});

const stories = storiesOf('Components/TimelineFloatingHeader', module);

stories.add('Visible', () => {
  return <TimelineFloatingHeader {...createProps({ visible: true })} />;
});

stories.add('Loading', () => {
  return (
    <TimelineFloatingHeader
      {...createProps({ visible: true, isLoading: true })}
    />
  );
});
