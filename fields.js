function getMetricFields(fields) {
    var cc = DataStudioApp.createCommunityConnector()
    var types = cc.FieldType
    var aggregations = cc.AggregationType

    fields
        .newMetric()
        .setId('distance_km')
        .setName('Distance (km)')
        .setType(types.NUMBER)
        .setFormula('$distance / 1000')
        .setDescription("The activity's distance, in kilometer.")

    fields
        .newMetric()
        .setId('average_speed')
        .setName('Average Speed (m/s)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.AVG)
        .setDescription(
            'The average speed across selected activities, in meters per second'
        )

    fields
        .newMetric()
        .setId('average_speed_km')
        .setName('Average Speed (km/h)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.AVG)
        .setFormula('$average_speed / 1000 * 3600')
        .setDescription(
            'The average speed across selected activities, in kilometers per hours'
        )

    fields
        .newMetric()
        .setId('max_speed')
        .setName('Max Speed (m/s)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.NO_AGGREGATION)
        .setDescription("The activity's max speed, in meters per second")

    fields
        .newMetric()
        .setId('max_speed_km')
        .setName('Max Speed (km/h)')
        .setType(types.NUMBER)
        .setAggregation(aggregations.NO_AGGREGATION)
        .setFormula('$max_speed / 1000 * 3600')
        .setDescription("The activity's max speed, in km/h")

    fields
        .newMetric()
        .setId('average_temp')
        .setName('Temperature (C)')
        .setType(types.NUMBER)
        .setDescription(
            'The average temperature during the activity, in Celsius.'
        )

    return fields
}

function getFields(request) {
    // TODO(mjhamrick) - use config params to ask if the user wants meters, miles, or both for their schema fields.
    var cc = DataStudioApp.createCommunityConnector()
    var fields = cc.getFields()
    var types = cc.FieldType
    var aggregations = cc.AggregationType

    Logger.log('inside getFields function - v1')
    Logger.log(request)

    // for first load
    var config = {}
    config.metric = true
    config.imperial = false
    config.pace = false

    if (request != null) {
        config = request.configParams
    }

    // Base fields: include always

    fields
        .newDimension()
        .setId('id')
        .setName('ID')
        .setType(types.TEXT)
        .setDescription('The unique identifier of the activity')

    fields
        .newDimension()
        .setId('private')
        .setName('is Private')
        .setType(types.BOOLEAN)
        .setDescription('Activity markes as private')

    fields
        .newDimension()
        .setId('name')
        .setName('Name')
        .setType(types.TEXT)
        .setDescription('The name of the activity.')

    fields
        .newDimension()
        .setId('type')
        .setName('Activity type')
        .setType(types.TEXT)
        .setDescription('The type of the activity.')

    fields
        .newDimension()
        .setId('start_date_local')
        .setName('Start Time')
        .setType(types.YEAR_MONTH_DAY_HOUR)
        .setDescription('The local time at which the activity was started.')

    fields
        .newDimension()
        .setId('start_month_local')
        .setName('Month')
        .setType(types.MONTH)
        .setFormula('SUBSTR($start_date_local, 5, 2)')
        .setDescription('The month in which the activity was started.')

    fields
        .newDimension()
        .setId('start_latlng')
        .setName('Start Location')
        .setType(types.LATITUDE_LONGITUDE)
        .setDescription('The starting latitude and longitude')

    fields
        .newDimension()
        .setId('end_latlng')
        .setName('End Location')
        .setType(types.LATITUDE_LONGITUDE)
        .setDescription('The ending latitude and longitude')

    fields
        .newDimension()
        .setId('location_country')
        .setName('Country')
        .setType(types.COUNTRY)
        .setDescription('The country the activity took place in.')

    fields
        .newMetric()
        .setId('distance')
        .setName('Distance (m)')
        .setType(types.NUMBER)
        .setDescription("The activity's distance, in meters.")

    fields
        .newDimension()
        .setId('moving_time')
        .setName('Moving Time')
        .setType(types.DURATION)
        .setDescription("The activity's moving time, in seconds.")

    fields
        .newMetric()
        .setId('total_elevation_gain')
        .setName('Elevation Gain (m)')
        .setType(types.NUMBER)
        .setDescription("The activity's total elevation gain, in meters.")

    fields
        .newMetric()
        .setId('average_cadence')
        .setName('Cadence')
        .setType(types.NUMBER)
        .setDescription('The average cadence during the activity.')

    fields
        .newMetric()
        .setId('average_heartrate')
        .setName('Heartrate')
        .setType(types.NUMBER)
        .setDescription('Average heart rate for the activity.')

    // SOCIAL and other secondary fields

    fields
        .newDimension()
        .setId('commute')
        .setName('Is Commute')
        .setType(types.BOOLEAN)
        .setDescription('Whether this activity is a commute')

    fields
        .newMetric()
        .setId('flagged')
        .setName('Flagged')
        .setType(types.BOOLEAN)
        .setDescription('Ride was flagged')

    fields
        .newDimension()
        .setId('elapsed_time')
        .setName('Elapsed Time (s)')
        .setType(types.NUMBER)
        .setDescription("The activity's elapsed time, in seconds.")

    fields
        .newDimension()
        .setId('achievement_count')
        .setName('Achievement Count')
        .setType(types.NUMBER)
        .setDescription('Number of achievements per activity')

    fields
        .newDimension()
        .setId('kudos_count')
        .setName('Kudos')
        .setType(types.NUMBER)
        .setDescription('Number of kudos per activity')

    fields
        .newDimension()
        .setId('comment_count')
        .setName('Comments Count')
        .setType(types.NUMBER)
        .setDescription('Number of comments per activity')

    fields
        .newDimension()
        .setId('athlete_count')
        .setName('Athlete Count')
        .setType(types.NUMBER)
        .setDescription('Number of athelete parcticipating in this activity')

    fields
        .newDimension()
        .setId('photo_count')
        .setName('Photo Count')
        .setType(types.NUMBER)
        .setDescription('Number of photos uploaded for this activity')

    fields
        .newDimension()
        .setId('total_photo_count')
        .setName('Total Photo Count')
        .setType(types.NUMBER)
        .setDescription('Number of photos uploaded forever')

    fields
        .newDimension()
        .setId('average_watts')
        .setName('Watts / AVG')
        .setType(types.NUMBER)
        .setDescription('Average wattage for this activity')

    fields
        .newDimension()
        .setId('max_watts')
        .setName('Watts / MAX ')
        .setType(types.NUMBER)
        .setDescription('Max wattage for this activity')

    fields
        .newDimension()
        .setId('weighted_average_watts')
        .setName('Watts / AVG (weighted)')
        .setType(types.NUMBER)
        .setDescription('Average weighted wattage for this activity')

    fields
        .newDimension()
        .setId('device_watts')
        .setName('Watts / AVG (weighted)')
        .setType(types.BOOLEAN)
        .setDescription(
            'Whether the wattage was reported by a dedicated recording device'
        )

    fields
        .newDimension()
        .setId('elev_high')
        .setName('Highest elevation (m)')
        .setType(types.NUMBER)
        .setDescription("The activity's highest elevation, in meters")

    fields
        .newDimension()
        .setId('elev_low')
        .setName('Lowest elevation (m)')
        .setType(types.NUMBER)
        .setDescription("The activity's lowest elevation, in meters")

    fields
        .newDimension()
        .setId('suffer_score')
        .setName('Suffer Score')
        .setType(types.NUMBER)
        .setDescription('Strava Suffer Score')

    fields
        .newDimension()
        .setId('device_name')
        .setName('Device Name')
        .setType(types.NUMBER)
        .setDescription('Device which recorded the activity')

    fields
        .newDimension()
        .setId('pr_count')
        .setName('Personal Record Count')
        .setType(types.NUMBER)
        .setDescription('Personal Record Count for the activity')

    fields
        .newDimension()
        .setId('calories')
        .setName('Calories')
        .setType(types.NUMBER)
        .setDescription(
            'The number of kilocalories consumed during this activity'
        )

    //** Additional values in METRIC units */
    // if (config.metric == true) {
    fields = getMetricFields(fields)
    // }

    //** Additional values in IMPERIAL units */

    if (config.imperial == true) {
        fields
            .newMetric()
            .setId('distance_miles')
            .setName('Distance (mi)')
            .setType(types.NUMBER)
            .setDescription("The activity's distance, in miles.")
            .setFormula('$distance / 1609.34')

        fields
            .newMetric()
            .setId('total_elevation_gain_feet')
            .setName('Elevation Gain (feet)')
            .setType(types.NUMBER)
            .setDescription("The activity's total elevation gain, in feet.")
            .setFormula('$total_elevation_gain * 3.28084')

        fields
            .newMetric()
            .setId('max_speed_mph')
            .setName('Max Speed (mph)')
            .setType(types.NUMBER)
            .setAggregation(aggregations.NO_AGGREGATION)
            .setDescription("The activity's max speed, in miles per hour")
            .setFormula('$max_speed * 2.23694')

        fields
            .newMetric()
            .setId('average_speed_mph')
            .setName('Average Speed (mph)')
            .setType(types.NUMBER)
            .setAggregation(aggregations.AVG)
            .setFormula('$distance / CAST($moving_time AS NUMBER) * 2.23694')
            .setDescription(
                'The average speed across selected activities, in miles per hour'
            )

        fields
            .newMetric()
            .setId('average_temp_fahrenheit')
            .setName('Temperature (F)')
            .setType(types.NUMBER)
            .setDescription(
                'The average temperature during the activity, in Fahrenheit.'
            )
            .setFormula('$average_temp * 9 / 5 + 32')
    }

    //** Additional values for PACE */

    if (config.pace == true) {
        fields
            .newMetric()
            .setId('max_pace')
            .setName('Max Pace (min per km)')
            .setType(types.NUMBER)
            .setAggregation(aggregations.NO_AGGREGATION)
            .setFormula('$1000 / 60 / max_speed')
            .setDescription("The activity's max speed, minutes per kilometer")

        fields
            .newMetric()
            .setId('average_pace')
            .setName('Average Pace (min per km)')
            .setType(types.NUMBER)
            .setAggregation(aggregations.NO_AGGREGATION)
            .setFormula('$1000 / 60 / average_speed')
            .setDescription(
                "The activity's average speed, minutes per kilometer"
            )

        fields
            .newDimension()
            .setId('mile_pace')
            .setName('Mile Pace')
            .setType(types.DURATION)
            // There are 1609.34 meters in a mile.
            .setFormula('CAST($moving_time AS NUMBER) / $distance * 1609.34')
            .setDescription('1 mile pace.')

        fields
            .newDimension()
            .setId('5k_pace')
            .setName('5k Pace')
            .setType(types.DURATION)
            .setFormula('CAST($moving_time AS NUMBER) / $distance * 5000')
            .setDescription('5 kilometer pace.')

        fields
            .newDimension()
            .setId('10k_pace')
            .setName('10k Pace')
            .setType(types.DURATION)
            .setFormula('CAST($moving_time AS NUMBER) / $distance * 10000')
            .setDescription('10 kilometer pace.')

        fields
            .newDimension()
            .setId('half_marathon_pace')
            .setName('Half Marathon Pace')
            .setType(types.DURATION)
            .setFormula('CAST($moving_time AS NUMBER) / $distance * 21097.5')
            .setDescription('half marathon pace.')

        fields
            .newDimension()
            .setId('marathon_pace')
            .setName('Marathon Pace')
            .setType(types.DURATION)
            .setFormula('CAST($moving_time AS NUMBER) / $distance * 42195')
            .setDescription('marathon pace')
    }

    return fields
}
