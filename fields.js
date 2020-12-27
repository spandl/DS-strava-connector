function getFields() {
    var cc = DataStudioApp.createCommunityConnector();
    var fields = cc.getFields();
    var types = cc.FieldType;
    var aggregations = cc.AggregationType;

    // Base fields: include always
    fields
        .newDimension()
        .setId('id')
        .setName('ID')
        .setType(types.NUMBER)
        .setDescription('The unique identifier of the activity');

    fields
        .newDimension()
        .setId('private')
        .setName('is Private')
        .setType(types.BOOLEAN)
        .setDescription('Activity markes as private');

    fields
        .newDimension()
        .setId('name')
        .setName('Name')
        .setType(types.TEXT)
        .setDescription('The name of the activity.');

    fields
        .newDimension()
        .setId('type')
        .setName('Activity type')
        .setType(types.TEXT)
        .setDescription('The type of the activity.');

    fields
        .newDimension()
        .setId('start_date_local')
        .setName('Start Time')
        .setType(types.YEAR_MONTH_DAY_HOUR)
        .setDescription('The local time at which the activity was started.');

    fields
        .newDimension()
        .setId('start_month_local')
        .setName('Month')
        .setType(types.MONTH)
        .setFormula('SUBSTR($start_date_local, 5, 2)')
        .setDescription('The month in which the activity was started.');

    fields
        .newDimension()
        .setId('start_latlng')
        .setName('Start Location')
        .setType(types.LATITUDE_LONGITUDE)
        .setDescription('The starting latitude and longitude');

    fields
        .newDimension()
        .setId('end_latlng')
        .setName('End Location')
        .setType(types.LATITUDE_LONGITUDE)
        .setDescription('The ending latitude and longitude');

    fields
        .newDimension()
        .setId('location_country')
        .setName('Country')
        .setType(types.COUNTRY)
        .setDescription('The country the activity took place in.');

    fields
        .newMetric()
        .setId('distance')
        .setName('Distance (m)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.SUM)
        .setDescription("The activity's distance, in meters.");

    fields
        .newMetric()
        .setId('moving_time')
        .setName('Moving Time')
        .setType(types.DURATION)
        .setDescription("The activity's moving time, in seconds.");

    fields
        .newMetric()
        .setId('total_elevation_gain')
        .setName('Elevation Gain (m)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.SUM)
        .setDescription("The activity's total elevation gain, in meters.");

    fields
        .newMetric()
        .setId('average_cadence')
        .setName('Cadence')
        .setType(types.NUMBER)
        .setAggregation(aggregations.AVG)
        .setDescription('The average cadence during the activity.');

    fields
        .newMetric()
        .setId('average_heartrate')
        .setName('Heartrate')
        .setType(types.NUMBER)
        .setAggregation(aggregations.AVG)
        .setDescription('Average heart rate for the activity.');

    // SOCIAL and other secondary fields
    fields
        .newDimension()
        .setId('commute')
        .setName('Is Commute')
        .setType(types.BOOLEAN)
        .setDescription('Whether this activity is a commute');

    fields
        .newDimension()
        .setId('manual')
        .setName('Manual Entry')
        .setType(types.BOOLEAN)
        .setDescription('Whether this activity was created manually');

    fields
        .newMetric()
        .setId('flagged')
        .setName('Flagged')
        .setType(types.BOOLEAN)
        .setDescription('Ride was flagged');

    fields
        .newMetric()
        .setId('elapsed_time')
        .setName('Elapsed Time (s)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.SUM)
        .setDescription("The activity's elapsed time, in seconds.");

    fields
        .newMetric()
        .setId('achievement_count')
        .setName('Achievement Count')
        .setType(types.NUMBER)
        .setAggregation(aggregations.SUM)
        .setDescription('Number of achievements per activity');

    fields
        .newMetric()
        .setId('kudos_count')
        .setName('Kudos')
        .setType(types.NUMBER)
        .setAggregation(aggregations.SUM)
        .setDescription('Number of kudos per activity');

    fields
        .newMetric()
        .setId('comment_count')
        .setName('Comments Count')
        .setType(types.NUMBER)
        .setAggregation(aggregations.SUM)
        .setDescription('Number of comments per activity');

    fields
        .newMetric()
        .setId('athlete_count')
        .setName('Athlete Count')
        .setAggregation(aggregations.AVG)
        .setType(types.NUMBER)
        .setDescription('Number of athelete parcticipating in this activity');

    fields
        .newMetric()
        .setId('photo_count')
        .setName('Photo Count')
        .setType(types.NUMBER)
        .setAggregation(aggregations.SUM)
        .setDescription('The number of Instagram photos for this activity');

    fields
        .newMetric()
        .setId('total_photo_count')
        .setName('Total Photo Count')
        .setAggregation(aggregations.SUM)
        .setType(types.NUMBER)
        .setDescription('The number of Instagram and Strava photos for this activity');

    fields
        .newMetric()
        .setId('average_watts')
        .setName('Watts / AVG')
        .setAggregation(aggregations.AVG)
        .setType(types.NUMBER)
        .setDescription('Average wattage for this activity');

    fields
        .newMetric()
        .setId('max_watts')
        .setName('Watts / MAX ')
        .setType(types.NUMBER)
        .setAggregation(aggregations.MAX)
        .setDescription('Max wattage for this activity');

    fields
        .newMetric()
        .setId('weighted_average_watts')
        .setName('Watts / AVG (weighted)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.AVG)
        .setDescription('Average weighted wattage for this activity');

    fields
        .newDimension()
        .setId('device_watts')
        .setName('Watts / AVG (weighted)')
        .setType(types.BOOLEAN)
        .setDescription('Whether the wattage was reported by a dedicated recording device');

    fields
        .newMetric()
        .setId('elev_high')
        .setName('Highest elevation (m)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.MAX)
        .setDescription("The activity's highest elevation, in meters");

    fields
        .newMetric()
        .setId('elev_low')
        .setName('Lowest elevation (m)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.MIN)
        .setDescription("The activity's lowest elevation, in meters");

    fields
        .newMetric()
        .setId('suffer_score')
        .setName('Suffer Score')
        .setType(types.NUMBER)
        .setAggregation(aggregations.AVG)
        .setDescription('Strava Suffer Score');

    fields
        .newDimension()
        .setId('device_name')
        .setName('Device Name')
        .setType(types.NUMBER)
        .setDescription('Device which recorded the activity');

    fields
        .newDimension()
        .setId('gear_id')
        .setName('Gear ID')
        .setType(types.TEXT)
        .setDescription('ID of used equipment for the activity');

    fields
        .newMetric()
        .setId('pr_count')
        .setName('Personal Record Count')
        .setType(types.NUMBER)
        .setAggregation(aggregations.SUM)
        .setDescription('Personal Record Count for the activity');

    fields
        .newMetric()
        .setId('calories')
        .setName('Calories')
        .setType(types.NUMBER)
        .setAggregation(aggregations.AVG)
        .setDescription('The number of kilocalories consumed during this activity');

    fields
        .newMetric()
        .setId('average_speed')
        .setName('Average Speed (m/s)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.AVG)
        .setDescription('The average speed across selected activities, in meters per second');

    fields
        .newMetric()
        .setId('max_speed')
        .setName('Max Speed (m/s)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.MAX)
        .setDescription("The activity's max speed, in meters per second");

    //** Additional values in METRIC units */

    fields
        .newMetric()
        .setId('distance_convert')
        .setName('Distance (km)')
        .setType(types.NUMBER)
        .setFormula('$distance / 1000')
        .setAggregation(aggregations.SUM)
        .setDescription("The activity's distance, in kilometer.")
        .setGroup('Metric Values');

    fields
        .newMetric()
        .setId('average_speed_km')
        .setName('Average Speed (km/h)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.AVG)
        .setFormula('$average_speed / 1000 * 3600')
        .setDescription('The average speed across selected activities, in kilometers per hours')
        .setGroup('Metric Values');

    fields
        .newMetric()
        .setId('max_speed_km')
        .setName('Max Speed (km/h)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.MAX)
        .setFormula('$max_speed / 1000 * 3600')
        .setDescription("The activity's max speed, in km/h");

    fields
        .newMetric()
        .setId('average_temp')
        .setName('Temperature (C)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.AVG)
        .setDescription('The average temperature during the activity, in Celsius.');

    //** Additional values in IMPERIAL units */
    fields
        .newMetric()
        .setId('distance_miles')
        .setName('Distance (mi)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.SUM)
        .setDescription("The activity's distance, in miles.")
        .setFormula('$distance / 1609.34')
        .setGroup('Imperial Values');

    fields
        .newMetric()
        .setId('total_elevation_gain_feet')
        .setName('Elevation Gain (feet)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.SUM)
        .setDescription("The activity's total elevation gain, in feet.")
        .setFormula('$total_elevation_gain * 3.28084')
        .setGroup('Imperial Values');

    fields
        .newMetric()
        .setId('max_speed_mph')
        .setName('Max Speed (mph)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.MAX)
        .setDescription("The activity's max speed, in miles per hour")
        .setFormula('$max_speed * 2.23694');

    fields
        .newMetric()
        .setId('average_speed_mph')
        .setName('Average Speed (mph)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.AVG)
        .setFormula('$distance / CAST($moving_time AS NUMBER) * 2.23694')
        .setDescription('The average speed across selected activities, in miles per hour');

    fields
        .newMetric()
        .setId('average_temp_fahrenheit')
        .setName('Temperature (F)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.AVG)
        .setDescription('The average temperature during the activity, in Fahrenheit.')
        .setFormula('$average_temp * 9 / 5 + 32');

    //** Additional values for PACE */
    fields
        .newMetric()
        .setId('max_pace')
        .setName('Max Pace (min per km)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.MAX)
        .setFormula('$1000 / 60 / max_speed')
        .setDescription("The activity's max speed, minutes per kilometer");

    fields
        .newMetric()
        .setId('average_pace')
        .setName('Average Pace (min per km)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.AVG)
        .setFormula('$1000 / 60 / average_speed')
        .setDescription("The activity's average speed, minutes per kilometer");

    fields
        .newDimension()
        .setId('mile_pace')
        .setName('Pace - Mile')
        .setType(types.DURATION)
        // There are 1609.34 meters in a mile.
        .setFormula('CAST($moving_time AS NUMBER) / $distance * 1609.34')
        .setDescription('1 mile pace.');

    fields
        .newDimension()
        .setId('5k_pace')
        .setName('Pace - 5k')
        .setType(types.DURATION)
        .setFormula('CAST($moving_time AS NUMBER) / $distance * 5000')
        .setDescription('5 kilometer pace.');

    fields
        .newDimension()
        .setId('10k_pace')
        .setName('Pace - 10k')
        .setType(types.DURATION)
        .setFormula('CAST($moving_time AS NUMBER) / $distance * 10000')
        .setDescription('10 kilometer pace.');

    fields
        .newDimension()
        .setId('half_marathon_pace')
        .setName('Pace - Half Marathon')
        .setType(types.DURATION)
        .setFormula('CAST($moving_time AS NUMBER) / $distance * 21097.5')
        .setDescription('half marathon pace.');

    fields
        .newDimension()
        .setId('marathon_pace')
        .setName('Pace - Marathon')
        .setType(types.DURATION)
        .setFormula('CAST($moving_time AS NUMBER) / $distance * 42195')
        .setDescription('marathon pace');

    return fields;
}
