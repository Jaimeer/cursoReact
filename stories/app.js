import React from 'react'
import {storiesOf, action} from '@kadira/storybook';

import App, {NumInput} from '../App'

storiesOf('Button', module)
    .add('with text', () => (
        <button onClick={action('clicked')}>My First Button</button>
    ))
    .add('with no text', () => (
        <button></button>
    ))
    .add('red button', () => {
        const style = {
            color: 'white',
            backgroundColor: 'red'
        }
        return <button style={style}>My red button</button>
    })
    .add('blue button', () => {
        const style = {
            color: 'white',
            backgroundColor: 'blue'
        }
        return <button style={style}>My blue button</button>
    });

storiesOf('App', module)
    .add('base', () => (
        <App />
    ));

storiesOf('NumInput', module)
    .add('Number', () => (
        <NumInput
            min={0}
            max={255}
            step={0}
            val={150}
            label="Red"
            type="number"
            update={action('update value')}/>
    ))
    .add('range', () => (
        <NumInput
            min={0}
            max={255}
            step={0}
            val={150}
            label="Red"
            type="range"
            update={action('update value')}/>
    ));
