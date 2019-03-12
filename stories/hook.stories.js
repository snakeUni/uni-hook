import  React from "react";
import { storiesOf } from "@storybook/react";
import { withDocs} from 'storybook-readme'

import CounterDemo from '../example/useCounter'
import CounterReadme from '../example/useCounter/readme.md'

import ActiveDemo from '../example/useActive'
import ActiveReadme from '../example/useActive/readme.md'

import BottomVisibleDemo from '../example/useBottomVisible'
import BottomVisibleReadme from '../example/useBottomVisible/readme.md'

import DarkModeDemo from '../example/useDarkMode'
import DarkModeReadme from '../example/useDarkMode/readme.md'

import DelayDemo from '../example/useDelay'
import DelayReadme from '../example/useDelay/readme.md'

import FocusDemo from '../example/useFocus'
import FocusReadme from '../example/useFocus/readme.md'

import ScreenDemo from '../example/useInScreen'
import ScreenReadme from '../example/useInScreen/readme.md'

import IntervalDemo from '../example/useInterval'
import IntervalReadme from '../example/useInterval/readme.md'

import KeyPressDemo from '../example/useKeyPress'
import KeyPressReadme from '../example/useKeyPress/readme.md'

import LockBodyScrollDemo from '../example/useLockBodyScroll'
import LockBodyScrollReadme from '../example/useLockBodyScroll/readme.md'

import MousePositionDemo from '../example/useMousePosition'
import MousePositionReadme from '../example/useMousePosition/readme.md'

import PreviousDemo from '../example/usePrevious'
import PreviousReadme from '../example/usePrevious/readme.md'

import RandomColorDemo from '../example/useRandomColor'
import RandomColorReadme from '../example/useRandomColor/readme.md'

import TimerDemo from '../example/useTimer'
import TimerReadme from '../example/useTimer/readme.md'

import ToCaseDemo from '../example/useToCase'
import ToCaseReadme from '../example/useToCase/readme.md'

import ToggleDemo from '../example/useToggle'
import ToggleReadme from '../example/useToggle/readme.md'

import WindowSizeDemo from '../example/useWindowSize'
import WindowSizeReadme from '../example/useWindowSize/readme.md'

storiesOf('Hook', module)
.add('useCounter', withDocs(CounterReadme, () => {
  return <CounterDemo />
}))
.add('useActive', withDocs(ActiveReadme, () => {
  return <ActiveDemo />
}))
.add('useBottomVisible', withDocs(BottomVisibleReadme, () => {
  return <BottomVisibleDemo />
}))
.add('useDarkMode', withDocs(DarkModeReadme, () => {
  return <DarkModeDemo />
}))
.add('useDelay', withDocs(DelayReadme, () => {
  return <DelayDemo />
}))
.add('useFocus', withDocs(FocusReadme, () => {
  return <FocusDemo />
}))
.add('useInScreen', withDocs(ScreenReadme, () => {
  return <ScreenDemo />
}))
.add('useInterval', withDocs(IntervalReadme, () => {
  return <IntervalDemo />
}))
.add('useKeyPress', withDocs(KeyPressReadme, () => {
  return <KeyPressDemo />
}))
.add('useLockBodyScroll', withDocs(LockBodyScrollReadme, () => {
  return <LockBodyScrollDemo />
}))
.add('useMousePosition', withDocs(MousePositionReadme, () => {
  return <MousePositionDemo />
}))
.add('usePrevious', withDocs(PreviousReadme, () => {
  return <PreviousDemo />
}))
.add('useRandomColor', withDocs(RandomColorReadme, () => {
  return <RandomColorDemo />
}))
.add('useTimer', withDocs(TimerReadme, () => {
  return <TimerDemo />
}))
.add('useToCase', withDocs(ToCaseReadme, () => {
  return <ToCaseDemo />
}))
.add('useToggle', withDocs(ToggleReadme, () => {
  return <ToggleDemo />
}))
.add('useWindowSize', withDocs(WindowSizeReadme, () => {
  return <WindowSizeDemo />
}))