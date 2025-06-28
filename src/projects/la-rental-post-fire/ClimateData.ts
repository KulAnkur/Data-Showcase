
export const climateData = {
  years: ['2018', '2019', '2020', '2021', '2022', '2023'],
  temperatureChanges: [0.8, 0.9, 1.1, 1.0, 1.2, 1.3],
  regions: ['North America', 'Europe', 'Asia', 'Africa', 'Australia', 'South America'],
  regionalImpacts: [1.2, 0.9, 1.1, 1.4, 1.3, 0.8],
  keyFindings: [
    "Global temperatures have risen by an average of 1.1°C since pre-industrial times",
    "Arctic regions are experiencing warming at twice the global average rate",
    "Climate change is accelerating, with 19 of the 20 warmest years occurring since 2001",
    "Sea level rise has increased from 1.4mm per year to 3.6mm per year",
    "Extreme weather events have increased in frequency and intensity"
  ],
  methodology: `This analysis examines long-term climate trends across multiple geographic regions, processing data from over 3,000 climate monitoring stations. The visualization reveals clear patterns of temperature rise, with particular acceleration evident in the Arctic region and other climate-sensitive areas.

Raw temperature data was processed using Python and Pandas, with statistical normalization applied to account for regional variations. Visualization techniques included geographical mapping and time-series analysis to reveal temporal patterns.`
};
