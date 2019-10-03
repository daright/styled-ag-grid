import { compose } from 'ramda' // Replace with any compose() function of your choice
import { lighten, desaturate } from 'polished'

export const tone = compose(lighten(0.5), desaturate(0.1));
