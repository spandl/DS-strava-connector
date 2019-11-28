
### ID
id

### Name
name

### Type
type

### Start Time
$start_date_local

### Month Of Activity
month
.setFormula('SUBSTR($start_date_local, 5, 2)')

### Start Location
start_latlng

### End Location
end_latlng

### Country
location_country

### Distance (m)
distance
**NOTE** convert to km, leave decimals

### Moving Time
$moving_time

### Elevation Gain (m)
total_elevation_gain

### Cadence
average_cadence

### Heartrate
average_heartrate

### Temperature (C)
average_temp

### Max Speed (km/h)
max_speed_km
.setFormula('$max_speed / 1000 * 3600')

### Average Speed (km/h)
$average_speed_km
.setFormula('$average_speed / 1000 * 3600')

## Is Commute
commute

## New Fields
* elapsed_time
* achievement_count
* kudos_count
* comment_count
* athlete_count
* photo_count
* private
* average_watts
* weighted_average_watts
* device_watts
* max_watts
* elev_high
* elev_low
* suffer_score
* device_name
* pr_count
* total_photo_count
* calories

## Questionable
* workout_type
* trainer
* commute
* manual


## Nested Fields
* map.polyline
* map.summary_polyline
* gear.name
* gear.distance
* photos.primary

* segment_efforts.xxx

*****




## Optional Calculated Fields

### Temperature (F)
.setFormula('$average_temp * 9 / 5 + 32');

### Distance (mi)
.setFormula('$distance / 1609.34');

### Max Speed (ms/s)
$max_speed

### Average Speed (ms/s)
$average_speed

### Distance (feet)
distance_feet
.setFormula('$distance * 3.28084');

### Elevation (feet)
total_elevation_gain_feet
.setFormula('$total_elevation_gain * 3.28084');

### Max Speed (mph) // Average Speed (mph)
total_elevation_gain_feet
.setFormula('$max_speed * 2.23694');

### Mile Pace
.setFormula('CAST($moving_time AS NUMBER) / $distance * 1609.34')

### 5k Pace
.setFormula('CAST($moving_time AS NUMBER) / $distance * 5000')

### 10k Pace
.setFormula('CAST($moving_time AS NUMBER) / $distance * 10000')

### Half Marathon Pace
.setFormula('CAST($moving_time AS NUMBER) / $distance * 21097.5')

### Marathon Pace
.setFormula('CAST($moving_time AS NUMBER) / $distance * 42195')