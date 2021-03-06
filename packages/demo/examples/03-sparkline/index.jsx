import readme from '../../node_modules/@data-ui/sparkline/README.md';

import KitchenSinkExamples from './KitchenSinkExamples';
import BarSeriesExamples from './BarSeriesExamples';
import LineSeriesExamples from './LineSeriesExamples';
import PointsAndBandsExamples from './PointsAndBandsExamples';

export default {
  usage: readme,
  examples: [
    ...KitchenSinkExamples,
    ...BarSeriesExamples,
    ...LineSeriesExamples,
    ...PointsAndBandsExamples,
  ],
};
